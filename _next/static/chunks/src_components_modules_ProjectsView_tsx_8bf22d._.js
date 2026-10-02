(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_modules_ProjectsView_tsx_8bf22d._.js", {

"[project]/src/components/modules/ProjectsView.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "INITIAL_PROJECTS": ()=>INITIAL_PROJECTS,
    "ProjectsView": ()=>ProjectsView
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/hard-hat.js [app-client] (ecmascript) <export default as HardHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageMinus$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/package-minus.js [app-client] (ecmascript) <export default as PackageMinus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/formatters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$CustomersView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/modules/CustomersView.tsx [app-client] (ecmascript)");
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
const INITIAL_PROJECTS = [
    {
        id: 'prj-01',
        projectCode: 'PRJ-2026-001',
        customerName: 'ABC Bank PLC',
        projectName: 'ABC Bank Head Office CCTV & Security Modernization',
        location: 'Motijheel Commercial Area, Dhaka',
        contractValue: 450000,
        materialLandedCost: 100000,
        laborCost: 28000,
        transportCost: 12000,
        otherCost: 5000,
        totalProjectCost: 145000,
        projectGrossProfit: 305000,
        profitMarginPercent: 67.78,
        status: 'INSTALLATION_IN_PROGRESS',
        startDate: '2026-09-01',
        materialIssues: [
            {
                id: 'iss-01',
                productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
                quantity: 10,
                unitLandedCost: 10000,
                totalCost: 100000
            }
        ],
        laborLogs: [
            {
                id: 'lab-01',
                technicianName: 'Md. Al-Amin (Lead Technician)',
                workDays: 14,
                dailyRate: 1500,
                overtimeHours: 10,
                totalLabor: 23000
            },
            {
                id: 'lab-02',
                technicianName: 'Sabbir Hossain (Assistant)',
                workDays: 5,
                dailyRate: 1000,
                overtimeHours: 0,
                totalLabor: 5000
            }
        ],
        expenses: [
            {
                id: 'exp-01',
                category: 'TRANSPORT',
                description: 'Pickup van transport for cable reels & camera mounts',
                amount: 8000,
                date: '2026-09-02'
            },
            {
                id: 'exp-02',
                category: 'MEALS_CONVEYANCE',
                description: 'Site technician daily conveyance & lunch',
                amount: 4000,
                date: '2026-09-10'
            },
            {
                id: 'exp-03',
                category: 'TOOLS_EQUIPMENT',
                description: 'Heavy duty drill bits & cable pullers',
                amount: 5000,
                date: '2026-09-03'
            }
        ]
    },
    {
        id: 'prj-02',
        projectCode: 'PRJ-2026-002',
        customerName: 'Daraz Bangladesh Limited',
        projectName: 'Narshingdi HUB Relocation & CCTV Surveillance Setup',
        location: 'Delivery Location: Narshingdi HUB',
        contractValue: 185000,
        materialLandedCost: 65000,
        laborCost: 18000,
        transportCost: 7500,
        otherCost: 4500,
        totalProjectCost: 95000,
        projectGrossProfit: 90000,
        profitMarginPercent: 48.65,
        status: 'INSTALLATION_IN_PROGRESS',
        startDate: '2026-09-15',
        materialIssues: [
            {
                id: 'iss-02',
                productName: 'Rosenberger Cat-6 UTP Pure Copper Cable (305m)',
                quantity: 2,
                unitLandedCost: 14500,
                totalCost: 29000
            },
            {
                id: 'iss-03',
                productName: 'Hikvision 4MP IP Cameras with Mounting Junctions',
                quantity: 4,
                unitLandedCost: 9000,
                totalCost: 36000
            }
        ],
        laborLogs: [
            {
                id: 'lab-03',
                technicianName: 'Engr. Sohel Rana',
                workDays: 4,
                dailyRate: 2500,
                overtimeHours: 0,
                totalLabor: 10000
            },
            {
                id: 'lab-04',
                technicianName: 'Rony (CCTV Installer)',
                workDays: 8,
                dailyRate: 1000,
                overtimeHours: 0,
                totalLabor: 8000
            }
        ],
        expenses: [
            {
                id: 'exp-04',
                category: 'TRANSPORT',
                description: 'Dhaka to Narshingdi materials transit & return',
                amount: 7500,
                date: '2026-09-16'
            },
            {
                id: 'exp-05',
                category: 'MISCELLANEOUS',
                description: 'PVC pipes, royal plugs & junction hardware',
                amount: 4500,
                date: '2026-09-17'
            }
        ]
    },
    {
        id: 'prj-03',
        projectCode: 'PRJ-2026-003',
        customerName: 'Square Pharmaceuticals Ltd',
        projectName: 'Data Center Rack Cabling & Network Switch Migration',
        location: 'Square Centre, Mohakhali, Dhaka',
        contractValue: 320000,
        materialLandedCost: 160000,
        laborCost: 35000,
        transportCost: 10000,
        otherCost: 10000,
        totalProjectCost: 215000,
        projectGrossProfit: 105000,
        profitMarginPercent: 32.81,
        status: 'COMPLETED',
        startDate: '2026-08-10',
        completionDate: '2026-09-05',
        materialIssues: [
            {
                id: 'iss-04',
                productName: 'Cisco 24-Port Gigabit Managed PoE+ Switch',
                quantity: 1,
                unitLandedCost: 110000,
                totalCost: 110000
            },
            {
                id: 'iss-05',
                productName: 'Cat6 Patch Panels & Wire Managers',
                quantity: 5,
                unitLandedCost: 10000,
                totalCost: 50000
            }
        ],
        laborLogs: [
            {
                id: 'lab-05',
                technicianName: 'Md. Al-Amin',
                workDays: 14,
                dailyRate: 1500,
                overtimeHours: 0,
                totalLabor: 21000
            },
            {
                id: 'lab-06',
                technicianName: 'Sabbir Hossain',
                workDays: 14,
                dailyRate: 1000,
                overtimeHours: 0,
                totalLabor: 14000
            }
        ],
        expenses: [
            {
                id: 'exp-06',
                category: 'TRANSPORT',
                description: 'Server rack transit to Mohakhali',
                amount: 10000,
                date: '2026-08-12'
            },
            {
                id: 'exp-07',
                category: 'MISCELLANEOUS',
                description: 'Testing, labeling & cable management ties',
                amount: 10000,
                date: '2026-08-25'
            }
        ]
    }
];
function ProjectsView() {
    _s();
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('globotech_erp_projects');
            if (saved) {
                try {
                    return JSON.parse(saved);
                } catch (e) {
                    console.error('Error loading projects:', e);
                }
            }
        }
        return INITIAL_PROJECTS;
    });
    const [selectedProjectId, setSelectedProjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(projects[0]?.id || 'prj-01');
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ALL');
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('DASHBOARD');
    // Modals
    const [isNewProjectModalOpen, setIsNewProjectModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditProjectOpen, setIsEditProjectOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isIssueMaterialOpen, setIsIssueMaterialOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLogLaborOpen, setIsLogLaborOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAddExpenseOpen, setIsAddExpenseOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPnLSheetModalOpen, setIsPnLSheetModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditMaterialCostModalOpen, setIsEditMaterialCostModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editMaterialItems, setEditMaterialItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Edit states for individual records
    const [editProjectData, setEditProjectData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: '',
        projectName: '',
        customerName: '',
        location: '',
        contractValue: '',
        status: 'INSTALLATION_IN_PROGRESS',
        notes: ''
    });
    const [editingMaterial, setEditingMaterial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingLabor, setEditingLabor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingExpense, setEditingExpense] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Saved custom clients directory
    const [customClients, setCustomClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('globotech_erp_client_directory');
            if (saved) {
                try {
                    return JSON.parse(saved);
                } catch (e) {
                    console.error('Error loading client directory:', e);
                }
            }
        }
        return [
            {
                id: 'dir-np',
                name: 'National Parliament',
                location: 'Dhaka, Bangladesh',
                source: 'database'
            },
            {
                id: 'dir-ab',
                name: 'ABC Bank PLC',
                company: 'ABC Bank PLC',
                location: 'ABC Tower, Motijheel C/A, Dhaka-1000',
                source: 'database'
            },
            {
                id: 'dir-dz',
                name: 'Daraz Bangladesh Limited',
                company: 'Daraz Bangladesh Limited',
                location: 'Tejgaon I/A, Dhaka-1208',
                source: 'database'
            },
            {
                id: 'dir-sq',
                name: 'Square Pharmaceuticals Ltd',
                company: 'Square Pharmaceuticals Ltd',
                location: 'Kaliakoir, Gazipur Plant',
                source: 'database'
            },
            {
                id: 'dir-tv',
                name: 'TechVision Security Systems',
                company: 'TechVision Security Systems',
                location: 'Multiplan Center, Level 6, Elephant Road, Dhaka',
                source: 'database'
            }
        ];
    });
    // Save projects to localStorage whenever updated
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof window !== 'undefined') {
            try {
                localStorage.setItem('globotech_erp_projects', JSON.stringify(projects));
            } catch (e) {
                console.error('Error saving projects to localStorage:', e);
            }
        }
    }, [
        projects
    ]);
    // Save custom client directory to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof window !== 'undefined') {
            try {
                localStorage.setItem('globotech_erp_client_directory', JSON.stringify(customClients));
            } catch (e) {
                console.error('Error saving client directory to localStorage:', e);
            }
        }
    }, [
        customClients
    ]);
    // Listen for global backup restore event
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleBackupRestored = ()=>{
            if (typeof window !== 'undefined') {
                const saved = localStorage.getItem('globotech_erp_projects');
                if (saved) {
                    try {
                        setProjects(JSON.parse(saved));
                    } catch (e) {
                        console.error('Error reloading projects after backup restore:', e);
                    }
                }
                const savedClients = localStorage.getItem('globotech_erp_client_directory');
                if (savedClients) {
                    try {
                        setCustomClients(JSON.parse(savedClients));
                    } catch (e) {}
                }
            }
        };
        window.addEventListener('globotech_backup_restored', handleBackupRestored);
        return ()=>window.removeEventListener('globotech_backup_restored', handleBackupRestored);
    }, []);
    const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const customerDropdownRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    // Close customer dropdown on outside click
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (e)=>{
            if (customerDropdownRef.current && !customerDropdownRef.current.contains(e.target)) {
                setIsCustomerDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    // Aggregated client options from CustomersView, projects, and custom directory
    const allClientOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        // 1. Add from customClients
        customClients.forEach((c)=>{
            if (c.name && c.name.trim()) {
                map.set(c.name.trim().toLowerCase(), c);
            }
        });
        // 2. Add from CustomersView (localStorage or INITIAL_CUSTOMERS)
        let customersList = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$CustomersView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_CUSTOMERS"];
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('globotech_erp_customers');
            if (saved) {
                try {
                    customersList = JSON.parse(saved);
                } catch (e) {
                // ignore
                }
            }
        }
        customersList.forEach((cust)=>{
            const displayName = cust.company?.trim() || cust.name.trim();
            const key = displayName.toLowerCase();
            if (!map.has(key)) {
                map.set(key, {
                    id: cust.id,
                    name: displayName,
                    company: cust.company,
                    location: cust.address,
                    phone: cust.phone,
                    source: 'database'
                });
            }
        });
        // 3. Add from existing projects
        projects.forEach((prj)=>{
            const key = prj.customerName.trim().toLowerCase();
            if (key && !map.has(key)) {
                map.set(key, {
                    id: `prj-${prj.id}`,
                    name: prj.customerName.trim(),
                    location: prj.location,
                    source: 'past_project'
                });
            }
        });
        return Array.from(map.values()).sort((a, b)=>a.name.localeCompare(b.name));
    }, [
        customClients,
        projects
    ]);
    // New Project Form
    const [newProject, setNewProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        projectName: '',
        customerName: '',
        location: '',
        contractValue: 150000,
        status: 'INSTALLATION_IN_PROGRESS',
        notes: ''
    });
    // Filtered clients based on user typing
    const filteredClients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const query = newProject.customerName.trim().toLowerCase();
        if (!query) return allClientOptions;
        return allClientOptions.filter((c)=>c.name.toLowerCase().includes(query) || c.location && c.location.toLowerCase().includes(query) || c.company && c.company.toLowerCase().includes(query) || c.phone && c.phone.includes(query));
    }, [
        allClientOptions,
        newProject.customerName
    ]);
    const handleSelectClient = (client)=>{
        setNewProject((prev)=>({
                ...prev,
                customerName: client.name,
                location: (!prev.location || prev.location.trim() === '') && client.location ? client.location : prev.location
            }));
        setIsCustomerDropdownOpen(false);
    };
    // Material Issue Form
    const [issueQty, setIssueQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [issueProduct, setIssueProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [issueUnitCost, setIssueUnitCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Labor Form
    const [techName, setTechName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Md. Al-Amin');
    const [workDays, setWorkDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const [dailyRate, setDailyRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1500);
    // Direct Expense Form
    const [expenseCategory, setExpenseCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('TRANSPORT');
    const [expenseDesc, setExpenseDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [expenseAmount, setExpenseAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5000);
    // Save to localStorage whenever projects change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof window !== 'undefined') {
            localStorage.setItem('globotech_erp_projects', JSON.stringify(projects));
        }
    }, [
        projects
    ]);
    const selectedProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return projects.find((p)=>p.id === selectedProjectId) || projects[0] || null;
    }, [
        projects,
        selectedProjectId
    ]);
    // Overall Financial Aggregates
    const financialSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const totalContract = projects.reduce((acc, p)=>acc + p.contractValue, 0);
        const totalMaterial = projects.reduce((acc, p)=>acc + p.materialLandedCost, 0);
        const totalLabor = projects.reduce((acc, p)=>acc + p.laborCost, 0);
        const totalTransport = projects.reduce((acc, p)=>acc + p.transportCost, 0);
        const totalOther = projects.reduce((acc, p)=>acc + p.otherCost, 0);
        const totalCost = totalMaterial + totalLabor + totalTransport + totalOther;
        const totalProfit = totalContract - totalCost;
        const avgMargin = totalContract > 0 ? totalProfit / totalContract * 100 : 0;
        return {
            totalContract,
            totalMaterial,
            totalLabor,
            totalTransport,
            totalOther,
            totalCost,
            totalProfit,
            avgMargin
        };
    }, [
        projects
    ]);
    const filteredProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return projects.filter((p)=>{
            const matchesSearch = p.projectName.toLowerCase().includes(search.toLowerCase()) || p.projectCode.toLowerCase().includes(search.toLowerCase()) || p.customerName.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase());
            const matchesStatus = filterStatus === 'ALL' || p.status === filterStatus;
            return matchesSearch && matchesStatus;
        });
    }, [
        projects,
        search,
        filterStatus
    ]);
    // Handle Add New Project
    const handleCreateProject = (e)=>{
        e.preventDefault();
        if (!newProject.projectName.trim() || !newProject.customerName.trim()) return;
        const nextNumber = projects.length + 1;
        const projectCode = `PRJ-2026-${String(nextNumber).padStart(3, '0')}`;
        const contractVal = Number(newProject.contractValue) || 0;
        const createdPrj = {
            id: `prj-${Date.now()}`,
            projectCode,
            customerName: newProject.customerName.trim(),
            projectName: newProject.projectName.trim(),
            location: newProject.location.trim() || 'Dhaka, Bangladesh',
            contractValue: contractVal,
            materialLandedCost: 0,
            laborCost: 0,
            transportCost: 0,
            otherCost: 0,
            totalProjectCost: 0,
            projectGrossProfit: contractVal,
            profitMarginPercent: 100,
            status: newProject.status,
            startDate: new Date().toISOString().split('T')[0],
            notes: newProject.notes,
            materialIssues: [],
            laborLogs: [],
            expenses: []
        };
        const updated = [
            createdPrj,
            ...projects
        ];
        setProjects(updated);
        setSelectedProjectId(createdPrj.id);
        setIsNewProjectModalOpen(false);
        setIsCustomerDropdownOpen(false);
        // Auto-save client to directory if new
        const trimmedCustomer = newProject.customerName.trim();
        const clientExists = allClientOptions.some((c)=>c.name.toLowerCase() === trimmedCustomer.toLowerCase());
        if (!clientExists) {
            const newEntry = {
                id: `client-${Date.now()}`,
                name: trimmedCustomer,
                location: newProject.location.trim() || undefined,
                source: 'past_project'
            };
            const updatedClients = [
                newEntry,
                ...customClients
            ];
            setCustomClients(updatedClients);
            if (typeof window !== 'undefined') {
                localStorage.setItem('globotech_erp_client_directory', JSON.stringify(updatedClients));
            }
        }
        // Auto-sync customer to CustomersView ledger in localStorage
        if (typeof window !== 'undefined') {
            try {
                const savedCustStr = localStorage.getItem('globotech_erp_customers');
                let existingCusts = savedCustStr ? JSON.parse(savedCustStr) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$CustomersView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_CUSTOMERS"];
                const existsInCusts = existingCusts.some((c)=>c.company && c.company.toLowerCase() === trimmedCustomer.toLowerCase() || c.name.toLowerCase() === trimmedCustomer.toLowerCase());
                if (!existsInCusts) {
                    const newCustRecord = {
                        id: `cust-${Date.now()}`,
                        name: trimmedCustomer,
                        company: trimmedCustomer,
                        type: 'CORPORATE',
                        phone: 'N/A',
                        address: newProject.location.trim() || 'Dhaka, Bangladesh',
                        creditLimit: 500000,
                        totalInvoiced: contractVal,
                        totalPaid: 0,
                        currentDues: contractVal,
                        paymentTerms: 'Net 30 Days',
                        transactions: [
                            {
                                id: `tx-${Date.now()}`,
                                date: new Date().toISOString().split('T')[0],
                                type: 'INVOICE',
                                refNo: projectCode,
                                description: `Project Contract: ${newProject.projectName.trim()}`,
                                invoicedAmount: contractVal,
                                paidAmount: 0,
                                balance: contractVal
                            }
                        ]
                    };
                    existingCusts = [
                        newCustRecord,
                        ...existingCusts
                    ];
                    localStorage.setItem('globotech_erp_customers', JSON.stringify(existingCusts));
                }
            } catch (e) {
                console.error('Error syncing customer with directory:', e);
            }
        }
        setNewProject({
            projectName: '',
            customerName: '',
            location: '',
            contractValue: 150000,
            status: 'INSTALLATION_IN_PROGRESS',
            notes: ''
        });
    };
    // Handle Issue Material
    const handleIssueMaterial = ()=>{
        if (!selectedProject) return;
        const prodName = issueProduct.trim();
        if (!prodName) return;
        const qty = Number(issueQty) || 0;
        if (qty <= 0) return;
        const unitCost = Number(issueUnitCost) || 0;
        const addedCost = qty * unitCost;
        const newIssue = {
            id: `iss-${Date.now()}`,
            productName: prodName,
            quantity: qty,
            unitLandedCost: unitCost,
            totalCost: addedCost
        };
        const updatedMaterials = [
            ...selectedProject.materialIssues,
            newIssue
        ];
        const newMaterialCost = selectedProject.materialLandedCost + addedCost;
        const newTotalCost = newMaterialCost + selectedProject.laborCost + selectedProject.transportCost + selectedProject.otherCost;
        const newProfit = selectedProject.contractValue - newTotalCost;
        const newMargin = selectedProject.contractValue > 0 ? newProfit / selectedProject.contractValue * 100 : 0;
        const updatedPrj = {
            ...selectedProject,
            materialIssues: updatedMaterials,
            materialLandedCost: newMaterialCost,
            totalProjectCost: newTotalCost,
            projectGrossProfit: newProfit,
            profitMarginPercent: newMargin
        };
        setProjects(projects.map((p)=>p.id === updatedPrj.id ? updatedPrj : p));
        setIsIssueMaterialOpen(false);
    };
    // Handle Log Labor
    const handleLogLabor = ()=>{
        if (!selectedProject || workDays <= 0) return;
        const addedLabor = workDays * dailyRate;
        const newLabor = {
            id: `lab-${Date.now()}`,
            technicianName: techName,
            workDays,
            dailyRate,
            overtimeHours: 0,
            totalLabor: addedLabor
        };
        const updatedLaborList = [
            ...selectedProject.laborLogs,
            newLabor
        ];
        const newLaborCost = selectedProject.laborCost + addedLabor;
        const newTotalCost = selectedProject.materialLandedCost + newLaborCost + selectedProject.transportCost + selectedProject.otherCost;
        const newProfit = selectedProject.contractValue - newTotalCost;
        const newMargin = selectedProject.contractValue > 0 ? newProfit / selectedProject.contractValue * 100 : 0;
        const updatedPrj = {
            ...selectedProject,
            laborLogs: updatedLaborList,
            laborCost: newLaborCost,
            totalProjectCost: newTotalCost,
            projectGrossProfit: newProfit,
            profitMarginPercent: newMargin
        };
        setProjects(projects.map((p)=>p.id === updatedPrj.id ? updatedPrj : p));
        setIsLogLaborOpen(false);
    };
    // Handle Add Direct Expense
    const handleAddExpense = (e)=>{
        e.preventDefault();
        if (!selectedProject || expenseAmount <= 0) return;
        const newExp = {
            id: `exp-${Date.now()}`,
            category: expenseCategory,
            description: expenseDesc.trim() || `${expenseCategory} expense`,
            amount: expenseAmount,
            date: new Date().toISOString().split('T')[0]
        };
        const isTransport = expenseCategory === 'TRANSPORT';
        const newTransportCost = selectedProject.transportCost + (isTransport ? expenseAmount : 0);
        const newOtherCost = selectedProject.otherCost + (!isTransport ? expenseAmount : 0);
        const newTotalCost = selectedProject.materialLandedCost + selectedProject.laborCost + newTransportCost + newOtherCost;
        const newProfit = selectedProject.contractValue - newTotalCost;
        const newMargin = selectedProject.contractValue > 0 ? newProfit / selectedProject.contractValue * 100 : 0;
        const updatedPrj = {
            ...selectedProject,
            expenses: [
                ...selectedProject.expenses || [],
                newExp
            ],
            transportCost: newTransportCost,
            otherCost: newOtherCost,
            totalProjectCost: newTotalCost,
            projectGrossProfit: newProfit,
            profitMarginPercent: newMargin
        };
        setProjects(projects.map((p)=>p.id === updatedPrj.id ? updatedPrj : p));
        setIsAddExpenseOpen(false);
        setExpenseDesc('');
        setExpenseAmount(5000);
    };
    // --- EDIT PROJECT HANDLERS ---
    const openEditProjectModal = (prj)=>{
        setEditProjectData({
            id: prj.id,
            projectName: prj.projectName,
            customerName: prj.customerName,
            location: prj.location,
            contractValue: prj.contractValue,
            status: prj.status,
            notes: prj.notes || ''
        });
        setIsEditProjectOpen(true);
    };
    const handleUpdateProject = (e)=>{
        e.preventDefault();
        if (!editProjectData.projectName.trim() || !editProjectData.customerName.trim()) return;
        const contractVal = Number(editProjectData.contractValue) || 0;
        const updatedProjects = projects.map((p)=>{
            if (p.id === editProjectData.id) {
                const newGrossProfit = contractVal - p.totalProjectCost;
                const newMargin = contractVal > 0 ? newGrossProfit / contractVal * 100 : 0;
                return {
                    ...p,
                    projectName: editProjectData.projectName.trim(),
                    customerName: editProjectData.customerName.trim(),
                    location: editProjectData.location.trim() || 'Dhaka, Bangladesh',
                    contractValue: contractVal,
                    status: editProjectData.status,
                    notes: editProjectData.notes,
                    projectGrossProfit: newGrossProfit,
                    profitMarginPercent: newMargin
                };
            }
            return p;
        });
        setProjects(updatedProjects);
        setIsEditProjectOpen(false);
    };
    const handleDeleteProject = (projectId)=>{
        if (typeof window !== 'undefined' && !window.confirm('Are you sure you want to delete this project? All associated material, labor, and expense entries will be deleted.')) {
            return;
        }
        const remaining = projects.filter((p)=>p.id !== projectId);
        setProjects(remaining);
        if (selectedProjectId === projectId) {
            setSelectedProjectId(remaining[0]?.id || '');
        }
    };
    // --- DIRECT EDIT TOTAL MATERIALS COST HANDLER (UNIT, UNIT COST, TOTAL) ---
    const openEditMaterialCostModal = ()=>{
        if (!selectedProject) return;
        if (selectedProject.materialIssues && selectedProject.materialIssues.length > 0) {
            setEditMaterialItems(selectedProject.materialIssues.map((m)=>{
                const qty = m.quantity === 0 ? '' : m.quantity;
                const unit = m.unitLandedCost === 0 ? '' : m.unitLandedCost;
                const tot = m.totalCost === 0 ? '' : m.totalCost;
                return {
                    id: m.id,
                    productName: m.productName,
                    quantity: qty,
                    unitLandedCost: unit,
                    totalCost: tot !== '' ? tot : qty !== '' && unit !== '' ? Number((Number(qty) * Number(unit)).toFixed(2)) : ''
                };
            }));
        } else {
            const initCost = selectedProject.materialLandedCost > 0 ? selectedProject.materialLandedCost : '';
            setEditMaterialItems([
                {
                    id: `iss-${Date.now()}`,
                    productName: selectedProject.projectName || 'General Materials',
                    quantity: 1,
                    unitLandedCost: initCost,
                    totalCost: initCost
                }
            ]);
        }
        setIsEditMaterialCostModalOpen(true);
    };
    const handleMaterialItemChange = (index, field, value)=>{
        setEditMaterialItems((prev)=>{
            const next = [
                ...prev
            ];
            const item = {
                ...next[index]
            };
            if (field === 'productName') {
                item.productName = value;
            } else if (field === 'quantity') {
                const q = value === '' ? '' : Number(value);
                item.quantity = q;
                const u = item.unitLandedCost === '' ? '' : Number(item.unitLandedCost);
                if (q !== '' && u !== '') {
                    item.totalCost = Number((Number(q) * Number(u)).toFixed(2));
                } else if (q === '') {
                    item.totalCost = '';
                }
            } else if (field === 'unitLandedCost') {
                const u = value === '' ? '' : Number(value);
                item.unitLandedCost = u;
                const q = item.quantity === '' ? 1 : Number(item.quantity);
                if (u !== '') {
                    item.totalCost = Number((Number(q) * Number(u)).toFixed(2));
                } else {
                    item.totalCost = '';
                }
            } else if (field === 'totalCost') {
                const t = value === '' ? '' : Number(value);
                item.totalCost = t;
                const q = item.quantity === '' || Number(item.quantity) <= 0 ? 1 : Number(item.quantity);
                if (t !== '') {
                    item.unitLandedCost = Number((Number(t) / q).toFixed(2));
                } else {
                    item.unitLandedCost = '';
                }
            }
            next[index] = item;
            return next;
        });
    };
    const handleAddMaterialItem = ()=>{
        setEditMaterialItems((prev)=>[
                ...prev,
                {
                    id: `iss-${Date.now()}-${Math.random()}`,
                    productName: '',
                    quantity: 1,
                    unitLandedCost: '',
                    totalCost: ''
                }
            ]);
    };
    const handleRemoveMaterialItem = (index)=>{
        setEditMaterialItems((prev)=>{
            if (prev.length <= 1) {
                return [
                    {
                        id: `iss-${Date.now()}`,
                        productName: '',
                        quantity: '',
                        unitLandedCost: '',
                        totalCost: ''
                    }
                ];
            }
            return prev.filter((_, i)=>i !== index);
        });
    };
    const handleSaveDirectMaterialCost = (e)=>{
        e.preventDefault();
        if (!selectedProject) return;
        const validItems = editMaterialItems.filter((it)=>it.productName.trim() || Number(it.totalCost) > 0 || Number(it.quantity) > 0).map((it, idx)=>{
            const qty = it.quantity !== '' && Number(it.quantity) > 0 ? Number(it.quantity) : 1;
            const total = it.totalCost !== '' ? Number(it.totalCost) : it.unitLandedCost !== '' ? Number((qty * Number(it.unitLandedCost)).toFixed(2)) : 0;
            const unit = it.unitLandedCost !== '' ? Number(it.unitLandedCost) : qty > 0 ? Number((total / qty).toFixed(2)) : total;
            return {
                id: it.id || `iss-${Date.now()}-${idx}`,
                productName: it.productName.trim() || `Material Item #${idx + 1}`,
                quantity: qty,
                unitLandedCost: unit,
                totalCost: total
            };
        });
        const newMaterialCost = validItems.reduce((acc, it)=>acc + it.totalCost, 0);
        const newTotalCost = newMaterialCost + selectedProject.laborCost + selectedProject.transportCost + selectedProject.otherCost;
        const newProfit = selectedProject.contractValue - newTotalCost;
        const newMargin = selectedProject.contractValue > 0 ? newProfit / selectedProject.contractValue * 100 : 0;
        const updatedPrj = {
            ...selectedProject,
            materialIssues: validItems,
            materialLandedCost: newMaterialCost,
            totalProjectCost: newTotalCost,
            projectGrossProfit: newProfit,
            profitMarginPercent: newMargin
        };
        setProjects(projects.map((p)=>p.id === updatedPrj.id ? updatedPrj : p));
        setIsEditMaterialCostModalOpen(false);
    };
    // --- PRINT HANDLER FOR PROJECT P&L AUDIT STATEMENT (ISOLATED IFRAME) ---
    const handlePrintPnLSheet = ()=>{
        const printElement = document.getElementById('printable-project-sheet');
        if (!printElement) {
            window.print();
            return;
        }
        try {
            const oldFrame = document.getElementById('isolated-pnl-print-frame');
            if (oldFrame) {
                oldFrame.remove();
            }
            const printIframe = document.createElement('iframe');
            printIframe.id = 'isolated-pnl-print-frame';
            printIframe.style.position = 'fixed';
            printIframe.style.right = '0';
            printIframe.style.bottom = '0';
            printIframe.style.width = '0';
            printIframe.style.height = '0';
            printIframe.style.border = '0';
            document.body.appendChild(printIframe);
            const frameDoc = printIframe.contentWindow?.document;
            if (!frameDoc) {
                window.print();
                return;
            }
            const sheetHtml = printElement.innerHTML;
            frameDoc.open();
            frameDoc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <title>Project P&L Statement - ${selectedProject?.projectCode || 'Globo Tech'}</title>
            <style>
              @page {
                size: A4 portrait;
                margin: 8mm 12mm 8mm 12mm;
              }
              *, *::before, *::after {
                box-sizing: border-box;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              html, body {
                margin: 0;
                padding: 0;
                background-color: #ffffff !important;
                color: #000000 !important;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                -webkit-font-smoothing: antialiased;
              }
              .pnl-sheet-wrapper {
                width: 100%;
                max-width: 186mm;
                min-height: 275mm;
                margin: 0 auto;
                box-sizing: border-box;
                background: #ffffff;
                color: #000000;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              }
              table {
                width: 100%;
                border-collapse: collapse;
              }
            </style>
          </head>
          <body>
            <div class="pnl-sheet-wrapper">
              ${sheetHtml}
            </div>
          </body>
        </html>
      `);
            frameDoc.close();
            setTimeout(()=>{
                printIframe.contentWindow?.focus();
                printIframe.contentWindow?.print();
                setTimeout(()=>{
                    printIframe.remove();
                }, 2000);
            }, 350);
        } catch (err) {
            console.error('Iframe print failed, falling back to window.print()', err);
            window.print();
        }
    };
    // --- EDIT & DELETE MATERIAL HANDLERS ---
    const handleUpdateMaterial = (e)=>{
        e.preventDefault();
        if (!selectedProject || !editingMaterial) return;
        const qty = Number(editingMaterial.quantity) || 0;
        const cost = Number(editingMaterial.unitLandedCost) || 0;
        if (!editingMaterial.productName.trim() || qty <= 0) return;
        const updatedMaterials = selectedProject.materialIssues.map((m)=>{
            if (m.id === editingMaterial.id) {
                return {
                    ...m,
                    productName: editingMaterial.productName.trim(),
                    quantity: qty,
                    unitLandedCost: cost,
                    totalCost: qty * cost
                };
            }
            return m;
        });
        const newMaterialCost = updatedMaterials.reduce((sum, item)=>sum + item.totalCost, 0);
        const newTotalCost = newMaterialCost + selectedProject.laborCost + selectedProject.transportCost + selectedProject.otherCost;
        const newProfit = selectedProject.contractValue - newTotalCost;
        const newMargin = selectedProject.contractValue > 0 ? newProfit / selectedProject.contractValue * 100 : 0;
        const updatedPrj = {
            ...selectedProject,
            materialIssues: updatedMaterials,
            materialLandedCost: newMaterialCost,
            totalProjectCost: newTotalCost,
            projectGrossProfit: newProfit,
            profitMarginPercent: newMargin
        };
        setProjects(projects.map((p)=>p.id === updatedPrj.id ? updatedPrj : p));
        setEditingMaterial(null);
    };
    const handleDeleteMaterial = (materialId)=>{
        if (!selectedProject) return;
        if (typeof window !== 'undefined' && !window.confirm('Are you sure you want to remove this material entry?')) return;
        const updatedMaterials = selectedProject.materialIssues.filter((m)=>m.id !== materialId);
        const newMaterialCost = updatedMaterials.reduce((sum, item)=>sum + item.totalCost, 0);
        const newTotalCost = newMaterialCost + selectedProject.laborCost + selectedProject.transportCost + selectedProject.otherCost;
        const newProfit = selectedProject.contractValue - newTotalCost;
        const newMargin = selectedProject.contractValue > 0 ? newProfit / selectedProject.contractValue * 100 : 0;
        const updatedPrj = {
            ...selectedProject,
            materialIssues: updatedMaterials,
            materialLandedCost: newMaterialCost,
            totalProjectCost: newTotalCost,
            projectGrossProfit: newProfit,
            profitMarginPercent: newMargin
        };
        setProjects(projects.map((p)=>p.id === updatedPrj.id ? updatedPrj : p));
    };
    // --- EDIT & DELETE LABOR HANDLERS ---
    const handleUpdateLabor = (e)=>{
        e.preventDefault();
        if (!selectedProject || !editingLabor) return;
        const days = Number(editingLabor.workDays) || 0;
        const rate = Number(editingLabor.dailyRate) || 0;
        if (!editingLabor.technicianName.trim() || days <= 0) return;
        const updatedLaborList = selectedProject.laborLogs.map((l)=>{
            if (l.id === editingLabor.id) {
                return {
                    ...l,
                    technicianName: editingLabor.technicianName.trim(),
                    workDays: days,
                    dailyRate: rate,
                    totalLabor: days * rate
                };
            }
            return l;
        });
        const newLaborCost = updatedLaborList.reduce((sum, item)=>sum + item.totalLabor, 0);
        const newTotalCost = selectedProject.materialLandedCost + newLaborCost + selectedProject.transportCost + selectedProject.otherCost;
        const newProfit = selectedProject.contractValue - newTotalCost;
        const newMargin = selectedProject.contractValue > 0 ? newProfit / selectedProject.contractValue * 100 : 0;
        const updatedPrj = {
            ...selectedProject,
            laborLogs: updatedLaborList,
            laborCost: newLaborCost,
            totalProjectCost: newTotalCost,
            projectGrossProfit: newProfit,
            profitMarginPercent: newMargin
        };
        setProjects(projects.map((p)=>p.id === updatedPrj.id ? updatedPrj : p));
        setEditingLabor(null);
    };
    const handleDeleteLabor = (laborId)=>{
        if (!selectedProject) return;
        if (typeof window !== 'undefined' && !window.confirm('Are you sure you want to remove this labor entry?')) return;
        const updatedLaborList = selectedProject.laborLogs.filter((l)=>l.id !== laborId);
        const newLaborCost = updatedLaborList.reduce((sum, item)=>sum + item.totalLabor, 0);
        const newTotalCost = selectedProject.materialLandedCost + newLaborCost + selectedProject.transportCost + selectedProject.otherCost;
        const newProfit = selectedProject.contractValue - newTotalCost;
        const newMargin = selectedProject.contractValue > 0 ? newProfit / selectedProject.contractValue * 100 : 0;
        const updatedPrj = {
            ...selectedProject,
            laborLogs: updatedLaborList,
            laborCost: newLaborCost,
            totalProjectCost: newTotalCost,
            projectGrossProfit: newProfit,
            profitMarginPercent: newMargin
        };
        setProjects(projects.map((p)=>p.id === updatedPrj.id ? updatedPrj : p));
    };
    // --- EDIT & DELETE EXPENSE HANDLERS ---
    const handleUpdateExpense = (e)=>{
        e.preventDefault();
        if (!selectedProject || !editingExpense) return;
        const amt = Number(editingExpense.amount) || 0;
        if (amt < 0) return;
        const updatedExpenses = (selectedProject.expenses || []).map((exp)=>{
            if (exp.id === editingExpense.id) {
                return {
                    ...exp,
                    category: editingExpense.category,
                    description: editingExpense.description.trim() || `${editingExpense.category} expense`,
                    amount: amt,
                    date: editingExpense.date
                };
            }
            return exp;
        });
        const newTransportCost = updatedExpenses.filter((e)=>e.category === 'TRANSPORT').reduce((sum, item)=>sum + item.amount, 0);
        const newOtherCost = updatedExpenses.filter((e)=>e.category !== 'TRANSPORT').reduce((sum, item)=>sum + item.amount, 0);
        const newTotalCost = selectedProject.materialLandedCost + selectedProject.laborCost + newTransportCost + newOtherCost;
        const newProfit = selectedProject.contractValue - newTotalCost;
        const newMargin = selectedProject.contractValue > 0 ? newProfit / selectedProject.contractValue * 100 : 0;
        const updatedPrj = {
            ...selectedProject,
            expenses: updatedExpenses,
            transportCost: newTransportCost,
            otherCost: newOtherCost,
            totalProjectCost: newTotalCost,
            projectGrossProfit: newProfit,
            profitMarginPercent: newMargin
        };
        setProjects(projects.map((p)=>p.id === updatedPrj.id ? updatedPrj : p));
        setEditingExpense(null);
    };
    const handleDeleteExpense = (expenseId)=>{
        if (!selectedProject) return;
        if (typeof window !== 'undefined' && !window.confirm('Are you sure you want to remove this expense entry?')) return;
        const updatedExpenses = (selectedProject.expenses || []).filter((e)=>e.id !== expenseId);
        const newTransportCost = updatedExpenses.filter((e)=>e.category === 'TRANSPORT').reduce((sum, item)=>sum + item.amount, 0);
        const newOtherCost = updatedExpenses.filter((e)=>e.category !== 'TRANSPORT').reduce((sum, item)=>sum + item.amount, 0);
        const newTotalCost = selectedProject.materialLandedCost + selectedProject.laborCost + newTransportCost + newOtherCost;
        const newProfit = selectedProject.contractValue - newTotalCost;
        const newMargin = selectedProject.contractValue > 0 ? newProfit / selectedProject.contractValue * 100 : 0;
        const updatedPrj = {
            ...selectedProject,
            expenses: updatedExpenses,
            transportCost: newTransportCost,
            otherCost: newOtherCost,
            totalProjectCost: newTotalCost,
            projectGrossProfit: newProfit,
            profitMarginPercent: newMargin
        };
        setProjects(projects.map((p)=>p.id === updatedPrj.id ? updatedPrj : p));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl no-print",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 1306,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1305,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-lg font-bold text-slate-100",
                                        children: "Project Profit & Loss (P&L) Statement"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1308,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1304,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400",
                                children: "Real-time project cost tracking: Contract Value vs Materials (at landed cost), Technician Labor, and Site Expenses"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1312,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                        lineNumber: 1303,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode('DASHBOARD'),
                                        className: `px-3 py-1.5 rounded-lg font-semibold transition ${viewMode === 'DASHBOARD' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`,
                                        children: "Dashboard View"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1320,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode('MASTER_SHEET'),
                                        className: `px-3 py-1.5 rounded-lg font-semibold transition flex items-center gap-1.5 ${viewMode === 'MASTER_SHEET' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1338,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Full P&L Sheet"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1339,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1330,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1319,
                                columnNumber: 11
                            }, this),
                            selectedProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsPnLSheetModalOpen(true),
                                className: "flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 font-semibold text-xs border border-slate-700 transition shadow-sm",
                                title: "View & Print Official Project P&L Sheet",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1349,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Print Project Sheet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1350,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1344,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsNewProjectModalOpen(true),
                                className: "flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-lg shadow-blue-600/20 active:scale-95",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1358,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "+ New Project"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1359,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1354,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                        lineNumber: 1317,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                lineNumber: 1302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4 no-print",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-semibold text-slate-400 uppercase tracking-wider block",
                                children: "Total Projects Contract"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1367,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-black text-slate-100 font-mono mt-1",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(financialSummary.totalContract)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1370,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-slate-500 mt-0.5 block",
                                children: [
                                    projects.length,
                                    " Registered Project Contracts"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1373,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                        lineNumber: 1366,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-semibold text-purple-400 uppercase tracking-wider block",
                                children: "Materials Cost (Landed)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1379,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-black text-purple-400 font-mono mt-1",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(financialSummary.totalMaterial)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1382,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-slate-500 mt-0.5 block",
                                children: "Deducted at actual unit import landed cost"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1385,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                        lineNumber: 1378,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-semibold text-amber-400 uppercase tracking-wider block",
                                children: "Labor, Transport & Site"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1391,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-black text-amber-400 font-mono mt-1",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(financialSummary.totalLabor + financialSummary.totalTransport + financialSummary.totalOther)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1394,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-slate-500 mt-0.5 block",
                                children: "Technician days, transit, tools & site misc"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1397,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                        lineNumber: 1390,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-bold text-emerald-400 uppercase tracking-wider block",
                                        children: "Total Net Profit (লাভ)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1404,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300",
                                        children: [
                                            financialSummary.avgMargin.toFixed(1),
                                            "% Margin"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1407,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1403,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-black text-emerald-400 font-mono mt-1",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(financialSummary.totalProfit)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1411,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-emerald-300/70 mt-0.5 block",
                                children: "Revenue minus all project expenses"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1414,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                        lineNumber: 1402,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                lineNumber: 1365,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-slate-900 border border-slate-800 rounded-xl no-print",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full sm:w-80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1423,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search Project Code, Name, Client, Location...",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value),
                                className: "w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1424,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                        lineNumber: 1422,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 w-full sm:w-auto overflow-x-auto",
                        children: [
                            'ALL',
                            'INSTALLATION_IN_PROGRESS',
                            'COMPLETED',
                            'PLANNING'
                        ].map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFilterStatus(st),
                                className: `px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${filterStatus === st ? 'bg-blue-600 text-white shadow' : 'bg-slate-800 text-slate-400 hover:text-slate-200'}`,
                                children: st === 'INSTALLATION_IN_PROGRESS' ? 'IN PROGRESS' : st
                            }, st, false, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1435,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                        lineNumber: 1433,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                lineNumber: 1421,
                columnNumber: 7
            }, this),
            viewMode === 'MASTER_SHEET' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl space-y-4 p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-slate-800 pb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-slate-100 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                            className: "w-4 h-4 text-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 1458,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "All Projects Master Profit & Loss Comparison Sheet"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 1459,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 1457,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-slate-400",
                                    children: "Detailed financial audit of revenue, cost breakdown (materials, labor, transport), and net profit per project."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 1461,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 1456,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                        lineNumber: 1455,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto touch-scroll",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left text-xs text-slate-300 min-w-[900px] border-collapse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-slate-950 text-slate-400 uppercase text-[10px] font-bold tracking-wider border-b border-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-3",
                                                children: "Project / Client"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1471,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-3 text-right",
                                                children: "Contract Value"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1472,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-3 text-right text-purple-400",
                                                children: "Material Cost"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1473,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-3 text-right text-blue-400",
                                                children: "Labor Cost"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1474,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-3 text-right text-amber-400",
                                                children: "Transport & Misc"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1475,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-3 text-right text-rose-400",
                                                children: "Total Cost"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1476,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-3 text-right text-emerald-400",
                                                children: "Net Profit (লাভ)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1477,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-3 text-center",
                                                children: "Margin %"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1478,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-3 text-center",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1479,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-3 text-right",
                                                children: "Action"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1480,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1470,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 1469,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-800/80",
                                    children: filteredProjects.map((prj)=>{
                                        const isProfitable = prj.projectGrossProfit >= 0;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            onClick: ()=>setSelectedProjectId(prj.id),
                                            className: `hover:bg-slate-800/50 transition cursor-pointer ${selectedProjectId === prj.id ? 'bg-slate-800/30' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[10px] font-bold text-blue-400 block",
                                                            children: prj.projectCode
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1495,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-slate-100 text-xs block leading-tight",
                                                            children: prj.projectName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1496,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] text-slate-400",
                                                            children: prj.customerName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1497,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1494,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-3 text-right font-mono font-bold text-slate-100 text-xs",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(prj.contractValue)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1499,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-3 text-right font-mono text-purple-300 text-xs",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(prj.materialLandedCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1502,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-3 text-right font-mono text-blue-300 text-xs",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(prj.laborCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1505,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-3 text-right font-mono text-amber-300 text-xs",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(prj.transportCost + prj.otherCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1508,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-3 text-right font-mono font-bold text-rose-300 text-xs",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(prj.totalProjectCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1511,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-3 text-right font-mono font-black text-sm text-emerald-400",
                                                    children: isProfitable ? `+${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(prj.projectGrossProfit)}` : `-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(Math.abs(prj.projectGrossProfit))}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1514,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-3 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 py-0.5 rounded font-mono font-bold text-[11px] ${prj.profitMarginPercent >= 40 ? 'bg-emerald-500/20 text-emerald-300' : prj.profitMarginPercent >= 20 ? 'bg-blue-500/20 text-blue-300' : 'bg-rose-500/20 text-rose-300'}`,
                                                        children: [
                                                            prj.profitMarginPercent.toFixed(1),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1518,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1517,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-3 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: prj.status === 'COMPLETED' ? 'success' : prj.status === 'INSTALLATION_IN_PROGRESS' ? 'info' : 'warning',
                                                        children: prj.status === 'INSTALLATION_IN_PROGRESS' ? 'IN PROGRESS' : prj.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1529,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1528,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-3 text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-end gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    openEditProjectModal(prj);
                                                                },
                                                                className: "px-2 py-1 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-semibold flex items-center gap-1",
                                                                title: "Edit Project",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 1551,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Edit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 1552,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1543,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    setSelectedProjectId(prj.id);
                                                                    setIsPnLSheetModalOpen(true);
                                                                },
                                                                className: "px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 1562,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "P&L Sheet"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 1563,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1554,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1542,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1541,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, prj.id, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 1487,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 1483,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-slate-950/90 font-bold border-t-2 border-slate-700 text-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3.5 px-3 uppercase text-xs",
                                                children: "Total Aggregate All Projects:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1573,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3.5 px-3 text-right font-mono text-sm",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(financialSummary.totalContract)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1574,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3.5 px-3 text-right font-mono text-purple-400",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(financialSummary.totalMaterial)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1575,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3.5 px-3 text-right font-mono text-blue-400",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(financialSummary.totalLabor)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1576,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3.5 px-3 text-right font-mono text-amber-400",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(financialSummary.totalTransport + financialSummary.totalOther)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1577,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3.5 px-3 text-right font-mono text-rose-400",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(financialSummary.totalCost)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1578,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3.5 px-3 text-right font-mono text-emerald-400 text-base font-black",
                                                children: [
                                                    "+",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(financialSummary.totalProfit)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1579,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3.5 px-3 text-center font-mono text-emerald-400",
                                                children: [
                                                    financialSummary.avgMargin.toFixed(1),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1580,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 2
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1581,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1572,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 1571,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 1468,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                        lineNumber: 1467,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                lineNumber: 1454,
                columnNumber: 9
            }, this),
            viewMode === 'DASHBOARD' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6 no-print",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-xs text-slate-400 px-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Select Project to Audit (",
                                        filteredProjects.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 1597,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1596,
                                columnNumber: 13
                            }, this),
                            filteredProjects.map((prj)=>{
                                const isSelected = selectedProject?.id === prj.id;
                                const isProfitable = prj.projectGrossProfit >= 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setSelectedProjectId(prj.id),
                                    className: `p-4 rounded-xl border cursor-pointer transition space-y-3 ${isSelected ? 'bg-slate-900 border-blue-500 shadow-lg shadow-blue-500/10' : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[10px] font-bold text-blue-400 block",
                                                            children: prj.projectCode
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1616,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-xs font-bold text-slate-100 mt-0.5 leading-snug",
                                                            children: prj.projectName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1617,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-slate-400 mt-0.5",
                                                            children: prj.customerName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1618,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1615,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                openEditProjectModal(prj);
                                                            },
                                                            className: "p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-blue-400 transition",
                                                            title: "Edit Project",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1629,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1621,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: prj.status === 'COMPLETED' ? 'success' : prj.status === 'INSTALLATION_IN_PROGRESS' ? 'info' : 'warning',
                                                            children: prj.status === 'INSTALLATION_IN_PROGRESS' ? 'IN PROGRESS' : prj.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1631,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1620,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 1614,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-slate-500 block",
                                                            children: "Contract"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1647,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-slate-200 font-mono text-[11px]",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(prj.contractValue)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1648,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1646,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-slate-500 block",
                                                            children: "Total Cost"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1651,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-rose-400 font-mono text-[11px]",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(prj.totalProjectCost)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1652,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1650,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-emerald-400 font-bold block",
                                                            children: "Profit (লাভ)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1655,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-emerald-400 font-mono text-[11px]",
                                                            children: isProfitable ? `+${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(prj.projectGrossProfit)}` : `-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(Math.abs(prj.projectGrossProfit))}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1656,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1654,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 1645,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, prj.id, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 1605,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                        lineNumber: 1595,
                        columnNumber: 11
                    }, this),
                    selectedProject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded",
                                                        children: selectedProject.projectCode
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1673,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: selectedProject.status === 'COMPLETED' ? 'success' : selectedProject.status === 'INSTALLATION_IN_PROGRESS' ? 'info' : 'warning',
                                                        children: selectedProject.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1676,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1672,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold text-slate-100 mt-1",
                                                children: selectedProject.projectName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1688,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400 flex items-center gap-2 mt-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Client: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-slate-200",
                                                                children: selectedProject.customerName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1690,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1690,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1691,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "w-3 h-3 text-slate-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1692,
                                                                columnNumber: 63
                                                            }, this),
                                                            " ",
                                                            selectedProject.location
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1692,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1689,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1671,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>openEditProjectModal(selectedProject),
                                                className: "px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition",
                                                title: "Edit Project Details & Contract Value",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                        className: "w-3.5 h-3.5 text-blue-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1702,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Edit Project"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1703,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1697,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setIssueProduct('');
                                                    setIssueQty(1);
                                                    setIssueUnitCost('');
                                                    setIsIssueMaterialOpen(true);
                                                },
                                                className: "px-3 py-1.5 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 text-xs font-semibold flex items-center gap-1.5 transition",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageMinus$3e$__["PackageMinus"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1714,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Issue Material"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1715,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1705,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsLogLaborOpen(true),
                                                className: "px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-semibold flex items-center gap-1.5 transition",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__["HardHat"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1721,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Log Labor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1722,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1717,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsAddExpenseOpen(true),
                                                className: "px-3 py-1.5 rounded-lg bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center gap-1.5 transition",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1728,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "+ Add Expense"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1729,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1724,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsPnLSheetModalOpen(true),
                                                className: "px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1735,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "P&L Sheet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1736,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1731,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1696,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1670,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950/80 p-4 rounded-xl border border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>openEditProjectModal(selectedProject),
                                        className: "p-2 rounded-xl hover:bg-slate-900 border border-transparent hover:border-slate-700 cursor-pointer transition group",
                                        title: "Click to edit contract value",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-slate-400 uppercase font-semibold block",
                                                        children: "Contract Value"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1749,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                        className: "w-3 h-3 text-slate-500 opacity-0 group-hover:opacity-100 transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1750,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1748,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base font-bold text-slate-100 font-mono",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedProject.contractValue)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1752,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1743,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>openEditMaterialCostModal(),
                                        className: "p-2 rounded-xl bg-purple-950/20 hover:bg-purple-950/40 border border-purple-500/40 hover:border-purple-400 cursor-pointer transition group shadow-sm ring-1 ring-purple-500/20 hover:ring-purple-500/40",
                                        title: "Click to edit Materials Landed Cost",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-purple-300 uppercase font-bold flex items-center gap-1.5",
                                                        children: [
                                                            "Materials (Landed)",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[9px] font-bold px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 group-hover:bg-purple-500/40 transition",
                                                                children: "Edit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1765,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1763,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                        className: "w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1769,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1762,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base font-bold text-purple-300 font-mono",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedProject.materialLandedCost)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1771,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1757,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setIsAddExpenseOpen(true),
                                        className: "p-2 rounded-xl hover:bg-slate-900 border border-transparent hover:border-amber-500/30 cursor-pointer transition group",
                                        title: "Click to add/manage labor & transport expenses",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-amber-400 uppercase font-semibold block",
                                                        children: "Labor & Transit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1782,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                        className: "w-3 h-3 text-amber-500 opacity-0 group-hover:opacity-100 transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1783,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1781,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base font-bold text-amber-400 font-mono",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedProject.laborCost + selectedProject.transportCost + selectedProject.otherCost)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1785,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1776,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-500/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-emerald-400 uppercase font-bold block",
                                                        children: "Net Profit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1792,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold text-emerald-300",
                                                        children: [
                                                            selectedProject.profitMarginPercent.toFixed(1),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1793,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1791,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-black text-emerald-400 font-mono",
                                                children: [
                                                    "+",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedProject.projectGrossProfit)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1797,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1790,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1742,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageMinus$3e$__["PackageMinus"], {
                                                        className: "w-3.5 h-3.5 text-purple-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1807,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "1. Consumed Materials (Warehouse Stock Drawn at Landed Cost)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1808,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1806,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-mono font-bold text-purple-400",
                                                        children: [
                                                            "Total: ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedProject.materialLandedCost)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1811,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>openEditMaterialCostModal(),
                                                        className: "px-2 py-0.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/40 text-[10px] font-semibold flex items-center gap-1 transition",
                                                        title: "Directly edit Total Materials Cost",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1819,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Edit Cost"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1820,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1814,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1810,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1805,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-slate-800 rounded-xl overflow-x-auto bg-slate-950",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-left text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "bg-slate-900 text-slate-400 text-[10px] uppercase font-bold",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3",
                                                                children: "Product Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1828,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3 text-center",
                                                                children: "Qty"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1829,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3 text-right",
                                                                children: "Unit Landed Cost"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1830,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3 text-right",
                                                                children: "Total Charged"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1831,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3 text-right",
                                                                children: "Action"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1832,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1827,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1826,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "divide-y divide-slate-800/80 text-slate-200",
                                                    children: selectedProject.materialIssues.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 5,
                                                            className: "py-3 px-3 text-center text-slate-500 italic",
                                                            children: "No materials issued yet. Click “Issue Material” above."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1838,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1837,
                                                        columnNumber: 25
                                                    }, this) : selectedProject.materialIssues.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-slate-900/40",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3 font-semibold",
                                                                    children: m.productName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 1845,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3 text-center font-bold text-purple-400",
                                                                    children: [
                                                                        m.quantity,
                                                                        " pcs"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 1846,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3 text-right text-slate-400 font-mono",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(m.unitLandedCost)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 1847,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3 text-right font-bold text-slate-100 font-mono",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(m.totalCost)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 1848,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3 text-right whitespace-nowrap",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-end gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setEditingMaterial(m),
                                                                                className: "p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-blue-400 transition",
                                                                                title: "Edit Material",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                                    className: "w-3.5 h-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 1856,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 1851,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleDeleteMaterial(m.id),
                                                                                className: "p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-rose-400 transition",
                                                                                title: "Delete Material",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    className: "w-3.5 h-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 1863,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 1858,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 1850,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 1849,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, m.id, true, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1844,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1835,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 1825,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1824,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1804,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__["HardHat"], {
                                                        className: "w-3.5 h-3.5 text-blue-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1879,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "2. Technician Labor & Work Days"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1880,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1878,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-mono font-bold text-blue-400",
                                                children: [
                                                    "Total: ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedProject.laborCost)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1882,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1877,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-slate-800 rounded-xl overflow-x-auto bg-slate-950",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-left text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "bg-slate-900 text-slate-400 text-[10px] uppercase font-bold",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3",
                                                                children: "Technician"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1890,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3 text-center",
                                                                children: "Work Days"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1891,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3 text-right",
                                                                children: "Daily Rate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1892,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3 text-right",
                                                                children: "Total Labor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1893,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3 text-right",
                                                                children: "Action"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1894,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1889,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1888,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "divide-y divide-slate-800/80 text-slate-200",
                                                    children: selectedProject.laborLogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 5,
                                                            className: "py-3 px-3 text-center text-slate-500 italic",
                                                            children: "No technician work days logged yet. Click “Log Labor” above."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1900,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1899,
                                                        columnNumber: 25
                                                    }, this) : selectedProject.laborLogs.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-slate-900/40",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3 font-semibold",
                                                                    children: l.technicianName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 1907,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3 text-center font-bold text-blue-400",
                                                                    children: [
                                                                        l.workDays,
                                                                        " days"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 1908,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3 text-right text-slate-400 font-mono",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(l.dailyRate)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 1909,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3 text-right font-bold text-slate-100 font-mono",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(l.totalLabor)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 1910,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3 text-right whitespace-nowrap",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-end gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setEditingLabor(l),
                                                                                className: "p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-blue-400 transition",
                                                                                title: "Edit Labor Log",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                                    className: "w-3.5 h-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 1918,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 1913,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleDeleteLabor(l.id),
                                                                                className: "p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-rose-400 transition",
                                                                                title: "Delete Labor Log",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    className: "w-3.5 h-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 1925,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 1920,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 1912,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 1911,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, l.id, true, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1906,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1897,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 1887,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1886,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1876,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                        className: "w-3.5 h-3.5 text-amber-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1941,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "3. Transport, Tools & Site Expenses"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1942,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1940,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-mono font-bold text-amber-400",
                                                children: [
                                                    "Total: ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedProject.transportCost + selectedProject.otherCost)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 1944,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1939,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-slate-800 rounded-xl overflow-x-auto bg-slate-950",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-left text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "bg-slate-900 text-slate-400 text-[10px] uppercase font-bold",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3",
                                                                children: "Category"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1952,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3",
                                                                children: "Description"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1953,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3",
                                                                children: "Date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1954,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3 text-right",
                                                                children: "Amount (৳)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1955,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3 text-right",
                                                                children: "Action"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 1956,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1951,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1950,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "divide-y divide-slate-800/80 text-slate-200",
                                                    children: !selectedProject.expenses || selectedProject.expenses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 5,
                                                            className: "py-3 px-3 text-center text-slate-500 italic",
                                                            children: "No site expenses recorded yet. Click “+ Add Expense” above."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1962,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 1961,
                                                        columnNumber: 25
                                                    }, this) : selectedProject.expenses.map((exp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-slate-900/40",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3 font-semibold text-amber-400 text-[11px]",
                                                                    children: exp.category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 1969,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3 text-slate-300",
                                                                    children: exp.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 1970,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3 text-slate-500 text-[11px]",
                                                                    children: exp.date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 1971,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3 text-right font-bold text-slate-100 font-mono",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(exp.amount)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 1972,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3 text-right whitespace-nowrap",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-end gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setEditingExpense(exp),
                                                                                className: "p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-blue-400 transition",
                                                                                title: "Edit Expense",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                                    className: "w-3.5 h-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 1980,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 1975,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleDeleteExpense(exp.id),
                                                                                className: "p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-rose-400 transition",
                                                                                title: "Delete Expense",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    className: "w-3.5 h-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 1987,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 1982,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 1974,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 1973,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, exp.id, true, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 1968,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 1959,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 1949,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 1948,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 1938,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                        lineNumber: 1668,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 p-12 text-center text-slate-500 border border-slate-800 rounded-2xl",
                        children: "Select a project from the left or create a new project."
                    }, void 0, false, {
                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                        lineNumber: 2000,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                lineNumber: 1593,
                columnNumber: 9
            }, this),
            isNewProjectModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isNewProjectModalOpen,
                onClose: ()=>setIsNewProjectModalOpen(false),
                title: "Create New Installation / Supply Project",
                size: "lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleCreateProject,
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Project Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2020,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            placeholder: "e.g. Narshingdi HUB Relocation & CCTV Setup",
                                            value: newProject.projectName,
                                            onChange: (e)=>setNewProject({
                                                    ...newProject,
                                                    projectName: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2021,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2019,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    ref: customerDropdownRef,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-300 font-semibold",
                                                    children: "Customer / Client Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2033,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-blue-400 font-medium flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 2037,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Auto-suggest"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2036,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2032,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    list: "customer-suggestions-list",
                                                    autoComplete: "off",
                                                    placeholder: "Type 1-2 letters to search or select client...",
                                                    value: newProject.customerName,
                                                    onFocus: ()=>setIsCustomerDropdownOpen(true),
                                                    onChange: (e)=>{
                                                        setNewProject({
                                                            ...newProject,
                                                            customerName: e.target.value
                                                        });
                                                        setIsCustomerDropdownOpen(true);
                                                    },
                                                    onKeyDown: (e)=>{
                                                        if (e.key === 'Escape') setIsCustomerDropdownOpen(false);
                                                    },
                                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 pr-8 text-slate-100 focus:border-blue-500 focus:outline-none placeholder-slate-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2043,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setIsCustomerDropdownOpen((prev)=>!prev),
                                                    className: "absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1.5 transition",
                                                    title: "Browse Existing Clients",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform duration-200 ${isCustomerDropdownOpen ? 'rotate-180 text-blue-400' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 2066,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2060,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2042,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                            id: "customer-suggestions-list",
                                            children: allClientOptions.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: c.name,
                                                    children: c.location ? `${c.name} (${c.location})` : c.name
                                                }, c.id, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2073,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2071,
                                            columnNumber: 17
                                        }, this),
                                        isCustomerDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-0 right-0 top-full mt-1.5 z-50 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl shadow-black max-h-56 overflow-y-auto divide-y divide-slate-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-semibold sticky top-0 z-10 backdrop-blur-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1.5 text-blue-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2084,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Existing Clients (",
                                                                filteredClients.length,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 2083,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-slate-500",
                                                            children: "Click to select & autofill"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 2087,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2082,
                                                    columnNumber: 21
                                                }, this),
                                                filteredClients.length > 0 ? filteredClients.map((client)=>{
                                                    const isMatch = newProject.customerName && client.name.toLowerCase().includes(newProject.customerName.toLowerCase().trim());
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onMouseDown: (e)=>{
                                                            e.preventDefault();
                                                            handleSelectClient(client);
                                                        },
                                                        className: `p-2.5 cursor-pointer transition flex items-start justify-between gap-2 hover:bg-blue-600/20 group ${isMatch && newProject.customerName ? 'bg-blue-950/40' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0 flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-semibold text-slate-200 group-hover:text-blue-300 text-xs flex items-center gap-1.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                                                                                className: "w-3 h-3 text-slate-400 flex-shrink-0 group-hover:text-blue-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 2108,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "truncate",
                                                                                children: client.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 2109,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2107,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    client.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] text-slate-400 flex items-center gap-1 mt-0.5 truncate",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                className: "w-2.5 h-2.5 text-slate-500 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 2113,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "truncate",
                                                                                children: client.location
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 2114,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2112,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 2106,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 flex-shrink-0",
                                                                children: client.source === 'database' ? 'Client' : 'Past Project'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 2118,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, client.id, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 2096,
                                                        columnNumber: 27
                                                    }, this);
                                                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-300",
                                                            children: [
                                                                "New client: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-blue-400 font-bold",
                                                                    children: [
                                                                        '"',
                                                                        newProject.customerName,
                                                                        '"'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2127,
                                                                    columnNumber: 39
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 2126,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-emerald-400 mt-1 flex items-center justify-center gap-1 font-medium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2130,
                                                                    columnNumber: 27
                                                                }, this),
                                                                "Will be saved to directory upon project creation"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 2129,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2125,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2081,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2031,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2018,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Project / Delivery Location"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2142,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "e.g. Narshingdi HUB / Motijheel, Dhaka",
                                            value: newProject.location,
                                            onChange: (e)=>setNewProject({
                                                    ...newProject,
                                                    location: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2143,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2141,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Contract / Invoiced Value (৳) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2153,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            required: true,
                                            min: "0",
                                            step: "any",
                                            placeholder: "0",
                                            value: newProject.contractValue === 0 ? '' : newProject.contractValue,
                                            onFocus: (e)=>e.target.select(),
                                            onClick: (e)=>e.target.select(),
                                            onChange: (e)=>{
                                                const val = e.target.value;
                                                setNewProject({
                                                    ...newProject,
                                                    contractValue: val === '' ? '' : Number(val)
                                                });
                                            },
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono font-bold focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2154,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2152,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2140,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Initial Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2174,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: newProject.status,
                                            onChange: (e)=>setNewProject({
                                                    ...newProject,
                                                    status: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "INSTALLATION_IN_PROGRESS",
                                                    children: "Installation In Progress"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2180,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "PLANNING",
                                                    children: "Planning / Tender Approved"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2181,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "COMPLETED",
                                                    children: "Completed"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2182,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ON_HOLD",
                                                    children: "On Hold"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2183,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2175,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2173,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Scope / Notes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2188,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "e.g. 10 CCTV camera installation with rack shifting",
                                            value: newProject.notes,
                                            onChange: (e)=>setNewProject({
                                                    ...newProject,
                                                    notes: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2189,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2187,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2172,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t border-slate-800 flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsNewProjectModalOpen(false),
                                    className: "px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2200,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg shadow-blue-600/30 transition",
                                    children: "Create Project"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2207,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2199,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                    lineNumber: 2017,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                lineNumber: 2011,
                columnNumber: 9
            }, this),
            isAddExpenseOpen && selectedProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isAddExpenseOpen,
                onClose: ()=>setIsAddExpenseOpen(false),
                title: `Add Direct Expense: ${selectedProject.projectName}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleAddExpense,
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Expense Category"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2229,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: expenseCategory,
                                    onChange: (e)=>setExpenseCategory(e.target.value),
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "TRANSPORT",
                                            children: "Transport & Vehicle Transit (Dhaka & Inter-district)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2235,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "TOOLS_EQUIPMENT",
                                            children: "Tools, Equipment & Fastener Hardware"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2236,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "MEALS_CONVEYANCE",
                                            children: "Site Staff Conveyance & Lunch"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2237,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "SUBCONTRACTOR",
                                            children: "Third-party Subcontractor / Electrician"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2238,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "MISCELLANEOUS",
                                            children: "Miscellaneous Site Expense"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2239,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2230,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2228,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Description / Paid To *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2244,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    placeholder: "e.g. Pickup van transport from Tejgaon to Narshingdi",
                                    value: expenseDesc,
                                    onChange: (e)=>setExpenseDesc(e.target.value),
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2245,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2243,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Expense Amount (৳) *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2256,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    required: true,
                                    min: "0",
                                    step: "any",
                                    placeholder: "0",
                                    value: expenseAmount === 0 ? '' : expenseAmount,
                                    onFocus: (e)=>e.target.select(),
                                    onClick: (e)=>e.target.select(),
                                    onChange: (e)=>{
                                        const val = e.target.value;
                                        setExpenseAmount(val === '' ? '' : Number(val));
                                    },
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono font-bold focus:border-blue-500 focus:outline-none text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2257,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2255,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t border-slate-800 flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsAddExpenseOpen(false),
                                    className: "px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-semibold",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2275,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg shadow transition",
                                    children: "Record Expense"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2282,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2274,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                    lineNumber: 2227,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                lineNumber: 2222,
                columnNumber: 9
            }, this),
            isIssueMaterialOpen && selectedProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isIssueMaterialOpen,
                onClose: ()=>setIsIssueMaterialOpen(false),
                title: `Issue Materials to Project: ${selectedProject.projectName}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: (e)=>{
                        e.preventDefault();
                        handleIssueMaterial();
                    },
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold",
                                            children: "Product / Cable / Gift / Hardware / Material Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2311,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-purple-400 font-medium",
                                            children: "Type freely or select below"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2314,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2310,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    list: "material-catalog-list",
                                    placeholder: "Type any custom item (e.g. Leather gift box-1, CCTV Camera, Patch Cord...)",
                                    value: issueProduct,
                                    onChange: (e)=>setIssueProduct(e.target.value),
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-semibold focus:border-purple-500 focus:outline-none placeholder-slate-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2318,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2309,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-400 text-[11px] font-semibold mb-1",
                                    children: "Or Quick Pick from Standard Catalog / Common Items:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2331,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: "",
                                    onChange: (e)=>{
                                        if (!e.target.value) return;
                                        const [name, costStr] = e.target.value.split('||');
                                        setIssueProduct(name);
                                        if (costStr) setIssueUnitCost(Number(costStr));
                                    },
                                    className: "w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-slate-300 text-xs focus:border-purple-500 focus:outline-none cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "-- Click to select from catalog / common supplies --"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2344,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                            label: "Gift Items, Packaging & Customized Goods",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Leather gift box-1||1500",
                                                    children: "Leather gift box-1 (৳1,500)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2346,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Executive Wooden Box / Gift Set||2500",
                                                    children: "Executive Wooden Box / Gift Set (৳2,500)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2347,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Custom Engraved Metal Crest / Memento||3000",
                                                    children: "Custom Engraved Metal Crest / Memento (৳3,000)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2348,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Corporate Gift Pack & Bags||1200",
                                                    children: "Corporate Gift Pack & Bags (৳1,200)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2349,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2345,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                            label: "CCTV & Surveillance Hardware",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "CCTV Camera (4MP Outdoor IR Dome IP Camera)||9000",
                                                    children: "CCTV Camera (4MP Outdoor IR Dome IP Camera) (৳9,000)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2352,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Hikvision 16-Channel 4K NVR with 2-SATA||35000",
                                                    children: "Hikvision 16-Channel 4K NVR with 2-SATA (৳35,000)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2353,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Hikvision 4MP IP Cameras with Mounting Junctions||11000",
                                                    children: "Hikvision 4MP IP Cameras with Mounting Junctions (৳11,000)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2354,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Surveillance Hard Disk 4TB / 6TB Surveillance Grade||14500",
                                                    children: "Surveillance Hard Disk 4TB / 6TB (৳14,500)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2355,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2351,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                            label: "Cabling & Infrastructure",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Cat6 UTP Pure Copper Industrial Cable (305m)||14500",
                                                    children: "Cat6 UTP Pure Copper Industrial Cable (305m) (৳14,500)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2358,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Rosenberger Cat-6 UTP Pure Copper Cable (305m)||16500",
                                                    children: "Rosenberger Cat-6 UTP Pure Copper Cable (305m) (৳16,500)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2359,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Cat6 Patch Panels 24-Port & Wire Managers||6500",
                                                    children: "Cat6 Patch Panels 24-Port & Wire Managers (৳6,500)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2360,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "RJ45 Pure Copper Modular Connectors (100 Pcs)||1200",
                                                    children: "RJ45 Pure Copper Modular Connectors (100 Pcs) (৳1,200)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2361,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "PVC Conduit Pipes & Flexible Hose (100ft)||2500",
                                                    children: "PVC Conduit Pipes & Flexible Hose (100ft) (৳2,500)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2362,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2357,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                            label: "Networking & Active Power",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Cisco 24-Port Gigabit Managed PoE+ Switch||42000",
                                                    children: "Cisco 24-Port Gigabit Managed PoE+ Switch (৳42,000)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2365,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Server Rack / Wall Mount 6U-12U Industrial||8500",
                                                    children: "Server Rack / Wall Mount 6U-12U Industrial (৳8,500)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2366,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Centralized Power Supply 12V 20A with Battery Backup||4500",
                                                    children: "Centralized Power Supply 12V 20A with Battery Backup (৳4,500)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2367,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2364,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2334,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2330,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                            id: "material-catalog-list",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Leather gift box-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2374,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Executive Wooden Box / Gift Set"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2375,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Custom Engraved Metal Crest / Memento"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2376,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Corporate Gift Pack & Bags"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2377,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "CCTV Camera (4MP Outdoor IR Dome IP Camera)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2378,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Cat6 UTP Pure Copper Industrial Cable (305m)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2379,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Hikvision 16-Channel 4K NVR with 2-SATA"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2380,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Cisco 24-Port Gigabit Managed PoE+ Switch"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2381,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Server Rack / Wall Mount 6U-12U Industrial"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2382,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Rosenberger Cat-6 UTP Pure Copper Cable (305m)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2383,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Cat6 Patch Panels 24-Port & Wire Managers"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2384,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "RJ45 Pure Copper Modular Connectors (100 Pcs)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2385,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2373,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Quantity (pcs/boxes/sets) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2390,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "0.01",
                                            step: "any",
                                            required: true,
                                            placeholder: "1",
                                            value: issueQty,
                                            onFocus: (e)=>e.target.select(),
                                            onClick: (e)=>e.target.select(),
                                            onChange: (e)=>{
                                                const val = e.target.value;
                                                setIssueQty(val === '' ? '' : Number(val));
                                            },
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-bold focus:border-purple-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2391,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2389,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Unit Landed Cost (৳) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2408,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "0",
                                            step: "any",
                                            required: true,
                                            placeholder: "0",
                                            value: issueUnitCost,
                                            onFocus: (e)=>e.target.select(),
                                            onClick: (e)=>e.target.select(),
                                            onChange: (e)=>{
                                                const val = e.target.value;
                                                setIssueUnitCost(val === '' ? '' : Number(val));
                                            },
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono focus:border-purple-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2409,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2407,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2388,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-purple-950/40 border border-purple-800/60 rounded-xl text-slate-300 text-[11px] leading-relaxed",
                            children: [
                                "⚡ ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Automatic Landed Cost Accounting:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2428,
                                    columnNumber: 17
                                }, this),
                                " Total of ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])((Number(issueQty) || 0) * (Number(issueUnitCost) || 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2428,
                                    columnNumber: 77
                                }, this),
                                " will be charged against project revenue to compute net profit."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2427,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t border-slate-800 flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsIssueMaterialOpen(false),
                                    className: "px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2432,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg shadow transition",
                                    children: "Confirm Material Issue"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2439,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2431,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                    lineNumber: 2302,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                lineNumber: 2297,
                columnNumber: 9
            }, this),
            isLogLaborOpen && selectedProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isLogLaborOpen,
                onClose: ()=>setIsLogLaborOpen(false),
                title: `Log Technician Work Days: ${selectedProject.projectName}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Technician / Lead Engineer"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2461,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: techName,
                                    onChange: (e)=>setTechName(e.target.value),
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2462,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2460,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Work Days"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2472,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "0.5",
                                            step: "any",
                                            placeholder: "1",
                                            value: workDays === 0 ? '' : workDays,
                                            onFocus: (e)=>e.target.select(),
                                            onClick: (e)=>e.target.select(),
                                            onChange: (e)=>{
                                                const val = e.target.value;
                                                setWorkDays(val === '' ? '' : Number(val));
                                            },
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-bold focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2473,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2471,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Daily Rate (৳)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2489,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "0",
                                            step: "any",
                                            placeholder: "0",
                                            value: dailyRate === 0 ? '' : dailyRate,
                                            onFocus: (e)=>e.target.select(),
                                            onClick: (e)=>e.target.select(),
                                            onChange: (e)=>{
                                                const val = e.target.value;
                                                setDailyRate(val === '' ? '' : Number(val));
                                            },
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2490,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2488,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2470,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-blue-950/40 border border-blue-800/60 rounded-xl text-slate-300 text-[11px]",
                            children: [
                                "Total labor cost of ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(workDays * dailyRate)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2508,
                                    columnNumber: 35
                                }, this),
                                " will be charged to project expenses."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2507,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t border-slate-800 flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsLogLaborOpen(false),
                                    className: "px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-semibold",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2512,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleLogLabor,
                                    className: "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow transition",
                                    children: "Record Labor"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2519,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2511,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                    lineNumber: 2459,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                lineNumber: 2454,
                columnNumber: 9
            }, this),
            isPnLSheetModalOpen && selectedProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isPnLSheetModalOpen,
                onClose: ()=>setIsPnLSheetModalOpen(false),
                title: `Project P&L Statement Sheet - ${selectedProject.projectCode}`,
                size: "xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between bg-slate-900 border border-slate-800 p-3 rounded-xl no-print",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-slate-300",
                                    children: "Official Project Profit & Loss Audit Statement. Print or save as clean, full-page A4 PDF for accounting & client presentation."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2544,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePrintPnLSheet,
                                    className: "flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold shadow transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2551,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Print Statement Sheet (A4)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2552,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2547,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2543,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto flex justify-center pb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "printable-project-sheet",
                                style: {
                                    width: '210mm',
                                    minHeight: '285mm',
                                    boxSizing: 'border-box',
                                    backgroundColor: '#ffffff',
                                    color: '#0f172a',
                                    padding: '16mm 18mm',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                },
                                className: "shadow-2xl rounded-sm printable-area print:shadow-none print:w-full print:p-0 print:m-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                style: {
                                                    width: '100%',
                                                    borderCollapse: 'collapse',
                                                    borderBottom: '2.5px solid #0f172a',
                                                    paddingBottom: '10px',
                                                    marginBottom: '14px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    width: '60%',
                                                                    verticalAlign: 'middle'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    width: '8px',
                                                                                    height: '26px',
                                                                                    backgroundColor: '#008fd5',
                                                                                    borderRadius: '2px'
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 2581,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                style: {
                                                                                    fontSize: '26px',
                                                                                    fontWeight: 900,
                                                                                    color: '#008fd5',
                                                                                    margin: 0,
                                                                                    letterSpacing: '-0.5px',
                                                                                    lineHeight: 1
                                                                                },
                                                                                children: "GLOBO TECH"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 2582,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2580,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        style: {
                                                                            fontSize: '11px',
                                                                            color: '#1e293b',
                                                                            fontWeight: 700,
                                                                            margin: '4px 0 0 0',
                                                                            textTransform: 'uppercase',
                                                                            letterSpacing: '0.5px'
                                                                        },
                                                                        children: "Enterprise IT, CCTV & Networking Solutions"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2586,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        style: {
                                                                            fontSize: '10px',
                                                                            color: '#475569',
                                                                            margin: '3px 0 0 0',
                                                                            lineHeight: '1.4'
                                                                        },
                                                                        children: [
                                                                            "Rahman Chamber (2nd Floor), 12/13 Motijheel C/A, Dhaka-1000",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 2590,
                                                                                columnNumber: 88
                                                                            }, this),
                                                                            "Phone: +880 1711-223344, +88 01622-152133 • Email: info@globotechbd.com • Web: globotechbd.com"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2589,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 2579,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    width: '40%',
                                                                    textAlign: 'right',
                                                                    verticalAlign: 'middle'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'inline-block',
                                                                        padding: '8px 14px',
                                                                        backgroundColor: '#0f172a',
                                                                        borderRadius: '6px',
                                                                        textAlign: 'right',
                                                                        color: '#ffffff'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: '12px',
                                                                                fontWeight: 900,
                                                                                color: '#38bdf8',
                                                                                display: 'block',
                                                                                textTransform: 'uppercase',
                                                                                letterSpacing: '0.8px'
                                                                            },
                                                                            children: "PROJECT P&L STATEMENT"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2596,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: '10.5px',
                                                                                color: '#cbd5e1',
                                                                                fontFamily: 'monospace',
                                                                                fontWeight: 700,
                                                                                display: 'block',
                                                                                marginTop: '2px'
                                                                            },
                                                                            children: [
                                                                                "Ref: ",
                                                                                selectedProject.projectCode
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2599,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: '9.5px',
                                                                                color: '#94a3b8',
                                                                                display: 'block',
                                                                                marginTop: '2px'
                                                                            },
                                                                            children: [
                                                                                "Date: ",
                                                                                new Date().toLocaleDateString('en-GB', {
                                                                                    day: '2-digit',
                                                                                    month: 'short',
                                                                                    year: 'numeric'
                                                                                })
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2602,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2595,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 2594,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 2578,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2577,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 2576,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                style: {
                                                    width: '100%',
                                                    borderCollapse: 'collapse',
                                                    backgroundColor: '#f8fafc',
                                                    border: '1.5px solid #cbd5e1',
                                                    borderRadius: '6px',
                                                    marginBottom: '14px',
                                                    fontSize: '11px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    width: '50%',
                                                                    padding: '10px 14px',
                                                                    borderRight: '1.5px solid #cbd5e1',
                                                                    verticalAlign: 'top'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '9.5px',
                                                                            fontWeight: 800,
                                                                            color: '#64748b',
                                                                            textTransform: 'uppercase',
                                                                            letterSpacing: '0.5px'
                                                                        },
                                                                        children: "PROJECT IDENTIFICATION & LOCATION:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2616,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '13.5px',
                                                                            fontWeight: 800,
                                                                            color: '#0f172a',
                                                                            marginTop: '3px'
                                                                        },
                                                                        children: selectedProject.projectName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2619,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            color: '#475569',
                                                                            marginTop: '3px',
                                                                            fontSize: '11px',
                                                                            lineHeight: '1.4'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "Site:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 2623,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " ",
                                                                            selectedProject.location
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2622,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            color: '#475569',
                                                                            marginTop: '2px',
                                                                            fontSize: '10.5px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "Status:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 2626,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 700,
                                                                                    color: selectedProject.status === 'COMPLETED' ? '#059669' : '#0284c7'
                                                                                },
                                                                                children: selectedProject.status.replace(/_/g, ' ')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 2626,
                                                                                columnNumber: 54
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2625,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 2615,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    width: '50%',
                                                                    padding: '10px 14px',
                                                                    verticalAlign: 'top'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '9.5px',
                                                                            fontWeight: 800,
                                                                            color: '#64748b',
                                                                            textTransform: 'uppercase',
                                                                            letterSpacing: '0.5px'
                                                                        },
                                                                        children: "CLIENT & COMMERCIAL CONTRACT DETAILS:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2630,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '13.5px',
                                                                            fontWeight: 800,
                                                                            color: '#0f172a',
                                                                            marginTop: '3px'
                                                                        },
                                                                        children: selectedProject.customerName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2633,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            color: '#0f172a',
                                                                            marginTop: '3px',
                                                                            fontSize: '12px'
                                                                        },
                                                                        children: [
                                                                            "Contract Value: ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                style: {
                                                                                    fontFamily: 'monospace',
                                                                                    fontSize: '14px',
                                                                                    color: '#008fd5'
                                                                                },
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedProject.contractValue)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 2637,
                                                                                columnNumber: 45
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2636,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            color: '#64748b',
                                                                            marginTop: '2px',
                                                                            fontSize: '10.5px'
                                                                        },
                                                                        children: [
                                                                            "Scope / Notes: ",
                                                                            selectedProject.notes || 'Full Turnkey Supply & Implementation'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2639,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 2629,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 2614,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2613,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 2612,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: '14px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '11px',
                                                            fontWeight: 800,
                                                            color: '#0f172a',
                                                            textTransform: 'uppercase',
                                                            marginBottom: '5px',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "1. Warehouse Materials Consumed (Landed Import Cost)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 2650,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: '10px',
                                                                    color: '#64748b',
                                                                    fontWeight: 600
                                                                },
                                                                children: "Deducted at actual unit import landed cost"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 2651,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 2649,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        style: {
                                                            width: '100%',
                                                            borderCollapse: 'collapse',
                                                            border: '1.5px solid #0f172a',
                                                            fontSize: '10.5px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    style: {
                                                                        backgroundColor: '#0f172a',
                                                                        color: '#ffffff'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                border: '1px solid #1e293b',
                                                                                padding: '6px',
                                                                                textAlign: 'center',
                                                                                width: '32px'
                                                                            },
                                                                            children: "Sl"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2656,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                border: '1px solid #1e293b',
                                                                                padding: '6px 10px',
                                                                                textAlign: 'left'
                                                                            },
                                                                            children: "Product / Material Description"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2657,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                border: '1px solid #1e293b',
                                                                                padding: '6px',
                                                                                textAlign: 'center',
                                                                                width: '65px'
                                                                            },
                                                                            children: "Quantity"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2658,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                border: '1px solid #1e293b',
                                                                                padding: '6px 10px',
                                                                                textAlign: 'right',
                                                                                width: '110px'
                                                                            },
                                                                            children: "Unit Landed Cost"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2659,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                border: '1px solid #1e293b',
                                                                                padding: '6px 10px',
                                                                                textAlign: 'right',
                                                                                width: '120px'
                                                                            },
                                                                            children: "Total Cost (৳)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2660,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2655,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 2654,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: [
                                                                    selectedProject.materialIssues.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            colSpan: 5,
                                                                            style: {
                                                                                border: '1px solid #cbd5e1',
                                                                                padding: '8px 10px',
                                                                                textAlign: 'center',
                                                                                color: '#64748b',
                                                                                fontStyle: 'italic'
                                                                            },
                                                                            children: "No warehouse materials drawn for this project yet."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2666,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2665,
                                                                        columnNumber: 27
                                                                    }, this) : selectedProject.materialIssues.map((m, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            style: {
                                                                                backgroundColor: idx % 2 === 1 ? '#f8fafc' : '#ffffff'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        border: '1px solid #cbd5e1',
                                                                                        padding: '5px 6px',
                                                                                        textAlign: 'center'
                                                                                    },
                                                                                    children: idx + 1
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 2673,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        border: '1px solid #cbd5e1',
                                                                                        padding: '5px 10px',
                                                                                        fontWeight: 600,
                                                                                        color: '#0f172a'
                                                                                    },
                                                                                    children: m.productName
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 2674,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        border: '1px solid #cbd5e1',
                                                                                        padding: '5px 6px',
                                                                                        textAlign: 'center',
                                                                                        fontWeight: 'bold'
                                                                                    },
                                                                                    children: [
                                                                                        m.quantity,
                                                                                        " pcs"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 2675,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        border: '1px solid #cbd5e1',
                                                                                        padding: '5px 10px',
                                                                                        textAlign: 'right',
                                                                                        fontFamily: 'monospace'
                                                                                    },
                                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(m.unitLandedCost)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 2676,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        border: '1px solid #cbd5e1',
                                                                                        padding: '5px 10px',
                                                                                        textAlign: 'right',
                                                                                        fontFamily: 'monospace',
                                                                                        fontWeight: 'bold'
                                                                                    },
                                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(m.totalCost)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 2677,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, m.id, true, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2672,
                                                                            columnNumber: 29
                                                                        }, this)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        style: {
                                                                            backgroundColor: '#f1f5f9',
                                                                            fontWeight: 'bold'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                colSpan: 4,
                                                                                style: {
                                                                                    border: '1.5px solid #0f172a',
                                                                                    padding: '6px 10px',
                                                                                    textAlign: 'right',
                                                                                    textTransform: 'uppercase',
                                                                                    fontSize: '10px'
                                                                                },
                                                                                children: "Subtotal Materials Landed Cost:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 2682,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                style: {
                                                                                    border: '1.5px solid #0f172a',
                                                                                    padding: '6px 10px',
                                                                                    textAlign: 'right',
                                                                                    fontFamily: 'monospace',
                                                                                    fontSize: '11px',
                                                                                    color: '#7e22ce'
                                                                                },
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedProject.materialLandedCost)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 2683,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2681,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 2663,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 2653,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 2648,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: '14px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '11px',
                                                            fontWeight: 800,
                                                            color: '#0f172a',
                                                            textTransform: 'uppercase',
                                                            marginBottom: '5px'
                                                        },
                                                        children: "2. Technician & Engineering Labor Costs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 2691,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        style: {
                                                            width: '100%',
                                                            borderCollapse: 'collapse',
                                                            border: '1.5px solid #0f172a',
                                                            fontSize: '10.5px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    style: {
                                                                        backgroundColor: '#0f172a',
                                                                        color: '#ffffff'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                border: '1px solid #1e293b',
                                                                                padding: '6px',
                                                                                textAlign: 'center',
                                                                                width: '32px'
                                                                            },
                                                                            children: "Sl"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2697,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                border: '1px solid #1e293b',
                                                                                padding: '6px 10px',
                                                                                textAlign: 'left'
                                                                            },
                                                                            children: "Technician / Field Engineer"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2698,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                border: '1px solid #1e293b',
                                                                                padding: '6px',
                                                                                textAlign: 'center',
                                                                                width: '65px'
                                                                            },
                                                                            children: "Work Days"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2699,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                border: '1px solid #1e293b',
                                                                                padding: '6px 10px',
                                                                                textAlign: 'right',
                                                                                width: '110px'
                                                                            },
                                                                            children: "Daily Rate (৳)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2700,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                border: '1px solid #1e293b',
                                                                                padding: '6px 10px',
                                                                                textAlign: 'right',
                                                                                width: '120px'
                                                                            },
                                                                            children: "Total Labor (৳)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2701,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2696,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 2695,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: [
                                                                    selectedProject.laborLogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            colSpan: 5,
                                                                            style: {
                                                                                border: '1px solid #cbd5e1',
                                                                                padding: '8px 10px',
                                                                                textAlign: 'center',
                                                                                color: '#64748b',
                                                                                fontStyle: 'italic'
                                                                            },
                                                                            children: "No technician work days logged for this project (৳ 0.00)."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2707,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2706,
                                                                        columnNumber: 27
                                                                    }, this) : selectedProject.laborLogs.map((l, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            style: {
                                                                                backgroundColor: idx % 2 === 1 ? '#f8fafc' : '#ffffff'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        border: '1px solid #cbd5e1',
                                                                                        padding: '5px 6px',
                                                                                        textAlign: 'center'
                                                                                    },
                                                                                    children: idx + 1
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 2714,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        border: '1px solid #cbd5e1',
                                                                                        padding: '5px 10px',
                                                                                        fontWeight: 600
                                                                                    },
                                                                                    children: l.technicianName
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 2715,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        border: '1px solid #cbd5e1',
                                                                                        padding: '5px 6px',
                                                                                        textAlign: 'center',
                                                                                        fontWeight: 'bold'
                                                                                    },
                                                                                    children: [
                                                                                        l.workDays,
                                                                                        " days"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 2716,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        border: '1px solid #cbd5e1',
                                                                                        padding: '5px 10px',
                                                                                        textAlign: 'right',
                                                                                        fontFamily: 'monospace'
                                                                                    },
                                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(l.dailyRate)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 2717,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        border: '1px solid #cbd5e1',
                                                                                        padding: '5px 10px',
                                                                                        textAlign: 'right',
                                                                                        fontFamily: 'monospace',
                                                                                        fontWeight: 'bold'
                                                                                    },
                                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(l.totalLabor)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 2718,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, l.id, true, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2713,
                                                                            columnNumber: 29
                                                                        }, this)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        style: {
                                                                            backgroundColor: '#f1f5f9',
                                                                            fontWeight: 'bold'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                colSpan: 4,
                                                                                style: {
                                                                                    border: '1.5px solid #0f172a',
                                                                                    padding: '6px 10px',
                                                                                    textAlign: 'right',
                                                                                    textTransform: 'uppercase',
                                                                                    fontSize: '10px'
                                                                                },
                                                                                children: "Subtotal Labor Cost:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 2723,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                style: {
                                                                                    border: '1.5px solid #0f172a',
                                                                                    padding: '6px 10px',
                                                                                    textAlign: 'right',
                                                                                    fontFamily: 'monospace',
                                                                                    fontSize: '11px',
                                                                                    color: '#1d4ed8'
                                                                                },
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedProject.laborCost)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 2724,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2722,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 2704,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 2694,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 2690,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '11px',
                                                            fontWeight: 800,
                                                            color: '#0f172a',
                                                            textTransform: 'uppercase',
                                                            marginBottom: '5px'
                                                        },
                                                        children: "3. Transport, Site Tools & Direct Expenses"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 2732,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        style: {
                                                            width: '100%',
                                                            borderCollapse: 'collapse',
                                                            border: '1.5px solid #0f172a',
                                                            fontSize: '10.5px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    style: {
                                                                        backgroundColor: '#0f172a',
                                                                        color: '#ffffff'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                border: '1px solid #1e293b',
                                                                                padding: '6px',
                                                                                textAlign: 'center',
                                                                                width: '32px'
                                                                            },
                                                                            children: "Sl"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2738,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                border: '1px solid #1e293b',
                                                                                padding: '6px 10px',
                                                                                textAlign: 'left',
                                                                                width: '130px'
                                                                            },
                                                                            children: "Category"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2739,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                border: '1px solid #1e293b',
                                                                                padding: '6px 10px',
                                                                                textAlign: 'left'
                                                                            },
                                                                            children: "Description & Voucher Reference"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2740,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                border: '1px solid #1e293b',
                                                                                padding: '6px 10px',
                                                                                textAlign: 'right',
                                                                                width: '120px'
                                                                            },
                                                                            children: "Amount (৳)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2741,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2737,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 2736,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: [
                                                                    (selectedProject.expenses || []).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            colSpan: 4,
                                                                            style: {
                                                                                border: '1px solid #cbd5e1',
                                                                                padding: '8px 10px',
                                                                                textAlign: 'center',
                                                                                color: '#64748b',
                                                                                fontStyle: 'italic'
                                                                            },
                                                                            children: "No direct site or transit expenses recorded (৳ 0.00)."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2747,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2746,
                                                                        columnNumber: 27
                                                                    }, this) : (selectedProject.expenses || []).map((exp, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            style: {
                                                                                backgroundColor: idx % 2 === 1 ? '#f8fafc' : '#ffffff'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        border: '1px solid #cbd5e1',
                                                                                        padding: '5px 6px',
                                                                                        textAlign: 'center'
                                                                                    },
                                                                                    children: idx + 1
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 2754,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        border: '1px solid #cbd5e1',
                                                                                        padding: '5px 10px',
                                                                                        fontWeight: 600,
                                                                                        color: '#b45309'
                                                                                    },
                                                                                    children: exp.category
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 2755,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        border: '1px solid #cbd5e1',
                                                                                        padding: '5px 10px'
                                                                                    },
                                                                                    children: exp.description
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 2756,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        border: '1px solid #cbd5e1',
                                                                                        padding: '5px 10px',
                                                                                        textAlign: 'right',
                                                                                        fontFamily: 'monospace',
                                                                                        fontWeight: 'bold'
                                                                                    },
                                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(exp.amount)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                    lineNumber: 2757,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, exp.id, true, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2753,
                                                                            columnNumber: 29
                                                                        }, this)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        style: {
                                                                            backgroundColor: '#f1f5f9',
                                                                            fontWeight: 'bold'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                colSpan: 3,
                                                                                style: {
                                                                                    border: '1.5px solid #0f172a',
                                                                                    padding: '6px 10px',
                                                                                    textAlign: 'right',
                                                                                    textTransform: 'uppercase',
                                                                                    fontSize: '10px'
                                                                                },
                                                                                children: "Subtotal Transport & Misc:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 2762,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                style: {
                                                                                    border: '1.5px solid #0f172a',
                                                                                    padding: '6px 10px',
                                                                                    textAlign: 'right',
                                                                                    fontFamily: 'monospace',
                                                                                    fontSize: '11px',
                                                                                    color: '#b45309'
                                                                                },
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedProject.transportCost + selectedProject.otherCost)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                                lineNumber: 2763,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2761,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 2744,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 2735,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 2731,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                style: {
                                                    width: '100%',
                                                    borderCollapse: 'collapse',
                                                    border: '2px solid #0f172a',
                                                    marginBottom: '24px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            style: {
                                                                backgroundColor: '#f8fafc',
                                                                borderBottom: '1px solid #cbd5e1'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: '7px 14px',
                                                                        fontSize: '12.5px',
                                                                        fontWeight: 800,
                                                                        color: '#0f172a'
                                                                    },
                                                                    children: "Gross Contract Revenue:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2773,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: '7px 14px',
                                                                        textAlign: 'right',
                                                                        fontSize: '14px',
                                                                        fontWeight: 800,
                                                                        fontFamily: 'monospace'
                                                                    },
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedProject.contractValue)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2774,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 2772,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            style: {
                                                                fontSize: '11px',
                                                                color: '#475569'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: '5px 14px'
                                                                    },
                                                                    children: "Less: Material Costs (At Landed Cost)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2777,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: '5px 14px',
                                                                        textAlign: 'right',
                                                                        fontFamily: 'monospace'
                                                                    },
                                                                    children: [
                                                                        "- ",
                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedProject.materialLandedCost)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2778,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 2776,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            style: {
                                                                fontSize: '11px',
                                                                color: '#475569'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: '5px 14px'
                                                                    },
                                                                    children: "Less: Direct Technician Labor"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2781,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: '5px 14px',
                                                                        textAlign: 'right',
                                                                        fontFamily: 'monospace'
                                                                    },
                                                                    children: [
                                                                        "- ",
                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedProject.laborCost)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2782,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 2780,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            style: {
                                                                fontSize: '11px',
                                                                color: '#475569',
                                                                borderBottom: '1px solid #cbd5e1'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: '5px 14px'
                                                                    },
                                                                    children: "Less: Transport, Site Tools & Misc Expenses"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2785,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: '5px 14px',
                                                                        textAlign: 'right',
                                                                        fontFamily: 'monospace'
                                                                    },
                                                                    children: [
                                                                        "- ",
                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedProject.transportCost + selectedProject.otherCost)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2786,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 2784,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            style: {
                                                                backgroundColor: '#f1f5f9',
                                                                borderBottom: '2px solid #0f172a',
                                                                fontSize: '12px',
                                                                fontWeight: 700
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: '6px 14px',
                                                                        color: '#991b1b'
                                                                    },
                                                                    children: "Total Direct Project Costs:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2789,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: '6px 14px',
                                                                        textAlign: 'right',
                                                                        fontFamily: 'monospace',
                                                                        color: '#b91c1c',
                                                                        fontWeight: 800
                                                                    },
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedProject.totalProjectCost)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2790,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 2788,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            style: {
                                                                backgroundColor: '#ecfdf5',
                                                                fontSize: '14px',
                                                                fontWeight: 900,
                                                                borderTop: '2px solid #059669'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: '10px 14px',
                                                                        color: '#065f46'
                                                                    },
                                                                    children: [
                                                                        "NET PROJECT PROFIT (প্রজেক্ট লাভ):",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: '11.5px',
                                                                                fontWeight: 800,
                                                                                marginLeft: '10px',
                                                                                padding: '2px 8px',
                                                                                borderRadius: '4px',
                                                                                backgroundColor: '#d1fae5',
                                                                                color: '#047857'
                                                                            },
                                                                            children: [
                                                                                selectedProject.profitMarginPercent.toFixed(1),
                                                                                "% Profit Margin"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                            lineNumber: 2795,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2793,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: '10px 14px',
                                                                        textAlign: 'right',
                                                                        color: '#065f46',
                                                                        fontFamily: 'monospace',
                                                                        fontSize: '17px'
                                                                    },
                                                                    children: [
                                                                        "+",
                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedProject.projectGrossProfit)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                    lineNumber: 2799,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 2792,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2771,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 2770,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 2574,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                style: {
                                                    width: '100%',
                                                    borderCollapse: 'collapse',
                                                    marginTop: '20px',
                                                    marginBottom: '14px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    width: '33.33%',
                                                                    textAlign: 'center',
                                                                    verticalAlign: 'bottom',
                                                                    padding: '0 10px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: '140px',
                                                                            borderBottom: '1.5px solid #0f172a',
                                                                            margin: '0 auto 6px auto'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2814,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '11px',
                                                                            fontWeight: 800,
                                                                            color: '#0f172a'
                                                                        },
                                                                        children: "Prepared By"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2815,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '10px',
                                                                            color: '#64748b'
                                                                        },
                                                                        children: "Accounts & Audit Officer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2816,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '9px',
                                                                            color: '#94a3b8'
                                                                        },
                                                                        children: "Globo Tech"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2817,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 2813,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    width: '33.33%',
                                                                    textAlign: 'center',
                                                                    verticalAlign: 'bottom',
                                                                    padding: '0 10px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: '140px',
                                                                            borderBottom: '1.5px solid #0f172a',
                                                                            margin: '0 auto 6px auto'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2820,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '11px',
                                                                            fontWeight: 800,
                                                                            color: '#0f172a'
                                                                        },
                                                                        children: "Verified By"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2821,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '10px',
                                                                            color: '#64748b'
                                                                        },
                                                                        children: "Project Lead / Site Engineer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2822,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '9px',
                                                                            color: '#94a3b8'
                                                                        },
                                                                        children: "Globo Tech"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2823,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 2819,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    width: '33.33%',
                                                                    textAlign: 'center',
                                                                    verticalAlign: 'bottom',
                                                                    padding: '0 10px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: '140px',
                                                                            borderBottom: '1.5px solid #0f172a',
                                                                            margin: '0 auto 6px auto'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2826,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '11px',
                                                                            fontWeight: 800,
                                                                            color: '#0f172a'
                                                                        },
                                                                        children: "Approved By"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2827,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '10px',
                                                                            color: '#64748b'
                                                                        },
                                                                        children: "Managing Director / CEO"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2828,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '9px',
                                                                            color: '#94a3b8'
                                                                        },
                                                                        children: "Globo Tech"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                        lineNumber: 2829,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                                lineNumber: 2825,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 2812,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2811,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 2810,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    borderTop: '1px solid #cbd5e1',
                                                    paddingTop: '6px',
                                                    textAlign: 'center',
                                                    fontSize: '9.5px',
                                                    color: '#64748b',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Confidential • For Internal Project Financial Audit & Management Review Only"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 2837,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Globo Tech Enterprise ERP • Page 1 of 1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 2838,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 2836,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 2808,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 2558,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2557,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                    lineNumber: 2541,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                lineNumber: 2535,
                columnNumber: 9
            }, this),
            isEditProjectOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isEditProjectOpen,
                onClose: ()=>setIsEditProjectOpen(false),
                title: `Edit Project Details`,
                size: "lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleUpdateProject,
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Project Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2860,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            value: editProjectData.projectName,
                                            onChange: (e)=>setEditProjectData({
                                                    ...editProjectData,
                                                    projectName: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2861,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2859,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Customer / Client Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2871,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            list: "customer-suggestions-list",
                                            value: editProjectData.customerName,
                                            onChange: (e)=>setEditProjectData({
                                                    ...editProjectData,
                                                    customerName: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2872,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2870,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2858,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Project / Delivery Location"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2885,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editProjectData.location,
                                            onChange: (e)=>setEditProjectData({
                                                    ...editProjectData,
                                                    location: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2886,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2884,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Contract / Invoiced Value (৳) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2895,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            required: true,
                                            min: "0",
                                            step: "any",
                                            placeholder: "0",
                                            value: editProjectData.contractValue === 0 ? '' : editProjectData.contractValue,
                                            onFocus: (e)=>e.target.select(),
                                            onClick: (e)=>e.target.select(),
                                            onChange: (e)=>{
                                                const val = e.target.value;
                                                setEditProjectData({
                                                    ...editProjectData,
                                                    contractValue: val === '' ? '' : Number(val)
                                                });
                                            },
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono font-bold focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2896,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2894,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2883,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Project Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2916,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editProjectData.status,
                                            onChange: (e)=>setEditProjectData({
                                                    ...editProjectData,
                                                    status: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "INSTALLATION_IN_PROGRESS",
                                                    children: "Installation In Progress"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2922,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "PLANNING",
                                                    children: "Planning / Tender Approved"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2923,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "COMPLETED",
                                                    children: "Completed"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2924,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ON_HOLD",
                                                    children: "On Hold"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 2925,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2917,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2915,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Scope / Notes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2930,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editProjectData.notes,
                                            onChange: (e)=>setEditProjectData({
                                                    ...editProjectData,
                                                    notes: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2931,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2929,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2914,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t border-slate-800 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        if (editProjectData.id) {
                                            setIsEditProjectOpen(false);
                                            handleDeleteProject(editProjectData.id);
                                        }
                                    },
                                    className: "px-3 py-2 bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 rounded-lg font-semibold border border-rose-500/30 flex items-center gap-1.5 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2951,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Delete Project"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2952,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2941,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsEditProjectOpen(false),
                                            className: "px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2956,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg shadow-blue-600/30 transition",
                                            children: "Save Changes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 2963,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2955,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2940,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                    lineNumber: 2857,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                lineNumber: 2851,
                columnNumber: 9
            }, this),
            editingMaterial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: !!editingMaterial,
                onClose: ()=>setEditingMaterial(null),
                title: `Edit Material Entry: ${editingMaterial.productName}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleUpdateMaterial,
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Product / Item Name *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2986,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    value: editingMaterial.productName,
                                    onChange: (e)=>setEditingMaterial({
                                            ...editingMaterial,
                                            productName: e.target.value
                                        }),
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-semibold focus:border-purple-500 focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2989,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2985,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Quantity (pcs/units) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3000,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "0.01",
                                            step: "any",
                                            required: true,
                                            placeholder: "1",
                                            value: editingMaterial.quantity === 0 ? '' : editingMaterial.quantity,
                                            onFocus: (e)=>e.target.select(),
                                            onClick: (e)=>e.target.select(),
                                            onChange: (e)=>{
                                                const val = e.target.value;
                                                setEditingMaterial({
                                                    ...editingMaterial,
                                                    quantity: val === '' ? '' : Number(val)
                                                });
                                            },
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-bold focus:border-purple-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3001,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 2999,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Unit Landed Cost (৳) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3018,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "0",
                                            step: "any",
                                            required: true,
                                            placeholder: "0",
                                            value: editingMaterial.unitLandedCost === 0 ? '' : editingMaterial.unitLandedCost,
                                            onFocus: (e)=>e.target.select(),
                                            onClick: (e)=>e.target.select(),
                                            onChange: (e)=>{
                                                const val = e.target.value;
                                                setEditingMaterial({
                                                    ...editingMaterial,
                                                    unitLandedCost: val === '' ? '' : Number(val)
                                                });
                                            },
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono focus:border-purple-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3019,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3017,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-purple-300 font-semibold mb-1",
                                            children: "Total Charged Cost (৳) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3036,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "0",
                                            step: "any",
                                            placeholder: "0",
                                            value: editingMaterial.quantity && editingMaterial.unitLandedCost ? Number((Number(editingMaterial.quantity) * Number(editingMaterial.unitLandedCost)).toFixed(2)) : '',
                                            onFocus: (e)=>e.target.select(),
                                            onClick: (e)=>e.target.select(),
                                            onChange: (e)=>{
                                                const totalVal = e.target.value === '' ? 0 : Number(e.target.value);
                                                const qty = Number(editingMaterial.quantity) || 1;
                                                setEditingMaterial({
                                                    ...editingMaterial,
                                                    unitLandedCost: qty > 0 ? Number((totalVal / qty).toFixed(2)) : totalVal
                                                });
                                            },
                                            className: "w-full bg-slate-950 border border-purple-500/50 rounded-lg p-2.5 text-purple-300 font-mono font-bold focus:border-purple-400 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3037,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3035,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 2998,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-purple-950/40 border border-purple-800/60 rounded-xl text-slate-300 text-[11px] leading-relaxed flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Updated Total Charged:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3063,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-purple-300 text-sm font-mono",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])((Number(editingMaterial.quantity) || 0) * (Number(editingMaterial.unitLandedCost) || 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3064,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 3062,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t border-slate-800 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        const idToDelete = editingMaterial.id;
                                        setEditingMaterial(null);
                                        handleDeleteMaterial(idToDelete);
                                    },
                                    className: "px-3 py-2 bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 rounded-lg font-semibold border border-rose-500/30 flex items-center gap-1.5 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3077,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3078,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3068,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setEditingMaterial(null),
                                            className: "px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3082,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg shadow transition",
                                            children: "Save Changes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3089,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3081,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 3067,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                    lineNumber: 2984,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                lineNumber: 2979,
                columnNumber: 9
            }, this),
            editingLabor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: !!editingLabor,
                onClose: ()=>setEditingLabor(null),
                title: `Edit Technician Labor Log: ${editingLabor.technicianName}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleUpdateLabor,
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Technician / Lead Engineer *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3112,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    value: editingLabor.technicianName,
                                    onChange: (e)=>setEditingLabor({
                                            ...editingLabor,
                                            technicianName: e.target.value
                                        }),
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3113,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 3111,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Work Days *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3124,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "0.5",
                                            step: "any",
                                            required: true,
                                            placeholder: "1",
                                            value: editingLabor.workDays === 0 ? '' : editingLabor.workDays,
                                            onFocus: (e)=>e.target.select(),
                                            onClick: (e)=>e.target.select(),
                                            onChange: (e)=>{
                                                const val = e.target.value;
                                                setEditingLabor({
                                                    ...editingLabor,
                                                    workDays: val === '' ? '' : Number(val)
                                                });
                                            },
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-bold focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3125,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Daily Rate (৳) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3142,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "0",
                                            step: "any",
                                            required: true,
                                            placeholder: "0",
                                            value: editingLabor.dailyRate === 0 ? '' : editingLabor.dailyRate,
                                            onFocus: (e)=>e.target.select(),
                                            onClick: (e)=>e.target.select(),
                                            onChange: (e)=>{
                                                const val = e.target.value;
                                                setEditingLabor({
                                                    ...editingLabor,
                                                    dailyRate: val === '' ? '' : Number(val)
                                                });
                                            },
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3143,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3141,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 3122,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-blue-950/40 border border-blue-800/60 rounded-xl text-slate-300 text-[11px]",
                            children: [
                                "Total labor cost: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])((Number(editingLabor.workDays) || 0) * (Number(editingLabor.dailyRate) || 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3162,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 3161,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t border-slate-800 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        const idToDelete = editingLabor.id;
                                        setEditingLabor(null);
                                        handleDeleteLabor(idToDelete);
                                    },
                                    className: "px-3 py-2 bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 rounded-lg font-semibold border border-rose-500/30 flex items-center gap-1.5 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3175,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3176,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setEditingLabor(null),
                                            className: "px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3180,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow transition",
                                            children: "Save Changes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3187,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3179,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 3165,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                    lineNumber: 3110,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                lineNumber: 3105,
                columnNumber: 9
            }, this),
            editingExpense && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: !!editingExpense,
                onClose: ()=>setEditingExpense(null),
                title: `Edit Direct Expense`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleUpdateExpense,
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Expense Category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3211,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editingExpense.category,
                                            onChange: (e)=>setEditingExpense({
                                                    ...editingExpense,
                                                    category: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "TRANSPORT",
                                                    children: "Transport & Vehicle Fare"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 3217,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "TOOLS_EQUIPMENT",
                                                    children: "Tools & Equipment Rental"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 3218,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "MEALS_CONVEYANCE",
                                                    children: "Meals & Tech Conveyance"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 3219,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "SUBCONTRACTOR",
                                                    children: "Subcontractor Civil Works"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 3220,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "MISCELLANEOUS",
                                                    children: "Miscellaneous Consumables"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 3221,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3212,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3210,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Expense Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3226,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: editingExpense.date,
                                            onChange: (e)=>setEditingExpense({
                                                    ...editingExpense,
                                                    date: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3227,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3225,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 3209,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Expense Description"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3237,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: editingExpense.description,
                                    onChange: (e)=>setEditingExpense({
                                            ...editingExpense,
                                            description: e.target.value
                                        }),
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3238,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 3236,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Expense Amount (৳) *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3247,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    required: true,
                                    min: "0",
                                    step: "any",
                                    placeholder: "0",
                                    value: editingExpense.amount === 0 ? '' : editingExpense.amount,
                                    onFocus: (e)=>e.target.select(),
                                    onClick: (e)=>e.target.select(),
                                    onChange: (e)=>{
                                        const val = e.target.value;
                                        setEditingExpense({
                                            ...editingExpense,
                                            amount: val === '' ? '' : Number(val)
                                        });
                                    },
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono font-bold focus:border-blue-500 focus:outline-none text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3248,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 3246,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t border-slate-800 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        const idToDelete = editingExpense.id;
                                        setEditingExpense(null);
                                        handleDeleteExpense(idToDelete);
                                    },
                                    className: "px-3 py-2 bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 rounded-lg font-semibold border border-rose-500/30 flex items-center gap-1.5 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3275,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3276,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3266,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setEditingExpense(null),
                                            className: "px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-semibold",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3280,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg shadow transition",
                                            children: "Save Changes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3287,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3279,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 3265,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                    lineNumber: 3208,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                lineNumber: 3203,
                columnNumber: 9
            }, this),
            isEditMaterialCostModalOpen && selectedProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isEditMaterialCostModalOpen,
                onClose: ()=>setIsEditMaterialCostModalOpen(false),
                title: `Edit Materials Landed Cost: ${selectedProject.projectName}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSaveDirectMaterialCost,
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-purple-950/30 border border-purple-800/40 rounded-xl space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Project Code:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3312,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono font-bold text-blue-400",
                                            children: selectedProject.projectCode
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3313,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3311,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Client:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3316,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-slate-200",
                                            children: selectedProject.customerName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3317,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3315,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Contract Value:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3320,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono font-bold text-slate-100",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedProject.contractValue)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3321,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3319,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 3310,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2.5 bg-blue-950/30 border border-blue-800/40 rounded-lg text-blue-300 text-[11px] flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold",
                                    children: "💡 নির্দেশিকা:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3327,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Unit (পরিমাণ) এবং Unit Cost (একক দর) দিলে Total Cost অটো হিসাব হবে। অথবা আপনি সরাসরি Total Cost ও লিখতে পারেন।"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3328,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 3326,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 max-h-[360px] overflow-y-auto pr-1",
                            children: editMaterialItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-slate-950/90 border border-purple-500/30 rounded-xl space-y-2.5 relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-bold text-purple-300 flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-4 h-4 rounded-full bg-purple-600/40 text-purple-200 flex items-center justify-center text-[10px] font-bold",
                                                            children: idx + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 3340,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Material Item #",
                                                        idx + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 3339,
                                                    columnNumber: 21
                                                }, this),
                                                editMaterialItems.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleRemoveMaterialItem(idx),
                                                    className: "text-rose-400 hover:text-rose-300 p-1 rounded hover:bg-rose-950/40 transition",
                                                    title: "Remove Item",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                        lineNumber: 3352,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 3346,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3338,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-400 font-medium mb-1",
                                                    children: "Material / Product Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 3358,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "e.g. Leather gift box-1",
                                                    value: item.productName,
                                                    onChange: (e)=>handleMaterialItemChange(idx, 'productName', e.target.value),
                                                    className: "w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-slate-100 font-semibold focus:border-purple-500 focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 3361,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3357,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-slate-300 font-semibold mb-1",
                                                            children: "Unit / Quantity (পরিমাণ) *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 3372,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            min: "0",
                                                            step: "any",
                                                            placeholder: "1",
                                                            value: item.quantity === 0 ? '' : item.quantity,
                                                            onFocus: (e)=>e.target.select(),
                                                            onClick: (e)=>e.target.select(),
                                                            onChange: (e)=>handleMaterialItemChange(idx, 'quantity', e.target.value),
                                                            className: "w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-slate-100 font-bold focus:border-purple-500 focus:outline-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 3375,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 3371,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-slate-300 font-semibold mb-1",
                                                            children: "Unit Cost (একক দর ৳) *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 3389,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            min: "0",
                                                            step: "any",
                                                            placeholder: "0",
                                                            value: item.unitLandedCost === 0 ? '' : item.unitLandedCost,
                                                            onFocus: (e)=>e.target.select(),
                                                            onClick: (e)=>e.target.select(),
                                                            onChange: (e)=>handleMaterialItemChange(idx, 'unitLandedCost', e.target.value),
                                                            className: "w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-slate-100 font-mono focus:border-purple-500 focus:outline-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 3392,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 3388,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-purple-300 font-bold mb-1",
                                                            children: "Total Cost (মোট খরচ ৳) *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 3406,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            min: "0",
                                                            step: "any",
                                                            placeholder: "0",
                                                            value: item.totalCost === 0 ? '' : item.totalCost,
                                                            onFocus: (e)=>e.target.select(),
                                                            onClick: (e)=>e.target.select(),
                                                            onChange: (e)=>handleMaterialItemChange(idx, 'totalCost', e.target.value),
                                                            className: "w-full bg-slate-900 border-2 border-purple-500/60 rounded-lg p-2 text-purple-300 font-mono font-bold focus:border-purple-400 focus:outline-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                            lineNumber: 3409,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                    lineNumber: 3405,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3370,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.id || idx, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3334,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 3332,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleAddMaterialItem,
                                className: "px-3 py-1.5 rounded-lg bg-purple-950/40 hover:bg-purple-900/60 text-purple-300 border border-purple-500/40 text-xs font-semibold flex items-center gap-1.5 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 3433,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "+ Add Another Material"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 3434,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 3428,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 3427,
                            columnNumber: 13
                        }, this),
                        (()=>{
                            const currentTotalMaterials = editMaterialItems.reduce((sum, it)=>sum + (Number(it.totalCost) || 0), 0);
                            const testTotalCost = currentTotalMaterials + selectedProject.laborCost + selectedProject.transportCost + selectedProject.otherCost;
                            const testProfit = selectedProject.contractValue - testTotalCost;
                            const testMargin = selectedProject.contractValue > 0 ? testProfit / selectedProject.contractValue * 100 : 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2 font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center pb-2 border-b border-slate-800 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-slate-300 uppercase tracking-wide",
                                                children: "Total Materials Landed Cost:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 3448,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base font-black text-purple-400 font-mono",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(currentTotalMaterials)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 3449,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 3447,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-slate-400 text-[11px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "New Total Project Cost:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 3452,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-rose-400 font-bold",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(testTotalCost)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 3453,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 3451,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-slate-300 text-[11px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Estimated Net Profit (লাভ):"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 3456,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: testProfit >= 0 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold',
                                                children: [
                                                    testProfit >= 0 ? `+${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(testProfit)}` : `-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(Math.abs(testProfit))}`,
                                                    " (",
                                                    testMargin.toFixed(1),
                                                    "%)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                                lineNumber: 3457,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                        lineNumber: 3455,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                lineNumber: 3446,
                                columnNumber: 17
                            }, this);
                        })(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t border-slate-800 flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsEditMaterialCostModalOpen(false),
                                    className: "px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3467,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg shadow-lg shadow-purple-600/30 transition flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3478,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Save Material Cost"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                            lineNumber: 3479,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                                    lineNumber: 3474,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/ProjectsView.tsx",
                            lineNumber: 3466,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/ProjectsView.tsx",
                    lineNumber: 3308,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/ProjectsView.tsx",
                lineNumber: 3303,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modules/ProjectsView.tsx",
        lineNumber: 1300,
        columnNumber: 5
    }, this);
}
_s(ProjectsView, "YXhHmC9yOQnH55AAGg2nwEwMFvo=");
_c = ProjectsView;
var _c;
__turbopack_refresh__.register(_c, "ProjectsView");

})()),
}]);

//# sourceMappingURL=src_components_modules_ProjectsView_tsx_8bf22d._.js.map