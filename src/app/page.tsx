'use client';

import React, { useState, useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { UserRole, hasPermission } from '@/lib/permissions';
import { LoginView } from '@/components/auth/LoginView';

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
import { GLOBO_TECH_LOGO_DATA_URL } from '@/lib/brandAssets';

export default function AppHome() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(true);
  const [user, setUser] = useState<{ email: string; name: string; role: string } | null>(null);

  const [currentTab, setCurrentTab] = useState<string>('dashboard');
  const [currentRole, setCurrentRole] = useState<UserRole>('SUPER_ADMIN');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterLowStock, setFilterLowStock] = useState<boolean>(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Verify authentication on mount from browser storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('apex_erp_session') || sessionStorage.getItem('apex_erp_session');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.email) {
          setUser(parsed);
          setIsAuthenticated(true);
        }
      }
    } catch (e) {
      console.error('Session load error:', e);
    } finally {
      setIsCheckingAuth(false);
    }
  }, []);

  const handleLoginSuccess = (userData: { email: string; name: string; role: string }) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('apex_erp_session');
      sessionStorage.removeItem('apex_erp_session');
    } catch (e) {}
    setUser(null);
    setIsAuthenticated(false);
    setCurrentTab('dashboard');
    setIsMobileMenuOpen(false);
  };

  // Low stock badge count (from initial catalog)
  const lowStockCount = 2;

  const handleLowStockClick = () => {
    setCurrentTab('products');
    setFilterLowStock(true);
    setIsMobileMenuOpen(false);
  };

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    if (tab !== 'products') {
      setFilterLowStock(false);
    }
    setIsMobileMenuOpen(false);
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
        return { title: 'Globo Tech ERP', desc: 'Enterprise ERP System' };
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

  // 1. Initial auth verification loading state (prevents flash of login screen)
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-100 selection:bg-blue-600">
        <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2.5 shadow-xl shadow-sky-600/30 ring-4 ring-slate-900 mb-4 animate-pulse">
          <img
            src={GLOBO_TECH_LOGO_DATA_URL}
            alt="Globo Tech"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-32 h-1 bg-slate-800 rounded-full overflow-hidden mt-2">
          <div className="w-full h-full bg-sky-500 rounded-full animate-indeterminate" />
        </div>
        <p className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase mt-3">
          Loading Globo Tech ERP...
        </p>
      </div>
    );
  }

  // 2. Unauthenticated state -> render Login View
  if (!isAuthenticated) {
    return <LoginView onLoginSuccess={handleLoginSuccess} />;
  }

  // 3. Authenticated state -> render ERP Dashboard & Modules
  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex relative ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Responsive Navigation Sidebar (Drawer on mobile, fixed column on desktop) */}
      <Sidebar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        lowStockCount={lowStockCount}
        currentRole={currentRole}
        onLogout={handleLogout}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
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
          onLogout={handleLogout}
          onToggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

        {/* Viewport Content */}
        <main className="flex-1 p-3 sm:p-4 md:p-6 pb-24 lg:pb-8 overflow-y-auto touch-scroll max-w-7xl w-full mx-auto">
          {!isPermitted ? (
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-4 max-w-lg mx-auto mt-12 sm:mt-16 shadow-2xl">
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

        {/* Mobile Quick Bottom Navigation */}
        <MobileBottomNav
          currentTab={currentTab}
          onSelectTab={handleSelectTab}
          lowStockCount={lowStockCount}
          onOpenMenu={() => setIsMobileMenuOpen(true)}
          isMenuOpen={isMobileMenuOpen}
        />
      </div>
    </div>
  );
}
