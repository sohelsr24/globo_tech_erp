'use client';

import React from 'react';
import {
  LayoutDashboard,
  Package,
  Warehouse,
  FileText,
  Menu,
  FileCheck
} from 'lucide-react';

interface MobileBottomNavProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  lowStockCount?: number;
  onOpenMenu: () => void;
  isMenuOpen: boolean;
}

export function MobileBottomNav({
  currentTab,
  onSelectTab,
  lowStockCount = 0,
  onOpenMenu,
  isMenuOpen
}: MobileBottomNavProps) {
  const navItems = [
    {
      id: 'dashboard',
      label: 'Home',
      icon: LayoutDashboard,
      action: () => onSelectTab('dashboard')
    },
    {
      id: 'products',
      label: 'Products',
      icon: Package,
      action: () => onSelectTab('products')
    },
    {
      id: 'stock',
      label: 'Stock',
      icon: Warehouse,
      badge: lowStockCount > 0 ? lowStockCount : undefined,
      action: () => onSelectTab('stock')
    },
    {
      id: 'quotation',
      label: 'Quotes',
      icon: FileCheck,
      action: () => onSelectTab('quotation')
    },
    {
      id: 'menu',
      label: 'Menu',
      icon: Menu,
      action: onOpenMenu,
      isActive: isMenuOpen
    }
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/90 shadow-[0_-8px_24px_rgba(0,0,0,0.4)] pb-safe"
    >
      <div className="flex items-center justify-around h-16 px-1 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.isActive !== undefined ? item.isActive : currentTab === item.id;

          return (
            <button
              key={item.id}
              onClick={item.action}
              className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 relative rounded-xl transition duration-150 active:scale-95 ${
                isActive
                  ? 'text-blue-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {/* Active glow indicator */}
              {isActive && (
                <span className="absolute top-1 w-6 h-0.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              )}

              <div className="relative mt-1">
                <Icon
                  className={`w-5 h-5 transition-transform ${
                    isActive ? 'scale-110 text-blue-400' : 'text-slate-400'
                  }`}
                />
                {item.badge && (
                  <span className="absolute -top-1.5 -right-2.5 min-w-[16px] h-4 px-1 rounded-full bg-amber-500 text-slate-950 font-black text-[9px] flex items-center justify-center border border-slate-900 shadow-sm animate-pulse">
                    {item.badge}
                  </span>
                )}
              </div>

              <span className="text-[10px] mt-1 tracking-tight leading-none truncate max-w-full">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
