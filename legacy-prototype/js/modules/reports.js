/**
 * Financial Reports Module: Cash Flow & P&L (Profit & Loss)
 * Complete financial statements, margin analytics, interactive charts, and CSV data export.
 */

import { store } from '../store.js';
import { Formatters } from '../utils/formatters.js';
import { ChartRenderer } from '../utils/charts.js';

export const ReportsModule = {
  activeReportTab: 'pl', // 'pl' | 'cashflow'

  render() {
    const settings = store.getSettings();
    const currency = settings.currency || '৳';
    const pl = store.getProfitAndLossReport();
    const cf = store.getCashFlowReport();

    return `
      <!-- Report Sub-Tabs & Export Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 12px; border-bottom: 1px solid var(--border-color); padding-bottom: 16px;">
        <div style="display: flex; gap: 8px;">
          <button class="btn ${this.activeReportTab === 'pl' ? 'btn-primary' : 'btn-outline'} btn-report-tab" data-tab="pl">
            📈 Profit & Loss (P&L) Statement
          </button>
          <button class="btn ${this.activeReportTab === 'cashflow' ? 'btn-primary' : 'btn-outline'} btn-report-tab" data-tab="cashflow">
            💰 Cash Flow Statement
          </button>
        </div>

        <div style="display: flex; gap: 8px;">
          <button class="btn btn-secondary btn-sm" id="btn-export-csv-invoices">
            📥 Export Invoices CSV
          </button>
          <button class="btn btn-secondary btn-sm" id="btn-export-csv-inventory">
            📥 Export Inventory CSV
          </button>
          <button class="btn btn-primary btn-sm" onclick="window.print()">
            🖨️ Print Statement
          </button>
        </div>
      </div>

      <!-- Report View Body -->
      ${this.activeReportTab === 'pl' ? this.renderPlStatement(currency, pl) : this.renderCashFlowStatement(currency, cf)}
    `;
  },

  renderPlStatement(currency, pl) {
    const isNetPositive = pl.netProfit >= 0;

    return `
      <!-- KPI Highlights -->
      <div class="stats-grid">
        <div class="stat-card accent-primary">
          <div class="stat-info">
            <span class="stat-label">Gross Sales Revenue</span>
            <span class="stat-value">${Formatters.currency(pl.totalRevenue, currency)}</span>
            <span class="stat-subtext">${pl.invoiceCount} invoices recorded</span>
          </div>
          <div class="stat-icon primary">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
        </div>

        <div class="stat-card accent-cyan">
          <div class="stat-info">
            <span class="stat-label">Cost of Goods Sold (COGS)</span>
            <span class="stat-value" style="color: var(--cyan);">${Formatters.currency(pl.totalCogs, currency)}</span>
            <span class="stat-subtext">Product cost of sold units</span>
          </div>
          <div class="stat-icon cyan">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
          </div>
        </div>

        <div class="stat-card accent-warning">
          <div class="stat-info">
            <span class="stat-label">Gross Profit</span>
            <span class="stat-value" style="color: var(--warning);">${Formatters.currency(pl.grossProfit, currency)}</span>
            <span class="stat-subtext">Gross Margin: ${pl.grossMargin}%</span>
          </div>
          <div class="stat-icon warning">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
        </div>

        <div class="stat-card ${isNetPositive ? 'accent-success' : 'accent-danger'}">
          <div class="stat-info">
            <span class="stat-label">Net Operating Profit</span>
            <span class="stat-value" style="color: ${isNetPositive ? 'var(--success)' : 'var(--danger)'};">
              ${Formatters.currency(pl.netProfit, currency)}
            </span>
            <span class="stat-subtext" style="color: ${isNetPositive ? 'var(--success)' : 'var(--danger)'};">
              Net Profit Margin: ${pl.netMargin}%
            </span>
          </div>
          <div class="stat-icon ${isNetPositive ? 'success' : 'danger'}">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
        </div>
      </div>

      <!-- Formal P&L Statement Card -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">
            <svg style="width: 20px; height: 20px; color: var(--primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            Comprehensive Profit & Loss Statement (Fiscal Year 2026)
          </div>
        </div>
        <div class="card-body">
          <table class="data-table" style="max-width: 850px; margin: 0 auto; border: 1px solid var(--border-color); border-radius: 8px;">
            <tbody>
              <!-- Revenue Section -->
              <tr style="background: var(--card-bg-elevated); font-weight: 700;">
                <td colspan="2" style="font-size: 14px; color: var(--primary);">1. OPERATING REVENUE / SALES</td>
              </tr>
              <tr>
                <td style="padding-left: 28px;">Gross Invoiced Sales Volume</td>
                <td style="text-align: right; font-weight: 600;">${Formatters.currency(pl.totalRevenue, currency)}</td>
              </tr>
              <tr style="border-bottom: 2px solid var(--border-color); font-weight: 600;">
                <td style="padding-left: 28px;">Less: Cost of Goods Sold (COGS)</td>
                <td style="text-align: right; color: var(--danger);">(${Formatters.currency(pl.totalCogs, currency)})</td>
              </tr>
              <tr style="background: rgba(99, 102, 241, 0.06); font-weight: 700; font-size: 14px;">
                <td>GROSS PROFIT</td>
                <td style="text-align: right; color: var(--warning);">${Formatters.currency(pl.grossProfit, currency)}</td>
              </tr>

              <!-- Operating Expenses Section -->
              <tr style="background: var(--card-bg-elevated); font-weight: 700;">
                <td colspan="2" style="font-size: 14px; color: var(--danger); padding-top: 18px;">2. OPERATING EXPENSES (OPEX)</td>
              </tr>
              ${Object.keys(pl.expenseBreakdown).map(cat => `
                <tr>
                  <td style="padding-left: 28px;">${cat}</td>
                  <td style="text-align: right;">${Formatters.currency(pl.expenseBreakdown[cat], currency)}</td>
                </tr>
              `).join('')}
              <tr style="border-top: 1px solid var(--border-color); font-weight: 600;">
                <td style="padding-left: 28px;">Total Operating Expenses</td>
                <td style="text-align: right; color: var(--danger);">(${Formatters.currency(pl.totalOperatingExpenses, currency)})</td>
              </tr>

              <!-- Net Profit Row -->
              <tr style="background: ${isNetPositive ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)'}; font-size: 16px; font-weight: 800; border-top: 3px double var(--border-color);">
                <td>NET PROFIT / (LOSS)</td>
                <td style="text-align: right; color: ${isNetPositive ? 'var(--success)' : 'var(--danger)'};">
                  ${Formatters.currency(pl.netProfit, currency)}
                </td>
              </tr>
              <tr style="font-size: 12px; color: var(--text-muted);">
                <td>Net Profit Margin %</td>
                <td style="text-align: right; font-weight: 700;">${pl.netMargin}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderCashFlowStatement(currency, cf) {
    const isCashPositive = cf.netCashFlow >= 0;

    return `
      <!-- Stats Row -->
      <div class="stats-grid">
        <div class="stat-card accent-success">
          <div class="stat-info">
            <span class="stat-label">Total Cash Inflow</span>
            <span class="stat-value" style="color: var(--success);">${Formatters.currency(cf.totalCashInflow, currency)}</span>
            <span class="stat-subtext">${cf.paymentsCount} payments received</span>
          </div>
          <div class="stat-icon success">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
          </div>
        </div>

        <div class="stat-card accent-danger">
          <div class="stat-info">
            <span class="stat-label">Total Cash Outflow</span>
            <span class="stat-value" style="color: var(--danger);">${Formatters.currency(cf.totalCashOutflow, currency)}</span>
            <span class="stat-subtext">Expenses & payroll disbursed</span>
          </div>
          <div class="stat-icon danger">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
          </div>
        </div>

        <div class="stat-card ${isCashPositive ? 'accent-cyan' : 'accent-danger'}">
          <div class="stat-info">
            <span class="stat-label">Net Cash Position</span>
            <span class="stat-value" style="color: ${isCashPositive ? 'var(--cyan)' : 'var(--danger)'};">
              ${Formatters.currency(cf.netCashFlow, currency)}
            </span>
            <span class="stat-subtext">Inflow minus Outflow</span>
          </div>
          <div class="stat-icon ${isCashPositive ? 'cyan' : 'danger'}">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
          </div>
        </div>
      </div>

      <!-- Formal Cash Flow Table Card -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">
            <svg style="width: 20px; height: 20px; color: var(--cyan);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
            Cash Flow Statement (Direct Method)
          </div>
        </div>
        <div class="card-body">
          <table class="data-table" style="max-width: 850px; margin: 0 auto; border: 1px solid var(--border-color); border-radius: 8px;">
            <tbody>
              <!-- Inflows -->
              <tr style="background: var(--card-bg-elevated); font-weight: 700;">
                <td colspan="2" style="font-size: 14px; color: var(--success);">CASH INFLOWS (Customer Collections)</td>
              </tr>
              ${Object.keys(cf.inflowByMethod).map(m => `
                <tr>
                  <td style="padding-left: 28px;">Customer Collections via ${m}</td>
                  <td style="text-align: right; font-weight: 600; color: var(--success);">${Formatters.currency(cf.inflowByMethod[m], currency)}</td>
                </tr>
              `).join('')}
              <tr style="border-top: 1px solid var(--border-color); font-weight: 700;">
                <td style="padding-left: 28px;">Total Operating Inflows</td>
                <td style="text-align: right; color: var(--success);">${Formatters.currency(cf.totalCashInflow, currency)}</td>
              </tr>

              <!-- Outflows -->
              <tr style="background: var(--card-bg-elevated); font-weight: 700;">
                <td colspan="2" style="font-size: 14px; color: var(--danger); padding-top: 18px;">CASH OUTFLOWS (Operating Disbursements & Payroll)</td>
              </tr>
              ${Object.keys(cf.outflowByMethod).map(m => `
                <tr>
                  <td style="padding-left: 28px;">Disbursements via ${m}</td>
                  <td style="text-align: right; color: var(--danger);">(${Formatters.currency(cf.outflowByMethod[m], currency)})</td>
                </tr>
              `).join('')}
              <tr style="border-top: 1px solid var(--border-color); font-weight: 700;">
                <td style="padding-left: 28px;">Total Operating Outflows</td>
                <td style="text-align: right; color: var(--danger);">(${Formatters.currency(cf.totalCashOutflow, currency)})</td>
              </tr>

              <!-- Net Cash Flow -->
              <tr style="background: ${isCashPositive ? 'rgba(6, 182, 212, 0.12)' : 'rgba(239, 68, 68, 0.12)'}; font-size: 16px; font-weight: 800; border-top: 3px double var(--border-color);">
                <td>NET CASH FLOW (INFLOW - OUTFLOW)</td>
                <td style="text-align: right; color: ${isCashPositive ? 'var(--cyan)' : 'var(--danger)'};">
                  ${Formatters.currency(cf.netCashFlow, currency)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  postRender() {
    // Report Sub-tab switcher
    const tabButtons = document.querySelectorAll('.btn-report-tab');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.activeReportTab = e.currentTarget.dataset.tab;
        const app = window.ERP_APP;
        if (app) app.refreshCurrentTab();
      });
    });

    // Export Invoices CSV
    const exportInvBtn = document.getElementById('btn-export-csv-invoices');
    if (exportInvBtn) {
      exportInvBtn.addEventListener('click', () => {
        const invoices = store.getInvoices();
        const headers = ['Invoice ID', 'Quotation ID', 'Customer', 'Date', 'Due Date', 'Total', 'Paid', 'Due', 'Payment Status'];
        const rows = invoices.map(i => [
          i.id,
          i.quotationId || '',
          `"${(i.customerName || '').replace(/"/g, '""')}"`,
          i.date,
          i.dueDate,
          i.grandTotal,
          i.paidAmount,
          i.dueAmount,
          i.paymentStatus
        ]);
        const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', `Invoices_Export_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }

    // Export Inventory CSV
    const exportStockBtn = document.getElementById('btn-export-csv-inventory');
    if (exportStockBtn) {
      exportStockBtn.addEventListener('click', () => {
        const products = store.getProducts();
        const headers = ['SKU', 'Product Name', 'Category', 'Cost Price', 'Selling Price', 'Current Stock', 'Min Stock', 'Unit'];
        const rows = products.map(p => [
          p.sku,
          `"${(p.name || '').replace(/"/g, '""')}"`,
          `"${(p.category || '').replace(/"/g, '""')}"`,
          p.costPrice,
          p.sellPrice,
          p.stock,
          p.minStock,
          p.unit
        ]);
        const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', `Inventory_Export_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  }
};
