'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  WalletCards,
  Building2,
  Package,
  Plus,
  Search,
  Filter,
  DollarSign,
  CreditCard,
  Printer,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ArrowRight,
  Trash2,
  FileText,
  Calendar,
  Layers,
  Phone,
  Mail,
  Receipt,
  Download,
  ExternalLink,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  ArrowDownRight
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { StatCard } from '@/components/ui/StatCard';
import { Formatters } from '@/lib/formatters';
import { GLOBO_TECH_LOGO_DATA_URL } from '@/lib/brandAssets';
import {
  PurchaseBillRecord,
  PurchaseItem,
  SupplierPaymentRecord,
  CompanySummary,
  getStoredPurchases,
  saveStoredPurchases,
  addPurchaseBill,
  recordSupplierPayment,
  deletePurchaseBill,
  getCompanySummaries
} from '@/lib/purchasesStorage';
import { getStoredProducts, ProductItem } from '@/lib/productsStorage';

interface PurchasesViewProps {
  globalSearchQuery?: string;
  canViewCosts?: boolean;
}

export function PurchasesView({ globalSearchQuery = '', canViewCosts = true }: PurchasesViewProps) {
  // State
  const [purchases, setPurchases] = useState<PurchaseBillRecord[]>(() => getStoredPurchases());
  const [products, setProducts] = useState<ProductItem[]>(() => getStoredProducts());
  const [searchQuery, setSearchQuery] = useState<string>(globalSearchQuery);
  const [selectedCompanyFilter, setSelectedCompanyFilter] = useState<string>('ALL');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<'ALL' | 'DUE' | 'PAID'>('ALL');
  const [viewMode, setViewMode] = useState<'companies' | 'items' | 'bills'>('companies');
  
  // Expanded company cards state
  const [expandedCompanies, setExpandedCompanies] = useState<Record<string, boolean>>({
    'Shenzhen Hikvision Security Tech Co., Ltd': true,
    'Guangzhou Dahua Optics & AI Electronics': true,
    'Hangzhou TP-Link Communication Equip Co.': true
  });

  // Modal States
  const [isNewBillModalOpen, setIsNewBillModalOpen] = useState<boolean>(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);
  const [selectedBillForPayment, setSelectedBillForPayment] = useState<PurchaseBillRecord | null>(null);
  const [selectedCompanyForPrint, setSelectedCompanyForPrint] = useState<CompanySummary | null>(null);

  // Synchronize global search
  useEffect(() => {
    if (globalSearchQuery !== undefined) {
      setSearchQuery(globalSearchQuery);
    }
  }, [globalSearchQuery]);

  // Listen for storage & external update events
  useEffect(() => {
    const handleUpdates = () => {
      setPurchases(getStoredPurchases());
      setProducts(getStoredProducts());
    };
    window.addEventListener('globotech_purchases_updated', handleUpdates);
    window.addEventListener('globotech_backup_restored', handleUpdates);
    window.addEventListener('storage', handleUpdates);
    return () => {
      window.removeEventListener('globotech_purchases_updated', handleUpdates);
      window.removeEventListener('globotech_backup_restored', handleUpdates);
      window.removeEventListener('storage', handleUpdates);
    };
  }, []);

  // Compute rollups
  const companySummaries = useMemo(() => {
    return getCompanySummaries(purchases);
  }, [purchases]);

  // Overall KPIs
  const overallKPIs = useMemo(() => {
    let totalPurchased = 0;
    let totalPaid = 0;
    let totalDue = 0;
    let totalItems = 0;
    let companiesWithDue = 0;

    for (const c of companySummaries) {
      totalPurchased += c.totalPurchased;
      totalPaid += c.totalPaid;
      totalDue += c.totalDue;
      totalItems += c.itemsCount;
      if (c.totalDue > 0) companiesWithDue += 1;
    }

    const paidPercentage = totalPurchased > 0 ? (totalPaid / totalPurchased) * 100 : 0;

    return {
      totalPurchased,
      totalPaid,
      totalDue,
      totalItems,
      totalCompanies: companySummaries.length,
      companiesWithDue,
      paidPercentage
    };
  }, [companySummaries]);

  // Filtered Company Summaries
  const filteredCompanySummaries = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return companySummaries.filter((comp) => {
      // Company dropdown filter
      if (selectedCompanyFilter !== 'ALL' && comp.supplierName !== selectedCompanyFilter) {
        return false;
      }

      // Status filter
      if (selectedStatusFilter === 'DUE' && comp.totalDue <= 0) return false;
      if (selectedStatusFilter === 'PAID' && comp.totalDue > 0) return false;

      // Text search
      if (!query) return true;

      const matchesCompanyName = comp.supplierName.toLowerCase().includes(query);
      const matchesCountry = comp.supplierCountry.toLowerCase().includes(query);
      const matchesPhone = comp.supplierPhone.toLowerCase().includes(query);
      const matchesAnyItem = comp.allItems.some(
        (item) =>
          item.productName.toLowerCase().includes(query) ||
          (item.sku && item.sku.toLowerCase().includes(query)) ||
          item.billNumber.toLowerCase().includes(query)
      );

      return matchesCompanyName || matchesCountry || matchesPhone || matchesAnyItem;
    });
  }, [companySummaries, selectedCompanyFilter, selectedStatusFilter, searchQuery]);

  // Flattened All Items for Table View
  const allFlattenedItems = useMemo(() => {
    const list: Array<
      PurchaseItem & {
        supplierName: string;
        billId: string;
        billNumber: string;
        purchaseDate: string;
        billPaid: number;
        billDue: number;
        billTotal: number;
        billStatus: 'PAID' | 'PARTIAL' | 'UNPAID';
        fullBill: PurchaseBillRecord;
      }
    > = [];

    for (const bill of purchases) {
      for (const item of bill.items) {
        list.push({
          ...item,
          supplierName: bill.supplierName,
          billId: bill.id,
          billNumber: bill.billNumber,
          purchaseDate: bill.date,
          billPaid: bill.paidAmount,
          billDue: bill.dueAmount,
          billTotal: bill.totalAmount,
          billStatus: bill.status,
          fullBill: bill
        });
      }
    }

    const query = searchQuery.trim().toLowerCase();
    return list.filter((item) => {
      if (selectedCompanyFilter !== 'ALL' && item.supplierName !== selectedCompanyFilter) return false;
      if (selectedStatusFilter === 'DUE' && item.billDue <= 0) return false;
      if (selectedStatusFilter === 'PAID' && item.billDue > 0) return false;

      if (!query) return true;
      return (
        item.productName.toLowerCase().includes(query) ||
        (item.sku && item.sku.toLowerCase().includes(query)) ||
        item.supplierName.toLowerCase().includes(query) ||
        item.billNumber.toLowerCase().includes(query)
      );
    });
  }, [purchases, selectedCompanyFilter, selectedStatusFilter, searchQuery]);

  // Filtered Bills
  const filteredBills = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return purchases.filter((bill) => {
      if (selectedCompanyFilter !== 'ALL' && bill.supplierName !== selectedCompanyFilter) return false;
      if (selectedStatusFilter === 'DUE' && bill.dueAmount <= 0) return false;
      if (selectedStatusFilter === 'PAID' && bill.dueAmount > 0) return false;

      if (!query) return true;
      const matchBillNo = bill.billNumber.toLowerCase().includes(query);
      const matchSupplier = bill.supplierName.toLowerCase().includes(query);
      const matchItem = bill.items.some(
        (it) => it.productName.toLowerCase().includes(query) || (it.sku && it.sku.toLowerCase().includes(query))
      );
      return matchBillNo || matchSupplier || matchItem;
    });
  }, [purchases, selectedCompanyFilter, selectedStatusFilter, searchQuery]);

  // Toggle company accordion
  const toggleCompany = (companyName: string) => {
    setExpandedCompanies((prev) => ({
      ...prev,
      [companyName]: !prev[companyName]
    }));
  };

  // Expand / Collapse all
  const expandAllCompanies = (expand: boolean) => {
    const update: Record<string, boolean> = {};
    for (const c of companySummaries) {
      update[c.supplierName] = expand;
    }
    setExpandedCompanies(update);
  };

  // Form State for New Bill Modal
  const [newBillSupplierName, setNewBillSupplierName] = useState<string>('');
  const [newBillNumber, setNewBillNumber] = useState<string>(() => `PO-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`);
  const [newBillDate, setNewBillDate] = useState<string>(() => new Date().toISOString().split('T')[0]);
  const [newBillDueDate, setNewBillDueDate] = useState<string>('');
  const [newBillItems, setNewBillItems] = useState<Array<Omit<PurchaseItem, 'id' | 'totalPrice'> & { id: string }>>([
    {
      id: 'item-1',
      productName: '',
      sku: '',
      category: '',
      quantity: 1,
      unit: 'pcs',
      unitPrice: 0,
      notes: ''
    }
  ]);
  const [newBillInitialPaid, setNewBillInitialPaid] = useState<number>(0);
  const [newBillPaymentMethod, setNewBillPaymentMethod] = useState<'Bank Transfer' | 'TT / LC' | 'Cash' | 'Cheque' | 'bKash / Nagad' | 'Other'>('Bank Transfer');
  const [newBillPaymentRef, setNewBillPaymentRef] = useState<string>('');
  const [newBillNotes, setNewBillNotes] = useState<string>('');

  // Auto calculate total for new bill
  const newBillSubtotal = useMemo(() => {
    return newBillItems.reduce((acc, it) => acc + (Number(it.quantity) || 0) * (Number(it.unitPrice) || 0), 0);
  }, [newBillItems]);

  const newBillDueAmount = useMemo(() => {
    return Math.max(0, newBillSubtotal - (Number(newBillInitialPaid) || 0));
  }, [newBillSubtotal, newBillInitialPaid]);

  // Add Item Row in Modal
  const handleAddBillItemRow = () => {
    setNewBillItems((prev) => [
      ...prev,
      {
        id: `item-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        productName: '',
        sku: '',
        category: '',
        quantity: 1,
        unit: 'pcs',
        unitPrice: 0,
        notes: ''
      }
    ]);
  };

  // Remove Item Row
  const handleRemoveBillItemRow = (index: number) => {
    if (newBillItems.length <= 1) return;
    setNewBillItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Update Item Row
  const handleUpdateBillItemRow = (index: number, field: string, value: any) => {
    setNewBillItems((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };

      // Auto-fill SKU/unit/category if product selected from ERP catalog
      if (field === 'productName') {
        const found = products.find((p) => p.name === value);
        if (found) {
          copy[index].sku = found.sku || '';
          copy[index].category = found.category || '';
          copy[index].unit = found.unit || 'pcs';
          if (found.currentLandedCost) copy[index].unitPrice = found.currentLandedCost;
        }
      }
      return copy;
    });
  };

  // Submit New Bill
  const handleCreateBillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBillSupplierName.trim()) {
      alert('অনুগ্রহ করে কোম্পানি / সাপ্লায়ারের নাম দিন');
      return;
    }
    if (newBillItems.length === 0 || !newBillItems[0].productName.trim()) {
      alert('কমপক্ষে একটি প্রোডাক্টের নাম ও রেট যুক্ত করুন');
      return;
    }

    const compiledItems: PurchaseItem[] = newBillItems.map((it, idx) => ({
      id: `pi-${Date.now()}-${idx}`,
      productName: it.productName.trim(),
      sku: it.sku?.trim() || undefined,
      category: it.category || undefined,
      quantity: Number(it.quantity) || 1,
      unit: it.unit || 'pcs',
      unitPrice: Number(it.unitPrice) || 0,
      totalPrice: (Number(it.quantity) || 1) * (Number(it.unitPrice) || 0),
      notes: it.notes?.trim() || undefined
    }));

    const paymentsList: SupplierPaymentRecord[] = [];
    const initialPaidNum = Number(newBillInitialPaid) || 0;
    if (initialPaidNum > 0) {
      paymentsList.push({
        id: `pay-${Date.now()}`,
        date: newBillDate,
        amount: initialPaidNum,
        paymentMethod: newBillPaymentMethod,
        referenceNo: newBillPaymentRef.trim() || undefined,
        note: 'Initial down payment at bill creation',
        createdAt: new Date().toISOString()
      });
    }

    addPurchaseBill({
      billNumber: newBillNumber.trim(),
      supplierId: `supp-${Date.now()}`,
      supplierName: newBillSupplierName.trim(),
      date: newBillDate,
      dueDate: newBillDueDate || undefined,
      items: compiledItems,
      subtotal: newBillSubtotal,
      totalAmount: newBillSubtotal,
      paidAmount: initialPaidNum,
      payments: paymentsList,
      notes: newBillNotes.trim() || undefined
    });

    setPurchases(getStoredPurchases());
    setIsNewBillModalOpen(false);

    // Reset Form
    setNewBillSupplierName('');
    setNewBillNumber(`PO-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`);
    setNewBillItems([
      {
        id: 'item-1',
        productName: '',
        sku: '',
        category: '',
        quantity: 1,
        unit: 'pcs',
        unitPrice: 0,
        notes: ''
      }
    ]);
    setNewBillInitialPaid(0);
    setNewBillPaymentRef('');
    setNewBillNotes('');
  };

  // Payment Modal State
  const [paymentAmountInput, setPaymentAmountInput] = useState<number>(0);
  const [paymentDateInput, setPaymentDateInput] = useState<string>(() => new Date().toISOString().split('T')[0]);
  const [paymentMethodInput, setPaymentMethodInput] = useState<'Bank Transfer' | 'TT / LC' | 'Cash' | 'Cheque' | 'bKash / Nagad' | 'Other'>('Bank Transfer');
  const [paymentBankInput, setPaymentBankInput] = useState<string>('');
  const [paymentRefInput, setPaymentRefInput] = useState<string>('');
  const [paymentNoteInput, setPaymentNoteInput] = useState<string>('');

  const openPaymentModal = (bill: PurchaseBillRecord) => {
    setSelectedBillForPayment(bill);
    setPaymentAmountInput(bill.dueAmount);
    setPaymentDateInput(new Date().toISOString().split('T')[0]);
    setPaymentMethodInput('Bank Transfer');
    setPaymentBankInput('');
    setPaymentRefInput('');
    setPaymentNoteInput('');
    setIsPaymentModalOpen(true);
  };

  const handleRecordPaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBillForPayment) return;
    const payNum = Number(paymentAmountInput);
    if (!payNum || payNum <= 0) {
      alert('সঠিক পরিশোধের পরিমাণ প্রদান করুন');
      return;
    }
    if (payNum > selectedBillForPayment.dueAmount) {
      const confirmOverpay = confirm(
        `পরিশোধের পরিমাণ (৳ ${payNum.toLocaleString()}) বকেয়ার চেয়ে বেশি (৳ ${selectedBillForPayment.dueAmount.toLocaleString()})। আপনি কি নিশ্চিত?`
      );
      if (!confirmOverpay) return;
    }

    recordSupplierPayment(selectedBillForPayment.id, {
      date: paymentDateInput,
      amount: payNum,
      paymentMethod: paymentMethodInput,
      bankName: paymentBankInput.trim() || undefined,
      referenceNo: paymentRefInput.trim() || undefined,
      note: paymentNoteInput.trim() || undefined
    });

    setPurchases(getStoredPurchases());
    setIsPaymentModalOpen(false);
    setSelectedBillForPayment(null);
  };

  const handleDeleteBill = (billId: string, billNo: string) => {
    if (confirm(`আপনি কি নিশ্চিত যে বিল নং ${billNo} মুছে ফেলতে চান?`)) {
      deletePurchaseBill(billId);
      setPurchases(getStoredPurchases());
    }
  };

  const openPrintStatement = (summary: CompanySummary) => {
    setSelectedCompanyForPrint(summary);
    setIsPrintModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner / Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 flex-shrink-0">
            <WalletCards className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-lg sm:text-xl font-bold text-slate-100 leading-tight">
                কোম্পানি ক্রয়, প্রোডাক্ট রেট ও বকেয়া খতিয়ান
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-950 text-blue-300 border border-blue-800">
                Supplier Purchases & Dues
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              কোন কোম্পানি থেকে কোন পণ্য কত রেটে ক্রয় করা হয়েছে, কত টাকা পরিশোধ হয়েছে এবং কত টাকা বাকি আছে তার পূর্ণাঙ্গ ড্যাশবোর্ড
            </p>
          </div>
        </div>

        {/* Global Action Buttons */}
        <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
          <button
            onClick={() => setIsNewBillModalOpen(true)}
            className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>নতুন ক্রয় বিল যুক্ত করুন</span>
          </button>

          {companySummaries.length > 0 && (
            <button
              onClick={() => openPrintStatement(companySummaries[0])}
              className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition flex items-center justify-center gap-2 active:scale-95"
              title="Print Supplier Statement"
            >
              <Printer className="w-4 h-4 text-slate-400" />
              <span className="hidden sm:inline">লেজার প্রিন্ট</span>
            </button>
          )}
        </div>
      </div>

      {/* Financial & Operational KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="মোট ক্রয়কৃত ভ্যালু (Total Purchases)"
          value={Formatters.currency(overallKPIs.totalPurchased)}
          subtext={`${overallKPIs.totalCompanies} টি কোম্পানি থেকে ${purchases.length} টি বিল`}
          subtextColor="text-blue-400"
          icon={<Receipt className="w-5 h-5" />}
          accentColor="primary"
        />

        <StatCard
          label="মোট পরিশোধকৃত টাকা (Total Paid)"
          value={Formatters.currency(overallKPIs.totalPaid)}
          subtext={`${overallKPIs.paidPercentage.toFixed(1)}% টাকা পরিশোধ সম্পন্ন`}
          subtextColor="text-emerald-400"
          icon={<CheckCircle2 className="w-5 h-5" />}
          accentColor="success"
        />

        <StatCard
          label="মোট বকেয়া / বাকি (Total Dues Outstanding)"
          value={Formatters.currency(overallKPIs.totalDue)}
          subtext={`${overallKPIs.companiesWithDue} টি কোম্পানিতে বকেয়া বাকি রয়েছে`}
          subtextColor="text-rose-400"
          icon={<AlertTriangle className="w-5 h-5" />}
          accentColor="danger"
        />

        <StatCard
          label="মোট ক্রয়কৃত পণ্য (Purchased Items)"
          value={`${overallKPIs.totalItems} আইটেম`}
          subtext={`${overallKPIs.totalCompanies} টি পার্টনার সাপ্লায়ার প্রতিষ্ঠান`}
          subtextColor="text-cyan-400"
          icon={<Package className="w-5 h-5" />}
          accentColor="cyan"
        />
      </div>

      {/* Control & Filter Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3.5 sm:p-4 space-y-3.5">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="পণ্য, মডেল, কোম্পানি বা বিল নম্বর দিয়ে খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-blue-500 text-xs text-slate-100 placeholder-slate-500 outline-none transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 text-xs"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filters & Dropdowns */}
          <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
            {/* Company Dropdown */}
            <select
              value={selectedCompanyFilter}
              onChange={(e) => setSelectedCompanyFilter(e.target.value)}
              className="px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-200 outline-none focus:border-blue-500 transition cursor-pointer max-w-[200px] truncate"
            >
              <option value="ALL">সকল কোম্পানি ({companySummaries.length})</option>
              {companySummaries.map((c) => (
                <option key={c.supplierName} value={c.supplierName}>
                  {c.supplierName} {c.totalDue > 0 ? `(বাকি: ৳${(c.totalDue / 1000).toFixed(0)}k)` : ''}
                </option>
              ))}
            </select>

            {/* Status Filter */}
            <div className="flex items-center bg-slate-950/70 border border-slate-800 rounded-xl p-0.5">
              <button
                onClick={() => setSelectedStatusFilter('ALL')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  selectedStatusFilter === 'ALL'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                সব বিল
              </button>
              <button
                onClick={() => setSelectedStatusFilter('DUE')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  selectedStatusFilter === 'DUE'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-rose-400'
                }`}
              >
                বকেয়া আছে
              </button>
              <button
                onClick={() => setSelectedStatusFilter('PAID')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  selectedStatusFilter === 'PAID'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-emerald-400'
                }`}
              >
                পরিশোধিত
              </button>
            </div>
          </div>
        </div>

        {/* View Mode Tabs & Quick Expand */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-2 border-t border-slate-800/80">
          <div className="flex items-center gap-1.5 bg-slate-950/70 border border-slate-800 rounded-xl p-1 w-fit">
            <button
              onClick={() => setViewMode('companies')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                viewMode === 'companies'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>কোম্পানি ভিত্তিক হিসাব ({filteredCompanySummaries.length})</span>
            </button>

            <button
              onClick={() => setViewMode('items')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                viewMode === 'items'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Package className="w-3.5 h-3.5" />
              <span>আইটেম তালিকা ({allFlattenedItems.length})</span>
            </button>

            <button
              onClick={() => setViewMode('bills')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                viewMode === 'bills'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Receipt className="w-3.5 h-3.5" />
              <span>ক্রয় চালান/বিল ({filteredBills.length})</span>
            </button>
          </div>

          {viewMode === 'companies' && (
            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => expandAllCompanies(true)}
                className="text-blue-400 hover:underline"
              >
                সব প্রসারিত করুন (Expand All)
              </button>
              <span className="text-slate-600">&bull;</span>
              <button
                onClick={() => expandAllCompanies(false)}
                className="text-slate-400 hover:underline"
              >
                সব সঙ্কুচিত করুন (Collapse)
              </button>
            </div>
          )}
        </div>
      </div>

      {/* VIEW 1: COMPANY-WISE BREAKDOWN (USER'S PRIMARY DEMAND) */}
      {viewMode === 'companies' && (
        <div className="space-y-4">
          {filteredCompanySummaries.length === 0 ? (
            <div className="p-12 text-center bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
              <Package className="w-10 h-10 text-slate-500 mx-auto" />
              <p className="text-sm font-semibold text-slate-300">কোন কোম্পানির ক্রয়ের তথ্য পাওয়া যায়নি</p>
              <p className="text-xs text-slate-500">অনুসন্ধান বা ফিল্টার পরিবর্তন করুন অথবা নতুন বিল যুক্ত করুন</p>
            </div>
          ) : (
            filteredCompanySummaries.map((comp) => {
              const isExpanded = !!expandedCompanies[comp.supplierName];
              const paidPercent = comp.totalPurchased > 0 ? (comp.totalPaid / comp.totalPurchased) * 100 : 0;

              return (
                <div
                  key={comp.supplierName}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg transition hover:border-slate-700/80"
                >
                  {/* Company Summary Banner / Card Header */}
                  <div
                    onClick={() => toggleCompany(comp.supplierName)}
                    className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-850 cursor-pointer select-none flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80"
                  >
                    {/* Left: Company Details */}
                    <div className="flex items-start sm:items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 flex-shrink-0 shadow-inner">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-sm sm:text-base font-bold text-slate-100 leading-tight">
                            {comp.supplierName}
                          </h3>
                          {comp.supplierCountry && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                              {comp.supplierCountry}
                            </span>
                          )}
                          <Badge
                            variant={comp.status === 'PAID' ? 'success' : comp.status === 'PARTIAL' ? 'warning' : 'danger'}
                          >
                            {comp.status === 'PAID' ? 'পরিশোধিত (Fully Paid)' : comp.status === 'PARTIAL' ? 'আংশিক বাকি (Partial Due)' : 'বকেয়া (Unpaid)'}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-slate-400 mt-1 flex-wrap">
                          {comp.supplierPhone && (
                            <span className="flex items-center gap-1 text-slate-400">
                              <Phone className="w-3 h-3 text-slate-500" />
                              {comp.supplierPhone}
                            </span>
                          )}
                          <span className="text-slate-400">
                            মোট চালান: <strong>{comp.billsCount} টি</strong>
                          </span>
                          <span className="text-slate-400">
                            ক্রয়কৃত পণ্য: <strong>{comp.itemsCount} টি</strong>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Key Financials */}
                    <div className="flex items-center gap-3 sm:gap-6 flex-wrap sm:flex-nowrap justify-between lg:justify-end">
                      {/* Total Purchased */}
                      <div className="text-left sm:text-right">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                          মোট ক্রয় (Purchased)
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-200">
                          {Formatters.currency(comp.totalPurchased)}
                        </span>
                      </div>

                      {/* Total Paid */}
                      <div className="text-left sm:text-right">
                        <span className="text-[10px] uppercase font-bold text-emerald-400 block tracking-wider">
                          পরিশোধ (Paid)
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-emerald-400">
                          {Formatters.currency(comp.totalPaid)}
                        </span>
                      </div>

                      {/* Total Due */}
                      <div className="text-left sm:text-right px-3 py-1.5 rounded-xl bg-rose-950/40 border border-rose-900/60">
                        <span className="text-[10px] uppercase font-bold text-rose-400 block tracking-wider">
                          মোট বকেয়া (Due)
                        </span>
                        <span className="text-xs sm:text-sm font-black text-rose-400">
                          {Formatters.currency(comp.totalDue)}
                        </span>
                      </div>

                      {/* Expand Chevron */}
                      <button
                        className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-100 transition"
                        aria-label="Toggle details"
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Payment Progress Bar */}
                  <div className="w-full h-1 bg-slate-800">
                    <div
                      className={`h-full transition-all duration-500 ${
                        comp.totalDue <= 0 ? 'bg-emerald-500' : 'bg-gradient-to-r from-emerald-500 to-amber-500'
                      }`}
                      style={{ width: `${Math.min(100, Math.max(0, paidPercent))}%` }}
                    />
                  </div>

                  {/* Collapsible Details Body */}
                  {isExpanded && (
                    <div className="p-4 sm:p-5 space-y-5 bg-slate-950/40">
                      {/* Top Action Buttons within Company */}
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                            <Package className="w-4 h-4 text-blue-400" />
                            <span>ক্রয়কৃত পণ্য ও ইউনিট ভ্যালু তালিকা (Purchased Items & Unit Values)</span>
                          </h4>
                          <span className="text-xs text-slate-400">({comp.allItems.length} টি আইটেম)</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openPrintStatement(comp);
                            }}
                            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-medium transition flex items-center gap-1.5"
                          >
                            <Printer className="w-3.5 h-3.5" />
                            <span>স্টেটমেন্ট প্রিন্ট</span>
                          </button>

                          {comp.bills.some((b) => b.dueAmount > 0) && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const firstDueBill = comp.bills.find((b) => b.dueAmount > 0);
                                if (firstDueBill) openPaymentModal(firstDueBill);
                              }}
                              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow active:scale-95"
                            >
                              <CreditCard className="w-3.5 h-3.5" />
                              <span>বকেয়া পরিশোধ করুন</span>
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Itemized Table: EXACT MATCH FOR USER REQUEST */}
                      {/* "same company theke ki ki item purchsed korc and each item value koto er jonne ami koto taka paid korc er koto tk due ase" */}
                      <div className="overflow-x-auto rounded-xl border border-slate-800">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="bg-slate-850/80 text-slate-400 border-b border-slate-800 font-semibold">
                              <th className="py-2.5 px-3">প্রোডাক্টের নাম ও বিবরণ</th>
                              <th className="py-2.5 px-3">চালান / বিল নং</th>
                              <th className="py-2.5 px-3">তারিখ</th>
                              <th className="py-2.5 px-3 text-center">পরিমাণ</th>
                              <th className="py-2.5 px-3 text-right bg-blue-950/30 text-blue-300">
                                প্রতিটি পণ্যের মূল্য (Each Item Value)
                              </th>
                              <th className="py-2.5 px-3 text-right font-bold text-slate-200">
                                মোট মূল্য (Total Value)
                              </th>
                              <th className="py-2.5 px-3 text-right text-emerald-400">পরিশোধ (Bill Paid)</th>
                              <th className="py-2.5 px-3 text-right text-rose-400">বাকি (Bill Due)</th>
                              <th className="py-2.5 px-3 text-center">স্ট্যাটাস</th>
                              <th className="py-2.5 px-3 text-center">অ্যাকশন</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-800/80 bg-slate-900/50">
                            {comp.allItems.map((item, idx) => {
                              const parentBill = comp.bills.find((b) => b.id === item.billId);
                              return (
                                <tr key={`${item.id}-${idx}`} className="hover:bg-slate-800/40 transition">
                                  {/* Product Name */}
                                  <td className="py-3 px-3">
                                    <div className="font-semibold text-slate-100">{item.productName}</div>
                                    {item.sku && (
                                      <div className="text-[11px] text-slate-400 font-mono">
                                        SKU: {item.sku}
                                        {item.category ? ` • ${item.category}` : ''}
                                      </div>
                                    )}
                                    {item.notes && (
                                      <div className="text-[10px] text-slate-500 italic mt-0.5">{item.notes}</div>
                                    )}
                                  </td>

                                  {/* Bill Number */}
                                  <td className="py-3 px-3 font-mono text-slate-300">
                                    {item.billNumber}
                                  </td>

                                  {/* Purchase Date */}
                                  <td className="py-3 px-3 text-slate-400 whitespace-nowrap">
                                    {Formatters.date(item.purchaseDate)}
                                  </td>

                                  {/* Quantity */}
                                  <td className="py-3 px-3 text-center font-bold text-slate-200">
                                    {item.quantity} <span className="text-[11px] text-slate-400 font-normal">{item.unit}</span>
                                  </td>

                                  {/* EACH ITEM VALUE (Unit Price) - Highlighted for User */}
                                  <td className="py-3 px-3 text-right font-bold text-blue-300 bg-blue-950/20 whitespace-nowrap">
                                    {Formatters.currency(item.unitPrice)}
                                    <span className="text-[10px] text-slate-400 block font-normal">প্রতি {item.unit}</span>
                                  </td>

                                  {/* Total Item Price */}
                                  <td className="py-3 px-3 text-right font-bold text-slate-100 whitespace-nowrap">
                                    {Formatters.currency(item.totalPrice)}
                                  </td>

                                  {/* Bill Paid */}
                                  <td className="py-3 px-3 text-right font-semibold text-emerald-400 whitespace-nowrap">
                                    {Formatters.currency(item.billPaid)}
                                  </td>

                                  {/* Bill Due */}
                                  <td className="py-3 px-3 text-right font-bold text-rose-400 whitespace-nowrap">
                                    {Formatters.currency(item.billDue)}
                                  </td>

                                  {/* Status */}
                                  <td className="py-3 px-3 text-center">
                                    <Badge
                                      variant={
                                        item.billStatus === 'PAID'
                                          ? 'success'
                                          : item.billStatus === 'PARTIAL'
                                          ? 'warning'
                                          : 'danger'
                                      }
                                    >
                                      {item.billStatus === 'PAID' ? 'পরিশোধিত' : item.billStatus === 'PARTIAL' ? 'আংশিক' : 'বাকি'}
                                    </Badge>
                                  </td>

                                  {/* Action */}
                                  <td className="py-3 px-3 text-center">
                                    {parentBill && parentBill.dueAmount > 0 ? (
                                      <button
                                        onClick={() => openPaymentModal(parentBill)}
                                        className="px-2.5 py-1 rounded bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 border border-blue-500/30 text-[11px] font-semibold transition"
                                      >
                                        পরিশোধ
                                      </button>
                                    ) : (
                                      <span className="text-[11px] text-emerald-500 font-medium">সম্পন্ন</span>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      {/* Payment History Log for this Company */}
                      {comp.allPayments.length > 0 && (
                        <div className="pt-2">
                          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-emerald-400" />
                            <span>পরিশোধের ইতিহাস ও লেনদেন লগ (Payment Transaction History)</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {comp.allPayments.map((pay) => (
                              <div
                                key={pay.id}
                                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1.5"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-bold text-emerald-400 text-sm">
                                    {Formatters.currency(pay.amount)}
                                  </span>
                                  <Badge variant="success">{pay.paymentMethod}</Badge>
                                </div>
                                <div className="text-slate-400 flex items-center justify-between text-[11px]">
                                  <span>তারিখ: {Formatters.date(pay.date)}</span>
                                  <span className="font-mono text-slate-300">{pay.billNumber}</span>
                                </div>
                                {pay.referenceNo && (
                                  <div className="text-[11px] text-slate-400">
                                    রেফারেন্স: <span className="text-slate-200 font-mono">{pay.referenceNo}</span>
                                  </div>
                                )}
                                {pay.note && (
                                  <div className="text-[11px] text-slate-400 italic">নোট: {pay.note}</div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}

      {/* VIEW 2: FLAT ITEMS MASTER TABLE */}
      {viewMode === 'items' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-100">
                সকল ক্রয়কৃত প্রোডাক্ট, ইউনিট রেট ও বকেয়া খতিয়ান
              </h3>
              <p className="text-xs text-slate-400">
                প্রতিটি পণ্যের কেনা মূল্য, পরিশোধিত পরিমাণ ও বকেয়ার সামগ্রিক তালিকা
              </p>
            </div>
            <span className="text-xs text-blue-400 font-bold bg-blue-950/60 px-2.5 py-1 rounded-lg border border-blue-800">
              {allFlattenedItems.length} টি পণ্য
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-850 text-slate-400 border-b border-slate-800 font-semibold">
                  <th className="py-3 px-3.5">কোম্পানি / সাপ্লায়ার</th>
                  <th className="py-3 px-3.5">পণ্য ও মডেল (Item)</th>
                  <th className="py-3 px-3.5">বিল নম্বর</th>
                  <th className="py-3 px-3.5">তারিখ</th>
                  <th className="py-3 px-3.5 text-center">পরিমাণ</th>
                  <th className="py-3 px-3.5 text-right bg-blue-950/30 text-blue-300 font-bold">
                    প্রতি পণ্যের মূল্য (Unit Value)
                  </th>
                  <th className="py-3 px-3.5 text-right font-bold text-slate-200">মোট মূল্য (Total)</th>
                  <th className="py-3 px-3.5 text-right text-emerald-400">পরিশোধ</th>
                  <th className="py-3 px-3.5 text-right text-rose-400">বাকি</th>
                  <th className="py-3 px-3.5 text-center">স্ট্যাটাস</th>
                  <th className="py-3 px-3.5 text-center">অ্যাকশন</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {allFlattenedItems.length === 0 ? (
                  <tr>
                    <td colSpan={11} className="py-8 text-center text-slate-500">
                      কোন পণ্যের তথ্য পাওয়া যায়নি
                    </td>
                  </tr>
                ) : (
                  allFlattenedItems.map((item, idx) => (
                    <tr key={`${item.id}-${idx}`} className="hover:bg-slate-800/40 transition">
                      <td className="py-3 px-3.5 font-medium text-slate-200 max-w-[180px] truncate">
                        {item.supplierName}
                      </td>
                      <td className="py-3 px-3.5">
                        <div className="font-semibold text-slate-100">{item.productName}</div>
                        {item.sku && <span className="text-[11px] text-slate-400 font-mono">SKU: {item.sku}</span>}
                      </td>
                      <td className="py-3 px-3.5 font-mono text-slate-300">{item.billNumber}</td>
                      <td className="py-3 px-3.5 text-slate-400 whitespace-nowrap">
                        {Formatters.date(item.purchaseDate)}
                      </td>
                      <td className="py-3 px-3.5 text-center font-bold text-slate-200">
                        {item.quantity} {item.unit}
                      </td>
                      {/* Unit Value */}
                      <td className="py-3 px-3.5 text-right font-bold text-blue-300 bg-blue-950/20 whitespace-nowrap">
                        {Formatters.currency(item.unitPrice)}
                      </td>
                      {/* Total Item Value */}
                      <td className="py-3 px-3.5 text-right font-bold text-slate-100 whitespace-nowrap">
                        {Formatters.currency(item.totalPrice)}
                      </td>
                      {/* Bill Paid */}
                      <td className="py-3 px-3.5 text-right font-semibold text-emerald-400 whitespace-nowrap">
                        {Formatters.currency(item.billPaid)}
                      </td>
                      {/* Bill Due */}
                      <td className="py-3 px-3.5 text-right font-bold text-rose-400 whitespace-nowrap">
                        {Formatters.currency(item.billDue)}
                      </td>
                      {/* Status */}
                      <td className="py-3 px-3.5 text-center">
                        <Badge
                          variant={
                            item.billStatus === 'PAID'
                              ? 'success'
                              : item.billStatus === 'PARTIAL'
                              ? 'warning'
                              : 'danger'
                          }
                        >
                          {item.billStatus === 'PAID' ? 'পরিশোধিত' : item.billStatus === 'PARTIAL' ? 'আংশিক' : 'বাকি'}
                        </Badge>
                      </td>
                      {/* Action */}
                      <td className="py-3 px-3.5 text-center">
                        {item.billDue > 0 ? (
                          <button
                            onClick={() => openPaymentModal(item.fullBill)}
                            className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold transition"
                          >
                            পরিশোধ
                          </button>
                        ) : (
                          <span className="text-[11px] text-emerald-400">সম্পন্ন</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VIEW 3: PURCHASE BILLS LIST */}
      {viewMode === 'bills' && (
        <div className="space-y-3">
          {filteredBills.length === 0 ? (
            <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-2xl text-slate-400">
              কোন ক্রয় বিল পাওয়া যায়নি
            </div>
          ) : (
            filteredBills.map((bill) => (
              <div
                key={bill.id}
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="font-mono text-sm font-bold text-blue-400">{bill.billNumber}</span>
                    <span className="text-xs font-semibold text-slate-200">&bull; {bill.supplierName}</span>
                    <Badge
                      variant={bill.status === 'PAID' ? 'success' : bill.status === 'PARTIAL' ? 'warning' : 'danger'}
                    >
                      {bill.status}
                    </Badge>
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-3">
                    <span>তারিখ: {Formatters.date(bill.date)}</span>
                    <span>&bull;</span>
                    <span>আইটেম: {bill.items.length} টি ({bill.items.map((i) => i.productName).join(', ')})</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap justify-between md:justify-end">
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">মোট বিল</span>
                    <span className="text-xs font-bold text-slate-100">{Formatters.currency(bill.totalAmount)}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-emerald-400 uppercase font-semibold block">পরিশোধ</span>
                    <span className="text-xs font-bold text-emerald-400">{Formatters.currency(bill.paidAmount)}</span>
                  </div>
                  <div className="text-right px-3 py-1 rounded-lg bg-rose-950/40 border border-rose-900/60">
                    <span className="text-[10px] text-rose-400 uppercase font-semibold block">বকেয়া</span>
                    <span className="text-xs font-black text-rose-400">{Formatters.currency(bill.dueAmount)}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {bill.dueAmount > 0 && (
                      <button
                        onClick={() => openPaymentModal(bill)}
                        className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition"
                      >
                        পরিশোধ
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteBill(bill.id, bill.billNumber)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 transition"
                      title="বিল মুছে ফেলুন"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* MODAL 1: NEW PURCHASE BILL */}
      <Modal
        isOpen={isNewBillModalOpen}
        onClose={() => setIsNewBillModalOpen(false)}
        title="নতুন কোম্পানি ক্রয় বিল তৈরি করুন (New Purchase Order / Bill)"
        size="4xl"
      >
        <form onSubmit={handleCreateBillSubmit} className="space-y-5">
          {/* Supplier & Bill Header Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                কোম্পানি / সাপ্লায়ারের নাম *
              </label>
              <input
                type="text"
                required
                list="suppliers-list"
                placeholder="যেমন: Shenzhen Hikvision Co."
                value={newBillSupplierName}
                onChange={(e) => setNewBillSupplierName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500 transition"
              />
              <datalist id="suppliers-list">
                {companySummaries.map((c) => (
                  <option key={c.supplierName} value={c.supplierName} />
                ))}
              </datalist>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                বিল / চালানের রেফারেন্স নং *
              </label>
              <input
                type="text"
                required
                value={newBillNumber}
                onChange={(e) => setNewBillNumber(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 font-mono outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                ক্রয়ের তারিখ *
              </label>
              <input
                type="date"
                required
                value={newBillDate}
                onChange={(e) => setNewBillDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500 transition"
              />
            </div>
          </div>

          {/* Product Items Table Builder */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                <Package className="w-4 h-4 text-blue-400" />
                <span>ক্রয়কৃত প্রোডাক্ট ও প্রতি ইউনিটের মূল্য (Purchased Items & Rates)</span>
              </label>
              <button
                type="button"
                onClick={handleAddBillItemRow}
                className="px-2.5 py-1 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 border border-blue-500/30 text-xs font-semibold transition flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>আরও পণ্য যোগ করুন</span>
              </button>
            </div>

            <div className="space-y-2">
              {newBillItems.map((item, idx) => {
                const rowTotal = (Number(item.quantity) || 0) * (Number(item.unitPrice) || 0);
                return (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-12 gap-2.5 items-center"
                  >
                    {/* Product Name */}
                    <div className="col-span-12 sm:col-span-5">
                      <input
                        type="text"
                        required
                        list="products-erp-list"
                        placeholder="প্রোডাক্টের নাম লিখুন বা সিলেক্ট করুন..."
                        value={item.productName}
                        onChange={(e) => handleUpdateBillItemRow(idx, 'productName', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500 transition"
                      />
                    </div>

                    {/* Quantity */}
                    <div className="col-span-4 sm:col-span-2">
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          min="1"
                          required
                          placeholder="পরিমাণ"
                          value={item.quantity}
                          onChange={(e) => handleUpdateBillItemRow(idx, 'quantity', e.target.value)}
                          className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-100 text-center outline-none focus:border-blue-500 transition"
                        />
                        <span className="text-[11px] text-slate-400">{item.unit || 'pcs'}</span>
                      </div>
                    </div>

                    {/* Unit Price (Each Item Value) */}
                    <div className="col-span-5 sm:col-span-2">
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        required
                        placeholder="একক মূল্য (রেট)"
                        value={item.unitPrice || ''}
                        onChange={(e) => handleUpdateBillItemRow(idx, 'unitPrice', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-blue-500/40 text-xs text-blue-300 font-bold text-right outline-none focus:border-blue-400 transition"
                      />
                    </div>

                    {/* Row Total */}
                    <div className="col-span-2 sm:col-span-2 text-right">
                      <span className="text-xs font-bold text-slate-200 block truncate">
                        {Formatters.currency(rowTotal)}
                      </span>
                    </div>

                    {/* Delete Row */}
                    <div className="col-span-1 sm:col-span-1 text-center">
                      {newBillItems.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveBillItemRow(idx)}
                          className="p-1 rounded text-slate-500 hover:text-rose-400 transition"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <datalist id="products-erp-list">
            {products.map((p) => (
              <option key={p.id} value={p.name} />
            ))}
          </datalist>

          {/* Payment & Dues Summary Block */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left">
              <div>
                <span className="text-[11px] font-semibold text-slate-400 block">মোট বিলের মূল্য (Total Bill)</span>
                <span className="text-base font-bold text-slate-100">{Formatters.currency(newBillSubtotal)}</span>
              </div>

              <div>
                <span className="text-[11px] font-semibold text-emerald-400 block">এখনই পরিশোধ (Down Payment)</span>
                <input
                  type="number"
                  min="0"
                  max={newBillSubtotal}
                  value={newBillInitialPaid || ''}
                  onChange={(e) => setNewBillInitialPaid(Number(e.target.value) || 0)}
                  placeholder="0"
                  className="w-full max-w-[160px] px-2.5 py-1 rounded-lg bg-slate-900 border border-emerald-500/50 text-xs font-bold text-emerald-400 outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <span className="text-[11px] font-semibold text-rose-400 block">বকেয়া থাকবে (Due Amount)</span>
                <span className="text-base font-black text-rose-400">{Formatters.currency(newBillDueAmount)}</span>
              </div>
            </div>

            {newBillInitialPaid > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">পেমেন্ট মেথড</label>
                  <select
                    value={newBillPaymentMethod}
                    onChange={(e) => setNewBillPaymentMethod(e.target.value as any)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200"
                  >
                    <option value="Bank Transfer">Bank Transfer (ব্যাংক ট্রান্সফার)</option>
                    <option value="TT / LC">TT / LC (টেলিগ্রাফিক ট্রান্সফার / এলসি)</option>
                    <option value="Cash">Cash (নগদ টাকা)</option>
                    <option value="Cheque">Cheque (ব্যাংক চেক)</option>
                    <option value="bKash / Nagad">bKash / Nagad (মোবাইল ব্যাংকিং)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">রেফারেন্স / ট্রানজেকশন নং</label>
                  <input
                    type="text"
                    placeholder="যেমন: EBL-FT-99120"
                    value={newBillPaymentRef}
                    onChange={(e) => setNewBillPaymentRef(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200 font-mono"
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">মন্তব্য / বিশেষ নোট</label>
            <input
              type="text"
              placeholder="বিল সংক্রান্ত কোনো মন্তব্য থাকলে লিখুন..."
              value={newBillNotes}
              onChange={(e) => setNewBillNotes(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 outline-none focus:border-blue-500"
            />
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsNewBillModalOpen(false)}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition"
            >
              বাতিল
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-lg shadow-blue-600/30 active:scale-95"
            >
              ক্রয় বিল সংরক্ষণ করুন (Save Bill)
            </button>
          </div>
        </form>
      </Modal>

      {/* MODAL 2: RECORD PAYMENT */}
      <Modal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        title="বকেয়া পরিশোধ জমা দিন (Record Supplier Payment)"
        size="lg"
      >
        {selectedBillForPayment && (
          <form onSubmit={handleRecordPaymentSubmit} className="space-y-4">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-100">{selectedBillForPayment.supplierName}</span>
                <span className="font-mono text-blue-400">{selectedBillForPayment.billNumber}</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>মোট বিল: <strong>{Formatters.currency(selectedBillForPayment.totalAmount)}</strong></span>
                <span>পূর্বে পরিশোধ: <strong className="text-emerald-400">{Formatters.currency(selectedBillForPayment.paidAmount)}</strong></span>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                <span className="font-semibold text-rose-400">বর্তমান বকেয়া (Current Due):</span>
                <span className="font-black text-rose-400 text-sm">
                  {Formatters.currency(selectedBillForPayment.dueAmount)}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  পরিশোধের পরিমাণ (BDT) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  min="1"
                  value={paymentAmountInput || ''}
                  onChange={(e) => setPaymentAmountInput(Number(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-emerald-500/50 text-emerald-400 font-bold text-sm outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  পরিশোধের তারিখ *
                </label>
                <input
                  type="date"
                  required
                  value={paymentDateInput}
                  onChange={(e) => setPaymentDateInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  পরিশোধের মাধ্যম (Payment Method) *
                </label>
                <select
                  value={paymentMethodInput}
                  onChange={(e) => setPaymentMethodInput(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200"
                >
                  <option value="Bank Transfer">Bank Transfer (ব্যাংক ট্রান্সফার)</option>
                  <option value="TT / LC">TT / LC (টেলিগ্রাফিক ট্রান্সফার / এলসি)</option>
                  <option value="Cash">Cash (নগদ)</option>
                  <option value="Cheque">Cheque (চেক)</option>
                  <option value="bKash / Nagad">bKash / Nagad (মোবাইল ব্যাংকিং)</option>
                  <option value="Other">অন্যান্য</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  ব্যাংকের নাম (যদি থাকে)
                </label>
                <input
                  type="text"
                  placeholder="যেমন: Eastern Bank PLC"
                  value={paymentBankInput}
                  onChange={(e) => setPaymentBankInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  ট্রানজেকশন / চেক / রেফারেন্স নং
                </label>
                <input
                  type="text"
                  placeholder="যেমন: TT-BOC-992144 বা CHQ-552109"
                  value={paymentRefInput}
                  onChange={(e) => setPaymentRefInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 font-mono"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  নোট বা বিবরণ
                </label>
                <input
                  type="text"
                  placeholder="যেমন: দ্বিতীয় কিস্তি পরিশোধ..."
                  value={paymentNoteInput}
                  onChange={(e) => setPaymentNoteInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={() => setIsPaymentModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-slate-300"
              >
                বাতিল
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-lg shadow-emerald-600/30 active:scale-95"
              >
                পেমেন্ট নিশ্চিত করুন (Record Payment)
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* MODAL 3: PRINTABLE COMPANY STATEMENT */}
      <Modal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        title="কোম্পানি লেজার স্টেটমেন্ট (Printable Supplier Statement)"
        size="5xl"
      >
        {selectedCompanyForPrint && (
          <div className="space-y-6">
            {/* Print Header Controls */}
            <div className="flex items-center justify-between no-print">
              <p className="text-xs text-slate-400">
                এই স্টেটমেন্টটি প্রিন্ট করুন অথবা পিডিএফ হিসেবে সংরক্ষণ করুন।
              </p>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center gap-2 shadow"
              >
                <Printer className="w-4 h-4" />
                <span>প্রিন্ট / সেভ PDF</span>
              </button>
            </div>

            {/* Printable Statement Canvas */}
            <div className="bg-white text-black p-6 sm:p-8 rounded-xl shadow-lg space-y-6 text-xs">
              {/* Brand Letterhead */}
              <div className="flex items-center justify-between border-b pb-4 border-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12">
                    <img
                      src={GLOBO_TECH_LOGO_DATA_URL}
                      alt="Globo Tech"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-black tracking-wide text-slate-900">GLOBO TECH</h2>
                    <p className="text-[11px] text-slate-600">Enterprise IT, CCTV & Networking Solutions</p>
                    <p className="text-[10px] text-slate-500">Dhaka, Bangladesh &bull; info@globotech.com.bd</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold uppercase tracking-wider text-slate-900 block">
                    Supplier Purchase & Due Statement
                  </span>
                  <span className="text-[11px] text-slate-600">
                    তারিখ: {Formatters.date(new Date().toISOString())}
                  </span>
                </div>
              </div>

              {/* Company Info Box */}
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">সাপ্লায়ার / কোম্পানি:</span>
                  <h3 className="text-sm font-bold text-slate-900">{selectedCompanyForPrint.supplierName}</h3>
                  {selectedCompanyForPrint.supplierCountry && (
                    <p className="text-slate-600 text-[11px]">{selectedCompanyForPrint.supplierCountry}</p>
                  )}
                  {selectedCompanyForPrint.supplierPhone && (
                    <p className="text-slate-600 text-[11px]">Phone: {selectedCompanyForPrint.supplierPhone}</p>
                  )}
                </div>

                <div className="text-right space-y-1">
                  <div>
                    <span className="text-slate-600">মোট ক্রয় (Total Purchases): </span>
                    <strong className="text-slate-900">{Formatters.currency(selectedCompanyForPrint.totalPurchased)}</strong>
                  </div>
                  <div>
                    <span className="text-emerald-700">মোট পরিশোধ (Total Paid): </span>
                    <strong className="text-emerald-700">{Formatters.currency(selectedCompanyForPrint.totalPaid)}</strong>
                  </div>
                  <div className="pt-1 border-t border-slate-300">
                    <span className="text-rose-700 font-bold">মোট বকেয়া (Balance Due): </span>
                    <strong className="text-rose-700 text-sm">{Formatters.currency(selectedCompanyForPrint.totalDue)}</strong>
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <div>
                <h4 className="font-bold text-slate-900 text-xs mb-2 uppercase tracking-wider">
                  ক্রয়কৃত প্রোডাক্ট ও আইটেম রেট (Purchased Products & Unit Rates)
                </h4>
                <table className="w-full border-collapse border border-slate-300 text-[11px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 border-b border-slate-300">
                      <th className="p-2 text-left border-r border-slate-300">ক্রম</th>
                      <th className="p-2 text-left border-r border-slate-300">প্রোডাক্টের নাম</th>
                      <th className="p-2 text-left border-r border-slate-300">চালান নং</th>
                      <th className="p-2 text-left border-r border-slate-300">তারিখ</th>
                      <th className="p-2 text-center border-r border-slate-300">পরিমাণ</th>
                      <th className="p-2 text-right border-r border-slate-300 bg-slate-50 font-bold">একক মূল্য (Unit Rate)</th>
                      <th className="p-2 text-right">মোট মূল্য (Total)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCompanyForPrint.allItems.map((it, idx) => (
                      <tr key={idx} className="border-b border-slate-200">
                        <td className="p-2 text-center border-r border-slate-200">{idx + 1}</td>
                        <td className="p-2 border-r border-slate-200 font-medium">
                          {it.productName}
                          {it.sku ? ` (${it.sku})` : ''}
                        </td>
                        <td className="p-2 border-r border-slate-200 font-mono">{it.billNumber}</td>
                        <td className="p-2 border-r border-slate-200">{Formatters.date(it.purchaseDate)}</td>
                        <td className="p-2 text-center border-r border-slate-200 font-bold">
                          {it.quantity} {it.unit}
                        </td>
                        <td className="p-2 text-right border-r border-slate-200 font-bold bg-slate-50">
                          {Formatters.currency(it.unitPrice)}
                        </td>
                        <td className="p-2 text-right font-bold">{Formatters.currency(it.totalPrice)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-slate-100 font-bold">
                      <td colSpan={6} className="p-2 text-right border-r border-slate-300">সর্বমোট (Subtotal):</td>
                      <td className="p-2 text-right text-slate-900">{Formatters.currency(selectedCompanyForPrint.totalPurchased)}</td>
                    </tr>
                    <tr className="bg-emerald-50 text-emerald-800 font-bold">
                      <td colSpan={6} className="p-2 text-right border-r border-slate-300">পরিশোধিত অর্থ (Total Paid):</td>
                      <td className="p-2 text-right">{Formatters.currency(selectedCompanyForPrint.totalPaid)}</td>
                    </tr>
                    <tr className="bg-rose-50 text-rose-800 font-bold text-xs">
                      <td colSpan={6} className="p-2 text-right border-r border-slate-300">অবশিষ্ট বকেয়া (Net Payable Due):</td>
                      <td className="p-2 text-right">{Formatters.currency(selectedCompanyForPrint.totalDue)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Payment Receipts Table */}
              {selectedCompanyForPrint.allPayments.length > 0 && (
                <div>
                  <h4 className="font-bold text-slate-900 text-xs mb-2 uppercase tracking-wider">
                    পরিশোধের বিবরণী (Payment Receipts)
                  </h4>
                  <table className="w-full border-collapse border border-slate-300 text-[11px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 border-b border-slate-300">
                        <th className="p-2 text-left border-r border-slate-300">তারিখ</th>
                        <th className="p-2 text-left border-r border-slate-300">চালান নং</th>
                        <th className="p-2 text-left border-r border-slate-300">মাধ্যম</th>
                        <th className="p-2 text-left border-r border-slate-300">রেফারেন্স / ব্যাংক</th>
                        <th className="p-2 text-right font-bold">পরিশোধিত টাকা</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedCompanyForPrint.allPayments.map((p, idx) => (
                        <tr key={idx} className="border-b border-slate-200">
                          <td className="p-2 border-r border-slate-200">{Formatters.date(p.date)}</td>
                          <td className="p-2 border-r border-slate-200 font-mono">{p.billNumber}</td>
                          <td className="p-2 border-r border-slate-200">{p.paymentMethod}</td>
                          <td className="p-2 border-r border-slate-200 font-mono">
                            {p.referenceNo || p.bankName || 'N/A'}
                          </td>
                          <td className="p-2 text-right font-bold text-emerald-700">{Formatters.currency(p.amount)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Signatures */}
              <div className="pt-12 grid grid-cols-2 gap-8 text-center text-[11px] text-slate-700">
                <div>
                  <div className="w-48 border-t border-slate-400 mx-auto pt-1 font-semibold">
                    হিসাবরক্ষক (Accounts Officer)
                  </div>
                </div>
                <div>
                  <div className="w-48 border-t border-slate-400 mx-auto pt-1 font-semibold">
                    ব্যবস্থাপনা কর্তৃপক্ষ (Authorized Signature)
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
