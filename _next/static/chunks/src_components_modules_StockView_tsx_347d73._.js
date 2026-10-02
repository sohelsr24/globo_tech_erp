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
                        lineNumber: 659,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: toastMsg
                    }, void 0, false, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 660,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 658,
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
                                        lineNumber: 676,
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
                                        lineNumber: 677,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 668,
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
                                        lineNumber: 688,
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
                                        lineNumber: 689,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 680,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 667,
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
                                        lineNumber: 696,
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
                                        lineNumber: 697,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 695,
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
                                        lineNumber: 711,
                                        columnNumber: 13
                                    }, this),
                                    WAREHOUSE_OPTIONS.map((wh)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: wh,
                                            children: wh
                                        }, wh, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 713,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 706,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 694,
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
                                                lineNumber: 734,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Cards"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 735,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 724,
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
                                                lineNumber: 747,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Table"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 748,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 737,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 723,
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
                                                lineNumber: 758,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: "Add Product"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 759,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 754,
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
                                                lineNumber: 772,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: "Receive Goods"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 773,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 762,
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
                                                lineNumber: 786,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: "Transfer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 787,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 776,
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
                                                lineNumber: 807,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: "Deduct Stock"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 808,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 790,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 753,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 721,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 665,
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
                                lineNumber: 817,
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
                                lineNumber: 818,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 816,
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
                                lineNumber: 823,
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
                                lineNumber: 824,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 822,
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
                                lineNumber: 829,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg font-bold text-blue-400 mt-0.5",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].currency(totalValuation)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 830,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 828,
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
                                lineNumber: 835,
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
                                lineNumber: 836,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 834,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 815,
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
                            lineNumber: 848,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-slate-300",
                            children: "No stock records found"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 849,
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
                                    lineNumber: 854,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Add New Product"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 855,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 850,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/StockView.tsx",
                    lineNumber: 847,
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
                                                            lineNumber: 874,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate",
                                                            children: st.warehouseName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 875,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 873,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: st.available === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "danger",
                                                        children: "Out of Stock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 879,
                                                        columnNumber: 31
                                                    }, this) : isLow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "warning",
                                                        children: "Low Stock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 881,
                                                        columnNumber: 31
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "success",
                                                        children: "Normal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 883,
                                                        columnNumber: 31
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 877,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 872,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-slate-100 text-sm leading-snug line-clamp-2",
                                            children: st.productName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 889,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-mono text-xs text-blue-400 mt-1 font-semibold",
                                            children: st.sku
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 892,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 870,
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
                                                    lineNumber: 900,
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
                                                    lineNumber: 901,
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
                                                    lineNumber: 904,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 899,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-500 uppercase font-semibold block",
                                                    children: "Landed Cost"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 908,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-sm text-slate-200",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].currency(st.unitLandedCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 909,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-500",
                                                    children: "Per unit"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 912,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 907,
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
                                                    lineNumber: 916,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-xs text-blue-400",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].currency(valuation)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 917,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 915,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 898,
                                    columnNumber: 23
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 pt-1 border-t border-slate-800/80",
                                    children: [
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
                                            className: "flex-1 min-h-[42px] py-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition active:scale-95 border border-slate-700 flex items-center justify-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-3.5 h-3.5 text-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 935,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Add Stock"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 936,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 923,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleOpenDecreaseModal(st),
                                            className: "flex-1 min-h-[42px] py-2 px-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-semibold transition active:scale-95 border border-rose-500/30 flex items-center justify-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__["MinusCircle"], {
                                                    className: "w-3.5 h-3.5 text-rose-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 942,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Deduct"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 943,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 938,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 922,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, st.id, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 866,
                            columnNumber: 21
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/modules/StockView.tsx",
                    lineNumber: 859,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 845,
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
                                        lineNumber: 956,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Warehouse Stock Inventory"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 957,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 955,
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
                                        lineNumber: 960,
                                        columnNumber: 90
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 959,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 954,
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
                                                lineNumber: 968,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Product & SKU"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 969,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Available Stock"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 970,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Reserved"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 971,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Damaged"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 972,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-right",
                                                children: "Landed Cost"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 973,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-right",
                                                children: "Valuation (Cost)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 974,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 975,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Quick Action"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 976,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 967,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 966,
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
                                                    lineNumber: 984,
                                                    columnNumber: 25
                                                }, this),
                                                ' ',
                                                "to create one."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 982,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 981,
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
                                                                lineNumber: 1003,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: st.warehouseName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                                lineNumber: 1004,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 1002,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1001,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 font-sans max-w-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-semibold text-slate-100",
                                                            children: st.productName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1008,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] font-mono text-slate-400",
                                                            children: st.sku
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1009,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1007,
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
                                                        lineNumber: 1012,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1011,
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
                                                    lineNumber: 1016,
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
                                                    lineNumber: 1019,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-right font-sans font-medium text-slate-300",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].currency(st.unitLandedCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1022,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-right font-bold font-sans text-blue-400",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].currency(valuation)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1025,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center",
                                                    children: st.available === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "danger",
                                                        children: "Out of Stock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 1030,
                                                        columnNumber: 31
                                                    }, this) : isLow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "warning",
                                                        children: "Low Stock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 1032,
                                                        columnNumber: 31
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "success",
                                                        children: "Normal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 1034,
                                                        columnNumber: 31
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1028,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center gap-1.5",
                                                        children: [
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
                                                                        lineNumber: 1052,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Add Stock"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                                        lineNumber: 1053,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                                lineNumber: 1039,
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
                                                                        lineNumber: 1060,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Decrease"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                                        lineNumber: 1061,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                                lineNumber: 1055,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 1038,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1037,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, st.id, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1000,
                                            columnNumber: 25
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 979,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 965,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 964,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 953,
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
                            lineNumber: 1080,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-slate-300",
                            children: "No stock movement records found"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1081,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/StockView.tsx",
                    lineNumber: 1079,
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
                                            lineNumber: 1093,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `px-2 py-0.5 rounded text-[10px] font-bold ${entry.movementType === 'PURCHASE_GRN' || entry.movementType === 'OPENING_STOCK' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : entry.movementType === 'PROJECT_ISSUE' || entry.movementType === 'INTERNAL_PROJECT' ? 'bg-purple-950 text-purple-400 border border-purple-800' : entry.movementType === 'TRANSFER_IN' || entry.movementType === 'TRANSFER_OUT' ? 'bg-amber-950 text-amber-400 border border-amber-800' : entry.movementType === 'DAMAGED_RECORD' || entry.movementType === 'DAMAGED_WRITE_OFF' ? 'bg-rose-950 text-rose-400 border border-rose-800' : entry.movementType === 'SALES_DELIVERY' ? 'bg-cyan-950 text-cyan-400 border border-cyan-800' : 'bg-rose-950 text-rose-400 border border-rose-800'}`,
                                            children: entry.movementType
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1096,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1092,
                                    columnNumber: 23
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-slate-100 text-sm",
                                            children: entry.productName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1116,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400 flex items-center gap-1.5 mt-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$warehouse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Warehouse$3e$__["Warehouse"], {
                                                    className: "w-3 h-3 text-slate-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1118,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: entry.warehouseName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1119,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1117,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1115,
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
                                                    lineNumber: 1125,
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
                                                    lineNumber: 1126,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1124,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-500 uppercase font-semibold block",
                                                    children: "Balance After"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1132,
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
                                                    lineNumber: 1133,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1131,
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
                                                    lineNumber: 1139,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono font-bold text-blue-400",
                                                    children: entry.referenceId
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1140,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1138,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1123,
                                    columnNumber: 23
                                }, this),
                                entry.reasonNotes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-slate-400 italic bg-slate-800/40 p-2 rounded-lg border border-slate-800",
                                    children: entry.reasonNotes
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1145,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, entry.id, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1088,
                            columnNumber: 21
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/modules/StockView.tsx",
                    lineNumber: 1084,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 1077,
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
                                        lineNumber: 1159,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Immutable Stock Ledger"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1160,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1158,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1163,
                                        columnNumber: 17
                                    }, this),
                                    "Audit Active"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1162,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 1157,
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
                                                lineNumber: 1172,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Movement Type"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1173,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Product"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1174,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Warehouse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1175,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Quantity Delta"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1176,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Balance After"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1177,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-right",
                                                children: "Landed Cost"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1178,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Reference Document"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1179,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Reason / Notes"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1180,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1171,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1170,
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
                                            lineNumber: 1186,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1185,
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
                                                    lineNumber: 1195,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 font-sans font-bold",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 py-0.5 rounded text-[10px] ${entry.movementType === 'PURCHASE_GRN' || entry.movementType === 'OPENING_STOCK' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : entry.movementType === 'PROJECT_ISSUE' || entry.movementType === 'INTERNAL_PROJECT' ? 'bg-purple-950 text-purple-400 border border-purple-800' : entry.movementType === 'TRANSFER_IN' || entry.movementType === 'TRANSFER_OUT' ? 'bg-amber-950 text-amber-400 border border-amber-800' : entry.movementType === 'DAMAGED_RECORD' || entry.movementType === 'DAMAGED_WRITE_OFF' ? 'bg-rose-950 text-rose-400 border border-rose-800' : entry.movementType === 'SALES_DELIVERY' ? 'bg-cyan-950 text-cyan-400 border border-cyan-800' : 'bg-rose-950 text-rose-400 border border-rose-800'}`,
                                                        children: entry.movementType
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                                        lineNumber: 1199,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1198,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 font-sans font-medium text-slate-200",
                                                    children: entry.productName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1217,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 font-sans text-slate-400",
                                                    children: entry.warehouseName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1220,
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
                                                    lineNumber: 1221,
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
                                                    lineNumber: 1228,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-right font-sans text-slate-300 font-medium",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].currency(entry.unitLandedCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1231,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-blue-400 font-bold",
                                                    children: entry.referenceId
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1234,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 font-sans text-slate-400 text-[11px] max-w-xs truncate",
                                                    children: entry.reasonNotes || '—'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1235,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, entry.id, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1194,
                                            columnNumber: 25
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1183,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1169,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modules/StockView.tsx",
                        lineNumber: 1168,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 1156,
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
                            lineNumber: 1256,
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
                                    lineNumber: 1266,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Save & Add Product"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1267,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1262,
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
                                                    lineNumber: 1277,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Auto-fill from Existing Registered Product (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1278,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1276,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-slate-400",
                                            children: "Select to clone details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1280,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1275,
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
                                            lineNumber: 1307,
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
                                                lineNumber: 1311,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1282,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1274,
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
                                    lineNumber: 1320,
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
                                                    lineNumber: 1326,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1325,
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
                                            lineNumber: 1328,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1324,
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
                                                            lineNumber: 1340,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1339,
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
                                                    lineNumber: 1342,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1338,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-300 font-semibold mb-1",
                                                    children: "Brand / Manufacturer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1352,
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
                                                    lineNumber: 1353,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1351,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1337,
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
                                                            lineNumber: 1366,
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
                                                                    lineNumber: 1375,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: isAddingCustomCategory ? 'Choose Existing' : '+ Add New Category'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                                    lineNumber: 1376,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1367,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1365,
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
                                                            lineNumber: 1382,
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
                                                                    lineNumber: 1401,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Add"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                                    lineNumber: 1402,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1396,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setIsAddingCustomCategory(false),
                                                            className: "px-2.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs rounded-lg",
                                                            children: "✕"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1404,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1381,
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
                                                                lineNumber: 1426,
                                                                columnNumber: 23
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "__ADD_NEW__",
                                                            className: "text-blue-400 font-bold bg-slate-900",
                                                            children: "➕ + Add New Category..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1430,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1413,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1364,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-300 font-semibold mb-1",
                                                    children: "Unit of Measure"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1438,
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
                                                            lineNumber: 1444,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "unit",
                                                            children: "unit (Units)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1445,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "box",
                                                            children: "box (Boxes)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1446,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "set",
                                                            children: "set (Sets)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1447,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "meter",
                                                            children: "meter (Meters)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1448,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "roll",
                                                            children: "roll (Rolls/Coils)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                                            lineNumber: 1449,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1439,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1437,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1363,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1319,
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
                                    lineNumber: 1457,
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
                                                    lineNumber: 1463,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1462,
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
                                                    lineNumber: 1471,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1465,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1461,
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
                                                    lineNumber: 1480,
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
                                                    lineNumber: 1483,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1479,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-300 font-semibold mb-1",
                                                    children: "Min Reorder Level"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1495,
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
                                                    lineNumber: 1496,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1494,
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
                                                            lineNumber: 1509,
                                                            columnNumber: 42
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1508,
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
                                                    lineNumber: 1511,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1507,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1478,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1456,
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
                                    lineNumber: 1526,
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
                                                    lineNumber: 1532,
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
                                                    lineNumber: 1533,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1531,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-400 font-semibold text-[11px] mb-1",
                                                    children: "Wholesale (BDT)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1543,
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
                                                    lineNumber: 1544,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1542,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-400 font-semibold text-[11px] mb-1",
                                                    children: "Project (BDT)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1554,
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
                                                    lineNumber: 1555,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1553,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-400 font-semibold text-[11px] mb-1",
                                                    children: "Dealer (BDT)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1565,
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
                                                    lineNumber: 1566,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1564,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1530,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1525,
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
                                        lineNumber: 1581,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-200 font-semibold block text-xs",
                                                children: "Enable Serial Number & Warranty Tracking"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1588,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-slate-400",
                                                children: "Allows scanning barcoded serial numbers during GRN, sales delivery, and RMA warranty claims."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/StockView.tsx",
                                                lineNumber: 1589,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/StockView.tsx",
                                        lineNumber: 1587,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/StockView.tsx",
                                lineNumber: 1580,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1579,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/StockView.tsx",
                    lineNumber: 1272,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 1250,
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
                            lineNumber: 1605,
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
                                    lineNumber: 1615,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Confirm Goods Receiving"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1616,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1611,
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
                                    lineNumber: 1624,
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
                                            lineNumber: 1631,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1625,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1623,
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
                                            lineNumber: 1641,
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
                                                    lineNumber: 1650,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Product not listed? Add New"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1651,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1642,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1640,
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
                                            lineNumber: 1666,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1655,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1639,
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
                                            lineNumber: 1676,
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
                                            lineNumber: 1677,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1675,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Unit Landed Cost (BDT) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1687,
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
                                            lineNumber: 1688,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1686,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1674,
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
                                            lineNumber: 1700,
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
                                            lineNumber: 1701,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1699,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-400 font-semibold mb-1",
                                            children: "Inspection Notes / Batch"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1711,
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
                                            lineNumber: 1712,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1710,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1698,
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
                                    lineNumber: 1723,
                                    columnNumber: 15
                                }, this),
                                " Only physically inspected and verified quantities enter active warehouse stock. A formal GRN document and immutable ledger record will be generated automatically."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1722,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/StockView.tsx",
                    lineNumber: 1621,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 1599,
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
                            lineNumber: 1735,
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
                                    lineNumber: 1745,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Authorize Transfer"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1746,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1741,
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
                                            lineNumber: 1754,
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
                                                    lineNumber: 1770,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1755,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1753,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "To Warehouse (Destination)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1778,
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
                                                    lineNumber: 1785,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1779,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1777,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1752,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Select Product to Transfer *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1794,
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
                                            lineNumber: 1803,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1795,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1793,
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
                                            lineNumber: 1812,
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
                                            lineNumber: 1813,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1811,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-400 font-semibold mb-1",
                                            children: "Challan / Transit Reference"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1823,
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
                                            lineNumber: 1824,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1822,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1810,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/StockView.tsx",
                    lineNumber: 1751,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 1729,
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
                                    lineNumber: 1849,
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
                                            lineNumber: 1867,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1852,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1848,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Product & Available Balance (পণ্য নির্বাচন) *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1876,
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
                                            lineNumber: 1891,
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
                                                lineNumber: 1895,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1879,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1875,
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
                                            lineNumber: 1906,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-100 font-bold",
                                            children: selectedDecreaseStock.productName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1907,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1905,
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
                                                    lineNumber: 1911,
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
                                                    lineNumber: 1912,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1910,
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
                                                    lineNumber: 1915,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-bold text-slate-200 mt-0.5",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].currency(selectedDecreaseStock.unitLandedCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1916,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1914,
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
                                                    lineNumber: 1919,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-bold text-blue-400 mt-0.5",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].currency(selectedDecreaseStock.available * selectedDecreaseStock.unitLandedCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1920,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1918,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1909,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1904,
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
                                            lineNumber: 1931,
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
                                                        lineNumber: 1937,
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
                                                    lineNumber: 1947,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1935,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1930,
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
                                    lineNumber: 1957,
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
                                                    lineNumber: 1972,
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
                                                            lineNumber: 1973,
                                                            columnNumber: 38
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                                    lineNumber: 1973,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1971,
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
                                                    lineNumber: 1976,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1975,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1970,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1929,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Reason for Stock Deduction (কমানোর কারণ / খাত) *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1984,
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
                                            lineNumber: 1992,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "DAMAGED_RECORD",
                                            children: "⚠️ Damaged / Broken (Move to Damaged Stock - নষ্ট মাল রেকর্ড)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1993,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "DAMAGED_WRITE_OFF",
                                            children: "🗑️ Damaged / Scrap (Total Write-Off - সম্পূর্ণ স্ক্র্যাপ/নষ্ট মাল বাতিল)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1994,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "SAMPLE_ISSUE",
                                            children: "🎁 Sample / Demo / Testing (স্যাম্পল বা টেস্টে প্রদান)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1995,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "INTERNAL_PROJECT",
                                            children: "🏗️ Project Site Consumption (সাইট প্রজেক্টে ব্যবহার)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1996,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "AUDIT_CORRECTION",
                                            children: "⚖️ Physical Inventory Audit Correction (স্টক গণনা সংশোধন)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1997,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "RETURN_SUPPLIER",
                                            children: "↩️ Return to Supplier / Vendor (সাপ্লায়ারকে ফেরত প্রদান)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 1998,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 1987,
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
                                    lineNumber: 2001,
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
                                    lineNumber: 2006,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 1983,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Reference Document / Challan No. (রেফারেন্স বা চালান নং)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2014,
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
                                    lineNumber: 2017,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2013,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Notes & Justification (মন্তব্য ও বিবরণ)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2028,
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
                                    lineNumber: 2031,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2027,
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
                                    lineNumber: 2042,
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
                                            lineNumber: 2054,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Confirm Stock Deduction (স্টক কমান)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/StockView.tsx",
                                            lineNumber: 2055,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/StockView.tsx",
                                    lineNumber: 2049,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/StockView.tsx",
                            lineNumber: 2041,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/StockView.tsx",
                    lineNumber: 1846,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/StockView.tsx",
                lineNumber: 1840,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modules/StockView.tsx",
        lineNumber: 655,
        columnNumber: 5
    }, this);
}
_s(StockView, "hFmK6HlMCJvKIPuALZ9vl5EVGZo=");
_c = StockView;
var _c;
__turbopack_refresh__.register(_c, "StockView");

})()),
}]);

//# sourceMappingURL=src_components_modules_StockView_tsx_347d73._.js.map