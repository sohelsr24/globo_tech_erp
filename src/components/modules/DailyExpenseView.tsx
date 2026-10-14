'use client';

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  WalletCards,
  Plus,
  Search,
  Calendar,
  Filter,
  X,
  Printer,
  Download,
  Trash2,
  Edit3,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  Receipt,
  Building2,
  ArrowDownRight,
  ArrowUpRight,
  FileText,
  Clock,
  Tag,
  ChevronLeft,
  ChevronRight,
  ArrowLeftRight,
  ChevronDown,
  Info,
  DollarSign,
  Sparkles,
  PieChart,
  Car,
  Utensils,
  Wrench,
  Package,
  Home,
  Zap,
  Paperclip,
  Check
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { formatBDT, formatDate } from '@/lib/formatters';
import { forceImmediateBackup } from '@/lib/autoBackupDaemon';
import {
  ExpenseEntry,
  ExpenseCategory,
  PaymentMethod,
  TransactionType,
  EXPENSE_CATEGORIES_CONFIG,
  PAYMENT_METHODS_CONFIG,
  INITIAL_EXPENSES,
  getStoredExpenses,
  saveStoredExpenses,
  deleteStoredExpense,
  calculateExpenseMetrics
} from '@/lib/expensesStorage';

interface DailyExpenseViewProps {
  globalSearchQuery?: string;
}

export function DailyExpenseView({ globalSearchQuery = '' }: DailyExpenseViewProps) {
  // 1. Data State
  const [expenses, setExpenses] = useState<ExpenseEntry[]>(() => getStoredExpenses());
  const [isMounted, setIsMounted] = useState(false);

  // 2. Filter & Navigation States - Default to THIS_MONTH so all current month entries from Mobile & PC are immediately visible
  const [searchQuery, setSearchQuery] = useState(globalSearchQuery || '');
  const [datePreset, setDatePreset] = useState<'TODAY' | 'YESTERDAY' | 'THIS_WEEK' | 'THIS_MONTH' | 'ALL' | 'CUSTOM'>('THIS_MONTH');
  
  // Custom or selected calendar date (Local timezone date YYYY-MM-DD)
  const getLocalDateString = useCallback((d: Date = new Date()) => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }, []);

  const todayDateString = useMemo(() => getLocalDateString(new Date()), [getLocalDateString]);
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<string>(todayDateString);

  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [typeFilter, setTypeFilter] = useState<'ALL' | TransactionType>('ALL');
  const [paymentMethodFilter, setPaymentMethodFilter] = useState<string>('ALL');

  // 3. Modals & Action States
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState<ExpenseEntry | null>(null);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // 4. Entry Form State
  const initialFormState: Partial<ExpenseEntry> = {
    date: todayDateString,
    time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    type: 'EXPENSE',
    category: 'CONVEYANCE',
    particulars: '',
    amount: 0,
    paymentMethod: 'PETTY_CASH',
    spentBy: 'Engr. Sohel Rana',
    paidTo: '',
    voucherNo: '',
    projectRef: '',
    notes: ''
  };
  const [formData, setFormData] = useState<Partial<ExpenseEntry>>(initialFormState);

  // Top Synchronized Scrollbar State & Refs
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const topScrollRef = useRef<HTMLDivElement>(null);
  const isSyncingTopScroll = useRef(false);
  const isSyncingBottomScroll = useRef(false);

  const [tableScrollWidth, setTableScrollWidth] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  // Hydrate on mount
  useEffect(() => {
    setIsMounted(true);
    setExpenses(getStoredExpenses());

    const handleUpdate = (e: any) => {
      if (e?.detail && Array.isArray(e.detail)) {
        setExpenses(e.detail);
      } else {
        setExpenses(getStoredExpenses());
      }
    };
    window.addEventListener('globotech_expenses_updated', handleUpdate);
    window.addEventListener('globotech:cloud_data_synced', handleUpdate);
    window.addEventListener('globotech_backup_restored', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('globotech_expenses_updated', handleUpdate);
      window.removeEventListener('globotech:cloud_data_synced', handleUpdate);
      window.removeEventListener('globotech_backup_restored', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  // Sync search query from prop
  useEffect(() => {
    if (globalSearchQuery !== undefined && globalSearchQuery !== searchQuery) {
      setSearchQuery(globalSearchQuery);
    }
  }, [globalSearchQuery]);

  // Save changes to localStorage & trigger auto-backup
  const persistExpenses = (updated: ExpenseEntry[], notifyMsg?: string) => {
    setExpenses(updated);
    saveStoredExpenses(updated);
    forceImmediateBackup('daily_expenses_updated');
    if (notifyMsg) showToast(notifyMsg);
  };

  // Date calculation helpers using local timezone
  const yesterdayDateString = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return getLocalDateString(d);
  }, [getLocalDateString]);

  const weekStartDateString = useMemo(() => {
    const d = new Date();
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Monday
    const monday = new Date(d.setDate(diff));
    return getLocalDateString(monday);
  }, [getLocalDateString]);

  const currentMonthString = useMemo(() => todayDateString.substring(0, 7), [todayDateString]);

  // Quick count calculations for UI pills
  const todayCount = useMemo(() => expenses.filter((e) => e.date === todayDateString).length, [expenses, todayDateString]);
  const yesterdayCount = useMemo(() => expenses.filter((e) => e.date === yesterdayDateString).length, [expenses, yesterdayDateString]);
  const thisMonthCount = useMemo(() => expenses.filter((e) => e.date.startsWith(currentMonthString)).length, [expenses, currentMonthString]);
  const allCount = expenses.length;

  // Filtered entries strictly sorted descending (newest date & time first)
  const filteredEntries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return expenses
      .filter((entry) => {
        // 1. Date filter
        if (datePreset === 'TODAY' && entry.date !== todayDateString) return false;
        if (datePreset === 'YESTERDAY' && entry.date !== yesterdayDateString) return false;
        if (datePreset === 'THIS_WEEK' && entry.date < weekStartDateString) return false;
        if (datePreset === 'THIS_MONTH' && !entry.date.startsWith(currentMonthString)) return false;
        if (datePreset === 'CUSTOM' && entry.date !== selectedCalendarDate) return false;

        // 2. Type filter
        if (typeFilter !== 'ALL' && entry.type !== typeFilter) return false;

        // 3. Category filter
        if (categoryFilter !== 'ALL' && entry.category !== categoryFilter) return false;

        // 4. Payment Method filter
        if (paymentMethodFilter !== 'ALL' && entry.paymentMethod !== paymentMethodFilter) return false;

        // 5. Keyword search
        if (q) {
          const matchDesc = (entry.particulars || '').toLowerCase().includes(q);
          const matchPayee = (entry.paidTo || '').toLowerCase().includes(q);
          const matchSpentBy = (entry.spentBy || '').toLowerCase().includes(q);
          const matchVoucher = (entry.voucherNo || '').toLowerCase().includes(q);
          const matchProject = (entry.projectRef || '').toLowerCase().includes(q);
          const matchNotes = (entry.notes || '').toLowerCase().includes(q);
          const matchCategory = (EXPENSE_CATEGORIES_CONFIG[entry.category]?.labelEn || '').toLowerCase().includes(q) ||
                                (EXPENSE_CATEGORIES_CONFIG[entry.category]?.labelBn || '').toLowerCase().includes(q);
          return matchDesc || matchPayee || matchSpentBy || matchVoucher || matchProject || matchNotes || matchCategory;
        }

        return true;
      })
      .sort((a, b) => {
        const dateTimeA = `${a.date} ${a.time || '00:00'}`;
        const dateTimeB = `${b.date} ${b.time || '00:00'}`;
        return dateTimeB.localeCompare(dateTimeA);
      });
  }, [
    expenses,
    searchQuery,
    datePreset,
    selectedCalendarDate,
    todayDateString,
    yesterdayDateString,
    weekStartDateString,
    currentMonthString,
    typeFilter,
    categoryFilter,
    paymentMethodFilter
  ]);

  // Overall and current filter metrics
  const metrics = useMemo(() => {
    return calculateExpenseMetrics(expenses, datePreset === 'CUSTOM' ? selectedCalendarDate : todayDateString);
  }, [expenses, datePreset, selectedCalendarDate, todayDateString]);

  // Metrics for currently displayed filtered list
  const filteredListTotalExpense = useMemo(() => {
    return filteredEntries
      .filter((e) => e.type === 'EXPENSE')
      .reduce((sum, e) => sum + e.amount, 0);
  }, [filteredEntries]);

  const filteredListTotalCashIn = useMemo(() => {
    return filteredEntries
      .filter((e) => e.type === 'CASH_IN')
      .reduce((sum, e) => sum + e.amount, 0);
  }, [filteredEntries]);

  // Scroll synchronization
  const updateScrollMetrics = useCallback(() => {
    const el = tableContainerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setTableScrollWidth(el.scrollWidth);
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(maxScroll > 4 && el.scrollLeft < maxScroll - 4);
  }, []);

  const handleTopScroll = () => {
    if (isSyncingTopScroll.current) {
      isSyncingTopScroll.current = false;
      return;
    }
    if (tableContainerRef.current && topScrollRef.current) {
      const topEl = topScrollRef.current;
      const tableEl = tableContainerRef.current;
      const topMax = topEl.scrollWidth - topEl.clientWidth;
      const tableMax = tableEl.scrollWidth - tableEl.clientWidth;

      isSyncingBottomScroll.current = true;
      if (topMax > 0 && tableMax > 0 && Math.abs(topMax - tableMax) > 4) {
        tableEl.scrollLeft = (topEl.scrollLeft / topMax) * tableMax;
      } else {
        tableEl.scrollLeft = topEl.scrollLeft;
      }
      updateScrollMetrics();
    }
  };

  const handleBottomScroll = () => {
    if (isSyncingBottomScroll.current) {
      isSyncingBottomScroll.current = false;
      return;
    }
    if (tableContainerRef.current && topScrollRef.current) {
      const topEl = topScrollRef.current;
      const tableEl = tableContainerRef.current;
      const topMax = topEl.scrollWidth - topEl.clientWidth;
      const tableMax = tableEl.scrollWidth - tableEl.clientWidth;

      isSyncingTopScroll.current = true;
      if (topMax > 0 && tableMax > 0 && Math.abs(topMax - tableMax) > 4) {
        topEl.scrollLeft = (tableEl.scrollLeft / tableMax) * topMax;
      } else {
        topEl.scrollLeft = tableEl.scrollLeft;
      }
      updateScrollMetrics();
    }
  };

  const scrollTableBy = (delta: number) => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollBy({ left: delta, behavior: 'smooth' });
    }
  };

  const handleWheelOnHeader = (e: React.WheelEvent) => {
    if (tableContainerRef.current && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      tableContainerRef.current.scrollLeft += e.deltaY;
      updateScrollMetrics();
    }
  };

  useEffect(() => {
    const el = tableContainerRef.current;
    if (!el) return;
    updateScrollMetrics();

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => updateScrollMetrics());
      ro.observe(el);
      const tableEl = el.querySelector('table');
      if (tableEl) ro.observe(tableEl);
    }

    window.addEventListener('resize', updateScrollMetrics);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', updateScrollMetrics);
    };
  }, [filteredEntries, updateScrollMetrics]);

  // Handle Create New Entry
  const handleOpenCreateModal = (type: TransactionType = 'EXPENSE') => {
    let defaultDate = todayDateString;
    if (datePreset === 'YESTERDAY') {
      defaultDate = yesterdayDateString;
    } else if (datePreset === 'CUSTOM') {
      defaultDate = selectedCalendarDate;
    }

    setFormData({
      ...initialFormState,
      type,
      date: defaultDate,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    });
    setIsCreateModalOpen(true);
  };

  const handleSaveCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.particulars || !formData.amount || formData.amount <= 0) {
      alert('Please provide valid Particulars (description) and Amount.');
      return;
    }

    const newEntry: ExpenseEntry = {
      id: `exp-${Date.now()}`,
      date: formData.date || todayDateString,
      time: formData.time || new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      type: formData.type || 'EXPENSE',
      category: formData.category || 'CONVEYANCE',
      particulars: formData.particulars.trim(),
      amount: Number(formData.amount) || 0,
      paymentMethod: formData.paymentMethod || 'PETTY_CASH',
      spentBy: formData.spentBy?.trim() || 'Engr. Sohel Rana',
      paidTo: formData.paidTo?.trim() || '',
      voucherNo: formData.voucherNo?.trim() || '',
      projectRef: formData.projectRef?.trim() || '',
      notes: formData.notes?.trim() || '',
      createdAt: new Date().toISOString()
    };

    const updated = [newEntry, ...expenses];
    persistExpenses(
      updated,
      formData.type === 'CASH_IN' ? '✅ Cash In recorded successfully!' : '✅ Daily expense recorded successfully!'
    );
    setIsCreateModalOpen(false);
  };

  // Handle Edit Entry
  const handleOpenEditModal = (entry: ExpenseEntry) => {
    setEditingEntry(entry);
    setFormData({ ...entry });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingEntry) return;

    const updatedEntries = expenses.map((item) => {
      if (item.id === editingEntry.id) {
        return {
          ...item,
          date: formData.date || item.date,
          time: formData.time || item.time,
          type: formData.type || item.type,
          category: formData.category || item.category,
          particulars: formData.particulars?.trim() || item.particulars,
          amount: Number(formData.amount) || item.amount,
          paymentMethod: formData.paymentMethod || item.paymentMethod,
          spentBy: formData.spentBy?.trim() || item.spentBy,
          paidTo: formData.paidTo?.trim() || '',
          voucherNo: formData.voucherNo?.trim() || '',
          projectRef: formData.projectRef?.trim() || '',
          notes: formData.notes?.trim() || ''
        };
      }
      return item;
    });

    persistExpenses(updatedEntries, '✅ Entry updated successfully!');
    setIsEditModalOpen(false);
    setEditingEntry(null);
  };

  // Handle Delete Entry (with Anti-Resurrection Tombstone)
  const handleDeleteEntry = (id: string, particulars: string) => {
    if (confirm(`Are you sure you want to permanently delete "${particulars}"?\nThis will be deleted across all devices and the cloud.`)) {
      const targetEntry = expenses.find((e) => e.id === id);
      deleteStoredExpense(id, targetEntry);
      const updated = expenses.filter((e) => e.id !== id);
      setExpenses(updated);
      forceImmediateBackup('daily_expenses_deleted');
      showToast('🗑️ Record permanently deleted and synced with cloud!');
    }
  };

  // Handle Export CSV
  const handleExportCSV = () => {
    if (filteredEntries.length === 0) {
      alert('No expense data found to export.');
      return;
    }

    const headers = ['Date', 'Time', 'Type', 'Category', 'Particulars (Description)', 'Amount (BDT)', 'Payment Method', 'Spent By', 'Paid To', 'Voucher No', 'Project'];
    const rows = filteredEntries.map((e) => [
      e.date,
      `"${e.time || ''}"`,
      e.type,
      `"${EXPENSE_CATEGORIES_CONFIG[e.category]?.labelEn || e.category}"`,
      `"${(e.particulars || '').replace(/"/g, '""')}"`,
      e.amount,
      `"${PAYMENT_METHODS_CONFIG[e.paymentMethod]?.labelEn || e.paymentMethod}"`,
      `"${e.spentBy || ''}"`,
      `"${e.paidTo || ''}"`,
      `"${e.voucherNo || ''}"`,
      `"${e.projectRef || ''}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `GloboTech_Daily_Expenses_${datePreset}_${todayDateString}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 border border-emerald-400/40 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-white" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* 1. Header Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-2xl shadow-xl backdrop-blur-md no-print">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
            <WalletCards className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-100">Daily Expenses &amp; Cash Flow</h1>
              <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Cash Flow &amp; Ledger
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Record daily field &amp; office costs, manage drawer petty cash, and calculate daily expenses with 1-click
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => handleOpenCreateModal('EXPENSE')}
            className="flex items-center gap-2 px-3.5 py-2.5 bg-rose-600 hover:bg-rose-500 active:scale-95 text-white rounded-xl text-xs font-bold shadow-lg shadow-rose-600/20 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>+ Add Expense</span>
          </button>

          <button
            type="button"
            onClick={() => handleOpenCreateModal('CASH_IN')}
            className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-600/20 transition-all"
          >
            <ArrowDownRight className="w-4 h-4" />
            <span>+ Cash In</span>
          </button>

          <button
            type="button"
            onClick={() => setIsPrintModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 border border-slate-700 rounded-xl text-xs font-semibold transition"
            title="Print Daily Expense Voucher / Sheet"
          >
            <Printer className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden md:inline">Print Sheet</span>
          </button>

          <button
            type="button"
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 border border-slate-700 rounded-xl text-xs font-semibold transition"
            title="Export CSV Spreadsheet"
          >
            <Download className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden md:inline">Export</span>
          </button>
        </div>
      </div>

      {/* 2. Top Analytics Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 no-print">
        {/* Card 1: Today's Expense */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-rose-400 flex items-center gap-1">
              <TrendingDown className="w-3.5 h-3.5" />
              Today's Expenses
            </span>
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
          </div>
          <p className="text-xl font-mono font-bold text-slate-100 mt-2">
            {formatBDT(metrics.todayExpenses)}
          </p>
          <p className="text-[11px] text-slate-500 mt-0.5">
            {expenses.filter((e) => e.date === todayDateString && e.type === 'EXPENSE').length} expense entries
          </p>
        </div>

        {/* Card 2: Today's Cash In */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
              <ArrowDownRight className="w-3.5 h-3.5" />
              Today's Cash In
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <p className="text-xl font-mono font-bold text-emerald-400 mt-2">
            {formatBDT(metrics.todayCashIn)}
          </p>
          <p className="text-[11px] text-slate-500 mt-0.5">Collections &amp; Drawer Refills</p>
        </div>

        {/* Card 3: Today's Net Cash Flow */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-sky-400">
              Today's Net Cash Flow
            </span>
            <span className="text-[10px] text-slate-500 font-mono">In - Out</span>
          </div>
          <p className={`text-xl font-mono font-bold mt-2 ${metrics.todayNet >= 0 ? 'text-sky-400' : 'text-amber-400'}`}>
            {metrics.todayNet >= 0 ? `+ ${formatBDT(metrics.todayNet)}` : formatBDT(metrics.todayNet)}
          </p>
          <p className="text-[11px] text-slate-500 mt-0.5">Daily Net Cash Flow</p>
        </div>

        {/* Card 4: Drawer Petty Cash Balance */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5" />
              Drawer Cash Balance
            </span>
            <span className="text-[10px] text-emerald-400 font-mono">Available</span>
          </div>
          <p className="text-xl font-mono font-bold text-amber-300 mt-2">
            {formatBDT(metrics.pettyCashBalance)}
          </p>
          <p className="text-[11px] text-slate-500 mt-0.5">Petty Cash In Hand</p>
        </div>

        {/* Card 5: This Month Total */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-purple-400">
              This Month's Total Expenses
            </span>
            <span className="text-[10px] text-slate-500">October 2026</span>
          </div>
          <p className="text-xl font-mono font-bold text-purple-300 mt-2">
            {formatBDT(metrics.monthExpenses)}
          </p>
          <p className="text-[11px] text-slate-500 mt-0.5">Monthly Total Volume</p>
        </div>
      </div>

      {/* 3. Daily Date Selector & Total Calculation Bar */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 no-print shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-300 mr-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              Select Period:
            </span>

            <button
              type="button"
              onClick={() => setDatePreset('THIS_MONTH')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                datePreset === 'THIS_MONTH'
                  ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-400'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              This Month
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                datePreset === 'THIS_MONTH' ? 'bg-emerald-700 text-white' : 'bg-slate-900 text-slate-400'
              }`}>
                {thisMonthCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setDatePreset('TODAY')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                datePreset === 'TODAY'
                  ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-400'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              Today
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                datePreset === 'TODAY' ? 'bg-emerald-700 text-white' : 'bg-slate-900 text-slate-400'
              }`}>
                {todayCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setDatePreset('YESTERDAY')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                datePreset === 'YESTERDAY'
                  ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-400'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              Yesterday
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                datePreset === 'YESTERDAY' ? 'bg-emerald-700 text-white' : 'bg-slate-900 text-slate-400'
              }`}>
                {yesterdayCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setDatePreset('THIS_WEEK')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                datePreset === 'THIS_WEEK'
                  ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-400'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              This Week
            </button>

            <button
              type="button"
              onClick={() => setDatePreset('ALL')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                datePreset === 'ALL'
                  ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-400'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              All Records
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                datePreset === 'ALL' ? 'bg-emerald-700 text-white' : 'bg-slate-900 text-slate-400'
              }`}>
                {allCount}
              </span>
            </button>
          </div>

          {/* Specific Calendar Date Picker */}
          <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            <span className="text-[11px] text-slate-400 font-medium whitespace-nowrap">
              Specific Date:
            </span>
            <input
              type="date"
              value={selectedCalendarDate}
              onChange={(e) => {
                setSelectedCalendarDate(e.target.value);
                setDatePreset('CUSTOM');
              }}
              className="bg-transparent text-emerald-400 text-xs font-bold font-mono focus:outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Prominent Daily Calculation Display Banner */}
        <div className="bg-slate-950/90 border border-slate-800/90 rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs shadow-inner">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-slate-200">
              Summary for Period (
              <span className="text-emerald-400 font-mono">
                {datePreset === 'TODAY'
                  ? `Today: ${todayDateString}`
                  : datePreset === 'YESTERDAY'
                  ? `Yesterday: ${yesterdayDateString}`
                  : datePreset === 'CUSTOM'
                  ? selectedCalendarDate
                  : datePreset === 'THIS_MONTH'
                  ? 'This Month'
                  : datePreset === 'THIS_WEEK'
                  ? 'This Week'
                  : 'All Time'}
              </span>
              ):
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">Total Expenses:</span>
              <strong className="text-rose-400 text-sm font-bold">
                {formatBDT(filteredListTotalExpense)}
              </strong>
            </div>

            <div className="flex items-center gap-1.5 border-l border-slate-800 pl-4">
              <span className="text-slate-400">Total Cash In:</span>
              <strong className="text-emerald-400 text-sm font-bold">
                {formatBDT(filteredListTotalCashIn)}
              </strong>
            </div>

            <div className="flex items-center gap-1.5 border-l border-slate-800 pl-4">
              <span className="text-slate-400">Net Cash Flow:</span>
              <strong
                className={`text-sm font-bold ${
                  filteredListTotalCashIn - filteredListTotalExpense >= 0
                    ? 'text-sky-400'
                    : 'text-amber-400'
                }`}
              >
                {filteredListTotalCashIn - filteredListTotalExpense >= 0 ? '+' : ''}
                {formatBDT(filteredListTotalCashIn - filteredListTotalExpense)}
              </strong>
            </div>

            <div className="hidden xl:flex items-center gap-1 border-l border-slate-800 pl-4 text-slate-400 text-[11px]">
              <strong className="text-slate-200">{filteredEntries.length}</strong>
              <span>entries</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Search & Filters Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 bg-slate-900/60 border border-slate-800 p-3 rounded-xl no-print">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by Description, Payee, Voucher, Project..."
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

        {/* Filter Dropdowns */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Category Dropdown */}
          <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs">
            <Tag className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-transparent text-slate-200 font-medium focus:outline-none cursor-pointer text-xs"
            >
              <option value="ALL" className="bg-slate-900 text-slate-300">All Categories</option>
              {Object.values(EXPENSE_CATEGORIES_CONFIG).map((cat) => (
                <option key={cat.id} value={cat.id} className="bg-slate-900 text-slate-200">
                  {cat.labelEn}
                </option>
              ))}
            </select>
          </div>

          {/* Payment Method Dropdown */}
          <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs">
            <WalletCards className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={paymentMethodFilter}
              onChange={(e) => setPaymentMethodFilter(e.target.value)}
              className="bg-transparent text-slate-200 font-medium focus:outline-none cursor-pointer text-xs"
            >
              <option value="ALL" className="bg-slate-900 text-slate-300">All Payment Methods</option>
              {Object.entries(PAYMENT_METHODS_CONFIG).map(([k, v]) => (
                <option key={k} value={k} className="bg-slate-900 text-slate-200">
                  {v.labelEn}
                </option>
              ))}
            </select>
          </div>

          {/* Transaction Type Filter */}
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setTypeFilter('ALL')}
              className={`px-2 py-1 rounded text-xs font-semibold transition ${
                typeFilter === 'ALL' ? 'bg-slate-800 text-slate-100' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setTypeFilter('EXPENSE')}
              className={`px-2 py-1 rounded text-xs font-semibold transition ${
                typeFilter === 'EXPENSE' ? 'bg-rose-950 text-rose-300 border border-rose-800' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Expenses
            </button>
            <button
              type="button"
              onClick={() => setTypeFilter('CASH_IN')}
              className={`px-2 py-1 rounded text-xs font-semibold transition ${
                typeFilter === 'CASH_IN' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Cash In
            </button>
          </div>
        </div>
      </div>

      {/* 5. Master Expense Table (Desktop) & Cards (Mobile) */}
      <div className="space-y-4 no-print">
        {/* Mobile View (md:hidden) */}
        <div className="md:hidden space-y-3">
          {filteredEntries.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-500">
              <WalletCards className="w-8 h-8 mx-auto mb-2 text-slate-600 opacity-50" />
              <p className="text-sm font-medium">No expense or cash flow records found</p>
              <p className="text-xs text-slate-600 mt-1">Tap &ldquo;+ Add Expense&rdquo; or &ldquo;+ Cash In&rdquo; above to record an entry</p>
            </div>
          ) : (
            filteredEntries.map((item) => {
              const catMeta = EXPENSE_CATEGORIES_CONFIG[item.category] || EXPENSE_CATEGORIES_CONFIG.MISC;
              const payMeta = PAYMENT_METHODS_CONFIG[item.paymentMethod] || PAYMENT_METHODS_CONFIG.PETTY_CASH;
              const isExpense = item.type === 'EXPENSE';

              return (
                <div key={item.id} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-md">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${catMeta.badgeBg} ${catMeta.badgeText} ${catMeta.badgeBorder}`}>
                          {catMeta.labelEn}
                        </span>
                        {item.type === 'CASH_IN' && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                            Cash In
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-1 font-mono">{item.date} &bull; {item.time}</p>
                    </div>

                    <div className="text-right">
                      <span className={`font-mono font-bold text-base block ${isExpense ? 'text-rose-400' : 'text-emerald-400'}`}>
                        {isExpense ? `- ${formatBDT(item.amount)}` : `+ ${formatBDT(item.amount)}`}
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded border ${payMeta.badge}`}>
                        {payMeta.labelEn}
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 text-xs text-slate-200">
                    <p className="font-medium text-slate-100">{item.particulars}</p>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 mt-2 pt-1.5 border-t border-slate-800/60">
                      <span>Spent by: <strong className="text-slate-200">{item.spentBy}</strong></span>
                      {item.paidTo && <span>&bull; Paid to: <strong className="text-slate-200">{item.paidTo}</strong></span>}
                      {item.voucherNo && <span className="font-mono text-emerald-400">&bull; Voucher: {item.voucherNo}</span>}
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-1.5 pt-1">
                    <button
                      type="button"
                      onClick={() => handleOpenEditModal(item)}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1 active:scale-95"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteEntry(item.id, item.particulars)}
                      className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs border border-rose-500/20 active:scale-95"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Desktop Master Table (hidden md:block) */}
        <div className="hidden md:block bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          {/* Top Synchronized Horizontal Scrollbar Toolbar */}
          <div className="bg-slate-950/95 border-b border-slate-800">
            <div className="px-3.5 py-2 flex flex-wrap items-center justify-between gap-2.5 text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-[11px] shadow-sm">
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                  <span>Top Horizontal Scrollbar</span>
                </span>
                <span className="text-[11px] text-slate-400 hidden lg:inline">
                  Drag scrollbar or use buttons to scroll the table horizontally without scrolling down
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    if (tableContainerRef.current) {
                      tableContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                    }
                  }}
                  disabled={!canScrollLeft}
                  className={`px-2 py-1 rounded-lg border text-[11px] font-medium transition ${
                    canScrollLeft
                      ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700 active:scale-95 cursor-pointer'
                      : 'bg-slate-900/40 text-slate-600 border-slate-800/40 cursor-not-allowed opacity-40'
                  }`}
                  title="Scroll to Beginning"
                >
                  &#124;&#9664; First
                </button>

                <button
                  type="button"
                  onClick={() => scrollTableBy(-260)}
                  disabled={!canScrollLeft}
                  className={`px-2.5 py-1 rounded-lg border text-xs font-semibold transition flex items-center gap-1 ${
                    canScrollLeft
                      ? 'bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border-emerald-700/60 active:scale-95 cursor-pointer shadow-sm'
                      : 'bg-slate-900/40 text-slate-600 border-slate-800/40 cursor-not-allowed opacity-40'
                  }`}
                  title="Scroll Left"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Scroll Left</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollTableBy(260)}
                  disabled={!canScrollRight}
                  className={`px-2.5 py-1 rounded-lg border text-xs font-semibold transition flex items-center gap-1 ${
                    canScrollRight
                      ? 'bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border-emerald-700/60 active:scale-95 cursor-pointer shadow-sm'
                      : 'bg-slate-900/40 text-slate-600 border-slate-800/40 cursor-not-allowed opacity-40'
                  }`}
                  title="Scroll Right"
                >
                  <span>Scroll Right</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (tableContainerRef.current) {
                      tableContainerRef.current.scrollTo({
                        left: tableContainerRef.current.scrollWidth,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  disabled={!canScrollRight}
                  className={`px-2 py-1 rounded-lg border text-[11px] font-medium transition ${
                    canScrollRight
                      ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700 active:scale-95 cursor-pointer'
                      : 'bg-slate-900/40 text-slate-600 border-slate-800/40 cursor-not-allowed opacity-40'
                  }`}
                  title="Scroll to Actions (End)"
                >
                  Last &#9654;&#124;
                </button>
              </div>
            </div>

            {/* Full-width Synced Scrollbar Track */}
            <div
              ref={topScrollRef}
              onScroll={handleTopScroll}
              onWheel={handleWheelOnHeader}
              className="w-full overflow-x-auto touch-scroll erp-horizontal-scrollbar bg-slate-950 px-2 py-1.5 border-t border-slate-800/70 cursor-ew-resize select-none"
              title="Drag with mouse or use wheel to scroll horizontally"
            >
              <div style={{ width: `${Math.max(tableScrollWidth, 1)}px`, height: '8px' }} />
            </div>
          </div>

          {/* Table Container */}
          <div
            ref={tableContainerRef}
            onScroll={handleBottomScroll}
            className="overflow-x-auto touch-scroll max-h-[calc(100vh-250px)] min-h-[420px] overflow-y-auto erp-horizontal-scrollbar"
          >
            <table className="w-full text-left border-separate border-spacing-0 text-xs text-slate-300 min-w-[980px]">
              <thead onWheel={handleWheelOnHeader}>
                <tr className="bg-slate-950/95 text-slate-400 uppercase text-[10px] tracking-wider font-semibold">
                  <th className="py-2.5 px-3 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800 whitespace-nowrap">Date &amp; Time</th>
                  <th className="py-2.5 px-3 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800 whitespace-nowrap">Category</th>
                  <th className="py-2.5 px-3 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800">Particulars (Description)</th>
                  <th className="py-2.5 px-2.5 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800 whitespace-nowrap">Payment Method</th>
                  <th className="py-2.5 px-2.5 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800">Spent By / Paid To</th>
                  <th className="py-2.5 px-2.5 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800">Voucher / Project</th>
                  <th className="py-2.5 px-3 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800 text-right whitespace-nowrap">Amount (BDT)</th>
                  <th className="py-2.5 px-3 bg-slate-950/95 sticky top-0 right-0 z-30 border-b border-l border-slate-800 shadow-[-8px_0_12px_rgba(0,0,0,0.5)] text-right whitespace-nowrap">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {filteredEntries.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-12 text-center text-slate-500 border-b border-slate-800/60">
                      <WalletCards className="w-8 h-8 mx-auto mb-2 text-slate-600 opacity-50" />
                      <p className="text-sm font-medium">No expense or cash flow records found</p>
                      <p className="text-xs text-slate-600 mt-1">
                        Click &ldquo;+ Add Expense&rdquo; or &ldquo;+ Cash In&rdquo; above to record a new entry
                      </p>
                    </td>
                  </tr>
                ) : (
                  filteredEntries.map((item) => {
                    const catMeta = EXPENSE_CATEGORIES_CONFIG[item.category] || EXPENSE_CATEGORIES_CONFIG.MISC;
                    const payMeta = PAYMENT_METHODS_CONFIG[item.paymentMethod] || PAYMENT_METHODS_CONFIG.PETTY_CASH;
                    const isExpense = item.type === 'EXPENSE';

                    return (
                      <tr key={item.id} className="hover:bg-slate-800/40 transition group">
                        {/* Date & Time */}
                        <td className="py-2.5 px-3 border-b border-slate-800/60 whitespace-nowrap">
                          <div className="font-mono font-bold text-slate-200">{item.date}</div>
                          <span className="text-[10px] text-slate-500">{item.time || '—'}</span>
                        </td>

                        {/* Category */}
                        <td className="py-2.5 px-3 border-b border-slate-800/60 whitespace-nowrap">
                          <div className="flex flex-col items-start gap-1">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${catMeta.badgeBg} ${catMeta.badgeText} ${catMeta.badgeBorder}`}>
                              {catMeta.labelEn}
                            </span>
                          </div>
                        </td>

                        {/* Particulars */}
                        <td className="py-2.5 px-3 border-b border-slate-800/60 max-w-[260px]">
                          <p className="font-semibold text-slate-100 leading-snug">{item.particulars}</p>
                          {item.notes && <p className="text-[11px] text-slate-400 mt-0.5 truncate">{item.notes}</p>}
                        </td>

                        {/* Payment Method */}
                        <td className="py-2.5 px-2.5 border-b border-slate-800/60 whitespace-nowrap">
                          <span className={`text-[10px] font-medium px-2 py-0.5 rounded border inline-block ${payMeta.badge}`}>
                            {payMeta.labelEn}
                          </span>
                        </td>

                        {/* Spent By / Paid To */}
                        <td className="py-2.5 px-2.5 border-b border-slate-800/60 max-w-[140px]">
                          <div className="font-semibold text-slate-200 truncate">{item.spentBy}</div>
                          {item.paidTo && (
                            <div className="text-[11px] text-slate-400 truncate" title={`Paid to: ${item.paidTo}`}>
                              Paid to: {item.paidTo}
                            </div>
                          )}
                        </td>

                        {/* Voucher / Project */}
                        <td className="py-2.5 px-2.5 border-b border-slate-800/60 max-w-[130px]">
                          {item.voucherNo ? (
                            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700/60 block truncate w-fit">
                              {item.voucherNo}
                            </span>
                          ) : (
                            <span className="text-slate-600 italic text-[11px]">—</span>
                          )}
                          {item.projectRef && (
                            <div className="text-[10px] text-sky-400 font-medium truncate mt-0.5" title={item.projectRef}>
                              Ref: {item.projectRef}
                            </div>
                          )}
                        </td>

                        {/* Amount */}
                        <td className="py-2.5 px-3 text-right font-mono font-bold border-b border-slate-800/60 whitespace-nowrap">
                          <span className={`text-sm ${isExpense ? 'text-rose-400' : 'text-emerald-400'}`}>
                            {isExpense ? `- ${formatBDT(item.amount)}` : `+ ${formatBDT(item.amount)}`}
                          </span>
                          <span className="text-[9px] text-slate-500 block uppercase font-sans">
                            {isExpense ? 'Cash Out' : 'Cash In'}
                          </span>
                        </td>

                        {/* Sticky Actions Column */}
                        <td className="py-2.5 px-3 text-right whitespace-nowrap sticky right-0 z-10 bg-slate-900/95 group-hover:bg-slate-850/95 backdrop-blur-md border-b border-l border-slate-800 shadow-[-8px_0_12px_rgba(0,0,0,0.5)]">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              type="button"
                              onClick={() => handleOpenEditModal(item)}
                              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition active:scale-95 flex items-center gap-1"
                              title="Edit Expense"
                            >
                              <Edit3 className="w-3.5 h-3.5 text-slate-400" />
                              <span>Edit</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleDeleteEntry(item.id, item.particulars)}
                              className="p-1.5 rounded bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 font-semibold text-xs border border-rose-500/30 transition active:scale-95"
                              title="Delete Record"
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
      </div>

      {/* 6. Modal: Add / Create Expense or Cash In */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title={formData.type === 'CASH_IN' ? 'Record Cash In' : 'Record Daily Expense'}
        size="lg"
      >
        <form onSubmit={handleSaveCreate} className="space-y-4">
          {/* Type Toggle */}
          <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, type: 'EXPENSE', category: 'CONVEYANCE' })}
              className={`py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                formData.type === 'EXPENSE'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <TrendingDown className="w-3.5 h-3.5" />
              <span>Daily Expense (Cash Out)</span>
            </button>

            <button
              type="button"
              onClick={() => setFormData({ ...formData, type: 'CASH_IN', category: 'MISC' })}
              className={`py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                formData.type === 'CASH_IN'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ArrowDownRight className="w-3.5 h-3.5" />
              <span>Cash In (Inflow)</span>
            </button>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Date *
              </label>
              <input
                type="date"
                required
                value={formData.date || todayDateString}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Time
              </label>
              <input
                type="text"
                placeholder="e.g. 02:30 PM"
                value={formData.time || ''}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              Category *
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value as ExpenseCategory })}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
            >
              {Object.values(EXPENSE_CATEGORIES_CONFIG).map((c) => (
                <option key={c.id} value={c.id} className="bg-slate-900 text-slate-200">
                  {c.labelEn}
                </option>
              ))}
            </select>
          </div>

          {/* Description (Particulars) */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              Particulars / Description *
            </label>
            <input
              type="text"
              required
              autoFocus
              placeholder="e.g. Daraz Tejgaon hub Cat-6 cable parcel delivery CNG fare"
              value={formData.particulars || ''}
              onChange={(e) => setFormData({ ...formData, particulars: e.target.value })}
              className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-emerald-500 font-medium"
            />
          </div>

          {/* Amount & Payment Method */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Amount (BDT) *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-mono font-bold">
                  ৳
                </span>
                <input
                  type="number"
                  min="1"
                  required
                  placeholder="0"
                  value={formData.amount || ''}
                  onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
                  className="w-full pl-8 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-base font-bold font-mono text-emerald-400 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Payment Method (Paid From) *
              </label>
              <select
                value={formData.paymentMethod}
                onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value as PaymentMethod })}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
              >
                {Object.entries(PAYMENT_METHODS_CONFIG).map(([k, v]) => (
                  <option key={k} value={k} className="bg-slate-900 text-slate-200">
                    {v.labelEn}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Spent By & Paid To */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Spent By
              </label>
              <input
                type="text"
                placeholder="e.g. Farhan, Rony, Sohel Rana"
                value={formData.spentBy || ''}
                onChange={(e) => setFormData({ ...formData, spentBy: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Paid To / Shop
              </label>
              <input
                type="text"
                placeholder="e.g. CNG Driver, Restaurant, Vendor"
                value={formData.paidTo || ''}
                onChange={(e) => setFormData({ ...formData, paidTo: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Voucher & Project Reference */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Voucher / Memo No
              </label>
              <input
                type="text"
                placeholder="e.g. V-2610-045"
                value={formData.voucherNo || ''}
                onChange={(e) => setFormData({ ...formData, voucherNo: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Project / Client Reference
              </label>
              <input
                type="text"
                placeholder="e.g. Daraz, Parliament, General"
                value={formData.projectRef || ''}
                onChange={(e) => setFormData({ ...formData, projectRef: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Modal Footer Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setIsCreateModalOpen(false)}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-600/20 transition active:scale-95"
            >
              Save Entry
            </button>
          </div>
        </form>
      </Modal>

      {/* 7. Modal: Edit Expense */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Expense Entry"
        size="lg"
      >
        <form onSubmit={handleSaveEdit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Date</label>
              <input
                type="date"
                required
                value={formData.date || ''}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Time</label>
              <input
                type="text"
                value={formData.time || ''}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value as ExpenseCategory })}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
            >
              {Object.values(EXPENSE_CATEGORIES_CONFIG).map((c) => (
                <option key={c.id} value={c.id} className="bg-slate-900 text-slate-200">
                  {c.labelEn}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Particulars / Description *</label>
            <input
              type="text"
              required
              value={formData.particulars || ''}
              onChange={(e) => setFormData({ ...formData, particulars: e.target.value })}
              className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-emerald-500 font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Amount (BDT) *</label>
              <input
                type="number"
                min="1"
                required
                value={formData.amount || ''}
                onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-base font-bold font-mono text-emerald-400 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Payment Method</label>
              <select
                value={formData.paymentMethod}
                onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value as PaymentMethod })}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
              >
                {Object.entries(PAYMENT_METHODS_CONFIG).map(([k, v]) => (
                  <option key={k} value={k} className="bg-slate-900 text-slate-200">
                    {v.labelEn}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Spent By</label>
              <input
                type="text"
                value={formData.spentBy || ''}
                onChange={(e) => setFormData({ ...formData, spentBy: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Paid To / Shop</label>
              <input
                type="text"
                value={formData.paidTo || ''}
                onChange={(e) => setFormData({ ...formData, paidTo: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setIsEditModalOpen(false)}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-600/20 active:scale-95"
            >
              Save Changes
            </button>
          </div>
        </form>
      </Modal>

      {/* 8. Modal: Daily Sheet Print Preview */}
      <Modal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        title="Print Daily Expense Sheet"
        size="xl"
      >
        <div className="space-y-4">
          <div className="flex justify-end gap-2 pb-2 border-b border-slate-800 no-print">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Sheet (A4)</span>
            </button>
          </div>

          {/* Printable Voucher Sheet */}
          <div className="bg-white text-black p-6 rounded-lg text-xs space-y-4 font-sans shadow-md border border-slate-200">
            <div className="text-center border-b pb-3">
              <h2 className="text-xl font-bold uppercase tracking-wide text-slate-900">Globo Tech</h2>
              <p className="text-[11px] text-slate-600">Enterprise IT &bull; Security &bull; Networking Solutions</p>
              <p className="text-[10px] text-slate-500">12/13 Motijheel C/A, Dhaka-1000 | Phone: 01622-152133</p>
              <h3 className="text-sm font-bold uppercase mt-2 bg-slate-100 py-1 inline-block px-4 rounded border">
                Daily Expense &amp; Cash Flow Voucher
              </h3>
            </div>

            <div className="flex justify-between items-center text-xs border-b pb-2">
              <div>
                <span>Date: </span>
                <strong className="font-mono">
                  {datePreset === 'CUSTOM' ? selectedCalendarDate : todayDateString}
                </strong>
              </div>
              <div>
                <span>Print Time: </span>
                <span>{new Date().toLocaleDateString('en-GB')} {new Date().toLocaleTimeString('en-US')}</span>
              </div>
            </div>

            {/* Table */}
            <table className="w-full text-left border-collapse border border-slate-300 text-xs">
              <thead>
                <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
                  <th className="p-2 border-r border-slate-300 w-10 text-center">SL</th>
                  <th className="p-2 border-r border-slate-300 w-28">Category</th>
                  <th className="p-2 border-r border-slate-300">Particulars (Description)</th>
                  <th className="p-2 border-r border-slate-300 w-24">Spent By</th>
                  <th className="p-2 border-r border-slate-300 w-24">Method</th>
                  <th className="p-2 text-right w-28">Amount</th>
                </tr>
              </thead>
              <tbody>
                {filteredEntries.map((item, idx) => (
                  <tr key={item.id} className="border-b border-slate-200">
                    <td className="p-2 text-center border-r border-slate-300 font-mono">{idx + 1}</td>
                    <td className="p-2 border-r border-slate-300 font-semibold">
                      {EXPENSE_CATEGORIES_CONFIG[item.category]?.labelEn || item.category}
                    </td>
                    <td className="p-2 border-r border-slate-300">{item.particulars}</td>
                    <td className="p-2 border-r border-slate-300">{item.spentBy}</td>
                    <td className="p-2 border-r border-slate-300 font-medium">
                      {PAYMENT_METHODS_CONFIG[item.paymentMethod]?.labelEn || item.paymentMethod}
                    </td>
                    <td className="p-2 text-right font-mono font-bold">
                      {item.type === 'CASH_IN' ? `+ ${formatBDT(item.amount)}` : formatBDT(item.amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-slate-100 font-bold text-slate-900 border-t-2 border-slate-400">
                  <td colSpan={5} className="p-2 text-right border-r border-slate-300">Total Expenses:</td>
                  <td className="p-2 text-right font-mono text-sm">{formatBDT(filteredListTotalExpense)}</td>
                </tr>
              </tfoot>
            </table>

            {/* Signature Block */}
            <div className="grid grid-cols-3 gap-8 pt-12 text-center text-xs">
              <div>
                <div className="border-t border-slate-400 pt-1 font-semibold">Prepared By</div>
              </div>
              <div>
                <div className="border-t border-slate-400 pt-1 font-semibold">Accountant</div>
              </div>
              <div>
                <div className="border-t border-slate-400 pt-1 font-semibold">Approved By</div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Mobile Sticky Floating Action Buttons for instant fast entry on smartphones */}
      <div className="lg:hidden fixed bottom-20 right-4 z-30 flex flex-col items-end gap-2.5 no-print pointer-events-none">
        <button
          type="button"
          onClick={() => handleOpenCreateModal('CASH_IN')}
          className="pointer-events-auto flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs font-bold shadow-2xl shadow-emerald-950/80 border border-emerald-400/40 transition-all backdrop-blur-sm"
          title="Record Cash In"
        >
          <ArrowDownRight className="w-3.5 h-3.5" />
          <span>+ Cash In</span>
        </button>
        <button
          type="button"
          onClick={() => handleOpenCreateModal('EXPENSE')}
          className="pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-full bg-rose-600 hover:bg-rose-500 active:scale-95 text-white text-sm font-bold shadow-2xl shadow-rose-950/80 border border-rose-400/40 transition-all backdrop-blur-sm animate-pulse hover:animate-none"
          title="Record Daily Expense"
        >
          <Plus className="w-5 h-5" />
          <span>+ Add Expense</span>
        </button>
      </div>
    </div>
  );
}
