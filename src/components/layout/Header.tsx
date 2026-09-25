'use client';

import React from 'react';
import { Search, Bell, Moon, Sun, AlertTriangle, ChevronDown, LogOut } from 'lucide-react';
import { UserRole } from '@/lib/permissions';

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
  onLogout
}: HeaderProps) {
  const roles: { id: UserRole; label: string }[] = [
    { id: 'SUPER_ADMIN', label: 'Super Admin' },
    { id: 'ADMIN', label: 'Administrator' },
    { id: 'PROCUREMENT_OFFICER', label: 'Procurement Officer' },
    { id: 'SALES_OFFICER', label: 'Sales Officer' },
    { id: 'STOREKEEPER', label: 'Storekeeper' },
    { id: 'ACCOUNTS_OFFICER', label: 'Accounts Officer' },
    { id: 'TECHNICIAN', label: 'Technician' },
    { id: 'MANAGEMENT_VIEWER', label: 'Management' },
  ];

  return (
    <header className="h-16 px-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-4 z-20">
      <div>
        <h1 className="text-base font-bold text-slate-100 tracking-tight">{title}</h1>
        {description && <p className="text-xs text-slate-400">{description}</p>}
      </div>

      <div className="flex items-center gap-3">
        {/* Global Search */}
        <div className="relative w-64 md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search SKU, Serial, Invoice, PO..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        {/* Low Stock Warning Banner */}
        {lowStockCount > 0 && (
          <button
            onClick={onLowStockClick}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-950/80 border border-amber-800/80 text-amber-400 text-xs font-semibold hover:bg-amber-900/60 transition"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Low Stock ({lowStockCount})</span>
          </button>
        )}

        {/* Role Switcher (Live Role-based simulation) */}
        <div className="relative flex items-center gap-1.5 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1">
          <span className="text-[11px] text-slate-400 font-medium">Role:</span>
          <select
            value={currentRole}
            onChange={(e) => onRoleChange(e.target.value as UserRole)}
            className="bg-transparent text-xs text-blue-400 font-semibold focus:outline-none cursor-pointer"
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
          className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
          title="Toggle Theme"
        >
          {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
        </button>

        {/* Logout Button */}
        {onLogout && (
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 border border-slate-800 hover:border-rose-900/50 transition text-xs font-semibold"
            title="Log Out of ERP"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Log Out</span>
          </button>
        )}
      </div>
    </header>
  );
}
