'use client';

import React, { useState, useEffect } from 'react';
import {
  FileText,
  Plus,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Layers,
  ArrowRight,
  TrendingUp,
  Printer,
  Download,
  Copy,
  Trash2,
  Edit3,
  Eye,
  Send,
  Building,
  User,
  ShieldCheck,
  DollarSign,
  Package,
  Wrench,
  Truck,
  RotateCcw,
  History,
  FileCheck,
  ChevronDown,
  Info,
  Calendar,
  XCircle,
  Tag
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { formatBDT, formatCompactBDT, formatDate } from '@/lib/formatters';
import { GLOBO_TECH_LOGO_DATA_URL, COMPANY_DETAILS, GLOBO_TECH_SEAL_DATA_URL, GLOBO_TECH_SIGNATURE_DATA_URL } from '@/lib/brandAssets';
import { Customer, INITIAL_CUSTOMERS } from './CustomersView';

// Types of Quotation Items
export type QuotationItemType = 'IN_STOCK' | 'CUSTOM_PROJECT' | 'SERVICE' | 'OTHER_CHARGE';

export interface QuotationItem {
  id: string;
  type: QuotationItemType;
  name: string;
  sku?: string;
  brand?: string;
  model?: string;
  description?: string;
  warehouse?: string;
  physicalStock?: number;
  reservedStock?: number;
  freeStock?: number;
  unit: string;
  quantity: number;
  unitPrice: number;
  discountPercent: number;
  vatPercent: number;
  taxPercent?: number; // Advance Income Tax (AIT / TDS %) e.g. 5%, 10%
  // Internal costing (hidden from customer PDF)
  unitCost: number; // Actual Landed Cost or Estimated Landed Cost
  leadTime?: string;
  source?: 'CHINA_IMPORT' | 'LOCAL_PURCHASE' | 'EXISTING_STOCK' | 'PROJECT_PROCUREMENT';
  warranty?: string;
  remarks?: string;
}

export type QuotationStatus =
  | 'DRAFT'
  | 'PENDING_APPROVAL'
  | 'APPROVED'
  | 'SENT'
  | 'NEGOTIATION'
  | 'ACCEPTED'
  | 'REJECTED'
  | 'EXPIRED'
  | 'CONVERTED';

export interface QuotationVersion {
  version: number;
  date: string;
  author: string;
  oldTotal: number;
  newTotal: number;
  notes: string;
}

export interface Quotation {
  id: string;
  quotationNumber: string;
  version: number;
  type: 'PRODUCT' | 'SERVICE' | 'PRODUCT_SERVICE' | 'PROJECT';
  date: string;
  validUntil: string;
  customerId: string;
  customerName: string;
  customerCompany: string;
  customerType: 'RETAIL' | 'WHOLESALE' | 'CORPORATE';
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  customerBin?: string;
  salesperson: string;
  projectName: string;
  projectLocation: string;
  reference?: string;
  currency: string;
  paymentTerms: string;
  deliveryTerms: string;
  warrantyTerms: string;
  notes?: string;
  status: QuotationStatus;
  stockReserved: boolean;
  requiresApproval: boolean;
  approvalReason?: string;
  items: QuotationItem[];
  additionalDiscount: number;
  versionHistory: QuotationVersion[];
  timeline: {
    date: string;
    event: string;
    actor: string;
    comments?: string;
  }[];
}

// Initial In-Stock Catalog for Dynamic Selector
const STOCK_CATALOG = [
  {
    id: 'PRD-001',
    sku: 'HK-DS2CD2047G2',
    name: 'Hikvision 4MP ColorVu IP Camera',
    brand: 'Hikvision',
    model: 'DS-2CD2047G2-LU',
    category: 'CCTV & Security',
    unit: 'pcs',
    warehouse: 'Dhaka Central Warehouse',
    physicalStock: 50,
    reservedStock: 10,
    freeStock: 40,
    actualLandedCost: 10000,
    retailPrice: 15000,
    wholesalePrice: 12000,
    projectPrice: 11500,
    warranty: '24 Months'
  },
  {
    id: 'PRD-002',
    sku: 'HK-DS7616NI-K2',
    name: 'Hikvision 16-Channel 4K NVR',
    brand: 'Hikvision',
    model: 'DS-7616NI-K2/16P',
    category: 'CCTV & Security',
    unit: 'pcs',
    warehouse: 'Dhaka Central Warehouse',
    physicalStock: 8,
    reservedStock: 3,
    freeStock: 5,
    actualLandedCost: 32000,
    retailPrice: 48000,
    wholesalePrice: 45000,
    projectPrice: 42000,
    warranty: '24 Months'
  },
  {
    id: 'PRD-003',
    sku: 'DL-CAT6-UTP',
    name: 'D-Link Cat6 UTP Pure Copper Cable (305m)',
    brand: 'D-Link',
    model: 'NCB-C6UBLUR-305',
    category: 'Networking',
    unit: 'box',
    warehouse: 'Dhaka Central Warehouse',
    physicalStock: 45,
    reservedStock: 5,
    freeStock: 40,
    actualLandedCost: 9200,
    retailPrice: 13500,
    wholesalePrice: 12000,
    projectPrice: 11000,
    warranty: 'Lifetime'
  },
  {
    id: 'PRD-004',
    sku: 'CS-C9300-24P-A',
    name: 'Cisco Catalyst 9300 24-Port PoE Switch',
    brand: 'Cisco',
    model: 'C9300-24P-A',
    category: 'Networking',
    unit: 'unit',
    warehouse: 'Chittagong Port Transit Hub',
    physicalStock: 4,
    reservedStock: 0,
    freeStock: 4,
    actualLandedCost: 345000,
    retailPrice: 420000,
    wholesalePrice: 395000,
    projectPrice: 380000,
    warranty: '36 Months'
  }
];

// Initial Quotations including Section 31 Example
const INITIAL_QUOTATIONS: Quotation[] = [
  {
    id: 'QT-2026-001',
    quotationNumber: 'QT-2026-001',
    version: 1,
    type: 'PRODUCT_SERVICE',
    date: '2026-09-20',
    validUntil: '2026-10-20',
    customerId: 'cust-001',
    customerName: 'Md. Tariqul Islam',
    customerCompany: 'ABC Bank Ltd.',
    customerType: 'CORPORATE',
    customerPhone: '+880 1711-223344',
    customerEmail: 'procurement@abcbank.com.bd',
    customerAddress: 'ABC Tower, Motijheel C/A, Dhaka-1000',
    customerBin: 'BIN-001293848-0101',
    salesperson: 'Engr. Sohel Rana',
    projectName: 'Head Office CCTV Upgrade',
    projectLocation: 'Motijheel, Dhaka',
    reference: 'RFQ-ABC-2026-88',
    currency: 'BDT',
    paymentTerms: '50% Advance with PO, 40% on Delivery, 10% on Commissioning',
    deliveryTerms: 'Within 15 days from PO date',
    warrantyTerms: '2 Years Comprehensive Hardware Replacement & On-site Support',
    notes: 'Includes testing, commissioning and cabling support for 3 floors.',
    status: 'SENT',
    stockReserved: false,
    requiresApproval: false,
    additionalDiscount: 0,
    items: [
      {
        id: 'item-1',
        type: 'IN_STOCK',
        name: 'Hikvision 4MP ColorVu IP Camera',
        sku: 'HK-DS2CD2047G2',
        brand: 'Hikvision',
        model: 'DS-2CD2047G2-LU',
        warehouse: 'Dhaka Central Warehouse',
        physicalStock: 50,
        reservedStock: 10,
        freeStock: 40,
        unit: 'pcs',
        quantity: 20,
        unitPrice: 12000,
        discountPercent: 0,
        vatPercent: 7.5,
        unitCost: 10000,
        warranty: '24 Months',
        remarks: 'Main entrance and lobby coverage'
      },
      {
        id: 'item-2',
        type: 'IN_STOCK',
        name: 'Hikvision 16-Channel 4K NVR',
        sku: 'HK-DS7616NI-K2',
        brand: 'Hikvision',
        model: 'DS-7616NI-K2/16P',
        warehouse: 'Dhaka Central Warehouse',
        physicalStock: 8,
        reservedStock: 3,
        freeStock: 5,
        unit: 'pcs',
        quantity: 2,
        unitPrice: 45000,
        discountPercent: 0,
        vatPercent: 7.5,
        unitCost: 32000,
        warranty: '24 Months',
        remarks: 'Dual power supply & 4K decoding'
      },
      {
        id: 'item-3',
        type: 'CUSTOM_PROJECT',
        name: 'Synology NAS RS2825RP+ (Storage Server)',
        brand: 'Synology',
        model: 'RS2825RP+',
        description: '16-bay Rackmount High-Density Storage for Surveillance Archiving',
        unit: 'unit',
        quantity: 1,
        unitPrice: 450000,
        discountPercent: 0,
        vatPercent: 7.5,
        unitCost: 390000,
        leadTime: '30 Days',
        source: 'CHINA_IMPORT',
        warranty: '36 Months',
        remarks: 'Custom procurement from China distributor'
      },
      {
        id: 'item-4',
        type: 'SERVICE',
        name: 'CCTV Installation & Cabling Commissioning',
        description: 'Complete conduit laying, termination, camera mounting, and NVR setup',
        unit: 'Job',
        quantity: 1,
        unitPrice: 150000,
        discountPercent: 0,
        vatPercent: 7.5,
        unitCost: 35000,
        remarks: 'Includes 3 senior network engineers for 5 days'
      },
      {
        id: 'item-5',
        type: 'OTHER_CHARGE',
        name: 'Transportation & Site Equipment Logistics',
        description: 'Covered van freight from Central Warehouse to Client Site',
        unit: 'Trip',
        quantity: 1,
        unitPrice: 20000,
        discountPercent: 0,
        vatPercent: 0,
        unitCost: 15000,
        remarks: 'Direct delivery with insurance'
      }
    ],
    versionHistory: [
      {
        version: 1,
        date: '2026-09-20',
        author: 'Engr. Sohel Rana',
        oldTotal: 0,
        newTotal: 1021250,
        notes: 'Initial quotation generated from client RFQ'
      }
    ],
    timeline: [
      {
        date: '2026-09-20 10:30 AM',
        event: 'Quotation Created',
        actor: 'Engr. Sohel Rana',
        comments: 'Created with 5 items (In-Stock, Custom NAS, Service & Transport)'
      },
      {
        date: '2026-09-20 02:15 PM',
        event: 'Sent to Customer',
        actor: 'Engr. Sohel Rana',
        comments: 'Official PDF emailed to procurement@abcbank.com.bd'
      }
    ]
  },
  {
    id: 'QT-2026-002',
    quotationNumber: 'QT-2026-002',
    version: 1,
    type: 'PRODUCT',
    date: '2026-09-22',
    validUntil: '2026-10-07',
    customerId: 'cust-002',
    customerName: 'Engr. Kamal Hossain',
    customerCompany: 'TechVision Security Systems',
    customerType: 'WHOLESALE',
    customerPhone: '+880 1819-556677',
    customerEmail: 'kamal@techvision.com.bd',
    customerAddress: 'Multiplan Center, Level 6, Elephant Road, Dhaka',
    customerBin: 'BIN-004819283-0202',
    salesperson: 'Sales Officer',
    projectName: 'Dealer Wholesale Restock',
    projectLocation: 'Elephant Road, Dhaka',
    currency: 'BDT',
    paymentTerms: 'Net 15 Days',
    deliveryTerms: 'Ex-Warehouse Dhaka Central',
    warrantyTerms: '2 Years Manufacturer Warranty',
    status: 'ACCEPTED',
    stockReserved: true,
    requiresApproval: false,
    additionalDiscount: 0,
    items: [
      {
        id: 'item-201',
        type: 'IN_STOCK',
        name: 'Hikvision 4MP ColorVu IP Camera',
        sku: 'HK-DS2CD2047G2',
        brand: 'Hikvision',
        warehouse: 'Dhaka Central Warehouse',
        physicalStock: 50,
        reservedStock: 10,
        freeStock: 40,
        unit: 'pcs',
        quantity: 10,
        unitPrice: 12000,
        discountPercent: 0,
        vatPercent: 5,
        unitCost: 10000,
        warranty: '24 Months'
      }
    ],
    versionHistory: [
      {
        version: 1,
        date: '2026-09-22',
        author: 'Sales Officer',
        oldTotal: 0,
        newTotal: 126000,
        notes: 'Wholesale pricing quote'
      }
    ],
    timeline: [
      {
        date: '2026-09-22 11:00 AM',
        event: 'Quotation Created & Accepted',
        actor: 'Sales Officer',
        comments: 'Stock reserved (10 pcs camera)'
      }
    ]
  },
  {
    id: 'QT-2026-003',
    quotationNumber: 'QT-2026-003',
    version: 3,
    type: 'SERVICE',
    date: '2026-09-25',
    validUntil: '2026-10-25',
    customerId: 'cust-daraz',
    customerName: 'Procurement Officer',
    customerCompany: 'Daraz Bangladesh Limited',
    customerType: 'CORPORATE',
    customerPhone: '+880 1700-112233',
    customerEmail: 'procurement@daraz.com.bd',
    customerAddress: 'Tejgaon I/A, Dhaka-1208',
    customerBin: 'BIN-003928174-0101',
    salesperson: 'Engr. Sohel Rana',
    projectName: 'Narshingdi HUB Relocation',
    projectLocation: 'Narshingdi',
    reference: 'RFQ-DARAZ-2026-03',
    currency: 'BDT',
    paymentTerms: '50% Advance with PO, 40% on Delivery, 10% on Commissioning',
    deliveryTerms: 'Within 7 days',
    warrantyTerms: '1 Year Service Warranty',
    status: 'DRAFT',
    stockReserved: false,
    requiresApproval: false,
    additionalDiscount: 0,
    items: [
      {
        id: 'item-301',
        type: 'SERVICE',
        name: 'IT Device Relocation',
        unit: 'job',
        quantity: 1,
        unitPrice: 10000,
        discountPercent: 0,
        vatPercent: 15,
        unitCost: 6000,
        leadTime: 'Immediate',
        remarks: 'Server & Rack Shifting'
      },
      {
        id: 'item-302',
        type: 'SERVICE',
        name: 'CCTV Reinstall',
        unit: 'job',
        quantity: 1,
        unitPrice: 10000,
        discountPercent: 0,
        vatPercent: 15,
        unitCost: 5000,
        leadTime: 'Immediate',
        remarks: 'Camera Dismount and re-setup'
      }
    ],
    versionHistory: [
      {
        version: 1,
        date: '2026-09-25',
        author: 'Sales Officer',
        oldTotal: 0,
        newTotal: 23000,
        notes: 'Quotation drafted'
      }
    ],
    timeline: [
      {
        date: '2026-09-25 10:00 AM',
        event: 'Draft Created',
        actor: 'Sales Officer',
        comments: 'Service relocation quote created'
      }
    ]
  },
  {
    id: 'QT-2026-004',
    quotationNumber: 'QT-2026-004',
    version: 1,
    type: 'SERVICE',
    date: '2026-09-25',
    validUntil: '2026-10-25',
    customerId: 'cust-daraz',
    customerName: 'Procurement Officer',
    customerCompany: 'Daraz Bangladesh Limited',
    customerType: 'CORPORATE',
    customerPhone: '+880 1700-112233',
    customerEmail: 'procurement@daraz.com.bd',
    customerAddress: 'Tejgaon I/A, Dhaka-1208',
    customerBin: 'BIN-003928174-0101',
    salesperson: 'Engr. Sohel Rana',
    projectName: 'Cumilla Hub IT Relocation',
    projectLocation: 'Cumilla',
    reference: 'RFQ-DARAZ-2026-04',
    currency: 'BDT',
    paymentTerms: '50% Advance with PO, 40% on Delivery, 10% on Commissioning',
    deliveryTerms: 'Within 7 days',
    warrantyTerms: '1 Year Service Warranty',
    status: 'DRAFT',
    stockReserved: false,
    requiresApproval: false,
    additionalDiscount: 0,
    items: [
      {
        id: 'item-401',
        type: 'SERVICE',
        name: 'IT Device Relocation',
        unit: 'job',
        quantity: 1,
        unitPrice: 10000,
        discountPercent: 0,
        vatPercent: 15,
        unitCost: 6000,
        leadTime: 'Immediate',
        remarks: 'Cumilla Hub network setup'
      },
      {
        id: 'item-402',
        type: 'SERVICE',
        name: 'CCTV Setup & Cabling',
        unit: 'job',
        quantity: 1,
        unitPrice: 10000,
        discountPercent: 0,
        vatPercent: 15,
        unitCost: 5000,
        leadTime: 'Immediate',
        remarks: 'CCTV points commissioning'
      }
    ],
    versionHistory: [
      {
        version: 1,
        date: '2026-09-25',
        author: 'Sales Officer',
        oldTotal: 0,
        newTotal: 23000,
        notes: 'Quotation drafted'
      }
    ],
    timeline: [
      {
        date: '2026-09-25 11:30 AM',
        event: 'Draft Created',
        actor: 'Sales Officer',
        comments: 'Cumilla Hub relocation draft'
      }
    ]
  }
];

export function QuotationView() {
  const [quotations, setQuotations] = useState<Quotation[]>(INITIAL_QUOTATIONS);
  const [isMounted, setIsMounted] = useState(false);

  // Sync from localStorage on initial client mount
  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('globotech_erp_quotations');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const existingIds = new Set(parsed.map((q: Quotation) => q.id || q.quotationNumber));
            const merged = [
              ...parsed,
              ...INITIAL_QUOTATIONS.filter((initQ) => !existingIds.has(initQ.id) && !existingIds.has(initQ.quotationNumber))
            ];
            setQuotations(merged);
            localStorage.setItem('globotech_erp_quotations', JSON.stringify(merged));
            return;
          }
        } catch (e) {
          console.error('Error loading quotations from localStorage', e);
        }
      }
      localStorage.setItem('globotech_erp_quotations', JSON.stringify(INITIAL_QUOTATIONS));
    }
  }, []);

  // Continuous auto-sync to localStorage whenever quotations state updates
  useEffect(() => {
    if (isMounted && typeof window !== 'undefined') {
      try {
        localStorage.setItem('globotech_erp_quotations', JSON.stringify(quotations));
      } catch (e) {
        console.error('Error syncing quotations to localStorage:', e);
      }
    }
  }, [quotations, isMounted]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [activeViewMode, setActiveViewMode] = useState<'LIST' | 'CREATE' | 'DETAIL' | 'PDF'>('LIST');

  // Selected Quotation for Detail / PDF / Edit
  const [selectedQuotation, setSelectedQuotation] = useState<Quotation | null>(null);

  // Internal vs Customer toggle for Detail view
  const [showInternalCosting, setShowInternalCosting] = useState(true);

  // Conversion Modal State
  const [isConvertModalOpen, setIsConvertModalOpen] = useState(false);
  const [convertTarget, setConvertTarget] = useState<'SALES_ORDER' | 'PROJECT' | 'SERVICE' | 'SALES_AND_PROJECT'>('SALES_ORDER');

  // Approval Modal State
  const [isApprovalModalOpen, setIsApprovalModalOpen] = useState(false);
  const [approvalDecision, setApprovalDecision] = useState<'APPROVE' | 'REJECT'>('APPROVE');
  const [approvalComment, setApprovalComment] = useState('');

  // Version History Modal State
  const [isVersionModalOpen, setIsVersionModalOpen] = useState(false);

  // Quick Edit Terms & Conditions Modal State (Directly from PDF & Detail view)
  const [isEditTermsModalOpen, setIsEditTermsModalOpen] = useState(false);
  const [termsForm, setTermsForm] = useState({
    paymentTerms: '',
    deliveryTerms: '',
    warrantyTerms: '',
    notes: ''
  });

  // State to toggle digital Seal & Signature on customer PDF view
  const [includeSealAndSignature, setIncludeSealAndSignature] = useState(true);

  const handleOpenEditTerms = (quote: Quotation) => {
    setTermsForm({
      paymentTerms: quote.paymentTerms || '',
      deliveryTerms: quote.deliveryTerms || '',
      warrantyTerms: quote.warrantyTerms || '',
      notes: quote.notes || 'Quotation valid for 30 calendar days from issue date.'
    });
    setIsEditTermsModalOpen(true);
  };

  const handleSaveTerms = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedQuotation) return;
    const updatedQuote: Quotation = {
      ...selectedQuotation,
      paymentTerms: termsForm.paymentTerms,
      deliveryTerms: termsForm.deliveryTerms,
      warrantyTerms: termsForm.warrantyTerms,
      notes: termsForm.notes
    };

    setSelectedQuotation(updatedQuote);
    setQuotations((currentList) =>
      currentList.map((q) => (q.id === updatedQuote.id ? updatedQuote : q))
    );

    if (editingQuotationId === updatedQuote.id) {
      setNewQuote((prev) => ({
        ...prev,
        paymentTerms: termsForm.paymentTerms,
        deliveryTerms: termsForm.deliveryTerms,
        warrantyTerms: termsForm.warrantyTerms,
        notes: termsForm.notes
      }));
    }

    setIsEditTermsModalOpen(false);
  };

  // Customer List with localStorage Persistence
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

  // Quick Add Customer Modal State (from Quotation form)
  const [isAddCustomerModalOpen, setIsAddCustomerModalOpen] = useState(false);
  const [customerModalForm, setCustomerModalForm] = useState({
    name: '',
    company: '',
    type: 'CORPORATE' as 'RETAIL' | 'WHOLESALE' | 'CORPORATE',
    phone: '',
    email: '',
    address: '',
    binNumber: '',
    paymentTerms: 'Net 30 Days'
  });

  const handleCreateCustomerFromQuotation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerModalForm.company.trim() && !customerModalForm.name.trim()) {
      alert('Please provide Company / Organization Name');
      return;
    }

    const companyName = customerModalForm.company.trim() || customerModalForm.name.trim();
    const contactName = customerModalForm.name.trim() || companyName;
    const createdCustomer: Customer = {
      id: `cust-${Date.now()}`,
      name: contactName,
      company: companyName,
      type: customerModalForm.type,
      phone: customerModalForm.phone.trim() || '',
      email: customerModalForm.email.trim(),
      address: customerModalForm.address.trim() || 'Dhaka, Bangladesh',
      binNumber: customerModalForm.binNumber.trim(),
      creditLimit: 500000,
      currentDues: 0,
      totalInvoiced: 0,
      paymentTerms: customerModalForm.paymentTerms
    };

    const updated = [createdCustomer, ...customers];
    setCustomers(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('globotech_erp_customers', JSON.stringify(updated));
    }

    // Automatically select newly created customer for this quotation
    setNewQuote((prev) => ({
      ...prev,
      customerId: createdCustomer.id,
      customerCompany: companyName,
      customerName: createdCustomer.name,
      customerType: createdCustomer.type,
      customerPhone: createdCustomer.phone,
      customerEmail: createdCustomer.email || '',
      customerAddress: createdCustomer.address,
      customerBin: createdCustomer.binNumber || ''
    }));

    // Reset form and close modal
    setCustomerModalForm({
      name: '',
      company: '',
      type: 'CORPORATE',
      phone: '',
      email: '',
      address: '',
      binNumber: '',
      paymentTerms: 'Net 30 Days'
    });
    setIsAddCustomerModalOpen(false);
  };

  // ==========================================
  // NEW QUOTATION FORM STATE
  // ==========================================
  const [newQuote, setNewQuote] = useState<Partial<Quotation>>({
    quotationNumber: `QT-2026-${String(quotations.length + 1).padStart(3, '0')}`,
    version: 1,
    type: 'PRODUCT_SERVICE',
    date: new Date().toISOString().split('T')[0],
    validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    customerId: 'cust-001',
    customerName: 'Md. Tariqul Islam',
    customerCompany: 'ABC Bank Ltd.',
    customerType: 'CORPORATE',
    customerPhone: '+880 1711-223344',
    customerEmail: 'procurement@abcbank.com.bd',
    customerAddress: 'ABC Tower, Motijheel C/A, Dhaka-1000',
    customerBin: 'BIN-001293848-0101',
    salesperson: 'Engr. Sohel Rana',
    projectName: '',
    projectLocation: 'Dhaka',
    reference: '',
    currency: 'BDT',
    paymentTerms: '50% Advance with PO, 40% on Delivery, 10% on Commissioning',
    deliveryTerms: 'Within 15 days from PO date',
    warrantyTerms: '2 Years Comprehensive Hardware Replacement',
    notes: '',
    status: 'DRAFT',
    stockReserved: false,
    requiresApproval: false,
    additionalDiscount: 0,
    items: []
  });

  // Edit Quotation State & Trigger
  const [editingQuotationId, setEditingQuotationId] = useState<string | null>(null);

  const handleStartEditQuotation = (quote: Quotation) => {
    setEditingQuotationId(quote.id);
    setSelectedQuotation(quote);
    setNewQuote({
      ...quote,
      items: quote.items ? quote.items.map((i) => ({ ...i })) : []
    });
    setActiveViewMode('CREATE');
  };

  // ==========================================
  // DYNAMIC ADD ITEM MODAL STATE
  // ==========================================
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [selectedItemCategory, setSelectedItemCategory] = useState<QuotationItemType>('IN_STOCK');

  // Dynamic Item Form Builder
  const [itemForm, setItemForm] = useState<Partial<QuotationItem>>({
    type: 'IN_STOCK',
    name: '',
    sku: '',
    brand: '',
    model: '',
    description: '',
    warehouse: 'Dhaka Central Warehouse',
    physicalStock: 0,
    reservedStock: 0,
    freeStock: 0,
    unit: 'pcs',
    quantity: 1,
    unitPrice: 0,
    discountPercent: 0,
    vatPercent: 15,
    taxPercent: 0,
    unitCost: 0,
    leadTime: 'Immediate',
    source: 'EXISTING_STOCK',
    warranty: '24 Months',
    remarks: ''
  });

  // Calculation Helpers
  const calculateItemTotal = (item: QuotationItem) => {
    const gross = item.quantity * item.unitPrice;
    const discount = (gross * (item.discountPercent || 0)) / 100;
    const net = gross - discount;
    const vat = (net * (item.vatPercent || 0)) / 100;
    const tax = (net * (item.taxPercent || 0)) / 100;
    return net + vat + tax;
  };

  const calculateQuotationTotals = (quote: Partial<Quotation>) => {
    const items = quote.items || [];
    let productSubtotal = 0;
    let serviceSubtotal = 0;
    let otherSubtotal = 0;
    let totalDiscount = 0;
    let totalVat = 0;
    let totalTax = 0;
    let totalCost = 0;

    items.forEach((item) => {
      const gross = item.quantity * item.unitPrice;
      const discount = (gross * (item.discountPercent || 0)) / 100;
      const net = gross - discount;
      const vat = (net * (item.vatPercent || 0)) / 100;
      const tax = (net * (item.taxPercent || 0)) / 100;
      const cost = item.quantity * (item.unitCost || 0);

      totalDiscount += discount;
      totalVat += vat;
      totalTax += tax;
      totalCost += cost;

      if (item.type === 'IN_STOCK' || item.type === 'CUSTOM_PROJECT') {
        productSubtotal += net;
      } else if (item.type === 'SERVICE') {
        serviceSubtotal += net;
      } else {
        otherSubtotal += net;
      }
    });

    const subtotal = productSubtotal + serviceSubtotal + otherSubtotal;
    const grandTotal = Math.max(0, subtotal - (quote.additionalDiscount || 0) + totalVat + totalTax);
    const estimatedProfit = grandTotal - totalVat - totalTax - totalCost;
    const profitMargin = subtotal > 0 ? (estimatedProfit / subtotal) * 100 : 0;

    return {
      productSubtotal,
      serviceSubtotal,
      otherSubtotal,
      subtotal,
      totalDiscount,
      totalVat,
      totalTax,
      totalCost,
      grandTotal,
      estimatedProfit,
      profitMargin
    };
  };

  // Filtered Quotations
  const filteredQuotations = quotations.filter((q) => {
    const matchSearch =
      q.quotationNumber.toLowerCase().includes(search.toLowerCase()) ||
      q.customerCompany.toLowerCase().includes(search.toLowerCase()) ||
      q.customerName.toLowerCase().includes(search.toLowerCase()) ||
      q.projectName.toLowerCase().includes(search.toLowerCase());

    const matchStatus = statusFilter === 'ALL' || q.status === statusFilter;
    return matchSearch && matchStatus;
  });

  // Dashboard Metrics
  const totalCount = quotations.length;
  const draftCount = quotations.filter((q) => q.status === 'DRAFT').length;
  const sentCount = quotations.filter((q) => q.status === 'SENT').length;
  const pendingCount = quotations.filter((q) => q.status === 'PENDING_APPROVAL').length;
  const acceptedCount = quotations.filter((q) => q.status === 'ACCEPTED' || q.status === 'CONVERTED').length;
  const rejectedCount = quotations.filter((q) => q.status === 'REJECTED').length;
  const expiredCount = quotations.filter((q) => q.status === 'EXPIRED').length;

  const totalValue = quotations.reduce((acc, q) => acc + calculateQuotationTotals(q).grandTotal, 0);
  const acceptedValue = quotations
    .filter((q) => q.status === 'ACCEPTED' || q.status === 'CONVERTED')
    .reduce((acc, q) => acc + calculateQuotationTotals(q).grandTotal, 0);
  const conversionRate = totalCount > 0 ? (acceptedCount / totalCount) * 100 : 0;

  // Handle Dynamic Stock Item Selection
  const handleSelectCatalogProduct = (sku: string) => {
    const found = STOCK_CATALOG.find((p) => p.sku === sku);
    if (!found) return;

    // Price auto-suggest based on customer type
    let suggestedPrice = found.retailPrice;
    if (newQuote.customerType === 'WHOLESALE') {
      suggestedPrice = found.wholesalePrice;
    } else if (newQuote.customerType === 'CORPORATE') {
      suggestedPrice = found.projectPrice;
    }

    setItemForm({
      ...itemForm,
      type: 'IN_STOCK',
      sku: found.sku,
      name: found.name,
      brand: found.brand,
      model: found.model,
      warehouse: found.warehouse,
      physicalStock: found.physicalStock,
      reservedStock: found.reservedStock,
      freeStock: found.freeStock,
      unit: found.unit,
      unitPrice: suggestedPrice,
      unitCost: found.actualLandedCost,
      warranty: found.warranty,
      leadTime: 'Immediate'
    });
  };

  // Add Item to Quotation
  const handleAddItemToQuote = () => {
    if (!itemForm.name || !itemForm.quantity || itemForm.quantity <= 0) {
      alert('Please enter a valid item name and quantity');
      return;
    }

    const newItem: QuotationItem = {
      id: `item-${Date.now()}`,
      type: selectedItemCategory,
      name: itemForm.name || 'Untitled Item',
      sku: itemForm.sku,
      brand: itemForm.brand,
      model: itemForm.model,
      description: itemForm.description,
      warehouse: itemForm.warehouse,
      physicalStock: itemForm.physicalStock || 0,
      reservedStock: itemForm.reservedStock || 0,
      freeStock: itemForm.freeStock || 0,
      unit: itemForm.unit || 'pcs',
      quantity: Number(itemForm.quantity),
      unitPrice: Number(itemForm.unitPrice) || 0,
      discountPercent: Number(itemForm.discountPercent) || 0,
      vatPercent: Number(itemForm.vatPercent) || 0,
      taxPercent: Number(itemForm.taxPercent) || 0,
      unitCost: Number(itemForm.unitCost) || 0,
      leadTime: itemForm.leadTime || 'Immediate',
      source: itemForm.source,
      warranty: itemForm.warranty || 'N/A',
      remarks: itemForm.remarks
    };

    const updatedItems = [...(newQuote.items || []), newItem];
    setNewQuote((prev) => ({
      ...prev,
      items: updatedItems
    }));

    if (editingQuotationId) {
      setQuotations((currentList) =>
        currentList.map((q) =>
          q.id === editingQuotationId ? { ...q, items: updatedItems } : q
        )
      );
    }

    setIsAddItemModalOpen(false);

    // Reset item form
    setItemForm({
      type: 'IN_STOCK',
      name: '',
      sku: '',
      brand: '',
      model: '',
      description: '',
      warehouse: 'Dhaka Central Warehouse',
      physicalStock: 0,
      reservedStock: 0,
      freeStock: 0,
      unit: 'pcs',
      quantity: 1,
      unitPrice: 0,
      discountPercent: 0,
      vatPercent: 15,
      taxPercent: 0,
      unitCost: 0,
      leadTime: 'Immediate',
      source: 'EXISTING_STOCK',
      warranty: '24 Months',
      remarks: ''
    });
  };

  // Delete Item from Quotation
  const handleDeleteItem = (itemId: string) => {
    const updatedItems = (newQuote.items || []).filter((i) => i.id !== itemId);
    setNewQuote((prev) => ({
      ...prev,
      items: updatedItems
    }));

    if (editingQuotationId) {
      setQuotations((currentList) =>
        currentList.map((q) =>
          q.id === editingQuotationId ? { ...q, items: updatedItems } : q
        )
      );
    }
  };

  // Update Item Unit directly
  const handleUpdateItemUnit = (itemId: string, newUnit: string) => {
    setNewQuote((prev) => {
      const updatedItems = (prev.items || []).map((item) =>
        item.id === itemId ? { ...item, unit: newUnit } : item
      );
      if (editingQuotationId) {
        setQuotations((currentList) =>
          currentList.map((q) =>
            q.id === editingQuotationId ? { ...q, items: updatedItems } : q
          )
        );
      }
      return { ...prev, items: updatedItems };
    });
  };

  // Update Item Quantity directly
  const handleUpdateItemQuantity = (itemId: string, newQty: number) => {
    const safeQty = Math.max(1, isNaN(newQty) ? 1 : newQty);
    setNewQuote((prev) => {
      const updatedItems = (prev.items || []).map((item) =>
        item.id === itemId ? { ...item, quantity: safeQty } : item
      );
      if (editingQuotationId) {
        setQuotations((currentList) =>
          currentList.map((q) =>
            q.id === editingQuotationId ? { ...q, items: updatedItems } : q
          )
        );
      }
      return { ...prev, items: updatedItems };
    });
  };

  // Update Item Unit Price directly
  const handleUpdateItemUnitPrice = (itemId: string, newPrice: number) => {
    const safePrice = Math.max(0, isNaN(newPrice) ? 0 : newPrice);
    setNewQuote((prev) => {
      const updatedItems = (prev.items || []).map((item) =>
        item.id === itemId ? { ...item, unitPrice: safePrice } : item
      );
      if (editingQuotationId) {
        setQuotations((currentList) =>
          currentList.map((q) =>
            q.id === editingQuotationId ? { ...q, items: updatedItems } : q
          )
        );
      }
      return { ...prev, items: updatedItems };
    });
  };

  // Update Item VAT & TAX % directly
  const handleUpdateItemVatPercent = (itemId: string, newVat: number) => {
    const safeVat = Math.max(0, isNaN(newVat) ? 0 : newVat);
    setNewQuote((prev) => {
      const updatedItems = (prev.items || []).map((item) =>
        item.id === itemId ? { ...item, vatPercent: safeVat } : item
      );
      if (editingQuotationId) {
        setQuotations((currentList) =>
          currentList.map((q) =>
            q.id === editingQuotationId ? { ...q, items: updatedItems } : q
          )
        );
      }
      return { ...prev, items: updatedItems };
    });
  };

  // Update Item TAX / AIT % directly
  const handleUpdateItemTaxPercent = (itemId: string, newTax: number) => {
    const safeTax = Math.max(0, isNaN(newTax) ? 0 : newTax);
    setNewQuote((prev) => {
      const updatedItems = (prev.items || []).map((item) =>
        item.id === itemId ? { ...item, taxPercent: safeTax } : item
      );
      if (editingQuotationId) {
        setQuotations((currentList) =>
          currentList.map((q) =>
            q.id === editingQuotationId ? { ...q, items: updatedItems } : q
          )
        );
      }
      return { ...prev, items: updatedItems };
    });
  };

  // Save Quotation (with validation & approval rule triggers)
  const handleSaveQuotation = () => {
    if (!newQuote.customerCompany || !newQuote.projectName) {
      alert('Please fill in Customer and Project Name');
      return;
    }
    if (!newQuote.items || newQuote.items.length === 0) {
      alert('Please add at least one item to the quotation');
      return;
    }

    const { grandTotal, totalDiscount } = calculateQuotationTotals(newQuote);

    // Approval Rules
    let requiresApproval = false;
    let approvalReason = '';

    if (grandTotal > 1000000) {
      requiresApproval = true;
      approvalReason = 'Quotation value exceeds BDT 1,000,000 threshold';
    } else if (totalDiscount > 50000) {
      requiresApproval = true;
      approvalReason = 'High discount threshold exceeded';
    }

    if (editingQuotationId) {
      const existing = quotations.find((q) => q.id === editingQuotationId);
      const newVersion = (existing?.version || 1) + 1;
      const updatedQuote: Quotation = {
        ...(existing || {}),
        ...(newQuote as Quotation),
        id: editingQuotationId,
        quotationNumber: newQuote.quotationNumber || existing?.quotationNumber || editingQuotationId,
        version: newVersion,
        requiresApproval: requiresApproval || existing?.requiresApproval || false,
        approvalReason: approvalReason || existing?.approvalReason,
        versionHistory: [
          ...(existing?.versionHistory || []),
          {
            version: newVersion,
            date: new Date().toISOString().split('T')[0],
            author: newQuote.salesperson || existing?.salesperson || 'Sales Officer',
            oldTotal: existing ? calculateQuotationTotals(existing).grandTotal : 0,
            newTotal: grandTotal,
            notes: 'Quotation modified and re-saved'
          }
        ],
        timeline: [
          ...(existing?.timeline || []),
          {
            date: `${new Date().toISOString().split('T')[0]} ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
            event: `Updated to Rev ${newVersion}`,
            actor: newQuote.salesperson || existing?.salesperson || 'Sales Officer',
            comments: 'Changes saved'
          }
        ]
      };

      const updatedList = quotations.map((q) => (q.id === editingQuotationId ? updatedQuote : q));
      setQuotations(updatedList);
      if (typeof window !== 'undefined') {
        localStorage.setItem('globotech_erp_quotations', JSON.stringify(updatedList));
      }
      setSelectedQuotation(updatedQuote);
      setEditingQuotationId(null);
      setActiveViewMode('DETAIL');
      return;
    }

    const savedQuotation: Quotation = {
      ...(newQuote as Quotation),
      id: newQuote.quotationNumber || `QT-2026-${Date.now()}`,
      quotationNumber: newQuote.quotationNumber || `QT-2026-${Date.now()}`,
      status: requiresApproval ? 'PENDING_APPROVAL' : 'DRAFT',
      requiresApproval,
      approvalReason,
      versionHistory: [
        {
          version: 1,
          date: new Date().toISOString().split('T')[0],
          author: newQuote.salesperson || 'Sales Officer',
          oldTotal: 0,
          newTotal: grandTotal,
          notes: 'Quotation drafted'
        }
      ],
      timeline: [
        {
          date: `${new Date().toISOString().split('T')[0]} ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
          event: requiresApproval ? 'Submitted for Approval' : 'Draft Created',
          actor: newQuote.salesperson || 'Sales Officer',
          comments: requiresApproval ? approvalReason : 'Saved as working draft'
        }
      ]
    };

    const updatedList = [savedQuotation, ...quotations];
    setQuotations(updatedList);
    if (typeof window !== 'undefined') {
      localStorage.setItem('globotech_erp_quotations', JSON.stringify(updatedList));
    }
    setSelectedQuotation(savedQuotation);
    setEditingQuotationId(null);
    setActiveViewMode('LIST');
  };

  // Conversion Handler
  const handleConvertQuotation = () => {
    if (!selectedQuotation) return;

    const updatedQuotations = quotations.map((q) => {
      if (q.id === selectedQuotation.id) {
        return {
          ...q,
          status: 'CONVERTED' as QuotationStatus,
          timeline: [
            ...q.timeline,
            {
              date: `${new Date().toISOString().split('T')[0]} ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
              event: `Converted to ${convertTarget.replace(/_/g, ' ')}`,
              actor: 'Sales Officer',
              comments: `Downstream pipeline activated for ${q.customerCompany}`
            }
          ]
        };
      }
      return q;
    });

    setQuotations(updatedQuotations);
    if (typeof window !== 'undefined') {
      localStorage.setItem('globotech_erp_quotations', JSON.stringify(updatedQuotations));
    }
    setIsConvertModalOpen(false);
    alert(`Success! Quotation ${selectedQuotation.quotationNumber} has been converted into ${convertTarget.replace(/_/g, ' ')}. Downstream fulfillment & billing triggered.`);
    setActiveViewMode('LIST');
  };

  // Approval Decision Handler
  const handleApprovalDecision = () => {
    if (!selectedQuotation) return;

    const updatedQuotations = quotations.map((q) => {
      if (q.id === selectedQuotation.id) {
        const newStatus: QuotationStatus = approvalDecision === 'APPROVE' ? 'APPROVED' : 'REJECTED';
        return {
          ...q,
          status: newStatus,
          requiresApproval: false,
          timeline: [
            ...q.timeline,
            {
              date: `${new Date().toISOString().split('T')[0]} ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
              event: approvalDecision === 'APPROVE' ? 'Management Approved' : 'Management Rejected',
              actor: 'Managing Director',
              comments: approvalComment || (approvalDecision === 'APPROVE' ? 'Commercial terms approved' : 'Pricing revised request')
            }
          ]
        };
      }
      return q;
    });

    setQuotations(updatedQuotations);
    if (typeof window !== 'undefined') {
      localStorage.setItem('globotech_erp_quotations', JSON.stringify(updatedQuotations));
    }
    setIsApprovalModalOpen(false);
    alert(`Quotation ${selectedQuotation.quotationNumber} ${approvalDecision === 'APPROVE' ? 'Approved' : 'Rejected'} successfully.`);
    setActiveViewMode('LIST');
  };

  // Render Status Badge
  const getStatusBadge = (status: QuotationStatus) => {
    switch (status) {
      case 'DRAFT':
        return <Badge variant="neutral">Draft</Badge>;
      case 'PENDING_APPROVAL':
        return <Badge variant="warning">Pending Approval</Badge>;
      case 'APPROVED':
        return <Badge variant="blue">Approved</Badge>;
      case 'SENT':
        return <Badge variant="info">Sent to Client</Badge>;
      case 'NEGOTIATION':
        return <Badge variant="purple">In Negotiation</Badge>;
      case 'ACCEPTED':
        return <Badge variant="success">Accepted (Reserved)</Badge>;
      case 'REJECTED':
        return <Badge variant="danger">Rejected</Badge>;
      case 'EXPIRED':
        return <Badge variant="neutral">Expired</Badge>;
      case 'CONVERTED':
        return <Badge variant="success">Converted to Order</Badge>;
      default:
        return <Badge variant="neutral">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* ========================================================
          1. HEADER & TOP ACTIONS
          ======================================================== */}
      {activeViewMode !== 'PDF' && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print">
          <div>
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              Enterprise Quotation & Tender System
            </h2>
            <p className="text-xs text-slate-400">
              Unified Product, Service, Custom Project, and Freight tender management with dynamic free-stock validation
            </p>
          </div>

          <div className="flex items-center gap-2">
            {activeViewMode !== 'LIST' && (
              <button
                onClick={() => {
                  setEditingQuotationId(null);
                  setActiveViewMode('LIST');
                }}
                className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition"
              >
                &larr; Back to Quotation List
              </button>
            )}

            {activeViewMode === 'LIST' && (
              <button
                onClick={() => {
                  setEditingQuotationId(null);
                  setNewQuote({
                    quotationNumber: `QT-2026-${String(quotations.length + 1).padStart(3, '0')}`,
                    version: 1,
                    type: 'PRODUCT_SERVICE',
                    date: new Date().toISOString().split('T')[0],
                    validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                    customerId: 'cust-001',
                    customerName: 'Md. Tariqul Islam',
                    customerCompany: 'ABC Bank Ltd.',
                    customerType: 'CORPORATE',
                    customerPhone: '+880 1711-223344',
                    customerEmail: 'procurement@abcbank.com.bd',
                    customerAddress: 'ABC Tower, Motijheel C/A, Dhaka-1000',
                    customerBin: 'BIN-001293848-0101',
                    salesperson: 'Engr. Sohel Rana',
                    projectName: '',
                    projectLocation: 'Dhaka',
                    reference: '',
                    currency: 'BDT',
                    paymentTerms: '50% Advance with PO, 40% on Delivery, 10% on Commissioning',
                    deliveryTerms: 'Within 15 days from PO date',
                    warrantyTerms: '2 Years Comprehensive Hardware Replacement',
                    notes: '',
                    status: 'DRAFT',
                    stockReserved: false,
                    requiresApproval: false,
                    additionalDiscount: 0,
                    items: []
                  });
                  setActiveViewMode('CREATE');
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition shadow-lg shadow-blue-500/20"
              >
                <Plus className="w-4 h-4" />
                <span>+ New Quotation</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* ========================================================
          2. DASHBOARD KPI CARDS (Always visible or in LIST mode)
          ======================================================== */}
      {activeViewMode === 'LIST' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium">Total Quotations</span>
              <p className="text-lg sm:text-xl font-bold text-slate-100 mt-0.5">{totalCount}</p>
              <span className="text-[10px] text-blue-400 font-medium">All Lifetime Quotes</span>
            </div>
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium">Total Value</span>
              <p className="text-lg sm:text-xl font-bold text-blue-400 mt-0.5">{formatCompactBDT(totalValue)}</p>
              <span className="text-[10px] text-slate-500 truncate block">{formatBDT(totalValue)}</span>
            </div>
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium">Accepted Value</span>
              <p className="text-lg sm:text-xl font-bold text-emerald-400 mt-0.5">{formatCompactBDT(acceptedValue)}</p>
              <span className="text-[10px] text-emerald-400 font-semibold">{conversionRate.toFixed(1)}% Win Rate</span>
            </div>
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium">In Pipeline</span>
              <p className="text-lg sm:text-xl font-bold text-amber-400 mt-0.5">{sentCount + pendingCount}</p>
              <span className="text-[10px] text-amber-400">Active client reviews</span>
            </div>
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900 border border-slate-800 col-span-2 sm:col-span-1">
              <span className="text-[11px] text-slate-400 font-medium">Drafts & Revisions</span>
              <p className="text-lg sm:text-xl font-bold text-purple-400 mt-0.5">{draftCount}</p>
              <span className="text-[10px] text-slate-500">Unsubmitted quotes</span>
            </div>
          </div>

          {/* Search & Quick Status Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 bg-slate-900 border border-slate-800 rounded-xl">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search Quote #, Client, Project..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-4 py-2 sm:py-1.5 text-sm sm:text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto touch-scroll pb-1 sm:pb-0">
              {['ALL', 'DRAFT', 'SENT', 'PENDING_APPROVAL', 'ACCEPTED', 'CONVERTED', 'REJECTED'].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition flex-shrink-0 ${
                    statusFilter === st
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40'
                      : 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-slate-200'
                  }`}
                >
                  {st.replace(/_/g, ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Quotations Master Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
            <div className="sm:hidden px-3 py-2 bg-slate-800/40 border-b border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>👉 Swipe table horizontally for full details & actions</span>
              <span className="font-semibold text-slate-300">{filteredQuotations.length} quotes</span>
            </div>
            <div className="overflow-x-auto touch-scroll">
              <table className="w-full text-left text-xs text-slate-300 min-w-[850px]">
                <thead className="bg-slate-800/80 text-slate-400 uppercase font-semibold border-b border-slate-800">
                  <tr>
                    <th className="px-4 py-3">Quote # & Date</th>
                    <th className="px-4 py-3">Customer & Project</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Items</th>
                    <th className="px-4 py-3 text-right">Grand Total (BDT)</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Stock State</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredQuotations.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-4 py-8 text-center text-slate-500">
                        No matching quotations found.
                      </td>
                    </tr>
                  ) : (
                    filteredQuotations.map((q) => {
                      const totals = calculateQuotationTotals(q);

                      return (
                        <tr key={q.id} className="hover:bg-slate-800/40 transition">
                          <td className="px-4 py-3">
                            <div className="font-mono font-bold text-blue-400 flex items-center gap-1.5">
                              {q.quotationNumber}
                              <span className="text-[10px] text-slate-500 font-normal">v{q.version}</span>
                            </div>
                            <span className="text-[10px] text-slate-500">{formatDate(q.date)}</span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="font-semibold text-slate-100">{q.customerCompany}</div>
                            <div className="text-[11px] text-slate-400">{q.projectName}</div>
                          </td>
                          <td className="px-4 py-3">
                            <Badge variant={q.type === 'PRODUCT_SERVICE' ? 'purple' : q.type === 'PRODUCT' ? 'blue' : 'info'}>
                              {q.type.replace(/_/g, ' + ')}
                            </Badge>
                          </td>
                          <td className="px-4 py-3 text-slate-400">
                            {q.items.length} Lines
                            <div className="text-[10px] text-slate-500 truncate max-w-[140px]">
                              {q.items.map((i) => i.name).join(', ')}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-right font-mono font-bold text-slate-100">
                            {formatBDT(totals.grandTotal)}
                          </td>
                          <td className="px-4 py-3">{getStatusBadge(q.status)}</td>
                          <td className="px-4 py-3">
                            {q.stockReserved ? (
                              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                                <ShieldCheck className="w-3 h-3" /> Reserved
                              </span>
                            ) : (
                              <span className="text-[11px] text-slate-500">Unreserved</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-right space-x-1.5 whitespace-nowrap">
                            <button
                              onClick={() => {
                                setSelectedQuotation(q);
                                setActiveViewMode('DETAIL');
                              }}
                              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-blue-400 font-semibold text-xs border border-slate-700 transition"
                            >
                              Inspect
                            </button>
                            <button
                              onClick={() => handleStartEditQuotation(q)}
                              className="px-2.5 py-1 rounded bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 font-semibold text-xs border border-amber-500/30 transition inline-flex items-center gap-1"
                              title="Edit Quotation"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                              Edit
                            </button>
                            <button
                              onClick={() => {
                                setSelectedQuotation(q);
                                setActiveViewMode('PDF');
                              }}
                              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition"
                              title="Print / View Customer PDF"
                            >
                              <Printer className="w-3.5 h-3.5 inline mr-1 text-slate-400" />
                              PDF
                            </button>
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
      )}

      {/* ========================================================
          3. CREATE / EDIT QUOTATION VIEW
          ======================================================== */}
      {activeViewMode === 'CREATE' && (
        <div className="space-y-6">
          {/* Top Form Header Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800 pb-3 gap-2">
              <div>
                <h3 className="font-bold text-sm text-slate-100 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-400" />
                  {editingQuotationId ? `Edit Quotation: ${newQuote.quotationNumber}` : 'Quotation Specification & Header'}
                </h3>
                <p className="text-xs text-slate-400">
                  {editingQuotationId
                    ? 'Modify items, pricing, terms, and specifications for this quotation'
                    : 'Assign customer, project parameters, terms of warranty, and quotation scope'}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-blue-400 bg-blue-950/60 px-3 py-1 rounded border border-blue-800/60">
                  {newQuote.quotationNumber}
                </span>
                <span className="text-xs text-slate-400 font-semibold">Rev {newQuote.version}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-slate-400 font-semibold">Customer / Organization *</label>
                  <button
                    type="button"
                    onClick={() => setIsAddCustomerModalOpen(true)}
                    className="px-2 py-0.5 rounded bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-500/40 text-[10px] font-bold flex items-center gap-1 transition"
                  >
                    <Plus className="w-3 h-3" /> New Customer
                  </button>
                </div>
                <select
                  value={newQuote.customerId || ''}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '__ADD_NEW__') {
                      setIsAddCustomerModalOpen(true);
                      return;
                    }
                    const found = customers.find((c) => c.id === val || c.company === val || c.name === val);
                    if (found) {
                      setNewQuote({
                        ...newQuote,
                        customerId: found.id,
                        customerCompany: found.company || found.name,
                        customerName: found.name,
                        customerType: found.type,
                        customerPhone: found.phone,
                        customerEmail: found.email || '',
                        customerAddress: found.address,
                        customerBin: found.binNumber || ''
                      });
                    }
                  }}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-blue-500 font-medium"
                >
                  {customers.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.company || c.name} ({c.type})
                    </option>
                  ))}
                  <option value="__ADD_NEW__" className="text-blue-400 font-bold bg-slate-900">
                    + Add New Customer...
                  </option>
                </select>
                <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
                  <span>
                    Tier: <span className="text-blue-400 font-semibold">{newQuote.customerType}</span>
                    {newQuote.customerBin && <> &bull; BIN: {newQuote.customerBin}</>}
                  </span>
                  {newQuote.customerPhone && (
                    <span className="text-slate-500">{newQuote.customerPhone}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Project Name & Site *</label>
                <input
                  type="text"
                  placeholder="e.g. Head Office CCTV Modernization"
                  value={newQuote.projectName}
                  onChange={(e) => setNewQuote({ ...newQuote, projectName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Project Location (e.g. Motijheel, Dhaka)"
                  value={newQuote.projectLocation}
                  onChange={(e) => setNewQuote({ ...newQuote, projectLocation: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-[11px] text-slate-300 mt-1 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Scope & Quotation Type</label>
                <select
                  value={newQuote.type}
                  onChange={(e) => setNewQuote({ ...newQuote, type: e.target.value as any })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-blue-500 font-medium"
                >
                  <option value="PRODUCT_SERVICE">Product + Installation Service</option>
                  <option value="PRODUCT">Product Only (Supply)</option>
                  <option value="SERVICE">Service & Maintenance Only</option>
                  <option value="PROJECT">Turnkey Custom Project</option>
                </select>

                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div>
                    <span className="text-[10px] text-slate-500">Quote Date:</span>
                    <input
                      type="date"
                      value={newQuote.date}
                      onChange={(e) => setNewQuote({ ...newQuote, date: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-300"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500">Valid Until:</span>
                    <input
                      type="date"
                      value={newQuote.validUntil}
                      onChange={(e) => setNewQuote({ ...newQuote, validUntil: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              DYNAMIC ITEM TABLE
              ======================================================== */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="font-bold text-sm text-slate-100 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-purple-400" />
                  Dynamic Quotation Items ({newQuote.items?.length || 0} line items)
                </h3>
                <p className="text-xs text-slate-400">
                  Combine In-Stock items, Custom/China imports, Installation Services, and Freight charges
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setSelectedItemCategory('IN_STOCK');
                    setIsAddItemModalOpen(true);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition shadow-md shadow-blue-500/20"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+ Add Item</span>
                </button>
              </div>
            </div>

            {/* Items Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-800/80 text-slate-400 uppercase font-semibold border-b border-slate-800">
                  <tr>
                    <th className="px-2.5 py-2.5">SL</th>
                    <th className="px-2.5 py-2.5">Type</th>
                    <th className="px-2.5 py-2.5">Item Description & Specifications</th>
                    <th className="px-2.5 py-2.5">Warehouse / Stock Status</th>
                    <th className="px-2.5 py-2.5 text-center">Quoted Qty</th>
                    <th className="px-2.5 py-2.5 text-right">Unit Price</th>
                    <th className="px-2.5 py-2.5 text-right">VAT % (Mushak 6.3)</th>
                    <th className="px-2.5 py-2.5 text-right text-amber-300">TAX % (AIT)</th>
                    <th className="px-2.5 py-2.5 text-right">Line Total</th>
                    <th className="px-2.5 py-2.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {!newQuote.items || newQuote.items.length === 0 ? (
                    <tr>
                      <td colSpan={10} className="px-4 py-8 text-center text-slate-500">
                        No items added yet. Click &ldquo;+ Add Item&rdquo; above to select In-Stock products, custom items, or services.
                      </td>
                    </tr>
                  ) : (
                    newQuote.items.map((item, idx) => {
                      const total = calculateItemTotal(item);
                      const isStockExceeded = item.type === 'IN_STOCK' && (item.freeStock || 0) < item.quantity;
                      const unitPriceWithTax = item.unitPrice * (1 + (item.vatPercent || 0) / 100 + (item.taxPercent || 0) / 100);

                      return (
                        <tr key={item.id} className="hover:bg-slate-800/40 transition">
                          <td className="px-3 py-2.5 font-bold text-slate-400">{idx + 1}</td>
                          <td className="px-3 py-2.5">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${
                                item.type === 'IN_STOCK'
                                  ? 'bg-blue-950 text-blue-300 border-blue-800'
                                  : item.type === 'CUSTOM_PROJECT'
                                  ? 'bg-purple-950 text-purple-300 border-purple-800'
                                  : item.type === 'SERVICE'
                                  ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                                  : 'bg-amber-950 text-amber-300 border-amber-800'
                              }`}
                            >
                              {item.type.replace(/_/g, ' ')}
                            </span>
                          </td>
                          <td className="px-3 py-2.5">
                            <div className="font-semibold text-slate-100">{item.name}</div>
                            {item.sku && <span className="font-mono text-[10px] text-slate-400 mr-2">{item.sku}</span>}
                            {item.leadTime && item.leadTime !== 'Immediate' && (
                              <span className="text-[10px] text-amber-400 font-semibold">Lead Time: {item.leadTime}</span>
                            )}
                            {item.remarks && <p className="text-[10px] text-slate-400 italic mt-0.5">{item.remarks}</p>}
                          </td>
                          <td className="px-3 py-2.5">
                            {item.type === 'IN_STOCK' ? (
                              <div>
                                <span className="text-slate-300">{item.warehouse}</span>
                                <div className="text-[10px] flex items-center gap-1.5 mt-0.5">
                                  <span className="text-emerald-400 font-semibold">Free: {item.freeStock} {item.unit}</span>
                                  <span className="text-slate-500">(Phys: {item.physicalStock})</span>
                                </div>
                                {isStockExceeded && (
                                  <div className="text-[10px] text-rose-400 font-bold flex items-center gap-1 mt-0.5">
                                    <AlertTriangle className="w-3 h-3" /> Insufficient Stock!
                                  </div>
                                )}
                              </div>
                            ) : (
                              <span className="text-slate-500 text-[11px]">Non-Inventory Charge</span>
                            )}
                          </td>
                          <td className="px-3 py-2.5 text-center whitespace-nowrap">
                            <div className="inline-flex items-center justify-center gap-1.5 bg-slate-950/70 border border-slate-700/80 rounded-lg px-2 py-1 shadow-inner">
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => handleUpdateItemQuantity(item.id, Number(e.target.value))}
                                className="w-12 bg-transparent text-center font-mono font-bold text-slate-100 text-xs focus:outline-none focus:bg-slate-900 rounded"
                                title="Edit Quantity"
                              />
                              <select
                                value={
                                  ['pcs', 'nos', 'job', 'packet', 'box', 'set', 'meter', 'roll', 'lot', 'unit'].includes(
                                    (item.unit || '').toLowerCase()
                                  )
                                    ? (item.unit || '').toLowerCase()
                                    : (item.unit || 'pcs')
                                }
                                onChange={(e) => {
                                  const val = e.target.value;
                                  if (val === '__CUSTOM__') {
                                    const custom = prompt(
                                      'Custom Unit লিখুন (যেমন: coil, bundle, drum, sqft, trip, license):',
                                      item.unit || ''
                                    );
                                    if (custom && custom.trim()) {
                                      handleUpdateItemUnit(item.id, custom.trim());
                                    }
                                  } else {
                                    handleUpdateItemUnit(item.id, val);
                                  }
                                }}
                                className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-blue-400 font-semibold text-xs rounded px-1.5 py-0.5 focus:outline-none focus:border-blue-500 cursor-pointer transition shadow-sm"
                                title="Select or Change Unit (pcs, nos, job, packet, box, etc.)"
                              >
                                <option value="pcs">pcs</option>
                                <option value="nos">nos</option>
                                <option value="job">job</option>
                                <option value="packet">packet</option>
                                <option value="box">box</option>
                                <option value="set">set</option>
                                <option value="meter">meter</option>
                                <option value="roll">roll</option>
                                <option value="lot">lot</option>
                                <option value="unit">unit</option>
                                {item.unit &&
                                  !['pcs', 'nos', 'job', 'packet', 'box', 'set', 'meter', 'roll', 'lot', 'unit'].includes(
                                    item.unit.toLowerCase()
                                  ) && <option value={item.unit}>{item.unit}</option>}
                                <option value="__CUSTOM__">✏️ Custom Unit...</option>
                              </select>
                            </div>
                          </td>
                          <td className="px-3 py-2.5 text-right whitespace-nowrap">
                            <div className="inline-flex items-center justify-end gap-1">
                              <span className="text-slate-400 font-mono text-xs">৳</span>
                              <input
                                type="number"
                                min="0"
                                value={item.unitPrice}
                                onChange={(e) => handleUpdateItemUnitPrice(item.id, Number(e.target.value))}
                                className="w-24 bg-slate-950/70 border border-slate-700/80 rounded px-2 py-1 text-right font-mono font-bold text-slate-100 text-xs focus:outline-none focus:border-blue-500"
                                title="Base Unit Price"
                              />
                            </div>
                            <div className="text-[10px] text-emerald-400 font-mono mt-0.5" title="Unit Price inclusive of VAT & TAX">
                              ৳{unitPriceWithTax.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                              {((item.vatPercent || 0) > 0 || (item.taxPercent || 0) > 0) && (
                                <span className="text-[9px] text-slate-400 block font-sans">
                                  (inc. {item.vatPercent || 0}% VAT{(item.taxPercent || 0) > 0 ? ` + ${item.taxPercent}% TAX` : ''})
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-2.5 py-2.5 text-right whitespace-nowrap">
                            <div className="inline-flex items-center justify-end gap-1">
                              <input
                                type="number"
                                min="0"
                                step="0.5"
                                value={item.vatPercent}
                                onChange={(e) => handleUpdateItemVatPercent(item.id, Number(e.target.value))}
                                className="w-12 bg-slate-950/70 border border-slate-700/80 rounded px-1.5 py-1 text-right font-mono font-bold text-slate-100 text-xs focus:outline-none focus:border-blue-500"
                                title="Edit VAT % (Mushak 6.3)"
                              />
                              <select
                                value={item.vatPercent}
                                onChange={(e) => handleUpdateItemVatPercent(item.id, Number(e.target.value))}
                                className="bg-slate-900 border border-slate-700/80 text-[10px] text-slate-300 rounded px-1 py-1 cursor-pointer focus:outline-none focus:border-blue-500 hover:bg-slate-800"
                                title="Select Mushak 6.3 Preset Rate"
                              >
                                <option value="15">15% (Std)</option>
                                <option value="10">10%</option>
                                <option value="7.5">7.5%</option>
                                <option value="5">5%</option>
                                <option value="25">25%</option>
                                <option value="20">20%</option>
                                <option value="17.5">17.5%</option>
                                <option value="0">0%</option>
                                {!['15', '10', '7.5', '5', '25', '20', '17.5', '0'].includes(String(item.vatPercent)) && (
                                  <option value={item.vatPercent}>{item.vatPercent}%</option>
                                )}
                              </select>
                            </div>
                          </td>
                          <td className="px-2.5 py-2.5 text-right whitespace-nowrap">
                            <div className="inline-flex items-center justify-end gap-1">
                              <input
                                type="number"
                                min="0"
                                step="0.5"
                                value={item.taxPercent || 0}
                                onChange={(e) => handleUpdateItemTaxPercent(item.id, Number(e.target.value))}
                                className="w-12 bg-slate-950/70 border border-slate-700/80 rounded px-1.5 py-1 text-right font-mono font-bold text-amber-300 text-xs focus:outline-none focus:border-amber-500"
                                title="Edit TAX % (AIT / TDS)"
                              />
                              <select
                                value={item.taxPercent || 0}
                                onChange={(e) => handleUpdateItemTaxPercent(item.id, Number(e.target.value))}
                                className="bg-slate-900 border border-slate-700/80 text-[10px] text-amber-300 rounded px-1 py-1 cursor-pointer focus:outline-none focus:border-amber-500 hover:bg-slate-800"
                                title="Select TAX / AIT Preset Rate (e.g. 5%, 10%)"
                              >
                                <option value="0">0%</option>
                                <option value="5">5% (Supply)</option>
                                <option value="10">10% (Service)</option>
                                <option value="2.5">2.5%</option>
                                <option value="7">7%</option>
                                {!['0', '5', '10', '2.5', '7'].includes(String(item.taxPercent || 0)) && (
                                  <option value={item.taxPercent}>{item.taxPercent}%</option>
                                )}
                              </select>
                            </div>
                          </td>
                          <td className="px-3 py-2.5 text-right font-mono font-bold text-slate-100">
                            {formatBDT(total)}
                          </td>
                          <td className="px-3 py-2.5 text-right">
                            <button
                              onClick={() => handleDeleteItem(item.id)}
                              className="p-1 rounded text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition"
                              title="Delete Item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Calculations Summary Row */}
            {newQuote.items && newQuote.items.length > 0 && (
              <div className="border-t border-slate-800 pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Internal Profit / Costing Preview Box */}
                <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center justify-between pb-1 border-b border-slate-800">
                    <span className="font-bold text-slate-200 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                      Internal Cost & Margin Preview (Hidden from Customer PDF)
                    </span>
                    <Badge variant="purple">Internal Audit</Badge>
                  </div>
                  {(() => {
                    const totals = calculateQuotationTotals(newQuote);
                    return (
                      <div className="grid grid-cols-3 gap-2 pt-1 text-slate-300">
                        <div>
                          <span className="text-[10px] text-slate-500 block">Total Landed/Est Cost:</span>
                          <span className="font-mono font-bold text-slate-200">{formatBDT(totals.totalCost)}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-500 block">Estimated Gross Profit:</span>
                          <span className="font-mono font-bold text-emerald-400">{formatBDT(totals.estimatedProfit)}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-500 block">Profit Margin %:</span>
                          <span className="font-mono font-bold text-blue-400">{totals.profitMargin.toFixed(1)}%</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Customer Facing Subtotals */}
                <div className="space-y-1.5 text-xs text-slate-300">
                  {(() => {
                    const totals = calculateQuotationTotals(newQuote);
                    return (
                      <>
                        <div className="flex justify-between">
                          <span>Product Subtotal:</span>
                          <span className="font-mono text-slate-200">{formatBDT(totals.productSubtotal)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Installation & Service Charges:</span>
                          <span className="font-mono text-slate-200">{formatBDT(totals.serviceSubtotal)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Transportation & Other Charges:</span>
                          <span className="font-mono text-slate-200">{formatBDT(totals.otherSubtotal)}</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>Calculated VAT (Mushak 6.3):</span>
                          <span className="font-mono">{formatBDT(totals.totalVat)}</span>
                        </div>
                        {totals.totalTax > 0 && (
                          <div className="flex justify-between text-amber-400">
                            <span>Calculated TAX / AIT (TDS):</span>
                            <span className="font-mono">{formatBDT(totals.totalTax)}</span>
                          </div>
                        )}
                        <div className="flex justify-between items-center py-2 border-t border-slate-800 text-sm font-bold text-slate-100">
                          <span>Grand Total (BDT):</span>
                          <span className="font-mono text-base text-blue-400">{formatBDT(totals.grandTotal)}</span>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            )}
          </div>

          {/* Commercial Terms & Conditions (কোটেশনের শর্তাবলী) */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                <h3 className="font-bold text-sm text-slate-100 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" />
                  Commercial Terms & Conditions (কোটেশনের বাণিজ্যিক শর্তাবলী)
                </h3>
                <span className="text-[11px] text-slate-400">Printed directly at the bottom of the customer Quotation A4 sheet</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Payment Terms */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-slate-300 font-semibold">Payment Terms *</label>
                    <select
                      onChange={(e) => {
                        if (e.target.value) {
                          setNewQuote({ ...newQuote, paymentTerms: e.target.value });
                        }
                      }}
                      className="bg-slate-950 border border-slate-700 text-[10px] text-slate-300 rounded px-1.5 py-0.5 cursor-pointer hover:bg-slate-800 focus:outline-none"
                    >
                      <option value="">Standard presets...</option>
                      <option value="50% Advance with PO, 40% on Delivery, 10% on Commissioning">50% Adv, 40% Del, 10% Com</option>
                      <option value="100% Advance Payment with Work Order">100% Advance with PO</option>
                      <option value="50% Advance with PO, 50% on Delivery">50% Adv, 50% on Delivery</option>
                      <option value="Net 30 Days after Delivery & Invoice">Net 30 Days</option>
                      <option value="Net 15 Days after Invoice">Net 15 Days</option>
                      <option value="Cash on Delivery (COD)">Cash on Delivery (COD)</option>
                    </select>
                  </div>
                  <textarea
                    rows={2}
                    value={newQuote.paymentTerms || ''}
                    onChange={(e) => setNewQuote({ ...newQuote, paymentTerms: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500 font-medium resize-none"
                    placeholder="e.g. 50% Advance with PO, 40% on Delivery, 10% on Commissioning"
                  />
                </div>

                {/* Delivery Terms */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-slate-300 font-semibold">Delivery Terms *</label>
                    <select
                      onChange={(e) => {
                        if (e.target.value) {
                          setNewQuote({ ...newQuote, deliveryTerms: e.target.value });
                        }
                      }}
                      className="bg-slate-950 border border-slate-700 text-[10px] text-slate-300 rounded px-1.5 py-0.5 cursor-pointer hover:bg-slate-800 focus:outline-none"
                    >
                      <option value="">Standard presets...</option>
                      <option value="Within 7 days from PO date">Within 7 days</option>
                      <option value="Within 15 days from PO date">Within 15 days</option>
                      <option value="Within 30 days from PO date">Within 30 days</option>
                      <option value="Within 3-5 Working Days">Within 3-5 Working Days</option>
                      <option value="Immediate Delivery from Central Warehouse">Immediate Delivery (Ex-Stock)</option>
                    </select>
                  </div>
                  <textarea
                    rows={2}
                    value={newQuote.deliveryTerms || ''}
                    onChange={(e) => setNewQuote({ ...newQuote, deliveryTerms: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500 font-medium resize-none"
                    placeholder="e.g. Within 15 days from PO date"
                  />
                </div>

                {/* Warranty Support */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-slate-300 font-semibold">Warranty Support *</label>
                    <select
                      onChange={(e) => {
                        if (e.target.value) {
                          setNewQuote({ ...newQuote, warrantyTerms: e.target.value });
                        }
                      }}
                      className="bg-slate-950 border border-slate-700 text-[10px] text-slate-300 rounded px-1.5 py-0.5 cursor-pointer hover:bg-slate-800 focus:outline-none"
                    >
                      <option value="">Standard presets...</option>
                      <option value="No Warranty">No Warranty</option>
                      <option value="No Warranty Applicable">No Warranty Applicable</option>
                      <option value="No Warranty (As-Is Condition)">No Warranty (As-Is Condition)</option>
                      <option value="1 Month Replacement Warranty">1 Month Replacement Warranty</option>
                      <option value="3 Months Service Warranty">3 Months Service Warranty</option>
                      <option value="6 Months Service Warranty">6 Months Service Warranty</option>
                      <option value="1 Year Full Service & Support Warranty">1 Year Service Warranty</option>
                      <option value="2 Years Comprehensive Hardware Replacement">2 Years Hardware Replacement</option>
                      <option value="3 Years Manufacturer Hardware Warranty">3 Years Manufacturer Warranty</option>
                      <option value="24 Months Comprehensive Hardware Replacement & On-site Support">24 Months On-site Support</option>
                      <option value="As per manufacturer standard policy">As per manufacturer policy</option>
                    </select>
                  </div>
                  <textarea
                    rows={2}
                    value={newQuote.warrantyTerms || ''}
                    onChange={(e) => setNewQuote({ ...newQuote, warrantyTerms: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500 font-medium resize-none"
                    placeholder="e.g. 2 Years Comprehensive Hardware Replacement"
                  />
                </div>

                {/* Validity & Special Conditions */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-slate-300 font-semibold">Validity & Special Conditions</label>
                    <select
                      onChange={(e) => {
                        if (e.target.value) {
                          setNewQuote({ ...newQuote, notes: e.target.value });
                        }
                      }}
                      className="bg-slate-950 border border-slate-700 text-[10px] text-slate-300 rounded px-1.5 py-0.5 cursor-pointer hover:bg-slate-800 focus:outline-none"
                    >
                      <option value="">Standard presets...</option>
                      <option value="Quotation valid for 30 calendar days from issue date.">Valid for 30 calendar days</option>
                      <option value="Quotation valid for 15 calendar days from issue date.">Valid for 15 calendar days</option>
                      <option value="Quotation valid for 7 calendar days due to currency fluctuation.">Valid for 7 calendar days</option>
                      <option value="Prices are subject to stock availability and valid for 30 days.">Subject to stock (30 days)</option>
                    </select>
                  </div>
                  <textarea
                    rows={2}
                    value={newQuote.notes || ''}
                    onChange={(e) => setNewQuote({ ...newQuote, notes: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500 font-medium resize-none"
                    placeholder="e.g. Quotation valid for 30 calendar days from issue date."
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={() => {
                setEditingQuotationId(null);
                if (selectedQuotation && editingQuotationId) {
                  setActiveViewMode('DETAIL');
                } else {
                  setActiveViewMode('LIST');
                }
              }}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveQuotation}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition shadow-lg shadow-blue-500/20"
            >
              {editingQuotationId ? 'Save & Update Quotation' : 'Save & Finalize Quotation'}
            </button>
          </div>
        </div>
      )}

      {/* ========================================================
          4. QUOTATION DETAIL / AUDIT VIEW
          ======================================================== */}
      {activeViewMode === 'DETAIL' && selectedQuotation && (
        <div className="space-y-6">
          {/* Header Card */}
          <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-slate-100 font-mono">{selectedQuotation.quotationNumber}</h3>
                {getStatusBadge(selectedQuotation.status)}
                <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300 border border-slate-700">
                  Version {selectedQuotation.version}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Project: <strong className="text-slate-200">{selectedQuotation.projectName}</strong> &bull; Client: {selectedQuotation.customerCompany}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {/* Approval Button if Pending */}
              {selectedQuotation.status === 'PENDING_APPROVAL' && (
                <button
                  onClick={() => setIsApprovalModalOpen(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition"
                >
                  Review Approval
                </button>
              )}

              {/* Conversion Button if Accepted/Approved */}
              {(selectedQuotation.status === 'ACCEPTED' || selectedQuotation.status === 'APPROVED' || selectedQuotation.status === 'SENT') && (
                <button
                  onClick={() => setIsConvertModalOpen(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition shadow-md shadow-emerald-500/20"
                >
                  Convert Quotation &rarr;
                </button>
              )}

              <button
                onClick={() => handleStartEditQuotation(selectedQuotation)}
                className="px-3.5 py-1.5 rounded-lg bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 font-semibold text-xs border border-amber-500/40 transition inline-flex items-center gap-1.5"
                title="Edit Quotation"
              >
                <Edit3 className="w-3.5 h-3.5" />
                Edit Quotation
              </button>

              <button
                onClick={() => setIsVersionModalOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition"
              >
                <History className="w-3.5 h-3.5 inline mr-1 text-slate-400" />
                Versions ({selectedQuotation.versionHistory.length})
              </button>

              <button
                onClick={() => setActiveViewMode('PDF')}
                className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition shadow-md shadow-blue-500/20"
              >
                <Printer className="w-3.5 h-3.5 inline mr-1" />
                Printable PDF
              </button>
            </div>
          </div>

          {/* Toggle Customer vs Internal View */}
          <div className="flex items-center justify-between bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl">
            <span className="text-xs text-slate-400">View Auditing Perspective:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowInternalCosting(false)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  !showInternalCosting ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Customer Presentation View
              </button>
              <button
                onClick={() => setShowInternalCosting(true)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  showInternalCosting ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Internal Costing & Profit View
              </button>
            </div>
          </div>

          {/* Detail Item Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg p-5 space-y-4">
            <h4 className="font-bold text-xs text-slate-200 uppercase tracking-wider">Line Items Specification</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-800/80 text-slate-400 uppercase font-semibold border-b border-slate-800">
                  <tr>
                    <th className="px-3 py-2.5">SL</th>
                    <th className="px-3 py-2.5">Category</th>
                    <th className="px-3 py-2.5">Item & Model</th>
                    <th className="px-3 py-2.5 text-center">Quoted Qty</th>
                    {showInternalCosting && <th className="px-3 py-2.5 text-right">Landed Cost</th>}
                    <th className="px-3 py-2.5 text-right">Selling Price</th>
                    {showInternalCosting && <th className="px-3 py-2.5 text-right">Estimated Margin</th>}
                    <th className="px-3 py-2.5 text-right">Line Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {selectedQuotation.items.map((item, idx) => {
                    const lineTotal = calculateItemTotal(item);
                    const lineCost = item.quantity * item.unitCost;
                    const lineProfit = lineTotal - lineCost;
                    const lineMargin = lineTotal > 0 ? (lineProfit / lineTotal) * 100 : 0;

                    return (
                      <tr key={item.id} className="hover:bg-slate-800/40">
                        <td className="px-3 py-2.5 text-slate-500 font-bold">{idx + 1}</td>
                        <td className="px-3 py-2.5">
                          <span className="text-[10px] font-bold text-slate-300 uppercase">
                            {item.type.replace(/_/g, ' ')}
                          </span>
                        </td>
                        <td className="px-3 py-2.5">
                          <div className="font-semibold text-slate-100">{item.name}</div>
                          {item.brand && <span className="text-[10px] text-slate-400 mr-2">{item.brand}</span>}
                          {item.leadTime && <span className="text-[10px] text-amber-400">Lead Time: {item.leadTime}</span>}
                        </td>
                        <td className="px-3 py-2.5 text-center font-mono font-bold text-slate-200">
                          {item.quantity} {item.unit}
                        </td>
                        {showInternalCosting && (
                          <td className="px-3 py-2.5 text-right font-mono text-slate-400">
                            {formatBDT(item.unitCost)}
                          </td>
                        )}
                        <td className="px-3 py-2.5 text-right font-mono text-slate-200">
                          {formatBDT(item.unitPrice)}
                          <div className="text-[10px] text-emerald-400 font-mono mt-0.5" title="Inclusive of VAT & TAX">
                            ৳{((item.unitPrice || 0) * (1 + (item.vatPercent || 0) / 100 + (item.taxPercent || 0) / 100)).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            {((item.vatPercent || 0) > 0 || (item.taxPercent || 0) > 0) && (
                              <span className="text-slate-400 block text-[9px] font-sans">
                                (inc. {item.vatPercent || 0}% VAT{(item.taxPercent || 0) > 0 ? ` + ${item.taxPercent}% TAX` : ''})
                              </span>
                            )}
                          </div>
                        </td>
                        {showInternalCosting && (
                          <td className="px-3 py-2.5 text-right font-mono text-emerald-400 font-semibold">
                            {lineMargin.toFixed(1)}%
                          </td>
                        )}
                        <td className="px-3 py-2.5 text-right font-mono font-bold text-slate-100">
                          {formatBDT(lineTotal)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Financial Summary */}
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <div className="w-72 space-y-1.5 text-xs text-slate-300">
                {(() => {
                  const totals = calculateQuotationTotals(selectedQuotation);
                  return (
                    <>
                      <div className="flex justify-between">
                        <span>Subtotal (Base Value):</span>
                        <span className="font-mono text-slate-200">{formatBDT(totals.subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Total VAT (Mushak 6.3):</span>
                        <span className="font-mono">{formatBDT(totals.totalVat)}</span>
                      </div>
                      {totals.totalTax > 0 && (
                        <div className="flex justify-between text-amber-400">
                          <span>Total TAX / AIT (TDS):</span>
                          <span className="font-mono">{formatBDT(totals.totalTax)}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center py-2 border-t border-slate-800 text-sm font-bold text-blue-400">
                        <span>Grand Total:</span>
                        <span className="font-mono text-base">{formatBDT(totals.grandTotal)}</span>
                      </div>
                      {showInternalCosting && (
                        <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-[11px] space-y-1 mt-2">
                          <div className="flex justify-between text-slate-400">
                            <span>Total Estimated Cost:</span>
                            <span className="font-mono">{formatBDT(totals.totalCost)}</span>
                          </div>
                          <div className="flex justify-between text-emerald-400 font-bold">
                            <span>Gross Margin:</span>
                            <span className="font-mono">{totals.profitMargin.toFixed(1)}% ({formatBDT(totals.estimatedProfit)})</span>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          5. CUSTOMER-FACING PRINTABLE A4 PDF VIEW
          ======================================================== */}
      {activeViewMode === 'PDF' && selectedQuotation && (
        <div className="space-y-4">
          <div className="flex items-center justify-between no-print">
            <button
              onClick={() => setActiveViewMode('LIST')}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold"
            >
              &larr; Back
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIncludeSealAndSignature(!includeSealAndSignature)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-semibold text-xs border transition ${
                  includeSealAndSignature
                    ? 'bg-emerald-600/20 text-emerald-400 border-emerald-500/40 hover:bg-emerald-600/30'
                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'
                }`}
                title="Toggle official digital Seal & Signature on/off"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{includeSealAndSignature ? 'Seal & Sign: Included' : 'Seal & Sign: Excluded'}</span>
              </button>
              <button
                onClick={() => handleStartEditQuotation(selectedQuotation)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 font-semibold text-xs border border-amber-500/40 transition"
                title="Edit Quotation"
              >
                <Edit3 className="w-4 h-4" />
                <span>Edit Quotation</span>
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition shadow-lg shadow-blue-500/20"
              >
                <Printer className="w-4 h-4" />
                <span>Print Customer Quotation (A4)</span>
              </button>
            </div>
          </div>

          {/* Printable White Sheet Document */}
          <div className="relative bg-white text-slate-900 rounded-xl p-4 sm:px-8 sm:pt-6 sm:pb-2 max-w-4xl mx-auto shadow-2xl printable-area font-sans text-xs min-h-[1020px] sm:min-h-[1140px] print:min-h-[284mm] flex flex-col justify-between overflow-hidden print:overflow-visible print:p-0 print:m-0">
            {/* Watermark in background matching company pad */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.08] z-0 overflow-hidden">
              <img
                src={GLOBO_TECH_LOGO_DATA_URL}
                alt="Globo Tech Watermark"
                className="w-80 sm:w-96 max-w-full object-contain"
              />
            </div>

            <div className="relative z-10 flex-1 flex flex-col justify-between">
              <div className="space-y-3 sm:space-y-4">
              {/* Header / Brand Layout according to company pad */}
              <div className="border-b-2 border-[#008fd5] pb-2 sm:pb-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2 sm:gap-4">
                  {/* 1 no mark: Company Logo (Left Aligned, Larger) */}
                  <div className="flex items-center justify-center sm:justify-start">
                    <img
                      src={GLOBO_TECH_LOGO_DATA_URL}
                      alt="Globo Tech Logo"
                      className="h-16 sm:h-20 md:h-22 w-auto object-contain flex-shrink-0"
                    />
                  </div>

                  {/* 2 no mark: Company Name (Centered in the middle, Larger Font, Soft Bold) */}
                  <div className="flex items-center justify-center text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-[54px] font-bold tracking-tight text-[#008fd5] leading-none whitespace-nowrap">
                      Globo Tech
                    </h1>
                  </div>

                  {/* 3 no mark: Company Address (Right Aligned) */}
                  <div className="flex items-center justify-center sm:justify-end text-center sm:text-right">
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug whitespace-nowrap">
                        Rahman Chamber (2nd Floor),
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug whitespace-nowrap">
                        12/13 Motijheel C/A, Dhaka-1000.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 no mark: Quotation Title & Meta Details */}
              <div className="relative py-2.5 px-4 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between min-h-[48px]">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <h2 className="text-lg sm:text-xl font-black text-[#008fd5] uppercase">
                    <span className="border-b-2 border-[#008fd5] pb-0.5 tracking-widest inline-block">
                      QUOTATION
                    </span>
                  </h2>
                </div>

                <div className="ml-auto text-right z-10">
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-tight">
                    Date: <strong className="text-slate-900 font-semibold">{formatDate(selectedQuotation.date)}</strong>
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-tight mt-1">
                    Quotation Ref: <strong className="font-mono text-slate-900 font-bold">{selectedQuotation.quotationNumber}</strong>
                  </p>
                </div>
              </div>

              {/* Client & Project Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3.5 bg-slate-50/80 rounded-lg border border-slate-200 text-xs">
                <div>
                  <span className="font-bold text-slate-500 uppercase text-[10px] block mb-1">Quotation Prepared For:</span>
                  <p className="font-bold text-slate-900 text-sm">{selectedQuotation.customerCompany}</p>
                  <p className="text-slate-700">Attn: {selectedQuotation.customerName}</p>
                  <p className="text-slate-600">{selectedQuotation.customerAddress}</p>
                  <p className="text-slate-600">Phone: {selectedQuotation.customerPhone}</p>
                  {selectedQuotation.customerBin && <p className="font-mono text-slate-600">BIN: {selectedQuotation.customerBin}</p>}
                </div>

                <div className="sm:pl-16">
                  <span className="font-bold text-slate-500 uppercase text-[10px] block mb-1">Project & Delivery Location:</span>
                  <p className="font-bold text-slate-900 text-sm">{selectedQuotation.projectName}</p>
                  <p className="text-slate-700 mt-0.5">Delivery Location: {selectedQuotation.projectLocation}</p>
                </div>
              </div>

              {/* Customer Facing Item Table matching requested Globo Tech format */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse border border-black text-black">
                  <thead>
                    <tr className="bg-white">
                      <th className="border border-black py-2 px-1 text-center font-bold text-black w-10">Sl</th>
                      <th className="border border-black py-2 px-3 text-center font-bold text-black w-48">Product Name</th>
                      <th className="border border-black py-2 px-3 text-center font-bold text-black">Product Description</th>
                      <th className="border border-black py-2 px-2 text-center font-bold text-black w-16">Unite</th>
                      <th className="border border-black py-2 px-2 text-center font-bold text-black w-14">Qty</th>
                      <th className="border border-black py-2 px-2 text-center font-bold text-black w-28">Unite Price</th>
                      <th className="border border-black py-2 px-2 text-center font-bold text-black w-28">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedQuotation.items.map((item, idx) => {
                      const unitPriceWithTax = item.unitPrice * (1 + (item.vatPercent || 0) / 100 + (item.taxPercent || 0) / 100);
                      const lineTotal = item.quantity * unitPriceWithTax;
                      const description = item.description && item.description.trim()
                        ? item.description
                        : [
                            item.model ? `Model: ${item.model}` : (item.brand ? `Brand: ${item.brand}` : ''),
                            item.warranty ? `Warranty: ${item.warranty}` : '',
                            item.leadTime && item.leadTime !== 'Immediate' ? `Delivery: ${item.leadTime}` : '',
                            item.remarks || ''
                          ].filter(Boolean).join('\n') || '--';

                      return (
                        <tr key={item.id} className="bg-white">
                          <td className="border border-black p-2 text-center font-bold text-black align-middle">
                            {idx + 1}
                          </td>
                          <td className="border border-black p-2.5 text-center font-bold text-black align-middle whitespace-pre-line leading-snug">
                            {item.name}
                          </td>
                          <td className="border border-black p-2.5 text-left text-black align-middle whitespace-pre-line leading-relaxed">
                            {description}
                          </td>
                          <td className="border border-black p-2 text-center text-black align-middle font-medium">
                            {item.unit || 'pcs'}
                          </td>
                          <td className="border border-black p-2 text-center text-black align-middle font-bold">
                            {item.quantity}
                          </td>
                          <td className="border border-black p-2 text-right font-mono text-black align-middle font-semibold">
                            {unitPriceWithTax.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </td>
                          <td className="border border-black p-2 text-right font-mono font-bold text-black align-middle">
                            {lineTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Totals Breakdown */}
              <div className="flex justify-end pt-2">
                <div className="w-72 space-y-1.5 text-xs text-slate-700">
                  {(() => {
                    const totals = calculateQuotationTotals(selectedQuotation);
                    return (
                      <>
                        <div className="flex justify-between">
                          <span>Items Subtotal (Incl. VAT & TAX):</span>
                          <span className="font-mono text-slate-900 font-bold">{formatBDT(totals.grandTotal)}</span>
                        </div>
                        <div className="flex justify-between text-[11px] text-slate-600">
                          <span>Base Supply Value (Excl. VAT & TAX):</span>
                          <span className="font-mono font-medium">{formatBDT(totals.subtotal)}</span>
                        </div>
                        <div className="flex justify-between text-[11px] text-slate-600">
                          <span>Total VAT (Mushak 6.3):</span>
                          <span className="font-mono font-medium">{formatBDT(totals.totalVat)}</span>
                        </div>
                        {totals.totalTax > 0 && (
                          <div className="flex justify-between text-[11px] text-slate-600">
                            <span>Total TAX / AIT (TDS):</span>
                            <span className="font-mono font-medium">{formatBDT(totals.totalTax)}</span>
                          </div>
                        )}
                        <div className="flex justify-between border-t-2 border-slate-900 pt-1.5 text-sm font-black text-slate-900">
                          <span>Grand Total (BDT):</span>
                          <span className="font-mono text-[#008fd5]">{formatBDT(totals.grandTotal)}</span>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>

              {/* Commercial Terms & Conditions (Clean & Transparent - Watermark Fully Visible) */}
              <div className="pt-2 text-[11px] text-slate-800 space-y-1 bg-transparent group relative">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 uppercase text-[10px] tracking-wider">Terms & Conditions:</h4>
                  <button
                    onClick={() => handleOpenEditTerms(selectedQuotation)}
                    className="no-print text-[10px] text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1 hover:underline bg-blue-50 border border-blue-200 px-2 py-0.5 rounded shadow-sm transition cursor-pointer"
                    title="Click to edit Terms and Conditions"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>Edit Terms & Conditions</span>
                  </button>
                </div>
                <p>&bull; <strong>Payment Terms:</strong> {selectedQuotation.paymentTerms}</p>
                <p>&bull; <strong>Delivery Terms:</strong> {selectedQuotation.deliveryTerms}</p>
                <p>&bull; <strong>Warranty Support:</strong> {selectedQuotation.warrantyTerms}</p>
                <p>&bull; <strong>Validity:</strong> {selectedQuotation.notes || 'Quotation valid for 30 calendar days from issue date.'}</p>
              </div>
            </div>

            {/* Signature Block (Positioned nicely at bottom with authentic Seal & Signature) */}
            <div className="mt-auto pt-8 sm:pt-14 pb-4">
              <div className="grid grid-cols-2 text-center text-xs items-end">
                {/* Left Column: Authorized Signature with Official Seal & Signature */}
                <div className="flex flex-col items-center">
                  <div className="relative h-20 sm:h-24 w-52 sm:w-60 flex items-end justify-center">
                    {includeSealAndSignature && (
                      <>
                        {/* Official Globo Tech Rubber Stamp (Seal) */}
                        <img
                          src={GLOBO_TECH_SEAL_DATA_URL}
                          alt="Globo Tech Official Seal"
                          className="absolute left-3 sm:left-6 -bottom-3.5 w-20 h-20 sm:w-24 sm:h-24 object-contain mix-blend-multiply opacity-90 select-none pointer-events-none transform -rotate-6"
                        />
                        {/* Official Executive Signature */}
                        <img
                          src={GLOBO_TECH_SIGNATURE_DATA_URL}
                          alt="Authorized Signature"
                          className="relative z-10 w-32 sm:w-36 h-auto max-h-16 object-contain mix-blend-multiply select-none pointer-events-none -mb-1 transform translate-x-2"
                        />
                      </>
                    )}
                  </div>
                  <div className="w-48 sm:w-56 border-b-2 border-slate-800 mb-1.5"></div>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm tracking-wide">Authorized Signature</p>
                  <p className="text-[#008fd5] font-semibold text-[11px] leading-tight">Globo Tech</p>
                </div>

                {/* Right Column: Customer Acceptance Signature */}
                <div className="flex flex-col items-center">
                  <div className="h-20 sm:h-24 w-52 sm:w-60 flex items-end justify-center">
                    {/* Space for physical client signature & stamp */}
                  </div>
                  <div className="w-48 sm:w-56 border-b-2 border-slate-800 mb-1.5"></div>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm tracking-wide">Customer Acceptance Signature</p>
                  <p className="text-slate-700 font-semibold text-[11px] leading-tight truncate max-w-[200px]">{selectedQuotation.customerCompany}</p>
                </div>
              </div>
            </div>

              {/* Company Pad Footer matching official letterhead (pinned to absolute bottom) */}
              <div className="border-t border-slate-200 pt-2 pb-0 mt-auto text-center text-[11px] text-slate-600 space-y-0.5 pad-footer print:pt-1.5 print:pb-0">
                <p className="font-medium text-slate-700">
                  Cell: +88 01622-152133, 01715-763303, E-mail: info@globotechbd.com
                </p>
                <p className="font-semibold text-[#008fd5]">
                  Web: www.globotechbd.com
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          6. MODAL: DYNAMIC ADD ITEM DIALOG (Continuous adding)
          ======================================================== */}
      {isAddItemModalOpen && (
        <Modal
          isOpen={isAddItemModalOpen}
          onClose={() => setIsAddItemModalOpen(false)}
          title="Add Line Item to Quotation"
          size="lg"
        >
          <div className="space-y-4">
            {/* Item Type Selector Tabs */}
            <div className="grid grid-cols-4 gap-2 border-b border-slate-800 pb-3">
              {[
                { type: 'IN_STOCK', label: 'In-Stock Product', icon: Package },
                { type: 'CUSTOM_PROJECT', label: 'Custom / Project', icon: Wrench },
                { type: 'SERVICE', label: 'Installation / Service', icon: Building },
                { type: 'OTHER_CHARGE', label: 'Other Charge', icon: Truck },
              ].map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedItemCategory === cat.type;
                return (
                  <button
                    key={cat.type}
                    onClick={() => {
                      setSelectedItemCategory(cat.type as QuotationItemType);
                      setItemForm({
                        ...itemForm,
                        type: cat.type as QuotationItemType,
                        name: '',
                        quantity: 1,
                        unitPrice: 0
                      });
                    }}
                    className={`flex flex-col items-center justify-center p-2.5 rounded-lg border text-xs font-semibold transition ${
                      isSelected
                        ? 'bg-blue-600/20 text-blue-400 border-blue-500'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-4 h-4 mb-1" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Category Form 1: IN_STOCK PRODUCT */}
            {selectedItemCategory === 'IN_STOCK' && (
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">
                    Select From Warehouse Inventory *
                  </label>
                  <select
                    value={itemForm.sku}
                    onChange={(e) => handleSelectCatalogProduct(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 font-medium"
                  >
                    <option value="">-- Choose In-Stock Product --</option>
                    {STOCK_CATALOG.map((p) => (
                      <option key={p.sku} value={p.sku}>
                        {p.name} ({p.sku}) &bull; Free: {p.freeStock} {p.unit} &bull; ৳{p.projectPrice}
                      </option>
                    ))}
                  </select>
                </div>

                {itemForm.sku && (
                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 grid grid-cols-3 gap-2">
                    <div>
                      <span className="text-[10px] text-slate-500">Warehouse:</span>
                      <p className="font-semibold text-slate-200">{itemForm.warehouse}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500">Free Stock Available:</span>
                      <p className="font-bold text-emerald-400 font-mono">
                        {itemForm.freeStock} {itemForm.unit} (Phys: {itemForm.physicalStock})
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500">Landed Cost (Actual):</span>
                      <p className="font-bold text-slate-300 font-mono">{formatBDT(itemForm.unitCost)}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Category Form 2: CUSTOM / PROJECT PRODUCT */}
            {selectedItemCategory === 'CUSTOM_PROJECT' && (
              <div className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 font-semibold mb-1">Product Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Synology NAS RS2825RP+"
                      value={itemForm.name}
                      onChange={(e) => setItemForm({ ...itemForm, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 font-semibold mb-1">Brand & Model</label>
                    <input
                      type="text"
                      placeholder="e.g. Synology / RS2825RP+"
                      value={itemForm.brand}
                      onChange={(e) => setItemForm({ ...itemForm, brand: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-slate-400 font-semibold mb-1">Procurement Source</label>
                    <select
                      value={itemForm.source}
                      onChange={(e) => setItemForm({ ...itemForm, source: e.target.value as any })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100"
                    >
                      <option value="CHINA_IMPORT">China Import</option>
                      <option value="LOCAL_PURCHASE">Local Distributor Purchase</option>
                      <option value="PROJECT_PROCUREMENT">Project Specific Tender</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 font-semibold mb-1">Est. Landed Cost (BDT)</label>
                    <input
                      type="number"
                      placeholder="390000"
                      value={itemForm.unitCost}
                      onChange={(e) => setItemForm({ ...itemForm, unitCost: Number(e.target.value) })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 font-semibold mb-1">Estimated Lead Time</label>
                    <input
                      type="text"
                      placeholder="e.g. 30 Days"
                      value={itemForm.leadTime}
                      onChange={(e) => setItemForm({ ...itemForm, leadTime: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Category Form 3: SERVICE */}
            {selectedItemCategory === 'SERVICE' && (
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Service Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. CCTV Installation, Cabling & Commissioning"
                    value={itemForm.name}
                    onChange={(e) => setItemForm({ ...itemForm, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 font-semibold mb-1">Service Unit</label>
                    <select
                      value={itemForm.unit}
                      onChange={(e) => setItemForm({ ...itemForm, unit: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100"
                    >
                      <option value="job">job</option>
                      <option value="nos">nos</option>
                      <option value="pcs">pcs</option>
                      <option value="packet">packet</option>
                      <option value="box">box</option>
                      <option value="Project">Project (Lump Sum)</option>
                      <option value="Points">Points (Per Camera/Node)</option>
                      <option value="Days">Days (Man-day)</option>
                      <option value="Hours">Hours</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 font-semibold mb-1">Est. Labor Cost (BDT)</label>
                    <input
                      type="number"
                      placeholder="35000"
                      value={itemForm.unitCost}
                      onChange={(e) => setItemForm({ ...itemForm, unitCost: Number(e.target.value) })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 font-mono"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Category Form 4: OTHER CHARGE */}
            {selectedItemCategory === 'OTHER_CHARGE' && (
              <div className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 font-semibold mb-1">Charge Title *</label>
                    <input
                      type="text"
                      placeholder="e.g. Transportation & Logistics"
                      value={itemForm.name}
                      onChange={(e) => setItemForm({ ...itemForm, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 font-semibold mb-1">Unit</label>
                    <input
                      type="text"
                      placeholder="Trip / Event"
                      value={itemForm.unit}
                      onChange={(e) => setItemForm({ ...itemForm, unit: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Product Description */}
            <div className="pt-2 border-t border-slate-800">
              <label className="block text-slate-400 font-semibold mb-1">Product Description / Scope of Work</label>
              <textarea
                rows={2}
                placeholder="e.g. Rack Shifting and re-setup, AP Dismount and re-setup, Full Completed."
                value={itemForm.description || ''}
                onChange={(e) => setItemForm({ ...itemForm, description: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-xs focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            {/* Common Item Parameters (Qty, Unit, Quoted Price, VAT, TAX) */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 text-xs pt-2 border-t border-slate-800">
              <div>
                <label className="block text-slate-400 font-semibold mb-1">Quantity *</label>
                <input
                  type="number"
                  min="1"
                  value={itemForm.quantity}
                  onChange={(e) => setItemForm({ ...itemForm, quantity: Number(e.target.value) })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-2 text-slate-100 font-mono font-bold"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Unit *</label>
                <select
                  value={
                    ['pcs', 'nos', 'job', 'packet', 'box', 'set', 'meter', 'roll', 'lot', 'unit'].includes(
                      (itemForm.unit || '').toLowerCase()
                    )
                      ? (itemForm.unit || '').toLowerCase()
                      : (itemForm.unit || 'pcs')
                  }
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '__CUSTOM__') {
                      const custom = prompt(
                        'Custom Unit লিখুন (যেমন: coil, bundle, drum, sqft, trip, license):',
                        itemForm.unit || ''
                      );
                      if (custom && custom.trim()) {
                        setItemForm({ ...itemForm, unit: custom.trim() });
                      }
                    } else {
                      setItemForm({ ...itemForm, unit: val });
                    }
                  }}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-2 text-slate-100 font-semibold text-xs focus:border-blue-500 focus:outline-none cursor-pointer"
                  title="Unit"
                >
                  <option value="pcs">pcs</option>
                  <option value="nos">nos</option>
                  <option value="job">job</option>
                  <option value="packet">packet</option>
                  <option value="box">box</option>
                  <option value="set">set</option>
                  <option value="meter">meter</option>
                  <option value="roll">roll</option>
                  <option value="lot">lot</option>
                  <option value="unit">unit</option>
                  {itemForm.unit &&
                    !['pcs', 'nos', 'job', 'packet', 'box', 'set', 'meter', 'roll', 'lot', 'unit'].includes(
                      itemForm.unit.toLowerCase()
                    ) && <option value={itemForm.unit}>{itemForm.unit}</option>}
                  <option value="__CUSTOM__">✏️ Custom Unit...</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Quoted Unit Price (BDT) *</label>
                <input
                  type="number"
                  min="0"
                  value={itemForm.unitPrice}
                  onChange={(e) => setItemForm({ ...itemForm, unitPrice: Number(e.target.value) })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-2 text-slate-100 font-mono font-bold text-blue-400"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-slate-400 font-semibold truncate">VAT %</label>
                  <span className="text-[10px] text-blue-400 font-bold bg-blue-950/80 px-1 py-0.5 rounded border border-blue-800 flex-shrink-0">
                    Mushak 6.3
                  </span>
                </div>
                <div className="flex gap-1">
                  <input
                    type="number"
                    min="0"
                    step="0.5"
                    value={itemForm.vatPercent}
                    onChange={(e) => setItemForm({ ...itemForm, vatPercent: Number(e.target.value) })}
                    className="w-12 bg-slate-950 border border-slate-700 rounded-lg px-1.5 py-2 text-slate-100 font-mono font-bold text-center text-xs"
                    placeholder="15"
                  />
                  <select
                    value={itemForm.vatPercent}
                    onChange={(e) => setItemForm({ ...itemForm, vatPercent: Number(e.target.value) })}
                    className="flex-1 min-w-0 bg-slate-900 border border-slate-700 rounded-lg px-1 text-[11px] text-slate-300 font-semibold cursor-pointer hover:bg-slate-800 focus:outline-none focus:border-blue-500"
                    title="Select Mushak 6.3 VAT Presets"
                  >
                    <option value="15">15% (Std)</option>
                    <option value="10">10%</option>
                    <option value="7.5">7.5%</option>
                    <option value="5">5%</option>
                    <option value="25">25%</option>
                    <option value="20">20%</option>
                    <option value="17.5">17.5%</option>
                    <option value="0">0%</option>
                    {!['15', '10', '7.5', '5', '25', '20', '17.5', '0'].includes(String(itemForm.vatPercent)) && (
                      <option value={itemForm.vatPercent}>{itemForm.vatPercent}%</option>
                    )}
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-slate-400 font-semibold truncate">TAX %</label>
                  <span className="text-[10px] text-amber-400 font-bold bg-amber-950/80 px-1 py-0.5 rounded border border-amber-800 flex-shrink-0">
                    AIT / TDS
                  </span>
                </div>
                <div className="flex gap-1">
                  <input
                    type="number"
                    min="0"
                    step="0.5"
                    value={itemForm.taxPercent || 0}
                    onChange={(e) => setItemForm({ ...itemForm, taxPercent: Number(e.target.value) })}
                    className="w-12 bg-slate-950 border border-slate-700 rounded-lg px-1.5 py-2 text-amber-300 font-mono font-bold text-center text-xs"
                    placeholder="0"
                  />
                  <select
                    value={itemForm.taxPercent || 0}
                    onChange={(e) => setItemForm({ ...itemForm, taxPercent: Number(e.target.value) })}
                    className="flex-1 min-w-0 bg-slate-900 border border-slate-700 rounded-lg px-1 text-[11px] text-amber-300 font-semibold cursor-pointer hover:bg-slate-800 focus:outline-none focus:border-amber-500"
                    title="Select TAX / AIT Presets (e.g. 5%, 10%)"
                  >
                    <option value="0">0% (None)</option>
                    <option value="5">5% (Supply/Goods)</option>
                    <option value="10">10% (Service/Labor)</option>
                    <option value="2.5">2.5% (TDS)</option>
                    <option value="7">7%</option>
                    {!['0', '5', '10', '2.5', '7'].includes(String(itemForm.taxPercent || 0)) && (
                      <option value={itemForm.taxPercent}>{itemForm.taxPercent}%</option>
                    )}
                  </select>
                </div>
              </div>
            </div>

            {/* Live Calculation preview for unit price with VAT & TAX */}
            <div className="p-2.5 bg-blue-950/40 border border-blue-800/60 rounded-lg text-xs space-y-1.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-slate-300">
                  Effective Quoted Unit Price (Printed on Quotation):{' '}
                  <span className="text-emerald-400 font-bold font-mono text-sm">
                    ৳{((itemForm.unitPrice || 0) * (1 + (itemForm.vatPercent || 0) / 100 + (itemForm.taxPercent || 0) / 100)).toLocaleString('en-IN', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </span>{' '}
                  <span className="text-[10px] text-slate-400">
                    (Includes {itemForm.vatPercent || 0}% VAT{(itemForm.taxPercent || 0) > 0 ? ` + ${itemForm.taxPercent}% TAX` : ''})
                  </span>
                </div>
                <div className="text-slate-300">
                  Line Total ({itemForm.quantity || 1} {itemForm.unit || 'pcs'}):{' '}
                  <span className="text-blue-400 font-bold font-mono text-sm">
                    ৳{(((itemForm.quantity || 1) * (itemForm.unitPrice || 0)) * (1 + (itemForm.vatPercent || 0) / 100 + (itemForm.taxPercent || 0) / 100)).toLocaleString('en-IN', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </span>
                </div>
              </div>
              <div className="text-[11px] text-slate-400 flex flex-wrap items-center justify-between border-t border-blue-900/60 pt-1 gap-1">
                <span>Mushak 6.3 & AIT Breakdown per unit:</span>
                <span className="font-mono text-slate-300">
                  Base: ৳{(itemForm.unitPrice || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })} + VAT ({itemForm.vatPercent || 0}%): ৳{(((itemForm.unitPrice || 0) * (itemForm.vatPercent || 0)) / 100).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  {(itemForm.taxPercent || 0) > 0 ? ` + TAX (${itemForm.taxPercent}%): ৳${(((itemForm.unitPrice || 0) * (itemForm.taxPercent || 0)) / 100).toLocaleString('en-IN', { minimumFractionDigits: 2 })}` : ''}
                  {' = '}
                  <strong className="text-emerald-300">৳{((itemForm.unitPrice || 0) * (1 + (itemForm.vatPercent || 0) / 100 + (itemForm.taxPercent || 0) / 100)).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</strong>
                </span>
              </div>
            </div>

            {/* Dynamic Stock Warning when quantity exceeds free stock */}
            {selectedItemCategory === 'IN_STOCK' && (itemForm.freeStock || 0) < (itemForm.quantity || 1) && (
              <div className="p-2.5 bg-rose-950/80 border border-rose-800 rounded-lg text-xs text-rose-300 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>
                  <strong>Warning:</strong> Quoted quantity ({itemForm.quantity}) exceeds currently available free stock ({itemForm.freeStock}).
                </span>
              </div>
            )}

            {/* Actions */}
            <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAddItemModalOpen(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddItemToQuote}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition shadow-md shadow-blue-500/20"
              >
                Append Item to Quotation
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* ========================================================
          7. MODAL: 1-CLICK QUOTATION CONVERSION
          ======================================================== */}
      {isConvertModalOpen && selectedQuotation && (
        <Modal
          isOpen={isConvertModalOpen}
          onClose={() => setIsConvertModalOpen(false)}
          title={`Convert Quotation ${selectedQuotation.quotationNumber}`}
          size="md"
        >
          <div className="space-y-4 text-xs">
            <p className="text-slate-300">
              Customer accepted quote. Choose downstream workflow to activate:
            </p>

            <div className="space-y-2">
              {[
                { id: 'SALES_ORDER', title: 'Convert to Sales Order', desc: 'Proceed with commercial invoicing, stock dispatch, and customer payment receipt.' },
                { id: 'PROJECT', title: 'Convert to Installation Project', desc: 'Initialize installation project site, technician tasks, and landed-cost material issues.' },
                { id: 'SALES_AND_PROJECT', title: 'Convert to Sales Order + Project', desc: 'Generate simultaneous sales order for hardware and project workspace for installation labor.' },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition ${
                    convertTarget === opt.id
                      ? 'bg-blue-600/15 border-blue-500 text-slate-100'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="convertTarget"
                    checked={convertTarget === opt.id}
                    onChange={() => setConvertTarget(opt.id as any)}
                    className="mt-0.5 text-blue-600"
                  />
                  <div>
                    <p className="font-bold text-slate-200">{opt.title}</p>
                    <p className="text-[11px] text-slate-400">{opt.desc}</p>
                  </div>
                </label>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
              <button
                onClick={() => setIsConvertModalOpen(false)}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleConvertQuotation}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold transition"
              >
                Execute Conversion
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* ========================================================
          8. MODAL: MANAGEMENT APPROVAL DIALOG
          ======================================================== */}
      {isApprovalModalOpen && selectedQuotation && (
        <Modal
          isOpen={isApprovalModalOpen}
          onClose={() => setIsApprovalModalOpen(false)}
          title={`Commercial Approval: ${selectedQuotation.quotationNumber}`}
          size="md"
        >
          <div className="space-y-4 text-xs">
            <div className="p-3 bg-amber-950/60 border border-amber-800 rounded-lg text-amber-300">
              <span className="font-bold block">Approval Trigger Reason:</span>
              <p className="mt-0.5">{selectedQuotation.approvalReason || 'High quotation value threshold exceeded.'}</p>
            </div>

            <div>
              <label className="block text-slate-400 font-semibold mb-1">Decision</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setApprovalDecision('APPROVE')}
                  className={`py-2 rounded-lg font-bold text-xs border ${
                    approvalDecision === 'APPROVE'
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  Approve Quotation
                </button>
                <button
                  type="button"
                  onClick={() => setApprovalDecision('REJECT')}
                  className={`py-2 rounded-lg font-bold text-xs border ${
                    approvalDecision === 'REJECT'
                      ? 'bg-rose-600 text-white border-rose-500'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  Reject / Request Revision
                </button>
              </div>
            </div>

            <div>
              <label className="block text-slate-400 font-semibold mb-1">Approver Comments</label>
              <textarea
                rows={2}
                placeholder="Enter approval or rejection remarks..."
                value={approvalComment}
                onChange={(e) => setApprovalComment(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100"
              />
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
              <button
                onClick={() => setIsApprovalModalOpen(false)}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleApprovalDecision}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold transition"
              >
                Submit Decision
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* ========================================================
          9. MODAL: VERSION CONTROL HISTORY
          ======================================================== */}
      {isVersionModalOpen && selectedQuotation && (
        <Modal
          isOpen={isVersionModalOpen}
          onClose={() => setIsVersionModalOpen(false)}
          title={`Version Control & Revision History: ${selectedQuotation.quotationNumber}`}
          size="md"
        >
          <div className="space-y-3 text-xs">
            {selectedQuotation.versionHistory.map((v) => (
              <div key={v.version} className="p-3 bg-slate-950 border border-slate-800 rounded-lg space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-200">Revision v{v.version}</span>
                  <span className="text-[10px] text-slate-500">{formatDate(v.date)}</span>
                </div>
                <p className="text-slate-400">Author: <strong className="text-slate-300">{v.author}</strong></p>
                <p className="font-mono text-blue-400 font-bold">Total: {formatBDT(v.newTotal)}</p>
                <p className="text-[11px] text-slate-500 italic mt-1">{v.notes}</p>
              </div>
            ))}

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setIsVersionModalOpen(false)}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* ========================================================
          10. MODAL: QUICK ADD CUSTOMER (from Quotation form)
          ======================================================== */}
      {isAddCustomerModalOpen && (
        <Modal
          isOpen={isAddCustomerModalOpen}
          onClose={() => setIsAddCustomerModalOpen(false)}
          title="Add New Customer / Organization"
          size="md"
        >
          <form onSubmit={handleCreateCustomerFromQuotation} className="space-y-3.5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Company / Organization *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bangladesh Bank / Acme Corp"
                  value={customerModalForm.company}
                  onChange={(e) => setCustomerModalForm({ ...customerModalForm, company: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Contact Person (Attn)</label>
                <input
                  type="text"
                  placeholder="e.g. Engr. Tanvir Ahmed (Optional)"
                  value={customerModalForm.name}
                  onChange={(e) => setCustomerModalForm({ ...customerModalForm, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Customer Type</label>
                <select
                  value={customerModalForm.type}
                  onChange={(e) => setCustomerModalForm({ ...customerModalForm, type: e.target.value as any })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500"
                >
                  <option value="CORPORATE">Corporate</option>
                  <option value="WHOLESALE">Wholesale / Dealer</option>
                  <option value="RETAIL">Retail / End-User</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="e.g. +880 1711-000000 (Optional)"
                  value={customerModalForm.phone}
                  onChange={(e) => setCustomerModalForm({ ...customerModalForm, phone: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. procurement@company.com"
                  value={customerModalForm.email}
                  onChange={(e) => setCustomerModalForm({ ...customerModalForm, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">BIN / VAT Reg No.</label>
                <input
                  type="text"
                  placeholder="e.g. BIN-001293848-0101"
                  value={customerModalForm.binNumber}
                  onChange={(e) => setCustomerModalForm({ ...customerModalForm, binNumber: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Office / Delivery Address *</label>
              <textarea
                required
                rows={2}
                placeholder="e.g. Suite 402, Motijheel C/A, Dhaka-1000"
                value={customerModalForm.address}
                onChange={(e) => setCustomerModalForm({ ...customerModalForm, address: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Payment Terms</label>
              <input
                type="text"
                placeholder="e.g. Net 30 Days / Cash on Delivery"
                value={customerModalForm.paymentTerms}
                onChange={(e) => setCustomerModalForm({ ...customerModalForm, paymentTerms: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddCustomerModalOpen(false)}
                className="px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center gap-1.5 shadow-lg shadow-blue-600/30 transition"
              >
                <Plus className="w-4 h-4" /> Save & Select Customer
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================
          9. MODAL: EDIT TERMS & CONDITIONS (DIRECT FROM PDF / DETAIL)
          ======================================================== */}
      {isEditTermsModalOpen && selectedQuotation && (
        <Modal
          isOpen={isEditTermsModalOpen}
          onClose={() => setIsEditTermsModalOpen(false)}
          title={`Edit Terms & Conditions (${selectedQuotation.quotationNumber})`}
          size="lg"
        >
          <form onSubmit={handleSaveTerms} className="space-y-4 text-xs">
            <p className="text-slate-300">
              Customize the commercial terms and conditions for quotation <strong className="text-slate-100">{selectedQuotation.quotationNumber}</strong>:
            </p>

            {/* Payment Terms */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-slate-300 font-semibold">Payment Terms *</label>
                <select
                  onChange={(e) => e.target.value && setTermsForm({ ...termsForm, paymentTerms: e.target.value })}
                  className="bg-slate-950 border border-slate-700 text-[10px] text-slate-300 rounded px-1.5 py-0.5 cursor-pointer hover:bg-slate-800 focus:outline-none"
                >
                  <option value="">Choose preset...</option>
                  <option value="50% Advance with PO, 40% on Delivery, 10% on Commissioning">50% Adv, 40% Del, 10% Com</option>
                  <option value="100% Advance Payment with Work Order">100% Advance with PO</option>
                  <option value="50% Advance with PO, 50% on Delivery">50% Adv, 50% on Delivery</option>
                  <option value="Net 30 Days after Delivery & Invoice">Net 30 Days</option>
                  <option value="Net 15 Days after Invoice">Net 15 Days</option>
                  <option value="Cash on Delivery (COD)">Cash on Delivery (COD)</option>
                </select>
              </div>
              <textarea
                required
                rows={2}
                value={termsForm.paymentTerms}
                onChange={(e) => setTermsForm({ ...termsForm, paymentTerms: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500 font-medium resize-none"
              />
            </div>

            {/* Delivery Terms */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-slate-300 font-semibold">Delivery Terms *</label>
                <select
                  onChange={(e) => e.target.value && setTermsForm({ ...termsForm, deliveryTerms: e.target.value })}
                  className="bg-slate-950 border border-slate-700 text-[10px] text-slate-300 rounded px-1.5 py-0.5 cursor-pointer hover:bg-slate-800 focus:outline-none"
                >
                  <option value="">Choose preset...</option>
                  <option value="Within 7 days from PO date">Within 7 days</option>
                  <option value="Within 15 days from PO date">Within 15 days</option>
                  <option value="Within 30 days from PO date">Within 30 days</option>
                  <option value="Within 3-5 Working Days">Within 3-5 Working Days</option>
                  <option value="Immediate Delivery from Central Warehouse">Immediate Delivery</option>
                </select>
              </div>
              <textarea
                required
                rows={2}
                value={termsForm.deliveryTerms}
                onChange={(e) => setTermsForm({ ...termsForm, deliveryTerms: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500 font-medium resize-none"
              />
            </div>

            {/* Warranty Support */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-slate-300 font-semibold">Warranty Support *</label>
                <select
                  onChange={(e) => e.target.value && setTermsForm({ ...termsForm, warrantyTerms: e.target.value })}
                  className="bg-slate-950 border border-slate-700 text-[10px] text-slate-300 rounded px-1.5 py-0.5 cursor-pointer hover:bg-slate-800 focus:outline-none"
                >
                  <option value="">Choose preset...</option>
                  <option value="No Warranty">No Warranty</option>
                  <option value="No Warranty Applicable">No Warranty Applicable</option>
                  <option value="No Warranty (As-Is Condition)">No Warranty (As-Is Condition)</option>
                  <option value="1 Month Replacement Warranty">1 Month Replacement Warranty</option>
                  <option value="3 Months Service Warranty">3 Months Service Warranty</option>
                  <option value="6 Months Service Warranty">6 Months Service Warranty</option>
                  <option value="1 Year Full Service & Support Warranty">1 Year Service Warranty</option>
                  <option value="2 Years Comprehensive Hardware Replacement">2 Years Hardware Replacement</option>
                  <option value="3 Years Manufacturer Hardware Warranty">3 Years Manufacturer Warranty</option>
                  <option value="24 Months Comprehensive Hardware Replacement & On-site Support">24 Months On-site Support</option>
                  <option value="As per manufacturer standard policy">As per manufacturer policy</option>
                </select>
              </div>
              <textarea
                required
                rows={2}
                value={termsForm.warrantyTerms}
                onChange={(e) => setTermsForm({ ...termsForm, warrantyTerms: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500 font-medium resize-none"
              />
            </div>

            {/* Validity / Notes */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-slate-300 font-semibold">Validity & Additional Conditions</label>
                <select
                  onChange={(e) => e.target.value && setTermsForm({ ...termsForm, notes: e.target.value })}
                  className="bg-slate-950 border border-slate-700 text-[10px] text-slate-300 rounded px-1.5 py-0.5 cursor-pointer hover:bg-slate-800 focus:outline-none"
                >
                  <option value="">Choose preset...</option>
                  <option value="Quotation valid for 30 calendar days from issue date.">Valid for 30 calendar days</option>
                  <option value="Quotation valid for 15 calendar days from issue date.">Valid for 15 calendar days</option>
                  <option value="Quotation valid for 7 calendar days due to currency fluctuation.">Valid for 7 calendar days</option>
                  <option value="Prices are subject to stock availability and valid for 30 days.">Subject to stock (30 days)</option>
                </select>
              </div>
              <textarea
                rows={2}
                value={termsForm.notes}
                onChange={(e) => setTermsForm({ ...termsForm, notes: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500 font-medium resize-none"
                placeholder="e.g. Quotation valid for 30 calendar days from issue date."
              />
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setIsEditTermsModalOpen(false)}
                className="px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition shadow-md shadow-blue-500/20"
              >
                Update Terms & Conditions
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
