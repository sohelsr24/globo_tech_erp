'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Search,
  Moon,
  Sun,
  AlertTriangle,
  LogOut,
  Menu,
  X,
  ShieldCheck,
  Package,
  Layers,
  Receipt,
  FileText,
  ArrowRight,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { UserRole } from '@/lib/permissions';
import {
  getStoredProducts,
  getStoredWarehouseStock,
  ProductItem,
  WarehouseStockItem
} from '@/lib/productsStorage';
import { INITIAL_BILL_INVOICES, BillInvoice } from '@/components/modules/BillInvoiceView';
import { INITIAL_QUOTATIONS, Quotation } from '@/components/modules/QuotationView';

interface HeaderProps {
  title: string;
  description?: string;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  lowStockCount: number;
  onLowStockClick: () => void;
  currentRole: UserRole;
  onRoleChange: (r: UserRole) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onLogout?: () => void;
  onToggleMenu?: () => void;
  onNavigateTab?: (tab: string, itemId?: string) => void;
}

export function Header({
  title,
  description,
  searchQuery,
  onSearchChange,
  lowStockCount,
  onLowStockClick,
  currentRole,
  onRoleChange,
  theme,
  onToggleTheme,
  onLogout,
  onToggleMenu,
  onNavigateTab
}: HeaderProps) {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'PRODUCTS' | 'WAREHOUSE' | 'BILLS' | 'QUOTATIONS'>('ALL');
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const roles: { id: UserRole; label: string; short: string }[] = [
    { id: 'SUPER_ADMIN', label: 'Super Admin', short: 'Super' },
    { id: 'ADMIN', label: 'Administrator', short: 'Admin' },
    { id: 'PROCUREMENT_OFFICER', label: 'Procurement Officer', short: 'Procure' },
    { id: 'SALES_OFFICER', label: 'Sales Officer', short: 'Sales' },
    { id: 'STOREKEEPER', label: 'Storekeeper', short: 'Store' },
    { id: 'ACCOUNTS_OFFICER', label: 'Accounts Officer', short: 'Accounts' },
    { id: 'TECHNICIAN', label: 'Technician', short: 'Tech' },
    { id: 'MANAGEMENT_VIEWER', label: 'Management', short: 'Mgmt' },
  ];

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close search on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Compute live search results across all modules
  const searchResults = useMemo(() => {
    const q = (searchQuery || '').trim().toLowerCase();
    if (!q) {
      return { products: [], warehouse: [], bills: [], quotes: [], total: 0 };
    }

    // 1. Products Catalog (matching SKU, Name, Barcode, Brand, Category)
    let prods: ProductItem[] = [];
    try {
      prods = getStoredProducts();
    } catch (e) {}
    const matchedProducts = prods.filter(
      (p) =>
        p.sku.toLowerCase().includes(q) ||
        p.name.toLowerCase().includes(q) ||
        p.barcode.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );

    // 2. Warehouse Stock (matching SKU, Product Name, Warehouse Name)
    let stockItems: WarehouseStockItem[] = [];
    try {
      stockItems = getStoredWarehouseStock();
    } catch (e) {}
    const matchedStock = stockItems.filter(
      (s) =>
        s.sku.toLowerCase().includes(q) ||
        s.productName.toLowerCase().includes(q) ||
        s.warehouseName.toLowerCase().includes(q)
    );

    // 3. Bill Invoices (matching Bill No, PO, Customer, Items, SKU)
    let allBills: BillInvoice[] = INITIAL_BILL_INVOICES;
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('globotech_erp_bill_invoices');
        if (stored) allBills = JSON.parse(stored);
      } catch (e) {}
    }
    const matchedBills = allBills.filter(
      (b) =>
        b.billNo.toLowerCase().includes(q) ||
        (b.poNumber && b.poNumber.toLowerCase().includes(q)) ||
        b.billToName.toLowerCase().includes(q) ||
        (b.deliverToName && b.deliverToName.toLowerCase().includes(q)) ||
        (b.quotationRef && b.quotationRef.toLowerCase().includes(q)) ||
        (b.items || []).some(
          (it) =>
            it.name.toLowerCase().includes(q) ||
            (it.sku && it.sku.toLowerCase().includes(q)) ||
            (it.description && it.description.toLowerCase().includes(q))
        )
    );

    // 4. Quotations (matching Quote No, Customer, Project, Items, SKU)
    let allQuotes: Quotation[] = INITIAL_QUOTATIONS;
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('globotech_erp_quotations');
        if (stored) allQuotes = JSON.parse(stored);
      } catch (e) {}
    }
    const matchedQuotes = allQuotes.filter(
      (qt) =>
        qt.quotationNumber.toLowerCase().includes(q) ||
        qt.customerCompany.toLowerCase().includes(q) ||
        qt.projectName.toLowerCase().includes(q) ||
        (qt.items || []).some(
          (it) =>
            it.name.toLowerCase().includes(q) ||
            (it.sku && it.sku.toLowerCase().includes(q)) ||
            (it.description && it.description.toLowerCase().includes(q))
        )
    );

    const total =
      matchedProducts.length + matchedStock.length + matchedBills.length + matchedQuotes.length;

    return {
      products: matchedProducts,
      warehouse: matchedStock,
      bills: matchedBills,
      quotes: matchedQuotes,
      total
    };
  }, [searchQuery]);

  const handleSelectResult = (tab: string) => {
    setIsDropdownOpen(false);
    if (onNavigateTab) {
      onNavigateTab(tab);
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 transition-all">
      <div className="h-14 sm:h-16 px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Mobile Menu Toggle & Title */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          {onToggleMenu && (
            <button
              onClick={onToggleMenu}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition active:scale-95 flex-shrink-0"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          <div className="min-w-0">
            <h1 className="text-sm sm:text-base font-bold text-slate-100 tracking-tight truncate">
              {title}
            </h1>
            {description && (
              <p className="hidden md:block text-xs text-slate-400 truncate max-w-md">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
          {/* Desktop Search Bar with Global Instant Spotlight Dropdown */}
          <div ref={searchContainerRef} className="hidden md:block relative w-64 lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search SKU, Serial, PO..."
              value={searchQuery}
              onFocus={() => {
                if (searchQuery.trim().length > 0) setIsDropdownOpen(true);
              }}
              onChange={(e) => {
                onSearchChange(e.target.value);
                setIsDropdownOpen(true);
              }}
              className="w-full bg-slate-800/90 border border-slate-700 rounded-lg pl-9 pr-8 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  onSearchChange('');
                  setIsDropdownOpen(false);
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-200 rounded transition"
                title="Clear Search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Desktop Instant Spotlight Results Dropdown */}
            {isDropdownOpen && searchQuery.trim().length > 0 && (
              <div className="absolute top-full mt-2 right-0 w-[440px] lg:w-[480px] bg-slate-900 border border-slate-700/90 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                {/* Header & Category Filter Tabs */}
                <div className="p-3 bg-slate-800/60 border-b border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">
                      Search Results for &ldquo;<strong className="text-blue-400">{searchQuery}</strong>&rdquo;
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {searchResults.total} matches
                    </span>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-1 overflow-x-auto text-[10px] font-semibold">
                    <button
                      type="button"
                      onClick={() => setSelectedCategory('ALL')}
                      className={`px-2 py-0.5 rounded-md transition ${
                        selectedCategory === 'ALL'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      All ({searchResults.total})
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedCategory('PRODUCTS')}
                      className={`px-2 py-0.5 rounded-md transition ${
                        selectedCategory === 'PRODUCTS'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Products ({searchResults.products.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedCategory('WAREHOUSE')}
                      className={`px-2 py-0.5 rounded-md transition ${
                        selectedCategory === 'WAREHOUSE'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Warehouse ({searchResults.warehouse.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedCategory('BILLS')}
                      className={`px-2 py-0.5 rounded-md transition ${
                        selectedCategory === 'BILLS'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Bills ({searchResults.bills.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedCategory('QUOTATIONS')}
                      className={`px-2 py-0.5 rounded-md transition ${
                        selectedCategory === 'QUOTATIONS'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Quotes ({searchResults.quotes.length})
                    </button>
                  </div>
                </div>

                {/* Results List */}
                <div className="max-h-[360px] overflow-y-auto divide-y divide-slate-800/60 text-xs">
                  {searchResults.total === 0 ? (
                    <div className="p-6 text-center text-slate-400 space-y-1">
                      <p className="font-semibold text-slate-300">No ERP records found matching &ldquo;{searchQuery}&rdquo;</p>
                      <p className="text-[11px] text-slate-500">
                        Check for exact SKU code (e.g. ICEA4KHAM), PO number, Bill NO, or Product Name.
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* Products Section */}
                      {(selectedCategory === 'ALL' || selectedCategory === 'PRODUCTS') &&
                        searchResults.products.map((p) => (
                          <div
                            key={p.id}
                            onClick={() => handleSelectResult('products')}
                            className="p-3 hover:bg-slate-800/70 cursor-pointer transition flex items-center justify-between gap-3 group"
                          >
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="px-1.5 py-0.2 bg-blue-950/80 text-blue-400 border border-blue-800/60 rounded font-mono text-[10px] font-bold">
                                  SKU: {p.sku}
                                </span>
                                <span className="text-[10px] text-slate-500">{p.category}</span>
                              </div>
                              <p className="font-semibold text-slate-100 truncate group-hover:text-blue-300 transition">
                                {p.name}
                              </p>
                              <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-0.5">
                                <span>Stock: <strong className="text-emerald-400 font-mono">{p.stock} {p.unit}</strong></span>
                                <span>Retail: <strong className="text-slate-200 font-mono">৳{p.retailPrice}</strong></span>
                              </div>
                            </div>
                            <span className="text-[11px] text-blue-400 group-hover:translate-x-0.5 transition flex items-center gap-1 font-semibold flex-shrink-0">
                              View <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        ))}

                      {/* Warehouse Stock Section */}
                      {(selectedCategory === 'ALL' || selectedCategory === 'WAREHOUSE') &&
                        searchResults.warehouse.map((st) => (
                          <div
                            key={st.id}
                            onClick={() => handleSelectResult('stock')}
                            className="p-3 hover:bg-slate-800/70 cursor-pointer transition flex items-center justify-between gap-3 group"
                          >
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="px-1.5 py-0.2 bg-purple-950/80 text-purple-400 border border-purple-800/60 rounded font-mono text-[10px] font-bold">
                                  WH STOCK
                                </span>
                                <span className="text-[10px] text-slate-400 font-medium">{st.warehouseName}</span>
                              </div>
                              <p className="font-semibold text-slate-100 truncate group-hover:text-purple-300 transition">
                                {st.productName}
                              </p>
                              <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-0.5">
                                <span className="font-mono text-[10px] text-slate-500">SKU: {st.sku}</span>
                                <span>Available: <strong className="text-emerald-400 font-mono">{st.available} pcs</strong></span>
                                <span>Landed: <strong className="text-slate-300 font-mono">৳{st.unitLandedCost}</strong></span>
                              </div>
                            </div>
                            <span className="text-[11px] text-purple-400 group-hover:translate-x-0.5 transition flex items-center gap-1 font-semibold flex-shrink-0">
                              Stock <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        ))}

                      {/* Bill Invoices Section */}
                      {(selectedCategory === 'ALL' || selectedCategory === 'BILLS') &&
                        searchResults.bills.map((b) => (
                          <div
                            key={b.id}
                            onClick={() => handleSelectResult('bill-invoice')}
                            className="p-3 hover:bg-slate-800/70 cursor-pointer transition flex items-center justify-between gap-3 group"
                          >
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="px-1.5 py-0.2 bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 rounded font-mono text-[10px] font-bold">
                                  BILL: {b.billNo}
                                </span>
                                <span className="text-[10px] text-slate-400">{b.date}</span>
                              </div>
                              <p className="font-semibold text-slate-100 truncate group-hover:text-emerald-300 transition">
                                {b.billToName}
                              </p>
                              <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-0.5">
                                {b.poNumber && <span>PO: <strong className="text-slate-300">{b.poNumber}</strong></span>}
                                <span>Total: <strong className="text-emerald-400 font-mono">৳{b.grandTotal}</strong></span>
                                <span className="text-slate-500 truncate max-w-[150px]">
                                  {(b.items || []).map((i) => i.name).join(', ')}
                                </span>
                              </div>
                            </div>
                            <span className="text-[11px] text-emerald-400 group-hover:translate-x-0.5 transition flex items-center gap-1 font-semibold flex-shrink-0">
                              Bill <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        ))}

                      {/* Quotations Section */}
                      {(selectedCategory === 'ALL' || selectedCategory === 'QUOTATIONS') &&
                        searchResults.quotes.map((qt) => (
                          <div
                            key={qt.id}
                            onClick={() => handleSelectResult('quotation')}
                            className="p-3 hover:bg-slate-800/70 cursor-pointer transition flex items-center justify-between gap-3 group"
                          >
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="px-1.5 py-0.2 bg-sky-950/80 text-sky-400 border border-sky-800/60 rounded font-mono text-[10px] font-bold">
                                  QUOTE: {qt.quotationNumber}
                                </span>
                                <span className="text-[10px] text-amber-400 font-semibold">{qt.status}</span>
                              </div>
                              <p className="font-semibold text-slate-100 truncate group-hover:text-sky-300 transition">
                                {qt.customerCompany} &bull; {qt.projectName}
                              </p>
                              <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-0.5">
                                <span>{qt.items.length} items</span>
                                <span className="text-slate-500 truncate max-w-[150px]">
                                  {qt.items.map((i) => i.name).join(', ')}
                                </span>
                              </div>
                            </div>
                            <span className="text-[11px] text-sky-400 group-hover:translate-x-0.5 transition flex items-center gap-1 font-semibold flex-shrink-0">
                              Quote <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        ))}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Search Toggle Button */}
          <button
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-200 bg-slate-800/60 border border-slate-700/50 transition active:scale-95"
            aria-label="Toggle Search"
          >
            {isMobileSearchOpen ? <X className="w-4 h-4 text-rose-400" /> : <Search className="w-4 h-4" />}
          </button>

          {/* Low Stock Warning Button */}
          {lowStockCount > 0 && (
            <button
              onClick={onLowStockClick}
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg bg-amber-950/80 border border-amber-800/80 text-amber-400 text-xs font-semibold hover:bg-amber-900/60 transition active:scale-95"
              title={`${lowStockCount} items below reorder level`}
            >
              <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="hidden sm:inline">Low Stock ({lowStockCount})</span>
              <span className="sm:hidden font-bold">{lowStockCount}</span>
            </button>
          )}

          {/* Role Switcher */}
          <div className="relative flex items-center gap-1 bg-slate-800/80 border border-slate-700/70 rounded-lg px-2 py-1">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400 hidden xs:inline flex-shrink-0" />
            <select
              value={currentRole}
              onChange={(e) => onRoleChange(e.target.value as UserRole)}
              className="bg-transparent text-[11px] sm:text-xs text-blue-400 font-semibold focus:outline-none cursor-pointer max-w-[85px] sm:max-w-none"
            >
              {roles.map((r) => (
                <option key={r.id} value={r.id} className="bg-slate-900 text-slate-200">
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-1.5 sm:p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
            title="Toggle Dark/Light Mode"
          >
            {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          {/* Logout Button */}
          {onLogout && (
            <button
              onClick={onLogout}
              className="flex items-center gap-1 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 border border-transparent sm:border-slate-800 hover:border-rose-900/50 transition text-xs font-semibold"
              title="Log Out of ERP"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Log Out</span>
            </button>
          )}
        </div>
      </div>

      {/* Expandable Mobile Search Input Row */}
      {isMobileSearchOpen && (
        <div className="md:hidden px-3 pb-3 pt-1 border-t border-slate-800/60 bg-slate-900 animate-in slide-in-from-top-2 duration-150 space-y-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              autoFocus
              placeholder="Search SKU, Serial, Invoice, PO..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-8 py-2 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Mobile Instant Results List */}
          {searchQuery.trim().length > 0 && (
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-2 max-h-[300px] overflow-y-auto divide-y divide-slate-800/60 text-xs">
              <div className="p-1.5 text-[11px] text-slate-400 font-semibold flex justify-between items-center">
                <span>Matches for &ldquo;{searchQuery}&rdquo;</span>
                <span className="font-mono text-blue-400">{searchResults.total}</span>
              </div>
              {searchResults.total === 0 ? (
                <div className="p-3 text-center text-slate-500">No matching records found.</div>
              ) : (
                <>
                  {searchResults.products.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => handleSelectResult('products')}
                      className="p-2 hover:bg-slate-800 rounded cursor-pointer"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-950 px-1 rounded">
                          {p.sku}
                        </span>
                        <span className="font-semibold text-slate-200 truncate">{p.name}</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono">Stock: {p.stock} {p.unit}</span>
                    </div>
                  ))}
                  {searchResults.warehouse.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => handleSelectResult('stock')}
                      className="p-2 hover:bg-slate-800 rounded cursor-pointer"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold text-purple-400 bg-purple-950 px-1 rounded">
                          {s.sku}
                        </span>
                        <span className="font-semibold text-slate-200 truncate">{s.productName}</span>
                      </div>
                      <span className="text-[10px] text-slate-400">{s.warehouseName} &bull; {s.available} pcs</span>
                    </div>
                  ))}
                  {searchResults.bills.map((b) => (
                    <div
                      key={b.id}
                      onClick={() => handleSelectResult('bill-invoice')}
                      className="p-2 hover:bg-slate-800 rounded cursor-pointer"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950 px-1 rounded">
                          {b.billNo}
                        </span>
                        <span className="font-semibold text-slate-200 truncate">{b.billToName}</span>
                      </div>
                      <span className="text-[10px] text-slate-400">৳{b.grandTotal}</span>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
