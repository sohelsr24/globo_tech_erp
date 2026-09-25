'use client';

import React from 'react';
import {
  LayoutDashboard,
  Package,
  Ship,
  Warehouse,
  QrCode,
  FileText,
  Wrench,
  Users,
  Building2,
  BarChart3,
  Settings,
  ShieldCheck
} from 'lucide-react';

interface SidebarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  lowStockCount?: number;
  currentRole: string;
}

export function Sidebar({
  currentTab,
  onSelectTab,
  lowStockCount = 0,
  currentRole
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
    { id: 'sales', label: 'Sales & Invoicing', icon: FileText },
    { id: 'projects', label: 'Projects & Installation', icon: Wrench },
    { id: 'reports', label: 'P&L & Cash Flow', icon: BarChart3 },
    { id: 'settings', label: 'System Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col flex-shrink-0 min-h-screen">
      {/* Brand Header */}
      <div className="h-16 px-5 border-b border-slate-800 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-extrabold text-white text-lg shadow-md shadow-blue-500/20">
          A
        </div>
        <div>
          <h2 className="font-bold text-slate-100 text-sm leading-tight tracking-wide">
            Apex Enterprise
          </h2>
          <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
            Import &bull; Stock &bull; Projects
          </p>
        </div>
      </div>

      {/* Role Pill */}
      <div className="px-4 pt-3 pb-1">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span className="font-medium truncate">{currentRole.replace(/_/g, ' ')}</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition ${
                isActive
                  ? 'bg-blue-600/15 text-blue-400 border-l-2 border-blue-500'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </div>

              {typeof item.badge === 'number' && item.badge > 0 && (
                <span className="px-1.5 py-0.5 text-[11px] font-bold rounded-full bg-amber-950 text-amber-400 border border-amber-800">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer Profile */}
      <div className="p-4 border-t border-slate-800 flex items-center gap-3 bg-slate-900/50">
        <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-blue-400">
          SR
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-slate-200 truncate">Engr. Sohel Rana</p>
          <p className="text-[10px] text-slate-400 truncate">Managing Director</p>
        </div>
      </div>
    </aside>
  );
}
