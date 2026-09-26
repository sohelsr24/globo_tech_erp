'use client';

import React, { useState, useEffect } from 'react';
import {
  Warehouse,
  Plus,
  ArrowRightLeft,
  History,
  PackageCheck,
  AlertCircle,
  Search,
  Filter,
  Package,
  CheckCircle2,
  DollarSign,
  Tag,
  Boxes
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Formatters } from '@/lib/formatters';
import {
  ProductItem,
  WarehouseStockItem,
  StockLedgerRecord,
  getStoredProducts,
  saveStoredProducts,
  getStoredWarehouseStock,
  saveStoredWarehouseStock,
  getStoredStockLedger,
  saveStoredStockLedger
} from '@/lib/productsStorage';

const WAREHOUSE_OPTIONS = [
  'Main Warehouse (Tejgaon)',
  'Project Store (Site Depot)',
  'Office Store (Banani)',
  'Showroom (Gulshan)',
  'Chittagong Regional Depot'
];

const CATEGORY_OPTIONS = [
  'CCTV & Surveillance',
  'Networking',
  'Data Center & Power',
  'Security & Wireless',
  'Accessories & Cables',
  'Fire Safety & Access Control'
];

export function StockView() {
  const [activeTab, setActiveTab] = useState<'inventory' | 'ledger'>('inventory');
  
  // Storage state
  const [warehouseStock, setWarehouseStock] = useState<WarehouseStockItem[]>([]);
  const [ledger, setLedger] = useState<StockLedgerRecord[]>([]);
  const [products, setProducts] = useState<ProductItem[]>([]);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWarehouseFilter, setSelectedWarehouseFilter] = useState('ALL');

  // Modals state
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isGrnModalOpen, setIsGrnModalOpen] = useState(false);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);

  // New Product Modal Form State
  const [newProductForm, setNewProductForm] = useState({
    name: '',
    sku: '',
    category: 'CCTV & Surveillance',
    brand: 'Hikvision',
    unit: 'pcs',
    warehouseName: 'Main Warehouse (Tejgaon)',
    initialStock: 20,
    minStock: 10,
    unitLandedCost: 10000,
    purchasePriceCNY: 500,
    retailPrice: 15000,
    wholesalePrice: 13500,
    projectPrice: 12500,
    dealerPrice: 12000,
    isSerialTracked: true
  });

  // GRN (Goods Receiving) State
  const [grnSelectedProductId, setGrnSelectedProductId] = useState('');
  const [grnWarehouse, setGrnWarehouse] = useState('Main Warehouse (Tejgaon)');
  const [grnQty, setGrnQty] = useState(50);
  const [grnLandedCost, setGrnLandedCost] = useState(10000);
  const [grnRefDoc, setGrnRefDoc] = useState('');
  const [grnNotes, setGrnNotes] = useState('');

  // Transfer State
  const [transferFromWarehouse, setTransferFromWarehouse] = useState('Main Warehouse (Tejgaon)');
  const [transferToWarehouse, setTransferToWarehouse] = useState('Project Store (Site Depot)');
  const [transferStockItemId, setTransferStockItemId] = useState('');
  const [transferQty, setTransferQty] = useState(5);
  const [transferNotes, setTransferNotes] = useState('');

  // Success Toast state
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 4000);
  };

  // Load from persistent localStorage on mount
  useEffect(() => {
    const loadedStock = getStoredWarehouseStock();
    const loadedLedger = getStoredStockLedger();
    const loadedProducts = getStoredProducts();

    setWarehouseStock(loadedStock);
    setLedger(loadedLedger);
    setProducts(loadedProducts);

    if (loadedProducts.length > 0) {
      setGrnSelectedProductId(loadedProducts[0].id);
      setGrnLandedCost(loadedProducts[0].currentLandedCost || 10000);
    }

    // Listen for storage events across components
    const handleStockUpdate = () => setWarehouseStock(getStoredWarehouseStock());
    const handleLedgerUpdate = () => setLedger(getStoredStockLedger());
    const handleProductsUpdate = () => setProducts(getStoredProducts());

    window.addEventListener('globotech_stock_updated', handleStockUpdate);
    window.addEventListener('globotech_ledger_updated', handleLedgerUpdate);
    window.addEventListener('globotech_products_updated', handleProductsUpdate);

    return () => {
      window.removeEventListener('globotech_stock_updated', handleStockUpdate);
      window.removeEventListener('globotech_ledger_updated', handleLedgerUpdate);
      window.removeEventListener('globotech_products_updated', handleProductsUpdate);
    };
  }, []);

  // Update GRN landed cost when product selection changes
  const handleGrnProductChange = (productId: string) => {
    setGrnSelectedProductId(productId);
    const prod = products.find((p) => p.id === productId);
    if (prod) {
      setGrnLandedCost(prod.currentLandedCost);
    }
  };

  // 1. ADD NEW PRODUCT TO WAREHOUSE STOCK
  const handleSaveNewProduct = () => {
    if (!newProductForm.name.trim() || !newProductForm.sku.trim()) {
      alert('Please enter Product Name and SKU Code.');
      return;
    }

    const initialStockNum = Math.max(0, Number(newProductForm.initialStock) || 0);
    const landedCostNum = Math.max(0, Number(newProductForm.unitLandedCost) || 0);
    const minStockNum = Math.max(0, Number(newProductForm.minStock) || 5);

    // Create or update Product in catalog
    const newProdItem: ProductItem = {
      id: `PRD-${Date.now().toString().slice(-5)}`,
      sku: newProductForm.sku.trim().toUpperCase(),
      barcode: `880${Math.floor(100000000 + Math.random() * 900000000)}`,
      name: newProductForm.name.trim(),
      category: newProductForm.category,
      brand: newProductForm.brand.trim() || 'Globo Tech',
      unit: newProductForm.unit.trim() || 'pcs',
      stock: initialStockNum,
      minStock: minStockNum,
      purchasePriceCNY: Number(newProductForm.purchasePriceCNY) || 0,
      currentLandedCost: landedCostNum,
      retailPrice: Number(newProductForm.retailPrice) || Math.round(landedCostNum * 1.5),
      wholesalePrice: Number(newProductForm.wholesalePrice) || Math.round(landedCostNum * 1.35),
      projectPrice: Number(newProductForm.projectPrice) || Math.round(landedCostNum * 1.25),
      dealerPrice: Number(newProductForm.dealerPrice) || Math.round(landedCostNum * 1.2),
      isSerialTracked: newProductForm.isSerialTracked
    };

    const updatedProducts = [newProdItem, ...products.filter((p) => p.sku !== newProdItem.sku)];
    setProducts(updatedProducts);
    saveStoredProducts(updatedProducts);

    // Create or update Warehouse Stock record
    const existingStockIndex = warehouseStock.findIndex(
      (s) => s.warehouseName === newProductForm.warehouseName && s.sku === newProdItem.sku
    );

    let updatedStock: WarehouseStockItem[] = [];
    if (existingStockIndex >= 0) {
      updatedStock = warehouseStock.map((s, idx) =>
        idx === existingStockIndex
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
        warehouseName: newProductForm.warehouseName,
        productName: newProdItem.name,
        sku: newProdItem.sku,
        available: initialStockNum,
        reserved: 0,
        damaged: 0,
        unitLandedCost: landedCostNum
      };
      updatedStock = [newStockItem, ...warehouseStock];
    }

    setWarehouseStock(updatedStock);
    saveStoredWarehouseStock(updatedStock);

    // If initial stock was provided, create Opening Stock ledger record
    if (initialStockNum > 0) {
      const newLedgerEntry: StockLedgerRecord = {
        id: `led-${Date.now()}`,
        timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
        productName: newProdItem.name,
        warehouseName: newProductForm.warehouseName,
        movementType: 'OPENING_STOCK',
        quantityDelta: initialStockNum,
        balanceAfter: initialStockNum,
        unitLandedCost: landedCostNum,
        referenceId: `INIT-${Date.now().toString().slice(-4)}`,
        reasonNotes: `Initial opening inventory balance for ${newProdItem.name}`
      };
      const updatedLedger = [newLedgerEntry, ...ledger];
      setLedger(updatedLedger);
      saveStoredStockLedger(updatedLedger);
    }

    setIsAddProductModalOpen(false);
    showToast(`✓ "${newProdItem.name}" successfully added to ${newProductForm.warehouseName}!`);

    // Reset form
    setNewProductForm({
      name: '',
      sku: '',
      category: 'CCTV & Surveillance',
      brand: 'Hikvision',
      unit: 'pcs',
      warehouseName: 'Main Warehouse (Tejgaon)',
      initialStock: 20,
      minStock: 10,
      unitLandedCost: 10000,
      purchasePriceCNY: 500,
      retailPrice: 15000,
      wholesalePrice: 13500,
      projectPrice: 12500,
      dealerPrice: 12000,
      isSerialTracked: true
    });
  };

  // 2. RECEIVE GOODS (GRN)
  const handleReceiveGrn = () => {
    if (grnQty <= 0) {
      alert('Please enter a valid quantity greater than 0.');
      return;
    }

    const selectedProduct = products.find((p) => p.id === grnSelectedProductId);
    if (!selectedProduct) {
      alert('Please select a product to receive.');
      return;
    }

    const targetSku = selectedProduct.sku;
    const targetItem = warehouseStock.find(
      (s) => s.warehouseName === grnWarehouse && s.sku === targetSku
    );

    let updatedStock: WarehouseStockItem[] = [];
    let balanceAfter = grnQty;

    if (targetItem) {
      balanceAfter = targetItem.available + grnQty;
      updatedStock = warehouseStock.map((s) =>
        s.id === targetItem.id
          ? {
              ...s,
              available: balanceAfter,
              unitLandedCost: grnLandedCost > 0 ? grnLandedCost : s.unitLandedCost
            }
          : s
      );
    } else {
      const newStockItem: WarehouseStockItem = {
        id: `st-${Date.now().toString().slice(-5)}`,
        warehouseName: grnWarehouse,
        productName: selectedProduct.name,
        sku: selectedProduct.sku,
        available: grnQty,
        reserved: 0,
        damaged: 0,
        unitLandedCost: grnLandedCost > 0 ? grnLandedCost : selectedProduct.currentLandedCost
      };
      updatedStock = [newStockItem, ...warehouseStock];
    }

    setWarehouseStock(updatedStock);
    saveStoredWarehouseStock(updatedStock);

    // Update product total stock count in catalog
    const updatedProducts = products.map((p) =>
      p.id === selectedProduct.id
        ? {
            ...p,
            stock: (p.stock || 0) + grnQty,
            currentLandedCost: grnLandedCost > 0 ? grnLandedCost : p.currentLandedCost
          }
        : p
    );
    setProducts(updatedProducts);
    saveStoredProducts(updatedProducts);

    // Add immutable ledger entry
    const newEntry: StockLedgerRecord = {
      id: `led-${Date.now()}`,
      timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
      productName: selectedProduct.name,
      warehouseName: grnWarehouse,
      movementType: 'PURCHASE_GRN',
      quantityDelta: grnQty,
      balanceAfter,
      unitLandedCost: grnLandedCost > 0 ? grnLandedCost : selectedProduct.currentLandedCost,
      referenceId: grnRefDoc.trim() || `GRN-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      reasonNotes: grnNotes.trim() || `Goods Received Note processed into ${grnWarehouse}`
    };

    const updatedLedger = [newEntry, ...ledger];
    setLedger(updatedLedger);
    saveStoredStockLedger(updatedLedger);

    setIsGrnModalOpen(false);
    setGrnNotes('');
    setGrnRefDoc('');
    showToast(`✓ Received +${grnQty} ${selectedProduct.unit} of ${selectedProduct.name} in ${grnWarehouse}!`);
  };

  // 3. INTER-WAREHOUSE STOCK TRANSFER
  const handleStockTransfer = () => {
    if (transferFromWarehouse === transferToWarehouse) {
      alert('Source and destination warehouses must be different.');
      return;
    }

    if (transferQty <= 0) {
      alert('Please enter a valid transfer quantity.');
      return;
    }

    const sourceStock = warehouseStock.find(
      (s) => s.id === transferStockItemId && s.warehouseName === transferFromWarehouse
    );

    if (!sourceStock) {
      alert('Selected item not found in origin warehouse.');
      return;
    }

    if (sourceStock.available < transferQty) {
      alert(`Insufficient stock. Only ${sourceStock.available} available to transfer.`);
      return;
    }

    // Deduct from source
    const updatedSourceQty = sourceStock.available - transferQty;

    // Add to destination
    const destStock = warehouseStock.find(
      (s) => s.warehouseName === transferToWarehouse && s.sku === sourceStock.sku
    );

    let nextStock = warehouseStock.map((s) =>
      s.id === sourceStock.id ? { ...s, available: updatedSourceQty } : s
    );

    let destBalanceAfter = transferQty;
    if (destStock) {
      destBalanceAfter = destStock.available + transferQty;
      nextStock = nextStock.map((s) =>
        s.id === destStock.id ? { ...s, available: destBalanceAfter } : s
      );
    } else {
      const newDestItem: WarehouseStockItem = {
        id: `st-${Date.now().toString().slice(-5)}`,
        warehouseName: transferToWarehouse,
        productName: sourceStock.productName,
        sku: sourceStock.sku,
        available: transferQty,
        reserved: 0,
        damaged: 0,
        unitLandedCost: sourceStock.unitLandedCost
      };
      nextStock.push(newDestItem);
    }

    setWarehouseStock(nextStock);
    saveStoredWarehouseStock(nextStock);

    // Ledger records (OUT and IN)
    const transferRef = `TRF-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const nowTime = new Date().toISOString().slice(0, 16).replace('T', ' ');

    const outEntry: StockLedgerRecord = {
      id: `led-${Date.now()}-out`,
      timestamp: nowTime,
      productName: sourceStock.productName,
      warehouseName: transferFromWarehouse,
      movementType: 'TRANSFER_OUT',
      quantityDelta: -transferQty,
      balanceAfter: updatedSourceQty,
      unitLandedCost: sourceStock.unitLandedCost,
      referenceId: transferRef,
      reasonNotes: `Transferred to ${transferToWarehouse}. ${transferNotes}`.trim()
    };

    const inEntry: StockLedgerRecord = {
      id: `led-${Date.now()}-in`,
      timestamp: nowTime,
      productName: sourceStock.productName,
      warehouseName: transferToWarehouse,
      movementType: 'TRANSFER_IN',
      quantityDelta: transferQty,
      balanceAfter: destBalanceAfter,
      unitLandedCost: sourceStock.unitLandedCost,
      referenceId: transferRef,
      reasonNotes: `Transferred from ${transferFromWarehouse}. ${transferNotes}`.trim()
    };

    const updatedLedger = [outEntry, inEntry, ...ledger];
    setLedger(updatedLedger);
    saveStoredStockLedger(updatedLedger);

    setIsTransferModalOpen(false);
    setTransferNotes('');
    showToast(`✓ Transferred ${transferQty} pcs of ${sourceStock.productName} to ${transferToWarehouse}!`);
  };

  // Filtered Stock Items
  const filteredStock = warehouseStock.filter((st) => {
    if (selectedWarehouseFilter !== 'ALL' && st.warehouseName !== selectedWarehouseFilter) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        st.productName.toLowerCase().includes(q) ||
        st.sku.toLowerCase().includes(q) ||
        st.warehouseName.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Filtered Ledger Items
  const filteredLedger = ledger.filter((entry) => {
    if (selectedWarehouseFilter !== 'ALL' && entry.warehouseName !== selectedWarehouseFilter) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        entry.productName.toLowerCase().includes(q) ||
        entry.warehouseName.toLowerCase().includes(q) ||
        entry.referenceId.toLowerCase().includes(q) ||
        entry.movementType.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Calculate totals
  const totalValuation = warehouseStock.reduce(
    (sum, item) => sum + item.available * item.unitLandedCost,
    0
  );
  const totalAvailablePcs = warehouseStock.reduce((sum, item) => sum + item.available, 0);

  return (
    <div className="space-y-5">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Top Controls Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-slate-900 border border-slate-800 rounded-xl p-3 sm:p-3.5 shadow-sm">
        {/* Left: View Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto touch-scroll pb-1 sm:pb-0 flex-shrink-0">
          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-3.5 py-2 sm:py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 flex-shrink-0 active:scale-95 ${
              activeTab === 'inventory'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Warehouse className="w-4 h-4" />
            <span>Warehouse Stock ({warehouseStock.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('ledger')}
            className={`px-3.5 py-2 sm:py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 flex-shrink-0 active:scale-95 ${
              activeTab === 'ledger'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <History className="w-4 h-4" />
            <span>Stock Ledger ({ledger.length})</span>
          </button>
        </div>

        {/* Center: Search & Warehouse Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 flex-1 max-w-xl">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search product, SKU, warehouse, ref..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          <select
            value={selectedWarehouseFilter}
            onChange={(e) => setSelectedWarehouseFilter(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none flex-shrink-0"
          >
            <option value="ALL">All Warehouses</option>
            {WAREHOUSE_OPTIONS.map((wh) => (
              <option key={wh} value={wh}>
                {wh}
              </option>
            ))}
          </select>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 w-full lg:w-auto flex-wrap">
          {/* PRIMARY: Add New Product Button */}
          <button
            onClick={() => setIsAddProductModalOpen(true)}
            className="flex-1 sm:flex-initial px-3.5 py-2 sm:py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition active:scale-95 shadow-blue-600/20 ring-1 ring-blue-500"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Product</span>
          </button>

          {/* Receive Goods GRN */}
          <button
            onClick={() => {
              if (products.length > 0 && !grnSelectedProductId) {
                setGrnSelectedProductId(products[0].id);
                setGrnLandedCost(products[0].currentLandedCost);
              }
              setIsGrnModalOpen(true);
            }}
            className="flex-1 sm:flex-initial px-3.5 py-2 sm:py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition active:scale-95"
          >
            <PackageCheck className="w-3.5 h-3.5" />
            <span>Receive Goods</span>
          </button>

          {/* Transfer */}
          <button
            onClick={() => {
              const eligible = warehouseStock.filter((s) => s.warehouseName === transferFromWarehouse && s.available > 0);
              if (eligible.length > 0) {
                setTransferStockItemId(eligible[0].id);
              }
              setIsTransferModalOpen(true);
            }}
            className="flex-1 sm:flex-initial px-3.5 py-2 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition active:scale-95 border border-slate-700"
          >
            <ArrowRightLeft className="w-3.5 h-3.5 text-blue-400" />
            <span>Transfer</span>
          </button>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
          <p className="text-[11px] font-medium text-slate-400">Total Stock Items</p>
          <p className="text-base sm:text-lg font-bold text-slate-100 mt-0.5">
            {warehouseStock.length} SKU Locations
          </p>
        </div>
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
          <p className="text-[11px] font-medium text-slate-400">Total Available Units</p>
          <p className="text-base sm:text-lg font-bold text-emerald-400 mt-0.5">
            {totalAvailablePcs.toLocaleString()} pcs
          </p>
        </div>
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
          <p className="text-[11px] font-medium text-slate-400">Total Inventory Valuation</p>
          <p className="text-base sm:text-lg font-bold text-blue-400 mt-0.5">
            {Formatters.currency(totalValuation)}
          </p>
        </div>
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
          <p className="text-[11px] font-medium text-slate-400">Ledger Audit Trail</p>
          <p className="text-base sm:text-lg font-bold text-slate-200 mt-0.5">
            {ledger.length} Transactions
          </p>
        </div>
      </div>

      {activeTab === 'inventory' ? (
        /* Inventory by Warehouse */
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
          <div className="px-4 py-3 bg-slate-800/40 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold flex items-center gap-2">
              <Boxes className="w-4 h-4 text-blue-400" />
              <span>Warehouse Stock Inventory</span>
            </span>
            <span className="text-[11px] text-slate-400">
              Showing {filteredStock.length} of {warehouseStock.length} entries
            </span>
          </div>

          <div className="overflow-x-auto touch-scroll">
            <table className="w-full text-left text-xs min-w-[760px]">
              <thead className="bg-slate-800/80 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Warehouse</th>
                  <th className="py-3 px-4">Product & SKU</th>
                  <th className="py-3 px-4 text-center">Available Stock</th>
                  <th className="py-3 px-4 text-center">Reserved</th>
                  <th className="py-3 px-4 text-center">Damaged</th>
                  <th className="py-3 px-4 text-right">Landed Cost</th>
                  <th className="py-3 px-4 text-right">Valuation (Cost)</th>
                  <th className="py-3 px-4 text-center">Status</th>
                  <th className="py-3 px-4 text-center">Quick Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-200">
                {filteredStock.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-8 text-center text-slate-500">
                      No stock records found matching your query. Click{' '}
                      <span
                        onClick={() => setIsAddProductModalOpen(true)}
                        className="text-blue-400 font-semibold cursor-pointer underline hover:text-blue-300"
                      >
                        Add New Product
                      </span>{' '}
                      to create one.
                    </td>
                  </tr>
                ) : (
                  filteredStock.map((st) => {
                    const valuation = st.available * st.unitLandedCost;
                    const matchingProd = products.find((p) => p.sku === st.sku);
                    const isLow = matchingProd ? st.available <= matchingProd.minStock : st.available <= 10;

                    return (
                      <tr key={st.id} className="hover:bg-slate-800/40 transition">
                        <td className="py-3 px-4 font-sans font-medium text-slate-300">
                          <span className="inline-flex items-center gap-1.5">
                            <Warehouse className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                            <span>{st.warehouseName}</span>
                          </span>
                        </td>
                        <td className="py-3 px-4 font-sans max-w-xs">
                          <div className="font-semibold text-slate-100">{st.productName}</div>
                          <div className="text-[10px] font-mono text-slate-400">{st.sku}</div>
                        </td>
                        <td className="py-3 px-4 text-center font-bold text-sm">
                          <span className={isLow ? 'text-amber-400' : 'text-emerald-400'}>
                            {st.available} pcs
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center font-sans text-slate-400">
                          {st.reserved} pcs
                        </td>
                        <td className="py-3 px-4 text-center font-sans text-slate-400">
                          {st.damaged} pcs
                        </td>
                        <td className="py-3 px-4 text-right font-sans font-medium text-slate-300">
                          {Formatters.currency(st.unitLandedCost)}
                        </td>
                        <td className="py-3 px-4 text-right font-bold font-sans text-blue-400">
                          {Formatters.currency(valuation)}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {st.available === 0 ? (
                            <Badge variant="danger">Out of Stock</Badge>
                          ) : isLow ? (
                            <Badge variant="warning">Low Stock</Badge>
                          ) : (
                            <Badge variant="success">Normal</Badge>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => {
                              const found = products.find((p) => p.sku === st.sku);
                              if (found) {
                                setGrnSelectedProductId(found.id);
                                setGrnLandedCost(st.unitLandedCost);
                              }
                              setGrnWarehouse(st.warehouseName);
                              setIsGrnModalOpen(true);
                            }}
                            className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold transition active:scale-95 border border-slate-700 hover:border-slate-600 inline-flex items-center gap-1"
                            title="Receive more stock for this product"
                          >
                            <Plus className="w-3 h-3 text-emerald-400" />
                            <span>Add Stock</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Immutable Stock Movement Ledger */
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
          <div className="p-3 bg-slate-800/60 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-2">
              <History className="w-4 h-4 text-sky-400" />
              <span>Immutable Stock Ledger: Every physical quantity modification is recorded.</span>
            </span>
            <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Audit Compliance Active
            </span>
          </div>

          <div className="overflow-x-auto touch-scroll">
            <table className="w-full text-left text-xs min-w-[850px]">
              <thead className="bg-slate-800/80 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4">Movement Type</th>
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Warehouse</th>
                  <th className="py-3 px-4 text-center">Quantity Delta</th>
                  <th className="py-3 px-4 text-center">Balance After</th>
                  <th className="py-3 px-4 text-right">Landed Cost</th>
                  <th className="py-3 px-4">Reference Document</th>
                  <th className="py-3 px-4">Reason / Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-200">
                {filteredLedger.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-8 text-center text-slate-500">
                      No ledger transactions found matching filter.
                    </td>
                  </tr>
                ) : (
                  filteredLedger.map((entry) => {
                    const isPositive = entry.quantityDelta > 0;
                    return (
                      <tr key={entry.id} className="hover:bg-slate-800/40 transition">
                        <td className="py-3 px-4 font-mono text-slate-400 text-[11px] whitespace-nowrap">
                          {entry.timestamp}
                        </td>
                        <td className="py-3 px-4 font-sans font-bold">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] ${
                              entry.movementType === 'PURCHASE_GRN' || entry.movementType === 'OPENING_STOCK'
                                ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                                : entry.movementType === 'PROJECT_ISSUE'
                                ? 'bg-purple-950 text-purple-400 border border-purple-800'
                                : entry.movementType === 'TRANSFER_IN' || entry.movementType === 'TRANSFER_OUT'
                                ? 'bg-amber-950 text-amber-400 border border-amber-800'
                                : 'bg-blue-950 text-blue-400 border border-blue-800'
                            }`}
                          >
                            {entry.movementType}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-sans font-medium text-slate-200">
                          {entry.productName}
                        </td>
                        <td className="py-3 px-4 font-sans text-slate-400">{entry.warehouseName}</td>
                        <td
                          className={`py-3 px-4 text-center font-bold text-sm ${
                            isPositive ? 'text-emerald-400' : 'text-rose-400'
                          }`}
                        >
                          {isPositive ? `+${entry.quantityDelta}` : entry.quantityDelta} pcs
                        </td>
                        <td className="py-3 px-4 text-center font-bold text-slate-100 text-sm">
                          {entry.balanceAfter} pcs
                        </td>
                        <td className="py-3 px-4 text-right font-sans text-slate-300 font-medium">
                          {Formatters.currency(entry.unitLandedCost)}
                        </td>
                        <td className="py-3 px-4 text-blue-400 font-bold">{entry.referenceId}</td>
                        <td className="py-3 px-4 font-sans text-slate-400 text-[11px] max-w-xs truncate">
                          {entry.reasonNotes || '—'}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODAL 1: ADD NEW PRODUCT TO WAREHOUSE STOCK */}
      <Modal
        isOpen={isAddProductModalOpen}
        onClose={() => setIsAddProductModalOpen(false)}
        title="Add New Product to Warehouse Stock"
        footer={
          <>
            <button
              onClick={() => setIsAddProductModalOpen(false)}
              className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveNewProduct}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-blue-600/30"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Save & Add Product</span>
            </button>
          </>
        }
      >
        <div className="space-y-4 text-xs max-h-[75vh] overflow-y-auto pr-1">
          {/* Quick Pre-fill from Existing Product */}
          <div className="p-3 bg-slate-800/60 border border-slate-700/60 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Package className="w-4 h-4 text-blue-400" />
                <span>Auto-fill from Existing Registered Product (Optional)</span>
              </label>
              <span className="text-[10px] text-slate-400">Select to clone details</span>
            </div>
            <select
              onChange={(e) => {
                const found = products.find((p) => p.id === e.target.value);
                if (found) {
                  setNewProductForm((prev) => ({
                    ...prev,
                    name: found.name,
                    sku: found.sku,
                    category: found.category,
                    brand: found.brand,
                    unit: found.unit,
                    minStock: found.minStock,
                    unitLandedCost: found.currentLandedCost,
                    purchasePriceCNY: found.purchasePriceCNY,
                    retailPrice: found.retailPrice,
                    wholesalePrice: found.wholesalePrice,
                    projectPrice: found.projectPrice,
                    dealerPrice: found.dealerPrice,
                    isSerialTracked: found.isSerialTracked
                  }));
                }
              }}
              defaultValue=""
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs"
            >
              <option value="" disabled>
                -- Select a product to auto-fill or enter details below --
              </option>
              {products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.sku}) &bull; {p.brand}
                </option>
              ))}
            </select>
          </div>

          {/* Section 1: Basic Information */}
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
                placeholder="e.g. Cisco Catalyst 2960-X 48-Port Switch"
                value={newProductForm.name}
                onChange={(e) => setNewProductForm({ ...newProductForm, name: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  SKU Code <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. SKU-NET-CISCO-48P"
                  value={newProductForm.sku}
                  onChange={(e) => setNewProductForm({ ...newProductForm, sku: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-slate-200 font-mono text-xs uppercase focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Brand / Manufacturer</label>
                <input
                  type="text"
                  placeholder="e.g. Cisco, Hikvision, TP-Link"
                  value={newProductForm.brand}
                  onChange={(e) => setNewProductForm({ ...newProductForm, brand: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Category</label>
                <select
                  value={newProductForm.category}
                  onChange={(e) => setNewProductForm({ ...newProductForm, category: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
                >
                  {CATEGORY_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Unit of Measure</label>
                <select
                  value={newProductForm.unit}
                  onChange={(e) => setNewProductForm({ ...newProductForm, unit: e.target.value })}
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
              <label className="block text-slate-300 font-semibold mb-1">
                Target Warehouse <span className="text-rose-400">*</span>
              </label>
              <select
                value={newProductForm.warehouseName}
                onChange={(e) => setNewProductForm({ ...newProductForm, warehouseName: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs focus:outline-none focus:border-blue-500 font-medium"
              >
                {WAREHOUSE_OPTIONS.map((wh) => (
                  <option key={wh} value={wh}>
                    {wh}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Initial Stock Qty ({newProductForm.unit})
                </label>
                <input
                  type="number"
                  min="0"
                  value={newProductForm.initialStock}
                  onChange={(e) =>
                    setNewProductForm({ ...newProductForm, initialStock: Math.max(0, Number(e.target.value)) })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100 font-bold text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Min Reorder Level</label>
                <input
                  type="number"
                  min="1"
                  value={newProductForm.minStock}
                  onChange={(e) =>
                    setNewProductForm({ ...newProductForm, minStock: Math.max(1, Number(e.target.value)) })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Unit Landed Cost (BDT) <span className="text-rose-400">*</span>
                </label>
                <input
                  type="number"
                  min="0"
                  value={newProductForm.unitLandedCost}
                  onChange={(e) =>
                    setNewProductForm({ ...newProductForm, unitLandedCost: Math.max(0, Number(e.target.value)) })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-blue-400 font-bold text-xs focus:outline-none focus:border-blue-500"
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
                  value={newProductForm.retailPrice || ''}
                  onChange={(e) =>
                    setNewProductForm({ ...newProductForm, retailPrice: Number(e.target.value) })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs font-semibold focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-semibold text-[11px] mb-1">Wholesale (BDT)</label>
                <input
                  type="number"
                  value={newProductForm.wholesalePrice || ''}
                  onChange={(e) =>
                    setNewProductForm({ ...newProductForm, wholesalePrice: Number(e.target.value) })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-cyan-400 text-xs font-semibold focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-semibold text-[11px] mb-1">Project (BDT)</label>
                <input
                  type="number"
                  value={newProductForm.projectPrice || ''}
                  onChange={(e) =>
                    setNewProductForm({ ...newProductForm, projectPrice: Number(e.target.value) })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-purple-400 text-xs font-semibold focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-semibold text-[11px] mb-1">Dealer (BDT)</label>
                <input
                  type="number"
                  value={newProductForm.dealerPrice || ''}
                  onChange={(e) =>
                    setNewProductForm({ ...newProductForm, dealerPrice: Number(e.target.value) })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-300 text-xs font-semibold focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Serial Tracking Option */}
          <div className="pt-2">
            <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 cursor-pointer">
              <input
                type="checkbox"
                checked={newProductForm.isSerialTracked}
                onChange={(e) => setNewProductForm({ ...newProductForm, isSerialTracked: e.target.checked })}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-700"
              />
              <div>
                <span className="text-slate-200 font-semibold block text-xs">Enable Serial Number & Warranty Tracking</span>
                <span className="text-[10px] text-slate-400">
                  Allows scanning barcoded serial numbers during GRN, sales delivery, and RMA warranty claims.
                </span>
              </div>
            </label>
          </div>
        </div>
      </Modal>

      {/* MODAL 2: RECEIVE GOODS (GRN) */}
      <Modal
        isOpen={isGrnModalOpen}
        onClose={() => setIsGrnModalOpen(false)}
        title="Receive Goods (GRN - Goods Received Note)"
        footer={
          <>
            <button
              onClick={() => setIsGrnModalOpen(false)}
              className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleReceiveGrn}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-emerald-600/30"
            >
              <PackageCheck className="w-3.5 h-3.5" />
              <span>Confirm Goods Receiving</span>
            </button>
          </>
        }
      >
        <div className="space-y-4 text-xs">
          {/* Target Warehouse */}
          <div>
            <label className="block text-slate-300 font-semibold mb-1">Target Receiving Warehouse</label>
            <select
              value={grnWarehouse}
              onChange={(e) => setGrnWarehouse(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 font-medium"
            >
              {WAREHOUSE_OPTIONS.map((wh) => (
                <option key={wh} value={wh}>
                  {wh}
                </option>
              ))}
            </select>
          </div>

          {/* Product Dropdown Selector */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-slate-300 font-semibold">Select Product to Receive *</label>
              <button
                type="button"
                onClick={() => {
                  setIsGrnModalOpen(false);
                  setIsAddProductModalOpen(true);
                }}
                className="text-[11px] text-blue-400 hover:text-blue-300 underline font-semibold flex items-center gap-1"
              >
                <Plus className="w-3 h-3" />
                <span>Product not listed? Add New</span>
              </button>
            </div>

            <select
              value={grnSelectedProductId}
              onChange={(e) => handleGrnProductChange(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-slate-100 font-medium text-xs focus:outline-none focus:border-blue-500"
            >
              {products.map((p) => {
                const stockInWh = warehouseStock.find(
                  (s) => s.warehouseName === grnWarehouse && s.sku === p.sku
                )?.available ?? 0;

                return (
                  <option key={p.id} value={p.id}>
                    {p.name} [{p.sku}] &bull; Current in {grnWarehouse.split(' ')[0]}: {stockInWh} {p.unit}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Received Quantity (pcs) *</label>
              <input
                type="number"
                min="1"
                value={grnQty}
                onChange={(e) => setGrnQty(Math.max(1, Number(e.target.value)))}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-slate-100 text-sm font-bold focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Unit Landed Cost (BDT) *</label>
              <input
                type="number"
                min="0"
                value={grnLandedCost}
                onChange={(e) => setGrnLandedCost(Math.max(0, Number(e.target.value)))}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 sm:p-2 text-blue-400 text-sm font-bold focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-400 font-semibold mb-1">Reference PO / Import Document</label>
              <input
                type="text"
                placeholder="e.g. GRN-2026-004 or IMP-CHINA-982"
                value={grnRefDoc}
                onChange={(e) => setGrnRefDoc(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs"
              />
            </div>

            <div>
              <label className="block text-slate-400 font-semibold mb-1">Inspection Notes / Batch</label>
              <input
                type="text"
                placeholder="e.g. Physical carton inspection passed OK"
                value={grnNotes}
                onChange={(e) => setGrnNotes(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs"
              />
            </div>
          </div>

          <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-800/60 text-slate-300 text-[11px]">
            ⚡ <strong>Stock Ledger Rule:</strong> Only physically inspected and verified quantities enter active warehouse stock. A formal GRN document and immutable ledger record will be generated automatically.
          </div>
        </div>
      </Modal>

      {/* MODAL 3: INTER-WAREHOUSE STOCK TRANSFER */}
      <Modal
        isOpen={isTransferModalOpen}
        onClose={() => setIsTransferModalOpen(false)}
        title="Inter-Warehouse Stock Transfer"
        footer={
          <>
            <button
              onClick={() => setIsTransferModalOpen(false)}
              className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleStockTransfer}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5"
            >
              <ArrowRightLeft className="w-3.5 h-3.5" />
              <span>Authorize Transfer</span>
            </button>
          </>
        }
      >
        <div className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">From Warehouse (Origin)</label>
              <select
                value={transferFromWarehouse}
                onChange={(e) => {
                  const newOrigin = e.target.value;
                  setTransferFromWarehouse(newOrigin);
                  const eligible = warehouseStock.filter((s) => s.warehouseName === newOrigin && s.available > 0);
                  if (eligible.length > 0) {
                    setTransferStockItemId(eligible[0].id);
                  } else {
                    setTransferStockItemId('');
                  }
                }}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs"
              >
                {WAREHOUSE_OPTIONS.map((wh) => (
                  <option key={wh} value={wh}>
                    {wh}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">To Warehouse (Destination)</label>
              <select
                value={transferToWarehouse}
                onChange={(e) => setTransferToWarehouse(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs"
              >
                {WAREHOUSE_OPTIONS.filter((wh) => wh !== transferFromWarehouse).map((wh) => (
                  <option key={wh} value={wh}>
                    {wh}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Select Product to Transfer *</label>
            <select
              value={transferStockItemId}
              onChange={(e) => setTransferStockItemId(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs"
            >
              {warehouseStock
                .filter((s) => s.warehouseName === transferFromWarehouse && s.available > 0)
                .map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.productName} ({s.sku}) &bull; Available: {s.available} pcs
                  </option>
                ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Transfer Quantity (pcs) *</label>
              <input
                type="number"
                min="1"
                value={transferQty}
                onChange={(e) => setTransferQty(Math.max(1, Number(e.target.value)))}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100 font-bold text-xs"
              />
            </div>

            <div>
              <label className="block text-slate-400 font-semibold mb-1">Challan / Transit Reference</label>
              <input
                type="text"
                placeholder="e.g. Inter-depot Dispatch Challan #44"
                value={transferNotes}
                onChange={(e) => setTransferNotes(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs"
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
