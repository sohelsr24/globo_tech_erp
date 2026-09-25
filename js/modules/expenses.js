/**
 * Expense Management Module
 * Category-wise expense logging, payment modes, and expense breakdown analytics.
 */

import { store } from '../store.js';
import { Formatters } from '../utils/formatters.js';

export const ExpensesModule = {
  selectedCategory: 'all',

  render() {
    const settings = store.getSettings();
    const currency = settings.currency || '৳';
    let expenses = store.getExpenses();

    if (this.selectedCategory !== 'all') {
      expenses = expenses.filter(e => e.category === this.selectedCategory);
    }

    const totalExpense = expenses.reduce((sum, e) => sum + (Number(e.amount) || 0), 0);

    // Compute category breakdown
    const allExpenses = store.getExpenses();
    const catMap = {};
    allExpenses.forEach(e => {
      const cat = e.category || 'Miscellaneous';
      catMap[cat] = (catMap[cat] || 0) + Number(e.amount);
    });

    const categories = [
      'all',
      'Salaries & Wages',
      'Office Rent',
      'Utilities',
      'Marketing & Ads',
      'Transport & Delivery',
      'Office Supplies',
      'Maintenance',
      'Miscellaneous'
    ];

    return `
      <!-- Stats Row -->
      <div class="stats-grid">
        <div class="stat-card accent-danger">
          <div class="stat-info">
            <span class="stat-label">Total Expenses Recorded</span>
            <span class="stat-value" style="color: var(--danger);">${Formatters.compactCurrency(totalExpense, currency)}</span>
            <span class="stat-subtext">${expenses.length} expense transactions</span>
          </div>
          <div class="stat-icon danger">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
        </div>

        <div class="stat-card accent-primary">
          <div class="stat-info">
            <span class="stat-label">Salaries & Payroll Total</span>
            <span class="stat-value">${Formatters.compactCurrency(catMap['Salaries & Wages'] || 0, currency)}</span>
            <span class="stat-subtext">Auto-synchronized from Payroll</span>
          </div>
          <div class="stat-icon primary">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
        </div>

        <div class="stat-card accent-warning">
          <div class="stat-info">
            <span class="stat-label">Rent & Facilities</span>
            <span class="stat-value" style="color: var(--warning);">${Formatters.compactCurrency((catMap['Office Rent'] || 0) + (catMap['Utilities'] || 0), currency)}</span>
            <span class="stat-subtext">Commercial rent & utilities</span>
          </div>
          <div class="stat-icon warning">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          </div>
        </div>
      </div>

      <!-- Main Expense Table Card -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">
            <svg style="width: 20px; height: 20px; color: var(--danger);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
            Category-wise Expense Tracker
          </div>
          <div class="card-actions">
            <!-- Category Filter Dropdown -->
            <select id="expense-category-filter" class="form-control" style="width: auto;">
              ${categories.map(c => `
                <option value="${c}" ${this.selectedCategory === c ? 'selected' : ''}>
                  ${c === 'all' ? 'All Categories' : c}
                </option>
              `).join('')}
            </select>

            <!-- Add Expense Button -->
            <button class="btn btn-primary" id="btn-open-add-expense">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
              Add Expense
            </button>
          </div>
        </div>

        <div class="card-body no-padding">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Voucher ID</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Payment Mode</th>
                  <th>Reference / Note</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${expenses.length === 0 ? `
                  <tr>
                    <td colspan="7" style="text-align: center; padding: 40px; color: var(--text-muted);">
                      No expenses recorded for the selected filter.
                    </td>
                  </tr>
                ` : expenses.map(exp => {
                  let badgeClass = 'badge-danger';
                  if (exp.category === 'Salaries & Wages') badgeClass = 'badge-primary';
                  else if (exp.category === 'Office Rent' || exp.category === 'Utilities') badgeClass = 'badge-warning';
                  else if (exp.category === 'Marketing & Ads') badgeClass = 'badge-purple';
                  else if (exp.category === 'Transport & Delivery') badgeClass = 'badge-cyan';

                  return `
                    <tr>
                      <td><code>${exp.id}</code></td>
                      <td>${Formatters.date(exp.date)}</td>
                      <td>
                        <span class="badge ${badgeClass}">
                          ${Formatters.escapeHtml(exp.category)}
                        </span>
                      </td>
                      <td>
                        <strong style="font-size: 14px; color: var(--danger);">
                          ${Formatters.currency(exp.amount, currency)}
                        </strong>
                      </td>
                      <td>
                        <span class="badge badge-secondary">${exp.paymentMethod || 'Cash'}</span>
                      </td>
                      <td>
                        <div>${Formatters.escapeHtml(exp.notes || '—')}</div>
                        ${exp.reference ? `<span style="font-size: 11px; color: var(--text-muted);">Ref: ${Formatters.escapeHtml(exp.reference)}</span>` : ''}
                      </td>
                      <td>
                        <button class="btn btn-outline btn-sm btn-delete-expense" data-id="${exp.id}" style="color: var(--danger);" title="Delete Expense">
                          🗑️
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
    const filterSelect = document.getElementById('expense-category-filter');
    if (filterSelect) {
      filterSelect.addEventListener('change', (e) => {
        this.selectedCategory = e.target.value;
        const app = window.ERP_APP;
        if (app) app.refreshCurrentTab();
      });
    }
  }
};
