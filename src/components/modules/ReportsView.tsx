'use client';

import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Download,
  Printer,
  Calendar,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
  FileSpreadsheet,
  CheckCircle2,
  PieChart
} from 'lucide-react';
import { formatBDT, formatCompactBDT, formatDate } from '@/lib/formatters';
import { Badge } from '@/components/ui/Badge';

export function ReportsView() {
  const [activeTab, setActiveTab] = useState<'pnl' | 'cashflow' | 'valuation'>('pnl');
  const [dateRange, setDateRange] = useState('SEP_2026');

  // Section 47 & Live Aggregated Metrics
  const pnlData = {
    revenue: {
      retailSales: 450000, // 30 pcs @ 15,000
      wholesaleSales: 240000, // 20 pcs @ 12,000
      projectBillings: 150000, // Contract billing for Project 1
      totalRevenue: 840000
    },
    cogs: {
      retailCOGS: 300000, // 30 pcs @ 10,000 Landed Cost
      wholesaleCOGS: 200000, // 20 pcs @ 10,000 Landed Cost
      projectMaterialsCOGS: 100000, // 10 pcs @ 10,000 Landed Cost
      totalCOGS: 600000
    },
    grossProfit: 240000,
    grossMarginPercent: 28.57,
    expenses: [
      { category: 'Technician & Engineering Payroll', amount: 25000 },
      { category: 'Warehouse Utilities & Facility Rent', amount: 18000 },
      { category: 'Logistics, Port Transit & Fuel', amount: 9500 },
      { category: 'Marketing & Corporate Tendering', amount: 6200 },
      { category: 'Office Administration & Software', amount: 4800 }
    ],
    totalExpenses: 63500,
    netOperatingProfit: 176500,
    netMarginPercent: 21.01
  };

  const cashFlowData = {
    inflows: [
      { source: 'Dhaka Bank Ltd - Invoice Payment (INV-2026-001)', amount: 450000, date: '2026-09-12' },
      { source: 'TechVision Security - Wholesale Payment (INV-2026-002)', amount: 150000, date: '2026-09-16' },
      { source: 'Square Pharma - Project Advance Payment', amount: 100000, date: '2026-09-18' }
    ],
    totalInflow: 700000,
    outflows: [
      { item: 'Shenzhen Hikvision Tech - Proforma Invoice PO-2026-001 (50,000 CNY)', amount: 800000, date: '2026-09-02' },
      { item: 'NBR Customs & Tariff Duty (Chittagong C&F Agent)', amount: 140000, date: '2026-09-06' },
      { item: 'Ocean Freight & Insurance', amount: 45000, date: '2026-09-07' },
      { item: 'Local Transport (Chittagong Port to Dhaka)', amount: 15000, date: '2026-09-08' },
      { item: 'Monthly Payroll & Technician Labor', amount: 25000, date: '2026-09-20' },
      { item: 'Warehouse Rent & Maintenance', amount: 18000, date: '2026-09-21' }
    ],
    totalOutflow: 1043000,
    netCashPosition: -343000, // Typical during inventory import cycle
    openingBalance: 1200000,
    closingCashBalance: 857000
  };

  const valuationData = [
    {
      sku: 'HK-DS2CD2047G2',
      name: 'Hikvision 4MP ColorVu IP Camera',
      category: 'CCTV & Security',
      inStockQty: 40,
      unitLandedCost: 10000,
      totalValuation: 400000,
      warehouse: 'Dhaka Central Warehouse',
      method: 'FIFO / Actual Landed'
    },
    {
      sku: 'CS-C9300-24P-A',
      name: 'Cisco Catalyst 9300 24-Port Switch',
      category: 'Networking',
      inStockQty: 4,
      unitLandedCost: 345000,
      totalValuation: 1380000,
      warehouse: 'Dhaka Central Warehouse',
      method: 'FIFO / Actual Landed'
    },
    {
      sku: 'SG-SKY-10TB',
      name: 'Seagate SkyHawk 10TB Surveillance HDD',
      category: 'Storage',
      inStockQty: 18,
      unitLandedCost: 24500,
      totalValuation: 441000,
      warehouse: 'Dhaka Central Warehouse',
      method: 'Weighted Average'
    },
    {
      sku: 'TP-ARCH-AX73',
      name: 'TP-Link Archer AX73 Dual Band Router',
      category: 'Networking',
      inStockQty: 55,
      unitLandedCost: 8900,
      totalValuation: 489500,
      warehouse: 'Chittagong Port Transit Hub',
      method: 'Weighted Average'
    }
  ];

  const totalInventoryValue = valuationData.reduce((acc, item) => acc + item.totalValuation, 0);
  const totalStockUnits = valuationData.reduce((acc, item) => acc + item.inStockQty, 0);

  const handleExportCSV = (title: string) => {
    alert(`Exporting ${title} report as CSV spreadsheet for auditing.`);
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Range Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-400" />
            Financial & Inventory Reports
          </h2>
          <p className="text-xs text-slate-400">
            Compliant P&L accounting, China import cash flows, and warehouse valuation audits
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-300">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="bg-transparent font-medium focus:outline-none cursor-pointer text-slate-200"
            >
              <option value="SEP_2026" className="bg-slate-900">September 2026 (Current Period)</option>
              <option value="Q3_2026" className="bg-slate-900">Q3 2026 (Jul - Sep)</option>
              <option value="FY_2026_27" className="bg-slate-900">Fiscal Year 2026-2027</option>
            </select>
          </div>

          <button
            onClick={() => handleExportCSV(activeTab.toUpperCase())}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition shadow-md shadow-blue-500/20"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Report</span>
          </button>
        </div>
      </div>

      {/* Report Switcher Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('pnl')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
            activeTab === 'pnl'
              ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Profit & Loss Statement (P&L)</span>
        </button>

        <button
          onClick={() => setActiveTab('cashflow')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
            activeTab === 'cashflow'
              ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <DollarSign className="w-4 h-4" />
          <span>Cash Flow Statement</span>
        </button>

        <button
          onClick={() => setActiveTab('valuation')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
            activeTab === 'valuation'
              ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Warehouse Inventory Valuation</span>
        </button>
      </div>

      {/* TAB 1: PROFIT & LOSS STATEMENT */}
      {activeTab === 'pnl' && (
        <div className="space-y-6">
          {/* Highlights KPI Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400 font-medium">Gross Revenue</span>
              <p className="text-xl font-bold text-slate-100 mt-1">{formatBDT(pnlData.revenue.totalRevenue)}</p>
              <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-0.5">
                <ArrowUpRight className="w-3 h-3" /> Retail, Wholesale & Project
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400 font-medium">Cost of Goods Sold (COGS)</span>
              <p className="text-xl font-bold text-slate-100 mt-1">{formatBDT(pnlData.cogs.totalCOGS)}</p>
              <span className="text-[11px] text-slate-400">At exact imported Landed Cost</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400 font-medium">Gross Profit</span>
              <p className="text-xl font-bold text-blue-400 mt-1">{formatBDT(pnlData.grossProfit)}</p>
              <span className="text-[11px] text-blue-400 font-medium">{pnlData.grossMarginPercent}% gross margin</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400 font-medium">Net Operating Profit</span>
              <p className="text-xl font-bold text-emerald-400 mt-1">{formatBDT(pnlData.netOperatingProfit)}</p>
              <span className="text-[11px] text-emerald-400 font-medium">{pnlData.netMarginPercent}% net margin</span>
            </div>
          </div>

          {/* Detailed Statement Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg p-6 space-y-6">
            <div className="border-b border-slate-800 pb-4 flex justify-between items-end">
              <div>
                <h3 className="text-base font-bold text-slate-100">Apex Enterprise Bangladesh</h3>
                <p className="text-xs text-slate-400">P&L Income Statement &bull; Period: September 01 - September 30, 2026</p>
              </div>
              <Badge variant="success">Audited & Reconciled</Badge>
            </div>

            {/* Section 1: Revenue */}
            <div>
              <div className="flex justify-between items-center bg-slate-800/60 px-4 py-2 rounded-lg font-bold text-xs text-slate-200">
                <span>1. OPERATING REVENUE</span>
                <span>{formatBDT(pnlData.revenue.totalRevenue)}</span>
              </div>
              <div className="divide-y divide-slate-800/40 text-xs px-4 py-2">
                <div className="flex justify-between py-2 text-slate-300">
                  <span className="pl-4">Retail Sales (30 pcs Hikvision @ ৳15,000)</span>
                  <span>{formatBDT(pnlData.revenue.retailSales)}</span>
                </div>
                <div className="flex justify-between py-2 text-slate-300">
                  <span className="pl-4">Wholesale Channel Sales (20 pcs Hikvision @ ৳12,000)</span>
                  <span>{formatBDT(pnlData.revenue.wholesaleSales)}</span>
                </div>
                <div className="flex justify-between py-2 text-slate-300">
                  <span className="pl-4">Corporate & Project Installation Billings</span>
                  <span>{formatBDT(pnlData.revenue.projectBillings)}</span>
                </div>
              </div>
            </div>

            {/* Section 2: COGS */}
            <div>
              <div className="flex justify-between items-center bg-slate-800/60 px-4 py-2 rounded-lg font-bold text-xs text-rose-300">
                <span>2. COST OF GOODS SOLD (Landed Cost Basis)</span>
                <span>- {formatBDT(pnlData.cogs.totalCOGS)}</span>
              </div>
              <div className="divide-y divide-slate-800/40 text-xs px-4 py-2">
                <div className="flex justify-between py-2 text-slate-300">
                  <span className="pl-4">Retail Goods Landed Cost (30 pcs @ ৳10,000)</span>
                  <span className="text-rose-400">- {formatBDT(pnlData.cogs.retailCOGS)}</span>
                </div>
                <div className="flex justify-between py-2 text-slate-300">
                  <span className="pl-4">Wholesale Goods Landed Cost (20 pcs @ ৳10,000)</span>
                  <span className="text-rose-400">- {formatBDT(pnlData.cogs.wholesaleCOGS)}</span>
                </div>
                <div className="flex justify-between py-2 text-slate-300">
                  <span className="pl-4">Project Materials Issued (10 pcs @ ৳10,000)</span>
                  <span className="text-rose-400">- {formatBDT(pnlData.cogs.projectMaterialsCOGS)}</span>
                </div>
              </div>
            </div>

            {/* Subtotal: Gross Profit */}
            <div className="flex justify-between items-center bg-blue-950/40 border border-blue-900/60 px-4 py-3 rounded-lg font-bold text-sm text-blue-200">
              <span>GROSS PROFIT</span>
              <span>{formatBDT(pnlData.grossProfit)}</span>
            </div>

            {/* Section 3: Operating Expenses */}
            <div>
              <div className="flex justify-between items-center bg-slate-800/60 px-4 py-2 rounded-lg font-bold text-xs text-amber-300">
                <span>3. OPERATING & ADMINISTRATIVE EXPENSES</span>
                <span>- {formatBDT(pnlData.totalExpenses)}</span>
              </div>
              <div className="divide-y divide-slate-800/40 text-xs px-4 py-2">
                {pnlData.expenses.map((exp, idx) => (
                  <div key={idx} className="flex justify-between py-2 text-slate-300">
                    <span className="pl-4">{exp.category}</span>
                    <span className="text-slate-400">- {formatBDT(exp.amount)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Net Operating Profit */}
            <div className="flex justify-between items-center bg-emerald-950/40 border border-emerald-900/60 px-4 py-4 rounded-xl font-bold text-base text-emerald-300">
              <div>
                <span>NET OPERATING PROFIT</span>
                <span className="text-xs text-emerald-400/80 block font-normal">
                  Reflects complete China import cycle, warehouse handling & project execution
                </span>
              </div>
              <span className="text-lg">{formatBDT(pnlData.netOperatingProfit)}</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CASH FLOW STATEMENT */}
      {activeTab === 'cashflow' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400 font-medium">Opening Cash Balance</span>
              <p className="text-xl font-bold text-slate-200 mt-1">{formatBDT(cashFlowData.openingBalance)}</p>
              <span className="text-[11px] text-slate-500">Bank & Cash in Hand</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400 font-medium">Cash Collected</span>
              <p className="text-xl font-bold text-emerald-400 mt-1">{formatBDT(cashFlowData.totalInflow)}</p>
              <span className="text-[11px] text-emerald-400">Customer payments</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400 font-medium">Cash Disbursed</span>
              <p className="text-xl font-bold text-rose-400 mt-1">{formatBDT(cashFlowData.totalOutflow)}</p>
              <span className="text-[11px] text-rose-400">China TT + Customs duty</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400 font-medium">Closing Liquid Cash</span>
              <p className="text-xl font-bold text-blue-400 mt-1">{formatBDT(cashFlowData.closingCashBalance)}</p>
              <span className="text-[11px] text-blue-400 font-medium">Net available liquidity</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cash Inflows */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="font-bold text-sm text-emerald-400 flex items-center gap-2">
                  <ArrowDownRight className="w-4 h-4" />
                  Operating Cash Inflows
                </h3>
                <span className="font-mono font-bold text-emerald-400 text-xs">
                  {formatBDT(cashFlowData.totalInflow)}
                </span>
              </div>

              <div className="space-y-3">
                {cashFlowData.inflows.map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-800/40 rounded-lg flex items-center justify-between text-xs">
                    <div>
                      <p className="font-semibold text-slate-200">{item.source}</p>
                      <span className="text-[10px] text-slate-500 font-mono">{formatDate(item.date)}</span>
                    </div>
                    <span className="font-bold text-emerald-400">{formatBDT(item.amount)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cash Outflows */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="font-bold text-sm text-rose-400 flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4" />
                  Procurement & Operating Outflows
                </h3>
                <span className="font-mono font-bold text-rose-400 text-xs">
                  {formatBDT(cashFlowData.totalOutflow)}
                </span>
              </div>

              <div className="space-y-3">
                {cashFlowData.outflows.map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-800/40 rounded-lg flex items-center justify-between text-xs">
                    <div>
                      <p className="font-semibold text-slate-200">{item.item}</p>
                      <span className="text-[10px] text-slate-500 font-mono">{formatDate(item.date)}</span>
                    </div>
                    <span className="font-bold text-rose-400">- {formatBDT(item.amount)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: INVENTORY VALUATION */}
      {activeTab === 'valuation' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400 font-medium">Total Inventory Asset Value</span>
              <p className="text-2xl font-bold text-blue-400 mt-1">{formatBDT(totalInventoryValue)}</p>
              <span className="text-[11px] text-slate-400">At calculated imported Landed Cost</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400 font-medium">Stock On Hand (Physical)</span>
              <p className="text-2xl font-bold text-slate-100 mt-1">{totalStockUnits} Units</p>
              <span className="text-[11px] text-emerald-400">Across 2 Active Warehouses</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400 font-medium">Section 47 Audited Balance</span>
              <p className="text-2xl font-bold text-emerald-400 mt-1">40 Units / ৳400,000</p>
              <span className="text-[11px] text-emerald-400">Camera SKU 100% verified</span>
            </div>
          </div>

          {/* Valuation Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-800/40">
              <div>
                <h3 className="font-bold text-xs text-slate-200">Warehouse SKU Valuation Breakdown</h3>
                <p className="text-[11px] text-slate-400">Costing Method: Landed Cost (Purchase CNY + Proportional Freight & Customs Duty)</p>
              </div>
              <Badge variant="blue">Real-time Balance</Badge>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-800/80 text-slate-400 uppercase font-semibold border-b border-slate-800">
                  <tr>
                    <th className="px-4 py-3">Product & SKU</th>
                    <th className="px-4 py-3">Warehouse Location</th>
                    <th className="px-4 py-3">Method</th>
                    <th className="px-4 py-3 text-right">In-Stock Qty</th>
                    <th className="px-4 py-3 text-right">Landed Cost / Unit</th>
                    <th className="px-4 py-3 text-right">Total Valuation (BDT)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {valuationData.map((item) => (
                    <tr key={item.sku} className="hover:bg-slate-800/40 transition">
                      <td className="px-4 py-3">
                        <div className="font-semibold text-slate-100">{item.name}</div>
                        <div className="font-mono text-[11px] text-slate-400">{item.sku} &bull; {item.category}</div>
                      </td>
                      <td className="px-4 py-3 text-slate-300">{item.warehouse}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 border border-slate-700">
                          {item.method}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-slate-100">
                        {item.inStockQty}
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-slate-300">
                        {formatBDT(item.unitLandedCost)}
                      </td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-blue-400">
                        {formatBDT(item.totalValuation)}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-slate-800/80 font-bold">
                    <td colSpan={3} className="px-4 py-3 text-slate-200">
                      Total Warehouse Valuation
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-slate-100">{totalStockUnits}</td>
                    <td className="px-4 py-3 text-right text-slate-400">-</td>
                    <td className="px-4 py-3 text-right font-mono text-blue-400 text-sm">
                      {formatBDT(totalInventoryValue)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
