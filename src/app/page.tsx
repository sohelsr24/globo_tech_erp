'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { UserRole, hasPermission } from '@/lib/permissions';

// Modules
import { DashboardView } from '@/components/modules/DashboardView';
import { ProductsView } from '@/components/modules/ProductsView';
import { ImportsView } from '@/components/modules/ImportsView';
import { StockView } from '@/components/modules/StockView';
import { SerialsView } from '@/components/modules/SerialsView';
import { SalesView } from '@/components/modules/SalesView';
import { ProjectsView } from '@/components/modules/ProjectsView';
import { CustomersView } from '@/components/modules/CustomersView';
import { SuppliersView } from '@/components/modules/SuppliersView';
import { ReportsView } from '@/components/modules/ReportsView';
import { SettingsView } from '@/components/modules/SettingsView';
import { QuotationView } from '@/components/modules/QuotationView';

import { ShieldAlert, Lock } from 'lucide-react';

export default function AppHome() {
  const [currentTab, setCurrentTab] = useState<string>('dashboard');
  const [currentRole, setCurrentRole] = useState<UserRole>('SUPER_ADMIN');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterLowStock, setFilterLowStock] = useState<boolean>(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Low stock badge count (from initial catalog)
  const lowStockCount = 2;

  const handleLowStockClick = () => {
    setCurrentTab('products');
    setFilterLowStock(true);
  };

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    if (tab !== 'products') {
      setFilterLowStock(false);
    }
  };

  // Get tab metadata
  const getTabInfo = () => {
    switch (currentTab) {
      case 'dashboard':
        return {
          title: 'Executive ERP Overview',
          desc: 'Real-time KPIs, verified China import lifecycle, and profit & loss summary'
        };
      case 'products':
        return {
          title: 'Products & Multi-Tier Pricing',
          desc: 'Retail, Wholesale, Corporate/Project, and Dealer pricing with China Landed Cost'
        };
      case 'imports':
        return {
          title: 'China Imports & Customs Costing',
          desc: 'Proforma Invoices, Chittagong Port duty, freight allocation, and Landed Cost calculation'
        };
      case 'stock':
        return {
          title: 'Warehouse Stock & Goods Receiving',
          desc: 'GRN inspection, bin allocations, inter-warehouse transfers, and immutable stock ledger'
        };
      case 'serials':
        return {
          title: 'Serial Numbers & Warranty Tracking',
          desc: 'End-to-end device audit: In Stock &rarr; Sold &rarr; Installed &rarr; RMA'
        };
      case 'quotation':
        return {
          title: 'Enterprise Quotations & Tenders',
          desc: 'Product, Service, Custom Project, and Freight tender management with dynamic free-stock validation'
        };
      case 'sales':
        return {
          title: 'Sales, Invoicing & Delivery Challans',
          desc: 'Quotations, A4 Tax Invoices, Delivery Challans, and customer payment collections'
        };
      case 'projects':
        return {
          title: 'Installation Projects & Field Service',
          desc: 'Project milestones, warehouse material issues at Landed Cost, and technician labor'
        };
      case 'customers':
        return {
          title: 'Customer Directory & Credit Limits',
          desc: 'Corporate accounts, wholesale dealers, BIN tax numbers, and receivable dues'
        };
      case 'suppliers':
        return {
          title: 'China & International Suppliers',
          desc: 'Shenzhen/Guangzhou factory contacts, WeChat IDs, and foreign TT banking instructions'
        };
      case 'reports':
        return {
          title: 'P&L, Cash Flow & Inventory Valuation',
          desc: 'Financial statements, import cash flow analysis, and warehouse asset valuation'
        };
      case 'settings':
        return {
          title: 'System Configuration & Forex Pegs',
          desc: 'CNY/USD to BDT exchange rates, costing allocation rules, and 8-role security matrix'
        };
      default:
        return { title: 'Apex Enterprise ERP', desc: 'Enterprise ERP System' };
    }
  };

  // Check role permission for current module
  const getModuleForTab = (tab: string) => {
    switch (tab) {
      case 'dashboard': return 'DASHBOARD';
      case 'products': return 'PRODUCTS';
      case 'imports': return 'IMPORTS';
      case 'stock': return 'STOCK';
      case 'serials': return 'STOCK';
      case 'quotation': return 'QUOTATIONS';
      case 'sales': return 'SALES';
      case 'projects': return 'PROJECTS';
      case 'customers': return 'SALES';
      case 'suppliers': return 'IMPORTS';
      case 'reports': return 'REPORTS';
      case 'settings': return 'SETTINGS';
      default: return 'DASHBOARD';
    }
  };

  const isPermitted = hasPermission(currentRole, getModuleForTab(currentTab) as any, 'canView');
  const canViewCosts = hasPermission(currentRole, getModuleForTab(currentTab) as any, 'canViewCosts');

  const { title, desc } = getTabInfo();

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Fixed Left Navigation Sidebar */}
      <Sidebar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        lowStockCount={lowStockCount}
        currentRole={currentRole}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Global Header */}
        <Header
          title={title}
          description={desc}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          lowStockCount={lowStockCount}
          onLowStockClick={handleLowStockClick}
          currentRole={currentRole}
          onRoleChange={setCurrentRole}
          theme={theme}
          onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />

        {/* Viewport Content */}
        <main className="flex-1 p-6 overflow-y-auto max-w-7xl w-full mx-auto">
          {!isPermitted ? (
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-4 max-w-lg mx-auto mt-16 shadow-2xl">
              <div className="w-12 h-12 rounded-full bg-rose-950/80 border border-rose-800 flex items-center justify-center mx-auto text-rose-400">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-100">Restricted Module Access</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Your currently simulated role (<span className="text-blue-400 font-semibold">{currentRole.replace(/_/g, ' ')}</span>) does not have authorization to view this module.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setCurrentTab('dashboard')}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          ) : (
            <>
              {currentTab === 'dashboard' && (
                <DashboardView
                  onNavigateTab={(t) => setCurrentTab(t)}
                  canViewCosts={canViewCosts}
                />
              )}
              {currentTab === 'products' && (
                <ProductsView
                  canViewCosts={canViewCosts}
                  filterLowStock={filterLowStock}
                />
              )}
              {currentTab === 'imports' && <ImportsView />}
              {currentTab === 'stock' && <StockView />}
              {currentTab === 'serials' && <SerialsView />}
              {currentTab === 'quotation' && <QuotationView />}
              {currentTab === 'sales' && <SalesView />}
              {currentTab === 'projects' && <ProjectsView />}
              {currentTab === 'customers' && <CustomersView />}
              {currentTab === 'suppliers' && <SuppliersView />}
              {currentTab === 'reports' && <ReportsView />}
              {currentTab === 'settings' && <SettingsView />}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
