/**
 * Sales & Billing Module
 * Quotation -> Invoice -> Delivery Challan (1-Click Conversions)
 * Payment recording with automated stock deduction & customer due updates.
 */

import { store } from '../store.js';
import { Formatters } from '../utils/formatters.js';

export const SalesModule = {
  activeSubTab: 'invoices', // 'invoices' | 'quotations' | 'challans'
  searchTerm: '',

  render() {
    const settings = store.getSettings();
    const currency = settings.currency || '৳';

    const quotations = store.getQuotations();
    const invoices = store.getInvoices();
    const challans = store.getChallans();

    return `
      <!-- Sub-Navigation Tabs -->
      <div style="display: flex; gap: 8px; margin-bottom: 20px; border-bottom: 1px solid var(--border-color); padding-bottom: 12px; flex-wrap: wrap;">
        <button class="btn ${this.activeSubTab === 'invoices' ? 'btn-primary' : 'btn-outline'} btn-sales-subtab" data-tab="invoices">
          📄 Invoices (${invoices.length})
        </button>
        <button class="btn ${this.activeSubTab === 'quotations' ? 'btn-primary' : 'btn-outline'} btn-sales-subtab" data-tab="quotations">
          📝 Quotations (${quotations.length})
        </button>
        <button class="btn ${this.activeSubTab === 'challans' ? 'btn-primary' : 'btn-outline'} btn-sales-subtab" data-tab="challans">
          🚚 Delivery Challans (${challans.length})
        </button>
      </div>

      <!-- Active Sub Tab View -->
      ${this.renderSubTabContent(currency)}
    `;
  },

  renderSubTabContent(currency) {
    if (this.activeSubTab === 'quotations') {
      return this.renderQuotationsView(currency);
    } else if (this.activeSubTab === 'challans') {
      return this.renderChallansView(currency);
    }
    return this.renderInvoicesView(currency);
  },

  // 1. INVOICES VIEW
  renderInvoicesView(currency) {
    const invoices = store.getInvoices();
    const totalInvoiced = invoices.reduce((sum, inv) => sum + (Number(inv.grandTotal) || 0), 0);
    const totalCollected = invoices.reduce((sum, inv) => sum + (Number(inv.paidAmount) || 0), 0);
    const totalDues = invoices.reduce((sum, inv) => sum + (Number(inv.dueAmount) || 0), 0);

    return `
      <!-- Stats Row -->
      <div class="stats-grid">
        <div class="stat-card accent-primary">
          <div class="stat-info">
            <span class="stat-label">Total Invoiced Volume</span>
            <span class="stat-value">${Formatters.compactCurrency(totalInvoiced, currency)}</span>
            <span class="stat-subtext">${invoices.length} invoices generated</span>
          </div>
          <div class="stat-icon primary">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
        </div>

        <div class="stat-card accent-success">
          <div class="stat-info">
            <span class="stat-label">Total Cash Collected</span>
            <span class="stat-value" style="color: var(--success);">${Formatters.compactCurrency(totalCollected, currency)}</span>
            <span class="stat-subtext" style="color: var(--success);">Cleared payments</span>
          </div>
          <div class="stat-icon success">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
        </div>

        <div class="stat-card accent-danger">
          <div class="stat-info">
            <span class="stat-label">Outstanding Invoices Due</span>
            <span class="stat-value" style="color: var(--danger);">${Formatters.compactCurrency(totalDues, currency)}</span>
            <span class="stat-subtext" style="color: var(--danger);">Pending collections</span>
          </div>
          <div class="stat-icon danger">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
        </div>
      </div>

      <!-- Invoices Table Card -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">
            <svg style="width: 20px; height: 20px; color: var(--primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            Invoices Management & Automated Stock Tracking
          </div>
          <div class="card-actions">
            <button class="btn btn-primary" id="btn-open-create-invoice">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
              Create New Invoice
            </button>
          </div>
        </div>

        <div class="card-body no-padding">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Invoice ID</th>
                  <th>Customer</th>
                  <th>Date / Due</th>
                  <th>Total Amount</th>
                  <th>Paid</th>
                  <th>Due Amount</th>
                  <th>Payment Status</th>
                  <th>Stock Deducted</th>
                  <th>1-Click Actions</th>
                </tr>
              </thead>
              <tbody>
                ${invoices.length === 0 ? `
                  <tr>
                    <td colspan="9" style="text-align: center; padding: 40px; color: var(--text-muted);">
                      No invoices created yet.
                    </td>
                  </tr>
                ` : invoices.map(inv => {
                  let badgeClass = 'badge-danger';
                  if (inv.paymentStatus === 'Paid') badgeClass = 'badge-success';
                  else if (inv.paymentStatus === 'Partial') badgeClass = 'badge-warning';

                  return `
                    <tr>
                      <td>
                        <strong>${inv.id}</strong>
                        ${inv.quotationId ? `<div style="font-size: 11px; color: var(--cyan);">from Quote #${inv.quotationId}</div>` : ''}
                      </td>
                      <td>
                        <strong>${Formatters.escapeHtml(inv.customerName)}</strong>
                        <div style="font-size: 11px; color: var(--text-muted);">${Formatters.escapeHtml(inv.customerPhone || '')}</div>
                      </td>
                      <td>
                        <div>${Formatters.date(inv.date)}</div>
                        <div style="font-size: 11px; color: var(--text-muted);">Due: ${Formatters.date(inv.dueDate)}</div>
                      </td>
                      <td><strong>${Formatters.currency(inv.grandTotal, currency)}</strong></td>
                      <td style="color: var(--success); font-weight: 600;">${Formatters.currency(inv.paidAmount, currency)}</td>
                      <td>
                        <strong style="color: ${Number(inv.dueAmount) > 0 ? 'var(--danger)' : 'var(--text-muted)'};">
                          ${Formatters.currency(inv.dueAmount, currency)}
                        </strong>
                      </td>
                      <td>
                        <span class="badge ${badgeClass}">
                          <span class="badge-dot"></span>
                          ${inv.paymentStatus}
                        </span>
                      </td>
                      <td>
                        ${inv.stockDeducted ? `
                          <span class="badge badge-success" title="Inventory automatically decremented">
                            ✓ Deducted
                          </span>
                        ` : `
                          <span class="badge badge-warning" title="Stock will automatically deduct upon payment">
                            ⏳ On Payment
                          </span>
                        `}
                      </td>
                      <td>
                        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                          <!-- View & Print -->
                          <button class="btn btn-secondary btn-sm btn-view-invoice-action" data-id="${inv.id}" title="View & Print">
                            👁️ View
                          </button>

                          <!-- Record Payment -->
                          ${Number(inv.dueAmount) > 0 ? `
                            <button class="btn btn-success btn-sm btn-record-payment-for-inv" data-id="${inv.id}" title="Record Payment">
                              💵 Pay
                            </button>
                          ` : ''}

                          <!-- 1-Click Convert to Delivery Challan -->
                          ${!inv.challanId ? `
                            <button class="btn btn-primary btn-sm btn-convert-to-challan" data-id="${inv.id}" title="Generate Delivery Challan in 1-Click">
                              🚚 Challan
                            </button>
                          ` : `
                            <button class="btn btn-outline btn-sm btn-view-challan-action" data-id="${inv.challanId}" title="View Generated Challan">
                              🚚 #${inv.challanId}
                            </button>
                          `}
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

  // 2. QUOTATIONS VIEW
  renderQuotationsView(currency) {
    const quotations = store.getQuotations();

    return `
      <div class="card">
        <div class="card-header">
          <div class="card-title">
            <svg style="width: 20px; height: 20px; color: var(--cyan);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            Quotations & Estimates
          </div>
          <div class="card-actions">
            <button class="btn btn-primary" id="btn-open-create-quote">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
              Create Quotation
            </button>
          </div>
        </div>

        <div class="card-body no-padding">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Quotation ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Items Count</th>
                  <th>Grand Total</th>
                  <th>Status</th>
                  <th>1-Click Actions</th>
                </tr>
              </thead>
              <tbody>
                ${quotations.length === 0 ? `
                  <tr>
                    <td colspan="7" style="text-align: center; padding: 40px; color: var(--text-muted);">
                      No quotations created yet.
                    </td>
                  </tr>
                ` : quotations.map(q => {
                  let badgeClass = 'badge-secondary';
                  if (q.status === 'Accepted') badgeClass = 'badge-success';
                  else if (q.status === 'Converted') badgeClass = 'badge-primary';
                  else if (q.status === 'Sent') badgeClass = 'badge-cyan';

                  return `
                    <tr>
                      <td><strong>${q.id}</strong></td>
                      <td>
                        <strong>${Formatters.escapeHtml(q.customerName)}</strong>
                        <div style="font-size: 11px; color: var(--text-muted);">${Formatters.escapeHtml(q.customerPhone || '')}</div>
                      </td>
                      <td>${Formatters.date(q.date)}</td>
                      <td>${(q.items || []).length} items</td>
                      <td><strong style="font-size: 14px;">${Formatters.currency(q.grandTotal, currency)}</strong></td>
                      <td>
                        <span class="badge ${badgeClass}">
                          <span class="badge-dot"></span>
                          ${q.status}
                        </span>
                      </td>
                      <td>
                        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                          <button class="btn btn-secondary btn-sm btn-view-quote-action" data-id="${q.id}" title="View & Print">
                            👁️ View
                          </button>
                          ${q.status !== 'Converted' ? `
                            <button class="btn btn-success btn-sm btn-convert-to-invoice" data-id="${q.id}" title="Convert to Official Invoice in 1-Click">
                              ⚡ Convert to Invoice
                            </button>
                          ` : `
                            <button class="btn btn-outline btn-sm btn-view-invoice-action" data-id="${q.convertedInvoiceId}">
                              ✓ #${q.convertedInvoiceId}
                            </button>
                          `}
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

  // 3. DELIVERY CHALLANS VIEW
  renderChallansView(currency) {
    const challans = store.getChallans();

    return `
      <div class="card">
        <div class="card-header">
          <div class="card-title">
            <svg style="width: 20px; height: 20px; color: var(--primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>
            Delivery Challans (Warehouse Dispatch & Logistics)
          </div>
        </div>

        <div class="card-body no-padding">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Challan No.</th>
                  <th>Linked Invoice</th>
                  <th>Customer & Destination</th>
                  <th>Dispatch Date</th>
                  <th>Vehicle / Courier</th>
                  <th>Tracking No.</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${challans.length === 0 ? `
                  <tr>
                    <td colspan="8" style="text-align: center; padding: 40px; color: var(--text-muted);">
                      No delivery challans generated yet. Convert an Invoice into a Delivery Challan with 1-click!
                    </td>
                  </tr>
                ` : challans.map(ch => {
                  return `
                    <tr>
                      <td><strong>${ch.id}</strong></td>
                      <td>
                        <a href="#" class="btn-view-invoice-action" data-id="${ch.invoiceId}" style="color: var(--primary); text-decoration: underline;">
                          #${ch.invoiceId}
                        </a>
                      </td>
                      <td>
                        <strong>${Formatters.escapeHtml(ch.customerName)}</strong>
                        <div style="font-size: 11px; color: var(--text-muted);">${Formatters.escapeHtml(ch.deliveryAddress || 'Standard Delivery')}</div>
                      </td>
                      <td>${Formatters.date(ch.date)}</td>
                      <td>
                        <div>${Formatters.escapeHtml(ch.courierName || 'In-House')}</div>
                        ${ch.vehicleNo ? `<div style="font-size: 11px; color: var(--text-muted);">${Formatters.escapeHtml(ch.vehicleNo)}</div>` : ''}
                      </td>
                      <td><code style="background: var(--card-bg-elevated); padding: 2px 6px; border-radius: 4px; font-size: 11px;">${ch.trackingNo}</code></td>
                      <td>
                        <span class="badge ${ch.status === 'Delivered' ? 'badge-success' : 'badge-primary'}">
                          <span class="badge-dot"></span>
                          ${ch.status}
                        </span>
                      </td>
                      <td>
                        <button class="btn btn-secondary btn-sm btn-view-challan-action" data-id="${ch.id}">
                          👁️ View & Print Challan
                        </button>
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
    // Sub-tab switcher
    const tabButtons = document.querySelectorAll('.btn-sales-subtab');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.activeSubTab = e.currentTarget.dataset.tab;
        const app = window.ERP_APP;
        if (app) app.refreshCurrentTab();
      });
    });
  }
};
