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
  ArrowRight,
  FileText,
  Sparkles,
  Building2,
  Filter,
  Sliders,
  X,
  FileDown,
  Info
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Formatters, formatBDT, numberToWordsBDT } from '@/lib/formatters';
import { Quotation, INITIAL_QUOTATIONS } from '@/components/modules/QuotationView';

export interface BillInvoiceItem {
  id: string;
  itemNo: number;
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

export function BillInvoiceView({ initialSelectedQuoteId }: { initialSelectedQuoteId?: string }) {
  const [bills, setBills] = useState<BillInvoice[]>(INITIAL_BILL_INVOICES);
  const [quotations, setQuotations] = useState<Quotation[]>(INITIAL_QUOTATIONS);
  const [isMounted, setIsMounted] = useState(false);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | BillInvoiceStatus>('ALL');

  // Modals
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [activeBill, setActiveBill] = useState<BillInvoice | null>(null);

  // Pad Print Settings
  const [padTopMarginMm, setPadTopMarginMm] = useState<number>(45); // Standard Bangladesh company pad header = 45mm
  const [includeSealOnPad, setIncludeSealOnPad] = useState<boolean>(false);
  const [usePreprintedPadMode, setUsePreprintedPadMode] = useState<boolean>(true); // TRUE = No digital letterhead/watermark/footer

  // Form State for Create / Edit
  const [editingBillId, setEditingBillId] = useState<string | null>(null);
  const [selectedQuoteId, setSelectedQuoteId] = useState<string>('');
  const [formData, setFormData] = useState<Partial<BillInvoice>>({
    billNo: `GT/${new Date().getFullYear().toString().slice(-2)}${Math.floor(100 + Math.random() * 900)}`,
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
    const yearSuffix = new Date().getFullYear().toString().slice(-2);
    const nextNum = Math.floor(100 + Math.random() * 900);
    const generatedBillNo = `GT/${yearSuffix}${nextNum}`;

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

    setFormData({
      ...currentFormState,
      poNumber: targetQuote.reference || currentFormState.poNumber || 'POBD9729-1',
      quotationRef: targetQuote.quotationNumber,
      quotationId: targetQuote.id,
      binNumber: targetQuote.customerBin || currentFormState.binNumber || '004728009-0202',
      billToName: targetQuote.customerCompany || targetQuote.customerName || '',
      billToAddress: targetQuote.customerAddress || '',
      deliverToAddress: deliveryLocation,
      deliverToName: deliverContactName,
      deliverToPhone: deliverContactPhone,
      items: mappedItems,
      subTotal: totals.subTotal,
      vatTaxIncluded: true,
      vatTaxAmount: 0,
      grandTotal: totals.grandTotal,
      amountInWords: totals.amountInWords,
      termsAndConditions: terms
    });
  };

  // Open Edit Modal
  const handleOpenEditModal = (bill: BillInvoice) => {
    setEditingBillId(bill.id);
    setSelectedQuoteId(bill.quotationId || '');
    setFormData({ ...bill });
    setIsCreateModalOpen(true);
  };

  // Duplicate an existing bill
  const handleDuplicateBill = (bill: BillInvoice) => {
    const yearSuffix = new Date().getFullYear().toString().slice(-2);
    const nextNum = Math.floor(100 + Math.random() * 900);
    const newBill: BillInvoice = {
      ...bill,
      id: `bill-${Date.now()}`,
      billNo: `GT/${yearSuffix}${nextNum}`,
      date: Formatters.date(new Date()),
      status: 'ISSUED',
      createdAt: new Date().toISOString()
    };
    setBills([newBill, ...bills]);
  };

  // Delete bill
  const handleDeleteBill = (id: string) => {
    if (confirm('Are you sure you want to delete this Bill Invoice?')) {
      setBills(bills.filter((b) => b.id !== id));
      if (activeBill?.id === id) {
        setIsPreviewModalOpen(false);
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

    if (editingBillId) {
      // Update existing
      setBills(
        bills.map((b) =>
          b.id === editingBillId
            ? ({
                ...b,
                ...formData,
                items,
                subTotal: totals.subTotal,
                grandTotal: totals.grandTotal,
                amountInWords: totals.amountInWords
              } as BillInvoice)
            : b
        )
      );
    } else {
      // Create new
      const newBill: BillInvoice = {
        id: `bill-${Date.now()}`,
        billNo: formData.billNo || `GT/${Date.now().toString().slice(-5)}`,
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

      setBills([newBill, ...bills]);
      setActiveBill(newBill);
    }

    setIsCreateModalOpen(false);
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
    const item = { ...currentItems[index], [field]: value };

    if (field === 'quantity' || field === 'unitPrice') {
      const q = field === 'quantity' ? Number(value) || 0 : currentItems[index].quantity;
      const p = field === 'unitPrice' ? Number(value) || 0 : currentItems[index].unitPrice;
      item.amount = q * p;
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

  // Open Preview Modal
  const handleOpenPreview = (bill: BillInvoice) => {
    setActiveBill(bill);
    setIsPreviewModalOpen(true);
  };

  // Print directly using browser print
  const handlePrintBill = () => {
    window.print();
  };

  // Filtered Bills
  const filteredBills = useMemo(() => {
    return bills.filter((b) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        b.billNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.billToName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.poNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (b.quotationRef && b.quotationRef.toLowerCase().includes(searchQuery.toLowerCase())) ||
        b.items.some((it) => it.name.toLowerCase().includes(searchQuery.toLowerCase()));

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
            placeholder="Search by Bill NO, Client, PO, Quotation, or Item..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
          />
        </div>

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
                      {bill.billNo}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap text-slate-400">
                      {bill.date}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-slate-200">{bill.billToName}</div>
                      <div className="text-[11px] text-slate-500 truncate max-w-xs">{bill.billToAddress}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-mono text-slate-300">{bill.poNumber || '—'}</div>
                      {bill.quotationRef && (
                        <div className="text-[10px] text-sky-400 font-mono flex items-center gap-1">
                          <span>Ref: {bill.quotationRef}</span>
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-slate-300 font-medium truncate max-w-[180px]">
                        {bill.deliverToAddress || '—'}
                      </div>
                      {bill.deliverToName && (
                        <div className="text-[11px] text-slate-500">
                          {bill.deliverToName} ({bill.deliverToPhone})
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
                          className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition"
                        >
                          <Eye className="w-3.5 h-3.5" />
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

      {/* CREATE / EDIT BILL INVOICE MODAL */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title={editingBillId ? `Edit Bill Invoice (${formData.billNo})` : 'Create New Bill Invoice'}
        size="xl"
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
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Bill NO *</label>
              <input
                type="text"
                required
                value={formData.billNo || ''}
                onChange={(e) => setFormData({ ...formData, billNo: e.target.value })}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg font-mono font-bold text-emerald-400 focus:outline-none focus:border-emerald-500"
                placeholder="GT/26107"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Date *</label>
              <input
                type="text"
                required
                value={formData.date || ''}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500"
                placeholder="23-Feb-26"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">PO Number</label>
              <input
                type="text"
                value={formData.poNumber || ''}
                onChange={(e) => setFormData({ ...formData, poNumber: e.target.value })}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500"
                placeholder="POBD9729-1"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Status</label>
              <select
                value={formData.status || 'ISSUED'}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as BillInvoiceStatus })}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500"
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
                    onChange={(e) => setFormData({ ...formData, deliverToName: e.target.value })}
                    className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500"
                    placeholder="Rony"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Contact Phone</label>
                  <input
                    type="text"
                    value={formData.deliverToPhone || ''}
                    onChange={(e) => setFormData({ ...formData, deliverToPhone: e.target.value })}
                    className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500"
                    placeholder="1999074461"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-200">Bill Items</h3>
              <button
                type="button"
                onClick={handleAddItem}
                className="flex items-center gap-1.5 px-3 py-1 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 rounded-lg font-medium transition"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Item</span>
              </button>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-400 font-semibold text-[10px] uppercase">
                    <th className="py-2 px-3 w-12 text-center">SN</th>
                    <th className="py-2 px-3 min-w-[160px]">Item Name</th>
                    <th className="py-2 px-3 min-w-[200px]">Description</th>
                    <th className="py-2 px-3 w-24">Unit</th>
                    <th className="py-2 px-3 w-20 text-center">Qty</th>
                    <th className="py-2 px-3 w-28 text-right">Unit Price</th>
                    <th className="py-2 px-3 w-28 text-right">Amount</th>
                    <th className="py-2 px-3 w-10"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {(formData.items || []).map((item, index) => (
                    <tr key={item.id} className="hover:bg-slate-900/40">
                      <td className="py-2 px-3 text-center text-slate-500 font-mono">
                        {index + 1}
                      </td>
                      <td className="py-2 px-3">
                        <input
                          type="text"
                          required
                          value={item.name}
                          onChange={(e) => handleUpdateItem(index, 'name', e.target.value)}
                          className="w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-emerald-500"
                          placeholder="Rosenberger UTP Cable"
                        />
                      </td>
                      <td className="py-2 px-3">
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => handleUpdateItem(index, 'description', e.target.value)}
                          className="w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-emerald-500"
                          placeholder="Rosenberger Cat-6 UTP Cable, 305M"
                        />
                      </td>
                      <td className="py-2 px-3">
                        <input
                          type="text"
                          value={item.unit}
                          onChange={(e) => handleUpdateItem(index, 'unit', e.target.value)}
                          className="w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-emerald-500 text-center"
                          placeholder="Box"
                        />
                      </td>
                      <td className="py-2 px-3">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleUpdateItem(index, 'quantity', e.target.value)}
                          className="w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-emerald-500 text-center font-mono"
                        />
                      </td>
                      <td className="py-2 px-3">
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          value={item.unitPrice}
                          onChange={(e) => handleUpdateItem(index, 'unitPrice', e.target.value)}
                          className="w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-emerald-500 text-right font-mono"
                        />
                      </td>
                      <td className="py-2 px-3 text-right font-mono font-bold text-slate-100">
                        {formatBDT(item.amount)}
                      </td>
                      <td className="py-2 px-2 text-center">
                        {(formData.items?.length || 0) > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(index)}
                            className="text-rose-400 hover:text-rose-300 p-1"
                          >
                            <X className="w-3.5 h-3.5" />
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
              {editingBillId ? 'Update Bill Invoice' : 'Save Bill Invoice'}
            </button>
          </div>
        </form>
      </Modal>

      {/* VIEW & PRINT PAD INVOICE MODAL (Strictly matching PDF and pre-printed pad paper) */}
      {activeBill && (
        <Modal
          isOpen={isPreviewModalOpen}
          onClose={() => setIsPreviewModalOpen(false)}
          title={`Bill Invoice Preview - ${activeBill.billNo}`}
          size="xl"
        >
          <div className="space-y-6">
            {/* Pad Calibration & Print Action Bar (Hidden when printed) */}
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl flex flex-wrap items-center justify-between gap-4 no-print">
              <div className="flex flex-wrap items-center gap-4">
                {/* Pad Print Mode Toggle */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-slate-300">Printing Mode:</span>
                  <div className="flex items-center bg-slate-950 p-0.5 rounded-lg border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setUsePreprintedPadMode(true)}
                      className={`px-3 py-1 rounded text-xs font-semibold transition ${
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
                      className={`px-3 py-1 rounded text-xs font-semibold transition ${
                        !usePreprintedPadMode
                          ? 'bg-blue-600 text-white shadow'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Plain White Paper
                    </button>
                  </div>
                </div>

                {/* Top Pad Spacing Selector */}
                {usePreprintedPadMode && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Pad Header Spacing:</span>
                    <select
                      value={padTopMarginMm}
                      onChange={(e) => setPadTopMarginMm(Number(e.target.value))}
                      className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 font-mono"
                    >
                      <option value={35}>35 mm (Compact Pad)</option>
                      <option value={45}>45 mm (Standard Pad)</option>
                      <option value={55}>55 mm (Tall Header Pad)</option>
                      <option value={65}>65 mm (Large Pad)</option>
                    </select>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrintBill}
                  className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded-lg text-xs font-bold shadow-lg shadow-emerald-600/20 transition"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print to Pad (A4)</span>
                </button>
              </div>
            </div>

            {/* Information Notice for User */}
            <div className="p-3 bg-emerald-950/30 border border-emerald-500/20 rounded-xl text-emerald-400 text-xs flex items-start gap-2.5 no-print">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Company Pad Printing Notice:</p>
                <p className="text-[11px] text-emerald-300/80 mt-0.5">
                  This document has zero digital letterhead, zero watermark, and zero footer so you can print directly on your pre-printed Globo Tech pad paper. In your browser print dialog, ensure paper size is set to <strong>A4</strong> and margins are set to <strong>Default</strong> or <strong>None</strong>.
                </p>
              </div>
            </div>

            {/* A4 PRINTABLE BILL INVOICE CONTAINER */}
            <div className="overflow-x-auto bg-slate-950 p-2 sm:p-4 rounded-xl border border-slate-800 flex justify-center">
              <div
                id="printable-bill-invoice"
                style={{
                  paddingTop: usePreprintedPadMode ? `${padTopMarginMm}mm` : '20mm',
                  minHeight: '297mm',
                  width: '210mm',
                  boxSizing: 'border-box'
                }}
                className="bg-white text-black p-8 sm:p-10 font-sans shadow-2xl relative select-text print:shadow-none print:w-full print:p-0 print:m-0"
              >
                {/* Plain Paper Header (ONLY shown when pre-printed pad mode is disabled) */}
                {!usePreprintedPadMode && (
                  <div className="border-b-2 border-black pb-4 mb-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h1 className="text-2xl font-black tracking-tight text-slate-900">GLOBO TECH</h1>
                        <p className="text-xs text-slate-700 font-medium">Enterprise Supply & Engineering Solutions</p>
                        <p className="text-[10px] text-slate-600 mt-1">
                          Dhaka, Bangladesh | Phone: +880 1711-223344 | Email: info@globotechbd.com
                        </p>
                      </div>
                      <div className="text-right text-[10px] text-slate-600">
                        <p>BIN: 004728009-0202</p>
                        <p>TIN: 169493772750</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* EXACT PDF TOP SECTION: Title Box on Left, Date/Bill No/PO/BIN/TIN on Right */}
                <div className="flex justify-between items-start mb-6">
                  {/* Title Box */}
                  <div className="pt-1">
                    <div className="border-2 border-black px-6 py-2">
                      <h2 className="text-xl sm:text-2xl font-black text-black tracking-wide">
                        Bill Invoice
                      </h2>
                    </div>
                  </div>

                  {/* Metadata List */}
                  <div className="text-right text-xs leading-tight font-medium text-black space-y-1">
                    <p><span className="font-bold">Date:</span> {activeBill.date}</p>
                    <p><span className="font-bold">Bill NO:</span> {activeBill.billNo}</p>
                    <p><span className="font-bold">PO :</span> {activeBill.poNumber || '—'}</p>
                    <p><span className="font-bold">BIN:</span> {activeBill.binNumber || '004728009-0202'}</p>
                    <p><span className="font-bold">TIN:</span> {activeBill.tinNumber || '169493772750'}</p>
                  </div>
                </div>

                {/* TWO COLUMN PARTY DETAILS: Bill To vs Deliver To */}
                <div className="grid grid-cols-2 gap-8 mb-6 text-xs text-black">
                  {/* Bill To */}
                  <div>
                    <h3 className="font-bold text-sm text-black border-b border-black pb-0.5 mb-2 inline-block min-w-[120px]">
                      Bill To
                    </h3>
                    <div className="space-y-1">
                      <p>
                        <span className="font-bold">Name:</span> {activeBill.billToName}
                      </p>
                      <p className="leading-snug">
                        <span className="font-bold">Address:</span> {activeBill.billToAddress}
                      </p>
                    </div>
                  </div>

                  {/* Deliver To */}
                  <div>
                    <h3 className="font-bold text-sm text-black border-b border-black pb-0.5 mb-2 inline-block min-w-[120px]">
                      Deliver To
                    </h3>
                    <div className="space-y-1">
                      <p className="leading-snug">
                        <span className="font-bold">Address:</span> {activeBill.deliverToAddress || '—'}
                      </p>
                      {activeBill.deliverToName && (
                        <p>
                          <span className="font-bold">Name:</span> {activeBill.deliverToName}
                        </p>
                      )}
                      {activeBill.deliverToPhone && (
                        <p>
                          <span className="font-bold">Phone No:</span> {activeBill.deliverToPhone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* ITEMS TABLE (Exact borders & columns matching PDF) */}
                <div className="mb-4">
                  <table className="w-full border-collapse border border-black text-xs text-black">
                    <thead>
                      <tr className="border-b border-black text-center font-bold">
                        <th className="border-r border-black py-2 px-2 w-10">SN</th>
                        <th className="border-r border-black py-2 px-3 text-left w-48">Item name</th>
                        <th className="border-r border-black py-2 px-3 text-left">Discription</th>
                        <th className="border-r border-black py-2 px-2 w-16">Unite</th>
                        <th className="border-r border-black py-2 px-2 w-12">Qty</th>
                        <th className="border-r border-black py-2 px-2 text-right w-24">Unite Price</th>
                        <th className="py-2 px-2 text-right w-28">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeBill.items.map((item, idx) => (
                        <tr key={item.id} className="border-b border-black text-xs align-top">
                          <td className="border-r border-black py-2.5 px-2 text-center font-medium">
                            {idx + 1}
                          </td>
                          <td className="border-r border-black py-2.5 px-3 font-semibold">
                            {item.name}
                          </td>
                          <td className="border-r border-black py-2.5 px-3 leading-snug">
                            {item.description || item.name}
                          </td>
                          <td className="border-r border-black py-2.5 px-2 text-center">
                            {item.unit}
                          </td>
                          <td className="border-r border-black py-2.5 px-2 text-center font-bold">
                            {item.quantity}
                          </td>
                          <td className="border-r border-black py-2.5 px-2 text-right font-medium">
                            {Number(item.unitPrice).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            })}
                          </td>
                          <td className="py-2.5 px-2 text-right font-bold">
                            {Number(item.amount).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            })}
                          </td>
                        </tr>
                      ))}

                      {/* Visual filler height for authentic pad bill aesthetics */}
                      {activeBill.items.length < 3 && (
                        <tr className="border-b border-black" style={{ height: '40px' }}>
                          <td className="border-r border-black"></td>
                          <td className="border-r border-black"></td>
                          <td className="border-r border-black"></td>
                          <td className="border-r border-black"></td>
                          <td className="border-r border-black"></td>
                          <td className="border-r border-black"></td>
                          <td></td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* BOTTOM TOTALS: Amount in Word Box (Left) & SubTotal / VAT / Grand Total (Right) */}
                <div className="grid grid-cols-12 gap-4 mb-6 text-xs text-black">
                  {/* Amount In Word Box */}
                  <div className="col-span-7">
                    <div className="border border-black p-3 min-h-[60px] flex flex-col justify-center">
                      <p className="font-bold mb-1">Amount In Word</p>
                      <p className="font-medium italic leading-snug">
                        {activeBill.amountInWords || numberToWordsBDT(activeBill.grandTotal, 'BDT', { style: 'suffix', suffixUnit: 'Taka', dotEnd: true })}
                      </p>
                    </div>
                  </div>

                  {/* Summary Rows */}
                  <div className="col-span-5 text-xs text-black font-semibold space-y-1">
                    <div className="flex justify-between py-1 border-b border-black">
                      <span>Sub Total</span>
                      <span>
                        {Number(activeBill.subTotal).toLocaleString('en-US', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-black">
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

                    <div className="flex justify-between py-1.5 font-bold text-sm border-b-4 border-double border-black">
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
                <div className="grid grid-cols-2 gap-8 mb-12 text-xs text-black">
                  {/* Terms & Conditions */}
                  <div>
                    <h3 className="font-bold text-xs text-black border-b border-black pb-0.5 mb-2 inline-block min-w-[140px]">
                      Terms & Conditions
                    </h3>
                    <div className="space-y-1 text-black font-medium leading-relaxed">
                      {activeBill.termsAndConditions.map((term, tIdx) => (
                        <p key={tIdx}>{term}</p>
                      ))}
                    </div>
                  </div>

                  {/* Payment Details */}
                  <div>
                    <h3 className="font-bold text-xs text-black border-b border-black pb-0.5 mb-2 inline-block min-w-[140px]">
                      Payment Details
                    </h3>
                    <div className="space-y-1 text-black font-medium leading-tight">
                      <p><span className="font-bold">Account No :</span> {activeBill.bankAccountNo}</p>
                      <p><span className="font-bold">Account Title:</span> {activeBill.bankAccountTitle}</p>
                      <p><span className="font-bold">Bank Name :</span> {activeBill.bankName}</p>
                      <p><span className="font-bold">Branch Name:</span> {activeBill.bankBranchName}</p>
                    </div>
                  </div>
                </div>

                {/* SIGNATURES: Received By (Left) & Prepared By (Right) */}
                <div className="pt-8 flex justify-between items-end text-xs text-black font-bold">
                  <div className="text-center min-w-[180px]">
                    <div className="border-t-2 border-black pt-1">
                      Received By
                    </div>
                  </div>

                  <div className="text-center min-w-[180px]">
                    <div className="border-t-2 border-black pt-1">
                      Prepared By
                    </div>
                  </div>
                </div>

                {/* Plain Paper Footer (ONLY shown when Pre-Printed Pad Mode is FALSE) */}
                {!usePreprintedPadMode && (
                  <div className="border-t border-slate-300 pt-3 mt-8 text-center text-[10px] text-slate-500">
                    This is an electronically generated bill invoice. For questions, contact info@globotechbd.com.
                  </div>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Embedded Print CSS to guarantee clean single-page pad print */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .no-print {
            display: none !important;
          }
          #printable-bill-invoice {
            box-shadow: none !important;
            border: none !important;
            width: 100% !important;
            min-height: auto !important;
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
