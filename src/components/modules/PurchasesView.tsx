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
  ArrowLeft,
  Eye,
  Trash2,
  Edit2,
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
  getCompanySummaries,
  updateSupplierDetails,
  deleteSupplierAndBills,
  addNewSupplier
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
  
  // Selected supplier drilldown state
  const [selectedSupplierName, setSelectedSupplierName] = useState<string | null>(null);
  const [supplierSubTab, setSupplierSubTab] = useState<'items' | 'bills' | 'payments'>('items');
  const [supplierItemSearch, setSupplierItemSearch] = useState<string>('');

  // Modal States
  const [isNewBillModalOpen, setIsNewBillModalOpen] = useState<boolean>(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);
  const [selectedBillForPayment, setSelectedBillForPayment] = useState<PurchaseBillRecord | null>(null);
  const [selectedCompanyForPrint, setSelectedCompanyForPrint] = useState<CompanySummary | null>(null);

  // Supplier Edit, Delete & Add Modals State
  const [isEditSupplierModalOpen, setIsEditSupplierModalOpen] = useState<boolean>(false);
  const [isDeleteSupplierModalOpen, setIsDeleteSupplierModalOpen] = useState<boolean>(false);
  const [isAddSupplierModalOpen, setIsAddSupplierModalOpen] = useState<boolean>(false);
  const [supplierToEdit, setSupplierToEdit] = useState<CompanySummary | null>(null);
  const [supplierToDelete, setSupplierToDelete] = useState<CompanySummary | null>(null);

  // Edit Supplier Form Fields
  const [editSupplierName, setEditSupplierName] = useState<string>('');
  const [editSupplierCountry, setEditSupplierCountry] = useState<string>('');
  const [editSupplierPhone, setEditSupplierPhone] = useState<string>('');
  const [editSupplierEmail, setEditSupplierEmail] = useState<string>('');

  // Add Supplier Form Fields
  const [newSupplierName, setNewSupplierName] = useState<string>('');
  const [newSupplierCountry, setNewSupplierCountry] = useState<string>('Bangladesh');
  const [newSupplierPhone, setNewSupplierPhone] = useState<string>('');
  const [newSupplierEmail, setNewSupplierEmail] = useState<string>('');

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

  // Active supplier details if drilled down
  const activeSupplierSummary = useMemo(() => {
    if (!selectedSupplierName) return null;
    return companySummaries.find((c) => c.supplierName === selectedSupplierName) || null;
  }, [companySummaries, selectedSupplierName]);

  // Filtered items inside active supplier
  const activeSupplierFilteredItems = useMemo(() => {
    if (!activeSupplierSummary) return [];
    const q = supplierItemSearch.trim().toLowerCase();
    if (!q) return activeSupplierSummary.allItems;
    return activeSupplierSummary.allItems.filter((it) =>
      it.productName.toLowerCase().includes(q) ||
      (it.sku && it.sku.toLowerCase().includes(q)) ||
      it.billNumber.toLowerCase().includes(q) ||
      (it.notes && it.notes.toLowerCase().includes(q))
    );
  }, [activeSupplierSummary, supplierItemSearch]);

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
      alert('Please provide supplier / company name');
      return;
    }
    if (newBillItems.length === 0 || !newBillItems[0].productName.trim()) {
      alert('Please add at least one product name and unit price');
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
      alert('Please enter a valid payment amount');
      return;
    }
    if (payNum > selectedBillForPayment.dueAmount) {
      const confirmOverpay = confirm(
        `Payment amount (৳ ${payNum.toLocaleString()}) exceeds outstanding due (৳ ${selectedBillForPayment.dueAmount.toLocaleString()}). Are you sure you want to proceed?`
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
    if (confirm(`Are you sure you want to delete purchase bill ${billNo}?`)) {
      deletePurchaseBill(billId);
      setPurchases(getStoredPurchases());
    }
  };

  const openPrintStatement = (summary: CompanySummary) => {
    setSelectedCompanyForPrint(summary);
    setIsPrintModalOpen(true);
  };

  // Open Edit Supplier Modal
  const openEditSupplierModal = (company: CompanySummary) => {
    setSupplierToEdit(company);
    setEditSupplierName(company.supplierName);
    setEditSupplierCountry(company.supplierCountry || '');
    setEditSupplierPhone(company.supplierPhone || '');
    setEditSupplierEmail(company.supplierEmail || '');
    setIsEditSupplierModalOpen(true);
  };

  // Submit Edit Supplier
  const handleEditSupplierSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!supplierToEdit) return;
    const trimmedName = editSupplierName.trim();
    if (!trimmedName) {
      alert('Please enter a valid supplier name');
      return;
    }

    updateSupplierDetails(supplierToEdit.supplierName, {
      supplierName: trimmedName,
      supplierCountry: editSupplierCountry.trim(),
      supplierPhone: editSupplierPhone.trim(),
      supplierEmail: editSupplierEmail.trim()
    });

    if (selectedSupplierName === supplierToEdit.supplierName) {
      setSelectedSupplierName(trimmedName);
    }

    setPurchases(getStoredPurchases());
    setIsEditSupplierModalOpen(false);
    setSupplierToEdit(null);
  };

  // Open Delete Supplier Modal
  const openDeleteSupplierModal = (company: CompanySummary) => {
    setSupplierToDelete(company);
    setIsDeleteSupplierModalOpen(true);
  };

  // Confirm Delete Supplier
  const handleConfirmDeleteSupplier = () => {
    if (!supplierToDelete) return;

    deleteSupplierAndBills(supplierToDelete.supplierName);

    if (selectedSupplierName === supplierToDelete.supplierName) {
      setSelectedSupplierName(null);
    }

    setPurchases(getStoredPurchases());
    setIsDeleteSupplierModalOpen(false);
    setSupplierToDelete(null);
  };

  // Submit Add Supplier
  const handleAddSupplierSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = newSupplierName.trim();
    if (!trimmedName) {
      alert('Please enter a valid supplier name');
      return;
    }

    addNewSupplier({
      name: trimmedName,
      country: newSupplierCountry.trim(),
      phone: newSupplierPhone.trim(),
      email: newSupplierEmail.trim()
    });

    setPurchases(getStoredPurchases());
    setIsAddSupplierModalOpen(false);
    setNewSupplierName('');
    setNewSupplierCountry('Bangladesh');
    setNewSupplierPhone('');
    setNewSupplierEmail('');
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
                Supplier Purchases, Product Rates & Due Ledger
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-950 text-blue-300 border border-blue-800">
                Company & Supplier Ledger
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Comprehensive dashboard tracking company-wise purchased products, unit costs, paid amounts, and outstanding payable dues.
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
            <span>+ New Purchase Bill</span>
          </button>

          {companySummaries.length > 0 && (
            <button
              onClick={() => openPrintStatement(companySummaries[0])}
              className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition flex items-center justify-center gap-2 active:scale-95"
              title="Print Supplier Statement"
            >
              <Printer className="w-4 h-4 text-slate-400" />
              <span className="hidden sm:inline">Print Ledger</span>
            </button>
          )}
        </div>
      </div>

      {/* Financial & Operational KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Purchases"
          value={Formatters.currency(overallKPIs.totalPurchased)}
          subtext={`${overallKPIs.totalCompanies} companies across ${purchases.length} bills`}
          subtextColor="text-blue-400"
          icon={<Receipt className="w-5 h-5" />}
          accentColor="primary"
        />

        <StatCard
          label="Total Paid Amount"
          value={Formatters.currency(overallKPIs.totalPaid)}
          subtext={`${overallKPIs.paidPercentage.toFixed(1)}% payments settled`}
          subtextColor="text-emerald-400"
          icon={<CheckCircle2 className="w-5 h-5" />}
          accentColor="success"
        />

        <StatCard
          label="Total Outstanding Dues"
          value={Formatters.currency(overallKPIs.totalDue)}
          subtext={`${overallKPIs.companiesWithDue} companies with pending dues`}
          subtextColor="text-rose-400"
          icon={<AlertTriangle className="w-5 h-5" />}
          accentColor="danger"
        />

        <StatCard
          label="Purchased Items"
          value={`${overallKPIs.totalItems} Items`}
          subtext={`${overallKPIs.totalCompanies} supplier partner entities`}
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
              placeholder="Search product, model, company or bill number..."
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
              value={selectedSupplierName || selectedCompanyFilter}
              onChange={(e) => {
                const val = e.target.value;
                if (val === 'ALL') {
                  setSelectedCompanyFilter('ALL');
                  setSelectedSupplierName(null);
                } else {
                  setSelectedCompanyFilter(val);
                  setSelectedSupplierName(val);
                  setViewMode('companies');
                }
              }}
              className="px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-200 outline-none focus:border-blue-500 transition cursor-pointer max-w-[200px] truncate"
            >
              <option value="ALL">All Companies ({companySummaries.length})</option>
              {companySummaries.map((c) => (
                <option key={c.supplierName} value={c.supplierName}>
                  {c.supplierName} {c.totalDue > 0 ? `(Due: ৳${(c.totalDue / 1000).toFixed(0)}k)` : ''}
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
                All Bills
              </button>
              <button
                onClick={() => setSelectedStatusFilter('DUE')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  selectedStatusFilter === 'DUE'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-rose-400'
                }`}
              >
                Pending Dues
              </button>
              <button
                onClick={() => setSelectedStatusFilter('PAID')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  selectedStatusFilter === 'PAID'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-emerald-400'
                }`}
              >
                Fully Paid
              </button>
            </div>
          </div>
        </div>

        {/* View Mode Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-2 border-t border-slate-800/80">
          <div className="flex items-center gap-1.5 bg-slate-950/70 border border-slate-800 rounded-xl p-1 w-fit">
            <button
              onClick={() => {
                setViewMode('companies');
                setSelectedSupplierName(null);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                viewMode === 'companies'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Suppliers Directory ({filteredCompanySummaries.length})</span>
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
              <span>All Items Ledger ({allFlattenedItems.length})</span>
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
              <span>Purchase Bills ({filteredBills.length})</span>
            </button>
          </div>

          {viewMode === 'companies' && activeSupplierSummary && (
            <button
              onClick={() => setSelectedSupplierName(null)}
              className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Suppliers</span>
            </button>
          )}
        </div>
      </div>

      {/* VIEW 1: SUPPLIERS DIRECTORY (SERIALIZED 1ST LIST) & DEDICATED HISTORY VIEW */}
      {viewMode === 'companies' && (
        <>
          {/* STATE A: SERIALIZED SUPPLIERS DIRECTORY (1ST LIST) */}
          {!activeSupplierSummary && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-4 sm:p-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-100 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-blue-400" />
                    <span>Suppliers Master Directory & Ledger</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Serialized list of suppliers. Click on any supplier to drill down into their complete purchased items history, unit rates, and bill payment ledger.
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => setIsAddSupplierModalOpen(true)}
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow active:scale-95"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Supplier</span>
                  </button>
                  <span className="text-xs text-blue-400 font-bold bg-blue-950/60 px-3 py-1.5 rounded-xl border border-blue-800 w-fit">
                    {filteredCompanySummaries.length} Partner Suppliers
                  </span>
                </div>
              </div>

              {filteredCompanySummaries.length === 0 ? (
                <div className="p-12 text-center space-y-3">
                  <Package className="w-10 h-10 text-slate-500 mx-auto" />
                  <p className="text-sm font-semibold text-slate-300">No supplier purchase records found</p>
                  <p className="text-xs text-slate-500">Adjust search filters or create a new purchase bill</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-850 text-slate-400 border-b border-slate-800 font-semibold">
                        <th className="py-3 px-3 text-center w-12"># SL</th>
                        <th className="py-3 px-4">Supplier / Company Name</th>
                        <th className="py-3 px-3 text-center">Bills</th>
                        <th className="py-3 px-3 text-center">Items</th>
                        <th className="py-3 px-4 text-right">Total Purchases</th>
                        <th className="py-3 px-4 text-right text-emerald-400">Total Paid</th>
                        <th className="py-3 px-4 text-right text-rose-400">Outstanding Due</th>
                        <th className="py-3 px-3 text-center">Status</th>
                        <th className="py-3 px-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80">
                      {filteredCompanySummaries.map((comp, idx) => (
                        <tr
                          key={comp.supplierName}
                          onClick={() => setSelectedSupplierName(comp.supplierName)}
                          className="hover:bg-slate-800/60 transition cursor-pointer group"
                        >
                          {/* Serial Number */}
                          <td className="py-3.5 px-3 text-center font-bold text-slate-400">
                            <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[11px] mx-auto text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition">
                              {idx + 1}
                            </span>
                          </td>

                          {/* Company Details */}
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 flex-shrink-0 group-hover:border-blue-500/50 transition">
                                <Building2 className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="font-bold text-slate-100 text-sm group-hover:text-blue-300 transition">
                                  {comp.supplierName}
                                </div>
                                <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-400">
                                  {comp.supplierCountry && (
                                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 text-[10px]">
                                      {comp.supplierCountry}
                                    </span>
                                  )}
                                  {comp.supplierPhone && <span>{comp.supplierPhone}</span>}
                                </div>
                              </div>
                            </div>
                          </td>

                          {/* Bills Count */}
                          <td className="py-3.5 px-3 text-center">
                            <span className="px-2 py-0.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-[11px] font-semibold">
                              {comp.billsCount} Bills
                            </span>
                          </td>

                          {/* Items Count */}
                          <td className="py-3.5 px-3 text-center">
                            <span className="px-2 py-0.5 rounded-lg bg-blue-950/40 text-blue-300 border border-blue-800/60 text-[11px] font-semibold">
                              {comp.itemsCount} Items
                            </span>
                          </td>

                          {/* Total Purchases */}
                          <td className="py-3.5 px-4 text-right font-bold text-slate-200">
                            {Formatters.currency(comp.totalPurchased)}
                          </td>

                          {/* Total Paid */}
                          <td className="py-3.5 px-4 text-right font-bold text-emerald-400">
                            {Formatters.currency(comp.totalPaid)}
                          </td>

                          {/* Outstanding Due */}
                          <td className="py-3.5 px-4 text-right">
                            {comp.totalDue > 0 ? (
                              <span className="px-2 py-1 rounded-lg bg-rose-950/50 text-rose-300 border border-rose-900/60 font-black">
                                {Formatters.currency(comp.totalDue)}
                              </span>
                            ) : (
                              <span className="text-slate-400 font-medium">৳0.00</span>
                            )}
                          </td>

                          {/* Status */}
                          <td className="py-3.5 px-3 text-center">
                            <Badge
                              variant={comp.status === 'PAID' ? 'success' : comp.status === 'PARTIAL' ? 'warning' : 'danger'}
                            >
                              {comp.status === 'PAID' ? 'Fully Paid' : comp.status === 'PARTIAL' ? 'Partial Due' : 'Unpaid'}
                            </Badge>
                          </td>

                          {/* Action Buttons */}
                          <td className="py-3.5 px-4 text-center" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-center gap-1.5">
                              <button
                                onClick={() => setSelectedSupplierName(comp.supplierName)}
                                className="px-2.5 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/40 text-xs font-semibold transition flex items-center gap-1 active:scale-95 shadow-sm"
                                title="View Supplier History & Items"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span className="hidden xl:inline">History</span>
                              </button>

                              <button
                                onClick={() => openEditSupplierModal(comp)}
                                className="p-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-600 text-amber-300 hover:text-white border border-amber-500/40 text-xs transition active:scale-95 shadow-sm"
                                title="Edit Supplier Details"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>

                              <button
                                onClick={() => openDeleteSupplierModal(comp)}
                                className="p-1.5 rounded-xl bg-rose-500/15 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/40 text-xs transition active:scale-95 shadow-sm"
                                title="Delete Supplier & Records"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* STATE B: DEDICATED SUPPLIER HISTORY & ITEMIZED LEDGER */}
          {activeSupplierSummary && (
            <div className="space-y-5">
              {/* Top Navigation & Breadcrumbs */}
              <div className="flex items-center justify-between gap-3 flex-wrap bg-slate-900 border border-slate-800 rounded-2xl p-3.5 sm:p-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedSupplierName(null)}
                    className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition flex items-center gap-2 active:scale-95 shadow-sm"
                  >
                    <ArrowLeft className="w-4 h-4 text-blue-400" />
                    <span>Back to Suppliers Directory</span>
                  </button>
                  <span className="text-slate-600 hidden sm:inline">&bull;</span>
                  <div className="text-xs text-slate-400 hidden sm:flex items-center gap-1.5">
                    <span>Suppliers</span>
                    <span>&gt;</span>
                    <span className="text-slate-200 font-bold">{activeSupplierSummary.supplierName}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => openEditSupplierModal(activeSupplierSummary)}
                    className="px-3 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-600 text-amber-300 hover:text-white border border-amber-500/40 text-xs font-bold transition flex items-center gap-1.5 shadow active:scale-95"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>

                  <button
                    onClick={() => openDeleteSupplierModal(activeSupplierSummary)}
                    className="px-3 py-2 rounded-xl bg-rose-500/15 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/40 text-xs font-bold transition flex items-center gap-1.5 shadow active:scale-95"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>

                  <button
                    onClick={() => {
                      setNewBillSupplierName(activeSupplierSummary.supplierName);
                      setIsNewBillModalOpen(true);
                    }}
                    className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow active:scale-95"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>New Bill</span>
                  </button>

                  {activeSupplierSummary.bills.some((b) => b.dueAmount > 0) && (
                    <button
                      onClick={() => {
                        const dueBill = activeSupplierSummary.bills.find((b) => b.dueAmount > 0);
                        if (dueBill) openPaymentModal(dueBill);
                      }}
                      className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow active:scale-95"
                    >
                      <CreditCard className="w-3.5 h-3.5" />
                      <span>Record Payment</span>
                    </button>
                  )}

                  <button
                    onClick={() => openPrintStatement(activeSupplierSummary)}
                    className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-medium transition flex items-center gap-1.5"
                    title="Print Statement"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Statement</span>
                  </button>
                </div>
              </div>

              {/* Supplier Profile Banner Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-850 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                  {/* Identity */}
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/30 to-indigo-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 flex-shrink-0 shadow-lg">
                      <Building2 className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h2 className="text-base sm:text-xl font-black text-slate-100">
                          {activeSupplierSummary.supplierName}
                        </h2>
                        {activeSupplierSummary.supplierCountry && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                            {activeSupplierSummary.supplierCountry}
                          </span>
                        )}
                        <Badge
                          variant={
                            activeSupplierSummary.status === 'PAID'
                              ? 'success'
                              : activeSupplierSummary.status === 'PARTIAL'
                              ? 'warning'
                              : 'danger'
                          }
                        >
                          {activeSupplierSummary.status === 'PAID' ? 'Fully Paid' : activeSupplierSummary.status === 'PARTIAL' ? 'Partial Due' : 'Unpaid'}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-400 mt-1.5 flex-wrap">
                        {activeSupplierSummary.supplierPhone && (
                          <span className="flex items-center gap-1">
                            <Phone className="w-3.5 h-3.5 text-slate-500" />
                            {activeSupplierSummary.supplierPhone}
                          </span>
                        )}
                        {activeSupplierSummary.supplierEmail && (
                          <span className="flex items-center gap-1">
                            <Mail className="w-3.5 h-3.5 text-slate-500" />
                            {activeSupplierSummary.supplierEmail}
                          </span>
                        )}
                        <span>Total Bills: <strong className="text-slate-200">{activeSupplierSummary.billsCount}</strong></span>
                        <span>Purchased Items: <strong className="text-slate-200">{activeSupplierSummary.itemsCount}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Financial KPI Summary */}
                  <div className="flex items-center gap-4 sm:gap-6 flex-wrap sm:flex-nowrap justify-between lg:justify-end">
                    <div className="text-left sm:text-right">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Total Purchases</span>
                      <span className="text-sm sm:text-base font-bold text-slate-100">
                        {Formatters.currency(activeSupplierSummary.totalPurchased)}
                      </span>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="text-[10px] uppercase font-bold text-emerald-400 block tracking-wider">Total Paid</span>
                      <span className="text-sm sm:text-base font-bold text-emerald-400">
                        {Formatters.currency(activeSupplierSummary.totalPaid)}
                      </span>
                    </div>

                    <div className="text-left sm:text-right px-3.5 py-2 rounded-xl bg-rose-950/50 border border-rose-900/70 shadow-sm">
                      <span className="text-[10px] uppercase font-bold text-rose-400 block tracking-wider">Outstanding Due</span>
                      <span className="text-sm sm:text-base font-black text-rose-400">
                        {Formatters.currency(activeSupplierSummary.totalDue)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-slate-800">
                  <div
                    className={`h-full transition-all duration-500 ${
                      activeSupplierSummary.totalDue <= 0 ? 'bg-emerald-500' : 'bg-gradient-to-r from-emerald-500 to-amber-500'
                    }`}
                    style={{
                      width: `${Math.min(
                        100,
                        Math.max(
                          0,
                          activeSupplierSummary.totalPurchased > 0
                            ? (activeSupplierSummary.totalPaid / activeSupplierSummary.totalPurchased) * 100
                            : 0
                        )
                      )}%`
                    }}
                  />
                </div>

                {/* Sub-Tabs within Supplier */}
                <div className="p-3 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl p-1">
                    <button
                      onClick={() => setSupplierSubTab('items')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                        supplierSubTab === 'items'
                          ? 'bg-blue-600 text-white shadow'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Package className="w-3.5 h-3.5" />
                      <span>Purchased Items History ({activeSupplierSummary.allItems.length})</span>
                    </button>

                    <button
                      onClick={() => setSupplierSubTab('bills')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                        supplierSubTab === 'bills'
                          ? 'bg-blue-600 text-white shadow'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Receipt className="w-3.5 h-3.5" />
                      <span>Invoices & Bills ({activeSupplierSummary.bills.length})</span>
                    </button>

                    <button
                      onClick={() => setSupplierSubTab('payments')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                        supplierSubTab === 'payments'
                          ? 'bg-blue-600 text-white shadow'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>Payment Transactions ({activeSupplierSummary.allPayments.length})</span>
                    </button>
                  </div>

                  {supplierSubTab === 'items' && (
                    <div className="relative min-w-[220px]">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search items for this supplier..."
                        value={supplierItemSearch}
                        onChange={(e) => setSupplierItemSearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 outline-none focus:border-blue-500"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* SUB-VIEW 1: ITEM-BY-ITEM PURCHASE HISTORY (USER CORE DEMAND) */}
              {supplierSubTab === 'items' && (
                <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                  <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                        <Package className="w-4 h-4 text-blue-400" />
                        <span>Complete Item-by-Item Purchase & Rate History</span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Individual breakdown showing purchase dates, item costs, bill values, paid amounts, and dues.
                      </p>
                    </div>
                    <span className="text-xs text-blue-400 font-bold bg-blue-950/60 px-2.5 py-1 rounded-lg border border-blue-800">
                      {activeSupplierFilteredItems.length} Items Recorded
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-850 text-slate-400 border-b border-slate-800 font-semibold">
                          <th className="py-3 px-3 text-center w-12"># SL</th>
                          <th className="py-3 px-3.5">Purchase Date</th>
                          <th className="py-3 px-3.5">Product Name & Model / Specs</th>
                          <th className="py-3 px-3.5">Bill / Invoice No</th>
                          <th className="py-3 px-3 text-center">Qty</th>
                          <th className="py-3 px-3.5 text-right bg-blue-950/30 text-blue-300 font-bold">
                            Unit Price (Item Value)
                          </th>
                          <th className="py-3 px-3.5 text-right font-bold text-slate-200">Total Item Value</th>
                          <th className="py-3 px-3.5 text-right text-slate-300">Bill Total</th>
                          <th className="py-3 px-3.5 text-right text-emerald-400">Bill Paid</th>
                          <th className="py-3 px-3.5 text-right text-rose-400">Bill Due</th>
                          <th className="py-3 px-3 text-center">Bill Status</th>
                          <th className="py-3 px-3 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/80">
                        {activeSupplierFilteredItems.length === 0 ? (
                          <tr>
                            <td colSpan={12} className="py-8 text-center text-slate-500">
                              No items found matching criteria for this supplier
                            </td>
                          </tr>
                        ) : (
                          activeSupplierFilteredItems.map((item, idx) => {
                            const parentBill = activeSupplierSummary.bills.find((b) => b.id === item.billId);
                            return (
                              <tr key={`${item.id}-${idx}`} className="hover:bg-slate-800/40 transition">
                                {/* SL */}
                                <td className="py-3 px-3 text-center text-slate-500 font-mono text-[11px]">
                                  {idx + 1}
                                </td>

                                {/* Purchase Date */}
                                <td className="py-3 px-3.5 text-slate-300 whitespace-nowrap font-medium">
                                  {Formatters.date(item.purchaseDate)}
                                </td>

                                {/* Product Name & SKU */}
                                <td className="py-3 px-3.5">
                                  <div className="font-semibold text-slate-100">{item.productName}</div>
                                  {item.sku && (
                                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                                      SKU: {item.sku}
                                      {item.category ? ` • ${item.category}` : ''}
                                    </div>
                                  )}
                                  {item.notes && (
                                    <div className="text-[10px] text-slate-500 italic mt-0.5">{item.notes}</div>
                                  )}
                                </td>

                                {/* Bill Number */}
                                <td className="py-3 px-3.5 font-mono text-slate-300 whitespace-nowrap">
                                  {item.billNumber}
                                </td>

                                {/* Quantity */}
                                <td className="py-3 px-3 text-center font-bold text-slate-200">
                                  {item.quantity} <span className="text-[11px] text-slate-400 font-normal">{item.unit}</span>
                                </td>

                                {/* UNIT PRICE (ITEM VALUE) */}
                                <td className="py-3 px-3.5 text-right font-bold text-blue-300 bg-blue-950/20 whitespace-nowrap">
                                  {Formatters.currency(item.unitPrice)}
                                  <span className="text-[10px] text-slate-400 block font-normal">per {item.unit}</span>
                                </td>

                                {/* Total Item Value */}
                                <td className="py-3 px-3.5 text-right font-bold text-slate-100 whitespace-nowrap">
                                  {Formatters.currency(item.totalPrice)}
                                </td>

                                {/* Bill Total Amount */}
                                <td className="py-3 px-3.5 text-right text-slate-300 whitespace-nowrap">
                                  {parentBill ? Formatters.currency(parentBill.totalAmount) : '-'}
                                </td>

                                {/* Bill Paid Amount */}
                                <td className="py-3 px-3.5 text-right font-semibold text-emerald-400 whitespace-nowrap">
                                  {Formatters.currency(item.billPaid)}
                                </td>

                                {/* Bill Due Amount */}
                                <td className="py-3 px-3.5 text-right font-bold text-rose-400 whitespace-nowrap">
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
                                    {item.billStatus === 'PAID' ? 'Paid' : item.billStatus === 'PARTIAL' ? 'Partial' : 'Due'}
                                  </Badge>
                                </td>

                                {/* Action */}
                                <td className="py-3 px-3 text-center">
                                  {parentBill && parentBill.dueAmount > 0 ? (
                                    <button
                                      onClick={() => openPaymentModal(parentBill)}
                                      className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold transition shadow-sm"
                                    >
                                      Pay
                                    </button>
                                  ) : (
                                    <span className="text-[11px] text-emerald-500 font-medium">Settled</span>
                                  )}
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SUB-VIEW 2: INVOICES & BILLS */}
              {supplierSubTab === 'bills' && (
                <div className="space-y-3">
                  {activeSupplierSummary.bills.map((bill) => (
                    <div
                      key={bill.id}
                      className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-md"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span className="font-mono text-sm font-bold text-blue-400">{bill.billNumber}</span>
                          <span className="text-xs text-slate-400">&bull;</span>
                          <span className="text-xs text-slate-300 font-medium">Date: {Formatters.date(bill.date)}</span>
                          <Badge
                            variant={bill.status === 'PAID' ? 'success' : bill.status === 'PARTIAL' ? 'warning' : 'danger'}
                          >
                            {bill.status}
                          </Badge>
                        </div>
                        <div className="text-xs text-slate-400">
                          Items ({bill.items.length}): <span className="text-slate-300">{bill.items.map((i) => `${i.productName} (${i.quantity} ${i.unit})`).join(', ')}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap justify-between md:justify-end">
                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 uppercase font-semibold block">Total Bill</span>
                          <span className="text-xs font-bold text-slate-100">{Formatters.currency(bill.totalAmount)}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-emerald-400 uppercase font-semibold block">Paid</span>
                          <span className="text-xs font-bold text-emerald-400">{Formatters.currency(bill.paidAmount)}</span>
                        </div>
                        <div className="text-right px-3 py-1 rounded-lg bg-rose-950/40 border border-rose-900/60">
                          <span className="text-[10px] text-rose-400 uppercase font-semibold block">Due</span>
                          <span className="text-xs font-black text-rose-400">{Formatters.currency(bill.dueAmount)}</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {bill.dueAmount > 0 && (
                            <button
                              onClick={() => openPaymentModal(bill)}
                              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition"
                            >
                              Pay
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteBill(bill.id, bill.billNumber)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 transition"
                            title="Delete Bill"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* SUB-VIEW 3: PAYMENT TRANSACTION LOGS */}
              {supplierSubTab === 'payments' && (
                <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl p-5 space-y-4">
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>Payment Transaction History</span>
                  </h4>

                  {activeSupplierSummary.allPayments.length === 0 ? (
                    <p className="text-xs text-slate-500 text-center py-6">No payments recorded yet for this supplier.</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {activeSupplierSummary.allPayments.map((pay) => (
                        <div
                          key={pay.id}
                          className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2 shadow-sm"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-emerald-400 text-sm">
                              {Formatters.currency(pay.amount)}
                            </span>
                            <Badge variant="success">{pay.paymentMethod}</Badge>
                          </div>
                          <div className="text-slate-400 flex items-center justify-between text-[11px]">
                            <span>Date: {Formatters.date(pay.date)}</span>
                            <span className="font-mono text-slate-300">{pay.billNumber}</span>
                          </div>
                          {pay.referenceNo && (
                            <div className="text-[11px] text-slate-400">
                              Ref: <span className="text-slate-200 font-mono">{pay.referenceNo}</span>
                            </div>
                          )}
                          {pay.note && (
                            <div className="text-[11px] text-slate-400 italic">Note: {pay.note}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* VIEW 2: FLAT ITEMS MASTER TABLE */}
      {viewMode === 'items' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-100">
                All Purchased Items, Unit Rates & Dues Ledger
              </h3>
              <p className="text-xs text-slate-400">
                Complete itemized directory of purchase rates, paid amounts, and outstanding payable balances per item
              </p>
            </div>
            <span className="text-xs text-blue-400 font-bold bg-blue-950/60 px-2.5 py-1 rounded-lg border border-blue-800">
              {allFlattenedItems.length} Items
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-850 text-slate-400 border-b border-slate-800 font-semibold">
                  <th className="py-3 px-3.5">Supplier / Company</th>
                  <th className="py-3 px-3.5">Product & Model (Item)</th>
                  <th className="py-3 px-3.5">Bill Number</th>
                  <th className="py-3 px-3.5">Date</th>
                  <th className="py-3 px-3.5 text-center">Qty</th>
                  <th className="py-3 px-3.5 text-right bg-blue-950/30 text-blue-300 font-bold">
                    Unit Value (Cost)
                  </th>
                  <th className="py-3 px-3.5 text-right font-bold text-slate-200">Total Amount</th>
                  <th className="py-3 px-3.5 text-right text-emerald-400">Paid</th>
                  <th className="py-3 px-3.5 text-right text-rose-400">Due</th>
                  <th className="py-3 px-3.5 text-center">Status</th>
                  <th className="py-3 px-3.5 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {allFlattenedItems.length === 0 ? (
                  <tr>
                    <td colSpan={11} className="py-8 text-center text-slate-500">
                      No purchased items found
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
                          {item.billStatus === 'PAID' ? 'Paid' : item.billStatus === 'PARTIAL' ? 'Partial' : 'Due'}
                        </Badge>
                      </td>
                      {/* Action */}
                      <td className="py-3 px-3.5 text-center">
                        {item.billDue > 0 ? (
                          <button
                            onClick={() => openPaymentModal(item.fullBill)}
                            className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold transition"
                          >
                            Pay
                          </button>
                        ) : (
                          <span className="text-[11px] text-emerald-400">Settled</span>
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
              No purchase bills found
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
                    <span>Date: {Formatters.date(bill.date)}</span>
                    <span>&bull;</span>
                    <span>Items: {bill.items.length} ({bill.items.map((i) => i.productName).join(', ')})</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap justify-between md:justify-end">
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Total Bill</span>
                    <span className="text-xs font-bold text-slate-100">{Formatters.currency(bill.totalAmount)}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-emerald-400 uppercase font-semibold block">Paid</span>
                    <span className="text-xs font-bold text-emerald-400">{Formatters.currency(bill.paidAmount)}</span>
                  </div>
                  <div className="text-right px-3 py-1 rounded-lg bg-rose-950/40 border border-rose-900/60">
                    <span className="text-[10px] text-rose-400 uppercase font-semibold block">Due</span>
                    <span className="text-xs font-black text-rose-400">{Formatters.currency(bill.dueAmount)}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {bill.dueAmount > 0 && (
                      <button
                        onClick={() => openPaymentModal(bill)}
                        className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition"
                      >
                        Pay
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteBill(bill.id, bill.billNumber)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 transition"
                      title="Delete Bill"
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
        title="Create New Purchase Bill"
        size="4xl"
      >
        <form onSubmit={handleCreateBillSubmit} className="space-y-5">
          {/* Supplier & Bill Header Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Supplier / Company Name *
              </label>
              <input
                type="text"
                required
                list="suppliers-list"
                placeholder="e.g. Shenzhen Hikvision Security Co."
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
                Bill / Invoice Reference No *
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
                Purchase Date *
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
                <span>Purchased Items & Unit Rates</span>
              </label>
              <button
                type="button"
                onClick={handleAddBillItemRow}
                className="px-2.5 py-1 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 border border-blue-500/30 text-xs font-semibold transition flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Add Another Item</span>
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
                        placeholder="Enter or select product name..."
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
                          placeholder="Qty"
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
                        placeholder="Unit Price"
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
                <span className="text-[11px] font-semibold text-slate-400 block">Total Bill Amount</span>
                <span className="text-base font-bold text-slate-100">{Formatters.currency(newBillSubtotal)}</span>
              </div>

              <div>
                <span className="text-[11px] font-semibold text-emerald-400 block">Down Payment (Paid Now)</span>
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
                <span className="text-[11px] font-semibold text-rose-400 block">Outstanding Due</span>
                <span className="text-base font-black text-rose-400">{Formatters.currency(newBillDueAmount)}</span>
              </div>
            </div>

            {newBillInitialPaid > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Payment Method</label>
                  <select
                    value={newBillPaymentMethod}
                    onChange={(e) => setNewBillPaymentMethod(e.target.value as any)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200"
                  >
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="TT / LC">TT / LC (Telegraphic Transfer / LC)</option>
                    <option value="Cash">Cash</option>
                    <option value="Cheque">Bank Cheque</option>
                    <option value="bKash / Nagad">bKash / Nagad</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Reference / Transaction No</label>
                  <input
                    type="text"
                    placeholder="e.g. EBL-FT-99120"
                    value={newBillPaymentRef}
                    onChange={(e) => setNewBillPaymentRef(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200 font-mono"
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Notes / Remarks</label>
            <input
              type="text"
              placeholder="Enter any bill notes or purchase remarks..."
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
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-lg shadow-blue-600/30 active:scale-95"
            >
              Save Purchase Bill
            </button>
          </div>
        </form>
      </Modal>

      {/* MODAL 2: RECORD PAYMENT */}
      <Modal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        title="Record Supplier Payment"
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
                <span>Total Bill: <strong>{Formatters.currency(selectedBillForPayment.totalAmount)}</strong></span>
                <span>Paid so far: <strong className="text-emerald-400">{Formatters.currency(selectedBillForPayment.paidAmount)}</strong></span>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                <span className="font-semibold text-rose-400">Current Due:</span>
                <span className="font-black text-rose-400 text-sm">
                  {Formatters.currency(selectedBillForPayment.dueAmount)}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Payment Amount (BDT) *
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
                  Payment Date *
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
                  Payment Method *
                </label>
                <select
                  value={paymentMethodInput}
                  onChange={(e) => setPaymentMethodInput(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200"
                >
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="TT / LC">TT / LC (Telegraphic Transfer / LC)</option>
                  <option value="Cash">Cash</option>
                  <option value="Cheque">Bank Cheque</option>
                  <option value="bKash / Nagad">bKash / Nagad</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Bank Name (if applicable)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Eastern Bank PLC"
                  value={paymentBankInput}
                  onChange={(e) => setPaymentBankInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Transaction / Cheque / Reference No
                </label>
                <input
                  type="text"
                  placeholder="e.g. TT-BOC-992144 or CHQ-552109"
                  value={paymentRefInput}
                  onChange={(e) => setPaymentRefInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 font-mono"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Notes / Remarks
                </label>
                <input
                  type="text"
                  placeholder="e.g. Second installment payment..."
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
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-lg shadow-emerald-600/30 active:scale-95"
              >
                Confirm Payment
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* MODAL 3: PRINTABLE COMPANY STATEMENT */}
      <Modal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        title="Printable Supplier Statement"
        size="5xl"
      >
        {selectedCompanyForPrint && (
          <div className="space-y-6">
            {/* Print Header Controls */}
            <div className="flex items-center justify-between no-print">
              <p className="text-xs text-slate-400">
                Print this ledger statement or save it as a PDF document.
              </p>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center gap-2 shadow"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save PDF</span>
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
                    Date: {Formatters.date(new Date().toISOString())}
                  </span>
                </div>
              </div>

              {/* Company Info Box */}
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Supplier / Company:</span>
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
                    <span className="text-slate-600">Total Purchases: </span>
                    <strong className="text-slate-900">{Formatters.currency(selectedCompanyForPrint.totalPurchased)}</strong>
                  </div>
                  <div>
                    <span className="text-emerald-700">Total Paid: </span>
                    <strong className="text-emerald-700">{Formatters.currency(selectedCompanyForPrint.totalPaid)}</strong>
                  </div>
                  <div className="pt-1 border-t border-slate-300">
                    <span className="text-rose-700 font-bold">Balance Due: </span>
                    <strong className="text-rose-700 text-sm">{Formatters.currency(selectedCompanyForPrint.totalDue)}</strong>
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <div>
                <h4 className="font-bold text-slate-900 text-xs mb-2 uppercase tracking-wider">
                  Purchased Products & Unit Rates
                </h4>
                <table className="w-full border-collapse border border-slate-300 text-[11px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 border-b border-slate-300">
                      <th className="p-2 text-left border-r border-slate-300">SL</th>
                      <th className="p-2 text-left border-r border-slate-300">Product Name</th>
                      <th className="p-2 text-left border-r border-slate-300">Bill No</th>
                      <th className="p-2 text-left border-r border-slate-300">Date</th>
                      <th className="p-2 text-center border-r border-slate-300">Qty</th>
                      <th className="p-2 text-right border-r border-slate-300 bg-slate-50 font-bold">Unit Rate</th>
                      <th className="p-2 text-right">Total</th>
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
                      <td colSpan={6} className="p-2 text-right border-r border-slate-300">Subtotal:</td>
                      <td className="p-2 text-right text-slate-900">{Formatters.currency(selectedCompanyForPrint.totalPurchased)}</td>
                    </tr>
                    <tr className="bg-emerald-50 text-emerald-800 font-bold">
                      <td colSpan={6} className="p-2 text-right border-r border-slate-300">Total Paid:</td>
                      <td className="p-2 text-right">{Formatters.currency(selectedCompanyForPrint.totalPaid)}</td>
                    </tr>
                    <tr className="bg-rose-50 text-rose-800 font-bold text-xs">
                      <td colSpan={6} className="p-2 text-right border-r border-slate-300">Net Payable Due:</td>
                      <td className="p-2 text-right">{Formatters.currency(selectedCompanyForPrint.totalDue)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Payment Receipts Table */}
              {selectedCompanyForPrint.allPayments.length > 0 && (
                <div>
                  <h4 className="font-bold text-slate-900 text-xs mb-2 uppercase tracking-wider">
                    Payment Receipts & Transactions
                  </h4>
                  <table className="w-full border-collapse border border-slate-300 text-[11px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 border-b border-slate-300">
                        <th className="p-2 text-left border-r border-slate-300">Date</th>
                        <th className="p-2 text-left border-r border-slate-300">Bill No</th>
                        <th className="p-2 text-left border-r border-slate-300">Method</th>
                        <th className="p-2 text-left border-r border-slate-300">Reference / Bank</th>
                        <th className="p-2 text-right font-bold">Paid Amount</th>
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
                    Accounts Officer
                  </div>
                </div>
                <div>
                  <div className="w-48 border-t border-slate-400 mx-auto pt-1 font-semibold">
                    Authorized Signature
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* MODAL 4: EDIT SUPPLIER */}
      <Modal
        isOpen={isEditSupplierModalOpen}
        onClose={() => {
          setIsEditSupplierModalOpen(false);
          setSupplierToEdit(null);
        }}
        title="Edit Supplier Details"
        size="md"
      >
        {supplierToEdit && (
          <form onSubmit={handleEditSupplierSubmit} className="space-y-4">
            <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-800/50 flex items-center gap-2.5 text-xs text-blue-300">
              <Building2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>
                Editing supplier records will update the supplier name &amp; contacts across all associated purchase bills and item ledgers.
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Supplier / Company Name *
              </label>
              <input
                type="text"
                required
                value={editSupplierName}
                onChange={(e) => setEditSupplierName(e.target.value)}
                placeholder="e.g. Shenzhen Hikvision Security Tech Co., Ltd"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  value={editSupplierCountry}
                  onChange={(e) => setEditSupplierCountry(e.target.value)}
                  placeholder="e.g. China, Bangladesh"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Contact Phone
                </label>
                <input
                  type="text"
                  value={editSupplierPhone}
                  onChange={(e) => setEditSupplierPhone(e.target.value)}
                  placeholder="e.g. +86 755 8899 1234"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={editSupplierEmail}
                onChange={(e) => setEditSupplierEmail(e.target.value)}
                placeholder="e.g. export@company.com"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setIsEditSupplierModalOpen(false);
                  setSupplierToEdit(null);
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-lg shadow-blue-600/30 active:scale-95 flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* MODAL 5: DELETE SUPPLIER CONFIRMATION */}
      <Modal
        isOpen={isDeleteSupplierModalOpen}
        onClose={() => {
          setIsDeleteSupplierModalOpen(false);
          setSupplierToDelete(null);
        }}
        title="Delete Supplier Confirmation"
        size="md"
      >
        {supplierToDelete && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-900/60 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-rose-300 uppercase tracking-wide">
                  Permanent Action Warning
                </h4>
                <p className="text-xs text-rose-200/90 leading-relaxed">
                  Are you sure you want to delete supplier <strong className="text-white underline">{supplierToDelete.supplierName}</strong>?
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span>Associated Purchase Bills:</span>
                <span className="font-bold text-slate-100">{supplierToDelete.billsCount} Bills</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Purchased Items:</span>
                <span className="font-bold text-slate-100">{supplierToDelete.itemsCount} Items</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Total Purchases Value:</span>
                <span className="font-bold text-slate-100">{Formatters.currency(supplierToDelete.totalPurchased)}</span>
              </div>
              {supplierToDelete.totalDue > 0 && (
                <div className="flex items-center justify-between text-rose-400 font-semibold pt-1 border-t border-slate-800">
                  <span>Pending Outstanding Due:</span>
                  <span className="font-bold">{Formatters.currency(supplierToDelete.totalDue)}</span>
                </div>
              )}
            </div>

            <p className="text-[11px] text-slate-400 italic">
              Deleting this supplier will remove all their purchase records, item entries, and payment ledgers from the system.
            </p>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setIsDeleteSupplierModalOpen(false);
                  setSupplierToDelete(null);
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDeleteSupplier}
                className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition shadow-lg shadow-rose-600/30 active:scale-95 flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Supplier &amp; Records</span>
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* MODAL 6: ADD NEW SUPPLIER */}
      <Modal
        isOpen={isAddSupplierModalOpen}
        onClose={() => setIsAddSupplierModalOpen(false)}
        title="Register New Supplier"
        size="md"
      >
        <form onSubmit={handleAddSupplierSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Supplier / Company Name *
            </label>
            <input
              type="text"
              required
              value={newSupplierName}
              onChange={(e) => setNewSupplierName(e.target.value)}
              placeholder="e.g. Cisco Systems BD / Dahua Technology"
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Country
              </label>
              <input
                type="text"
                value={newSupplierCountry}
                onChange={(e) => setNewSupplierCountry(e.target.value)}
                placeholder="e.g. Bangladesh, China"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Contact Phone
              </label>
              <input
                type="text"
                value={newSupplierPhone}
                onChange={(e) => setNewSupplierPhone(e.target.value)}
                placeholder="e.g. +880 1712 345678"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={newSupplierEmail}
              onChange={(e) => setNewSupplierEmail(e.target.value)}
              placeholder="e.g. sales@supplier.com"
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setIsAddSupplierModalOpen(false)}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-lg shadow-emerald-600/30 active:scale-95 flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Supplier</span>
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
