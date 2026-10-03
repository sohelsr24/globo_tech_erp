(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_modules_StockView_tsx_347d73._.js", {

"[project]/src/components/modules/StockView.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StockView": ()=>StockView
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$warehouse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Warehouse$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/warehouse.js [app-client] (ecmascript) <export default as Warehouse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right-left.js [app-client] (ecmascript) <export default as ArrowRightLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageCheck$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/package-check.js [app-client] (ecmascript) <export default as PackageCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle-minus.js [app-client] (ecmascript) <export default as MinusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/formatters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/productsStorage.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
const WAREHOUSE_OPTIONS = [
    'Main Warehouse (Tejgaon)',
    'Project Store (Site Depot)',
    'Office Store (Banani)',
    'Showroom (Gulshan)',
    'Chittagong Regional Depot'
];
function StockView({ globalSearchQuery } = {}) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('inventory');
    const [stockViewMode, setStockViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('cards');
    // Automatically default to table view on desktop screens (>=1024px)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
            setStockViewMode('table');
        }
    }, []);
    // Storage state
    const [warehouseStock, setWarehouseStock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredWarehouseStock"])());
    const [ledger, setLedger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredStockLedger"])());
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredProducts"])());
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredCategories"])());
    const [isAddingCustomCategory, setIsAddingCustomCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newCategoryInput, setNewCategoryInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Search & Filter state
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(globalSearchQuery || '');
    const [selectedWarehouseFilter, setSelectedWarehouseFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ALL');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (globalSearchQuery !== undefined && globalSearchQuery !== searchQuery) {
            setSearchQuery(globalSearchQuery);
        }
    }, [
        globalSearchQuery
    ]);
    // Modals state
    const [isAddProductModalOpen, setIsAddProductModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGrnModalOpen, setIsGrnModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTransferModalOpen, setIsTransferModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // New Product Modal Form State
    const [newProductForm, setNewProductForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        sku: '',
        category: 'CCTV & Surveillance',
        brand: 'Hikvision',
        unit: 'pcs',
        warehouseName: 'Main Warehouse (Tejgaon)',
        initialStock: 20,
        minStock: 10,
        unitLandedCost: 10000,
        purchasePriceCNY: 500,
        retailPrice: 15000,
        wholesalePrice: 13500,
        projectPrice: 12500,
        dealerPrice: 12000,
        isSerialTracked: true
    });
    // GRN (Goods Receiving) State
    const [grnSelectedProductId, setGrnSelectedProductId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [grnWarehouse, setGrnWarehouse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Main Warehouse (Tejgaon)');
    const [grnQty, setGrnQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [grnLandedCost, setGrnLandedCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10000);
    const [grnRefDoc, setGrnRefDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [grnNotes, setGrnNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Transfer State
    const [transferFromWarehouse, setTransferFromWarehouse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Main Warehouse (Tejgaon)');
    const [transferToWarehouse, setTransferToWarehouse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Project Store (Site Depot)');
    const [transferStockItemId, setTransferStockItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [transferQty, setTransferQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [transferNotes, setTransferNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Stock Decrease / Deduction / Adjustment State
    const [isDecreaseModalOpen, setIsDecreaseModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [decreaseWarehouse, setDecreaseWarehouse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Main Warehouse (Tejgaon)');
    const [decreaseStockItemId, setDecreaseStockItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [decreaseQty, setDecreaseQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [decreaseReason, setDecreaseReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('SALES_DELIVERY');
    const [decreaseRefDoc, setDecreaseRefDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [decreaseNotes, setDecreaseNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Edit Stock Item State
    const [isEditStockModalOpen, setIsEditStockModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingStockItem, setEditingStockItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editWarehouseName, setEditWarehouseName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Main Warehouse (Tejgaon)');
    const [editProductName, setEditProductName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editSku, setEditSku] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editAvailable, setEditAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [editReserved, setEditReserved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [editDamaged, setEditDamaged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [editUnitLandedCost, setEditUnitLandedCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [editAuditReason, setEditAuditReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editSyncProductCatalog, setEditSyncProductCatalog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Dedicated Product Name & SKU Quick Edit Modal State
    const [isNameSkuModalOpen, setIsNameSkuModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nameSkuEditingItem, setNameSkuEditingItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [nameSkuNewName, setNameSkuNewName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [nameSkuNewSku, setNameSkuNewSku] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [nameSkuUpdateAllWarehouses, setNameSkuUpdateAllWarehouses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Success Toast state
    const [toastMsg, setToastMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const showToast = (msg)=>{
        setToastMsg(msg);
        setTimeout(()=>setToastMsg(null), 4000);
    };
    // Load from persistent localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadedStock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredWarehouseStock"])();
        const loadedLedger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredStockLedger"])();
        const loadedProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredProducts"])();
        const loadedCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredCategories"])();
        setWarehouseStock(loadedStock);
        setLedger(loadedLedger);
        setProducts(loadedProducts);
        setCategories(loadedCategories);
        if (loadedProducts.length > 0) {
            setGrnSelectedProductId(loadedProducts[0].id);
            setGrnLandedCost(loadedProducts[0].currentLandedCost || 10000);
        }
        // Listen for storage events across components
        const handleStockUpdate = ()=>setWarehouseStock((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredWarehouseStock"])());
        const handleLedgerUpdate = ()=>setLedger((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredStockLedger"])());
        const handleProductsUpdate = ()=>setProducts((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredProducts"])());
        const handleCategoriesUpdate = ()=>setCategories((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredCategories"])());
        window.addEventListener('globotech_stock_updated', handleStockUpdate);
        window.addEventListener('globotech_ledger_updated', handleLedgerUpdate);
        window.addEventListener('globotech_products_updated', handleProductsUpdate);
        window.addEventListener('globotech_categories_updated', handleCategoriesUpdate);
        return ()=>{
            window.removeEventListener('globotech_stock_updated', handleStockUpdate);
            window.removeEventListener('globotech_ledger_updated', handleLedgerUpdate);
            window.removeEventListener('globotech_products_updated', handleProductsUpdate);
            window.removeEventListener('globotech_categories_updated', handleCategoriesUpdate);
        };
    }, []);
    // Helper to add custom category
    const handleCreateNewCategory = (catName)=>{
        const target = (catName || newCategoryInput).trim();
        if (!target) return;
        if (!categories.includes(target)) {
            const updated = [
                ...categories,
                target
            ];
            setCategories(updated);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredCategories"])(updated);
        }
        setNewProductForm((prev)=>({
                ...prev,
                category: target
            }));
        setNewCategoryInput('');
        setIsAddingCustomCategory(false);
        showToast(`✓ Category "${target}" added!`);
    };
    // Update GRN landed cost when product selection changes
    const handleGrnProductChange = (productId)=>{
        setGrnSelectedProductId(productId);
        const prod = products.find((p)=>p.id === productId);
        if (prod) {
            setGrnLandedCost(prod.currentLandedCost);
        }
    };
    // 1. ADD NEW PRODUCT TO WAREHOUSE STOCK
    const handleSaveNewProduct = ()=>{
        if (!newProductForm.name.trim() || !newProductForm.sku.trim()) {
            alert('Please enter Product Name and SKU Code.');
            return;
        }
        const initialStockNum = Math.max(0, Number(newProductForm.initialStock) || 0);
        const landedCostNum = Math.max(0, Number(newProductForm.unitLandedCost) || 0);
        const minStockNum = Math.max(0, Number(newProductForm.minStock) || 5);
        // Create or update Product in catalog
        const newProdItem = {
            id: `PRD-${Date.now().toString().slice(-5)}`,
            sku: newProductForm.sku.trim().toUpperCase(),
            barcode: `880${Math.floor(100000000 + Math.random() * 900000000)}`,
            name: newProductForm.name.trim(),
            category: newProductForm.category,
            brand: newProductForm.brand.trim() || 'Globo Tech',
            unit: newProductForm.unit.trim() || 'pcs',
            stock: initialStockNum,
            minStock: minStockNum,
            purchasePriceCNY: Number(newProductForm.purchasePriceCNY) || 0,
            currentLandedCost: landedCostNum,
            retailPrice: Number(newProductForm.retailPrice) || Math.round(landedCostNum * 1.5),
            wholesalePrice: Number(newProductForm.wholesalePrice) || Math.round(landedCostNum * 1.35),
            projectPrice: Number(newProductForm.projectPrice) || Math.round(landedCostNum * 1.25),
            dealerPrice: Number(newProductForm.dealerPrice) || Math.round(landedCostNum * 1.2),
            isSerialTracked: newProductForm.isSerialTracked
        };
        const updatedProducts = [
            newProdItem,
            ...products.filter((p)=>p.sku !== newProdItem.sku)
        ];
        setProducts(updatedProducts);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredProducts"])(updatedProducts);
        // Create or update Warehouse Stock record
        const existingStockIndex = warehouseStock.findIndex((s)=>s.warehouseName === newProductForm.warehouseName && s.sku === newProdItem.sku);
        let updatedStock = [];
        if (existingStockIndex >= 0) {
            updatedStock = warehouseStock.map((s, idx)=>idx === existingStockIndex ? {
                    ...s,
                    available: s.available + initialStockNum,
                    unitLandedCost: landedCostNum > 0 ? landedCostNum : s.unitLandedCost
                } : s);
        } else {
            const newStockItem = {
                id: `st-${Date.now().toString().slice(-5)}`,
                warehouseName: newProductForm.warehouseName,
                productName: newProdItem.name,
                sku: newProdItem.sku,
                available: initialStockNum,
                reserved: 0,
                damaged: 0,
                unitLandedCost: landedCostNum
            };
            updatedStock = [
                newStockItem,
                ...warehouseStock
            ];
        }
        setWarehouseStock(updatedStock);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredWarehouseStock"])(updatedStock);
        // If initial stock was provided, create Opening Stock ledger record
        if (initialStockNum > 0) {
            const newLedgerEntry = {
                id: `led-${Date.now()}`,
                timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
                productName: newProdItem.name,
                warehouseName: newProductForm.warehouseName,
                movementType: 'OPENING_STOCK',
                quantityDelta: initialStockNum,
                balanceAfter: initialStockNum,
                unitLandedCost: landedCostNum,
                referenceId: `INIT-${Date.now().toString().slice(-4)}`,
                reasonNotes: `Initial opening inventory balance for ${newProdItem.name}`
            };
            const updatedLedger = [
                newLedgerEntry,
                ...ledger
            ];
            setLedger(updatedLedger);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredStockLedger"])(updatedLedger);
        }
        // Also save category to global list if new
        const catName = newProductForm.category.trim();
        if (catName && !categories.includes(catName)) {
            const updatedCats = [
                ...categories,
                catName
            ];
            setCategories(updatedCats);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredCategories"])(updatedCats);
        }
        setIsAddProductModalOpen(false);
        showToast(`✓ "${newProdItem.name}" successfully added to ${newProductForm.warehouseName}!`);
        // Reset form
        setNewProductForm({
            name: '',
            sku: '',
            category: 'CCTV & Surveillance',
            brand: 'Hikvision',
            unit: 'pcs',
            warehouseName: 'Main Warehouse (Tejgaon)',
            initialStock: 20,
            minStock: 10,
            unitLandedCost: 10000,
            purchasePriceCNY: 500,
            retailPrice: 15000,
            wholesalePrice: 13500,
            projectPrice: 12500,
            dealerPrice: 12000,
            isSerialTracked: true
        });
    };
    // 2. RECEIVE GOODS (GRN)
    const handleReceiveGrn = ()=>{
        if (grnQty <= 0) {
            alert('Please enter a valid quantity greater than 0.');
            return;
        }
        const selectedProduct = products.find((p)=>p.id === grnSelectedProductId);
        if (!selectedProduct) {
            alert('Please select a product to receive.');
            return;
        }
        const targetSku = selectedProduct.sku;
        const targetItem = warehouseStock.find((s)=>s.warehouseName === grnWarehouse && s.sku === targetSku);
        let updatedStock = [];
        let balanceAfter = grnQty;
        if (targetItem) {
            balanceAfter = targetItem.available + grnQty;
            updatedStock = warehouseStock.map((s)=>s.id === targetItem.id ? {
                    ...s,
                    available: balanceAfter,
                    unitLandedCost: grnLandedCost > 0 ? grnLandedCost : s.unitLandedCost
                } : s);
        } else {
            const newStockItem = {
                id: `st-${Date.now().toString().slice(-5)}`,
                warehouseName: grnWarehouse,
                productName: selectedProduct.name,
                sku: selectedProduct.sku,
                available: grnQty,
                reserved: 0,
                damaged: 0,
                unitLandedCost: grnLandedCost > 0 ? grnLandedCost : selectedProduct.currentLandedCost
            };
            updatedStock = [
                newStockItem,
                ...warehouseStock
            ];
        }
        setWarehouseStock(updatedStock);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredWarehouseStock"])(updatedStock);
        // Update product total stock count in catalog
        const updatedProducts = products.map((p)=>p.id === selectedProduct.id ? {
                ...p,
                stock: (p.stock || 0) + grnQty,
                currentLandedCost: grnLandedCost > 0 ? grnLandedCost : p.currentLandedCost
            } : p);
        setProducts(updatedProducts);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredProducts"])(updatedProducts);
        // Add immutable ledger entry
        const newEntry = {
            id: `led-${Date.now()}`,
            timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
            productName: selectedProduct.name,
            warehouseName: grnWarehouse,
            movementType: 'PURCHASE_GRN',
            quantityDelta: grnQty,
            balanceAfter,
            unitLandedCost: grnLandedCost > 0 ? grnLandedCost : selectedProduct.currentLandedCost,
            referenceId: grnRefDoc.trim() || `GRN-2026-${Math.floor(1000 + Math.random() * 9000)}`,
            reasonNotes: grnNotes.trim() || `Goods Received Note processed into ${grnWarehouse}`
        };
        const updatedLedger = [
            newEntry,
            ...ledger
        ];
        setLedger(updatedLedger);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredStockLedger"])(updatedLedger);
        setIsGrnModalOpen(false);
        setGrnNotes('');
        setGrnRefDoc('');
        showToast(`✓ Received +${grnQty} ${selectedProduct.unit} of ${selectedProduct.name} in ${grnWarehouse}!`);
    };
    // 3. INTER-WAREHOUSE STOCK TRANSFER
    const handleStockTransfer = ()=>{
        if (transferFromWarehouse === transferToWarehouse) {
            alert('Source and destination warehouses must be different.');
            return;
        }
        if (transferQty <= 0) {
            alert('Please enter a valid transfer quantity.');
            return;
        }
        const sourceStock = warehouseStock.find((s)=>s.id === transferStockItemId && s.warehouseName === transferFromWarehouse);
        if (!sourceStock) {
            alert('Selected item not found in origin warehouse.');
            return;
        }
        if (sourceStock.available < transferQty) {
            alert(`Insufficient stock. Only ${sourceStock.available} available to transfer.`);
            return;
        }
        // Deduct from source
        const updatedSourceQty = sourceStock.available - transferQty;
        // Add to destination
        const destStock = warehouseStock.find((s)=>s.warehouseName === transferToWarehouse && s.sku === sourceStock.sku);
        let nextStock = warehouseStock.map((s)=>s.id === sourceStock.id ? {
                ...s,
                available: updatedSourceQty
            } : s);
        let destBalanceAfter = transferQty;
        if (destStock) {
            destBalanceAfter = destStock.available + transferQty;
            nextStock = nextStock.map((s)=>s.id === destStock.id ? {
                    ...s,
                    available: destBalanceAfter
                } : s);
        } else {
            const newDestItem = {
                id: `st-${Date.now().toString().slice(-5)}`,
                warehouseName: transferToWarehouse,
                productName: sourceStock.productName,
                sku: sourceStock.sku,
                available: transferQty,
                reserved: 0,
                damaged: 0,
                unitLandedCost: sourceStock.unitLandedCost
            };
            nextStock.push(newDestItem);
        }
        setWarehouseStock(nextStock);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredWarehouseStock"])(nextStock);
        // Ledger records (OUT and IN)
        const transferRef = `TRF-2026-${Math.floor(1000 + Math.random() * 9000)}`;
        const nowTime = new Date().toISOString().slice(0, 16).replace('T', ' ');
        const outEntry = {
            id: `led-${Date.now()}-out`,
            timestamp: nowTime,
            productName: sourceStock.productName,
            warehouseName: transferFromWarehouse,
            movementType: 'TRANSFER_OUT',
            quantityDelta: -transferQty,
            balanceAfter: updatedSourceQty,
            unitLandedCost: sourceStock.unitLandedCost,
            referenceId: transferRef,
            reasonNotes: `Transferred to ${transferToWarehouse}. ${transferNotes}`.trim()
        };
        const inEntry = {
            id: `led-${Date.now()}-in`,
            timestamp: nowTime,
            productName: sourceStock.productName,
            warehouseName: transferToWarehouse,
            movementType: 'TRANSFER_IN',
            quantityDelta: transferQty,
            balanceAfter: destBalanceAfter,
            unitLandedCost: sourceStock.unitLandedCost,
            referenceId: transferRef,
            reasonNotes: `Transferred from ${transferFromWarehouse}. ${transferNotes}`.trim()
        };
        const updatedLedger = [
            outEntry,
            inEntry,
            ...ledger
        ];
        setLedger(updatedLedger);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredStockLedger"])(updatedLedger);
        setIsTransferModalOpen(false);
        setTransferNotes('');
        showToast(`✓ Transferred ${transferQty} pcs of ${sourceStock.productName} to ${transferToWarehouse}!`);
    };
    // 4. STOCK DECREASE / DEDUCTION / ADJUSTMENT
    const handleOpenDecreaseModal = (stockItem)=>{
        setDecreaseWarehouse(stockItem.warehouseName);
        setDecreaseStockItemId(stockItem.id);
        setDecreaseQty(1);
        setDecreaseReason('SALES_DELIVERY');
        setDecreaseRefDoc('');
        setDecreaseNotes('');
        setIsDecreaseModalOpen(true);
    };
    const handleDecreaseStockSubmit = (e)=>{
        e.preventDefault();
        if (!decreaseStockItemId) {
            alert('Please select a product to decrease stock.');
            return;
        }
        const targetStock = warehouseStock.find((s)=>s.id === decreaseStockItemId);
        if (!targetStock) {
            alert('Selected stock item not found.');
            return;
        }
        const qtyToDeduct = Math.floor(Number(decreaseQty));
        if (isNaN(qtyToDeduct) || qtyToDeduct <= 0) {
            alert('Please enter a valid deduction quantity greater than 0.');
            return;
        }
        if (qtyToDeduct > targetStock.available) {
            alert(`Insufficient available stock! Only ${targetStock.available} pcs available in ${targetStock.warehouseName}.`);
            return;
        }
        const newAvailable = targetStock.available - qtyToDeduct;
        const isDamagedRecord = decreaseReason === 'DAMAGED_RECORD';
        const newDamaged = isDamagedRecord ? (targetStock.damaged || 0) + qtyToDeduct : targetStock.damaged;
        // 1. Update warehouseStock
        const updatedStock = warehouseStock.map((s)=>s.id === targetStock.id ? {
                ...s,
                available: newAvailable,
                damaged: newDamaged
            } : s);
        setWarehouseStock(updatedStock);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredWarehouseStock"])(updatedStock);
        // 2. Update global catalog stock count in products
        const updatedProducts = products.map((p)=>p.sku === targetStock.sku ? {
                ...p,
                stock: Math.max(0, (p.stock || 0) - qtyToDeduct)
            } : p);
        setProducts(updatedProducts);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredProducts"])(updatedProducts);
        // 3. Create Audit Stock Ledger Record
        const reasonLabels = {
            SALES_DELIVERY: 'Sales / Client Delivery (কাস্টমার ডেলিভারি)',
            DAMAGED_RECORD: 'Damaged Stock Hold (ড্যামেজ মাল সংরক্ষণ)',
            DAMAGED_WRITE_OFF: 'Damaged Write-Off (নষ্ট মাল বাতিল)',
            SAMPLE_ISSUE: 'Sample / Testing Issue (স্যাম্পল বা টেস্টে প্রদান)',
            INTERNAL_PROJECT: 'Project Site Consumption (সাইট প্রজেক্টে ব্যবহার)',
            AUDIT_CORRECTION: 'Audit Count Correction (স্টক গণনা সংশোধন)',
            RETURN_SUPPLIER: 'Return to Supplier (সাপ্লায়ারকে ফেরত প্রদান)'
        };
        const reasonLabel = reasonLabels[decreaseReason] || decreaseReason;
        const generatedRef = decreaseRefDoc.trim() || `OUT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
        const newEntry = {
            id: `led-${Date.now()}`,
            timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
            productName: targetStock.productName,
            warehouseName: targetStock.warehouseName,
            movementType: decreaseReason,
            quantityDelta: -qtyToDeduct,
            balanceAfter: newAvailable,
            unitLandedCost: targetStock.unitLandedCost,
            referenceId: generatedRef,
            reasonNotes: `${reasonLabel}${decreaseNotes.trim() ? `: ${decreaseNotes.trim()}` : ''}`
        };
        const updatedLedger = [
            newEntry,
            ...ledger
        ];
        setLedger(updatedLedger);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredStockLedger"])(updatedLedger);
        // 4. Reset & Notify
        setIsDecreaseModalOpen(false);
        setDecreaseNotes('');
        setDecreaseRefDoc('');
        setDecreaseQty(1);
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('globotech_stock_updated', {
                detail: updatedStock
            }));
            window.dispatchEvent(new CustomEvent('globotech_products_updated', {
                detail: updatedProducts
            }));
            window.dispatchEvent(new CustomEvent('globotech_ledger_updated', {
                detail: updatedLedger
            }));
        }
        showToast(`✓ Successfully decreased -${qtyToDeduct} pcs of "${targetStock.productName}" from ${targetStock.warehouseName}! New balance: ${newAvailable} pcs.`);
    };
    // 5. EDIT WAREHOUSE STOCK ITEM (স্টক আইটেম এডিট / সংশোধন)
    const handleOpenEditStockModal = (item)=>{
        setEditingStockItem(item);
        setEditWarehouseName(item.warehouseName);
        setEditProductName(item.productName);
        setEditSku(item.sku);
        setEditAvailable(item.available);
        setEditReserved(item.reserved || 0);
        setEditDamaged(item.damaged || 0);
        setEditUnitLandedCost(item.unitLandedCost || 0);
        setEditAuditReason('');
        setEditSyncProductCatalog(true);
        setIsEditStockModalOpen(true);
    };
    const handleSaveStockEdit = (e)=>{
        if (e) e.preventDefault();
        if (!editingStockItem) return;
        const trimmedName = editProductName.trim();
        const trimmedSku = editSku.trim().toUpperCase();
        if (!trimmedName || !trimmedSku) {
            alert('Product Name and SKU Code are required.');
            return;
        }
        const newAvailable = Math.max(0, Math.floor(Number(editAvailable) || 0));
        const newReserved = Math.max(0, Math.floor(Number(editReserved) || 0));
        const newDamaged = Math.max(0, Math.floor(Number(editDamaged) || 0));
        const newLandedCost = Math.max(0, Number(editUnitLandedCost) || 0);
        const oldAvailable = editingStockItem.available;
        const oldWarehouse = editingStockItem.warehouseName;
        const oldSku = editingStockItem.sku;
        const oldName = editingStockItem.productName;
        const oldCost = editingStockItem.unitLandedCost;
        const deltaQty = newAvailable - oldAvailable;
        const hasQtyChanged = deltaQty !== 0;
        const hasWhChanged = editWarehouseName !== oldWarehouse;
        const hasCostChanged = newLandedCost !== oldCost;
        const hasSkuOrNameChanged = trimmedSku !== oldSku || trimmedName !== oldName;
        // 1. Update warehouse stock
        const updatedStock = warehouseStock.map((s)=>{
            if (s.id === editingStockItem.id) {
                return {
                    ...s,
                    warehouseName: editWarehouseName,
                    productName: trimmedName,
                    sku: trimmedSku,
                    available: newAvailable,
                    reserved: newReserved,
                    damaged: newDamaged,
                    unitLandedCost: newLandedCost
                };
            }
            return s;
        });
        setWarehouseStock(updatedStock);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredWarehouseStock"])(updatedStock);
        // 2. Synchronize with Product Catalog if enabled
        let updatedProducts = [
            ...products
        ];
        if (editSyncProductCatalog) {
            const matchingProductIndex = products.findIndex((p)=>p.sku === oldSku || p.sku === trimmedSku);
            const totalStockForProd = updatedStock.filter((s)=>s.sku === trimmedSku).reduce((sum, s)=>sum + s.available, 0);
            if (matchingProductIndex >= 0) {
                updatedProducts = products.map((p, idx)=>{
                    if (idx === matchingProductIndex) {
                        return {
                            ...p,
                            name: trimmedName,
                            sku: trimmedSku,
                            stock: totalStockForProd,
                            currentLandedCost: newLandedCost > 0 ? newLandedCost : p.currentLandedCost
                        };
                    }
                    return p;
                });
            } else {
                const newCatalogProd = {
                    id: `PRD-${Date.now().toString().slice(-5)}`,
                    sku: trimmedSku,
                    barcode: `880${Math.floor(100000000 + Math.random() * 900000000)}`,
                    name: trimmedName,
                    category: 'CCTV & Surveillance',
                    brand: 'Globo Tech',
                    unit: 'pcs',
                    stock: totalStockForProd,
                    minStock: 10,
                    purchasePriceCNY: 0,
                    currentLandedCost: newLandedCost,
                    retailPrice: Math.round(newLandedCost * 1.5),
                    wholesalePrice: Math.round(newLandedCost * 1.35),
                    projectPrice: Math.round(newLandedCost * 1.25),
                    dealerPrice: Math.round(newLandedCost * 1.2),
                    isSerialTracked: false
                };
                updatedProducts = [
                    newCatalogProd,
                    ...products
                ];
            }
            setProducts(updatedProducts);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredProducts"])(updatedProducts);
        }
        // 3. Create Audit Ledger Record if relevant data changed
        let updatedLedger = [
            ...ledger
        ];
        if (hasQtyChanged || hasWhChanged || hasCostChanged || hasSkuOrNameChanged) {
            const nowTime = new Date().toISOString().slice(0, 16).replace('T', ' ');
            const auditRef = `AUDIT-EDIT-${Math.floor(1000 + Math.random() * 9000)}`;
            let auditNote = editAuditReason.trim();
            if (!auditNote) {
                const changes = [];
                if (hasQtyChanged) changes.push(`Stock: ${oldAvailable} → ${newAvailable} pcs (${deltaQty > 0 ? '+' : ''}${deltaQty})`);
                if (hasWhChanged) changes.push(`Warehouse: ${oldWarehouse} → ${editWarehouseName}`);
                if (hasCostChanged) changes.push(`Cost: ৳${oldCost} → ৳${newLandedCost}`);
                if (trimmedName !== oldName) changes.push(`Name: "${oldName}" → "${trimmedName}"`);
                if (trimmedSku !== oldSku) changes.push(`SKU: ${oldSku} → ${trimmedSku}`);
                auditNote = `Stock Record Edit: ${changes.join(', ')}`;
            }
            const auditRecord = {
                id: `led-${Date.now()}`,
                timestamp: nowTime,
                productName: trimmedName,
                warehouseName: editWarehouseName,
                movementType: 'AUDIT_CORRECTION',
                quantityDelta: deltaQty,
                balanceAfter: newAvailable,
                unitLandedCost: newLandedCost,
                referenceId: auditRef,
                reasonNotes: auditNote
            };
            updatedLedger = [
                auditRecord,
                ...ledger
            ];
            setLedger(updatedLedger);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredStockLedger"])(updatedLedger);
        }
        // 4. Trigger global dispatch events
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('globotech_stock_updated', {
                detail: updatedStock
            }));
            window.dispatchEvent(new CustomEvent('globotech_products_updated', {
                detail: updatedProducts
            }));
            window.dispatchEvent(new CustomEvent('globotech_ledger_updated', {
                detail: updatedLedger
            }));
        }
        setIsEditStockModalOpen(false);
        setEditingStockItem(null);
        showToast(`✓ Stock item "${trimmedName}" updated successfully!`);
    };
    const handleDeleteStockItem = (item)=>{
        if (!confirm(`Are you sure you want to remove "${item.productName}" (${item.sku}) from ${item.warehouseName}?\n\nThis stock record will be deleted from the warehouse.`)) {
            return;
        }
        const updatedStock = warehouseStock.filter((s)=>s.id !== item.id);
        setWarehouseStock(updatedStock);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredWarehouseStock"])(updatedStock);
        // If available stock > 0, log write-off in ledger
        let updatedLedger = [
            ...ledger
        ];
        if (item.available > 0) {
            const deleteLedgerEntry = {
                id: `led-${Date.now()}`,
                timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
                productName: item.productName,
                warehouseName: item.warehouseName,
                movementType: 'DAMAGED_WRITE_OFF',
                quantityDelta: -item.available,
                balanceAfter: 0,
                unitLandedCost: item.unitLandedCost,
                referenceId: `DEL-${Math.floor(1000 + Math.random() * 9000)}`,
                reasonNotes: `Item removed from ${item.warehouseName} by administrator.`
            };
            updatedLedger = [
                deleteLedgerEntry,
                ...ledger
            ];
            setLedger(updatedLedger);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredStockLedger"])(updatedLedger);
        }
        // Recalculate catalog stock
        const matchingProd = products.find((p)=>p.sku === item.sku);
        let updatedProducts = [
            ...products
        ];
        if (matchingProd) {
            const remainingTotal = updatedStock.filter((s)=>s.sku === item.sku).reduce((sum, s)=>sum + s.available, 0);
            updatedProducts = products.map((p)=>p.id === matchingProd.id ? {
                    ...p,
                    stock: remainingTotal
                } : p);
            setProducts(updatedProducts);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredProducts"])(updatedProducts);
        }
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('globotech_stock_updated', {
                detail: updatedStock
            }));
            window.dispatchEvent(new CustomEvent('globotech_products_updated', {
                detail: updatedProducts
            }));
            window.dispatchEvent(new CustomEvent('globotech_ledger_updated', {
                detail: updatedLedger
            }));
        }
        setIsEditStockModalOpen(false);
        setEditingStockItem(null);
        showToast(`✓ Stock record "${item.productName}" removed from ${item.warehouseName}.`);
    };
    // 6. QUICK EDIT PRODUCT NAME & SKU ONLY (নাম ও SKU পরিবর্তন)
    const handleOpenNameSkuModal = (item)=>{
        setNameSkuEditingItem(item);
        setNameSkuNewName(item.productName);
        setNameSkuNewSku(item.sku);
        setNameSkuUpdateAllWarehouses(true);
        setIsNameSkuModalOpen(true);
    };
    const handleSaveNameSku = (e)=>{
        if (e) e.preventDefault();
        if (!nameSkuEditingItem) return;
        const trimmedName = nameSkuNewName.trim();
        const trimmedSku = nameSkuNewSku.trim().toUpperCase();
        if (!trimmedName) {
            alert('Product Name cannot be empty (পণ্যের নাম খালি রাখা যাবে না)।');
            return;
        }
        if (!trimmedSku) {
            alert('SKU Code cannot be empty (SKU কোড খালি রাখা যাবে না)।');
            return;
        }
        const oldName = nameSkuEditingItem.productName;
        const oldSku = nameSkuEditingItem.sku;
        if (trimmedName === oldName && trimmedSku === oldSku) {
            setIsNameSkuModalOpen(false);
            setNameSkuEditingItem(null);
            return;
        }
        // 1. Update warehouse stock
        const updatedStock = warehouseStock.map((s)=>{
            if (nameSkuUpdateAllWarehouses) {
                if (s.sku === oldSku || s.id === nameSkuEditingItem.id) {
                    return {
                        ...s,
                        productName: trimmedName,
                        sku: trimmedSku
                    };
                }
            } else {
                if (s.id === nameSkuEditingItem.id) {
                    return {
                        ...s,
                        productName: trimmedName,
                        sku: trimmedSku
                    };
                }
            }
            return s;
        });
        setWarehouseStock(updatedStock);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredWarehouseStock"])(updatedStock);
        // 2. Synchronize with Product Catalog (products)
        const matchingProdIndex = products.findIndex((p)=>p.sku === oldSku);
        let updatedProducts = [
            ...products
        ];
        if (matchingProdIndex >= 0) {
            updatedProducts = products.map((p, idx)=>idx === matchingProdIndex ? {
                    ...p,
                    name: trimmedName,
                    sku: trimmedSku
                } : p);
            setProducts(updatedProducts);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredProducts"])(updatedProducts);
        } else {
            const newProd = {
                id: `PRD-${Date.now().toString().slice(-5)}`,
                sku: trimmedSku,
                barcode: `880${Math.floor(100000000 + Math.random() * 900000000)}`,
                name: trimmedName,
                category: 'CCTV & Surveillance',
                brand: 'Globo Tech',
                unit: 'pcs',
                stock: nameSkuEditingItem.available,
                minStock: 10,
                purchasePriceCNY: 0,
                currentLandedCost: nameSkuEditingItem.unitLandedCost,
                retailPrice: Math.round(nameSkuEditingItem.unitLandedCost * 1.5),
                wholesalePrice: Math.round(nameSkuEditingItem.unitLandedCost * 1.35),
                projectPrice: Math.round(nameSkuEditingItem.unitLandedCost * 1.25),
                dealerPrice: Math.round(nameSkuEditingItem.unitLandedCost * 1.2),
                isSerialTracked: false
            };
            updatedProducts = [
                newProd,
                ...products
            ];
            setProducts(updatedProducts);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredProducts"])(updatedProducts);
        }
        // 3. Create Audit Ledger Record
        const nowTime = new Date().toISOString().slice(0, 16).replace('T', ' ');
        const auditRecord = {
            id: `led-${Date.now()}`,
            timestamp: nowTime,
            productName: trimmedName,
            warehouseName: nameSkuEditingItem.warehouseName,
            movementType: 'AUDIT_CORRECTION',
            quantityDelta: 0,
            balanceAfter: nameSkuEditingItem.available,
            unitLandedCost: nameSkuEditingItem.unitLandedCost,
            referenceId: `REN-${Math.floor(1000 + Math.random() * 9000)}`,
            reasonNotes: `Renamed item: "${oldName}" [${oldSku}] → "${trimmedName}" [${trimmedSku}]`
        };
        const updatedLedger = [
            auditRecord,
            ...ledger
        ];
        setLedger(updatedLedger);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredStockLedger"])(updatedLedger);
        // 4. Dispatch events
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('globotech_stock_updated', {
                detail: updatedStock
            }));
            window.dispatchEvent(new CustomEvent('globotech_products_updated', {
                detail: updatedProducts
            }));
            window.dispatchEvent(new CustomEvent('globotech_ledger_updated', {
                detail: updatedLedger
            }));
        }
        setIsNameSkuModalOpen(false);
        setNameSkuEditingItem(null);
        showToast(`✓ Product Name & SKU updated: "${trimmedName}" (${trimmedSku})`);
    };
    const selectedDecreaseStock = warehouseStock.find((s)=>s.id === decreaseStockItemId);
    // Filtered Stock Items
    const filteredStock = warehouseStock.filter((st)=>{
        if (selectedWarehouseFilter !== 'ALL' && st.warehouseName !== selectedWarehouseFilter) {
            return false;
        }
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            return st.productName.toLowerCase().includes(q) || st.sku.toLowerCase().includes(q) || st.warehouseName.toLowerCase().includes(q);
        }
        return true;
    });
    // Filtered Ledger Items
    const filteredLedger = ledger.filter((entry)=>{
        if (selectedWarehouseFilter !== 'ALL' && entry.warehouseName !== selectedWarehouseFilter) {
            return false;
        }
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            return entry.productName.toLowerCase().includes(q) || entry.warehouseName.toLowerCase().includes(q) || entry.referenceId.toLowerCase().includes(q) || entry.movementType.toLowerCase().includes(q);
        }
        return true;
    });
    // Calculate totals
    const totalValuation = warehouseStock.reduce((sum, item)=>sum + item.available * item.unitLandedCost, 0);
    const totalAvailablePcs = warehouseStock.reduce((sum, item)=>sum + item.available, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            toastMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-20 right-6 z-50 bg-emerald-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 animate-bounce",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 1032,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: toastMsg
                    }, void 0, false, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 1033,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 1031,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-slate-900 border border-slate-800 rounded-xl p-3 sm:p-3.5 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 overflow-x-auto touch-scroll pb-1 sm:pb-0 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('inventory'),
                                className: `px-3.5 py-2 sm:py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 flex-shrink-0 active:scale-95 ${activeTab === 'inventory' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$warehouse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Warehouse$3e$__["Warehouse"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1049,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Warehouse Stock (",
                                            warehouseStock.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1050,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1041,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('ledger'),
                                className: `px-3.5 py-2 sm:py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 flex-shrink-0 active:scale-95 ${activeTab === 'ledger' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1061,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Stock Ledger (",
                                            ledger.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1062,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1053,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 1040,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-2 flex-1 max-w-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1069,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search product, SKU, warehouse, ref...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1070,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1068,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedWarehouseFilter,
                                onChange: (e)=>setSelectedWarehouseFilter(e.target.value),
                                className: "bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ALL",
                                        children: "All Warehouses"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1084,
                                        columnNumber: 13
                                    }, this),
                                    WAREHOUSE_OPTIONS.map((wh)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: wh,
                                            children: wh
                                        }, wh, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1086,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1079,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 1067,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full lg:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center bg-slate-800/90 border border-slate-700/80 rounded-lg p-0.5 flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setStockViewMode('cards'),
                                        className: `flex-1 sm:flex-initial px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition ${stockViewMode === 'cards' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`,
                                        title: "Cards View (Optimized for Mobile)",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1107,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Cards"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1108,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1097,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setStockViewMode('table'),
                                        className: `flex-1 sm:flex-initial px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition ${stockViewMode === 'table' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`,
                                        title: "Table View (Full Spreadsheet)",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1120,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Table"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1121,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1096,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:flex sm:items-center gap-2 w-full sm:w-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsAddProductModalOpen(true),
                                        className: "px-3 py-2 sm:py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition active:scale-95 shadow-blue-600/20 ring-1 ring-blue-500 min-h-[40px] sm:min-h-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1131,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: "Add Product"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1132,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (products.length > 0 && !grnSelectedProductId) {
                                                setGrnSelectedProductId(products[0].id);
                                                setGrnLandedCost(products[0].currentLandedCost);
                                            }
                                            setIsGrnModalOpen(true);
                                        },
                                        className: "px-3 py-2 sm:py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition active:scale-95 min-h-[40px] sm:min-h-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageCheck$3e$__["PackageCheck"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1145,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: "Receive Goods"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1146,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1135,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            const eligible = warehouseStock.filter((s)=>s.warehouseName === transferFromWarehouse && s.available > 0);
                                            if (eligible.length > 0) {
                                                setTransferStockItemId(eligible[0].id);
                                            }
                                            setIsTransferModalOpen(true);
                                        },
                                        className: "px-3 py-2 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition active:scale-95 border border-slate-700 min-h-[40px] sm:min-h-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightLeft$3e$__["ArrowRightLeft"], {
                                                className: "w-3.5 h-3.5 text-blue-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1159,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: "Transfer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1160,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            const availableItems = warehouseStock.filter((s)=>s.available > 0);
                                            if (availableItems.length > 0) {
                                                const first = availableItems[0];
                                                setDecreaseWarehouse(first.warehouseName);
                                                setDecreaseStockItemId(first.id);
                                            }
                                            setDecreaseQty(1);
                                            setDecreaseReason('SALES_DELIVERY');
                                            setDecreaseRefDoc('');
                                            setDecreaseNotes('');
                                            setIsDecreaseModalOpen(true);
                                        },
                                        className: "px-3 py-2 sm:py-1.5 rounded-lg bg-rose-600/90 hover:bg-rose-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition active:scale-95 shadow-rose-600/20 ring-1 ring-rose-500 min-h-[40px] sm:min-h-0",
                                        title: "Deduct or decrease stock for sales, damage, or adjustment",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__["MinusCircle"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1180,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: "Deduct Stock"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1181,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1163,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 1094,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 1038,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-slate-900 border border-slate-800 rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-medium text-slate-400",
                                children: "Total Stock Items"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg font-bold text-slate-100 mt-0.5",
                                children: [
                                    warehouseStock.length,
                                    " SKU Locations"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 1189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-slate-900 border border-slate-800 rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-medium text-slate-400",
                                children: "Total Available Units"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg font-bold text-emerald-400 mt-0.5",
                                children: [
                                    totalAvailablePcs.toLocaleString(),
                                    " pcs"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1197,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 1195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-slate-900 border border-slate-800 rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-medium text-slate-400",
                                children: "Total Inventory Valuation"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg font-bold text-blue-400 mt-0.5",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].currency(totalValuation)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 1201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-slate-900 border border-slate-800 rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-medium text-slate-400",
                                children: "Ledger Audit Trail"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg font-bold text-slate-200 mt-0.5",
                                children: [
                                    ledger.length,
                                    " Transactions"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1209,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 1207,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 1188,
                columnNumber: 7
            }, this),
            activeTab === 'inventory' ? /* Inventory by Warehouse */ stockViewMode === 'cards' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: filteredStock.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"], {
                            className: "w-10 h-10 mx-auto mb-2 text-slate-600 opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1221,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-slate-300",
                            children: "No stock records found"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1222,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsAddProductModalOpen(true),
                            className: "mt-4 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-xl inline-flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1227,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Add New Product"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1228,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1223,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/StockView.tsx",
                    lineNumber: 1220,
                    columnNumber: 15
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5",
                    children: filteredStock.map((st)=>{
                        const valuation = st.available * st.unitLandedCost;
                        const matchingProd = products.find((p)=>p.sku === st.sku);
                        const isLow = matchingProd ? st.available <= matchingProd.minStock : st.available <= 10;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-900/90 border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-4 space-y-3 transition shadow-lg flex flex-col justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60 truncate",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$warehouse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Warehouse$3e$__["Warehouse"], {
                                                            className: "w-3.5 h-3.5 text-blue-400 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1247,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate",
                                                            children: st.warehouseName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1248,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1246,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: st.available === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "danger",
                                                        children: "Out of Stock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 1252,
                                                        columnNumber: 31
                                                    }, this) : isLow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "warning",
                                                        children: "Low Stock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 1254,
                                                        columnNumber: 31
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "success",
                                                        children: "Normal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 1256,
                                                        columnNumber: 31
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1250,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1245,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-slate-100 text-sm leading-snug line-clamp-2",
                                                            children: st.productName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1264,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-mono text-xs text-blue-400 mt-1 font-semibold",
                                                            children: st.sku
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1267,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1263,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleOpenNameSkuModal(st),
                                                    className: "flex-shrink-0 px-2 py-1 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[11px] font-semibold flex items-center gap-1 transition active:scale-95",
                                                    title: "Edit Product Name & SKU",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1277,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Edit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1278,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1271,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1262,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1243,
                                    columnNumber: 23
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2 bg-slate-950/70 border border-slate-800/80 rounded-xl p-3 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-500 uppercase font-semibold block",
                                                    children: "Available"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1286,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `font-bold text-base ${isLow ? 'text-amber-400' : 'text-emerald-400'}`,
                                                    children: [
                                                        st.available,
                                                        " pcs"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1287,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-500",
                                                    children: [
                                                        "Reserved: ",
                                                        st.reserved,
                                                        " pcs"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1290,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1285,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-500 uppercase font-semibold block",
                                                    children: "Landed Cost"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1294,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-sm text-slate-200",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].currency(st.unitLandedCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1295,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-500",
                                                    children: "Per unit"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1298,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1293,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2 pt-1.5 border-t border-slate-800/60 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-slate-400 font-medium",
                                                    children: "Batch Valuation:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1302,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-xs text-blue-400",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].currency(valuation)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1303,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1301,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1284,
                                    columnNumber: 23
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-1.5 pt-1 border-t border-slate-800/80",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleOpenEditStockModal(st),
                                            className: "min-h-[40px] py-1.5 px-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-xs font-semibold transition active:scale-95 border border-blue-500/30 flex items-center justify-center gap-1",
                                            title: "Edit Stock Item (নাম, SKU, পরিমাণ, গুদাম বা রেট পরিবর্তন)",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                    className: "w-3.5 h-3.5 text-blue-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1314,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1315,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1309,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                const found = products.find((p)=>p.sku === st.sku);
                                                if (found) {
                                                    setGrnSelectedProductId(found.id);
                                                    setGrnLandedCost(st.unitLandedCost);
                                                }
                                                setGrnWarehouse(st.warehouseName);
                                                setIsGrnModalOpen(true);
                                            },
                                            className: "min-h-[40px] py-1.5 px-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition active:scale-95 border border-slate-700 flex items-center justify-center gap-1",
                                            title: "Receive / Add more stock",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-3.5 h-3.5 text-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1330,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Add"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1331,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1317,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleOpenDecreaseModal(st),
                                            className: "min-h-[40px] py-1.5 px-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-semibold transition active:scale-95 border border-rose-500/30 flex items-center justify-center gap-1",
                                            title: "Deduct or decrease stock",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__["MinusCircle"], {
                                                    className: "w-3.5 h-3.5 text-rose-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1338,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Deduct"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1339,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1333,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1308,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, st.id, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1239,
                            columnNumber: 21
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/modules/StockView.tsx",
                    lineNumber: 1232,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 1218,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3 bg-slate-800/40 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"], {
                                        className: "w-4 h-4 text-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1352,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Warehouse Stock Inventory"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1353,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1351,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-slate-400",
                                children: [
                                    "Showing ",
                                    filteredStock.length,
                                    " of ",
                                    warehouseStock.length,
                                    " entries • ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sm:hidden text-blue-400",
                                        children: "👉 Swipe table"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1356,
                                        columnNumber: 90
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1355,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 1350,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto touch-scroll",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left text-xs min-w-[760px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-slate-800/80 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Warehouse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1364,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Product & SKU"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1365,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Available Stock"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1366,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Reserved"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1367,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Damaged"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1368,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-right",
                                                children: "Landed Cost"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1369,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-right",
                                                children: "Valuation (Cost)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1370,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1371,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Quick Action"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1372,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1363,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1362,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-800 text-slate-200",
                                    children: filteredStock.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 9,
                                            className: "py-8 text-center text-slate-500",
                                            children: [
                                                "No stock records found matching your query. Click",
                                                ' ',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    onClick: ()=>setIsAddProductModalOpen(true),
                                                    className: "text-blue-400 font-semibold cursor-pointer underline hover:text-blue-300",
                                                    children: "Add New Product"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1380,
                                                    columnNumber: 25
                                                }, this),
                                                ' ',
                                                "to create one."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1378,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1377,
                                        columnNumber: 21
                                    }, this) : filteredStock.map((st)=>{
                                        const valuation = st.available * st.unitLandedCost;
                                        const matchingProd = products.find((p)=>p.sku === st.sku);
                                        const isLow = matchingProd ? st.available <= matchingProd.minStock : st.available <= 10;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-slate-800/40 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 font-sans font-medium text-slate-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$warehouse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Warehouse$3e$__["Warehouse"], {
                                                                className: "w-3.5 h-3.5 text-blue-400 flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                                lineNumber: 1399,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: st.warehouseName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                                lineNumber: 1400,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 1398,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1397,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 font-sans max-w-xs",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between gap-2 group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0 pr-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-semibold text-slate-100 leading-tight",
                                                                        children: st.productName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                                        lineNumber: 1406,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] font-mono text-slate-400 mt-1 flex items-center gap-1.5",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "bg-slate-800/90 text-blue-400 font-semibold px-1.5 py-0.5 rounded border border-slate-700/60",
                                                                            children: st.sku
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                                            lineNumber: 1410,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                                        lineNumber: 1409,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                                lineNumber: 1405,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>handleOpenNameSkuModal(st),
                                                                className: "flex-shrink-0 px-2 py-1 rounded-md bg-blue-600/15 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 border border-blue-500/30 hover:border-blue-500/60 text-[11px] font-semibold inline-flex items-center gap-1 transition active:scale-95 shadow-sm",
                                                                title: "Edit Product Name & SKU Code (নাম ও SKU পরিবর্তন করুন)",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                        className: "w-3 h-3 text-blue-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                                        lineNumber: 1421,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Edit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                                        lineNumber: 1422,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                                lineNumber: 1415,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 1404,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1403,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center font-bold text-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: isLow ? 'text-amber-400' : 'text-emerald-400',
                                                        children: [
                                                            st.available,
                                                            " pcs"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 1427,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1426,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center font-sans text-slate-400",
                                                    children: [
                                                        st.reserved,
                                                        " pcs"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1431,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center font-sans text-slate-400",
                                                    children: [
                                                        st.damaged,
                                                        " pcs"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1434,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-right font-sans font-medium text-slate-300",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].currency(st.unitLandedCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1437,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-right font-bold font-sans text-blue-400",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].currency(valuation)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1440,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center",
                                                    children: st.available === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "danger",
                                                        children: "Out of Stock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 1445,
                                                        columnNumber: 31
                                                    }, this) : isLow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "warning",
                                                        children: "Low Stock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 1447,
                                                        columnNumber: 31
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "success",
                                                        children: "Normal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 1449,
                                                        columnNumber: 31
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1443,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleOpenEditStockModal(st),
                                                                className: "px-2.5 py-1 rounded bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-[11px] font-semibold transition active:scale-95 border border-blue-500/30 hover:border-blue-500/50 inline-flex items-center gap-1",
                                                                title: "Edit Stock Item (নাম, SKU, পরিমাণ, গুদাম বা রেট পরিবর্তন)",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                        className: "w-3 h-3 text-blue-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                                        lineNumber: 1459,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Edit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                                        lineNumber: 1460,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                                lineNumber: 1454,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    const found = products.find((p)=>p.sku === st.sku);
                                                                    if (found) {
                                                                        setGrnSelectedProductId(found.id);
                                                                        setGrnLandedCost(st.unitLandedCost);
                                                                    }
                                                                    setGrnWarehouse(st.warehouseName);
                                                                    setIsGrnModalOpen(true);
                                                                },
                                                                className: "px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold transition active:scale-95 border border-slate-700 hover:border-slate-600 inline-flex items-center gap-1",
                                                                title: "Receive / Add more stock",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-3 h-3 text-emerald-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                                        lineNumber: 1475,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Add Stock"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                                        lineNumber: 1476,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                                lineNumber: 1462,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleOpenDecreaseModal(st),
                                                                className: "px-2.5 py-1 rounded bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-[11px] font-semibold transition active:scale-95 border border-rose-500/30 hover:border-rose-500/50 inline-flex items-center gap-1",
                                                                title: "Decrease / Deduct stock for sales, damage, or adjustment",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__["MinusCircle"], {
                                                                        className: "w-3 h-3 text-rose-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                                        lineNumber: 1483,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Decrease"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                                        lineNumber: 1484,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                                lineNumber: 1478,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 1453,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1452,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, st.id, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1396,
                                            columnNumber: 25
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1375,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1361,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 1360,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 1349,
                columnNumber: 11
            }, this) : /* Immutable Stock Movement Ledger */ stockViewMode === 'cards' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: filteredLedger.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                            className: "w-10 h-10 mx-auto mb-2 text-slate-600 opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1503,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-slate-300",
                            children: "No stock movement records found"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1504,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/StockView.tsx",
                    lineNumber: 1502,
                    columnNumber: 15
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5",
                    children: filteredLedger.map((entry)=>{
                        const isPositive = entry.quantityDelta > 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-900/90 border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-4 space-y-3 transition shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-xs text-slate-400",
                                            children: entry.timestamp
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1516,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `px-2 py-0.5 rounded text-[10px] font-bold ${entry.movementType === 'PURCHASE_GRN' || entry.movementType === 'OPENING_STOCK' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : entry.movementType === 'PROJECT_ISSUE' || entry.movementType === 'INTERNAL_PROJECT' ? 'bg-purple-950 text-purple-400 border border-purple-800' : entry.movementType === 'TRANSFER_IN' || entry.movementType === 'TRANSFER_OUT' ? 'bg-amber-950 text-amber-400 border border-amber-800' : entry.movementType === 'DAMAGED_RECORD' || entry.movementType === 'DAMAGED_WRITE_OFF' ? 'bg-rose-950 text-rose-400 border border-rose-800' : entry.movementType === 'SALES_DELIVERY' ? 'bg-cyan-950 text-cyan-400 border border-cyan-800' : 'bg-rose-950 text-rose-400 border border-rose-800'}`,
                                            children: entry.movementType
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1519,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1515,
                                    columnNumber: 23
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-slate-100 text-sm",
                                            children: entry.productName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1539,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400 flex items-center gap-1.5 mt-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$warehouse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Warehouse$3e$__["Warehouse"], {
                                                    className: "w-3 h-3 text-slate-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1541,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: entry.warehouseName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1542,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1540,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1538,
                                    columnNumber: 23
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2 bg-slate-950/70 border border-slate-800/80 rounded-xl p-3 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-500 uppercase font-semibold block",
                                                    children: "Quantity Delta"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1548,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `font-bold text-base ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`,
                                                    children: [
                                                        isPositive ? `+${entry.quantityDelta}` : entry.quantityDelta,
                                                        " pcs"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1549,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1547,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-500 uppercase font-semibold block",
                                                    children: "Balance After"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1555,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-base text-slate-100",
                                                    children: [
                                                        entry.balanceAfter,
                                                        " pcs"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1556,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1554,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2 pt-1 border-t border-slate-800/60 flex items-center justify-between text-[11px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400 font-medium",
                                                    children: "Ref Doc:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1562,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono font-bold text-blue-400",
                                                    children: entry.referenceId
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1563,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1561,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1546,
                                    columnNumber: 23
                                }, this),
                                entry.reasonNotes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-slate-400 italic bg-slate-800/40 p-2 rounded-lg border border-slate-800",
                                    children: entry.reasonNotes
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1568,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, entry.id, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1511,
                            columnNumber: 21
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/modules/StockView.tsx",
                    lineNumber: 1507,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 1500,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-slate-800/60 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                        className: "w-4 h-4 text-sky-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1582,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Immutable Stock Ledger"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1583,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1581,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1586,
                                        columnNumber: 17
                                    }, this),
                                    "Audit Active"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1585,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 1580,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto touch-scroll",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left text-xs min-w-[850px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-slate-800/80 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Timestamp"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1595,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Movement Type"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1596,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Product"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1597,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Warehouse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1598,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Quantity Delta"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1599,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Balance After"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1600,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-right",
                                                children: "Landed Cost"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1601,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Reference Document"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1602,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Reason / Notes"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1603,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1594,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1593,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-800 text-slate-200",
                                    children: filteredLedger.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 9,
                                            className: "py-8 text-center text-slate-500",
                                            children: "No ledger transactions found matching filter."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1609,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1608,
                                        columnNumber: 21
                                    }, this) : filteredLedger.map((entry)=>{
                                        const isPositive = entry.quantityDelta > 0;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-slate-800/40 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 font-mono text-slate-400 text-[11px] whitespace-nowrap",
                                                    children: entry.timestamp
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1618,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 font-sans font-bold",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 py-0.5 rounded text-[10px] ${entry.movementType === 'PURCHASE_GRN' || entry.movementType === 'OPENING_STOCK' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : entry.movementType === 'PROJECT_ISSUE' || entry.movementType === 'INTERNAL_PROJECT' ? 'bg-purple-950 text-purple-400 border border-purple-800' : entry.movementType === 'TRANSFER_IN' || entry.movementType === 'TRANSFER_OUT' ? 'bg-amber-950 text-amber-400 border border-amber-800' : entry.movementType === 'DAMAGED_RECORD' || entry.movementType === 'DAMAGED_WRITE_OFF' ? 'bg-rose-950 text-rose-400 border border-rose-800' : entry.movementType === 'SALES_DELIVERY' ? 'bg-cyan-950 text-cyan-400 border border-cyan-800' : 'bg-rose-950 text-rose-400 border border-rose-800'}`,
                                                        children: entry.movementType
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 1622,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1621,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 font-sans font-medium text-slate-200",
                                                    children: entry.productName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1640,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 font-sans text-slate-400",
                                                    children: entry.warehouseName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1643,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: `py-3 px-4 text-center font-bold text-sm ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`,
                                                    children: [
                                                        isPositive ? `+${entry.quantityDelta}` : entry.quantityDelta,
                                                        " pcs"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1644,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center font-bold text-slate-100 text-sm",
                                                    children: [
                                                        entry.balanceAfter,
                                                        " pcs"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1651,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-right font-sans text-slate-300 font-medium",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].currency(entry.unitLandedCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1654,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-blue-400 font-bold",
                                                    children: entry.referenceId
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1657,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 font-sans text-slate-400 text-[11px] max-w-xs truncate",
                                                    children: entry.reasonNotes || '—'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1658,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, entry.id, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1617,
                                            columnNumber: 25
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1606,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1592,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 1591,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 1579,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isAddProductModalOpen,
                onClose: ()=>setIsAddProductModalOpen(false),
                title: "Add New Product to Warehouse Stock",
                footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsAddProductModalOpen(false),
                            className: "w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold min-h-[42px] transition active:scale-95",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1679,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSaveNewProduct,
                            className: "w-full sm:w-auto px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30 min-h-[42px] transition active:scale-95",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1689,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Save & Add Product"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1690,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1685,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 text-xs max-h-[75vh] overflow-y-auto pr-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-slate-800/60 border border-slate-700/60 rounded-xl space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-slate-300 font-semibold flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                    className: "w-4 h-4 text-blue-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1700,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Auto-fill from Existing Registered Product (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1701,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1699,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-slate-400",
                                            children: "Select to clone details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1703,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1698,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    onChange: (e)=>{
                                        const found = products.find((p)=>p.id === e.target.value);
                                        if (found) {
                                            setNewProductForm((prev)=>({
                                                    ...prev,
                                                    name: found.name,
                                                    sku: found.sku,
                                                    category: found.category,
                                                    brand: found.brand,
                                                    unit: found.unit,
                                                    minStock: found.minStock,
                                                    unitLandedCost: found.currentLandedCost,
                                                    purchasePriceCNY: found.purchasePriceCNY,
                                                    retailPrice: found.retailPrice,
                                                    wholesalePrice: found.wholesalePrice,
                                                    projectPrice: found.projectPrice,
                                                    dealerPrice: found.dealerPrice,
                                                    isSerialTracked: found.isSerialTracked
                                                }));
                                        }
                                    },
                                    defaultValue: "",
                                    className: "w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            disabled: true,
                                            children: "-- Select a product to auto-fill or enter details below --"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1730,
                                            columnNumber: 15
                                        }, this),
                                        products.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: p.id,
                                                children: [
                                                    p.name,
                                                    " (",
                                                    p.sku,
                                                    ") • ",
                                                    p.brand
                                                ]
                                            }, p.id, true, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1734,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1705,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1697,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1",
                                    children: "1. Product Identification"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1743,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: [
                                                "Product Name ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-rose-400",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1749,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1748,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "e.g. Cisco Catalyst 2960-X 48-Port Switch",
                                            value: newProductForm.name,
                                            onChange: (e)=>setNewProductForm({
                                                    ...newProductForm,
                                                    name: e.target.value
                                                }),
                                            className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1751,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1747,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-300 font-semibold mb-1",
                                                    children: [
                                                        "SKU Code ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-rose-400",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1763,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1762,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "e.g. SKU-NET-CISCO-48P",
                                                    value: newProductForm.sku,
                                                    onChange: (e)=>setNewProductForm({
                                                            ...newProductForm,
                                                            sku: e.target.value
                                                        }),
                                                    className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-slate-200 font-mono text-xs uppercase focus:outline-none focus:border-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1765,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1761,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-300 font-semibold mb-1",
                                                    children: "Brand / Manufacturer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1775,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "e.g. Cisco, Hikvision, TP-Link",
                                                    value: newProductForm.brand,
                                                    onChange: (e)=>setNewProductForm({
                                                            ...newProductForm,
                                                            brand: e.target.value
                                                        }),
                                                    className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1776,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1774,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1760,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-slate-300 font-semibold",
                                                            children: "Category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1789,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setIsAddingCustomCategory(!isAddingCustomCategory);
                                                                setNewCategoryInput('');
                                                            },
                                                            className: "text-[11px] text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 hover:underline",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                                    lineNumber: 1798,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: isAddingCustomCategory ? 'Choose Existing' : '+ Add New Category'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                                    lineNumber: 1799,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1790,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1788,
                                                    columnNumber: 17
                                                }, this),
                                                isAddingCustomCategory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "e.g. Stationery & Paper...",
                                                            value: newCategoryInput,
                                                            onChange: (e)=>setNewCategoryInput(e.target.value),
                                                            onKeyDown: (e)=>{
                                                                if (e.key === 'Enter') {
                                                                    e.preventDefault();
                                                                    handleCreateNewCategory();
                                                                }
                                                            },
                                                            autoFocus: true,
                                                            className: "flex-1 bg-slate-800 border border-blue-500 rounded-lg p-2 text-slate-100 text-xs focus:outline-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1805,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>handleCreateNewCategory(),
                                                            className: "px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1 shadow-sm active:scale-95",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                                    lineNumber: 1824,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Add"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                                    lineNumber: 1825,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1819,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setIsAddingCustomCategory(false),
                                                            className: "px-2.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs rounded-lg",
                                                            children: "✕"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1827,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1804,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: newProductForm.category,
                                                    onChange: (e)=>{
                                                        if (e.target.value === '__ADD_NEW__') {
                                                            setIsAddingCustomCategory(true);
                                                            setNewCategoryInput('');
                                                        } else {
                                                            setNewProductForm({
                                                                ...newProductForm,
                                                                category: e.target.value
                                                            });
                                                        }
                                                    },
                                                    className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs focus:outline-none focus:border-blue-500",
                                                    children: [
                                                        categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: c,
                                                                children: c
                                                            }, c, false, {
                                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                                lineNumber: 1849,
                                                                columnNumber: 23
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "__ADD_NEW__",
                                                            className: "text-blue-400 font-bold bg-slate-900",
                                                            children: "➕ + Add New Category..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1853,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1836,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1787,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-300 font-semibold mb-1",
                                                    children: "Unit of Measure"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1861,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: newProductForm.unit,
                                                    onChange: (e)=>setNewProductForm({
                                                            ...newProductForm,
                                                            unit: e.target.value
                                                        }),
                                                    className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs focus:outline-none focus:border-blue-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "pcs",
                                                            children: "pcs (Pieces)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1867,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "unit",
                                                            children: "unit (Units)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1868,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "box",
                                                            children: "box (Boxes)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1869,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "set",
                                                            children: "set (Sets)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1870,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "meter",
                                                            children: "meter (Meters)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1871,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "roll",
                                                            children: "roll (Rolls/Coils)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1872,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1862,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1860,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1786,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1742,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1",
                                    children: "2. Warehouse Location & Initial Stock"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1880,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: [
                                                "Target Warehouse ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-rose-400",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1886,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1885,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: newProductForm.warehouseName,
                                            onChange: (e)=>setNewProductForm({
                                                    ...newProductForm,
                                                    warehouseName: e.target.value
                                                }),
                                            className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs focus:outline-none focus:border-blue-500 font-medium",
                                            children: WAREHOUSE_OPTIONS.map((wh)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: wh,
                                                    children: wh
                                                }, wh, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1894,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1888,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1884,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-300 font-semibold mb-1",
                                                    children: [
                                                        "Initial Stock Qty (",
                                                        newProductForm.unit,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1903,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "0",
                                                    value: newProductForm.initialStock,
                                                    onChange: (e)=>setNewProductForm({
                                                            ...newProductForm,
                                                            initialStock: Math.max(0, Number(e.target.value))
                                                        }),
                                                    className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100 font-bold text-xs focus:outline-none focus:border-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1906,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1902,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-300 font-semibold mb-1",
                                                    children: "Min Reorder Level"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1918,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "1",
                                                    value: newProductForm.minStock,
                                                    onChange: (e)=>setNewProductForm({
                                                            ...newProductForm,
                                                            minStock: Math.max(1, Number(e.target.value))
                                                        }),
                                                    className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1919,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1917,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-300 font-semibold mb-1",
                                                    children: [
                                                        "Unit Landed Cost (BDT) ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-rose-400",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1932,
                                                            columnNumber: 42
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1931,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "0",
                                                    value: newProductForm.unitLandedCost,
                                                    onChange: (e)=>setNewProductForm({
                                                            ...newProductForm,
                                                            unitLandedCost: Math.max(0, Number(e.target.value))
                                                        }),
                                                    className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-blue-400 font-bold text-xs focus:outline-none focus:border-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1934,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1930,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1901,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1879,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1",
                                    children: "3. Multi-Tier Selling Prices (BDT)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1949,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-400 font-semibold text-[11px] mb-1",
                                                    children: "Retail (BDT)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1955,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: newProductForm.retailPrice || '',
                                                    onChange: (e)=>setNewProductForm({
                                                            ...newProductForm,
                                                            retailPrice: Number(e.target.value)
                                                        }),
                                                    className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs font-semibold focus:outline-none focus:border-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1956,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1954,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-400 font-semibold text-[11px] mb-1",
                                                    children: "Wholesale (BDT)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1966,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: newProductForm.wholesalePrice || '',
                                                    onChange: (e)=>setNewProductForm({
                                                            ...newProductForm,
                                                            wholesalePrice: Number(e.target.value)
                                                        }),
                                                    className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-cyan-400 text-xs font-semibold focus:outline-none focus:border-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1967,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1965,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-400 font-semibold text-[11px] mb-1",
                                                    children: "Project (BDT)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1977,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: newProductForm.projectPrice || '',
                                                    onChange: (e)=>setNewProductForm({
                                                            ...newProductForm,
                                                            projectPrice: Number(e.target.value)
                                                        }),
                                                    className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-purple-400 text-xs font-semibold focus:outline-none focus:border-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1978,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1976,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-400 font-semibold text-[11px] mb-1",
                                                    children: "Dealer (BDT)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1988,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: newProductForm.dealerPrice || '',
                                                    onChange: (e)=>setNewProductForm({
                                                            ...newProductForm,
                                                            dealerPrice: Number(e.target.value)
                                                        }),
                                                    className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-300 text-xs font-semibold focus:outline-none focus:border-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1989,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1987,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1953,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1948,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: newProductForm.isSerialTracked,
                                        onChange: (e)=>setNewProductForm({
                                                ...newProductForm,
                                                isSerialTracked: e.target.checked
                                            }),
                                        className: "w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 2004,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-200 font-semibold block text-xs",
                                                children: "Enable Serial Number & Warranty Tracking"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 2011,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-slate-400",
                                                children: "Allows scanning barcoded serial numbers during GRN, sales delivery, and RMA warranty claims."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 2012,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 2010,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 2003,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2002,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/StockView.tsx",
                    lineNumber: 1695,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 1673,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isGrnModalOpen,
                onClose: ()=>setIsGrnModalOpen(false),
                title: "Receive Goods (GRN - Goods Received Note)",
                footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsGrnModalOpen(false),
                            className: "w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold min-h-[42px] transition active:scale-95",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2028,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleReceiveGrn,
                            className: "w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/30 min-h-[42px] transition active:scale-95",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageCheck$3e$__["PackageCheck"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2038,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Confirm Goods Receiving"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2039,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2034,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Target Receiving Warehouse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2047,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: grnWarehouse,
                                    onChange: (e)=>setGrnWarehouse(e.target.value),
                                    className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 font-medium",
                                    children: WAREHOUSE_OPTIONS.map((wh)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: wh,
                                            children: wh
                                        }, wh, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2054,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2048,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2046,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-slate-300 font-semibold",
                                            children: "Select Product to Receive *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2064,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setIsGrnModalOpen(false);
                                                setIsAddProductModalOpen(true);
                                            },
                                            className: "text-[11px] text-blue-400 hover:text-blue-300 underline font-semibold flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2073,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Product not listed? Add New"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2074,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2065,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2063,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: grnSelectedProductId,
                                    onChange: (e)=>handleGrnProductChange(e.target.value),
                                    className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-slate-100 font-medium text-xs focus:outline-none focus:border-blue-500",
                                    children: products.map((p)=>{
                                        const stockInWh = warehouseStock.find((s)=>s.warehouseName === grnWarehouse && s.sku === p.sku)?.available ?? 0;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: p.id,
                                            children: [
                                                p.name,
                                                " [",
                                                p.sku,
                                                "] • Current in ",
                                                grnWarehouse.split(' ')[0],
                                                ": ",
                                                stockInWh,
                                                " ",
                                                p.unit
                                            ]
                                        }, p.id, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2089,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2078,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2062,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Received Quantity (pcs) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2099,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "1",
                                            value: grnQty,
                                            onChange: (e)=>setGrnQty(Math.max(1, Number(e.target.value))),
                                            className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-slate-100 text-sm font-bold focus:outline-none focus:border-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2098,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Unit Landed Cost (BDT) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2110,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "0",
                                            value: grnLandedCost,
                                            onChange: (e)=>setGrnLandedCost(Math.max(0, Number(e.target.value))),
                                            className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-blue-400 text-sm font-bold focus:outline-none focus:border-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2111,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2097,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-400 font-semibold mb-1",
                                            children: "Reference PO / Import Document"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2123,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "e.g. GRN-2026-004 or IMP-CHINA-982",
                                            value: grnRefDoc,
                                            onChange: (e)=>setGrnRefDoc(e.target.value),
                                            className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2124,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-400 font-semibold mb-1",
                                            children: "Inspection Notes / Batch"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "e.g. Physical carton inspection passed OK",
                                            value: grnNotes,
                                            onChange: (e)=>setGrnNotes(e.target.value),
                                            className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2135,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-lg bg-blue-950/40 border border-blue-800/60 text-slate-300 text-[11px]",
                            children: [
                                "⚡ ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Stock Ledger Rule:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2146,
                                    columnNumber: 15
                                }, this),
                                " Only physically inspected and verified quantities enter active warehouse stock. A formal GRN document and immutable ledger record will be generated automatically."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2145,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/StockView.tsx",
                    lineNumber: 2044,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 2022,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isTransferModalOpen,
                onClose: ()=>setIsTransferModalOpen(false),
                title: "Inter-Warehouse Stock Transfer",
                footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsTransferModalOpen(false),
                            className: "w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold min-h-[42px] transition active:scale-95",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2158,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleStockTransfer,
                            className: "w-full sm:w-auto px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30 min-h-[42px] transition active:scale-95",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightLeft$3e$__["ArrowRightLeft"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2168,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Authorize Transfer"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2169,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2164,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "From Warehouse (Origin)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2177,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: transferFromWarehouse,
                                            onChange: (e)=>{
                                                const newOrigin = e.target.value;
                                                setTransferFromWarehouse(newOrigin);
                                                const eligible = warehouseStock.filter((s)=>s.warehouseName === newOrigin && s.available > 0);
                                                if (eligible.length > 0) {
                                                    setTransferStockItemId(eligible[0].id);
                                                } else {
                                                    setTransferStockItemId('');
                                                }
                                            },
                                            className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs",
                                            children: WAREHOUSE_OPTIONS.map((wh)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: wh,
                                                    children: wh
                                                }, wh, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2193,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2178,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "To Warehouse (Destination)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2201,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: transferToWarehouse,
                                            onChange: (e)=>setTransferToWarehouse(e.target.value),
                                            className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs",
                                            children: WAREHOUSE_OPTIONS.filter((wh)=>wh !== transferFromWarehouse).map((wh)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: wh,
                                                    children: wh
                                                }, wh, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2208,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2202,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2200,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Select Product to Transfer *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2217,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: transferStockItemId,
                                    onChange: (e)=>setTransferStockItemId(e.target.value),
                                    className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs",
                                    children: warehouseStock.filter((s)=>s.warehouseName === transferFromWarehouse && s.available > 0).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: s.id,
                                            children: [
                                                s.productName,
                                                " (",
                                                s.sku,
                                                ") • Available: ",
                                                s.available,
                                                " pcs"
                                            ]
                                        }, s.id, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2226,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2218,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2216,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Transfer Quantity (pcs) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2235,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "1",
                                            value: transferQty,
                                            onChange: (e)=>setTransferQty(Math.max(1, Number(e.target.value))),
                                            className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100 font-bold text-xs"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2236,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2234,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-400 font-semibold mb-1",
                                            children: "Challan / Transit Reference"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2246,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "e.g. Inter-depot Dispatch Challan #44",
                                            value: transferNotes,
                                            onChange: (e)=>setTransferNotes(e.target.value),
                                            className: "w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2247,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2245,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2233,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/StockView.tsx",
                    lineNumber: 2174,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 2152,
                columnNumber: 7
            }, this),
            isDecreaseModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isDecreaseModalOpen,
                onClose: ()=>setIsDecreaseModalOpen(false),
                title: "Decrease / Deduct Inventory Stock (স্টক কমানো ও অ্যাডজাস্টমেন্ট)",
                maxWidth: "xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleDecreaseStockSubmit,
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Source Warehouse / Store (গুদাম নির্বাচন) *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2272,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: decreaseWarehouse,
                                    onChange: (e)=>{
                                        const wh = e.target.value;
                                        setDecreaseWarehouse(wh);
                                        const inWh = warehouseStock.filter((s)=>s.warehouseName === wh && s.available > 0);
                                        if (inWh.length > 0) {
                                            setDecreaseStockItemId(inWh[0].id);
                                        } else {
                                            setDecreaseStockItemId('');
                                        }
                                    },
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-rose-500 focus:outline-none",
                                    children: WAREHOUSE_OPTIONS.map((wh)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: wh,
                                            children: wh
                                        }, wh, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2290,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2275,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2271,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Product & Available Balance (পণ্য নির্বাচন) *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2299,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: decreaseStockItemId,
                                    onChange: (e)=>{
                                        setDecreaseStockItemId(e.target.value);
                                        const sel = warehouseStock.find((s)=>s.id === e.target.value);
                                        if (sel && decreaseQty > sel.available) {
                                            setDecreaseQty(Math.max(1, sel.available));
                                        }
                                    },
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-rose-500 focus:outline-none",
                                    required: true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "-- Choose Product to Decrease Stock --"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2314,
                                            columnNumber: 17
                                        }, this),
                                        warehouseStock.filter((s)=>s.warehouseName === decreaseWarehouse).map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: st.id,
                                                disabled: st.available <= 0,
                                                children: [
                                                    st.productName,
                                                    " (",
                                                    st.sku,
                                                    ") — Available: ",
                                                    st.available,
                                                    " pcs ",
                                                    st.available <= 0 ? '(Out of Stock)' : ''
                                                ]
                                            }, st.id, true, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 2318,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2302,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2298,
                            columnNumber: 13
                        }, this),
                        selectedDecreaseStock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-400 font-medium",
                                            children: "Selected Item:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2329,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-100 font-bold",
                                            children: selectedDecreaseStock.productName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2330,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2328,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-2 pt-1 border-t border-slate-900 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-900 p-2 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] text-slate-400",
                                                    children: "Current Available"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2334,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-bold text-emerald-400 mt-0.5",
                                                    children: [
                                                        selectedDecreaseStock.available,
                                                        " pcs"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2335,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2333,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-900 p-2 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] text-slate-400",
                                                    children: "Unit Landed Cost"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2338,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-bold text-slate-200 mt-0.5",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].currency(selectedDecreaseStock.unitLandedCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2339,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2337,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-900 p-2 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] text-slate-400",
                                                    children: "Total Valuation"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2342,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-bold text-blue-400 mt-0.5",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].currency(selectedDecreaseStock.available * selectedDecreaseStock.unitLandedCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2343,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2341,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2332,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2327,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-slate-300 font-semibold",
                                            children: "Decrease Quantity (কমানোর পরিমাণ) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2354,
                                            columnNumber: 17
                                        }, this),
                                        selectedDecreaseStock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                [
                                                    1,
                                                    5,
                                                    10,
                                                    50
                                                ].map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        disabled: selectedDecreaseStock.available < preset,
                                                        onClick: ()=>setDecreaseQty(preset),
                                                        className: "px-2 py-0.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-[10px] text-slate-300 rounded font-semibold transition",
                                                        children: [
                                                            "-",
                                                            preset
                                                        ]
                                                    }, preset, true, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 2360,
                                                        columnNumber: 23
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setDecreaseQty(selectedDecreaseStock.available),
                                                    className: "px-2 py-0.5 bg-rose-600/20 hover:bg-rose-600/30 text-[10px] text-rose-300 border border-rose-500/40 rounded font-semibold transition",
                                                    children: [
                                                        "All (",
                                                        selectedDecreaseStock.available,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2370,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2358,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2353,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    min: 1,
                                    max: selectedDecreaseStock ? selectedDecreaseStock.available : 999999,
                                    value: decreaseQty || '',
                                    onChange: (e)=>setDecreaseQty(Math.max(1, Number(e.target.value))),
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 text-sm font-bold focus:border-rose-500 focus:outline-none",
                                    placeholder: "Enter quantity to deduct",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2380,
                                    columnNumber: 15
                                }, this),
                                selectedDecreaseStock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-between text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-300 flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                    className: "w-3.5 h-3.5 text-rose-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2395,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Deduction: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-rose-400",
                                                            children: [
                                                                "-",
                                                                decreaseQty || 0,
                                                                " pcs"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 2396,
                                                            columnNumber: 38
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2396,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2394,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-300",
                                            children: [
                                                "New Balance: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-emerald-400 font-bold",
                                                    children: [
                                                        Math.max(0, selectedDecreaseStock.available - (decreaseQty || 0)),
                                                        " pcs"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2399,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2398,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2393,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2352,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Reason for Stock Deduction (কমানোর কারণ / খাত) *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2407,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: decreaseReason,
                                    onChange: (e)=>setDecreaseReason(e.target.value),
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-rose-500 focus:outline-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "SALES_DELIVERY",
                                            children: "📦 Sales / Customer Delivery (কাস্টমার ডেলিভারি / বিক্রয়)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2415,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "DAMAGED_RECORD",
                                            children: "⚠️ Damaged / Broken (Move to Damaged Stock - নষ্ট মাল রেকর্ড)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2416,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "DAMAGED_WRITE_OFF",
                                            children: "🗑️ Damaged / Scrap (Total Write-Off - সম্পূর্ণ স্ক্র্যাপ/নষ্ট মাল বাতিল)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2417,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "SAMPLE_ISSUE",
                                            children: "🎁 Sample / Demo / Testing (স্যাম্পল বা টেস্টে প্রদান)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2418,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "INTERNAL_PROJECT",
                                            children: "🏗️ Project Site Consumption (সাইট প্রজেক্টে ব্যবহার)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2419,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "AUDIT_CORRECTION",
                                            children: "⚖️ Physical Inventory Audit Correction (স্টক গণনা সংশোধন)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2420,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "RETURN_SUPPLIER",
                                            children: "↩️ Return to Supplier / Vendor (সাপ্লায়ারকে ফেরত প্রদান)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2421,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2410,
                                    columnNumber: 15
                                }, this),
                                decreaseReason === 'DAMAGED_RECORD' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-amber-400 mt-1",
                                    children: [
                                        "ℹ️ This will deduct ",
                                        decreaseQty,
                                        " pcs from Available stock and add ",
                                        decreaseQty,
                                        " pcs to Damaged stock."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2424,
                                    columnNumber: 17
                                }, this),
                                decreaseReason === 'DAMAGED_WRITE_OFF' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-rose-400 mt-1",
                                    children: [
                                        "⚠️ This will permanently deduct ",
                                        decreaseQty,
                                        " pcs from inventory valuation as an operational loss."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2429,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2406,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Reference Document / Challan No. (রেফারেন্স বা চালান নং)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2437,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "e.g. CHL-2026-089, INV-014, AUDIT-SEP-26",
                                    value: decreaseRefDoc,
                                    onChange: (e)=>setDecreaseRefDoc(e.target.value),
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-rose-500 focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2440,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2436,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Notes & Justification (মন্তব্য ও বিবরণ)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2451,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    rows: 2,
                                    placeholder: "Details regarding this inventory deduction...",
                                    value: decreaseNotes,
                                    onChange: (e)=>setDecreaseNotes(e.target.value),
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-rose-500 focus:outline-none resize-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2454,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2450,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t border-slate-800 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsDecreaseModalOpen(false),
                                    className: "w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition active:scale-95 min-h-[42px]",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2465,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: !selectedDecreaseStock || selectedDecreaseStock.available <= 0 || (decreaseQty || 0) <= 0,
                                    className: "w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 disabled:opacity-50 disabled:pointer-events-none text-white font-semibold text-xs shadow-md shadow-rose-600/30 transition active:scale-95 flex items-center justify-center gap-1.5 min-h-[42px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__["MinusCircle"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2477,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Confirm Stock Deduction (স্টক কমান)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2478,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2472,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2464,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/StockView.tsx",
                    lineNumber: 2269,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 2263,
                columnNumber: 9
            }, this),
            isEditStockModalOpen && editingStockItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isEditStockModalOpen,
                onClose: ()=>{
                    setIsEditStockModalOpen(false);
                    setEditingStockItem(null);
                },
                title: `Edit Stock Record: ${editingStockItem.productName}`,
                maxWidth: "2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSaveStockEdit,
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-slate-950/80 border border-slate-800 rounded-xl flex flex-wrap items-center justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$warehouse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Warehouse$3e$__["Warehouse"], {
                                            className: "w-4 h-4 text-blue-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2502,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-slate-200",
                                            children: editingStockItem.warehouseName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2503,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2501,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-mono text-xs text-blue-400 bg-blue-950/50 px-2.5 py-0.5 rounded border border-blue-800/60 font-semibold",
                                    children: [
                                        "SKU: ",
                                        editingStockItem.sku
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2505,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2500,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1",
                                    children: "1. Product Identification & Warehouse Location"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2512,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: [
                                                "Product Name (পণ্যের নাম) ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-rose-400",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2518,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2517,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editProductName,
                                            onChange: (e)=>setEditProductName(e.target.value),
                                            placeholder: "Enter product title...",
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 text-xs focus:border-blue-500 focus:outline-none",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2520,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2516,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-300 font-semibold mb-1",
                                                    children: [
                                                        "SKU Code (এসকেইউ কোড) ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-rose-400",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 2533,
                                                            columnNumber: 43
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2532,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: editSku,
                                                    onChange: (e)=>setEditSku(e.target.value.toUpperCase()),
                                                    placeholder: "e.g. BOOKPMT, COATPIN",
                                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono text-xs uppercase focus:border-blue-500 focus:outline-none",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2535,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2531,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-300 font-semibold mb-1",
                                                    children: [
                                                        "Assigned Warehouse (গুদাম অবস্থান) ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-rose-400",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 2547,
                                                            columnNumber: 56
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2546,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: editWarehouseName,
                                                    onChange: (e)=>setEditWarehouseName(e.target.value),
                                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 text-xs focus:border-blue-500 focus:outline-none",
                                                    children: WAREHOUSE_OPTIONS.map((wh)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: wh,
                                                            children: wh
                                                        }, wh, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 2555,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2549,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2545,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2530,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2511,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between border-b border-slate-800 pb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-[11px] font-bold uppercase tracking-wider text-slate-400",
                                            children: "2. Stock Inventory Balances (মজুদ পরিমাণ)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2567,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] text-slate-400",
                                            children: [
                                                "Current in store: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-slate-200",
                                                    children: [
                                                        editingStockItem.available,
                                                        " pcs"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2570,
                                                    columnNumber: 80
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2570,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2566,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-300 font-semibold mb-1",
                                                    children: [
                                                        "Available Stock (ব্যবহারযোগ্য মজুদ) ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-rose-400",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 2576,
                                                            columnNumber: 57
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2575,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "0",
                                                    value: editAvailable,
                                                    onChange: (e)=>setEditAvailable(Math.max(0, Number(e.target.value))),
                                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-emerald-400 font-bold text-sm focus:border-blue-500 focus:outline-none",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2578,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2574,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-300 font-semibold mb-1",
                                                    children: "Reserved Stock (অর্ডারে সংরক্ষিত)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2589,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "0",
                                                    value: editReserved,
                                                    onChange: (e)=>setEditReserved(Math.max(0, Number(e.target.value))),
                                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 font-semibold text-xs focus:border-blue-500 focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2592,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2588,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-300 font-semibold mb-1",
                                                    children: "Damaged Stock (ত্রুটিপূর্ণ / নষ্ট)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2602,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "0",
                                                    value: editDamaged,
                                                    onChange: (e)=>setEditDamaged(Math.max(0, Number(e.target.value))),
                                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-rose-400 font-semibold text-xs focus:border-blue-500 focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2605,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2601,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2573,
                                    columnNumber: 15
                                }, this),
                                editAvailable !== editingStockItem.available && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-2.5 rounded-lg border text-xs flex items-center justify-between ${editAvailable > editingStockItem.available ? 'bg-emerald-950/40 border-emerald-800 text-emerald-300' : 'bg-rose-950/40 border-rose-800 text-rose-300'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2623,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Stock Count Change: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                editingStockItem.available,
                                                                " pcs"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 2625,
                                                            columnNumber: 43
                                                        }, this),
                                                        " → ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                editAvailable,
                                                                " pcs"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 2625,
                                                            columnNumber: 95
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2624,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2622,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: [
                                                "Delta: ",
                                                editAvailable - editingStockItem.available > 0 ? `+${editAvailable - editingStockItem.available}` : editAvailable - editingStockItem.available,
                                                " pcs"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2628,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2617,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2565,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1",
                                    children: "3. Cost & Valuation (ক্রয়মূল্য ও মূল্যায়ন)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2637,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-300 font-semibold mb-1",
                                                    children: [
                                                        "Unit Landed Cost (একক খরচ - ৳ BDT) ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-rose-400",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 2644,
                                                            columnNumber: 56
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2643,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "0",
                                                    step: "0.01",
                                                    value: editUnitLandedCost,
                                                    onChange: (e)=>setEditUnitLandedCost(Math.max(0, Number(e.target.value))),
                                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-blue-400 font-bold text-sm focus:border-blue-500 focus:outline-none",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2646,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2642,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-400 font-semibold mb-1",
                                                    children: "Total Inventory Valuation (মোট মূল্য)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2658,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full bg-slate-950 border border-slate-800/80 rounded-lg p-2.5 text-slate-100 font-bold text-sm flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-slate-400",
                                                            children: [
                                                                editAvailable,
                                                                " pcs × ৳",
                                                                editUnitLandedCost,
                                                                " ="
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 2662,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-blue-400 font-bold",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].currency(editAvailable * editUnitLandedCost)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 2663,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2661,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2657,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2641,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2636,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1",
                                    children: "4. Audit Note & System Synchronization"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2671,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Audit Reason / Edit Note (সংশোধনের কারণ বা বিবরণ - ঐচ্ছিক)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2676,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editAuditReason,
                                            onChange: (e)=>setEditAuditReason(e.target.value),
                                            placeholder: "e.g. Physical inventory audit adjustment, typo correction in name...",
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 text-xs focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2679,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2675,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: editSyncProductCatalog,
                                            onChange: (e)=>setEditSyncProductCatalog(e.target.checked),
                                            className: "w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2689,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-200 font-semibold block text-xs",
                                                    children: "Sync changes with Master Product Catalog (প্রোডাক্ট ক্যাটালগেও আপডেট করুন)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2696,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-400",
                                                    children: "Keep product name, SKU, landed cost, and total catalog stock synchronized across the ERP suite."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2699,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2695,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2688,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2670,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleDeleteStockItem(editingStockItem),
                                    className: "px-3.5 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition active:scale-95 min-h-[42px]",
                                    title: "Permanently remove this stock record from the warehouse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-3.5 h-3.5 text-rose-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2714,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Delete Item (মুছে ফেলুন)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2715,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2708,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 justify-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setIsEditStockModalOpen(false);
                                                setEditingStockItem(null);
                                            },
                                            className: "w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold min-h-[42px] transition active:scale-95",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2719,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 min-h-[42px] transition active:scale-95 flex items-center justify-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2733,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Save Changes (সংরক্ষণ করুন)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2734,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2729,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2718,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2707,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/StockView.tsx",
                    lineNumber: 2498,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 2489,
                columnNumber: 9
            }, this),
            isNameSkuModalOpen && nameSkuEditingItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isNameSkuModalOpen,
                onClose: ()=>{
                    setIsNameSkuModalOpen(false);
                    setNameSkuEditingItem(null);
                },
                title: "Edit Product Name & SKU Code (পণ্যের নাম ও SKU সংশোধন)",
                maxWidth: "lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSaveNameSku,
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-400 font-medium",
                                            children: "Warehouse Store:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2759,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-200 font-semibold flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$warehouse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Warehouse$3e$__["Warehouse"], {
                                                    className: "w-3.5 h-3.5 text-blue-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2761,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: nameSkuEditingItem.warehouseName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 2762,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2760,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2758,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between text-xs pt-1 border-t border-slate-900",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-400 font-medium",
                                            children: "Current Stock Balance:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2766,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-emerald-400 font-bold",
                                            children: [
                                                nameSkuEditingItem.available,
                                                " pcs"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2767,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2765,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2757,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-200 font-semibold mb-1",
                                    children: [
                                        "Product Name (পণ্যের নাম) ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-rose-400",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2774,
                                            columnNumber: 43
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2773,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: nameSkuNewName,
                                    onChange: (e)=>setNameSkuNewName(e.target.value),
                                    placeholder: "Enter full product name...",
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 text-xs font-medium focus:border-blue-500 focus:outline-none",
                                    autoFocus: true,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2776,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2772,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-200 font-semibold mb-1",
                                    children: [
                                        "SKU Code (ইউনিক এসকেইউ কোড) ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-rose-400",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2790,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2789,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: nameSkuNewSku,
                                    onChange: (e)=>setNameSkuNewSku(e.target.value.toUpperCase()),
                                    placeholder: "e.g. BOOKPMT, COATPINTRANSP",
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-blue-400 font-mono text-xs font-bold uppercase focus:border-blue-500 focus:outline-none",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2792,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-slate-400 mt-1",
                                    children: "SKU is the unique product identification code used across quotations, invoices, and stock audit."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2800,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2788,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-slate-950 border border-slate-800 rounded-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-start gap-2.5 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: nameSkuUpdateAllWarehouses,
                                        onChange: (e)=>setNameSkuUpdateAllWarehouses(e.target.checked),
                                        className: "w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-700 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 2808,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-200 font-semibold block text-xs",
                                                children: "Update across all Warehouses & Master Product Catalog (সকল গুদাম ও মূল ক্যাটালগে আপডেট করুন)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 2815,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-slate-400 block mt-0.5",
                                                children: "Recommended. Automatically updates this product's name and SKU code in all stores and in the main product catalog."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 2818,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 2814,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 2807,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2806,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setIsNameSkuModalOpen(false);
                                        setNameSkuEditingItem(null);
                                    },
                                    className: "w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold min-h-[42px] transition active:scale-95",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2827,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 min-h-[42px] transition active:scale-95 flex items-center justify-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2841,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Save Name & SKU (সংরক্ষণ করুন)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2842,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2837,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2826,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/StockView.tsx",
                    lineNumber: 2755,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 2746,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modules/StockView.tsx",
        lineNumber: 1028,
        columnNumber: 5
    }, this);
}
_s(StockView, "aK5NdWcYNKKrdNIrpa6x9qTMGTU=");
_c = StockView;
var _c;
__turbopack_refresh__.register(_c, "StockView");

})()),
}]);

//# sourceMappingURL=src_components_modules_StockView_tsx_347d73._.js.map