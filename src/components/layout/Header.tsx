'use client';

import React, { useState } from 'react';
import { Search, Moon, Sun, AlertTriangle, LogOut, Menu, X, ShieldCheck } from 'lucide-react';
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
  onToggleMenu?: () => void;
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
  onToggleMenu
}: HeaderProps) {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

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
          {/* Desktop Search Bar */}
          <div className="hidden md:block relative w-56 lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search SKU, Serial, PO..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-slate-800/90 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
            />
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
        <div className="md:hidden px-3 pb-3 pt-1 border-t border-slate-800/60 bg-slate-900 animate-in slide-in-from-top-2 duration-150">
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
        </div>
      )}
    </header>
  );
}
