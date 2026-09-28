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
  Boxes,
  MinusCircle,
  TrendingDown,
  LayoutGrid,
  List
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
  saveStoredStockLedger,
  getStoredCategories,
  saveStoredCategories
} from '@/lib/productsStorage';

const WAREHOUSE_OPTIONS = [
  'Main Warehouse (Tejgaon)',
  'Project Store (Site Depot)',
  'Office Store (Banani)',
  'Showroom (Gulshan)',
  'Chittagong Regional Depot'
];

export function StockView({ globalSearchQuery }: { globalSearchQuery?: string } = {}) {
  const [activeTab, setActiveTab] = useState<'inventory' | 'ledger'>('inventory');
  const [stockViewMode, setStockViewMode] = useState<'cards' | 'table'>('cards');

  // Automatically default to table view on desktop screens (>=1024px)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      setStockViewMode('table');
    }
  }, []);
  
  // Storage state
  const [warehouseStock, setWarehouseStock] = useState<WarehouseStockItem[]>(() => getStoredWarehouseStock());
  const [ledger, setLedger] = useState<StockLedgerRecord[]>(() => getStoredStockLedger());
  const [products, setProducts] = useState<ProductItem[]>(() => getStoredProducts());
  const [categories, setCategories] = useState<string[]>(() => getStoredCategories());
  const [isAddingCustomCategory, setIsAddingCustomCategory] = useState(false);
  const [newCategoryInput, setNewCategoryInput] = useState('');

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState(globalSearchQuery || '');
  const [selectedWarehouseFilter, setSelectedWarehouseFilter] = useState('ALL');

  useEffect(() => {
    if (globalSearchQuery !== undefined && globalSearchQuery !== searchQuery) {
      setSearchQuery(globalSearchQuery);
    }
  }, [globalSearchQuery]);

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

  // Stock Decrease / Deduction / Adjustment State
  const [isDecreaseModalOpen, setIsDecreaseModalOpen] = useState(false);
  const [decreaseWarehouse, setDecreaseWarehouse] = useState('Main Warehouse (Tejgaon)');
  const [decreaseStockItemId, setDecreaseStockItemId] = useState('');
  const [decreaseQty, setDecreaseQty] = useState(1);
  const [decreaseReason, setDecreaseReason] = useState<
    'SALES_DELIVERY' | 'DAMAGED_RECORD' | 'DAMAGED_WRITE_OFF' | 'SAMPLE_ISSUE' | 'INTERNAL_PROJECT' | 'AUDIT_CORRECTION' | 'RETURN_SUPPLIER'
  >('SALES_DELIVERY');
  const [decreaseRefDoc, setDecreaseRefDoc] = useState('');
  const [decreaseNotes, setDecreaseNotes] = useState('');

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
    const loadedCategories = getStoredCategories();

    setWarehouseStock(loadedStock);
    setLedger(loadedLedger);
    setProducts(loadedProducts);
    setCategories(loadedCategories);

    if (loadedProducts.length > 0) {
      setGrnSelectedProductId(loadedProducts[0].id);
      setGrnLandedCost(loadedProducts[0].currentLandedCost || 10000);
    }

    // Listen for storage events across components
    const handleStockUpdate = () => setWarehouseStock(getStoredWarehouseStock());
    const handleLedgerUpdate = () => setLedger(getStoredStockLedger());
    const handleProductsUpdate = () => setProducts(getStoredProducts());
    const handleCategoriesUpdate = () => setCategories(getStoredCategories());

    window.addEventListener('globotech_stock_updated', handleStockUpdate);
    window.addEventListener('globotech_ledger_updated', handleLedgerUpdate);
    window.addEventListener('globotech_products_updated', handleProductsUpdate);
    window.addEventListener('globotech_categories_updated', handleCategoriesUpdate);

    return () => {
      window.removeEventListener('globotech_stock_updated', handleStockUpdate);
      window.removeEventListener('globotech_ledger_updated', handleLedgerUpdate);
      window.removeEventListener('globotech_products_updated', handleProductsUpdate);
      window.removeEventListener('globotech_categories_updated', handleCategoriesUpdate);
    };
  }, []);

  // Helper to add custom category
  const handleCreateNewCategory = (catName?: string) => {
    const target = (catName || newCategoryInput).trim();
    if (!target) return;
    if (!categories.includes(target)) {
      const updated = [...categories, target];
      setCategories(updated);
      saveStoredCategories(updated);
    }
    setNewProductForm((prev) => ({ ...prev, category: target }));
    setNewCategoryInput('');
    setIsAddingCustomCategory(false);
    showToast(`✓ Category "${target}" added!`);
  };

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

    // Also save category to global list if new
    const catName = newProductForm.category.trim();
    if (catName && !categories.includes(catName)) {
      const updatedCats = [...categories, catName];
      setCategories(updatedCats);
      saveStoredCategories(updatedCats);
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

  // 4. STOCK DECREASE / DEDUCTION / ADJUSTMENT
  const handleOpenDecreaseModal = (stockItem: WarehouseStockItem) => {
    setDecreaseWarehouse(stockItem.warehouseName);
    setDecreaseStockItemId(stockItem.id);
    setDecreaseQty(1);
    setDecreaseReason('SALES_DELIVERY');
    setDecreaseRefDoc('');
    setDecreaseNotes('');
    setIsDecreaseModalOpen(true);
  };

  const handleDecreaseStockSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!decreaseStockItemId) {
      alert('Please select a product to decrease stock.');
      return;
    }

    const targetStock = warehouseStock.find((s) => s.id === decreaseStockItemId);
    if (!targetStock) {
      alert('Selected stock item not found.');
      return;
    }

    const qtyToDeduct = Math.floor(Number(decreaseQty));
    if (isNaN(qtyToDeduct) || qtyToDeduct <= 0) {
      alert('Please enter a valid deduction quantity greater than 0.');
      return;
    }

    if (qtyToDeduct > targetStock.available) {
      alert(`Insufficient available stock! Only ${targetStock.available} pcs available in ${targetStock.warehouseName}.`);
      return;
    }

    const newAvailable = targetStock.available - qtyToDeduct;
    const isDamagedRecord = decreaseReason === 'DAMAGED_RECORD';
    const newDamaged = isDamagedRecord ? (targetStock.damaged || 0) + qtyToDeduct : targetStock.damaged;

    // 1. Update warehouseStock
    const updatedStock = warehouseStock.map((s) =>
      s.id === targetStock.id
        ? {
            ...s,
            available: newAvailable,
            damaged: newDamaged
          }
        : s
    );
    setWarehouseStock(updatedStock);
    saveStoredWarehouseStock(updatedStock);

    // 2. Update global catalog stock count in products
    const updatedProducts = products.map((p) =>
      p.sku === targetStock.sku
        ? {
            ...p,
            stock: Math.max(0, (p.stock || 0) - qtyToDeduct)
          }
        : p
    );
    setProducts(updatedProducts);
    saveStoredProducts(updatedProducts);

    // 3. Create Audit Stock Ledger Record
    const reasonLabels: Record<string, string> = {
      SALES_DELIVERY: 'Sales / Client Delivery (কাস্টমার ডেলিভারি)',
      DAMAGED_RECORD: 'Damaged Stock Hold (ড্যামেজ মাল সংরক্ষণ)',
      DAMAGED_WRITE_OFF: 'Damaged Write-Off (নষ্ট মাল বাতিল)',
      SAMPLE_ISSUE: 'Sample / Testing Issue (স্যাম্পল বা টেস্টে প্রদান)',
      INTERNAL_PROJECT: 'Project Site Consumption (সাইট প্রজেক্টে ব্যবহার)',
      AUDIT_CORRECTION: 'Audit Count Correction (স্টক গণনা সংশোধন)',
      RETURN_SUPPLIER: 'Return to Supplier (সাপ্লায়ারকে ফেরত প্রদান)'
    };

    const reasonLabel = reasonLabels[decreaseReason] || decreaseReason;
    const generatedRef = decreaseRefDoc.trim() || `OUT-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const newEntry: StockLedgerRecord = {
      id: `led-${Date.now()}`,
      timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
      productName: targetStock.productName,
      warehouseName: targetStock.warehouseName,
      movementType: decreaseReason,
      quantityDelta: -qtyToDeduct, // Negative quantity for decrease
      balanceAfter: newAvailable,
      unitLandedCost: targetStock.unitLandedCost,
      referenceId: generatedRef,
      reasonNotes: `${reasonLabel}${decreaseNotes.trim() ? `: ${decreaseNotes.trim()}` : ''}`
    };

    const updatedLedger = [newEntry, ...ledger];
    setLedger(updatedLedger);
    saveStoredStockLedger(updatedLedger);

    // 4. Reset & Notify
    setIsDecreaseModalOpen(false);
    setDecreaseNotes('');
    setDecreaseRefDoc('');
    setDecreaseQty(1);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('globotech_stock_updated', { detail: updatedStock }));
      window.dispatchEvent(new CustomEvent('globotech_products_updated', { detail: updatedProducts }));
      window.dispatchEvent(new CustomEvent('globotech_ledger_updated', { detail: updatedLedger }));
    }

    showToast(
      `✓ Successfully decreased -${qtyToDeduct} pcs of "${targetStock.productName}" from ${targetStock.warehouseName}! New balance: ${newAvailable} pcs.`
    );
  };

  const selectedDecreaseStock = warehouseStock.find((s) => s.id === decreaseStockItemId);

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

        {/* View Mode Switcher & Right Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full lg:w-auto">
          {/* Card / Table Switcher */}
          <div className="flex items-center justify-center bg-slate-800/90 border border-slate-700/80 rounded-lg p-0.5 flex-shrink-0">
            <button
              type="button"
              onClick={() => setStockViewMode('cards')}
              className={`flex-1 sm:flex-initial px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition ${
                stockViewMode === 'cards'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Cards View (Optimized for Mobile)"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>
            <button
              type="button"
              onClick={() => setStockViewMode('table')}
              className={`flex-1 sm:flex-initial px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition ${
                stockViewMode === 'table'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Table View (Full Spreadsheet)"
            >
              <List className="w-3.5 h-3.5" />
              <span>Table</span>
            </button>
          </div>

          {/* Action buttons in a 2x2 grid on mobile */}
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setIsAddProductModalOpen(true)}
              className="px-3 py-2 sm:py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition active:scale-95 shadow-blue-600/20 ring-1 ring-blue-500 min-h-[40px] sm:min-h-0"
            >
              <Plus className="w-4 h-4" />
              <span className="truncate">Add Product</span>
            </button>

            <button
              onClick={() => {
                if (products.length > 0 && !grnSelectedProductId) {
                  setGrnSelectedProductId(products[0].id);
                  setGrnLandedCost(products[0].currentLandedCost);
                }
                setIsGrnModalOpen(true);
              }}
              className="px-3 py-2 sm:py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition active:scale-95 min-h-[40px] sm:min-h-0"
            >
              <PackageCheck className="w-3.5 h-3.5" />
              <span className="truncate">Receive Goods</span>
            </button>

            <button
              onClick={() => {
                const eligible = warehouseStock.filter((s) => s.warehouseName === transferFromWarehouse && s.available > 0);
                if (eligible.length > 0) {
                  setTransferStockItemId(eligible[0].id);
                }
                setIsTransferModalOpen(true);
              }}
              className="px-3 py-2 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition active:scale-95 border border-slate-700 min-h-[40px] sm:min-h-0"
            >
              <ArrowRightLeft className="w-3.5 h-3.5 text-blue-400" />
              <span className="truncate">Transfer</span>
            </button>

            <button
              onClick={() => {
                const availableItems = warehouseStock.filter((s) => s.available > 0);
                if (availableItems.length > 0) {
                  const first = availableItems[0];
                  setDecreaseWarehouse(first.warehouseName);
                  setDecreaseStockItemId(first.id);
                }
                setDecreaseQty(1);
                setDecreaseReason('SALES_DELIVERY');
                setDecreaseRefDoc('');
                setDecreaseNotes('');
                setIsDecreaseModalOpen(true);
              }}
              className="px-3 py-2 sm:py-1.5 rounded-lg bg-rose-600/90 hover:bg-rose-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition active:scale-95 shadow-rose-600/20 ring-1 ring-rose-500 min-h-[40px] sm:min-h-0"
              title="Deduct or decrease stock for sales, damage, or adjustment"
            >
              <MinusCircle className="w-3.5 h-3.5" />
              <span className="truncate">Deduct Stock</span>
            </button>
          </div>
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
        stockViewMode === 'cards' ? (
          <div className="space-y-3">
            {filteredStock.length === 0 ? (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-500">
                <Boxes className="w-10 h-10 mx-auto mb-2 text-slate-600 opacity-50" />
                <p className="text-sm font-semibold text-slate-300">No stock records found</p>
                <button
                  onClick={() => setIsAddProductModalOpen(true)}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-xl inline-flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Product</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {filteredStock.map((st) => {
                  const valuation = st.available * st.unitLandedCost;
                  const matchingProd = products.find((p) => p.sku === st.sku);
                  const isLow = matchingProd ? st.available <= matchingProd.minStock : st.available <= 10;

                  return (
                    <div
                      key={st.id}
                      className="bg-slate-900/90 border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-4 space-y-3 transition shadow-lg flex flex-col justify-between"
                    >
                      <div>
                        {/* Top Warehouse Badge & Stock Status */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60 truncate">
                            <Warehouse className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                            <span className="truncate">{st.warehouseName}</span>
                          </span>
                          <div>
                            {st.available === 0 ? (
                              <Badge variant="danger">Out of Stock</Badge>
                            ) : isLow ? (
                              <Badge variant="warning">Low Stock</Badge>
                            ) : (
                              <Badge variant="success">Normal</Badge>
                            )}
                          </div>
                        </div>

                        {/* Product Name & SKU */}
                        <h3 className="font-bold text-slate-100 text-sm leading-snug line-clamp-2">
                          {st.productName}
                        </h3>
                        <div className="font-mono text-xs text-blue-400 mt-1 font-semibold">
                          {st.sku}
                        </div>
                      </div>

                      {/* Stock Metrics 2x2 */}
                      <div className="grid grid-cols-2 gap-2 bg-slate-950/70 border border-slate-800/80 rounded-xl p-3 text-xs">
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase font-semibold block">Available</span>
                          <div className={`font-bold text-base ${isLow ? 'text-amber-400' : 'text-emerald-400'}`}>
                            {st.available} pcs
                          </div>
                          <span className="text-[10px] text-slate-500">Reserved: {st.reserved} pcs</span>
                        </div>

                        <div>
                          <span className="text-[10px] text-slate-500 uppercase font-semibold block">Landed Cost</span>
                          <div className="font-bold text-sm text-slate-200">
                            {Formatters.currency(st.unitLandedCost)}
                          </div>
                          <span className="text-[10px] text-slate-500">Per unit</span>
                        </div>

                        <div className="col-span-2 pt-1.5 border-t border-slate-800/60 flex items-center justify-between">
                          <span className="text-[11px] text-slate-400 font-medium">Batch Valuation:</span>
                          <span className="font-bold text-xs text-blue-400">{Formatters.currency(valuation)}</span>
                        </div>
                      </div>

                      {/* Quick action buttons with 42px touch targets */}
                      <div className="flex items-center gap-2 pt-1 border-t border-slate-800/80">
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
                          className="flex-1 min-h-[42px] py-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition active:scale-95 border border-slate-700 flex items-center justify-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Add Stock</span>
                        </button>
                        <button
                          onClick={() => handleOpenDecreaseModal(st)}
                          className="flex-1 min-h-[42px] py-2 px-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-semibold transition active:scale-95 border border-rose-500/30 flex items-center justify-center gap-1.5"
                        >
                          <MinusCircle className="w-3.5 h-3.5 text-rose-400" />
                          <span>Deduct</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="px-4 py-3 bg-slate-800/40 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <span className="font-semibold flex items-center gap-2">
                <Boxes className="w-4 h-4 text-blue-400" />
                <span>Warehouse Stock Inventory</span>
              </span>
              <span className="text-[11px] text-slate-400">
                Showing {filteredStock.length} of {warehouseStock.length} entries &bull; <span className="sm:hidden text-blue-400">👉 Swipe table</span>
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
                            <div className="flex items-center justify-center gap-1.5">
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
                                title="Receive / Add more stock"
                              >
                                <Plus className="w-3 h-3 text-emerald-400" />
                                <span>Add Stock</span>
                              </button>
                              <button
                                onClick={() => handleOpenDecreaseModal(st)}
                                className="px-2.5 py-1 rounded bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-[11px] font-semibold transition active:scale-95 border border-rose-500/30 hover:border-rose-500/50 inline-flex items-center gap-1"
                                title="Decrease / Deduct stock for sales, damage, or adjustment"
                              >
                                <MinusCircle className="w-3 h-3 text-rose-400" />
                                <span>Decrease</span>
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
        )
      ) : (
        /* Immutable Stock Movement Ledger */
        stockViewMode === 'cards' ? (
          <div className="space-y-3">
            {filteredLedger.length === 0 ? (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-500">
                <History className="w-10 h-10 mx-auto mb-2 text-slate-600 opacity-50" />
                <p className="text-sm font-semibold text-slate-300">No stock movement records found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {filteredLedger.map((entry) => {
                  const isPositive = entry.quantityDelta > 0;
                  return (
                    <div
                      key={entry.id}
                      className="bg-slate-900/90 border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-4 space-y-3 transition shadow-lg"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs text-slate-400">
                          {entry.timestamp}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            entry.movementType === 'PURCHASE_GRN' || entry.movementType === 'OPENING_STOCK'
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                              : entry.movementType === 'PROJECT_ISSUE' || entry.movementType === 'INTERNAL_PROJECT'
                              ? 'bg-purple-950 text-purple-400 border border-purple-800'
                              : entry.movementType === 'TRANSFER_IN' || entry.movementType === 'TRANSFER_OUT'
                              ? 'bg-amber-950 text-amber-400 border border-amber-800'
                              : entry.movementType === 'DAMAGED_RECORD' || entry.movementType === 'DAMAGED_WRITE_OFF'
                              ? 'bg-rose-950 text-rose-400 border border-rose-800'
                              : entry.movementType === 'SALES_DELIVERY'
                              ? 'bg-cyan-950 text-cyan-400 border border-cyan-800'
                              : 'bg-rose-950 text-rose-400 border border-rose-800'
                          }`}
                        >
                          {entry.movementType}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-100 text-sm">{entry.productName}</h4>
                        <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                          <Warehouse className="w-3 h-3 text-slate-500" />
                          <span>{entry.warehouseName}</span>
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 bg-slate-950/70 border border-slate-800/80 rounded-xl p-3 text-xs">
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase font-semibold block">Quantity Delta</span>
                          <div className={`font-bold text-base ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {isPositive ? `+${entry.quantityDelta}` : entry.quantityDelta} pcs
                          </div>
                        </div>

                        <div>
                          <span className="text-[10px] text-slate-500 uppercase font-semibold block">Balance After</span>
                          <div className="font-bold text-base text-slate-100">
                            {entry.balanceAfter} pcs
                          </div>
                        </div>

                        <div className="col-span-2 pt-1 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                          <span className="text-slate-400 font-medium">Ref Doc:</span>
                          <span className="font-mono font-bold text-blue-400">{entry.referenceId}</span>
                        </div>
                      </div>

                      {entry.reasonNotes && (
                        <p className="text-[11px] text-slate-400 italic bg-slate-800/40 p-2 rounded-lg border border-slate-800">
                          {entry.reasonNotes}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="p-3 bg-slate-800/60 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-2">
                <History className="w-4 h-4 text-sky-400" />
                <span>Immutable Stock Ledger</span>
              </span>
              <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Audit Active
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
                                  : entry.movementType === 'PROJECT_ISSUE' || entry.movementType === 'INTERNAL_PROJECT'
                                  ? 'bg-purple-950 text-purple-400 border border-purple-800'
                                  : entry.movementType === 'TRANSFER_IN' || entry.movementType === 'TRANSFER_OUT'
                                  ? 'bg-amber-950 text-amber-400 border border-amber-800'
                                  : entry.movementType === 'DAMAGED_RECORD' || entry.movementType === 'DAMAGED_WRITE_OFF'
                                  ? 'bg-rose-950 text-rose-400 border border-rose-800'
                                  : entry.movementType === 'SALES_DELIVERY'
                                  ? 'bg-cyan-950 text-cyan-400 border border-cyan-800'
                                  : 'bg-rose-950 text-rose-400 border border-rose-800'
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
        )
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
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold min-h-[42px] transition active:scale-95"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveNewProduct}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30 min-h-[42px] transition active:scale-95"
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
                    value={newProductForm.category}
                    onChange={(e) => {
                      if (e.target.value === '__ADD_NEW__') {
                        setIsAddingCustomCategory(true);
                        setNewCategoryInput('');
                      } else {
                        setNewProductForm({ ...newProductForm, category: e.target.value });
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
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold min-h-[42px] transition active:scale-95"
            >
              Cancel
            </button>
            <button
              onClick={handleReceiveGrn}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/30 min-h-[42px] transition active:scale-95"
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
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold min-h-[42px] transition active:scale-95"
            >
              Cancel
            </button>
            <button
              onClick={handleStockTransfer}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30 min-h-[42px] transition active:scale-95"
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

      {/* ========================================================
          MODAL 4: DECREASE / DEDUCT STOCK (স্টক কমানো ও অ্যাডজাস্টমেন্ট)
          ======================================================== */}
      {isDecreaseModalOpen && (
        <Modal
          isOpen={isDecreaseModalOpen}
          onClose={() => setIsDecreaseModalOpen(false)}
          title="Decrease / Deduct Inventory Stock (স্টক কমানো ও অ্যাডজাস্টমেন্ট)"
          maxWidth="xl"
        >
          <form onSubmit={handleDecreaseStockSubmit} className="space-y-4 text-xs">
            {/* Warehouse Selector */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Source Warehouse / Store (গুদাম নির্বাচন) *
              </label>
              <select
                value={decreaseWarehouse}
                onChange={(e) => {
                  const wh = e.target.value;
                  setDecreaseWarehouse(wh);
                  const inWh = warehouseStock.filter((s) => s.warehouseName === wh && s.available > 0);
                  if (inWh.length > 0) {
                    setDecreaseStockItemId(inWh[0].id);
                  } else {
                    setDecreaseStockItemId('');
                  }
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-rose-500 focus:outline-none"
              >
                {WAREHOUSE_OPTIONS.map((wh) => (
                  <option key={wh} value={wh}>
                    {wh}
                  </option>
                ))}
              </select>
            </div>

            {/* Product Selector */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Product & Available Balance (পণ্য নির্বাচন) *
              </label>
              <select
                value={decreaseStockItemId}
                onChange={(e) => {
                  setDecreaseStockItemId(e.target.value);
                  const sel = warehouseStock.find((s) => s.id === e.target.value);
                  if (sel && decreaseQty > sel.available) {
                    setDecreaseQty(Math.max(1, sel.available));
                  }
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-rose-500 focus:outline-none"
                required
              >
                <option value="">-- Choose Product to Decrease Stock --</option>
                {warehouseStock
                  .filter((s) => s.warehouseName === decreaseWarehouse)
                  .map((st) => (
                    <option key={st.id} value={st.id} disabled={st.available <= 0}>
                      {st.productName} ({st.sku}) — Available: {st.available} pcs {st.available <= 0 ? '(Out of Stock)' : ''}
                    </option>
                  ))}
              </select>
            </div>

            {/* Selected Product Stock Card Preview */}
            {selectedDecreaseStock && (
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Selected Item:</span>
                  <span className="text-slate-100 font-bold">{selectedDecreaseStock.productName}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-900 text-center">
                  <div className="bg-slate-900 p-2 rounded-lg">
                    <div className="text-[10px] text-slate-400">Current Available</div>
                    <div className="text-sm font-bold text-emerald-400 mt-0.5">{selectedDecreaseStock.available} pcs</div>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-lg">
                    <div className="text-[10px] text-slate-400">Unit Landed Cost</div>
                    <div className="text-sm font-bold text-slate-200 mt-0.5">{Formatters.currency(selectedDecreaseStock.unitLandedCost)}</div>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-lg">
                    <div className="text-[10px] text-slate-400">Total Valuation</div>
                    <div className="text-sm font-bold text-blue-400 mt-0.5">
                      {Formatters.currency(selectedDecreaseStock.available * selectedDecreaseStock.unitLandedCost)}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quantity to Deduct with Presets & Live Calculation */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-slate-300 font-semibold">
                  Decrease Quantity (কমানোর পরিমাণ) *
                </label>
                {selectedDecreaseStock && (
                  <div className="flex items-center gap-1">
                    {[1, 5, 10, 50].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        disabled={selectedDecreaseStock.available < preset}
                        onClick={() => setDecreaseQty(preset)}
                        className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-[10px] text-slate-300 rounded font-semibold transition"
                      >
                        -{preset}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setDecreaseQty(selectedDecreaseStock.available)}
                      className="px-2 py-0.5 bg-rose-600/20 hover:bg-rose-600/30 text-[10px] text-rose-300 border border-rose-500/40 rounded font-semibold transition"
                    >
                      All ({selectedDecreaseStock.available})
                    </button>
                  </div>
                )}
              </div>
              <input
                type="number"
                min={1}
                max={selectedDecreaseStock ? selectedDecreaseStock.available : 999999}
                value={decreaseQty || ''}
                onChange={(e) => setDecreaseQty(Math.max(1, Number(e.target.value)))}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 text-sm font-bold focus:border-rose-500 focus:outline-none"
                placeholder="Enter quantity to deduct"
                required
              />

              {/* Dynamic Balance Preview Badge */}
              {selectedDecreaseStock && (
                <div className="mt-2 p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-between text-xs">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
                    <span>Deduction: <strong className="text-rose-400">-{decreaseQty || 0} pcs</strong></span>
                  </span>
                  <span className="text-slate-300">
                    New Balance: <strong className="text-emerald-400 font-bold">{Math.max(0, selectedDecreaseStock.available - (decreaseQty || 0))} pcs</strong>
                  </span>
                </div>
              )}
            </div>

            {/* Reason for Stock Decrease */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Reason for Stock Deduction (কমানোর কারণ / খাত) *
              </label>
              <select
                value={decreaseReason}
                onChange={(e) => setDecreaseReason(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-rose-500 focus:outline-none"
              >
                <option value="SALES_DELIVERY">📦 Sales / Customer Delivery (কাস্টমার ডেলিভারি / বিক্রয়)</option>
                <option value="DAMAGED_RECORD">⚠️ Damaged / Broken (Move to Damaged Stock - নষ্ট মাল রেকর্ড)</option>
                <option value="DAMAGED_WRITE_OFF">🗑️ Damaged / Scrap (Total Write-Off - সম্পূর্ণ স্ক্র্যাপ/নষ্ট মাল বাতিল)</option>
                <option value="SAMPLE_ISSUE">🎁 Sample / Demo / Testing (স্যাম্পল বা টেস্টে প্রদান)</option>
                <option value="INTERNAL_PROJECT">🏗️ Project Site Consumption (সাইট প্রজেক্টে ব্যবহার)</option>
                <option value="AUDIT_CORRECTION">⚖️ Physical Inventory Audit Correction (স্টক গণনা সংশোধন)</option>
                <option value="RETURN_SUPPLIER">↩️ Return to Supplier / Vendor (সাপ্লায়ারকে ফেরত প্রদান)</option>
              </select>
              {decreaseReason === 'DAMAGED_RECORD' && (
                <p className="text-[11px] text-amber-400 mt-1">
                  ℹ️ This will deduct {decreaseQty} pcs from Available stock and add {decreaseQty} pcs to Damaged stock.
                </p>
              )}
              {decreaseReason === 'DAMAGED_WRITE_OFF' && (
                <p className="text-[11px] text-rose-400 mt-1">
                  ⚠️ This will permanently deduct {decreaseQty} pcs from inventory valuation as an operational loss.
                </p>
              )}
            </div>

            {/* Reference Doc / Challan No */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Reference Document / Challan No. (রেফারেন্স বা চালান নং)
              </label>
              <input
                type="text"
                placeholder="e.g. CHL-2026-089, INV-014, AUDIT-SEP-26"
                value={decreaseRefDoc}
                onChange={(e) => setDecreaseRefDoc(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-rose-500 focus:outline-none"
              />
            </div>

            {/* Notes / Remarks */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Notes & Justification (মন্তব্য ও বিবরণ)
              </label>
              <textarea
                rows={2}
                placeholder="Details regarding this inventory deduction..."
                value={decreaseNotes}
                onChange={(e) => setDecreaseNotes(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-rose-500 focus:outline-none resize-none"
              />
            </div>

            {/* Modal Footer Buttons */}
            <div className="pt-3 border-t border-slate-800 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsDecreaseModalOpen(false)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition active:scale-95 min-h-[42px]"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!selectedDecreaseStock || selectedDecreaseStock.available <= 0 || (decreaseQty || 0) <= 0}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 disabled:opacity-50 disabled:pointer-events-none text-white font-semibold text-xs shadow-md shadow-rose-600/30 transition active:scale-95 flex items-center justify-center gap-1.5 min-h-[42px]"
              >
                <MinusCircle className="w-3.5 h-3.5" />
                <span>Confirm Stock Deduction (স্টক কমান)</span>
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
