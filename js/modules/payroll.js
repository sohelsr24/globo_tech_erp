/**
 * Employees & Monthly Payroll Module
 * Staff roster, monthly payroll batch generation, payment tracking,
 * automatic expense synchronization (Salaries & Wages), and printable payslips.
 */

import { store } from '../store.js';
import { Formatters } from '../utils/formatters.js';

export const PayrollModule = {
  selectedMonth: Formatters.currentMonthYear(),
  activeTab: 'payroll', // 'payroll' | 'employees'

  render() {
    const settings = store.getSettings();
    const currency = settings.currency || '৳';
    const employees = store.getEmployees();
    const payrolls = store.getPayrolls(this.selectedMonth);

    const totalMonthlySalaryBill = payrolls.reduce((sum, p) => sum + (Number(p.netSalary) || 0), 0);
    const paidSalary = payrolls.filter(p => p.status === 'Paid').reduce((sum, p) => sum + (Number(p.netSalary) || 0), 0);
    const unpaidSalary = totalMonthlySalaryBill - paidSalary;

    return `
      <!-- Sub Tabs -->
      <div style="display: flex; gap: 8px; margin-bottom: 20px; border-bottom: 1px solid var(--border-color); padding-bottom: 12px; flex-wrap: wrap;">
        <button class="btn ${this.activeTab === 'payroll' ? 'btn-primary' : 'btn-outline'} btn-payroll-tab" data-tab="payroll">
          💳 Monthly Payroll Run
        </button>
        <button class="btn ${this.activeTab === 'employees' ? 'btn-primary' : 'btn-outline'} btn-payroll-tab" data-tab="employees">
          👥 Staff & Employees (${employees.length})
        </button>
      </div>

      ${this.activeTab === 'payroll' ? this.renderPayrollView(currency, payrolls, totalMonthlySalaryBill, paidSalary, unpaidSalary) : this.renderEmployeesView(currency, employees)}
    `;
  },

  renderPayrollView(currency, payrolls, totalMonthlySalaryBill, paidSalary, unpaidSalary) {
    return `
      <!-- Stats Row -->
      <div class="stats-grid">
        <div class="stat-card accent-primary">
          <div class="stat-info">
            <span class="stat-label">Total Monthly Payroll (${this.selectedMonth})</span>
            <span class="stat-value">${Formatters.compactCurrency(totalMonthlySalaryBill, currency)}</span>
            <span class="stat-subtext">${payrolls.length} employee records</span>
          </div>
          <div class="stat-icon primary">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
        </div>

        <div class="stat-card accent-success">
          <div class="stat-info">
            <span class="stat-label">Disbursed (Paid)</span>
            <span class="stat-value" style="color: var(--success);">${Formatters.compactCurrency(paidSalary, currency)}</span>
            <span class="stat-subtext" style="color: var(--success);">${payrolls.filter(p => p.status === 'Paid').length} paid out</span>
          </div>
          <div class="stat-icon success">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
        </div>

        <div class="stat-card accent-danger">
          <div class="stat-info">
            <span class="stat-label">Pending Payout</span>
            <span class="stat-value" style="color: var(--danger);">${Formatters.compactCurrency(unpaidSalary, currency)}</span>
            <span class="stat-subtext" style="color: var(--danger);">${payrolls.filter(p => p.status !== 'Paid').length} pending</span>
          </div>
          <div class="stat-icon danger">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
        </div>
      </div>

      <!-- Main Payroll Card -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">
            <svg style="width: 20px; height: 20px; color: var(--primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            Monthly Salary Sheet & Disbursement
          </div>
          <div class="card-actions">
            <!-- Month Selector -->
            <input type="month" id="payroll-month-selector" class="form-control" style="width: auto;" value="${this.selectedMonth}">

            <!-- 1-Click Generate Payroll -->
            <button class="btn btn-primary" id="btn-generate-payroll">
              ⚡ Generate Payroll for ${this.selectedMonth}
            </button>
          </div>
        </div>

        <div class="card-body no-padding">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Designation / Dept</th>
                  <th>Base Salary</th>
                  <th>Bonus</th>
                  <th>Deductions</th>
                  <th>Net Payable</th>
                  <th>Status</th>
                  <th>Paid Date & Mode</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${payrolls.length === 0 ? `
                  <tr>
                    <td colspan="9" style="text-align: center; padding: 40px; color: var(--text-muted);">
                      No payroll generated for <strong>${this.selectedMonth}</strong> yet. Click "Generate Payroll" to generate monthly salaries.
                    </td>
                  </tr>
                ` : payrolls.map(p => {
                  const isPaid = p.status === 'Paid';
                  return `
                    <tr>
                      <td>
                        <strong>${Formatters.escapeHtml(p.employeeName)}</strong>
                      </td>
                      <td>
                        <div>${Formatters.escapeHtml(p.designation)}</div>
                        <span style="font-size: 11px; color: var(--text-muted);">${Formatters.escapeHtml(p.department || 'General')}</span>
                      </td>
                      <td>${Formatters.currency(p.baseSalary, currency)}</td>
                      <td style="color: var(--success);">${Number(p.bonus) > 0 ? `+${Formatters.currency(p.bonus, currency)}` : '—'}</td>
                      <td style="color: var(--danger);">${Number(p.deduction) > 0 ? `-${Formatters.currency(p.deduction, currency)}` : '—'}</td>
                      <td><strong style="font-size: 14px;">${Formatters.currency(p.netSalary, currency)}</strong></td>
                      <td>
                        <span class="badge ${isPaid ? 'badge-success' : 'badge-warning'}">
                          <span class="badge-dot"></span>
                          ${p.status}
                        </span>
                      </td>
                      <td>
                        ${isPaid ? `
                          <div>${Formatters.date(p.paidDate)}</div>
                          <span style="font-size: 11px; color: var(--cyan);">${p.paymentMethod}</span>
                        ` : '<span style="color: var(--text-muted);">Pending</span>'}
                      </td>
                      <td>
                        <div style="display: flex; gap: 6px;">
                          ${!isPaid ? `
                            <button class="btn btn-success btn-sm btn-pay-salary-action" data-id="${p.id}" title="Disburse salary and automatically record in Expense ledger">
                              💵 Pay Salary
                            </button>
                          ` : `
                            <button class="btn btn-secondary btn-sm btn-print-payslip-action" data-id="${p.id}" title="Print Payslip">
                              🖨️ Payslip
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

  renderEmployeesView(currency, employees) {
    return `
      <div class="card">
        <div class="card-header">
          <div class="card-title">
            <svg style="width: 20px; height: 20px; color: var(--primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            Staff & Employee Directory
          </div>
          <div class="card-actions">
            <button class="btn btn-primary" id="btn-open-add-employee">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
              Add Employee
            </button>
          </div>
        </div>

        <div class="card-body no-padding">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Full Name</th>
                  <th>Designation</th>
                  <th>Department</th>
                  <th>Base Salary</th>
                  <th>Contact Info</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${employees.length === 0 ? `
                  <tr>
                    <td colspan="8" style="text-align: center; padding: 40px; color: var(--text-muted);">
                      No employees registered yet.
                    </td>
                  </tr>
                ` : employees.map(emp => {
                  return `
                    <tr>
                      <td><code>${emp.id}</code></td>
                      <td><strong>${Formatters.escapeHtml(emp.name)}</strong></td>
                      <td>${Formatters.escapeHtml(emp.designation)}</td>
                      <td><span class="badge badge-purple">${Formatters.escapeHtml(emp.department || 'General')}</span></td>
                      <td><strong>${Formatters.currency(emp.baseSalary, currency)}</strong></td>
                      <td>
                        <div>📞 ${Formatters.escapeHtml(emp.phone || '—')}</div>
                        ${emp.email ? `<div style="font-size: 11px; color: var(--text-muted);">✉️ ${Formatters.escapeHtml(emp.email)}</div>` : ''}
                      </td>
                      <td>
                        <span class="badge ${emp.status === 'Active' ? 'badge-success' : 'badge-warning'}">
                          <span class="badge-dot"></span>
                          ${emp.status}
                        </span>
                      </td>
                      <td>
                        <div style="display: flex; gap: 6px;">
                          <button class="btn btn-outline btn-sm btn-edit-employee" data-id="${emp.id}" title="Edit">
                            ✏️
                          </button>
                          <button class="btn btn-outline btn-sm btn-delete-employee" data-id="${emp.id}" style="color: var(--danger);" title="Delete">
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
    // Month picker listener
    const monthPicker = document.getElementById('payroll-month-selector');
    if (monthPicker) {
      monthPicker.addEventListener('change', (e) => {
        this.selectedMonth = e.target.value;
        const app = window.ERP_APP;
        if (app) app.refreshCurrentTab();
      });
    }

    // Sub-tab switcher
    const tabButtons = document.querySelectorAll('.btn-payroll-tab');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.activeTab = e.currentTarget.dataset.tab;
        const app = window.ERP_APP;
        if (app) app.refreshCurrentTab();
      });
    });

    // 1-Click Generate Payroll
    const genBtn = document.getElementById('btn-generate-payroll');
    if (genBtn) {
      genBtn.addEventListener('click', () => {
        const count = store.generateMonthlyPayroll(this.selectedMonth);
        const app = window.ERP_APP;
        if (app) {
          if (count > 0) {
            app.showToast(`Generated payroll for ${count} employees (${this.selectedMonth})!`, 'success');
          } else {
            app.showToast(`Payroll for ${this.selectedMonth} is already generated.`, 'warning');
          }
          app.refreshCurrentTab();
        }
      });
    }
  }
};
