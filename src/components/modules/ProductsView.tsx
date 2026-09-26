'use client';

import React, { useState, useEffect } from 'react';
import {
  Package,
  Plus,
  Filter,
  Search,
  Tag,
  AlertTriangle,
  Edit2,
  Trash2,
  CheckCircle2,
  Warehouse,
  Boxes,
  Layers
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Formatters } from '@/lib/formatters';
import {
  ProductItem,
  INITIAL_PRODUCTS,
  getStoredProducts,
  saveStoredProducts,
  getStoredWarehouseStock,
  saveStoredWarehouseStock,
  getStoredStockLedger,
  saveStoredStockLedger,
  WarehouseStockItem,
  StockLedgerRecord,
  getStoredCategories,
  saveStoredCategories
} from '@/lib/productsStorage';

export { INITIAL_PRODUCTS };
export type { ProductItem };

const WAREHOUSES = [
  'Main Warehouse (Tejgaon)',
  'Project Store (Site Depot)',
  'Office Store (Banani)',
  'Showroom (Gulshan)',
  'Chittagong Regional Depot'
];

interface ProductsViewProps {
  canViewCosts: boolean;
  filterLowStock?: boolean;
}

export function ProductsView({ canViewCosts, filterLowStock = false }: ProductsViewProps) {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [showLowStockOnly, setShowLowStockOnly] = useState(filterLowStock);

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductItem | null>(null);

  // Custom Category State
  const [isAddingCustomCategory, setIsAddingCustomCategory] = useState(false);
  const [newCategoryInput, setNewCategoryInput] = useState('');
  const [isAddingEditCategory, setIsAddingEditCategory] = useState(false);
  const [newEditCategoryInput, setNewEditCategoryInput] = useState('');

  // Toast
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 4000);
  };

  // Form State for Add New Product
  const [newProd, setNewProd] = useState({
    name: '',
    sku: '',
    category: 'CCTV & Surveillance',
    brand: 'Hikvision',
    unit: 'pcs',
    targetWarehouse: 'Main Warehouse (Tejgaon)',
    initialStock: 20,
    purchasePriceCNY: 500,
    currentLandedCost: 10000,
    retailPrice: 15000,
    wholesalePrice: 13500,
    projectPrice: 12500,
    dealerPrice: 12000,
    minStock: 10,
    isSerialTracked: true
  });

  // Load products & categories on mount & listen to storage events
  useEffect(() => {
    setProducts(getStoredProducts());
    setCategories(getStoredCategories());

    const handleProductsUpdate = () => {
      setProducts(getStoredProducts());
    };
    const handleCategoriesUpdate = () => {
      setCategories(getStoredCategories());
    };

    window.addEventListener('globotech_products_updated', handleProductsUpdate);
    window.addEventListener('globotech_categories_updated', handleCategoriesUpdate);
    return () => {
      window.removeEventListener('globotech_products_updated', handleProductsUpdate);
      window.removeEventListener('globotech_categories_updated', handleCategoriesUpdate);
    };
  }, []);

  // Category creation helper
  const handleCreateNewCategory = (catName?: string, isEdit: boolean = false) => {
    const target = (catName || (isEdit ? newEditCategoryInput : newCategoryInput)).trim();
    if (!target) return;
    if (!categories.includes(target)) {
      const updated = [...categories, target];
      setCategories(updated);
      saveStoredCategories(updated);
    }
    if (isEdit && editingProduct) {
      setEditingProduct({ ...editingProduct, category: target });
      setNewEditCategoryInput('');
      setIsAddingEditCategory(false);
    } else {
      setNewProd((prev) => ({ ...prev, category: target }));
      setNewCategoryInput('');
      setIsAddingCustomCategory(false);
    }
    showToast(`✓ Category "${target}" added!`);
  };

  // Update Low stock filter if prop changes
  useEffect(() => {
    setShowLowStockOnly(filterLowStock);
  }, [filterLowStock]);

  const filtered = products.filter((p) => {
    if (showLowStockOnly && p.stock > p.minStock) return false;
    if (categoryFilter !== 'ALL' && p.category !== categoryFilter) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // 1. ADD NEW PRODUCT
  const handleAddProduct = () => {
    if (!newProd.name.trim() || !newProd.sku.trim()) {
      alert('Please enter Product Name and SKU.');
      return;
    }

    const initialStockNum = Math.max(0, Number(newProd.initialStock) || 0);
    const landedCostNum =
      Number(newProd.currentLandedCost) > 0
        ? Number(newProd.currentLandedCost)
        : Math.round((Number(newProd.purchasePriceCNY) || 0) * 16 * 1.25);

    const newItem: ProductItem = {
      id: `PRD-${Date.now().toString().slice(-5)}`,
      sku: newProd.sku.trim().toUpperCase(),
      barcode: `880${Math.floor(100000000 + Math.random() * 900000000)}`,
      name: newProd.name.trim(),
      category: newProd.category,
      brand: newProd.brand.trim() || 'Globo Tech',
      unit: newProd.unit.trim() || 'pcs',
      stock: initialStockNum,
      minStock: Number(newProd.minStock) || 5,
      purchasePriceCNY: Number(newProd.purchasePriceCNY) || 0,
      currentLandedCost: landedCostNum,
      retailPrice: Number(newProd.retailPrice) || Math.round(landedCostNum * 1.5),
      wholesalePrice: Number(newProd.wholesalePrice) || Math.round(landedCostNum * 1.35),
      projectPrice: Number(newProd.projectPrice) || Math.round(landedCostNum * 1.25),
      dealerPrice: Number(newProd.dealerPrice) || Math.round(landedCostNum * 1.2),
      isSerialTracked: newProd.isSerialTracked
    };

    // Save to products
    const updatedProducts = [newItem, ...products.filter((p) => p.sku !== newItem.sku)];
    setProducts(updatedProducts);
    saveStoredProducts(updatedProducts);

    // Also register in Warehouse Stock
    const currentStock = getStoredWarehouseStock();
    const existingIndex = currentStock.findIndex(
      (s) => s.warehouseName === newProd.targetWarehouse && s.sku === newItem.sku
    );

    let updatedStock: WarehouseStockItem[] = [];
    if (existingIndex >= 0) {
      updatedStock = currentStock.map((s, idx) =>
        idx === existingIndex
          ? {
              ...s,
              available: s.available + initialStockNum,
              unitLandedCost: landedCostNum > 0 ? landedCostNum : s.unitLandedCost
            }
          : s
      );
    } else {
      const newStockItem: WarehouseStockItem = {
        id: `st-${Date.now().toString().slice(-5)}`,
        warehouseName: newProd.targetWarehouse,
        productName: newItem.name,
        sku: newItem.sku,
        available: initialStockNum,
        reserved: 0,
        damaged: 0,
        unitLandedCost: landedCostNum
      };
      updatedStock = [newStockItem, ...currentStock];
    }
    saveStoredWarehouseStock(updatedStock);

    // If initial stock was entered, append to Stock Ledger
    if (initialStockNum > 0) {
      const currentLedger = getStoredStockLedger();
      const newEntry: StockLedgerRecord = {
        id: `led-${Date.now()}`,
        timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
        productName: newItem.name,
        warehouseName: newProd.targetWarehouse,
        movementType: 'OPENING_STOCK',
        quantityDelta: initialStockNum,
        balanceAfter: initialStockNum,
        unitLandedCost: landedCostNum,
        referenceId: `INIT-${Date.now().toString().slice(-4)}`,
        reasonNotes: `Initial opening inventory balance for ${newItem.name}`
      };
      saveStoredStockLedger([newEntry, ...currentLedger]);
    }

    // Also save category to global list if new
    const cat = newItem.category.trim();
    if (cat && !categories.includes(cat)) {
      const updatedCats = [...categories, cat];
      setCategories(updatedCats);
      saveStoredCategories(updatedCats);
    }

    setIsAddModalOpen(false);
    showToast(`✓ Product "${newItem.name}" added successfully with ${initialStockNum} pcs in ${newProd.targetWarehouse}!`);

    // Reset form
    setNewProd({
      name: '',
      sku: '',
      category: 'CCTV & Surveillance',
      brand: 'Hikvision',
      unit: 'pcs',
      targetWarehouse: 'Main Warehouse (Tejgaon)',
      initialStock: 20,
      purchasePriceCNY: 500,
      currentLandedCost: 10000,
      retailPrice: 15000,
      wholesalePrice: 13500,
      projectPrice: 12500,
      dealerPrice: 12000,
      minStock: 10,
      isSerialTracked: true
    });
  };

  // 2. OPEN EDIT MODAL
  const handleOpenEdit = (item: ProductItem) => {
    setEditingProduct({ ...item });
    setIsEditModalOpen(true);
  };

  // 3. SAVE EDITED PRODUCT
  const handleSaveEdit = () => {
    if (!editingProduct) return;
    if (!editingProduct.name.trim() || !editingProduct.sku.trim()) {
      alert('Product Name and SKU are required.');
      return;
    }

    const updated = products.map((p) =>
      p.id === editingProduct.id ? editingProduct : p
    );
    setProducts(updated);
    saveStoredProducts(updated);

    // Also update warehouse stock names if changed
    const currentStock = getStoredWarehouseStock();
    const updatedStock = currentStock.map((s) =>
      s.sku === editingProduct.sku
        ? {
            ...s,
            productName: editingProduct.name,
            unitLandedCost: editingProduct.currentLandedCost || s.unitLandedCost
          }
        : s
    );
    saveStoredWarehouseStock(updatedStock);

    // Also save category to global list if new
    const cat = editingProduct.category.trim();
    if (cat && !categories.includes(cat)) {
      const updatedCats = [...categories, cat];
      setCategories(updatedCats);
      saveStoredCategories(updatedCats);
    }

    setIsEditModalOpen(false);
    setEditingProduct(null);
    showToast(`✓ Updated product "${editingProduct.name}"!`);
  };

  // 4. DELETE PRODUCT
  const handleDeleteProduct = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete "${name}" from the product catalog?`)) {
      const updated = products.filter((p) => p.id !== id);
      setProducts(updated);
      saveStoredProducts(updated);
      showToast(`Deleted product "${name}".`);
    }
  };

  return (
    <div className="space-y-5">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMsg}</span>
        </div>
      )}

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
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
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

        {/* PRIMARY: Add New Product Button */}
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="w-full sm:w-auto px-4 py-2 sm:py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 flex-shrink-0 shadow-blue-600/20 ring-1 ring-blue-500"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Main Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="px-4 py-3 bg-slate-800/40 border-b border-slate-800 text-xs text-slate-300 flex items-center justify-between">
          <span className="font-semibold flex items-center gap-2">
            <Package className="w-4 h-4 text-blue-400" />
            <span>Product Catalog & Multi-Tier Pricing ({filtered.length} products)</span>
          </span>
          <span className="text-[11px] text-slate-400 sm:hidden">👉 Swipe horizontally</span>
        </div>

        <div className="overflow-x-auto touch-scroll">
          <table className="w-full text-left text-xs min-w-[880px]">
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
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={11} className="py-8 text-center text-slate-500">
                    No products found matching criteria. Click{' '}
                    <span
                      onClick={() => setIsAddModalOpen(true)}
                      className="text-blue-400 font-semibold cursor-pointer underline hover:text-blue-300"
                    >
                      Add New Product
                    </span>{' '}
                    to create one.
                  </td>
                </tr>
              ) : (
                filtered.map((item) => {
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
                          <span className="text-[10px] text-blue-400 flex items-center gap-1 mt-0.5 font-sans">
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
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => handleOpenEdit(item)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                            title="Edit Product"
                          >
                            <Edit2 className="w-3.5 h-3.5 text-blue-400" />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(item.id, item.name)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-rose-400 transition"
                            title="Delete Product"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL 1: ADD NEW PRODUCT */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Import / ERP Product"
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
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-blue-600/30"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Save & Register Product</span>
            </button>
          </>
        }
      >
        <div className="space-y-4 text-xs max-h-[75vh] overflow-y-auto pr-1">
          {/* Section 1: Identification */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
              1. Product Identification
            </h4>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Product Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Cisco Catalyst 48-Port Managed Gigabit Switch"
                value={newProd.name}
                onChange={(e) => setNewProd({ ...newProd, name: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  SKU Code <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="SKU-NET-CISCO-48G"
                  value={newProd.sku}
                  onChange={(e) => setNewProd({ ...newProd, sku: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 font-mono text-xs uppercase focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Brand</label>
                <input
                  type="text"
                  placeholder="e.g. Cisco, Hikvision, TP-Link"
                  value={newProd.brand}
                  onChange={(e) => setNewProd({ ...newProd, brand: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-slate-300 font-semibold">Category</label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingCustomCategory(!isAddingCustomCategory);
                      setNewCategoryInput('');
                    }}
                    className="text-[11px] text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 hover:underline"
                  >
                    <Plus className="w-3 h-3" />
                    <span>{isAddingCustomCategory ? 'Choose Existing' : '+ Add New Category'}</span>
                  </button>
                </div>

                {isAddingCustomCategory ? (
                  <div className="flex items-center gap-1.5">
                    <input
                      type="text"
                      placeholder="e.g. Stationery & Paper..."
                      value={newCategoryInput}
                      onChange={(e) => setNewCategoryInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleCreateNewCategory();
                        }
                      }}
                      autoFocus
                      className="flex-1 bg-slate-800 border border-blue-500 rounded-lg p-2 text-slate-100 text-xs focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => handleCreateNewCategory()}
                      className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1 shadow-sm active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAddingCustomCategory(false)}
                      className="px-2.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs rounded-lg"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <select
                    value={newProd.category}
                    onChange={(e) => {
                      if (e.target.value === '__ADD_NEW__') {
                        setIsAddingCustomCategory(true);
                        setNewCategoryInput('');
                      } else {
                        setNewProd({ ...newProd, category: e.target.value });
                      }
                    }}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                    <option value="__ADD_NEW__" className="text-blue-400 font-bold bg-slate-900">
                      ➕ + Add New Category...
                    </option>
                  </select>
                )}
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Unit of Measure</label>
                <select
                  value={newProd.unit}
                  onChange={(e) => setNewProd({ ...newProd, unit: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="pcs">pcs (Pieces)</option>
                  <option value="unit">unit (Units)</option>
                  <option value="box">box (Boxes)</option>
                  <option value="set">set (Sets)</option>
                  <option value="meter">meter (Meters)</option>
                  <option value="roll">roll (Rolls/Coils)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Warehouse Stock & Landed Cost */}
          <div className="space-y-3 pt-2">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
              2. Warehouse Location & Initial Stock
            </h4>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Target Warehouse</label>
              <select
                value={newProd.targetWarehouse}
                onChange={(e) => setNewProd({ ...newProd, targetWarehouse: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs"
              >
                {WAREHOUSES.map((wh) => (
                  <option key={wh} value={wh}>
                    {wh}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Initial Opening Stock ({newProd.unit})
                </label>
                <input
                  type="number"
                  min="0"
                  value={newProd.initialStock}
                  onChange={(e) => setNewProd({ ...newProd, initialStock: Math.max(0, Number(e.target.value)) })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100 font-bold text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Min Reorder Level</label>
                <input
                  type="number"
                  min="1"
                  value={newProd.minStock}
                  onChange={(e) => setNewProd({ ...newProd, minStock: Math.max(1, Number(e.target.value)) })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Landed Cost (BDT) *</label>
                <input
                  type="number"
                  min="0"
                  value={newProd.currentLandedCost}
                  onChange={(e) =>
                    setNewProd({ ...newProd, currentLandedCost: Math.max(0, Number(e.target.value)) })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-blue-400 font-bold text-xs"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Pricing Tiers */}
          <div className="space-y-3 pt-2">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
              3. Multi-Tier Selling Prices (BDT)
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div>
                <label className="block text-slate-400 font-semibold text-[11px] mb-1">Retail (BDT)</label>
                <input
                  type="number"
                  value={newProd.retailPrice || ''}
                  onChange={(e) => setNewProd({ ...newProd, retailPrice: Number(e.target.value) })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100 text-xs font-semibold"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-semibold text-[11px] mb-1">Wholesale (BDT)</label>
                <input
                  type="number"
                  value={newProd.wholesalePrice || ''}
                  onChange={(e) => setNewProd({ ...newProd, wholesalePrice: Number(e.target.value) })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-cyan-400 text-xs font-semibold"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-semibold text-[11px] mb-1">Project (BDT)</label>
                <input
                  type="number"
                  value={newProd.projectPrice || ''}
                  onChange={(e) => setNewProd({ ...newProd, projectPrice: Number(e.target.value) })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-purple-400 text-xs font-semibold"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-semibold text-[11px] mb-1">Dealer (BDT)</label>
                <input
                  type="number"
                  value={newProd.dealerPrice || ''}
                  onChange={(e) => setNewProd({ ...newProd, dealerPrice: Number(e.target.value) })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-300 text-xs font-semibold"
                />
              </div>
            </div>
          </div>

          {/* Serial Tracking Option */}
          <div className="pt-2">
            <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 cursor-pointer">
              <input
                type="checkbox"
                checked={newProd.isSerialTracked}
                onChange={(e) => setNewProd({ ...newProd, isSerialTracked: e.target.checked })}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-700"
              />
              <div>
                <span className="text-slate-200 font-semibold block text-xs">Enable Serial Number & Warranty Tracking</span>
                <span className="text-[10px] text-slate-400">
                  Enables scanning and RMA lifecycle tracking for this hardware model.
                </span>
              </div>
            </label>
          </div>
        </div>
      </Modal>

      {/* MODAL 2: EDIT PRODUCT */}
      {editingProduct && (
        <Modal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setEditingProduct(null);
          }}
          title={`Edit Product: ${editingProduct.name}`}
          footer={
            <>
              <button
                onClick={() => {
                  setIsEditModalOpen(false);
                  setEditingProduct(null);
                }}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
              >
                Save Changes
              </button>
            </>
          }
        >
          <div className="space-y-4 text-xs max-h-[75vh] overflow-y-auto pr-1">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Product Name *</label>
              <input
                type="text"
                value={editingProduct.name}
                onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">SKU Code *</label>
                <input
                  type="text"
                  value={editingProduct.sku}
                  onChange={(e) => setEditingProduct({ ...editingProduct, sku: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100 font-mono uppercase"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Brand</label>
                <input
                  type="text"
                  value={editingProduct.brand}
                  onChange={(e) => setEditingProduct({ ...editingProduct, brand: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-slate-300 font-semibold">Category</label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingEditCategory(!isAddingEditCategory);
                      setNewEditCategoryInput('');
                    }}
                    className="text-[11px] text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 hover:underline"
                  >
                    <Plus className="w-3 h-3" />
                    <span>{isAddingEditCategory ? 'Choose Existing' : '+ Add New Category'}</span>
                  </button>
                </div>

                {isAddingEditCategory ? (
                  <div className="flex items-center gap-1.5">
                    <input
                      type="text"
                      placeholder="e.g. Stationery & Paper..."
                      value={newEditCategoryInput}
                      onChange={(e) => setNewEditCategoryInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleCreateNewCategory(newEditCategoryInput, true);
                        }
                      }}
                      autoFocus
                      className="flex-1 bg-slate-800 border border-blue-500 rounded-lg p-2 text-slate-100 text-xs focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => handleCreateNewCategory(newEditCategoryInput, true)}
                      className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1 shadow-sm active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAddingEditCategory(false)}
                      className="px-2.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs rounded-lg"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <select
                    value={editingProduct.category}
                    onChange={(e) => {
                      if (e.target.value === '__ADD_NEW__') {
                        setIsAddingEditCategory(true);
                        setNewEditCategoryInput('');
                      } else {
                        setEditingProduct({ ...editingProduct, category: e.target.value });
                      }
                    }}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100 text-xs focus:outline-none focus:border-blue-500"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                    <option value="__ADD_NEW__" className="text-blue-400 font-bold bg-slate-900">
                      ➕ + Add New Category...
                    </option>
                  </select>
                )}
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Unit of Measure</label>
                <input
                  type="text"
                  value={editingProduct.unit}
                  onChange={(e) => setEditingProduct({ ...editingProduct, unit: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Landed Cost (BDT)</label>
                <input
                  type="number"
                  value={editingProduct.currentLandedCost}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, currentLandedCost: Number(e.target.value) })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-blue-400 font-bold"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Min Reorder Level</label>
                <input
                  type="number"
                  value={editingProduct.minStock}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, minStock: Number(e.target.value) })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div>
                <label className="block text-slate-400 font-semibold text-[11px] mb-1">Retail (BDT)</label>
                <input
                  type="number"
                  value={editingProduct.retailPrice}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, retailPrice: Number(e.target.value) })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100 font-semibold"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-semibold text-[11px] mb-1">Wholesale (BDT)</label>
                <input
                  type="number"
                  value={editingProduct.wholesalePrice}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, wholesalePrice: Number(e.target.value) })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-cyan-400 font-semibold"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-semibold text-[11px] mb-1">Project (BDT)</label>
                <input
                  type="number"
                  value={editingProduct.projectPrice}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, projectPrice: Number(e.target.value) })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-purple-400 font-semibold"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-semibold text-[11px] mb-1">Dealer (BDT)</label>
                <input
                  type="number"
                  value={editingProduct.dealerPrice}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, dealerPrice: Number(e.target.value) })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-300 font-semibold"
                />
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-center gap-2 p-2 rounded-lg bg-slate-800 border border-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={editingProduct.isSerialTracked}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, isSerialTracked: e.target.checked })
                  }
                  className="w-4 h-4 rounded text-blue-600 bg-slate-900 border-slate-700"
                />
                <span className="text-slate-200 font-medium">Serial Number Tracked</span>
              </label>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
