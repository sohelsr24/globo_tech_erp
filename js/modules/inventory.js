/**
 * Inventory & Stock Management Module
 * Complete product catalog, low-stock threshold alerts, and stock adjustments.
 */

import { store } from '../store.js';
import { Formatters } from '../utils/formatters.js';

export const InventoryModule = {
  filterLowStockOnly: false,
  searchTerm: '',

  render() {
    const settings = store.getSettings();
    const currency = settings.currency || '৳';
    let products = store.getProducts();
    const lowStockItems = store.getLowStockProducts();

    if (this.filterLowStockOnly) {
      products = lowStockItems;
    }

    if (this.searchTerm) {
      const q = this.searchTerm.toLowerCase();
      products = products.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.sku.toLowerCase().includes(q) ||
        (p.category && p.category.toLowerCase().includes(q))
      );
    }

    const totalStockValue = products.reduce((acc, p) => acc + (Number(p.costPrice) * Number(p.stock)), 0);

    return `
      <!-- Stats Row -->
      <div class="stats-grid">
        <div class="stat-card accent-primary">
          <div class="stat-info">
            <span class="stat-label">Total Unique Products</span>
            <span class="stat-value">${store.getProducts().length}</span>
            <span class="stat-subtext">Active in catalog</span>
          </div>
          <div class="stat-icon primary">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
          </div>
        </div>

        <div class="stat-card accent-warning">
          <div class="stat-info">
            <span class="stat-label">Low Stock Alerts</span>
            <span class="stat-value" style="color: var(--warning);">${lowStockItems.length} Items</span>
            <span class="stat-subtext">At or below reorder level</span>
          </div>
          <div class="stat-icon warning">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          </div>
        </div>

        <div class="stat-card accent-success">
          <div class="stat-info">
            <span class="stat-label">Total Inventory Valuation (Cost)</span>
            <span class="stat-value" style="color: var(--success);">${Formatters.compactCurrency(totalStockValue, currency)}</span>
            <span class="stat-subtext">Based on cost price</span>
          </div>
          <div class="stat-icon success">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          </div>
        </div>
      </div>

      <!-- Main Products Table Card -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">
            <svg style="width: 20px; height: 20px; color: var(--primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
            Products & Stock Inventory
          </div>
          <div class="card-actions">
            <!-- Search Input -->
            <div class="search-input-wrapper">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input type="text" id="inventory-search" class="form-control" placeholder="Search by name, SKU..." value="${this.searchTerm}">
            </div>

            <!-- Filter Low Stock Toggle -->
            <button class="btn ${this.filterLowStockOnly ? 'btn-warning' : 'btn-outline'}" id="btn-toggle-lowstock-filter">
              ${this.filterLowStockOnly ? '✓ Showing Low Stock' : '⚠️ Show Low Stock Only (' + lowStockItems.length + ')'}
            </button>

            <!-- Add Product Button -->
            <button class="btn btn-primary" id="btn-open-add-product">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
              Add Product
            </button>
          </div>
        </div>

        <div class="card-body no-padding">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>SKU / Code</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Cost Price</th>
                  <th>Selling Price</th>
                  <th>Current Stock</th>
                  <th>Alert Level</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${products.length === 0 ? `
                  <tr>
                    <td colspan="9" style="text-align: center; padding: 40px; color: var(--text-muted);">
                      No products found matching your filter criteria.
                    </td>
                  </tr>
                ` : products.map(p => {
                  const isLow = Number(p.stock) <= Number(p.minStock);
                  return `
                    <tr style="${isLow ? 'background: rgba(245, 158, 11, 0.04);' : ''}">
                      <td><code style="background: var(--card-bg-elevated); padding: 2px 6px; border-radius: 4px; font-size: 11px;">${p.sku}</code></td>
                      <td>
                        <strong>${Formatters.escapeHtml(p.name)}</strong>
                        ${p.notes ? `<div style="font-size: 11px; color: var(--text-muted);">${Formatters.escapeHtml(p.notes)}</div>` : ''}
                      </td>
                      <td><span style="font-size: 12px; color: var(--text-secondary);">${Formatters.escapeHtml(p.category || 'General')}</span></td>
                      <td>${Formatters.currency(p.costPrice, currency)}</td>
                      <td><strong style="color: var(--text-main);">${Formatters.currency(p.sellPrice, currency)}</strong></td>
                      <td>
                        <strong style="font-size: 14px; color: ${isLow ? 'var(--warning)' : 'var(--success)'};">
                          ${p.stock} ${p.unit || 'pcs'}
                        </strong>
                      </td>
                      <td><span style="color: var(--text-muted);">${p.minStock} ${p.unit || 'pcs'}</span></td>
                      <td>
                        ${isLow ? `
                          <span class="badge badge-warning">
                            <span class="badge-dot"></span>
                            Low Stock Alert
                          </span>
                        ` : `
                          <span class="badge badge-success">
                            <span class="badge-dot"></span>
                            In Stock
                          </span>
                        `}
                      </td>
                      <td>
                        <div style="display: flex; gap: 6px;">
                          <button class="btn btn-secondary btn-sm btn-adjust-stock" data-id="${p.id}" title="Adjust Stock (Add/Remove)">
                            ± Stock
                          </button>
                          <button class="btn btn-outline btn-sm btn-edit-product" data-id="${p.id}" title="Edit Product">
                            ✏️
                          </button>
                          <button class="btn btn-outline btn-sm btn-delete-product" data-id="${p.id}" style="color: var(--danger);" title="Delete Product">
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  postRender() {
    // Search handler
    const searchInput = document.getElementById('inventory-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchTerm = e.target.value;
        const app = window.ERP_APP;
        if (app) app.refreshCurrentTab();
      });
    }

    // Toggle low stock filter
    const toggleLowStockBtn = document.getElementById('btn-toggle-lowstock-filter');
    if (toggleLowStockBtn) {
      toggleLowStockBtn.addEventListener('click', () => {
        this.filterLowStockOnly = !this.filterLowStockOnly;
        const app = window.ERP_APP;
        if (app) app.refreshCurrentTab();
      });
    }
  }
};
