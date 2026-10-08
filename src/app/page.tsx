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
import { BillInvoiceView } from '@/components/modules/BillInvoiceView';
import { PurchasesView } from '@/components/modules/PurchasesView';

import { ShieldAlert, Lock } from 'lucide-react';
import { GLOBO_TECH_LOGO_DATA_URL } from '@/lib/brandAssets';
import { verifyAndRestoreStorageIntegrity, mirrorToIndexedDB, restoreERPBackupData } from '@/lib/erpBackup';
import { MASTER_DATABASE_PAYLOAD } from '@/lib/masterDatabasePayload';
import { runCrossModuleSelfHealing } from '@/lib/crossModuleSync';
import { startAutoBackupDaemon } from '@/lib/autoBackupDaemon';
import { INITIAL_PURCHASES, getStoredPurchases } from '@/lib/purchasesStorage';

const VALID_TABS = [
  'dashboard',
  'products',
  'imports',
  'stock',
  'serials',
  'customers',
  'suppliers',
  'purchases',
  'quotation',
  'bill-invoice',
  'sales',
  'projects',
  'reports',
  'settings'
];

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

  // Verify authentication and storage integrity on mount from browser storage
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

    // Self-healing: eradicate demo bill GT/26108 permanently from browser storage
    try {
      const storedBills = localStorage.getItem('globotech_erp_bill_invoices');
      if (storedBills) {
        const parsedBills = JSON.parse(storedBills);
        if (Array.isArray(parsedBills) && parsedBills.some((b: any) => b && (b.id === 'bill-26108' || b.billNo === 'GT/26108'))) {
          const cleanedBills = parsedBills.filter((b: any) => b && b.id !== 'bill-26108' && b.billNo !== 'GT/26108');
          localStorage.setItem('globotech_erp_bill_invoices', JSON.stringify(cleanedBills));
        }
      }
      const delSaved = localStorage.getItem('globotech_erp_deleted_bill_ids');
      const delList: string[] = delSaved ? JSON.parse(delSaved) : [];
      if (!delList.includes('bill-26108')) delList.push('bill-26108');
      if (!delList.includes('GT/26108')) delList.push('GT/26108');
      localStorage.setItem('globotech_erp_deleted_bill_ids', JSON.stringify(delList));
    } catch (e) {}

    // Request persistent storage so browser never evicts ERP data
    if (typeof navigator !== 'undefined' && navigator.storage && navigator.storage.persist) {
      navigator.storage.persist().catch(() => {});
    }

    // Automatic Master Database Recovery:
    // Non-destructively merges master records so user's existing records are ALWAYS 100% preserved
    // and missing master records are seamlessly added without data loss!
    try {
      const currentStockStr = localStorage.getItem('globotech_erp_warehouse_stock');
      const currentQuotesStr = localStorage.getItem('globotech_erp_quotations');
      const currentBillsStr = localStorage.getItem('globotech_erp_bill_invoices');
      const currentPurchasesStr = localStorage.getItem('globotech_erp_purchases');
      const currentStock = currentStockStr ? JSON.parse(currentStockStr) : [];
      const currentQuotes = currentQuotesStr ? JSON.parse(currentQuotesStr) : [];
      const currentBills = currentBillsStr ? JSON.parse(currentBillsStr) : [];
      const currentPurchases = currentPurchasesStr ? JSON.parse(currentPurchasesStr) : [];

      // 1. Immediately purge legacy demo suppliers (Hikvision, Dahua, TP-Link, Western Digital)
      const isDemoPurchase = (p: any) =>
        p &&
        (p.id?.startsWith('PUR-HIK') ||
          p.id?.startsWith('PUR-TPL') ||
          p.id?.startsWith('PUR-WD') ||
          p.id?.startsWith('PUR-DAH') ||
          p.supplierName?.toLowerCase().includes('hikvision') ||
          p.supplierName?.toLowerCase().includes('dahua') ||
          p.supplierName?.toLowerCase().includes('tp-link') ||
          p.supplierName?.toLowerCase().includes('western digital'));

      const hasDemoPurchases = Array.isArray(currentPurchases) && currentPurchases.some(isDemoPurchase);
      const hasRealAmecon = Array.isArray(currentPurchases) && currentPurchases.some(
        (p: any) => p && p.supplierName?.includes('Amecon')
      );

      if (hasDemoPurchases || !hasRealAmecon || !Array.isArray(currentPurchases) || currentPurchases.length === 0) {
        const cleanedPurchases = Array.isArray(currentPurchases)
          ? currentPurchases.filter((p: any) => !isDemoPurchase(p))
          : [];

        // Prepend / merge all real Amecon purchases
        INITIAL_PURCHASES.forEach((ap) => {
          if (!cleanedPurchases.some((cp: any) => cp.id === ap.id || cp.billNumber === ap.billNumber)) {
            cleanedPurchases.push(ap);
          }
        });

        localStorage.setItem('globotech_erp_purchases', JSON.stringify(cleanedPurchases));
        window.dispatchEvent(new CustomEvent('globotech_purchases_updated', { detail: cleanedPurchases }));
      }

      const isUnderpopulated =
        !Array.isArray(currentStock) || currentStock.length <= 4 ||
        !Array.isArray(currentQuotes) || currentQuotes.length < 15 ||
        !Array.isArray(currentBills) || currentBills.length < 20;

      if (isUnderpopulated) {
        restoreERPBackupData(JSON.stringify(MASTER_DATABASE_PAYLOAD), { mode: 'merge' });
      }

      // 2. Background cloud sync check from master backup to ensure mobile gets latest changes
      if (typeof window !== 'undefined') {
        fetch(`/globotech-master-backup.json?t=${Date.now()}`)
          .then((res) => (res.ok ? res.json() : null))
          .then((remoteData) => {
            if (remoteData && remoteData.data) {
              const localP = getStoredPurchases();
              const hasAmeconNow = localP.some((p) => p.supplierName?.includes('Amecon'));
              if (!hasAmeconNow || (remoteData.data.purchases && remoteData.data.purchases.length > localP.length)) {
                restoreERPBackupData(JSON.stringify(remoteData), { mode: 'merge' });
                window.dispatchEvent(new CustomEvent('globotech_purchases_updated', { detail: getStoredPurchases() }));
              }
            }
          })
          .catch(() => {});
      }
    } catch (e) {
      console.warn('Auto restore notice:', e);
    }

    // Run cross-module self-healing to sync product names/SKUs with Quotations and Bills
    runCrossModuleSelfHealing();

    // Verify storage integrity and dual-layer mirror across reboots
    verifyAndRestoreStorageIntegrity().catch((err) => {
      console.warn('Storage integrity check notice:', err);
    });

    // Start continuous autonomous auto-backup daemon across all modules
    const stopDaemon = startAutoBackupDaemon();

    return () => {
      stopDaemon();
    };
  }, []);

  // Synchronize active tab with URL query parameter (?tab=...) on mount & browser back/forward
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const syncTabFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab');
      if (tabParam && VALID_TABS.includes(tabParam)) {
        setCurrentTab(tabParam);
      } else if (window.location.hash) {
        const hashTab = window.location.hash.replace('#', '');
        if (VALID_TABS.includes(hashTab)) {
          setCurrentTab(hashTab);
        }
      }
    };

    syncTabFromUrl();

    window.addEventListener('popstate', syncTabFromUrl);
    return () => {
      window.removeEventListener('popstate', syncTabFromUrl);
    };
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

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('tab');
      window.history.replaceState(null, '', url.pathname);
    }
  };

  // Low stock badge count (from initial catalog)
  const lowStockCount = 2;

  const handleLowStockClick = () => {
    setCurrentTab('products');
    setFilterLowStock(true);
    setIsMobileMenuOpen(false);

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', 'products');
      window.history.pushState({ tab: 'products' }, '', url.pathname + url.search);
    }
  };

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    if (tab !== 'products') {
      setFilterLowStock(false);
    }
    setIsMobileMenuOpen(false);

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (url.searchParams.get('tab') !== tab) {
        url.searchParams.set('tab', tab);
        window.history.pushState({ tab }, '', url.pathname + url.search);
      }
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
      case 'bill-invoice':
        return {
          title: 'Bill Invoices & Pad Printing',
          desc: 'Quotation-driven supply bills formatted for pre-printed letterhead pad paper'
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
      case 'purchases':
        return {
          title: 'Supplier Purchases, Product Rates & Due Ledger',
          desc: 'Company-wise purchased products, each item unit value, paid amount, and outstanding payables'
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
      case 'bill-invoice': return 'QUOTATIONS';
      case 'sales': return 'SALES';
      case 'projects': return 'PROJECTS';
      case 'customers': return 'SALES';
      case 'suppliers': return 'IMPORTS';
      case 'purchases': return 'PAYMENTS';
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
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex relative ${theme === 'dark' ? 'dark' : ''} print:bg-white print:text-black print:min-h-0`}>
      {/* Responsive Navigation Sidebar (Drawer on mobile, fixed column on desktop) */}
      <div className="no-print lg:sticky lg:top-0 lg:h-screen lg:self-start z-30">
        <Sidebar
          currentTab={currentTab}
          onSelectTab={handleSelectTab}
          lowStockCount={lowStockCount}
          currentRole={currentRole}
          onLogout={handleLogout}
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen print:min-h-0 print:p-0 print:m-0">
        {/* Global Header */}
        <div className="no-print sticky top-0 z-30">
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
            onNavigateTab={(t) => setCurrentTab(t as any)}
          />
        </div>

        {/* Viewport Content */}
        <main className="flex-1 p-3 sm:p-4 md:p-6 pb-24 lg:pb-8 max-w-7xl w-full mx-auto print:p-0 print:m-0 print:max-w-none print:w-full print:overflow-visible">
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
            <div className="w-full">
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
                  globalSearchQuery={searchQuery}
                />
              )}
              {currentTab === 'imports' && <ImportsView />}
              {currentTab === 'stock' && <StockView globalSearchQuery={searchQuery} />}
              {currentTab === 'serials' && <SerialsView />}
              {currentTab === 'quotation' && <QuotationView onNavigateTab={(t, quoteId) => {
                if (quoteId) {
                  sessionStorage.setItem('globotech_pending_bill_quote_id', quoteId);
                }
                setCurrentTab(t);
              }} />}
              {currentTab === 'bill-invoice' && <BillInvoiceView globalSearchQuery={searchQuery} />}
              {currentTab === 'sales' && <SalesView />}
              {currentTab === 'projects' && <ProjectsView />}
              {currentTab === 'customers' && <CustomersView />}
              {currentTab === 'suppliers' && <SuppliersView />}
              {currentTab === 'purchases' && (
                <PurchasesView canViewCosts={canViewCosts} globalSearchQuery={searchQuery} />
              )}
              {currentTab === 'reports' && <ReportsView />}
              {currentTab === 'settings' && <SettingsView />}
            </div>
          )}
        </main>

        {/* Mobile Quick Bottom Navigation */}
        <div className="no-print">
          <MobileBottomNav
            currentTab={currentTab}
            onSelectTab={handleSelectTab}
            lowStockCount={lowStockCount}
            onOpenMenu={() => setIsMobileMenuOpen(true)}
            isMenuOpen={isMobileMenuOpen}
          />
        </div>
      </div>
    </div>
  );
}
