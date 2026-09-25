/**
 * Dashboard Module
 * Overview of business performance, quick actions, low-stock alerts, and financial summaries.
 */

import { store } from '../store.js';
import { Formatters } from '../utils/formatters.js';
import { ChartRenderer } from '../utils/charts.js';

export const DashboardModule = {
  render() {
    const settings = store.getSettings();
    const currency = settings.currency || '৳';
    const lowStockItems = store.getLowStockProducts();
    const invoices = store.getInvoices();
    const leads = store.getLeads();
    const pl = store.getProfitAndLossReport();
    const cashFlow = store.getCashFlowReport();

    // Calculate customer total due
    const totalDues = store.getCustomers().reduce((sum, c) => sum + (Number(c.dueBalance) || 0), 0);
    const activeLeadsCount = leads.filter(l => l.stage !== 'won' && l.stage !== 'lost').length;
    const leadsPipelineValue = leads
      .filter(l => l.stage !== 'lost')
      .reduce((sum, l) => sum + (Number(l.estimatedValue) || 0), 0);

    let lowStockWarningBanner = '';
    if (lowStockItems.length > 0) {
      lowStockWarningBanner = `
        <div class="card" style="background: linear-gradient(90deg, rgba(245, 158, 11, 0.15), rgba(245, 158, 11, 0.05)); border-color: rgba(245, 158, 11, 0.4);">
          <div class="card-body" style="padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 38px; height: 38px; border-radius: 50%; background: var(--warning); color: #000; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 18px;">
                ⚠️
              </div>
              <div>
                <h4 style="color: var(--warning); font-size: 15px;">Low Stock Alert! (${lowStockItems.length} Products need reordering)</h4>
                <p style="font-size: 12px; color: var(--text-secondary); margin-top: 2px;">
                  ${lowStockItems.map(p => `<strong>${Formatters.escapeHtml(p.name)}</strong> (only ${p.stock} ${p.unit} left)`).slice(0, 3).join(', ')}
                  ${lowStockItems.length > 3 ? ` and ${lowStockItems.length - 3} more...` : ''}
                </p>
              </div>
            </div>
            <button class="btn btn-warning btn-sm" id="btn-dashboard-view-lowstock">
              View Low Stock Products →
            </button>
          </div>
        </div>
      `;
    }

    return `
      <!-- Top Alert if Low Stock -->
      ${lowStockWarningBanner}

      <!-- KPI Stat Cards Grid -->
      <div class="stats-grid">
        <div class="stat-card accent-primary">
          <div class="stat-info">
            <span class="stat-label">Total Invoiced Sales</span>
            <span class="stat-value">${Formatters.compactCurrency(pl.totalRevenue, currency)}</span>
            <span class="stat-subtext" style="color: var(--primary);">
              ${pl.invoiceCount} Active Invoices
            </span>
          </div>
          <div class="stat-icon primary">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
        </div>

        <div class="stat-card accent-danger">
          <div class="stat-info">
            <span class="stat-label">Customer Receivables (Due)</span>
            <span class="stat-value" style="color: var(--danger);">${Formatters.compactCurrency(totalDues, currency)}</span>
            <span class="stat-subtext" style="color: var(--danger);">
              Unpaid customer balances
            </span>
          </div>
          <div class="stat-icon danger">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
        </div>

        <div class="stat-card accent-success">
          <div class="stat-info">
            <span class="stat-label">Net Profit (P&L)</span>
            <span class="stat-value" style="color: var(--success);">${Formatters.compactCurrency(pl.netProfit, currency)}</span>
            <span class="stat-subtext" style="color: var(--success);">
              Margin: ${pl.netMargin}%
            </span>
          </div>
          <div class="stat-icon success">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
        </div>

        <div class="stat-card accent-cyan">
          <div class="stat-info">
            <span class="stat-label">Net Cash Position</span>
            <span class="stat-value" style="color: var(--cyan);">${Formatters.compactCurrency(cashFlow.netCashFlow, currency)}</span>
            <span class="stat-subtext" style="color: var(--cyan);">
              Inflow - Outflow
            </span>
          </div>
          <div class="stat-icon cyan">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
          </div>
        </div>

        <div class="stat-card accent-warning">
          <div class="stat-info">
            <span class="stat-label">Active Leads Pipeline</span>
            <span class="stat-value">${activeLeadsCount} Leads</span>
            <span class="stat-subtext" style="color: var(--warning);">
              Value: ${Formatters.compactCurrency(leadsPipelineValue, currency)}
            </span>
          </div>
          <div class="stat-icon warning">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
        </div>
      </div>

      <!-- Quick Action Buttons -->
      <div style="display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap;">
        <button class="btn btn-primary" id="btn-quick-new-invoice">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
          Create Invoice
        </button>
        <button class="btn btn-secondary" id="btn-quick-new-quote">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Create Quotation
        </button>
        <button class="btn btn-success" id="btn-quick-record-payment">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          Record Payment
        </button>
        <button class="btn btn-secondary" id="btn-quick-add-expense">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Add Expense
        </button>
        <button class="btn btn-secondary" id="btn-quick-add-lead">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
          Add CRM Lead
        </button>
      </div>

      <!-- Charts & Visual Summaries -->
      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 24px; margin-bottom: 24px;">
        <!-- Monthly Revenue vs Expense Bar Chart -->
        <div class="chart-container-box">
          <div class="chart-header">
            <h3 class="chart-title">Sales Revenue vs Operating Expenses</h3>
            <span style="font-size: 12px; color: var(--text-muted);">Last 4 Months</span>
          </div>
          <div id="dashboard-bar-chart"></div>
        </div>

        <!-- Expense Category Breakdown Donut -->
        <div class="chart-container-box">
          <div class="chart-header">
            <h3 class="chart-title">Expense Breakdown</h3>
            <span style="font-size: 12px; color: var(--text-muted);">By Category</span>
          </div>
          <div id="dashboard-donut-chart"></div>
        </div>
      </div>

      <!-- Two Column Layout: Recent Invoices & Recent Activity -->
      <div style="display: grid; grid-template-columns: 2fr 1.2fr; gap: 24px;">
        <!-- Recent Invoices Panel -->
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">
              <svg style="width: 18px; height: 18px; color: var(--primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Recent Invoices & Payment Status
            </h3>
            <button class="btn btn-outline btn-sm" id="btn-view-all-invoices">View All →</button>
          </div>
          <div class="card-body no-padding">
            <div class="table-responsive">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Invoice ID</th>
                    <th>Customer</th>
                    <th>Total</th>
                    <th>Paid</th>
                    <th>Due</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${invoices.slice(0, 5).map(inv => {
                    let badgeClass = 'badge-danger';
                    if (inv.paymentStatus === 'Paid') badgeClass = 'badge-success';
                    else if (inv.paymentStatus === 'Partial') badgeClass = 'badge-warning';

                    return `
                      <tr>
                        <td><strong>${inv.id}</strong></td>
                        <td>${Formatters.escapeHtml(inv.customerName)}</td>
                        <td><strong>${Formatters.currency(inv.grandTotal, currency)}</strong></td>
                        <td style="color: var(--success);">${Formatters.currency(inv.paidAmount, currency)}</td>
                        <td style="color: ${Number(inv.dueAmount) > 0 ? 'var(--danger)' : 'var(--text-muted)'}; font-weight: 600;">
                          ${Formatters.currency(inv.dueAmount, currency)}
                        </td>
                        <td>
                          <span class="badge ${badgeClass}">
                            <span class="badge-dot"></span>
                            ${inv.paymentStatus}
                          </span>
                        </td>
                        <td>
                          <button class="btn btn-secondary btn-sm btn-view-invoice-action" data-id="${inv.id}">
                            View
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

        <!-- Recent Activity Feed -->
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">
              <svg style="width: 18px; height: 18px; color: var(--cyan);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Recent Activities & Logs
            </h3>
          </div>
          <div class="card-body">
            <div style="display: flex; flex-direction: column; gap: 14px;">
              ${(store.data.activities || []).slice(0, 6).map(act => `
                <div style="display: flex; gap: 12px; font-size: 12.5px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">
                  <span style="font-size: 16px;">
                    ${act.type === 'payment' ? '💰' : act.type === 'sales' ? '📄' : act.type === 'inventory' ? '📦' : act.type === 'crm' ? '🎯' : '⚡'}
                  </span>
                  <div style="flex: 1;">
                    <p style="color: var(--text-main); font-weight: 500; line-height: 1.4;">${Formatters.escapeHtml(act.title)}</p>
                    <span style="color: var(--text-muted); font-size: 11px;">${Formatters.date(act.timestamp)}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  postRender() {
    const settings = store.getSettings();
    const currency = settings.currency || '৳';

    // Render Bar Chart
    ChartRenderer.renderBarChart('dashboard-bar-chart', {
      labels: ['Jun', 'Jul', 'Aug', 'Sep'],
      series: [
        { name: 'Revenue', color: '#10b981', data: [115000, 148000, 165000, 171500] },
        { name: 'Expenses', color: '#ef4444', data: [78000, 92000, 109000, 76800] }
      ],
      currency,
      height: 220
    });

    // Render Donut Chart
    const expenses = store.getExpenses();
    const catMap = {};
    expenses.forEach(e => {
      catMap[e.category] = (catMap[e.category] || 0) + Number(e.amount);
    });

    const colors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#a855f7', '#ec4899'];
    const donutData = Object.keys(catMap).map((cat, idx) => ({
      label: cat,
      value: catMap[cat],
      color: colors[idx % colors.length]
    }));

    ChartRenderer.renderDonutChart('dashboard-donut-chart', {
      data: donutData,
      currency,
      size: 170,
      centerLabel: 'Expenses'
    });
  }
};
