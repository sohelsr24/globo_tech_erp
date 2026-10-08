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
  ArrowDownRight,
  Split,
  FolderTree
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
  addNewSupplier,
  updatePurchaseItem,
  deletePurchaseItem,
  getNextPONumber,
  updatePurchaseBill,
  addItemToPurchaseBill,
  movePurchaseItemToBill
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
  const [selectedPOFilter, setSelectedPOFilter] = useState<string>('ALL');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('ALL');
  const [itemsViewMode, setItemsViewMode] = useState<'grouped' | 'flat'>('grouped');
  const [updateRevision, setUpdateRevision] = useState<number>(0);

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

  // Edit Item Modal State
  const [isEditItemModalOpen, setIsEditItemModalOpen] = useState<boolean>(false);
  const [itemToEdit, setItemToEdit] = useState<any | null>(null);
  const [editItemProductName, setEditItemProductName] = useState<string>('');
  const [editItemSku, setEditItemSku] = useState<string>('');
  const [editItemCategory, setEditItemCategory] = useState<string>('');
  const [editItemDate, setEditItemDate] = useState<string>('');
  const [editItemQuantity, setEditItemQuantity] = useState<number>(1);
  const [editItemUnit, setEditItemUnit] = useState<string>('pcs');
  const [editItemUnitPrice, setEditItemUnitPrice] = useState<number>(0);
  const [editItemNotes, setEditItemNotes] = useState<string>('');
  const [editItemTargetPOType, setEditItemTargetPOType] = useState<'CURRENT' | 'EXISTING' | 'NEW'>('CURRENT');
  const [editItemTargetBillId, setEditItemTargetBillId] = useState<string>('');
  const [editItemNewPONumber, setEditItemNewPONumber] = useState<string>('');
  const [editItemNewPODate, setEditItemNewPODate] = useState<string>('');
  const [editItemNewPOInitialPaid, setEditItemNewPOInitialPaid] = useState<number>(0);

  // Add Item to Bill Modal State
  const [isAddItemToBillModalOpen, setIsAddItemToBillModalOpen] = useState<boolean>(false);
  const [targetBillForNewItem, setTargetBillForNewItem] = useState<{
    billId: string;
    billNumber: string;
    supplierName?: string;
    currentTotal?: number;
    currentDue?: number;
  } | null>(null);
  const [newItemProductName, setNewItemProductName] = useState<string>('');
  const [newItemSku, setNewItemSku] = useState<string>('');
  const [newItemCategory, setNewItemCategory] = useState<string>('');
  const [newItemQuantity, setNewItemQuantity] = useState<number>(1);
  const [newItemUnit, setNewItemUnit] = useState<string>('pcs');
  const [newItemUnitPrice, setNewItemUnitPrice] = useState<number>(0);
  const [newItemNotes, setNewItemNotes] = useState<string>('');

  // Synchronize global search
  useEffect(() => {
    if (globalSearchQuery !== undefined) {
      setSearchQuery(globalSearchQuery);
    }
  }, [globalSearchQuery]);

  // Reset PO & category filter whenever selected supplier changes
  useEffect(() => {
    setSelectedPOFilter('ALL');
    setSelectedCategoryFilter('ALL');
    setSupplierItemSearch('');
  }, [selectedSupplierName]);

  // Listen for storage & external update events
  useEffect(() => {
    const handleUpdates = () => {
      setPurchases(getStoredPurchases());
      setProducts(getStoredProducts());
      setUpdateRevision((prev) => prev + 1);
    };
    window.addEventListener('globotech_purchases_updated', handleUpdates);
    window.addEventListener('globotech_suppliers_updated', handleUpdates);
    window.addEventListener('globotech_backup_restored', handleUpdates);
    window.addEventListener('globotech:cloud_data_synced', handleUpdates);
    window.addEventListener('storage', handleUpdates);
    return () => {
      window.removeEventListener('globotech_purchases_updated', handleUpdates);
      window.removeEventListener('globotech_suppliers_updated', handleUpdates);
      window.removeEventListener('globotech_backup_restored', handleUpdates);
      window.removeEventListener('globotech:cloud_data_synced', handleUpdates);
      window.removeEventListener('storage', handleUpdates);
    };
  }, []);

  // Compute rollups
  const companySummaries = useMemo(() => {
    return getCompanySummaries(purchases);
  }, [purchases, updateRevision]);

  // Active supplier details if drilled down
  const activeSupplierSummary = useMemo(() => {
    if (!selectedSupplierName) return null;
    return companySummaries.find((c) => c.supplierName === selectedSupplierName) || null;
  }, [companySummaries, selectedSupplierName]);

  // Distinct item categories for active supplier
  const availableSupplierItemCategories = useMemo(() => {
    if (!activeSupplierSummary) return [];
    const set = new Set<string>();
    for (const it of activeSupplierSummary.allItems) {
      if (it.category && it.category.trim()) {
        set.add(it.category.trim());
      }
    }
    return Array.from(set).sort();
  }, [activeSupplierSummary]);

  // Filtered items inside active supplier
  const activeSupplierFilteredItems = useMemo(() => {
    if (!activeSupplierSummary) return [];
    let items = activeSupplierSummary.allItems;

    if (selectedPOFilter !== 'ALL') {
      items = items.filter(
        (it) => it.billNumber.toLowerCase() === selectedPOFilter.toLowerCase() || it.billId === selectedPOFilter
      );
    }

    if (selectedCategoryFilter !== 'ALL') {
      items = items.filter(
        (it) => (it.category || '').toLowerCase() === selectedCategoryFilter.toLowerCase()
      );
    }

    const q = supplierItemSearch.trim().toLowerCase();
    if (!q) return items;
    return items.filter((it) =>
      it.productName.toLowerCase().includes(q) ||
      (it.sku && it.sku.toLowerCase().includes(q)) ||
      it.billNumber.toLowerCase().includes(q) ||
      (it.notes && it.notes.toLowerCase().includes(q)) ||
      (it.category && it.category.toLowerCase().includes(q))
    );
  }, [activeSupplierSummary, supplierItemSearch, selectedPOFilter, selectedCategoryFilter]);

  // Bills inside active supplier filtered by PO filter and search
  const activeSupplierFilteredBills = useMemo(() => {
    if (!activeSupplierSummary) return [];
    let billsList = activeSupplierSummary.bills;

    if (selectedPOFilter !== 'ALL') {
      billsList = billsList.filter(
        (b) => b.billNumber.toLowerCase() === selectedPOFilter.toLowerCase() || b.id === selectedPOFilter
      );
    }

    const q = supplierItemSearch.trim().toLowerCase();
    if (!q && selectedCategoryFilter === 'ALL') return billsList;

    return billsList.filter((bill) => {
      const matchBillNo = bill.billNumber.toLowerCase().includes(q);
      const matchItems = bill.items.some((it) => {
        const matchesCategory =
          selectedCategoryFilter === 'ALL' ||
          (it.category || '').toLowerCase() === selectedCategoryFilter.toLowerCase();
        const matchesText =
          !q ||
          it.productName.toLowerCase().includes(q) ||
          (it.sku && it.sku.toLowerCase().includes(q)) ||
          (it.category && it.category.toLowerCase().includes(q));
        return matchesCategory && matchesText;
      });
      return matchBillNo || matchItems;
    });
  }, [activeSupplierSummary, supplierItemSearch, selectedPOFilter, selectedCategoryFilter]);

  // Active filtered single bill (if a specific PO is chosen)
  const activeFilteredBill = useMemo(() => {
    if (!activeSupplierSummary || selectedPOFilter === 'ALL') return null;
    return activeSupplierSummary.bills.find(
      (b) => b.billNumber.toLowerCase() === selectedPOFilter.toLowerCase() || b.id === selectedPOFilter
    ) || null;
  }, [activeSupplierSummary, selectedPOFilter]);

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
  const [newBillNumber, setNewBillNumber] = useState<string>(() => getNextPONumber(getStoredPurchases()));
  const [newBillDate, setNewBillDate] = useState<string>(() => new Date().toISOString().split('T')[0]);
  const [newBillDueDate, setNewBillDueDate] = useState<string>('');

  // Edit Bill Modal State
  const [isEditBillModalOpen, setIsEditBillModalOpen] = useState<boolean>(false);
  const [billToEdit, setBillToEdit] = useState<PurchaseBillRecord | null>(null);
  const [editBillNumber, setEditBillNumber] = useState<string>('');
  const [editBillDate, setEditBillDate] = useState<string>('');
  const [editBillDueDate, setEditBillDueDate] = useState<string>('');
  const [editBillNotes, setEditBillNotes] = useState<string>('');
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
    setNewBillNumber(getNextPONumber(getStoredPurchases()));
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
    setUpdateRevision((prev) => prev + 1);
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
    setUpdateRevision((prev) => prev + 1);
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
    setUpdateRevision((prev) => prev + 1);
    setIsAddSupplierModalOpen(false);
    setNewSupplierName('');
    setNewSupplierCountry('Bangladesh');
    setNewSupplierPhone('');
    setNewSupplierEmail('');
  };

  // Open Edit Item Modal
  const openEditItemModal = (item: any) => {
    setItemToEdit(item);
    setEditItemProductName(item.productName || '');
    setEditItemSku(item.sku || '');
    setEditItemCategory(item.category || '');
    setEditItemDate(item.purchaseDate || new Date().toISOString().split('T')[0]);
    setEditItemQuantity(item.quantity || 1);
    setEditItemUnit(item.unit || 'pcs');
    setEditItemUnitPrice(item.unitPrice || 0);
    setEditItemNotes(item.notes || '');
    setEditItemTargetPOType('CURRENT');
    setEditItemTargetBillId(item.billId);
    setEditItemNewPONumber(getNextPONumber(purchases));
    setEditItemNewPODate(item.purchaseDate || new Date().toISOString().split('T')[0]);
    setEditItemNewPOInitialPaid(0);
    setIsEditItemModalOpen(true);
  };

  // Submit Edit Item
  const handleEditItemSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!itemToEdit) return;

    const trimmedName = editItemProductName.trim();
    if (!trimmedName) {
      alert('Please enter a valid product name');
      return;
    }

    const qty = Math.max(1, Number(editItemQuantity) || 1);
    const unitRate = Math.max(0, Number(editItemUnitPrice) || 0);

    // 1. Update the item's properties
    updatePurchaseItem(itemToEdit.billId, itemToEdit.id, {
      productName: trimmedName,
      sku: editItemSku.trim() || undefined,
      category: editItemCategory.trim() || undefined,
      purchaseDate: editItemDate,
      quantity: qty,
      unit: editItemUnit.trim() || 'pcs',
      unitPrice: unitRate,
      notes: editItemNotes.trim() || undefined
    });

    // 2. Check if user moved or split this item to another PO
    if (editItemTargetPOType === 'EXISTING' && editItemTargetBillId && editItemTargetBillId !== itemToEdit.billId) {
      movePurchaseItemToBill(
        itemToEdit.billId,
        {
          type: 'EXISTING',
          targetBillId: editItemTargetBillId
        },
        itemToEdit.id
      );
    } else if (editItemTargetPOType === 'NEW') {
      movePurchaseItemToBill(
        itemToEdit.billId,
        {
          type: 'NEW',
          newBillNumber: editItemNewPONumber.trim() || getNextPONumber(purchases),
          newBillDate: editItemNewPODate || editItemDate,
          initialPaidAmount: Math.max(0, Number(editItemNewPOInitialPaid) || 0)
        },
        itemToEdit.id
      );
    }

    setPurchases(getStoredPurchases());
    setUpdateRevision((prev) => prev + 1);
    setIsEditItemModalOpen(false);
    setItemToEdit(null);
  };

  // Delete Individual Item
  const handleDeleteItem = (billId: string, itemId: string, productName: string) => {
    if (confirm(`Are you sure you want to remove item "${productName}" from this purchase bill?`)) {
      deletePurchaseItem(billId, itemId);
      setPurchases(getStoredPurchases());
    }
  };

  // Open Add Item to Existing Bill Modal
  const openAddItemModalForBill = (
    billId: string,
    billNumber: string,
    supplierName?: string,
    currentTotal?: number,
    currentDue?: number
  ) => {
    const foundBill = purchases.find((b) => b.id === billId || b.billNumber === billNumber);
    setTargetBillForNewItem({
      billId: foundBill ? foundBill.id : billId,
      billNumber: foundBill ? foundBill.billNumber : billNumber,
      supplierName: foundBill ? foundBill.supplierName : (supplierName || selectedSupplierName || ''),
      currentTotal: foundBill ? foundBill.totalAmount : (currentTotal || 0),
      currentDue: foundBill ? foundBill.dueAmount : (currentDue || 0)
    });
    setNewItemProductName('');
    setNewItemSku('');
    setNewItemCategory('');
    setNewItemQuantity(1);
    setNewItemUnit('pcs');
    setNewItemUnitPrice(0);
    setNewItemNotes('');
    setIsAddItemToBillModalOpen(true);
  };

  // Select Product in Add Item Modal (auto-fill from ERP inventory)
  const handleSelectNewItemProduct = (name: string) => {
    setNewItemProductName(name);
    const found = products.find((p) => p.name.toLowerCase() === name.trim().toLowerCase());
    if (found) {
      if (found.sku) setNewItemSku(found.sku);
      if (found.category) setNewItemCategory(found.category);
      if (found.unit) setNewItemUnit(found.unit);
      if (found.currentLandedCost) setNewItemUnitPrice(found.currentLandedCost);
    }
  };

  // Submit Add Item to Bill
  const handleAddItemToBillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetBillForNewItem) return;

    const trimmedName = newItemProductName.trim();
    if (!trimmedName) {
      alert('Please enter a product name');
      return;
    }

    const qty = Math.max(1, Number(newItemQuantity) || 1);
    const rate = Math.max(0, Number(newItemUnitPrice) || 0);

    const success = addItemToPurchaseBill(targetBillForNewItem.billId, {
      productName: trimmedName,
      sku: newItemSku.trim() || undefined,
      category: newItemCategory.trim() || undefined,
      quantity: qty,
      unit: newItemUnit.trim() || 'pcs',
      unitPrice: rate,
      notes: newItemNotes.trim() || undefined
    });

    if (success) {
      setPurchases(getStoredPurchases());
      setIsAddItemToBillModalOpen(false);
      setTargetBillForNewItem(null);
    } else {
      alert('Failed to add item to bill. Bill not found.');
    }
  };

  // Open New Bill Modal with auto-calculated sequential serial PO number
  const openNewBillModal = (supplierName?: string) => {
    setNewBillSupplierName(supplierName || '');
    setNewBillNumber(getNextPONumber(purchases));
    setNewBillDate(new Date().toISOString().split('T')[0]);
    setIsNewBillModalOpen(true);
  };

  // Open Edit Bill Modal
  const openEditBillModal = (bill: PurchaseBillRecord) => {
    setBillToEdit(bill);
    setEditBillNumber(bill.billNumber);
    setEditBillDate(bill.date || new Date().toISOString().split('T')[0]);
    setEditBillDueDate(bill.dueDate || '');
    setEditBillNotes(bill.notes || '');
    setIsEditBillModalOpen(true);
  };

  // Submit Edit Bill
  const handleEditBillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!billToEdit) return;

    const trimmedNo = editBillNumber.trim();
    if (!trimmedNo) {
      alert('Please enter a valid bill / PO number');
      return;
    }

    updatePurchaseBill(billToEdit.id, {
      billNumber: trimmedNo,
      date: editBillDate,
      dueDate: editBillDueDate || undefined,
      notes: editBillNotes.trim() || undefined
    });

    setPurchases(getStoredPurchases());
    setIsEditBillModalOpen(false);
    setBillToEdit(null);
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
            onClick={() => openNewBillModal()}
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
          <div className="flex items-center gap-1.5 bg-slate-950/70 border border-slate-800 rounded-xl p-1 w-full sm:w-fit overflow-x-auto touch-scroll">
            <button
              onClick={() => {
                setViewMode('companies');
                setSelectedSupplierName(null);
              }}
              className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
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
              className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
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
              className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
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
                <>
                  {/* MOBILE RESPONSIVE CARDS (100% COMPLETE STATS & ACTIONS ON MOBILE PHONES) */}
                  <div className="block md:hidden divide-y divide-slate-800">
                    {filteredCompanySummaries.map((comp, idx) => (
                      <div
                        key={comp.supplierName}
                        onClick={() => setSelectedSupplierName(comp.supplierName)}
                        className="p-4 hover:bg-slate-850/50 transition cursor-pointer space-y-3 active:bg-slate-800/80"
                      >
                        {/* Top Header: SL, Company Name, Country, Status */}
                        <div className="flex items-start justify-between gap-2.5">
                          <div className="flex items-center gap-2.5">
                            <span className="w-6 h-6 rounded-lg bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center text-xs border border-blue-500/30 flex-shrink-0">
                              {idx + 1}
                            </span>
                            <div>
                              <div className="font-bold text-slate-100 text-sm leading-snug">
                                {comp.supplierName}
                              </div>
                              <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-400 flex-wrap">
                                {comp.supplierCountry && (
                                  <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 text-[10px]">
                                    {comp.supplierCountry}
                                  </span>
                                )}
                                {comp.supplierPhone && <span>{comp.supplierPhone}</span>}
                              </div>
                            </div>
                          </div>

                          <Badge
                            variant={comp.status === 'PAID' ? 'success' : comp.status === 'PARTIAL' ? 'warning' : 'danger'}
                          >
                            {comp.status === 'PAID' ? 'Fully Paid' : comp.status === 'PARTIAL' ? 'Partial Due' : 'Unpaid'}
                          </Badge>
                        </div>

                        {/* Financial KPI Summary (Purchased, Paid, Due) */}
                        <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/90 text-center">
                          <div>
                            <span className="text-[10px] text-slate-400 block uppercase font-medium">Purchased</span>
                            <span className="text-xs font-bold text-slate-200 block truncate">
                              {Formatters.currency(comp.totalPurchased)}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] text-emerald-400 block uppercase font-medium">Paid</span>
                            <span className="text-xs font-bold text-emerald-400 block truncate">
                              {Formatters.currency(comp.totalPaid)}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] text-rose-400 block uppercase font-medium">Due</span>
                            <span className={`text-xs font-black block truncate ${comp.totalDue > 0 ? 'text-rose-400' : 'text-slate-400'}`}>
                              {Formatters.currency(comp.totalDue)}
                            </span>
                          </div>
                        </div>

                        {/* Footer Row: Bills & Items count + Action buttons */}
                        <div className="flex items-center justify-between gap-2 pt-0.5">
                          <div className="flex items-center gap-2 text-[11px] text-slate-400">
                            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-semibold">
                              {comp.billsCount} Bills
                            </span>
                            <span className="px-2 py-0.5 rounded bg-blue-950/40 text-blue-300 border border-blue-800/60 font-semibold">
                              {comp.itemsCount} Items
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                            <button
                              onClick={() => setSelectedSupplierName(comp.supplierName)}
                              className="px-2.5 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-bold transition flex items-center gap-1 shadow-sm active:scale-95"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>History</span>
                            </button>
                            <button
                              onClick={() => openEditSupplierModal(comp)}
                              className="p-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-600 text-amber-300 hover:text-white border border-amber-500/40 text-xs transition active:scale-95 shadow-sm"
                              title="Edit Supplier"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => openDeleteSupplierModal(comp)}
                              className="p-1.5 rounded-xl bg-rose-500/15 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/40 text-xs transition active:scale-95 shadow-sm"
                              title="Delete Supplier"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* DESKTOP TABLE (100% IDENTICAL COMPUTER VERSION) */}
                  <div className="hidden md:block overflow-x-auto touch-scroll">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-850 text-slate-400 border-b border-slate-800 font-semibold whitespace-nowrap">
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
                </>
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
                    onClick={() => openNewBillModal(activeSupplierSummary.supplierName)}
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
                  <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl p-1 w-full sm:w-fit overflow-x-auto touch-scroll">
                    <button
                      onClick={() => setSupplierSubTab('items')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
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
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
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
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
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

              {/* SUB-VIEW 1: ITEM-BY-ITEM PURCHASE HISTORY & PO CATEGORY DRILLDOWN */}
              {supplierSubTab === 'items' && (
                <div className="space-y-4">
                  {/* Category & PO Filtering Header Card */}
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                    <div className="p-4 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                          <Package className="w-4 h-4 text-blue-400" />
                          <span>Complete Item-by-Item Purchase & Rate History</span>
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          View purchased products organized by Purchase Order (PO) categories or full catalog breakdown.
                        </p>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap">
                        {/* View Mode Toggle */}
                        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                          <button
                            type="button"
                            onClick={() => setItemsViewMode('grouped')}
                            className={`px-2.5 py-1 rounded-lg font-semibold transition flex items-center gap-1.5 ${
                              itemsViewMode === 'grouped'
                                ? 'bg-blue-600 text-white shadow'
                                : 'text-slate-400 hover:text-slate-200'
                            }`}
                            title="Group items into separate cards for each PO"
                          >
                            <Layers className="w-3.5 h-3.5" />
                            <span>Group by PO</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setItemsViewMode('flat')}
                            className={`px-2.5 py-1 rounded-lg font-semibold transition flex items-center gap-1.5 ${
                              itemsViewMode === 'flat'
                                ? 'bg-blue-600 text-white shadow'
                                : 'text-slate-400 hover:text-slate-200'
                            }`}
                            title="View all items in a single unified table"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>Flat Table</span>
                          </button>
                        </div>

                        <span className="text-xs text-blue-400 font-bold bg-blue-950/60 px-2.5 py-1.5 rounded-xl border border-blue-800 whitespace-nowrap">
                          {activeSupplierFilteredItems.length} Items Recorded
                        </span>

                        {activeSupplierSummary.bills.length > 0 && (
                          <button
                            onClick={() => {
                              const targetBill = activeFilteredBill || activeSupplierSummary.bills[0];
                              openAddItemModalForBill(
                                targetBill.id,
                                targetBill.billNumber,
                                activeSupplierSummary.supplierName,
                                targetBill.totalAmount,
                                targetBill.dueAmount
                              );
                            }}
                            className="px-2.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1 shadow-sm active:scale-95 whitespace-nowrap"
                            title="Add an item to purchase bill"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>+ Add Item</span>
                          </button>
                        )}

                        <button
                          onClick={() => openNewBillModal(activeSupplierSummary.supplierName)}
                          className="px-2.5 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/40 text-xs font-bold transition flex items-center gap-1 shadow-sm active:scale-95 whitespace-nowrap"
                          title="Create a new Purchase Order for this supplier"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>+ New PO</span>
                        </button>
                      </div>
                    </div>

                    {/* PO Category Chips Bar */}
                    <div className="p-3.5 bg-slate-950/80 border-b border-slate-800 space-y-2.5">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                          <FolderTree className="w-3.5 h-3.5 text-blue-400" />
                          <span>Select Purchase Order (PO Category):</span>
                        </span>
                        {selectedPOFilter !== 'ALL' && (
                          <button
                            onClick={() => setSelectedPOFilter('ALL')}
                            className="text-[11px] text-blue-400 hover:underline font-semibold"
                          >
                            Reset to All POs
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-2 overflow-x-auto touch-scroll pb-1">
                        {/* All POs Button */}
                        <button
                          type="button"
                          onClick={() => setSelectedPOFilter('ALL')}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap flex-shrink-0 border ${
                            selectedPOFilter === 'ALL'
                              ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30 ring-2 ring-blue-500/40'
                              : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                          }`}
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>All Purchase Orders</span>
                          <span
                            className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                              selectedPOFilter === 'ALL'
                                ? 'bg-blue-800 text-blue-100'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {activeSupplierSummary.allItems.length}
                          </span>
                        </button>

                        {/* Individual PO Buttons */}
                        {activeSupplierSummary.bills.map((bill) => {
                          const isSelected =
                            selectedPOFilter.toLowerCase() === bill.billNumber.toLowerCase() ||
                            selectedPOFilter === bill.id;
                          return (
                            <button
                              key={bill.id}
                              type="button"
                              onClick={() => setSelectedPOFilter(isSelected ? 'ALL' : bill.billNumber)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-2 whitespace-nowrap flex-shrink-0 border ${
                                isSelected
                                  ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-600/30 ring-2 ring-blue-500/40'
                                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                              }`}
                            >
                              <FileText className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-blue-400'}`} />
                              <span className="font-mono font-bold">{bill.billNumber}</span>
                              <span className="text-[11px] opacity-85">
                                ({bill.items.length} items &bull; {Formatters.currency(bill.totalAmount)})
                              </span>
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  bill.status === 'PAID'
                                    ? 'bg-emerald-400'
                                    : bill.status === 'PARTIAL'
                                    ? 'bg-amber-400'
                                    : 'bg-rose-400'
                                }`}
                                title={`Status: ${bill.status}`}
                              />
                            </button>
                          );
                        })}
                      </div>

                      {/* Product Category Filter Chips (if any exist) */}
                      {availableSupplierItemCategories.length > 0 && (
                        <div className="flex items-center gap-2 overflow-x-auto touch-scroll pt-2 border-t border-slate-800/60">
                          <span className="text-[10px] font-bold uppercase text-slate-400 whitespace-nowrap">
                            Item Categories:
                          </span>
                          <button
                            type="button"
                            onClick={() => setSelectedCategoryFilter('ALL')}
                            className={`px-2 py-0.5 rounded-lg text-[11px] font-semibold transition whitespace-nowrap border ${
                              selectedCategoryFilter === 'ALL'
                                ? 'bg-slate-800 text-white border-slate-600'
                                : 'bg-transparent text-slate-400 border-transparent hover:text-slate-200'
                            }`}
                          >
                            All Categories
                          </button>
                          {availableSupplierItemCategories.map((cat) => (
                            <button
                              key={cat}
                              type="button"
                              onClick={() =>
                                setSelectedCategoryFilter(selectedCategoryFilter === cat ? 'ALL' : cat)
                              }
                              className={`px-2 py-0.5 rounded-lg text-[11px] font-semibold transition whitespace-nowrap border ${
                                selectedCategoryFilter === cat
                                  ? 'bg-blue-600/20 text-blue-300 border-blue-500/50'
                                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Active Selected PO Dedicated Info Banner */}
                    {activeFilteredBill && (
                      <div className="p-4 bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 border-b border-blue-900/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                              Filtered PO:
                            </span>
                            <span className="font-mono text-base font-black text-white">
                              {activeFilteredBill.billNumber}
                            </span>
                            <span className="text-xs text-slate-400">&bull;</span>
                            <span className="text-xs text-slate-300">
                              Date: {Formatters.date(activeFilteredBill.date)}
                            </span>
                            <Badge
                              variant={
                                activeFilteredBill.status === 'PAID'
                                  ? 'success'
                                  : activeFilteredBill.status === 'PARTIAL'
                                  ? 'warning'
                                  : 'danger'
                              }
                            >
                              {activeFilteredBill.status === 'PAID'
                                ? 'Fully Paid'
                                : activeFilteredBill.status === 'PARTIAL'
                                ? 'Partial Due'
                                : 'Unpaid'}
                            </Badge>
                          </div>
                          <p className="text-xs text-slate-400">
                            Viewing all {activeFilteredBill.items.length} products purchased under this specific PO.
                          </p>
                        </div>

                        <div className="flex items-center gap-3 flex-wrap">
                          <div className="flex items-center gap-3 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800 text-xs">
                            <div>
                              <span className="text-[10px] text-slate-400 block uppercase">PO Total</span>
                              <span className="font-bold text-slate-100">
                                {Formatters.currency(activeFilteredBill.totalAmount)}
                              </span>
                            </div>
                            <div className="h-5 w-px bg-slate-800" />
                            <div>
                              <span className="text-[10px] text-emerald-400 block uppercase">Paid</span>
                              <span className="font-bold text-emerald-400">
                                {Formatters.currency(activeFilteredBill.paidAmount)}
                              </span>
                            </div>
                            <div className="h-5 w-px bg-slate-800" />
                            <div>
                              <span className="text-[10px] text-rose-400 block uppercase">Due</span>
                              <span className="font-black text-rose-400">
                                {Formatters.currency(activeFilteredBill.dueAmount)}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5">
                            {activeFilteredBill.dueAmount > 0 && (
                              <button
                                onClick={() => openPaymentModal(activeFilteredBill)}
                                className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-sm active:scale-95"
                              >
                                Pay Due
                              </button>
                            )}
                            <button
                              onClick={() =>
                                openAddItemModalForBill(
                                  activeFilteredBill.id,
                                  activeFilteredBill.billNumber,
                                  activeSupplierSummary.supplierName,
                                  activeFilteredBill.totalAmount,
                                  activeFilteredBill.dueAmount
                                )
                              }
                              className="px-2.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1 active:scale-95"
                            >
                              <Plus className="w-3.5 h-3.5" />
                              <span>Add Item</span>
                            </button>
                            <button
                              onClick={() => setSelectedPOFilter('ALL')}
                              className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"
                            >
                              Show All
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* VIEW MODE 1: GROUPED BY PO (SEPARATE CARDS PER PO - SOLVES USER PROBLEM COMPLETELY) */}
                  {itemsViewMode === 'grouped' && (
                    <div className="space-y-4">
                      {activeSupplierFilteredBills.length === 0 ? (
                        <div className="p-12 text-center bg-slate-900 border border-slate-800 rounded-2xl text-slate-500 text-xs">
                          No purchase bills found matching current filter
                        </div>
                      ) : (
                        activeSupplierFilteredBills.map((bill) => {
                          const billItems = bill.items.filter((it) => {
                            if (
                              selectedCategoryFilter !== 'ALL' &&
                              (it.category || '').toLowerCase() !== selectedCategoryFilter.toLowerCase()
                            ) {
                              return false;
                            }
                            const q = supplierItemSearch.trim().toLowerCase();
                            if (!q) return true;
                            return (
                              it.productName.toLowerCase().includes(q) ||
                              (it.sku && it.sku.toLowerCase().includes(q)) ||
                              (it.category && it.category.toLowerCase().includes(q)) ||
                              (it.notes && it.notes.toLowerCase().includes(q))
                            );
                          });

                          return (
                            <div
                              key={bill.id}
                              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl"
                            >
                              {/* PO Header Card */}
                              <div className="p-4 bg-slate-850/80 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3">
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2.5 flex-wrap">
                                    <span className="font-mono text-sm font-bold text-blue-400 bg-blue-950/60 px-2.5 py-0.5 rounded-lg border border-blue-800">
                                      {bill.billNumber}
                                    </span>
                                    <span className="text-xs text-slate-400">&bull;</span>
                                    <span className="text-xs text-slate-300 font-medium">
                                      Date: {Formatters.date(bill.date)}
                                    </span>
                                    <Badge
                                      variant={
                                        bill.status === 'PAID'
                                          ? 'success'
                                          : bill.status === 'PARTIAL'
                                          ? 'warning'
                                          : 'danger'
                                      }
                                    >
                                      {bill.status === 'PAID'
                                        ? 'Fully Paid'
                                        : bill.status === 'PARTIAL'
                                        ? 'Partial Due'
                                        : 'Unpaid'}
                                    </Badge>
                                    <span className="text-xs text-slate-400 font-medium">
                                      ({billItems.length} Products in this PO)
                                    </span>
                                  </div>
                                  {bill.notes && (
                                    <p className="text-[11px] text-slate-400 italic">{bill.notes}</p>
                                  )}
                                </div>

                                <div className="flex items-center gap-3 flex-wrap justify-between md:justify-end">
                                  <div className="flex items-center gap-3 text-xs bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                                    <div>
                                      <span className="text-[10px] text-slate-400 block uppercase">PO Total</span>
                                      <span className="font-bold text-slate-100">
                                        {Formatters.currency(bill.totalAmount)}
                                      </span>
                                    </div>
                                    <div className="h-5 w-px bg-slate-800" />
                                    <div>
                                      <span className="text-[10px] text-emerald-400 block uppercase">Paid</span>
                                      <span className="font-bold text-emerald-400">
                                        {Formatters.currency(bill.paidAmount)}
                                      </span>
                                    </div>
                                    <div className="h-5 w-px bg-slate-800" />
                                    <div>
                                      <span className="text-[10px] text-rose-400 block uppercase">Due</span>
                                      <span
                                        className={`font-black ${
                                          bill.dueAmount > 0 ? 'text-rose-400' : 'text-slate-400'
                                        }`}
                                      >
                                        {Formatters.currency(bill.dueAmount)}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-1.5">
                                    {bill.dueAmount > 0 && (
                                      <button
                                        onClick={() => openPaymentModal(bill)}
                                        className="px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition active:scale-95"
                                      >
                                        Pay
                                      </button>
                                    )}
                                    <button
                                      onClick={() =>
                                        openAddItemModalForBill(
                                          bill.id,
                                          bill.billNumber,
                                          bill.supplierName,
                                          bill.totalAmount,
                                          bill.dueAmount
                                        )
                                      }
                                      className="p-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 text-xs transition active:scale-95"
                                      title={`Add Another Item to PO ${bill.billNumber}`}
                                    >
                                      <Plus className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                      onClick={() => openEditBillModal(bill)}
                                      className="p-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-600 text-amber-300 hover:text-white border border-amber-500/40 text-xs transition active:scale-95"
                                      title="Edit PO Details"
                                    >
                                      <Edit2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>
                              </div>

                              {/* Mobile View for this PO */}
                              <div className="block md:hidden divide-y divide-slate-800">
                                {billItems.length === 0 ? (
                                  <div className="p-4 text-center text-slate-500 text-xs">
                                    No items match search criteria in this PO
                                  </div>
                                ) : (
                                  billItems.map((item, itemIdx) => (
                                    <div
                                      key={`g-m-${bill.id}-${item.id}-${itemIdx}`}
                                      className="p-4 space-y-2.5 hover:bg-slate-850/50 transition"
                                    >
                                      <div className="flex items-start justify-between gap-2">
                                        <div>
                                          <div className="font-bold text-slate-100 text-sm">
                                            {item.productName}
                                          </div>
                                          {item.sku && (
                                            <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                                              SKU: {item.sku}
                                              {item.category ? ` • ${item.category}` : ''}
                                            </div>
                                          )}
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
                                        <div>
                                          <span className="text-[10px] text-slate-400 block uppercase">Qty</span>
                                          <span className="font-bold text-slate-200">
                                            {item.quantity} {item.unit}
                                          </span>
                                        </div>
                                        <div>
                                          <span className="text-[10px] text-blue-400 block uppercase">Rate</span>
                                          <span className="font-bold text-blue-300">
                                            {Formatters.currency(item.unitPrice)}
                                          </span>
                                        </div>
                                        <div>
                                          <span className="text-[10px] text-slate-400 block uppercase">Total</span>
                                          <span className="font-bold text-slate-100">
                                            {Formatters.currency(item.totalPrice)}
                                          </span>
                                        </div>
                                      </div>

                                      <div className="flex items-center justify-end gap-1.5 pt-1">
                                        <button
                                          onClick={() =>
                                            openEditItemModal({
                                              ...item,
                                              billId: bill.id,
                                              billNumber: bill.billNumber,
                                              purchaseDate: bill.date,
                                              supplierName: bill.supplierName
                                            })
                                          }
                                          className="px-2 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/40 text-xs flex items-center gap-1"
                                          title="Edit Item or Move to Another PO"
                                        >
                                          <Edit2 className="w-3.5 h-3.5" />
                                          <span>Edit / Move PO</span>
                                        </button>
                                        <button
                                          onClick={() => handleDeleteItem(bill.id, item.id, item.productName)}
                                          className="p-1 rounded-lg bg-rose-500/15 text-rose-300 border border-rose-500/40 text-xs"
                                          title="Delete Item"
                                        >
                                          <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                      </div>
                                    </div>
                                  ))
                                )}
                              </div>

                              {/* Desktop Table for this PO */}
                              <div className="hidden md:block overflow-x-auto touch-scroll">
                                <table className="w-full text-left border-collapse text-xs">
                                  <thead>
                                    <tr className="bg-slate-950/60 text-slate-400 border-b border-slate-800 font-semibold whitespace-nowrap">
                                      <th className="py-2.5 px-3 text-center w-12"># SL</th>
                                      <th className="py-2.5 px-3.5">Product Name & Specs</th>
                                      <th className="py-2.5 px-3.5">SKU & Category</th>
                                      <th className="py-2.5 px-3 text-center">Qty</th>
                                      <th className="py-2.5 px-3.5 text-right bg-blue-950/20 text-blue-300 font-bold">
                                        Unit Price (Item Value)
                                      </th>
                                      <th className="py-2.5 px-3.5 text-right font-bold text-slate-200">
                                        Total Item Value
                                      </th>
                                      <th className="py-2.5 px-3 text-center w-28">Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-slate-800/60">
                                    {billItems.length === 0 ? (
                                      <tr>
                                        <td colSpan={7} className="py-6 text-center text-slate-500">
                                          No items match criteria in this PO
                                        </td>
                                      </tr>
                                    ) : (
                                      billItems.map((item, itemIdx) => (
                                        <tr
                                          key={`g-row-${bill.id}-${item.id}-${itemIdx}`}
                                          className="hover:bg-slate-800/30 transition"
                                        >
                                          <td className="py-2.5 px-3 text-center text-slate-500 font-mono text-[11px]">
                                            {itemIdx + 1}
                                          </td>
                                          <td className="py-2.5 px-3.5 font-semibold text-slate-100">
                                            {item.productName}
                                            {item.notes && (
                                              <span className="block text-[10px] text-slate-500 italic font-normal">
                                                {item.notes}
                                              </span>
                                            )}
                                          </td>
                                          <td className="py-2.5 px-3.5 text-slate-400">
                                            {item.sku && <span className="font-mono text-slate-300">{item.sku}</span>}
                                            {item.category && (
                                              <span className="ml-1 text-[11px] text-blue-400">
                                                ({item.category})
                                              </span>
                                            )}
                                            {!item.sku && !item.category && <span className="text-slate-600">-</span>}
                                          </td>
                                          <td className="py-2.5 px-3 text-center font-bold text-slate-200">
                                            {item.quantity}{' '}
                                            <span className="text-[11px] text-slate-400 font-normal">
                                              {item.unit}
                                            </span>
                                          </td>
                                          <td className="py-2.5 px-3.5 text-right font-bold text-blue-300 bg-blue-950/20 whitespace-nowrap">
                                            {Formatters.currency(item.unitPrice)}
                                            <span className="text-[10px] text-slate-400 block font-normal">
                                              per {item.unit}
                                            </span>
                                          </td>
                                          <td className="py-2.5 px-3.5 text-right font-bold text-slate-100 whitespace-nowrap">
                                            {Formatters.currency(item.totalPrice)}
                                          </td>
                                          <td className="py-2.5 px-3 text-center">
                                            <div className="flex items-center justify-center gap-1.5">
                                              <button
                                                onClick={() =>
                                                  openEditItemModal({
                                                    ...item,
                                                    billId: bill.id,
                                                    billNumber: bill.billNumber,
                                                    purchaseDate: bill.date,
                                                    supplierName: bill.supplierName
                                                  })
                                                }
                                                className="p-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-600 text-amber-300 hover:text-white border border-amber-500/40 text-xs transition active:scale-95 shadow-sm"
                                                title="Edit Item Details, Rate, or Move/Split to another PO"
                                              >
                                                <Edit2 className="w-3.5 h-3.5" />
                                              </button>
                                              <button
                                                onClick={() =>
                                                  handleDeleteItem(bill.id, item.id, item.productName)
                                                }
                                                className="p-1.5 rounded-lg bg-rose-500/15 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/40 text-xs transition active:scale-95 shadow-sm"
                                                title="Delete Item"
                                              >
                                                <Trash2 className="w-3.5 h-3.5" />
                                              </button>
                                            </div>
                                          </td>
                                        </tr>
                                      ))
                                    )}
                                  </tbody>
                                  <tfoot className="bg-slate-950/70 border-t border-slate-800 text-xs font-semibold text-slate-300">
                                    <tr>
                                      <td colSpan={5} className="py-2.5 px-3.5 text-right">
                                        PO Total Value:
                                      </td>
                                      <td className="py-2.5 px-3.5 text-right font-bold text-slate-100">
                                        {Formatters.currency(bill.totalAmount)}
                                      </td>
                                      <td className="py-2.5 px-3 text-center text-slate-500">
                                        Due: {Formatters.currency(bill.dueAmount)}
                                      </td>
                                    </tr>
                                  </tfoot>
                                </table>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  )}

                  {/* VIEW MODE 2: FLAT ALL-ITEMS TABLE */}
                  {itemsViewMode === 'flat' && (
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                      {/* MOBILE RESPONSIVE ITEM CARDS */}
                      <div className="block md:hidden divide-y divide-slate-800">
                        {activeSupplierFilteredItems.length === 0 ? (
                          <div className="p-8 text-center text-slate-500 text-xs">
                            No items found matching criteria for this supplier
                          </div>
                        ) : (
                          activeSupplierFilteredItems.map((item, idx) => {
                            const parentBill = activeSupplierSummary.bills.find((b) => b.id === item.billId);
                            return (
                              <div
                                key={`m-item-${item.id}-${idx}`}
                                className="p-4 space-y-2.5 hover:bg-slate-850/50 transition"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div>
                                    <div className="font-bold text-slate-100 text-sm">{item.productName}</div>
                                    <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-400">
                                      <span>{Formatters.date(item.purchaseDate)}</span>
                                      <span>&bull;</span>
                                      <span className="font-mono text-blue-400 font-semibold">
                                        {item.billNumber}
                                      </span>
                                    </div>
                                  </div>
                                  <Badge
                                    variant={
                                      item.billStatus === 'PAID'
                                        ? 'success'
                                        : item.billStatus === 'PARTIAL'
                                        ? 'warning'
                                        : 'danger'
                                    }
                                  >
                                    {item.billStatus === 'PAID'
                                      ? 'Paid'
                                      : item.billStatus === 'PARTIAL'
                                      ? 'Partial'
                                      : 'Due'}
                                  </Badge>
                                </div>

                                <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
                                  <div>
                                    <span className="text-[10px] text-slate-400 block uppercase">Quantity</span>
                                    <span className="font-bold text-slate-200">
                                      {item.quantity} {item.unit}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="text-[10px] text-blue-400 block uppercase">Unit Rate</span>
                                    <span className="font-bold text-blue-300">
                                      {Formatters.currency(item.unitPrice)}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="text-[10px] text-slate-400 block uppercase">Item Total</span>
                                    <span className="font-bold text-slate-100">
                                      {Formatters.currency(item.totalPrice)}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="text-[10px] text-rose-400 block uppercase">Bill Due</span>
                                    <span
                                      className={`font-black ${
                                        item.billDue > 0 ? 'text-rose-400' : 'text-slate-400'
                                      }`}
                                    >
                                      {Formatters.currency(item.billDue)}
                                    </span>
                                  </div>
                                </div>

                                <div className="flex items-center justify-between gap-2 pt-1">
                                  <div>
                                    {parentBill && parentBill.dueAmount > 0 ? (
                                      <button
                                        onClick={() => openPaymentModal(parentBill)}
                                        className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition"
                                      >
                                        Pay Bill
                                      </button>
                                    ) : (
                                      <span className="text-[10px] text-emerald-400 font-medium px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-900/50">
                                        Bill Settled
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <button
                                      onClick={() =>
                                        openAddItemModalForBill(
                                          item.billId,
                                          item.billNumber,
                                          selectedSupplierName || undefined
                                        )
                                      }
                                      className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 text-xs"
                                      title="Add Another Item"
                                    >
                                      <Plus className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                      onClick={() => openEditItemModal(item)}
                                      className="p-1.5 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/40 text-xs"
                                      title="Edit Item / Move PO"
                                    >
                                      <Edit2 className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleDeleteItem(item.billId, item.id, item.productName)
                                      }
                                      className="p-1.5 rounded-lg bg-rose-500/15 text-rose-300 border border-rose-500/40 text-xs"
                                      title="Delete Item"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>

                      {/* DESKTOP TABLE */}
                      <div className="hidden md:block overflow-x-auto touch-scroll">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="bg-slate-850 text-slate-400 border-b border-slate-800 font-semibold whitespace-nowrap">
                              <th className="py-3 px-3 text-center w-12"># SL</th>
                              <th className="py-3 px-3.5">Purchase Date</th>
                              <th className="py-3 px-3.5">Product Name & Model / Specs</th>
                              <th className="py-3 px-3.5">Bill / Invoice No</th>
                              <th className="py-3 px-3 text-center">Qty</th>
                              <th className="py-3 px-3.5 text-right bg-blue-950/30 text-blue-300 font-bold">
                                Unit Price (Item Value)
                              </th>
                              <th className="py-3 px-3.5 text-right font-bold text-slate-200">
                                Total Item Value
                              </th>
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
                                const parentBill = activeSupplierSummary.bills.find(
                                  (b) => b.id === item.billId
                                );
                                return (
                                  <tr key={`${item.id}-${idx}`} className="hover:bg-slate-800/40 transition">
                                    <td className="py-3 px-3 text-center text-slate-500 font-mono text-[11px]">
                                      {idx + 1}
                                    </td>
                                    <td className="py-3 px-3.5 text-slate-300 whitespace-nowrap font-medium">
                                      {Formatters.date(item.purchaseDate)}
                                    </td>
                                    <td className="py-3 px-3.5">
                                      <div className="font-semibold text-slate-100">{item.productName}</div>
                                      {item.sku && (
                                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                                          SKU: {item.sku}
                                          {item.category ? ` • ${item.category}` : ''}
                                        </div>
                                      )}
                                      {item.notes && (
                                        <div className="text-[10px] text-slate-500 italic mt-0.5">
                                          {item.notes}
                                        </div>
                                      )}
                                    </td>
                                    <td className="py-3 px-3.5 font-mono text-slate-300 whitespace-nowrap">
                                      <button
                                        onClick={() => setSelectedPOFilter(item.billNumber)}
                                        className="text-blue-400 hover:underline font-bold"
                                        title="Click to filter by this PO"
                                      >
                                        {item.billNumber}
                                      </button>
                                    </td>
                                    <td className="py-3 px-3 text-center font-bold text-slate-200">
                                      {item.quantity}{' '}
                                      <span className="text-[11px] text-slate-400 font-normal">
                                        {item.unit}
                                      </span>
                                    </td>
                                    <td className="py-3 px-3.5 text-right font-bold text-blue-300 bg-blue-950/20 whitespace-nowrap">
                                      {Formatters.currency(item.unitPrice)}
                                      <span className="text-[10px] text-slate-400 block font-normal">
                                        per {item.unit}
                                      </span>
                                    </td>
                                    <td className="py-3 px-3.5 text-right font-bold text-slate-100 whitespace-nowrap">
                                      {Formatters.currency(item.totalPrice)}
                                    </td>
                                    <td className="py-3 px-3.5 text-right text-slate-300 whitespace-nowrap">
                                      {parentBill ? Formatters.currency(parentBill.totalAmount) : '-'}
                                    </td>
                                    <td className="py-3 px-3.5 text-right font-semibold text-emerald-400 whitespace-nowrap">
                                      {Formatters.currency(item.billPaid)}
                                    </td>
                                    <td className="py-3 px-3.5 text-right font-bold text-rose-400 whitespace-nowrap">
                                      {Formatters.currency(item.billDue)}
                                    </td>
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
                                        {item.billStatus === 'PAID'
                                          ? 'Paid'
                                          : item.billStatus === 'PARTIAL'
                                          ? 'Partial'
                                          : 'Due'}
                                      </Badge>
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                      <div className="flex items-center justify-center gap-1.5">
                                        {parentBill && parentBill.dueAmount > 0 ? (
                                          <button
                                            onClick={() => openPaymentModal(parentBill)}
                                            className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold transition shadow-sm active:scale-95"
                                            title="Record Payment for Bill"
                                          >
                                            Pay
                                          </button>
                                        ) : (
                                          <span className="text-[10px] text-emerald-400 font-medium px-2 py-0.5 rounded-md bg-emerald-950/40 border border-emerald-900/50">
                                            Settled
                                          </span>
                                        )}
                                        <button
                                          onClick={() =>
                                            openAddItemModalForBill(
                                              item.billId,
                                              item.billNumber,
                                              selectedSupplierName || undefined
                                            )
                                          }
                                          className="p-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 text-xs transition active:scale-95 shadow-sm"
                                          title={`Add Another Item to Bill (${item.billNumber})`}
                                        >
                                          <Plus className="w-3.5 h-3.5" />
                                        </button>
                                        <button
                                          onClick={() => openEditItemModal(item)}
                                          className="p-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-600 text-amber-300 hover:text-white border border-amber-500/40 text-xs transition active:scale-95 shadow-sm"
                                          title="Edit Item Details, Rate, or Move/Split PO"
                                        >
                                          <Edit2 className="w-3.5 h-3.5" />
                                        </button>
                                        <button
                                          onClick={() =>
                                            handleDeleteItem(item.billId, item.id, item.productName)
                                          }
                                          className="p-1.5 rounded-lg bg-rose-500/15 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/40 text-xs transition active:scale-95 shadow-sm"
                                          title="Delete Item from Bill"
                                        >
                                          <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                      </div>
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
                          <button
                            onClick={() => {
                              setSelectedPOFilter(bill.billNumber);
                              setSupplierSubTab('items');
                            }}
                            className="px-2.5 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/40 text-xs font-semibold transition flex items-center gap-1 shadow-sm active:scale-95"
                            title="View all items purchased in this PO"
                          >
                            <Package className="w-3.5 h-3.5" />
                            <span>View Items ({bill.items.length})</span>
                          </button>
                          {bill.dueAmount > 0 && (
                            <button
                              onClick={() => openPaymentModal(bill)}
                              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition"
                            >
                              Pay
                            </button>
                          )}
                          <button
                            onClick={() =>
                              openAddItemModalForBill(
                                bill.id,
                                bill.billNumber,
                                bill.supplierName,
                                bill.totalAmount,
                                bill.dueAmount
                              )
                            }
                            className="px-2.5 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 text-xs font-semibold transition flex items-center gap-1 shadow-sm active:scale-95"
                            title="Add Another Item to this Bill"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add Item</span>
                          </button>
                          <button
                            onClick={() => openEditBillModal(bill)}
                            className="p-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-600 text-amber-300 hover:text-white border border-amber-500/40 text-xs transition active:scale-95 shadow-sm"
                            title="Edit Bill Details (PO No, Date, Notes)"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
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

          <div className="overflow-x-auto touch-scroll">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-850 text-slate-400 border-b border-slate-800 font-semibold whitespace-nowrap">
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
                        <div className="flex items-center justify-center gap-1.5">
                          {item.billDue > 0 ? (
                            <button
                              onClick={() => openPaymentModal(item.fullBill)}
                              className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold transition active:scale-95 shadow-sm"
                              title="Record Payment for Bill"
                            >
                              Pay
                            </button>
                          ) : (
                            <span className="text-[10px] text-emerald-400 font-medium px-2 py-0.5 rounded-md bg-emerald-950/40 border border-emerald-900/50">
                              Settled
                            </span>
                          )}

                          <button
                            onClick={() => openAddItemModalForBill(item.billId, item.billNumber, item.supplierName)}
                            className="p-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 text-xs transition active:scale-95 shadow-sm"
                            title={`Add Another Item to Bill (${item.billNumber})`}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => openEditItemModal(item)}
                            className="p-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-600 text-amber-300 hover:text-white border border-amber-500/40 text-xs transition active:scale-95 shadow-sm"
                            title="Edit Item Details & Rate"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => handleDeleteItem(item.billId, item.id, item.productName)}
                            className="p-1.5 rounded-lg bg-rose-500/15 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/40 text-xs transition active:scale-95 shadow-sm"
                            title="Delete Item from Bill"
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
                      onClick={() =>
                        openAddItemModalForBill(
                          bill.id,
                          bill.billNumber,
                          bill.supplierName,
                          bill.totalAmount,
                          bill.dueAmount
                        )
                      }
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 text-xs font-semibold transition flex items-center gap-1 shadow-sm active:scale-95"
                      title="Add Another Item to this Bill"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Item</span>
                    </button>
                    <button
                      onClick={() => openEditBillModal(bill)}
                      className="p-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-600 text-amber-300 hover:text-white border border-amber-500/40 text-xs transition active:scale-95 shadow-sm"
                      title="Edit Bill Details (PO No, Date, Notes)"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
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
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-slate-300">
                  Bill / PO Number (Serial) *
                </label>
                <button
                  type="button"
                  onClick={() => setNewBillNumber(getNextPONumber(purchases))}
                  className="text-[10px] text-blue-400 hover:text-blue-300 font-semibold transition flex items-center gap-1"
                  title="Generate next sequential serial PO number"
                >
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  <span>Next Serial</span>
                </button>
              </div>
              <input
                type="text"
                required
                value={newBillNumber}
                onChange={(e) => setNewBillNumber(e.target.value)}
                placeholder="e.g. PO-2026-102"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 font-mono outline-none focus:border-blue-500 transition"
              />
              <span className="text-[10px] text-slate-500 mt-1 block">
                Auto-assigned sequential serial number. You can also customize if needed.
              </span>
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

      {/* MODAL 7: EDIT PURCHASED ITEM */}
      <Modal
        isOpen={isEditItemModalOpen}
        onClose={() => {
          setIsEditItemModalOpen(false);
          setItemToEdit(null);
        }}
        title="Edit Purchased Item & Rate"
        size="lg"
      >
        {itemToEdit && (
          <form onSubmit={handleEditItemSubmit} className="space-y-4">
            {/* Context Badge */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs flex-wrap gap-2.5">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-400">Bill:</span>
                  <span className="font-mono font-bold text-slate-100">{itemToEdit.billNumber}</span>
                </div>
                {itemToEdit.supplierName && (
                  <div className="flex items-center gap-1.5 pl-2 border-l border-slate-800">
                    <span className="text-slate-400">Supplier:</span>
                    <span className="font-bold text-blue-300">{itemToEdit.supplierName}</span>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  const bId = itemToEdit.billId;
                  const bNum = itemToEdit.billNumber;
                  const sName = itemToEdit.supplierName;
                  setIsEditItemModalOpen(false);
                  openAddItemModalForBill(bId, bNum, sName);
                }}
                className="w-full sm:w-auto justify-center px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 text-[11px] font-bold transition flex items-center gap-1.5 active:scale-95 shadow-sm"
                title="Add another item to this bill"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Add Item to this Bill</span>
              </button>
            </div>

            {/* Product Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Product Name / Description *
              </label>
              <input
                type="text"
                required
                list="products-erp-list"
                value={editItemProductName}
                onChange={(e) => setEditItemProductName(e.target.value)}
                placeholder="e.g. Parliament Logo Pitol 19 inches"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* SKU / Model */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Model / SKU
                </label>
                <input
                  type="text"
                  value={editItemSku}
                  onChange={(e) => setEditItemSku(e.target.value)}
                  placeholder="e.g. PL-PITOL-19"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  value={editItemCategory}
                  onChange={(e) => setEditItemCategory(e.target.value)}
                  placeholder="e.g. Branding / Hardware"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
                />
              </div>

              {/* Purchase Date */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Purchase Date *
                </label>
                <input
                  type="date"
                  required
                  value={editItemDate}
                  onChange={(e) => setEditItemDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Quantity */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Quantity *
                </label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  required
                  value={editItemQuantity}
                  onChange={(e) => setEditItemQuantity(Number(e.target.value) || 1)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
                />
              </div>

              {/* Unit */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Unit
                </label>
                <select
                  value={editItemUnit}
                  onChange={(e) => setEditItemUnit(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
                >
                  <option value="pcs">pcs (Pieces)</option>
                  <option value="unit">unit (Units)</option>
                  <option value="set">set (Sets)</option>
                  <option value="box">box (Boxes)</option>
                  <option value="meter">meter</option>
                  <option value="coil">coil</option>
                  <option value="roll">roll</option>
                  <option value="job">job (Job/Labor)</option>
                </select>
              </div>

              {/* Unit Price (Rate) */}
              <div>
                <label className="block text-xs font-semibold text-blue-300 mb-1">
                  Unit Price (Item Value BDT) *
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  required
                  value={editItemUnitPrice || ''}
                  onChange={(e) => setEditItemUnitPrice(Number(e.target.value) || 0)}
                  placeholder="0.00"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-blue-500/50 text-xs font-bold text-blue-300 outline-none focus:border-blue-400"
                />
              </div>
            </div>

            {/* Calculated Values Preview */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-950/40 via-slate-950 to-indigo-950/40 border border-blue-800/40 flex items-center justify-between text-xs flex-wrap gap-3">
              <div>
                <span className="text-slate-400 block text-[11px]">Calculated Item Total Value</span>
                <span className="text-sm font-black text-slate-100">
                  {Formatters.currency((Number(editItemQuantity) || 1) * (Number(editItemUnitPrice) || 0))}
                </span>
              </div>
              <div className="text-right">
                <span className="text-slate-400 block text-[11px]">Rate Breakdown</span>
                <span className="text-xs font-semibold text-blue-300">
                  {Number(editItemQuantity) || 1} {editItemUnit} &times; {Formatters.currency(Number(editItemUnitPrice) || 0)}
                </span>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Notes / Batch Description
              </label>
              <input
                type="text"
                value={editItemNotes}
                onChange={(e) => setEditItemNotes(e.target.value)}
                placeholder="e.g. Ocean freight shipment #1, brass metal finish"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
              />
            </div>

            {/* Purchase Order (PO) / Bill Assignment */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Split className="w-3.5 h-3.5 text-blue-400" />
                  <span>Assign to Purchase Order (PO) / Bill</span>
                </label>
                <span className="text-[11px] text-slate-400">
                  Current: <strong className="text-blue-300 font-mono">{itemToEdit.billNumber}</strong>
                </span>
              </div>

              <select
                value={editItemTargetPOType === 'NEW' ? 'NEW_PO' : editItemTargetBillId}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === 'NEW_PO') {
                    setEditItemTargetPOType('NEW');
                    setEditItemNewPONumber(getNextPONumber(purchases));
                    setEditItemNewPODate(editItemDate || new Date().toISOString().split('T')[0]);
                  } else {
                    setEditItemTargetPOType(val === itemToEdit.billId ? 'CURRENT' : 'EXISTING');
                    setEditItemTargetBillId(val);
                  }
                }}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500 font-medium"
              >
                <option value={itemToEdit.billId}>
                  Keep in Current PO: {itemToEdit.billNumber}
                </option>
                {activeSupplierSummary?.bills
                  .filter((b) => b.id !== itemToEdit.billId)
                  .map((b) => (
                    <option key={b.id} value={b.id}>
                      Move to Existing PO: {b.billNumber} ({Formatters.date(b.date)} - {b.items.length} items)
                    </option>
                  ))}
                <option value="NEW_PO">
                  ➕ Split / Move to Brand New PO (Create Separate Purchase Order)...
                </option>
              </select>

              {editItemTargetPOType === 'NEW' && (
                <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-800/50 space-y-2.5 mt-2 animate-in fade-in duration-200">
                  <p className="text-[11px] text-blue-300 font-semibold">
                    This item will be moved to a brand new Purchase Order for this supplier:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                        New PO Number *
                      </label>
                      <input
                        type="text"
                        required
                        value={editItemNewPONumber}
                        onChange={(e) => setEditItemNewPONumber(e.target.value)}
                        placeholder="e.g. PO-2026-108"
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-100 font-mono outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                        New PO Purchase Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={editItemNewPODate}
                        onChange={(e) => setEditItemNewPODate(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  const bId = itemToEdit.billId;
                  const bNum = itemToEdit.billNumber;
                  const sName = itemToEdit.supplierName;
                  setIsEditItemModalOpen(false);
                  openAddItemModalForBill(bId, bNum, sName);
                }}
                className="w-full sm:w-auto justify-center px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-emerald-400 border border-emerald-500/30 transition flex items-center gap-1.5 active:scale-95 text-center"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Add Item to this Bill</span>
              </button>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditItemModalOpen(false);
                    setItemToEdit(null);
                  }}
                  className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition text-center"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 sm:flex-initial justify-center px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-lg shadow-blue-600/30 active:scale-95 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Save Item Changes</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </Modal>

      {/* MODAL 8: EDIT PURCHASE BILL */}
      <Modal
        isOpen={isEditBillModalOpen}
        onClose={() => {
          setIsEditBillModalOpen(false);
          setBillToEdit(null);
        }}
        title="Edit Purchase Bill / PO Details"
        size="md"
      >
        {billToEdit && (
          <form onSubmit={handleEditBillSubmit} className="space-y-4">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Supplier:</span>
                <span className="font-bold text-slate-100">{billToEdit.supplierName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Total Items:</span>
                <span className="text-slate-200">{billToEdit.items.length} Items ({Formatters.currency(billToEdit.totalAmount)})</span>
              </div>
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-slate-400 text-[11px]">Need to include another product?</span>
                <button
                  type="button"
                  onClick={() => {
                    const bId = billToEdit.id;
                    const bNum = billToEdit.billNumber;
                    const sName = billToEdit.supplierName;
                    setIsEditBillModalOpen(false);
                    openAddItemModalForBill(bId, bNum, sName);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 text-[11px] font-bold transition flex items-center gap-1 active:scale-95"
                >
                  <Plus className="w-3 h-3" />
                  <span>+ Add Item to this Bill</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Bill / PO Number (Serial) *
              </label>
              <input
                type="text"
                required
                value={editBillNumber}
                onChange={(e) => setEditBillNumber(e.target.value)}
                placeholder="e.g. PO-2026-102"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 font-mono outline-none focus:border-blue-500"
              />
              <span className="text-[10px] text-slate-500 mt-1 block">
                Update or correct the PO serial number for this bill and all its items.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Purchase Date *
                </label>
                <input
                  type="date"
                  required
                  value={editBillDate}
                  onChange={(e) => setEditBillDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Due Date
                </label>
                <input
                  type="date"
                  value={editBillDueDate}
                  onChange={(e) => setEditBillDueDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Notes / Reference
              </label>
              <textarea
                rows={2}
                value={editBillNotes}
                onChange={(e) => setEditBillNotes(e.target.value)}
                placeholder="Additional notes or shipment references..."
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setIsEditBillModalOpen(false);
                  setBillToEdit(null);
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
                <span>Save Bill Changes</span>
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* MODAL 9: ADD ITEM TO PURCHASE BILL */}
      <Modal
        isOpen={isAddItemToBillModalOpen}
        onClose={() => {
          setIsAddItemToBillModalOpen(false);
          setTargetBillForNewItem(null);
        }}
        title={targetBillForNewItem ? `Add Purchased Item to Bill (${targetBillForNewItem.billNumber})` : 'Add Item to Purchase Bill'}
        size="lg"
      >
        {targetBillForNewItem && (
          <form onSubmit={handleAddItemToBillSubmit} className="space-y-4">
            {/* Bill Context Banner */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-400">Target Purchase Bill:</span>
                  <span className="font-mono font-bold text-emerald-400">{targetBillForNewItem.billNumber}</span>
                </div>
                {targetBillForNewItem.supplierName && (
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400">Supplier:</span>
                    <span className="font-bold text-slate-200">{targetBillForNewItem.supplierName}</span>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-slate-800 text-[11px] text-slate-400 flex-wrap gap-2">
                <span>Current Bill Total: <strong className="text-slate-200">{Formatters.currency(targetBillForNewItem.currentTotal || 0)}</strong></span>
                <span>Current Outstanding Due: <strong className="text-rose-400">{Formatters.currency(targetBillForNewItem.currentDue || 0)}</strong></span>
              </div>
            </div>

            {/* Target PO Selector (if supplier has multiple bills) */}
            {activeSupplierSummary && activeSupplierSummary.bills.length > 1 && (
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Choose Purchase Order (PO) *
                </label>
                <select
                  value={targetBillForNewItem.billId}
                  onChange={(e) => {
                    const chosenBill = activeSupplierSummary.bills.find((b) => b.id === e.target.value);
                    if (chosenBill) {
                      setTargetBillForNewItem({
                        billId: chosenBill.id,
                        billNumber: chosenBill.billNumber,
                        supplierName: chosenBill.supplierName,
                        currentTotal: chosenBill.totalAmount,
                        currentDue: chosenBill.dueAmount
                      });
                    }
                  }}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500 font-medium"
                >
                  {activeSupplierSummary.bills.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.billNumber} &bull; Date: {Formatters.date(b.date)} &bull; {b.items.length} items &bull; Total: {Formatters.currency(b.totalAmount)} ({b.status})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Product Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Product Name / Description *
              </label>
              <input
                type="text"
                required
                list="products-erp-list"
                value={newItemProductName}
                onChange={(e) => handleSelectNewItemProduct(e.target.value)}
                placeholder="e.g. Hikvision 4MP IP Bullet Camera"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
              />
              <span className="text-[10px] text-slate-500 mt-1 block">
                Select from existing inventory products or type a custom item description.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* SKU / Model */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Model / SKU
                </label>
                <input
                  type="text"
                  value={newItemSku}
                  onChange={(e) => setNewItemSku(e.target.value)}
                  placeholder="e.g. DS-2CD2043G2-I"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  value={newItemCategory}
                  onChange={(e) => setNewItemCategory(e.target.value)}
                  placeholder="e.g. CCTV & Security"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Quantity */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Quantity *
                </label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  required
                  value={newItemQuantity}
                  onChange={(e) => setNewItemQuantity(Math.max(1, Number(e.target.value) || 1))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
                />
              </div>

              {/* Unit */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Unit
                </label>
                <select
                  value={newItemUnit}
                  onChange={(e) => setNewItemUnit(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
                >
                  <option value="pcs">pcs (Pieces)</option>
                  <option value="unit">unit (Units)</option>
                  <option value="set">set (Sets)</option>
                  <option value="box">box (Boxes)</option>
                  <option value="meter">meter</option>
                  <option value="coil">coil</option>
                  <option value="roll">roll</option>
                  <option value="job">job (Job/Labor)</option>
                </select>
              </div>

              {/* Unit Price (Rate) */}
              <div>
                <label className="block text-xs font-semibold text-blue-300 mb-1">
                  Unit Price (Item Value BDT) *
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  required
                  value={newItemUnitPrice || ''}
                  onChange={(e) => setNewItemUnitPrice(Math.max(0, Number(e.target.value) || 0))}
                  placeholder="0.00"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-blue-500/50 text-xs font-bold text-blue-300 outline-none focus:border-blue-400"
                />
              </div>
            </div>

            {/* Calculations Preview */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/40 via-slate-950 to-blue-950/40 border border-emerald-800/40 flex items-center justify-between text-xs flex-wrap gap-3">
              <div>
                <span className="text-slate-400 block text-[11px]">Calculated Item Total</span>
                <span className="text-sm font-black text-emerald-400">
                  {Formatters.currency((Number(newItemQuantity) || 1) * (Number(newItemUnitPrice) || 0))}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  {Number(newItemQuantity) || 1} {newItemUnit} &times; {Formatters.currency(Number(newItemUnitPrice) || 0)}
                </span>
              </div>
              <div className="text-right">
                <span className="text-slate-400 block text-[11px]">Updated Bill Total</span>
                <span className="text-xs font-bold text-slate-100">
                  {Formatters.currency((targetBillForNewItem.currentTotal || 0) + (Number(newItemQuantity) || 1) * (Number(newItemUnitPrice) || 0))}
                </span>
                <span className="text-[11px] font-semibold text-rose-400 block mt-0.5">
                  Updated Due: {Formatters.currency((targetBillForNewItem.currentDue || 0) + (Number(newItemQuantity) || 1) * (Number(newItemUnitPrice) || 0))}
                </span>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Notes / Batch Description
              </label>
              <input
                type="text"
                value={newItemNotes}
                onChange={(e) => setNewItemNotes(e.target.value)}
                placeholder="Optional notes or batch description..."
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none focus:border-blue-500"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setIsAddItemToBillModalOpen(false);
                  setTargetBillForNewItem(null);
                }}
                className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition text-center"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 sm:flex-initial justify-center px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-lg shadow-emerald-600/30 active:scale-95 flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Item to Bill</span>
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}
