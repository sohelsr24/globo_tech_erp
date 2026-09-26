'use client';

import React from 'react';
import {
  LayoutDashboard,
  Package,
  Ship,
  Warehouse,
  QrCode,
  FileText,
  Receipt,
  Wrench,
  Users,
  Building2,
  BarChart3,
  Settings,
  ShieldCheck,
  LogOut,
  X
} from 'lucide-react';
import { GLOBO_TECH_LOGO_DATA_URL } from '@/lib/brandAssets';

interface SidebarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  lowStockCount?: number;
  currentRole: string;
  onLogout?: () => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({
  currentTab,
  onSelectTab,
  lowStockCount = 0,
  currentRole,
  onLogout,
  isOpen = false,
  onClose
}: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'products', label: 'Products & Pricing', icon: Package },
    { id: 'imports', label: 'China Imports & Costs', icon: Ship },
    { id: 'stock', label: 'Warehouse & Stock', icon: Warehouse, badge: lowStockCount },
    { id: 'serials', label: 'Serial & Warranty', icon: QrCode },
    { id: 'customers', label: 'Customer Directory', icon: Users },
    { id: 'suppliers', label: 'China Suppliers', icon: Building2 },
    { id: 'quotation', label: 'Quotation', icon: FileText },
    { id: 'bill-invoice', label: 'Bill Invoice', icon: Receipt },
    { id: 'sales', label: 'Sales & Invoicing', icon: FileText },
    { id: 'projects', label: 'Projects & Installation', icon: Wrench },
    { id: 'reports', label: 'P&L & Cash Flow', icon: BarChart3 },
    { id: 'settings', label: 'System Settings', icon: Settings },
  ];

  const handleItemClick = (id: string) => {
    onSelectTab(id);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Sidebar Drawer */}
      <aside
        className={`fixed lg:static top-0 bottom-0 left-0 z-50 w-72 lg:w-64 bg-slate-900 border-r border-slate-800 flex flex-col flex-shrink-0 min-h-screen transition-transform duration-300 ease-in-out shadow-2xl lg:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 px-4 sm:px-5 border-b border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-center p-1 shadow-md shadow-blue-500/10">
              <img
                src={GLOBO_TECH_LOGO_DATA_URL}
                alt="Globo Tech"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="font-bold text-slate-100 text-sm leading-tight tracking-wide">
                Globo Tech
              </h2>
              <p className="text-[10px] text-sky-400 font-medium tracking-wider uppercase">
                Enterprise &bull; ERP Suite
              </p>
            </div>
          </div>

          {/* Mobile Close Button */}
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Role Pill */}
        <div className="px-4 pt-3 pb-1">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
            <span className="font-medium truncate">{currentRole.replace(/_/g, ' ')}</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-3 py-3 space-y-1 overflow-y-auto touch-scroll">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;

            return (
              <a
                key={item.id}
                href={`?tab=${item.id}`}
                onClick={(e) => {
                  // If user clicked with Ctrl, Cmd, Shift, Alt or middle click, allow native browser new tab action
                  if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button === 1) {
                    return;
                  }
                  e.preventDefault();
                  handleItemClick(item.id);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition active:scale-[0.99] select-none cursor-pointer no-underline ${
                  isActive
                    ? 'bg-blue-600/15 text-blue-400 border-l-4 border-blue-500 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
                  <span className="truncate">{item.label}</span>
                </div>

                {typeof item.badge === 'number' && item.badge > 0 && (
                  <span className="px-1.5 py-0.5 text-[11px] font-bold rounded-full bg-amber-950 text-amber-400 border border-amber-800 flex-shrink-0">
                    {item.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Footer Profile */}
        <div className="p-4 border-t border-slate-800 flex items-center justify-between gap-3 bg-slate-900/50 pb-safe">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-blue-400 flex-shrink-0">
              SR
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-200 truncate">Engr. Sohel Rana</p>
              <p className="text-[10px] text-slate-400 truncate">sohelsr24@gmail.com</p>
            </div>
          </div>

          {onLogout && (
            <button
              onClick={onLogout}
              title="Log Out of ERP"
              className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 border border-transparent hover:border-rose-900/50 transition flex-shrink-0"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
