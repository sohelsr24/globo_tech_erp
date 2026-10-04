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
  ArrowLeft,
  FileText,
  Sparkles,
  Filter,
  X,
  Info,
  Paperclip,
  Upload,
  Download,
  ExternalLink,
  File,
  AlertCircle,
  ChevronDown,
  Truck,
  Tag,
  Barcode,
  Hash
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Formatters, formatBDT, numberToWordsBDT } from '@/lib/formatters';
import { Quotation, INITIAL_QUOTATIONS } from '@/components/modules/QuotationView';
import { Customer, INITIAL_CUSTOMERS } from '@/components/modules/CustomersView';
import { mirrorToIndexedDB } from '@/lib/erpBackup';
import { forceImmediateBackup } from '@/lib/autoBackupDaemon';

export interface POAttachment {
  id: string;
  name: string;
  size: number;
  type: string;
  dataUrl: string;
  uploadedAt: string;
  notes?: string;
}

export interface BillInvoiceItem {
  id: string;
  itemNo: number;
  sku?: string;
  partNo?: string;        // e.g. "CP-UTP-C6-305M" or Manufacturer Model
  serialNumbers?: string; // e.g. "HK-2026-9812A, HK-2026-9813B"
  name: string;
  description: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export type BillInvoiceStatus = 'DRAFT' | 'ISSUED' | 'PAID' | 'PARTIAL' | 'CANCELLED';

export const BILL_STATUS_THEME: Record<
  BillInvoiceStatus,
  { label: string; dot: string; bg: string; text: string; border: string; desc: string }
> = {
  ISSUED: {
    label: 'ISSUED',
    dot: 'bg-amber-400',
    bg: 'bg-amber-950/80 hover:bg-amber-900/90',
    text: 'text-amber-300',
    border: 'border-amber-800/80 hover:border-amber-600',
    desc: 'Issued & Awaiting Collection'
  },
  PAID: {
    label: 'PAID',
    dot: 'bg-emerald-400',
    bg: 'bg-emerald-950/80 hover:bg-emerald-900/90',
    text: 'text-emerald-300',
    border: 'border-emerald-800/80 hover:border-emerald-600',
    desc: 'Fully Paid & Collected'
  },
  PARTIAL: {
    label: 'PARTIAL',
    dot: 'bg-cyan-400',
    bg: 'bg-cyan-950/80 hover:bg-cyan-900/90',
    text: 'text-cyan-300',
    border: 'border-cyan-800/80 hover:border-cyan-600',
    desc: 'Partially Paid'
  },
  DRAFT: {
    label: 'DRAFT',
    dot: 'bg-slate-400',
    bg: 'bg-slate-800 hover:bg-slate-750',
    text: 'text-slate-300',
    border: 'border-slate-700 hover:border-slate-500',
    desc: 'Draft Invoice'
  },
  CANCELLED: {
    label: 'CANCELLED',
    dot: 'bg-rose-400',
    bg: 'bg-rose-950/80 hover:bg-rose-900/90',
    text: 'text-rose-300',
    border: 'border-rose-800/80 hover:border-rose-600',
    desc: 'Void or Cancelled'
  }
};

export interface BillInvoice {
  id: string;
  billNo: string;
  date: string;
  poNumber: string;
  poAttachment?: POAttachment;
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

export const SAMPLE_DARAZ_PO_ATTACHMENT: POAttachment = {
  id: 'po-att-26107',
  name: 'POBD9729-1_Daraz_Purchase_Order.svg',
  size: 3840,
  type: 'image/svg+xml',
  dataUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="700" height="900" viewBox="0 0 700 900" style="background:%23ffffff;font-family:sans-serif;"><rect width="700" height="900" fill="%23ffffff"/><rect x="30" y="30" width="640" height="840" fill="none" stroke="%23ff6600" stroke-width="3" rx="8"/><text x="50" y="75" font-size="24" font-weight="bold" fill="%23ff6600">DARAZ BANGLADESH LIMITED</text><text x="50" y="100" font-size="12" fill="%23555555">Asfia Tower, House-76/B, Road-11, Banani, Dhaka-1213</text><text x="50" y="118" font-size="12" fill="%23555555">BIN: 004728009-0202 | TIN: 169493772750</text><rect x="50" y="140" width="600" height="40" fill="%23fff2e6" rx="4"/><text x="65" y="166" font-size="18" font-weight="bold" fill="%23d9480f">OFFICIAL PURCHASE ORDER (PO)</text><text x="440" y="166" font-size="14" font-weight="bold" fill="%23333333">PO NO: POBD9729-1</text><rect x="50" y="195" width="290" height="110" fill="%23f8f9fa" stroke="%23e9ecef" rx="4"/><text x="65" y="218" font-size="13" font-weight="bold" fill="%23212529">Vendor / Supplier:</text><text x="65" y="240" font-size="13" font-weight="bold" fill="%23ff6600">GLOBO TECH</text><text x="65" y="258" font-size="11" fill="%23495057">12/13 Motijheel C/A, Dhaka-1000</text><text x="65" y="276" font-size="11" fill="%23495057">Contact: Engr. Sohel Rana (01622-152133)</text><rect x="360" y="195" width="290" height="110" fill="%23f8f9fa" stroke="%23e9ecef" rx="4"/><text x="375" y="218" font-size="13" font-weight="bold" fill="%23212529">Delivery Destination:</text><text x="375" y="240" font-size="12" font-weight="bold" fill="%23212529">Tejgaon Sort DC (Daraz HUB)</text><text x="375" y="258" font-size="11" fill="%23495057">Recipient: Rony (Phone: 01999074461)</text><text x="375" y="276" font-size="11" fill="%23495057">PO Date: 23-Feb-2026</text><rect x="50" y="325" width="600" height="30" fill="%23ff6600"/><text x="65" y="345" font-size="12" font-weight="bold" fill="%23ffffff">SL</text><text x="100" y="345" font-size="12" font-weight="bold" fill="%23ffffff">Item Description</text><text x="360" y="345" font-size="12" font-weight="bold" fill="%23ffffff">Qty</text><text x="420" y="345" font-size="12" font-weight="bold" fill="%23ffffff">Unit</text><text x="480" y="345" font-size="12" font-weight="bold" fill="%23ffffff">Unit Price (BDT)</text><text x="590" y="345" font-size="12" font-weight="bold" fill="%23ffffff">Total (BDT)</text><rect x="50" y="355" width="600" height="40" fill="%23ffffff" stroke="%23e9ecef"/><text x="70" y="380" font-size="12" fill="%23333333">1</text><text x="100" y="375" font-size="12" font-weight="bold" fill="%23333333">Rosenberger UTP Cable</text><text x="100" y="390" font-size="10" fill="%23666666">Cat-6 UTP Pure Copper Cable (305M / Box)</text><text x="365" y="380" font-size="12" font-weight="bold" fill="%23333333">2</text><text x="425" y="380" font-size="12" font-weight="bold" fill="%23333333">Box</text><text x="495" y="380" font-size="12" font-weight="bold" fill="%23333333">19,000.00</text><text x="585" y="380" font-size="12" font-weight="bold" fill="%23333333">38,000.00</text><rect x="50" y="415" width="600" height="35" fill="%23fff2e6" stroke="%23ffd8a8"/><text x="420" y="438" font-size="13" font-weight="bold" fill="%23d9480f">Total PO Value (BDT):</text><text x="585" y="438" font-size="14" font-weight="bold" fill="%23d9480f">38,000.00</text><rect x="50" y="470" width="600" height="90" fill="%23f8f9fa" stroke="%23e9ecef" rx="4"/><text x="65" y="492" font-size="12" font-weight="bold" fill="%23212529">Terms &amp; Instructions:</text><text x="65" y="510" font-size="11" fill="%23495057">1. Payment: Within agreed deadline after supply verification.</text><text x="65" y="528" font-size="11" fill="%23495057">2. Vendor must provide official Pad Bill mentioning PO: POBD9729-1.</text><text x="65" y="546" font-size="11" fill="%23495057">3. Delivery Challan required upon handover at Tejgaon Sort DC.</text><line x1="80" y1="780" x2="220" y2="780" stroke="%23495057" stroke-dasharray="3,3"/><text x="105" y="800" font-size="11" fill="%23495057">Prepared By (Daraz)</text><line x1="480" y1="780" x2="620" y2="780" stroke="%23495057" stroke-dasharray="3,3"/><text x="490" y="800" font-size="11" font-weight="bold" fill="%23ff6600">Authorized Procurement</text><text x="510" y="816" font-size="10" fill="%23666666">Daraz Bangladesh LTD</text></svg>`,
  uploadedAt: '23-Feb-2026 10:15 AM'
};

export function fileToPOAttachment(file: File): Promise<POAttachment> {
  return new Promise((resolve, reject) => {
    if (file.size > 6 * 1024 * 1024) {
      reject(new Error('File size exceeds 6MB. Please choose a file under 6MB for smooth browser storage.'));
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      const attachment: POAttachment = {
        id: `po-att-${Date.now()}`,
        name: file.name,
        size: file.size,
        type: file.type || 'application/octet-stream',
        dataUrl,
        uploadedAt: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      resolve(attachment);
    };
    reader.onerror = () => reject(new Error('Failed to read file. Please try again.'));
    reader.readAsDataURL(file);
  });
}

export function downloadPOAttachment(attachment: POAttachment, poNumber?: string) {
  const link = document.createElement('a');
  link.href = attachment.dataUrl;
  link.download = attachment.name || `Customer_PO_${poNumber || 'document'}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Initial Sample Bill Invoices matching User's exact Pad Print bills (including GT/26145, GT/26144, GT/26143, GT/26107)
export const INITIAL_BILL_INVOICES: BillInvoice[] = [
  {
    id: 'bill-1791140000000',
    billNo: 'GT/26145',
    date: '04-Oct-2026',
    poNumber: '',
    quotationRef: 'QT-2026-029',
    quotationId: 'QT-2026-029',
    binNumber: '004728009-0202',
    tinNumber: '169493772750',
    billToName: 'Bangladesh Parliament',
    billToAddress: 'National Parliament House.',
    deliverToAddress: 'Deputy Speaker Doptor , Deputy Speaker Flag',
    deliverToName: 'Abdul Majid',
    deliverToPhone: '',
    items: [
      {
        id: 'bi-item-26145-1',
        itemNo: 1,
        sku: 'FLAG-DIGITAL-SS',
        partNo: 'Deputy Speaker indoor Digital Flag With SS Stand',
        serialNumbers: '',
        name: 'Deputy Speaker indoor Digital Flag With SS Stand',
        description: 'Deputy Speaker Indoor Flag with SS Stand full installation',
        unit: 'pcs',
        quantity: 1,
        unitPrice: 85000,
        amount: 85000
      }
    ],
    subTotal: 85000,
    vatTaxIncluded: false,
    vatTaxAmount: 0,
    grandTotal: 85000,
    amountInWords: 'Eighty Five Thousand Taka Only.',
    termsAndConditions: [
      '1. VAT&TAX : Excluded',
      '2. Payment: Cash on Delivery (COD)'
    ],
    bankAccountNo: '2051923010001',
    bankAccountTitle: 'Globo Tech',
    bankName: 'Brac Bank',
    bankBranchName: 'Bijoynagar',
    preparedBy: 'Engr. Sohel Rana',
    status: 'ISSUED',
    createdAt: '2026-10-04T18:00:00.000Z'
  },
  {
    id: 'bill-1791139957223',
    billNo: 'GT/26144',
    date: '05-Oct-2026',
    poNumber: '',
    quotationRef: 'QT-2026-025',
    quotationId: 'quote-1791015433001',
    binNumber: '004728009-0202',
    tinNumber: '169493772750',
    billToName: 'Bangladesh Parliament',
    billToAddress: 'National Parliament House.',
    deliverToAddress: 'Common Shaka',
    deliverToName: 'Abdul Majid',
    deliverToPhone: '',
    items: [
      {
        id: 'bi-item-1791015510969-1791139905131',
        itemNo: 1,
        sku: 'COATPINBOX',
        partNo: '',
        serialNumbers: '',
        name: 'Coat Pin Box',
        description: 'Coat Pin Box',
        unit: 'pcs',
        quantity: 150,
        unitPrice: 180,
        amount: 27000
      }
    ],
    subTotal: 27000,
    vatTaxIncluded: false,
    vatTaxAmount: 0,
    grandTotal: 27000,
    amountInWords: 'Twenty Seven Thousand Taka Only.',
    termsAndConditions: [
      '1. VAT&TAX : Excluded',
      '2. Payment: Cash on Delivery (COD)'
    ],
    bankAccountNo: '2051923010001',
    bankAccountTitle: 'Globo Tech',
    bankName: 'Brac Bank',
    bankBranchName: 'Bijoynagar',
    preparedBy: 'Engr. Sohel Rana',
    status: 'ISSUED',
    createdAt: '2026-10-04T18:52:37.223Z'
  },
  {
    id: 'bill-1791015962538',
    billNo: 'GT/26143',
    date: '03-Oct-2026',
    poNumber: '',
    quotationRef: 'QT-2026-026',
    quotationId: 'quote-1791015810208',
    binNumber: '004728009-0202',
    tinNumber: '169493772750',
    billToName: 'Bangladesh Parliament',
    billToAddress: 'National Parliament House.',
    deliverToAddress: 'Parliament Speaker Doptor',
    deliverToName: 'Abdul Majid',
    deliverToPhone: '',
    items: [
      {
        id: 'bi-item-1791015894960-1791015959920',
        itemNo: 1,
        sku: 'BOOKPMT',
        partNo: '',
        serialNumbers: '',
        name: 'A Tale of A  Dark Period  Book',
        description: 'All pages are 300gsm with a 600 gsm \ntop cover, and all pages are laminated  ',
        unit: 'pcs',
        quantity: 100,
        unitPrice: 950,
        amount: 95000
      }
    ],
    subTotal: 95000,
    vatTaxIncluded: false,
    vatTaxAmount: 0,
    grandTotal: 95000,
    amountInWords: 'Ninety Five Thousand Taka Only.',
    termsAndConditions: [
      '1. VAT&TAX : Excluded',
      '2. Payment: Cash on Delivery (COD)'
    ],
    bankAccountNo: '2051923010001',
    bankAccountTitle: 'Globo Tech',
    bankName: 'Brac Bank',
    bankBranchName: 'Bijoynagar',
    preparedBy: 'Engr. Sohel Rana',
    status: 'ISSUED',
    createdAt: '2026-10-03T08:26:02.538Z'
  },
  {
    id: 'bill-26107',
    billNo: 'GT/26107',
    date: '23-Feb-26',
    poNumber: 'POBD9729-1',
    poAttachment: SAMPLE_DARAZ_PO_ATTACHMENT,
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
        sku: 'RB-CAT6-305M',
        partNo: 'CP-UTP-C6-305M',
        serialNumbers: 'RB-2026-9901A, RB-2026-9902B',
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
  }
];

// Automatically generates the next sequential Bill Invoice number based on existing bills.
// Format: GT/YYNNN (e.g., GT/26109 when GT/26107 & GT/26108 exist)
export function generateNextBillNo(existingBills: BillInvoice[]): string {
  const currentYear = new Date().getFullYear();
  const yearSuffix = currentYear.toString().slice(-2); // "26"
  const prefix = `GT/${yearSuffix}`;

  let maxSeq = 100; // Will start at 101 if no bills exist for the year

  const billsList = Array.isArray(existingBills) && existingBills.length > 0 ? existingBills : INITIAL_BILL_INVOICES;

  billsList.forEach((b) => {
    if (!b || !b.billNo) return;
    const cleanStr = b.billNo.trim();
    // Match GT/26108, GT-26108, GT26108, 26108
    const match = cleanStr.match(/(?:GT[/-]?)?(\d{2})(\d{3,})/i);
    if (match) {
      const billYear = match[1];
      const seq = parseInt(match[2], 10);
      if (billYear === yearSuffix && !isNaN(seq)) {
        if (seq > maxSeq) {
          maxSeq = seq;
        }
      }
    }
  });

  return `${prefix}${maxSeq + 1}`;
}

export function BillInvoiceView({
  initialSelectedQuoteId,
  globalSearchQuery
}: {
  initialSelectedQuoteId?: string;
  globalSearchQuery?: string;
} = {}) {
  const [bills, setBills] = useState<BillInvoice[]>(() => {
    if (typeof window !== 'undefined') {
      const deletedBillIds = new Set<string>(['bill-26108', 'GT/26108']);
      try {
        const delSaved = localStorage.getItem('globotech_erp_deleted_bill_ids');
        if (delSaved) {
          const parsedDel = JSON.parse(delSaved);
          if (Array.isArray(parsedDel)) {
            parsedDel.forEach((id: string) => deletedBillIds.add(id));
          }
        }
      } catch (e) {}

      const savedBills = localStorage.getItem('globotech_erp_bill_invoices');
      if (savedBills) {
        try {
          const parsed = JSON.parse(savedBills);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const cleanBills = parsed.filter(
              (b: BillInvoice) =>
                !deletedBillIds.has(b.id) &&
                !deletedBillIds.has(b.billNo) &&
                b.id !== 'bill-26108' &&
                b.billNo !== 'GT/26108'
            );
            const existingNos = new Set(cleanBills.map((b: BillInvoice) => b.billNo));
            const missingInitials = INITIAL_BILL_INVOICES.filter(
              (initB) => !existingNos.has(initB.billNo) && !deletedBillIds.has(initB.id) && !deletedBillIds.has(initB.billNo)
            );
            return [...missingInitials, ...cleanBills].map((b: BillInvoice) => {
              if (b.id === 'bill-26107' && !b.poAttachment) {
                return { ...b, poAttachment: SAMPLE_DARAZ_PO_ATTACHMENT };
              }
              return b;
            });
          }
        } catch (e) {}
      }
      return INITIAL_BILL_INVOICES.filter(
        (initB) =>
          !deletedBillIds.has(initB.id) &&
          !deletedBillIds.has(initB.billNo) &&
          initB.id !== 'bill-26108' &&
          initB.billNo !== 'GT/26108'
      );
    }
    return INITIAL_BILL_INVOICES;
  });

  const [quotations, setQuotations] = useState<Quotation[]>(() => {
    if (typeof window !== 'undefined') {
      const savedQuotes = localStorage.getItem('globotech_erp_quotations');
      if (savedQuotes) {
        try {
          const parsedQuotes = JSON.parse(savedQuotes);
          if (Array.isArray(parsedQuotes)) {
            return parsedQuotes;
          }
        } catch (e) {}
      }
    }
    return INITIAL_QUOTATIONS;
  });
  const [customers, setCustomers] = useState<Customer[]>(() => {
    if (typeof window !== 'undefined') {
      const delSaved = localStorage.getItem('globotech_erp_deleted_customer_ids');
      const deletedCustIds = new Set<string>(delSaved ? JSON.parse(delSaved) : []);

      const saved = localStorage.getItem('globotech_erp_customers');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        } catch (e) {}
      }
      return INITIAL_CUSTOMERS.filter((c) => !deletedCustIds.has(c.id) && !deletedCustIds.has(c.company || ''));
    }
    return INITIAL_CUSTOMERS;
  });
  const [isMounted, setIsMounted] = useState(false);

  // Sync customer changes across views/tabs
  useEffect(() => {
    const handleCustUpdate = (e: any) => {
      if (e?.detail && Array.isArray(e.detail)) {
        setCustomers(e.detail);
      } else if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('globotech_erp_customers');
        if (saved) {
          try {
            setCustomers(JSON.parse(saved));
          } catch (err) {}
        }
      }
    };
    window.addEventListener('globotech_customers_updated', handleCustUpdate);
    return () => window.removeEventListener('globotech_customers_updated', handleCustUpdate);
  }, []);

  // View Mode: 'LIST' or 'PREVIEW'
  const [activeViewMode, setActiveViewMode] = useState<'LIST' | 'PREVIEW'>('LIST');

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState(globalSearchQuery || '');
  const [statusFilter, setStatusFilter] = useState<'ALL' | BillInvoiceStatus>('ALL');

  useEffect(() => {
    if (globalSearchQuery !== undefined && globalSearchQuery !== searchQuery) {
      setSearchQuery(globalSearchQuery);
    }
  }, [globalSearchQuery]);

  // Modals & Active Records
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [activeBill, setActiveBill] = useState<BillInvoice | null>(INITIAL_BILL_INVOICES[0]);

  // Pad Print Settings
  const [padTopMarginMm, setPadTopMarginMm] = useState<number>(45); // Standard Bangladesh company pad header = 45mm
  const [usePreprintedPadMode, setUsePreprintedPadMode] = useState<boolean>(true); // TRUE = No digital letterhead/watermark/footer

  // Document Type for Preview & Print ('BILL' or 'CHALLAN')
  const [previewDocType, setPreviewDocType] = useState<'BILL' | 'CHALLAN'>('BILL');
  const [challanDeliveryMethod, setChallanDeliveryMethod] = useState<string>('Office Staff / By Hand');
  const [challanTransportNo, setChallanTransportNo] = useState<string>('');
  const [challanShowPrices, setChallanShowPrices] = useState<boolean>(false);

  // Quick Serials & Part Numbers Editor for Challan
  const [isSerialsModalOpen, setIsSerialsModalOpen] = useState<boolean>(false);
  const [serialsItems, setSerialsItems] = useState<BillInvoiceItem[]>([]);

  // Customer PO Document Attachment States
  const [selectedPOBill, setSelectedPOBill] = useState<BillInvoice | null>(null);
  const [isPOViewerOpen, setIsPOViewerOpen] = useState(false);
  const [isQuickAttachOpen, setIsQuickAttachOpen] = useState(false);
  const [quickAttachBill, setQuickAttachBill] = useState<BillInvoice | null>(null);
  const [quickAttachFile, setQuickAttachFile] = useState<File | null>(null);
  const [isUploadingPO, setIsUploadingPO] = useState(false);
  const [poFilterOnly, setPoFilterOnly] = useState(false);

  // Toast Notification
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  // Form State for Create / Edit
  const [editingBillId, setEditingBillId] = useState<string | null>(null);
  const [selectedQuoteId, setSelectedQuoteId] = useState<string>('');
  const [formData, setFormData] = useState<Partial<BillInvoice>>({
    billNo: generateNextBillNo(INITIAL_BILL_INVOICES),
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
        partNo: '',
        serialNumbers: '',
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
      // 1. Load Bill Invoices & permanently eradicate bill-26108
      const deletedBillIds = new Set<string>(['bill-26108', 'GT/26108']);
      try {
        const delSaved = localStorage.getItem('globotech_erp_deleted_bill_ids');
        if (delSaved) {
          const parsedDel = JSON.parse(delSaved);
          if (Array.isArray(parsedDel)) {
            parsedDel.forEach((id: string) => deletedBillIds.add(id));
          }
        }
      } catch (e) {}

      // Keep blacklist updated in localStorage
      try {
        localStorage.setItem('globotech_erp_deleted_bill_ids', JSON.stringify(Array.from(deletedBillIds)));
      } catch (e) {}

      const savedBills = localStorage.getItem('globotech_erp_bill_invoices');
      if (savedBills) {
        try {
          const parsed = JSON.parse(savedBills);
          if (Array.isArray(parsed)) {
            const cleanBills = parsed.filter(
              (b: BillInvoice) =>
                !deletedBillIds.has(b.id) &&
                !deletedBillIds.has(b.billNo) &&
                b.id !== 'bill-26108' &&
                b.billNo !== 'GT/26108'
            );
            const existingNos = new Set(cleanBills.map((b: BillInvoice) => b.billNo));
            const missingInitials = INITIAL_BILL_INVOICES.filter(
              (initB) => !existingNos.has(initB.billNo) && !deletedBillIds.has(initB.id) && !deletedBillIds.has(initB.billNo)
            );
            const combinedBills = [...missingInitials, ...cleanBills];
            const hydrated = combinedBills.map((b: BillInvoice) => {
              if (b.id === 'bill-26107' && !b.poAttachment) {
                return { ...b, poAttachment: SAMPLE_DARAZ_PO_ATTACHMENT };
              }
              return b;
            });
            setBills(hydrated);
            localStorage.setItem('globotech_erp_bill_invoices', JSON.stringify(hydrated));
            if (hydrated.length > 0 && !activeBill) {
              setActiveBill(hydrated[0]);
            }
          }
        } catch (e) {
          console.error('Error loading bill invoices from localStorage', e);
        }
      } else {
        const initialFiltered = INITIAL_BILL_INVOICES.filter(
          (initB) =>
            !deletedBillIds.has(initB.id) &&
            !deletedBillIds.has(initB.billNo) &&
            initB.id !== 'bill-26108' &&
            initB.billNo !== 'GT/26108'
        );
        localStorage.setItem('globotech_erp_bill_invoices', JSON.stringify(initialFiltered));
        setBills(initialFiltered);
      }

      // 2. Load Quotations
      const savedQuotes = localStorage.getItem('globotech_erp_quotations');
      if (savedQuotes) {
        try {
          const parsedQuotes = JSON.parse(savedQuotes);
          if (Array.isArray(parsedQuotes)) {
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
        window.dispatchEvent(new CustomEvent('globotech_bills_updated', { detail: bills }));
        forceImmediateBackup('bills_updated');
      } catch (e) {
        console.error('Error saving bill invoices:', e);
      }
    }
  }, [bills, isMounted]);

  // Listen for global backup restore event
  useEffect(() => {
    const handleBackupRestored = () => {
      if (typeof window !== 'undefined') {
        const savedBills = localStorage.getItem('globotech_erp_bill_invoices');
        if (savedBills) {
          try {
            setBills(JSON.parse(savedBills));
          } catch (e) {
            console.error('Error reloading bills after restore:', e);
          }
        }
        const savedQuotes = localStorage.getItem('globotech_erp_quotations');
        if (savedQuotes) {
          try {
            const parsedQuotes = JSON.parse(savedQuotes);
            if (Array.isArray(parsedQuotes)) {
              setQuotations(parsedQuotes);
            }
          } catch (e) {}
        }
      }
    };
    window.addEventListener('globotech_backup_restored', handleBackupRestored);

    const handleQuotesUpdated = (e: any) => {
      if (e?.detail && Array.isArray(e.detail)) {
        setQuotations(e.detail);
      } else if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('globotech_erp_quotations');
        if (saved) {
          try {
            setQuotations(JSON.parse(saved));
          } catch (err) {}
        }
      }
    };
    window.addEventListener('globotech_quotations_updated', handleQuotesUpdated);

    const handleBillsUpdated = (e: any) => {
      if (e?.detail && Array.isArray(e.detail)) {
        setBills(e.detail);
      } else if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('globotech_erp_bill_invoices');
        if (saved) {
          try {
            setBills(JSON.parse(saved));
          } catch (err) {}
        }
      }
    };
    window.addEventListener('globotech_bills_updated', handleBillsUpdated);

    return () => {
      window.removeEventListener('globotech_backup_restored', handleBackupRestored);
      window.removeEventListener('globotech_quotations_updated', handleQuotesUpdated);
      window.removeEventListener('globotech_bills_updated', handleBillsUpdated);
    };
  }, []);

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
    const generatedBillNo = generateNextBillNo(bills);

    const baseForm: Partial<BillInvoice> = {
      billNo: generatedBillNo,
      date: Formatters.date(new Date()),
      poNumber: '',
      binNumber: '',
      tinNumber: '',
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
      sku: (it as any).sku || '',
      partNo: (() => {
        const raw = (it as any).partNo || (it as any).model || '';
        return (raw && raw.trim().toLowerCase() !== (it.name || '').trim().toLowerCase()) ? raw : '';
      })(),
      serialNumbers: (it as any).serialNumbers || (it as any).serialNo || '',
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

    // Terms & Conditions (automatically reflect quotation VAT mode)
    const isQuoteExclusive = (targetQuote.vatTaxTerms || '').toLowerCase().includes('exclusive');
    const terms = [
      isQuoteExclusive ? '1. VAT&TAX : Excluded' : '1. VAT&TAX : Included',
      targetQuote.paymentTerms ? `2. Payment: ${targetQuote.paymentTerms}` : '2. Payment: Within Deadline'
    ];

    setFormData((prev) => {
      const stateToUse = currentFormState || prev;
      return {
        ...stateToUse,
        // Only use quote's reference if it exists; otherwise KEEP whatever manual PO number the user already entered
        poNumber: targetQuote.reference ? targetQuote.reference : (stateToUse.poNumber || ''),
        quotationRef: targetQuote.quotationNumber,
        quotationId: targetQuote.id,
        binNumber: targetQuote.customerBin || stateToUse.binNumber || '',
        billToName: targetQuote.customerCompany || targetQuote.customerName || stateToUse.billToName || '',
        billToAddress: targetQuote.customerAddress || stateToUse.billToAddress || '',
        deliverToAddress: deliveryLocation || stateToUse.deliverToAddress || '',
        deliverToName: deliverContactName || stateToUse.deliverToName || '',
        // If user already typed a delivery phone, keep it; otherwise fill with quotation contact phone
        deliverToPhone: stateToUse.deliverToPhone || deliverContactPhone || '',
        items: mappedItems,
        subTotal: totals.subTotal,
        vatTaxIncluded: !isQuoteExclusive,
        vatTaxAmount: 0,
        grandTotal: totals.grandTotal,
        amountInWords: totals.amountInWords,
        termsAndConditions: terms
      };
    });
  };

  // Quick Update Bill Status (ISSUED, PAID, PARTIAL, DRAFT, CANCELLED)
  const handleUpdateBillStatus = (billId: string, newStatus: BillInvoiceStatus) => {
    const target = bills.find((b) => b.id === billId);
    const targetNo = target?.billNo || billId;

    const updated = bills.map((b) => (b.id === billId ? { ...b, status: newStatus } : b));
    setBills(updated);

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('globotech_erp_bill_invoices', JSON.stringify(updated));
        window.dispatchEvent(new Event('storage'));
        window.dispatchEvent(new CustomEvent('globotech_bills_updated', { detail: updated }));
      } catch (e) {
        console.error('Failed to save updated bill status:', e);
      }
    }

    if (activeBill && activeBill.id === billId) {
      setActiveBill((prev) => (prev ? { ...prev, status: newStatus } : null));
    }

    showToast(`Bill ${targetNo} status set to ${newStatus}`);
  };

  // Open Edit Modal
  const handleOpenEditModal = (bill: BillInvoice) => {
    setEditingBillId(bill.id);
    setSelectedQuoteId(bill.quotationId || '');
    setFormData({ ...bill });
    setIsCreateModalOpen(true);
  };

  // Duplicate an existing bill with next sequential Bill NO
  const handleDuplicateBill = (bill: BillInvoice) => {
    const nextBillNo = generateNextBillNo(bills);
    const newBill: BillInvoice = {
      ...bill,
      id: `bill-${Date.now()}`,
      billNo: nextBillNo,
      date: Formatters.date(new Date()),
      status: 'ISSUED',
      createdAt: new Date().toISOString(),
      poAttachment: bill.poAttachment
        ? {
            ...bill.poAttachment,
            id: `po-att-${Date.now()}`
          }
        : undefined
    };
    setBills([newBill, ...bills]);
  };

  // Delete bill
  const handleDeleteBill = (id: string) => {
    if (confirm('Are you sure you want to delete this Bill Invoice?')) {
      const targetBill = bills.find((b) => b.id === id);
      const remaining = bills.filter(
        (b) => b.id !== id && (targetBill ? b.billNo !== targetBill.billNo : true)
      );
      setBills(remaining);
      if (typeof window !== 'undefined') {
        localStorage.setItem('globotech_erp_bill_invoices', JSON.stringify(remaining));
        try {
          const delSaved = localStorage.getItem('globotech_erp_deleted_bill_ids');
          const delList: string[] = delSaved ? JSON.parse(delSaved) : [];
          if (!delList.includes(id)) delList.push(id);
          if (targetBill && targetBill.billNo && !delList.includes(targetBill.billNo)) {
            delList.push(targetBill.billNo);
          }
          localStorage.setItem('globotech_erp_deleted_bill_ids', JSON.stringify(delList));
        } catch (e) {}

        // Mirror to IndexedDB immediately so dual-layer mirror doesn't bring it back
        try {
          window.dispatchEvent(new Event('storage'));
        } catch (e) {}
      }
      if (activeBill?.id === id || (targetBill && activeBill?.billNo === targetBill.billNo)) {
        setActiveBill(remaining[0] || null);
        setActiveViewMode('LIST');
      }
    }
  };

  // Open PO Document Viewer
  const handleOpenPOViewer = (bill: BillInvoice) => {
    setSelectedPOBill(bill);
    setIsPOViewerOpen(true);
  };

  // Open Quick PO Attachment Modal for a specific row in the table
  const handleOpenQuickAttach = (bill: BillInvoice) => {
    setQuickAttachBill(bill);
    setQuickAttachFile(null);
    setIsQuickAttachOpen(true);
  };

  // Handle Quick PO Attachment Submit
  const handleSaveQuickAttachment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickAttachBill || !quickAttachFile) {
      alert('Please select a PO document file (PDF or image).');
      return;
    }
    setIsUploadingPO(true);
    try {
      const attachment = await fileToPOAttachment(quickAttachFile);
      const updatedBills = bills.map((b) =>
        b.id === quickAttachBill.id ? { ...b, poAttachment: attachment } : b
      );
      setBills(updatedBills);
      if (activeBill?.id === quickAttachBill.id) {
        setActiveBill({ ...activeBill, poAttachment: attachment });
      }
      setIsQuickAttachOpen(false);
      setQuickAttachBill(null);
      setQuickAttachFile(null);
    } catch (err: any) {
      alert(err.message || 'Error processing PO file');
    } finally {
      setIsUploadingPO(false);
    }
  };

  // Remove PO Attachment from a bill
  const handleDeletePOAttachment = (billId: string) => {
    if (confirm('Are you sure you want to remove the PO attachment from this bill?')) {
      const updatedBills = bills.map((b) => {
        if (b.id === billId) {
          const { poAttachment, ...rest } = b;
          return rest as BillInvoice;
        }
        return b;
      });
      setBills(updatedBills);
      if (activeBill?.id === billId) {
        const { poAttachment, ...rest } = activeBill;
        setActiveBill(rest as BillInvoice);
      }
      if (selectedPOBill?.id === billId) {
        setIsPOViewerOpen(false);
        setSelectedPOBill(null);
      }
    }
  };

  // Handle File Upload inside Create/Edit Modal
  const handleFormFieldFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const attachment = await fileToPOAttachment(file);
      setFormData((prev) => ({ ...prev, poAttachment: attachment }));
    } catch (err: any) {
      alert(err.message || 'Error processing file');
    }
    e.target.value = '';
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

    let savedRecord: BillInvoice;

    if (editingBillId) {
      // Update existing
      savedRecord = {
        ...formData,
        id: editingBillId,
        items,
        subTotal: totals.subTotal,
        grandTotal: totals.grandTotal,
        amountInWords: totals.amountInWords,
        poAttachment: formData.poAttachment
      } as BillInvoice;

      setBills(bills.map((b) => (b.id === editingBillId ? savedRecord : b)));
    } else {
      // Create new
      savedRecord = {
        id: `bill-${Date.now()}`,
        billNo: formData.billNo?.trim() || generateNextBillNo(bills),
        date: formData.date || Formatters.date(new Date()),
        poNumber: formData.poNumber || '',
        poAttachment: formData.poAttachment,
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

      setBills([savedRecord, ...bills]);
    }

    setActiveBill(savedRecord);
    setIsCreateModalOpen(false);
    setActiveViewMode('PREVIEW');
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
        partNo: '',
        serialNumbers: '',
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
    const item = { ...currentItems[index] };

    if (field === 'quantity' || field === 'unitPrice') {
      (item as any)[field] = value;
      const q = field === 'quantity' ? (value === '' ? 0 : Number(value) || 0) : (Number(item.quantity) || 0);
      const p = field === 'unitPrice' ? (value === '' ? 0 : Number(value) || 0) : (Number(item.unitPrice) || 0);
      item.amount = q * p;
    } else {
      (item as any)[field] = value;
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

  // Switch to Full-Screen Preview
  const handleOpenPreview = (bill: BillInvoice, docType: 'BILL' | 'CHALLAN' = 'BILL') => {
    setActiveBill(bill);
    setPreviewDocType(docType);
    setActiveViewMode('PREVIEW');
  };

  // Open Delivery Challan Directly
  const handleOpenChallan = (bill: BillInvoice) => {
    handleOpenPreview(bill, 'CHALLAN');
  };

  // Open Quick Serials & Part Numbers Modal for Delivery Challan
  const handleOpenSerialsModal = () => {
    if (!activeBill) return;
    setSerialsItems(
      (activeBill.items || []).map((it) => ({
        ...it,
        partNo: it.partNo || '',
        serialNumbers: it.serialNumbers || ''
      }))
    );
    setIsSerialsModalOpen(true);
  };

  const handleUpdateSerialItem = (index: number, field: 'partNo' | 'serialNumbers', value: string) => {
    setSerialsItems((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  const handleSaveSerialsModal = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!activeBill) return;

    const updatedBill: BillInvoice = {
      ...activeBill,
      items: serialsItems
    };

    setActiveBill(updatedBill);
    const updatedBills = bills.map((b) => (b.id === updatedBill.id ? updatedBill : b));
    setBills(updatedBills);

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('globotech_erp_bill_invoices', JSON.stringify(updatedBills));
        window.dispatchEvent(new Event('storage'));
        window.dispatchEvent(new CustomEvent('globotech_bills_updated', { detail: updatedBills }));
      } catch (err) {
        console.error('Failed to save serials to localStorage:', err);
      }
    }

    setIsSerialsModalOpen(false);
    showToast(`Updated Serial Numbers & Part Nos for Challan DC/${updatedBill.billNo.replace('GT/', '')}`);
  };

  // 1-Click Interactive VAT/TAX Mode Toggle (Included vs Excluded)
  const handleToggleBillVatMode = (mode: 'INCLUDED' | 'EXCLUDED') => {
    if (!activeBill) return;
    const isIncluded = mode === 'INCLUDED';

    // Update terms and conditions: replace or update the VAT&TAX line
    const currentTerms = Array.isArray(activeBill.termsAndConditions) ? [...activeBill.termsAndConditions] : [];
    let foundVatLine = false;
    const updatedTerms = currentTerms.map((term) => {
      if (/vat\s*&?\s*tax/i.test(term)) {
        foundVatLine = true;
        return isIncluded ? '1. VAT&TAX : Included' : '1. VAT&TAX : Excluded';
      }
      return term;
    });

    if (!foundVatLine) {
      updatedTerms.unshift(isIncluded ? '1. VAT&TAX : Included' : '1. VAT&TAX : Excluded');
    }

    const updatedBill: BillInvoice = {
      ...activeBill,
      vatTaxIncluded: isIncluded,
      termsAndConditions: updatedTerms
    };

    setActiveBill(updatedBill);
    const updatedBills = bills.map((b) => (b.id === updatedBill.id ? updatedBill : b));
    setBills(updatedBills);

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('globotech_erp_bill_invoices', JSON.stringify(updatedBills));
        window.dispatchEvent(new Event('storage'));
        window.dispatchEvent(new CustomEvent('globotech_bills_updated', { detail: updatedBills }));
        mirrorToIndexedDB().catch(() => {});
      } catch (err) {
        console.error('Failed to save bill VAT mode to localStorage:', err);
      }
    }

    showToast(`✓ VAT & TAX set to ${isIncluded ? 'Included' : 'Excluded'}`);
  };

  // Robust isolated printing engine (guarantees 100% data visibility on A4 pad without clipping)
  const handlePrintBill = () => {
    const printElement = document.getElementById('printable-bill-invoice');
    if (!printElement) {
      window.print();
      return;
    }

    try {
      // Remove any prior print frame
      const oldFrame = document.getElementById('isolated-bill-print-frame');
      if (oldFrame) {
        oldFrame.remove();
      }

      // Create a clean hidden iframe
      const printIframe = document.createElement('iframe');
      printIframe.id = 'isolated-bill-print-frame';
      printIframe.style.position = 'fixed';
      printIframe.style.right = '0';
      printIframe.style.bottom = '0';
      printIframe.style.width = '0';
      printIframe.style.height = '0';
      printIframe.style.border = '0';
      document.body.appendChild(printIframe);

      const frameDoc = printIframe.contentWindow?.document;
      if (!frameDoc) {
        window.print();
        return;
      }

      const billHtml = printElement.innerHTML;
      const docTitle = previewDocType === 'CHALLAN'
        ? `Delivery Challan - DC-${activeBill?.billNo ? activeBill.billNo.replace('GT/', '') : 'GT'}`
        : `Bill Invoice - ${activeBill?.billNo || 'GT'}`;

      frameDoc.open();
      frameDoc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <title>${docTitle}</title>
            <style>
              @page {
                size: A4 portrait;
                margin: 8mm 10mm 8mm 10mm;
              }
              *, *::before, *::after {
                box-sizing: border-box;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              html, body {
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
                background-color: #ffffff !important;
                color: #000000 !important;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                -webkit-font-smoothing: antialiased;
              }
              .print-sheet {
                width: 100% !important;
                max-width: 190mm !important;
                min-height: auto !important;
                margin: 0 auto !important;
                padding-top: ${usePreprintedPadMode ? `${Math.max(0, padTopMarginMm - 8)}mm` : '2mm'} !important;
                padding-left: 2mm !important;
                padding-right: 2mm !important;
                padding-bottom: 4mm !important;
                box-sizing: border-box !important;
                background: #ffffff;
                color: #000000;
              }
              table {
                width: 100% !important;
                border-collapse: collapse !important;
              }
              thead {
                display: table-header-group !important;
              }
              tfoot {
                display: table-footer-group !important;
              }
              tr {
                page-break-inside: avoid !important;
                break-inside: avoid !important;
              }
              .no-print,
              .print\\:hidden,
              button {
                display: none !important;
              }
            </style>
          </head>
          <body>
            <div class="print-sheet">
              ${billHtml}
            </div>
          </body>
        </html>
      `);
      frameDoc.close();

      setTimeout(() => {
        printIframe.contentWindow?.focus();
        printIframe.contentWindow?.print();
        setTimeout(() => {
          printIframe.remove();
        }, 1500);
      }, 350);
    } catch (err) {
      console.error('Iframe print failed, falling back to window.print()', err);
      window.print();
    }
  };

  // Filtered Bills with high-accuracy Search for Bill NO, PO, Phone, and Client
  const filteredBills = useMemo(() => {
    const rawQuery = searchQuery.trim().toLowerCase();
    const cleanQuery = rawQuery.replace(/[\s\-/\\#.]/g, '');

    return bills.filter((b) => {
      // 1. Search Query Match
      let matchesSearch = true;
      if (rawQuery !== '') {
        const billNoLower = (b.billNo || '').toLowerCase();
        const cleanBillNo = billNoLower.replace(/[\s\-/\\#.]/g, '');

        const poLower = (b.poNumber || '').toLowerCase();
        const cleanPo = poLower.replace(/[\s\-/\\#.]/g, '');

        const phoneLower = (b.deliverToPhone || '').toLowerCase();
        const cleanPhone = phoneLower.replace(/\D/g, '');
        const queryDigits = rawQuery.replace(/\D/g, '');

        const billToName = (b.billToName || '').toLowerCase();
        const deliverToName = (b.deliverToName || '').toLowerCase();
        const deliverToAddress = (b.deliverToAddress || '').toLowerCase();
        const quotationRef = (b.quotationRef || '').toLowerCase();

        // Check Bill NO (flexible matching: "26107", "GT/26107", "GT 26107", "gt26107")
        const matchesBillNo =
          billNoLower.includes(rawQuery) ||
          (cleanQuery.length >= 2 && cleanBillNo.includes(cleanQuery)) ||
          cleanBillNo.endsWith(cleanQuery);

        // Check PO Number (e.g. POBD9729-1, 9729)
        const matchesPo =
          poLower.includes(rawQuery) ||
          (cleanQuery.length >= 2 && cleanPo.includes(cleanQuery));

        // Check Phone Number (e.g. 1999074461, 01999)
        const matchesPhone =
          phoneLower.includes(rawQuery) ||
          (queryDigits.length >= 3 && cleanPhone.includes(queryDigits));

        // Check Client & Deliver To
        const matchesClient =
          billToName.includes(rawQuery) ||
          deliverToName.includes(rawQuery) ||
          deliverToAddress.includes(rawQuery);

        // Check Quotation Reference
        const matchesQuote = quotationRef.includes(rawQuery);

        // Check Items (Name, Description, SKU)
        const matchesItem = (b.items || []).some(
          (it) =>
            (it.name || '').toLowerCase().includes(rawQuery) ||
            (it.description || '').toLowerCase().includes(rawQuery) ||
            ((it as any).sku || '').toLowerCase().includes(rawQuery)
        );

        // Also check linked quotation items (e.g. if quote had SKU or name)
        const linkedQuote = quotations.find(
          (q) => q.id === b.quotationId || q.quotationNumber === b.quotationRef
        );
        const matchesLinkedQuoteItem = linkedQuote
          ? (linkedQuote.items || []).some(
              (qi) =>
                (qi.sku || '').toLowerCase().includes(rawQuery) ||
                (qi.name || '').toLowerCase().includes(rawQuery) ||
                (qi.model || '').toLowerCase().includes(rawQuery)
            )
          : false;

        // Check PO Attachment filename
        const poFileName = (b.poAttachment?.name || '').toLowerCase();
        const matchesPoFile = poFileName.includes(rawQuery);

        matchesSearch =
          matchesBillNo ||
          matchesPo ||
          matchesPoFile ||
          matchesPhone ||
          matchesClient ||
          matchesQuote ||
          matchesItem ||
          matchesLinkedQuoteItem;
      }

      // 2. Status Filter Match
      const matchesStatus = statusFilter === 'ALL' || b.status === statusFilter;

      // 3. PO Attachment Only Filter
      const matchesPoOnly = !poFilterOnly || Boolean(b.poAttachment);

      return matchesSearch && matchesStatus && matchesPoOnly;
    });
  }, [bills, searchQuery, statusFilter, poFilterOnly]);

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
      {/* ========================================================
          1. LIST VIEW MODE (Default Management Table)
          ======================================================== */}
      {activeViewMode === 'LIST' && (
        <>
          {/* Toast Notification */}
          {toastMsg && (
            <div className="fixed top-20 right-6 z-50 bg-emerald-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 border border-emerald-400/40 animate-bounce">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>{toastMsg}</span>
            </div>
          )}

          {/* Module Title & Quick Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-2xl shadow-xl backdrop-blur-md no-print">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
                <Receipt className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-slate-100">Bill Invoices &amp; Delivery Challans</h1>
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Pad Ready
                  </span>
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 hidden sm:inline">
                    Delivery Challan Ready
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Generate &amp; print client supply bills and official delivery challans (চালান) on pre-printed company pad or plain paper
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
                placeholder="Search by Bill NO (e.g. GT/26107, 26107), PO, Phone, Client..."
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

            {searchQuery.trim() && (
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <span>
                  Found <strong className="text-emerald-400">{filteredBills.length}</strong> matching bills
                </span>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-[11px] text-emerald-400 hover:underline font-semibold ml-1"
                >
                  Reset
                </button>
              </div>
            )}

            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <Filter className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              {(['ALL', 'ISSUED', 'PAID', 'PARTIAL', 'DRAFT', 'CANCELLED'] as const).map((st) => (
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

              <span className="text-slate-700">|</span>

              {/* Filter: PO Attached Only */}
              <button
                type="button"
                onClick={() => setPoFilterOnly(!poFilterOnly)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition flex items-center gap-1.5 ${
                  poFilterOnly
                    ? 'bg-teal-600 text-white shadow-sm ring-1 ring-teal-400 font-semibold'
                    : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
                }`}
                title="Show only bills that have customer Purchase Order (PO) document attached"
              >
                <Paperclip className="w-3.5 h-3.5 text-emerald-400" />
                <span>PO Attached ({bills.filter((b) => !!b.poAttachment).length})</span>
              </button>
            </div>
          </div>

          {/* Bill Invoices Table & Mobile Cards */}
          <div className="space-y-4 no-print">
            {/* Mobile Cards View (md:hidden) */}
            <div className="md:hidden space-y-3">
              {filteredBills.length === 0 ? (
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-500">
                  <Receipt className="w-8 h-8 mx-auto mb-2 text-slate-600 opacity-50" />
                  <p className="text-sm font-medium">No bill invoices found</p>
                  <p className="text-xs text-slate-600 mt-1">
                    Click &ldquo;Create Bill Invoice&rdquo; above to generate your first company pad bill from quotation.
                  </p>
                </div>
              ) : (
                filteredBills.map((bill) => (
                  <div
                    key={bill.id}
                    className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-md"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm font-bold text-emerald-400">
                            {bill.billNo}
                          </span>
                          <div className="relative inline-flex items-center group" title="Tap to update Bill Status">
                            <select
                              value={bill.status}
                              onChange={(e) => {
                                e.stopPropagation();
                                handleUpdateBillStatus(bill.id, e.target.value as BillInvoiceStatus);
                              }}
                              onClick={(e) => e.stopPropagation()}
                              className={`appearance-none cursor-pointer pl-5 pr-5 py-0.5 rounded-full text-[11px] font-semibold border transition shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50 ${
                                BILL_STATUS_THEME[bill.status]?.bg || 'bg-slate-800'
                              } ${
                                BILL_STATUS_THEME[bill.status]?.text || 'text-slate-300'
                              } ${
                                BILL_STATUS_THEME[bill.status]?.border || 'border-slate-700'
                              }`}
                            >
                              <option value="ISSUED" className="bg-slate-900 text-amber-300 font-medium">ISSUED</option>
                              <option value="PAID" className="bg-slate-900 text-emerald-300 font-medium">PAID</option>
                              <option value="PARTIAL" className="bg-slate-900 text-cyan-300 font-medium">PARTIAL</option>
                              <option value="DRAFT" className="bg-slate-900 text-slate-300 font-medium">DRAFT</option>
                              <option value="CANCELLED" className="bg-slate-900 text-rose-300 font-medium">CANCELLED</option>
                            </select>
                            <span
                              className={`w-1.5 h-1.5 rounded-full absolute left-2 pointer-events-none ${
                                BILL_STATUS_THEME[bill.status]?.dot || 'bg-slate-400'
                              }`}
                            />
                            <ChevronDown className="w-2.5 h-2.5 absolute right-1.5 pointer-events-none opacity-60" />
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">{bill.date}</p>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 uppercase block font-semibold">Grand Total</span>
                        <span className="font-mono font-bold text-slate-100 text-base">
                          {formatBDT(bill.grandTotal)}
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 space-y-2 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase font-semibold block">Client (Bill To)</span>
                        <p className="font-semibold text-slate-200">{bill.billToName}</p>
                        {bill.billToAddress && (
                          <p className="text-[11px] text-slate-400 truncate">{bill.billToAddress}</p>
                        )}
                      </div>

                      {(bill.deliverToName || bill.deliverToPhone || bill.deliverToAddress) && (
                        <div className="pt-1.5 border-t border-slate-800/60">
                          <span className="text-[10px] text-slate-500 uppercase font-semibold block">Delivered To</span>
                          <p className="text-slate-300 truncate">{bill.deliverToAddress || '—'}</p>
                          {(bill.deliverToName || bill.deliverToPhone) && (
                            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-0.5">
                              {bill.deliverToName && <span>{bill.deliverToName}</span>}
                              {bill.deliverToName && bill.deliverToPhone && <span className="text-slate-600">&bull;</span>}
                              {bill.deliverToPhone && (
                                <a
                                  href={`tel:${bill.deliverToPhone}`}
                                  className="font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[10px] underline"
                                >
                                  {bill.deliverToPhone}
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      <div className="pt-1.5 border-t border-slate-800/60 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase font-semibold block">PO Number</span>
                          {bill.poNumber ? (
                            <span className="bg-slate-800 px-1.5 py-0.5 rounded text-emerald-400 border border-slate-700/60 font-mono text-[11px]">
                              {bill.poNumber}
                            </span>
                          ) : (
                            <span className="text-slate-500 italic text-[11px]">None</span>
                          )}
                          {bill.quotationRef && (
                            <span className="text-[10px] text-sky-400 font-mono ml-2">
                              Ref: {bill.quotationRef}
                            </span>
                          )}
                        </div>

                        <div>
                          {bill.poAttachment ? (
                            <button
                              type="button"
                              onClick={() => handleOpenPOViewer(bill)}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[11px] font-medium"
                            >
                              <Paperclip className="w-3 h-3 text-emerald-400" />
                              <span className="truncate max-w-[110px]">{bill.poAttachment.name}</span>
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => handleOpenQuickAttach(bill)}
                              className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-emerald-400 py-1"
                            >
                              <Paperclip className="w-3 h-3" />
                              <span>+ Attach PO</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-5 gap-1.5 pt-1">
                      <button
                        onClick={() => handleOpenPreview(bill, 'BILL')}
                        className="col-span-2 min-h-[40px] px-2 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 font-bold text-xs border border-emerald-500/30 transition flex items-center justify-center gap-1 active:scale-95"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Bill (বিল)</span>
                      </button>
                      <button
                        onClick={() => handleOpenChallan(bill)}
                        className="col-span-1 min-h-[40px] px-1.5 py-1.5 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 font-bold text-xs border border-blue-500/30 transition flex items-center justify-center gap-1 active:scale-95"
                        title="Delivery Challan"
                      >
                        <Truck className="w-3.5 h-3.5" />
                        <span>চালান</span>
                      </button>
                      <button
                        onClick={() => handleOpenEditModal(bill)}
                        className="min-h-[40px] p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition flex items-center justify-center active:scale-95"
                        title="Edit Bill"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteBill(bill.id)}
                        className="min-h-[40px] p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 transition flex items-center justify-center active:scale-95"
                        title="Delete Bill"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Desktop Table View (hidden md:block) */}
            <div className="hidden md:block bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto touch-scroll max-h-[calc(100vh-250px)] min-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
                <table className="w-full text-left border-separate border-spacing-0 text-xs">
                  <thead>
                    <tr className="bg-slate-950/95 text-slate-400 uppercase text-[10px] tracking-wider font-semibold">
                      <th className="py-2.5 px-3 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800 whitespace-nowrap">Bill NO</th>
                      <th className="py-2.5 px-2.5 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800 whitespace-nowrap">Date</th>
                      <th className="py-2.5 px-3 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800">Client (Bill To)</th>
                      <th className="py-2.5 px-2.5 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800">PO / Quote Ref</th>
                      <th className="py-2.5 px-2.5 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800">Delivered To</th>
                      <th className="py-2.5 px-2 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800 text-right whitespace-nowrap">Items</th>
                      <th className="py-2.5 px-2.5 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800 text-right whitespace-nowrap">Grand Total</th>
                      <th className="py-2.5 px-2.5 bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800 text-center whitespace-nowrap">
                        <span className="inline-flex items-center gap-1">
                          Status
                          <span className="text-[10px] text-slate-500 font-normal hidden 2xl:inline">(&#9662; Quick Change)</span>
                        </span>
                      </th>
                      <th className="py-2.5 px-3 bg-slate-950/95 sticky top-0 right-0 z-30 border-b border-l border-slate-800 shadow-[-8px_0_12px_rgba(0,0,0,0.5)] text-right whitespace-nowrap">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    {filteredBills.length === 0 ? (
                      <tr>
                        <td colSpan={9} className="py-12 text-center text-slate-500 border-b border-slate-800/60">
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
                          <td className="py-2.5 px-3 font-mono font-bold text-emerald-400 border-b border-slate-800/60 whitespace-nowrap">
                            <div className="flex items-center gap-1.5">
                              <span>{bill.billNo}</span>
                              {searchQuery &&
                                (bill.billNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  bill.billNo.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().includes(searchQuery.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())) && (
                                  <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1 py-0.2 rounded font-sans uppercase font-bold">
                                    Match
                                  </span>
                                )}
                            </div>
                          </td>
                          <td className="py-2.5 px-2.5 whitespace-nowrap text-slate-400 text-[11px] border-b border-slate-800/60">
                            {bill.date}
                          </td>
                          <td className="py-2.5 px-3 border-b border-slate-800/60 max-w-[160px] xl:max-w-[200px]">
                            <div className="font-semibold text-slate-200 truncate" title={bill.billToName}>{bill.billToName}</div>
                            {bill.billToAddress && (
                              <div className="text-[11px] text-slate-500 truncate" title={bill.billToAddress}>{bill.billToAddress}</div>
                            )}
                          </td>
                          <td className="py-2.5 px-2.5 border-b border-slate-800/60 max-w-[125px]">
                            <div className="font-mono text-slate-200 font-medium">
                              {bill.poNumber ? (
                                <span className="bg-slate-800 px-1.5 py-0.5 rounded text-emerald-400 border border-slate-700/60 font-mono text-[10px]">
                                  {bill.poNumber}
                                </span>
                              ) : (
                                <span className="text-slate-600 italic text-[11px]">No PO</span>
                              )}
                            </div>
                            {bill.quotationRef && (
                              <div className="text-[10px] text-sky-400 font-mono flex items-center gap-1 mt-0.5 truncate" title={`Quotation Ref: ${bill.quotationRef}`}>
                                <span>Ref: {bill.quotationRef}</span>
                              </div>
                            )}

                            {/* Customer PO Attachment Indicator */}
                            {bill.poAttachment ? (
                              <div className="mt-1">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleOpenPOViewer(bill);
                                  }}
                                  className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-950/80 hover:bg-emerald-900 text-emerald-400 border border-emerald-800 text-[10px] font-medium transition active:scale-95 group/btn"
                                  title={`View Customer PO Document: ${bill.poAttachment.name} (${(bill.poAttachment.size / 1024).toFixed(0)} KB)`}
                                >
                                  <Paperclip className="w-2.5 h-2.5 text-emerald-400 group-hover/btn:rotate-12 transition-transform" />
                                  <span className="truncate max-w-[95px]">{bill.poAttachment.name}</span>
                                </button>
                              </div>
                            ) : (
                              <div className="mt-1">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleOpenQuickAttach(bill);
                                  }}
                                  className="inline-flex items-center gap-1 text-[10px] text-slate-500 hover:text-emerald-400 hover:underline transition"
                                  title="Attach client PO document to this bill"
                                >
                                  <Paperclip className="w-2.5 h-2.5" />
                                  <span>+ Attach PO</span>
                                </button>
                              </div>
                            )}
                          </td>
                          <td className="py-2.5 px-2.5 border-b border-slate-800/60 max-w-[130px] xl:max-w-[160px]">
                            <div className="text-slate-300 font-medium truncate" title={bill.deliverToAddress || '—'}>
                              {bill.deliverToAddress || '—'}
                            </div>
                            {(bill.deliverToName || bill.deliverToPhone) && (
                              <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5 truncate">
                                {bill.deliverToName && <span className="truncate" title={bill.deliverToName}>{bill.deliverToName}</span>}
                                {bill.deliverToName && bill.deliverToPhone && <span className="text-slate-600">&bull;</span>}
                                {bill.deliverToPhone && (
                                  <span className="font-mono text-emerald-400 bg-emerald-500/10 px-1 rounded text-[10px] shrink-0">
                                    {bill.deliverToPhone}
                                  </span>
                                )}
                              </div>
                            )}
                          </td>
                          <td className="py-2.5 px-2 text-right font-medium text-[11px] text-slate-400 border-b border-slate-800/60 whitespace-nowrap">
                            {bill.items.length} {bill.items.length === 1 ? 'item' : 'items'}
                          </td>
                          <td className="py-2.5 px-2.5 text-right font-bold text-slate-100 border-b border-slate-800/60 whitespace-nowrap">
                            {formatBDT(bill.grandTotal)}
                          </td>
                          <td className="py-2.5 px-2.5 text-center border-b border-slate-800/60 whitespace-nowrap">
                            <div className="relative inline-flex items-center group" title="Click to update Bill Status">
                              <select
                                value={bill.status}
                                onChange={(e) => {
                                  e.stopPropagation();
                                  handleUpdateBillStatus(bill.id, e.target.value as BillInvoiceStatus);
                                }}
                                onClick={(e) => e.stopPropagation()}
                                className={`appearance-none cursor-pointer pl-6 pr-6 py-0.5 rounded-full text-xs font-semibold border transition shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50 ${
                                  BILL_STATUS_THEME[bill.status]?.bg || 'bg-slate-800'
                                } ${
                                  BILL_STATUS_THEME[bill.status]?.text || 'text-slate-300'
                                } ${
                                  BILL_STATUS_THEME[bill.status]?.border || 'border-slate-700'
                                }`}
                              >
                                <option value="ISSUED" className="bg-slate-900 text-amber-300 font-medium">ISSUED</option>
                                <option value="PAID" className="bg-slate-900 text-emerald-300 font-medium">PAID</option>
                                <option value="PARTIAL" className="bg-slate-900 text-cyan-300 font-medium">PARTIAL</option>
                                <option value="DRAFT" className="bg-slate-900 text-slate-300 font-medium">DRAFT</option>
                                <option value="CANCELLED" className="bg-slate-900 text-rose-300 font-medium">CANCELLED</option>
                              </select>
                              <span
                                className={`w-1.5 h-1.5 rounded-full absolute left-2.5 pointer-events-none ${
                                  BILL_STATUS_THEME[bill.status]?.dot || 'bg-slate-400'
                                }`}
                              />
                              <ChevronDown className="w-3 h-3 absolute right-2 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </td>
                          <td className="py-2.5 px-3 text-right whitespace-nowrap sticky right-0 z-10 bg-slate-900/95 group-hover:bg-slate-850/95 backdrop-blur-md border-b border-l border-slate-800 shadow-[-8px_0_12px_rgba(0,0,0,0.5)]">
                            <div className="flex items-center justify-end gap-1">
                              {/* PO Attachment quick button */}
                              <button
                                type="button"
                                onClick={() => bill.poAttachment ? handleOpenPOViewer(bill) : handleOpenQuickAttach(bill)}
                                title={bill.poAttachment ? `View Customer PO (${bill.poAttachment.name})` : "Attach Customer PO Document"}
                                className={`p-1.5 rounded-lg transition active:scale-95 ${
                                  bill.poAttachment
                                    ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/30'
                                    : 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200'
                                }`}
                              >
                                <Paperclip className="w-3.5 h-3.5" />
                              </button>

                              <button
                                onClick={() => handleOpenPreview(bill, 'BILL')}
                                title="View & Print Pad Bill Invoice"
                                className="px-2 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 font-semibold text-xs border border-emerald-500/30 transition flex items-center gap-1 active:scale-95"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span className="hidden xl:inline">Bill</span>
                              </button>
                              <button
                                onClick={() => handleOpenChallan(bill)}
                                title="Generate & Print Delivery Challan (চালান)"
                                className="px-2 py-1 rounded-lg bg-blue-500/15 hover:bg-blue-500/25 text-blue-400 font-semibold text-xs border border-blue-500/30 transition flex items-center gap-1 active:scale-95"
                              >
                                <Truck className="w-3.5 h-3.5" />
                                <span className="hidden xl:inline">Challan</span>
                              </button>
                              <button
                                onClick={() => handleOpenEditModal(bill)}
                                title="Edit Bill"
                                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition active:scale-95"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDuplicateBill(bill)}
                                title="Duplicate"
                                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition active:scale-95"
                              >
                                <Copy className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteBill(bill.id)}
                                title="Delete"
                                className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 transition active:scale-95"
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
          </div>
        </>
      )}

      {/* ========================================================
          2. DEDICATED FULL-SCREEN A4 PREVIEW & PRINT VIEW MODE
          ======================================================== */}
      {activeViewMode === 'PREVIEW' && activeBill && (
        <div className="space-y-6">
          {/* Top Floating Control Bar */}
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-xl no-print">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveViewMode('LIST')}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Bills</span>
              </button>

              <div className="h-5 w-px bg-slate-800 hidden sm:block" />

              {/* Document Switcher: Bill Invoice vs Delivery Challan */}
              <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                <button
                  type="button"
                  onClick={() => setPreviewDocType('BILL')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition ${
                    previewDocType === 'BILL'
                      ? 'bg-emerald-600 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Receipt className="w-3.5 h-3.5" />
                  <span>Bill Invoice (বিল)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewDocType('CHALLAN')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition ${
                    previewDocType === 'CHALLAN'
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Truck className="w-3.5 h-3.5" />
                  <span>Delivery Challan (চালান)</span>
                </button>
              </div>

              <div>
                <h2 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                  <span>
                    {previewDocType === 'CHALLAN' ? 'Challan:' : 'Bill:'}{' '}
                    {previewDocType === 'CHALLAN' ? `DC/${activeBill.billNo.replace('GT/', '')}` : activeBill.billNo}
                  </span>
                  <span className="font-normal text-xs text-slate-400 hidden lg:inline">({activeBill.billToName})</span>
                  <div className="relative inline-flex items-center group ml-1" title="Click to update status">
                    <select
                      value={activeBill.status}
                      onChange={(e) => {
                        handleUpdateBillStatus(activeBill.id, e.target.value as BillInvoiceStatus);
                      }}
                      className={`appearance-none cursor-pointer pl-5 pr-5 py-0.5 rounded-full text-[11px] font-semibold border transition shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50 ${
                        BILL_STATUS_THEME[activeBill.status]?.bg || 'bg-slate-800'
                      } ${
                        BILL_STATUS_THEME[activeBill.status]?.text || 'text-slate-300'
                      } ${
                        BILL_STATUS_THEME[activeBill.status]?.border || 'border-slate-700'
                      }`}
                    >
                      <option value="ISSUED" className="bg-slate-900 text-amber-300 font-medium">ISSUED</option>
                      <option value="PAID" className="bg-slate-900 text-emerald-300 font-medium">PAID</option>
                      <option value="PARTIAL" className="bg-slate-900 text-cyan-300 font-medium">PARTIAL</option>
                      <option value="DRAFT" className="bg-slate-900 text-slate-300 font-medium">DRAFT</option>
                      <option value="CANCELLED" className="bg-slate-900 text-rose-300 font-medium">CANCELLED</option>
                    </select>
                    <span
                      className={`w-1.5 h-1.5 rounded-full absolute left-2 pointer-events-none ${
                        BILL_STATUS_THEME[activeBill.status]?.dot || 'bg-slate-400'
                      }`}
                    />
                    <ChevronDown className="w-2.5 h-2.5 absolute right-1.5 pointer-events-none opacity-60" />
                  </div>
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Challan Specific Controls */}
              {previewDocType === 'CHALLAN' && (
                <>
                  <button
                    type="button"
                    onClick={handleOpenSerialsModal}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/35 rounded-lg text-xs font-semibold transition active:scale-95 shadow-sm"
                    title="Edit or assign product serial numbers (S/N) and part numbers (P/N) for this Challan"
                  >
                    <Tag className="w-3.5 h-3.5 text-amber-400" />
                    <span>Serials &amp; Part Nos</span>
                  </button>
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="text-slate-400 hidden xl:inline">Dispatch:</span>
                    <select
                      value={challanDeliveryMethod}
                      onChange={(e) => setChallanDeliveryMethod(e.target.value)}
                      className="px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 text-xs"
                    >
                      <option value="Office Delivery Staff / By Hand">Office Staff / By Hand</option>
                      <option value="Company Delivery Van">Company Delivery Van</option>
                      <option value="Pickup / Dedicated Transport">Dedicated Transport</option>
                      <option value="Sundarban Courier Service">Sundarban Courier</option>
                      <option value="SA Paribahan Courier">SA Paribahan</option>
                      <option value="Steadfast Courier">Steadfast Courier</option>
                      <option value="Customer Self-Pickup">Customer Self-Pickup</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    value={challanTransportNo}
                    onChange={(e) => setChallanTransportNo(e.target.value)}
                    placeholder="Vehicle / Memo # (optional)"
                    className="px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 text-xs placeholder-slate-600 w-36"
                  />
                  <label className="flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer select-none px-2 py-1 bg-slate-950 rounded-lg border border-slate-800">
                    <input
                      type="checkbox"
                      checked={challanShowPrices}
                      onChange={(e) => setChallanShowPrices(e.target.checked)}
                      className="rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Show Prices</span>
                  </label>
                </>
              )}

              {/* Pad Mode Toggle */}
              <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                <button
                  type="button"
                  onClick={() => setUsePreprintedPadMode(true)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                    usePreprintedPadMode
                      ? 'bg-emerald-600 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Pre-Printed Pad (No Header)
                </button>
                <button
                  type="button"
                  onClick={() => setUsePreprintedPadMode(false)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                    !usePreprintedPadMode
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Plain White Paper
                </button>
              </div>

              {/* Pad Top Spacing Selector */}
              {usePreprintedPadMode && (
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400 hidden md:inline">Pad Spacing:</span>
                  <select
                    value={padTopMarginMm}
                    onChange={(e) => setPadTopMarginMm(Number(e.target.value))}
                    className="px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 font-mono text-xs"
                  >
                    <option value={35}>35 mm (Compact Pad)</option>
                    <option value={45}>45 mm (Standard Pad)</option>
                    <option value={55}>55 mm (Tall Header Pad)</option>
                    <option value={65}>65 mm (Large Pad)</option>
                  </select>
                </div>
              )}

              {/* View/Attach Customer PO Button */}
              {activeBill.poAttachment ? (
                <button
                  type="button"
                  onClick={() => handleOpenPOViewer(activeBill)}
                  className="px-3.5 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
                  title={`View attached Customer PO: ${activeBill.poAttachment.name}`}
                >
                  <Paperclip className="w-3.5 h-3.5" />
                  <span>PO Doc</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleOpenQuickAttach(activeBill)}
                  className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
                  title="Attach Customer PO document"
                >
                  <Paperclip className="w-3.5 h-3.5" />
                  <span>Attach PO</span>
                </button>
              )}

              {/* Edit button */}
              <button
                type="button"
                onClick={() => handleOpenEditModal(activeBill)}
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>

              {/* PRIMARY PRINT BUTTON */}
              <button
                type="button"
                onClick={handlePrintBill}
                className={`flex items-center gap-2 px-5 py-2 active:scale-95 text-white rounded-xl text-xs font-bold shadow-lg transition-all ${
                  previewDocType === 'CHALLAN'
                    ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-600/30'
                    : 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30'
                }`}
              >
                <Printer className="w-4 h-4" />
                <span>{previewDocType === 'CHALLAN' ? 'Print Delivery Challan (A4)' : 'Print Bill to Pad (A4)'}</span>
              </button>
            </div>
          </div>

          {/* Notice Banner */}
          <div className={`p-3.5 rounded-xl text-xs flex items-start gap-2.5 no-print border ${
            previewDocType === 'CHALLAN'
              ? 'bg-blue-950/30 border-blue-500/20 text-blue-300'
              : 'bg-emerald-950/30 border-emerald-500/20 text-emerald-400'
          }`}>
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">
                {previewDocType === 'CHALLAN' ? 'Official Delivery Challan (চালান) Notice:' : 'Company Pad Printing Notice:'}
              </p>
              <p className="text-[11px] mt-0.5 opacity-90">
                {previewDocType === 'CHALLAN'
                  ? 'Delivery Challan serves as official goods handover & gate pass proof with customer receiving seal & sign. Use "Pre-Printed Pad" mode to print on official letterhead pad, or "Plain White Paper" mode for full digital header.'
                  : 'This document is designed for your printed company pad (No digital logo, no watermark, and no footer). When clicking "Print to Pad (A4)", select A4 paper and Margins: Default / None.'}
              </p>
            </div>
          </div>

          {/* A4 PRINTABLE BILL INVOICE SHEET (Pure White Sheet Container) */}
          <div className="w-full overflow-x-auto touch-scroll pb-12 flex justify-start sm:justify-center">
            <div
              id="printable-bill-invoice"
              style={{
                width: '210mm',
                minHeight: 'auto',
                boxSizing: 'border-box',
                backgroundColor: '#ffffff',
                color: '#000000',
                paddingTop: usePreprintedPadMode ? `${padTopMarginMm}mm` : '10mm',
                paddingLeft: '14mm',
                paddingRight: '14mm',
                paddingBottom: '10mm',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif'
              }}
              className="shadow-2xl rounded-sm text-black select-text relative print:shadow-none print:w-full print:m-0 print:p-0"
            >
              {/* ========================================================
                  DOCUMENT RENDERER: CHALLAN vs BILL INVOICE
                  ======================================================== */}
              {previewDocType === 'CHALLAN' ? (
                <>
                  {/* Optional Plain Paper Header */}
                  {!usePreprintedPadMode && (
                    <div style={{ borderBottom: '2px solid #000', paddingBottom: '8px', marginBottom: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <h1 style={{ fontSize: '22px', fontWeight: '900', margin: '0 0 2px 0', letterSpacing: '-0.5px' }}>
                            GLOBO TECH
                          </h1>
                          <p style={{ fontSize: '11px', fontWeight: '600', margin: '0', color: '#333' }}>
                            Enterprise Supply & Engineering Solutions
                          </p>
                          <p style={{ fontSize: '10px', color: '#555', margin: '2px 0 0 0' }}>
                            Dhaka, Bangladesh | Phone: +880 1711-223344 | Email: info@globotechbd.com
                          </p>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '11px', color: '#444' }}>
                          <p style={{ margin: '0' }}><strong>BIN:</strong> 004728009-0202</p>
                          <p style={{ margin: '2px 0 0 0' }}><strong>TIN:</strong> 169493772750</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TOP SECTION: Boxed "Delivery Challan" on Left, Metadata on Right */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    {/* Title Box */}
                    <div style={{ paddingTop: '2px' }}>
                      <div style={{ border: '2.5px solid #000', padding: '6px 20px', display: 'inline-block', backgroundColor: '#fff' }}>
                        <span style={{ fontSize: '20px', fontWeight: '900', letterSpacing: '0.8px', color: '#000', display: 'block', lineHeight: 1.1 }}>
                          DELIVERY CHALLAN
                        </span>
                        <span style={{ fontSize: '11px', fontWeight: '700', color: '#444', display: 'block', marginTop: '2px', textAlign: 'center' }}>
                          ডেলিভারি চালান
                        </span>
                      </div>
                    </div>

                    {/* Metadata List */}
                    <div style={{ textAlign: 'right', fontSize: '12px', lineHeight: '1.4', fontWeight: '500', color: '#000' }}>
                      <div><strong>Challan NO:</strong> DC/{activeBill.billNo.replace('GT/', '')}</div>
                      <div><strong>Challan Date:</strong> {activeBill.date}</div>
                      <div><strong>Bill/Inv Ref:</strong> {activeBill.billNo}</div>
                      <div><strong>Customer PO:</strong> {activeBill.poNumber || '—'}</div>
                      {activeBill.quotationRef && <div><strong>Quote Ref:</strong> {activeBill.quotationRef}</div>}
                      <div><strong>Dispatch Mode:</strong> {challanDeliveryMethod}</div>
                      {challanTransportNo && <div><strong>Vehicle/Memo:</strong> {challanTransportNo}</div>}
                    </div>
                  </div>

                  {/* TWO COLUMN PARTY DETAILS: Consignee / Bill To vs Delivery Destination */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', fontSize: '12px', color: '#000' }}>
                    {/* Consignee / Bill To */}
                    <div style={{ width: '56%' }}>
                      <div style={{ fontWeight: 'bold', fontSize: '13px', borderBottom: '1.5px solid #000', paddingBottom: '3px', marginBottom: '5px', display: 'inline-block', minWidth: '130px' }}>
                        Consignee (Bill To)
                      </div>
                      <div style={{ lineHeight: '1.4' }}>
                        <div><strong>Name:</strong> {activeBill.billToName}</div>
                        <div style={{ marginTop: '2px' }}><strong>Address:</strong> {activeBill.billToAddress}</div>
                        {activeBill.binNumber && <div style={{ marginTop: '2px' }}><strong>BIN:</strong> {activeBill.binNumber}</div>}
                      </div>
                    </div>

                    {/* Deliver To / Destination */}
                    <div style={{ width: '38%' }}>
                      <div style={{ fontWeight: 'bold', fontSize: '13px', borderBottom: '1.5px solid #000', paddingBottom: '3px', marginBottom: '5px', display: 'inline-block', minWidth: '130px' }}>
                        Delivery Destination
                      </div>
                      <div style={{ lineHeight: '1.4' }}>
                        <div><strong>Address:</strong> {activeBill.deliverToAddress || '—'}</div>
                        {activeBill.deliverToName && (
                          <div style={{ marginTop: '2px' }}><strong>Contact Person:</strong> {activeBill.deliverToName}</div>
                        )}
                        {activeBill.deliverToPhone && (
                          <div style={{ marginTop: '2px' }}><strong>Phone No:</strong> {activeBill.deliverToPhone}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* ITEMS TABLE */}
                  <div style={{ marginBottom: '12px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #000', fontSize: '12px', color: '#000' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid #000', backgroundColor: '#fcfcfc' }}>
                          <th style={{ borderRight: '1px solid #000', padding: '7px 4px', width: '34px', textAlign: 'center', fontWeight: 'bold' }}>SL</th>
                          <th style={{ borderRight: '1px solid #000', padding: '7px 8px', textAlign: 'left', width: challanShowPrices ? '130px' : '180px', fontWeight: 'bold' }}>Item Name &amp; Part No</th>
                          <th style={{ borderRight: '1px solid #000', padding: '7px 8px', textAlign: 'left', fontWeight: 'bold' }}>Description &amp; Serial Numbers (S/N)</th>
                          <th style={{ borderRight: '1px solid #000', padding: '7px 4px', width: '48px', textAlign: 'center', fontWeight: 'bold' }}>Unit</th>
                          <th style={{ borderRight: '1px solid #000', padding: '7px 4px', width: '50px', textAlign: 'center', fontWeight: 'bold' }}>Delivered Qty</th>
                          {challanShowPrices && (
                            <>
                              <th style={{ borderRight: '1px solid #000', padding: '7px 6px', width: '90px', textAlign: 'right', fontWeight: 'bold' }}>Unit Price</th>
                              <th style={{ borderRight: '1px solid #000', padding: '7px 6px', width: '95px', textAlign: 'right', fontWeight: 'bold' }}>Amount</th>
                            </>
                          )}
                          <th style={{ padding: '7px 6px', width: challanShowPrices ? '100px' : '130px', textAlign: 'center', fontWeight: 'bold' }}>Remarks / Condition</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeBill.items.map((item, idx) => (
                          <tr key={item.id} style={{ borderBottom: '1px solid #000', verticalAlign: 'top', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                            <td style={{ borderRight: '1px solid #000', padding: '6.5px 4px', textAlign: 'center', fontWeight: '500' }}>
                              {idx + 1}
                            </td>
                            <td style={{ borderRight: '1px solid #000', padding: '6.5px 8px' }}>
                              <div style={{ fontWeight: 'bold', fontSize: '12.5px' }}>{item.name}</div>
                              {item.partNo && item.partNo.trim().toLowerCase() !== item.name.trim().toLowerCase() ? (
                                <div style={{ marginTop: '3px', fontSize: '10.5px', color: '#111' }}>
                                  <span style={{ fontWeight: 'bold', color: '#333' }}>P/N:</span>{' '}
                                  <span style={{ fontFamily: 'monospace', fontWeight: 'bold', backgroundColor: '#f1f5f9', padding: '1px 5px', borderRadius: '3px', border: '1px solid #cbd5e1' }}>
                                    {item.partNo}
                                  </span>
                                </div>
                              ) : null}
                            </td>
                            <td style={{ borderRight: '1px solid #000', padding: '6.5px 8px', lineHeight: '1.4' }}>
                              <div>{item.description || item.name}</div>
                              {item.serialNumbers ? (
                                <div style={{ marginTop: '4px', padding: '3px 6px', backgroundColor: '#f8fafc', border: '1px dashed #64748b', borderRadius: '4px', fontSize: '11px', color: '#0f172a' }}>
                                  <strong style={{ color: '#0f172a' }}>S/N (Serial No):</strong>{' '}
                                  <span style={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#0f172a', wordBreak: 'break-word' }}>
                                    {item.serialNumbers}
                                  </span>
                                </div>
                              ) : null}
                            </td>
                            <td style={{ borderRight: '1px solid #000', padding: '6.5px 4px', textAlign: 'center' }}>
                              {item.unit}
                            </td>
                            <td style={{ borderRight: '1px solid #000', padding: '6.5px 4px', textAlign: 'center', fontWeight: 'bold', fontSize: '12.5px' }}>
                              {item.quantity}
                            </td>
                            {challanShowPrices && (
                              <>
                                <td style={{ borderRight: '1px solid #000', padding: '6.5px 6px', textAlign: 'right', fontWeight: '500' }}>
                                  {Number(item.unitPrice).toLocaleString('en-US', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                  })}
                                </td>
                                <td style={{ borderRight: '1px solid #000', padding: '6.5px 6px', textAlign: 'right', fontWeight: 'bold' }}>
                                  {Number(item.amount).toLocaleString('en-US', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                  })}
                                </td>
                              </>
                            )}
                            <td style={{ padding: '6.5px 6px', textAlign: 'center', fontSize: '11px', color: '#444' }}>
                              Intact &amp; Sound
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr style={{ backgroundColor: '#fcfcfc', borderTop: '2px solid #000', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                          <td colSpan={challanShowPrices ? 4 : 4} style={{ padding: '7px 10px', fontWeight: 'bold', textAlign: 'right', borderRight: '1px solid #000' }}>
                            Total Delivered Quantity:
                          </td>
                          <td style={{ padding: '7px 4px', fontWeight: 'bold', textAlign: 'center', borderRight: '1px solid #000', fontSize: '13px' }}>
                            {activeBill.items.reduce((sum, it) => sum + (Number(it.quantity) || 0), 0)}
                          </td>
                          {challanShowPrices && (
                            <>
                              <td style={{ borderRight: '1px solid #000', padding: '7px 6px', textAlign: 'right', fontWeight: 'bold' }}>
                                Grand Total:
                              </td>
                              <td style={{ borderRight: '1px solid #000', padding: '7px 6px', textAlign: 'right', fontWeight: 'bold' }}>
                                {Number(activeBill.grandTotal).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                              </td>
                            </>
                          )}
                          <td style={{ padding: '7px 6px', textAlign: 'center', fontSize: '11px', fontWeight: '600' }}>
                            {activeBill.items.length} {activeBill.items.length === 1 ? 'Line Item' : 'Line Items'}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  {/* CHALLAN TERMS & RECEIVING DECLARATION */}
                  <div style={{ border: '1px solid #000', padding: '8px 12px', marginBottom: '16px', fontSize: '11px', lineHeight: '1.45', color: '#000', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '11.5px', marginBottom: '2px' }}>
                      Delivery &amp; Handover Declaration / চালানের শর্তাবলী:
                    </div>
                    <div>1. Received the above-mentioned goods and supplies in sound condition, correct quantity, and intact packaging.</div>
                    <div>2. Warranty claims are subject to physical inspection and verification of intact serial numbers and warranty stickers.</div>
                    <div>3. Any discrepancy must be reported within 24 hours of delivery handover.</div>
                  </div>

                  {/* 4-COLUMN OFFICIAL SIGNATURE BLOCK */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '75px', fontSize: '11px', fontWeight: 'bold', color: '#000', textAlign: 'center', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                    <div>
                      <div style={{ borderTop: '1.5px solid #000', paddingTop: '5px' }}>
                        Prepared By
                      </div>
                      <div style={{ fontSize: '10px', fontWeight: 'normal', color: '#555', marginTop: '2px' }}>
                        {activeBill.preparedBy || 'Engr. Sohel Rana'}
                      </div>
                    </div>

                    <div>
                      <div style={{ borderTop: '1.5px solid #000', paddingTop: '5px' }}>
                        Store Checked By
                      </div>
                      <div style={{ fontSize: '10px', fontWeight: 'normal', color: '#555', marginTop: '2px' }}>
                        Warehouse In-Charge
                      </div>
                    </div>

                    <div>
                      <div style={{ borderTop: '1.5px solid #000', paddingTop: '5px' }}>
                        Delivered By
                      </div>
                      <div style={{ fontSize: '10px', fontWeight: 'normal', color: '#555', marginTop: '2px' }}>
                        Driver / Carrier Sign
                      </div>
                    </div>

                    <div>
                      <div style={{ borderTop: '2px solid #000', paddingTop: '5px' }}>
                        Received By
                      </div>
                      <div style={{ fontSize: '10px', fontWeight: 'normal', color: '#555', marginTop: '2px' }}>
                        Customer Seal &amp; Signature
                      </div>
                    </div>
                  </div>

                  {/* Plain Paper Footer */}
                  {!usePreprintedPadMode && (
                    <div style={{ borderTop: '1px solid #ddd', paddingTop: '8px', marginTop: '16px', textAlign: 'center', fontSize: '10px', color: '#777', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                      Official Delivery Challan &bull; Globo Tech &bull; Motijheel, Dhaka
                    </div>
                  )}
                </>
              ) : (
                <>
                  {/* Optional Plain Paper Header */}
                  {!usePreprintedPadMode && (
                    <div style={{ borderBottom: '2px solid #000', paddingBottom: '8px', marginBottom: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <h1 style={{ fontSize: '22px', fontWeight: '900', margin: '0 0 2px 0', letterSpacing: '-0.5px' }}>
                            GLOBO TECH
                          </h1>
                          <p style={{ fontSize: '11px', fontWeight: '600', margin: '0', color: '#333' }}>
                            Enterprise Supply & Engineering Solutions
                          </p>
                          <p style={{ fontSize: '10px', color: '#555', margin: '2px 0 0 0' }}>
                            Dhaka, Bangladesh | Phone: +880 1711-223344 | Email: info@globotechbd.com
                          </p>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '11px', color: '#444' }}>
                          <p style={{ margin: '0' }}><strong>BIN:</strong> 004728009-0202</p>
                          <p style={{ margin: '2px 0 0 0' }}><strong>TIN:</strong> 169493772750</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TOP SECTION: Boxed "Bill Invoice" on Left, Date/Bill No/PO/BIN/TIN on Right */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    {/* Title Box */}
                    <div style={{ paddingTop: '2px' }}>
                      <div style={{ border: '2.5px solid #000', padding: '6px 20px', display: 'inline-block', backgroundColor: '#fff' }}>
                        <span style={{ fontSize: '20px', fontWeight: '900', letterSpacing: '0.8px', color: '#000', display: 'block', lineHeight: 1.1 }}>
                          Bill Invoice
                        </span>
                      </div>
                    </div>

                    {/* Metadata List */}
                    <div style={{ textAlign: 'right', fontSize: '12px', lineHeight: '1.4', fontWeight: '500', color: '#000' }}>
                      <div><strong>Date:</strong> {activeBill.date}</div>
                      <div><strong>Bill NO:</strong> {activeBill.billNo}</div>
                      <div><strong>PO :</strong> {activeBill.poNumber || '—'}</div>
                      <div><strong>BIN:</strong> {activeBill.binNumber || '004728009-0202'}</div>
                      <div><strong>TIN:</strong> {activeBill.tinNumber || '169493772750'}</div>
                    </div>
                  </div>

                  {/* TWO COLUMN PARTY DETAILS: Bill To vs Deliver To */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', fontSize: '12px', color: '#000' }}>
                    {/* Bill To */}
                    <div style={{ width: '58%' }}>
                      <div style={{ fontWeight: 'bold', fontSize: '13px', borderBottom: '1.5px solid #000', paddingBottom: '3px', marginBottom: '5px', display: 'inline-block', minWidth: '120px' }}>
                        Bill To
                      </div>
                      <div style={{ lineHeight: '1.4' }}>
                        <div><strong>Name:</strong> {activeBill.billToName}</div>
                        <div style={{ marginTop: '2px' }}><strong>Address:</strong> {activeBill.billToAddress}</div>
                      </div>
                    </div>

                    {/* Deliver To (aligned nicely to right column) */}
                    <div style={{ width: '34%' }}>
                      <div style={{ fontWeight: 'bold', fontSize: '13px', borderBottom: '1.5px solid #000', paddingBottom: '3px', marginBottom: '5px', display: 'inline-block', minWidth: '120px' }}>
                        Deliver To
                      </div>
                      <div style={{ lineHeight: '1.4' }}>
                        <div><strong>Address:</strong> {activeBill.deliverToAddress || '—'}</div>
                        {activeBill.deliverToName && (
                          <div style={{ marginTop: '2px' }}><strong>Name:</strong> {activeBill.deliverToName}</div>
                        )}
                        {activeBill.deliverToPhone && (
                          <div style={{ marginTop: '2px' }}><strong>Phone No:</strong> {activeBill.deliverToPhone}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* ITEMS TABLE (Exact black-bordered layout matching PDF) */}
                  <div style={{ marginBottom: '12px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #000', fontSize: '12px', color: '#000' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid #000', backgroundColor: '#fcfcfc' }}>
                          <th style={{ borderRight: '1px solid #000', padding: '7px 4px', width: '34px', textAlign: 'center', fontWeight: 'bold' }}>SN</th>
                          <th style={{ borderRight: '1px solid #000', padding: '7px 8px', textAlign: 'left', width: '125px', fontWeight: 'bold' }}>Item name</th>
                          <th style={{ borderRight: '1px solid #000', padding: '7px 8px', textAlign: 'left', fontWeight: 'bold' }}>Description</th>
                          <th style={{ borderRight: '1px solid #000', padding: '7px 4px', width: '48px', textAlign: 'center', fontWeight: 'bold' }}>Unit</th>
                          <th style={{ borderRight: '1px solid #000', padding: '7px 4px', width: '44px', textAlign: 'center', fontWeight: 'bold' }}>Qty</th>
                          <th style={{ borderRight: '1px solid #000', padding: '7px 6px', width: '90px', textAlign: 'right', fontWeight: 'bold' }}>Unit Price</th>
                          <th style={{ padding: '7px 6px', width: '98px', textAlign: 'right', fontWeight: 'bold' }}>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeBill.items.map((item, idx) => (
                          <tr key={item.id} style={{ borderBottom: '1px solid #000', verticalAlign: 'top', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                            <td style={{ borderRight: '1px solid #000', padding: '6.5px 4px', textAlign: 'center', fontWeight: '500' }}>
                              {idx + 1}
                            </td>
                            <td style={{ borderRight: '1px solid #000', padding: '6.5px 8px' }}>
                              <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                            </td>
                            <td style={{ borderRight: '1px solid #000', padding: '6.5px 8px', lineHeight: '1.35' }}>
                              <div>{item.description || item.name}</div>
                              {item.serialNumbers ? (
                                <div style={{ fontSize: '10px', color: '#555', marginTop: '3px' }}>
                                  <span style={{ fontWeight: '600' }}>S/N:</span> {item.serialNumbers}
                                </div>
                              ) : null}
                            </td>
                            <td style={{ borderRight: '1px solid #000', padding: '6.5px 4px', textAlign: 'center' }}>
                              {item.unit}
                            </td>
                            <td style={{ borderRight: '1px solid #000', padding: '6.5px 4px', textAlign: 'center', fontWeight: 'bold' }}>
                              {item.quantity}
                            </td>
                            <td style={{ borderRight: '1px solid #000', padding: '6.5px 6px', textAlign: 'right', fontWeight: '500' }}>
                              {Number(item.unitPrice).toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                              })}
                            </td>
                            <td style={{ padding: '6.5px 6px', textAlign: 'right', fontWeight: 'bold' }}>
                              {Number(item.amount).toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                              })}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* BOTTOM TOTALS: Boxed Amount In Word (Left) vs Summary Rows (Right) */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', marginBottom: '14px', fontSize: '12px', color: '#000', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                    {/* Left: Amount In Word Box */}
                    <div style={{ width: '58%', border: '1px solid #000', padding: '8px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ fontWeight: 'bold', fontSize: '12px', marginBottom: '3px' }}>
                        Amount In Word
                      </div>
                      <div style={{ fontSize: '12px', fontWeight: '500', fontStyle: 'italic', lineHeight: '1.4' }}>
                        {activeBill.amountInWords || numberToWordsBDT(activeBill.grandTotal, 'BDT', { style: 'suffix', suffixUnit: 'Taka', dotEnd: true })}
                      </div>
                    </div>

                    {/* Right: SubTotal / VAT & TAX / Grand Total */}
                    <div style={{ width: '38%', fontSize: '12px', fontWeight: '600' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #000' }}>
                        <span>Sub Total</span>
                        <span>
                          {Number(activeBill.subTotal).toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}
                        </span>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0', borderBottom: '1px solid #000' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span>{activeBill.vatTaxIncluded ? 'VAT & TAX Included' : 'VAT & TAX Excluded'}</span>
                          {/* 1-Click Interactive VAT Mode Toggle (Hidden when printing/PDF) */}
                          <span className="no-print print:hidden inline-flex items-center rounded bg-slate-100 border border-slate-300 p-0.5 ml-1 shadow-sm text-[10px]">
                            <button
                              type="button"
                              onClick={() => handleToggleBillVatMode('INCLUDED')}
                              title="Set VAT & TAX as Included in price"
                              className={`px-1.5 py-0.5 font-bold rounded transition cursor-pointer ${
                                activeBill.vatTaxIncluded
                                  ? 'bg-emerald-600 text-white shadow-sm'
                                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                              }`}
                            >
                              Included
                            </button>
                            <button
                              type="button"
                              onClick={() => handleToggleBillVatMode('EXCLUDED')}
                              title="Set VAT & TAX as Excluded (Applicable Extra)"
                              className={`px-1.5 py-0.5 font-bold rounded transition cursor-pointer ${
                                !activeBill.vatTaxIncluded
                                  ? 'bg-rose-600 text-white shadow-sm'
                                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                              }`}
                            >
                              Excluded
                            </button>
                          </span>
                        </div>
                        <span>
                          {activeBill.vatTaxIncluded
                            ? '0.00'
                            : (activeBill.vatTaxAmount && activeBill.vatTaxAmount > 0
                                ? Number(activeBill.vatTaxAmount).toLocaleString('en-US', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                  })
                                : '0.00')}
                        </span>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: '13px', fontWeight: 'bold', borderBottom: '3px double #000' }}>
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px', fontSize: '11.5px', color: '#000', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                    {/* Terms & Conditions */}
                    <div style={{ width: '58%' }}>
                      <div style={{ fontWeight: 'bold', fontSize: '12px', borderBottom: '1px solid #000', paddingBottom: '2px', marginBottom: '5px', display: 'inline-block', minWidth: '140px' }}>
                        Terms &amp; Conditions
                      </div>
                      <div style={{ lineHeight: '1.5', fontWeight: '500' }}>
                        {activeBill.termsAndConditions.map((term, tIdx) => {
                          const isVatLine = /vat\s*&?\s*tax/i.test(term);
                          return (
                            <div key={tIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span>{term}</span>
                              {isVatLine && (
                                <span className="no-print print:hidden inline-flex items-center rounded bg-slate-100 border border-slate-300 p-0.5 shadow-sm text-[9px]">
                                  <button
                                    type="button"
                                    onClick={() => handleToggleBillVatMode('INCLUDED')}
                                    title="Set VAT & TAX as Included"
                                    className={`px-1.5 py-0.2 rounded font-bold cursor-pointer transition ${
                                      activeBill.vatTaxIncluded ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
                                    }`}
                                  >
                                    Included
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleToggleBillVatMode('EXCLUDED')}
                                    title="Set VAT & TAX as Excluded"
                                    className={`px-1.5 py-0.2 rounded font-bold cursor-pointer transition ${
                                      !activeBill.vatTaxIncluded ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
                                    }`}
                                  >
                                    Excluded
                                  </button>
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Payment Details (aligned to right column) */}
                    <div style={{ width: '34%' }}>
                      <div style={{ fontWeight: 'bold', fontSize: '12px', borderBottom: '1px solid #000', paddingBottom: '2px', marginBottom: '5px', display: 'inline-block', minWidth: '140px' }}>
                        Payment Details
                      </div>
                      <div style={{ lineHeight: '1.45', fontWeight: '500' }}>
                        <div><strong>Account No :</strong> {activeBill.bankAccountNo}</div>
                        <div><strong>Account Title:</strong> {activeBill.bankAccountTitle}</div>
                        <div><strong>Bank Name :</strong> {activeBill.bankName}</div>
                        <div><strong>Branch Name:</strong> {activeBill.bankBranchName}</div>
                      </div>
                    </div>
                  </div>

                  {/* SIGNATURES: Received By (Left) & Prepared By (Right) */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '70px', fontSize: '12px', fontWeight: 'bold', color: '#000', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                    <div style={{ textAlign: 'center', minWidth: '180px' }}>
                      <div style={{ borderTop: '1.5px solid #000', paddingTop: '5px' }}>
                        Received By
                      </div>
                    </div>

                    <div style={{ textAlign: 'center', minWidth: '180px' }}>
                      <div style={{ borderTop: '1.5px solid #000', paddingTop: '5px' }}>
                        Prepared By
                      </div>
                    </div>
                  </div>

                  {/* Plain Paper Footer (Only if Pre-printed Pad Mode is Disabled) */}
                  {!usePreprintedPadMode && (
                    <div style={{ borderTop: '1px solid #ddd', paddingTop: '8px', marginTop: '16px', textAlign: 'center', fontSize: '10px', color: '#777', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                      This is an electronically generated bill invoice. For questions, contact info@globotechbd.com.
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          3. CREATE / EDIT BILL INVOICE MODAL
          ======================================================== */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title={editingBillId ? `Edit Bill Invoice (${formData.billNo})` : 'Create New Bill Invoice'}
        size="5xl"
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
              <div className="flex items-center justify-between mb-1">
                <label className="block text-[11px] font-medium text-slate-300">Bill NO *</label>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    Auto
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const nextNo = generateNextBillNo(bills);
                      setFormData((prev) => ({ ...prev, billNo: nextNo }));
                    }}
                    title="Click to recalculate next sequential Bill NO"
                    className="text-[10px] text-slate-400 hover:text-emerald-400 transition underline cursor-pointer"
                  >
                    Reset
                  </button>
                </div>
              </div>
              <input
                type="text"
                required
                value={formData.billNo || ''}
                onChange={(e) => setFormData((prev) => ({ ...prev, billNo: e.target.value }))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-emerald-500/40 rounded-lg font-mono font-bold text-emerald-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs transition"
                placeholder="GT/26109"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Date *</label>
              <input
                type="text"
                required
                value={formData.date || ''}
                onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 text-xs transition"
                placeholder="23-Feb-26"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-[11px] font-medium text-slate-300">PO Number</label>
                <span className="text-[10px] text-sky-400 font-semibold bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">
                  Manual Type
                </span>
              </div>
              <input
                type="text"
                value={formData.poNumber || ''}
                onChange={(e) => setFormData((prev) => ({ ...prev, poNumber: e.target.value }))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700/80 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-mono text-xs transition"
                placeholder="Type PO Number (e.g. POBD9729-1)"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Status</label>
              <select
                value={formData.status || 'ISSUED'}
                onChange={(e) => setFormData((prev) => ({ ...prev, status: e.target.value as BillInvoiceStatus }))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 text-xs transition"
              >
                <option value="DRAFT">DRAFT</option>
                <option value="ISSUED">ISSUED</option>
                <option value="PAID">PAID</option>
                <option value="PARTIAL">PARTIAL</option>
                <option value="CANCELLED">CANCELLED</option>
              </select>
            </div>
          </div>

          {/* Customer PO Document Attachment Field */}
          <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                <Paperclip className="w-3.5 h-3.5 text-emerald-400" />
                <span>Customer Purchase Order (PO) Attachment</span>
              </label>
              <span className="text-[10px] text-slate-400">Upload PDF, JPG, PNG scan / document (Max 6MB)</span>
            </div>

            {formData.poAttachment ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-slate-950 rounded-lg border border-emerald-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <FileText className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-200 truncate max-w-xs sm:max-w-md">
                      {formData.poAttachment.name}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {(formData.poAttachment.size / 1024).toFixed(1)} KB &bull; Uploaded {formData.poAttachment.uploadedAt}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (formData.poAttachment) {
                        setSelectedPOBill({
                          ...formData,
                          id: editingBillId || 'temp',
                          billNo: formData.billNo || 'Draft',
                          billToName: formData.billToName || 'Client'
                        } as BillInvoice);
                        setIsPOViewerOpen(true);
                      }
                    }}
                    className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Preview</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (formData.poAttachment) {
                        downloadPOAttachment(formData.poAttachment, formData.poNumber);
                      }
                    }}
                    className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5 text-sky-400" />
                    <span>Download</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, poAttachment: undefined }))}
                    className="px-2.5 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg text-xs font-medium transition flex items-center gap-1 border border-rose-500/20"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-700 hover:border-emerald-500/60 rounded-xl cursor-pointer bg-slate-950/40 hover:bg-slate-950 transition group">
                  <Upload className="w-6 h-6 text-slate-500 group-hover:text-emerald-400 transition mb-1.5" />
                  <span className="text-xs font-medium text-slate-300 group-hover:text-emerald-400 transition">
                    Click to attach Customer PO (PDF, JPG, PNG)
                  </span>
                  <span className="text-[10px] text-slate-500 mt-0.5">
                    Link the official client PO document directly with this bill for instant retrieval
                  </span>
                  <input
                    type="file"
                    accept=".pdf,image/png,image/jpeg,image/webp,image/jpg"
                    onChange={handleFormFieldFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            )}
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
                <label className="block text-[11px] font-medium text-emerald-400 mb-1 flex items-center justify-between">
                  <span>Select from Customer Directory</span>
                  <span className="text-[10px] text-slate-400">Auto-fill details</span>
                </label>
                <select
                  value=""
                  onChange={(e) => {
                    const custId = e.target.value;
                    if (!custId) return;
                    const cust = customers.find((c) => c.id === custId);
                    if (cust) {
                      setFormData((prev) => ({
                        ...prev,
                        billToName: cust.company || cust.name,
                        billToAddress: cust.address || '',
                        binNumber: cust.binNumber || prev.binNumber || '',
                        deliverToName: prev.deliverToName || cust.name,
                        deliverToPhone: prev.deliverToPhone || cust.phone || '',
                        deliverToAddress: prev.deliverToAddress || cust.address || ''
                      }));
                    }
                  }}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-emerald-500/40 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500 text-xs mb-2 font-medium"
                >
                  <option value="">-- Choose Existing Customer / Client --</option>
                  {customers.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.company || c.name} ({c.type})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Company / Client Name *</label>
                <input
                  type="text"
                  required
                  value={formData.billToName || ''}
                  onChange={(e) => setFormData({ ...formData, billToName: e.target.value })}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 font-semibold"
                  placeholder="e.g. Bangladesh Parliament"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Client Address *</label>
                <textarea
                  rows={2}
                  value={formData.billToAddress || ''}
                  onChange={(e) => setFormData({ ...formData, billToAddress: e.target.value })}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 resize-none"
                  placeholder="e.g. Sher-e-Bangla Nagar, Dhaka-1207"
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
                    onChange={(e) => setFormData((prev) => ({ ...prev, deliverToName: e.target.value }))}
                    className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 text-xs transition"
                    placeholder="Rony"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[11px] font-medium text-slate-300">Contact Phone</label>
                    <span className="text-[10px] text-sky-400 font-semibold bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">
                      Manual Type
                    </span>
                  </div>
                  <input
                    type="text"
                    value={formData.deliverToPhone || ''}
                    onChange={(e) => setFormData((prev) => ({ ...prev, deliverToPhone: e.target.value }))}
                    className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700/80 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-mono text-xs transition"
                    placeholder="Type phone (e.g. 01999074461)"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-200 text-sm">Bill Items</h3>
                <p className="text-[11px] text-slate-400">Enter item name, specification, unit, quantity and unit price</p>
              </div>
              <button
                type="button"
                onClick={handleAddItem}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 rounded-xl font-bold text-xs transition active:scale-95 shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>+ Add Item</span>
              </button>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-x-auto shadow-inner">
              <table className="w-full min-w-[840px] text-left text-xs">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300 font-semibold text-[11px] uppercase tracking-wider">
                    <th className="py-3 px-3 w-12 text-center">SN</th>
                    <th className="py-3 px-3 min-w-[210px]">Item Name &amp; Part No *</th>
                    <th className="py-3 px-3 min-w-[250px]">Description &amp; Serial Numbers (S/N)</th>
                    <th className="py-3 px-3 w-24 text-center">Unit</th>
                    <th className="py-3 px-3 w-28 text-center">Quantity *</th>
                    <th className="py-3 px-3 w-36 text-right">Unit Price (৳) *</th>
                    <th className="py-3 px-3 w-36 text-right">Amount (৳)</th>
                    <th className="py-3 px-2 w-12 text-center"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {(formData.items || []).map((item, index) => (
                    <tr key={item.id} className="hover:bg-slate-900/40 transition">
                      <td className="py-2.5 px-3 text-center text-slate-400 font-mono font-bold">
                        {index + 1}
                      </td>
                      <td className="py-2.5 px-3">
                        <input
                          type="text"
                          required
                          value={item.name}
                          onChange={(e) => handleUpdateItem(index, 'name', e.target.value)}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-medium text-xs mb-1.5"
                          placeholder="e.g. Rosenberger UTP Cable"
                        />
                        <div className="flex items-center gap-1.5 bg-slate-900/90 px-2 py-1 rounded-md border border-slate-800">
                          <span className="text-[10px] font-bold text-sky-400 bg-sky-500/10 px-1 rounded border border-sky-500/20 whitespace-nowrap">
                            P/N
                          </span>
                          <input
                            type="text"
                            value={item.partNo || ''}
                            onChange={(e) => handleUpdateItem(index, 'partNo', e.target.value)}
                            className="w-full bg-transparent text-[11px] text-slate-200 placeholder-slate-500 focus:outline-none font-mono"
                            placeholder="Part No / Model (e.g. CP-UTP-C6)"
                          />
                        </div>
                      </td>
                      <td className="py-2.5 px-3">
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => handleUpdateItem(index, 'description', e.target.value)}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs mb-1.5"
                          placeholder="e.g. Cat-6 UTP Cable, 305M"
                        />
                        <div className="flex items-center gap-1.5 bg-slate-900/90 px-2 py-1 rounded-md border border-slate-800">
                          <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-1 rounded border border-amber-500/20 whitespace-nowrap">
                            S/N
                          </span>
                          <input
                            type="text"
                            value={item.serialNumbers || ''}
                            onChange={(e) => handleUpdateItem(index, 'serialNumbers', e.target.value)}
                            className="w-full bg-transparent font-mono text-[11px] text-amber-300 placeholder-slate-500 focus:outline-none"
                            placeholder="Serial Nos for Challan (e.g. SN-001, SN-002)"
                          />
                        </div>
                      </td>
                      <td className="py-2.5 px-3">
                        <input
                          type="text"
                          value={item.unit}
                          onChange={(e) => handleUpdateItem(index, 'unit', e.target.value)}
                          className="w-full px-2.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500 text-center font-medium text-xs"
                          placeholder="Box"
                        />
                      </td>
                      <td className="py-2.5 px-3">
                        <input
                          type="number"
                          min="1"
                          step="any"
                          required
                          value={item.quantity !== undefined && item.quantity !== null ? item.quantity : ''}
                          onChange={(e) => handleUpdateItem(index, 'quantity', e.target.value)}
                          className="w-full px-2.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-center font-mono font-bold text-sm"
                          placeholder="1"
                        />
                      </td>
                      <td className="py-2.5 px-3">
                        <input
                          type="number"
                          min="0"
                          step="any"
                          required
                          value={item.unitPrice !== undefined && item.unitPrice !== null ? item.unitPrice : ''}
                          onChange={(e) => handleUpdateItem(index, 'unitPrice', e.target.value)}
                          className="w-full px-2.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-emerald-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-right font-mono font-bold text-sm"
                          placeholder="0.00"
                        />
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-100 text-sm whitespace-nowrap">
                        {formatBDT(item.amount)}
                      </td>
                      <td className="py-2.5 px-2 text-center">
                        {(formData.items?.length || 0) > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(index)}
                            className="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition"
                            title="Remove Item"
                          >
                            <X className="w-4 h-4" />
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

              <div className="flex justify-between items-center text-slate-300 py-1 border-b border-slate-800/60 pb-2">
                <span className="text-xs font-semibold">VAT &amp; TAX Policy:</span>
                <div className="inline-flex items-center rounded-lg bg-slate-950 p-1 border border-slate-800 gap-1">
                  <button
                    type="button"
                    onClick={() => {
                      const inc = true;
                      const totals = recalculateFormTotals(formData.items || [], inc, formData.vatTaxAmount || 0);
                      const currentTerms = Array.isArray(formData.termsAndConditions) ? [...formData.termsAndConditions] : [];
                      let found = false;
                      const updatedTerms = currentTerms.map((t) => {
                        if (/vat\s*&?\s*tax/i.test(t)) {
                          found = true;
                          return '1. VAT&TAX : Included';
                        }
                        return t;
                      });
                      if (!found) updatedTerms.unshift('1. VAT&TAX : Included');
                      setFormData({ ...formData, vatTaxIncluded: inc, termsAndConditions: updatedTerms, ...totals });
                    }}
                    className={`px-3 py-1 text-xs font-bold rounded-md transition cursor-pointer ${
                      formData.vatTaxIncluded ?? true
                        ? 'bg-emerald-600 text-white shadow'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Included
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const inc = false;
                      const totals = recalculateFormTotals(formData.items || [], inc, formData.vatTaxAmount || 0);
                      const currentTerms = Array.isArray(formData.termsAndConditions) ? [...formData.termsAndConditions] : [];
                      let found = false;
                      const updatedTerms = currentTerms.map((t) => {
                        if (/vat\s*&?\s*tax/i.test(t)) {
                          found = true;
                          return '1. VAT&TAX : Excluded';
                        }
                        return t;
                      });
                      if (!found) updatedTerms.unshift('1. VAT&TAX : Excluded');
                      setFormData({ ...formData, vatTaxIncluded: inc, termsAndConditions: updatedTerms, ...totals });
                    }}
                    className={`px-3 py-1 text-xs font-bold rounded-md transition cursor-pointer ${
                      !(formData.vatTaxIncluded ?? true)
                        ? 'bg-rose-600 text-white shadow'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Excluded
                  </button>
                </div>
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
          <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setIsCreateModalOpen(false)}
              className="w-full sm:w-auto min-h-[42px] px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto min-h-[42px] px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow-lg shadow-emerald-600/20 transition flex items-center justify-center gap-1.5"
            >
              {editingBillId ? 'Update & Preview' : 'Save & Preview'}
            </button>
          </div>
        </form>
      </Modal>

      {/* ========================================================
          3. CUSTOMER PO DOCUMENT VIEWER MODAL
          ======================================================== */}
      {isPOViewerOpen && selectedPOBill?.poAttachment && (
        <Modal
          isOpen={isPOViewerOpen}
          onClose={() => setIsPOViewerOpen(false)}
          title={`Customer Purchase Order (PO) — ${selectedPOBill.billNo}`}
          maxWidth="4xl"
        >
          <div className="space-y-4">
            {/* Header / Meta bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-slate-950 rounded-xl border border-slate-800">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-100">{selectedPOBill.poAttachment.name}</span>
                  <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-mono rounded border border-emerald-500/20">
                    {(selectedPOBill.poAttachment.size / 1024).toFixed(1)} KB
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Client: <strong className="text-slate-300">{selectedPOBill.billToName}</strong> &bull; PO No: <span className="font-mono text-emerald-400 font-bold">{selectedPOBill.poNumber || 'None'}</span> &bull; Attached on {selectedPOBill.poAttachment.uploadedAt}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => downloadPOAttachment(selectedPOBill.poAttachment!, selectedPOBill.poNumber)}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition flex items-center gap-1.5 shadow-sm"
                  title="Download PO Document"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const newWin = window.open();
                    if (newWin) {
                      newWin.document.write(
                        `<iframe src="${selectedPOBill.poAttachment!.dataUrl}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`
                      );
                    }
                  }}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition flex items-center gap-1.5"
                  title="Open in new window"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                  <span>Full Screen</span>
                </button>

                <label className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer">
                  <Upload className="w-3.5 h-3.5 text-amber-400" />
                  <span>Replace</span>
                  <input
                    type="file"
                    accept=".pdf,image/png,image/jpeg,image/webp,image/jpg"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      try {
                        const newAtt = await fileToPOAttachment(file);
                        const updated = bills.map((b) =>
                          b.id === selectedPOBill.id ? { ...b, poAttachment: newAtt } : b
                        );
                        setBills(updated);
                        setSelectedPOBill({ ...selectedPOBill, poAttachment: newAtt });
                        if (activeBill?.id === selectedPOBill.id) {
                          setActiveBill({ ...activeBill, poAttachment: newAtt });
                        }
                      } catch (err: any) {
                        alert(err.message || 'Error replacing file');
                      }
                      e.target.value = '';
                    }}
                    className="hidden"
                  />
                </label>

                <button
                  type="button"
                  onClick={() => handleDeletePOAttachment(selectedPOBill.id)}
                  className="p-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 rounded-lg transition"
                  title="Delete Attachment"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Document Viewer Body */}
            <div className="bg-slate-950 rounded-xl border border-slate-800 p-2 overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
              {selectedPOBill.poAttachment.type.includes('pdf') ? (
                <div className="w-full flex flex-col items-center">
                  <iframe
                    src={selectedPOBill.poAttachment.dataUrl}
                    className="w-full h-[60vh] rounded-lg border border-slate-800 bg-white"
                    title={`PO PDF - ${selectedPOBill.poAttachment.name}`}
                  />
                  <div className="mt-2 text-center text-xs text-slate-400 flex items-center gap-2">
                    <span>If the PDF preview is blocked by your browser:</span>
                    <button
                      type="button"
                      onClick={() => downloadPOAttachment(selectedPOBill.poAttachment!, selectedPOBill.poNumber)}
                      className="text-emerald-400 hover:underline font-semibold"
                    >
                      Download PDF
                    </button>
                  </div>
                </div>
              ) : selectedPOBill.poAttachment.type.startsWith('image/') || selectedPOBill.poAttachment.dataUrl.startsWith('data:image/') ? (
                <div className="max-h-[65vh] overflow-auto p-2">
                  <img
                    src={selectedPOBill.poAttachment.dataUrl}
                    alt={selectedPOBill.poAttachment.name}
                    className="max-h-[60vh] max-w-full rounded-lg shadow-xl object-contain border border-slate-800"
                  />
                </div>
              ) : (
                <div className="p-8 text-center space-y-3">
                  <FileText className="w-16 h-16 text-slate-500 mx-auto" />
                  <p className="text-sm font-semibold text-slate-200">{selectedPOBill.poAttachment.name}</p>
                  <p className="text-xs text-slate-400">
                    This file can be downloaded to your computer and opened with your native app.
                  </p>
                  <button
                    type="button"
                    onClick={() => downloadPOAttachment(selectedPOBill.poAttachment!, selectedPOBill.poNumber)}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition"
                  >
                    Download PO File
                  </button>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}

      {/* ========================================================
          4. QUICK ATTACH PO MODAL
          ======================================================== */}
      {isQuickAttachOpen && quickAttachBill && (
        <Modal
          isOpen={isQuickAttachOpen}
          onClose={() => {
            setIsQuickAttachOpen(false);
            setQuickAttachBill(null);
            setQuickAttachFile(null);
          }}
          title={`Attach Customer PO — Bill ${quickAttachBill.billNo}`}
          maxWidth="md"
        >
          <form onSubmit={handleSaveQuickAttachment} className="space-y-4">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-400">Client:</span>
                <span className="font-semibold text-slate-200">{quickAttachBill.billToName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">PO Number:</span>
                <span className="font-mono text-emerald-400 font-bold">{quickAttachBill.poNumber || 'Not specified'}</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Select Customer PO File (PDF, JPG, PNG)
              </label>
              <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-700 hover:border-emerald-500 rounded-xl cursor-pointer bg-slate-950/60 transition group">
                <Upload className="w-8 h-8 text-slate-500 group-hover:text-emerald-400 transition mb-2" />
                {quickAttachFile ? (
                  <div className="text-center">
                    <p className="text-xs font-bold text-emerald-400">{quickAttachFile.name}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      {(quickAttachFile.size / 1024).toFixed(1)} KB &bull; Ready to attach
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <span className="text-xs font-medium text-slate-300 group-hover:text-emerald-400 transition">
                      Click to choose file or drag & drop here
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-1">
                      PDF documents or scan images up to 6MB
                    </span>
                  </div>
                )}
                <input
                  type="file"
                  accept=".pdf,image/png,image/jpeg,image/webp,image/jpg"
                  onChange={(e) => setQuickAttachFile(e.target.files?.[0] || null)}
                  className="hidden"
                />
              </label>
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setIsQuickAttachOpen(false);
                  setQuickAttachBill(null);
                  setQuickAttachFile(null);
                }}
                className="w-full sm:w-auto min-h-[42px] px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!quickAttachFile || isUploadingPO}
                className="w-full sm:w-auto min-h-[42px] px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg text-xs font-semibold shadow-lg shadow-emerald-600/20 transition flex items-center justify-center gap-1.5"
              >
                {isUploadingPO ? (
                  <span>Attaching...</span>
                ) : (
                  <>
                    <Paperclip className="w-3.5 h-3.5" />
                    <span>Attach to Bill</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================
          5. QUICK SERIAL NUMBERS & PART NUMBERS MODAL FOR CHALLAN
          ======================================================== */}
      {isSerialsModalOpen && activeBill && (
        <Modal
          isOpen={isSerialsModalOpen}
          onClose={() => setIsSerialsModalOpen(false)}
          title="Delivery Challan Serial & Part Numbers (চালান সিরিয়াল ও পার্ট নম্বর)"
          size="3xl"
        >
          <form onSubmit={handleSaveSerialsModal} className="space-y-4 text-xs text-slate-200">
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-300 space-y-1">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs">
                <Tag className="w-4 h-4 text-amber-400" />
                <span>Challan Item Identification (DC/{activeBill.billNo.replace('GT/', '')})</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Add product Part Numbers (P/N / Model) and Serial Numbers (S/N) for goods handover, store gate pass, and warranty tracking. You can enter multiple serial numbers separated by commas.
              </p>
            </div>

            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
              {serialsItems.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 font-mono font-bold flex items-center justify-center text-[10px]">
                        {idx + 1}
                      </span>
                      <span className="font-bold text-slate-100 text-xs">{item.name || `Item #${idx + 1}`}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span>Delivered Qty:</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 font-bold text-emerald-400">
                        {item.quantity} {item.unit}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                        <span className="text-sky-400 font-bold">P/N:</span>
                        <span>Part Number / Model</span>
                      </label>
                      <input
                        type="text"
                        value={item.partNo || ''}
                        onChange={(e) => handleUpdateSerialItem(idx, 'partNo', e.target.value)}
                        placeholder="e.g. CP-UTP-C6 / DS-2CD2047G2"
                        className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-[11px] font-medium text-slate-300 flex items-center gap-1.5">
                          <span className="text-amber-400 font-bold">S/N:</span>
                          <span>Serial Numbers</span>
                        </label>
                        <span className="text-[10px] text-slate-500">
                          {item.quantity > 1 ? `Expected ${item.quantity} serials` : '1 serial'}
                        </span>
                      </div>
                      <input
                        type="text"
                        value={item.serialNumbers || ''}
                        onChange={(e) => handleUpdateSerialItem(idx, 'serialNumbers', e.target.value)}
                        placeholder={item.quantity > 1 ? "e.g. HK-9812A, HK-9813B (comma separated)" : "e.g. HK-2026-9812A"}
                        className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-amber-300 placeholder-slate-500 focus:outline-none focus:border-amber-500 font-mono text-xs"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setIsSerialsModalOpen(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold text-xs transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold text-xs transition flex items-center gap-1.5 shadow-md"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Save &amp; Update Challan</span>
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Embedded Global Print CSS ensuring seamless direct printing */}
      <style jsx global>{`
        @media print {
          body, html {
            background-color: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: auto !important;
          }
          .no-print, header, aside, nav {
            display: none !important;
          }
          main {
            padding: 0 !important;
            margin: 0 !important;
            max-width: none !important;
            width: 100% !important;
            overflow: visible !important;
          }
          #printable-bill-invoice {
            box-shadow: none !important;
            border: none !important;
            width: 100% !important;
            min-height: auto !important;
            margin: 0 auto !important;
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
