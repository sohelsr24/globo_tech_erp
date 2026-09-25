'use client';

import React, { useState } from 'react';
import { Warehouse, Plus, ArrowRightLeft, History, PackageCheck, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Formatters } from '@/lib/formatters';

interface WarehouseStockItem {
  id: string;
  warehouseName: string;
  productName: string;
  sku: string;
  available: number;
  reserved: number;
  damaged: number;
  unitLandedCost: number;
}

interface StockLedgerRecord {
  id: string;
  timestamp: string;
  productName: string;
  warehouseName: string;
  movementType: string;
  quantityDelta: number;
  balanceAfter: number;
  unitLandedCost: number;
  referenceId: string;
  reasonNotes?: string;
}

const INITIAL_WAREHOUSE_STOCK: WarehouseStockItem[] = [
  {
    id: 'st-01',
    warehouseName: 'Main Warehouse (Tejgaon)',
    productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    sku: 'SKU-CCTV-4MP-DOME',
    available: 40, // 100 received - 30 retail - 20 wholesale - 10 project = 40 pcs
    reserved: 0,
    damaged: 0,
    unitLandedCost: 10000,
  },
  {
    id: 'st-02',
    warehouseName: 'Main Warehouse (Tejgaon)',
    productName: 'TP-Link 24-Port Gigabit Managed PoE+ Switch',
    sku: 'SKU-NET-SW24G',
    available: 8,
    reserved: 2,
    damaged: 0,
    unitLandedCost: 24000,
  },
  {
    id: 'st-03',
    warehouseName: 'Project Store (Site Depot)',
    productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    sku: 'SKU-CCTV-4MP-DOME',
    available: 10,
    reserved: 0,
    damaged: 0,
    unitLandedCost: 10000,
  },
  {
    id: 'st-04',
    warehouseName: 'Main Warehouse (Tejgaon)',
    productName: 'Cat6 UTP Pure Copper Industrial Cable (305m)',
    sku: 'SKU-NET-CABLE-CAT6',
    available: 65,
    reserved: 0,
    damaged: 0,
    unitLandedCost: 9200,
  }
];

const INITIAL_LEDGER: StockLedgerRecord[] = [
  {
    id: 'led-05',
    timestamp: '2026-09-24 16:30',
    productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    warehouseName: 'Main Warehouse (Tejgaon)',
    movementType: 'PROJECT_ISSUE',
    quantityDelta: -10,
    balanceAfter: 40,
    unitLandedCost: 10000,
    referenceId: 'PRJ-2026-001',
    reasonNotes: 'Consumed 10 pcs for ABC Bank CCTV Installation Project'
  },
  {
    id: 'led-04',
    timestamp: '2026-09-22 14:15',
    productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    warehouseName: 'Main Warehouse (Tejgaon)',
    movementType: 'SALE_INVOICE',
    quantityDelta: -20,
    balanceAfter: 50,
    unitLandedCost: 10000,
    referenceId: 'INV-2026-9002',
    reasonNotes: 'Wholesale sale to Beximco Industrial Fabrics'
  },
  {
    id: 'led-03',
    timestamp: '2026-09-20 11:00',
    productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    warehouseName: 'Main Warehouse (Tejgaon)',
    movementType: 'SALE_INVOICE',
    quantityDelta: -30,
    balanceAfter: 70,
    unitLandedCost: 10000,
    referenceId: 'INV-2026-9001',
    reasonNotes: 'Retail sale to ABC Bank PLC'
  },
  {
    id: 'led-02',
    timestamp: '2026-09-15 09:30',
    productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    warehouseName: 'Main Warehouse (Tejgaon)',
    movementType: 'PURCHASE_GRN',
    quantityDelta: 100,
    balanceAfter: 100,
    unitLandedCost: 10000,
    referenceId: 'GRN-2026-001',
    reasonNotes: 'Received 100 pcs from China Import IMP-2026-001'
  },
  {
    id: 'led-01',
    timestamp: '2026-09-01 08:00',
    productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    warehouseName: 'Main Warehouse (Tejgaon)',
    movementType: 'OPENING_STOCK',
    quantityDelta: 40,
    balanceAfter: 40,
    unitLandedCost: 10000,
    referenceId: 'INIT-2026',
    reasonNotes: 'Opening initial audited balance'
  }
];

export function StockView() {
  const [activeTab, setActiveTab] = useState<'inventory' | 'ledger'>('inventory');
  const [warehouseStock, setWarehouseStock] = useState<WarehouseStockItem[]>(INITIAL_WAREHOUSE_STOCK);
  const [ledger, setLedger] = useState<StockLedgerRecord[]>(INITIAL_LEDGER);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [isGrnModalOpen, setIsGrnModalOpen] = useState(false);

  // GRN State
  const [grnQty, setGrnQty] = useState(50);
  const [grnWarehouse, setGrnWarehouse] = useState('Main Warehouse (Tejgaon)');

  const handleReceiveGrn = () => {
    if (grnQty <= 0) return;
    const targetItem = warehouseStock.find((s) => s.warehouseName === grnWarehouse);
    if (targetItem) {
      const newAvail = targetItem.available + grnQty;
      setWarehouseStock(
        warehouseStock.map((s) => (s.id === targetItem.id ? { ...s, available: newAvail } : s))
      );

      // Add to immutable ledger
      const newEntry: StockLedgerRecord = {
        id: `led-${Date.now()}`,
        timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
        productName: targetItem.productName,
        warehouseName: grnWarehouse,
        movementType: 'PURCHASE_GRN',
        quantityDelta: grnQty,
        balanceAfter: newAvail,
        unitLandedCost: targetItem.unitLandedCost,
        referenceId: `GRN-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        reasonNotes: `Goods Received Note processed into ${grnWarehouse}`
      };
      setLedger([newEntry, ...ledger]);
    }
    setIsGrnModalOpen(false);
  };

  return (
    <div className="space-y-5">
      {/* Sub Tabs Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
              activeTab === 'inventory'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Warehouse className="w-4 h-4" />
            <span>Multi-Warehouse Stock Levels</span>
          </button>

          <button
            onClick={() => setActiveTab('ledger')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
              activeTab === 'ledger'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <History className="w-4 h-4" />
            <span>Immutable Stock Movement Ledger ({ledger.length})</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsGrnModalOpen(true)}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
          >
            <PackageCheck className="w-3.5 h-3.5" />
            <span>Receive Goods (GRN)</span>
          </button>
          <button
            onClick={() => setIsTransferModalOpen(true)}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition"
          >
            <ArrowRightLeft className="w-3.5 h-3.5 text-blue-400" />
            <span>Stock Transfer</span>
          </button>
        </div>
      </div>

      {activeTab === 'inventory' ? (
        /* Inventory by Warehouse */
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-800/80 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Warehouse</th>
                  <th className="py-3 px-4">Product & SKU</th>
                  <th className="py-3 px-4 text-center">Available Stock</th>
                  <th className="py-3 px-4 text-center">Reserved</th>
                  <th className="py-3 px-4 text-center">Damaged</th>
                  <th className="py-3 px-4 text-right">Landed Cost</th>
                  <th className="py-3 px-4 text-right">Valuation (Cost)</th>
                  <th className="py-3 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-200">
                {warehouseStock.map((st) => {
                  const valuation = st.available * st.unitLandedCost;
                  return (
                    <tr key={st.id} className="hover:bg-slate-800/40 transition">
                      <td className="py-3 px-4 font-bold text-slate-200 flex items-center gap-2">
                        <Warehouse className="w-4 h-4 text-blue-400" />
                        <span>{st.warehouseName}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-slate-100">{st.productName}</div>
                        <div className="text-[10px] text-slate-500 font-mono">{st.sku}</div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="font-extrabold text-emerald-400 text-sm">{st.available} pcs</span>
                      </td>
                      <td className="py-3 px-4 text-center text-slate-400 font-medium">
                        {st.reserved} pcs
                      </td>
                      <td className="py-3 px-4 text-center text-rose-400 font-medium">
                        {st.damaged} pcs
                      </td>
                      <td className="py-3 px-4 text-right font-medium text-slate-300">
                        {Formatters.currency(st.unitLandedCost)}
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-blue-400 text-sm">
                        {Formatters.currency(valuation)}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant="success">Normal</Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Immutable Stock Movement Ledger */
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
          <div className="p-3 bg-slate-800/60 border-b border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span className="font-semibold text-slate-200 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-blue-400" />
              <span>Immutable Stock Ledger: Every physical quantity modification is recorded with historical landed cost.</span>
            </span>
            <Badge variant="info">Audit Compliance Active</Badge>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-800/80 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4">Movement Type</th>
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Warehouse</th>
                  <th className="py-3 px-4 text-center">Quantity Delta</th>
                  <th className="py-3 px-4 text-center">Balance After</th>
                  <th className="py-3 px-4 text-right">Landed Cost</th>
                  <th className="py-3 px-4">Reference Document</th>
                  <th className="py-3 px-4">Reason / Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-200 font-mono">
                {ledger.map((entry) => {
                  const isPositive = entry.quantityDelta > 0;
                  return (
                    <tr key={entry.id} className="hover:bg-slate-800/40 transition">
                      <td className="py-3 px-4 text-slate-400 text-[11px] font-sans">{entry.timestamp}</td>
                      <td className="py-3 px-4 font-sans font-bold">
                        <span className={`px-2 py-0.5 rounded text-[10px] ${
                          entry.movementType === 'PURCHASE_GRN' || entry.movementType === 'OPENING_STOCK'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : entry.movementType === 'PROJECT_ISSUE'
                            ? 'bg-purple-950 text-purple-400 border border-purple-800'
                            : 'bg-blue-950 text-blue-400 border border-blue-800'
                        }`}>
                          {entry.movementType}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-sans font-medium text-slate-200">{entry.productName}</td>
                      <td className="py-3 px-4 font-sans text-slate-400">{entry.warehouseName}</td>
                      <td className={`py-3 px-4 text-center font-bold text-sm ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {isPositive ? `+${entry.quantityDelta}` : entry.quantityDelta} pcs
                      </td>
                      <td className="py-3 px-4 text-center font-bold text-slate-100 text-sm">{entry.balanceAfter} pcs</td>
                      <td className="py-3 px-4 text-right font-sans text-slate-300 font-medium">
                        {Formatters.currency(entry.unitLandedCost)}
                      </td>
                      <td className="py-3 px-4 text-blue-400 font-bold">{entry.referenceId}</td>
                      <td className="py-3 px-4 font-sans text-slate-400 text-[11px] max-w-xs truncate">
                        {entry.reasonNotes || '—'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* GRN Receiving Modal */}
      <Modal
        isOpen={isGrnModalOpen}
        onClose={() => setIsGrnModalOpen(false)}
        title="Receive Goods (GRN - Goods Received Note)"
        footer={
          <>
            <button
              onClick={() => setIsGrnModalOpen(false)}
              className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleReceiveGrn}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
            >
              Confirm Goods Receiving
            </button>
          </>
        }
      >
        <div className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-400 font-semibold mb-1">Target Receiving Warehouse</label>
            <select
              value={grnWarehouse}
              onChange={(e) => setGrnWarehouse(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200"
            >
              <option value="Main Warehouse (Tejgaon)">Main Warehouse (Tejgaon)</option>
              <option value="Office Store (Banani)">Office Store (Banani)</option>
              <option value="Project Store (Site Depot)">Project Store (Site Depot)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 font-semibold mb-1">Product</label>
              <input
                type="text"
                disabled
                value="CCTV Camera (4MP Outdoor IR Dome IP Camera)"
                className="w-full bg-slate-800/60 border border-slate-700 rounded-lg p-2 text-slate-400"
              />
            </div>
            <div>
              <label className="block text-slate-400 font-semibold mb-1">Received Quantity (pcs) *</label>
              <input
                type="number"
                value={grnQty}
                onChange={(e) => setGrnQty(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 font-bold"
              />
            </div>
          </div>

          <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-800/60 text-slate-300 text-[11px]">
            ⚡ <strong>Stock Ledger Rule:</strong> Only physically inspected and received quantities enter active warehouse stock. A formal GRN document and immutable ledger record will be generated automatically.
          </div>
        </div>
      </Modal>

      {/* Stock Transfer Modal */}
      <Modal
        isOpen={isTransferModalOpen}
        onClose={() => setIsTransferModalOpen(false)}
        title="Inter-Warehouse Stock Transfer"
        footer={
          <>
            <button
              onClick={() => setIsTransferModalOpen(false)}
              className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsTransferModalOpen(false)}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
            >
              Authorize Transfer
            </button>
          </>
        }
      >
        <div className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 font-semibold mb-1">From Warehouse (Origin)</label>
              <select className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200">
                <option value="Main Warehouse (Tejgaon)">Main Warehouse (Tejgaon)</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-400 font-semibold mb-1">To Warehouse (Destination)</label>
              <select className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200">
                <option value="Project Store (Site Depot)">Project Store (Site Depot)</option>
                <option value="Office Store (Banani)">Office Store (Banani)</option>
                <option value="Showroom (Gulshan)">Showroom (Gulshan)</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-slate-400 font-semibold mb-1">Transfer Quantity (pcs)</label>
            <input type="number" defaultValue="5" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200" />
          </div>
        </div>
      </Modal>
    </div>
  );
}
