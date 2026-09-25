/**
 * Main Application Controller
 * Handles routing, view switching, modal management, document printing,
 * and reactive data synchronization.
 */

import { store } from './store.js';
import { Formatters } from './utils/formatters.js';

import { DashboardModule } from './modules/dashboard.js';
import { InventoryModule } from './modules/inventory.js';
import { CustomersModule } from './modules/customers.js';
import { SalesModule } from './modules/sales.js';
import { CrmModule } from './modules/crm.js';
import { PayrollModule } from './modules/payroll.js';
import { ExpensesModule } from './modules/expenses.js';
import { ReportsModule } from './modules/reports.js';

class ERPApplication {
  constructor() {
    this.currentTab = 'dashboard';
    this.modules = {
      dashboard: DashboardModule,
      inventory: InventoryModule,
      customers: CustomersModule,
      sales: SalesModule,
      crm: CrmModule,
      payroll: PayrollModule,
      expenses: ExpensesModule,
      reports: ReportsModule
    };

    window.ERP_APP = this;
  }

  init() {
    this.applyTheme(store.getSettings().theme || 'dark');
    this.setupNavigation();
    this.setupGlobalActions();
    this.render();

    // Subscribe to store updates
    store.subscribe(() => {
      this.updateBadges();
      this.renderCurrentView();
    });

    this.updateBadges();
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = link.dataset.tab;
        if (tab) this.switchTab(tab);

        // Close mobile sidebar if open
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) sidebar.classList.remove('mobile-open');
      });
    });

    // Mobile hamburger toggle
    const toggleBtn = document.getElementById('btn-mobile-sidebar-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) sidebar.classList.toggle('mobile-open');
      });
    }

    // Theme toggle
    const themeBtn = document.getElementById('btn-toggle-theme');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
        store.saveSettings({ theme: newTheme });
        themeBtn.innerText = newTheme === 'dark' ? '🌙' : '☀️';
      });
    }
  }

  switchTab(tabName) {
    if (!this.modules[tabName]) return;
    this.currentTab = tabName;

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.tab === tabName);
    });

    // Update page title
    const titles = {
      dashboard: { title: 'Executive Overview', desc: 'Real-time financial performance and operations' },
      inventory: { title: 'Products & Stock Inventory', desc: 'Manage products, stock alerts and warehouse valuation' },
      customers: { title: 'Customer Directory', desc: 'Client profiles, outstanding dues and ledger' },
      sales: { title: 'Sales & Billing Pipeline', desc: 'Quotations, Invoices, Delivery Challans & Payments' },
      crm: { title: 'Leads & CRM Pipeline', desc: 'Lead tracking, deal value and won customer conversion' },
      payroll: { title: 'Employees & Payroll', desc: 'Staff directory, monthly payroll runs & payslips' },
      expenses: { title: 'Expense Management', desc: 'Category-wise expense tracking and payment methods' },
      reports: { title: 'Cash Flow & P&L Reports', desc: 'Comprehensive financial statements and analytics' }
    };

    const header = titles[tabName] || { title: 'Business Management', desc: '' };
    const titleEl = document.getElementById('page-header-title');
    const descEl = document.getElementById('page-header-desc');
    if (titleEl) titleEl.innerText = header.title;
    if (descEl) descEl.innerText = header.desc;

    this.renderCurrentView();
  }

  render() {
    this.switchTab(this.currentTab);
  }

  renderCurrentView() {
    const container = document.getElementById('view-container');
    const currentModule = this.modules[this.currentTab];
    if (container && currentModule) {
      container.innerHTML = currentModule.render();
      if (typeof currentModule.postRender === 'function') {
        currentModule.postRender();
      }
      this.attachViewEvents();
    }
  }

  refreshCurrentTab() {
    this.renderCurrentView();
  }

  updateBadges() {
    const lowStockCount = store.getLowStockProducts().length;
    const badge = document.getElementById('nav-badge-lowstock');
    if (badge) {
      badge.innerText = lowStockCount;
      badge.style.display = lowStockCount > 0 ? 'inline-block' : 'none';
    }

    const alertBanner = document.getElementById('topbar-lowstock-alert');
    if (alertBanner) {
      if (lowStockCount > 0) {
        alertBanner.style.display = 'flex';
        alertBanner.innerHTML = `⚠️ Low Stock Alert (${lowStockCount})`;
      } else {
        alertBanner.style.display = 'none';
      }
    }
  }

  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✓' : type === 'warning' ? '⚠️' : type === 'danger' ? '✕' : 'ℹ️'}</span>
      <span style="font-size: 13px; font-weight: 500;">${Formatters.escapeHtml(message)}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 250);
    }, 3500);
  }

  // ==========================================
  // MODAL CONTROLLER
  // ==========================================
  openModal(title, contentHtml, onConfirm = null, confirmText = 'Save', confirmClass = 'btn-primary') {
    const overlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalFooter = document.getElementById('modal-footer');

    modalTitle.innerHTML = title;
    modalBody.innerHTML = contentHtml;

    if (onConfirm) {
      modalFooter.innerHTML = `
        <button class="btn btn-secondary" id="modal-btn-cancel">Cancel</button>
        <button class="btn ${confirmClass}" id="modal-btn-confirm">${confirmText}</button>
      `;
      document.getElementById('modal-btn-confirm').onclick = () => {
        if (onConfirm() !== false) {
          this.closeModal();
        }
      };
    } else {
      modalFooter.innerHTML = `
        <button class="btn btn-secondary" id="modal-btn-cancel">Close</button>
      `;
    }

    document.getElementById('modal-btn-cancel').onclick = () => this.closeModal();
    overlay.classList.add('open');
  }

  closeModal() {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.classList.remove('open');
  }

  // ==========================================
  // VIEW-SPECIFIC EVENT ATTACHMENTS
  // ==========================================
  attachViewEvents() {
    const currency = store.getSettings().currency || '৳';

    // Dashboard alert click -> Switch to Inventory
    const lowStockAlert = document.getElementById('btn-dashboard-view-lowstock');
    if (lowStockAlert) {
      lowStockAlert.onclick = () => {
        InventoryModule.filterLowStockOnly = true;
        this.switchTab('inventory');
      };
    }

    const topbarAlert = document.getElementById('topbar-lowstock-alert');
    if (topbarAlert) {
      topbarAlert.onclick = () => {
        InventoryModule.filterLowStockOnly = true;
        this.switchTab('inventory');
      };
    }

    // Quick Dashboard Actions
    const qNewInv = document.getElementById('btn-quick-new-invoice');
    if (qNewInv) qNewInv.onclick = () => this.openCreateInvoiceModal();

    const qNewQuote = document.getElementById('btn-quick-new-quote');
    if (qNewQuote) qNewQuote.onclick = () => this.openCreateQuotationModal();

    const qPay = document.getElementById('btn-quick-record-payment');
    if (qPay) qPay.onclick = () => this.openRecordPaymentModal();

    const qExp = document.getElementById('btn-quick-add-expense');
    if (qExp) qExp.onclick = () => this.openAddExpenseModal();

    const qLead = document.getElementById('btn-quick-add-lead');
    if (qLead) qLead.onclick = () => this.openAddLeadModal();

    const qViewAllInv = document.getElementById('btn-view-all-invoices');
    if (qViewAllInv) qViewAllInv.onclick = () => this.switchTab('sales');

    // INVENTORY EVENTS
    const addProductBtn = document.getElementById('btn-open-add-product');
    if (addProductBtn) addProductBtn.onclick = () => this.openProductModal();

    document.querySelectorAll('.btn-edit-product').forEach(btn => {
      btn.onclick = () => this.openProductModal(btn.dataset.id);
    });

    document.querySelectorAll('.btn-adjust-stock').forEach(btn => {
      btn.onclick = () => this.openAdjustStockModal(btn.dataset.id);
    });

    document.querySelectorAll('.btn-delete-product').forEach(btn => {
      btn.onclick = () => {
        if (confirm('Are you sure you want to delete this product?')) {
          store.deleteProduct(btn.dataset.id);
          this.showToast('Product removed from catalog', 'warning');
        }
      };
    });

    // CUSTOMERS EVENTS
    const addCustBtn = document.getElementById('btn-open-add-customer');
    if (addCustBtn) addCustBtn.onclick = () => this.openCustomerModal();

    document.querySelectorAll('.btn-edit-customer').forEach(btn => {
      btn.onclick = () => this.openCustomerModal(btn.dataset.id);
    });

    document.querySelectorAll('.btn-view-customer-ledger').forEach(btn => {
      btn.onclick = () => this.openCustomerLedgerModal(btn.dataset.id);
    });

    document.querySelectorAll('.btn-delete-customer').forEach(btn => {
      btn.onclick = () => {
        if (confirm('Delete this customer profile?')) {
          store.deleteCustomer(btn.dataset.id);
          this.showToast('Customer deleted', 'warning');
        }
      };
    });

    // SALES EVENTS
    const createQuoteBtn = document.getElementById('btn-open-create-quote');
    if (createQuoteBtn) createQuoteBtn.onclick = () => this.openCreateQuotationModal();

    const createInvBtn = document.getElementById('btn-open-create-invoice');
    if (createInvBtn) createInvBtn.onclick = () => this.openCreateInvoiceModal();

    // 1-CLICK: Quotation -> Invoice
    document.querySelectorAll('.btn-convert-to-invoice').forEach(btn => {
      btn.onclick = () => {
        const quoteId = btn.dataset.id;
        const newInv = store.convertQuotationToInvoice(quoteId);
        if (newInv) {
          this.showToast(`Converted Quotation ${quoteId} to Invoice #${newInv.id}!`, 'success');
          SalesModule.activeSubTab = 'invoices';
          this.switchTab('sales');
        }
      };
    });

    // 1-CLICK: Invoice -> Delivery Challan
    document.querySelectorAll('.btn-convert-to-challan').forEach(btn => {
      btn.onclick = () => this.openGenerateChallanModal(btn.dataset.id);
    });

    // View & Print Documents
    document.querySelectorAll('.btn-view-invoice-action').forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        this.openViewInvoiceModal(btn.dataset.id);
      };
    });

    document.querySelectorAll('.btn-view-quote-action').forEach(btn => {
      btn.onclick = () => this.openViewQuotationModal(btn.dataset.id);
    });

    document.querySelectorAll('.btn-view-challan-action').forEach(btn => {
      btn.onclick = () => this.openViewChallanModal(btn.dataset.id);
    });

    // Record Payment on Invoice
    document.querySelectorAll('.btn-record-payment-for-inv').forEach(btn => {
      btn.onclick = () => this.openRecordPaymentModal(btn.dataset.id);
    });

    // CRM EVENTS
    const addLeadBtn = document.getElementById('btn-open-add-lead');
    if (addLeadBtn) addLeadBtn.onclick = () => this.openAddLeadModal();

    document.querySelectorAll('.btn-delete-lead').forEach(btn => {
      btn.onclick = () => {
        if (confirm('Delete this lead?')) {
          store.deleteLead(btn.dataset.id);
          this.showToast('Lead deleted', 'warning');
        }
      };
    });

    // 1-CLICK: Convert Won Lead to Customer & Quotation
    document.querySelectorAll('.btn-convert-won-lead').forEach(btn => {
      btn.onclick = () => {
        const leadId = btn.dataset.id;
        const res = store.convertLeadToCustomer(leadId);
        if (res) {
          this.showToast(`Won lead converted to Customer "${res.customer.name}" & Quotation #${res.quotation.id}!`, 'success');
          SalesModule.activeSubTab = 'quotations';
          this.switchTab('sales');
        }
      };
    });

    // PAYROLL EVENTS
    const addEmpBtn = document.getElementById('btn-open-add-employee');
    if (addEmpBtn) addEmpBtn.onclick = () => this.openEmployeeModal();

    document.querySelectorAll('.btn-edit-employee').forEach(btn => {
      btn.onclick = () => this.openEmployeeModal(btn.dataset.id);
    });

    document.querySelectorAll('.btn-delete-employee').forEach(btn => {
      btn.onclick = () => {
        if (confirm('Remove employee from roster?')) {
          store.deleteEmployee(btn.dataset.id);
          this.showToast('Employee removed', 'warning');
        }
      };
    });

    document.querySelectorAll('.btn-pay-salary-action').forEach(btn => {
      btn.onclick = () => this.openPaySalaryModal(btn.dataset.id);
    });

    document.querySelectorAll('.btn-print-payslip-action').forEach(btn => {
      btn.onclick = () => this.openPrintPayslipModal(btn.dataset.id);
    });

    // EXPENSES EVENTS
    const addExpBtn = document.getElementById('btn-open-add-expense');
    if (addExpBtn) addExpBtn.onclick = () => this.openAddExpenseModal();

    document.querySelectorAll('.btn-delete-expense').forEach(btn => {
      btn.onclick = () => {
        if (confirm('Delete this expense voucher?')) {
          store.deleteExpense(btn.dataset.id);
          this.showToast('Expense voucher deleted', 'warning');
        }
      };
    });
  }

  setupGlobalActions() {
    // Modal backdrop close
    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.closeModal();
      });
    }

    const modalCloseX = document.getElementById('modal-close-x');
    if (modalCloseX) {
      modalCloseX.onclick = () => this.closeModal();
    }

    // Settings & Backup Modal
    const settingsBtn = document.getElementById('btn-open-settings');
    if (settingsBtn) {
      settingsBtn.onclick = () => this.openSettingsModal();
    }
  }

  // ===================================================================
  // MODAL BUILDERS & LOGIC
  // ===================================================================

  // 1. Product Modal
  openProductModal(productId = null) {
    const product = productId ? store.getProductById(productId) : {};
    const isEdit = !!productId;

    const html = `
      <form id="form-product">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Product Name <span class="required">*</span></label>
            <input type="text" id="p-name" class="form-control" value="${Formatters.escapeHtml(product.name || '')}" required placeholder="e.g. Industrial Inverter 5KW">
          </div>
          <div class="form-group">
            <label class="form-label">SKU / Code</label>
            <input type="text" id="p-sku" class="form-control" value="${Formatters.escapeHtml(product.sku || '')}" placeholder="Auto-generated if blank">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Category</label>
            <input type="text" id="p-category" class="form-control" value="${Formatters.escapeHtml(product.category || 'General')}" placeholder="e.g. Electrical, Machinery">
          </div>
          <div class="form-group">
            <label class="form-label">Unit of Measure</label>
            <input type="text" id="p-unit" class="form-control" value="${Formatters.escapeHtml(product.unit || 'pcs')}" placeholder="e.g. pcs, kg, roll, box">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Cost / Purchase Price</label>
            <input type="number" id="p-cost" class="form-control" value="${product.costPrice || ''}" required placeholder="0.00" step="any">
          </div>
          <div class="form-group">
            <label class="form-label">Selling Price <span class="required">*</span></label>
            <input type="number" id="p-sell" class="form-control" value="${product.sellPrice || ''}" required placeholder="0.00" step="any">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Current Stock Quantity</label>
            <input type="number" id="p-stock" class="form-control" value="${product.stock !== undefined ? product.stock : 10}">
          </div>
          <div class="form-group">
            <label class="form-label">Low Stock Alert Threshold</label>
            <input type="number" id="p-minstock" class="form-control" value="${product.minStock || 5}" placeholder="Alert triggered below this level">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Specifications / Notes</label>
          <textarea id="p-notes" class="form-control" placeholder="Technical specs or supplier info">${Formatters.escapeHtml(product.notes || '')}</textarea>
        </div>
      </form>
    `;

    this.openModal(isEdit ? 'Edit Product' : 'Add New Product', html, () => {
      const name = document.getElementById('p-name').value.trim();
      const sellPrice = Number(document.getElementById('p-sell').value);
      if (!name || isNaN(sellPrice)) {
        alert('Please fill out product name and valid selling price');
        return false;
      }

      store.saveProduct({
        id: product.id,
        name,
        sku: document.getElementById('p-sku').value.trim() || undefined,
        category: document.getElementById('p-category').value.trim(),
        unit: document.getElementById('p-unit').value.trim() || 'pcs',
        costPrice: Number(document.getElementById('p-cost').value) || 0,
        sellPrice,
        stock: Number(document.getElementById('p-stock').value) || 0,
        minStock: Number(document.getElementById('p-minstock').value) || 5,
        notes: document.getElementById('p-notes').value.trim()
      });

      this.showToast(isEdit ? 'Product updated' : 'New product registered', 'success');
      return true;
    });
  }

  // 2. Adjust Stock Modal
  openAdjustStockModal(productId) {
    const product = store.getProductById(productId);
    if (!product) return;

    const html = `
      <div>
        <p style="margin-bottom: 16px;">Product: <strong>${Formatters.escapeHtml(product.name)}</strong></p>
        <p style="margin-bottom: 16px; color: var(--text-secondary);">
          Current Stock: <strong style="color: var(--primary); font-size: 16px;">${product.stock} ${product.unit}</strong>
        </p>

        <div class="form-group">
          <label class="form-label">Adjustment Quantity (Use positive for addition, negative to write-off)</label>
          <input type="number" id="adj-delta" class="form-control" placeholder="e.g. +10 or -3" required>
        </div>

        <div class="form-group">
          <label class="form-label">Reason / Reference</label>
          <select id="adj-reason" class="form-control">
            <option value="New Stock Shipment Received">New Stock Shipment Received</option>
            <option value="Physical Inventory Audit">Physical Inventory Audit</option>
            <option value="Damaged / Broken Write-off">Damaged / Broken Write-off</option>
            <option value="Customer Return">Customer Return</option>
          </select>
        </div>
      </div>
    `;

    this.openModal('Adjust Stock Level', html, () => {
      const delta = Number(document.getElementById('adj-delta').value);
      if (isNaN(delta) || delta === 0) {
        alert('Please enter a non-zero quantity');
        return false;
      }
      const reason = document.getElementById('adj-reason').value;
      store.adjustStock(productId, delta, reason);
      this.showToast(`Stock updated by ${delta > 0 ? '+' + delta : delta} ${product.unit}`, 'success');
      return true;
    }, 'Update Stock');
  }

  // 3. Customer Modal
  openCustomerModal(customerId = null) {
    const cust = customerId ? store.getCustomerById(customerId) : {};
    const isEdit = !!customerId;

    const html = `
      <form id="form-customer">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Full Name / Contact Person <span class="required">*</span></label>
            <input type="text" id="c-name" class="form-control" value="${Formatters.escapeHtml(cust.name || '')}" required placeholder="e.g. Tanvir Hossain">
          </div>
          <div class="form-group">
            <label class="form-label">Company / Enterprise</label>
            <input type="text" id="c-company" class="form-control" value="${Formatters.escapeHtml(cust.company || '')}" placeholder="e.g. Beximco Group">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Phone Number <span class="required">*</span></label>
            <input type="tel" id="c-phone" class="form-control" value="${Formatters.escapeHtml(cust.phone || '')}" required placeholder="+880 1711-xxxxxx">
          </div>
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" id="c-email" class="form-control" value="${Formatters.escapeHtml(cust.email || '')}" placeholder="name@company.com">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Billing & Delivery Address</label>
          <textarea id="c-address" class="form-control" placeholder="Factory / Office delivery location">${Formatters.escapeHtml(cust.address || '')}</textarea>
        </div>
      </form>
    `;

    this.openModal(isEdit ? 'Edit Customer' : 'Add New Customer', html, () => {
      const name = document.getElementById('c-name').value.trim();
      const phone = document.getElementById('c-phone').value.trim();
      if (!name || !phone) {
        alert('Please fill out customer name and phone');
        return false;
      }

      store.saveCustomer({
        id: cust.id,
        name,
        company: document.getElementById('c-company').value.trim(),
        phone,
        email: document.getElementById('c-email').value.trim(),
        address: document.getElementById('c-address').value.trim()
      });

      this.showToast(isEdit ? 'Customer profile updated' : 'New customer registered', 'success');
      return true;
    });
  }

  // 4. Customer Ledger Modal
  openCustomerLedgerModal(customerId) {
    const cust = store.getCustomerById(customerId);
    if (!cust) return;

    const currency = store.getSettings().currency || '৳';
    const invoices = store.getInvoices().filter(inv => inv.customerId === customerId);
    const payments = (store.data.payments || []).filter(p => p.customerId === customerId);

    const html = `
      <div style="margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <h3>${Formatters.escapeHtml(cust.name)}</h3>
            <p style="color: var(--text-muted); font-size: 13px;">${Formatters.escapeHtml(cust.company || 'Individual Client')} | 📞 ${cust.phone}</p>
          </div>
          <div style="text-align: right;">
            <span style="font-size: 11px; text-transform: uppercase; color: var(--text-muted);">Current Outstanding Due</span>
            <div style="font-size: 20px; font-weight: 700; color: ${Number(cust.dueBalance) > 0 ? 'var(--danger)' : 'var(--success)'};">
              ${Formatters.currency(cust.dueBalance, currency)}
            </div>
          </div>
        </div>
      </div>

      <h4 style="margin: 16px 0 8px; font-size: 14px;">Invoices Issued</h4>
      <div class="table-responsive" style="margin-bottom: 20px;">
        <table class="data-table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Due</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${invoices.length === 0 ? '<tr><td colspan="6" style="text-align: center;">No invoices yet</td></tr>' : invoices.map(i => `
              <tr>
                <td><strong>${i.id}</strong></td>
                <td>${Formatters.date(i.date)}</td>
                <td>${Formatters.currency(i.grandTotal, currency)}</td>
                <td style="color: var(--success);">${Formatters.currency(i.paidAmount, currency)}</td>
                <td style="color: ${Number(i.dueAmount) > 0 ? 'var(--danger)' : 'var(--text-muted)'}; font-weight: 600;">
                  ${Formatters.currency(i.dueAmount, currency)}
                </td>
                <td><span class="badge ${i.paymentStatus === 'Paid' ? 'badge-success' : 'badge-danger'}">${i.paymentStatus}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <h4 style="margin: 16px 0 8px; font-size: 14px;">Payments Received</h4>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Date</th>
              <th>Method</th>
              <th>Amount</th>
              <th>Reference</th>
            </tr>
          </thead>
          <tbody>
            ${payments.length === 0 ? '<tr><td colspan="5" style="text-align: center;">No payments recorded</td></tr>' : payments.map(p => `
              <tr>
                <td><code>${p.id}</code></td>
                <td>${Formatters.date(p.date)}</td>
                <td><span class="badge badge-secondary">${p.method}</span></td>
                <td style="color: var(--success); font-weight: 700;">${Formatters.currency(p.amount, currency)}</td>
                <td>${Formatters.escapeHtml(p.reference || '—')}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    this.openModal(`Customer Account Ledger: ${cust.name}`, html, null);
  }

  // 5. Create Quotation Modal
  openCreateQuotationModal() {
    const customers = store.getCustomers();
    const products = store.getProducts();

    if (!customers.length) {
      alert('Please add at least one customer first.');
      this.openCustomerModal();
      return;
    }

    const html = `
      <form id="form-quotation">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Select Customer <span class="required">*</span></label>
            <select id="quote-cust-select" class="form-control" required>
              ${customers.map(c => `
                <option value="${c.id}">${Formatters.escapeHtml(c.name)} (${Formatters.escapeHtml(c.company || c.phone)})</option>
              `).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Quotation Date</label>
            <input type="date" id="quote-date" class="form-control" value="${Formatters.dateForInput()}">
          </div>
        </div>

        <div style="margin: 18px 0 10px; display: flex; justify-content: space-between; align-items: center;">
          <h4 style="font-size: 14px;">Quotation Line Items</h4>
          <button type="button" class="btn btn-secondary btn-sm" id="btn-add-quote-item">+ Add Item</button>
        </div>

        <div id="quote-items-container" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px;">
          <!-- Item row will be added dynamically -->
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Discount Amount</label>
            <input type="number" id="quote-discount" class="form-control" value="0" min="0">
          </div>
          <div class="form-group">
            <label class="form-label">VAT / Tax Amount</label>
            <input type="number" id="quote-tax" class="form-control" value="0" min="0">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Terms & Notes</label>
          <textarea id="quote-notes" class="form-control" placeholder="Payment terms, delivery timeline, validity period">Validity: 15 Days from issue date. 50% advance along with work order.</textarea>
        </div>
      </form>
    `;

    this.openModal('Create New Quotation', html, () => {
      const custId = document.getElementById('quote-cust-select').value;
      const cust = store.getCustomerById(custId);
      const rows = document.querySelectorAll('.quote-item-row');
      const items = [];
      let subtotal = 0;

      rows.forEach(r => {
        const prodId = r.querySelector('.item-prod-select').value;
        const prod = store.getProductById(prodId);
        const qty = Number(r.querySelector('.item-qty').value) || 1;
        const price = Number(r.querySelector('.item-price').value) || (prod ? prod.sellPrice : 0);
        const total = qty * price;
        subtotal += total;

        items.push({
          productId: prodId,
          productName: prod ? prod.name : 'Custom Item',
          qty,
          unitPrice: price,
          total
        });
      });

      if (!items.length) {
        alert('Please add at least one line item');
        return false;
      }

      const discount = Number(document.getElementById('quote-discount').value) || 0;
      const tax = Number(document.getElementById('quote-tax').value) || 0;
      const grandTotal = Math.max(0, subtotal - discount + tax);

      store.saveQuotation({
        customerId: cust.id,
        customerName: cust.name,
        customerPhone: cust.phone,
        customerAddress: cust.address,
        date: document.getElementById('quote-date').value,
        items,
        subtotal,
        discount,
        tax,
        grandTotal,
        notes: document.getElementById('quote-notes').value.trim()
      });

      this.showToast('Quotation created successfully!', 'success');
      SalesModule.activeSubTab = 'quotations';
      this.switchTab('sales');
      return true;
    }, 'Generate Quotation');

    // Attach dynamic row generator
    const addItemRow = () => {
      const container = document.getElementById('quote-items-container');
      const row = document.createElement('div');
      row.className = 'quote-item-row';
      row.style.display = 'grid';
      row.style.gridTemplateColumns = '2fr 1fr 1fr auto';
      row.style.gap = '8px';
      row.style.alignItems = 'center';

      row.innerHTML = `
        <select class="form-control item-prod-select">
          ${products.map(p => `
            <option value="${p.id}" data-price="${p.sellPrice}">${Formatters.escapeHtml(p.name)} (Stock: ${p.stock})</option>
          `).join('')}
        </select>
        <input type="number" class="form-control item-qty" value="1" min="1" placeholder="Qty">
        <input type="number" class="form-control item-price" value="${products[0]?.sellPrice || 0}" placeholder="Price">
        <button type="button" class="btn btn-outline btn-sm btn-remove-item" style="color: var(--danger); padding: 7px 10px;">✕</button>
      `;

      const select = row.querySelector('.item-prod-select');
      const priceInput = row.querySelector('.item-price');
      select.onchange = () => {
        const opt = select.selectedOptions[0];
        if (opt) priceInput.value = opt.dataset.price;
      };

      row.querySelector('.btn-remove-item').onclick = () => row.remove();
      container.appendChild(row);
    };

    document.getElementById('btn-add-quote-item').onclick = addItemRow;
    addItemRow(); // Initial row
  }

  // 6. Create Invoice Modal
  openCreateInvoiceModal() {
    const customers = store.getCustomers();
    const products = store.getProducts();

    if (!customers.length) {
      alert('Please add at least one customer first.');
      this.openCustomerModal();
      return;
    }

    const html = `
      <form id="form-invoice">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Select Customer <span class="required">*</span></label>
            <select id="inv-cust-select" class="form-control" required>
              ${customers.map(c => `
                <option value="${c.id}">${Formatters.escapeHtml(c.name)} (${Formatters.escapeHtml(c.company || c.phone)})</option>
              `).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Invoice Date</label>
            <input type="date" id="inv-date" class="form-control" value="${Formatters.dateForInput()}">
          </div>
          <div class="form-group">
            <label class="form-label">Due Date</label>
            <input type="date" id="inv-due-date" class="form-control" value="${Formatters.dateForInput(new Date(Date.now() + 14 * 86400000))}">
          </div>
        </div>

        <div style="margin: 18px 0 10px; display: flex; justify-content: space-between; align-items: center;">
          <h4 style="font-size: 14px;">Invoice Line Items</h4>
          <button type="button" class="btn btn-secondary btn-sm" id="btn-add-inv-item">+ Add Item</button>
        </div>

        <div id="inv-items-container" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px;"></div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Discount Amount</label>
            <input type="number" id="inv-discount" class="form-control" value="0" min="0">
          </div>
          <div class="form-group">
            <label class="form-label">VAT / Tax Amount</label>
            <input type="number" id="inv-tax" class="form-control" value="0" min="0">
          </div>
          <div class="form-group">
            <label class="form-label">Advance Paid Amount</label>
            <input type="number" id="inv-paid" class="form-control" value="0" min="0" placeholder="0.00">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Invoice Notes</label>
          <textarea id="inv-notes" class="form-control" placeholder="Payment details, bank account info, delivery notes">Thank you for your business. Please make cheques payable to Apex Industrial & Tech Solutions.</textarea>
        </div>
      </form>
    `;

    this.openModal('Create Official Invoice', html, () => {
      const custId = document.getElementById('inv-cust-select').value;
      const cust = store.getCustomerById(custId);
      const rows = document.querySelectorAll('.inv-item-row');
      const items = [];
      let subtotal = 0;

      rows.forEach(r => {
        const prodId = r.querySelector('.item-prod-select').value;
        const prod = store.getProductById(prodId);
        const qty = Number(r.querySelector('.item-qty').value) || 1;
        const price = Number(r.querySelector('.item-price').value) || (prod ? prod.sellPrice : 0);
        const total = qty * price;
        subtotal += total;

        items.push({
          productId: prodId,
          productName: prod ? prod.name : 'Item',
          qty,
          costPrice: prod ? prod.costPrice : 0,
          unitPrice: price,
          total
        });
      });

      if (!items.length) {
        alert('Please add at least one line item');
        return false;
      }

      const discount = Number(document.getElementById('inv-discount').value) || 0;
      const tax = Number(document.getElementById('inv-tax').value) || 0;
      const grandTotal = Math.max(0, subtotal - discount + tax);
      const paidAmount = Number(document.getElementById('inv-paid').value) || 0;

      store.saveInvoice({
        customerId: cust.id,
        customerName: cust.name,
        customerPhone: cust.phone,
        customerAddress: cust.address,
        date: document.getElementById('inv-date').value,
        dueDate: document.getElementById('inv-due-date').value,
        items,
        subtotal,
        discount,
        tax,
        grandTotal,
        paidAmount,
        notes: document.getElementById('inv-notes').value.trim()
      });

      this.showToast('Official Invoice generated!', 'success');
      SalesModule.activeSubTab = 'invoices';
      this.switchTab('sales');
      return true;
    }, 'Generate Invoice');

    const addItemRow = () => {
      const container = document.getElementById('inv-items-container');
      const row = document.createElement('div');
      row.className = 'inv-item-row';
      row.style.display = 'grid';
      row.style.gridTemplateColumns = '2fr 1fr 1fr auto';
      row.style.gap = '8px';
      row.style.alignItems = 'center';

      row.innerHTML = `
        <select class="form-control item-prod-select">
          ${products.map(p => `
            <option value="${p.id}" data-price="${p.sellPrice}">${Formatters.escapeHtml(p.name)} (Stock: ${p.stock})</option>
          `).join('')}
        </select>
        <input type="number" class="form-control item-qty" value="1" min="1" placeholder="Qty">
        <input type="number" class="form-control item-price" value="${products[0]?.sellPrice || 0}" placeholder="Price">
        <button type="button" class="btn btn-outline btn-sm btn-remove-item" style="color: var(--danger); padding: 7px 10px;">✕</button>
      `;

      const select = row.querySelector('.item-prod-select');
      const priceInput = row.querySelector('.item-price');
      select.onchange = () => {
        const opt = select.selectedOptions[0];
        if (opt) priceInput.value = opt.dataset.price;
      };

      row.querySelector('.btn-remove-item').onclick = () => row.remove();
      container.appendChild(row);
    };

    document.getElementById('btn-add-inv-item').onclick = addItemRow;
    addItemRow();
  }

  // 7. RECORD PAYMENT MODAL (with Automated Stock Deduction feedback)
  openRecordPaymentModal(invoiceId = null) {
    const invoicesWithDue = store.getInvoices().filter(inv => Number(inv.dueAmount) > 0);
    const currency = store.getSettings().currency || '৳';

    if (!invoicesWithDue.length) {
      this.showToast('All invoices are already fully paid! No outstanding dues.', 'success');
      return;
    }

    const defaultInv = invoiceId ? store.getInvoiceById(invoiceId) : invoicesWithDue[0];

    const html = `
      <form id="form-record-payment">
        <div class="form-group">
          <label class="form-label">Select Unpaid / Due Invoice <span class="required">*</span></label>
          <select id="pay-inv-select" class="form-control">
            ${invoicesWithDue.map(inv => `
              <option value="${inv.id}" data-due="${inv.dueAmount}" ${inv.id === defaultInv?.id ? 'selected' : ''}>
                ${inv.id} - ${Formatters.escapeHtml(inv.customerName)} (Due: ${Formatters.currency(inv.dueAmount, currency)})
              </option>
            `).join('')}
          </select>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Payment Amount (${currency}) <span class="required">*</span></label>
            <input type="number" id="pay-amount" class="form-control" value="${defaultInv?.dueAmount || ''}" max="${defaultInv?.dueAmount || ''}" step="any" required>
          </div>
          <div class="form-group">
            <label class="form-label">Payment Date</label>
            <input type="date" id="pay-date" class="form-control" value="${Formatters.dateForInput()}">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Payment Method</label>
            <select id="pay-method" class="form-control">
              <option value="Cash">Cash</option>
              <option value="Bank Transfer" selected>Bank Transfer (BEFTN / RTGS)</option>
              <option value="bKash">bKash Corporate</option>
              <option value="Nagad">Nagad</option>
              <option value="Card">Credit / Debit Card</option>
              <option value="Cheque">Bank Cheque</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Transaction Ref / Cheque No.</label>
            <input type="text" id="pay-ref" class="form-control" placeholder="e.g. BRAC-TRX-10294">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Notes</label>
          <textarea id="pay-notes" class="form-control" placeholder="Payment received confirmation notes"></textarea>
        </div>

        <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 6px; padding: 12px; font-size: 12px; color: var(--success); display: flex; align-items: center; gap: 8px;">
          <span>⚡</span>
          <span><strong>Automatic Stock Deduction:</strong> Product quantities will be automatically deducted from inventory upon recording this payment.</span>
        </div>
      </form>
    `;

    this.openModal('Record Customer Payment', html, () => {
      const invId = document.getElementById('pay-inv-select').value;
      const amount = Number(document.getElementById('pay-amount').value);
      if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid payment amount');
        return false;
      }

      const res = store.recordInvoicePayment({
        invoiceId: invId,
        amount,
        method: document.getElementById('pay-method').value,
        date: document.getElementById('pay-date').value,
        reference: document.getElementById('pay-ref').value.trim(),
        notes: document.getElementById('pay-notes').value.trim()
      });

      if (res.success) {
        if (res.stockDeductedNow) {
          this.showToast(`Payment recorded (${Formatters.currency(amount, currency)}) & Stock automatically deducted!`, 'success');
        } else {
          this.showToast(`Payment recorded (${Formatters.currency(amount, currency)})!`, 'success');
        }
        return true;
      } else {
        alert(res.message);
        return false;
      }
    }, 'Confirm Payment');

    // Auto-fill due amount when invoice selection changes
    const invSelect = document.getElementById('pay-inv-select');
    const amtInput = document.getElementById('pay-amount');
    invSelect.onchange = () => {
      const due = invSelect.selectedOptions[0]?.dataset.due;
      if (due) {
        amtInput.value = due;
        amtInput.max = due;
      }
    };
  }

  // 8. 1-Click Generate Delivery Challan Modal
  openGenerateChallanModal(invoiceId) {
    const invoice = store.getInvoiceById(invoiceId);
    if (!invoice) return;

    const html = `
      <form id="form-challan">
        <p style="margin-bottom: 12px;">Generating Delivery Challan for Invoice <strong>#${invoice.id}</strong> (${Formatters.escapeHtml(invoice.customerName)})</p>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Dispatch Date</label>
            <input type="date" id="dc-date" class="form-control" value="${Formatters.dateForInput()}">
          </div>
          <div class="form-group">
            <label class="form-label">Courier / Logistics Partner</label>
            <input type="text" id="dc-courier" class="form-control" value="In-House Truck Delivery" placeholder="e.g. SA Paribahan, In-House">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Vehicle Registration No.</label>
            <input type="text" id="dc-vehicle" class="form-control" placeholder="Dhaka Metro-Ta 11-xxxx">
          </div>
          <div class="form-group">
            <label class="form-label">Driver / Dispatch Contact Phone</label>
            <input type="tel" id="dc-driver-phone" class="form-control" placeholder="+880 17xx-xxxxxx">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Destination Delivery Address</label>
          <textarea id="dc-address" class="form-control">${Formatters.escapeHtml(invoice.customerAddress || '')}</textarea>
        </div>
      </form>
    `;

    this.openModal('Generate Delivery Challan', html, () => {
      const challan = store.convertInvoiceToChallan(invoiceId, {
        date: document.getElementById('dc-date').value,
        courierName: document.getElementById('dc-courier').value.trim(),
        vehicleNo: document.getElementById('dc-vehicle').value.trim(),
        driverPhone: document.getElementById('dc-driver-phone').value.trim(),
        deliveryAddress: document.getElementById('dc-address').value.trim()
      });

      if (challan) {
        this.showToast(`Delivery Challan #${challan.id} generated!`, 'success');
        SalesModule.activeSubTab = 'challans';
        this.switchTab('sales');
        return true;
      }
      return false;
    }, 'Generate Challan');
  }

  // 9. View & Print Quotation Document
  openViewQuotationModal(quoteId) {
    const q = store.getQuotationById(quoteId);
    if (!q) return;
    const settings = store.getSettings();
    const currency = settings.currency || '৳';

    const html = `
      <div class="document-sheet">
        <div class="doc-header">
          <div class="doc-company">
            <h2>${Formatters.escapeHtml(settings.companyName)}</h2>
            <p style="color: #64748b; font-size: 11px;">${Formatters.escapeHtml(settings.tagline || '')}</p>
            <p style="font-size: 11px; margin-top: 4px;">📍 ${Formatters.escapeHtml(settings.address)}</p>
            <p style="font-size: 11px;">📞 ${Formatters.escapeHtml(settings.phone)} | ✉️ ${Formatters.escapeHtml(settings.email)}</p>
            <p style="font-size: 11px; font-weight: 600;">BIN: ${Formatters.escapeHtml(settings.binNumber)}</p>
          </div>
          <div class="doc-badge-title">
            <h1 style="color: #06b6d4;">QUOTATION</h1>
            <p style="font-weight: 700; font-size: 14px;"># ${q.id}</p>
            <p style="font-size: 12px; color: #64748b;">Date: ${Formatters.date(q.date)}</p>
            <span class="badge ${q.status === 'Accepted' ? 'badge-success' : 'badge-primary'}" style="margin-top: 6px;">
              ${q.status}
            </span>
          </div>
        </div>

        <div class="doc-info-grid">
          <div>
            <h4 style="font-size: 12px; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">Quotation Prepared For:</h4>
            <div style="font-weight: 700; font-size: 14px;">${Formatters.escapeHtml(q.customerName)}</div>
            ${q.customerPhone ? `<div>📞 ${Formatters.escapeHtml(q.customerPhone)}</div>` : ''}
            ${q.customerAddress ? `<div>📍 ${Formatters.escapeHtml(q.customerAddress)}</div>` : ''}
          </div>
          <div style="text-align: right;">
            <h4 style="font-size: 12px; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">Reference:</h4>
            <div>Proposal / Supply Inquiry</div>
            <div style="font-size: 11px; color: #64748b;">Currency: BDT (${currency})</div>
          </div>
        </div>

        <table class="doc-table">
          <thead>
            <tr>
              <th style="width: 40px;">SL</th>
              <th>Description of Goods / Services</th>
              <th style="width: 80px; text-align: center;">Qty</th>
              <th style="width: 120px; text-align: right;">Unit Price</th>
              <th style="width: 130px; text-align: right;">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            ${(q.items || []).map((it, idx) => `
              <tr>
                <td>${idx + 1}</td>
                <td><strong>${Formatters.escapeHtml(it.productName)}</strong></td>
                <td style="text-align: center;">${it.qty}</td>
                <td style="text-align: right;">${Formatters.currency(it.unitPrice, currency)}</td>
                <td style="text-align: right; font-weight: 600;">${Formatters.currency(it.total, currency)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="doc-totals">
          <div class="doc-totals-box">
            <div class="doc-total-row">
              <span>Subtotal:</span>
              <span>${Formatters.currency(q.subtotal, currency)}</span>
            </div>
            ${Number(q.discount) > 0 ? `
              <div class="doc-total-row" style="color: #ef4444;">
                <span>Discount:</span>
                <span>-${Formatters.currency(q.discount, currency)}</span>
              </div>
            ` : ''}
            ${Number(q.tax) > 0 ? `
              <div class="doc-total-row">
                <span>VAT / Tax:</span>
                <span>+${Formatters.currency(q.tax, currency)}</span>
              </div>
            ` : ''}
            <div class="doc-total-row grand">
              <span>Grand Total:</span>
              <span>${Formatters.currency(q.grandTotal, currency)}</span>
            </div>
          </div>
        </div>

        <div style="margin-top: 30px; padding: 14px; background: #f8fafc; border-radius: 6px; font-size: 11.5px; color: #475569;">
          <strong>Terms & Conditions:</strong><br>
          ${Formatters.escapeHtml(q.notes || 'Goods once sold are subject to manufacturer warranty terms.')}
        </div>

        <div class="doc-signatures">
          <div class="sign-line">Prepared By</div>
          <div class="sign-line">Authorized Signatory</div>
        </div>
      </div>
    `;

    this.openModal(`Quotation #${q.id}`, html, null);

    // Add Print & Convert button into modal footer
    const footer = document.getElementById('modal-footer');
    footer.innerHTML = `
      ${q.status !== 'Converted' ? `
        <button class="btn btn-success" id="btn-modal-convert-quote">
          ⚡ 1-Click Convert to Invoice
        </button>
      ` : ''}
      <button class="btn btn-primary" onclick="window.print()">
        🖨️ Print / Save as PDF
      </button>
      <button class="btn btn-secondary" onclick="window.ERP_APP.closeModal()">Close</button>
    `;

    const convBtn = document.getElementById('btn-modal-convert-quote');
    if (convBtn) {
      convBtn.onclick = () => {
        const inv = store.convertQuotationToInvoice(q.id);
        if (inv) {
          this.closeModal();
          this.showToast(`Converted to Invoice #${inv.id}!`, 'success');
          SalesModule.activeSubTab = 'invoices';
          this.switchTab('sales');
        }
      };
    }
  }

  // 10. View & Print Invoice Document
  openViewInvoiceModal(invoiceId) {
    const inv = store.getInvoiceById(invoiceId);
    if (!inv) return;
    const settings = store.getSettings();
    const currency = settings.currency || '৳';

    const html = `
      <div class="document-sheet">
        <div class="doc-header">
          <div class="doc-company">
            <h2>${Formatters.escapeHtml(settings.companyName)}</h2>
            <p style="color: #64748b; font-size: 11px;">${Formatters.escapeHtml(settings.tagline || '')}</p>
            <p style="font-size: 11px; margin-top: 4px;">📍 ${Formatters.escapeHtml(settings.address)}</p>
            <p style="font-size: 11px;">📞 ${Formatters.escapeHtml(settings.phone)} | ✉️ ${Formatters.escapeHtml(settings.email)}</p>
            <p style="font-size: 11px; font-weight: 600;">BIN / VAT: ${Formatters.escapeHtml(settings.binNumber)}</p>
          </div>
          <div class="doc-badge-title">
            <h1 style="color: #4f46e5;">TAX INVOICE</h1>
            <p style="font-weight: 700; font-size: 15px;"># ${inv.id}</p>
            <p style="font-size: 12px; color: #64748b;">Issue Date: ${Formatters.date(inv.date)}</p>
            <p style="font-size: 12px; color: #ef4444; font-weight: 600;">Due Date: ${Formatters.date(inv.dueDate)}</p>
            <span class="badge ${inv.paymentStatus === 'Paid' ? 'badge-success' : 'badge-danger'}" style="margin-top: 6px;">
              ${inv.paymentStatus.toUpperCase()}
            </span>
          </div>
        </div>

        <div class="doc-info-grid">
          <div>
            <h4 style="font-size: 12px; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">Invoiced To:</h4>
            <div style="font-weight: 700; font-size: 15px;">${Formatters.escapeHtml(inv.customerName)}</div>
            ${inv.customerPhone ? `<div>📞 ${Formatters.escapeHtml(inv.customerPhone)}</div>` : ''}
            ${inv.customerAddress ? `<div>📍 ${Formatters.escapeHtml(inv.customerAddress)}</div>` : ''}
          </div>
          <div style="text-align: right;">
            <h4 style="font-size: 12px; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">Payment Terms:</h4>
            <div>Net 14 Days</div>
            ${inv.quotationId ? `<div style="font-size: 11.5px; color: #6366f1;">Quotation Ref: #${inv.quotationId}</div>` : ''}
          </div>
        </div>

        <table class="doc-table">
          <thead>
            <tr>
              <th style="width: 40px;">SL</th>
              <th>Item & Description</th>
              <th style="width: 80px; text-align: center;">Qty</th>
              <th style="width: 120px; text-align: right;">Unit Price</th>
              <th style="width: 130px; text-align: right;">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            ${(inv.items || []).map((it, idx) => `
              <tr>
                <td>${idx + 1}</td>
                <td><strong>${Formatters.escapeHtml(it.productName)}</strong></td>
                <td style="text-align: center;">${it.qty}</td>
                <td style="text-align: right;">${Formatters.currency(it.unitPrice, currency)}</td>
                <td style="text-align: right; font-weight: 600;">${Formatters.currency(it.total, currency)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="doc-totals">
          <div class="doc-totals-box">
            <div class="doc-total-row">
              <span>Subtotal:</span>
              <span>${Formatters.currency(inv.subtotal, currency)}</span>
            </div>
            ${Number(inv.discount) > 0 ? `
              <div class="doc-total-row" style="color: #ef4444;">
                <span>Discount:</span>
                <span>-${Formatters.currency(inv.discount, currency)}</span>
              </div>
            ` : ''}
            ${Number(inv.tax) > 0 ? `
              <div class="doc-total-row">
                <span>VAT / Tax:</span>
                <span>+${Formatters.currency(inv.tax, currency)}</span>
              </div>
            ` : ''}
            <div class="doc-total-row grand">
              <span>Invoice Total:</span>
              <span>${Formatters.currency(inv.grandTotal, currency)}</span>
            </div>
            <div class="doc-total-row" style="color: #10b981; font-weight: 600; margin-top: 4px;">
              <span>Paid Amount:</span>
              <span>${Formatters.currency(inv.paidAmount, currency)}</span>
            </div>
            <div class="doc-total-row" style="color: ${Number(inv.dueAmount) > 0 ? '#ef4444' : '#64748b'}; font-weight: 700; font-size: 14px;">
              <span>Due Balance:</span>
              <span>${Formatters.currency(inv.dueAmount, currency)}</span>
            </div>
          </div>
        </div>

        <div style="margin-top: 30px; padding: 14px; background: #f8fafc; border-radius: 6px; font-size: 11.5px; color: #475569;">
          <strong>Payment Instructions & Notes:</strong><br>
          ${Formatters.escapeHtml(inv.notes || 'Please settle invoices before due date to maintain active credit terms.')}
        </div>

        <div class="doc-signatures">
          <div class="sign-line">Customer Signature & Stamp</div>
          <div class="sign-line">Authorized Signatory</div>
        </div>
      </div>
    `;

    this.openModal(`Tax Invoice #${inv.id}`, html, null);

    const footer = document.getElementById('modal-footer');
    footer.innerHTML = `
      ${Number(inv.dueAmount) > 0 ? `
        <button class="btn btn-success" id="btn-modal-pay-inv">
          💵 Record Payment
        </button>
      ` : ''}
      ${!inv.challanId ? `
        <button class="btn btn-primary" id="btn-modal-create-challan">
          🚚 1-Click Delivery Challan
        </button>
      ` : ''}
      <button class="btn btn-primary" onclick="window.print()">
        🖨️ Print / Save PDF
      </button>
      <button class="btn btn-secondary" onclick="window.ERP_APP.closeModal()">Close</button>
    `;

    const payBtn = document.getElementById('btn-modal-pay-inv');
    if (payBtn) payBtn.onclick = () => {
      this.closeModal();
      this.openRecordPaymentModal(inv.id);
    };

    const chBtn = document.getElementById('btn-modal-create-challan');
    if (chBtn) chBtn.onclick = () => {
      this.closeModal();
      this.openGenerateChallanModal(inv.id);
    };
  }

  // 11. View & Print Delivery Challan Document
  openViewChallanModal(challanId) {
    const ch = store.getChallanById(challanId);
    if (!ch) return;
    const settings = store.getSettings();

    const html = `
      <div class="document-sheet">
        <div class="doc-header">
          <div class="doc-company">
            <h2>${Formatters.escapeHtml(settings.companyName)}</h2>
            <p style="color: #64748b; font-size: 11px;">Warehouse & Logistics Dispatch Division</p>
            <p style="font-size: 11px; margin-top: 4px;">📍 ${Formatters.escapeHtml(settings.address)}</p>
            <p style="font-size: 11px;">📞 ${Formatters.escapeHtml(settings.phone)}</p>
          </div>
          <div class="doc-badge-title">
            <h1 style="color: #0284c7;">DELIVERY CHALLAN</h1>
            <p style="font-weight: 700; font-size: 15px;"># ${ch.id}</p>
            <p style="font-size: 12px; color: #64748b;">Dispatch Date: ${Formatters.date(ch.date)}</p>
            <p style="font-size: 12px; color: #4f46e5;">Invoice Ref: #${ch.invoiceId}</p>
          </div>
        </div>

        <div class="doc-info-grid">
          <div>
            <h4 style="font-size: 12px; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">Deliver To (Recipient):</h4>
            <div style="font-weight: 700; font-size: 15px;">${Formatters.escapeHtml(ch.customerName)}</div>
            ${ch.customerPhone ? `<div>📞 ${Formatters.escapeHtml(ch.customerPhone)}</div>` : ''}
            <div>📍 <strong>${Formatters.escapeHtml(ch.deliveryAddress)}</strong></div>
          </div>
          <div style="text-align: right;">
            <h4 style="font-size: 12px; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">Dispatch & Carrier Details:</h4>
            <div>Carrier: <strong>${Formatters.escapeHtml(ch.courierName || 'In-House')}</strong></div>
            <div>Vehicle No: <strong>${Formatters.escapeHtml(ch.vehicleNo || 'N/A')}</strong></div>
            ${ch.driverPhone ? `<div>Driver Contact: ${Formatters.escapeHtml(ch.driverPhone)}</div>` : ''}
            <div>Tracking #: <code>${ch.trackingNo}</code></div>
          </div>
        </div>

        <!-- Challan Table: Displays items and quantities without pricing -->
        <table class="doc-table">
          <thead>
            <tr>
              <th style="width: 40px;">SL</th>
              <th>Product / Package Description</th>
              <th style="width: 100px; text-align: center;">Dispatched Qty</th>
              <th style="width: 100px; text-align: center;">Unit</th>
              <th>Remarks / Condition</th>
            </tr>
          </thead>
          <tbody>
            ${(ch.items || []).map((it, idx) => `
              <tr>
                <td>${idx + 1}</td>
                <td><strong>${Formatters.escapeHtml(it.productName)}</strong></td>
                <td style="text-align: center; font-size: 14px; font-weight: 700;">${it.qty}</td>
                <td style="text-align: center;">${it.unit || 'pcs'}</td>
                <td>Good sealed condition</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div style="margin-top: 30px; padding: 14px; background: #f8fafc; border-radius: 6px; font-size: 11.5px; color: #475569;">
          <strong>Receiver Acknowledgement:</strong><br>
          Received the above-mentioned goods in complete quantity and good condition. No claims for damage after signing.
        </div>

        <div class="doc-signatures">
          <div class="sign-line">Store / Dispatcher In-charge</div>
          <div class="sign-line">Carrier / Driver Handover</div>
          <div class="sign-line">Received By (Customer Stamp & Sign)</div>
        </div>
      </div>
    `;

    this.openModal(`Delivery Challan #${ch.id}`, html, null);

    const footer = document.getElementById('modal-footer');
    footer.innerHTML = `
      <button class="btn btn-primary" onclick="window.print()">
        🖨️ Print Delivery Challan
      </button>
      <button class="btn btn-secondary" onclick="window.ERP_APP.closeModal()">Close</button>
    `;
  }

  // 12. Add CRM Lead Modal
  openAddLeadModal() {
    const html = `
      <form id="form-lead">
        <div class="form-group">
          <label class="form-label">Deal / Inquiry Title <span class="required">*</span></label>
          <input type="text" id="l-title" class="form-control" required placeholder="e.g. Factory High-Bay Lighting Project">
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Contact Person <span class="required">*</span></label>
            <input type="text" id="l-contact" class="form-control" required placeholder="e.g. Engr. Asaduzzaman">
          </div>
          <div class="form-group">
            <label class="form-label">Company / Organization</label>
            <input type="text" id="l-company" class="form-control" placeholder="e.g. DBL Group">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Phone Number <span class="required">*</span></label>
            <input type="tel" id="l-phone" class="form-control" required placeholder="+880 17xx-xxxxxx">
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" id="l-email" class="form-control" placeholder="asad@dblgroup.com">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Estimated Deal Value (৳)</label>
            <input type="number" id="l-val" class="form-control" value="50000" min="0" step="any">
          </div>
          <div class="form-group">
            <label class="form-label">Initial Stage</label>
            <select id="l-stage" class="form-control">
              <option value="new">New Lead</option>
              <option value="contacted">Contacted</option>
              <option value="proposal">Proposal Sent</option>
              <option value="won">Won Deal</option>
              <option value="lost">Lost</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Notes & Follow-up Plans</label>
          <textarea id="l-notes" class="form-control" placeholder="Client requirements, decision makers, tender deadline"></textarea>
        </div>
      </form>
    `;

    this.openModal('Add CRM Lead', html, () => {
      const title = document.getElementById('l-title').value.trim();
      const contactPerson = document.getElementById('l-contact').value.trim();
      const phone = document.getElementById('l-phone').value.trim();
      if (!title || !contactPerson || !phone) {
        alert('Please fill out lead title, contact person and phone');
        return false;
      }

      store.saveLead({
        title,
        contactPerson,
        company: document.getElementById('l-company').value.trim(),
        phone,
        email: document.getElementById('l-email').value.trim(),
        estimatedValue: Number(document.getElementById('l-val').value) || 0,
        stage: document.getElementById('l-stage').value,
        notes: document.getElementById('l-notes').value.trim(),
        date: Formatters.dateForInput()
      });

      this.showToast('New lead added to pipeline!', 'success');
      this.switchTab('crm');
      return true;
    });
  }

  // 13. Add / Edit Employee Modal
  openEmployeeModal(employeeId = null) {
    const emp = employeeId ? store.getEmployeeById(employeeId) : {};
    const isEdit = !!employeeId;

    const html = `
      <form id="form-emp">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Employee Full Name <span class="required">*</span></label>
            <input type="text" id="emp-name" class="form-control" value="${Formatters.escapeHtml(emp.name || '')}" required placeholder="e.g. Farhana Yasmin">
          </div>
          <div class="form-group">
            <label class="form-label">Designation <span class="required">*</span></label>
            <input type="text" id="emp-desig" class="form-control" value="${Formatters.escapeHtml(emp.designation || '')}" required placeholder="e.g. Sales Executive">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Department</label>
            <input type="text" id="emp-dept" class="form-control" value="${Formatters.escapeHtml(emp.department || 'Sales & BD')}">
          </div>
          <div class="form-group">
            <label class="form-label">Base Monthly Salary (৳) <span class="required">*</span></label>
            <input type="number" id="emp-salary" class="form-control" value="${emp.baseSalary || 25000}" required min="0">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Phone Number</label>
            <input type="tel" id="emp-phone" class="form-control" value="${Formatters.escapeHtml(emp.phone || '')}">
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" id="emp-email" class="form-control" value="${Formatters.escapeHtml(emp.email || '')}">
          </div>
        </div>
      </form>
    `;

    this.openModal(isEdit ? 'Edit Employee' : 'Add Employee', html, () => {
      const name = document.getElementById('emp-name').value.trim();
      const desig = document.getElementById('emp-desig').value.trim();
      const baseSalary = Number(document.getElementById('emp-salary').value);
      if (!name || !desig || isNaN(baseSalary)) {
        alert('Please fill out employee name, designation and valid salary');
        return false;
      }

      store.saveEmployee({
        id: emp.id,
        name,
        designation: desig,
        department: document.getElementById('emp-dept').value.trim(),
        baseSalary,
        phone: document.getElementById('emp-phone').value.trim(),
        email: document.getElementById('emp-email').value.trim(),
        joinDate: emp.joinDate || Formatters.dateForInput()
      });

      this.showToast(isEdit ? 'Employee updated' : 'New employee registered', 'success');
      return true;
    });
  }

  // 14. Pay Salary Modal (Auto-records into Expense ledger!)
  openPaySalaryModal(payrollId) {
    const payroll = (store.data.payrolls || []).find(p => p.id === payrollId);
    if (!payroll) return;
    const currency = store.getSettings().currency || '৳';

    const html = `
      <form id="form-pay-salary">
        <p style="margin-bottom: 14px;">
          Employee: <strong>${Formatters.escapeHtml(payroll.employeeName)}</strong> (${payroll.designation})<br>
          Month: <strong>${payroll.monthYear}</strong><br>
          Net Payable Amount: <strong style="color: var(--success); font-size: 16px;">${Formatters.currency(payroll.netSalary, currency)}</strong>
        </p>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Payment Date</label>
            <input type="date" id="salary-date" class="form-control" value="${Formatters.dateForInput()}">
          </div>
          <div class="form-group">
            <label class="form-label">Payment Method</label>
            <select id="salary-method" class="form-control">
              <option value="Bank Transfer" selected>Company Bank Transfer</option>
              <option value="bKash">Corporate bKash</option>
              <option value="Nagad">Corporate Nagad</option>
              <option value="Cash">Cash in Hand</option>
              <option value="Cheque">Bank Cheque</option>
            </select>
          </div>
        </div>

        <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 6px; padding: 12px; font-size: 12px; color: var(--text-main);">
          ⚡ <strong>Automatic Accounting Integration:</strong> When confirmed, this salary payment will be automatically posted as an official expense under <em>"Salaries & Wages"</em> in your Expense Ledger!
        </div>
      </form>
    `;

    this.openModal(`Disburse Salary: ${payroll.employeeName}`, html, () => {
      const date = document.getElementById('salary-date').value;
      const method = document.getElementById('salary-method').value;

      const res = store.paySalary(payrollId, method, date);
      if (res.success) {
        this.showToast(`Salary disbursed to ${payroll.employeeName} & recorded under Expenses!`, 'success');
        return true;
      }
      return false;
    }, 'Disburse Salary');
  }

  // 15. Print Payslip Modal
  openPrintPayslipModal(payrollId) {
    const p = (store.data.payrolls || []).find(it => it.id === payrollId);
    if (!p) return;
    const settings = store.getSettings();
    const currency = settings.currency || '৳';

    const html = `
      <div class="document-sheet">
        <div class="doc-header">
          <div class="doc-company">
            <h2>${Formatters.escapeHtml(settings.companyName)}</h2>
            <p style="color: #64748b; font-size: 11px;">Human Resources & Payroll Department</p>
            <p style="font-size: 11px; margin-top: 4px;">📍 ${Formatters.escapeHtml(settings.address)}</p>
          </div>
          <div class="doc-badge-title">
            <h1 style="color: #10b981; font-size: 24px;">SALARY PAYSLIP</h1>
            <p style="font-weight: 700; font-size: 14px;">Period: ${p.monthYear}</p>
            <p style="font-size: 11px; color: #64748b;">Ref: #${p.id}</p>
          </div>
        </div>

        <div class="doc-info-grid">
          <div>
            <div style="font-size: 11px; text-transform: uppercase; color: #64748b;">Employee Name</div>
            <div style="font-size: 15px; font-weight: 700;">${Formatters.escapeHtml(p.employeeName)}</div>
            <div style="font-size: 12px; color: #475569;">${Formatters.escapeHtml(p.designation)}</div>
            <div style="font-size: 11px; color: #64748b;">Department: ${Formatters.escapeHtml(p.department || 'General')}</div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 11px; text-transform: uppercase; color: #64748b;">Disbursement Status</div>
            <span class="badge badge-success" style="font-size: 12px;">PAID</span>
            <div style="font-size: 11.5px; margin-top: 4px;">Paid Date: ${Formatters.date(p.paidDate)}</div>
            <div style="font-size: 11.5px;">Mode: ${p.paymentMethod}</div>
          </div>
        </div>

        <table class="doc-table">
          <thead>
            <tr>
              <th>Earnings Description</th>
              <th style="text-align: right;">Amount (${currency})</th>
              <th>Deductions</th>
              <th style="text-align: right;">Amount (${currency})</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Base Basic Salary</td>
              <td style="text-align: right;">${Formatters.currency(p.baseSalary, currency)}</td>
              <td>Statutory / Leave Deductions</td>
              <td style="text-align: right; color: #ef4444;">${Formatters.currency(p.deduction || 0, currency)}</td>
            </tr>
            <tr>
              <td>Allowances & Performance Bonus</td>
              <td style="text-align: right; color: #10b981;">+${Formatters.currency(p.bonus || 0, currency)}</td>
              <td>Other Tax / Adjustments</td>
              <td style="text-align: right;">৳ 0.00</td>
            </tr>
            <tr style="font-weight: 700; background: #f8fafc; border-top: 2px solid #cbd5e1;">
              <td>Total Gross Earnings</td>
              <td style="text-align: right;">${Formatters.currency(Number(p.baseSalary) + Number(p.bonus || 0), currency)}</td>
              <td>Total Deductions</td>
              <td style="text-align: right; color: #ef4444;">-${Formatters.currency(p.deduction || 0, currency)}</td>
            </tr>
          </tbody>
        </table>

        <div style="display: flex; justify-content: flex-end; margin-top: 16px;">
          <div style="background: #f1f5f9; padding: 12px 20px; border-radius: 6px; text-align: right;">
            <div style="font-size: 11px; text-transform: uppercase; color: #475569;">Net Take-Home Salary</div>
            <div style="font-size: 20px; font-weight: 800; color: #0f172a;">${Formatters.currency(p.netSalary, currency)}</div>
          </div>
        </div>

        <div class="doc-signatures">
          <div class="sign-line">Employee Signature</div>
          <div class="sign-line">Accounts & Finance Lead</div>
        </div>
      </div>
    `;

    this.openModal(`Employee Payslip: ${p.employeeName}`, html, null);

    const footer = document.getElementById('modal-footer');
    footer.innerHTML = `
      <button class="btn btn-primary" onclick="window.print()">
        🖨️ Print Payslip
      </button>
      <button class="btn btn-secondary" onclick="window.ERP_APP.closeModal()">Close</button>
    `;
  }

  // 16. Add Expense Modal
  openAddExpenseModal() {
    const html = `
      <form id="form-expense">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Expense Category <span class="required">*</span></label>
            <select id="exp-category" class="form-control" required>
              <option value="Office Rent">Office Rent</option>
              <option value="Utilities">Utilities (Electricity, Internet, Water)</option>
              <option value="Salaries & Wages">Salaries & Wages</option>
              <option value="Marketing & Ads">Marketing & Ads</option>
              <option value="Transport & Delivery">Transport & Delivery</option>
              <option value="Office Supplies">Office Supplies & Stationery</option>
              <option value="Maintenance">Maintenance & Repairs</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Amount (৳) <span class="required">*</span></label>
            <input type="number" id="exp-amount" class="form-control" required min="1" step="any" placeholder="0.00">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Expense Date</label>
            <input type="date" id="exp-date" class="form-control" value="${Formatters.dateForInput()}">
          </div>
          <div class="form-group">
            <label class="form-label">Payment Method</label>
            <select id="exp-method" class="form-control">
              <option value="Cash">Cash</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="bKash">bKash</option>
              <option value="Nagad">Nagad</option>
              <option value="Card">Debit/Credit Card</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Voucher / Bill Reference No.</label>
          <input type="text" id="exp-ref" class="form-control" placeholder="e.g. DESCO-SEP-01, VOUCHER-881">
        </div>

        <div class="form-group">
          <label class="form-label">Description / Purpose</label>
          <textarea id="exp-notes" class="form-control" placeholder="Details of expense"></textarea>
        </div>
      </form>
    `;

    this.openModal('Add Expense Voucher', html, () => {
      const amount = Number(document.getElementById('exp-amount').value);
      if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense amount');
        return false;
      }

      store.saveExpense({
        category: document.getElementById('exp-category').value,
        amount,
        date: document.getElementById('exp-date').value,
        paymentMethod: document.getElementById('exp-method').value,
        reference: document.getElementById('exp-ref').value.trim(),
        notes: document.getElementById('exp-notes').value.trim()
      });

      this.showToast('Expense recorded successfully!', 'success');
      this.switchTab('expenses');
      return true;
    });
  }

  // 17. Settings & Backup/Restore Modal
  openSettingsModal() {
    const s = store.getSettings();

    const html = `
      <div>
        <h4 style="margin-bottom: 12px;">Company Letterhead Details</h4>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Company Name</label>
            <input type="text" id="set-company" class="form-control" value="${Formatters.escapeHtml(s.companyName || '')}">
          </div>
          <div class="form-group">
            <label class="form-label">Tagline</label>
            <input type="text" id="set-tagline" class="form-control" value="${Formatters.escapeHtml(s.tagline || '')}">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Official Phone</label>
            <input type="text" id="set-phone" class="form-control" value="${Formatters.escapeHtml(s.phone || '')}">
          </div>
          <div class="form-group">
            <label class="form-label">Official Email</label>
            <input type="email" id="set-email" class="form-control" value="${Formatters.escapeHtml(s.email || '')}">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Office Address</label>
            <input type="text" id="set-address" class="form-control" value="${Formatters.escapeHtml(s.address || '')}">
          </div>
          <div class="form-group">
            <label class="form-label">VAT / BIN Number</label>
            <input type="text" id="set-bin" class="form-control" value="${Formatters.escapeHtml(s.binNumber || '')}">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Currency Symbol</label>
          <input type="text" id="set-currency" class="form-control" value="${Formatters.escapeHtml(s.currency || '৳')}" style="width: 100px;">
        </div>

        <hr style="margin: 20px 0; border: none; border-top: 1px solid var(--border-color);">

        <h4 style="margin-bottom: 12px;">Database Backup & Restore</h4>
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 16px;">
          <button type="button" class="btn btn-secondary" id="btn-export-backup-json">
            📥 Export Backup (JSON)
          </button>
          <label class="btn btn-outline" style="cursor: pointer;">
            📤 Restore from File (JSON)
            <input type="file" id="input-restore-backup" accept=".json" style="display: none;">
          </label>
          <button type="button" class="btn btn-outline" id="btn-reset-demo-data" style="color: var(--danger);">
            🔄 Reset Demo Seed Data
          </button>
        </div>
      </div>
    `;

    this.openModal('System & Company Settings', html, () => {
      store.saveSettings({
        companyName: document.getElementById('set-company').value.trim(),
        tagline: document.getElementById('set-tagline').value.trim(),
        phone: document.getElementById('set-phone').value.trim(),
        email: document.getElementById('set-email').value.trim(),
        address: document.getElementById('set-address').value.trim(),
        binNumber: document.getElementById('set-bin').value.trim(),
        currency: document.getElementById('set-currency').value.trim() || '৳'
      });

      this.showToast('Company settings saved!', 'success');
      return true;
    });

    // Backup actions
    document.getElementById('btn-export-backup-json').onclick = () => {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(store.exportJson());
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `Apex_ERP_Backup_${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    };

    document.getElementById('input-restore-backup').onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (store.importJson(event.target.result)) {
            this.showToast('Database backup successfully restored!', 'success');
            this.closeModal();
            this.render();
          } else {
            alert('Invalid backup file format.');
          }
        };
        reader.readAsText(file);
      }
    };

    document.getElementById('btn-reset-demo-data').onclick = () => {
      if (confirm('Are you sure you want to reset all data back to the demo business state? Any custom data will be replaced.')) {
        store.resetToDemo();
        this.showToast('Demo data reloaded!', 'success');
        this.closeModal();
        this.render();
      }
    };
  }
}

// Instantiate and initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new ERPApplication();
  app.init();
});
