(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_modules_BillInvoiceView_tsx_39d4af._.js", {

"[project]/src/components/modules/BillInvoiceView.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "BILL_STATUS_THEME": ()=>BILL_STATUS_THEME,
    "BillInvoiceView": ()=>BillInvoiceView,
    "INITIAL_BILL_INVOICES": ()=>INITIAL_BILL_INVOICES,
    "SAMPLE_DARAZ_PO_ATTACHMENT": ()=>SAMPLE_DARAZ_PO_ATTACHMENT,
    "downloadPOAttachment": ()=>downloadPOAttachment,
    "fileToPOAttachment": ()=>fileToPOAttachment,
    "generateNextBillNo": ()=>generateNextBillNo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/formatters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$QuotationView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/modules/QuotationView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$CustomersView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/modules/CustomersView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$erpBackup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/erpBackup.ts [app-client] (ecmascript)");
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
;
;
const BILL_STATUS_THEME = {
    ISSUED: {
        label: 'ISSUED',
        dot: 'bg-amber-400',
        bg: 'bg-amber-950/80 hover:bg-amber-900/90',
        text: 'text-amber-300',
        border: 'border-amber-800/80 hover:border-amber-600',
        desc: 'Issued & Awaiting Collection'
    },
    PAID: {
        label: 'PAID',
        dot: 'bg-emerald-400',
        bg: 'bg-emerald-950/80 hover:bg-emerald-900/90',
        text: 'text-emerald-300',
        border: 'border-emerald-800/80 hover:border-emerald-600',
        desc: 'Fully Paid & Collected'
    },
    PARTIAL: {
        label: 'PARTIAL',
        dot: 'bg-cyan-400',
        bg: 'bg-cyan-950/80 hover:bg-cyan-900/90',
        text: 'text-cyan-300',
        border: 'border-cyan-800/80 hover:border-cyan-600',
        desc: 'Partially Paid'
    },
    DRAFT: {
        label: 'DRAFT',
        dot: 'bg-slate-400',
        bg: 'bg-slate-800 hover:bg-slate-750',
        text: 'text-slate-300',
        border: 'border-slate-700 hover:border-slate-500',
        desc: 'Draft Invoice'
    },
    CANCELLED: {
        label: 'CANCELLED',
        dot: 'bg-rose-400',
        bg: 'bg-rose-950/80 hover:bg-rose-900/90',
        text: 'text-rose-300',
        border: 'border-rose-800/80 hover:border-rose-600',
        desc: 'Void or Cancelled'
    }
};
const SAMPLE_DARAZ_PO_ATTACHMENT = {
    id: 'po-att-26107',
    name: 'POBD9729-1_Daraz_Purchase_Order.svg',
    size: 3840,
    type: 'image/svg+xml',
    dataUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="700" height="900" viewBox="0 0 700 900" style="background:%23ffffff;font-family:sans-serif;"><rect width="700" height="900" fill="%23ffffff"/><rect x="30" y="30" width="640" height="840" fill="none" stroke="%23ff6600" stroke-width="3" rx="8"/><text x="50" y="75" font-size="24" font-weight="bold" fill="%23ff6600">DARAZ BANGLADESH LIMITED</text><text x="50" y="100" font-size="12" fill="%23555555">Asfia Tower, House-76/B, Road-11, Banani, Dhaka-1213</text><text x="50" y="118" font-size="12" fill="%23555555">BIN: 004728009-0202 | TIN: 169493772750</text><rect x="50" y="140" width="600" height="40" fill="%23fff2e6" rx="4"/><text x="65" y="166" font-size="18" font-weight="bold" fill="%23d9480f">OFFICIAL PURCHASE ORDER (PO)</text><text x="440" y="166" font-size="14" font-weight="bold" fill="%23333333">PO NO: POBD9729-1</text><rect x="50" y="195" width="290" height="110" fill="%23f8f9fa" stroke="%23e9ecef" rx="4"/><text x="65" y="218" font-size="13" font-weight="bold" fill="%23212529">Vendor / Supplier:</text><text x="65" y="240" font-size="13" font-weight="bold" fill="%23ff6600">GLOBO TECH</text><text x="65" y="258" font-size="11" fill="%23495057">12/13 Motijheel C/A, Dhaka-1000</text><text x="65" y="276" font-size="11" fill="%23495057">Contact: Engr. Sohel Rana (01622-152133)</text><rect x="360" y="195" width="290" height="110" fill="%23f8f9fa" stroke="%23e9ecef" rx="4"/><text x="375" y="218" font-size="13" font-weight="bold" fill="%23212529">Delivery Destination:</text><text x="375" y="240" font-size="12" font-weight="bold" fill="%23212529">Tejgaon Sort DC (Daraz HUB)</text><text x="375" y="258" font-size="11" fill="%23495057">Recipient: Rony (Phone: 01999074461)</text><text x="375" y="276" font-size="11" fill="%23495057">PO Date: 23-Feb-2026</text><rect x="50" y="325" width="600" height="30" fill="%23ff6600"/><text x="65" y="345" font-size="12" font-weight="bold" fill="%23ffffff">SL</text><text x="100" y="345" font-size="12" font-weight="bold" fill="%23ffffff">Item Description</text><text x="360" y="345" font-size="12" font-weight="bold" fill="%23ffffff">Qty</text><text x="420" y="345" font-size="12" font-weight="bold" fill="%23ffffff">Unit</text><text x="480" y="345" font-size="12" font-weight="bold" fill="%23ffffff">Unit Price (BDT)</text><text x="590" y="345" font-size="12" font-weight="bold" fill="%23ffffff">Total (BDT)</text><rect x="50" y="355" width="600" height="40" fill="%23ffffff" stroke="%23e9ecef"/><text x="70" y="380" font-size="12" fill="%23333333">1</text><text x="100" y="375" font-size="12" font-weight="bold" fill="%23333333">Rosenberger UTP Cable</text><text x="100" y="390" font-size="10" fill="%23666666">Cat-6 UTP Pure Copper Cable (305M / Box)</text><text x="365" y="380" font-size="12" font-weight="bold" fill="%23333333">2</text><text x="425" y="380" font-size="12" font-weight="bold" fill="%23333333">Box</text><text x="495" y="380" font-size="12" font-weight="bold" fill="%23333333">19,000.00</text><text x="585" y="380" font-size="12" font-weight="bold" fill="%23333333">38,000.00</text><rect x="50" y="415" width="600" height="35" fill="%23fff2e6" stroke="%23ffd8a8"/><text x="420" y="438" font-size="13" font-weight="bold" fill="%23d9480f">Total PO Value (BDT):</text><text x="585" y="438" font-size="14" font-weight="bold" fill="%23d9480f">38,000.00</text><rect x="50" y="470" width="600" height="90" fill="%23f8f9fa" stroke="%23e9ecef" rx="4"/><text x="65" y="492" font-size="12" font-weight="bold" fill="%23212529">Terms &amp; Instructions:</text><text x="65" y="510" font-size="11" fill="%23495057">1. Payment: Within agreed deadline after supply verification.</text><text x="65" y="528" font-size="11" fill="%23495057">2. Vendor must provide official Pad Bill mentioning PO: POBD9729-1.</text><text x="65" y="546" font-size="11" fill="%23495057">3. Delivery Challan required upon handover at Tejgaon Sort DC.</text><line x1="80" y1="780" x2="220" y2="780" stroke="%23495057" stroke-dasharray="3,3"/><text x="105" y="800" font-size="11" fill="%23495057">Prepared By (Daraz)</text><line x1="480" y1="780" x2="620" y2="780" stroke="%23495057" stroke-dasharray="3,3"/><text x="490" y="800" font-size="11" font-weight="bold" fill="%23ff6600">Authorized Procurement</text><text x="510" y="816" font-size="10" fill="%23666666">Daraz Bangladesh LTD</text></svg>`,
    uploadedAt: '23-Feb-2026 10:15 AM'
};
function fileToPOAttachment(file) {
    return new Promise((resolve, reject)=>{
        if (file.size > 6 * 1024 * 1024) {
            reject(new Error('File size exceeds 6MB. Please choose a file under 6MB for smooth browser storage.'));
            return;
        }
        const reader = new FileReader();
        reader.onload = (e)=>{
            const dataUrl = e.target?.result;
            const attachment = {
                id: `po-att-${Date.now()}`,
                name: file.name,
                size: file.size,
                type: file.type || 'application/octet-stream',
                dataUrl,
                uploadedAt: new Date().toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };
            resolve(attachment);
        };
        reader.onerror = ()=>reject(new Error('Failed to read file. Please try again.'));
        reader.readAsDataURL(file);
    });
}
function downloadPOAttachment(attachment, poNumber) {
    const link = document.createElement('a');
    link.href = attachment.dataUrl;
    link.download = attachment.name || `Customer_PO_${poNumber || 'document'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
const INITIAL_BILL_INVOICES = [
    {
        id: 'bill-26107',
        billNo: 'GT/26107',
        date: '23-Feb-26',
        poNumber: 'POBD9729-1',
        poAttachment: SAMPLE_DARAZ_PO_ATTACHMENT,
        quotationRef: 'QT-2026-005',
        quotationId: 'QT-2026-005',
        binNumber: '004728009-0202',
        tinNumber: '169493772750',
        billToName: 'Daraz Bangladesh LTD',
        billToAddress: 'Asfia Tower, House- 76/B, Road-11, Dhaka-1213',
        deliverToAddress: 'Tejgoan Sort DC',
        deliverToName: 'Rony',
        deliverToPhone: '1999074461',
        items: [
            {
                id: 'bi-item-1',
                itemNo: 1,
                sku: 'RB-CAT6-305M',
                partNo: 'CP-UTP-C6-305M',
                serialNumbers: 'RB-2026-9901A, RB-2026-9902B',
                name: 'Rosenberger UTP Cable',
                description: 'Rosenberger Cat-6 UTP Cable, 305M',
                unit: 'Box',
                quantity: 2,
                unitPrice: 19000,
                amount: 38000
            }
        ],
        subTotal: 38000,
        vatTaxIncluded: true,
        vatTaxAmount: 0,
        grandTotal: 38000,
        amountInWords: 'Thirty Eight Thousand Taka Only.',
        termsAndConditions: [
            '1. VAT&TAX : Included',
            '2. Payment: Within Deadline'
        ],
        bankAccountNo: '2051923010001',
        bankAccountTitle: 'Globo Tech',
        bankName: 'Brac Bank',
        bankBranchName: 'Bijoynagar',
        preparedBy: 'Engr. Sohel Rana',
        receivedBy: '',
        status: 'ISSUED',
        paidAmount: 0,
        createdAt: '2026-02-23'
    }
];
function generateNextBillNo(existingBills) {
    const currentYear = new Date().getFullYear();
    const yearSuffix = currentYear.toString().slice(-2); // "26"
    const prefix = `GT/${yearSuffix}`;
    let maxSeq = 100; // Will start at 101 if no bills exist for the year
    const billsList = Array.isArray(existingBills) && existingBills.length > 0 ? existingBills : INITIAL_BILL_INVOICES;
    billsList.forEach((b)=>{
        if (!b || !b.billNo) return;
        const cleanStr = b.billNo.trim();
        // Match GT/26108, GT-26108, GT26108, 26108
        const match = cleanStr.match(/(?:GT[/-]?)?(\d{2})(\d{3,})/i);
        if (match) {
            const billYear = match[1];
            const seq = parseInt(match[2], 10);
            if (billYear === yearSuffix && !isNaN(seq)) {
                if (seq > maxSeq) {
                    maxSeq = seq;
                }
            }
        }
    });
    return `${prefix}${maxSeq + 1}`;
}
function BillInvoiceView({ initialSelectedQuoteId, globalSearchQuery } = {}) {
    _s();
    const [bills, setBills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if (typeof window !== 'undefined') {
            const deletedBillIds = new Set([
                'bill-26108',
                'GT/26108'
            ]);
            try {
                const delSaved = localStorage.getItem('globotech_erp_deleted_bill_ids');
                if (delSaved) {
                    const parsedDel = JSON.parse(delSaved);
                    if (Array.isArray(parsedDel)) {
                        parsedDel.forEach((id)=>deletedBillIds.add(id));
                    }
                }
            } catch (e) {}
            const savedBills = localStorage.getItem('globotech_erp_bill_invoices');
            if (savedBills) {
                try {
                    const parsed = JSON.parse(savedBills);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        const cleanBills = parsed.filter((b)=>!deletedBillIds.has(b.id) && !deletedBillIds.has(b.billNo) && b.id !== 'bill-26108' && b.billNo !== 'GT/26108');
                        return cleanBills.map((b)=>{
                            if (b.id === 'bill-26107' && !b.poAttachment) {
                                return {
                                    ...b,
                                    poAttachment: SAMPLE_DARAZ_PO_ATTACHMENT
                                };
                            }
                            return b;
                        });
                    }
                } catch (e) {}
            }
            return INITIAL_BILL_INVOICES.filter((initB)=>!deletedBillIds.has(initB.id) && !deletedBillIds.has(initB.billNo) && initB.id !== 'bill-26108' && initB.billNo !== 'GT/26108');
        }
        return INITIAL_BILL_INVOICES;
    });
    const [quotations, setQuotations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if (typeof window !== 'undefined') {
            const savedQuotes = localStorage.getItem('globotech_erp_quotations');
            if (savedQuotes) {
                try {
                    const parsedQuotes = JSON.parse(savedQuotes);
                    if (Array.isArray(parsedQuotes)) {
                        return parsedQuotes;
                    }
                } catch (e) {}
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$QuotationView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_QUOTATIONS"];
    });
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
                } catch (e) {}
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$CustomersView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_CUSTOMERS"].filter((c)=>!deletedCustIds.has(c.id) && !deletedCustIds.has(c.company || ''));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$CustomersView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_CUSTOMERS"];
    });
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Sync customer changes across views/tabs
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
    // View Mode: 'LIST' or 'PREVIEW'
    const [activeViewMode, setActiveViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('LIST');
    // Filters & Search
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(globalSearchQuery || '');
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ALL');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (globalSearchQuery !== undefined && globalSearchQuery !== searchQuery) {
            setSearchQuery(globalSearchQuery);
        }
    }, [
        globalSearchQuery
    ]);
    // Modals & Active Records
    const [isCreateModalOpen, setIsCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeBill, setActiveBill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_BILL_INVOICES[0]);
    // Pad Print Settings
    const [padTopMarginMm, setPadTopMarginMm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(45); // Standard Bangladesh company pad header = 45mm
    const [usePreprintedPadMode, setUsePreprintedPadMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // TRUE = No digital letterhead/watermark/footer
    // Document Type for Preview & Print ('BILL' or 'CHALLAN')
    const [previewDocType, setPreviewDocType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('BILL');
    const [challanDeliveryMethod, setChallanDeliveryMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Office Staff / By Hand');
    const [challanTransportNo, setChallanTransportNo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [challanShowPrices, setChallanShowPrices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Quick Serials & Part Numbers Editor for Challan
    const [isSerialsModalOpen, setIsSerialsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [serialsItems, setSerialsItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Customer PO Document Attachment States
    const [selectedPOBill, setSelectedPOBill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPOViewerOpen, setIsPOViewerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isQuickAttachOpen, setIsQuickAttachOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [quickAttachBill, setQuickAttachBill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [quickAttachFile, setQuickAttachFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isUploadingPO, setIsUploadingPO] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [poFilterOnly, setPoFilterOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Toast Notification
    const [toastMsg, setToastMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const showToast = (msg)=>{
        setToastMsg(msg);
        setTimeout(()=>setToastMsg(null), 3500);
    };
    // Form State for Create / Edit
    const [editingBillId, setEditingBillId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedQuoteId, setSelectedQuoteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        billNo: generateNextBillNo(INITIAL_BILL_INVOICES),
        date: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].date(new Date()),
        poNumber: '',
        binNumber: '004728009-0202',
        tinNumber: '169493772750',
        billToName: '',
        billToAddress: '',
        deliverToAddress: '',
        deliverToName: '',
        deliverToPhone: '',
        items: [
            {
                id: 'new-1',
                itemNo: 1,
                partNo: '',
                serialNumbers: '',
                name: '',
                description: '',
                unit: 'Box',
                quantity: 1,
                unitPrice: 0,
                amount: 0
            }
        ],
        subTotal: 0,
        vatTaxIncluded: true,
        vatTaxAmount: 0,
        grandTotal: 0,
        amountInWords: '',
        termsAndConditions: [
            '1. VAT&TAX : Included',
            '2. Payment: Within Deadline'
        ],
        bankAccountNo: '2051923010001',
        bankAccountTitle: 'Globo Tech',
        bankName: 'Brac Bank',
        bankBranchName: 'Bijoynagar',
        preparedBy: 'Engr. Sohel Rana',
        status: 'ISSUED'
    });
    // Load from localStorage on client mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
        if (typeof window !== 'undefined') {
            // 1. Load Bill Invoices & permanently eradicate bill-26108
            const deletedBillIds = new Set([
                'bill-26108',
                'GT/26108'
            ]);
            try {
                const delSaved = localStorage.getItem('globotech_erp_deleted_bill_ids');
                if (delSaved) {
                    const parsedDel = JSON.parse(delSaved);
                    if (Array.isArray(parsedDel)) {
                        parsedDel.forEach((id)=>deletedBillIds.add(id));
                    }
                }
            } catch (e) {}
            // Keep blacklist updated in localStorage
            try {
                localStorage.setItem('globotech_erp_deleted_bill_ids', JSON.stringify(Array.from(deletedBillIds)));
            } catch (e) {}
            const savedBills = localStorage.getItem('globotech_erp_bill_invoices');
            if (savedBills) {
                try {
                    const parsed = JSON.parse(savedBills);
                    if (Array.isArray(parsed)) {
                        const cleanBills = parsed.filter((b)=>!deletedBillIds.has(b.id) && !deletedBillIds.has(b.billNo) && b.id !== 'bill-26108' && b.billNo !== 'GT/26108');
                        const hydrated = cleanBills.map((b)=>{
                            if (b.id === 'bill-26107' && !b.poAttachment) {
                                return {
                                    ...b,
                                    poAttachment: SAMPLE_DARAZ_PO_ATTACHMENT
                                };
                            }
                            return b;
                        });
                        setBills(hydrated);
                        localStorage.setItem('globotech_erp_bill_invoices', JSON.stringify(hydrated));
                        if (hydrated.length > 0 && !activeBill) {
                            setActiveBill(hydrated[0]);
                        }
                    }
                } catch (e) {
                    console.error('Error loading bill invoices from localStorage', e);
                }
            } else {
                const initialFiltered = INITIAL_BILL_INVOICES.filter((initB)=>!deletedBillIds.has(initB.id) && !deletedBillIds.has(initB.billNo) && initB.id !== 'bill-26108' && initB.billNo !== 'GT/26108');
                localStorage.setItem('globotech_erp_bill_invoices', JSON.stringify(initialFiltered));
                setBills(initialFiltered);
            }
            // 2. Load Quotations
            const savedQuotes = localStorage.getItem('globotech_erp_quotations');
            if (savedQuotes) {
                try {
                    const parsedQuotes = JSON.parse(savedQuotes);
                    if (Array.isArray(parsedQuotes)) {
                        setQuotations(parsedQuotes);
                    }
                } catch (e) {
                    console.error('Error loading quotations', e);
                }
            }
            // 3. Check if redirected with a pending quote
            const pendingQuoteId = initialSelectedQuoteId || sessionStorage.getItem('globotech_pending_bill_quote_id');
            if (pendingQuoteId) {
                sessionStorage.removeItem('globotech_pending_bill_quote_id');
                setTimeout(()=>{
                    handleOpenCreateModal(pendingQuoteId);
                }, 300);
            }
        }
    }, [
        initialSelectedQuoteId
    ]);
    // Persist bills whenever updated
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isMounted && typeof window !== 'undefined') {
            try {
                localStorage.setItem('globotech_erp_bill_invoices', JSON.stringify(bills));
            } catch (e) {
                console.error('Error saving bill invoices:', e);
            }
        }
    }, [
        bills,
        isMounted
    ]);
    // Listen for global backup restore event
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleBackupRestored = ()=>{
            if (typeof window !== 'undefined') {
                const savedBills = localStorage.getItem('globotech_erp_bill_invoices');
                if (savedBills) {
                    try {
                        setBills(JSON.parse(savedBills));
                    } catch (e) {
                        console.error('Error reloading bills after restore:', e);
                    }
                }
                const savedQuotes = localStorage.getItem('globotech_erp_quotations');
                if (savedQuotes) {
                    try {
                        const parsedQuotes = JSON.parse(savedQuotes);
                        if (Array.isArray(parsedQuotes)) {
                            setQuotations(parsedQuotes);
                        }
                    } catch (e) {}
                }
            }
        };
        window.addEventListener('globotech_backup_restored', handleBackupRestored);
        const handleQuotesUpdated = (e)=>{
            if (e?.detail && Array.isArray(e.detail)) {
                setQuotations(e.detail);
            } else if (typeof window !== 'undefined') {
                const saved = localStorage.getItem('globotech_erp_quotations');
                if (saved) {
                    try {
                        setQuotations(JSON.parse(saved));
                    } catch (err) {}
                }
            }
        };
        window.addEventListener('globotech_quotations_updated', handleQuotesUpdated);
        return ()=>{
            window.removeEventListener('globotech_backup_restored', handleBackupRestored);
            window.removeEventListener('globotech_quotations_updated', handleQuotesUpdated);
        };
    }, []);
    // Calculate Subtotal & Grand Total for Form
    const recalculateFormTotals = (items, vatIncluded, customVat = 0)=>{
        const sub = items.reduce((acc, it)=>acc + (Number(it.amount) || 0), 0);
        const grand = vatIncluded ? sub : sub + customVat;
        const inWords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToWordsBDT"])(grand, 'BDT', {
            style: 'suffix',
            suffixUnit: 'Taka',
            dotEnd: true
        });
        return {
            subTotal: sub,
            vatTaxAmount: customVat,
            grandTotal: grand,
            amountInWords: inWords
        };
    };
    // Open Create Modal & optionally preload from quotation
    const handleOpenCreateModal = (quoteIdToPreload)=>{
        setEditingBillId(null);
        const generatedBillNo = generateNextBillNo(bills);
        const baseForm = {
            billNo: generatedBillNo,
            date: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].date(new Date()),
            poNumber: '',
            binNumber: '',
            tinNumber: '',
            billToName: '',
            billToAddress: '',
            deliverToAddress: '',
            deliverToName: '',
            deliverToPhone: '',
            items: [
                {
                    id: `item-${Date.now()}`,
                    itemNo: 1,
                    name: '',
                    description: '',
                    unit: 'Box',
                    quantity: 1,
                    unitPrice: 0,
                    amount: 0
                }
            ],
            subTotal: 0,
            vatTaxIncluded: true,
            vatTaxAmount: 0,
            grandTotal: 0,
            amountInWords: 'Zero Taka Only.',
            termsAndConditions: [
                '1. VAT&TAX : Included',
                '2. Payment: Within Deadline'
            ],
            bankAccountNo: '2051923010001',
            bankAccountTitle: 'Globo Tech',
            bankName: 'Brac Bank',
            bankBranchName: 'Bijoynagar',
            preparedBy: 'Engr. Sohel Rana',
            status: 'ISSUED'
        };
        if (quoteIdToPreload) {
            applyQuotationToForm(quoteIdToPreload, baseForm);
        } else {
            setSelectedQuoteId('');
            setFormData(baseForm);
        }
        setIsCreateModalOpen(true);
    };
    // Apply Selected Quotation Data into Form Dynamically
    const applyQuotationToForm = (quoteId, currentFormState = formData)=>{
        setSelectedQuoteId(quoteId);
        const targetQuote = quotations.find((q)=>q.id === quoteId || q.quotationNumber === quoteId);
        if (!targetQuote) return;
        // Map quotation items to bill invoice items
        const mappedItems = (targetQuote.items || []).map((it, idx)=>({
                id: `bi-${it.id || idx}-${Date.now()}`,
                itemNo: idx + 1,
                sku: it.sku || '',
                partNo: (()=>{
                    const raw = it.partNo || it.model || '';
                    return raw && raw.trim().toLowerCase() !== (it.name || '').trim().toLowerCase() ? raw : '';
                })(),
                serialNumbers: it.serialNumbers || it.serialNo || '',
                name: it.name || '',
                description: it.description || it.model || it.brand || '',
                unit: it.unit || 'Box',
                quantity: Number(it.quantity) || 1,
                unitPrice: Number(it.unitPrice) || 0,
                amount: (Number(it.quantity) || 1) * (Number(it.unitPrice) || 0)
            }));
        if (mappedItems.length === 0) {
            mappedItems.push({
                id: `bi-fallback-${Date.now()}`,
                itemNo: 1,
                name: 'Item Supply',
                description: '',
                unit: 'Box',
                quantity: 1,
                unitPrice: 0,
                amount: 0
            });
        }
        const totals = recalculateFormTotals(mappedItems, true, 0);
        // Auto extract or set delivery contact from quotation
        const deliverContactName = targetQuote.customerName || '';
        const deliverContactPhone = targetQuote.customerPhone || '';
        const deliveryLocation = targetQuote.projectLocation || targetQuote.deliveryTerms || targetQuote.customerAddress || '';
        // Terms & Conditions (automatically reflect quotation VAT mode)
        const isQuoteExclusive = (targetQuote.vatTaxTerms || '').toLowerCase().includes('exclusive');
        const terms = [
            isQuoteExclusive ? '1. VAT&TAX : Excluded' : '1. VAT&TAX : Included',
            targetQuote.paymentTerms ? `2. Payment: ${targetQuote.paymentTerms}` : '2. Payment: Within Deadline'
        ];
        setFormData((prev)=>{
            const stateToUse = currentFormState || prev;
            return {
                ...stateToUse,
                // Only use quote's reference if it exists; otherwise KEEP whatever manual PO number the user already entered
                poNumber: targetQuote.reference ? targetQuote.reference : stateToUse.poNumber || '',
                quotationRef: targetQuote.quotationNumber,
                quotationId: targetQuote.id,
                binNumber: targetQuote.customerBin || stateToUse.binNumber || '',
                billToName: targetQuote.customerCompany || targetQuote.customerName || stateToUse.billToName || '',
                billToAddress: targetQuote.customerAddress || stateToUse.billToAddress || '',
                deliverToAddress: deliveryLocation || stateToUse.deliverToAddress || '',
                deliverToName: deliverContactName || stateToUse.deliverToName || '',
                // If user already typed a delivery phone, keep it; otherwise fill with quotation contact phone
                deliverToPhone: stateToUse.deliverToPhone || deliverContactPhone || '',
                items: mappedItems,
                subTotal: totals.subTotal,
                vatTaxIncluded: !isQuoteExclusive,
                vatTaxAmount: 0,
                grandTotal: totals.grandTotal,
                amountInWords: totals.amountInWords,
                termsAndConditions: terms
            };
        });
    };
    // Quick Update Bill Status (ISSUED, PAID, PARTIAL, DRAFT, CANCELLED)
    const handleUpdateBillStatus = (billId, newStatus)=>{
        const target = bills.find((b)=>b.id === billId);
        const targetNo = target?.billNo || billId;
        const updated = bills.map((b)=>b.id === billId ? {
                ...b,
                status: newStatus
            } : b);
        setBills(updated);
        if (typeof window !== 'undefined') {
            try {
                localStorage.setItem('globotech_erp_bill_invoices', JSON.stringify(updated));
                window.dispatchEvent(new Event('storage'));
                window.dispatchEvent(new CustomEvent('globotech_bills_updated', {
                    detail: updated
                }));
            } catch (e) {
                console.error('Failed to save updated bill status:', e);
            }
        }
        if (activeBill && activeBill.id === billId) {
            setActiveBill((prev)=>prev ? {
                    ...prev,
                    status: newStatus
                } : null);
        }
        showToast(`Bill ${targetNo} status set to ${newStatus}`);
    };
    // Open Edit Modal
    const handleOpenEditModal = (bill)=>{
        setEditingBillId(bill.id);
        setSelectedQuoteId(bill.quotationId || '');
        setFormData({
            ...bill
        });
        setIsCreateModalOpen(true);
    };
    // Duplicate an existing bill with next sequential Bill NO
    const handleDuplicateBill = (bill)=>{
        const nextBillNo = generateNextBillNo(bills);
        const newBill = {
            ...bill,
            id: `bill-${Date.now()}`,
            billNo: nextBillNo,
            date: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].date(new Date()),
            status: 'ISSUED',
            createdAt: new Date().toISOString(),
            poAttachment: bill.poAttachment ? {
                ...bill.poAttachment,
                id: `po-att-${Date.now()}`
            } : undefined
        };
        setBills([
            newBill,
            ...bills
        ]);
    };
    // Delete bill
    const handleDeleteBill = (id)=>{
        if (confirm('Are you sure you want to delete this Bill Invoice?')) {
            const targetBill = bills.find((b)=>b.id === id);
            const remaining = bills.filter((b)=>b.id !== id && (targetBill ? b.billNo !== targetBill.billNo : true));
            setBills(remaining);
            if (typeof window !== 'undefined') {
                localStorage.setItem('globotech_erp_bill_invoices', JSON.stringify(remaining));
                try {
                    const delSaved = localStorage.getItem('globotech_erp_deleted_bill_ids');
                    const delList = delSaved ? JSON.parse(delSaved) : [];
                    if (!delList.includes(id)) delList.push(id);
                    if (targetBill && targetBill.billNo && !delList.includes(targetBill.billNo)) {
                        delList.push(targetBill.billNo);
                    }
                    localStorage.setItem('globotech_erp_deleted_bill_ids', JSON.stringify(delList));
                } catch (e) {}
                // Mirror to IndexedDB immediately so dual-layer mirror doesn't bring it back
                try {
                    window.dispatchEvent(new Event('storage'));
                } catch (e) {}
            }
            if (activeBill?.id === id || targetBill && activeBill?.billNo === targetBill.billNo) {
                setActiveBill(remaining[0] || null);
                setActiveViewMode('LIST');
            }
        }
    };
    // Open PO Document Viewer
    const handleOpenPOViewer = (bill)=>{
        setSelectedPOBill(bill);
        setIsPOViewerOpen(true);
    };
    // Open Quick PO Attachment Modal for a specific row in the table
    const handleOpenQuickAttach = (bill)=>{
        setQuickAttachBill(bill);
        setQuickAttachFile(null);
        setIsQuickAttachOpen(true);
    };
    // Handle Quick PO Attachment Submit
    const handleSaveQuickAttachment = async (e)=>{
        e.preventDefault();
        if (!quickAttachBill || !quickAttachFile) {
            alert('Please select a PO document file (PDF or image).');
            return;
        }
        setIsUploadingPO(true);
        try {
            const attachment = await fileToPOAttachment(quickAttachFile);
            const updatedBills = bills.map((b)=>b.id === quickAttachBill.id ? {
                    ...b,
                    poAttachment: attachment
                } : b);
            setBills(updatedBills);
            if (activeBill?.id === quickAttachBill.id) {
                setActiveBill({
                    ...activeBill,
                    poAttachment: attachment
                });
            }
            setIsQuickAttachOpen(false);
            setQuickAttachBill(null);
            setQuickAttachFile(null);
        } catch (err) {
            alert(err.message || 'Error processing PO file');
        } finally{
            setIsUploadingPO(false);
        }
    };
    // Remove PO Attachment from a bill
    const handleDeletePOAttachment = (billId)=>{
        if (confirm('Are you sure you want to remove the PO attachment from this bill?')) {
            const updatedBills = bills.map((b)=>{
                if (b.id === billId) {
                    const { poAttachment, ...rest } = b;
                    return rest;
                }
                return b;
            });
            setBills(updatedBills);
            if (activeBill?.id === billId) {
                const { poAttachment, ...rest } = activeBill;
                setActiveBill(rest);
            }
            if (selectedPOBill?.id === billId) {
                setIsPOViewerOpen(false);
                setSelectedPOBill(null);
            }
        }
    };
    // Handle File Upload inside Create/Edit Modal
    const handleFormFieldFileUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        try {
            const attachment = await fileToPOAttachment(file);
            setFormData((prev)=>({
                    ...prev,
                    poAttachment: attachment
                }));
        } catch (err) {
            alert(err.message || 'Error processing file');
        }
        e.target.value = '';
    };
    // Save Form
    const handleSaveBill = (e)=>{
        e.preventDefault();
        if (!formData.billNo || !formData.billToName) {
            alert('Please provide Bill NO and Client Name (Bill To).');
            return;
        }
        const items = formData.items || [];
        const totals = recalculateFormTotals(items, formData.vatTaxIncluded ?? true, formData.vatTaxAmount ?? 0);
        let savedRecord;
        if (editingBillId) {
            // Update existing
            savedRecord = {
                ...formData,
                id: editingBillId,
                items,
                subTotal: totals.subTotal,
                grandTotal: totals.grandTotal,
                amountInWords: totals.amountInWords,
                poAttachment: formData.poAttachment
            };
            setBills(bills.map((b)=>b.id === editingBillId ? savedRecord : b));
        } else {
            // Create new
            savedRecord = {
                id: `bill-${Date.now()}`,
                billNo: formData.billNo?.trim() || generateNextBillNo(bills),
                date: formData.date || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formatters"].date(new Date()),
                poNumber: formData.poNumber || '',
                poAttachment: formData.poAttachment,
                quotationRef: formData.quotationRef || '',
                quotationId: formData.quotationId || '',
                binNumber: formData.binNumber || '004728009-0202',
                tinNumber: formData.tinNumber || '169493772750',
                billToName: formData.billToName || '',
                billToAddress: formData.billToAddress || '',
                deliverToAddress: formData.deliverToAddress || '',
                deliverToName: formData.deliverToName || '',
                deliverToPhone: formData.deliverToPhone || '',
                items,
                subTotal: totals.subTotal,
                vatTaxIncluded: formData.vatTaxIncluded ?? true,
                vatTaxAmount: formData.vatTaxAmount ?? 0,
                grandTotal: totals.grandTotal,
                amountInWords: totals.amountInWords,
                termsAndConditions: formData.termsAndConditions || [
                    '1. VAT&TAX : Included',
                    '2. Payment: Within Deadline'
                ],
                bankAccountNo: formData.bankAccountNo || '2051923010001',
                bankAccountTitle: formData.bankAccountTitle || 'Globo Tech',
                bankName: formData.bankName || 'Brac Bank',
                bankBranchName: formData.bankBranchName || 'Bijoynagar',
                preparedBy: formData.preparedBy || 'Engr. Sohel Rana',
                status: formData.status || 'ISSUED',
                createdAt: new Date().toISOString()
            };
            setBills([
                savedRecord,
                ...bills
            ]);
        }
        setActiveBill(savedRecord);
        setIsCreateModalOpen(false);
        setActiveViewMode('PREVIEW');
    };
    // Add Item in Form
    const handleAddItem = ()=>{
        const currentItems = formData.items || [];
        const nextItemNo = currentItems.length + 1;
        const updated = [
            ...currentItems,
            {
                id: `item-${Date.now()}`,
                itemNo: nextItemNo,
                name: '',
                partNo: '',
                serialNumbers: '',
                description: '',
                unit: 'Box',
                quantity: 1,
                unitPrice: 0,
                amount: 0
            }
        ];
        const totals = recalculateFormTotals(updated, formData.vatTaxIncluded ?? true, formData.vatTaxAmount ?? 0);
        setFormData({
            ...formData,
            items: updated,
            ...totals
        });
    };
    // Update Item in Form
    const handleUpdateItem = (index, field, value)=>{
        const currentItems = [
            ...formData.items || []
        ];
        const item = {
            ...currentItems[index]
        };
        if (field === 'quantity' || field === 'unitPrice') {
            item[field] = value;
            const q = field === 'quantity' ? value === '' ? 0 : Number(value) || 0 : Number(item.quantity) || 0;
            const p = field === 'unitPrice' ? value === '' ? 0 : Number(value) || 0 : Number(item.unitPrice) || 0;
            item.amount = q * p;
        } else {
            item[field] = value;
        }
        currentItems[index] = item;
        const totals = recalculateFormTotals(currentItems, formData.vatTaxIncluded ?? true, formData.vatTaxAmount ?? 0);
        setFormData({
            ...formData,
            items: currentItems,
            ...totals
        });
    };
    // Remove Item
    const handleRemoveItem = (index)=>{
        const currentItems = (formData.items || []).filter((_, i)=>i !== index);
        const renumbered = currentItems.map((it, i)=>({
                ...it,
                itemNo: i + 1
            }));
        const totals = recalculateFormTotals(renumbered, formData.vatTaxIncluded ?? true, formData.vatTaxAmount ?? 0);
        setFormData({
            ...formData,
            items: renumbered,
            ...totals
        });
    };
    // Switch to Full-Screen Preview
    const handleOpenPreview = (bill, docType = 'BILL')=>{
        setActiveBill(bill);
        setPreviewDocType(docType);
        setActiveViewMode('PREVIEW');
    };
    // Open Delivery Challan Directly
    const handleOpenChallan = (bill)=>{
        handleOpenPreview(bill, 'CHALLAN');
    };
    // Open Quick Serials & Part Numbers Modal for Delivery Challan
    const handleOpenSerialsModal = ()=>{
        if (!activeBill) return;
        setSerialsItems((activeBill.items || []).map((it)=>({
                ...it,
                partNo: it.partNo || '',
                serialNumbers: it.serialNumbers || ''
            })));
        setIsSerialsModalOpen(true);
    };
    const handleUpdateSerialItem = (index, field, value)=>{
        setSerialsItems((prev)=>{
            const copy = [
                ...prev
            ];
            copy[index] = {
                ...copy[index],
                [field]: value
            };
            return copy;
        });
    };
    const handleSaveSerialsModal = (e)=>{
        if (e) e.preventDefault();
        if (!activeBill) return;
        const updatedBill = {
            ...activeBill,
            items: serialsItems
        };
        setActiveBill(updatedBill);
        const updatedBills = bills.map((b)=>b.id === updatedBill.id ? updatedBill : b);
        setBills(updatedBills);
        if (typeof window !== 'undefined') {
            try {
                localStorage.setItem('globotech_erp_bill_invoices', JSON.stringify(updatedBills));
                window.dispatchEvent(new Event('storage'));
                window.dispatchEvent(new CustomEvent('globotech_bills_updated', {
                    detail: updatedBills
                }));
            } catch (err) {
                console.error('Failed to save serials to localStorage:', err);
            }
        }
        setIsSerialsModalOpen(false);
        showToast(`Updated Serial Numbers & Part Nos for Challan DC/${updatedBill.billNo.replace('GT/', '')}`);
    };
    // 1-Click Interactive VAT/TAX Mode Toggle (Included vs Excluded)
    const handleToggleBillVatMode = (mode)=>{
        if (!activeBill) return;
        const isIncluded = mode === 'INCLUDED';
        // Update terms and conditions: replace or update the VAT&TAX line
        const currentTerms = Array.isArray(activeBill.termsAndConditions) ? [
            ...activeBill.termsAndConditions
        ] : [];
        let foundVatLine = false;
        const updatedTerms = currentTerms.map((term)=>{
            if (/vat\s*&?\s*tax/i.test(term)) {
                foundVatLine = true;
                return isIncluded ? '1. VAT&TAX : Included' : '1. VAT&TAX : Excluded';
            }
            return term;
        });
        if (!foundVatLine) {
            updatedTerms.unshift(isIncluded ? '1. VAT&TAX : Included' : '1. VAT&TAX : Excluded');
        }
        const updatedBill = {
            ...activeBill,
            vatTaxIncluded: isIncluded,
            termsAndConditions: updatedTerms
        };
        setActiveBill(updatedBill);
        const updatedBills = bills.map((b)=>b.id === updatedBill.id ? updatedBill : b);
        setBills(updatedBills);
        if (typeof window !== 'undefined') {
            try {
                localStorage.setItem('globotech_erp_bill_invoices', JSON.stringify(updatedBills));
                window.dispatchEvent(new Event('storage'));
                window.dispatchEvent(new CustomEvent('globotech_bills_updated', {
                    detail: updatedBills
                }));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$erpBackup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorToIndexedDB"])().catch(()=>{});
            } catch (err) {
                console.error('Failed to save bill VAT mode to localStorage:', err);
            }
        }
        showToast(`✓ VAT & TAX set to ${isIncluded ? 'Included' : 'Excluded'}`);
    };
    // Robust isolated printing engine (guarantees 100% data visibility on A4 pad without clipping)
    const handlePrintBill = ()=>{
        const printElement = document.getElementById('printable-bill-invoice');
        if (!printElement) {
            window.print();
            return;
        }
        try {
            // Remove any prior print frame
            const oldFrame = document.getElementById('isolated-bill-print-frame');
            if (oldFrame) {
                oldFrame.remove();
            }
            // Create a clean hidden iframe
            const printIframe = document.createElement('iframe');
            printIframe.id = 'isolated-bill-print-frame';
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
            const billHtml = printElement.innerHTML;
            const docTitle = previewDocType === 'CHALLAN' ? `Delivery Challan - DC-${activeBill?.billNo ? activeBill.billNo.replace('GT/', '') : 'GT'}` : `Bill Invoice - ${activeBill?.billNo || 'GT'}`;
            frameDoc.open();
            frameDoc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <title>${docTitle}</title>
            <style>
              @page {
                size: A4 portrait;
                margin: 8mm 10mm 8mm 10mm;
              }
              *, *::before, *::after {
                box-sizing: border-box;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              html, body {
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
                background-color: #ffffff !important;
                color: #000000 !important;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                -webkit-font-smoothing: antialiased;
              }
              .print-sheet {
                width: 100% !important;
                max-width: 190mm !important;
                min-height: auto !important;
                margin: 0 auto !important;
                padding-top: ${usePreprintedPadMode ? `${Math.max(0, padTopMarginMm - 8)}mm` : '2mm'} !important;
                padding-left: 2mm !important;
                padding-right: 2mm !important;
                padding-bottom: 4mm !important;
                box-sizing: border-box !important;
                background: #ffffff;
                color: #000000;
              }
              table {
                width: 100% !important;
                border-collapse: collapse !important;
              }
              thead {
                display: table-header-group !important;
              }
              tfoot {
                display: table-footer-group !important;
              }
              tr {
                page-break-inside: avoid !important;
                break-inside: avoid !important;
              }
              .no-print,
              .print\\:hidden,
              button {
                display: none !important;
              }
            </style>
          </head>
          <body>
            <div class="print-sheet">
              ${billHtml}
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
                }, 1500);
            }, 350);
        } catch (err) {
            console.error('Iframe print failed, falling back to window.print()', err);
            window.print();
        }
    };
    // Filtered Bills with high-accuracy Search for Bill NO, PO, Phone, and Client
    const filteredBills = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const rawQuery = searchQuery.trim().toLowerCase();
        const cleanQuery = rawQuery.replace(/[\s\-/\\#.]/g, '');
        return bills.filter((b)=>{
            // 1. Search Query Match
            let matchesSearch = true;
            if (rawQuery !== '') {
                const billNoLower = (b.billNo || '').toLowerCase();
                const cleanBillNo = billNoLower.replace(/[\s\-/\\#.]/g, '');
                const poLower = (b.poNumber || '').toLowerCase();
                const cleanPo = poLower.replace(/[\s\-/\\#.]/g, '');
                const phoneLower = (b.deliverToPhone || '').toLowerCase();
                const cleanPhone = phoneLower.replace(/\D/g, '');
                const queryDigits = rawQuery.replace(/\D/g, '');
                const billToName = (b.billToName || '').toLowerCase();
                const deliverToName = (b.deliverToName || '').toLowerCase();
                const deliverToAddress = (b.deliverToAddress || '').toLowerCase();
                const quotationRef = (b.quotationRef || '').toLowerCase();
                // Check Bill NO (flexible matching: "26107", "GT/26107", "GT 26107", "gt26107")
                const matchesBillNo = billNoLower.includes(rawQuery) || cleanQuery.length >= 2 && cleanBillNo.includes(cleanQuery) || cleanBillNo.endsWith(cleanQuery);
                // Check PO Number (e.g. POBD9729-1, 9729)
                const matchesPo = poLower.includes(rawQuery) || cleanQuery.length >= 2 && cleanPo.includes(cleanQuery);
                // Check Phone Number (e.g. 1999074461, 01999)
                const matchesPhone = phoneLower.includes(rawQuery) || queryDigits.length >= 3 && cleanPhone.includes(queryDigits);
                // Check Client & Deliver To
                const matchesClient = billToName.includes(rawQuery) || deliverToName.includes(rawQuery) || deliverToAddress.includes(rawQuery);
                // Check Quotation Reference
                const matchesQuote = quotationRef.includes(rawQuery);
                // Check Items (Name, Description, SKU)
                const matchesItem = (b.items || []).some((it)=>(it.name || '').toLowerCase().includes(rawQuery) || (it.description || '').toLowerCase().includes(rawQuery) || (it.sku || '').toLowerCase().includes(rawQuery));
                // Also check linked quotation items (e.g. if quote had SKU or name)
                const linkedQuote = quotations.find((q)=>q.id === b.quotationId || q.quotationNumber === b.quotationRef);
                const matchesLinkedQuoteItem = linkedQuote ? (linkedQuote.items || []).some((qi)=>(qi.sku || '').toLowerCase().includes(rawQuery) || (qi.name || '').toLowerCase().includes(rawQuery) || (qi.model || '').toLowerCase().includes(rawQuery)) : false;
                // Check PO Attachment filename
                const poFileName = (b.poAttachment?.name || '').toLowerCase();
                const matchesPoFile = poFileName.includes(rawQuery);
                matchesSearch = matchesBillNo || matchesPo || matchesPoFile || matchesPhone || matchesClient || matchesQuote || matchesItem || matchesLinkedQuoteItem;
            }
            // 2. Status Filter Match
            const matchesStatus = statusFilter === 'ALL' || b.status === statusFilter;
            // 3. PO Attachment Only Filter
            const matchesPoOnly = !poFilterOnly || Boolean(b.poAttachment);
            return matchesSearch && matchesStatus && matchesPoOnly;
        });
    }, [
        bills,
        searchQuery,
        statusFilter,
        poFilterOnly
    ]);
    // Statistics
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const totalCount = bills.length;
        const totalBilled = bills.reduce((acc, b)=>acc + (b.grandTotal || 0), 0);
        const paidCount = bills.filter((b)=>b.status === 'PAID').length;
        const pendingCount = bills.filter((b)=>b.status === 'ISSUED' || b.status === 'PARTIAL').length;
        return {
            totalCount,
            totalBilled,
            paidCount,
            pendingCount
        };
    }, [
        bills
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-6310dafa82202c51" + " " + "space-y-6",
        children: [
            activeViewMode === 'LIST' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    toastMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6310dafa82202c51" + " " + "fixed top-20 right-6 z-50 bg-emerald-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 border border-emerald-400/40 animate-bounce",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-4 h-4 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 1407,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-6310dafa82202c51",
                                children: toastMsg
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 1408,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                        lineNumber: 1406,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6310dafa82202c51" + " " + "flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-2xl shadow-xl backdrop-blur-md no-print",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6310dafa82202c51" + " " + "w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 1416,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1415,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6310dafa82202c51",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "jsx-6310dafa82202c51" + " " + "text-xl font-bold text-slate-100",
                                                        children: "Bill Invoices & Delivery Challans"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 1420,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-6310dafa82202c51" + " " + "text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
                                                        children: "Pad Ready"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 1421,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-6310dafa82202c51" + " " + "text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 hidden sm:inline",
                                                        children: "Delivery Challan Ready"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 1424,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1419,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-6310dafa82202c51" + " " + "text-xs text-slate-400",
                                                children: "Generate & print client supply bills and official delivery challans (চালান) on pre-printed company pad or plain paper"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1428,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1418,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 1414,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-2.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleOpenCreateModal(),
                                    className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded-xl text-xs font-semibold shadow-lg shadow-emerald-600/20 transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 1439,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-6310dafa82202c51",
                                            children: "Create Bill Invoice"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 1440,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 1435,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 1434,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                        lineNumber: 1413,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6310dafa82202c51" + " " + "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 no-print",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6310dafa82202c51" + " " + "p-4 rounded-xl bg-slate-900 border border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6310dafa82202c51" + " " + "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-6310dafa82202c51" + " " + "text-xs font-medium text-slate-400",
                                                children: "Total Billed Invoices"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1449,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                className: "w-4 h-4 text-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1450,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1448,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-6310dafa82202c51" + " " + "text-xl font-bold text-slate-100 mt-2",
                                        children: stats.totalCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1452,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-6310dafa82202c51" + " " + "text-[11px] text-slate-500 mt-0.5",
                                        children: "Records in system"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1453,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 1447,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6310dafa82202c51" + " " + "p-4 rounded-xl bg-slate-900 border border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6310dafa82202c51" + " " + "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-6310dafa82202c51" + " " + "text-xs font-medium text-slate-400",
                                                children: "Total Billed Volume"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1458,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "w-4 h-4 text-sky-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1459,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1457,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-6310dafa82202c51" + " " + "text-xl font-bold text-slate-100 mt-2",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(stats.totalBilled)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1461,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-6310dafa82202c51" + " " + "text-[11px] text-slate-500 mt-0.5",
                                        children: "Commercial value"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1462,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 1456,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6310dafa82202c51" + " " + "p-4 rounded-xl bg-slate-900 border border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6310dafa82202c51" + " " + "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-6310dafa82202c51" + " " + "text-xs font-medium text-slate-400",
                                                children: "Issued / Pending"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1467,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-4 h-4 text-amber-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1468,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1466,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-6310dafa82202c51" + " " + "text-xl font-bold text-amber-400 mt-2",
                                        children: stats.pendingCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1470,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-6310dafa82202c51" + " " + "text-[11px] text-slate-500 mt-0.5",
                                        children: "Awaiting collection"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1471,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 1465,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6310dafa82202c51" + " " + "p-4 rounded-xl bg-slate-900 border border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6310dafa82202c51" + " " + "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-6310dafa82202c51" + " " + "text-xs font-medium text-slate-400",
                                                children: "Settled / Paid"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1476,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "w-4 h-4 text-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1477,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1475,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-6310dafa82202c51" + " " + "text-xl font-bold text-emerald-400 mt-2",
                                        children: stats.paidCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1479,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-6310dafa82202c51" + " " + "text-[11px] text-slate-500 mt-0.5",
                                        children: "Fully collected"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1480,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 1474,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                        lineNumber: 1446,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6310dafa82202c51" + " " + "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/60 border border-slate-800 p-3 rounded-xl no-print",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6310dafa82202c51" + " " + "relative flex-1 max-w-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1487,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search by Bill NO (e.g. GT/26107, 26107), PO, Phone, Client...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "jsx-6310dafa82202c51" + " " + "w-full pl-9 pr-8 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1488,
                                        columnNumber: 15
                                    }, this),
                                    searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setSearchQuery(''),
                                        title: "Clear search",
                                        className: "jsx-6310dafa82202c51" + " " + "absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-0.5 rounded transition",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 1502,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1496,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 1486,
                                columnNumber: 13
                            }, this),
                            searchQuery.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-1.5 text-xs text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-6310dafa82202c51",
                                        children: [
                                            "Found ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "jsx-6310dafa82202c51" + " " + "text-emerald-400",
                                                children: filteredBills.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1510,
                                                columnNumber: 25
                                            }, this),
                                            " matching bills"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1509,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setSearchQuery(''),
                                        className: "jsx-6310dafa82202c51" + " " + "text-[11px] text-emerald-400 hover:underline font-semibold ml-1",
                                        children: "Reset"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1512,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 1508,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "w-3.5 h-3.5 text-slate-400 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1523,
                                        columnNumber: 15
                                    }, this),
                                    [
                                        'ALL',
                                        'ISSUED',
                                        'PAID',
                                        'PARTIAL',
                                        'DRAFT',
                                        'CANCELLED'
                                    ].map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setStatusFilter(st),
                                            className: "jsx-6310dafa82202c51" + " " + `px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${statusFilter === st ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'}`,
                                            children: st === 'ALL' ? 'All Bills' : st
                                        }, st, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 1525,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-6310dafa82202c51" + " " + "text-slate-700",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1538,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setPoFilterOnly(!poFilterOnly),
                                        title: "Show only bills that have customer Purchase Order (PO) document attached",
                                        className: "jsx-6310dafa82202c51" + " " + `px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition flex items-center gap-1.5 ${poFilterOnly ? 'bg-teal-600 text-white shadow-sm ring-1 ring-teal-400 font-semibold' : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                className: "w-3.5 h-3.5 text-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1551,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-6310dafa82202c51",
                                                children: [
                                                    "PO Attached (",
                                                    bills.filter((b)=>!!b.poAttachment).length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1552,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1541,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 1522,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                        lineNumber: 1485,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6310dafa82202c51" + " " + "space-y-4 no-print",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6310dafa82202c51" + " " + "md:hidden space-y-3",
                                children: filteredBills.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                            className: "w-8 h-8 mx-auto mb-2 text-slate-600 opacity-50"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 1563,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-6310dafa82202c51" + " " + "text-sm font-medium",
                                            children: "No bill invoices found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 1564,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-6310dafa82202c51" + " " + "text-xs text-slate-600 mt-1",
                                            children: "Click “Create Bill Invoice” above to generate your first company pad bill from quotation."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 1565,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 1562,
                                    columnNumber: 17
                                }, this) : filteredBills.map((bill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6310dafa82202c51" + " " + "p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6310dafa82202c51" + " " + "flex items-start justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-6310dafa82202c51" + " " + "font-mono text-sm font-bold text-emerald-400",
                                                                        children: bill.billNo
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 1578,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        title: "Tap to update Bill Status",
                                                                        className: "jsx-6310dafa82202c51" + " " + "relative inline-flex items-center group",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                value: bill.status,
                                                                                onChange: (e)=>{
                                                                                    e.stopPropagation();
                                                                                    handleUpdateBillStatus(bill.id, e.target.value);
                                                                                },
                                                                                onClick: (e)=>e.stopPropagation(),
                                                                                className: "jsx-6310dafa82202c51" + " " + `appearance-none cursor-pointer pl-5 pr-5 py-0.5 rounded-full text-[11px] font-semibold border transition shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50 ${BILL_STATUS_THEME[bill.status]?.bg || 'bg-slate-800'} ${BILL_STATUS_THEME[bill.status]?.text || 'text-slate-300'} ${BILL_STATUS_THEME[bill.status]?.border || 'border-slate-700'}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "ISSUED",
                                                                                        className: "jsx-6310dafa82202c51" + " " + "bg-slate-900 text-amber-300 font-medium",
                                                                                        children: "ISSUED"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                        lineNumber: 1597,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "PAID",
                                                                                        className: "jsx-6310dafa82202c51" + " " + "bg-slate-900 text-emerald-300 font-medium",
                                                                                        children: "PAID"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                        lineNumber: 1598,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "PARTIAL",
                                                                                        className: "jsx-6310dafa82202c51" + " " + "bg-slate-900 text-cyan-300 font-medium",
                                                                                        children: "PARTIAL"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                        lineNumber: 1599,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "DRAFT",
                                                                                        className: "jsx-6310dafa82202c51" + " " + "bg-slate-900 text-slate-300 font-medium",
                                                                                        children: "DRAFT"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                        lineNumber: 1600,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "CANCELLED",
                                                                                        className: "jsx-6310dafa82202c51" + " " + "bg-slate-900 text-rose-300 font-medium",
                                                                                        children: "CANCELLED"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                        lineNumber: 1601,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                lineNumber: 1582,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-6310dafa82202c51" + " " + `w-1.5 h-1.5 rounded-full absolute left-2 pointer-events-none ${BILL_STATUS_THEME[bill.status]?.dot || 'bg-slate-400'}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                lineNumber: 1603,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                className: "w-2.5 h-2.5 absolute right-1.5 pointer-events-none opacity-60"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                lineNumber: 1608,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 1581,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1577,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-6310dafa82202c51" + " " + "text-[11px] text-slate-400 mt-0.5",
                                                                children: bill.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1611,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 1576,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6310dafa82202c51" + " " + "text-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-slate-400 uppercase block font-semibold",
                                                                children: "Grand Total"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1615,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-6310dafa82202c51" + " " + "font-mono font-bold text-slate-100 text-base",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(bill.grandTotal)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1616,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 1614,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1575,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6310dafa82202c51" + " " + "bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 space-y-2 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-slate-500 uppercase font-semibold block",
                                                                children: "Client (Bill To)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1624,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-6310dafa82202c51" + " " + "font-semibold text-slate-200",
                                                                children: bill.billToName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1625,
                                                                columnNumber: 25
                                                            }, this),
                                                            bill.billToAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-6310dafa82202c51" + " " + "text-[11px] text-slate-400 truncate",
                                                                children: bill.billToAddress
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1627,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 1623,
                                                        columnNumber: 23
                                                    }, this),
                                                    (bill.deliverToName || bill.deliverToPhone || bill.deliverToAddress) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6310dafa82202c51" + " " + "pt-1.5 border-t border-slate-800/60",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-slate-500 uppercase font-semibold block",
                                                                children: "Delivered To"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1633,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-6310dafa82202c51" + " " + "text-slate-300 truncate",
                                                                children: bill.deliverToAddress || '—'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1634,
                                                                columnNumber: 27
                                                            }, this),
                                                            (bill.deliverToName || bill.deliverToPhone) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-1.5 text-[11px] text-slate-400 mt-0.5",
                                                                children: [
                                                                    bill.deliverToName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: bill.deliverToName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 1637,
                                                                        columnNumber: 54
                                                                    }, this),
                                                                    bill.deliverToName && bill.deliverToPhone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-6310dafa82202c51" + " " + "text-slate-600",
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 1638,
                                                                        columnNumber: 77
                                                                    }, this),
                                                                    bill.deliverToPhone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: `tel:${bill.deliverToPhone}`,
                                                                        className: "jsx-6310dafa82202c51" + " " + "font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[10px] underline",
                                                                        children: bill.deliverToPhone
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 1640,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1636,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 1632,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6310dafa82202c51" + " " + "pt-1.5 border-t border-slate-800/60 flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-slate-500 uppercase font-semibold block",
                                                                        children: "PO Number"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 1654,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    bill.poNumber ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-6310dafa82202c51" + " " + "bg-slate-800 px-1.5 py-0.5 rounded text-emerald-400 border border-slate-700/60 font-mono text-[11px]",
                                                                        children: bill.poNumber
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 1656,
                                                                        columnNumber: 29
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-6310dafa82202c51" + " " + "text-slate-500 italic text-[11px]",
                                                                        children: "None"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 1660,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    bill.quotationRef && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-sky-400 font-mono ml-2",
                                                                        children: [
                                                                            "Ref: ",
                                                                            bill.quotationRef
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 1663,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1653,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: bill.poAttachment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleOpenPOViewer(bill),
                                                                    className: "jsx-6310dafa82202c51" + " " + "inline-flex items-center gap-1 px-2 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[11px] font-medium",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                                            className: "w-3 h-3 text-emerald-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1676,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-6310dafa82202c51" + " " + "truncate max-w-[110px]",
                                                                            children: bill.poAttachment.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1677,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 1671,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleOpenQuickAttach(bill),
                                                                    className: "jsx-6310dafa82202c51" + " " + "inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-emerald-400 py-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                                            className: "w-3 h-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1685,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-6310dafa82202c51",
                                                                            children: "+ Attach PO"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1686,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 1680,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1669,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 1652,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1622,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6310dafa82202c51" + " " + "grid grid-cols-5 gap-1.5 pt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleOpenPreview(bill, 'BILL'),
                                                        className: "jsx-6310dafa82202c51" + " " + "col-span-2 min-h-[40px] px-2 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 font-bold text-xs border border-emerald-500/30 transition flex items-center justify-center gap-1 active:scale-95",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1698,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Bill (বিল)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1699,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 1694,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleOpenChallan(bill),
                                                        title: "Delivery Challan",
                                                        className: "jsx-6310dafa82202c51" + " " + "col-span-1 min-h-[40px] px-1.5 py-1.5 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 font-bold text-xs border border-blue-500/30 transition flex items-center justify-center gap-1 active:scale-95",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1706,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "চালান"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1707,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 1701,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleOpenEditModal(bill),
                                                        title: "Edit Bill",
                                                        className: "jsx-6310dafa82202c51" + " " + "min-h-[40px] p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition flex items-center justify-center active:scale-95",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 1714,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 1709,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDeleteBill(bill.id),
                                                        title: "Delete Bill",
                                                        className: "jsx-6310dafa82202c51" + " " + "min-h-[40px] p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 transition flex items-center justify-center active:scale-95",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 1721,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 1716,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1693,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, bill.id, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1571,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 1560,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6310dafa82202c51" + " " + "hidden md:block bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "overflow-x-auto touch-scroll max-h-[calc(100vh-250px)] min-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "jsx-6310dafa82202c51" + " " + "w-full text-left border-separate border-spacing-0 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "jsx-6310dafa82202c51",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "jsx-6310dafa82202c51" + " " + "bg-slate-950/95 text-slate-400 uppercase text-[10px] tracking-wider font-semibold",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-3 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800 whitespace-nowrap",
                                                            children: "Bill NO"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 1735,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-2.5 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800 whitespace-nowrap",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 1736,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-3 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800",
                                                            children: "Client (Bill To)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 1737,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-2.5 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800",
                                                            children: "PO / Quote Ref"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 1738,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-2.5 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800",
                                                            children: "Delivered To"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 1739,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-2 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800 text-right whitespace-nowrap",
                                                            children: "Items"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 1740,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-2.5 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800 text-right whitespace-nowrap",
                                                            children: "Grand Total"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 1741,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-2.5 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800 text-center whitespace-nowrap",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-6310dafa82202c51" + " " + "inline-flex items-center gap-1",
                                                                children: [
                                                                    "Status",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-slate-500 font-normal hidden 2xl:inline",
                                                                        children: "(▾ Quick Change)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 1745,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1743,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 1742,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-3 bg-slate-950/95 sticky top-0 right-0 z-30 border-b border-l border-slate-800 shadow-[-8px_0_12px_rgba(0,0,0,0.5)] text-right whitespace-nowrap",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 1748,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 1734,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1733,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "jsx-6310dafa82202c51" + " " + "text-slate-300",
                                                children: filteredBills.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 9,
                                                        className: "jsx-6310dafa82202c51" + " " + "py-12 text-center text-slate-500 border-b border-slate-800/60",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                                className: "w-8 h-8 mx-auto mb-2 text-slate-600 opacity-50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1757,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-6310dafa82202c51" + " " + "text-sm font-medium",
                                                                children: "No bill invoices found"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1758,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-6310dafa82202c51" + " " + "text-xs text-slate-600 mt-1",
                                                                children: "Click “Create Bill Invoice” above to generate your first company pad bill from quotation."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1759,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 1756,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 1755,
                                                    columnNumber: 23
                                                }, this) : filteredBills.map((bill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-6310dafa82202c51" + " " + "hover:bg-slate-800/40 transition group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-3 font-mono font-bold text-emerald-400 border-b border-slate-800/60 whitespace-nowrap",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-6310dafa82202c51",
                                                                            children: bill.billNo
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1769,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        searchQuery && (bill.billNo.toLowerCase().includes(searchQuery.toLowerCase()) || bill.billNo.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().includes(searchQuery.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-6310dafa82202c51" + " " + "text-[9px] bg-emerald-500/20 text-emerald-300 px-1 py-0.2 rounded font-sans uppercase font-bold",
                                                                            children: "Match"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1773,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 1768,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1767,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-2.5 whitespace-nowrap text-slate-400 text-[11px] border-b border-slate-800/60",
                                                                children: bill.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1779,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-3 border-b border-slate-800/60 max-w-[160px] xl:max-w-[200px]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        title: bill.billToName,
                                                                        className: "jsx-6310dafa82202c51" + " " + "font-semibold text-slate-200 truncate",
                                                                        children: bill.billToName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 1783,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    bill.billToAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        title: bill.billToAddress,
                                                                        className: "jsx-6310dafa82202c51" + " " + "text-[11px] text-slate-500 truncate",
                                                                        children: bill.billToAddress
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 1785,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1782,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-2.5 border-b border-slate-800/60 max-w-[125px]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6310dafa82202c51" + " " + "font-mono text-slate-200 font-medium",
                                                                        children: bill.poNumber ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-6310dafa82202c51" + " " + "bg-slate-800 px-1.5 py-0.5 rounded text-emerald-400 border border-slate-700/60 font-mono text-[10px]",
                                                                            children: bill.poNumber
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1791,
                                                                            columnNumber: 33
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-6310dafa82202c51" + " " + "text-slate-600 italic text-[11px]",
                                                                            children: "No PO"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1795,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 1789,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    bill.quotationRef && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        title: `Quotation Ref: ${bill.quotationRef}`,
                                                                        className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-sky-400 font-mono flex items-center gap-1 mt-0.5 truncate",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-6310dafa82202c51",
                                                                            children: [
                                                                                "Ref: ",
                                                                                bill.quotationRef
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1800,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 1799,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    bill.poAttachment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6310dafa82202c51" + " " + "mt-1",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: (e)=>{
                                                                                e.stopPropagation();
                                                                                handleOpenPOViewer(bill);
                                                                            },
                                                                            title: `View Customer PO Document: ${bill.poAttachment.name} (${(bill.poAttachment.size / 1024).toFixed(0)} KB)`,
                                                                            className: "jsx-6310dafa82202c51" + " " + "inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-950/80 hover:bg-emerald-900 text-emerald-400 border border-emerald-800 text-[10px] font-medium transition active:scale-95 group/btn",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                                                    className: "w-2.5 h-2.5 text-emerald-400 group-hover/btn:rotate-12 transition-transform"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                    lineNumber: 1816,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "jsx-6310dafa82202c51" + " " + "truncate max-w-[95px]",
                                                                                    children: bill.poAttachment.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                    lineNumber: 1817,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1807,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 1806,
                                                                        columnNumber: 31
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6310dafa82202c51" + " " + "mt-1",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: (e)=>{
                                                                                e.stopPropagation();
                                                                                handleOpenQuickAttach(bill);
                                                                            },
                                                                            title: "Attach client PO document to this bill",
                                                                            className: "jsx-6310dafa82202c51" + " " + "inline-flex items-center gap-1 text-[10px] text-slate-500 hover:text-emerald-400 hover:underline transition",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                                                    className: "w-2.5 h-2.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                    lineNumber: 1831,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "jsx-6310dafa82202c51",
                                                                                    children: "+ Attach PO"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                    lineNumber: 1832,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1822,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 1821,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1788,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-2.5 border-b border-slate-800/60 max-w-[130px] xl:max-w-[160px]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        title: bill.deliverToAddress || '—',
                                                                        className: "jsx-6310dafa82202c51" + " " + "text-slate-300 font-medium truncate",
                                                                        children: bill.deliverToAddress || '—'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 1838,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    (bill.deliverToName || bill.deliverToPhone) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6310dafa82202c51" + " " + "text-[11px] text-slate-400 flex items-center gap-1 mt-0.5 truncate",
                                                                        children: [
                                                                            bill.deliverToName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                title: bill.deliverToName,
                                                                                className: "jsx-6310dafa82202c51" + " " + "truncate",
                                                                                children: bill.deliverToName
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                lineNumber: 1843,
                                                                                columnNumber: 56
                                                                            }, this),
                                                                            bill.deliverToName && bill.deliverToPhone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-6310dafa82202c51" + " " + "text-slate-600",
                                                                                children: "•"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                lineNumber: 1844,
                                                                                columnNumber: 79
                                                                            }, this),
                                                                            bill.deliverToPhone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-6310dafa82202c51" + " " + "font-mono text-emerald-400 bg-emerald-500/10 px-1 rounded text-[10px] shrink-0",
                                                                                children: bill.deliverToPhone
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                lineNumber: 1846,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 1842,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1837,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-2 text-right font-medium text-[11px] text-slate-400 border-b border-slate-800/60 whitespace-nowrap",
                                                                children: [
                                                                    bill.items.length,
                                                                    " ",
                                                                    bill.items.length === 1 ? 'item' : 'items'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1853,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-2.5 text-right font-bold text-slate-100 border-b border-slate-800/60 whitespace-nowrap",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(bill.grandTotal)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1856,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-2.5 text-center border-b border-slate-800/60 whitespace-nowrap",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    title: "Click to update Bill Status",
                                                                    className: "jsx-6310dafa82202c51" + " " + "relative inline-flex items-center group",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            value: bill.status,
                                                                            onChange: (e)=>{
                                                                                e.stopPropagation();
                                                                                handleUpdateBillStatus(bill.id, e.target.value);
                                                                            },
                                                                            onClick: (e)=>e.stopPropagation(),
                                                                            className: "jsx-6310dafa82202c51" + " " + `appearance-none cursor-pointer pl-6 pr-6 py-0.5 rounded-full text-xs font-semibold border transition shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50 ${BILL_STATUS_THEME[bill.status]?.bg || 'bg-slate-800'} ${BILL_STATUS_THEME[bill.status]?.text || 'text-slate-300'} ${BILL_STATUS_THEME[bill.status]?.border || 'border-slate-700'}`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "ISSUED",
                                                                                    className: "jsx-6310dafa82202c51" + " " + "bg-slate-900 text-amber-300 font-medium",
                                                                                    children: "ISSUED"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                    lineNumber: 1876,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "PAID",
                                                                                    className: "jsx-6310dafa82202c51" + " " + "bg-slate-900 text-emerald-300 font-medium",
                                                                                    children: "PAID"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                    lineNumber: 1877,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "PARTIAL",
                                                                                    className: "jsx-6310dafa82202c51" + " " + "bg-slate-900 text-cyan-300 font-medium",
                                                                                    children: "PARTIAL"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                    lineNumber: 1878,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "DRAFT",
                                                                                    className: "jsx-6310dafa82202c51" + " " + "bg-slate-900 text-slate-300 font-medium",
                                                                                    children: "DRAFT"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                    lineNumber: 1879,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "CANCELLED",
                                                                                    className: "jsx-6310dafa82202c51" + " " + "bg-slate-900 text-rose-300 font-medium",
                                                                                    children: "CANCELLED"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                    lineNumber: 1880,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1861,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-6310dafa82202c51" + " " + `w-1.5 h-1.5 rounded-full absolute left-2.5 pointer-events-none ${BILL_STATUS_THEME[bill.status]?.dot || 'bg-slate-400'}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1882,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                            className: "w-3 h-3 absolute right-2 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1887,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 1860,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1859,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-3 text-right whitespace-nowrap sticky right-0 z-10 bg-slate-900/95 group-hover:bg-slate-850/95 backdrop-blur-md border-b border-l border-slate-800 shadow-[-8px_0_12px_rgba(0,0,0,0.5)]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-6310dafa82202c51" + " " + "flex items-center justify-end gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>bill.poAttachment ? handleOpenPOViewer(bill) : handleOpenQuickAttach(bill),
                                                                            title: bill.poAttachment ? `View Customer PO (${bill.poAttachment.name})` : "Attach Customer PO Document",
                                                                            className: "jsx-6310dafa82202c51" + " " + `p-1.5 rounded-lg transition active:scale-95 ${bill.poAttachment ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/30' : 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200'}`,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                                                className: "w-3.5 h-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                lineNumber: 1903,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1893,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleOpenPreview(bill, 'BILL'),
                                                                            title: "View & Print Pad Bill Invoice",
                                                                            className: "jsx-6310dafa82202c51" + " " + "px-2 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 font-semibold text-xs border border-emerald-500/30 transition flex items-center gap-1 active:scale-95",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                    className: "w-3.5 h-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                    lineNumber: 1911,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "jsx-6310dafa82202c51" + " " + "hidden xl:inline",
                                                                                    children: "Bill"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                    lineNumber: 1912,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1906,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleOpenChallan(bill),
                                                                            title: "Generate & Print Delivery Challan (চালান)",
                                                                            className: "jsx-6310dafa82202c51" + " " + "px-2 py-1 rounded-lg bg-blue-500/15 hover:bg-blue-500/25 text-blue-400 font-semibold text-xs border border-blue-500/30 transition flex items-center gap-1 active:scale-95",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                                                    className: "w-3.5 h-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                    lineNumber: 1919,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "jsx-6310dafa82202c51" + " " + "hidden xl:inline",
                                                                                    children: "Challan"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                    lineNumber: 1920,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1914,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleOpenEditModal(bill),
                                                                            title: "Edit Bill",
                                                                            className: "jsx-6310dafa82202c51" + " " + "p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition active:scale-95",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                                className: "w-3.5 h-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                lineNumber: 1927,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1922,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleDuplicateBill(bill),
                                                                            title: "Duplicate",
                                                                            className: "jsx-6310dafa82202c51" + " " + "p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition active:scale-95",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                                className: "w-3.5 h-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                lineNumber: 1934,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1929,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleDeleteBill(bill.id),
                                                                            title: "Delete",
                                                                            className: "jsx-6310dafa82202c51" + " " + "p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 transition active:scale-95",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                className: "w-3.5 h-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                lineNumber: 1941,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 1936,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 1891,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 1890,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, bill.id, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 1766,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1753,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1732,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 1731,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 1730,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                        lineNumber: 1558,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            activeViewMode === 'PREVIEW' && activeBill && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-6310dafa82202c51" + " " + "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6310dafa82202c51" + " " + "bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-xl no-print",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveViewMode('LIST'),
                                        className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1969,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-6310dafa82202c51",
                                                children: "Back to Bills"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1970,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1964,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6310dafa82202c51" + " " + "h-5 w-px bg-slate-800 hidden sm:block"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1973,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6310dafa82202c51" + " " + "flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setPreviewDocType('BILL'),
                                                className: "jsx-6310dafa82202c51" + " " + `flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition ${previewDocType === 'BILL' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 1986,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Bill Invoice (বিল)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 1987,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1977,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setPreviewDocType('CHALLAN'),
                                                className: "jsx-6310dafa82202c51" + " " + `flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition ${previewDocType === 'CHALLAN' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 1998,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Delivery Challan (চালান)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 1999,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 1989,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 1976,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6310dafa82202c51",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-6310dafa82202c51" + " " + "text-sm font-bold text-slate-100 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: [
                                                        previewDocType === 'CHALLAN' ? 'Challan:' : 'Bill:',
                                                        ' ',
                                                        previewDocType === 'CHALLAN' ? `DC/${activeBill.billNo.replace('GT/', '')}` : activeBill.billNo
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2005,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51" + " " + "font-normal text-xs text-slate-400 hidden lg:inline",
                                                    children: [
                                                        "(",
                                                        activeBill.billToName,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2009,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    title: "Click to update status",
                                                    className: "jsx-6310dafa82202c51" + " " + "relative inline-flex items-center group ml-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: activeBill.status,
                                                            onChange: (e)=>{
                                                                handleUpdateBillStatus(activeBill.id, e.target.value);
                                                            },
                                                            className: "jsx-6310dafa82202c51" + " " + `appearance-none cursor-pointer pl-5 pr-5 py-0.5 rounded-full text-[11px] font-semibold border transition shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50 ${BILL_STATUS_THEME[activeBill.status]?.bg || 'bg-slate-800'} ${BILL_STATUS_THEME[activeBill.status]?.text || 'text-slate-300'} ${BILL_STATUS_THEME[activeBill.status]?.border || 'border-slate-700'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "ISSUED",
                                                                    className: "jsx-6310dafa82202c51" + " " + "bg-slate-900 text-amber-300 font-medium",
                                                                    children: "ISSUED"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2024,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "PAID",
                                                                    className: "jsx-6310dafa82202c51" + " " + "bg-slate-900 text-emerald-300 font-medium",
                                                                    children: "PAID"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2025,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "PARTIAL",
                                                                    className: "jsx-6310dafa82202c51" + " " + "bg-slate-900 text-cyan-300 font-medium",
                                                                    children: "PARTIAL"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2026,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "DRAFT",
                                                                    className: "jsx-6310dafa82202c51" + " " + "bg-slate-900 text-slate-300 font-medium",
                                                                    children: "DRAFT"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2027,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "CANCELLED",
                                                                    className: "jsx-6310dafa82202c51" + " " + "bg-slate-900 text-rose-300 font-medium",
                                                                    children: "CANCELLED"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2028,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2011,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6310dafa82202c51" + " " + `w-1.5 h-1.5 rounded-full absolute left-2 pointer-events-none ${BILL_STATUS_THEME[activeBill.status]?.dot || 'bg-slate-400'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2030,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "w-2.5 h-2.5 absolute right-1.5 pointer-events-none opacity-60"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2035,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2010,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2004,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2003,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 1963,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6310dafa82202c51" + " " + "flex flex-wrap items-center gap-3",
                                children: [
                                    previewDocType === 'CHALLAN' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleOpenSerialsModal,
                                                title: "Edit or assign product serial numbers (S/N) and part numbers (P/N) for this Challan",
                                                className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/35 rounded-lg text-xs font-semibold transition active:scale-95 shadow-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                        className: "w-3.5 h-3.5 text-amber-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2051,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Serials & Part Nos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2052,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2045,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-1.5 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-6310dafa82202c51" + " " + "text-slate-400 hidden xl:inline",
                                                        children: "Dispatch:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2055,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: challanDeliveryMethod,
                                                        onChange: (e)=>setChallanDeliveryMethod(e.target.value),
                                                        className: "jsx-6310dafa82202c51" + " " + "px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Office Delivery Staff / By Hand",
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Office Staff / By Hand"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2061,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Company Delivery Van",
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Company Delivery Van"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2062,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Pickup / Dedicated Transport",
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Dedicated Transport"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2063,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Sundarban Courier Service",
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Sundarban Courier"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2064,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "SA Paribahan Courier",
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "SA Paribahan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2065,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Steadfast Courier",
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Steadfast Courier"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2066,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Customer Self-Pickup",
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Customer Self-Pickup"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2067,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2056,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2054,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: challanTransportNo,
                                                onChange: (e)=>setChallanTransportNo(e.target.value),
                                                placeholder: "Vehicle / Memo # (optional)",
                                                className: "jsx-6310dafa82202c51" + " " + "px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 text-xs placeholder-slate-600 w-36"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2070,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer select-none px-2 py-1 bg-slate-950 rounded-lg border border-slate-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: challanShowPrices,
                                                        onChange: (e)=>setChallanShowPrices(e.target.checked),
                                                        className: "jsx-6310dafa82202c51" + " " + "rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2078,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Show Prices"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2084,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2077,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6310dafa82202c51" + " " + "flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setUsePreprintedPadMode(true),
                                                className: "jsx-6310dafa82202c51" + " " + `px-3 py-1.5 rounded-lg font-semibold transition ${usePreprintedPadMode ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`,
                                                children: "Pre-Printed Pad (No Header)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2091,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setUsePreprintedPadMode(false),
                                                className: "jsx-6310dafa82202c51" + " " + `px-3 py-1.5 rounded-lg font-semibold transition ${!usePreprintedPadMode ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`,
                                                children: "Plain White Paper"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2102,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2090,
                                        columnNumber: 15
                                    }, this),
                                    usePreprintedPadMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-2 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-6310dafa82202c51" + " " + "text-slate-400 hidden md:inline",
                                                children: "Pad Spacing:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2118,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: padTopMarginMm,
                                                onChange: (e)=>setPadTopMarginMm(Number(e.target.value)),
                                                className: "jsx-6310dafa82202c51" + " " + "px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 font-mono text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: 35,
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "35 mm (Compact Pad)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2124,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: 45,
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "45 mm (Standard Pad)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2125,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: 55,
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "55 mm (Tall Header Pad)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2126,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: 65,
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "65 mm (Large Pad)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2127,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2119,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2117,
                                        columnNumber: 17
                                    }, this),
                                    activeBill.poAttachment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleOpenPOViewer(activeBill),
                                        title: `View attached Customer PO: ${activeBill.poAttachment.name}`,
                                        className: "jsx-6310dafa82202c51" + " " + "px-3.5 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-xl text-xs font-semibold transition flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2140,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-6310dafa82202c51",
                                                children: "PO Doc"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2141,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2134,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleOpenQuickAttach(activeBill),
                                        title: "Attach Customer PO document",
                                        className: "jsx-6310dafa82202c51" + " " + "px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2150,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-6310dafa82202c51",
                                                children: "Attach PO"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2151,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2144,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleOpenEditModal(activeBill),
                                        className: "jsx-6310dafa82202c51" + " " + "px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2161,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-6310dafa82202c51",
                                                children: "Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2162,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handlePrintBill,
                                        className: "jsx-6310dafa82202c51" + " " + `flex items-center gap-2 px-5 py-2 active:scale-95 text-white rounded-xl text-xs font-bold shadow-lg transition-all ${previewDocType === 'CHALLAN' ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-600/30' : 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2175,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-6310dafa82202c51",
                                                children: previewDocType === 'CHALLAN' ? 'Print Delivery Challan (A4)' : 'Print Bill to Pad (A4)'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2176,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2166,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 2041,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                        lineNumber: 1962,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6310dafa82202c51" + " " + `p-3.5 rounded-xl text-xs flex items-start gap-2.5 no-print border ${previewDocType === 'CHALLAN' ? 'bg-blue-950/30 border-blue-500/20 text-blue-300' : 'bg-emerald-950/30 border-emerald-500/20 text-emerald-400'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                className: "w-4 h-4 flex-shrink-0 mt-0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 2187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6310dafa82202c51",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-6310dafa82202c51" + " " + "font-semibold",
                                        children: previewDocType === 'CHALLAN' ? 'Official Delivery Challan (চালান) Notice:' : 'Company Pad Printing Notice:'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2189,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-6310dafa82202c51" + " " + "text-[11px] mt-0.5 opacity-90",
                                        children: previewDocType === 'CHALLAN' ? 'Delivery Challan serves as official goods handover & gate pass proof with customer receiving seal & sign. Use "Pre-Printed Pad" mode to print on official letterhead pad, or "Plain White Paper" mode for full digital header.' : 'This document is designed for your printed company pad (No digital logo, no watermark, and no footer). When clicking "Print to Pad (A4)", select A4 paper and Margins: Default / None.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2192,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 2188,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                        lineNumber: 2182,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6310dafa82202c51" + " " + "w-full overflow-x-auto touch-scroll pb-12 flex justify-start sm:justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "printable-bill-invoice",
                            style: {
                                width: '210mm',
                                minHeight: 'auto',
                                boxSizing: 'border-box',
                                backgroundColor: '#ffffff',
                                color: '#000000',
                                paddingTop: usePreprintedPadMode ? `${padTopMarginMm}mm` : '10mm',
                                paddingLeft: '14mm',
                                paddingRight: '14mm',
                                paddingBottom: '10mm',
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif'
                            },
                            className: "jsx-6310dafa82202c51" + " " + "shadow-2xl rounded-sm text-black select-text relative print:shadow-none print:w-full print:m-0 print:p-0",
                            children: previewDocType === 'CHALLAN' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    !usePreprintedPadMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            borderBottom: '2px solid #000',
                                            paddingBottom: '8px',
                                            marginBottom: '14px'
                                        },
                                        className: "jsx-6310dafa82202c51",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start'
                                            },
                                            className: "jsx-6310dafa82202c51",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            style: {
                                                                fontSize: '22px',
                                                                fontWeight: '900',
                                                                margin: '0 0 2px 0',
                                                                letterSpacing: '-0.5px'
                                                            },
                                                            className: "jsx-6310dafa82202c51",
                                                            children: "GLOBO TECH"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2228,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: '11px',
                                                                fontWeight: '600',
                                                                margin: '0',
                                                                color: '#333'
                                                            },
                                                            className: "jsx-6310dafa82202c51",
                                                            children: "Enterprise Supply & Engineering Solutions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2231,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: '10px',
                                                                color: '#555',
                                                                margin: '2px 0 0 0'
                                                            },
                                                            className: "jsx-6310dafa82202c51",
                                                            children: "Dhaka, Bangladesh | Phone: +880 1711-223344 | Email: info@globotechbd.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2234,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2227,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        textAlign: 'right',
                                                        fontSize: '11px',
                                                        color: '#444'
                                                    },
                                                    className: "jsx-6310dafa82202c51",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                margin: '0'
                                                            },
                                                            className: "jsx-6310dafa82202c51",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "jsx-6310dafa82202c51",
                                                                    children: "BIN:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2239,
                                                                    columnNumber: 54
                                                                }, this),
                                                                " 004728009-0202"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2239,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                margin: '2px 0 0 0'
                                                            },
                                                            className: "jsx-6310dafa82202c51",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "jsx-6310dafa82202c51",
                                                                    children: "TIN:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2240,
                                                                    columnNumber: 62
                                                                }, this),
                                                                " 169493772750"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2240,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2238,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2226,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2225,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            marginBottom: '14px'
                                        },
                                        className: "jsx-6310dafa82202c51",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    paddingTop: '2px'
                                                },
                                                className: "jsx-6310dafa82202c51",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        border: '2.5px solid #000',
                                                        padding: '6px 20px',
                                                        display: 'inline-block',
                                                        backgroundColor: '#fff'
                                                    },
                                                    className: "jsx-6310dafa82202c51",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '20px',
                                                                fontWeight: '900',
                                                                letterSpacing: '0.8px',
                                                                color: '#000',
                                                                display: 'block',
                                                                lineHeight: 1.1
                                                            },
                                                            className: "jsx-6310dafa82202c51",
                                                            children: "DELIVERY CHALLAN"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2251,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '11px',
                                                                fontWeight: '700',
                                                                color: '#444',
                                                                display: 'block',
                                                                marginTop: '2px',
                                                                textAlign: 'center'
                                                            },
                                                            className: "jsx-6310dafa82202c51",
                                                            children: "ডেলিভারি চালান"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2254,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2250,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2249,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    textAlign: 'right',
                                                    fontSize: '12px',
                                                    lineHeight: '1.4',
                                                    fontWeight: '500',
                                                    color: '#000'
                                                },
                                                className: "jsx-6310dafa82202c51",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Challan NO:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2262,
                                                                columnNumber: 28
                                                            }, this),
                                                            " DC/",
                                                            activeBill.billNo.replace('GT/', '')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2262,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Challan Date:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2263,
                                                                columnNumber: 28
                                                            }, this),
                                                            " ",
                                                            activeBill.date
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2263,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Bill/Inv Ref:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2264,
                                                                columnNumber: 28
                                                            }, this),
                                                            " ",
                                                            activeBill.billNo
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2264,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Customer PO:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2265,
                                                                columnNumber: 28
                                                            }, this),
                                                            " ",
                                                            activeBill.poNumber || '—'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2265,
                                                        columnNumber: 23
                                                    }, this),
                                                    activeBill.quotationRef && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Quote Ref:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2266,
                                                                columnNumber: 56
                                                            }, this),
                                                            " ",
                                                            activeBill.quotationRef
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2266,
                                                        columnNumber: 51
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Dispatch Mode:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2267,
                                                                columnNumber: 28
                                                            }, this),
                                                            " ",
                                                            challanDeliveryMethod
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2267,
                                                        columnNumber: 23
                                                    }, this),
                                                    challanTransportNo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Vehicle/Memo:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2268,
                                                                columnNumber: 51
                                                            }, this),
                                                            " ",
                                                            challanTransportNo
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2268,
                                                        columnNumber: 46
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2261,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2247,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: '14px',
                                            fontSize: '12px',
                                            color: '#000'
                                        },
                                        className: "jsx-6310dafa82202c51",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '56%'
                                                },
                                                className: "jsx-6310dafa82202c51",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 'bold',
                                                            fontSize: '13px',
                                                            borderBottom: '1.5px solid #000',
                                                            paddingBottom: '3px',
                                                            marginBottom: '5px',
                                                            display: 'inline-block',
                                                            minWidth: '130px'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Consignee (Bill To)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2276,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            lineHeight: '1.4'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: "Name:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2280,
                                                                        columnNumber: 30
                                                                    }, this),
                                                                    " ",
                                                                    activeBill.billToName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2280,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    marginTop: '2px'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: "Address:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2281,
                                                                        columnNumber: 59
                                                                    }, this),
                                                                    " ",
                                                                    activeBill.billToAddress
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2281,
                                                                columnNumber: 25
                                                            }, this),
                                                            activeBill.binNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    marginTop: '2px'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: "BIN:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2282,
                                                                        columnNumber: 84
                                                                    }, this),
                                                                    " ",
                                                                    activeBill.binNumber
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2282,
                                                                columnNumber: 50
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2279,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2275,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '38%'
                                                },
                                                className: "jsx-6310dafa82202c51",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 'bold',
                                                            fontSize: '13px',
                                                            borderBottom: '1.5px solid #000',
                                                            paddingBottom: '3px',
                                                            marginBottom: '5px',
                                                            display: 'inline-block',
                                                            minWidth: '130px'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Delivery Destination"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2288,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            lineHeight: '1.4'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: "Address:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2292,
                                                                        columnNumber: 30
                                                                    }, this),
                                                                    " ",
                                                                    activeBill.deliverToAddress || '—'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2292,
                                                                columnNumber: 25
                                                            }, this),
                                                            activeBill.deliverToName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    marginTop: '2px'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: "Contact Person:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2294,
                                                                        columnNumber: 61
                                                                    }, this),
                                                                    " ",
                                                                    activeBill.deliverToName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2294,
                                                                columnNumber: 27
                                                            }, this),
                                                            activeBill.deliverToPhone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    marginTop: '2px'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: "Phone No:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2297,
                                                                        columnNumber: 61
                                                                    }, this),
                                                                    " ",
                                                                    activeBill.deliverToPhone
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2297,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2291,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2287,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2273,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: '12px'
                                        },
                                        className: "jsx-6310dafa82202c51",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            style: {
                                                width: '100%',
                                                borderCollapse: 'collapse',
                                                border: '1px solid #000',
                                                fontSize: '12px',
                                                color: '#000'
                                            },
                                            className: "jsx-6310dafa82202c51",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            borderBottom: '1px solid #000',
                                                            backgroundColor: '#fcfcfc'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    borderRight: '1px solid #000',
                                                                    padding: '7px 4px',
                                                                    width: '34px',
                                                                    textAlign: 'center',
                                                                    fontWeight: 'bold'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "SL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2308,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    borderRight: '1px solid #000',
                                                                    padding: '7px 8px',
                                                                    textAlign: 'left',
                                                                    width: challanShowPrices ? '130px' : '180px',
                                                                    fontWeight: 'bold'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Item Name & Part No"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2309,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    borderRight: '1px solid #000',
                                                                    padding: '7px 8px',
                                                                    textAlign: 'left',
                                                                    fontWeight: 'bold'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Description & Serial Numbers (S/N)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2310,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    borderRight: '1px solid #000',
                                                                    padding: '7px 4px',
                                                                    width: '48px',
                                                                    textAlign: 'center',
                                                                    fontWeight: 'bold'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Unit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2311,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    borderRight: '1px solid #000',
                                                                    padding: '7px 4px',
                                                                    width: '50px',
                                                                    textAlign: 'center',
                                                                    fontWeight: 'bold'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Delivered Qty"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2312,
                                                                columnNumber: 27
                                                            }, this),
                                                            challanShowPrices && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            borderRight: '1px solid #000',
                                                                            padding: '7px 6px',
                                                                            width: '90px',
                                                                            textAlign: 'right',
                                                                            fontWeight: 'bold'
                                                                        },
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: "Unit Price"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2315,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            borderRight: '1px solid #000',
                                                                            padding: '7px 6px',
                                                                            width: '95px',
                                                                            textAlign: 'right',
                                                                            fontWeight: 'bold'
                                                                        },
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: "Amount"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2316,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    padding: '7px 6px',
                                                                    width: challanShowPrices ? '100px' : '130px',
                                                                    textAlign: 'center',
                                                                    fontWeight: 'bold'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Remarks / Condition"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2319,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2307,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2306,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: activeBill.items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            style: {
                                                                borderBottom: '1px solid #000',
                                                                verticalAlign: 'top',
                                                                pageBreakInside: 'avoid',
                                                                breakInside: 'avoid'
                                                            },
                                                            className: "jsx-6310dafa82202c51",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderRight: '1px solid #000',
                                                                        padding: '6.5px 4px',
                                                                        textAlign: 'center',
                                                                        fontWeight: '500'
                                                                    },
                                                                    className: "jsx-6310dafa82202c51",
                                                                    children: idx + 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2325,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderRight: '1px solid #000',
                                                                        padding: '6.5px 8px'
                                                                    },
                                                                    className: "jsx-6310dafa82202c51",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontWeight: 'bold',
                                                                                fontSize: '12.5px'
                                                                            },
                                                                            className: "jsx-6310dafa82202c51",
                                                                            children: item.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 2329,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        item.partNo && item.partNo.trim().toLowerCase() !== item.name.trim().toLowerCase() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                marginTop: '3px',
                                                                                fontSize: '10.5px',
                                                                                color: '#111'
                                                                            },
                                                                            className: "jsx-6310dafa82202c51",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontWeight: 'bold',
                                                                                        color: '#333'
                                                                                    },
                                                                                    className: "jsx-6310dafa82202c51",
                                                                                    children: "P/N:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                    lineNumber: 2332,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                ' ',
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontFamily: 'monospace',
                                                                                        fontWeight: 'bold',
                                                                                        backgroundColor: '#f1f5f9',
                                                                                        padding: '1px 5px',
                                                                                        borderRadius: '3px',
                                                                                        border: '1px solid #cbd5e1'
                                                                                    },
                                                                                    className: "jsx-6310dafa82202c51",
                                                                                    children: item.partNo
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                    lineNumber: 2333,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 2331,
                                                                            columnNumber: 33
                                                                        }, this) : null
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2328,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderRight: '1px solid #000',
                                                                        padding: '6.5px 8px',
                                                                        lineHeight: '1.4'
                                                                    },
                                                                    className: "jsx-6310dafa82202c51",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-6310dafa82202c51",
                                                                            children: item.description || item.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 2340,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        item.serialNumbers ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                marginTop: '4px',
                                                                                padding: '3px 6px',
                                                                                backgroundColor: '#f8fafc',
                                                                                border: '1px dashed #64748b',
                                                                                borderRadius: '4px',
                                                                                fontSize: '11px',
                                                                                color: '#0f172a'
                                                                            },
                                                                            className: "jsx-6310dafa82202c51",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    style: {
                                                                                        color: '#0f172a'
                                                                                    },
                                                                                    className: "jsx-6310dafa82202c51",
                                                                                    children: "S/N (Serial No):"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                    lineNumber: 2343,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                ' ',
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontFamily: 'monospace',
                                                                                        fontWeight: 'bold',
                                                                                        color: '#0f172a',
                                                                                        wordBreak: 'break-word'
                                                                                    },
                                                                                    className: "jsx-6310dafa82202c51",
                                                                                    children: item.serialNumbers
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                    lineNumber: 2344,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 2342,
                                                                            columnNumber: 33
                                                                        }, this) : null
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2339,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderRight: '1px solid #000',
                                                                        padding: '6.5px 4px',
                                                                        textAlign: 'center'
                                                                    },
                                                                    className: "jsx-6310dafa82202c51",
                                                                    children: item.unit
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2350,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderRight: '1px solid #000',
                                                                        padding: '6.5px 4px',
                                                                        textAlign: 'center',
                                                                        fontWeight: 'bold',
                                                                        fontSize: '12.5px'
                                                                    },
                                                                    className: "jsx-6310dafa82202c51",
                                                                    children: item.quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2353,
                                                                    columnNumber: 29
                                                                }, this),
                                                                challanShowPrices && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                borderRight: '1px solid #000',
                                                                                padding: '6.5px 6px',
                                                                                textAlign: 'right',
                                                                                fontWeight: '500'
                                                                            },
                                                                            className: "jsx-6310dafa82202c51",
                                                                            children: Number(item.unitPrice).toLocaleString('en-US', {
                                                                                minimumFractionDigits: 2,
                                                                                maximumFractionDigits: 2
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 2358,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                borderRight: '1px solid #000',
                                                                                padding: '6.5px 6px',
                                                                                textAlign: 'right',
                                                                                fontWeight: 'bold'
                                                                            },
                                                                            className: "jsx-6310dafa82202c51",
                                                                            children: Number(item.amount).toLocaleString('en-US', {
                                                                                minimumFractionDigits: 2,
                                                                                maximumFractionDigits: 2
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 2364,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: '6.5px 6px',
                                                                        textAlign: 'center',
                                                                        fontSize: '11px',
                                                                        color: '#444'
                                                                    },
                                                                    className: "jsx-6310dafa82202c51",
                                                                    children: "Intact & Sound"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2372,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, item.id, true, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2324,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2322,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            backgroundColor: '#fcfcfc',
                                                            borderTop: '2px solid #000',
                                                            pageBreakInside: 'avoid',
                                                            breakInside: 'avoid'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                colSpan: challanShowPrices ? 4 : 4,
                                                                style: {
                                                                    padding: '7px 10px',
                                                                    fontWeight: 'bold',
                                                                    textAlign: 'right',
                                                                    borderRight: '1px solid #000'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Total Delivered Quantity:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2380,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '7px 4px',
                                                                    fontWeight: 'bold',
                                                                    textAlign: 'center',
                                                                    borderRight: '1px solid #000',
                                                                    fontSize: '13px'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: activeBill.items.reduce((sum, it)=>sum + (Number(it.quantity) || 0), 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2383,
                                                                columnNumber: 27
                                                            }, this),
                                                            challanShowPrices && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderRight: '1px solid #000',
                                                                            padding: '7px 6px',
                                                                            textAlign: 'right',
                                                                            fontWeight: 'bold'
                                                                        },
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: "Grand Total:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2388,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderRight: '1px solid #000',
                                                                            padding: '7px 6px',
                                                                            textAlign: 'right',
                                                                            fontWeight: 'bold'
                                                                        },
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: Number(activeBill.grandTotal).toLocaleString('en-US', {
                                                                            minimumFractionDigits: 2,
                                                                            maximumFractionDigits: 2
                                                                        })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2391,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '7px 6px',
                                                                    textAlign: 'center',
                                                                    fontSize: '11px',
                                                                    fontWeight: '600'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    activeBill.items.length,
                                                                    " ",
                                                                    activeBill.items.length === 1 ? 'Line Item' : 'Line Items'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2396,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2379,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2378,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2305,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2304,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            border: '1px solid #000',
                                            padding: '8px 12px',
                                            marginBottom: '16px',
                                            fontSize: '11px',
                                            lineHeight: '1.45',
                                            color: '#000',
                                            pageBreakInside: 'avoid',
                                            breakInside: 'avoid'
                                        },
                                        className: "jsx-6310dafa82202c51",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: 'bold',
                                                    fontSize: '11.5px',
                                                    marginBottom: '2px'
                                                },
                                                className: "jsx-6310dafa82202c51",
                                                children: "Delivery & Handover Declaration / চালানের শর্তাবলী:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2406,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6310dafa82202c51",
                                                children: "1. Received the above-mentioned goods and supplies in sound condition, correct quantity, and intact packaging."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2409,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6310dafa82202c51",
                                                children: "2. Warranty claims are subject to physical inspection and verification of intact serial numbers and warranty stickers."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2410,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6310dafa82202c51",
                                                children: "3. Any discrepancy must be reported within 24 hours of delivery handover."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2411,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2405,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(4, 1fr)',
                                            gap: '15px',
                                            marginTop: '30px',
                                            fontSize: '11px',
                                            fontWeight: 'bold',
                                            color: '#000',
                                            textAlign: 'center',
                                            pageBreakInside: 'avoid',
                                            breakInside: 'avoid'
                                        },
                                        className: "jsx-6310dafa82202c51",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6310dafa82202c51",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderTop: '1.5px solid #000',
                                                            paddingTop: '5px'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Prepared By"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2417,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '10px',
                                                            fontWeight: 'normal',
                                                            color: '#555',
                                                            marginTop: '2px'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: activeBill.preparedBy || 'Engr. Sohel Rana'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2420,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2416,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6310dafa82202c51",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderTop: '1.5px solid #000',
                                                            paddingTop: '5px'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Store Checked By"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2426,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '10px',
                                                            fontWeight: 'normal',
                                                            color: '#555',
                                                            marginTop: '2px'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Warehouse In-Charge"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2429,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2425,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6310dafa82202c51",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderTop: '1.5px solid #000',
                                                            paddingTop: '5px'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Delivered By"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2435,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '10px',
                                                            fontWeight: 'normal',
                                                            color: '#555',
                                                            marginTop: '2px'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Driver / Carrier Sign"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2438,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2434,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6310dafa82202c51",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderTop: '2px solid #000',
                                                            paddingTop: '5px'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Received By"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2444,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '10px',
                                                            fontWeight: 'normal',
                                                            color: '#555',
                                                            marginTop: '2px'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Customer Seal & Signature"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2447,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2443,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2415,
                                        columnNumber: 19
                                    }, this),
                                    !usePreprintedPadMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            borderTop: '1px solid #ddd',
                                            paddingTop: '8px',
                                            marginTop: '16px',
                                            textAlign: 'center',
                                            fontSize: '10px',
                                            color: '#777',
                                            pageBreakInside: 'avoid',
                                            breakInside: 'avoid'
                                        },
                                        className: "jsx-6310dafa82202c51",
                                        children: "Official Delivery Challan • Globo Tech • Motijheel, Dhaka"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2455,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    !usePreprintedPadMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            borderBottom: '2px solid #000',
                                            paddingBottom: '8px',
                                            marginBottom: '14px'
                                        },
                                        className: "jsx-6310dafa82202c51",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start'
                                            },
                                            className: "jsx-6310dafa82202c51",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            style: {
                                                                fontSize: '22px',
                                                                fontWeight: '900',
                                                                margin: '0 0 2px 0',
                                                                letterSpacing: '-0.5px'
                                                            },
                                                            className: "jsx-6310dafa82202c51",
                                                            children: "GLOBO TECH"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2467,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: '11px',
                                                                fontWeight: '600',
                                                                margin: '0',
                                                                color: '#333'
                                                            },
                                                            className: "jsx-6310dafa82202c51",
                                                            children: "Enterprise Supply & Engineering Solutions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2470,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: '10px',
                                                                color: '#555',
                                                                margin: '2px 0 0 0'
                                                            },
                                                            className: "jsx-6310dafa82202c51",
                                                            children: "Dhaka, Bangladesh | Phone: +880 1711-223344 | Email: info@globotechbd.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2473,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2466,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        textAlign: 'right',
                                                        fontSize: '11px',
                                                        color: '#444'
                                                    },
                                                    className: "jsx-6310dafa82202c51",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                margin: '0'
                                                            },
                                                            className: "jsx-6310dafa82202c51",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "jsx-6310dafa82202c51",
                                                                    children: "BIN:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2478,
                                                                    columnNumber: 54
                                                                }, this),
                                                                " 004728009-0202"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2478,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                margin: '2px 0 0 0'
                                                            },
                                                            className: "jsx-6310dafa82202c51",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "jsx-6310dafa82202c51",
                                                                    children: "TIN:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2479,
                                                                    columnNumber: 62
                                                                }, this),
                                                                " 169493772750"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2479,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2477,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2465,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2464,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            marginBottom: '14px'
                                        },
                                        className: "jsx-6310dafa82202c51",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    paddingTop: '2px'
                                                },
                                                className: "jsx-6310dafa82202c51",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        border: '2.5px solid #000',
                                                        padding: '6px 20px',
                                                        display: 'inline-block',
                                                        backgroundColor: '#fff'
                                                    },
                                                    className: "jsx-6310dafa82202c51",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '20px',
                                                            fontWeight: '900',
                                                            letterSpacing: '0.8px',
                                                            color: '#000',
                                                            display: 'block',
                                                            lineHeight: 1.1
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Bill Invoice"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2490,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2489,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2488,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    textAlign: 'right',
                                                    fontSize: '12px',
                                                    lineHeight: '1.4',
                                                    fontWeight: '500',
                                                    color: '#000'
                                                },
                                                className: "jsx-6310dafa82202c51",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Date:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2498,
                                                                columnNumber: 28
                                                            }, this),
                                                            " ",
                                                            activeBill.date
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2498,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Bill NO:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2499,
                                                                columnNumber: 28
                                                            }, this),
                                                            " ",
                                                            activeBill.billNo
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2499,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "PO :"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2500,
                                                                columnNumber: 28
                                                            }, this),
                                                            " ",
                                                            activeBill.poNumber || '—'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2500,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "BIN:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2501,
                                                                columnNumber: 28
                                                            }, this),
                                                            " ",
                                                            activeBill.binNumber || '004728009-0202'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2501,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "TIN:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2502,
                                                                columnNumber: 28
                                                            }, this),
                                                            " ",
                                                            activeBill.tinNumber || '169493772750'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2502,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2497,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2486,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: '14px',
                                            fontSize: '12px',
                                            color: '#000'
                                        },
                                        className: "jsx-6310dafa82202c51",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '58%'
                                                },
                                                className: "jsx-6310dafa82202c51",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 'bold',
                                                            fontSize: '13px',
                                                            borderBottom: '1.5px solid #000',
                                                            paddingBottom: '3px',
                                                            marginBottom: '5px',
                                                            display: 'inline-block',
                                                            minWidth: '120px'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Bill To"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2510,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            lineHeight: '1.4'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: "Name:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2514,
                                                                        columnNumber: 30
                                                                    }, this),
                                                                    " ",
                                                                    activeBill.billToName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2514,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    marginTop: '2px'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: "Address:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2515,
                                                                        columnNumber: 59
                                                                    }, this),
                                                                    " ",
                                                                    activeBill.billToAddress
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2515,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2513,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2509,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '34%'
                                                },
                                                className: "jsx-6310dafa82202c51",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 'bold',
                                                            fontSize: '13px',
                                                            borderBottom: '1.5px solid #000',
                                                            paddingBottom: '3px',
                                                            marginBottom: '5px',
                                                            display: 'inline-block',
                                                            minWidth: '120px'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Deliver To"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2521,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            lineHeight: '1.4'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: "Address:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2525,
                                                                        columnNumber: 30
                                                                    }, this),
                                                                    " ",
                                                                    activeBill.deliverToAddress || '—'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2525,
                                                                columnNumber: 25
                                                            }, this),
                                                            activeBill.deliverToName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    marginTop: '2px'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: "Name:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2527,
                                                                        columnNumber: 61
                                                                    }, this),
                                                                    " ",
                                                                    activeBill.deliverToName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2527,
                                                                columnNumber: 27
                                                            }, this),
                                                            activeBill.deliverToPhone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    marginTop: '2px'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: "Phone No:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2530,
                                                                        columnNumber: 61
                                                                    }, this),
                                                                    " ",
                                                                    activeBill.deliverToPhone
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2530,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2524,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2520,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2507,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: '12px'
                                        },
                                        className: "jsx-6310dafa82202c51",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            style: {
                                                width: '100%',
                                                borderCollapse: 'collapse',
                                                border: '1px solid #000',
                                                fontSize: '12px',
                                                color: '#000'
                                            },
                                            className: "jsx-6310dafa82202c51",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            borderBottom: '1px solid #000',
                                                            backgroundColor: '#fcfcfc'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    borderRight: '1px solid #000',
                                                                    padding: '7px 4px',
                                                                    width: '34px',
                                                                    textAlign: 'center',
                                                                    fontWeight: 'bold'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "SN"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2541,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    borderRight: '1px solid #000',
                                                                    padding: '7px 8px',
                                                                    textAlign: 'left',
                                                                    width: '125px',
                                                                    fontWeight: 'bold'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Item name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2542,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    borderRight: '1px solid #000',
                                                                    padding: '7px 8px',
                                                                    textAlign: 'left',
                                                                    fontWeight: 'bold'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Description"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2543,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    borderRight: '1px solid #000',
                                                                    padding: '7px 4px',
                                                                    width: '48px',
                                                                    textAlign: 'center',
                                                                    fontWeight: 'bold'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Unit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2544,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    borderRight: '1px solid #000',
                                                                    padding: '7px 4px',
                                                                    width: '44px',
                                                                    textAlign: 'center',
                                                                    fontWeight: 'bold'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Qty"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2545,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    borderRight: '1px solid #000',
                                                                    padding: '7px 6px',
                                                                    width: '90px',
                                                                    textAlign: 'right',
                                                                    fontWeight: 'bold'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Unit Price"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2546,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    padding: '7px 6px',
                                                                    width: '98px',
                                                                    textAlign: 'right',
                                                                    fontWeight: 'bold'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Amount"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2547,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2540,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2539,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: activeBill.items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            style: {
                                                                borderBottom: '1px solid #000',
                                                                verticalAlign: 'top',
                                                                pageBreakInside: 'avoid',
                                                                breakInside: 'avoid'
                                                            },
                                                            className: "jsx-6310dafa82202c51",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderRight: '1px solid #000',
                                                                        padding: '6.5px 4px',
                                                                        textAlign: 'center',
                                                                        fontWeight: '500'
                                                                    },
                                                                    className: "jsx-6310dafa82202c51",
                                                                    children: idx + 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2553,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderRight: '1px solid #000',
                                                                        padding: '6.5px 8px'
                                                                    },
                                                                    className: "jsx-6310dafa82202c51",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontWeight: 'bold'
                                                                        },
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: item.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2557,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2556,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderRight: '1px solid #000',
                                                                        padding: '6.5px 8px',
                                                                        lineHeight: '1.35'
                                                                    },
                                                                    className: "jsx-6310dafa82202c51",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-6310dafa82202c51",
                                                                            children: item.description || item.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 2560,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        item.serialNumbers ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: '10px',
                                                                                color: '#555',
                                                                                marginTop: '3px'
                                                                            },
                                                                            className: "jsx-6310dafa82202c51",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontWeight: '600'
                                                                                    },
                                                                                    className: "jsx-6310dafa82202c51",
                                                                                    children: "S/N:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                    lineNumber: 2563,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                " ",
                                                                                item.serialNumbers
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 2562,
                                                                            columnNumber: 33
                                                                        }, this) : null
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2559,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderRight: '1px solid #000',
                                                                        padding: '6.5px 4px',
                                                                        textAlign: 'center'
                                                                    },
                                                                    className: "jsx-6310dafa82202c51",
                                                                    children: item.unit
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2567,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderRight: '1px solid #000',
                                                                        padding: '6.5px 4px',
                                                                        textAlign: 'center',
                                                                        fontWeight: 'bold'
                                                                    },
                                                                    className: "jsx-6310dafa82202c51",
                                                                    children: item.quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2570,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderRight: '1px solid #000',
                                                                        padding: '6.5px 6px',
                                                                        textAlign: 'right',
                                                                        fontWeight: '500'
                                                                    },
                                                                    className: "jsx-6310dafa82202c51",
                                                                    children: Number(item.unitPrice).toLocaleString('en-US', {
                                                                        minimumFractionDigits: 2,
                                                                        maximumFractionDigits: 2
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2573,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        padding: '6.5px 6px',
                                                                        textAlign: 'right',
                                                                        fontWeight: 'bold'
                                                                    },
                                                                    className: "jsx-6310dafa82202c51",
                                                                    children: Number(item.amount).toLocaleString('en-US', {
                                                                        minimumFractionDigits: 2,
                                                                        maximumFractionDigits: 2
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 2579,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, item.id, true, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2552,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2550,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2538,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2537,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'stretch',
                                            marginBottom: '14px',
                                            fontSize: '12px',
                                            color: '#000',
                                            pageBreakInside: 'avoid',
                                            breakInside: 'avoid'
                                        },
                                        className: "jsx-6310dafa82202c51",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '58%',
                                                    border: '1px solid #000',
                                                    padding: '8px 12px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center'
                                                },
                                                className: "jsx-6310dafa82202c51",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 'bold',
                                                            fontSize: '12px',
                                                            marginBottom: '3px'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Amount In Word"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2595,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '12px',
                                                            fontWeight: '500',
                                                            fontStyle: 'italic',
                                                            lineHeight: '1.4'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: activeBill.amountInWords || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToWordsBDT"])(activeBill.grandTotal, 'BDT', {
                                                            style: 'suffix',
                                                            suffixUnit: 'Taka',
                                                            dotEnd: true
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2598,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2594,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '38%',
                                                    fontSize: '12px',
                                                    fontWeight: '600'
                                                },
                                                className: "jsx-6310dafa82202c51",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            padding: '4px 0',
                                                            borderBottom: '1px solid #000'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Sub Total"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2606,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: Number(activeBill.subTotal).toLocaleString('en-US', {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2607,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2605,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            padding: '4px 0',
                                                            borderBottom: '1px solid #000'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '6px'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: activeBill.vatTaxIncluded ? 'VAT & TAX Included' : 'VAT & TAX Excluded'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2617,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-6310dafa82202c51" + " " + "no-print print:hidden inline-flex items-center rounded bg-slate-100 border border-slate-300 p-0.5 ml-1 shadow-sm text-[10px]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>handleToggleBillVatMode('INCLUDED'),
                                                                                title: "Set VAT & TAX as Included in price",
                                                                                className: "jsx-6310dafa82202c51" + " " + `px-1.5 py-0.5 font-bold rounded transition cursor-pointer ${activeBill.vatTaxIncluded ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'}`,
                                                                                children: "Included"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                lineNumber: 2620,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>handleToggleBillVatMode('EXCLUDED'),
                                                                                title: "Set VAT & TAX as Excluded (Applicable Extra)",
                                                                                className: "jsx-6310dafa82202c51" + " " + `px-1.5 py-0.5 font-bold rounded transition cursor-pointer ${!activeBill.vatTaxIncluded ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'}`,
                                                                                children: "Excluded"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                lineNumber: 2632,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2619,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2616,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: activeBill.vatTaxIncluded ? '0.00' : activeBill.vatTaxAmount && activeBill.vatTaxAmount > 0 ? Number(activeBill.vatTaxAmount).toLocaleString('en-US', {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2
                                                                }) : '0.00'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2646,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2615,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            padding: '5px 0',
                                                            fontSize: '13px',
                                                            fontWeight: 'bold',
                                                            borderBottom: '3px double #000'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: "Grand Total"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2659,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: Number(activeBill.grandTotal).toLocaleString('en-US', {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2660,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2658,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2604,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2592,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: '18px',
                                            fontSize: '11.5px',
                                            color: '#000',
                                            pageBreakInside: 'avoid',
                                            breakInside: 'avoid'
                                        },
                                        className: "jsx-6310dafa82202c51",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '58%'
                                                },
                                                className: "jsx-6310dafa82202c51",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 'bold',
                                                            fontSize: '12px',
                                                            borderBottom: '1px solid #000',
                                                            paddingBottom: '2px',
                                                            marginBottom: '5px',
                                                            display: 'inline-block',
                                                            minWidth: '140px'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Terms & Conditions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2674,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            lineHeight: '1.5',
                                                            fontWeight: '500'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: activeBill.termsAndConditions.map((term, tIdx)=>{
                                                            const isVatLine = /vat\s*&?\s*tax/i.test(term);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '6px'
                                                                },
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: term
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2682,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    isVatLine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-6310dafa82202c51" + " " + "no-print print:hidden inline-flex items-center rounded bg-slate-100 border border-slate-300 p-0.5 shadow-sm text-[9px]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>handleToggleBillVatMode('INCLUDED'),
                                                                                title: "Set VAT & TAX as Included",
                                                                                className: "jsx-6310dafa82202c51" + " " + `px-1.5 py-0.2 rounded font-bold cursor-pointer transition ${activeBill.vatTaxIncluded ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'}`,
                                                                                children: "Included"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                lineNumber: 2685,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>handleToggleBillVatMode('EXCLUDED'),
                                                                                title: "Set VAT & TAX as Excluded",
                                                                                className: "jsx-6310dafa82202c51" + " " + `px-1.5 py-0.2 rounded font-bold cursor-pointer transition ${!activeBill.vatTaxIncluded ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'}`,
                                                                                children: "Excluded"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                lineNumber: 2695,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2684,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, tIdx, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2681,
                                                                columnNumber: 29
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2677,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2673,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '34%'
                                                },
                                                className: "jsx-6310dafa82202c51",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 'bold',
                                                            fontSize: '12px',
                                                            borderBottom: '1px solid #000',
                                                            paddingBottom: '2px',
                                                            marginBottom: '5px',
                                                            display: 'inline-block',
                                                            minWidth: '140px'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Payment Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2715,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            lineHeight: '1.45',
                                                            fontWeight: '500'
                                                        },
                                                        className: "jsx-6310dafa82202c51",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: "Account No :"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2719,
                                                                        columnNumber: 30
                                                                    }, this),
                                                                    " ",
                                                                    activeBill.bankAccountNo
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2719,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: "Account Title:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2720,
                                                                        columnNumber: 30
                                                                    }, this),
                                                                    " ",
                                                                    activeBill.bankAccountTitle
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2720,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: "Bank Name :"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2721,
                                                                        columnNumber: 30
                                                                    }, this),
                                                                    " ",
                                                                    activeBill.bankName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2721,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-6310dafa82202c51",
                                                                        children: "Branch Name:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 2722,
                                                                        columnNumber: 30
                                                                    }, this),
                                                                    " ",
                                                                    activeBill.bankBranchName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 2722,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2718,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2714,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2671,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginTop: '36px',
                                            fontSize: '12px',
                                            fontWeight: 'bold',
                                            color: '#000',
                                            pageBreakInside: 'avoid',
                                            breakInside: 'avoid'
                                        },
                                        className: "jsx-6310dafa82202c51",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    textAlign: 'center',
                                                    minWidth: '180px'
                                                },
                                                className: "jsx-6310dafa82202c51",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        borderTop: '1.5px solid #000',
                                                        paddingTop: '5px'
                                                    },
                                                    className: "jsx-6310dafa82202c51",
                                                    children: "Received By"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2730,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2729,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    textAlign: 'center',
                                                    minWidth: '180px'
                                                },
                                                className: "jsx-6310dafa82202c51",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        borderTop: '1.5px solid #000',
                                                        paddingTop: '5px'
                                                    },
                                                    className: "jsx-6310dafa82202c51",
                                                    children: "Prepared By"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2736,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2735,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2728,
                                        columnNumber: 19
                                    }, this),
                                    !usePreprintedPadMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            borderTop: '1px solid #ddd',
                                            paddingTop: '8px',
                                            marginTop: '16px',
                                            textAlign: 'center',
                                            fontSize: '10px',
                                            color: '#777',
                                            pageBreakInside: 'avoid',
                                            breakInside: 'avoid'
                                        },
                                        className: "jsx-6310dafa82202c51",
                                        children: "This is an electronically generated bill invoice. For questions, contact info@globotechbd.com."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2744,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                            lineNumber: 2202,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                        lineNumber: 2201,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                lineNumber: 1960,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isCreateModalOpen,
                onClose: ()=>setIsCreateModalOpen(false),
                title: editingBillId ? `Edit Bill Invoice (${formData.billNo})` : 'Create New Bill Invoice',
                size: "5xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSaveBill,
                    className: "jsx-6310dafa82202c51" + " " + "space-y-6 text-xs text-slate-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6310dafa82202c51" + " " + "p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-sky-950/40 border border-emerald-500/30 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-2 text-emerald-400 font-semibold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-4 h-4 text-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2769,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: "⚡ Dynamic Quotation Import (One-Click Auto Fill)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2770,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2768,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-6310dafa82202c51" + " " + "text-[11px] text-slate-400",
                                            children: "Select an approved quotation to instantly pull client, delivery, items & prices"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2772,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 2767,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51" + " " + "sm:col-span-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: selectedQuoteId,
                                                onChange: (e)=>{
                                                    const qId = e.target.value;
                                                    setSelectedQuoteId(qId);
                                                    if (qId) {
                                                        applyQuotationToForm(qId);
                                                    }
                                                },
                                                className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-2 bg-slate-950 border border-emerald-500/40 rounded-lg text-slate-100 text-xs focus:ring-1 focus:ring-emerald-500 font-medium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "-- Choose Quotation to Load Data --"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2790,
                                                        columnNumber: 19
                                                    }, this),
                                                    quotations.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: q.id,
                                                            className: "jsx-6310dafa82202c51",
                                                            children: [
                                                                q.quotationNumber,
                                                                " — ",
                                                                q.customerCompany || q.customerName,
                                                                " (",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(q.items?.reduce((s, it)=>s + it.quantity * it.unitPrice, 0) || 0),
                                                                ") [",
                                                                q.status,
                                                                "]"
                                                            ]
                                                        }, q.id, true, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2792,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2779,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2778,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    if (selectedQuoteId) {
                                                        applyQuotationToForm(selectedQuoteId);
                                                    } else {
                                                        alert('Please select a quotation from the dropdown first.');
                                                    }
                                                },
                                                className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition flex items-center justify-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2813,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-6310dafa82202c51",
                                                        children: "Import Data"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2814,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2802,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2801,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 2777,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                            lineNumber: 2766,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6310dafa82202c51" + " " + "grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51" + " " + "flex items-center justify-between mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-6310dafa82202c51" + " " + "block text-[11px] font-medium text-slate-300",
                                                    children: "Bill NO *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2824,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20",
                                                            children: "Auto"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2826,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                const nextNo = generateNextBillNo(bills);
                                                                setFormData((prev)=>({
                                                                        ...prev,
                                                                        billNo: nextNo
                                                                    }));
                                                            },
                                                            title: "Click to recalculate next sequential Bill NO",
                                                            className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-slate-400 hover:text-emerald-400 transition underline cursor-pointer",
                                                            children: "Reset"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2829,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2825,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2823,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            value: formData.billNo || '',
                                            onChange: (e)=>setFormData((prev)=>({
                                                        ...prev,
                                                        billNo: e.target.value
                                                    })),
                                            placeholder: "GT/26109",
                                            className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-1.5 bg-slate-950 border border-emerald-500/40 rounded-lg font-mono font-bold text-emerald-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs transition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2842,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 2822,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "jsx-6310dafa82202c51" + " " + "block text-[11px] font-medium text-slate-400 mb-1",
                                            children: "Date *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2852,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            value: formData.date || '',
                                            onChange: (e)=>setFormData((prev)=>({
                                                        ...prev,
                                                        date: e.target.value
                                                    })),
                                            placeholder: "23-Feb-26",
                                            className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 text-xs transition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2853,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 2851,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51" + " " + "flex items-center justify-between mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-6310dafa82202c51" + " " + "block text-[11px] font-medium text-slate-300",
                                                    children: "PO Number"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2864,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-sky-400 font-semibold bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20",
                                                    children: "Manual Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2865,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2863,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.poNumber || '',
                                            onChange: (e)=>setFormData((prev)=>({
                                                        ...prev,
                                                        poNumber: e.target.value
                                                    })),
                                            placeholder: "Type PO Number (e.g. POBD9729-1)",
                                            className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-1.5 bg-slate-950 border border-slate-700/80 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-mono text-xs transition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2869,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 2862,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "jsx-6310dafa82202c51" + " " + "block text-[11px] font-medium text-slate-400 mb-1",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2878,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: formData.status || 'ISSUED',
                                            onChange: (e)=>setFormData((prev)=>({
                                                        ...prev,
                                                        status: e.target.value
                                                    })),
                                            className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 text-xs transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "DRAFT",
                                                    className: "jsx-6310dafa82202c51",
                                                    children: "DRAFT"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2884,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ISSUED",
                                                    className: "jsx-6310dafa82202c51",
                                                    children: "ISSUED"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2885,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "PAID",
                                                    className: "jsx-6310dafa82202c51",
                                                    children: "PAID"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2886,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "PARTIAL",
                                                    className: "jsx-6310dafa82202c51",
                                                    children: "PARTIAL"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2887,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "CANCELLED",
                                                    className: "jsx-6310dafa82202c51",
                                                    children: "CANCELLED"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2888,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2879,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 2877,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                            lineNumber: 2821,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6310dafa82202c51" + " " + "bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "jsx-6310dafa82202c51" + " " + "text-xs font-semibold text-slate-200 flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                    className: "w-3.5 h-3.5 text-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2897,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: "Customer Purchase Order (PO) Attachment"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2898,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2896,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-slate-400",
                                            children: "Upload PDF, JPG, PNG scan / document (Max 6MB)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2900,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 2895,
                                    columnNumber: 13
                                }, this),
                                formData.poAttachment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-slate-950 rounded-lg border border-emerald-500/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6310dafa82202c51" + " " + "w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        className: "w-5 h-5 text-emerald-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 2907,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2906,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-6310dafa82202c51" + " " + "text-xs font-semibold text-slate-200 truncate max-w-xs sm:max-w-md",
                                                            children: formData.poAttachment.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2910,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-slate-400",
                                                            children: [
                                                                (formData.poAttachment.size / 1024).toFixed(1),
                                                                " KB • Uploaded ",
                                                                formData.poAttachment.uploadedAt
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2913,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2909,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2905,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        if (formData.poAttachment) {
                                                            setSelectedPOBill({
                                                                ...formData,
                                                                id: editingBillId || 'temp',
                                                                billNo: formData.billNo || 'Draft',
                                                                billToName: formData.billToName || 'Client'
                                                            });
                                                            setIsPOViewerOpen(true);
                                                        }
                                                    },
                                                    className: "jsx-6310dafa82202c51" + " " + "px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            className: "w-3.5 h-3.5 text-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2935,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6310dafa82202c51",
                                                            children: "Preview"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2936,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2920,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        if (formData.poAttachment) {
                                                            downloadPOAttachment(formData.poAttachment, formData.poNumber);
                                                        }
                                                    },
                                                    className: "jsx-6310dafa82202c51" + " " + "px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                            className: "w-3.5 h-3.5 text-sky-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2947,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6310dafa82202c51",
                                                            children: "Download"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2948,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2938,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setFormData((prev)=>({
                                                                ...prev,
                                                                poAttachment: undefined
                                                            })),
                                                    className: "jsx-6310dafa82202c51" + " " + "px-2.5 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg text-xs font-medium transition flex items-center gap-1 border border-rose-500/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2955,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6310dafa82202c51",
                                                            children: "Remove"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 2956,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 2950,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2919,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 2904,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "jsx-6310dafa82202c51" + " " + "flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-700 hover:border-emerald-500/60 rounded-xl cursor-pointer bg-slate-950/40 hover:bg-slate-950 transition group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                className: "w-6 h-6 text-slate-500 group-hover:text-emerald-400 transition mb-1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2963,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-6310dafa82202c51" + " " + "text-xs font-medium text-slate-300 group-hover:text-emerald-400 transition",
                                                children: "Click to attach Customer PO (PDF, JPG, PNG)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2964,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-slate-500 mt-0.5",
                                                children: "Link the official client PO document directly with this bill for instant retrieval"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2967,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: ".pdf,image/png,image/jpeg,image/webp,image/jpg",
                                                onChange: handleFormFieldFileUpload,
                                                className: "jsx-6310dafa82202c51" + " " + "hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 2970,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 2962,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 2961,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                            lineNumber: 2894,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6310dafa82202c51" + " " + "grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "jsx-6310dafa82202c51" + " " + "block text-[11px] font-medium text-slate-400 mb-1",
                                            children: "Customer / Company BIN"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2984,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.binNumber || '',
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    binNumber: e.target.value
                                                }),
                                            placeholder: "004728009-0202",
                                            className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg font-mono focus:outline-none focus:border-emerald-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2985,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 2983,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "jsx-6310dafa82202c51" + " " + "block text-[11px] font-medium text-slate-400 mb-1",
                                            children: "Customer / Company TIN"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2994,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.tinNumber || '',
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    tinNumber: e.target.value
                                                }),
                                            placeholder: "169493772750",
                                            className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg font-mono focus:outline-none focus:border-emerald-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 2995,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 2993,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "jsx-6310dafa82202c51" + " " + "block text-[11px] font-medium text-slate-400 mb-1",
                                            children: "Quotation Reference"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3004,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.quotationRef || '',
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    quotationRef: e.target.value
                                                }),
                                            placeholder: "QT-2026-005",
                                            className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg font-mono text-sky-400 focus:outline-none focus:border-emerald-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3005,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3003,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                            lineNumber: 2982,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6310dafa82202c51" + " " + "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-6310dafa82202c51" + " " + "font-bold text-slate-200 border-b border-slate-800 pb-1.5 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: "Bill To (Client)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3020,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-emerald-400 font-normal",
                                                    children: "Purchaser"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3021,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3019,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-6310dafa82202c51" + " " + "block text-[11px] font-medium text-emerald-400 mb-1 flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6310dafa82202c51",
                                                            children: "Select from Customer Directory"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3025,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-slate-400",
                                                            children: "Auto-fill details"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3026,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3024,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: "",
                                                    onChange: (e)=>{
                                                        const custId = e.target.value;
                                                        if (!custId) return;
                                                        const cust = customers.find((c)=>c.id === custId);
                                                        if (cust) {
                                                            setFormData((prev)=>({
                                                                    ...prev,
                                                                    billToName: cust.company || cust.name,
                                                                    billToAddress: cust.address || '',
                                                                    binNumber: cust.binNumber || prev.binNumber || '',
                                                                    deliverToName: prev.deliverToName || cust.name,
                                                                    deliverToPhone: prev.deliverToPhone || cust.phone || '',
                                                                    deliverToAddress: prev.deliverToAddress || cust.address || ''
                                                                }));
                                                        }
                                                    },
                                                    className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-1.5 bg-slate-950 border border-emerald-500/40 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500 text-xs mb-2 font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            className: "jsx-6310dafa82202c51",
                                                            children: "-- Choose Existing Customer / Client --"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3048,
                                                            columnNumber: 19
                                                        }, this),
                                                        customers.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: c.id,
                                                                className: "jsx-6310dafa82202c51",
                                                                children: [
                                                                    c.company || c.name,
                                                                    " (",
                                                                    c.type,
                                                                    ")"
                                                                ]
                                                            }, c.id, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 3050,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3028,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3023,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-6310dafa82202c51" + " " + "block text-[11px] font-medium text-slate-400 mb-1",
                                                    children: "Company / Client Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3057,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    value: formData.billToName || '',
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            billToName: e.target.value
                                                        }),
                                                    placeholder: "e.g. Bangladesh Parliament",
                                                    className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 font-semibold"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3058,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3056,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-6310dafa82202c51" + " " + "block text-[11px] font-medium text-slate-400 mb-1",
                                                    children: "Client Address *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3068,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: 2,
                                                    value: formData.billToAddress || '',
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            billToAddress: e.target.value
                                                        }),
                                                    placeholder: "e.g. Sher-e-Bangla Nagar, Dhaka-1207",
                                                    className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 resize-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3069,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3067,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3018,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-6310dafa82202c51" + " " + "font-bold text-slate-200 border-b border-slate-800 pb-1.5 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: "Deliver To"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3082,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-sky-400 font-normal",
                                                    children: "Delivery Point / Hub"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3083,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3081,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-6310dafa82202c51" + " " + "block text-[11px] font-medium text-slate-400 mb-1",
                                                    children: "Delivery Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3086,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: formData.deliverToAddress || '',
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            deliverToAddress: e.target.value
                                                        }),
                                                    placeholder: "Tejgoan Sort DC",
                                                    className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3087,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3085,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51" + " " + "grid grid-cols-2 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-6310dafa82202c51" + " " + "block text-[11px] font-medium text-slate-400 mb-1",
                                                            children: "Contact Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3097,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: formData.deliverToName || '',
                                                            onChange: (e)=>setFormData((prev)=>({
                                                                        ...prev,
                                                                        deliverToName: e.target.value
                                                                    })),
                                                            placeholder: "Rony",
                                                            className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 text-xs transition"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3098,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3096,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-6310dafa82202c51" + " " + "flex items-center justify-between mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-6310dafa82202c51" + " " + "block text-[11px] font-medium text-slate-300",
                                                                    children: "Contact Phone"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 3108,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-sky-400 font-semibold bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20",
                                                                    children: "Manual Type"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 3109,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3107,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: formData.deliverToPhone || '',
                                                            onChange: (e)=>setFormData((prev)=>({
                                                                        ...prev,
                                                                        deliverToPhone: e.target.value
                                                                    })),
                                                            placeholder: "Type phone (e.g. 01999074461)",
                                                            className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-1.5 bg-slate-950 border border-slate-700/80 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-mono text-xs transition"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3113,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3106,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3095,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3080,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                            lineNumber: 3016,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6310dafa82202c51" + " " + "space-y-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-6310dafa82202c51" + " " + "font-bold text-slate-200 text-sm",
                                                    children: "Bill Items"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3129,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-6310dafa82202c51" + " " + "text-[11px] text-slate-400",
                                                    children: "Enter item name, specification, unit, quantity and unit price"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3130,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleAddItem,
                                            className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 rounded-xl font-bold text-xs transition active:scale-95 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3137,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: "+ Add Item"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3138,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3132,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "bg-slate-950 border border-slate-800 rounded-xl overflow-x-auto shadow-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "jsx-6310dafa82202c51" + " " + "w-full min-w-[840px] text-left text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "jsx-6310dafa82202c51",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "jsx-6310dafa82202c51" + " " + "bg-slate-900 border-b border-slate-800 text-slate-300 font-semibold text-[11px] uppercase tracking-wider",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-6310dafa82202c51" + " " + "py-3 px-3 w-12 text-center",
                                                            children: "SN"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3146,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-6310dafa82202c51" + " " + "py-3 px-3 min-w-[210px]",
                                                            children: "Item Name & Part No *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3147,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-6310dafa82202c51" + " " + "py-3 px-3 min-w-[250px]",
                                                            children: "Description & Serial Numbers (S/N)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3148,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-6310dafa82202c51" + " " + "py-3 px-3 w-24 text-center",
                                                            children: "Unit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3149,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-6310dafa82202c51" + " " + "py-3 px-3 w-28 text-center",
                                                            children: "Quantity *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3150,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-6310dafa82202c51" + " " + "py-3 px-3 w-36 text-right",
                                                            children: "Unit Price (৳) *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3151,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-6310dafa82202c51" + " " + "py-3 px-3 w-36 text-right",
                                                            children: "Amount (৳)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3152,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-6310dafa82202c51" + " " + "py-3 px-2 w-12 text-center"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3153,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3145,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 3144,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "jsx-6310dafa82202c51" + " " + "divide-y divide-slate-800/60",
                                                children: (formData.items || []).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-6310dafa82202c51" + " " + "hover:bg-slate-900/40 transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-3 text-center text-slate-400 font-mono font-bold",
                                                                children: index + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 3159,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        required: true,
                                                                        value: item.name,
                                                                        onChange: (e)=>handleUpdateItem(index, 'name', e.target.value),
                                                                        placeholder: "e.g. Rosenberger UTP Cable",
                                                                        className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-medium text-xs mb-1.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 3163,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-1.5 bg-slate-900/90 px-2 py-1 rounded-md border border-slate-800",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-6310dafa82202c51" + " " + "text-[10px] font-bold text-sky-400 bg-sky-500/10 px-1 rounded border border-sky-500/20 whitespace-nowrap",
                                                                                children: "P/N"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                lineNumber: 3172,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                value: item.partNo || '',
                                                                                onChange: (e)=>handleUpdateItem(index, 'partNo', e.target.value),
                                                                                placeholder: "Part No / Model (e.g. CP-UTP-C6)",
                                                                                className: "jsx-6310dafa82202c51" + " " + "w-full bg-transparent text-[11px] text-slate-200 placeholder-slate-500 focus:outline-none font-mono"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                lineNumber: 3175,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 3171,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 3162,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: item.description,
                                                                        onChange: (e)=>handleUpdateItem(index, 'description', e.target.value),
                                                                        placeholder: "e.g. Cat-6 UTP Cable, 305M",
                                                                        className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs mb-1.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 3185,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-1.5 bg-slate-900/90 px-2 py-1 rounded-md border border-slate-800",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-6310dafa82202c51" + " " + "text-[10px] font-bold text-amber-400 bg-amber-500/10 px-1 rounded border border-amber-500/20 whitespace-nowrap",
                                                                                children: "S/N"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                lineNumber: 3193,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                value: item.serialNumbers || '',
                                                                                onChange: (e)=>handleUpdateItem(index, 'serialNumbers', e.target.value),
                                                                                placeholder: "Serial Nos for Challan (e.g. SN-001, SN-002)",
                                                                                className: "jsx-6310dafa82202c51" + " " + "w-full bg-transparent font-mono text-[11px] text-amber-300 placeholder-slate-500 focus:outline-none"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                                lineNumber: 3196,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 3192,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 3184,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: item.unit,
                                                                    onChange: (e)=>handleUpdateItem(index, 'unit', e.target.value),
                                                                    placeholder: "Box",
                                                                    className: "jsx-6310dafa82202c51" + " " + "w-full px-2.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500 text-center font-medium text-xs"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 3206,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 3205,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: "1",
                                                                    step: "any",
                                                                    required: true,
                                                                    value: item.quantity !== undefined && item.quantity !== null ? item.quantity : '',
                                                                    onChange: (e)=>handleUpdateItem(index, 'quantity', e.target.value),
                                                                    placeholder: "1",
                                                                    className: "jsx-6310dafa82202c51" + " " + "w-full px-2.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-center font-mono font-bold text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 3215,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 3214,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    step: "any",
                                                                    required: true,
                                                                    value: item.unitPrice !== undefined && item.unitPrice !== null ? item.unitPrice : '',
                                                                    onChange: (e)=>handleUpdateItem(index, 'unitPrice', e.target.value),
                                                                    placeholder: "0.00",
                                                                    className: "jsx-6310dafa82202c51" + " " + "w-full px-2.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-emerald-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-right font-mono font-bold text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 3227,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 3226,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-3 text-right font-mono font-bold text-slate-100 text-sm whitespace-nowrap",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(item.amount)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 3238,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-6310dafa82202c51" + " " + "py-2.5 px-2 text-center",
                                                                children: (formData.items?.length || 0) > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleRemoveItem(index),
                                                                    title: "Remove Item",
                                                                    className: "jsx-6310dafa82202c51" + " " + "p-1.5 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                        lineNumber: 3249,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 3243,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                lineNumber: 3241,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, item.id, true, {
                                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                        lineNumber: 3158,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 3156,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 3143,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3142,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                            lineNumber: 3126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6310dafa82202c51" + " " + "grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "jsx-6310dafa82202c51" + " " + "block text-[11px] font-medium text-slate-400",
                                            children: "Amount In Word"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3263,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51" + " " + "p-3 bg-slate-950 border border-slate-800 rounded-lg text-emerald-400 font-medium text-xs leading-relaxed",
                                            children: formData.amountInWords || 'Zero Taka Only.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3264,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3262,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "space-y-2 text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51" + " " + "flex justify-between items-center text-slate-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: "Sub Total:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3271,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51" + " " + "font-mono font-semibold text-slate-200",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(formData.subTotal || 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3272,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3270,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51" + " " + "flex justify-between items-center text-slate-300 py-1 border-b border-slate-800/60 pb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51" + " " + "text-xs font-semibold",
                                                    children: "VAT & TAX Policy:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3276,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6310dafa82202c51" + " " + "inline-flex items-center rounded-lg bg-slate-950 p-1 border border-slate-800 gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                const inc = true;
                                                                const totals = recalculateFormTotals(formData.items || [], inc, formData.vatTaxAmount || 0);
                                                                const currentTerms = Array.isArray(formData.termsAndConditions) ? [
                                                                    ...formData.termsAndConditions
                                                                ] : [];
                                                                let found = false;
                                                                const updatedTerms = currentTerms.map((t)=>{
                                                                    if (/vat\s*&?\s*tax/i.test(t)) {
                                                                        found = true;
                                                                        return '1. VAT&TAX : Included';
                                                                    }
                                                                    return t;
                                                                });
                                                                if (!found) updatedTerms.unshift('1. VAT&TAX : Included');
                                                                setFormData({
                                                                    ...formData,
                                                                    vatTaxIncluded: inc,
                                                                    termsAndConditions: updatedTerms,
                                                                    ...totals
                                                                });
                                                            },
                                                            className: "jsx-6310dafa82202c51" + " " + `px-3 py-1 text-xs font-bold rounded-md transition cursor-pointer ${formData.vatTaxIncluded ?? true ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`,
                                                            children: "Included"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3278,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                const inc = false;
                                                                const totals = recalculateFormTotals(formData.items || [], inc, formData.vatTaxAmount || 0);
                                                                const currentTerms = Array.isArray(formData.termsAndConditions) ? [
                                                                    ...formData.termsAndConditions
                                                                ] : [];
                                                                let found = false;
                                                                const updatedTerms = currentTerms.map((t)=>{
                                                                    if (/vat\s*&?\s*tax/i.test(t)) {
                                                                        found = true;
                                                                        return '1. VAT&TAX : Excluded';
                                                                    }
                                                                    return t;
                                                                });
                                                                if (!found) updatedTerms.unshift('1. VAT&TAX : Excluded');
                                                                setFormData({
                                                                    ...formData,
                                                                    vatTaxIncluded: inc,
                                                                    termsAndConditions: updatedTerms,
                                                                    ...totals
                                                                });
                                                            },
                                                            className: "jsx-6310dafa82202c51" + " " + `px-3 py-1 text-xs font-bold rounded-md transition cursor-pointer ${!(formData.vatTaxIncluded ?? true) ? 'bg-rose-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`,
                                                            children: "Excluded"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3303,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3277,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3275,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51" + " " + "flex justify-between items-center text-base font-bold text-slate-100 pt-2 border-t border-slate-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: "Grand Total:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3332,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51" + " " + "font-mono text-emerald-400",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBDT"])(formData.grandTotal || 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3333,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3331,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3269,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                            lineNumber: 3261,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6310dafa82202c51" + " " + "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "space-y-2 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "jsx-6310dafa82202c51" + " " + "block text-[11px] font-bold text-slate-300",
                                            children: "Terms & Conditions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3341,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 3,
                                            value: (formData.termsAndConditions || []).join('\n'),
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    termsAndConditions: e.target.value.split('\n')
                                                }),
                                            placeholder: "1. VAT&TAX : Included 2. Payment: Within Deadline",
                                            className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500 font-mono text-[11px]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3342,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3340,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "space-y-2 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "jsx-6310dafa82202c51" + " " + "block text-[11px] font-bold text-slate-300",
                                            children: "Payment Details (Company Bank)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3357,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51" + " " + "grid grid-cols-2 gap-2 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-slate-500 block",
                                                            children: "Bank Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3360,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: formData.bankName || '',
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    bankName: e.target.value
                                                                }),
                                                            placeholder: "Brac Bank",
                                                            className: "jsx-6310dafa82202c51" + " " + "w-full px-2 py-1 bg-slate-950 border border-slate-800 rounded text-slate-200"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3361,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3359,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-slate-500 block",
                                                            children: "Account No"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3370,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: formData.bankAccountNo || '',
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    bankAccountNo: e.target.value
                                                                }),
                                                            placeholder: "2051923010001",
                                                            className: "jsx-6310dafa82202c51" + " " + "w-full px-2 py-1 bg-slate-950 border border-slate-800 rounded text-slate-200 font-mono"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3371,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3369,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-slate-500 block",
                                                            children: "Account Title"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3380,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: formData.bankAccountTitle || '',
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    bankAccountTitle: e.target.value
                                                                }),
                                                            placeholder: "Globo Tech",
                                                            className: "jsx-6310dafa82202c51" + " " + "w-full px-2 py-1 bg-slate-950 border border-slate-800 rounded text-slate-200"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3381,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3379,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-slate-500 block",
                                                            children: "Branch Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3390,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: formData.bankBranchName || '',
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    bankBranchName: e.target.value
                                                                }),
                                                            placeholder: "Bijoynagar",
                                                            className: "jsx-6310dafa82202c51" + " " + "w-full px-2 py-1 bg-slate-950 border border-slate-800 rounded text-slate-200"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3391,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3389,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3358,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3356,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                            lineNumber: 3339,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6310dafa82202c51" + " " + "flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-4 border-t border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsCreateModalOpen(false),
                                    className: "jsx-6310dafa82202c51" + " " + "w-full sm:w-auto min-h-[42px] px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3405,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "jsx-6310dafa82202c51" + " " + "w-full sm:w-auto min-h-[42px] px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow-lg shadow-emerald-600/20 transition flex items-center justify-center gap-1.5",
                                    children: editingBillId ? 'Update & Preview' : 'Save & Preview'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3412,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                            lineNumber: 3404,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                    lineNumber: 2764,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                lineNumber: 2758,
                columnNumber: 7
            }, this),
            isPOViewerOpen && selectedPOBill?.poAttachment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isPOViewerOpen,
                onClose: ()=>setIsPOViewerOpen(false),
                title: `Customer Purchase Order (PO) — ${selectedPOBill.billNo}`,
                maxWidth: "4xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-6310dafa82202c51" + " " + "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6310dafa82202c51" + " " + "flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-slate-950 rounded-xl border border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "space-y-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51" + " " + "text-xs font-bold text-slate-100",
                                                    children: selectedPOBill.poAttachment.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3437,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51" + " " + "text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-mono rounded border border-emerald-500/20",
                                                    children: [
                                                        (selectedPOBill.poAttachment.size / 1024).toFixed(1),
                                                        " KB"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3438,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3436,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-6310dafa82202c51" + " " + "text-[11px] text-slate-400",
                                            children: [
                                                "Client: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "jsx-6310dafa82202c51" + " " + "text-slate-300",
                                                    children: selectedPOBill.billToName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3443,
                                                    columnNumber: 27
                                                }, this),
                                                " • PO No: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51" + " " + "font-mono text-emerald-400 font-bold",
                                                    children: selectedPOBill.poNumber || 'None'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3443,
                                                    columnNumber: 113
                                                }, this),
                                                " • Attached on ",
                                                selectedPOBill.poAttachment.uploadedAt
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3442,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3435,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>downloadPOAttachment(selectedPOBill.poAttachment, selectedPOBill.poNumber),
                                            title: "Download PO Document",
                                            className: "jsx-6310dafa82202c51" + " " + "px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition flex items-center gap-1.5 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3455,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: "Download"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3456,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3449,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                const newWin = window.open();
                                                if (newWin) {
                                                    newWin.document.write(`<iframe src="${selectedPOBill.poAttachment.dataUrl}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
                                                }
                                            },
                                            title: "Open in new window",
                                            className: "jsx-6310dafa82202c51" + " " + "px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    className: "w-3.5 h-3.5 text-sky-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3472,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: "Full Screen"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3473,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3459,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "jsx-6310dafa82202c51" + " " + "px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                    className: "w-3.5 h-3.5 text-amber-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3477,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: "Replace"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3478,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: ".pdf,image/png,image/jpeg,image/webp,image/jpg",
                                                    onChange: async (e)=>{
                                                        const file = e.target.files?.[0];
                                                        if (!file) return;
                                                        try {
                                                            const newAtt = await fileToPOAttachment(file);
                                                            const updated = bills.map((b)=>b.id === selectedPOBill.id ? {
                                                                    ...b,
                                                                    poAttachment: newAtt
                                                                } : b);
                                                            setBills(updated);
                                                            setSelectedPOBill({
                                                                ...selectedPOBill,
                                                                poAttachment: newAtt
                                                            });
                                                            if (activeBill?.id === selectedPOBill.id) {
                                                                setActiveBill({
                                                                    ...activeBill,
                                                                    poAttachment: newAtt
                                                                });
                                                            }
                                                        } catch (err) {
                                                            alert(err.message || 'Error replacing file');
                                                        }
                                                        e.target.value = '';
                                                    },
                                                    className: "jsx-6310dafa82202c51" + " " + "hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3479,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3476,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleDeletePOAttachment(selectedPOBill.id),
                                            title: "Delete Attachment",
                                            className: "jsx-6310dafa82202c51" + " " + "p-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 rounded-lg transition",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 3510,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3504,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3448,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                            lineNumber: 3434,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6310dafa82202c51" + " " + "bg-slate-950 rounded-xl border border-slate-800 p-2 overflow-hidden flex flex-col items-center justify-center min-h-[400px]",
                            children: selectedPOBill.poAttachment.type.includes('pdf') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6310dafa82202c51" + " " + "w-full flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        src: selectedPOBill.poAttachment.dataUrl,
                                        title: `PO PDF - ${selectedPOBill.poAttachment.name}`,
                                        className: "jsx-6310dafa82202c51" + " " + "w-full h-[60vh] rounded-lg border border-slate-800 bg-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 3519,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6310dafa82202c51" + " " + "mt-2 text-center text-xs text-slate-400 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-6310dafa82202c51",
                                                children: "If the PDF preview is blocked by your browser:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 3525,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>downloadPOAttachment(selectedPOBill.poAttachment, selectedPOBill.poNumber),
                                                className: "jsx-6310dafa82202c51" + " " + "text-emerald-400 hover:underline font-semibold",
                                                children: "Download PDF"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 3526,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 3524,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 3518,
                                columnNumber: 17
                            }, this) : selectedPOBill.poAttachment.type.startsWith('image/') || selectedPOBill.poAttachment.dataUrl.startsWith('data:image/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6310dafa82202c51" + " " + "max-h-[65vh] overflow-auto p-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: selectedPOBill.poAttachment.dataUrl,
                                    alt: selectedPOBill.poAttachment.name,
                                    className: "jsx-6310dafa82202c51" + " " + "max-h-[60vh] max-w-full rounded-lg shadow-xl object-contain border border-slate-800"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3537,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 3536,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6310dafa82202c51" + " " + "p-8 text-center space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-16 h-16 text-slate-500 mx-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 3545,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-6310dafa82202c51" + " " + "text-sm font-semibold text-slate-200",
                                        children: selectedPOBill.poAttachment.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 3546,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-6310dafa82202c51" + " " + "text-xs text-slate-400",
                                        children: "This file can be downloaded to your computer and opened with your native app."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 3547,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>downloadPOAttachment(selectedPOBill.poAttachment, selectedPOBill.poNumber),
                                        className: "jsx-6310dafa82202c51" + " " + "px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition",
                                        children: "Download PO File"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 3550,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                lineNumber: 3544,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                            lineNumber: 3516,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                    lineNumber: 3432,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                lineNumber: 3426,
                columnNumber: 9
            }, this),
            isQuickAttachOpen && quickAttachBill && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isQuickAttachOpen,
                onClose: ()=>{
                    setIsQuickAttachOpen(false);
                    setQuickAttachBill(null);
                    setQuickAttachFile(null);
                },
                title: `Attach Customer PO — Bill ${quickAttachBill.billNo}`,
                maxWidth: "md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSaveQuickAttachment,
                    className: "jsx-6310dafa82202c51" + " " + "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6310dafa82202c51" + " " + "p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-6310dafa82202c51" + " " + "text-slate-400",
                                            children: "Client:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3581,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-6310dafa82202c51" + " " + "font-semibold text-slate-200",
                                            children: quickAttachBill.billToName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3582,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3580,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-6310dafa82202c51" + " " + "text-slate-400",
                                            children: "PO Number:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3585,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-6310dafa82202c51" + " " + "font-mono text-emerald-400 font-bold",
                                            children: quickAttachBill.poNumber || 'Not specified'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3586,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3584,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                            lineNumber: 3579,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6310dafa82202c51",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "jsx-6310dafa82202c51" + " " + "block text-xs font-semibold text-slate-300 mb-1.5",
                                    children: "Select Customer PO File (PDF, JPG, PNG)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3591,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "jsx-6310dafa82202c51" + " " + "flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-700 hover:border-emerald-500 rounded-xl cursor-pointer bg-slate-950/60 transition group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            className: "w-8 h-8 text-slate-500 group-hover:text-emerald-400 transition mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3595,
                                            columnNumber: 17
                                        }, this),
                                        quickAttachFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51" + " " + "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-6310dafa82202c51" + " " + "text-xs font-bold text-emerald-400",
                                                    children: quickAttachFile.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3598,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-slate-400 mt-0.5",
                                                    children: [
                                                        (quickAttachFile.size / 1024).toFixed(1),
                                                        " KB • Ready to attach"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3599,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3597,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51" + " " + "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51" + " " + "text-xs font-medium text-slate-300 group-hover:text-emerald-400 transition",
                                                    children: "Click to choose file or drag & drop here"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3605,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-slate-500 block mt-1",
                                                    children: "PDF documents or scan images up to 6MB"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3608,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3604,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: ".pdf,image/png,image/jpeg,image/webp,image/jpg",
                                            onChange: (e)=>setQuickAttachFile(e.target.files?.[0] || null),
                                            className: "jsx-6310dafa82202c51" + " " + "hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3613,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3594,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                            lineNumber: 3590,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6310dafa82202c51" + " " + "flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-3 border-t border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setIsQuickAttachOpen(false);
                                        setQuickAttachBill(null);
                                        setQuickAttachFile(null);
                                    },
                                    className: "jsx-6310dafa82202c51" + " " + "w-full sm:w-auto min-h-[42px] px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3623,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: !quickAttachFile || isUploadingPO,
                                    className: "jsx-6310dafa82202c51" + " " + "w-full sm:w-auto min-h-[42px] px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg text-xs font-semibold shadow-lg shadow-emerald-600/20 transition flex items-center justify-center gap-1.5",
                                    children: isUploadingPO ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-6310dafa82202c51",
                                        children: "Attaching..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                        lineNumber: 3640,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 3643,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-6310dafa82202c51",
                                                children: "Attach to Bill"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                lineNumber: 3644,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3634,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                            lineNumber: 3622,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                    lineNumber: 3578,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                lineNumber: 3568,
                columnNumber: 9
            }, this),
            isSerialsModalOpen && activeBill && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isSerialsModalOpen,
                onClose: ()=>setIsSerialsModalOpen(false),
                title: "Delivery Challan Serial & Part Numbers (চালান সিরিয়াল ও পার্ট নম্বর)",
                size: "3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSaveSerialsModal,
                    className: "jsx-6310dafa82202c51" + " " + "space-y-4 text-xs text-slate-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6310dafa82202c51" + " " + "p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-300 space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-2 text-amber-400 font-semibold text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                            className: "w-4 h-4 text-amber-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3666,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-6310dafa82202c51",
                                            children: [
                                                "Challan Item Identification (DC/",
                                                activeBill.billNo.replace('GT/', ''),
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3667,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3665,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-6310dafa82202c51" + " " + "text-[11px] text-slate-400",
                                    children: "Add product Part Numbers (P/N / Model) and Serial Numbers (S/N) for goods handover, store gate pass, and warranty tracking. You can enter multiple serial numbers separated by commas."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3669,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                            lineNumber: 3664,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6310dafa82202c51" + " " + "space-y-3 max-h-[60vh] overflow-y-auto pr-1",
                            children: serialsItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6310dafa82202c51" + " " + "p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51" + " " + "flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6310dafa82202c51" + " " + "w-5 h-5 rounded-full bg-slate-800 text-slate-300 font-mono font-bold flex items-center justify-center text-[10px]",
                                                            children: idx + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3682,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6310dafa82202c51" + " " + "font-bold text-slate-100 text-xs",
                                                            children: item.name || `Item #${idx + 1}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3685,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3681,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6310dafa82202c51" + " " + "flex items-center gap-2 text-[11px] text-slate-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6310dafa82202c51",
                                                            children: "Delivered Qty:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3688,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6310dafa82202c51" + " " + "px-2 py-0.5 rounded bg-slate-800 font-bold text-emerald-400",
                                                            children: [
                                                                item.quantity,
                                                                " ",
                                                                item.unit
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3689,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3687,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3680,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6310dafa82202c51" + " " + "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-6310dafa82202c51" + " " + "block text-[11px] font-medium text-slate-300 mb-1 flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-6310dafa82202c51" + " " + "text-sky-400 font-bold",
                                                                    children: "P/N:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 3698,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-6310dafa82202c51",
                                                                    children: "Part Number / Model"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 3699,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3697,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: item.partNo || '',
                                                            onChange: (e)=>handleUpdateSerialItem(idx, 'partNo', e.target.value),
                                                            placeholder: "e.g. CP-UTP-C6 / DS-2CD2047G2",
                                                            className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 font-mono text-xs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3701,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3696,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6310dafa82202c51",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-6310dafa82202c51" + " " + "flex items-center justify-between mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-6310dafa82202c51" + " " + "text-[11px] font-medium text-slate-300 flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-6310dafa82202c51" + " " + "text-amber-400 font-bold",
                                                                            children: "S/N:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 3713,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-6310dafa82202c51",
                                                                            children: "Serial Numbers"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                            lineNumber: 3714,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 3712,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-6310dafa82202c51" + " " + "text-[10px] text-slate-500",
                                                                    children: item.quantity > 1 ? `Expected ${item.quantity} serials` : '1 serial'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                                    lineNumber: 3716,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3711,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: item.serialNumbers || '',
                                                            onChange: (e)=>handleUpdateSerialItem(idx, 'serialNumbers', e.target.value),
                                                            placeholder: item.quantity > 1 ? "e.g. HK-9812A, HK-9813B (comma separated)" : "e.g. HK-2026-9812A",
                                                            className: "jsx-6310dafa82202c51" + " " + "w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-amber-300 placeholder-slate-500 focus:outline-none focus:border-amber-500 font-mono text-xs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                            lineNumber: 3720,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                                    lineNumber: 3710,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3695,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.id || idx, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3676,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                            lineNumber: 3674,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6310dafa82202c51" + " " + "flex items-center justify-end gap-2 pt-3 border-t border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsSerialsModalOpen(false),
                                    className: "jsx-6310dafa82202c51" + " " + "px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold text-xs transition",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3734,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "jsx-6310dafa82202c51" + " " + "px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold text-xs transition flex items-center gap-1.5 shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3745,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-6310dafa82202c51",
                                            children: "Save & Update Challan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                            lineNumber: 3746,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                                    lineNumber: 3741,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                            lineNumber: 3733,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                    lineNumber: 3663,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
                lineNumber: 3657,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "6310dafa82202c51",
                children: "@media print{body,html{color:#000!important;background-color:#fff!important;width:100%!important;height:auto!important;margin:0!important;padding:0!important}.no-print,header,aside,nav{display:none!important}main{width:100%!important;max-width:none!important;margin:0!important;padding:0!important;overflow:visible!important}#printable-bill-invoice{box-shadow:none!important;page-break-after:avoid!important;page-break-inside:avoid!important;border:none!important;width:100%!important;min-height:auto!important;margin:0 auto!important}@page{size:A4 portrait;margin:0}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modules/BillInvoiceView.tsx",
        lineNumber: 1398,
        columnNumber: 5
    }, this);
}
_s(BillInvoiceView, "fRsktv5qauxE0hqGn4yE7Fr+zkw=");
_c = BillInvoiceView;
var _c;
__turbopack_refresh__.register(_c, "BillInvoiceView");

})()),
}]);

//# sourceMappingURL=src_components_modules_BillInvoiceView_tsx_39d4af._.js.map