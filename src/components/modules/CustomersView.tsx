'use client';

import React, { useState } from 'react';
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
  Building
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { formatBDT } from '@/lib/formatters';

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
  currentDues: number;
  totalInvoiced: number;
  paymentTerms: string;
}

const INITIAL_CUSTOMERS: Customer[] = [
  {
    id: 'cust-001',
    name: 'Md. Tariqul Islam',
    company: 'Dhaka Bank Ltd - Principal Branch',
    type: 'CORPORATE',
    phone: '+880 1711-223344',
    email: 'procurement@dhakabank.com.bd',
    address: 'Motijheel C/A, Dhaka-1000, Bangladesh',
    binNumber: 'BIN-001293848-0101',
    creditLimit: 2000000,
    currentDues: 0,
    totalInvoiced: 450000,
    paymentTerms: 'Net 30 Days'
  },
  {
    id: 'cust-002',
    name: 'Engr. Kamal Hossain',
    company: 'TechVision Security Systems',
    type: 'WHOLESALE',
    phone: '+880 1819-556677',
    email: 'kamal@techvision.com.bd',
    address: 'Multiplan Center, Level 6, Elephant Road, Dhaka',
    binNumber: 'BIN-004819283-0202',
    creditLimit: 500000,
    currentDues: 90000,
    totalInvoiced: 240000,
    paymentTerms: 'Net 15 Days'
  },
  {
    id: 'cust-003',
    name: 'Dr. Rafiqul Hasan',
    company: 'Square Pharmaceuticals Ltd',
    type: 'CORPORATE',
    phone: '+880 1912-334455',
    email: 'projects@squarepharma.com.bd',
    address: 'Square Centre, 48 Mohakhali C/A, Dhaka-1212',
    binNumber: 'BIN-009928172-0303',
    creditLimit: 5000000,
    currentDues: 50000,
    totalInvoiced: 150000,
    paymentTerms: 'Milestone / Net 45'
  },
  {
    id: 'cust-004',
    name: 'Sultana Razia',
    company: 'Nexus Computer & CCTV Solution',
    type: 'WHOLESALE',
    phone: '+880 1611-998877',
    email: 'nexus.bd@gmail.com',
    address: 'Agrabad C/A, Chittagong, Bangladesh',
    binNumber: 'BIN-007712349-0404',
    creditLimit: 300000,
    currentDues: 260000,
    totalInvoiced: 580000,
    paymentTerms: 'Net 7 Days'
  },
  {
    id: 'cust-005',
    name: 'Arman Habib (Walk-in)',
    type: 'RETAIL',
    phone: '+880 1755-112233',
    address: 'Gulshan-2, Dhaka',
    creditLimit: 0,
    currentDues: 0,
    totalInvoiced: 15000,
    paymentTerms: 'Cash On Delivery'
  }
];

export function CustomersView() {
  const [customers, setCustomers] = useState<Customer[]>(INITIAL_CUSTOMERS);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('ALL');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

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

  const filteredCustomers = customers.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      (c.company && c.company.toLowerCase().includes(search.toLowerCase())) ||
      c.phone.includes(search) ||
      (c.binNumber && c.binNumber.toLowerCase().includes(search.toLowerCase()));

    const matchesType = filterType === 'ALL' || c.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleAddCustomer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCustomer.name || !newCustomer.phone) return;

    const item: Customer = {
      id: `cust-${Date.now()}`,
      name: newCustomer.name,
      company: newCustomer.company,
      type: newCustomer.type,
      phone: newCustomer.phone,
      email: newCustomer.email,
      address: newCustomer.address,
      binNumber: newCustomer.binNumber,
      creditLimit: Number(newCustomer.creditLimit),
      currentDues: 0,
      totalInvoiced: 0,
      paymentTerms: newCustomer.paymentTerms
    };

    setCustomers([item, ...customers]);
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

  const totalDues = customers.reduce((acc, c) => acc + c.currentDues, 0);
  const totalInvoiced = customers.reduce((acc, c) => acc + c.totalInvoiced, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" />
            Customer & Client Management
          </h2>
          <p className="text-xs text-slate-400">
            Corporate clients, wholesale distributors, retail accounts, and credit limits
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition shadow-lg shadow-blue-500/20"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Customer</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium">Total Registered</span>
          <p className="text-xl font-bold text-slate-100 mt-1">{customers.length} Clients</p>
          <span className="text-[11px] text-slate-500">Retail, Wholesale & Corporate</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium">Total Invoiced</span>
          <p className="text-xl font-bold text-blue-400 mt-1">{formatBDT(totalInvoiced)}</p>
          <span className="text-[11px] text-slate-500">Gross Lifetime Billed</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium">Outstanding Dues</span>
          <p className="text-xl font-bold text-amber-400 mt-1">{formatBDT(totalDues)}</p>
          <span className="text-[11px] text-amber-400">Accounts Receivable</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium">Payment Health</span>
          <p className="text-xl font-bold text-emerald-400 mt-1">91.2%</p>
          <span className="text-[11px] text-emerald-400">Within agreed credit terms</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-slate-900 border border-slate-800 rounded-xl">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Name, Company, Phone, BIN..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
          {['ALL', 'CORPORATE', 'WHOLESALE', 'RETAIL'].map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                filterType === t
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40'
                  : 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-slate-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Customer Directory Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
        <div className="sm:hidden px-3 py-2 bg-slate-800/40 border-b border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>👉 Swipe horizontally for credit & balance info</span>
          <span className="font-semibold text-slate-300">{filteredCustomers.length} clients</span>
        </div>
        <div className="overflow-x-auto touch-scroll">
          <table className="w-full text-left text-xs text-slate-300 min-w-[720px]">
            <thead className="bg-slate-800/80 text-slate-400 uppercase font-semibold border-b border-slate-800">
              <tr>
                <th className="px-4 py-3">Customer & Company</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Contact Details</th>
                <th className="px-4 py-3 text-right">Credit Limit</th>
                <th className="px-4 py-3 text-right">Outstanding Due</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredCustomers.map((c) => {
                const creditRatio = c.creditLimit > 0 ? (c.currentDues / c.creditLimit) * 100 : 0;
                const isOverLimit = creditRatio > 80;

                return (
                  <tr key={c.id} className="hover:bg-slate-800/40 transition">
                    <td className="px-4 py-3">
                      <div className="font-bold text-slate-100">{c.company || c.name}</div>
                      {c.company && (
                        <div className="text-[11px] text-slate-400">Attn: {c.name}</div>
                      )}
                      {c.binNumber && (
                        <div className="font-mono text-[10px] text-blue-400 mt-0.5">
                          {c.binNumber}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant={
                          c.type === 'CORPORATE' ? 'purple' : c.type === 'WHOLESALE' ? 'blue' : 'neutral'
                        }
                      >
                        {c.type}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span>{c.phone}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mt-0.5 truncate max-w-xs">
                        <MapPin className="w-3 h-3 text-slate-500 flex-shrink-0" />
                        <span className="truncate">{c.address}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-slate-300">
                      {c.creditLimit > 0 ? formatBDT(c.creditLimit) : 'Cash Only'}
                      <div className="text-[10px] text-slate-500">{c.paymentTerms}</div>
                    </td>
                    <td className="px-4 py-3 text-right font-mono">
                      <span className={`font-bold ${c.currentDues > 0 ? 'text-amber-400' : 'text-slate-400'}`}>
                        {formatBDT(c.currentDues)}
                      </span>
                      {isOverLimit && (
                        <div className="text-[10px] text-rose-400 font-sans font-semibold flex items-center justify-end gap-1 mt-0.5">
                          <AlertCircle className="w-3 h-3" /> Over 80% Credit
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => setSelectedCustomer(c)}
                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-blue-400 text-xs font-semibold border border-slate-700 transition"
                      >
                        View Account
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Account Details Modal */}
      {selectedCustomer && (
        <Modal
          isOpen={!!selectedCustomer}
          onClose={() => setSelectedCustomer(null)}
          title={`Customer Ledger: ${selectedCustomer.company || selectedCustomer.name}`}
          size="lg"
        >
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
              <div>
                <span className="text-slate-400">Account Type & BIN:</span>
                <p className="font-semibold text-slate-200 mt-0.5">
                  {selectedCustomer.type} &bull; {selectedCustomer.binNumber || 'No BIN registered'}
                </p>
                <p className="text-slate-400 mt-2">Contact & Phone:</p>
                <p className="text-slate-200">{selectedCustomer.name} ({selectedCustomer.phone})</p>
              </div>
              <div>
                <span className="text-slate-400">Credit Limit & Terms:</span>
                <p className="font-semibold text-slate-200 mt-0.5">
                  {selectedCustomer.creditLimit > 0 ? formatBDT(selectedCustomer.creditLimit) : 'N/A'} ({selectedCustomer.paymentTerms})
                </p>
                <p className="text-slate-400 mt-2">Current Outstanding Dues:</p>
                <p className="text-base font-bold text-amber-400 mt-0.5">
                  {formatBDT(selectedCustomer.currentDues)}
                </p>
              </div>
            </div>

            <div className="p-3 bg-slate-800/40 rounded-lg text-xs space-y-2">
              <h4 className="font-semibold text-slate-200">Billing Address</h4>
              <p className="text-slate-400">{selectedCustomer.address}</p>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
              <button
                onClick={() => setSelectedCustomer(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Add Customer Modal */}
      {isAddModalOpen && (
        <Modal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          title="Create New Customer / Corporate Account"
          size="lg"
        >
          <form onSubmit={handleAddCustomer} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Company / Organization Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Beximco IT Division"
                  value={newCustomer.company}
                  onChange={(e) => setNewCustomer({ ...newCustomer, company: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Md. Ashraful Alam"
                  value={newCustomer.name}
                  onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Account Type
                </label>
                <select
                  value={newCustomer.type}
                  onChange={(e) => setNewCustomer({ ...newCustomer, type: e.target.value as any })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-blue-500 focus:outline-none"
                >
                  <option value="CORPORATE">Corporate / Project</option>
                  <option value="WHOLESALE">Wholesale Dealer</option>
                  <option value="RETAIL">Retail / Walk-in</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Phone Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="+880 1700-000000"
                  value={newCustomer.phone}
                  onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="accounts@company.com"
                  value={newCustomer.email}
                  onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  VAT BIN / Tax Registration Number
                </label>
                <input
                  type="text"
                  placeholder="BIN-XXXXXXXXX-XXXX"
                  value={newCustomer.binNumber}
                  onChange={(e) => setNewCustomer({ ...newCustomer, binNumber: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 font-mono focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Credit Limit (BDT)
                </label>
                <input
                  type="number"
                  min="0"
                  step="50000"
                  value={newCustomer.creditLimit}
                  onChange={(e) => setNewCustomer({ ...newCustomer, creditLimit: Number(e.target.value) })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Office / Delivery Address
              </label>
              <textarea
                rows={2}
                placeholder="Full delivery address, floor, road, city..."
                value={newCustomer.address}
                onChange={(e) => setNewCustomer({ ...newCustomer, address: e.target.value })}
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
                Save Customer
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
