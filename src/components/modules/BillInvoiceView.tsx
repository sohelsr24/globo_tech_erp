'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Receipt,
  Plus,
  Search,
  Printer,
  Eye,
  Edit,
  Trash2,
  Copy,
  CheckCircle2,
  Clock,
  ArrowLeft,
  FileText,
  Sparkles,
  Filter,
  X,
  Info
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Formatters, formatBDT, numberToWordsBDT } from '@/lib/formatters';
import { Quotation, INITIAL_QUOTATIONS } from '@/components/modules/QuotationView';

export interface BillInvoiceItem {
  id: string;
  itemNo: number;
  sku?: string;
  name: string;
  description: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export type BillInvoiceStatus = 'DRAFT' | 'ISSUED' | 'PAID' | 'PARTIAL' | 'CANCELLED';

export interface BillInvoice {
  id: string;
  billNo: string;
  date: string;
  poNumber: string;
  quotationRef?: string;
  quotationId?: string;
  binNumber: string;
  tinNumber: string;

  // Bill To
  billToName: string;
  billToAddress: string;

  // Deliver To
  deliverToAddress: string;
  deliverToName: string;
  deliverToPhone: string;

  // Items
  items: BillInvoiceItem[];

  // Totals
  subTotal: number;
  vatTaxIncluded: boolean;
  vatTaxAmount: number;
  grandTotal: number;
  amountInWords: string;

  // Terms & Conditions
  termsAndConditions: string[];

  // Payment Details
  bankAccountNo: string;
  bankAccountTitle: string;
  bankName: string;
  bankBranchName: string;
  bankRoutingNo?: string;

  // Signatures
  preparedBy: string;
  receivedBy?: string;

  status: BillInvoiceStatus;
  paidAmount?: number;
  notes?: string;
  createdAt: string;
}

// Initial Sample Bill Invoices matching User's exact Pad Print bill (GT/26107)
export const INITIAL_BILL_INVOICES: BillInvoice[] = [
  {
    id: 'bill-26107',
    billNo: 'GT/26107',
    date: '23-Feb-26',
    poNumber: 'POBD9729-1',
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
  },
  {
    id: 'bill-26108',
    billNo: 'GT/26108',
    date: '24-Feb-26',
    poNumber: 'PO-ABC-9921',
    quotationRef: 'QT-2026-001',
    quotationId: 'QT-2026-001',
    binNumber: '001293848-0101',
    tinNumber: '169493772750',

    billToName: 'ABC Bank Ltd.',
    billToAddress: 'ABC Tower, Motijheel C/A, Dhaka-1000',

    deliverToAddress: 'ABC Tower Level-4, Motijheel C/A, Dhaka',
    deliverToName: 'Md. Tariqul Islam',
    deliverToPhone: '+880 1711-223344',

    items: [
      {
        id: 'bi-item-201',
        itemNo: 1,
        name: 'Hikvision 4MP ColorVu IP Camera',
        description: 'Model: DS-2CD2047G2-LU with audio & night color',
        unit: 'pcs',
        quantity: 15,
        unitPrice: 12500,
        amount: 187500
      },
      {
        id: 'bi-item-202',
        itemNo: 2,
        name: 'Hikvision 32-Channel NVR 4K',
        description: 'Model: DS-7732NI-K4 4x SATA NVR',
        unit: 'pcs',
        quantity: 1,
        unitPrice: 38500,
        amount: 38500
      }
    ],

    subTotal: 226000,
    vatTaxIncluded: true,
    vatTaxAmount: 0,
    grandTotal: 226000,
    amountInWords: 'Two Lakh Twenty Six Thousand Taka Only.',

    termsAndConditions: [
      '1. VAT&TAX : Included',
      '2. Payment: Within 15 Days of Submission'
    ],

    bankAccountNo: '2051923010001',
    bankAccountTitle: 'Globo Tech',
    bankName: 'Brac Bank',
    bankBranchName: 'Bijoynagar',

    preparedBy: 'Engr. Sohel Rana',
    status: 'PAID',
    paidAmount: 226000,
    createdAt: '2026-02-24'
  }
];

// Automatically generates the next sequential Bill Invoice number based on existing bills.
// Format: GT/YYNNN (e.g., GT/26109 when GT/26107 & GT/26108 exist)
export function generateNextBillNo(existingBills: BillInvoice[]): string {
  const currentYear = new Date().getFullYear();
  const yearSuffix = currentYear.toString().slice(-2); // "26"
  const prefix = `GT/${yearSuffix}`;

  let maxSeq = 100; // Will start at 101 if no bills exist for the year

  const billsList = Array.isArray(existingBills) && existingBills.length > 0 ? existingBills : INITIAL_BILL_INVOICES;

  billsList.forEach((b) => {
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

export function BillInvoiceView({
  initialSelectedQuoteId,
  globalSearchQuery
}: {
  initialSelectedQuoteId?: string;
  globalSearchQuery?: string;
} = {}) {
  const [bills, setBills] = useState<BillInvoice[]>(INITIAL_BILL_INVOICES);
  const [quotations, setQuotations] = useState<Quotation[]>(INITIAL_QUOTATIONS);
  const [isMounted, setIsMounted] = useState(false);

  // View Mode: 'LIST' or 'PREVIEW'
  const [activeViewMode, setActiveViewMode] = useState<'LIST' | 'PREVIEW'>('LIST');

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState(globalSearchQuery || '');
  const [statusFilter, setStatusFilter] = useState<'ALL' | BillInvoiceStatus>('ALL');

  useEffect(() => {
    if (globalSearchQuery !== undefined && globalSearchQuery !== searchQuery) {
      setSearchQuery(globalSearchQuery);
    }
  }, [globalSearchQuery]);

  // Modals & Active Records
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [activeBill, setActiveBill] = useState<BillInvoice | null>(INITIAL_BILL_INVOICES[0]);

  // Pad Print Settings
  const [padTopMarginMm, setPadTopMarginMm] = useState<number>(45); // Standard Bangladesh company pad header = 45mm
  const [usePreprintedPadMode, setUsePreprintedPadMode] = useState<boolean>(true); // TRUE = No digital letterhead/watermark/footer

  // Form State for Create / Edit
  const [editingBillId, setEditingBillId] = useState<string | null>(null);
  const [selectedQuoteId, setSelectedQuoteId] = useState<string>('');
  const [formData, setFormData] = useState<Partial<BillInvoice>>({
    billNo: generateNextBillNo(INITIAL_BILL_INVOICES),
    date: Formatters.date(new Date()),
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
  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      // 1. Load Bill Invoices
      const savedBills = localStorage.getItem('globotech_erp_bill_invoices');
      if (savedBills) {
        try {
          const parsed = JSON.parse(savedBills);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const existingIds = new Set(parsed.map((b: BillInvoice) => b.id));
            const merged = [
              ...parsed,
              ...INITIAL_BILL_INVOICES.filter((initB) => !existingIds.has(initB.id) && !existingIds.has(initB.billNo))
            ];
            setBills(merged);
            if (merged.length > 0 && !activeBill) {
              setActiveBill(merged[0]);
            }
          }
        } catch (e) {
          console.error('Error loading bill invoices from localStorage', e);
        }
      } else {
        localStorage.setItem('globotech_erp_bill_invoices', JSON.stringify(INITIAL_BILL_INVOICES));
      }

      // 2. Load Quotations
      const savedQuotes = localStorage.getItem('globotech_erp_quotations');
      if (savedQuotes) {
        try {
          const parsedQuotes = JSON.parse(savedQuotes);
          if (Array.isArray(parsedQuotes) && parsedQuotes.length > 0) {
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
        setTimeout(() => {
          handleOpenCreateModal(pendingQuoteId);
        }, 300);
      }
    }
  }, [initialSelectedQuoteId]);

  // Persist bills whenever updated
  useEffect(() => {
    if (isMounted && typeof window !== 'undefined') {
      try {
        localStorage.setItem('globotech_erp_bill_invoices', JSON.stringify(bills));
      } catch (e) {
        console.error('Error saving bill invoices:', e);
      }
    }
  }, [bills, isMounted]);

  // Calculate Subtotal & Grand Total for Form
  const recalculateFormTotals = (items: BillInvoiceItem[], vatIncluded: boolean, customVat: number = 0) => {
    const sub = items.reduce((acc, it) => acc + (Number(it.amount) || 0), 0);
    const grand = vatIncluded ? sub : sub + customVat;
    const inWords = numberToWordsBDT(grand, 'BDT', { style: 'suffix', suffixUnit: 'Taka', dotEnd: true });

    return {
      subTotal: sub,
      vatTaxAmount: customVat,
      grandTotal: grand,
      amountInWords: inWords
    };
  };

  // Open Create Modal & optionally preload from quotation
  const handleOpenCreateModal = (quoteIdToPreload?: string) => {
    setEditingBillId(null);
    const generatedBillNo = generateNextBillNo(bills);

    const baseForm: Partial<BillInvoice> = {
      billNo: generatedBillNo,
      date: Formatters.date(new Date()),
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
  const applyQuotationToForm = (quoteId: string, currentFormState = formData) => {
    setSelectedQuoteId(quoteId);
    const targetQuote = quotations.find((q) => q.id === quoteId || q.quotationNumber === quoteId);
    if (!targetQuote) return;

    // Map quotation items to bill invoice items
    const mappedItems: BillInvoiceItem[] = (targetQuote.items || []).map((it, idx) => ({
      id: `bi-${it.id || idx}-${Date.now()}`,
      itemNo: idx + 1,
      sku: (it as any).sku || '',
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

    // Terms & Conditions
    const terms = [
      '1. VAT&TAX : Included',
      targetQuote.paymentTerms ? `2. Payment: ${targetQuote.paymentTerms}` : '2. Payment: Within Deadline'
    ];

    setFormData((prev) => {
      const stateToUse = currentFormState || prev;
      return {
        ...stateToUse,
        // Only use quote's reference if it exists; otherwise KEEP whatever manual PO number the user already entered
        poNumber: targetQuote.reference ? targetQuote.reference : (stateToUse.poNumber || ''),
        quotationRef: targetQuote.quotationNumber,
        quotationId: targetQuote.id,
        binNumber: targetQuote.customerBin || stateToUse.binNumber || '004728009-0202',
        billToName: targetQuote.customerCompany || targetQuote.customerName || stateToUse.billToName || '',
        billToAddress: targetQuote.customerAddress || stateToUse.billToAddress || '',
        deliverToAddress: deliveryLocation || stateToUse.deliverToAddress || '',
        deliverToName: deliverContactName || stateToUse.deliverToName || '',
        // If user already typed a delivery phone, keep it; otherwise fill with quotation contact phone
        deliverToPhone: stateToUse.deliverToPhone || deliverContactPhone || '',
        items: mappedItems,
        subTotal: totals.subTotal,
        vatTaxIncluded: true,
        vatTaxAmount: 0,
        grandTotal: totals.grandTotal,
        amountInWords: totals.amountInWords,
        termsAndConditions: terms
      };
    });
  };

  // Open Edit Modal
  const handleOpenEditModal = (bill: BillInvoice) => {
    setEditingBillId(bill.id);
    setSelectedQuoteId(bill.quotationId || '');
    setFormData({ ...bill });
    setIsCreateModalOpen(true);
  };

  // Duplicate an existing bill with next sequential Bill NO
  const handleDuplicateBill = (bill: BillInvoice) => {
    const nextBillNo = generateNextBillNo(bills);
    const newBill: BillInvoice = {
      ...bill,
      id: `bill-${Date.now()}`,
      billNo: nextBillNo,
      date: Formatters.date(new Date()),
      status: 'ISSUED',
      createdAt: new Date().toISOString()
    };
    setBills([newBill, ...bills]);
  };

  // Delete bill
  const handleDeleteBill = (id: string) => {
    if (confirm('Are you sure you want to delete this Bill Invoice?')) {
      const remaining = bills.filter((b) => b.id !== id);
      setBills(remaining);
      if (activeBill?.id === id) {
        setActiveBill(remaining[0] || null);
        setActiveViewMode('LIST');
      }
    }
  };

  // Save Form
  const handleSaveBill = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.billNo || !formData.billToName) {
      alert('Please provide Bill NO and Client Name (Bill To).');
      return;
    }

    const items = formData.items || [];
    const totals = recalculateFormTotals(items, formData.vatTaxIncluded ?? true, formData.vatTaxAmount ?? 0);

    let savedRecord: BillInvoice;

    if (editingBillId) {
      // Update existing
      savedRecord = {
        ...formData,
        id: editingBillId,
        items,
        subTotal: totals.subTotal,
        grandTotal: totals.grandTotal,
        amountInWords: totals.amountInWords
      } as BillInvoice;

      setBills(bills.map((b) => (b.id === editingBillId ? savedRecord : b)));
    } else {
      // Create new
      savedRecord = {
        id: `bill-${Date.now()}`,
        billNo: formData.billNo?.trim() || generateNextBillNo(bills),
        date: formData.date || Formatters.date(new Date()),
        poNumber: formData.poNumber || '',
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

      setBills([savedRecord, ...bills]);
    }

    setActiveBill(savedRecord);
    setIsCreateModalOpen(false);
    setActiveViewMode('PREVIEW');
  };

  // Add Item in Form
  const handleAddItem = () => {
    const currentItems = formData.items || [];
    const nextItemNo = currentItems.length + 1;
    const updated = [
      ...currentItems,
      {
        id: `item-${Date.now()}`,
        itemNo: nextItemNo,
        name: '',
        description: '',
        unit: 'Box',
        quantity: 1,
        unitPrice: 0,
        amount: 0
      }
    ];
    const totals = recalculateFormTotals(updated, formData.vatTaxIncluded ?? true, formData.vatTaxAmount ?? 0);
    setFormData({ ...formData, items: updated, ...totals });
  };

  // Update Item in Form
  const handleUpdateItem = (index: number, field: keyof BillInvoiceItem, value: any) => {
    const currentItems = [...(formData.items || [])];
    const item = { ...currentItems[index] };

    if (field === 'quantity' || field === 'unitPrice') {
      (item as any)[field] = value;
      const q = field === 'quantity' ? (value === '' ? 0 : Number(value) || 0) : (Number(item.quantity) || 0);
      const p = field === 'unitPrice' ? (value === '' ? 0 : Number(value) || 0) : (Number(item.unitPrice) || 0);
      item.amount = q * p;
    } else {
      (item as any)[field] = value;
    }

    currentItems[index] = item;
    const totals = recalculateFormTotals(currentItems, formData.vatTaxIncluded ?? true, formData.vatTaxAmount ?? 0);
    setFormData({ ...formData, items: currentItems, ...totals });
  };

  // Remove Item
  const handleRemoveItem = (index: number) => {
    const currentItems = (formData.items || []).filter((_, i) => i !== index);
    const renumbered = currentItems.map((it, i) => ({ ...it, itemNo: i + 1 }));
    const totals = recalculateFormTotals(renumbered, formData.vatTaxIncluded ?? true, formData.vatTaxAmount ?? 0);
    setFormData({ ...formData, items: renumbered, ...totals });
  };

  // Switch to Full-Screen Preview
  const handleOpenPreview = (bill: BillInvoice) => {
    setActiveBill(bill);
    setActiveViewMode('PREVIEW');
  };

  // Robust isolated printing engine (guarantees 100% data visibility on A4 pad without clipping)
  const handlePrintBill = () => {
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
      const topPaddingMm = usePreprintedPadMode ? padTopMarginMm : 20;

      frameDoc.open();
      frameDoc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <title>Bill Invoice - ${activeBill?.billNo || 'GT'}</title>
            <style>
              @page {
                size: A4 portrait;
                margin: 0;
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
              .print-sheet {
                width: 210mm;
                min-height: 297mm;
                margin: 0 auto;
                padding-top: ${topPaddingMm}mm;
                padding-left: 20mm;
                padding-right: 20mm;
                padding-bottom: 15mm;
                box-sizing: border-box;
                background: #ffffff;
                color: #000000;
              }
              table {
                width: 100%;
                border-collapse: collapse;
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

      setTimeout(() => {
        printIframe.contentWindow?.focus();
        printIframe.contentWindow?.print();
        setTimeout(() => {
          printIframe.remove();
        }, 1500);
      }, 350);
    } catch (err) {
      console.error('Iframe print failed, falling back to window.print()', err);
      window.print();
    }
  };

  // Filtered Bills with high-accuracy Search for Bill NO, PO, Phone, and Client
  const filteredBills = useMemo(() => {
    const rawQuery = searchQuery.trim().toLowerCase();
    const cleanQuery = rawQuery.replace(/[\s\-/\\#.]/g, '');

    return bills.filter((b) => {
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
        const matchesBillNo =
          billNoLower.includes(rawQuery) ||
          (cleanQuery.length >= 2 && cleanBillNo.includes(cleanQuery)) ||
          cleanBillNo.endsWith(cleanQuery);

        // Check PO Number (e.g. POBD9729-1, 9729)
        const matchesPo =
          poLower.includes(rawQuery) ||
          (cleanQuery.length >= 2 && cleanPo.includes(cleanQuery));

        // Check Phone Number (e.g. 1999074461, 01999)
        const matchesPhone =
          phoneLower.includes(rawQuery) ||
          (queryDigits.length >= 3 && cleanPhone.includes(queryDigits));

        // Check Client & Deliver To
        const matchesClient =
          billToName.includes(rawQuery) ||
          deliverToName.includes(rawQuery) ||
          deliverToAddress.includes(rawQuery);

        // Check Quotation Reference
        const matchesQuote = quotationRef.includes(rawQuery);

        // Check Items (Name, Description, SKU)
        const matchesItem = (b.items || []).some(
          (it) =>
            (it.name || '').toLowerCase().includes(rawQuery) ||
            (it.description || '').toLowerCase().includes(rawQuery) ||
            ((it as any).sku || '').toLowerCase().includes(rawQuery)
        );

        // Also check linked quotation items (e.g. if quote had SKU or name)
        const linkedQuote = quotations.find(
          (q) => q.id === b.quotationId || q.quotationNumber === b.quotationRef
        );
        const matchesLinkedQuoteItem = linkedQuote
          ? (linkedQuote.items || []).some(
              (qi) =>
                (qi.sku || '').toLowerCase().includes(rawQuery) ||
                (qi.name || '').toLowerCase().includes(rawQuery) ||
                (qi.model || '').toLowerCase().includes(rawQuery)
            )
          : false;

        matchesSearch =
          matchesBillNo ||
          matchesPo ||
          matchesPhone ||
          matchesClient ||
          matchesQuote ||
          matchesItem ||
          matchesLinkedQuoteItem;
      }

      // 2. Status Filter Match
      const matchesStatus = statusFilter === 'ALL' || b.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [bills, searchQuery, statusFilter]);

  // Statistics
  const stats = useMemo(() => {
    const totalCount = bills.length;
    const totalBilled = bills.reduce((acc, b) => acc + (b.grandTotal || 0), 0);
    const paidCount = bills.filter((b) => b.status === 'PAID').length;
    const pendingCount = bills.filter((b) => b.status === 'ISSUED' || b.status === 'PARTIAL').length;
    return { totalCount, totalBilled, paidCount, pendingCount };
  }, [bills]);

  return (
    <div className="space-y-6">
      {/* ========================================================
          1. LIST VIEW MODE (Default Management Table)
          ======================================================== */}
      {activeViewMode === 'LIST' && (
        <>
          {/* Module Title & Quick Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-2xl shadow-xl backdrop-blur-md no-print">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
                <Receipt className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-slate-100">Bill Invoices</h1>
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Printed Pad Ready
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Generate & print dynamic client supply bills directly on pre-printed company pad paper
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => handleOpenCreateModal()}
                className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded-xl text-xs font-semibold shadow-lg shadow-emerald-600/20 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Create Bill Invoice</span>
              </button>
            </div>
          </div>

          {/* Quick Summary Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 no-print">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">Total Billed Invoices</span>
                <Receipt className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-xl font-bold text-slate-100 mt-2">{stats.totalCount}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Records in system</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">Total Billed Volume</span>
                <FileText className="w-4 h-4 text-sky-400" />
              </div>
              <p className="text-xl font-bold text-slate-100 mt-2">{formatBDT(stats.totalBilled)}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Commercial value</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">Issued / Pending</span>
                <Clock className="w-4 h-4 text-amber-400" />
              </div>
              <p className="text-xl font-bold text-amber-400 mt-2">{stats.pendingCount}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Awaiting collection</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">Settled / Paid</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-xl font-bold text-emerald-400 mt-2">{stats.paidCount}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Fully collected</p>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/60 border border-slate-800 p-3 rounded-xl no-print">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by Bill NO (e.g. GT/26107, 26107), PO, Phone, Client..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-0.5 rounded transition"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {searchQuery.trim() && (
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <span>
                  Found <strong className="text-emerald-400">{filteredBills.length}</strong> matching bills
                </span>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-[11px] text-emerald-400 hover:underline font-semibold ml-1"
                >
                  Reset
                </button>
              </div>
            )}

            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <Filter className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              {(['ALL', 'ISSUED', 'PAID', 'PARTIAL', 'DRAFT'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                    statusFilter === st
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {st === 'ALL' ? 'All Bills' : st}
                </button>
              ))}
            </div>
          </div>

          {/* Bill Invoices Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl no-print">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-950/70 border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider font-semibold">
                    <th className="py-3.5 px-4">Bill NO</th>
                    <th className="py-3.5 px-4">Date</th>
                    <th className="py-3.5 px-4">Client (Bill To)</th>
                    <th className="py-3.5 px-4">PO / Quote Ref</th>
                    <th className="py-3.5 px-4">Delivered To</th>
                    <th className="py-3.5 px-4 text-right">Items</th>
                    <th className="py-3.5 px-4 text-right">Grand Total</th>
                    <th className="py-3.5 px-4 text-center">Status</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {filteredBills.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="py-12 text-center text-slate-500">
                        <Receipt className="w-8 h-8 mx-auto mb-2 text-slate-600 opacity-50" />
                        <p className="text-sm font-medium">No bill invoices found</p>
                        <p className="text-xs text-slate-600 mt-1">
                          Click &ldquo;Create Bill Invoice&rdquo; above to generate your first company pad bill from quotation.
                        </p>
                      </td>
                    </tr>
                  ) : (
                    filteredBills.map((bill) => (
                      <tr key={bill.id} className="hover:bg-slate-800/40 transition group">
                        <td className="py-3 px-4 font-mono font-bold text-emerald-400">
                          <div className="flex items-center gap-1.5">
                            <span>{bill.billNo}</span>
                            {searchQuery &&
                              (bill.billNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                bill.billNo.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().includes(searchQuery.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())) && (
                                <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1 py-0.2 rounded font-sans uppercase font-bold">
                                  Match
                                </span>
                              )}
                          </div>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap text-slate-400">
                          {bill.date}
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-semibold text-slate-200">{bill.billToName}</div>
                          <div className="text-[11px] text-slate-500 truncate max-w-xs">{bill.billToAddress}</div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-mono text-slate-200 font-medium">
                            {bill.poNumber ? (
                              <span className="bg-slate-800 px-1.5 py-0.5 rounded text-emerald-400 border border-slate-700/60 font-mono text-[11px]">
                                {bill.poNumber}
                              </span>
                            ) : (
                              <span className="text-slate-600 italic">No PO</span>
                            )}
                          </div>
                          {bill.quotationRef && (
                            <div className="text-[10px] text-sky-400 font-mono flex items-center gap-1 mt-0.5">
                              <span>Ref: {bill.quotationRef}</span>
                            </div>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <div className="text-slate-300 font-medium truncate max-w-[180px]">
                            {bill.deliverToAddress || '—'}
                          </div>
                          {(bill.deliverToName || bill.deliverToPhone) && (
                            <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                              {bill.deliverToName && <span>{bill.deliverToName}</span>}
                              {bill.deliverToName && bill.deliverToPhone && <span className="text-slate-600">&bull;</span>}
                              {bill.deliverToPhone && (
                                <span className="font-mono text-emerald-400 bg-emerald-500/10 px-1 rounded text-[10px]">
                                  {bill.deliverToPhone}
                                </span>
                              )}
                            </div>
                          )}
                        </td>
                        <td className="py-3 px-4 text-right font-medium">
                          {bill.items.length} {bill.items.length === 1 ? 'item' : 'items'}
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-slate-100">
                          {formatBDT(bill.grandTotal)}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <Badge
                            variant={
                              bill.status === 'PAID'
                                ? 'success'
                                : bill.status === 'ISSUED'
                                ? 'warning'
                                : bill.status === 'DRAFT'
                                ? 'neutral'
                                : 'info'
                            }
                          >
                            {bill.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => handleOpenPreview(bill)}
                              title="View & Print Pad Invoice"
                              className="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-semibold text-xs border border-emerald-500/20 transition flex items-center gap-1"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>View / Print</span>
                            </button>
                            <button
                              onClick={() => handleOpenEditModal(bill)}
                              title="Edit Bill"
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDuplicateBill(bill)}
                              title="Duplicate"
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                            >
                              <Copy className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteBill(bill.id)}
                              title="Delete"
                              className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 transition"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* ========================================================
          2. DEDICATED FULL-SCREEN A4 PREVIEW & PRINT VIEW MODE
          ======================================================== */}
      {activeViewMode === 'PREVIEW' && activeBill && (
        <div className="space-y-6">
          {/* Top Floating Control Bar */}
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-xl no-print">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveViewMode('LIST')}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Bills</span>
              </button>

              <div className="h-5 w-px bg-slate-800 hidden sm:block" />

              <div>
                <h2 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                  <span>Bill Invoice: {activeBill.billNo}</span>
                  <span className="font-normal text-xs text-slate-400">({activeBill.billToName})</span>
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Pad Mode Toggle */}
              <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                <button
                  type="button"
                  onClick={() => setUsePreprintedPadMode(true)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                    usePreprintedPadMode
                      ? 'bg-emerald-600 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Pre-Printed Pad (No Header/Footer)
                </button>
                <button
                  type="button"
                  onClick={() => setUsePreprintedPadMode(false)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                    !usePreprintedPadMode
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Plain White Paper
                </button>
              </div>

              {/* Pad Top Spacing Selector */}
              {usePreprintedPadMode && (
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400 hidden md:inline">Pad Spacing:</span>
                  <select
                    value={padTopMarginMm}
                    onChange={(e) => setPadTopMarginMm(Number(e.target.value))}
                    className="px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 font-mono text-xs"
                  >
                    <option value={35}>35 mm (Compact Pad)</option>
                    <option value={45}>45 mm (Standard Pad)</option>
                    <option value={55}>55 mm (Tall Header Pad)</option>
                    <option value={65}>65 mm (Large Pad)</option>
                  </select>
                </div>
              )}

              {/* Edit button */}
              <button
                type="button"
                onClick={() => handleOpenEditModal(activeBill)}
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>

              {/* PRIMARY PRINT BUTTON */}
              <button
                type="button"
                onClick={handlePrintBill}
                className="flex items-center gap-2 px-5 py-2 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-600/30 transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>Print to Pad (A4)</span>
              </button>
            </div>
          </div>

          {/* Pad Printing Notice */}
          <div className="p-3.5 bg-emerald-950/30 border border-emerald-500/20 rounded-xl text-emerald-400 text-xs flex items-start gap-2.5 no-print">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Company Pad Printing Notice:</p>
              <p className="text-[11px] text-emerald-300/80 mt-0.5">
                This document is designed for your printed company pad (No digital logo, no watermark, and no footer). When clicking <strong>&ldquo;Print to Pad (A4)&rdquo;</strong>, select <strong>A4</strong> paper and <strong>Margins: Default / None</strong>.
              </p>
            </div>
          </div>

          {/* A4 PRINTABLE BILL INVOICE SHEET (Pure White Sheet Container) */}
          <div className="flex justify-center pb-12">
            <div
              id="printable-bill-invoice"
              style={{
                width: '210mm',
                minHeight: '297mm',
                boxSizing: 'border-box',
                backgroundColor: '#ffffff',
                color: '#000000',
                paddingTop: usePreprintedPadMode ? `${padTopMarginMm}mm` : '20mm',
                paddingLeft: '20mm',
                paddingRight: '20mm',
                paddingBottom: '15mm',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif'
              }}
              className="shadow-2xl rounded-sm text-black select-text relative print:shadow-none print:w-full print:m-0 print:p-0"
            >
              {/* Optional Plain Paper Header */}
              {!usePreprintedPadMode && (
                <div style={{ borderBottom: '2px solid #000', paddingBottom: '12px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h1 style={{ fontSize: '24px', fontWeight: '900', margin: '0 0 2px 0', letterSpacing: '-0.5px' }}>
                        GLOBO TECH
                      </h1>
                      <p style={{ fontSize: '11px', fontWeight: '600', margin: '0', color: '#333' }}>
                        Enterprise Supply & Engineering Solutions
                      </p>
                      <p style={{ fontSize: '10px', color: '#555', margin: '3px 0 0 0' }}>
                        Dhaka, Bangladesh | Phone: +880 1711-223344 | Email: info@globotechbd.com
                      </p>
                    </div>
                    <div style={{ textAlign: 'right', fontSize: '11px', color: '#444' }}>
                      <p style={{ margin: '0' }}><strong>BIN:</strong> 004728009-0202</p>
                      <p style={{ margin: '2px 0 0 0' }}><strong>TIN:</strong> 169493772750</p>
                    </div>
                  </div>
                </div>
              )}

              {/* TOP SECTION: Boxed "Bill Invoice" on Left, Date/Bill No/PO/BIN/TIN on Right */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                {/* Title Box */}
                <div style={{ paddingTop: '2px' }}>
                  <div style={{ border: '2.5px solid #000', padding: '8px 28px', display: 'inline-block', backgroundColor: '#fff' }}>
                    <span style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '0.8px', color: '#000', display: 'block', lineHeight: 1.1 }}>
                      Bill Invoice
                    </span>
                  </div>
                </div>

                {/* Metadata List */}
                <div style={{ textAlign: 'right', fontSize: '12px', lineHeight: '1.45', fontWeight: '500', color: '#000' }}>
                  <div><strong>Date:</strong> {activeBill.date}</div>
                  <div><strong>Bill NO:</strong> {activeBill.billNo}</div>
                  <div><strong>PO :</strong> {activeBill.poNumber || '—'}</div>
                  <div><strong>BIN:</strong> {activeBill.binNumber || '004728009-0202'}</div>
                  <div><strong>TIN:</strong> {activeBill.tinNumber || '169493772750'}</div>
                </div>
              </div>

              {/* TWO COLUMN PARTY DETAILS: Bill To vs Deliver To */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '12px', color: '#000' }}>
                {/* Bill To */}
                <div style={{ width: '58%' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '13px', borderBottom: '1.5px solid #000', paddingBottom: '3px', marginBottom: '6px', display: 'inline-block', minWidth: '120px' }}>
                    Bill To
                  </div>
                  <div style={{ lineHeight: '1.45' }}>
                    <div><strong>Name:</strong> {activeBill.billToName}</div>
                    <div style={{ marginTop: '2px' }}><strong>Address:</strong> {activeBill.billToAddress}</div>
                  </div>
                </div>

                {/* Deliver To (aligned nicely to right column) */}
                <div style={{ width: '34%' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '13px', borderBottom: '1.5px solid #000', paddingBottom: '3px', marginBottom: '6px', display: 'inline-block', minWidth: '120px' }}>
                    Deliver To
                  </div>
                  <div style={{ lineHeight: '1.45' }}>
                    <div><strong>Address:</strong> {activeBill.deliverToAddress || '—'}</div>
                    {activeBill.deliverToName && (
                      <div style={{ marginTop: '2px' }}><strong>Name:</strong> {activeBill.deliverToName}</div>
                    )}
                    {activeBill.deliverToPhone && (
                      <div style={{ marginTop: '2px' }}><strong>Phone No:</strong> {activeBill.deliverToPhone}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* ITEMS TABLE (Exact black-bordered layout matching PDF) */}
              <div style={{ marginBottom: '16px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #000', fontSize: '12px', color: '#000' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #000', backgroundColor: '#fcfcfc' }}>
                      <th style={{ borderRight: '1px solid #000', padding: '8px 4px', width: '38px', textAlign: 'center', fontWeight: 'bold' }}>SN</th>
                      <th style={{ borderRight: '1px solid #000', padding: '8px 8px', textAlign: 'left', width: '165px', fontWeight: 'bold' }}>Item name</th>
                      <th style={{ borderRight: '1px solid #000', padding: '8px 8px', textAlign: 'left', fontWeight: 'bold' }}>Discription</th>
                      <th style={{ borderRight: '1px solid #000', padding: '8px 4px', width: '55px', textAlign: 'center', fontWeight: 'bold' }}>Unite</th>
                      <th style={{ borderRight: '1px solid #000', padding: '8px 4px', width: '45px', textAlign: 'center', fontWeight: 'bold' }}>Qty</th>
                      <th style={{ borderRight: '1px solid #000', padding: '8px 6px', width: '95px', textAlign: 'right', fontWeight: 'bold' }}>Unite Price</th>
                      <th style={{ padding: '8px 6px', width: '105px', textAlign: 'right', fontWeight: 'bold' }}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeBill.items.map((item, idx) => (
                      <tr key={item.id} style={{ borderBottom: '1px solid #000', verticalAlign: 'top' }}>
                        <td style={{ borderRight: '1px solid #000', padding: '10px 4px', textAlign: 'center', fontWeight: '500' }}>
                          {idx + 1}
                        </td>
                        <td style={{ borderRight: '1px solid #000', padding: '10px 8px', fontWeight: 'bold' }}>
                          {item.name}
                        </td>
                        <td style={{ borderRight: '1px solid #000', padding: '10px 8px', lineHeight: '1.4' }}>
                          {item.description || item.name}
                        </td>
                        <td style={{ borderRight: '1px solid #000', padding: '10px 4px', textAlign: 'center' }}>
                          {item.unit}
                        </td>
                        <td style={{ borderRight: '1px solid #000', padding: '10px 4px', textAlign: 'center', fontWeight: 'bold' }}>
                          {item.quantity}
                        </td>
                        <td style={{ borderRight: '1px solid #000', padding: '10px 6px', textAlign: 'right', fontWeight: '500' }}>
                          {Number(item.unitPrice).toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}
                        </td>
                        <td style={{ padding: '10px 6px', textAlign: 'right', fontWeight: 'bold' }}>
                          {Number(item.amount).toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* BOTTOM TOTALS: Boxed Amount In Word (Left) vs Summary Rows (Right) */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', marginBottom: '24px', fontSize: '12px', color: '#000' }}>
                {/* Left: Amount In Word Box */}
                <div style={{ width: '58%', border: '1px solid #000', padding: '10px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '12px', marginBottom: '3px' }}>
                    Amount In Word
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: '500', fontStyle: 'italic', lineHeight: '1.4' }}>
                    {activeBill.amountInWords || numberToWordsBDT(activeBill.grandTotal, 'BDT', { style: 'suffix', suffixUnit: 'Taka', dotEnd: true })}
                  </div>
                </div>

                {/* Right: SubTotal / VAT & TAX / Grand Total */}
                <div style={{ width: '38%', fontSize: '12px', fontWeight: '600' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #000' }}>
                    <span>Sub Total</span>
                    <span>
                      {Number(activeBill.subTotal).toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #000' }}>
                    <span>VAT & TAX Included</span>
                    <span>
                      {activeBill.vatTaxIncluded
                        ? '0.00'
                        : Number(activeBill.vatTaxAmount || 0).toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: '13px', fontWeight: 'bold', borderBottom: '3px double #000' }}>
                    <span>Grand Total</span>
                    <span>
                      {Number(activeBill.grandTotal).toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </span>
                  </div>
                </div>
              </div>

              {/* TERMS & CONDITIONS (Left) and PAYMENT DETAILS (Right) */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '45px', fontSize: '12px', color: '#000' }}>
                {/* Terms & Conditions */}
                <div style={{ width: '58%' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '12px', borderBottom: '1px solid #000', paddingBottom: '2px', marginBottom: '6px', display: 'inline-block', minWidth: '140px' }}>
                    Terms & Conditions
                  </div>
                  <div style={{ lineHeight: '1.6', fontWeight: '500' }}>
                    {activeBill.termsAndConditions.map((term, tIdx) => (
                      <div key={tIdx}>{term}</div>
                    ))}
                  </div>
                </div>

                {/* Payment Details (aligned to right column) */}
                <div style={{ width: '34%' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '12px', borderBottom: '1px solid #000', paddingBottom: '2px', marginBottom: '6px', display: 'inline-block', minWidth: '140px' }}>
                    Payment Details
                  </div>
                  <div style={{ lineHeight: '1.5', fontWeight: '500' }}>
                    <div><strong>Account No :</strong> {activeBill.bankAccountNo}</div>
                    <div><strong>Account Title:</strong> {activeBill.bankAccountTitle}</div>
                    <div><strong>Bank Name :</strong> {activeBill.bankName}</div>
                    <div><strong>Branch Name:</strong> {activeBill.bankBranchName}</div>
                  </div>
                </div>
              </div>

              {/* SIGNATURES: Received By (Left) & Prepared By (Right) */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '140px', fontSize: '12px', fontWeight: 'bold', color: '#000' }}>
                <div style={{ textAlign: 'center', minWidth: '200px' }}>
                  <div style={{ borderTop: '2px solid #000', paddingTop: '5px' }}>
                    Received By
                  </div>
                </div>

                <div style={{ textAlign: 'center', minWidth: '200px' }}>
                  <div style={{ borderTop: '2px solid #000', paddingTop: '5px' }}>
                    Prepared By
                  </div>
                </div>
              </div>

              {/* Plain Paper Footer (Only if Pre-printed Pad Mode is Disabled) */}
              {!usePreprintedPadMode && (
                <div style={{ borderTop: '1px solid #ddd', paddingTop: '10px', marginTop: '30px', textAlign: 'center', fontSize: '10px', color: '#777' }}>
                  This is an electronically generated bill invoice. For questions, contact info@globotechbd.com.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          3. CREATE / EDIT BILL INVOICE MODAL
          ======================================================== */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title={editingBillId ? `Edit Bill Invoice (${formData.billNo})` : 'Create New Bill Invoice'}
        size="5xl"
      >
        <form onSubmit={handleSaveBill} className="space-y-6 text-xs text-slate-200">
          {/* Dynamic Quotation Selector Bar */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-sky-950/40 border border-emerald-500/30 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>⚡ Dynamic Quotation Import (One-Click Auto Fill)</span>
              </div>
              <span className="text-[11px] text-slate-400">
                Select an approved quotation to instantly pull client, delivery, items & prices
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="sm:col-span-2">
                <select
                  value={selectedQuoteId}
                  onChange={(e) => {
                    const qId = e.target.value;
                    setSelectedQuoteId(qId);
                    if (qId) {
                      applyQuotationToForm(qId);
                    }
                  }}
                  className="w-full px-3 py-2 bg-slate-950 border border-emerald-500/40 rounded-lg text-slate-100 text-xs focus:ring-1 focus:ring-emerald-500 font-medium"
                >
                  <option value="">-- Choose Quotation to Load Data --</option>
                  {quotations.map((q) => (
                    <option key={q.id} value={q.id}>
                      {q.quotationNumber} — {q.customerCompany || q.customerName} ({formatBDT(
                        q.items?.reduce((s, it) => s + (it.quantity * it.unitPrice), 0) || 0
                      )}) [{q.status}]
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => {
                    if (selectedQuoteId) {
                      applyQuotationToForm(selectedQuoteId);
                    } else {
                      alert('Please select a quotation from the dropdown first.');
                    }
                  }}
                  className="w-full px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Import Data</span>
                </button>
              </div>
            </div>
          </div>

          {/* Primary Invoice Header Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-[11px] font-medium text-slate-300">Bill NO *</label>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    Auto
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const nextNo = generateNextBillNo(bills);
                      setFormData((prev) => ({ ...prev, billNo: nextNo }));
                    }}
                    title="Click to recalculate next sequential Bill NO"
                    className="text-[10px] text-slate-400 hover:text-emerald-400 transition underline cursor-pointer"
                  >
                    Reset
                  </button>
                </div>
              </div>
              <input
                type="text"
                required
                value={formData.billNo || ''}
                onChange={(e) => setFormData((prev) => ({ ...prev, billNo: e.target.value }))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-emerald-500/40 rounded-lg font-mono font-bold text-emerald-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs transition"
                placeholder="GT/26109"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Date *</label>
              <input
                type="text"
                required
                value={formData.date || ''}
                onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 text-xs transition"
                placeholder="23-Feb-26"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-[11px] font-medium text-slate-300">PO Number</label>
                <span className="text-[10px] text-sky-400 font-semibold bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">
                  Manual Type
                </span>
              </div>
              <input
                type="text"
                value={formData.poNumber || ''}
                onChange={(e) => setFormData((prev) => ({ ...prev, poNumber: e.target.value }))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700/80 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-mono text-xs transition"
                placeholder="Type PO Number (e.g. POBD9729-1)"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Status</label>
              <select
                value={formData.status || 'ISSUED'}
                onChange={(e) => setFormData((prev) => ({ ...prev, status: e.target.value as BillInvoiceStatus }))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 text-xs transition"
              >
                <option value="DRAFT">DRAFT</option>
                <option value="ISSUED">ISSUED</option>
                <option value="PAID">PAID</option>
                <option value="PARTIAL">PARTIAL</option>
                <option value="CANCELLED">CANCELLED</option>
              </select>
            </div>
          </div>

          {/* Tax Identification (BIN & TIN) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Customer / Company BIN</label>
              <input
                type="text"
                value={formData.binNumber || ''}
                onChange={(e) => setFormData({ ...formData, binNumber: e.target.value })}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg font-mono focus:outline-none focus:border-emerald-500"
                placeholder="004728009-0202"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Customer / Company TIN</label>
              <input
                type="text"
                value={formData.tinNumber || ''}
                onChange={(e) => setFormData({ ...formData, tinNumber: e.target.value })}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg font-mono focus:outline-none focus:border-emerald-500"
                placeholder="169493772750"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Quotation Reference</label>
              <input
                type="text"
                value={formData.quotationRef || ''}
                onChange={(e) => setFormData({ ...formData, quotationRef: e.target.value })}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg font-mono text-sky-400 focus:outline-none focus:border-emerald-500"
                placeholder="QT-2026-005"
              />
            </div>
          </div>

          {/* Bill To & Deliver To Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Bill To */}
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-2.5">
              <h3 className="font-bold text-slate-200 border-b border-slate-800 pb-1.5 flex items-center justify-between">
                <span>Bill To (Client)</span>
                <span className="text-[10px] text-emerald-400 font-normal">Purchaser</span>
              </h3>
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Company / Client Name *</label>
                <input
                  type="text"
                  required
                  value={formData.billToName || ''}
                  onChange={(e) => setFormData({ ...formData, billToName: e.target.value })}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 font-semibold"
                  placeholder="Daraz Bangladesh LTD"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Client Address *</label>
                <textarea
                  rows={2}
                  value={formData.billToAddress || ''}
                  onChange={(e) => setFormData({ ...formData, billToAddress: e.target.value })}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 resize-none"
                  placeholder="Asfia Tower, House- 76/B, Road-11, Dhaka-1213"
                />
              </div>
            </div>

            {/* Deliver To */}
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-2.5">
              <h3 className="font-bold text-slate-200 border-b border-slate-800 pb-1.5 flex items-center justify-between">
                <span>Deliver To</span>
                <span className="text-[10px] text-sky-400 font-normal">Delivery Point / Hub</span>
              </h3>
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Delivery Address</label>
                <input
                  type="text"
                  value={formData.deliverToAddress || ''}
                  onChange={(e) => setFormData({ ...formData, deliverToAddress: e.target.value })}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500"
                  placeholder="Tejgoan Sort DC"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Contact Name</label>
                  <input
                    type="text"
                    value={formData.deliverToName || ''}
                    onChange={(e) => setFormData((prev) => ({ ...prev, deliverToName: e.target.value }))}
                    className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 text-xs transition"
                    placeholder="Rony"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[11px] font-medium text-slate-300">Contact Phone</label>
                    <span className="text-[10px] text-sky-400 font-semibold bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">
                      Manual Type
                    </span>
                  </div>
                  <input
                    type="text"
                    value={formData.deliverToPhone || ''}
                    onChange={(e) => setFormData((prev) => ({ ...prev, deliverToPhone: e.target.value }))}
                    className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700/80 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-mono text-xs transition"
                    placeholder="Type phone (e.g. 01999074461)"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-200 text-sm">Bill Items</h3>
                <p className="text-[11px] text-slate-400">Enter item name, specification, unit, quantity and unit price</p>
              </div>
              <button
                type="button"
                onClick={handleAddItem}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 rounded-xl font-bold text-xs transition active:scale-95 shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>+ Add Item</span>
              </button>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-x-auto shadow-inner">
              <table className="w-full min-w-[840px] text-left text-xs">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300 font-semibold text-[11px] uppercase tracking-wider">
                    <th className="py-3 px-3 w-12 text-center">SN</th>
                    <th className="py-3 px-3 min-w-[190px]">Item Name *</th>
                    <th className="py-3 px-3 min-w-[230px]">Description / Specification</th>
                    <th className="py-3 px-3 w-24 text-center">Unit</th>
                    <th className="py-3 px-3 w-28 text-center">Quantity *</th>
                    <th className="py-3 px-3 w-36 text-right">Unit Price (৳) *</th>
                    <th className="py-3 px-3 w-36 text-right">Amount (৳)</th>
                    <th className="py-3 px-2 w-12 text-center"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {(formData.items || []).map((item, index) => (
                    <tr key={item.id} className="hover:bg-slate-900/40 transition">
                      <td className="py-2.5 px-3 text-center text-slate-400 font-mono font-bold">
                        {index + 1}
                      </td>
                      <td className="py-2.5 px-3">
                        <input
                          type="text"
                          required
                          value={item.name}
                          onChange={(e) => handleUpdateItem(index, 'name', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-medium text-xs"
                          placeholder="e.g. Rosenberger UTP Cable"
                        />
                      </td>
                      <td className="py-2.5 px-3">
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => handleUpdateItem(index, 'description', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs"
                          placeholder="e.g. Cat-6 UTP Cable, 305M"
                        />
                      </td>
                      <td className="py-2.5 px-3">
                        <input
                          type="text"
                          value={item.unit}
                          onChange={(e) => handleUpdateItem(index, 'unit', e.target.value)}
                          className="w-full px-2.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500 text-center font-medium text-xs"
                          placeholder="Box"
                        />
                      </td>
                      <td className="py-2.5 px-3">
                        <input
                          type="number"
                          min="1"
                          step="any"
                          required
                          value={item.quantity !== undefined && item.quantity !== null ? item.quantity : ''}
                          onChange={(e) => handleUpdateItem(index, 'quantity', e.target.value)}
                          className="w-full px-2.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-center font-mono font-bold text-sm"
                          placeholder="1"
                        />
                      </td>
                      <td className="py-2.5 px-3">
                        <input
                          type="number"
                          min="0"
                          step="any"
                          required
                          value={item.unitPrice !== undefined && item.unitPrice !== null ? item.unitPrice : ''}
                          onChange={(e) => handleUpdateItem(index, 'unitPrice', e.target.value)}
                          className="w-full px-2.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-emerald-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-right font-mono font-bold text-sm"
                          placeholder="0.00"
                        />
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-100 text-sm whitespace-nowrap">
                        {formatBDT(item.amount)}
                      </td>
                      <td className="py-2.5 px-2 text-center">
                        {(formData.items?.length || 0) > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(index)}
                            className="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition"
                            title="Remove Item"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Totals & Amount in Word Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <div className="space-y-2">
              <label className="block text-[11px] font-medium text-slate-400">Amount In Word</label>
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-emerald-400 font-medium text-xs leading-relaxed">
                {formData.amountInWords || 'Zero Taka Only.'}
              </div>
            </div>

            <div className="space-y-2 text-right">
              <div className="flex justify-between items-center text-slate-400">
                <span>Sub Total:</span>
                <span className="font-mono font-semibold text-slate-200">{formatBDT(formData.subTotal || 0)}</span>
              </div>

              <div className="flex justify-between items-center text-slate-400">
                <span className="flex items-center gap-1.5">
                  <input
                    type="checkbox"
                    id="vatTaxInc"
                    checked={formData.vatTaxIncluded ?? true}
                    onChange={(e) => {
                      const inc = e.target.checked;
                      const totals = recalculateFormTotals(formData.items || [], inc, formData.vatTaxAmount || 0);
                      setFormData({ ...formData, vatTaxIncluded: inc, ...totals });
                    }}
                    className="rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-0"
                  />
                  <label htmlFor="vatTaxInc" className="cursor-pointer text-xs">
                    VAT & TAX Included in Total
                  </label>
                </span>
                <span className="font-mono text-emerald-400">
                  {formData.vatTaxIncluded ? 'Included' : formatBDT(formData.vatTaxAmount || 0)}
                </span>
              </div>

              <div className="flex justify-between items-center text-base font-bold text-slate-100 pt-2 border-t border-slate-800">
                <span>Grand Total:</span>
                <span className="font-mono text-emerald-400">{formatBDT(formData.grandTotal || 0)}</span>
              </div>
            </div>
          </div>

          {/* Terms & Payment Bank Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <label className="block text-[11px] font-bold text-slate-300">Terms & Conditions</label>
              <textarea
                rows={3}
                value={(formData.termsAndConditions || []).join('\n')}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    termsAndConditions: e.target.value.split('\n')
                  })
                }
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500 font-mono text-[11px]"
                placeholder="1. VAT&TAX : Included&#10;2. Payment: Within Deadline"
              />
            </div>

            <div className="space-y-2 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <label className="block text-[11px] font-bold text-slate-300">Payment Details (Company Bank)</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 block">Bank Name</span>
                  <input
                    type="text"
                    value={formData.bankName || ''}
                    onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                    className="w-full px-2 py-1 bg-slate-950 border border-slate-800 rounded text-slate-200"
                    placeholder="Brac Bank"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Account No</span>
                  <input
                    type="text"
                    value={formData.bankAccountNo || ''}
                    onChange={(e) => setFormData({ ...formData, bankAccountNo: e.target.value })}
                    className="w-full px-2 py-1 bg-slate-950 border border-slate-800 rounded text-slate-200 font-mono"
                    placeholder="2051923010001"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Account Title</span>
                  <input
                    type="text"
                    value={formData.bankAccountTitle || ''}
                    onChange={(e) => setFormData({ ...formData, bankAccountTitle: e.target.value })}
                    className="w-full px-2 py-1 bg-slate-950 border border-slate-800 rounded text-slate-200"
                    placeholder="Globo Tech"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Branch Name</span>
                  <input
                    type="text"
                    value={formData.bankBranchName || ''}
                    onChange={(e) => setFormData({ ...formData, bankBranchName: e.target.value })}
                    className="w-full px-2 py-1 bg-slate-950 border border-slate-800 rounded text-slate-200"
                    placeholder="Bijoynagar"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setIsCreateModalOpen(false)}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow-lg shadow-emerald-600/20 transition"
            >
              {editingBillId ? 'Update & Preview' : 'Save & Preview'}
            </button>
          </div>
        </form>
      </Modal>

      {/* Embedded Global Print CSS ensuring seamless direct printing */}
      <style jsx global>{`
        @media print {
          body, html {
            background-color: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: auto !important;
          }
          .no-print, header, aside, nav {
            display: none !important;
          }
          main {
            padding: 0 !important;
            margin: 0 !important;
            max-width: none !important;
            width: 100% !important;
            overflow: visible !important;
          }
          #printable-bill-invoice {
            box-shadow: none !important;
            border: none !important;
            width: 100% !important;
            min-height: auto !important;
            margin: 0 auto !important;
            page-break-after: avoid !important;
            page-break-inside: avoid !important;
          }
          @page {
            size: A4 portrait;
            margin: 0mm;
          }
        }
      `}</style>
    </div>
  );
}
