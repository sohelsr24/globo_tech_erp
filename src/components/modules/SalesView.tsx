'use client';

import React, { useState } from 'react';
import { FileText, Plus, DollarSign, Printer, ArrowRight, CheckCircle2, Truck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Formatters } from '@/lib/formatters';

interface SalesInvoiceRecord {
  id: string;
  invoiceNo: string;
  customerName: string;
  customerPhone: string;
  saleType: 'RETAIL' | 'WHOLESALE' | 'PROJECT';
  productName: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  vatAmount: number;
  grandTotal: number;
  paidAmount: number;
  dueAmount: number;
  paymentStatus: 'PAID' | 'PARTIAL' | 'UNPAID';
  stockDeducted: boolean;
  date: string;
}

const INITIAL_INVOICES: SalesInvoiceRecord[] = [
  {
    id: 'inv-01',
    invoiceNo: 'INV-2026-9001',
    customerName: 'ABC Bank PLC',
    customerPhone: '+880 1713-998877',
    saleType: 'RETAIL',
    productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    quantity: 30,
    unitPrice: 15000,
    subtotal: 450000,
    vatAmount: 0,
    grandTotal: 450000,
    paidAmount: 450000,
    dueAmount: 0,
    paymentStatus: 'PAID',
    stockDeducted: true,
    date: '20-Sep-2026',
  },
  {
    id: 'inv-02',
    invoiceNo: 'INV-2026-9002',
    customerName: 'Beximco Industrial Fabrics',
    customerPhone: '+880 1819-876543',
    saleType: 'WHOLESALE',
    productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    quantity: 20,
    unitPrice: 13500,
    subtotal: 270000,
    vatAmount: 0,
    grandTotal: 270000,
    paidAmount: 228000,
    dueAmount: 42000,
    paymentStatus: 'PARTIAL',
    stockDeducted: true,
    date: '22-Sep-2026',
  }
];

export function SalesView() {
  const [invoices, setInvoices] = useState<SalesInvoiceRecord[]>(INITIAL_INVOICES);
  const [activeSubTab, setActiveSubTab] = useState<'invoices' | 'quotes' | 'challans'>('invoices');
  const [selectedInvoice, setSelectedInvoice] = useState<SalesInvoiceRecord | null>(null);
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  // Payment form
  const [payAmount, setPayAmount] = useState<number>(0);
  const [payMethod, setPayMethod] = useState('BANK_TRANSFER');

  const openPaymentModal = (inv: SalesInvoiceRecord) => {
    setSelectedInvoice(inv);
    setPayAmount(inv.dueAmount);
    setIsPayModalOpen(true);
  };

  const handleRecordPayment = () => {
    if (!selectedInvoice || payAmount <= 0) return;
    const newPaid = selectedInvoice.paidAmount + payAmount;
    const newDue = Math.max(0, selectedInvoice.grandTotal - newPaid);
    const newStatus: 'PAID' | 'PARTIAL' | 'UNPAID' = newDue === 0 ? 'PAID' : 'PARTIAL';

    setInvoices(
      invoices.map((inv) =>
        inv.id === selectedInvoice.id
          ? { ...inv, paidAmount: newPaid, dueAmount: newDue, paymentStatus: newStatus }
          : inv
      )
    );
    setIsPayModalOpen(false);
  };

  return (
    <div className="space-y-5">
      {/* Header & Sub-tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900 border border-slate-800 rounded-xl p-3 sm:p-3.5">
        <div className="flex items-center gap-2 overflow-x-auto touch-scroll pb-1 sm:pb-0">
          <button
            onClick={() => setActiveSubTab('invoices')}
            className={`px-3.5 py-2 sm:py-1.5 rounded-lg text-xs font-semibold transition flex-shrink-0 active:scale-95 ${
              activeSubTab === 'invoices'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            Sales Invoices ({invoices.length})
          </button>
          <button
            onClick={() => setActiveSubTab('quotes')}
            className={`px-3.5 py-2 sm:py-1.5 rounded-lg text-xs font-semibold transition flex-shrink-0 active:scale-95 ${
              activeSubTab === 'quotes'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            Quotations (3 Active)
          </button>
          <button
            onClick={() => setActiveSubTab('challans')}
            className={`px-3.5 py-2 sm:py-1.5 rounded-lg text-xs font-semibold transition flex-shrink-0 active:scale-95 ${
              activeSubTab === 'challans'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            Challans (2 Dispatched)
          </button>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="success">Auto Stock Deduction: Active</Badge>
        </div>
      </div>

      {/* Main Invoices Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="sm:hidden px-3 py-2 bg-slate-800/40 border-b border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>👉 Swipe horizontally for invoice items & payment actions</span>
          <span className="font-semibold text-slate-300">{invoices.length} invoices</span>
        </div>
        <div className="overflow-x-auto touch-scroll">
          <table className="w-full text-left text-xs min-w-[850px]">
            <thead className="bg-slate-800/80 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Invoice # & Date</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Channel / Sale Type</th>
                <th className="py-3 px-4">Product & Qty</th>
                <th className="py-3 px-4 text-right">Grand Total</th>
                <th className="py-3 px-4 text-right">Paid Amount</th>
                <th className="py-3 px-4 text-right">Due Amount</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Stock Audit</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-800/40 transition">
                  <td className="py-3 px-4">
                    <div className="font-bold text-blue-400 font-mono">{inv.invoiceNo}</div>
                    <div className="text-[10px] text-slate-500">{inv.date}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-semibold text-slate-100">{inv.customerName}</div>
                    <div className="text-[10px] text-slate-400">{inv.customerPhone}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      inv.saleType === 'RETAIL'
                        ? 'bg-blue-950 text-blue-400 border border-blue-800'
                        : inv.saleType === 'WHOLESALE'
                        ? 'bg-cyan-950 text-cyan-400 border border-cyan-800'
                        : 'bg-purple-950 text-purple-400 border border-purple-800'
                    }`}>
                      {inv.saleType}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-medium text-slate-200">{inv.productName}</div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      {inv.quantity} pcs @ {Formatters.currency(inv.unitPrice)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right font-bold text-slate-100">
                    {Formatters.currency(inv.grandTotal)}
                  </td>
                  <td className="py-3 px-4 text-right font-medium text-emerald-400">
                    {Formatters.currency(inv.paidAmount)}
                  </td>
                  <td className="py-3 px-4 text-right font-bold text-rose-400">
                    {Formatters.currency(inv.dueAmount)}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Badge variant={inv.paymentStatus === 'PAID' ? 'success' : 'warning'}>
                      {inv.paymentStatus}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-[11px] text-emerald-400 font-semibold flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Deducted</span>
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => {
                          setSelectedInvoice(inv);
                          setIsPrintModalOpen(true);
                        }}
                        className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                        title="Print / PDF Invoice"
                      >
                        <Printer className="w-3.5 h-3.5" />
                      </button>

                      {inv.dueAmount > 0 && (
                        <button
                          onClick={() => openPaymentModal(inv)}
                          className="px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold transition flex items-center gap-1"
                        >
                          <DollarSign className="w-3 h-3" />
                          <span>Pay</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Record Payment Modal */}
      {selectedInvoice && (
        <Modal
          isOpen={isPayModalOpen}
          onClose={() => setIsPayModalOpen(false)}
          title={`Record Customer Payment: ${selectedInvoice.invoiceNo}`}
          footer={
            <>
              <button
                onClick={() => setIsPayModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleRecordPayment}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
              >
                Confirm Payment Receipt
              </button>
            </>
          }
        >
          <div className="space-y-4 text-xs">
            <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700">
              <div className="flex justify-between font-semibold text-slate-300 mb-1">
                <span>Customer:</span>
                <span className="text-slate-100">{selectedInvoice.customerName}</span>
              </div>
              <div className="flex justify-between font-semibold text-slate-300 mb-1">
                <span>Invoice Grand Total:</span>
                <span className="text-slate-100">{Formatters.currency(selectedInvoice.grandTotal)}</span>
              </div>
              <div className="flex justify-between font-semibold text-rose-400">
                <span>Remaining Due Amount:</span>
                <span>{Formatters.currency(selectedInvoice.dueAmount)}</span>
              </div>
            </div>

            <div>
              <label className="block text-slate-400 font-semibold mb-1">Payment Amount (BDT) *</label>
              <input
                type="number"
                value={payAmount}
                max={selectedInvoice.dueAmount}
                onChange={(e) => setPayAmount(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100 font-bold text-sm"
              />
            </div>

            <div>
              <label className="block text-slate-400 font-semibold mb-1">Payment Channel / Mode</label>
              <select
                value={payMethod}
                onChange={(e) => setPayMethod(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200"
              >
                <option value="BANK_TRANSFER">Bank Transfer (BEFTN / RTGS / BRAC Bank)</option>
                <option value="BKASH">bKash Corporate</option>
                <option value="NAGAD">Nagad</option>
                <option value="CASH">Cash in Hand</option>
                <option value="CHEQUE">Bank Cheque</option>
              </select>
            </div>
          </div>
        </Modal>
      )}

      {/* Printable Invoice Modal */}
      {selectedInvoice && (
        <Modal
          isOpen={isPrintModalOpen}
          onClose={() => setIsPrintModalOpen(false)}
          title={`Tax Invoice: ${selectedInvoice.invoiceNo}`}
          maxWidth="4xl"
          footer={
            <>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Invoice (A4)</span>
              </button>
              <button
                onClick={() => setIsPrintModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold"
              >
                Close
              </button>
            </>
          }
        >
          {/* Printable White Paper Sheet */}
          <div className="bg-white text-slate-900 p-8 rounded-xl font-sans text-xs space-y-6 shadow-md print-sheet">
            {/* Letterhead */}
            <div className="flex justify-between items-start border-b-2 border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Apex Industrial & Tech Solutions Ltd.
                </h2>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Direct Importer & Distributor: IT, CCTV, Networking & Security Systems
                </p>
                <p className="text-[11px] text-slate-600">
                  Level 6, House 42, Road 11, Banani C/A, Dhaka-1213, Bangladesh
                </p>
                <p className="text-[11px] text-slate-600">
                  Phone: +880 1711-234567 | BIN: BIN-002349182-0101
                </p>
              </div>

              <div className="text-right">
                <h1 className="text-2xl font-black text-blue-600 tracking-wider">TAX INVOICE</h1>
                <p className="font-mono font-bold text-sm text-slate-900 mt-1">{selectedInvoice.invoiceNo}</p>
                <p className="text-[11px] text-slate-500">Date: {selectedInvoice.date}</p>
              </div>
            </div>

            {/* Bill To */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Bill To / Customer:</span>
                <p className="text-sm font-bold text-slate-900 mt-0.5">{selectedInvoice.customerName}</p>
                <p className="text-slate-600">Phone: {selectedInvoice.customerPhone}</p>
                <p className="text-slate-600">Sale Type: {selectedInvoice.saleType}</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Payment Status:</span>
                <p className="text-sm font-extrabold text-emerald-600 mt-0.5">{selectedInvoice.paymentStatus}</p>
                <p className="text-slate-600">Paid: {Formatters.currency(selectedInvoice.paidAmount)}</p>
                <p className="text-rose-600 font-bold">Due: {Formatters.currency(selectedInvoice.dueAmount)}</p>
              </div>
            </div>

            {/* Items Table */}
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 text-[10px] uppercase border-y border-slate-300">
                  <th className="py-2 px-3">SL</th>
                  <th className="py-2 px-3">Item Description</th>
                  <th className="py-2 px-3 text-center">Qty</th>
                  <th className="py-2 px-3 text-right">Unit Price (BDT)</th>
                  <th className="py-2 px-3 text-right">Total Amount (BDT)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-2.5 px-3">1</td>
                  <td className="py-2.5 px-3 font-semibold">{selectedInvoice.productName}</td>
                  <td className="py-2.5 px-3 text-center font-bold">{selectedInvoice.quantity} pcs</td>
                  <td className="py-2.5 px-3 text-right">{Formatters.currency(selectedInvoice.unitPrice)}</td>
                  <td className="py-2.5 px-3 text-right font-bold">{Formatters.currency(selectedInvoice.grandTotal)}</td>
                </tr>
              </tbody>
            </table>

            {/* Totals */}
            <div className="flex justify-end pt-2">
              <div className="w-64 space-y-1.5 text-right">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal:</span>
                  <span>{Formatters.currency(selectedInvoice.subtotal)}</span>
                </div>
                <div className="flex justify-between text-slate-900 font-extrabold text-sm border-t border-slate-300 pt-1">
                  <span>Invoice Total:</span>
                  <span>{Formatters.currency(selectedInvoice.grandTotal)}</span>
                </div>
              </div>
            </div>

            {/* Signatures */}
            <div className="flex justify-between items-end pt-12 text-slate-600 text-[11px]">
              <div className="border-t border-slate-400 w-44 text-center pt-1 font-semibold">
                Customer Signature & Stamp
              </div>
              <div className="border-t border-slate-400 w-44 text-center pt-1 font-semibold">
                Authorized Signatory
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
