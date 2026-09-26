'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Users,
  Search,
  Plus,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  AlertCircle,
  CheckCircle2,
  FileText,
  DollarSign,
  Building,
  Printer,
  ArrowDownLeft,
  ArrowUpRight,
  Receipt,
  FileSpreadsheet,
  Wallet,
  Clock,
  Eye,
  Filter
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { formatBDT, formatDate } from '@/lib/formatters';

export interface CustomerTransaction {
  id: string;
  date: string;
  type: 'INVOICE' | 'PAYMENT' | 'ADVANCE' | 'ADJUSTMENT';
  refNo: string;
  description: string;
  method?: 'BANK' | 'CASH' | 'CHEQUE' | 'BKASH';
  invoicedAmount: number; // Debit (increases due)
  paidAmount: number;     // Credit (reduces due / increases advance)
  balance: number;        // Running due (+ means customer owes, - means advance credit)
}

export interface Customer {
  id: string;
  name: string;
  company?: string;
  type: 'RETAIL' | 'WHOLESALE' | 'CORPORATE';
  phone: string;
  email?: string;
  address: string;
  binNumber?: string;
  creditLimit: number;
  totalInvoiced: number;
  totalPaid?: number;
  currentDues: number;      // Due owed by customer (if > 0)
  advanceCredit?: number;    // Advance credit held by customer (if > 0)
  paymentTerms: string;
  transactions?: CustomerTransaction[];
}

export const INITIAL_CUSTOMERS: Customer[] = [
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

export function CustomersView() {
  const [customers, setCustomers] = useState<Customer[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('globotech_erp_customers');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error(e);
        }
      }
    }
    return INITIAL_CUSTOMERS;
  });

  const [search, setSearch] = useState('');
  const [filterBalance, setFilterBalance] = useState<'ALL' | 'DUE' | 'CREDIT' | 'PAID'>('ALL');
  const [filterType, setFilterType] = useState('ALL');

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isCollectPaymentOpen, setIsCollectPaymentOpen] = useState(false);
  const [isAddBillOpen, setIsAddBillOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [isLedgerSheetOpen, setIsLedgerSheetOpen] = useState(false);

  // Forms
  const [paymentForm, setPaymentForm] = useState({
    customerId: '',
    amount: 10000,
    date: new Date().toISOString().split('T')[0],
    method: 'BANK' as CustomerTransaction['method'],
    refNo: '',
    description: ''
  });

  const [billForm, setBillForm] = useState({
    customerId: '',
    amount: 25000,
    date: new Date().toISOString().split('T')[0],
    refNo: '',
    description: ''
  });

  const [newCustomer, setNewCustomer] = useState({
    name: '',
    company: '',
    type: 'CORPORATE' as Customer['type'],
    phone: '',
    email: '',
    address: '',
    binNumber: '',
    creditLimit: 500000,
    paymentTerms: 'Net 30 Days'
  });

  // Save to localStorage whenever customers change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('globotech_erp_customers', JSON.stringify(customers));
    }
  }, [customers]);

  // Overall Financial Totals
  const totals = useMemo(() => {
    const totalDues = customers.reduce((acc, c) => acc + (c.currentDues || 0), 0);
    const totalCredit = customers.reduce((acc, c) => acc + (c.advanceCredit || 0), 0);
    const totalInvoiced = customers.reduce((acc, c) => acc + (c.totalInvoiced || 0), 0);
    const totalPaid = customers.reduce((acc, c) => acc + (c.totalPaid || 0), 0);
    const dueClientsCount = customers.filter((c) => (c.currentDues || 0) > 0).length;
    const creditClientsCount = customers.filter((c) => (c.advanceCredit || 0) > 0).length;

    return {
      totalDues,
      totalCredit,
      totalInvoiced,
      totalPaid,
      dueClientsCount,
      creditClientsCount
    };
  }, [customers]);

  // Filtered list
  const filteredCustomers = useMemo(() => {
    return customers.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        (c.company && c.company.toLowerCase().includes(search.toLowerCase())) ||
        c.phone.includes(search) ||
        (c.binNumber && c.binNumber.toLowerCase().includes(search.toLowerCase()));

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
  }, [customers, search, filterType, filterBalance]);

  // Handle Record Payment (টাকা জমা / কালেকশন এন্ট্রি)
  const handleRecordPayment = (e: React.FormEvent) => {
    e.preventDefault();
    const customer = customers.find((c) => c.id === paymentForm.customerId);
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

    const newTx: CustomerTransaction = {
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

    const updatedCustomer: Customer = {
      ...customer,
      totalPaid: (customer.totalPaid || 0) + payAmount,
      currentDues: newDue,
      advanceCredit: newCredit,
      transactions: [...(customer.transactions || []), newTx]
    };

    const updatedList = customers.map((c) => (c.id === updatedCustomer.id ? updatedCustomer : c));
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
  const handleAddBill = (e: React.FormEvent) => {
    e.preventDefault();
    const customer = customers.find((c) => c.id === billForm.customerId);
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

    const newTx: CustomerTransaction = {
      id: `tx-${Date.now()}`,
      date: billForm.date || new Date().toISOString().split('T')[0],
      type: 'INVOICE',
      refNo: billForm.refNo || `INV-${Date.now().toString().slice(-4)}`,
      description: billForm.description || 'Goods / CCTV Service Billed',
      invoicedAmount: billAmt,
      paidAmount: 0,
      balance: newDue > 0 ? newDue : -newCredit
    };

    const updatedCustomer: Customer = {
      ...customer,
      totalInvoiced: (customer.totalInvoiced || 0) + billAmt,
      currentDues: newDue,
      advanceCredit: newCredit,
      transactions: [...(customer.transactions || []), newTx]
    };

    const updatedList = customers.map((c) => (c.id === updatedCustomer.id ? updatedCustomer : c));
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
  const handleAddCustomer = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Customer = {
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

    setCustomers([created, ...customers]);
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

  return (
    <div className="space-y-6">
      {/* Top Header & Fast Entry Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl no-print">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Wallet className="w-4 h-4" />
            </div>
            <h1 className="text-lg font-bold text-slate-100">
              Client Due, Advance Credit & Ledger Statement
            </h1>
          </div>
          <p className="text-xs text-slate-400">
            Track customer receivables, overdue balances, advance payments, and instant payment receipt entries.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => {
              setPaymentForm((prev) => ({ ...prev, customerId: customers[0]?.id || '' }));
              setIsCollectPaymentOpen(true);
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-lg shadow-emerald-600/20 active:scale-95"
            title="Record payment received from client"
          >
            <ArrowDownLeft className="w-4 h-4" />
            <span>+ Record Payment (টাকা জমা)</span>
          </button>

          <button
            onClick={() => {
              setBillForm((prev) => ({ ...prev, customerId: customers[0]?.id || '' }));
              setIsAddBillOpen(true);
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border border-amber-500/30 font-semibold text-xs transition shadow-sm"
            title="Add new bill or invoice due to customer"
          >
            <Receipt className="w-4 h-4" />
            <span>+ Add Bill / Due</span>
          </button>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-lg shadow-blue-600/20 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>+ New Client</span>
          </button>
        </div>
      </div>

      {/* KPI Cards: Due vs Advance Credit Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 no-print">
        {/* Total Outstanding Dues */}
        <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider block">
              Total Dues (মোট বকেয়া পাওনা)
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300">
              {totals.dueClientsCount} Clients
            </span>
          </div>
          <p className="text-2xl font-black text-rose-400 font-mono mt-1">
            {formatBDT(totals.totalDues)}
          </p>
          <span className="text-[11px] text-rose-300/70 mt-0.5 block">
            Money to be collected from clients
          </span>
        </div>

        {/* Total Advance Credit Held */}
        <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
              Advance Credits (অগ্রিম জমা)
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
              {totals.creditClientsCount} Clients
            </span>
          </div>
          <p className="text-2xl font-black text-emerald-400 font-mono mt-1">
            {formatBDT(totals.totalCredit)}
          </p>
          <span className="text-[11px] text-emerald-300/70 mt-0.5 block">
            Client advance deposits for upcoming deliveries
          </span>
        </div>

        {/* Total Collected */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-md">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
            Total Collections (মোট আদায়)
          </span>
          <p className="text-xl font-black text-slate-100 font-mono mt-1">
            {formatBDT(totals.totalPaid)}
          </p>
          <span className="text-[11px] text-slate-500 mt-0.5 block">
            Lifetime received from all clients
          </span>
        </div>

        {/* Total Invoiced */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-md">
          <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider block">
            Total Lifetime Billed
          </span>
          <p className="text-xl font-black text-blue-400 font-mono mt-1">
            {formatBDT(totals.totalInvoiced)}
          </p>
          <span className="text-[11px] text-slate-500 mt-0.5 block">
            Gross invoices across {customers.length} clients
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-slate-900 border border-slate-800 rounded-xl no-print">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Client Name, Company, Phone, BIN..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Quick Due / Credit Status Filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setFilterBalance('ALL')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                filterBalance === 'ALL'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Clients ({customers.length})
            </button>
            <button
              onClick={() => setFilterBalance('DUE')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition flex items-center gap-1 ${
                filterBalance === 'DUE'
                  ? 'bg-rose-600 text-white shadow'
                  : 'text-rose-400 hover:text-rose-200'
              }`}
            >
              <span>With Dues (বকেয়া)</span>
              <span className="px-1.5 py-0.2 bg-rose-950 text-rose-300 rounded-full text-[10px]">
                {totals.dueClientsCount}
              </span>
            </button>
            <button
              onClick={() => setFilterBalance('CREDIT')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition flex items-center gap-1 ${
                filterBalance === 'CREDIT'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-emerald-400 hover:text-emerald-200'
              }`}
            >
              <span>In Advance (অগ্রিম)</span>
              <span className="px-1.5 py-0.2 bg-emerald-950 text-emerald-300 rounded-full text-[10px]">
                {totals.creditClientsCount}
              </span>
            </button>
            <button
              onClick={() => setFilterBalance('PAID')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                filterBalance === 'PAID'
                  ? 'bg-slate-700 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Settled / Zero
            </button>
          </div>
        </div>
      </div>

      {/* Customer Directory & Due/Credit Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl no-print">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300 min-w-[850px] border-collapse">
            <thead>
              <tr className="bg-slate-950 text-slate-400 uppercase text-[10px] font-bold tracking-wider border-b border-slate-800">
                <th className="py-3 px-4">Client / Company Name</th>
                <th className="py-3 px-4">Contact & BIN</th>
                <th className="py-3 px-3 text-right">Total Invoiced</th>
                <th className="py-3 px-3 text-right">Total Paid</th>
                <th className="py-3 px-4 text-right text-rose-400">Current Due (বকেয়া)</th>
                <th className="py-3 px-4 text-right text-emerald-400">Advance Credit (অগ্রিম)</th>
                <th className="py-3 px-3 text-center">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-slate-500 italic">
                    No clients found matching the selected filter.
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((c) => {
                  const hasDue = (c.currentDues || 0) > 0;
                  const hasCredit = (c.advanceCredit || 0) > 0;

                  return (
                    <tr key={c.id} className="hover:bg-slate-800/40 transition">
                      <td className="py-3 px-4">
                        <span className="font-bold text-slate-100 text-sm block leading-snug">
                          {c.company || c.name}
                        </span>
                        {c.company && (
                          <span className="text-[11px] text-slate-400 block">Attn: {c.name}</span>
                        )}
                        <span className="text-[10px] text-slate-500">{c.address}</span>
                      </td>

                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1.5 text-slate-300">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          <span>{c.phone}</span>
                        </div>
                        {c.binNumber ? (
                          <div className="font-mono text-[10px] text-blue-400 mt-0.5">
                            {c.binNumber}
                          </div>
                        ) : (
                          <div className="text-[10px] text-slate-500">No BIN</div>
                        )}
                      </td>

                      <td className="py-3 px-3 text-right font-mono font-medium text-slate-300">
                        {formatBDT(c.totalInvoiced || 0)}
                      </td>

                      <td className="py-3 px-3 text-right font-mono font-medium text-emerald-300">
                        {formatBDT(c.totalPaid || 0)}
                      </td>

                      {/* Current Due Column */}
                      <td className="py-3 px-4 text-right font-mono">
                        {hasDue ? (
                          <div className="inline-block px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 font-bold text-xs">
                            {formatBDT(c.currentDues)}
                          </div>
                        ) : (
                          <span className="text-slate-500 text-xs">৳ 0.00</span>
                        )}
                      </td>

                      {/* Advance Credit Column */}
                      <td className="py-3 px-4 text-right font-mono">
                        {hasCredit ? (
                          <div className="inline-block px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs">
                            +{formatBDT(c.advanceCredit)}
                          </div>
                        ) : (
                          <span className="text-slate-500 text-xs">৳ 0.00</span>
                        )}
                      </td>

                      <td className="py-3 px-3 text-center">
                        {hasDue ? (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300">
                            PAYMENT DUE
                          </span>
                        ) : hasCredit ? (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300">
                            IN ADVANCE
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-400">
                            CLEARED
                          </span>
                        )}
                      </td>

                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* Collect Money Button */}
                          <button
                            onClick={() => {
                              setPaymentForm({
                                customerId: c.id,
                                amount: c.currentDues > 0 ? c.currentDues : 10000,
                                date: new Date().toISOString().split('T')[0],
                                method: 'BANK',
                                refNo: '',
                                description: `Payment against ${c.company || c.name}`
                              });
                              setIsCollectPaymentOpen(true);
                            }}
                            className="px-2.5 py-1 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-semibold text-xs flex items-center gap-1 transition"
                            title="Collect payment / deposit from this client"
                          >
                            <ArrowDownLeft className="w-3 h-3" />
                            <span>Collect</span>
                          </button>

                          {/* View Statement & Ledger */}
                          <button
                            onClick={() => {
                              setSelectedCustomer(c);
                              setIsLedgerSheetOpen(true);
                            }}
                            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-blue-400 border border-slate-700 font-semibold text-xs flex items-center gap-1 transition"
                            title="View complete account statement & transaction ledger"
                          >
                            <Eye className="w-3 h-3" />
                            <span>Ledger Sheet</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
            <tfoot>
              <tr className="bg-slate-950 font-bold border-t-2 border-slate-700 text-slate-100">
                <td colSpan={2} className="py-3.5 px-4 uppercase text-xs">Total Across All Filtered Clients:</td>
                <td className="py-3.5 px-3 text-right font-mono">{formatBDT(totals.totalInvoiced)}</td>
                <td className="py-3.5 px-3 text-right font-mono text-emerald-400">{formatBDT(totals.totalPaid)}</td>
                <td className="py-3.5 px-4 text-right font-mono text-rose-400 text-sm font-black">{formatBDT(totals.totalDues)}</td>
                <td className="py-3.5 px-4 text-right font-mono text-emerald-400 text-sm font-black">+{formatBDT(totals.totalCredit)}</td>
                <td colSpan={2}></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* ========================================================
          MODAL: RECORD PAYMENT / COLLECT DUE (টাকা জমা)
          ======================================================== */}
      {isCollectPaymentOpen && (
        <Modal
          isOpen={isCollectPaymentOpen}
          onClose={() => setIsCollectPaymentOpen(false)}
          title="Record Client Payment (টাকা জমা / কালেকশন এন্ট্রি)"
        >
          <form onSubmit={handleRecordPayment} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Select Client / Corporate Customer *</label>
              <select
                required
                value={paymentForm.customerId}
                onChange={(e) => {
                  const cust = customers.find((c) => c.id === e.target.value);
                  setPaymentForm({
                    ...paymentForm,
                    customerId: e.target.value,
                    amount: cust && cust.currentDues > 0 ? cust.currentDues : paymentForm.amount
                  });
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
              >
                <option value="">-- Choose Client --</option>
                {customers.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.company || c.name} (Due: ৳{c.currentDues.toLocaleString('en-IN')})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Amount Received (৳) *</label>
                <input
                  type="number"
                  required
                  min="1"
                  step="any"
                  value={paymentForm.amount}
                  onChange={(e) => setPaymentForm({ ...paymentForm, amount: Number(e.target.value) })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono font-bold text-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Payment Method</label>
                <select
                  value={paymentForm.method}
                  onChange={(e) => setPaymentForm({ ...paymentForm, method: e.target.value as any })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                >
                  <option value="BANK">Bank Transfer / BEFTN / RTGS</option>
                  <option value="CHEQUE">Bank Cheque / Pay Order</option>
                  <option value="CASH">Cash Payment</option>
                  <option value="BKASH">bKash / Nagad / MFS</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Reference / Cheque No / Trx ID</label>
                <input
                  type="text"
                  placeholder="e.g. CHQ-99281 / BEFTN-1102"
                  value={paymentForm.refNo}
                  onChange={(e) => setPaymentForm({ ...paymentForm, refNo: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Payment Date</label>
                <input
                  type="date"
                  value={paymentForm.date}
                  onChange={(e) => setPaymentForm({ ...paymentForm, date: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Payment Note / Remarks</label>
              <input
                type="text"
                placeholder="e.g. Advance for CCTV installation or settlement against bill"
                value={paymentForm.description}
                onChange={(e) => setPaymentForm({ ...paymentForm, description: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-emerald-300 text-[11px] leading-relaxed">
              ⚡ <strong>Instant Ledger Settlement:</strong> This entry will automatically deduct <strong>{formatBDT(paymentForm.amount)}</strong> from client&rsquo;s outstanding dues. Any excess amount will be safely credited as advance balance.
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsCollectPaymentOpen(false)}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-lg shadow-emerald-600/30 transition"
              >
                Save Payment Entry
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================
          MODAL: ADD BILL / DUE ENTRY (নতুন বিল বা বকেয়া এন্ট্রি)
          ======================================================== */}
      {isAddBillOpen && (
        <Modal
          isOpen={isAddBillOpen}
          onClose={() => setIsAddBillOpen(false)}
          title="Add Client Bill / Due Entry (নতুন ইনভয়েস বা বকেয়া)"
        >
          <form onSubmit={handleAddBill} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Client *</label>
              <select
                required
                value={billForm.customerId}
                onChange={(e) => setBillForm({ ...billForm, customerId: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
              >
                <option value="">-- Choose Client --</option>
                {customers.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.company || c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Bill / Invoice Amount (৳) *</label>
                <input
                  type="number"
                  required
                  min="1"
                  step="any"
                  value={billForm.amount}
                  onChange={(e) => setBillForm({ ...billForm, amount: Number(e.target.value) })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono font-bold text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Invoice / Bill Ref No *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. GT/26109 or INV-2026-101"
                  value={billForm.refNo}
                  onChange={(e) => setBillForm({ ...billForm, refNo: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Bill Date</label>
                <input
                  type="date"
                  value={billForm.date}
                  onChange={(e) => setBillForm({ ...billForm, date: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Particulars / Scope</label>
                <input
                  type="text"
                  placeholder="e.g. Supply of CCTV cables and installation"
                  value={billForm.description}
                  onChange={(e) => setBillForm({ ...billForm, description: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAddBillOpen(false)}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg shadow transition"
              >
                Add Bill Due
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================
          MODAL: CUSTOMER ACCOUNT STATEMENT / LEDGER SHEET (খতিয়ান শিট)
          ======================================================== */}
      {isLedgerSheetOpen && selectedCustomer && (
        <Modal
          isOpen={isLedgerSheetOpen}
          onClose={() => setIsLedgerSheetOpen(false)}
          title={`Statement of Account: ${selectedCustomer.company || selectedCustomer.name}`}
          size="xl"
        >
          <div className="space-y-4">
            {/* Top Print Control */}
            <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-3 rounded-xl no-print">
              <span className="text-xs text-slate-300">
                Official statement of account detailing lifetime invoices, payments, and outstanding due/credit balance.
              </span>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold shadow transition"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Statement (A4)</span>
              </button>
            </div>

            {/* Printable A4 White Sheet */}
            <div className="overflow-x-auto flex justify-center pb-4">
              <div
                id="printable-ledger-sheet"
                style={{
                  width: '210mm',
                  minHeight: '270mm',
                  boxSizing: 'border-box',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  padding: '16mm 18mm',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif'
                }}
                className="shadow-2xl rounded-sm printable-area print:shadow-none print:w-full print:p-0 print:m-0"
              >
                {/* 1. Brand Header */}
                <table style={{ width: '100%', borderCollapse: 'collapse', borderBottom: '2px solid #0f172a', paddingBottom: '8px', marginBottom: '12px' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '60%', verticalAlign: 'middle' }}>
                        <h1 style={{ fontSize: '24px', fontWeight: 900, color: '#008fd5', margin: 0, lineHeight: 1 }}>
                          Globo Tech
                        </h1>
                        <p style={{ fontSize: '11px', color: '#334155', fontWeight: 600, margin: '2px 0 0 0' }}>
                          Enterprise Supply & Engineering Solutions
                        </p>
                        <p style={{ fontSize: '9.5px', color: '#64748b', margin: '2px 0 0 0' }}>
                          Rahman Chamber (2nd Floor), 12/13 Motijheel C/A, Dhaka-1000 &bull; Phone: +88 01622-152133
                        </p>
                      </td>
                      <td style={{ width: '40%', textAlign: 'right', verticalAlign: 'middle' }}>
                        <div style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '6px', textAlign: 'right' }}>
                          <span style={{ fontSize: '12px', fontWeight: 900, color: '#0f172a', display: 'block', textTransform: 'uppercase' }}>
                            STATEMENT OF ACCOUNT
                          </span>
                          <span style={{ fontSize: '10px', color: '#475569' }}>
                            Date: {formatDate(new Date().toISOString())}
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* 2. Client Details & Balance Summary Box */}
                <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', marginBottom: '14px', fontSize: '11px' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '55%', padding: '8px 12px', borderRight: '1px solid #e2e8f0', verticalAlign: 'top' }}>
                        <div style={{ fontSize: '9px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Client Information:</div>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>
                          {selectedCustomer.company || selectedCustomer.name}
                        </div>
                        {selectedCustomer.company && (
                          <div style={{ color: '#334155', marginTop: '2px' }}>Attn: {selectedCustomer.name}</div>
                        )}
                        <div style={{ color: '#475569', marginTop: '2px' }}>{selectedCustomer.address}</div>
                        <div style={{ color: '#475569', marginTop: '2px' }}>Phone: {selectedCustomer.phone}</div>
                        {selectedCustomer.binNumber && (
                          <div style={{ fontFamily: 'monospace', color: '#0f172a', marginTop: '2px', fontWeight: 600 }}>
                            {selectedCustomer.binNumber}
                          </div>
                        )}
                      </td>

                      <td style={{ width: '45%', padding: '8px 12px', verticalAlign: 'top' }}>
                        <div style={{ fontSize: '9px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Financial Balance Summary:</div>
                        <table style={{ width: '100%', fontSize: '11px', marginTop: '4px' }}>
                          <tbody>
                            <tr>
                              <td style={{ color: '#475569' }}>Total Billed:</td>
                              <td style={{ textAlign: 'right', fontFamily: 'monospace', fontWeight: 700 }}>{formatBDT(selectedCustomer.totalInvoiced || 0)}</td>
                            </tr>
                            <tr>
                              <td style={{ color: '#475569' }}>Total Paid:</td>
                              <td style={{ textAlign: 'right', fontFamily: 'monospace', fontWeight: 700, color: '#047857' }}>{formatBDT(selectedCustomer.totalPaid || 0)}</td>
                            </tr>
                            <tr style={{ borderTop: '1.5px solid #0f172a' }}>
                              <td style={{ paddingTop: '4px', fontWeight: 800, color: '#0f172a' }}>
                                {(selectedCustomer.currentDues || 0) > 0 ? 'CURRENT DUE (বকেয়া):' : 'ADVANCE CREDIT:'}
                              </td>
                              <td style={{ paddingTop: '4px', textAlign: 'right', fontFamily: 'monospace', fontSize: '13px', fontWeight: 900, color: (selectedCustomer.currentDues || 0) > 0 ? '#b91c1c' : '#047857' }}>
                                {(selectedCustomer.currentDues || 0) > 0 ? formatBDT(selectedCustomer.currentDues) : `+${formatBDT(selectedCustomer.advanceCredit || 0)}`}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* 3. Transaction Ledger Table */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Transaction History & Running Ledger
                  </div>
                  <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #000', fontSize: '10px' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f1f5f9' }}>
                        <th style={{ border: '1px solid #000', padding: '5px 4px', textAlign: 'center', width: '30px' }}>Sl</th>
                        <th style={{ border: '1px solid #000', padding: '5px 6px', textAlign: 'center', width: '70px' }}>Date</th>
                        <th style={{ border: '1px solid #000', padding: '5px 6px', textAlign: 'left', width: '90px' }}>Ref / Trx #</th>
                        <th style={{ border: '1px solid #000', padding: '5px 6px', textAlign: 'left' }}>Description / Narrative</th>
                        <th style={{ border: '1px solid #000', padding: '5px 6px', textAlign: 'right', width: '95px' }}>Billed (৳)</th>
                        <th style={{ border: '1px solid #000', padding: '5px 6px', textAlign: 'right', width: '95px' }}>Received (৳)</th>
                        <th style={{ border: '1px solid #000', padding: '5px 6px', textAlign: 'right', width: '105px' }}>Balance (৳)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(!selectedCustomer.transactions || selectedCustomer.transactions.length === 0) ? (
                        <tr>
                          <td colSpan={7} style={{ border: '1px solid #000', padding: '10px', textAlign: 'center', color: '#64748b' }}>
                            No transaction records found.
                          </td>
                        </tr>
                      ) : (
                        selectedCustomer.transactions.map((tx, idx) => (
                          <tr key={tx.id}>
                            <td style={{ border: '1px solid #000', padding: '5px 4px', textAlign: 'center' }}>{idx + 1}</td>
                            <td style={{ border: '1px solid #000', padding: '5px 6px', textAlign: 'center', fontFamily: 'monospace' }}>{tx.date}</td>
                            <td style={{ border: '1px solid #000', padding: '5px 6px', fontFamily: 'monospace', fontWeight: 600 }}>{tx.refNo}</td>
                            <td style={{ border: '1px solid #000', padding: '5px 6px' }}>{tx.description}</td>
                            <td style={{ border: '1px solid #000', padding: '5px 6px', textAlign: 'right', fontFamily: 'monospace' }}>
                              {tx.invoicedAmount > 0 ? formatBDT(tx.invoicedAmount) : '-'}
                            </td>
                            <td style={{ border: '1px solid #000', padding: '5px 6px', textAlign: 'right', fontFamily: 'monospace', fontWeight: 600, color: tx.paidAmount > 0 ? '#047857' : '#000' }}>
                              {tx.paidAmount > 0 ? formatBDT(tx.paidAmount) : '-'}
                            </td>
                            <td style={{ border: '1px solid #000', padding: '5px 6px', textAlign: 'right', fontFamily: 'monospace', fontWeight: 'bold', color: tx.balance > 0 ? '#b91c1c' : '#047857' }}>
                              {tx.balance > 0 ? formatBDT(tx.balance) : `+${formatBDT(Math.abs(tx.balance))}`}
                            </td>
                          </tr>
                        ))
                      )}
                      <tr style={{ backgroundColor: '#f8fafc', fontWeight: 800 }}>
                        <td colSpan={4} style={{ border: '1px solid #000', padding: '6px', textAlign: 'right' }}>Total Lifetime Summary:</td>
                        <td style={{ border: '1px solid #000', padding: '6px', textAlign: 'right', fontFamily: 'monospace' }}>{formatBDT(selectedCustomer.totalInvoiced || 0)}</td>
                        <td style={{ border: '1px solid #000', padding: '6px', textAlign: 'right', fontFamily: 'monospace', color: '#047857' }}>{formatBDT(selectedCustomer.totalPaid || 0)}</td>
                        <td style={{ border: '1px solid #000', padding: '6px', textAlign: 'right', fontFamily: 'monospace', fontSize: '11px', color: (selectedCustomer.currentDues || 0) > 0 ? '#b91c1c' : '#047857' }}>
                          {(selectedCustomer.currentDues || 0) > 0 ? formatBDT(selectedCustomer.currentDues) : `+${formatBDT(selectedCustomer.advanceCredit || 0)}`}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 4. Bank Account Details for Settlement */}
                <div style={{ padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', backgroundColor: '#f8fafc', fontSize: '10px', color: '#334155', marginBottom: '24px' }}>
                  <strong>Payment Remittance Details:</strong>
                  <div style={{ marginTop: '2px' }}>
                    Bank: <strong>BRAC Bank PLC</strong> &bull; Account Name: <strong>Globo Tech</strong> &bull; Account No: <strong>2051923010001</strong> &bull; Branch: <strong>Bijoynagar</strong>
                  </div>
                </div>

                {/* 5. Sign-off Lines */}
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '30px' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '50%', textAlign: 'center', verticalAlign: 'bottom' }}>
                        <div style={{ width: '180px', borderBottom: '1.5px solid #000', margin: '0 auto 4px auto' }}></div>
                        <div style={{ fontSize: '11px', fontWeight: 700 }}>Prepared By (Accounts)</div>
                        <div style={{ fontSize: '9.5px', color: '#64748b' }}>Globo Tech</div>
                      </td>
                      <td style={{ width: '50%', textAlign: 'center', verticalAlign: 'bottom' }}>
                        <div style={{ width: '180px', borderBottom: '1.5px solid #000', margin: '0 auto 4px auto' }}></div>
                        <div style={{ fontSize: '11px', fontWeight: 700 }}>Customer Acknowledgement</div>
                        <div style={{ fontSize: '9.5px', color: '#64748b' }}>{selectedCustomer.company || selectedCustomer.name}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* ========================================================
          MODAL: ADD NEW CUSTOMER
          ======================================================== */}
      {isAddModalOpen && (
        <Modal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          title="Create New Customer / Corporate Account"
          size="lg"
        >
          <form onSubmit={handleAddCustomer} className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Company / Organization Name</label>
                <input
                  type="text"
                  placeholder="e.g. Beximco IT Division"
                  value={newCustomer.company}
                  onChange={(e) => setNewCustomer({ ...newCustomer, company: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Contact Person *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Md. Ashraful Alam"
                  value={newCustomer.name}
                  onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Account Type</label>
                <select
                  value={newCustomer.type}
                  onChange={(e) => setNewCustomer({ ...newCustomer, type: e.target.value as any })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                >
                  <option value="CORPORATE">Corporate / Project</option>
                  <option value="WHOLESALE">Wholesale Dealer</option>
                  <option value="RETAIL">Retail / Walk-in</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Phone Number</label>
                <input
                  type="text"
                  placeholder="+880 1700-000000"
                  value={newCustomer.phone}
                  onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Email</label>
                <input
                  type="email"
                  placeholder="accounts@company.com"
                  value={newCustomer.email}
                  onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">VAT BIN Number</label>
                <input
                  type="text"
                  placeholder="BIN-XXXXXXXXX-XXXX"
                  value={newCustomer.binNumber}
                  onChange={(e) => setNewCustomer({ ...newCustomer, binNumber: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Credit Limit (৳)</label>
                <input
                  type="number"
                  min="0"
                  step="50000"
                  value={newCustomer.creditLimit}
                  onChange={(e) => setNewCustomer({ ...newCustomer, creditLimit: Number(e.target.value) })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Billing & Delivery Address</label>
              <textarea
                rows={2}
                placeholder="Full delivery address, floor, road, city..."
                value={newCustomer.address}
                onChange={(e) => setNewCustomer({ ...newCustomer, address: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg shadow-blue-600/30 transition"
              >
                Save Customer
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
