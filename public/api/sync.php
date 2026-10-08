<?php
/**
 * Globo Tech ERP - High-Speed Cloud Data Synchronization Engine
 * Automatically synchronizes Master ERP database between PC and Mobile devices in real time.
 * Hostinger Apache + PHP Optimized.
 */

// 1. Set CORS and JSON Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Sync-Key, Cache-Control");
header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

header("Content-Type: application/json; charset=utf-8");

// 2. Prepare Secured Server Storage Directory
$dataDir = __DIR__ . '/data';
if (!file_exists($dataDir)) {
    @mkdir($dataDir, 0755, true);
}

// Protect data directory from direct browser downloads
$htaccessPath = $dataDir . '/.htaccess';
if (!file_exists($htaccessPath)) {
    @file_put_contents($htaccessPath, "<IfModule mod_authz_core.c>\n    Require all denied\n</IfModule>\n<IfModule !mod_authz_core.c>\n    Order deny,allow\n    Deny from all\n</IfModule>\n");
}

$dataFile = $dataDir . '/erp_cloud_master.json';
$metaFile = $dataDir . '/erp_cloud_meta.json';
$backupsDir = $dataDir . '/backups';

$action = isset($_GET['action']) ? trim($_GET['action']) : '';
if (!$action) {
    $action = ($_SERVER['REQUEST_METHOD'] === 'POST') ? 'push' : 'check';
}

// 3. ACTION: HEALTH CHECK
if ($action === 'health') {
    echo json_encode([
        'status' => 'ok',
        'engine' => 'GloboTech Cloud Sync API v1.0',
        'php' => phpversion(),
        'serverTime' => round(microtime(true) * 1000)
    ], JSON_UNESCAPED_UNICODE);
    exit();
}

// 4. ACTION: CHECK (Super-lightweight timestamp check, only few bytes)
if ($action === 'check') {
    if (file_exists($metaFile)) {
        $metaContent = @file_get_contents($metaFile);
        $meta = json_decode($metaContent, true);
        if ($meta && isset($meta['timestamp'])) {
            echo json_encode([
                'status' => 'ok',
                'hasData' => true,
                'timestamp' => $meta['timestamp'],
                'updatedAt' => isset($meta['updatedAt']) ? $meta['updatedAt'] : '',
                'updatedBy' => isset($meta['updatedBy']) ? $meta['updatedBy'] : 'ERP Client',
                'recordCounts' => isset($meta['recordCounts']) ? $meta['recordCounts'] : null
            ], JSON_UNESCAPED_UNICODE);
            exit();
        }
    }

    echo json_encode([
        'status' => 'ok',
        'hasData' => false,
        'timestamp' => 0
    ], JSON_UNESCAPED_UNICODE);
    exit();
}

// 5. ACTION: PULL (Fetch full cloud database)
if ($action === 'pull') {
    if (!file_exists($dataFile)) {
        echo json_encode([
            'status' => 'empty',
            'message' => 'No cloud database found yet. Please push data from PC first.',
            'timestamp' => 0
        ], JSON_UNESCAPED_UNICODE);
        exit();
    }

    $raw = @file_get_contents($dataFile);
    if (!$raw) {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Failed to read server database.'], JSON_UNESCAPED_UNICODE);
        exit();
    }

    echo $raw;
    exit();
}

// 6. ACTION: PUSH (Save new database from PC or Mobile)
if ($action === 'push') {
    $input = file_get_contents('php://input');
    if (!$input || strlen(trim($input)) < 20) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Empty or invalid sync payload.'], JSON_UNESCAPED_UNICODE);
        exit();
    }

    $payload = json_decode($input, true);
    if (!$payload || !isset($payload['data'])) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid ERP payload format.'], JSON_UNESCAPED_UNICODE);
        exit();
    }

    $nowMs = round(microtime(true) * 1000);
    $deviceLabel = isset($_GET['device']) ? trim($_GET['device']) : (isset($payload['meta']['device']) ? $payload['meta']['device'] : 'Device');

    // Update payload metadata
    if (!isset($payload['meta'])) {
        $payload['meta'] = [];
    }
    $payload['meta']['timestamp'] = $nowMs;
    $payload['meta']['lastPushedAt'] = date('c');
    $payload['meta']['lastPushedBy'] = $deviceLabel;

    $finalJson = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    
    // Save main data file atomically
    $tempFile = $dataFile . '.tmp.' . uniqid();
    if (@file_put_contents($tempFile, $finalJson) === false) {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Failed to write data file to server storage.'], JSON_UNESCAPED_UNICODE);
        exit();
    }
    @rename($tempFile, $dataFile);

    // Save lightweight meta file for fast checks
    $recordCounts = isset($payload['meta']['recordCounts']) ? $payload['meta']['recordCounts'] : null;
    $metaData = [
        'timestamp' => $nowMs,
        'updatedAt' => date('c'),
        'updatedBy' => $deviceLabel,
        'recordCounts' => $recordCounts,
        'sizeBytes' => strlen($finalJson)
    ];
    @file_put_contents($metaFile, json_encode($metaData, JSON_UNESCAPED_UNICODE));

    // Optional rolling backup (keep last 5 backups)
    if (!file_exists($backupsDir)) {
        @mkdir($backupsDir, 0755, true);
    }
    $backupFileName = $backupsDir . '/erp_backup_' . date('Ymd_His') . '.json';
    @copy($dataFile, $backupFileName);

    // Cleanup old backups keeping latest 5
    $backupFiles = glob($backupsDir . '/erp_backup_*.json');
    if ($backupFiles && count($backupFiles) > 5) {
        usort($backupFiles, function($a, $b) { return filemtime($b) - filemtime($a); });
        $filesToDelete = array_slice($backupFiles, 5);
        foreach ($filesToDelete as $f) {
            @unlink($f);
        }
    }

    echo json_encode([
        'status' => 'ok',
        'message' => 'Data successfully saved and synchronized to Cloud!',
        'timestamp' => $nowMs,
        'recordCounts' => $recordCounts
    ], JSON_UNESCAPED_UNICODE);
    exit();
}

http_response_code(400);
echo json_encode(['status' => 'error', 'message' => 'Unknown action.'], JSON_UNESCAPED_UNICODE);
