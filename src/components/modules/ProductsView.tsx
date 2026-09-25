'use client';

import React, { useState } from 'react';
import { Package, Plus, Filter, Search, Tag, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Formatters } from '@/lib/formatters';

interface ProductItem {
  id: string;
  sku: string;
  barcode: string;
  name: string;
  category: string;
  brand: string;
  unit: string;
  stock: number;
  minStock: number;
  purchasePriceCNY: number;
  currentLandedCost: number;
  retailPrice: number;
  wholesalePrice: number;
  projectPrice: number;
  dealerPrice: number;
  isSerialTracked: boolean;
}

const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: 'PRD-001',
    sku: 'SKU-CCTV-4MP-DOME',
    barcode: '880192837401',
    name: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
    category: 'CCTV & Surveillance',
    brand: 'Hikvision',
    unit: 'pcs',
    stock: 40,
    minStock: 25,
    purchasePriceCNY: 500,
    currentLandedCost: 10000,
    retailPrice: 15000,
    wholesalePrice: 13500,
    projectPrice: 12500,
    dealerPrice: 12000,
    isSerialTracked: true,
  },
  {
    id: 'PRD-002',
    sku: 'SKU-NET-SW24G',
    barcode: '880192837402',
    name: 'TP-Link 24-Port Gigabit Managed PoE+ Switch',
    category: 'Networking',
    brand: 'TP-Link',
    unit: 'pcs',
    stock: 8,
    minStock: 12, // LOW STOCK
    purchasePriceCNY: 1250,
    currentLandedCost: 24000,
    retailPrice: 34000,
    wholesalePrice: 31000,
    projectPrice: 29500,
    dealerPrice: 28500,
    isSerialTracked: true,
  },
  {
    id: 'PRD-003',
    sku: 'SKU-CCTV-NVR16',
    barcode: '880192837403',
    name: 'Hikvision 16-Channel 4K NVR with 2-SATA',
    category: 'CCTV & Surveillance',
    brand: 'Hikvision',
    unit: 'unit',
    stock: 5,
    minStock: 8, // LOW STOCK
    purchasePriceCNY: 850,
    currentLandedCost: 16500,
    retailPrice: 24500,
    wholesalePrice: 22000,
    projectPrice: 20500,
    dealerPrice: 19800,
    isSerialTracked: true,
  },
  {
    id: 'PRD-004',
    sku: 'SKU-NET-CABLE-CAT6',
    barcode: '880192837404',
    name: 'Cat6 UTP Pure Copper Industrial Cable (305m)',
    category: 'Networking',
    brand: 'D-Link',
    unit: 'box',
    stock: 65,
    minStock: 20,
    purchasePriceCNY: 480,
    currentLandedCost: 9200,
    retailPrice: 13500,
    wholesalePrice: 12200,
    projectPrice: 11500,
    dealerPrice: 11000,
    isSerialTracked: false,
  },
  {
    id: 'PRD-005',
    sku: 'SKU-SEC-WALKIE-DMR',
    barcode: '880192837405',
    name: 'Motorola Digital DMR Walkie Talkie 5W',
    category: 'Security & Wireless',
    brand: 'Motorola',
    unit: 'set',
    stock: 32,
    minStock: 15,
    purchasePriceCNY: 380,
    currentLandedCost: 7500,
    retailPrice: 12000,
    wholesalePrice: 10500,
    projectPrice: 9800,
    dealerPrice: 9200,
    isSerialTracked: true,
  },
  {
    id: 'PRD-006',
    sku: 'SKU-PWR-UPS3KVA',
    barcode: '880192837406',
    name: 'APC Smart-UPS On-Line 3KVA 230V',
    category: 'Data Center & Power',
    brand: 'APC by Schneider',
    unit: 'unit',
    stock: 14,
    minStock: 5,
    purchasePriceCNY: 2800,
    currentLandedCost: 52000,
    retailPrice: 75000,
    wholesalePrice: 68000,
    projectPrice: 65000,
    dealerPrice: 62000,
    isSerialTracked: true,
  },
  {
    id: 'PRD-007',
    sku: 'SKU-NET-CISCO-2960X',
    barcode: '880192837407',
    name: 'Cisco Catalyst 2960-X 48 GigE 4x1G SFP',
    category: 'Networking',
    brand: 'Cisco',
    unit: 'unit',
    stock: 6,
    minStock: 4,
    purchasePriceCNY: 4500,
    currentLandedCost: 85000,
    retailPrice: 120000,
    wholesalePrice: 110000,
    projectPrice: 105000,
    dealerPrice: 98000,
    isSerialTracked: true,
  },
  {
    id: 'PRD-008',
    sku: 'SKU-STR-SEAGATE-4TB',
    barcode: '880192837408',
    name: 'Seagate SkyHawk 4TB Surveillance Hard Drive',
    category: 'CCTV & Surveillance',
    brand: 'Seagate',
    unit: 'pcs',
    stock: 14,
    minStock: 10,
    purchasePriceCNY: 420,
    currentLandedCost: 8000,
    retailPrice: 12500,
    wholesalePrice: 11200,
    projectPrice: 10500,
    dealerPrice: 10000,
    isSerialTracked: true,
  }
];

interface ProductsViewProps {
  canViewCosts: boolean;
  filterLowStock?: boolean;
}

export function ProductsView({ canViewCosts, filterLowStock = false }: ProductsViewProps) {
  const [products, setProducts] = useState<ProductItem[]>(INITIAL_PRODUCTS);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [showLowStockOnly, setShowLowStockOnly] = useState(filterLowStock);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New product form state
  const [newProd, setNewProd] = useState({
    name: '',
    sku: '',
    category: 'CCTV & Surveillance',
    brand: 'Hikvision',
    unit: 'pcs',
    purchasePriceCNY: 0,
    retailPrice: 0,
    wholesalePrice: 0,
    projectPrice: 0,
    minStock: 10,
    isSerialTracked: true
  });

  const filtered = products.filter((p) => {
    if (showLowStockOnly && p.stock > p.minStock) return false;
    if (categoryFilter !== 'ALL' && p.category !== categoryFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleAddProduct = () => {
    if (!newProd.name || !newProd.sku) return;
    const landedCost = (Number(newProd.purchasePriceCNY) || 0) * 16 * 1.25; // Estimate
    const item: ProductItem = {
      id: `PRD-${Date.now().toString().slice(-4)}`,
      sku: newProd.sku,
      barcode: `880${Math.floor(100000000 + Math.random() * 900000000)}`,
      name: newProd.name,
      category: newProd.category,
      brand: newProd.brand,
      unit: newProd.unit,
      stock: 0,
      minStock: Number(newProd.minStock) || 5,
      purchasePriceCNY: Number(newProd.purchasePriceCNY) || 0,
      currentLandedCost: Math.round(landedCost),
      retailPrice: Number(newProd.retailPrice) || 0,
      wholesalePrice: Number(newProd.wholesalePrice) || 0,
      projectPrice: Number(newProd.projectPrice) || 0,
      dealerPrice: Math.round((Number(newProd.wholesalePrice) || 0) * 0.95),
      isSerialTracked: newProd.isSerialTracked
    };
    setProducts([item, ...products]);
    setIsAddModalOpen(false);
  };

  return (
    <div className="space-y-5">
      {/* Header controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-slate-900 border border-slate-800 rounded-xl p-3 sm:p-3.5">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 flex-1">
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search product, SKU, brand..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-3 py-2 sm:py-1.5 text-sm sm:text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto touch-scroll pb-1 sm:pb-0">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none flex-shrink-0"
            >
              <option value="ALL">All Categories</option>
              <option value="CCTV & Surveillance">CCTV & Surveillance</option>
              <option value="Networking">Networking</option>
              <option value="Data Center & Power">Data Center & Power</option>
              <option value="Security & Wireless">Security & Wireless</option>
            </select>

            <button
              onClick={() => setShowLowStockOnly(!showLowStockOnly)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition flex-shrink-0 ${
                showLowStockOnly
                  ? 'bg-amber-950 text-amber-300 border border-amber-800'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Low Stock ({products.filter((p) => p.stock <= p.minStock).length})</span>
            </button>
          </div>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="w-full sm:w-auto px-4 py-2 sm:py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 flex-shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Main Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="sm:hidden px-3 py-2 bg-slate-800/40 border-b border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>👉 Swipe horizontally for all pricing tiers</span>
          <span className="font-semibold text-slate-300">{filtered.length} items</span>
        </div>
        <div className="overflow-x-auto touch-scroll">
          <table className="w-full text-left text-xs min-w-[800px]">
            <thead className="bg-slate-800/80 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">SKU / Barcode</th>
                <th className="py-3 px-4">Product Details</th>
                <th className="py-3 px-4">Category & Brand</th>
                <th className="py-3 px-4 text-center">Stock / Reorder</th>
                {canViewCosts && <th className="py-3 px-4 text-right">China Cost (CNY)</th>}
                {canViewCosts && <th className="py-3 px-4 text-right">Landed Cost (BDT)</th>}
                <th className="py-3 px-4 text-right">Retail (BDT)</th>
                <th className="py-3 px-4 text-right">Wholesale (BDT)</th>
                <th className="py-3 px-4 text-right">Project (BDT)</th>
                <th className="py-3 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {filtered.map((item) => {
                const isLow = item.stock <= item.minStock;
                return (
                  <tr key={item.id} className="hover:bg-slate-800/40 transition">
                    <td className="py-3 px-4 font-mono font-bold text-slate-300">
                      <div>{item.sku}</div>
                      <div className="text-[10px] text-slate-500 font-normal">{item.barcode}</div>
                    </td>
                    <td className="py-3 px-4 font-medium max-w-xs">
                      <div className="text-slate-100 font-semibold">{item.name}</div>
                      {item.isSerialTracked && (
                        <span className="text-[10px] text-blue-400 flex items-center gap-1 mt-0.5">
                          &bull; Serial Tracked
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-slate-300">{item.category}</div>
                      <div className="text-[10px] text-slate-500 font-medium">{item.brand}</div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className={`font-bold ${isLow ? 'text-amber-400' : 'text-emerald-400'}`}>
                        {item.stock} {item.unit}
                      </div>
                      <div className="text-[10px] text-slate-500">Min: {item.minStock}</div>
                    </td>
                    {canViewCosts && (
                      <td className="py-3 px-4 text-right text-slate-300 font-medium">
                        ¥ {item.purchasePriceCNY.toLocaleString()}
                      </td>
                    )}
                    {canViewCosts && (
                      <td className="py-3 px-4 text-right font-bold text-blue-400">
                        {Formatters.currency(item.currentLandedCost)}
                      </td>
                    )}
                    <td className="py-3 px-4 text-right font-semibold text-slate-100">
                      {Formatters.currency(item.retailPrice)}
                    </td>
                    <td className="py-3 px-4 text-right font-semibold text-cyan-400">
                      {Formatters.currency(item.wholesalePrice)}
                    </td>
                    <td className="py-3 px-4 text-right font-semibold text-purple-400">
                      {Formatters.currency(item.projectPrice)}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {isLow ? (
                        <Badge variant="warning">Low Stock</Badge>
                      ) : (
                        <Badge variant="success">In Stock</Badge>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Import Product"
        footer={
          <>
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleAddProduct}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
            >
              Save Product
            </button>
          </>
        }
      >
        <div className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-slate-400 font-semibold mb-1">Product Name *</label>
              <input
                type="text"
                placeholder="e.g. Cisco Catalyst 48-Port Switch"
                value={newProd.name}
                onChange={(e) => setNewProd({ ...newProd, name: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-sm sm:text-xs text-slate-200"
              />
            </div>
            <div>
              <label className="block text-slate-400 font-semibold mb-1">SKU Code *</label>
              <input
                type="text"
                placeholder="SKU-NET-..."
                value={newProd.sku}
                onChange={(e) => setNewProd({ ...newProd, sku: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-sm sm:text-xs text-slate-200 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-slate-400 font-semibold mb-1">Category</label>
              <select
                value={newProd.category}
                onChange={(e) => setNewProd({ ...newProd, category: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-sm sm:text-xs text-slate-200"
              >
                <option value="CCTV & Surveillance">CCTV & Surveillance</option>
                <option value="Networking">Networking</option>
                <option value="Data Center & Power">Data Center & Power</option>
                <option value="Security & Wireless">Security & Wireless</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-400 font-semibold mb-1">Brand</label>
              <input
                type="text"
                value={newProd.brand}
                onChange={(e) => setNewProd({ ...newProd, brand: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-sm sm:text-xs text-slate-200"
              />
            </div>
            <div>
              <label className="block text-slate-400 font-semibold mb-1">Unit</label>
              <input
                type="text"
                value={newProd.unit}
                onChange={(e) => setNewProd({ ...newProd, unit: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-sm sm:text-xs text-slate-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 border-t border-slate-800 pt-3">
            <div>
              <label className="block text-slate-400 font-semibold mb-1">Purchase Price (CNY)</label>
              <input
                type="number"
                placeholder="500"
                value={newProd.purchasePriceCNY || ''}
                onChange={(e) => setNewProd({ ...newProd, purchasePriceCNY: Number(e.target.value) })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-sm sm:text-xs text-slate-200"
              />
            </div>
            <div>
              <label className="block text-slate-400 font-semibold mb-1">Min Reorder Level</label>
              <input
                type="number"
                value={newProd.minStock}
                onChange={(e) => setNewProd({ ...newProd, minStock: Number(e.target.value) })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-sm sm:text-xs text-slate-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-800 pt-3">
            <div>
              <label className="block text-slate-400 font-semibold mb-1">Retail Price (BDT)</label>
              <input
                type="number"
                placeholder="15000"
                value={newProd.retailPrice || ''}
                onChange={(e) => setNewProd({ ...newProd, retailPrice: Number(e.target.value) })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-sm sm:text-xs text-slate-200"
              />
            </div>
            <div>
              <label className="block text-slate-400 font-semibold mb-1">Wholesale Price (BDT)</label>
              <input
                type="number"
                placeholder="13500"
                value={newProd.wholesalePrice || ''}
                onChange={(e) => setNewProd({ ...newProd, wholesalePrice: Number(e.target.value) })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-sm sm:text-xs text-slate-200"
              />
            </div>
            <div>
              <label className="block text-slate-400 font-semibold mb-1">Project Price (BDT)</label>
              <input
                type="number"
                placeholder="12500"
                value={newProd.projectPrice || ''}
                onChange={(e) => setNewProd({ ...newProd, projectPrice: Number(e.target.value) })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-sm sm:text-xs text-slate-200"
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
