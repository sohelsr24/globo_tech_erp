/**
 * Centralized Purchases, Supplier Item Costs & Due Ledger Engine
 * Tracks:
 * - Which company/supplier products were purchased from
 * - Item-by-item breakdown and unit values (each item value)
 * - How much has been paid per bill/supplier
 * - How much remains due
 * - Complete supplier payment transaction history
 */

export interface PurchaseItem {
  id: string;
  productId?: string;
  productName: string;
  sku?: string;
  category?: string;
  quantity: number;
  unit: string;
  unitPrice: number; // Each item value / purchase rate in BDT
  totalPrice: number; // quantity * unitPrice
  notes?: string;
}

export interface SupplierPaymentRecord {
  id: string;
  date: string;
  amount: number;
  paymentMethod: 'Bank Transfer' | 'TT / LC' | 'Cash' | 'Cheque' | 'bKash / Nagad' | 'Other';
  referenceNo?: string;
  bankName?: string;
  note?: string;
  recordedBy?: string;
  createdAt: string;
}

export interface PurchaseBillRecord {
  id: string;
  billNumber: string; // e.g. PO-HIK-2026-001
  supplierId: string;
  supplierName: string;
  supplierCountry?: string;
  supplierPhone?: string;
  supplierEmail?: string;
  date: string; // YYYY-MM-DD
  dueDate?: string;
  items: PurchaseItem[];
  subtotal: number;
  taxOrDuty?: number;
  totalAmount: number; // BDT
  paidAmount: number; // BDT
  dueAmount: number; // totalAmount - paidAmount
  status: 'PAID' | 'PARTIAL' | 'UNPAID';
  payments: SupplierPaymentRecord[];
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export const PURCHASES_STORAGE_KEY = 'globotech_erp_purchases';

// Real Master Purchases Data (Amecon & Parliament Project Procurement)
export const INITIAL_PURCHASES: PurchaseBillRecord[] = [
  {
    "billNumber": "PO-2026-106",
    "supplierId": "supp-1791405863836",
    "supplierName": "Amecon",
    "date": "2026-10-08",
    "items": [
      {
        "id": "pi-1791405863836-0",
        "productName": "National Parliament Bhaban Erchitect",
        "quantity": 1,
        "unit": "pcs",
        "unitPrice": 15000,
        "totalPrice": 15000
      }
    ],
    "subtotal": 15000,
    "totalAmount": 15000,
    "paidAmount": 15000,
    "payments": [
      {
        "id": "pay-1791405863836",
        "date": "2026-10-08",
        "amount": 15000,
        "paymentMethod": "Bank Transfer",
        "note": "Initial down payment at bill creation",
        "createdAt": "2026-10-07T20:44:23.836Z"
      }
    ],
    "id": "PUR-MUYKSQZG-810",
    "dueAmount": 0,
    "status": "PAID",
    "createdAt": "2026-10-07T20:44:23.836Z",
    "updatedAt": "2026-10-07T20:44:23.836Z"
  },
  {
    "billNumber": "PO-2026-105",
    "supplierId": "supp-1791405552236",
    "supplierName": "Amecon",
    "date": "2026-10-04",
    "items": [
      {
        "id": "pi-1791405552235-0",
        "productName": "Digital Flag national & Deputy with ss steal for deputy speaker",
        "quantity": 2,
        "unit": "pcs",
        "unitPrice": 15000,
        "totalPrice": 30000
      }
    ],
    "subtotal": 30000,
    "totalAmount": 30000,
    "paidAmount": 30000,
    "payments": [
      {
        "id": "pay-1791405552235",
        "date": "2026-10-04",
        "amount": 30000,
        "paymentMethod": "Bank Transfer",
        "note": "Initial down payment at bill creation",
        "createdAt": "2026-10-07T20:39:12.235Z"
      }
    ],
    "notes": "Full paid",
    "id": "PUR-MUYKM2JW-503",
    "dueAmount": 0,
    "status": "PAID",
    "createdAt": "2026-10-07T20:39:12.236Z",
    "updatedAt": "2026-10-07T20:39:12.236Z"
  },
  {
    "billNumber": "PO-2026-104",
    "supplierId": "supp-1791405381961",
    "supplierName": "Amecon",
    "date": "2026-09-20",
    "items": [
      {
        "id": "pi-1791405381961-0",
        "productName": "Arabic Caliography for deputy speaker office",
        "quantity": 1,
        "unit": "pcs",
        "unitPrice": 45000,
        "totalPrice": 45000
      }
    ],
    "subtotal": 45000,
    "totalAmount": 45000,
    "paidAmount": 0,
    "payments": [],
    "id": "PUR-MUYKIF61-455",
    "dueAmount": 45000,
    "status": "UNPAID",
    "createdAt": "2026-10-07T20:36:21.961Z",
    "updatedAt": "2026-10-07T20:36:21.961Z"
  },
  {
    "billNumber": "PO-2026-103",
    "supplierId": "supp-1791405276761",
    "supplierName": "Amecon",
    "date": "2026-09-22",
    "items": [
      {
        "id": "pi-1791405276761-0",
        "productName": "Car Monogram for deputy Speaker",
        "quantity": 2,
        "unit": "pcs",
        "unitPrice": 15000,
        "totalPrice": 30000
      }
    ],
    "subtotal": 30000,
    "totalAmount": 30000,
    "paidAmount": 30000,
    "payments": [
      {
        "id": "pay-1791405276761",
        "date": "2026-09-22",
        "amount": 30000,
        "paymentMethod": "Bank Transfer",
        "note": "Initial down payment at bill creation",
        "createdAt": "2026-10-07T20:34:36.761Z"
      }
    ],
    "notes": "Full paid",
    "id": "PUR-MUYKG5ZT-123",
    "dueAmount": 0,
    "status": "PAID",
    "createdAt": "2026-10-07T20:34:36.761Z",
    "updatedAt": "2026-10-07T20:34:36.761Z"
  },
  {
    "billNumber": "PO-2026-102",
    "supplierId": "supp-1791403945180",
    "supplierName": "Amecon",
    "date": "2026-08-09",
    "items": [
      {
        "id": "pi-1791403945180-0",
        "productName": "wodden Crest for deputy speaker",
        "quantity": 15,
        "unit": "pcs",
        "unitPrice": 2200,
        "totalPrice": 33000
      },
      {
        "id": "pi-1791405066265-11",
        "productName": "wodden Crest Sample",
        "quantity": 2,
        "unit": "pcs",
        "unitPrice": 3500,
        "totalPrice": 7000
      }
    ],
    "subtotal": 40000,
    "totalAmount": 40000,
    "paidAmount": 40000,
    "payments": [
      {
        "id": "pay-1791403945180",
        "date": "2026-08-09",
        "amount": 33000,
        "paymentMethod": "Bank Transfer",
        "note": "Initial down payment at bill creation",
        "createdAt": "2026-10-07T20:12:25.180Z"
      },
      {
        "date": "2026-10-07",
        "amount": 7000,
        "paymentMethod": "Bank Transfer",
        "id": "pay-muykcdbp-782",
        "createdAt": "2026-10-07T20:31:39.637Z"
      }
    ],
    "notes": "full paid 1st 10 pcs & 2nd 5 pcs . Total bill paid",
    "id": "PUR-MUYJNMJG-579",
    "dueAmount": 0,
    "status": "PAID",
    "createdAt": "2026-10-07T20:12:25.180Z",
    "updatedAt": "2026-10-07T20:31:39.637Z"
  },
  {
    "billNumber": "PO-2026-5750",
    "supplierId": "supp-1791401539742",
    "supplierName": "Amecon",
    "date": "2026-08-16",
    "items": [
      {
        "id": "pi-1791401539742-0",
        "productName": "Metal Arabic Caliography for deputy Speaker",
        "quantity": 1,
        "unit": "pcs",
        "unitPrice": 45000,
        "totalPrice": 45000
      }
    ],
    "subtotal": 45000,
    "totalAmount": 45000,
    "paidAmount": 20000,
    "payments": [
      {
        "id": "pay-1791401539742",
        "date": "2026-08-16",
        "amount": 20000,
        "paymentMethod": "Bank Transfer",
        "note": "Initial down payment at bill creation",
        "createdAt": "2026-10-07T19:32:19.742Z"
      }
    ],
    "notes": "amecon bill no 20489",
    "id": "PUR-MUYI82HQ-172",
    "dueAmount": 25000,
    "status": "PARTIAL",
    "createdAt": "2026-10-07T19:32:19.742Z",
    "updatedAt": "2026-10-07T19:32:19.742Z"
  },
  {
    "billNumber": "PO-2026-2727",
    "supplierId": "supp-1791401134887",
    "supplierName": "Amecon",
    "date": "2026-12-08",
    "items": [
      {
        "id": "pi-1791401134887-0",
        "productName": "Parliament Logo Pitol 19 inches",
        "quantity": 2,
        "unit": "pcs",
        "unitPrice": 43000,
        "totalPrice": 86000
      },
      {
        "id": "pi-1791401134887-1",
        "productName": "Fitting Charge",
        "quantity": 1,
        "unit": "pcs",
        "unitPrice": 1000,
        "totalPrice": 1000
      }
    ],
    "subtotal": 87000,
    "totalAmount": 87000,
    "paidAmount": 70000,
    "payments": [
      {
        "id": "pay-1791401134887",
        "date": "2026-12-08",
        "amount": 70000,
        "paymentMethod": "Bank Transfer",
        "note": "Initial down payment at bill creation",
        "createdAt": "2026-10-07T19:25:34.887Z"
      }
    ],
    "id": "PUR-MUYHZE3R-153",
    "dueAmount": 17000,
    "status": "PARTIAL",
    "createdAt": "2026-10-07T19:25:34.887Z",
    "updatedAt": "2026-10-07T19:25:34.887Z"
  },
  {
    "billNumber": "PO-2026-101",
    "supplierId": "supp-1791398409726",
    "supplierName": "Amecon",
    "date": "2026-08-06",
    "items": [
      {
        "id": "pi-1791398409726-0",
        "productName": "Parliament Logo for Deputy Speaker",
        "quantity": 1,
        "unit": "pcs",
        "unitPrice": 50000,
        "totalPrice": 50000
      }
    ],
    "subtotal": 50000,
    "totalAmount": 50000,
    "paidAmount": 50000,
    "payments": [
      {
        "date": "2026-06-08",
        "amount": 50000,
        "paymentMethod": "Bank Transfer",
        "bankName": "Brac",
        "id": "pay-muyh6dcd-417",
        "createdAt": "2026-10-07T19:03:00.877Z"
      }
    ],
    "notes": "Full paid",
    "id": "PUR-MUYGCZCU-386",
    "dueAmount": 0,
    "status": "PAID",
    "createdAt": "2026-10-07T18:40:09.726Z",
    "updatedAt": "2026-10-07T19:03:00.877Z"
  }
];

/**
 * Loads purchases from localStorage with initial seed fallback
 */
export function getStoredPurchases(): PurchaseBillRecord[] {
  if (typeof window === 'undefined') return INITIAL_PURCHASES;
  try {
    const saved = localStorage.getItem(PURCHASES_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // 1. Identify and purge ANY legacy Chinese demo supplier records (Hikvision, TP-Link, Western Digital, Dahua)
        const isDemoRecord = (p: any) =>
          p &&
          (p.id === 'PUR-HIK-001' ||
            p.id === 'PUR-TPL-002' ||
            p.id === 'PUR-WD-003' ||
            p.id === 'PUR-DAH-004' ||
            p.supplierName?.toLowerCase().includes('hikvision') ||
            p.supplierName?.toLowerCase().includes('dahua') ||
            p.supplierName?.toLowerCase().includes('tp-link') ||
            p.supplierName?.toLowerCase().includes('western digital'));

        const cleanedList = parsed.filter((p: any) => !isDemoRecord(p));
        const hasRealAmecon = cleanedList.some(
          (p: any) =>
            p &&
            (p.supplierName?.includes('Amecon') ||
              p.billNumber?.startsWith('PO-2026-10') ||
              p.billNumber === 'PO-2026-5750' ||
              p.billNumber === 'PO-2026-2727')
        );

        let finalPurchases = cleanedList;
        if (!hasRealAmecon || cleanedList.length === 0) {
          // Merge INITIAL_PURCHASES (user's real Amecon purchases)
          finalPurchases = [...INITIAL_PURCHASES];
          cleanedList.forEach((c) => {
            if (!finalPurchases.some((p) => p.id === c.id || p.billNumber === c.billNumber)) {
              finalPurchases.push(c);
            }
          });
        }

        // If changes were made, immediately persist cleaned real data to localStorage
        if (finalPurchases.length !== parsed.length || !hasRealAmecon) {
          console.log('[Purchases] Cleaned legacy demo records & restored real user Amecon purchases to client storage.');
          try {
            localStorage.setItem(PURCHASES_STORAGE_KEY, JSON.stringify(finalPurchases));
          } catch (err) {}
        }

        return finalPurchases;
      }
    }
  } catch (e) {
    console.error('Error reading purchases from storage:', e);
  }
  return INITIAL_PURCHASES;
}

/**
 * Saves purchases to localStorage and notifies application
 */
export function saveStoredPurchases(purchases: PurchaseBillRecord[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(PURCHASES_STORAGE_KEY, JSON.stringify(purchases));
    window.dispatchEvent(new CustomEvent('globotech_purchases_updated', { detail: purchases }));
  } catch (e) {
    console.error('Error saving purchases to storage:', e);
  }
}

/**
 * Creates a new purchase bill
 */
export function addPurchaseBill(
  data: Omit<PurchaseBillRecord, 'id' | 'createdAt' | 'updatedAt' | 'dueAmount' | 'status'> & {
    id?: string;
  }
): PurchaseBillRecord {
  const all = getStoredPurchases();
  const id = data.id || `PUR-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`;
  const now = new Date().toISOString();

  const total = Number(data.totalAmount) || 0;
  const paid = Number(data.paidAmount) || 0;
  const due = Math.max(0, total - paid);
  const status: 'PAID' | 'PARTIAL' | 'UNPAID' = due <= 0 ? 'PAID' : paid > 0 ? 'PARTIAL' : 'UNPAID';

  const newBill: PurchaseBillRecord = {
    ...data,
    id,
    dueAmount: due,
    status,
    createdAt: now,
    updatedAt: now
  };

  const updated = [newBill, ...all];
  saveStoredPurchases(updated);
  return newBill;
}

/**
 * Records a payment against a purchase bill
 */
export function recordSupplierPayment(
  billId: string,
  payment: Omit<SupplierPaymentRecord, 'id' | 'createdAt'>
): PurchaseBillRecord | null {
  const all = getStoredPurchases();
  const index = all.findIndex((b) => b.id === billId);
  if (index === -1) return null;

  const bill = all[index];
  const paymentAmount = Number(payment.amount) || 0;
  const newPaidAmount = (Number(bill.paidAmount) || 0) + paymentAmount;
  const newDueAmount = Math.max(0, (Number(bill.totalAmount) || 0) - newPaidAmount);
  const newStatus: 'PAID' | 'PARTIAL' | 'UNPAID' = newDueAmount <= 0 ? 'PAID' : newPaidAmount > 0 ? 'PARTIAL' : 'UNPAID';

  const paymentRecord: SupplierPaymentRecord = {
    ...payment,
    id: `pay-${Date.now().toString(36)}-${Math.floor(Math.random() * 900 + 100)}`,
    amount: paymentAmount,
    createdAt: new Date().toISOString()
  };

  const updatedBill: PurchaseBillRecord = {
    ...bill,
    paidAmount: newPaidAmount,
    dueAmount: newDueAmount,
    status: newStatus,
    payments: [...(bill.payments || []), paymentRecord],
    updatedAt: new Date().toISOString()
  };

  all[index] = updatedBill;
  saveStoredPurchases(all);
  return updatedBill;
}

/**
 * Generates the next sequential PO number based on existing purchase records.
 * Ensures numbers are serial (e.g. PO-2026-101 -> PO-2026-102 or PO-2026-001 -> PO-2026-002),
 * avoiding random numbers.
 */
export function getNextPONumber(bills?: PurchaseBillRecord[]): string {
  const allBills = bills && bills.length > 0 ? bills : getStoredPurchases();
  const currentYear = new Date().getFullYear();
  const yearStr = String(currentYear);

  const seqNumbers: number[] = [];
  const numbersForCurrentYear: number[] = [];

  for (const b of allBills) {
    if (!b.billNumber) continue;
    const trimmed = b.billNumber.trim();

    const matchYearSeq = trimmed.match(/(?:20\d{2})[-_](\d+)/);
    const matchEndSeq = trimmed.match(/(\d+)$/);

    if (matchYearSeq) {
      const year = trimmed.includes(yearStr);
      const seq = parseInt(matchYearSeq[1], 10);
      if (!isNaN(seq)) {
        if (year) numbersForCurrentYear.push(seq);
        seqNumbers.push(seq);
      }
    } else if (matchEndSeq) {
      const seq = parseInt(matchEndSeq[1], 10);
      if (!isNaN(seq)) {
        seqNumbers.push(seq);
      }
    }
  }

  // Filter out artifact random numbers (>= 1000 from old Math.random()) when smaller sequence exists
  const candidates = numbersForCurrentYear.length > 0 ? numbersForCurrentYear : seqNumbers;
  const reasonableCandidates = candidates.filter((n) => {
    if (allBills.length < 500 && n >= 1000) {
      const hasSmaller = candidates.some((c) => c < 1000);
      return !hasSmaller;
    }
    return true;
  });

  let nextSeq = 1;
  if (reasonableCandidates.length > 0) {
    const maxSeq = Math.max(...reasonableCandidates);
    nextSeq = maxSeq + 1;
  } else if (candidates.length > 0) {
    nextSeq = Math.max(...candidates) + 1;
  }

  const padLength = nextSeq >= 1000 ? 4 : 3;
  const formattedSeq = String(nextSeq).padStart(padLength, '0');

  let candidatePO = `PO-${currentYear}-${formattedSeq}`;
  let attempt = nextSeq;
  while (allBills.some((b) => b.billNumber && b.billNumber.trim().toUpperCase() === candidatePO.toUpperCase())) {
    attempt++;
    candidatePO = `PO-${currentYear}-${String(attempt).padStart(padLength, '0')}`;
  }

  return candidatePO;
}

/**
 * Updates basic bill details (bill number, date, due date, notes)
 */
export function updatePurchaseBill(
  billId: string,
  updatedData: {
    billNumber?: string;
    date?: string;
    dueDate?: string;
    notes?: string;
  }
): boolean {
  const all = getStoredPurchases();
  const index = all.findIndex((b) => b.id === billId);
  if (index === -1) return false;

  const bill = all[index];
  const oldBillNo = bill.billNumber;
  const newBillNo = updatedData.billNumber ? updatedData.billNumber.trim() : oldBillNo;

  bill.billNumber = newBillNo;
  if (updatedData.date) bill.date = updatedData.date;
  if (updatedData.dueDate !== undefined) bill.dueDate = updatedData.dueDate || undefined;
  if (updatedData.notes !== undefined) bill.notes = updatedData.notes.trim() || undefined;
  bill.updatedAt = new Date().toISOString();

  all[index] = bill;
  saveStoredPurchases(all);
  return true;
}

/**
 * Deletes a purchase bill
 */
export function deletePurchaseBill(billId: string): boolean {
  const all = getStoredPurchases();
  const filtered = all.filter((b) => b.id !== billId);
  if (filtered.length === all.length) return false;
  saveStoredPurchases(filtered);
  return true;
}

/**
 * Updates supplier details across all associated purchase bills and supplier directories
 */
export function updateSupplierDetails(
  oldSupplierName: string,
  updatedData: {
    supplierName: string;
    supplierCountry?: string;
    supplierPhone?: string;
    supplierEmail?: string;
  }
): boolean {
  const allBills = getStoredPurchases();
  let updatedCount = 0;

  const newBills = allBills.map((bill) => {
    if (bill.supplierName.trim().toLowerCase() === oldSupplierName.trim().toLowerCase()) {
      updatedCount++;
      return {
        ...bill,
        supplierName: updatedData.supplierName.trim(),
        supplierCountry: updatedData.supplierCountry !== undefined ? updatedData.supplierCountry.trim() : bill.supplierCountry,
        supplierPhone: updatedData.supplierPhone !== undefined ? updatedData.supplierPhone.trim() : bill.supplierPhone,
        supplierEmail: updatedData.supplierEmail !== undefined ? updatedData.supplierEmail.trim() : bill.supplierEmail,
        updatedAt: new Date().toISOString()
      };
    }
    return bill;
  });

  saveStoredPurchases(newBills);

  // Also sync with globotech_erp_suppliers in localStorage if present
  if (typeof window !== 'undefined') {
    try {
      const savedSuppliers = localStorage.getItem('globotech_erp_suppliers');
      if (savedSuppliers) {
        const parsedSuppliers = JSON.parse(savedSuppliers);
        if (Array.isArray(parsedSuppliers)) {
          let found = false;
          const updatedSuppliers = parsedSuppliers.map((s: any) => {
            if (s.name && s.name.trim().toLowerCase() === oldSupplierName.trim().toLowerCase()) {
              found = true;
              return {
                ...s,
                name: updatedData.supplierName.trim(),
                country: updatedData.supplierCountry !== undefined ? updatedData.supplierCountry.trim() : s.country,
                phone: updatedData.supplierPhone !== undefined ? updatedData.supplierPhone.trim() : s.phone,
                email: updatedData.supplierEmail !== undefined ? updatedData.supplierEmail.trim() : s.email
              };
            }
            return s;
          });
          if (found) {
            localStorage.setItem('globotech_erp_suppliers', JSON.stringify(updatedSuppliers));
            window.dispatchEvent(new CustomEvent('globotech_suppliers_updated', { detail: updatedSuppliers }));
            window.dispatchEvent(new CustomEvent('globotech_purchases_updated'));
          }
        }
      }
    } catch (e) {
      console.error('Error syncing updated supplier to globotech_erp_suppliers:', e);
    }
  }

  return true;
}

/**
 * Deletes a supplier and all their associated purchase bills
 */
export function deleteSupplierAndBills(supplierName: string): boolean {
  const cleanName = supplierName.trim();
  const cleanNameLower = cleanName.toLowerCase();

  const allBills = getStoredPurchases();
  const deletedBillIds: string[] = [];
  const filteredBills = allBills.filter((bill) => {
    if (bill.supplierName && bill.supplierName.trim().toLowerCase() === cleanNameLower) {
      if (bill.id) deletedBillIds.push(bill.id);
      if (bill.billNumber) deletedBillIds.push(bill.billNumber);
      return false;
    }
    return true;
  });

  saveStoredPurchases(filteredBills);

  if (typeof window !== 'undefined') {
    try {
      // 1. Persist deleted supplier name tombstone
      const savedDelSupp = localStorage.getItem('globotech_erp_deleted_supplier_names');
      const delSuppList: string[] = savedDelSupp ? JSON.parse(savedDelSupp) : [];
      if (!delSuppList.includes(cleanNameLower)) {
        delSuppList.push(cleanNameLower);
        localStorage.setItem('globotech_erp_deleted_supplier_names', JSON.stringify(delSuppList));
      }

      // 2. Persist deleted bill IDs
      if (deletedBillIds.length > 0) {
        const savedDelPur = localStorage.getItem('globotech_erp_deleted_purchases');
        const delPurList: string[] = savedDelPur ? JSON.parse(savedDelPur) : [];
        deletedBillIds.forEach((id) => {
          if (!delPurList.includes(id)) delPurList.push(id);
        });
        localStorage.setItem('globotech_erp_deleted_purchases', JSON.stringify(delPurList));
      }

      // 3. Remove from globotech_erp_suppliers
      const savedSuppliers = localStorage.getItem('globotech_erp_suppliers');
      if (savedSuppliers) {
        const parsedSuppliers = JSON.parse(savedSuppliers);
        if (Array.isArray(parsedSuppliers)) {
          const remainingSuppliers = parsedSuppliers.filter(
            (s: any) => s.name && s.name.trim().toLowerCase() !== cleanNameLower
          );
          localStorage.setItem('globotech_erp_suppliers', JSON.stringify(remainingSuppliers));
          window.dispatchEvent(new CustomEvent('globotech_suppliers_updated', { detail: remainingSuppliers }));
          window.dispatchEvent(new CustomEvent('globotech_purchases_updated'));
        }
      }
    } catch (e) {
      console.error('Error syncing deleted supplier from globotech_erp_suppliers:', e);
    }
  }

  return true;
}

/**
 * Adds a new supplier record
 */
export function addNewSupplier(supplier: {
  name: string;
  country?: string;
  phone?: string;
  email?: string;
}): boolean {
  if (typeof window !== 'undefined') {
    try {
      const cleanName = supplier.name.trim();

      // Clear deletion tombstone if previously deleted
      try {
        const savedDel = localStorage.getItem('globotech_erp_deleted_supplier_names');
        if (savedDel) {
          const list: string[] = JSON.parse(savedDel);
          const filtered = list.filter((n) => n.toLowerCase() !== cleanName.toLowerCase());
          localStorage.setItem('globotech_erp_deleted_supplier_names', JSON.stringify(filtered));
        }
      } catch (e) {}

      const saved = localStorage.getItem('globotech_erp_suppliers');
      const list = saved ? JSON.parse(saved) : [];
      const newEntry = {
        id: `supp-${Date.now()}`,
        name: cleanName,
        country: supplier.country?.trim() || 'Bangladesh',
        city: '',
        contactPerson: '',
        email: supplier.email?.trim() || '',
        phone: supplier.phone?.trim() || '',
        defaultCurrency: 'BDT',
        paymentTerms: 'Payment on Invoice',
        totalShipments: 0,
        totalVolumeCNY: 0,
        status: 'ACTIVE'
      };
      list.push(newEntry);
      localStorage.setItem('globotech_erp_suppliers', JSON.stringify(list));
      window.dispatchEvent(new CustomEvent('globotech_suppliers_updated', { detail: list }));
      window.dispatchEvent(new CustomEvent('globotech_purchases_updated'));
      return true;
    } catch (e) {
      console.error('Error adding new supplier:', e);
    }
  }
  return false;
}

/**
 * Updates an individual purchase item inside its parent bill,
 * recalculating item total, bill subtotal, bill total, due amount and payment status.
 */
export function updatePurchaseItem(
  billId: string,
  itemId: string,
  updatedItemData: {
    productName: string;
    sku?: string;
    category?: string;
    quantity: number;
    unit: string;
    unitPrice: number;
    purchaseDate?: string;
    notes?: string;
  }
): boolean {
  const allBills = getStoredPurchases();
  const billIndex = allBills.findIndex((b) => b.id === billId);
  if (billIndex === -1) return false;

  const bill = allBills[billIndex];
  const itemIndex = bill.items.findIndex((it) => it.id === itemId);
  if (itemIndex === -1) return false;

  const qty = Math.max(1, Number(updatedItemData.quantity) || 1);
  const unitRate = Math.max(0, Number(updatedItemData.unitPrice) || 0);
  const newTotalPrice = qty * unitRate;

  // Update item
  bill.items[itemIndex] = {
    ...bill.items[itemIndex],
    productName: updatedItemData.productName.trim(),
    sku: updatedItemData.sku !== undefined ? updatedItemData.sku.trim() || undefined : bill.items[itemIndex].sku,
    category: updatedItemData.category !== undefined ? updatedItemData.category.trim() || undefined : bill.items[itemIndex].category,
    quantity: qty,
    unit: updatedItemData.unit?.trim() || bill.items[itemIndex].unit || 'pcs',
    unitPrice: unitRate,
    totalPrice: newTotalPrice,
    notes: updatedItemData.notes !== undefined ? updatedItemData.notes.trim() || undefined : bill.items[itemIndex].notes
  };

  // If purchase date was updated, update bill.date
  if (updatedItemData.purchaseDate) {
    bill.date = updatedItemData.purchaseDate;
  }

  // Recalculate bill subtotal and total
  const newSubtotal = bill.items.reduce((sum, it) => sum + (it.totalPrice || 0), 0);
  bill.subtotal = newSubtotal;
  const tax = Number(bill.taxOrDuty) || 0;
  bill.totalAmount = newSubtotal + tax;

  // Recalculate due amount and status
  const paid = Number(bill.paidAmount) || 0;
  bill.dueAmount = Math.max(0, bill.totalAmount - paid);

  if (bill.dueAmount <= 0) {
    bill.status = 'PAID';
  } else if (paid > 0) {
    bill.status = 'PARTIAL';
  } else {
    bill.status = 'UNPAID';
  }

  bill.updatedAt = new Date().toISOString();

  allBills[billIndex] = bill;
  saveStoredPurchases(allBills);
  return true;
}

/**
 * Deletes an individual purchase item from its parent bill
 */
export function deletePurchaseItem(billId: string, itemId: string): boolean {
  const allBills = getStoredPurchases();
  const billIndex = allBills.findIndex((b) => b.id === billId);
  if (billIndex === -1) return false;

  const bill = allBills[billIndex];
  bill.items = bill.items.filter((it) => it.id !== itemId);

  // If bill now has 0 items, delete the whole bill
  if (bill.items.length === 0) {
    const remaining = allBills.filter((b) => b.id !== billId);
    saveStoredPurchases(remaining);
    return true;
  }

  // Recalculate bill subtotal and total
  const newSubtotal = bill.items.reduce((sum, it) => sum + (it.totalPrice || 0), 0);
  bill.subtotal = newSubtotal;
  const tax = Number(bill.taxOrDuty) || 0;
  bill.totalAmount = newSubtotal + tax;
  const paid = Number(bill.paidAmount) || 0;
  bill.dueAmount = Math.max(0, bill.totalAmount - paid);

  if (bill.dueAmount <= 0) {
    bill.status = 'PAID';
  } else if (paid > 0) {
    bill.status = 'PARTIAL';
  } else {
    bill.status = 'UNPAID';
  }

  bill.updatedAt = new Date().toISOString();
  allBills[billIndex] = bill;
  saveStoredPurchases(allBills);
  return true;
}

/**
 * Adds a new item to an existing purchase bill,
 * recalculating bill subtotal, total amount, due amount and status.
 */
export function addItemToPurchaseBill(
  billId: string,
  newItem: {
    productName: string;
    sku?: string;
    category?: string;
    quantity: number;
    unit: string;
    unitPrice: number;
    notes?: string;
  }
): boolean {
  const allBills = getStoredPurchases();
  const index = allBills.findIndex((b) => b.id === billId);
  if (index === -1) return false;

  const bill = allBills[index];
  const qty = Math.max(1, Number(newItem.quantity) || 1);
  const rate = Math.max(0, Number(newItem.unitPrice) || 0);

  const itemRecord: PurchaseItem = {
    id: `pi-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    productName: newItem.productName.trim(),
    sku: newItem.sku !== undefined ? newItem.sku.trim() || undefined : undefined,
    category: newItem.category !== undefined ? newItem.category.trim() || undefined : undefined,
    quantity: qty,
    unit: newItem.unit?.trim() || 'pcs',
    unitPrice: rate,
    totalPrice: qty * rate,
    notes: newItem.notes !== undefined ? newItem.notes.trim() || undefined : undefined
  };

  if (!Array.isArray(bill.items)) {
    bill.items = [];
  }
  bill.items.push(itemRecord);

  // Recalculate bill subtotal & total
  const newSubtotal = bill.items.reduce((sum, it) => sum + (it.totalPrice || 0), 0);
  bill.subtotal = newSubtotal;
  const tax = Number(bill.taxOrDuty) || 0;
  bill.totalAmount = newSubtotal + tax;

  // Recalculate due & status
  const paid = Number(bill.paidAmount) || 0;
  bill.dueAmount = Math.max(0, bill.totalAmount - paid);

  if (bill.dueAmount <= 0) {
    bill.status = 'PAID';
  } else if (paid > 0) {
    bill.status = 'PARTIAL';
  } else {
    bill.status = 'UNPAID';
  }

  bill.updatedAt = new Date().toISOString();
  allBills[index] = bill;
  saveStoredPurchases(allBills);
  return true;
}

export interface CompanySummary {
  supplierName: string;
  supplierId: string;
  supplierCountry: string;
  supplierPhone: string;
  supplierEmail: string;
  totalPurchased: number;
  totalPaid: number;
  totalDue: number;
  billsCount: number;
  itemsCount: number;
  status: 'PAID' | 'PARTIAL' | 'UNPAID';
  bills: PurchaseBillRecord[];
  allItems: Array<
    PurchaseItem & {
      billId: string;
      billNumber: string;
      purchaseDate: string;
      billPaid: number;
      billDue: number;
      billStatus: 'PAID' | 'PARTIAL' | 'UNPAID';
    }
  >;
  allPayments: Array<SupplierPaymentRecord & { billNumber: string; billId: string }>;
}

/**
 * Computes company-level rollups from purchases
 */
export function getCompanySummaries(bills: PurchaseBillRecord[]): CompanySummary[] {
  const map = new Map<string, CompanySummary>();

  let delSuppSet = new Set<string>();
  if (typeof window !== 'undefined') {
    try {
      const savedDeleted = localStorage.getItem('globotech_erp_deleted_supplier_names');
      if (savedDeleted) {
        delSuppSet = new Set<string>(JSON.parse(savedDeleted).map((s: string) => s.toLowerCase()));
      }
    } catch (e) {}
  }

  for (const bill of bills) {
    const key = (bill.supplierName || 'Unknown Company').trim();
    if (delSuppSet.has(key.toLowerCase())) continue;
    if (!map.has(key)) {
      map.set(key, {
        supplierName: key,
        supplierId: bill.supplierId || '',
        supplierCountry: bill.supplierCountry || '',
        supplierPhone: bill.supplierPhone || '',
        supplierEmail: bill.supplierEmail || '',
        totalPurchased: 0,
        totalPaid: 0,
        totalDue: 0,
        billsCount: 0,
        itemsCount: 0,
        status: 'PAID',
        bills: [],
        allItems: [],
        allPayments: []
      });
    }

    const summary = map.get(key)!;
    summary.totalPurchased += Number(bill.totalAmount) || 0;
    summary.totalPaid += Number(bill.paidAmount) || 0;
    summary.totalDue += Number(bill.dueAmount) || 0;
    summary.billsCount += 1;
    summary.bills.push(bill);

    if (bill.supplierPhone && !summary.supplierPhone) summary.supplierPhone = bill.supplierPhone;
    if (bill.supplierCountry && !summary.supplierCountry) summary.supplierCountry = bill.supplierCountry;
    if (bill.supplierEmail && !summary.supplierEmail) summary.supplierEmail = bill.supplierEmail;

    if (Array.isArray(bill.items)) {
      summary.itemsCount += bill.items.length;
      for (const item of bill.items) {
        summary.allItems.push({
          ...item,
          billId: bill.id,
          billNumber: bill.billNumber,
          purchaseDate: bill.date,
          billPaid: bill.paidAmount,
          billDue: bill.dueAmount,
          billStatus: bill.status
        });
      }
    }

    if (Array.isArray(bill.payments)) {
      for (const pay of bill.payments) {
        summary.allPayments.push({
          ...pay,
          billNumber: bill.billNumber,
          billId: bill.id
        });
      }
    }
  }

  // Also include any registered suppliers from globotech_erp_suppliers that have no bills yet
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('globotech_erp_suppliers');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          for (const s of parsed) {
            const key = (s.name || '').trim();
            if (key && !delSuppSet.has(key.toLowerCase()) && !map.has(key)) {
              map.set(key, {
                supplierName: key,
                supplierId: s.id || '',
                supplierCountry: s.country || '',
                supplierPhone: s.phone || '',
                supplierEmail: s.email || '',
                totalPurchased: 0,
                totalPaid: 0,
                totalDue: 0,
                billsCount: 0,
                itemsCount: 0,
                status: 'PAID',
                bills: [],
                allItems: [],
                allPayments: []
              });
            }
          }
        }
      }
    } catch (e) {
      // ignore
    }
  }

  // Determine overall company status
  Array.from(map.values()).forEach((summary) => {
    if (summary.totalDue <= 0) {
      summary.status = 'PAID';
    } else if (summary.totalPaid > 0) {
      summary.status = 'PARTIAL';
    } else {
      summary.status = 'UNPAID';
    }
  });

  return Array.from(map.values()).sort((a, b) => b.totalDue - a.totalDue);
}
