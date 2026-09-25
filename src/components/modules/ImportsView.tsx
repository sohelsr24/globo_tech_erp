'use client';

import React, { useState } from 'react';
import { Ship, Plus, Calculator, CheckCircle2, ArrowRight, DollarSign } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Formatters } from '@/lib/formatters';

interface CostLineItem {
  id: string;
  costType: string;
  name: string;
  amountBDT: number;
}

interface ImportShipmentRecord {
  id: string;
  importNumber: string;
  supplierName: string;
  commercialInvoiceNo: string;
  blAwbNo: string;
  shippingMethod: 'AIR' | 'SEA' | 'COURIER';
  containerNo: string;
  portOfLoading: string;
  portOfDestination: string;
  clearingAgent: string;
  status: string;
  orderedQty: number;
  productName: string;
  purchasePriceCNY: number;
  exchangeRate: number;
  productPurchaseCostBDT: number;
  costItems: CostLineItem[];
  allocationMethod: 'BY_QUANTITY' | 'BY_VALUE' | 'BY_WEIGHT';
  finalLandedCostBDT: number;
  unitLandedCostBDT: number;
  isReceived: boolean;
}

const INITIAL_IMPORTS: ImportShipmentRecord[] = [
  {
    id: 'IMP-001',
    importNumber: 'IMP-2026-001',
    supplierName: 'China Supplier A (Shenzhen Hikvision Security Tech Co.)',
    commercialInvoiceNo: 'CI-HIK-2026-8812',
    blAwbNo: 'OOCL-SHA-992144',
    shippingMethod: 'SEA',
    containerNo: 'TGHU-991204-1',
    portOfLoading: 'Shenzhen / Shekou Port',
    portOfDestination: 'Chattogram Port, Bangladesh',
    clearingAgent: 'Bengal Logistics & C&F Services Ltd.',
    status: 'RECEIVED',
    orderedQty: 100,
    productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    purchasePriceCNY: 500,
    exchangeRate: 16.0,
    productPurchaseCostBDT: 800000,
    costItems: [
      { id: 'c1', costType: 'FREIGHT', name: 'International Sea Freight', amountBDT: 60000 },
      { id: 'c2', costType: 'CUSTOMS_DUTY', name: 'Customs & Regulatory Duty', amountBDT: 100000 },
      { id: 'c3', costType: 'CF_CHARGE', name: 'C&F Clearing Charge', amountBDT: 20000 },
      { id: 'c4', costType: 'LOCAL_TRANSPORT', name: 'Port to Warehouse Local Transport', amountBDT: 10000 },
      { id: 'c5', costType: 'OTHER', name: 'Port Documentation & Handling', amountBDT: 10000 },
    ],
    allocationMethod: 'BY_QUANTITY',
    finalLandedCostBDT: 1000000,
    unitLandedCostBDT: 10000,
    isReceived: true,
  },
  {
    id: 'IMP-002',
    importNumber: 'IMP-2026-002',
    supplierName: 'Guangzhou Fiber & Network Supply Co.',
    commercialInvoiceNo: 'CI-GZ-2026-4410',
    blAwbNo: 'CZ-AIR-8821039',
    shippingMethod: 'AIR',
    containerNo: 'AIR-PALLET-02',
    portOfLoading: 'Guangzhou Baiyun Airport',
    portOfDestination: 'Hazrat Shahjalal International Airport, Dhaka',
    clearingAgent: 'SkyFreight C&F Cargo Agency',
    status: 'CUSTOMS',
    orderedQty: 50,
    productName: 'TP-Link 24-Port Gigabit Managed PoE+ Switch',
    purchasePriceCNY: 1250,
    exchangeRate: 16.0,
    productPurchaseCostBDT: 1000000,
    costItems: [
      { id: 'c10', costType: 'FREIGHT', name: 'Air Freight Charge', amountBDT: 110000 },
      { id: 'c11', costType: 'CUSTOMS_DUTY', name: 'Customs Duty & AIT', amountBDT: 65000 },
      { id: 'c12', costType: 'CF_CHARGE', name: 'Airport C&F Clearing', amountBDT: 25000 },
    ],
    allocationMethod: 'BY_QUANTITY',
    finalLandedCostBDT: 1200000,
    unitLandedCostBDT: 24000,
    isReceived: false,
  }
];

export function ImportsView() {
  const [shipments, setShipments] = useState<ImportShipmentRecord[]>(INITIAL_IMPORTS);
  const [activeShipment, setActiveShipment] = useState<ImportShipmentRecord | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  // New cost item state
  const [newCostName, setNewCostName] = useState('');
  const [newCostType, setNewCostType] = useState('CUSTOMS_DUTY');
  const [newCostAmount, setNewCostAmount] = useState<number>(0);

  const openLandedCostModal = (shipment: ImportShipmentRecord) => {
    setActiveShipment({ ...shipment });
    setIsCalculatorOpen(true);
  };

  const handleAddCostComponent = () => {
    if (!activeShipment || !newCostName || !newCostAmount) return;
    const newItem: CostLineItem = {
      id: `c-${Date.now()}`,
      costType: newCostType,
      name: newCostName,
      amountBDT: Number(newCostAmount)
    };
    const updatedCosts = [...activeShipment.costItems, newItem];
    const totalAdditional = updatedCosts.reduce((sum, c) => sum + c.amountBDT, 0);
    const totalLanded = activeShipment.productPurchaseCostBDT + totalAdditional;
    const unitLanded = totalLanded / activeShipment.orderedQty;

    setActiveShipment({
      ...activeShipment,
      costItems: updatedCosts,
      finalLandedCostBDT: totalLanded,
      unitLandedCostBDT: Math.round(unitLanded)
    });

    setNewCostName('');
    setNewCostAmount(0);
  };

  const handleSaveLandedCost = () => {
    if (!activeShipment) return;
    setShipments(
      shipments.map((s) => (s.id === activeShipment.id ? activeShipment : s))
    );
    setIsCalculatorOpen(false);
  };

  return (
    <div className="space-y-5">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900 border border-slate-800 rounded-xl p-3 sm:p-3.5">
        <div>
          <h2 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <Ship className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span>China Import Shipments & Real Landed Cost Tracking</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Track foreign purchase currency, sea/air shipping, customs duties, and true unit landed cost.
          </p>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          <Badge variant="info">Currency: CNY (¥)</Badge>
          <Badge variant="success">FX: 1 CNY = 16.0 BDT</Badge>
        </div>
      </div>

      {/* Shipments Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="sm:hidden px-3 py-2 bg-slate-800/40 border-b border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>👉 Swipe table horizontally for full logistics & customs</span>
          <span className="font-semibold text-slate-300">{shipments.length} imports</span>
        </div>
        <div className="overflow-x-auto touch-scroll">
          <table className="w-full text-left text-xs min-w-[850px]">
            <thead className="bg-slate-800/80 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Import # / BL</th>
                <th className="py-3 px-4">Supplier & Method</th>
                <th className="py-3 px-4">Product & Quantity</th>
                <th className="py-3 px-4 text-right">Purchase Cost (BDT)</th>
                <th className="py-3 px-4 text-right">Duties & Shipping</th>
                <th className="py-3 px-4 text-right">Total Landed Cost</th>
                <th className="py-3 px-4 text-right">Unit Landed Cost</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {shipments.map((s) => {
                const totalAdditional = s.costItems.reduce((acc, c) => acc + c.amountBDT, 0);

                let badgeVariant: 'success' | 'warning' | 'info' | 'purple' = 'info';
                if (s.status === 'RECEIVED') badgeVariant = 'success';
                else if (s.status === 'CUSTOMS') badgeVariant = 'warning';
                else if (s.status === 'IN_TRANSIT') badgeVariant = 'purple';

                return (
                  <tr key={s.id} className="hover:bg-slate-800/40 transition">
                    <td className="py-3 px-4">
                      <div className="font-bold text-blue-400 font-mono">{s.importNumber}</div>
                      <div className="text-[10px] text-slate-400">BL/AWB: {s.blAwbNo}</div>
                      <div className="text-[10px] text-slate-500">Cont: {s.containerNo}</div>
                    </td>
                    <td className="py-3 px-4 max-w-xs">
                      <div className="font-semibold text-slate-200">{s.supplierName}</div>
                      <div className="text-[10px] text-slate-400">
                        Method: <strong className="text-slate-300">{s.shippingMethod}</strong> &bull; {s.portOfLoading} &rarr; {s.portOfDestination}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-slate-100">{s.productName}</div>
                      <div className="text-[10px] text-slate-400">
                        Qty: <strong>{s.orderedQty} pcs</strong> &bull; ¥ {s.purchasePriceCNY.toLocaleString()} (FX: {s.exchangeRate})
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right font-medium">
                      {Formatters.currency(s.productPurchaseCostBDT)}
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-amber-400">
                      {Formatters.currency(totalAdditional)}
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-slate-100">
                      {Formatters.currency(s.finalLandedCostBDT)}
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-blue-400 text-sm">
                      {Formatters.currency(s.unitLandedCostBDT)} / pc
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Badge variant={badgeVariant}>{s.status}</Badge>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => openLandedCostModal(s)}
                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-blue-400 font-semibold text-xs transition flex items-center gap-1 mx-auto"
                      >
                        <Calculator className="w-3.5 h-3.5" />
                        <span>Landed Cost</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Landed Cost Engine Modal */}
      {activeShipment && (
        <Modal
          isOpen={isCalculatorOpen}
          onClose={() => setIsCalculatorOpen(false)}
          title={`Landed Cost Calculator: ${activeShipment.importNumber}`}
          maxWidth="4xl"
          footer={
            <>
              <button
                onClick={() => setIsCalculatorOpen(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold"
              >
                Close
              </button>
              <button
                onClick={handleSaveLandedCost}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
              >
                Apply & Save Landed Cost
              </button>
            </>
          }
        >
          <div className="space-y-5 text-xs">
            {/* Purchase Baseline Card */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 bg-slate-800/60 p-4 rounded-xl border border-slate-700">
              <div>
                <span className="text-slate-400 font-medium block">Imported Product</span>
                <span className="text-slate-100 font-bold text-sm block mt-0.5">{activeShipment.productName}</span>
                <span className="text-slate-400 text-[11px]">Quantity: <strong>{activeShipment.orderedQty} pcs</strong></span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Supplier Price (CNY)</span>
                <span className="text-slate-100 font-bold text-sm block mt-0.5">¥ {activeShipment.purchasePriceCNY.toLocaleString()}</span>
                <span className="text-slate-400 text-[11px]">Original foreign cost</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Exchange Rate</span>
                <span className="text-slate-100 font-bold text-sm block mt-0.5">1 CNY = {activeShipment.exchangeRate} BDT</span>
                <span className="text-slate-400 text-[11px]">Commercial Bank FX</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Baseline Purchase (BDT)</span>
                <span className="text-blue-400 font-bold text-sm block mt-0.5">{Formatters.currency(activeShipment.productPurchaseCostBDT)}</span>
                <span className="text-slate-400 text-[11px]">BDT 8,000 / unit</span>
              </div>
            </div>

            {/* Additional Import Cost Items Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-100 uppercase tracking-wider text-xs">
                  Additional Import Overhead Costs (Freight, Customs, Port & C&F)
                </h4>
                <div className="text-xs text-amber-400 font-semibold">
                  Total Overhead: {Formatters.currency(activeShipment.costItems.reduce((acc, c) => acc + c.amountBDT, 0))}
                </div>
              </div>

              <div className="border border-slate-800 rounded-lg overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-slate-800/80 text-slate-400 uppercase text-[10px]">
                    <tr>
                      <th className="py-2.5 px-3">Cost Category</th>
                      <th className="py-2.5 px-3">Description</th>
                      <th className="py-2.5 px-3 text-right">Amount (BDT)</th>
                      <th className="py-2.5 px-3 text-right">Per Unit Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-200">
                    {activeShipment.costItems.map((cost) => (
                      <tr key={cost.id}>
                        <td className="py-2 px-3 font-semibold text-slate-300">{cost.costType}</td>
                        <td className="py-2 px-3">{cost.name}</td>
                        <td className="py-2 px-3 text-right font-medium text-slate-100">
                          {Formatters.currency(cost.amountBDT)}
                        </td>
                        <td className="py-2 px-3 text-right text-slate-400 font-mono">
                          +{Formatters.currency(cost.amountBDT / activeShipment.orderedQty)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Add New Cost Component Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 bg-slate-800/40 p-3 rounded-lg border border-slate-700/60">
                <select
                  value={newCostType}
                  onChange={(e) => setNewCostType(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs"
                >
                  <option value="FREIGHT">International Freight</option>
                  <option value="CUSTOMS_DUTY">Customs / Regulatory Duty</option>
                  <option value="VAT_AIT">VAT / AIT / AT</option>
                  <option value="CF_CHARGE">C&F Clearing Agent</option>
                  <option value="LOCAL_TRANSPORT">Local Transport</option>
                  <option value="PORT_CHARGE">Port Documentation</option>
                  <option value="OTHER">Other Import Costs</option>
                </select>

                <input
                  type="text"
                  placeholder="Cost description / voucher..."
                  value={newCostName}
                  onChange={(e) => setNewCostName(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs sm:col-span-2"
                />

                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Amount BDT"
                    value={newCostAmount || ''}
                    onChange={(e) => setNewCostAmount(Number(e.target.value))}
                    className="bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs w-full"
                  />
                  <button
                    onClick={handleAddCostComponent}
                    className="px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* Final Reconciliation Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-blue-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300">Final Landed Cost Result</span>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Original Purchase ({Formatters.currency(activeShipment.productPurchaseCostBDT)}) + Overheads ({Formatters.currency(activeShipment.costItems.reduce((acc, c) => acc + c.amountBDT, 0))})
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-400 block">Unit Landed Cost</span>
                <span className="text-2xl font-extrabold text-blue-400">
                  {Formatters.currency(activeShipment.unitLandedCostBDT)} <span className="text-xs font-normal text-slate-300">/ pc</span>
                </span>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
