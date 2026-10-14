/**
 * Centralized Daily Expense, Petty Cash & Cash Flow Storage Engine
 * Handles:
 * - Tracking where and for what purpose money was spent (Conveyance, Food, Labor, Courier, Utilities, etc.)
 * - Daily total cost calculation and specific date lookups
 * - Cash In (collection / bank withdrawal) vs Cash Out (expenses)
 * - Real-time drawer petty cash balance & category breakdown
 */
import { markLocalDataChanged } from '@/lib/erpAutoSync';

export type ExpenseCategory =
  | 'CONVEYANCE'       // যাতায়াত ও সাইট ডেলিভারি (CNG, Fuel, Rickshaw, Transport)
  | 'FOOD'             // আপ্যায়ন, চা-নাস্তা ও দুপুরের খাবার (Meals, Snacks, Refreshments)
  | 'LABOR'            // টেকনিশিয়ান মজুরি ও লেবার হাজিরা (Technician, Coolie, Daily Wage)
  | 'COURIER'          // কুরিয়ার ও পার্সেল চার্জ (Sundarban, Pathao, Redx, SA Paribahan)
  | 'SITE_MATERIALS'   // সাইট ইন্সটলেশন খুচরা মালামাল (Connectors, Screws, Tape, Minor hardware)
  | 'OFFICE_RENT'      // অফিস ও গুদাম ভাড়া (Rent & Service Charges)
  | 'UTILITIES'        // বিদ্যুৎ, ইন্টারনেট, পানি ও গ্যাস বিল (Internet, Electricity, Water)
  | 'STATIONERY'       // প্রিন্টিং, স্টেশনারি ও পেপার (Paper, Toner, File folders)
  | 'REPAIR'           // টুলস ও হার্ডওয়্যার মেরামত (Tools maintenance, Servicing)
  | 'BANK_CHARGES'     // ব্যাংক চার্জ ও অনলাইন ট্রানজ্যাকশন ফি (Bank fees, bKash charge)
  | 'MISC';            // অন্যান্য বিবিধ খরচ (General miscellaneous)

export type PaymentMethod =
  | 'PETTY_CASH'       // ড্রয়ার পেটি ক্যাশ (হাতের নগদ)
  | 'BRAC_BANK'        // Brac Bank (A/C: 2051923010001)
  | 'BKASH'            // bKash (01622-152133 / Merchant)
  | 'NAGAD'            // Nagad
  | 'CITY_BANK'        // City Bank Ltd
  | 'OTHER';           // অন্যান্য

export type TransactionType = 'EXPENSE' | 'CASH_IN';

export interface ExpenseEntry {
  id: string;
  date: string;               // YYYY-MM-DD (e.g. "2026-10-14")
  time: string;               // e.g. "03:45 PM"
  type: TransactionType;      // 'EXPENSE' (Cash Out) or 'CASH_IN' (Cash Inflow)
  category: ExpenseCategory;
  particulars: string;        // কী বাবদ খরচ / বিবরণ (Detailed Purpose)
  amount: number;             // Amount in BDT (৳)
  paymentMethod: PaymentMethod;
  spentBy: string;            // কে খরচ করল (Employee / Person)
  paidTo?: string;            // কাকে দেওয়া হলো (Vendor / Shop / Person)
  voucherNo?: string;         // ভাউচার / ক্যাশ মেমো নং
  projectRef?: string;        // সংশ্লিষ্ট প্রজেক্ট / ক্লায়েন্ট (Optional)
  notes?: string;
  receiptAttachment?: string; // রসিদ ছবি (Optional DataURL)
  createdAt: string;
}

export interface CategoryMeta {
  id: ExpenseCategory;
  labelEn: string;
  labelBn: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
}

export const EXPENSE_CATEGORIES_CONFIG: Record<ExpenseCategory, CategoryMeta> = {
  CONVEYANCE: {
    id: 'CONVEYANCE',
    labelEn: 'Conveyance & Transport',
    labelBn: 'যাতায়াত ও সাইট ডেলিভারি',
    color: '#0284c7',
    badgeBg: 'bg-sky-500/10',
    badgeText: 'text-sky-400',
    badgeBorder: 'border-sky-500/30'
  },
  FOOD: {
    id: 'FOOD',
    labelEn: 'Food & Refreshments',
    labelBn: 'আপ্যায়ন, চা-নাস্তা ও খাবার',
    color: '#ea580c',
    badgeBg: 'bg-orange-500/10',
    badgeText: 'text-orange-400',
    badgeBorder: 'border-orange-500/30'
  },
  LABOR: {
    id: 'LABOR',
    labelEn: 'Labor & Technician Wage',
    labelBn: 'টেকনিশিয়ান হাজিরা ও লেবার',
    color: '#8b5cf6',
    badgeBg: 'bg-purple-500/10',
    badgeText: 'text-purple-400',
    badgeBorder: 'border-purple-500/30'
  },
  COURIER: {
    id: 'COURIER',
    labelEn: 'Courier & Parcel',
    labelBn: 'কুরিয়ার ও পার্সেল চার্জ',
    color: '#06b6d4',
    badgeBg: 'bg-cyan-500/10',
    badgeText: 'text-cyan-400',
    badgeBorder: 'border-cyan-500/30'
  },
  SITE_MATERIALS: {
    id: 'SITE_MATERIALS',
    labelEn: 'Site Materials & Hardware',
    labelBn: 'সাইট ইন্সটলেশন মালামাল',
    color: '#10b981',
    badgeBg: 'bg-emerald-500/10',
    badgeText: 'text-emerald-400',
    badgeBorder: 'border-emerald-500/30'
  },
  OFFICE_RENT: {
    id: 'OFFICE_RENT',
    labelEn: 'Office & Warehouse Rent',
    labelBn: 'অফিস ও গুদাম ভাড়া',
    color: '#f59e0b',
    badgeBg: 'bg-amber-500/10',
    badgeText: 'text-amber-400',
    badgeBorder: 'border-amber-500/30'
  },
  UTILITIES: {
    id: 'UTILITIES',
    labelEn: 'Utilities & Internet',
    labelBn: 'বিদ্যুৎ, ইন্টারনেট ও বিল',
    color: '#3b82f6',
    badgeBg: 'bg-blue-500/10',
    badgeText: 'text-blue-400',
    badgeBorder: 'border-blue-500/30'
  },
  STATIONERY: {
    id: 'STATIONERY',
    labelEn: 'Stationery & Printing',
    labelBn: 'প্রিন্টিং ও স্টেশনারি',
    color: '#ec4899',
    badgeBg: 'bg-pink-500/10',
    badgeText: 'text-pink-400',
    badgeBorder: 'border-pink-500/30'
  },
  REPAIR: {
    id: 'REPAIR',
    labelEn: 'Repair & Servicing',
    labelBn: 'মেরামত ও সার্ভিসিং',
    color: '#eab308',
    badgeBg: 'bg-yellow-500/10',
    badgeText: 'text-yellow-400',
    badgeBorder: 'border-yellow-500/30'
  },
  BANK_CHARGES: {
    id: 'BANK_CHARGES',
    labelEn: 'Bank & Payment Fees',
    labelBn: 'ব্যাংক চার্জ ও ফি',
    color: '#64748b',
    badgeBg: 'bg-slate-500/10',
    badgeText: 'text-slate-400',
    badgeBorder: 'border-slate-500/30'
  },
  MISC: {
    id: 'MISC',
    labelEn: 'Miscellaneous / Other',
    labelBn: 'অন্যান্য বিবিধ খরচ',
    color: '#a855f7',
    badgeBg: 'bg-violet-500/10',
    badgeText: 'text-violet-400',
    badgeBorder: 'border-violet-500/30'
  }
};

export const PAYMENT_METHODS_CONFIG: Record<PaymentMethod, { labelEn: string; labelBn: string; badge: string }> = {
  PETTY_CASH: {
    labelEn: 'Drawer Petty Cash',
    labelBn: 'হাতের নগদ (ড্রয়ার)',
    badge: 'bg-emerald-950/80 text-emerald-300 border-emerald-800'
  },
  BRAC_BANK: {
    labelEn: 'Brac Bank (2051923010001)',
    labelBn: 'ব্র্যাক ব্যাংক',
    badge: 'bg-blue-950/80 text-blue-300 border-blue-800'
  },
  BKASH: {
    labelEn: 'bKash Wallet',
    labelBn: 'বিকাশ (bKash)',
    badge: 'bg-pink-950/80 text-pink-300 border-pink-800'
  },
  NAGAD: {
    labelEn: 'Nagad Wallet',
    labelBn: 'নগদ (Nagad)',
    badge: 'bg-orange-950/80 text-orange-300 border-orange-800'
  },
  CITY_BANK: {
    labelEn: 'City Bank',
    labelBn: 'সিটি ব্যাংক',
    badge: 'bg-sky-950/80 text-sky-300 border-sky-800'
  },
  OTHER: {
    labelEn: 'Other Account',
    labelBn: 'অন্যান্য অ্যাকাউন্ট',
    badge: 'bg-slate-800 text-slate-300 border-slate-700'
  }
};

export const EXPENSES_STORAGE_KEY = 'globotech_erp_daily_expenses';

// Real-world sample initial seed data matching Globo Tech operations
// Real-world active ledger entries matching Globo Tech operations
export const INITIAL_EXPENSES: ExpenseEntry[] = [
  // Today: 14-Oct-2026
  {
    id: 'exp-1791996815093',
    date: '2026-10-14',
    time: '10:52 PM',
    type: 'EXPENSE',
    category: 'MISC',
    particulars: 'Bag for personal use',
    amount: 4600,
    paymentMethod: 'PETTY_CASH',
    spentBy: 'Self',
    paidTo: 'Luxus bag',
    voucherNo: '',
    projectRef: 'Luxus bag',
    notes: '',
    createdAt: '2026-10-14T16:53:35.093Z'
  },
  {
    id: 'exp-1791996642106',
    date: '2026-10-14',
    time: '10:49 PM',
    type: 'EXPENSE',
    category: 'LABOR',
    particulars: 'Jony Hazira',
    amount: 5000,
    paymentMethod: 'BKASH',
    spentBy: 'Self',
    paidTo: 'Jony Hazira',
    voucherNo: '',
    projectRef: 'Jony Hazira',
    notes: '',
    createdAt: '2026-10-14T16:50:42.106Z'
  },
  {
    id: 'exp-1791996590146',
    date: '2026-10-14',
    time: '10:48 AM',
    type: 'EXPENSE',
    category: 'LABOR',
    particulars: 'Monir Salary',
    amount: 10000,
    paymentMethod: 'BKASH',
    spentBy: 'Self',
    paidTo: 'Monir Staf',
    voucherNo: '',
    projectRef: 'Monir Salary',
    notes: '',
    createdAt: '2026-10-14T16:49:50.146Z'
  },
  {
    id: 'exp-1791996503369',
    date: '2026-10-14',
    time: '8:47 PM',
    type: 'EXPENSE',
    category: 'MISC',
    particulars: 'Family',
    amount: 5100,
    paymentMethod: 'BKASH',
    spentBy: 'Self',
    paidTo: 'Shoshi',
    voucherNo: '',
    projectRef: 'Family Expense',
    notes: '',
    createdAt: '2026-10-14T16:48:23.369Z'
  },
  {
    id: 'exp-1791996427651',
    date: '2026-10-14',
    time: '10:45 PM',
    type: 'EXPENSE',
    category: 'SITE_MATERIALS',
    particulars: 'Speaker sir Protrait',
    amount: 20000,
    paymentMethod: 'BKASH',
    spentBy: 'self',
    paidTo: 'Sujan Day',
    voucherNo: '',
    projectRef: 'Speaker sir Protrait',
    notes: '',
    createdAt: '2026-10-14T16:47:07.651Z'
  },
  {
    id: 'exp-1791996195521',
    date: '2026-10-14',
    time: '3:42 PM',
    type: 'EXPENSE',
    category: 'MISC',
    particulars: 'Walkie Talkie Audit Repot',
    amount: 40500,
    paymentMethod: 'BRAC_BANK',
    spentBy: 'Self',
    paidTo: 'Mojid sir common shakha',
    voucherNo: '',
    projectRef: '',
    notes: '',
    createdAt: '2026-10-14T16:43:15.521Z'
  },

  // Yesterday: 13-Oct-2026
  {
    id: 'exp-1791996306959',
    date: '2026-10-13',
    time: '2:48 PM',
    type: 'EXPENSE',
    category: 'SITE_MATERIALS',
    particulars: 'shippinng charge of bainucular and Mirror',
    amount: 24600,
    paymentMethod: 'BKASH',
    spentBy: 'Engr. Sohel Rana',
    paidTo: 'Shipping',
    voucherNo: '',
    projectRef: 'Binocular & Mirror',
    notes: '',
    createdAt: '2026-10-14T16:45:40.000Z'
  },
  {
    id: 'exp-1791996306958',
    date: '2026-10-13',
    time: '2:47 PM',
    type: 'EXPENSE',
    category: 'UTILITIES',
    particulars: 'Amex credit  Card Bill',
    amount: 25020,
    paymentMethod: 'BRAC_BANK',
    spentBy: 'Engr. Sohel Rana',
    paidTo: 'Amex Card',
    voucherNo: '',
    projectRef: 'Card Bill',
    notes: '',
    createdAt: '2026-10-14T16:45:30.000Z'
  },
  {
    id: 'exp-1791996306957',
    date: '2026-10-13',
    time: '2:46 PM',
    type: 'EXPENSE',
    category: 'CONVEYANCE',
    particulars: 'Air Ticekt Malaysia to China',
    amount: 3520,
    paymentMethod: 'BKASH',
    spentBy: 'Engr. Sohel Rana',
    paidTo: 'Air Ticket',
    voucherNo: '',
    projectRef: 'Air Ticket',
    notes: '',
    createdAt: '2026-10-14T16:45:20.000Z'
  },
  {
    id: 'exp-1791996306956',
    date: '2026-10-13',
    time: '2:45 PM',
    type: 'EXPENSE',
    category: 'MISC',
    particulars: 'Malaysia and China Toure Cost Deposit to Shakil vi',
    amount: 100000,
    paymentMethod: 'BKASH',
    spentBy: 'Engr. Sohel Rana',
    paidTo: 'Shakil vi',
    voucherNo: '',
    projectRef: 'Tour Deposit',
    notes: 'Malaysia and China Tour Deposit',
    createdAt: '2026-10-14T16:45:10.000Z'
  },
  {
    id: 'exp-1791996306955',
    date: '2026-10-13',
    time: '2:44 PM',
    type: 'CASH_IN',
    category: 'MISC',
    particulars: 'Business Mantain',
    amount: 310000,
    paymentMethod: 'BRAC_BANK',
    spentBy: 'Engr. Sohel Rana',
    paidTo: '',
    voucherNo: '',
    projectRef: 'Daraz Bangladesh',
    notes: '',
    createdAt: '2026-10-14T16:45:06.955Z'
  }
];

export const DELETED_EXPENSES_STORAGE_KEY = 'globotech_erp_deleted_expense_ids';

/**
 * Reads stored expenses safely from browser localStorage, filtering out deleted items
 */
export function getStoredExpenses(): ExpenseEntry[] {
  if (typeof window === 'undefined') return INITIAL_EXPENSES;
  try {
    const rawDel = localStorage.getItem(DELETED_EXPENSES_STORAGE_KEY);
    const delSet = new Set<string>(rawDel ? JSON.parse(rawDel) : []);

    // Ensure real user transactions are protected and never blocked by stale tombstones
    const protectedIds = [
      'exp-1791996306955',
      'exp-1791996306956',
      'exp-1791996306957',
      'exp-1791996306958',
      'exp-1791996306959',
      'exp-1791996195521',
      'exp-1791996427651',
      'exp-1791996503369',
      'exp-1791996590146',
      'exp-1791996642106',
      'exp-1791996815093'
    ];
    let cleanedDel = false;
    protectedIds.forEach((pid) => {
      if (delSet.has(pid)) {
        delSet.delete(pid);
        cleanedDel = true;
      }
    });
    if (delSet.has('2026-10-13_2:44 PM_310000_Business Mantain')) {
      delSet.delete('2026-10-13_2:44 PM_310000_Business Mantain');
      cleanedDel = true;
    }
    if (cleanedDel) {
      localStorage.setItem(DELETED_EXPENSES_STORAGE_KEY, JSON.stringify(Array.from(delSet)));
    }

    const raw = localStorage.getItem(EXPENSES_STORAGE_KEY);
    if (!raw) {
      const filteredInit = INITIAL_EXPENSES.filter((e) => !delSet.has(e.id));
      localStorage.setItem(EXPENSES_STORAGE_KEY, JSON.stringify(filteredInit));
      return filteredInit;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed.filter((e) => !delSet.has(e.id));
    }
    return INITIAL_EXPENSES.filter((e) => !delSet.has(e.id));
  } catch (e) {
    console.error('Error reading daily expenses from storage:', e);
    return INITIAL_EXPENSES;
  }
}

/**
 * Saves expenses array to localStorage & dispatches a window event
 */
export function saveStoredExpenses(expenses: ExpenseEntry[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(EXPENSES_STORAGE_KEY, JSON.stringify(expenses));
    window.dispatchEvent(new CustomEvent('globotech_expenses_updated', { detail: expenses }));
    try {
      markLocalDataChanged();
    } catch (syncErr) {
      console.warn('Auto sync trigger error on expenses save:', syncErr);
    }
  } catch (e) {
    console.error('Error saving daily expenses to storage:', e);
  }
}

/**
 * Permanently deletes an expense and records its tombstone so it never resurrects during cloud sync
 */
export function deleteStoredExpense(id: string, entry?: Partial<ExpenseEntry>): void {
  if (typeof window === 'undefined') return;
  try {
    const rawDel = localStorage.getItem(DELETED_EXPENSES_STORAGE_KEY);
    const delList: string[] = rawDel ? JSON.parse(rawDel) : [];
    if (id && !delList.includes(id)) delList.push(id);
    if (entry && entry.date && entry.amount && entry.particulars) {
      const altKey = `${entry.date}_${entry.time || ''}_${entry.amount}_${entry.particulars}`.trim();
      if (!delList.includes(altKey)) delList.push(altKey);
    }
    localStorage.setItem(DELETED_EXPENSES_STORAGE_KEY, JSON.stringify(delList));

    const current = getStoredExpenses();
    const updated = current.filter((e) => e.id !== id);
    saveStoredExpenses(updated);
  } catch (e) {
    console.error('Error deleting expense:', e);
  }
}

/**
 * Calculates live financial metrics:
 * - Today's total expense
 * - Today's cash in
 * - Selected date total cost
 * - This month total expense
 * - Drawer petty cash balance
 * - Category-wise cost breakdown
 */
export function calculateExpenseMetrics(
  expenses: ExpenseEntry[],
  selectedDateStr?: string
) {
  const todayStr = new Date().toISOString().split('T')[0]; // "2026-10-14"
  const currentMonthStr = todayStr.substring(0, 7);       // "2026-10"

  const targetDate = selectedDateStr || todayStr;

  // Selected Date Metrics
  const targetDateEntries = expenses.filter((e) => e.date === targetDate);
  const targetDateExpenses = targetDateEntries
    .filter((e) => e.type === 'EXPENSE')
    .reduce((sum, e) => sum + e.amount, 0);
  const targetDateCashIn = targetDateEntries
    .filter((e) => e.type === 'CASH_IN')
    .reduce((sum, e) => sum + e.amount, 0);
  const targetDateNet = targetDateCashIn - targetDateExpenses;

  // Today's metrics
  const todayEntries = expenses.filter((e) => e.date === todayStr);
  const todayExpenses = todayEntries
    .filter((e) => e.type === 'EXPENSE')
    .reduce((sum, e) => sum + e.amount, 0);
  const todayCashIn = todayEntries
    .filter((e) => e.type === 'CASH_IN')
    .reduce((sum, e) => sum + e.amount, 0);

  // This Month metrics
  const monthEntries = expenses.filter((e) => e.date.startsWith(currentMonthStr));
  const monthExpenses = monthEntries
    .filter((e) => e.type === 'EXPENSE')
    .reduce((sum, e) => sum + e.amount, 0);
  const monthCashIn = monthEntries
    .filter((e) => e.type === 'CASH_IN')
    .reduce((sum, e) => sum + e.amount, 0);

  // Drawer Cash Balance:
  // Automatically deducts in real-time as expenses are added:
  // Total Cash In (collections, refills, deposits) - Total Expenses paid
  const totalCashIn = expenses
    .filter((e) => e.type === 'CASH_IN')
    .reduce((sum, e) => sum + e.amount, 0);
  const totalExpenses = expenses
    .filter((e) => e.type === 'EXPENSE')
    .reduce((sum, e) => sum + e.amount, 0);
  const pettyCashBalance = totalCashIn - totalExpenses;

  // Category-wise Breakdown for the target period
  const categoryTotals: Record<string, number> = {};
  targetDateEntries
    .filter((e) => e.type === 'EXPENSE')
    .forEach((e) => {
      categoryTotals[e.category] = (categoryTotals[e.category] || 0) + e.amount;
    });

  // Also overall month category breakdown
  const monthCategoryTotals: Record<string, number> = {};
  monthEntries
    .filter((e) => e.type === 'EXPENSE')
    .forEach((e) => {
      monthCategoryTotals[e.category] = (monthCategoryTotals[e.category] || 0) + e.amount;
    });

  return {
    todayStr,
    targetDate,
    targetDateExpenses,
    targetDateCashIn,
    targetDateNet,
    targetDateCount: targetDateEntries.length,
    todayExpenses,
    todayCashIn,
    todayNet: todayCashIn - todayExpenses,
    monthExpenses,
    monthCashIn,
    pettyCashBalance,
    categoryTotals,
    monthCategoryTotals,
    totalRecords: expenses.length
  };
}
