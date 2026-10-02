(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_modules_CustomersView_tsx_014725._.js", {

"[project]/src/components/modules/CustomersView.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CustomersView": ()=>CustomersView,
    "INITIAL_CUSTOMERS": ()=>INITIAL_CUSTOMERS
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-left.js [app-client] (ecmascript) <export default as ArrowDownLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/formatters.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const INITIAL_CUSTOMERS = [
    {
        id: 'cust-001',
        name: 'Procurement Officer',
        company: 'Daraz Bangladesh Limited',
        type: 'CORPORATE',
        phone: '+880 1700-112233',
        email: 'procurement@daraz.com.bd',
        address: 'Tejgaon I/A, Dhaka-1208',
        binNumber: 'BIN-003928174-0101',
        creditLimit: 1000000,
        totalInvoiced: 480000,
        totalPaid: 400000,
        currentDues: 80000,
        advanceCredit: 0,
        paymentTerms: '30 Days Net',
        transactions: [
            {
                id: 'tx-01',
                date: '2026-08-15',
                type: 'INVOICE',
                refNo: 'INV-2026-089',
                description: 'Server Rack & CCTV Shifting (HUB Project Phase 1)',
                invoicedAmount: 250000,
                paidAmount: 0,
                balance: 250000
            },
            {
                id: 'tx-02',
                date: '2026-08-25',
                type: 'PAYMENT',
                refNo: 'CHQ-BRAC-9921',
                description: 'Payment received via BRAC Bank Cheque',
                method: 'CHEQUE',
                invoicedAmount: 0,
                paidAmount: 250000,
                balance: 0
            },
            {
                id: 'tx-03',
                date: '2026-09-20',
                type: 'INVOICE',
                refNo: 'GT/26107',
                description: 'Rosenberger Cat-6 UTP Pure Copper Cables (2 Boxes)',
                invoicedAmount: 230000,
                paidAmount: 0,
                balance: 230000
            },
            {
                id: 'tx-04',
                date: '2026-09-24',
                type: 'PAYMENT',
                refNo: 'EFT-DARAZ-1102',
                description: 'Partial Bank EFT Payment against Bill GT/26107',
                method: 'BANK',
                invoicedAmount: 0,
                paidAmount: 150000,
                balance: 80000
            }
        ]
    },
    {
        id: 'cust-002',
        name: 'Md. Tariqul Islam',
        company: 'ABC Bank PLC',
        type: 'CORPORATE',
        phone: '+880 1711-223344',
        email: 'procurement@abcbank.com.bd',
        address: 'ABC Tower, Motijheel C/A, Dhaka-1000',
        binNumber: 'BIN-001293848-0101',
        creditLimit: 2000000,
        totalInvoiced: 450000,
        totalPaid: 450000,
        currentDues: 0,
        advanceCredit: 0,
        paymentTerms: 'Net 30 Days',
        transactions: [
            {
                id: 'tx-05',
                date: '2026-09-02',
                type: 'INVOICE',
                refNo: 'INV-2026-092',
                description: 'ABC Bank Head Office CCTV & Security Modernization',
                invoicedAmount: 450000,
                paidAmount: 0,
                balance: 450000
            },
            {
                id: 'tx-06',
                date: '2026-09-18',
                type: 'PAYMENT',
                refNo: 'BEFTN-ABC-001',
                description: 'Full contract settlement via corporate BEFTN',
                method: 'BANK',
                invoicedAmount: 0,
                paidAmount: 450000,
                balance: 0
            }
        ]
    },
    {
        id: 'cust-003',
        name: 'Engr. Kamal Hossain',
        company: 'TechVision Security Systems',
        type: 'WHOLESALE',
        phone: '+880 1819-556677',
        email: 'kamal@techvision.com.bd',
        address: 'Multiplan Center, Level 6, Elephant Road, Dhaka',
        binNumber: 'BIN-004819283-0202',
        creditLimit: 500000,
        totalInvoiced: 240000,
        totalPaid: 150000,
        currentDues: 90000,
        advanceCredit: 0,
        paymentTerms: 'Net 15 Days',
        transactions: [
            {
                id: 'tx-07',
                date: '2026-09-08',
                type: 'INVOICE',
                refNo: 'INV-2026-095',
                description: 'Wholesale IP Camera & NVR Supply (Batch #4)',
                invoicedAmount: 240000,
                paidAmount: 0,
                balance: 240000
            },
            {
                id: 'tx-08',
                date: '2026-09-16',
                type: 'PAYMENT',
                refNo: 'CASH-REC-1044',
                description: 'Cash payment received at Motijheel office',
                method: 'CASH',
                invoicedAmount: 0,
                paidAmount: 150000,
                balance: 90000
            }
        ]
    },
    {
        id: 'cust-004',
        name: 'Dr. Rafiqul Hasan',
        company: 'Square Pharmaceuticals Ltd',
        type: 'CORPORATE',
        phone: '+880 1912-334455',
        email: 'projects@squarepharma.com.bd',
        address: 'Square Centre, 48 Mohakhali C/A, Dhaka-1212',
        binNumber: 'BIN-009928172-0303',
        creditLimit: 5000000,
        totalInvoiced: 150000,
        totalPaid: 175000,
        currentDues: 0,
        advanceCredit: 25000,
        paymentTerms: 'Milestone / Net 45',
        transactions: [
            {
                id: 'tx-09',
                date: '2026-09-05',
                type: 'INVOICE',
                refNo: 'INV-2026-094',
                description: 'Data Center Rack Migration Milestone 1',
                invoicedAmount: 150000,
                paidAmount: 0,
                balance: 150000
            },
            {
                id: 'tx-10',
                date: '2026-09-15',
                type: 'PAYMENT',
                refNo: 'CHQ-SQUARE-8812',
                description: 'Milestone advance payment (Overpaid ৳25,000 for Phase 2)',
                method: 'CHEQUE',
                invoicedAmount: 0,
                paidAmount: 175000,
                balance: -25000
            }
        ]
    },
    {
        id: 'cust-005',
        name: 'Sultana Razia',
        company: 'Nexus Computer & CCTV Solution',
        type: 'WHOLESALE',
        phone: '+880 1611-998877',
        email: 'nexus.bd@gmail.com',
        address: 'Agrabad C/A, Chittagong, Bangladesh',
        binNumber: 'BIN-007712349-0404',
        creditLimit: 300000,
        totalInvoiced: 580000,
        totalPaid: 320000,
        currentDues: 260000,
        advanceCredit: 0,
        paymentTerms: 'Net 7 Days',
        transactions: [
            {
                id: 'tx-11',
                date: '2026-09-10',
                type: 'INVOICE',
                refNo: 'INV-2026-098',
                description: 'Chittagong Wholesale Consignment: 30 CCTV Cameras & 10 NVRs',
                invoicedAmount: 580000,
                paidAmount: 0,
                balance: 580000
            },
            {
                id: 'tx-12',
                date: '2026-09-18',
                type: 'PAYMENT',
                refNo: 'BKASH-TRX-9982',
                description: 'bKash Merchant Payment Tranche 1',
                method: 'BKASH',
                invoicedAmount: 0,
                paidAmount: 320000,
                balance: 260000
            }
        ]
    }
];
function CustomersView() {
    _s();
    const [customers, setCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if (typeof window !== 'undefined') {
            const delSaved = localStorage.getItem('globotech_erp_deleted_customer_ids');
            const deletedCustIds = new Set(delSaved ? JSON.parse(delSaved) : []);
            const saved = localStorage.getItem('globotech_erp_customers');
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        return parsed;
                    }
                } catch (e) {
                    console.error(e);
                }
            }
            return INITIAL_CUSTOMERS.filter((c)=>!deletedCustIds.has(c.id) && !deletedCustIds.has(c.company || ''));
        }
        return INITIAL_CUSTOMERS;
    });
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [filterBalance, setFilterBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ALL');
    const [filterType, setFilterType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ALL');
    // Modals
    const [isAddModalOpen, setIsAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCollectPaymentOpen, setIsCollectPaymentOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAddBillOpen, setIsAddBillOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCustomer, setSelectedCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLedgerSheetOpen, setIsLedgerSheetOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Forms
    const [editCustomerForm, setEditCustomerForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [paymentForm, setPaymentForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        customerId: '',
        amount: 10000,
        date: new Date().toISOString().split('T')[0],
        method: 'BANK',
        refNo: '',
        description: ''
    });
    const [billForm, setBillForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        customerId: '',
        amount: 25000,
        date: new Date().toISOString().split('T')[0],
        refNo: '',
        description: ''
    });
    const [newCustomer, setNewCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        company: '',
        type: 'CORPORATE',
        phone: '',
        email: '',
        address: '',
        binNumber: '',
        creditLimit: 500000,
        paymentTerms: 'Net 30 Days'
    });
    // Save to localStorage whenever customers change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof window !== 'undefined') {
            localStorage.setItem('globotech_erp_customers', JSON.stringify(customers));
        }
    }, [
        customers
    ]);
    // Listen for customer update events from other views or tabs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleCustUpdate = (e)=>{
            if (e?.detail && Array.isArray(e.detail)) {
                setCustomers(e.detail);
            } else if (typeof window !== 'undefined') {
                const saved = localStorage.getItem('globotech_erp_customers');
                if (saved) {
                    try {
                        setCustomers(JSON.parse(saved));
                    } catch (err) {}
                }
            }
        };
        window.addEventListener('globotech_customers_updated', handleCustUpdate);
        return ()=>window.removeEventListener('globotech_customers_updated', handleCustUpdate);
    }, []);
    // Listen for global backup restore event
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleBackupRestored = ()=>{
            if (typeof window !== 'undefined') {
                const saved = localStorage.getItem('globotech_erp_customers');
                if (saved) {
                    try {
                        setCustomers(JSON.parse(saved));
                    } catch (e) {
                        console.error('Error reloading customers after backup restore:', e);
                    }
                }
            }
        };
        window.addEventListener('globotech_backup_restored', handleBackupRestored);
        return ()=>window.removeEventListener('globotech_backup_restored', handleBackupRestored);
    }, []);
    // Overall Financial Totals
    const totals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const totalDues = customers.reduce((acc, c)=>acc + (c.currentDues || 0), 0);
        const totalCredit = customers.reduce((acc, c)=>acc + (c.advanceCredit || 0), 0);
        const totalInvoiced = customers.reduce((acc, c)=>acc + (c.totalInvoiced || 0), 0);
        const totalPaid = customers.reduce((acc, c)=>acc + (c.totalPaid || 0), 0);
        const dueClientsCount = customers.filter((c)=>(c.currentDues || 0) > 0).length;
        const creditClientsCount = customers.filter((c)=>(c.advanceCredit || 0) > 0).length;
        return {
            totalDues,
            totalCredit,
            totalInvoiced,
            totalPaid,
            dueClientsCount,
            creditClientsCount
        };
    }, [
        customers
    ]);
    // Filtered list
    const filteredCustomers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return customers.filter((c)=>{
            const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.company && c.company.toLowerCase().includes(search.toLowerCase()) || c.phone.includes(search) || c.binNumber && c.binNumber.toLowerCase().includes(search.toLowerCase());
            const matchesType = filterType === 'ALL' || c.type === filterType;
            let matchesBalance = true;
            if (filterBalance === 'DUE') {
                matchesBalance = (c.currentDues || 0) > 0;
            } else if (filterBalance === 'CREDIT') {
                matchesBalance = (c.advanceCredit || 0) > 0;
            } else if (filterBalance === 'PAID') {
                matchesBalance = (c.currentDues || 0) === 0 && (c.advanceCredit || 0) === 0;
            }
            return matchesSearch && matchesType && matchesBalance;
        });
    }, [
        customers,
        search,
        filterType,
        filterBalance
    ]);
    // Handle Record Payment (টাকা জমা / কালেকশন এন্ট্রি)
    const handleRecordPayment = (e)=>{
        e.preventDefault();
        const customer = customers.find((c)=>c.id === paymentForm.customerId);
        if (!customer || paymentForm.amount <= 0) return;
        const payAmount = Number(paymentForm.amount);
        const currentDue = customer.currentDues || 0;
        const currentCredit = customer.advanceCredit || 0;
        let newDue = 0;
        let newCredit = 0;
        if (payAmount <= currentDue) {
            newDue = currentDue - payAmount;
            newCredit = currentCredit;
        } else {
            // Overpaid or advance payment
            const excess = payAmount - currentDue;
            newDue = 0;
            newCredit = currentCredit + excess;
        }
        const newTx = {
            id: `tx-${Date.now()}`,
            date: paymentForm.date || new Date().toISOString().split('T')[0],
            type: 'PAYMENT',
            refNo: paymentForm.refNo || `REC-${Date.now().toString().slice(-4)}`,
            description: paymentForm.description || `Payment received via ${paymentForm.method}`,
            method: paymentForm.method,
            invoicedAmount: 0,
            paidAmount: payAmount,
            balance: newDue > 0 ? newDue : -newCredit
        };
        const updatedCustomer = {
            ...customer,
            totalPaid: (customer.totalPaid || 0) + payAmount,
            currentDues: newDue,
            advanceCredit: newCredit,
            transactions: [
                ...customer.transactions || [],
                newTx
            ]
        };
        const updatedList = customers.map((c)=>c.id === updatedCustomer.id ? updatedCustomer : c);
        setCustomers(updatedList);
        if (selectedCustomer?.id === updatedCustomer.id) {
            setSelectedCustomer(updatedCustomer);
        }
        setIsCollectPaymentOpen(false);
        setPaymentForm({
            customerId: '',
            amount: 10000,
            date: new Date().toISOString().split('T')[0],
            method: 'BANK',
            refNo: '',
            description: ''
        });
    };
    // Handle Add Bill / Due Entry (ইনভয়েস বা বকেয়া যোগ)
    const handleAddBill = (e)=>{
        e.preventDefault();
        const customer = customers.find((c)=>c.id === billForm.customerId);
        if (!customer || billForm.amount <= 0) return;
        const billAmt = Number(billForm.amount);
        const currentDue = customer.currentDues || 0;
        const currentCredit = customer.advanceCredit || 0;
        let newDue = 0;
        let newCredit = 0;
        if (currentCredit >= billAmt) {
            // Deduct from advance credit
            newCredit = currentCredit - billAmt;
            newDue = currentDue;
        } else {
            const remainingBill = billAmt - currentCredit;
            newCredit = 0;
            newDue = currentDue + remainingBill;
        }
        const newTx = {
            id: `tx-${Date.now()}`,
            date: billForm.date || new Date().toISOString().split('T')[0],
            type: 'INVOICE',
            refNo: billForm.refNo || `INV-${Date.now().toString().slice(-4)}`,
            description: billForm.description || 'Goods / CCTV Service Billed',
            invoicedAmount: billAmt,
            paidAmount: 0,
            balance: newDue > 0 ? newDue : -newCredit
        };
        const updatedCustomer = {
            ...customer,
            totalInvoiced: (customer.totalInvoiced || 0) + billAmt,
            currentDues: newDue,
            advanceCredit: newCredit,
            transactions: [
                ...customer.transactions || [],
                newTx
            ]
        };
        const updatedList = customers.map((c)=>c.id === updatedCustomer.id ? updatedCustomer : c);
        setCustomers(updatedList);
        if (selectedCustomer?.id === updatedCustomer.id) {
            setSelectedCustomer(updatedCustomer);
        }
        setIsAddBillOpen(false);
        setBillForm({
            customerId: '',
            amount: 25000,
            date: new Date().toISOString().split('T')[0],
            refNo: '',
            description: ''
        });
    };
    // Handle Add Customer
    const handleAddCustomer = (e)=>{
        e.preventDefault();
        const created = {
            id: `cust-${Date.now()}`,
            name: newCustomer.name,
            company: newCustomer.company,
            type: newCustomer.type,
            phone: newCustomer.phone,
            email: newCustomer.email,
            address: newCustomer.address,
            binNumber: newCustomer.binNumber,
            creditLimit: Number(newCustomer.creditLimit) || 0,
            totalInvoiced: 0,
            totalPaid: 0,
            currentDues: 0,
            advanceCredit: 0,
            paymentTerms: newCustomer.paymentTerms || 'Net 30 Days',
            transactions: []
        };
        const updated = [
            created,
            ...customers
        ];
        setCustomers(updated);
        if (typeof window !== 'undefined') {
            localStorage.setItem('globotech_erp_customers', JSON.stringify(updated));
            window.dispatchEvent(new CustomEvent('globotech_customers_updated', {
                detail: updated
            }));
        }
        setIsAddModalOpen(false);
        setNewCustomer({
            name: '',
            company: '',
            type: 'CORPORATE',
            phone: '',
            email: '',
            address: '',
            binNumber: '',
            creditLimit: 500000,
            paymentTerms: 'Net 30 Days'
        });
    };
    // Handle Delete / Remove Customer
    const handleDeleteCustomer = (customer)=>{
        const hasDuesOrTransactions = customer.currentDues && customer.currentDues > 0 || customer.transactions && customer.transactions.length > 0;
        const confirmMsg = hasDuesOrTransactions ? `Warning: Customer "${customer.company || customer.name}" has ${customer.transactions?.length || 0} transaction records or an outstanding balance of ৳${customer.currentDues}.\n\nAre you sure you want to permanently delete this customer from the system?` : `Are you sure you want to permanently delete customer "${customer.company || customer.name}"?`;
        if (!window.confirm(confirmMsg)) return;
        const updated = customers.filter((c)=>c.id !== customer.id);
        setCustomers(updated);
        if (typeof window !== 'undefined') {
            localStorage.setItem('globotech_erp_customers', JSON.stringify(updated));
            // Record in deleted IDs so initial mock data never resurrects it
            try {
                const delSaved = localStorage.getItem('globotech_erp_deleted_customer_ids');
                const delList = delSaved ? JSON.parse(delSaved) : [];
                if (!delList.includes(customer.id)) delList.push(customer.id);
                if (customer.company && !delList.includes(customer.company)) delList.push(customer.company);
                localStorage.setItem('globotech_erp_deleted_customer_ids', JSON.stringify(delList));
            } catch (e) {
                console.error('Error persisting deleted customer ID:', e);
            }
            window.dispatchEvent(new CustomEvent('globotech_customers_updated', {
                detail: updated
            }));
        }
        if (selectedCustomer && selectedCustomer.id === customer.id) {
            setSelectedCustomer(null);
            setIsLedgerSheetOpen(false);
        }
    };
    // Edit Customer Handlers
    const handleOpenEditCustomer = (customer)=>{
        setEditCustomerForm({
            ...customer
        });
        setIsEditModalOpen(true);
    };
    const handleSaveEditCustomer = (e)=>{
        e.preventDefault();
        if (!editCustomerForm.id) return;
        const updated = customers.map((c)=>{
            if (c.id === editCustomerForm.id) {
                return {
                    ...c,
                    name: editCustomerForm.name || c.name,
                    company: editCustomerForm.company || c.company,
                    type: editCustomerForm.type || c.type,
                    phone: editCustomerForm.phone || c.phone,
                    email: editCustomerForm.email || c.email,
                    address: editCustomerForm.address || c.address,
                    binNumber: editCustomerForm.binNumber || c.binNumber,
                    creditLimit: Number(editCustomerForm.creditLimit) || c.creditLimit,
                    paymentTerms: editCustomerForm.paymentTerms || c.paymentTerms
                };
            }
            return c;
        });
        setCustomers(updated);
        if (typeof window !== 'undefined') {
            localStorage.setItem('globotech_erp_customers', JSON.stringify(updated));
            window.dispatchEvent(new CustomEvent('globotech_customers_updated', {
                detail: updated
            }));
        }
        setIsEditModalOpen(false);
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
                                        className: "w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 670,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 669,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-lg font-bold text-slate-100",
                                        children: "Client Due, Advance Credit & Ledger Statement"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 672,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 668,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400",
                                children: "Track customer receivables, overdue balances, advance payments, and instant payment receipt entries."
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 676,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                        lineNumber: 667,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setPaymentForm((prev)=>({
                                            ...prev,
                                            customerId: customers[0]?.id || ''
                                        }));
                                    setIsCollectPaymentOpen(true);
                                },
                                className: "flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-lg shadow-emerald-600/20 active:scale-95",
                                title: "Record payment received from client",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownLeft$3e$__["ArrowDownLeft"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 690,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "+ Record Payment (টাকা জমা)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 691,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 682,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setBillForm((prev)=>({
                                            ...prev,
                                            customerId: customers[0]?.id || ''
                                        }));
                                    setIsAddBillOpen(true);
                                },
                                className: "flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border border-amber-500/30 font-semibold text-xs transition shadow-sm",
                                title: "Add new bill or invoice due to customer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 702,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "+ Add Bill / Due"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 703,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 694,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsAddModalOpen(true),
                                className: "flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-lg shadow-blue-600/20 active:scale-95",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 710,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "+ New Client"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 711,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 706,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                        lineNumber: 681,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/CustomersView.tsx",
                lineNumber: 666,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4 no-print",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-rose-950/30 border border-rose-500/30 shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-bold text-rose-400 uppercase tracking-wider block",
                                        children: "Total Dues (মোট বকেয়া পাওনা)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 721,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300",
                                        children: [
                                            totals.dueClientsCount,
                                            " Clients"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 724,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 720,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-black text-rose-400 font-mono mt-1",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(totals.totalDues)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 728,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-rose-300/70 mt-0.5 block",
                                children: "Money to be collected from clients"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 731,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                        lineNumber: 719,
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
                                        children: "Advance Credits (অগ্রিম জমা)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 739,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300",
                                        children: [
                                            totals.creditClientsCount,
                                            " Clients"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 742,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 738,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-black text-emerald-400 font-mono mt-1",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(totals.totalCredit)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 746,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-emerald-300/70 mt-0.5 block",
                                children: "Client advance deposits for upcoming deliveries"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 749,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                        lineNumber: 737,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-semibold text-slate-400 uppercase tracking-wider block",
                                children: "Total Collections (মোট আদায়)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 756,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-black text-slate-100 font-mono mt-1",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(totals.totalPaid)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 759,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-slate-500 mt-0.5 block",
                                children: "Lifetime received from all clients"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 762,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                        lineNumber: 755,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-semibold text-blue-400 uppercase tracking-wider block",
                                children: "Total Lifetime Billed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 769,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-black text-blue-400 font-mono mt-1",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(totals.totalInvoiced)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 772,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-slate-500 mt-0.5 block",
                                children: [
                                    "Gross invoices across ",
                                    customers.length,
                                    " clients"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 775,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                        lineNumber: 768,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/CustomersView.tsx",
                lineNumber: 717,
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
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 784,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search Client Name, Company, Phone, BIN...",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value),
                                className: "w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 785,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                        lineNumber: 783,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 w-full sm:w-auto overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFilterBalance('ALL'),
                                    className: `px-3 py-1.5 rounded-lg font-semibold transition ${filterBalance === 'ALL' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`,
                                    children: [
                                        "All Clients (",
                                        customers.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 797,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFilterBalance('DUE'),
                                    className: `px-3 py-1.5 rounded-lg font-semibold transition flex items-center gap-1 ${filterBalance === 'DUE' ? 'bg-rose-600 text-white shadow' : 'text-rose-400 hover:text-rose-200'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "With Dues (বকেয়া)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 815,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-1.5 py-0.2 bg-rose-950 text-rose-300 rounded-full text-[10px]",
                                            children: totals.dueClientsCount
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 816,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 807,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFilterBalance('CREDIT'),
                                    className: `px-3 py-1.5 rounded-lg font-semibold transition flex items-center gap-1 ${filterBalance === 'CREDIT' ? 'bg-emerald-600 text-white shadow' : 'text-emerald-400 hover:text-emerald-200'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "In Advance (অগ্রিম)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 828,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-1.5 py-0.2 bg-emerald-950 text-emerald-300 rounded-full text-[10px]",
                                            children: totals.creditClientsCount
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 829,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 820,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFilterBalance('PAID'),
                                    className: `px-3 py-1.5 rounded-lg font-semibold transition ${filterBalance === 'PAID' ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`,
                                    children: "Settled / Zero"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 833,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 796,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                        lineNumber: 795,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/CustomersView.tsx",
                lineNumber: 782,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 no-print",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden space-y-3",
                        children: filteredCustomers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-500 italic",
                            children: "No clients found matching the selected filter."
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 852,
                            columnNumber: 13
                        }, this) : filteredCustomers.map((c)=>{
                            const hasDue = (c.currentDues || 0) > 0;
                            const hasCredit = (c.advanceCredit || 0) > 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-slate-100 text-sm",
                                                                children: c.company || c.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 868,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700",
                                                                children: c.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 871,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 867,
                                                        columnNumber: 23
                                                    }, this),
                                                    c.company && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-slate-400 mt-0.5",
                                                        children: [
                                                            "Attn: ",
                                                            c.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 876,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 866,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: hasDue ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30",
                                                    children: "PAYMENT DUE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 882,
                                                    columnNumber: 25
                                                }, this) : hasCredit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
                                                    children: "IN ADVANCE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 886,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-400",
                                                    children: "CLEARED"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 890,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 880,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 865,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 space-y-1.5 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 text-slate-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                className: "w-3.5 h-3.5 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 901,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: `tel:${c.phone}`,
                                                                className: "font-mono text-emerald-400 underline",
                                                                children: c.phone
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 902,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 900,
                                                        columnNumber: 23
                                                    }, this),
                                                    c.binNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[10px] text-blue-400",
                                                        children: [
                                                            "BIN: ",
                                                            c.binNumber
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 910,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 899,
                                                columnNumber: 21
                                            }, this),
                                            c.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400 truncate",
                                                children: c.address
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 916,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 898,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-slate-500 uppercase block font-semibold",
                                                        children: "Total Invoiced"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 923,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-slate-200 font-bold",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(c.totalInvoiced || 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 924,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 922,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-slate-500 uppercase block font-semibold",
                                                        children: "Total Paid"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 927,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-emerald-400 font-bold",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(c.totalPaid || 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 928,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 926,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-rose-400 uppercase block font-semibold",
                                                        children: "Current Due (বকেয়া)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 931,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `font-mono font-bold ${hasDue ? 'text-rose-400' : 'text-slate-500'}`,
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(c.currentDues || 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 932,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 930,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-emerald-400 uppercase block font-semibold",
                                                        children: "Advance Credit (অগ্রিম)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 937,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `font-mono font-bold ${hasCredit ? 'text-emerald-400' : 'text-slate-500'}`,
                                                        children: hasCredit ? `+${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(c.advanceCredit || 0)}` : '৳ 0.00'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 938,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 936,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 921,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-5 gap-1.5 pt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setPaymentForm({
                                                        customerId: c.id,
                                                        amount: c.currentDues > 0 ? c.currentDues : 10000,
                                                        date: new Date().toISOString().split('T')[0],
                                                        method: 'BANK',
                                                        refNo: '',
                                                        description: `Payment against ${c.company || c.name}`
                                                    });
                                                    setIsCollectPaymentOpen(true);
                                                },
                                                className: "col-span-2 min-h-[42px] px-3 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-bold text-xs flex items-center justify-center gap-1 transition active:scale-95",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownLeft$3e$__["ArrowDownLeft"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 960,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Collect"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 961,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 946,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setSelectedCustomer(c);
                                                    setIsLedgerSheetOpen(true);
                                                },
                                                className: "col-span-1 min-h-[42px] px-2 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-400 border border-slate-700 font-semibold text-xs flex items-center justify-center gap-1 transition active:scale-95",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 971,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Ledger"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 972,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 964,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleOpenEditCustomer(c),
                                                className: "col-span-1 min-h-[42px] p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition flex items-center justify-center active:scale-95",
                                                title: "Edit Customer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 980,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 975,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDeleteCustomer(c),
                                                className: "col-span-1 min-h-[42px] p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 transition flex items-center justify-center active:scale-95",
                                                title: "Delete Customer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 988,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 983,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 945,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, c.id, true, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 861,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                        lineNumber: 850,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto touch-scroll",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-left text-xs text-slate-300 min-w-[850px] border-collapse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "bg-slate-950 text-slate-400 uppercase text-[10px] font-bold tracking-wider border-b border-slate-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-4",
                                                    children: "Client / Company Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1003,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-4",
                                                    children: "Contact & BIN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1004,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-3 text-right",
                                                    children: "Total Invoiced"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1005,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-3 text-right",
                                                    children: "Total Paid"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1006,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-4 text-right text-rose-400",
                                                    children: "Current Due (বকেয়া)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1007,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-4 text-right text-emerald-400",
                                                    children: "Advance Credit (অগ্রিম)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1008,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-3 text-center",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1009,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-4 text-right",
                                                    children: "Actions"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1010,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1002,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 1001,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y divide-slate-800/80",
                                        children: filteredCustomers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 8,
                                                className: "py-8 text-center text-slate-500 italic",
                                                children: "No clients found matching the selected filter."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 1016,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1015,
                                            columnNumber: 19
                                        }, this) : filteredCustomers.map((c)=>{
                                            const hasDue = (c.currentDues || 0) > 0;
                                            const hasCredit = (c.advanceCredit || 0) > 0;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-slate-800/40 transition",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-slate-100 text-sm block leading-snug",
                                                                children: c.company || c.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1028,
                                                                columnNumber: 27
                                                            }, this),
                                                            c.company && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] text-slate-400 block",
                                                                children: [
                                                                    "Attn: ",
                                                                    c.name
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1032,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-slate-500",
                                                                children: c.address
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1034,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1027,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5 text-slate-300",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                        className: "w-3.5 h-3.5 text-slate-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                        lineNumber: 1039,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: c.phone
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                        lineNumber: 1040,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1038,
                                                                columnNumber: 27
                                                            }, this),
                                                            c.binNumber ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-mono text-[10px] text-blue-400 mt-0.5",
                                                                children: c.binNumber
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1043,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] text-slate-500",
                                                                children: "No BIN"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1047,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1037,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-3 text-right font-mono font-medium text-slate-300",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(c.totalInvoiced || 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1051,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-3 text-right font-mono font-medium text-emerald-300",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(c.totalPaid || 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1055,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-4 text-right font-mono",
                                                        children: hasDue ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "inline-block px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 font-bold text-xs",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(c.currentDues)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                            lineNumber: 1062,
                                                            columnNumber: 29
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-500 text-xs",
                                                            children: "৳ 0.00"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                            lineNumber: 1066,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1060,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-4 text-right font-mono",
                                                        children: hasCredit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "inline-block px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs",
                                                            children: [
                                                                "+",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(c.advanceCredit)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                            lineNumber: 1073,
                                                            columnNumber: 29
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-500 text-xs",
                                                            children: "৳ 0.00"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                            lineNumber: 1077,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1071,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-3 text-center",
                                                        children: hasDue ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300",
                                                            children: "PAYMENT DUE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                            lineNumber: 1083,
                                                            columnNumber: 29
                                                        }, this) : hasCredit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300",
                                                            children: "IN ADVANCE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                            lineNumber: 1087,
                                                            columnNumber: 29
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-400",
                                                            children: "CLEARED"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                            lineNumber: 1091,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1081,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-4 text-right",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-end gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setPaymentForm({
                                                                            customerId: c.id,
                                                                            amount: c.currentDues > 0 ? c.currentDues : 10000,
                                                                            date: new Date().toISOString().split('T')[0],
                                                                            method: 'BANK',
                                                                            refNo: '',
                                                                            description: `Payment against ${c.company || c.name}`
                                                                        });
                                                                        setIsCollectPaymentOpen(true);
                                                                    },
                                                                    className: "px-2.5 py-1 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-semibold text-xs flex items-center gap-1 transition",
                                                                    title: "Collect payment / deposit from this client",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownLeft$3e$__["ArrowDownLeft"], {
                                                                            className: "w-3 h-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                            lineNumber: 1115,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Collect"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                            lineNumber: 1116,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                    lineNumber: 1100,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setSelectedCustomer(c);
                                                                        setIsLedgerSheetOpen(true);
                                                                    },
                                                                    className: "px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-blue-400 border border-slate-700 font-semibold text-xs flex items-center gap-1 transition",
                                                                    title: "View complete account statement & transaction ledger",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                            className: "w-3 h-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                            lineNumber: 1128,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Ledger"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                            lineNumber: 1129,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                    lineNumber: 1120,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleOpenEditCustomer(c),
                                                                    className: "p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition",
                                                                    title: "Edit customer details",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                        lineNumber: 1138,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                    lineNumber: 1133,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDeleteCustomer(c),
                                                                    className: "p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 transition",
                                                                    title: "Delete / Remove this customer",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                        lineNumber: 1147,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                    lineNumber: 1142,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                            lineNumber: 1098,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1097,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, c.id, true, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 1026,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 1013,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "bg-slate-950 font-bold border-t-2 border-slate-700 text-slate-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 2,
                                                    className: "py-3.5 px-4 uppercase text-xs",
                                                    children: "Total Across All Filtered Clients:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1158,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3.5 px-3 text-right font-mono",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(totals.totalInvoiced)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1159,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3.5 px-3 text-right font-mono text-emerald-400",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(totals.totalPaid)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1160,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3.5 px-4 text-right font-mono text-rose-400 text-sm font-black",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(totals.totalDues)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1161,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3.5 px-4 text-right font-mono text-emerald-400 text-sm font-black",
                                                    children: [
                                                        "+",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(totals.totalCredit)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1162,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1163,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1157,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 1156,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 1000,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 999,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                        lineNumber: 998,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/CustomersView.tsx",
                lineNumber: 848,
                columnNumber: 7
            }, this),
            isCollectPaymentOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isCollectPaymentOpen,
                onClose: ()=>setIsCollectPaymentOpen(false),
                title: "Record Client Payment (টাকা জমা / কালেকশন এন্ট্রি)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleRecordPayment,
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Select Client / Corporate Customer *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1182,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    required: true,
                                    value: paymentForm.customerId,
                                    onChange: (e)=>{
                                        const cust = customers.find((c)=>c.id === e.target.value);
                                        setPaymentForm({
                                            ...paymentForm,
                                            customerId: e.target.value,
                                            amount: cust && cust.currentDues > 0 ? cust.currentDues : paymentForm.amount
                                        });
                                    },
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "-- Choose Client --"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1196,
                                            columnNumber: 17
                                        }, this),
                                        customers.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: c.id,
                                                children: [
                                                    c.company || c.name,
                                                    " (Due: ৳",
                                                    c.currentDues.toLocaleString('en-IN'),
                                                    ")"
                                                ]
                                            }, c.id, true, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 1198,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1183,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1181,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Amount Received (৳) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1207,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            required: true,
                                            min: "0",
                                            step: "any",
                                            placeholder: "0",
                                            value: paymentForm.amount === 0 ? '' : paymentForm.amount,
                                            onFocus: (e)=>e.target.select(),
                                            onClick: (e)=>e.target.select(),
                                            onChange: (e)=>{
                                                const val = e.target.value;
                                                setPaymentForm({
                                                    ...paymentForm,
                                                    amount: val === '' ? '' : Number(val)
                                                });
                                            },
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono font-bold text-sm focus:border-emerald-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1208,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1206,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Payment Method"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1226,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: paymentForm.method,
                                            onChange: (e)=>setPaymentForm({
                                                    ...paymentForm,
                                                    method: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "BANK",
                                                    children: "Bank Transfer / BEFTN / RTGS"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1232,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "CHEQUE",
                                                    children: "Bank Cheque / Pay Order"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1233,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "CASH",
                                                    children: "Cash Payment"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1234,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "BKASH",
                                                    children: "bKash / Nagad / MFS"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1235,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1227,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1225,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1205,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Reference / Cheque No / Trx ID"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1242,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "e.g. CHQ-99281 / BEFTN-1102",
                                            value: paymentForm.refNo,
                                            onChange: (e)=>setPaymentForm({
                                                    ...paymentForm,
                                                    refNo: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1243,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1241,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Payment Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1253,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: paymentForm.date,
                                            onChange: (e)=>setPaymentForm({
                                                    ...paymentForm,
                                                    date: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1254,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1252,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1240,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Payment Note / Remarks"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1264,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "e.g. Advance for CCTV installation or settlement against bill",
                                    value: paymentForm.description,
                                    onChange: (e)=>setPaymentForm({
                                            ...paymentForm,
                                            description: e.target.value
                                        }),
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1265,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1263,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-emerald-300 text-[11px] leading-relaxed",
                            children: [
                                "⚡ ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Instant Ledger Settlement:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1275,
                                    columnNumber: 17
                                }, this),
                                " This entry will automatically deduct ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(paymentForm.amount)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1275,
                                    columnNumber: 98
                                }, this),
                                " from client’s outstanding dues. Any excess amount will be safely credited as advance balance."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1274,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t border-slate-800 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsCollectPaymentOpen(false),
                                    className: "w-full sm:w-auto min-h-[42px] px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold transition",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1279,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full sm:w-auto min-h-[42px] px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-lg shadow-emerald-600/30 transition flex items-center justify-center gap-1.5",
                                    children: "Save Payment Entry"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1286,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1278,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                    lineNumber: 1180,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/CustomersView.tsx",
                lineNumber: 1175,
                columnNumber: 9
            }, this),
            isAddBillOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isAddBillOpen,
                onClose: ()=>setIsAddBillOpen(false),
                title: "Add Client Bill / Due Entry (নতুন ইনভয়েস বা বকেয়া)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleAddBill,
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Client *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1308,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    required: true,
                                    value: billForm.customerId,
                                    onChange: (e)=>setBillForm({
                                            ...billForm,
                                            customerId: e.target.value
                                        }),
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "-- Choose Client --"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1315,
                                            columnNumber: 17
                                        }, this),
                                        customers.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: c.id,
                                                children: c.company || c.name
                                            }, c.id, false, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 1317,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1309,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1307,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Bill / Invoice Amount (৳) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1326,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            required: true,
                                            min: "0",
                                            step: "any",
                                            placeholder: "0",
                                            value: billForm.amount === 0 ? '' : billForm.amount,
                                            onFocus: (e)=>e.target.select(),
                                            onClick: (e)=>e.target.select(),
                                            onChange: (e)=>{
                                                const val = e.target.value;
                                                setBillForm({
                                                    ...billForm,
                                                    amount: val === '' ? '' : Number(val)
                                                });
                                            },
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono font-bold text-sm focus:border-amber-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1327,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1325,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Invoice / Bill Ref No *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1345,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            placeholder: "e.g. GT/26109 or INV-2026-101",
                                            value: billForm.refNo,
                                            onChange: (e)=>setBillForm({
                                                    ...billForm,
                                                    refNo: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1346,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1344,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1324,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Bill Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1359,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: billForm.date,
                                            onChange: (e)=>setBillForm({
                                                    ...billForm,
                                                    date: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1360,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1358,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Particulars / Scope"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1369,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "e.g. Supply of CCTV cables and installation",
                                            value: billForm.description,
                                            onChange: (e)=>setBillForm({
                                                    ...billForm,
                                                    description: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1370,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1368,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1357,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t border-slate-800 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsAddBillOpen(false),
                                    className: "w-full sm:w-auto min-h-[42px] px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold transition",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1381,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full sm:w-auto min-h-[42px] px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg shadow transition flex items-center justify-center gap-1.5",
                                    children: "Add Bill Due"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1388,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1380,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                    lineNumber: 1306,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/CustomersView.tsx",
                lineNumber: 1301,
                columnNumber: 9
            }, this),
            isLedgerSheetOpen && selectedCustomer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isLedgerSheetOpen,
                onClose: ()=>setIsLedgerSheetOpen(false),
                title: `Statement of Account: ${selectedCustomer.company || selectedCustomer.name}`,
                size: "xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between bg-slate-900 border border-slate-800 p-3 rounded-xl no-print",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-slate-300",
                                    children: "Official statement of account detailing lifetime invoices, payments, and outstanding due/credit balance."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1412,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.print(),
                                    className: "flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold shadow transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1419,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Print Statement (A4)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1420,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1415,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1411,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto flex justify-center pb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "printable-ledger-sheet",
                                style: {
                                    width: '210mm',
                                    minHeight: '270mm',
                                    boxSizing: 'border-box',
                                    backgroundColor: '#ffffff',
                                    color: '#000000',
                                    padding: '16mm 18mm',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif'
                                },
                                className: "shadow-2xl rounded-sm printable-area print:shadow-none print:w-full print:p-0 print:m-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        style: {
                                            width: '100%',
                                            borderCollapse: 'collapse',
                                            borderBottom: '2px solid #0f172a',
                                            paddingBottom: '8px',
                                            marginBottom: '12px'
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                style: {
                                                                    fontSize: '24px',
                                                                    fontWeight: 900,
                                                                    color: '#008fd5',
                                                                    margin: 0,
                                                                    lineHeight: 1
                                                                },
                                                                children: "Globo Tech"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1444,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontSize: '11px',
                                                                    color: '#334155',
                                                                    fontWeight: 600,
                                                                    margin: '2px 0 0 0'
                                                                },
                                                                children: "Enterprise Supply & Engineering Solutions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1447,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontSize: '9.5px',
                                                                    color: '#64748b',
                                                                    margin: '2px 0 0 0'
                                                                },
                                                                children: "Rahman Chamber (2nd Floor), 12/13 Motijheel C/A, Dhaka-1000 • Phone: +88 01622-152133"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1450,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1443,
                                                        columnNumber: 23
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
                                                                padding: '6px 12px',
                                                                backgroundColor: '#f1f5f9',
                                                                border: '1px solid #cbd5e1',
                                                                borderRadius: '6px',
                                                                textAlign: 'right'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: '12px',
                                                                        fontWeight: 900,
                                                                        color: '#0f172a',
                                                                        display: 'block',
                                                                        textTransform: 'uppercase'
                                                                    },
                                                                    children: "STATEMENT OF ACCOUNT"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                    lineNumber: 1456,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: '10px',
                                                                        color: '#475569'
                                                                    },
                                                                    children: [
                                                                        "Date: ",
                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(new Date().toISOString())
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                    lineNumber: 1459,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                            lineNumber: 1455,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1454,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 1442,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1441,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 1440,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        style: {
                                            width: '100%',
                                            borderCollapse: 'collapse',
                                            backgroundColor: '#f8fafc',
                                            border: '1px solid #e2e8f0',
                                            borderRadius: '6px',
                                            marginBottom: '14px',
                                            fontSize: '11px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            width: '55%',
                                                            padding: '8px 12px',
                                                            borderRight: '1px solid #e2e8f0',
                                                            verticalAlign: 'top'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '9px',
                                                                    fontWeight: 700,
                                                                    color: '#64748b',
                                                                    textTransform: 'uppercase'
                                                                },
                                                                children: "Client Information:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1473,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '14px',
                                                                    fontWeight: 800,
                                                                    color: '#0f172a',
                                                                    marginTop: '2px'
                                                                },
                                                                children: selectedCustomer.company || selectedCustomer.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1474,
                                                                columnNumber: 25
                                                            }, this),
                                                            selectedCustomer.company && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    color: '#334155',
                                                                    marginTop: '2px'
                                                                },
                                                                children: [
                                                                    "Attn: ",
                                                                    selectedCustomer.name
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1478,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    color: '#475569',
                                                                    marginTop: '2px'
                                                                },
                                                                children: selectedCustomer.address
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1480,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    color: '#475569',
                                                                    marginTop: '2px'
                                                                },
                                                                children: [
                                                                    "Phone: ",
                                                                    selectedCustomer.phone
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1481,
                                                                columnNumber: 25
                                                            }, this),
                                                            selectedCustomer.binNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: 'monospace',
                                                                    color: '#0f172a',
                                                                    marginTop: '2px',
                                                                    fontWeight: 600
                                                                },
                                                                children: selectedCustomer.binNumber
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1483,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1472,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            width: '45%',
                                                            padding: '8px 12px',
                                                            verticalAlign: 'top'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '9px',
                                                                    fontWeight: 700,
                                                                    color: '#64748b',
                                                                    textTransform: 'uppercase'
                                                                },
                                                                children: "Financial Balance Summary:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1490,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                style: {
                                                                    width: '100%',
                                                                    fontSize: '11px',
                                                                    marginTop: '4px'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        color: '#475569'
                                                                                    },
                                                                                    children: "Total Billed:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                                    lineNumber: 1494,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        textAlign: 'right',
                                                                                        fontFamily: 'monospace',
                                                                                        fontWeight: 700
                                                                                    },
                                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedCustomer.totalInvoiced || 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                                    lineNumber: 1495,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                            lineNumber: 1493,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        color: '#475569'
                                                                                    },
                                                                                    children: "Total Paid:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                                    lineNumber: 1498,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        textAlign: 'right',
                                                                                        fontFamily: 'monospace',
                                                                                        fontWeight: 700,
                                                                                        color: '#047857'
                                                                                    },
                                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedCustomer.totalPaid || 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                                    lineNumber: 1499,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                            lineNumber: 1497,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            style: {
                                                                                borderTop: '1.5px solid #0f172a'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        paddingTop: '4px',
                                                                                        fontWeight: 800,
                                                                                        color: '#0f172a'
                                                                                    },
                                                                                    children: (selectedCustomer.currentDues || 0) > 0 ? 'CURRENT DUE (বকেয়া):' : 'ADVANCE CREDIT:'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                                    lineNumber: 1502,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        paddingTop: '4px',
                                                                                        textAlign: 'right',
                                                                                        fontFamily: 'monospace',
                                                                                        fontSize: '13px',
                                                                                        fontWeight: 900,
                                                                                        color: (selectedCustomer.currentDues || 0) > 0 ? '#b91c1c' : '#047857'
                                                                                    },
                                                                                    children: (selectedCustomer.currentDues || 0) > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedCustomer.currentDues) : `+${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedCustomer.advanceCredit || 0)}`
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                                    lineNumber: 1505,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                            lineNumber: 1501,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                    lineNumber: 1492,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1491,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1489,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 1471,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1470,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 1469,
                                        columnNumber: 17
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
                                                    marginBottom: '6px'
                                                },
                                                children: "Transaction History & Running Ledger"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 1518,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                style: {
                                                    width: '100%',
                                                    borderCollapse: 'collapse',
                                                    border: '1px solid #000',
                                                    fontSize: '10px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            style: {
                                                                backgroundColor: '#f1f5f9'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        border: '1px solid #000',
                                                                        padding: '5px 4px',
                                                                        textAlign: 'center',
                                                                        width: '30px'
                                                                    },
                                                                    children: "Sl"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                    lineNumber: 1524,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        border: '1px solid #000',
                                                                        padding: '5px 6px',
                                                                        textAlign: 'center',
                                                                        width: '70px'
                                                                    },
                                                                    children: "Date"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                    lineNumber: 1525,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        border: '1px solid #000',
                                                                        padding: '5px 6px',
                                                                        textAlign: 'left',
                                                                        width: '90px'
                                                                    },
                                                                    children: "Ref / Trx #"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                    lineNumber: 1526,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        border: '1px solid #000',
                                                                        padding: '5px 6px',
                                                                        textAlign: 'left'
                                                                    },
                                                                    children: "Description / Narrative"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                    lineNumber: 1527,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        border: '1px solid #000',
                                                                        padding: '5px 6px',
                                                                        textAlign: 'right',
                                                                        width: '95px'
                                                                    },
                                                                    children: "Billed (৳)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                    lineNumber: 1528,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        border: '1px solid #000',
                                                                        padding: '5px 6px',
                                                                        textAlign: 'right',
                                                                        width: '95px'
                                                                    },
                                                                    children: "Received (৳)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                    lineNumber: 1529,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        border: '1px solid #000',
                                                                        padding: '5px 6px',
                                                                        textAlign: 'right',
                                                                        width: '105px'
                                                                    },
                                                                    children: "Balance (৳)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                    lineNumber: 1530,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                            lineNumber: 1523,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1522,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: [
                                                            !selectedCustomer.transactions || selectedCustomer.transactions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    colSpan: 7,
                                                                    style: {
                                                                        border: '1px solid #000',
                                                                        padding: '10px',
                                                                        textAlign: 'center',
                                                                        color: '#64748b'
                                                                    },
                                                                    children: "No transaction records found."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                    lineNumber: 1536,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1535,
                                                                columnNumber: 25
                                                            }, this) : selectedCustomer.transactions.map((tx, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                border: '1px solid #000',
                                                                                padding: '5px 4px',
                                                                                textAlign: 'center'
                                                                            },
                                                                            children: idx + 1
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                            lineNumber: 1543,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                border: '1px solid #000',
                                                                                padding: '5px 6px',
                                                                                textAlign: 'center',
                                                                                fontFamily: 'monospace'
                                                                            },
                                                                            children: tx.date
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                            lineNumber: 1544,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                border: '1px solid #000',
                                                                                padding: '5px 6px',
                                                                                fontFamily: 'monospace',
                                                                                fontWeight: 600
                                                                            },
                                                                            children: tx.refNo
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                            lineNumber: 1545,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                border: '1px solid #000',
                                                                                padding: '5px 6px'
                                                                            },
                                                                            children: tx.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                            lineNumber: 1546,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                border: '1px solid #000',
                                                                                padding: '5px 6px',
                                                                                textAlign: 'right',
                                                                                fontFamily: 'monospace'
                                                                            },
                                                                            children: tx.invoicedAmount > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(tx.invoicedAmount) : '-'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                            lineNumber: 1547,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                border: '1px solid #000',
                                                                                padding: '5px 6px',
                                                                                textAlign: 'right',
                                                                                fontFamily: 'monospace',
                                                                                fontWeight: 600,
                                                                                color: tx.paidAmount > 0 ? '#047857' : '#000'
                                                                            },
                                                                            children: tx.paidAmount > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(tx.paidAmount) : '-'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                            lineNumber: 1550,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                border: '1px solid #000',
                                                                                padding: '5px 6px',
                                                                                textAlign: 'right',
                                                                                fontFamily: 'monospace',
                                                                                fontWeight: 'bold',
                                                                                color: tx.balance > 0 ? '#b91c1c' : '#047857'
                                                                            },
                                                                            children: tx.balance > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(tx.balance) : `+${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(Math.abs(tx.balance))}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                            lineNumber: 1553,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, tx.id, true, {
                                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                    lineNumber: 1542,
                                                                    columnNumber: 27
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                style: {
                                                                    backgroundColor: '#f8fafc',
                                                                    fontWeight: 800
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 4,
                                                                        style: {
                                                                            border: '1px solid #000',
                                                                            padding: '6px',
                                                                            textAlign: 'right'
                                                                        },
                                                                        children: "Total Lifetime Summary:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                        lineNumber: 1560,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            border: '1px solid #000',
                                                                            padding: '6px',
                                                                            textAlign: 'right',
                                                                            fontFamily: 'monospace'
                                                                        },
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedCustomer.totalInvoiced || 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                        lineNumber: 1561,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            border: '1px solid #000',
                                                                            padding: '6px',
                                                                            textAlign: 'right',
                                                                            fontFamily: 'monospace',
                                                                            color: '#047857'
                                                                        },
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedCustomer.totalPaid || 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                        lineNumber: 1562,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            border: '1px solid #000',
                                                                            padding: '6px',
                                                                            textAlign: 'right',
                                                                            fontFamily: 'monospace',
                                                                            fontSize: '11px',
                                                                            color: (selectedCustomer.currentDues || 0) > 0 ? '#b91c1c' : '#047857'
                                                                        },
                                                                        children: (selectedCustomer.currentDues || 0) > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedCustomer.currentDues) : `+${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(selectedCustomer.advanceCredit || 0)}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                        lineNumber: 1563,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1559,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1533,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 1521,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 1517,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '8px 12px',
                                            border: '1px solid #cbd5e1',
                                            borderRadius: '6px',
                                            backgroundColor: '#f8fafc',
                                            fontSize: '10px',
                                            color: '#334155',
                                            marginBottom: '24px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Payment Remittance Details:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 1573,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginTop: '2px'
                                                },
                                                children: [
                                                    "Bank: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "BRAC Bank PLC"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1575,
                                                        columnNumber: 27
                                                    }, this),
                                                    " • Account Name: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Globo Tech"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1575,
                                                        columnNumber: 79
                                                    }, this),
                                                    " • Account No: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "2051923010001"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1575,
                                                        columnNumber: 126
                                                    }, this),
                                                    " • Branch: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Bijoynagar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1575,
                                                        columnNumber: 172
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 1574,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 1572,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        style: {
                                            width: '100%',
                                            borderCollapse: 'collapse',
                                            marginTop: '30px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            width: '50%',
                                                            textAlign: 'center',
                                                            verticalAlign: 'bottom'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: '180px',
                                                                    borderBottom: '1.5px solid #000',
                                                                    margin: '0 auto 4px auto'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1584,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '11px',
                                                                    fontWeight: 700
                                                                },
                                                                children: "Prepared By (Accounts)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1585,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '9.5px',
                                                                    color: '#64748b'
                                                                },
                                                                children: "Globo Tech"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1586,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1583,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            width: '50%',
                                                            textAlign: 'center',
                                                            verticalAlign: 'bottom'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: '180px',
                                                                    borderBottom: '1.5px solid #000',
                                                                    margin: '0 auto 4px auto'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1589,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '11px',
                                                                    fontWeight: 700
                                                                },
                                                                children: "Customer Acknowledgement"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1590,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '9.5px',
                                                                    color: '#64748b'
                                                                },
                                                                children: selectedCustomer.company || selectedCustomer.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                                lineNumber: 1591,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                        lineNumber: 1588,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                lineNumber: 1582,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1581,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/CustomersView.tsx",
                                        lineNumber: 1580,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/CustomersView.tsx",
                                lineNumber: 1426,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1425,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                    lineNumber: 1409,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/CustomersView.tsx",
                lineNumber: 1403,
                columnNumber: 9
            }, this),
            isAddModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isAddModalOpen,
                onClose: ()=>setIsAddModalOpen(false),
                title: "Create New Customer / Corporate Account",
                size: "lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleAddCustomer,
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Company / Organization Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1615,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "e.g. Beximco IT Division",
                                            value: newCustomer.company,
                                            onChange: (e)=>setNewCustomer({
                                                    ...newCustomer,
                                                    company: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1616,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1614,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Contact Person *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1626,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            placeholder: "e.g. Md. Ashraful Alam",
                                            value: newCustomer.name,
                                            onChange: (e)=>setNewCustomer({
                                                    ...newCustomer,
                                                    name: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1627,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1625,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1613,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Account Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1640,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: newCustomer.type,
                                            onChange: (e)=>setNewCustomer({
                                                    ...newCustomer,
                                                    type: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "CORPORATE",
                                                    children: "Corporate / Project"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1646,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "WHOLESALE",
                                                    children: "Wholesale Dealer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1647,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "RETAIL",
                                                    children: "Retail / Walk-in"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1648,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1641,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1639,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Phone Number"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1653,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "+880 1700-000000",
                                            value: newCustomer.phone,
                                            onChange: (e)=>setNewCustomer({
                                                    ...newCustomer,
                                                    phone: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1654,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1652,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1664,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "accounts@company.com",
                                            value: newCustomer.email,
                                            onChange: (e)=>setNewCustomer({
                                                    ...newCustomer,
                                                    email: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1665,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1663,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1638,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "VAT BIN Number"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1677,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "BIN-XXXXXXXXX-XXXX",
                                            value: newCustomer.binNumber,
                                            onChange: (e)=>setNewCustomer({
                                                    ...newCustomer,
                                                    binNumber: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1678,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1676,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Credit Limit (৳)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1688,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "0",
                                            step: "any",
                                            placeholder: "0",
                                            value: newCustomer.creditLimit === 0 ? '' : newCustomer.creditLimit,
                                            onFocus: (e)=>e.target.select(),
                                            onClick: (e)=>e.target.select(),
                                            onChange: (e)=>{
                                                const val = e.target.value;
                                                setNewCustomer({
                                                    ...newCustomer,
                                                    creditLimit: val === '' ? '' : Number(val)
                                                });
                                            },
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1689,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1687,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1675,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Billing & Delivery Address"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1707,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    rows: 2,
                                    placeholder: "Full delivery address, floor, road, city...",
                                    value: newCustomer.address,
                                    onChange: (e)=>setNewCustomer({
                                            ...newCustomer,
                                            address: e.target.value
                                        }),
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1708,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1706,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t border-slate-800 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsAddModalOpen(false),
                                    className: "w-full sm:w-auto min-h-[42px] px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold transition",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1718,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full sm:w-auto min-h-[42px] px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg shadow-blue-600/30 transition flex items-center justify-center gap-1.5",
                                    children: "Save Customer"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1725,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1717,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                    lineNumber: 1612,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/CustomersView.tsx",
                lineNumber: 1606,
                columnNumber: 9
            }, this),
            isEditModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isEditModalOpen,
                onClose: ()=>setIsEditModalOpen(false),
                title: "Edit Customer Profile (কাস্টমার তথ্য পরিবর্তন)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSaveEditCustomer,
                    className: "space-y-4 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Company / Organization *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1748,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            placeholder: "e.g. Daraz Bangladesh Limited",
                                            value: editCustomerForm.company || '',
                                            onChange: (e)=>setEditCustomerForm({
                                                    ...editCustomerForm,
                                                    company: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1749,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1747,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Primary Contact Person"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1760,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "e.g. Md. Tariqul Islam",
                                            value: editCustomerForm.name || '',
                                            onChange: (e)=>setEditCustomerForm({
                                                    ...editCustomerForm,
                                                    name: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1761,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1759,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1746,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Account Category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1773,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editCustomerForm.type || 'CORPORATE',
                                            onChange: (e)=>setEditCustomerForm({
                                                    ...editCustomerForm,
                                                    type: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "CORPORATE",
                                                    children: "Corporate Enterprise"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1779,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "WHOLESALE",
                                                    children: "Wholesale Dealer / Reseller"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1780,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "RETAIL",
                                                    children: "Retail Direct"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1781,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1774,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1772,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Phone Number *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1786,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "+880 1...",
                                            value: editCustomerForm.phone || '',
                                            onChange: (e)=>setEditCustomerForm({
                                                    ...editCustomerForm,
                                                    phone: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1787,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1785,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1771,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Email Address"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1799,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "procurement@company.com",
                                            value: editCustomerForm.email || '',
                                            onChange: (e)=>setEditCustomerForm({
                                                    ...editCustomerForm,
                                                    email: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1800,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1798,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "BIN / VAT Registration"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1810,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "BIN-003928174-0101",
                                            value: editCustomerForm.binNumber || '',
                                            onChange: (e)=>setEditCustomerForm({
                                                    ...editCustomerForm,
                                                    binNumber: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1811,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1809,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1797,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Payment Terms"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1823,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editCustomerForm.paymentTerms || 'Net 30 Days',
                                            onChange: (e)=>setEditCustomerForm({
                                                    ...editCustomerForm,
                                                    paymentTerms: e.target.value
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Net 7 Days",
                                                    children: "Net 7 Days"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1829,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Net 15 Days",
                                                    children: "Net 15 Days"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1830,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Net 30 Days",
                                                    children: "Net 30 Days (Standard Corporate)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1831,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Net 45 Days",
                                                    children: "Net 45 Days"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1832,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Milestone / Net 45",
                                                    children: "Milestone / Net 45"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1833,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Immediate / Cash",
                                                    children: "Immediate / Cash On Delivery"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1834,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Advance Only",
                                                    children: "100% Advance Payment"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                                    lineNumber: 1835,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1824,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1822,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-300 font-semibold mb-1",
                                            children: "Credit Limit (৳)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1840,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            placeholder: "500000",
                                            value: editCustomerForm.creditLimit === 0 ? '' : editCustomerForm.creditLimit || '',
                                            onChange: (e)=>setEditCustomerForm({
                                                    ...editCustomerForm,
                                                    creditLimit: Number(e.target.value) || 0
                                                }),
                                            className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono focus:border-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                                            lineNumber: 1841,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1839,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1821,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-slate-300 font-semibold mb-1",
                                    children: "Billing & Delivery Address"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1852,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    rows: 2,
                                    placeholder: "Full delivery address...",
                                    value: editCustomerForm.address || '',
                                    onChange: (e)=>setEditCustomerForm({
                                            ...editCustomerForm,
                                            address: e.target.value
                                        }),
                                    className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1853,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1851,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t border-slate-800 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsEditModalOpen(false),
                                    className: "w-full sm:w-auto min-h-[42px] px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold transition",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1863,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full sm:w-auto min-h-[42px] px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg shadow-blue-600/30 transition flex items-center justify-center gap-1.5",
                                    children: "Update Customer"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                                    lineNumber: 1870,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/CustomersView.tsx",
                            lineNumber: 1862,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/CustomersView.tsx",
                    lineNumber: 1745,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/CustomersView.tsx",
                lineNumber: 1740,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modules/CustomersView.tsx",
        lineNumber: 664,
        columnNumber: 5
    }, this);
}
_s(CustomersView, "w06+y9Yi/zhuJeQrhMVv/tEPpwY=");
_c = CustomersView;
var _c;
__turbopack_refresh__.register(_c, "CustomersView");

})()),
}]);

//# sourceMappingURL=src_components_modules_CustomersView_tsx_014725._.js.map