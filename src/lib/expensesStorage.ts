/**
 * Centralized Daily Expense, Petty Cash & Cash Flow Storage Engine
 * Handles:
 * - Tracking where and for what purpose money was spent (Conveyance, Food, Labor, Courier, Utilities, etc.)
 * - Daily total cost calculation and specific date lookups
 * - Cash In (collection / bank withdrawal) vs Cash Out (expenses)
 * - Real-time drawer petty cash balance & category breakdown
 */

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
export const INITIAL_EXPENSES: ExpenseEntry[] = [
  // Today: 14-Oct-2026
  {
    id: 'exp-1728920100000',
    date: '2026-10-14',
    time: '11:15 AM',
    type: 'EXPENSE',
    category: 'CONVEYANCE',
    particulars: 'Daraz Tejgaon Sorting Hub urgent Cat-6 cable delivery CNG fare',
    amount: 350,
    paymentMethod: 'PETTY_CASH',
    spentBy: 'Farhan',
    paidTo: 'CNG Driver',
    voucherNo: 'V-2610-041',
    projectRef: 'Daraz Tejgaon DC',
    notes: 'Urgent sample supply',
    createdAt: '2026-10-14T11:15:00.000Z'
  },
  {
    id: 'exp-1728920200000',
    date: '2026-10-14',
    time: '01:30 PM',
    type: 'EXPENSE',
    category: 'FOOD',
    particulars: 'Technician site lunch & mineral water for 3 persons (Parliament sound test)',
    amount: 1200,
    paymentMethod: 'PETTY_CASH',
    spentBy: 'Rony',
    paidTo: 'Kasturi Restaurant Banani',
    voucherNo: 'V-2610-042',
    projectRef: 'Bangladesh Parliament',
    notes: 'Field engineering team lunch',
    createdAt: '2026-10-14T13:30:00.000Z'
  },
  {
    id: 'exp-1728920300000',
    date: '2026-10-14',
    time: '03:10 PM',
    type: 'EXPENSE',
    category: 'STATIONERY',
    particulars: 'Heavy packing cartons, transparent tape & bubble wraps for CCTV dispatch',
    amount: 650,
    paymentMethod: 'PETTY_CASH',
    spentBy: 'Office Staff',
    paidTo: 'Motijheel Stationery House',
    voucherNo: 'V-2610-043',
    projectRef: 'Central Warehouse',
    createdAt: '2026-10-14T15:10:00.000Z'
  },
  {
    id: 'exp-1728920400000',
    date: '2026-10-14',
    time: '04:45 PM',
    type: 'EXPENSE',
    category: 'COURIER',
    particulars: 'Sundarban Courier parcel fee for sending router spare parts to Cumilla branch',
    amount: 320,
    paymentMethod: 'BKASH',
    spentBy: 'Farhan',
    paidTo: 'Sundarban Courier Dilkusha',
    voucherNo: 'SC-881902',
    projectRef: 'Cumilla Project',
    createdAt: '2026-10-14T16:45:00.000Z'
  },
  {
    id: 'exp-1728920500000',
    date: '2026-10-14',
    time: '05:30 PM',
    type: 'EXPENSE',
    category: 'FOOD',
    particulars: 'Daily evening office tea & biscuits for engineering department',
    amount: 180,
    paymentMethod: 'PETTY_CASH',
    spentBy: 'Office Boy',
    paidTo: 'Local Tea Stall',
    voucherNo: 'V-2610-044',
    createdAt: '2026-10-14T17:30:00.000Z'
  },
  {
    id: 'exp-1728920600000',
    date: '2026-10-14',
    time: '10:00 AM',
    type: 'CASH_IN',
    category: 'MISC',
    particulars: 'Cash withdrawal from Brac Bank to refill office drawer petty cash',
    amount: 20000,
    paymentMethod: 'BRAC_BANK',
    spentBy: 'Engr. Sohel Rana',
    paidTo: 'Office Petty Cash Drawer',
    voucherNo: 'CQ-991201',
    notes: 'Petty cash refill for weekly operations',
    createdAt: '2026-10-14T10:00:00.000Z'
  },

  // Yesterday: 13-Oct-2026
  {
    id: 'exp-1728830100000',
    date: '2026-10-13',
    time: '11:45 AM',
    type: 'EXPENSE',
    category: 'SITE_MATERIALS',
    particulars: 'Fiber optic patch cords (SC-LC), RJ45 metal connectors & cable ties',
    amount: 1450,
    paymentMethod: 'PETTY_CASH',
    spentBy: 'Rony',
    paidTo: 'Dhaka Stadium Market Hardware',
    voucherNo: 'V-2610-038',
    projectRef: 'Daraz Bangladesh LTD',
    createdAt: '2026-10-13T11:45:00.000Z'
  },
  {
    id: 'exp-1728830200000',
    date: '2026-10-13',
    time: '02:00 PM',
    type: 'EXPENSE',
    category: 'LABOR',
    particulars: 'Daily wage allowance for 2 assistant electricians for rack mounting & wiring',
    amount: 1800,
    paymentMethod: 'PETTY_CASH',
    spentBy: 'Farhan',
    paidTo: 'Electrician Team',
    voucherNo: 'V-2610-039',
    projectRef: 'Tejgaon Sort DC',
    createdAt: '2026-10-13T14:00:00.000Z'
  },
  {
    id: 'exp-1728830300000',
    date: '2026-10-13',
    time: '04:15 PM',
    type: 'EXPENSE',
    category: 'UTILITIES',
    particulars: 'Motijheel office dedicated fiber optic internet bill for October 2026',
    amount: 2500,
    paymentMethod: 'BKASH',
    spentBy: 'Engr. Sohel Rana',
    paidTo: 'Dot Internet Ltd',
    voucherNo: 'DOT-202610',
    createdAt: '2026-10-13T16:15:00.000Z'
  },
  {
    id: 'exp-1728830400000',
    date: '2026-10-13',
    time: '05:40 PM',
    type: 'EXPENSE',
    category: 'CONVEYANCE',
    particulars: 'Local rickshaw & CNG transit for bank cheque deposit and C/A delivery',
    amount: 220,
    paymentMethod: 'PETTY_CASH',
    spentBy: 'Office Staff',
    paidTo: 'Local Transport',
    voucherNo: 'V-2610-040',
    createdAt: '2026-10-13T17:40:00.000Z'
  },

  // 12-Oct-2026
  {
    id: 'exp-1728740100000',
    date: '2026-10-12',
    time: '12:30 PM',
    type: 'EXPENSE',
    category: 'REPAIR',
    particulars: 'Network crimping tool & cable tester calibration and replacement parts',
    amount: 600,
    paymentMethod: 'PETTY_CASH',
    spentBy: 'Rony',
    paidTo: 'Electronic Lab Stadium',
    voucherNo: 'V-2610-035',
    createdAt: '2026-10-12T12:30:00.000Z'
  },
  {
    id: 'exp-1728740200000',
    date: '2026-10-12',
    time: '03:50 PM',
    type: 'EXPENSE',
    category: 'COURIER',
    particulars: 'Redx parcel pickup service charge for urgent document delivery',
    amount: 280,
    paymentMethod: 'BKASH',
    spentBy: 'Farhan',
    paidTo: 'Redx Logistics',
    voucherNo: 'RX-99182',
    createdAt: '2026-10-12T15:50:00.000Z'
  },
  {
    id: 'exp-1728740300000',
    date: '2026-10-12',
    time: '04:30 PM',
    type: 'CASH_IN',
    category: 'MISC',
    particulars: 'Direct cash collection from local client for Hikvision surveillance accessories',
    amount: 8500,
    paymentMethod: 'PETTY_CASH',
    spentBy: 'Engr. Sohel Rana',
    paidTo: 'Globo Tech Drawer Cash',
    voucherNo: 'CSH-1012',
    notes: 'Cash in hand collection',
    createdAt: '2026-10-12T16:30:00.000Z'
  },

  // Earlier in October 2026
  {
    id: 'exp-1728560100000',
    date: '2026-10-10',
    time: '01:00 PM',
    type: 'EXPENSE',
    category: 'STATIONERY',
    particulars: 'HP LaserJet 85A toner cartridge refill & 2 reams Double A A4 printing paper',
    amount: 3200,
    paymentMethod: 'PETTY_CASH',
    spentBy: 'Office Staff',
    paidTo: 'Baitul Mukarram Stationery',
    voucherNo: 'V-2610-028',
    createdAt: '2026-10-10T13:00:00.000Z'
  },
  {
    id: 'exp-1728560200000',
    date: '2026-10-10',
    time: '04:15 PM',
    type: 'EXPENSE',
    category: 'LABOR',
    particulars: 'Warehouse coolie wages for unloading 40 boxes UTP pure copper cables',
    amount: 3500,
    paymentMethod: 'PETTY_CASH',
    spentBy: 'Farhan',
    paidTo: 'Motijheel Warehouse Labor Team',
    voucherNo: 'V-2610-029',
    projectRef: 'Central Warehouse',
    createdAt: '2026-10-10T16:15:00.000Z'
  }
];

/**
 * Reads stored expenses safely from browser localStorage
 */
export function getStoredExpenses(): ExpenseEntry[] {
  if (typeof window === 'undefined') return INITIAL_EXPENSES;
  try {
    const raw = localStorage.getItem(EXPENSES_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(EXPENSES_STORAGE_KEY, JSON.stringify(INITIAL_EXPENSES));
      return INITIAL_EXPENSES;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return INITIAL_EXPENSES;
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
  } catch (e) {
    console.error('Error saving daily expenses to storage:', e);
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
  // All Cash In with PETTY_CASH or Bank transfer to Cash - all expenses paid with PETTY_CASH
  const totalPettyCashIn = expenses
    .filter((e) => e.type === 'CASH_IN')
    .reduce((sum, e) => sum + e.amount, 0);
  const totalPettyCashOut = expenses
    .filter((e) => e.type === 'EXPENSE' && e.paymentMethod === 'PETTY_CASH')
    .reduce((sum, e) => sum + e.amount, 0);
  const pettyCashBalance = Math.max(0, totalPettyCashIn - totalPettyCashOut);

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
