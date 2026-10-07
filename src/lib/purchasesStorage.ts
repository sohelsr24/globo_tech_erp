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

// Realistic seed data connecting existing suppliers and actual catalog products
export const INITIAL_PURCHASES: PurchaseBillRecord[] = [
  {
    id: 'PUR-HIK-001',
    billNumber: 'PO-HIK-2026-001',
    supplierId: 'supp-001',
    supplierName: 'Shenzhen Hikvision Security Tech Co., Ltd',
    supplierCountry: 'China',
    supplierPhone: '+86 755 8899 1234',
    supplierEmail: 'export@hikvision-sz.cn',
    date: '2026-09-02',
    dueDate: '2026-10-15',
    items: [
      {
        id: 'pi-1',
        productId: 'PRD-CCTV-01',
        productName: 'Hikvision 4MP ColorVu Bullet IP Camera (DS-2CD2047G2-LU)',
        sku: 'HK-DS2CD2047G2',
        category: 'CCTV & Security',
        quantity: 100,
        unit: 'pcs',
        unitPrice: 8000,
        totalPrice: 800000,
        notes: 'Ocean freight shipment batch #1'
      },
      {
        id: 'pi-2',
        productId: 'PRD-NVR-01',
        productName: 'Hikvision 8-Channel 4K AcuSense NVR (DS-7608NXI-I2/8P)',
        sku: 'HK-DS7608NXI',
        category: 'CCTV & Security',
        quantity: 10,
        unit: 'pcs',
        unitPrice: 15000,
        totalPrice: 150000,
        notes: 'Direct factory supply'
      }
    ],
    subtotal: 950000,
    taxOrDuty: 0,
    totalAmount: 950000,
    paidAmount: 800000,
    dueAmount: 150000,
    status: 'PARTIAL',
    payments: [
      {
        id: 'pay-hik-1',
        date: '2026-09-02',
        amount: 500000,
        paymentMethod: 'TT / LC',
        referenceNo: 'TT-BOC-88910-SHZ',
        bankName: 'Eastern Bank PLC',
        note: 'Telegraphic Transfer 50% Advance via Bank of China',
        createdAt: '2026-09-02T10:30:00Z'
      },
      {
        id: 'pay-hik-2',
        date: '2026-09-18',
        amount: 300000,
        paymentMethod: 'Bank Transfer',
        referenceNo: 'EBL-FT-44219',
        bankName: 'Eastern Bank PLC',
        note: 'Arrival interim release payment',
        createdAt: '2026-09-18T14:15:00Z'
      }
    ],
    notes: 'Chattogram Sea Port customs cleared. Final balance due on delivery inspection.',
    createdAt: '2026-09-02T10:00:00Z',
    updatedAt: '2026-09-18T14:15:00Z'
  },
  {
    id: 'PUR-HIK-002',
    billNumber: 'PO-HIK-2026-002',
    supplierId: 'supp-001',
    supplierName: 'Shenzhen Hikvision Security Tech Co., Ltd',
    supplierCountry: 'China',
    supplierPhone: '+86 755 8899 1234',
    supplierEmail: 'export@hikvision-sz.cn',
    date: '2026-09-24',
    dueDate: '2026-10-25',
    items: [
      {
        id: 'pi-3',
        productId: 'PRD-PTZ-01',
        productName: 'Hikvision PTZ 25x Optical Zoom Speed Dome Camera (DS-2DE4425IW-DE)',
        sku: 'HK-DS2DE4425',
        category: 'CCTV & Security',
        quantity: 5,
        unit: 'pcs',
        unitPrice: 35000,
        totalPrice: 175000,
        notes: 'High-speed highway project cameras'
      }
    ],
    subtotal: 175000,
    taxOrDuty: 0,
    totalAmount: 175000,
    paidAmount: 75000,
    dueAmount: 100000,
    status: 'PARTIAL',
    payments: [
      {
        id: 'pay-hik-3',
        date: '2026-09-24',
        amount: 75000,
        paymentMethod: 'Bank Transfer',
        referenceNo: 'BRAC-TT-99021',
        bankName: 'BRAC Bank PLC',
        note: 'Booking advance payment',
        createdAt: '2026-09-24T11:00:00Z'
      }
    ],
    notes: 'Special project dispatch order.',
    createdAt: '2026-09-24T11:00:00Z',
    updatedAt: '2026-09-24T11:00:00Z'
  },
  {
    id: 'PUR-DAH-001',
    billNumber: 'PO-DAH-2026-001',
    supplierId: 'supp-002',
    supplierName: 'Guangzhou Dahua Optics & AI Electronics',
    supplierCountry: 'China',
    supplierPhone: '+86 20 8765 4321',
    supplierEmail: 'helen.lin@dahua-gz.com',
    date: '2026-09-10',
    dueDate: '2026-10-10',
    items: [
      {
        id: 'pi-4',
        productId: 'PRD-DAH-DOME',
        productName: 'Dahua 4MP WizSense Full-Color Dome Camera (DH-IPC-HDBW3449E-AS-NI)',
        sku: 'DH-IPC-HDBW3449',
        category: 'CCTV & Security',
        quantity: 50,
        unit: 'pcs',
        unitPrice: 7500,
        totalPrice: 375000,
        notes: 'AI smart perimeter detection'
      },
      {
        id: 'pi-5',
        productId: 'PRD-DAH-NVR',
        productName: 'Dahua 16-Channel 2-HDD PoE 4K NVR (DHI-NVR4216-16P-4KS2)',
        sku: 'DH-NVR4216',
        category: 'CCTV & Security',
        quantity: 5,
        unit: 'pcs',
        unitPrice: 22000,
        totalPrice: 110000,
        notes: 'Commercial installation package'
      }
    ],
    subtotal: 485000,
    taxOrDuty: 0,
    totalAmount: 485000,
    paidAmount: 350000,
    dueAmount: 135000,
    status: 'PARTIAL',
    payments: [
      {
        id: 'pay-dah-1',
        date: '2026-09-10',
        amount: 200000,
        paymentMethod: 'Bank Transfer',
        referenceNo: 'BRAC-TXN-10992',
        bankName: 'BRAC Bank PLC',
        note: 'Telegraphic advance remittance',
        createdAt: '2026-09-10T09:45:00Z'
      },
      {
        id: 'pay-dah-2',
        date: '2026-09-22',
        amount: 150000,
        paymentMethod: 'Cheque',
        referenceNo: 'CHQ-DBBL-552140',
        bankName: 'Dutch-Bangla Bank PLC',
        note: 'Port dispatch payment installment',
        createdAt: '2026-09-22T16:20:00Z'
      }
    ],
    notes: 'Delivered to Tejgaon Central Warehouse. Remaining balance pending final signoff.',
    createdAt: '2026-09-10T09:30:00Z',
    updatedAt: '2026-09-22T16:20:00Z'
  },
  {
    id: 'PUR-TPL-001',
    billNumber: 'PO-TPL-2026-001',
    supplierId: 'supp-003',
    supplierName: 'Hangzhou TP-Link Communication Equip Co.',
    supplierCountry: 'China',
    supplierPhone: '+86 571 8822 3344',
    supplierEmail: 'zhang.wei@tp-hangzhou.cn',
    date: '2026-09-14',
    dueDate: '2026-10-20',
    items: [
      {
        id: 'pi-6',
        productId: 'PRD-TPL-SW24',
        productName: 'TP-Link 24-Port Gigabit Managed PoE+ Switch (TL-SG3428MP)',
        sku: 'TPL-SG3428MP',
        category: 'Networking',
        quantity: 50,
        unit: 'pcs',
        unitPrice: 20000,
        totalPrice: 1000000,
        notes: 'Layer 2+ enterprise rackmount switches'
      },
      {
        id: 'pi-7',
        productId: 'PRD-TPL-EAP',
        productName: 'TP-Link Omada Ceiling Mount Wi-Fi 6 Access Point (EAP653)',
        sku: 'TPL-EAP653',
        category: 'Networking',
        quantity: 25,
        unit: 'pcs',
        unitPrice: 8500,
        totalPrice: 212500,
        notes: 'AX3000 high-density APs'
      }
    ],
    subtotal: 1212500,
    taxOrDuty: 0,
    totalAmount: 1212500,
    paidAmount: 1000000,
    dueAmount: 212500,
    status: 'PARTIAL',
    payments: [
      {
        id: 'pay-tpl-1',
        date: '2026-09-14',
        amount: 1000000,
        paymentMethod: 'TT / LC',
        referenceNo: 'SCB-LC-771203-TPL',
        bankName: 'Standard Chartered Bank',
        note: 'Confirmed Letter of Credit LC 60 Days',
        createdAt: '2026-09-14T12:00:00Z'
      }
    ],
    notes: 'LC maturity October 20. Balance due upon maturity.',
    createdAt: '2026-09-14T11:30:00Z',
    updatedAt: '2026-09-14T12:00:00Z'
  },
  {
    id: 'PUR-TDT-001',
    billNumber: 'PO-TDT-2026-001',
    supplierId: 'supp-004',
    supplierName: 'TechData Distribution Pte Ltd',
    supplierCountry: 'Singapore',
    supplierPhone: '+65 6234 5678',
    supplierEmail: 'orders.sg@techdata.com',
    date: '2026-09-18',
    dueDate: '2026-09-25',
    items: [
      {
        id: 'pi-8',
        productId: 'PRD-CS-C9300',
        productName: 'Cisco Catalyst 9300 24-Port Gigabit Modular Switch (C9300-24P-A)',
        sku: 'CS-C9300-24P-A',
        category: 'Networking',
        quantity: 4,
        unit: 'pcs',
        unitPrice: 345000,
        totalPrice: 1380000,
        notes: 'Data center core network backbone'
      }
    ],
    subtotal: 1380000,
    taxOrDuty: 0,
    totalAmount: 1380000,
    paidAmount: 1380000,
    dueAmount: 0,
    status: 'PAID',
    payments: [
      {
        id: 'pay-tdt-1',
        date: '2026-09-18',
        amount: 1380000,
        paymentMethod: 'Bank Transfer',
        referenceNo: 'CITY-FT-99411-SG',
        bankName: 'City Bank PLC',
        note: 'Full payment via Swift TT to Singapore DBS Account',
        createdAt: '2026-09-18T15:00:00Z'
      }
    ],
    notes: 'Fully cleared and inspected at airport cargo depot.',
    createdAt: '2026-09-18T14:00:00Z',
    updatedAt: '2026-09-18T15:00:00Z'
  },
  {
    id: 'PUR-WD-001',
    billNumber: 'PO-WD-2026-001',
    supplierId: 'supp-005',
    supplierName: 'Western Digital & Seagate Storage Distribution',
    supplierCountry: 'Singapore',
    supplierPhone: '+65 6789 0123',
    supplierEmail: 'enterprise@wd-seagate.sg',
    date: '2026-09-20',
    dueDate: '2026-10-30',
    items: [
      {
        id: 'pi-9',
        productId: 'PRD-SG-SKY-10TB',
        productName: 'Seagate SkyHawk 10TB Surveillance Hard Drive (ST10000VX0004)',
        sku: 'SG-SKY-10TB',
        category: 'Storage',
        quantity: 20,
        unit: 'pcs',
        unitPrice: 28000,
        totalPrice: 560000,
        notes: 'Surveillance optimized 256MB Cache 7200RPM'
      }
    ],
    subtotal: 560000,
    taxOrDuty: 0,
    totalAmount: 560000,
    paidAmount: 400000,
    dueAmount: 160000,
    status: 'PARTIAL',
    payments: [
      {
        id: 'pay-wd-1',
        date: '2026-09-20',
        amount: 400000,
        paymentMethod: 'Bank Transfer',
        referenceNo: 'UCBL-901124-SG',
        bankName: 'United Commercial Bank (UCB)',
        note: 'Advance wire transfer',
        createdAt: '2026-09-20T11:45:00Z'
      }
    ],
    notes: 'Warehouse batch serial tracked.',
    createdAt: '2026-09-20T10:30:00Z',
    updatedAt: '2026-09-20T11:45:00Z'
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
        return parsed;
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
  const allBills = getStoredPurchases();
  const filteredBills = allBills.filter(
    (bill) => bill.supplierName.trim().toLowerCase() !== supplierName.trim().toLowerCase()
  );

  saveStoredPurchases(filteredBills);

  // Also remove from globotech_erp_suppliers if present
  if (typeof window !== 'undefined') {
    try {
      const savedSuppliers = localStorage.getItem('globotech_erp_suppliers');
      if (savedSuppliers) {
        const parsedSuppliers = JSON.parse(savedSuppliers);
        if (Array.isArray(parsedSuppliers)) {
          const remainingSuppliers = parsedSuppliers.filter(
            (s: any) => s.name && s.name.trim().toLowerCase() !== supplierName.trim().toLowerCase()
          );
          localStorage.setItem('globotech_erp_suppliers', JSON.stringify(remainingSuppliers));
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
      const saved = localStorage.getItem('globotech_erp_suppliers');
      const list = saved ? JSON.parse(saved) : [];
      const newEntry = {
        id: `supp-${Date.now()}`,
        name: supplier.name.trim(),
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

  for (const bill of bills) {
    const key = (bill.supplierName || 'Unknown Company').trim();
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
            if (key && !map.has(key)) {
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
