'use client';

import React, { useState } from 'react';
import {
  Building2,
  Search,
  Plus,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Globe,
  Ship,
  DollarSign,
  CreditCard,
  ExternalLink
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { formatBDT, formatCNY, formatUSD } from '@/lib/formatters';

export interface Supplier {
  id: string;
  name: string;
  country: string;
  city: string;
  contactPerson: string;
  email: string;
  phone: string;
  wechatId?: string;
  whatsapp?: string;
  defaultCurrency: 'CNY' | 'USD' | 'BDT';
  paymentTerms: string;
  bankDetails?: {
    beneficiary: string;
    bankName: string;
    swiftCode: string;
    accountNo: string;
  };
  totalShipments: number;
  totalVolumeCNY: number;
  status: 'ACTIVE' | 'INACTIVE';
}

const INITIAL_SUPPLIERS: Supplier[] = [
  {
    id: 'supp-001',
    name: 'Shenzhen Hikvision Security Tech Co., Ltd',
    country: 'China',
    city: 'Shenzhen, Guangdong',
    contactPerson: 'Wang Qiang (Jack)',
    email: 'export@hikvision-sz.cn',
    phone: '+86 755 8899 1234',
    wechatId: 'hik_jack_export',
    whatsapp: '+86 138 2345 6789',
    defaultCurrency: 'CNY',
    paymentTerms: '30% TT Advance, 70% against Bill of Lading',
    bankDetails: {
      beneficiary: 'Shenzhen Hikvision Security Tech Co., Ltd',
      bankName: 'Bank of China Shenzhen Futian Branch',
      swiftCode: 'BKCHCNBJ400',
      accountNo: '7588 9912 3456 7890'
    },
    totalShipments: 14,
    totalVolumeCNY: 850000,
    status: 'ACTIVE'
  },
  {
    id: 'supp-002',
    name: 'Guangzhou Dahua Optics & AI Electronics',
    country: 'China',
    city: 'Guangzhou, Guangdong',
    contactPerson: 'Lin Chen (Helen)',
    email: 'helen.lin@dahua-gz.com',
    phone: '+86 20 8765 4321',
    wechatId: 'dahua_helen_gz',
    whatsapp: '+86 139 9876 5432',
    defaultCurrency: 'CNY',
    paymentTerms: '100% Telegraphic Transfer (TT) Before Dispatch',
    bankDetails: {
      beneficiary: 'Guangzhou Dahua Optics Co.',
      bankName: 'Industrial and Commercial Bank of China (ICBC)',
      swiftCode: 'ICBCCNBSCAN',
      accountNo: '3602 0010 0920 1144'
    },
    totalShipments: 8,
    totalVolumeCNY: 420000,
    status: 'ACTIVE'
  },
  {
    id: 'supp-003',
    name: 'Hangzhou TP-Link Communication Equip Co.',
    country: 'China',
    city: 'Hangzhou, Zhejiang',
    contactPerson: 'Zhang Wei',
    email: 'zhang.wei@tp-hangzhou.cn',
    phone: '+86 571 8822 3344',
    wechatId: 'tplink_zhangw',
    whatsapp: '+86 137 1122 3344',
    defaultCurrency: 'USD',
    paymentTerms: 'LC 60 Days at Sight',
    bankDetails: {
      beneficiary: 'Hangzhou TP-Link Equip Co.',
      bankName: 'China Construction Bank Hangzhou Branch',
      swiftCode: 'PCBCNBSHZ',
      accountNo: '3300 1613 5350 5000'
    },
    totalShipments: 6,
    totalVolumeCNY: 310000,
    status: 'ACTIVE'
  },
  {
    id: 'supp-004',
    name: 'TechData Distribution Pte Ltd',
    country: 'Singapore',
    city: 'Singapore',
    contactPerson: 'David Tan',
    email: 'orders.sg@techdata.com',
    phone: '+65 6234 5678',
    whatsapp: '+65 9123 4567',
    defaultCurrency: 'USD',
    paymentTerms: 'Net 30 Days LC',
    totalShipments: 3,
    totalVolumeCNY: 150000,
    status: 'ACTIVE'
  }
];

export function SuppliersView() {
  const [suppliers, setSuppliers] = useState<Supplier[]>(INITIAL_SUPPLIERS);
  const [search, setSearch] = useState('');
  const [currencyFilter, setCurrencyFilter] = useState('ALL');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);

  const [newSupplier, setNewSupplier] = useState({
    name: '',
    country: 'China',
    city: 'Shenzhen, Guangdong',
    contactPerson: '',
    email: '',
    phone: '',
    wechatId: '',
    whatsapp: '',
    defaultCurrency: 'CNY' as Supplier['defaultCurrency'],
    paymentTerms: '30% TT Advance, 70% against BL'
  });

  const filteredSuppliers = suppliers.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.city.toLowerCase().includes(search.toLowerCase()) ||
      s.contactPerson.toLowerCase().includes(search.toLowerCase()) ||
      (s.wechatId && s.wechatId.toLowerCase().includes(search.toLowerCase()));

    const matchesCurrency = currencyFilter === 'ALL' || s.defaultCurrency === currencyFilter;
    return matchesSearch && matchesCurrency;
  });

  const handleAddSupplier = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSupplier.name) return;

    const item: Supplier = {
      id: `supp-${Date.now()}`,
      name: newSupplier.name,
      country: newSupplier.country,
      city: newSupplier.city,
      contactPerson: newSupplier.contactPerson,
      email: newSupplier.email,
      phone: newSupplier.phone,
      wechatId: newSupplier.wechatId,
      whatsapp: newSupplier.whatsapp,
      defaultCurrency: newSupplier.defaultCurrency,
      paymentTerms: newSupplier.paymentTerms,
      totalShipments: 0,
      totalVolumeCNY: 0,
      status: 'ACTIVE'
    };

    setSuppliers([item, ...suppliers]);
    setIsAddModalOpen(false);
    setNewSupplier({
      name: '',
      country: 'China',
      city: 'Shenzhen, Guangdong',
      contactPerson: '',
      email: '',
      phone: '',
      wechatId: '',
      whatsapp: '',
      defaultCurrency: 'CNY',
      paymentTerms: '30% TT Advance, 70% against BL'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-400" />
            China & International Suppliers Directory
          </h2>
          <p className="text-xs text-slate-400">
            China manufacturers, Shenzhen/Guangzhou vendors, WeChat comms, and foreign TT banking info
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition shadow-lg shadow-blue-500/20"
        >
          <Plus className="w-4 h-4" />
          <span>Add Supplier Profile</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium">China Suppliers</span>
          <p className="text-xl font-bold text-slate-100 mt-1">
            {suppliers.filter((s) => s.country === 'China').length} Active
          </p>
          <span className="text-[11px] text-slate-500">Shenzhen, Guangzhou, Hangzhou</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium">Import Completed</span>
          <p className="text-xl font-bold text-blue-400 mt-1">
            {suppliers.reduce((acc, s) => acc + s.totalShipments, 0)} Consignments
          </p>
          <span className="text-[11px] text-slate-500">Ocean & Air consignments</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium">Procurement Volume</span>
          <p className="text-xl font-bold text-emerald-400 mt-1">
            {formatCNY(suppliers.reduce((acc, s) => acc + s.totalVolumeCNY, 0))}
          </p>
          <span className="text-[11px] text-emerald-400">&asymp; {formatBDT(suppliers.reduce((acc, s) => acc + s.totalVolumeCNY, 0) * 16)}</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium">Primary Currency</span>
          <p className="text-xl font-bold text-amber-400 mt-1">CNY (&yen;) 75%</p>
          <span className="text-[11px] text-amber-400">Pegged @ 16.00 BDT</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-slate-900 border border-slate-800 rounded-xl">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Supplier, City, WeChat, Contact..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-2">
          {['ALL', 'CNY', 'USD'].map((c) => (
            <button
              key={c}
              onClick={() => setCurrencyFilter(c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                currencyFilter === c
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40'
                  : 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-slate-200'
              }`}
            >
              {c === 'ALL' ? 'All Currencies' : `${c} Only`}
            </button>
          ))}
        </div>
      </div>

      {/* Suppliers Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-800/80 text-slate-400 uppercase font-semibold border-b border-slate-800">
              <tr>
                <th className="px-4 py-3">Supplier & Origin</th>
                <th className="px-4 py-3">Contact Person & WeChat</th>
                <th className="px-4 py-3">Currency & Terms</th>
                <th className="px-4 py-3 text-right">Shipments</th>
                <th className="px-4 py-3 text-right">Volume</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredSuppliers.map((s) => (
                <tr key={s.id} className="hover:bg-slate-800/40 transition">
                  <td className="px-4 py-3">
                    <div className="font-bold text-slate-100">{s.name}</div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{s.city}, {s.country}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-slate-200 font-medium">{s.contactPerson}</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      {s.wechatId && (
                        <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-900/60">
                          <MessageCircle className="w-3 h-3" /> {s.wechatId}
                        </span>
                      )}
                      {s.whatsapp && (
                        <span className="text-[10px] text-blue-400 font-mono">{s.whatsapp}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <Badge variant={s.defaultCurrency === 'CNY' ? 'warning' : 'info'}>
                        {s.defaultCurrency}
                      </Badge>
                      <span className="text-[11px] text-slate-400 truncate max-w-xs">{s.paymentTerms}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-slate-200">
                    {s.totalShipments}
                  </td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-400">
                    {formatCNY(s.totalVolumeCNY)}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => setSelectedSupplier(s)}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-blue-400 text-xs font-semibold border border-slate-700 transition"
                    >
                      View TT Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Supplier TT & Banking Profile Modal */}
      {selectedSupplier && (
        <Modal
          isOpen={!!selectedSupplier}
          onClose={() => setSelectedSupplier(null)}
          title={`Supplier Profile: ${selectedSupplier.name}`}
          size="lg"
        >
          <div className="space-y-4">
            <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400">Location & Origin:</span>
                <p className="font-semibold text-slate-200">{selectedSupplier.city}, {selectedSupplier.country}</p>
                <p className="text-slate-400 mt-2">Primary Contact:</p>
                <p className="text-slate-200">{selectedSupplier.contactPerson} ({selectedSupplier.email})</p>
                <p className="text-slate-200 font-mono mt-0.5">WeChat: {selectedSupplier.wechatId || 'N/A'}</p>
              </div>

              <div>
                <span className="text-slate-400">Payment Terms:</span>
                <p className="font-semibold text-amber-400">{selectedSupplier.paymentTerms}</p>
                <p className="text-slate-400 mt-2">Total Historic Purchases:</p>
                <p className="text-base font-bold text-emerald-400 font-mono">
                  {formatCNY(selectedSupplier.totalVolumeCNY)} ({selectedSupplier.totalShipments} consignments)
                </p>
              </div>
            </div>

            {selectedSupplier.bankDetails && (
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                <h4 className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-blue-400" />
                  International Telegraphic Transfer (TT) Bank Instructions
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                  <div>
                    <span className="text-slate-500">Beneficiary:</span>
                    <p className="font-mono text-slate-200">{selectedSupplier.bankDetails.beneficiary}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Bank Name:</span>
                    <p className="font-mono text-slate-200">{selectedSupplier.bankDetails.bankName}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">SWIFT Code:</span>
                    <p className="font-mono font-bold text-blue-400">{selectedSupplier.bankDetails.swiftCode}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Account Number:</span>
                    <p className="font-mono text-slate-200">{selectedSupplier.bankDetails.accountNo}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedSupplier(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Add Supplier Modal */}
      {isAddModalOpen && (
        <Modal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          title="Add International / China Supplier"
          size="lg"
        >
          <form onSubmit={handleAddSupplier} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Company / Supplier Legal Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Shenzhen Dahua Electronics Co., Ltd"
                value={newSupplier.name}
                onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  City & Province (China)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Shenzhen, Guangdong"
                  value={newSupplier.city}
                  onChange={(e) => setNewSupplier({ ...newSupplier, city: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Contact Person
                </label>
                <input
                  type="text"
                  placeholder="e.g. Andy Liu"
                  value={newSupplier.contactPerson}
                  onChange={(e) => setNewSupplier({ ...newSupplier, contactPerson: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  WeChat ID (Crucial for China)
                </label>
                <input
                  type="text"
                  placeholder="e.g. andy_dahua_sales"
                  value={newSupplier.wechatId}
                  onChange={(e) => setNewSupplier({ ...newSupplier, wechatId: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 font-mono focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="text"
                  placeholder="+86 138 0000 0000"
                  value={newSupplier.phone}
                  onChange={(e) => setNewSupplier({ ...newSupplier, phone: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Currency
                </label>
                <select
                  value={newSupplier.defaultCurrency}
                  onChange={(e) => setNewSupplier({ ...newSupplier, defaultCurrency: e.target.value as any })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-blue-500 focus:outline-none"
                >
                  <option value="CNY">CNY (&yen;) Chinese Yuan</option>
                  <option value="USD">USD ($) US Dollar</option>
                  <option value="BDT">BDT (৳) Bangladesh Taka</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Standard Payment Terms
              </label>
              <input
                type="text"
                placeholder="e.g. 30% TT deposit, 70% before shipment"
                value={newSupplier.paymentTerms}
                onChange={(e) => setNewSupplier({ ...newSupplier, paymentTerms: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-blue-500 focus:outline-none"
              />
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
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition shadow-md shadow-blue-500/20"
              >
                Save Supplier
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
