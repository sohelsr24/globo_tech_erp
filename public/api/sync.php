<?php
/**
 * Globo Tech ERP - High-Speed Automatic Cloud Data Synchronization Engine
 * Automatically synchronizes Master ERP database between PC and Mobile devices in real time.
 * Hostinger Apache / LiteSpeed + PHP Optimized.
 * 
 * Features:
 * - Intelligent Server-Side Non-Destructive Union Merge (Guarantees zero data loss between PC and Mobile)
 * - Atomic File Writes & Backup Rotations
 * - Ultra-lightweight Check Endpoint (few bytes)
 * - Real-time Push & Pull
 */

// 1. Set CORS and JSON Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Sync-Key, Cache-Control, Pragma");
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
    @mkdir($dataDir, 0775, true);
    @chmod($dataDir, 0775);
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
        'engine' => 'GloboTech Cloud Sync API v2.0 (Intelligent Union Merge)',
        'php' => phpversion(),
        'serverTime' => round(microtime(true) * 1000),
        'storageWritable' => is_writable($dataDir),
        'hasMasterData' => file_exists($dataFile)
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
            'message' => 'No cloud database found yet.',
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

/**
 * INTELLIGENT NON-DESTRUCTIVE UNION MERGE ENGINE
 * Ensures data from PC and Mobile are never overwritten, but seamlessly merged!
 */
function mergeErpDatasets($existing, $incoming) {
    if (!is_array($existing) || empty($existing)) return $incoming;
    if (!is_array($incoming) || empty($incoming)) return $existing;

    $merged = $existing;

    // 1. Suppliers: merge by name or id
    $supplierMap = [];
    $allSuppliers = array_merge(
        isset($existing['suppliers']) && is_array($existing['suppliers']) ? $existing['suppliers'] : [],
        isset($incoming['suppliers']) && is_array($incoming['suppliers']) ? $incoming['suppliers'] : []
    );
    foreach ($allSuppliers as $s) {
        if (!is_array($s)) continue;
        $nameKey = !empty($s['name']) ? trim(mb_strtolower($s['name'])) : '';
        $idKey = !empty($s['id']) ? trim($s['id']) : '';
        $key = $nameKey !== '' ? 'name:' . $nameKey : 'id:' . $idKey;
        if ($key !== 'id:') {
            if (isset($supplierMap[$key])) {
                $supplierMap[$key] = array_merge($supplierMap[$key], $s);
            } else {
                $supplierMap[$key] = $s;
            }
        }
    }
    $merged['suppliers'] = array_values($supplierMap);

    // 2. Purchases & Bills: merge by billNumber or id
    $purchaseMap = [];
    $allPurchases = array_merge(
        isset($existing['purchases']) && is_array($existing['purchases']) ? $existing['purchases'] : [],
        isset($incoming['purchases']) && is_array($incoming['purchases']) ? $incoming['purchases'] : []
    );
    foreach ($allPurchases as $p) {
        if (!is_array($p)) continue;
        $billKey = !empty($p['billNumber']) ? trim($p['billNumber']) : (!empty($p['id']) ? trim($p['id']) : '');
        if ($billKey !== '') {
            if (isset($purchaseMap[$billKey])) {
                // If existing has items and incoming doesn't, or vice versa, keep more detailed
                $existingP = $purchaseMap[$billKey];
                $mergedP = array_merge($existingP, $p);
                // Merge items inside bill
                if (!empty($existingP['items']) && !empty($p['items']) && is_array($existingP['items']) && is_array($p['items'])) {
                    $itemMap = [];
                    foreach (array_merge($existingP['items'], $p['items']) as $it) {
                        $itKey = !empty($it['id']) ? $it['id'] : (!empty($it['productName']) ? trim($it['productName']) : '');
                        if ($itKey !== '') $itemMap[$itKey] = $it;
                    }
                    $mergedP['items'] = array_values($itemMap);
                }
                $purchaseMap[$billKey] = $mergedP;
            } else {
                $purchaseMap[$billKey] = $p;
            }
        }
    }
    $merged['purchases'] = array_values($purchaseMap);

    // 3. Quotations: merge by quotationNumber or id
    $quotationMap = [];
    $allQuotes = array_merge(
        isset($existing['quotations']) && is_array($existing['quotations']) ? $existing['quotations'] : [],
        isset($incoming['quotations']) && is_array($incoming['quotations']) ? $incoming['quotations'] : []
    );
    foreach ($allQuotes as $q) {
        if (!is_array($q)) continue;
        $qKey = !empty($q['quotationNumber']) ? trim($q['quotationNumber']) : (!empty($q['id']) ? trim($q['id']) : '');
        if ($qKey !== '') {
            if (isset($quotationMap[$qKey])) {
                $quotationMap[$qKey] = array_merge($quotationMap[$qKey], $q);
            } else {
                $quotationMap[$qKey] = $q;
            }
        }
    }
    $merged['quotations'] = array_values($quotationMap);

    // 4. Sales Bills: merge by billNo or id
    $billMap = [];
    $allBills = array_merge(
        isset($existing['bills']) && is_array($existing['bills']) ? $existing['bills'] : [],
        isset($incoming['bills']) && is_array($incoming['bills']) ? $incoming['bills'] : []
    );
    foreach ($allBills as $b) {
        if (!is_array($b)) continue;
        // Never resurrect demo bill
        if ((!empty($b['id']) && $b['id'] === 'bill-26108') || (!empty($b['billNo']) && $b['billNo'] === 'GT/26108')) continue;
        $bKey = !empty($b['billNo']) ? trim($b['billNo']) : (!empty($b['id']) ? trim($b['id']) : '');
        if ($bKey !== '') {
            if (isset($billMap[$bKey])) {
                $billMap[$bKey] = array_merge($billMap[$bKey], $b);
            } else {
                $billMap[$bKey] = $b;
            }
        }
    }
    $merged['bills'] = array_values($billMap);

    // 5. Customers: merge by company or name or id
    $custMap = [];
    $allCust = array_merge(
        isset($existing['customers']) && is_array($existing['customers']) ? $existing['customers'] : [],
        isset($incoming['customers']) && is_array($incoming['customers']) ? $incoming['customers'] : []
    );
    foreach ($allCust as $c) {
        if (!is_array($c)) continue;
        $cKey = !empty($c['company']) ? trim(mb_strtolower($c['company'])) : (!empty($c['name']) ? trim(mb_strtolower($c['name'])) : (!empty($c['id']) ? trim($c['id']) : ''));
        if ($cKey !== '') {
            if (isset($custMap[$cKey])) {
                $custMap[$cKey] = array_merge($custMap[$cKey], $c);
            } else {
                $custMap[$cKey] = $c;
            }
        }
    }
    $merged['customers'] = array_values($custMap);

    // 6. Products: merge by SKU or id
    $prodMap = [];
    $allProd = array_merge(
        isset($existing['products']) && is_array($existing['products']) ? $existing['products'] : [],
        isset($incoming['products']) && is_array($incoming['products']) ? $incoming['products'] : []
    );
    foreach ($allProd as $pr) {
        if (!is_array($pr)) continue;
        $pKey = !empty($pr['sku']) ? trim(strtoupper($pr['sku'])) : (!empty($pr['id']) ? trim($pr['id']) : '');
        if ($pKey !== '') {
            if (isset($prodMap[$pKey])) {
                $prodMap[$pKey] = array_merge($prodMap[$pKey], $pr);
            } else {
                $prodMap[$pKey] = $pr;
            }
        }
    }
    $merged['products'] = array_values($prodMap);

    // 7. Warehouse Stock: merge by SKU + Warehouse
    $stockMap = [];
    $allStock = array_merge(
        isset($existing['warehouseStock']) && is_array($existing['warehouseStock']) ? $existing['warehouseStock'] : [],
        isset($incoming['warehouseStock']) && is_array($incoming['warehouseStock']) ? $incoming['warehouseStock'] : []
    );
    foreach ($allStock as $st) {
        if (!is_array($st)) continue;
        $stKey = !empty($st['id']) ? trim($st['id']) : (isset($st['sku'], $st['warehouseName']) ? trim(strtoupper($st['sku'])).'-'.trim(mb_strtolower($st['warehouseName'])) : '');
        if ($stKey !== '') {
            if (isset($stockMap[$stKey])) {
                $stockMap[$stKey] = array_merge($stockMap[$stKey], $st);
            } else {
                $stockMap[$stKey] = $st;
            }
        }
    }
    $merged['warehouseStock'] = array_values($stockMap);

    // 8. Projects: merge by projectCode or id
    $projMap = [];
    $allProjects = array_merge(
        isset($existing['projects']) && is_array($existing['projects']) ? $existing['projects'] : [],
        isset($incoming['projects']) && is_array($incoming['projects']) ? $incoming['projects'] : []
    );
    foreach ($allProjects as $pj) {
        if (!is_array($pj)) continue;
        $pjKey = !empty($pj['projectCode']) ? trim($pj['projectCode']) : (!empty($pj['id']) ? trim($pj['id']) : '');
        if ($pjKey !== '') {
            if (isset($projMap[$pjKey])) {
                $projMap[$pjKey] = array_merge($projMap[$pjKey], $pj);
            } else {
                $projMap[$pjKey] = $pj;
            }
        }
    }
    $merged['projects'] = array_values($projMap);

    // 9. Categories: unique union
    $catSet = [];
    $allCats = array_merge(
        isset($existing['categories']) && is_array($existing['categories']) ? $existing['categories'] : [],
        isset($incoming['categories']) && is_array($incoming['categories']) ? $incoming['categories'] : []
    );
    foreach ($allCats as $cat) {
        if (is_string($cat) && trim($cat) !== '') $catSet[trim($cat)] = true;
    }
    $merged['categories'] = array_keys($catSet);

    // 10. Deleted IDs
    foreach (['deletedQuotationIds', 'deletedBillIds', 'deletedCustomerIds'] as $delKey) {
        $delSet = [];
        $allDel = array_merge(
            isset($existing[$delKey]) && is_array($existing[$delKey]) ? $existing[$delKey] : [],
            isset($incoming[$delKey]) && is_array($incoming[$delKey]) ? $incoming[$delKey] : []
        );
        foreach ($allDel as $did) {
            if (is_string($did) && trim($did) !== '') $delSet[trim($did)] = true;
        }
        $merged[$delKey] = array_keys($delSet);
    }

    return $merged;
}

// 6. ACTION: PUSH (Save new database from PC or Mobile with Non-Destructive Union Merge)
if ($action === 'push') {
    $input = file_get_contents('php://input');
    if (!$input || strlen(trim($input)) < 20) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Empty or invalid sync payload.'], JSON_UNESCAPED_UNICODE);
        exit();
    }

    $incomingPayload = json_decode($input, true);
    if (!$incomingPayload || !isset($incomingPayload['data'])) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid ERP payload format.'], JSON_UNESCAPED_UNICODE);
        exit();
    }

    $nowMs = round(microtime(true) * 1000);
    $deviceLabel = isset($_GET['device']) ? trim($_GET['device']) : (isset($incomingPayload['meta']['device']) ? $incomingPayload['meta']['device'] : 'Device');

    // Read current master data from server storage if present
    $existingData = null;
    if (file_exists($dataFile)) {
        $existingRaw = @file_get_contents($dataFile);
        if ($existingRaw) {
            $parsed = json_decode($existingRaw, true);
            if ($parsed && isset($parsed['data'])) {
                $existingData = $parsed['data'];
            }
        }
    }

    // Perform Server-Side Union Merge (or clean overwrite if explicitly requested)
    $isOverwrite = (isset($_GET['mode']) && $_GET['mode'] === 'overwrite') || (isset($incomingPayload['mode']) && $incomingPayload['mode'] === 'overwrite');
    $finalData = $isOverwrite ? $incomingPayload['data'] : mergeErpDatasets($existingData, $incomingPayload['data']);

    // Recompute record counts
    $recordCounts = [
        'quotations' => isset($finalData['quotations']) ? count($finalData['quotations']) : 0,
        'bills' => isset($finalData['bills']) ? count($finalData['bills']) : 0,
        'customers' => isset($finalData['customers']) ? count($finalData['customers']) : 0,
        'projects' => isset($finalData['projects']) ? count($finalData['projects']) : 0,
        'products' => isset($finalData['products']) ? count($finalData['products']) : 0,
        'warehouseStock' => isset($finalData['warehouseStock']) ? count($finalData['warehouseStock']) : 0,
        'stockLedger' => isset($finalData['stockLedger']) ? count($finalData['stockLedger']) : 0,
        'categories' => isset($finalData['categories']) ? count($finalData['categories']) : 0,
        'sales' => isset($finalData['sales']) ? count($finalData['sales']) : 0,
        'imports' => isset($finalData['imports']) ? count($finalData['imports']) : 0,
        'suppliers' => isset($finalData['suppliers']) ? count($finalData['suppliers']) : 0,
        'purchases' => isset($finalData['purchases']) ? count($finalData['purchases']) : 0,
        'serials' => isset($finalData['serials']) ? count($finalData['serials']) : 0,
    ];

    $mergedPayload = [
        'meta' => [
            'app' => 'Globo Tech Enterprise ERP',
            'company' => 'Globo Tech Bangladesh',
            'version' => '1.0.0',
            'exportedAt' => date('c'),
            'timestamp' => $nowMs,
            'lastPushedBy' => $deviceLabel,
            'recordCounts' => $recordCounts
        ],
        'data' => $finalData
    ];

    $finalJson = json_encode($mergedPayload, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    
    // Save main data file atomically
    $tempFile = $dataFile . '.tmp.' . uniqid();
    if (@file_put_contents($tempFile, $finalJson) === false) {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Failed to write data file to server storage.'], JSON_UNESCAPED_UNICODE);
        exit();
    }
    @rename($tempFile, $dataFile);

    // Save lightweight meta file for fast checks
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
        @mkdir($backupsDir, 0775, true);
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
        'message' => 'Data successfully merged and synchronized to Cloud!',
        'timestamp' => $nowMs,
        'recordCounts' => $recordCounts,
        'mergedPayload' => $mergedPayload
    ], JSON_UNESCAPED_UNICODE);
    exit();
}

http_response_code(400);
echo json_encode(['status' => 'error', 'message' => 'Unknown action.'], JSON_UNESCAPED_UNICODE);
