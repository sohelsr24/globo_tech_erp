'use client';

import React, { useState } from 'react';
import {
  QrCode,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertTriangle,
  History,
  ShieldCheck,
  Building,
  User,
  Plus,
  Calendar,
  Warehouse as WarehouseIcon,
  Tag
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { formatBDT, formatDate } from '@/lib/formatters';

export interface SerialItem {
  id: string;
  serialNumber: string;
  sku: string;
  productName: string;
  category: string;
  status: 'IN_STOCK' | 'SOLD' | 'INSTALLED' | 'RETURNED' | 'DAMAGED';
  warehouseName?: string;
  customerName?: string;
  invoiceNumber?: string;
  projectName?: string;
  warrantyMonths: number;
  warrantyStart?: string;
  warrantyEnd?: string;
  purchaseCostBDT: number;
  history: {
    date: string;
    event: string;
    actor: string;
    notes?: string;
  }[];
}

const INITIAL_SERIALS: SerialItem[] = [
  {
    id: 'sn-001',
    serialNumber: 'HK-DS2CD-2024-001',
    sku: 'HK-DS2CD2047G2',
    productName: 'Hikvision 4MP ColorVu IP Camera',
    category: 'CCTV & Security',
    status: 'IN_STOCK',
    warehouseName: 'Dhaka Central Warehouse',
    warrantyMonths: 24,
    warrantyStart: '2026-09-01',
    warrantyEnd: '2028-09-01',
    purchaseCostBDT: 10000,
    history: [
      { date: '2026-09-01', event: 'Received via GRN-2026-001', actor: 'Storekeeper', notes: 'Inspected China batch SHP-2026-001' },
      { date: '2026-09-02', event: 'Allocated to Bin A-12', actor: 'Storekeeper', notes: 'Dhaka Central Warehouse' }
    ]
  },
  {
    id: 'sn-002',
    serialNumber: 'HK-DS2CD-2024-002',
    sku: 'HK-DS2CD2047G2',
    productName: 'Hikvision 4MP ColorVu IP Camera',
    category: 'CCTV & Security',
    status: 'SOLD',
    customerName: 'Dhaka Bank Ltd - Principal Branch',
    invoiceNumber: 'INV-2026-001',
    warrantyMonths: 24,
    warrantyStart: '2026-09-10',
    warrantyEnd: '2028-09-10',
    purchaseCostBDT: 10000,
    history: [
      { date: '2026-09-01', event: 'Received via GRN-2026-001', actor: 'Storekeeper' },
      { date: '2026-09-10', event: 'Sold on INV-2026-001', actor: 'Sales Officer', notes: 'Retail Sale with 2Y OEM Warranty' }
    ]
  },
  {
    id: 'sn-003',
    serialNumber: 'HK-DS2CD-2024-003',
    sku: 'HK-DS2CD2047G2',
    productName: 'Hikvision 4MP ColorVu IP Camera',
    category: 'CCTV & Security',
    status: 'INSTALLED',
    customerName: 'Square Pharmaceuticals Ltd',
    projectName: 'Square Pharma Surveillance Setup',
    warrantyMonths: 24,
    warrantyStart: '2026-09-15',
    warrantyEnd: '2028-09-15',
    purchaseCostBDT: 10000,
    history: [
      { date: '2026-09-01', event: 'Received via GRN-2026-001', actor: 'Storekeeper' },
      { date: '2026-09-15', event: 'Issued to Project PRJ-2026-001', actor: 'Lead Technician', notes: 'Installed on North Tower Gate' }
    ]
  },
  {
    id: 'sn-004',
    serialNumber: 'CS-C9300-24P-8841',
    sku: 'CS-C9300-24P-A',
    productName: 'Cisco Catalyst 9300 24-Port PoE Switch',
    category: 'Networking',
    status: 'IN_STOCK',
    warehouseName: 'Dhaka Central Warehouse',
    warrantyMonths: 36,
    warrantyStart: '2026-08-15',
    warrantyEnd: '2029-08-15',
    purchaseCostBDT: 345000,
    history: [
      { date: '2026-08-15', event: 'Received via GRN-2026-000', actor: 'Storekeeper' }
    ]
  },
  {
    id: 'sn-005',
    serialNumber: 'SG-SKY-10TB-9912',
    sku: 'SG-SKY-10TB',
    productName: 'Seagate SkyHawk 10TB Surveillance HDD',
    category: 'Storage',
    status: 'RETURNED',
    customerName: 'TechVision Security Systems',
    warrantyMonths: 36,
    warrantyStart: '2025-05-10',
    warrantyEnd: '2028-05-10',
    purchaseCostBDT: 24500,
    history: [
      { date: '2025-05-10', event: 'Sold on INV-2025-119', actor: 'Sales Officer' },
      { date: '2026-09-18', event: 'RMA Received - Bad Sectors', actor: 'Technician', notes: 'Sent for OEM China RMA replacement' }
    ]
  }
];

export function SerialsView() {
  const [serials, setSerials] = useState<SerialItem[]>(INITIAL_SERIALS);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedSerial, setSelectedSerial] = useState<SerialItem | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New serial form state
  const [newSerial, setNewSerial] = useState({
    serialNumber: '',
    sku: 'HK-DS2CD2047G2',
    productName: 'Hikvision 4MP ColorVu IP Camera',
    category: 'CCTV & Security',
    warehouseName: 'Dhaka Central Warehouse',
    warrantyMonths: 24,
    purchaseCostBDT: 10000
  });

  const filteredSerials = serials.filter((s) => {
    const matchQuery =
      s.serialNumber.toLowerCase().includes(search.toLowerCase()) ||
      s.sku.toLowerCase().includes(search.toLowerCase()) ||
      s.productName.toLowerCase().includes(search.toLowerCase()) ||
      (s.customerName && s.customerName.toLowerCase().includes(search.toLowerCase())) ||
      (s.projectName && s.projectName.toLowerCase().includes(search.toLowerCase()));

    const matchStatus = statusFilter === 'ALL' || s.status === statusFilter;
    return matchQuery && matchStatus;
  });

  const handleAddSerial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSerial.serialNumber) return;

    const today = new Date().toISOString().split('T')[0];
    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + Number(newSerial.warrantyMonths));

    const item: SerialItem = {
      id: `sn-${Date.now()}`,
      serialNumber: newSerial.serialNumber.trim(),
      sku: newSerial.sku,
      productName: newSerial.productName,
      category: newSerial.category,
      status: 'IN_STOCK',
      warehouseName: newSerial.warehouseName,
      warrantyMonths: Number(newSerial.warrantyMonths),
      warrantyStart: today,
      warrantyEnd: expiryDate.toISOString().split('T')[0],
      purchaseCostBDT: Number(newSerial.purchaseCostBDT),
      history: [
        {
          date: today,
          event: 'Manually Registered in System',
          actor: 'Storekeeper',
          notes: 'Added into inventory'
        }
      ]
    };

    setSerials([item, ...serials]);
    setIsAddModalOpen(false);
    setNewSerial({
      ...newSerial,
      serialNumber: ''
    });
  };

  const getStatusBadge = (status: SerialItem['status']) => {
    switch (status) {
      case 'IN_STOCK':
        return <Badge variant="success">In Stock</Badge>;
      case 'SOLD':
        return <Badge variant="info">Sold to Client</Badge>;
      case 'INSTALLED':
        return <Badge variant="purple">Installed in Project</Badge>;
      case 'RETURNED':
        return <Badge variant="danger">RMA / Returned</Badge>;
      case 'DAMAGED':
        return <Badge variant="neutral">Damaged / Scrap</Badge>;
      default:
        return <Badge variant="neutral">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <QrCode className="w-5 h-5 text-blue-400" />
            Serial Number & Warranty Tracking
          </h2>
          <p className="text-xs text-slate-400">
            End-to-end lifecycle tracking: China Supplier &rarr; GRN &rarr; Warehouse Bin &rarr; Invoice / Project Installation &rarr; RMA
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition shadow-lg shadow-blue-500/20"
        >
          <Plus className="w-4 h-4" />
          <span>Register Serial Number</span>
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium">Tracked Serials</span>
          <p className="text-xl font-bold text-slate-100 mt-1">{serials.length}</p>
          <span className="text-[11px] text-blue-400">100% itemized audit</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium">In Warehouse</span>
          <p className="text-xl font-bold text-emerald-400 mt-1">
            {serials.filter((s) => s.status === 'IN_STOCK').length}
          </p>
          <span className="text-[11px] text-slate-500">Available for dispatch</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium">Sold / Installed</span>
          <p className="text-xl font-bold text-indigo-400 mt-1">
            {serials.filter((s) => s.status === 'SOLD' || s.status === 'INSTALLED').length}
          </p>
          <span className="text-[11px] text-slate-500">Under active customer warranty</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium">RMA & Returns</span>
          <p className="text-xl font-bold text-rose-400 mt-1">
            {serials.filter((s) => s.status === 'RETURNED' || s.status === 'DAMAGED').length}
          </p>
          <span className="text-[11px] text-slate-500">Pending China supplier RMA</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-slate-900 border border-slate-800 rounded-xl">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Serial, SKU, Client, Project..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
          {['ALL', 'IN_STOCK', 'SOLD', 'INSTALLED', 'RETURNED'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
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

      {/* Serials Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
        <div className="sm:hidden px-3 py-2 bg-slate-800/40 border-b border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>👉 Swipe horizontally for location & warranty</span>
          <span className="font-semibold text-slate-300">{filteredSerials.length} serials</span>
        </div>
        <div className="overflow-x-auto touch-scroll">
          <table className="w-full text-left text-xs text-slate-300 min-w-[750px]">
            <thead className="bg-slate-800/80 text-slate-400 uppercase font-semibold border-b border-slate-800">
              <tr>
                <th className="px-4 py-3">Serial Number</th>
                <th className="px-4 py-3">Product & SKU</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Current Location / Assignment</th>
                <th className="px-4 py-3">Warranty Window</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredSerials.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                    No matching serial numbers found.
                  </td>
                </tr>
              ) : (
                filteredSerials.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-800/40 transition">
                    <td className="px-4 py-3">
                      <div className="font-mono font-bold text-slate-100 flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5 text-blue-400" />
                        {s.serialNumber}
                      </div>
                      <span className="text-[10px] text-slate-500">{s.category}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium text-slate-200">{s.productName}</div>
                      <div className="font-mono text-[11px] text-slate-400">{s.sku}</div>
                    </td>
                    <td className="px-4 py-3">{getStatusBadge(s.status)}</td>
                    <td className="px-4 py-3">
                      {s.status === 'IN_STOCK' && (
                        <div className="flex items-center gap-1.5 text-slate-300">
                          <WarehouseIcon className="w-3.5 h-3.5 text-slate-400" />
                          <span>{s.warehouseName}</span>
                        </div>
                      )}
                      {s.status === 'SOLD' && (
                        <div>
                          <div className="flex items-center gap-1.5 text-slate-200">
                            <Building className="w-3.5 h-3.5 text-indigo-400" />
                            <span>{s.customerName}</span>
                          </div>
                          <span className="text-[10px] text-slate-500 font-mono">
                            Inv: {s.invoiceNumber}
                          </span>
                        </div>
                      )}
                      {s.status === 'INSTALLED' && (
                        <div>
                          <div className="text-purple-300 font-medium">{s.projectName}</div>
                          <span className="text-[10px] text-slate-400">{s.customerName}</span>
                        </div>
                      )}
                      {s.status === 'RETURNED' && (
                        <div className="text-rose-400 font-medium">Supplier RMA Pending</div>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1 text-slate-300">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{s.warrantyMonths} Months</span>
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Exp: {formatDate(s.warrantyEnd || '')}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => setSelectedSerial(s)}
                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-blue-400 font-medium text-xs border border-slate-700 transition flex items-center gap-1 ml-auto"
                      >
                        <History className="w-3.5 h-3.5" />
                        <span>Audit Timeline</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Serial Timeline Audit Modal */}
      {selectedSerial && (
        <Modal
          isOpen={!!selectedSerial}
          onClose={() => setSelectedSerial(null)}
          title={`Lifecycle Audit: ${selectedSerial.serialNumber}`}
          size="lg"
        >
          <div className="space-y-4">
            <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400">Product:</span>
                <p className="font-semibold text-slate-200">{selectedSerial.productName}</p>
                <p className="font-mono text-slate-400 text-[11px]">{selectedSerial.sku}</p>
              </div>
              <div>
                <span className="text-slate-400">Status & Warranty:</span>
                <div className="mt-1 flex items-center gap-2">
                  {getStatusBadge(selectedSerial.status)}
                  <span className="text-slate-300">{selectedSerial.warrantyMonths}m warranty</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                Chronological Chain of Custody
              </h4>
              <div className="relative pl-6 space-y-4 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
                {selectedSerial.history.map((h, i) => (
                  <div key={i} className="relative">
                    <div className="w-5 h-5 rounded-full bg-blue-600/30 border border-blue-500 absolute -left-6 top-0 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    </div>
                    <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-bold text-slate-200">{h.event}</span>
                        <span className="text-slate-500 font-mono text-[11px]">{formatDate(h.date)}</span>
                      </div>
                      <p className="text-xs text-slate-400">Recorded by: <span className="text-slate-300">{h.actor}</span></p>
                      {h.notes && (
                        <p className="text-[11px] text-blue-300/80 mt-1 bg-slate-900/50 p-1.5 rounded">
                          {h.notes}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedSerial(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition"
              >
                Close Audit
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Register Serial Modal */}
      {isAddModalOpen && (
        <Modal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          title="Register Individual Serial Number"
          size="md"
        >
          <form onSubmit={handleAddSerial} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Serial Number (Barcode / QR) *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. HK-DS2CD-2024-998"
                value={newSerial.serialNumber}
                onChange={(e) => setNewSerial({ ...newSerial, serialNumber: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 font-mono focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Product & SKU
              </label>
              <select
                value={newSerial.sku}
                onChange={(e) => {
                  const sku = e.target.value;
                  if (sku === 'HK-DS2CD2047G2') {
                    setNewSerial({
                      ...newSerial,
                      sku,
                      productName: 'Hikvision 4MP ColorVu IP Camera',
                      category: 'CCTV & Security',
                      warrantyMonths: 24,
                      purchaseCostBDT: 10000
                    });
                  } else {
                    setNewSerial({
                      ...newSerial,
                      sku,
                      productName: 'Cisco Catalyst 9300 24-Port Switch',
                      category: 'Networking',
                      warrantyMonths: 36,
                      purchaseCostBDT: 345000
                    });
                  }
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-blue-500 focus:outline-none"
              >
                <option value="HK-DS2CD2047G2">HK-DS2CD2047G2 - Hikvision 4MP ColorVu IP Camera</option>
                <option value="CS-C9300-24P-A">CS-C9300-24P-A - Cisco Catalyst 9300 PoE Switch</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Warehouse Location
                </label>
                <select
                  value={newSerial.warehouseName}
                  onChange={(e) => setNewSerial({ ...newSerial, warehouseName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-blue-500 focus:outline-none"
                >
                  <option value="Dhaka Central Warehouse">Dhaka Central Warehouse</option>
                  <option value="Chittagong Port Transit Hub">Chittagong Port Transit Hub</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Warranty (Months)
                </label>
                <input
                  type="number"
                  min="0"
                  max="120"
                  value={newSerial.warrantyMonths}
                  onChange={(e) => setNewSerial({ ...newSerial, warrantyMonths: Number(e.target.value) })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition"
              >
                Save Serial Number
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
