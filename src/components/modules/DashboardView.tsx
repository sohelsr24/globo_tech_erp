'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  Package,
  Ship,
  Warehouse,
  AlertTriangle,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Wrench,
  CheckCircle2
} from 'lucide-react';
import { StatCard } from '@/components/ui/StatCard';
import { Badge } from '@/components/ui/Badge';
import { Formatters } from '@/lib/formatters';

interface DashboardViewProps {
  onNavigateTab: (tab: string) => void;
  canViewCosts: boolean;
}

export function DashboardView({ onNavigateTab, canViewCosts }: DashboardViewProps) {
  const [dateFilter, setDateFilter] = useState<'today' | 'this_week' | 'this_month' | 'this_year'>('this_month');

  // Realistic Metrics based on verified Scenario 47 and seed data
  const metrics = {
    totalProducts: 8,
    totalCategories: 4,
    totalStockQty: 184,
    totalStockValue: 1840000,
    lowStockItems: 2,
    outOfStockItems: 0,
    todaysSales: 45000,
    thisMonthSales: 720000,
    retailSales: 450000,
    wholesaleSales: 270000,
    projectSales: 0,
    installationRevenue: 450000,
    purchaseAmountCNY: 50000,
    importAmountBDT: 1000000,
    customerReceivable: 42000,
    supplierPayable: 160000,
    grossProfit: 220000,
    netProfit: 143200,
  };

  return (
    <div className="space-y-6">
      {/* Date Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase text-slate-400">Date Range:</span>
          {(['today', 'this_week', 'this_month', 'this_year'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setDateFilter(filter)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition ${
                dateFilter === filter
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {filter.replace('_', ' ')}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigateTab('imports')}
            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition flex items-center gap-1.5"
          >
            <Ship className="w-3.5 h-3.5" />
            <span>New China Import</span>
          </button>
          <button
            onClick={() => onNavigateTab('sales')}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition flex items-center gap-1.5"
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>Create Invoice</span>
          </button>
        </div>
      </div>

      {/* Top Financial & Operational KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="This Month Sales"
          value={Formatters.currency(metrics.thisMonthSales)}
          subtext="50 units delivered"
          subtextColor="text-emerald-400"
          icon={<TrendingUp className="w-5 h-5" />}
          accentColor="success"
        />

        <StatCard
          label="Gross Profit (Real Landed Cost)"
          value={canViewCosts ? Formatters.currency(metrics.grossProfit) : 'Confidential'}
          subtext="Margin: 30.5%"
          subtextColor="text-blue-400"
          icon={<DollarSign className="w-5 h-5" />}
          accentColor="primary"
        />

        <StatCard
          label="Customer Receivables (Due)"
          value={Formatters.currency(metrics.customerReceivable)}
          subtext="Pending collections"
          subtextColor="text-rose-400"
          icon={<ArrowDownRight className="w-5 h-5" />}
          accentColor="danger"
        />

        <StatCard
          label="Total Inventory Valuation"
          value={canViewCosts ? Formatters.compactCurrency(metrics.totalStockValue) : '184 Units'}
          subtext="Based on actual landed cost"
          subtextColor="text-cyan-400"
          icon={<Warehouse className="w-5 h-5" />}
          accentColor="cyan"
        />
      </div>

      {/* Operational Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Retail Sales"
          value={Formatters.currency(metrics.retailSales)}
          subtext="30 units sold"
          icon={<Package className="w-4 h-4" />}
          accentColor="primary"
        />
        <StatCard
          label="Wholesale Sales"
          value={Formatters.currency(metrics.wholesaleSales)}
          subtext="20 units sold"
          icon={<Package className="w-4 h-4" />}
          accentColor="cyan"
        />
        <StatCard
          label="China Import Shipments"
          value={canViewCosts ? Formatters.currency(metrics.importAmountBDT) : 'Active Imports'}
          subtext="IMP-2026-001 (100 units)"
          icon={<Ship className="w-4 h-4" />}
          accentColor="warning"
        />
        <StatCard
          label="Active Installation Projects"
          value="1 Ongoing"
          subtext="ABC Bank CCTV Modernization"
          icon={<Wrench className="w-4 h-4" />}
          accentColor="purple"
        />
      </div>

      {/* Charts & Visual Breakdowns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales by Type & Channel */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <h3 className="text-sm font-bold text-slate-100 flex items-center justify-between">
            <span>Sales Revenue Distribution</span>
            <span className="text-xs font-normal text-slate-400">Total: {Formatters.currency(metrics.thisMonthSales)}</span>
          </h3>

          <div className="space-y-3 pt-2">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-blue-400">Retail Sales (4MP Dome Cameras)</span>
                <span className="text-slate-200">BDT 450,000 (62.5%)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '62.5%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-cyan-400">Wholesale Sales (Corporate B2B)</span>
                <span className="text-slate-200">BDT 270,000 (37.5%)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-cyan-500 rounded-full" style={{ width: '37.5%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-purple-400">Project Supply & Installation</span>
                <span className="text-slate-200">BDT 450,000 (Contract Value)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* China Import & Landed Cost Breakdown */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4 lg:col-span-2">
          <h3 className="text-sm font-bold text-slate-100 flex items-center justify-between">
            <span>China Import Landed Cost Allocation (Verified Scenario 47)</span>
            <Badge variant="success">Fully Reconciled</Badge>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
              <span className="text-[11px] text-slate-400 block">Purchase Cost</span>
              <span className="text-sm font-bold text-slate-100">BDT 800,000</span>
              <span className="text-[10px] text-blue-400 block mt-0.5">500 CNY @ 16 BDT</span>
            </div>
            <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
              <span className="text-[11px] text-slate-400 block">Shipping & Duties</span>
              <span className="text-sm font-bold text-amber-400">BDT 200,000</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Freight, Tax, C&F</span>
            </div>
            <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
              <span className="text-[11px] text-slate-400 block">Total Landed Cost</span>
              <span className="text-sm font-bold text-emerald-400">BDT 1,000,000</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">100 units imported</span>
            </div>
            <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
              <span className="text-[11px] text-slate-400 block">Unit Landed Cost</span>
              <span className="text-sm font-bold text-blue-400">BDT 10,000 / pc</span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">Exact Landed Base</span>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-3">
            <h4 className="text-xs font-semibold text-slate-300 mb-2">Inventory Stock Lifecycle:</h4>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300">Total Imported: <strong>100 pcs</strong></span>
              <span className="text-slate-500">➔</span>
              <span className="px-2.5 py-1 rounded bg-blue-950 text-blue-300 border border-blue-800">Retail Sold: <strong>30 pcs</strong></span>
              <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">Wholesale Sold: <strong>20 pcs</strong></span>
              <span className="px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-800">Project Used: <strong>10 pcs</strong></span>
              <span className="text-slate-500">➔</span>
              <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">Remaining Available Stock: 40 pcs (BDT 400,000)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Invoices & Project Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Invoices */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <div className="px-5 py-3.5 border-b border-slate-800 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-100">Recent Sales Invoices</h3>
            <button
              onClick={() => onNavigateTab('sales')}
              className="text-xs text-blue-400 hover:underline"
            >
              View All Invoices &rarr;
            </button>
          </div>
          <div className="divide-y divide-slate-800">
            <div className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-200">INV-2026-9001</span>
                <p className="text-xs text-slate-400">ABC Bank PLC &bull; 30 pcs CCTV (Retail)</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-slate-200">BDT 450,000</span>
                <div><Badge variant="success">Paid</Badge></div>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-200">INV-2026-9002</span>
                <p className="text-xs text-slate-400">Beximco Industrial Fabrics &bull; 20 pcs CCTV (Wholesale)</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-slate-200">BDT 270,000</span>
                <div><Badge variant="warning">Due: BDT 42,000</Badge></div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Projects */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <div className="px-5 py-3.5 border-b border-slate-800 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-100">Installation & Service Projects</h3>
            <button
              onClick={() => onNavigateTab('projects')}
              className="text-xs text-blue-400 hover:underline"
            >
              View Projects &rarr;
            </button>
          </div>
          <div className="p-4 space-y-3">
            <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-200">PRJ-2026-001: ABC Bank Security Modernization</span>
                <Badge variant="info">In Progress</Badge>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-400">
                <div>Contract: <strong className="text-slate-200">BDT 450,000</strong></div>
                <div>Material Cost: <strong className="text-purple-400">BDT 100,000</strong></div>
                <div>Project Profit: <strong className="text-emerald-400">BDT 305,000</strong></div>
              </div>
              <div className="text-[11px] text-slate-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>10 pcs CCTV Cameras issued & installed on site</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
