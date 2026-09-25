/**
 * Customers Directory & Ledger Module
 * Customer records, contact profiles, outstanding due tracking, and transaction history.
 */

import { store } from '../store.js';
import { Formatters } from '../utils/formatters.js';

export const CustomersModule = {
  searchTerm: '',

  render() {
    const settings = store.getSettings();
    const currency = settings.currency || '৳';
    let customers = store.getCustomers();
    const invoices = store.getInvoices();

    if (this.searchTerm) {
      const q = this.searchTerm.toLowerCase();
      customers = customers.filter(c =>
        c.name.toLowerCase().includes(q) ||
        (c.company && c.company.toLowerCase().includes(q)) ||
        (c.phone && c.phone.includes(q))
      );
    }

    const totalReceivables = customers.reduce((sum, c) => sum + (Number(c.dueBalance) || 0), 0);
    const customersWithDue = customers.filter(c => Number(c.dueBalance) > 0).length;

    return `
      <!-- Stats Row -->
      <div class="stats-grid">
        <div class="stat-card accent-primary">
          <div class="stat-info">
            <span class="stat-label">Total Customers</span>
            <span class="stat-value">${store.getCustomers().length}</span>
            <span class="stat-subtext">Registered clients</span>
          </div>
          <div class="stat-icon primary">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
        </div>

        <div class="stat-card accent-danger">
          <div class="stat-info">
            <span class="stat-label">Total Customer Dues (Receivables)</span>
            <span class="stat-value" style="color: var(--danger);">${Formatters.compactCurrency(totalReceivables, currency)}</span>
            <span class="stat-subtext" style="color: var(--danger);">${customersWithDue} clients with pending balance</span>
          </div>
          <div class="stat-icon danger">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
        </div>
      </div>

      <!-- Main Customers Table Card -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">
            <svg style="width: 20px; height: 20px; color: var(--primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            Customer Accounts & Ledger
          </div>
          <div class="card-actions">
            <!-- Search Input -->
            <div class="search-input-wrapper">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input type="text" id="customers-search" class="form-control" placeholder="Search customer, phone..." value="${this.searchTerm}">
            </div>

            <!-- Add Customer Button -->
            <button class="btn btn-primary" id="btn-open-add-customer">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
              Add Customer
            </button>
          </div>
        </div>

        <div class="card-body no-padding">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Company / Enterprise</th>
                  <th>Contact Info</th>
                  <th>Location / Address</th>
                  <th>Total Invoices</th>
                  <th>Due Balance</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${customers.length === 0 ? `
                  <tr>
                    <td colspan="7" style="text-align: center; padding: 40px; color: var(--text-muted);">
                      No customers found. Click "Add Customer" to register your first client.
                    </td>
                  </tr>
                ` : customers.map(c => {
                  const custInvoices = invoices.filter(inv => inv.customerId === c.id);
                  const hasDue = Number(c.dueBalance) > 0;

                  return `
                    <tr>
                      <td>
                        <strong>${Formatters.escapeHtml(c.name)}</strong>
                        <div style="font-size: 11px; color: var(--text-muted);">ID: ${c.id}</div>
                      </td>
                      <td>${Formatters.escapeHtml(c.company || '—')}</td>
                      <td>
                        <div>📞 ${Formatters.escapeHtml(c.phone || 'N/A')}</div>
                        ${c.email ? `<div style="font-size: 11px; color: var(--text-muted);">✉️ ${Formatters.escapeHtml(c.email)}</div>` : ''}
                      </td>
                      <td style="max-width: 200px;">
                        <span style="font-size: 12px; color: var(--text-secondary);">${Formatters.escapeHtml(c.address || '—')}</span>
                      </td>
                      <td>
                        <span class="badge badge-primary">${custInvoices.length} Invoices</span>
                      </td>
                      <td>
                        <strong style="font-size: 14px; color: ${hasDue ? 'var(--danger)' : 'var(--success)'};">
                          ${Formatters.currency(c.dueBalance, currency)}
                        </strong>
                      </td>
                      <td>
                        <div style="display: flex; gap: 6px;">
                          <button class="btn btn-secondary btn-sm btn-view-customer-ledger" data-id="${c.id}" title="View Ledger">
                            Ledger
                          </button>
                          <button class="btn btn-outline btn-sm btn-edit-customer" data-id="${c.id}" title="Edit">
                            ✏️
                          </button>
                          <button class="btn btn-outline btn-sm btn-delete-customer" data-id="${c.id}" style="color: var(--danger);" title="Delete">
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
    const searchInput = document.getElementById('customers-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchTerm = e.target.value;
        const app = window.ERP_APP;
        if (app) app.refreshCurrentTab();
      });
    }
  }
};
