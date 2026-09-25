/**
 * Central State Store & Persistence Layer
 * Handles localStorage persistence, automatic stock deduction, payment tracking,
 * 1-click conversion logic, payroll-expense synchronization, and demo seed data.
 */

import { Formatters } from './utils/formatters.js';

const STORAGE_KEY = 'BUSINESS_ERP_DATA_V1';

export class Store {
  constructor() {
    this.subscribers = [];
    this.data = this.loadFromStorage() || this.getInitialDemoData();
    this.saveToStorage();
  }

  // Subscribe to state changes
  subscribe(callback) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  notify() {
    this.saveToStorage();
    this.subscribers.forEach(cb => cb(this.data));
  }

  loadFromStorage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      console.error('Failed to load from storage', e);
      return null;
    }
  }

  saveToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.error('Failed to save to storage', e);
    }
  }

  resetToDemo() {
    this.data = this.getInitialDemoData();
    this.notify();
  }

  exportJson() {
    return JSON.stringify(this.data, null, 2);
  }

  importJson(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.products && parsed.customers && parsed.invoices) {
        this.data = parsed;
        this.notify();
        return true;
      }
      return false;
    } catch (e) {
      console.error('Invalid import data', e);
      return false;
    }
  }

  // --- LOGGING ---
  addActivity(type, title, details = '') {
    this.data.activities = this.data.activities || [];
    this.data.activities.unshift({
      id: 'ACT-' + Date.now(),
      type,
      title,
      details,
      timestamp: new Date().toISOString()
    });
    if (this.data.activities.length > 50) this.data.activities.pop();
  }

  // ==========================================
  // 1. PRODUCTS & INVENTORY
  // ==========================================
  getProducts() {
    return this.data.products || [];
  }

  getProductById(id) {
    return this.getProducts().find(p => p.id === id);
  }

  getLowStockProducts() {
    return this.getProducts().filter(p => Number(p.stock) <= Number(p.minStock));
  }

  saveProduct(product) {
    if (product.id) {
      const idx = this.data.products.findIndex(p => p.id === product.id);
      if (idx !== -1) {
        this.data.products[idx] = { ...this.data.products[idx], ...product };
        this.addActivity('inventory', `Updated product: ${product.name}`);
      }
    } else {
      const newProduct = {
        ...product,
        id: Formatters.generateId('PRD'),
        sku: product.sku || 'SKU-' + Math.floor(1000 + Math.random() * 9000),
        stock: Number(product.stock) || 0,
        costPrice: Number(product.costPrice) || 0,
        sellPrice: Number(product.sellPrice) || 0,
        minStock: Number(product.minStock) || 5,
        unit: product.unit || 'pcs'
      };
      this.data.products.unshift(newProduct);
      this.addActivity('inventory', `Added new product: ${newProduct.name}`);
    }
    this.notify();
  }

  adjustStock(productId, delta, reason = 'Manual Adjustment') {
    const product = this.getProductById(productId);
    if (!product) return;
    const oldStock = Number(product.stock);
    const newStock = Math.max(0, oldStock + Number(delta));
    product.stock = newStock;
    this.addActivity('inventory', `Stock adjusted for ${product.name}: ${oldStock} -> ${newStock} (${reason})`);
    this.notify();
  }

  deleteProduct(id) {
    const p = this.getProductById(id);
    this.data.products = this.data.products.filter(item => item.id !== id);
    if (p) this.addActivity('inventory', `Deleted product: ${p.name}`);
    this.notify();
  }

  // ==========================================
  // 2. CUSTOMERS
  // ==========================================
  getCustomers() {
    return this.data.customers || [];
  }

  getCustomerById(id) {
    return this.getCustomers().find(c => c.id === id);
  }

  saveCustomer(customer) {
    if (customer.id) {
      const idx = this.data.customers.findIndex(c => c.id === customer.id);
      if (idx !== -1) {
        this.data.customers[idx] = { ...this.data.customers[idx], ...customer };
        this.addActivity('customer', `Updated customer: ${customer.name}`);
      }
    } else {
      const newCustomer = {
        ...customer,
        id: Formatters.generateId('CUST'),
        dueBalance: Number(customer.dueBalance) || 0,
        createdAt: new Date().toISOString()
      };
      this.data.customers.unshift(newCustomer);
      this.addActivity('customer', `Created new customer: ${newCustomer.name}`);
    }
    this.notify();
  }

  deleteCustomer(id) {
    const c = this.getCustomerById(id);
    this.data.customers = this.data.customers.filter(item => item.id !== id);
    if (c) this.addActivity('customer', `Deleted customer: ${c.name}`);
    this.notify();
  }

  recalculateCustomerDues(customerId) {
    const customer = this.getCustomerById(customerId);
    if (!customer) return;
    const customerInvoices = this.getInvoices().filter(inv => inv.customerId === customerId);
    const totalDue = customerInvoices.reduce((sum, inv) => sum + (Number(inv.dueAmount) || 0), 0);
    customer.dueBalance = totalDue;
  }

  // ==========================================
  // 3. QUOTATIONS
  // ==========================================
  getQuotations() {
    return this.data.quotations || [];
  }

  getQuotationById(id) {
    return this.getQuotations().find(q => q.id === id);
  }

  saveQuotation(quote) {
    if (quote.id) {
      const idx = this.data.quotations.findIndex(q => q.id === quote.id);
      if (idx !== -1) {
        this.data.quotations[idx] = { ...this.data.quotations[idx], ...quote };
        this.addActivity('sales', `Updated Quotation: ${quote.id}`);
      }
    } else {
      const newQuote = {
        ...quote,
        id: Formatters.generateId('QT'),
        date: quote.date || Formatters.dateForInput(),
        status: quote.status || 'Draft',
        createdAt: new Date().toISOString()
      };
      this.data.quotations.unshift(newQuote);
      this.addActivity('sales', `Created Quotation: ${newQuote.id} for ${newQuote.customerName}`);
    }
    this.notify();
  }

  // 1-Click: Convert Quotation to Invoice
  convertQuotationToInvoice(quotationId) {
    const quote = this.getQuotationById(quotationId);
    if (!quote) return null;

    // Attach current cost prices for accurate COGS reporting
    const invoiceItems = (quote.items || []).map(item => {
      const prod = this.getProductById(item.productId);
      return {
        ...item,
        costPrice: prod ? Number(prod.costPrice) : 0
      };
    });

    const invoiceId = Formatters.generateId('INV');
    const newInvoice = {
      id: invoiceId,
      quotationId: quote.id,
      customerId: quote.customerId,
      customerName: quote.customerName,
      customerPhone: quote.customerPhone || '',
      customerAddress: quote.customerAddress || '',
      date: Formatters.dateForInput(),
      dueDate: Formatters.dateForInput(new Date(Date.now() + 14 * 86400000)),
      items: invoiceItems,
      subtotal: Number(quote.subtotal) || 0,
      tax: Number(quote.tax) || 0,
      discount: Number(quote.discount) || 0,
      grandTotal: Number(quote.grandTotal) || 0,
      paidAmount: 0,
      dueAmount: Number(quote.grandTotal) || 0,
      paymentStatus: 'Unpaid',
      deliveryStatus: 'Pending',
      stockDeducted: false,
      notes: quote.notes || `Converted from Quotation #${quote.id}`,
      createdAt: new Date().toISOString()
    };

    // Mark quote as Converted
    quote.status = 'Converted';
    quote.convertedInvoiceId = invoiceId;

    this.dataInvoices().unshift(newInvoice);
    this.recalculateCustomerDues(quote.customerId);
    this.addActivity('sales', `1-Click Convert: Quotation ${quote.id} converted to Invoice ${invoiceId}`);
    this.notify();
    return newInvoice;
  }

  // ==========================================
  // 4. INVOICES & PAYMENT TRACKING
  // ==========================================
  dataInvoices() {
    this.data.invoices = this.data.invoices || [];
    return this.data.invoices;
  }

  getInvoices() {
    return this.dataInvoices();
  }

  getInvoiceById(id) {
    return this.getInvoices().find(inv => inv.id === id);
  }

  saveInvoice(invoice) {
    if (invoice.id) {
      const idx = this.data.invoices.findIndex(inv => inv.id === invoice.id);
      if (idx !== -1) {
        this.data.invoices[idx] = { ...this.data.invoices[idx], ...invoice };
        this.recalculateCustomerDues(invoice.customerId);
        this.addActivity('sales', `Updated Invoice: ${invoice.id}`);
      }
    } else {
      const newInvoice = {
        ...invoice,
        id: Formatters.generateId('INV'),
        date: invoice.date || Formatters.dateForInput(),
        dueDate: invoice.dueDate || Formatters.dateForInput(new Date(Date.now() + 14 * 86400000)),
        paidAmount: Number(invoice.paidAmount) || 0,
        dueAmount: Number(invoice.grandTotal) - (Number(invoice.paidAmount) || 0),
        paymentStatus: Number(invoice.paidAmount) >= Number(invoice.grandTotal) ? 'Paid' : (Number(invoice.paidAmount) > 0 ? 'Partial' : 'Unpaid'),
        deliveryStatus: invoice.deliveryStatus || 'Pending',
        stockDeducted: false,
        createdAt: new Date().toISOString()
      };

      // Check if items have cost prices
      if (newInvoice.items) {
        newInvoice.items = newInvoice.items.map(it => {
          if (it.costPrice === undefined) {
            const p = this.getProductById(it.productId);
            it.costPrice = p ? Number(p.costPrice) : 0;
          }
          return it;
        });
      }

      this.dataInvoices().unshift(newInvoice);
      this.recalculateCustomerDues(newInvoice.customerId);
      this.addActivity('sales', `Created Invoice: ${newInvoice.id} for ${newInvoice.customerName}`);
    }
    this.notify();
  }

  // Record payment on invoice:
  // 1. Updates paid & due amount
  // 2. AUTOMATICALLY reduces stock if not yet deducted!
  // 3. Updates customer's total due balance
  recordInvoicePayment({ invoiceId, amount, method, date, reference, notes }) {
    const invoice = this.getInvoiceById(invoiceId);
    if (!invoice) return { success: false, message: 'Invoice not found' };

    const payAmount = Number(amount);
    if (payAmount <= 0) return { success: false, message: 'Invalid payment amount' };

    const previousPaid = Number(invoice.paidAmount) || 0;
    const newPaid = previousPaid + payAmount;
    const grandTotal = Number(invoice.grandTotal) || 0;
    const newDue = Math.max(0, grandTotal - newPaid);

    invoice.paidAmount = newPaid;
    invoice.dueAmount = newDue;

    if (newDue === 0) {
      invoice.paymentStatus = 'Paid';
    } else if (newPaid > 0) {
      invoice.paymentStatus = 'Partial';
    }

    // Save payment transaction record
    this.data.payments = this.data.payments || [];
    const paymentRecord = {
      id: Formatters.generateId('PAY'),
      invoiceId: invoice.id,
      customerId: invoice.customerId,
      customerName: invoice.customerName,
      amount: payAmount,
      method: method || 'Cash',
      date: date || Formatters.dateForInput(),
      reference: reference || '',
      notes: notes || '',
      timestamp: new Date().toISOString()
    };
    this.data.payments.unshift(paymentRecord);

    // AUTOMATIC STOCK DEDUCTION
    // If stock has not yet been deducted for this invoice, deduct it now upon payment receipt!
    let stockDeductedNow = false;
    if (!invoice.stockDeducted && invoice.items && invoice.items.length) {
      invoice.items.forEach(item => {
        if (item.productId) {
          const product = this.getProductById(item.productId);
          if (product) {
            const currentStock = Number(product.stock) || 0;
            const deductQty = Number(item.qty) || 0;
            product.stock = Math.max(0, currentStock - deductQty);
          }
        }
      });
      invoice.stockDeducted = true;
      stockDeductedNow = true;
      this.addActivity('inventory', `Auto Stock Deduction applied for Invoice #${invoice.id}`);
    }

    // Recalculate customer due
    this.recalculateCustomerDues(invoice.customerId);

    this.addActivity('payment', `Payment recorded: ${Formatters.currency(payAmount, this.data.settings.currency)} for Invoice ${invoice.id} via ${method}`);
    this.notify();

    return {
      success: true,
      stockDeductedNow,
      invoice,
      payment: paymentRecord
    };
  }

  // 1-Click: Generate Delivery Challan from Invoice
  convertInvoiceToChallan(invoiceId, details = {}) {
    const invoice = this.getInvoiceById(invoiceId);
    if (!invoice) return null;

    const challanId = Formatters.generateId('DC');
    const customer = this.getCustomerById(invoice.customerId);

    const challanItems = (invoice.items || []).map(item => ({
      productId: item.productId,
      productName: item.productName,
      qty: item.qty,
      unit: item.unit || 'pcs',
      notes: ''
    }));

    const challan = {
      id: challanId,
      invoiceId: invoice.id,
      customerId: invoice.customerId,
      customerName: invoice.customerName,
      customerPhone: invoice.customerPhone || (customer ? customer.phone : ''),
      deliveryAddress: details.deliveryAddress || invoice.customerAddress || (customer ? customer.address : ''),
      date: details.date || Formatters.dateForInput(),
      vehicleNo: details.vehicleNo || 'N/A',
      driverPhone: details.driverPhone || '',
      courierName: details.courierName || 'In-House Logistics',
      trackingNo: details.trackingNo || 'TRK-' + Math.floor(100000 + Math.random() * 900000),
      items: challanItems,
      status: 'Prepared',
      notes: details.notes || 'Handle with care',
      createdAt: new Date().toISOString()
    };

    invoice.deliveryStatus = 'Dispatched';
    invoice.challanId = challanId;

    this.data.challans = this.data.challans || [];
    this.data.challans.unshift(challan);

    this.addActivity('delivery', `1-Click: Delivery Challan ${challanId} generated for Invoice ${invoice.id}`);
    this.notify();
    return challan;
  }

  getChallans() {
    return this.data.challans || [];
  }

  getChallanById(id) {
    return this.getChallans().find(c => c.id === id);
  }

  // ==========================================
  // 5. LEADS / CRM PIPELINE
  // ==========================================
  getLeads() {
    return this.data.leads || [];
  }

  getLeadById(id) {
    return this.getLeads().find(l => l.id === id);
  }

  saveLead(lead) {
    if (lead.id) {
      const idx = this.data.leads.findIndex(l => l.id === lead.id);
      if (idx !== -1) {
        this.data.leads[idx] = { ...this.data.leads[idx], ...lead };
        this.addActivity('crm', `Updated Lead: ${lead.title}`);
      }
    } else {
      const newLead = {
        ...lead,
        id: Formatters.generateId('LEAD'),
        stage: lead.stage || 'new',
        estimatedValue: Number(lead.estimatedValue) || 0,
        createdAt: new Date().toISOString()
      };
      this.data.leads.unshift(newLead);
      this.addActivity('crm', `Created Lead: ${newLead.title} (${Formatters.currency(newLead.estimatedValue, this.data.settings.currency)})`);
    }
    this.notify();
  }

  updateLeadStage(leadId, newStage) {
    const lead = this.getLeadById(leadId);
    if (!lead) return;
    lead.stage = newStage;
    this.addActivity('crm', `Lead "${lead.title}" moved to ${newStage.toUpperCase()}`);
    this.notify();
  }

  deleteLead(id) {
    const l = this.getLeadById(id);
    this.data.leads = this.data.leads.filter(item => item.id !== id);
    if (l) this.addActivity('crm', `Deleted Lead: ${l.title}`);
    this.notify();
  }

  // 1-Click: Convert WON Lead to Customer + Quotation
  convertLeadToCustomer(leadId) {
    const lead = this.getLeadById(leadId);
    if (!lead) return null;

    // Check if customer already exists by phone or name
    let customer = this.getCustomers().find(c => c.phone === lead.phone || c.name.toLowerCase() === lead.contactPerson.toLowerCase());

    if (!customer) {
      customer = {
        id: Formatters.generateId('CUST'),
        name: lead.contactPerson || lead.title,
        company: lead.company || '',
        phone: lead.phone || '',
        email: lead.email || '',
        address: lead.address || '',
        dueBalance: 0,
        createdAt: new Date().toISOString()
      };
      this.data.customers.unshift(customer);
    }

    // Move lead to 'won'
    lead.stage = 'won';
    lead.convertedCustomerId = customer.id;

    // Draft a quotation for this won lead
    const draftQuote = {
      id: Formatters.generateId('QT'),
      customerId: customer.id,
      customerName: customer.name,
      customerPhone: customer.phone,
      customerAddress: customer.address,
      date: Formatters.dateForInput(),
      items: [
        {
          productId: this.data.products[0]?.id || '',
          productName: this.data.products[0]?.name || 'Standard Service Package',
          qty: 1,
          unitPrice: Number(lead.estimatedValue) || Number(this.data.products[0]?.sellPrice) || 10000,
          total: Number(lead.estimatedValue) || Number(this.data.products[0]?.sellPrice) || 10000
        }
      ],
      subtotal: Number(lead.estimatedValue) || 10000,
      tax: 0,
      discount: 0,
      grandTotal: Number(lead.estimatedValue) || 10000,
      status: 'Draft',
      notes: `Generated from Won Lead: ${lead.title}`,
      createdAt: new Date().toISOString()
    };
    this.data.quotations.unshift(draftQuote);

    this.addActivity('crm', `Converted Won Lead "${lead.title}" to Customer & Quotation #${draftQuote.id}`);
    this.notify();
    return { customer, quotation: draftQuote };
  }

  // ==========================================
  // 6. EMPLOYEES & MONTHLY PAYROLL
  // ==========================================
  getEmployees() {
    return this.data.employees || [];
  }

  getEmployeeById(id) {
    return this.getEmployees().find(e => e.id === id);
  }

  saveEmployee(emp) {
    if (emp.id) {
      const idx = this.data.employees.findIndex(e => e.id === emp.id);
      if (idx !== -1) {
        this.data.employees[idx] = { ...this.data.employees[idx], ...emp };
        this.addActivity('payroll', `Updated Employee: ${emp.name}`);
      }
    } else {
      const newEmp = {
        ...emp,
        id: Formatters.generateId('EMP'),
        baseSalary: Number(emp.baseSalary) || 0,
        status: emp.status || 'Active',
        createdAt: new Date().toISOString()
      };
      this.data.employees.unshift(newEmp);
      this.addActivity('payroll', `Added Employee: ${newEmp.name} (${newEmp.designation})`);
    }
    this.notify();
  }

  deleteEmployee(id) {
    const e = this.getEmployeeById(id);
    this.data.employees = this.data.employees.filter(item => item.id !== id);
    if (e) this.addActivity('payroll', `Removed Employee: ${e.name}`);
    this.notify();
  }

  getPayrolls(monthYear) {
    this.data.payrolls = this.data.payrolls || [];
    if (monthYear) {
      return this.data.payrolls.filter(p => p.monthYear === monthYear);
    }
    return this.data.payrolls;
  }

  // Monthly Payroll Generator: Auto-creates payroll for active employees for the selected month
  generateMonthlyPayroll(monthYear = Formatters.currentMonthYear()) {
    this.data.payrolls = this.data.payrolls || [];
    const activeEmployees = this.getEmployees().filter(e => e.status === 'Active');
    let generatedCount = 0;

    activeEmployees.forEach(emp => {
      const exists = this.data.payrolls.find(p => p.monthYear === monthYear && p.employeeId === emp.id);
      if (!exists) {
        const base = Number(emp.baseSalary) || 0;
        const payrollItem = {
          id: Formatters.generateId('PRL'),
          monthYear,
          employeeId: emp.id,
          employeeName: emp.name,
          designation: emp.designation,
          department: emp.department,
          baseSalary: base,
          bonus: 0,
          deduction: 0,
          netSalary: base,
          status: 'Unpaid',
          paidDate: '',
          paymentMethod: '',
          notes: `Monthly salary for ${monthYear}`
        };
        this.data.payrolls.unshift(payrollItem);
        generatedCount++;
      }
    });

    if (generatedCount > 0) {
      this.addActivity('payroll', `Generated payroll for ${monthYear} (${generatedCount} employees)`);
      this.notify();
    }
    return generatedCount;
  }

  // Pay employee salary: Marks as Paid AND automatically registers an Expense under "Salaries & Wages"
  paySalary(payrollId, method = 'Bank Transfer', date = Formatters.dateForInput()) {
    const payroll = this.data.payrolls.find(p => p.id === payrollId);
    if (!payroll) return { success: false, message: 'Payroll record not found' };

    payroll.status = 'Paid';
    payroll.paidDate = date;
    payroll.paymentMethod = method;

    // Automatically record an Expense in the Expense Ledger!
    const expenseId = Formatters.generateId('EXP');
    const salaryExpense = {
      id: expenseId,
      date,
      category: 'Salaries & Wages',
      amount: Number(payroll.netSalary) || 0,
      paymentMethod: method,
      reference: `Payroll #${payroll.id}`,
      notes: `Salary payout for ${payroll.employeeName} (${payroll.monthYear})`,
      timestamp: new Date().toISOString()
    };
    this.data.expenses = this.data.expenses || [];
    this.data.expenses.unshift(salaryExpense);
    payroll.linkedExpenseId = expenseId;

    this.addActivity('payroll', `Salary Paid: ${Formatters.currency(payroll.netSalary, this.data.settings.currency)} to ${payroll.employeeName} (Auto-recorded in Expenses)`);
    this.notify();

    return { success: true, payroll, expense: salaryExpense };
  }

  // ==========================================
  // 7. EXPENSES
  // ==========================================
  getExpenses() {
    return this.data.expenses || [];
  }

  saveExpense(expense) {
    if (expense.id) {
      const idx = this.data.expenses.findIndex(e => e.id === expense.id);
      if (idx !== -1) {
        this.data.expenses[idx] = { ...this.data.expenses[idx], ...expense };
        this.addActivity('expense', `Updated Expense: ${expense.category} - ${Formatters.currency(expense.amount, this.data.settings.currency)}`);
      }
    } else {
      const newExpense = {
        ...expense,
        id: Formatters.generateId('EXP'),
        amount: Number(expense.amount) || 0,
        date: expense.date || Formatters.dateForInput(),
        timestamp: new Date().toISOString()
      };
      this.data.expenses.unshift(newExpense);
      this.addActivity('expense', `Added Expense: ${newExpense.category} - ${Formatters.currency(newExpense.amount, this.data.settings.currency)}`);
    }
    this.notify();
  }

  deleteExpense(id) {
    const e = this.data.expenses.find(item => item.id === id);
    this.data.expenses = this.data.expenses.filter(item => item.id !== id);
    if (e) this.addActivity('expense', `Deleted Expense: ${e.category}`);
    this.notify();
  }

  // ==========================================
  // 8. FINANCIAL REPORTS (P&L & CASH FLOW)
  // ==========================================
  getProfitAndLossReport(startDate, endDate) {
    const invoices = this.getInvoices().filter(inv => {
      if (!startDate && !endDate) return true;
      const d = inv.date;
      if (startDate && d < startDate) return false;
      if (endDate && d > endDate) return false;
      return true;
    });

    const expenses = this.getExpenses().filter(exp => {
      if (!startDate && !endDate) return true;
      const d = exp.date;
      if (startDate && d < startDate) return false;
      if (endDate && d > endDate) return false;
      return true;
    });

    // Total Invoiced Revenue
    let totalRevenue = 0;
    let totalCogs = 0;

    invoices.forEach(inv => {
      totalRevenue += Number(inv.grandTotal) || 0;
      (inv.items || []).forEach(it => {
        const cost = Number(it.costPrice) || 0;
        const qty = Number(it.qty) || 0;
        totalCogs += cost * qty;
      });
    });

    const grossProfit = totalRevenue - totalCogs;

    // Categorized Operating Expenses
    const expenseBreakdown = {};
    let totalOperatingExpenses = 0;

    expenses.forEach(exp => {
      const cat = exp.category || 'Miscellaneous';
      const amt = Number(exp.amount) || 0;
      expenseBreakdown[cat] = (expenseBreakdown[cat] || 0) + amt;
      totalOperatingExpenses += amt;
    });

    const netProfit = grossProfit - totalOperatingExpenses;
    const netMargin = totalRevenue > 0 ? ((netProfit / totalRevenue) * 100).toFixed(1) : 0;
    const grossMargin = totalRevenue > 0 ? ((grossProfit / totalRevenue) * 100).toFixed(1) : 0;

    return {
      totalRevenue,
      totalCogs,
      grossProfit,
      grossMargin,
      expenseBreakdown,
      totalOperatingExpenses,
      netProfit,
      netMargin,
      invoiceCount: invoices.length,
      expenseCount: expenses.length
    };
  }

  getCashFlowReport(startDate, endDate) {
    const payments = (this.data.payments || []).filter(p => {
      if (!startDate && !endDate) return true;
      const d = p.date;
      if (startDate && d < startDate) return false;
      if (endDate && d > endDate) return false;
      return true;
    });

    const expenses = this.getExpenses().filter(exp => {
      if (!startDate && !endDate) return true;
      const d = exp.date;
      if (startDate && d < startDate) return false;
      if (endDate && d > endDate) return false;
      return true;
    });

    // Inflows (Actual cash collected from customers)
    const totalCashInflow = payments.reduce((acc, p) => acc + (Number(p.amount) || 0), 0);

    // Inflow by method
    const inflowByMethod = {};
    payments.forEach(p => {
      const m = p.method || 'Cash';
      inflowByMethod[m] = (inflowByMethod[m] || 0) + (Number(p.amount) || 0);
    });

    // Outflows (All recorded expenses including salaries paid)
    const totalCashOutflow = expenses.reduce((acc, e) => acc + (Number(e.amount) || 0), 0);

    // Outflow by method
    const outflowByMethod = {};
    expenses.forEach(e => {
      const m = e.paymentMethod || 'Cash';
      outflowByMethod[m] = (outflowByMethod[m] || 0) + (Number(e.amount) || 0);
    });

    const netCashFlow = totalCashInflow - totalCashOutflow;

    return {
      totalCashInflow,
      inflowByMethod,
      totalCashOutflow,
      outflowByMethod,
      netCashFlow,
      paymentsCount: payments.length,
      expensesCount: expenses.length
    };
  }

  // ==========================================
  // 9. SETTINGS & INITIAL DEMO SEED
  // ==========================================
  getSettings() {
    return this.data.settings || {};
  }

  saveSettings(settings) {
    this.data.settings = { ...this.data.settings, ...settings };
    this.notify();
  }

  getInitialDemoData() {
    return {
      settings: {
        companyName: 'Apex Industrial & Tech Solutions',
        tagline: 'Leading Wholesale, Distribution & Corporate Supply',
        phone: '+880 1711-234567',
        email: 'info@apexsolutions.bd',
        address: 'House 42, Road 11, Banani C/A, Dhaka-1213, Bangladesh',
        binNumber: 'BIN-002349182-0101',
        currency: '৳',
        theme: 'dark'
      },
      products: [
        {
          id: 'PRD-2026-1001',
          sku: 'SKU-IND-501',
          name: 'Heavy Duty Industrial Relay 24V',
          category: 'Electrical & Automation',
          costPrice: 1200,
          sellPrice: 1850,
          stock: 4, // LOW STOCK (min is 10)
          minStock: 10,
          unit: 'pcs',
          notes: 'High demand Japanese core relay'
        },
        {
          id: 'PRD-2026-1002',
          sku: 'SKU-IND-502',
          name: 'Digital Pressure Sensor 0-10 Bar',
          category: 'Instrumentation',
          costPrice: 3500,
          sellPrice: 5200,
          stock: 2, // LOW STOCK (min is 5)
          minStock: 5,
          unit: 'pcs',
          notes: 'Stainless steel diaphragm'
        },
        {
          id: 'PRD-2026-1003',
          sku: 'SKU-NET-201',
          name: 'Cat6 UTP Industrial Network Cable (305m)',
          category: 'Cabling & Networking',
          costPrice: 8500,
          sellPrice: 12500,
          stock: 18,
          minStock: 5,
          unit: 'roll',
          notes: 'Solid copper 23AWG'
        },
        {
          id: 'PRD-2026-1004',
          sku: 'SKU-PWR-105',
          name: 'Pure Sine Wave Online UPS 3KVA',
          category: 'Power Backup',
          costPrice: 42000,
          sellPrice: 58000,
          stock: 6,
          minStock: 3,
          unit: 'unit',
          notes: 'Built-in isolation transformer'
        },
        {
          id: 'PRD-2026-1005',
          sku: 'SKU-MOT-301',
          name: 'Three Phase Induction Motor 5HP',
          category: 'Machinery & Drives',
          costPrice: 28000,
          sellPrice: 39500,
          stock: 3, // LOW STOCK (min is 4)
          minStock: 4,
          unit: 'unit',
          notes: 'Cast iron body 1440 RPM'
        },
        {
          id: 'PRD-2026-1006',
          sku: 'SKU-LED-801',
          name: 'High Bay LED Flood Light 150W IP66',
          category: 'Lighting',
          costPrice: 2200,
          sellPrice: 3400,
          stock: 25,
          minStock: 8,
          unit: 'pcs',
          notes: 'Meanwell driver with 5 yr warranty'
        }
      ],
      customers: [
        {
          id: 'CUST-2026-01',
          name: 'Tanvir Hossain',
          company: 'Beximco Industrial Fabrics',
          phone: '+880 1819-876543',
          email: 'tanvir.procurement@beximco.com',
          address: 'Kashimpur, Gazipur Industrial Zone',
          dueBalance: 42000,
          createdAt: '2026-08-10'
        },
        {
          id: 'CUST-2026-02',
          name: 'Engr. Mahmudul Hasan',
          company: 'Square Pharmaceuticals Ltd.',
          phone: '+880 1713-112233',
          email: 'm.hasan@squarepharma.com',
          address: 'Salgaria, Pabna & Kaliakoir Plant',
          dueBalance: 0,
          createdAt: '2026-08-15'
        },
        {
          id: 'CUST-2026-03',
          name: 'Nusrat Jahan',
          company: ' Meghna Group of Industries',
          phone: '+880 1912-998877',
          email: 'nusrat.jahan@mgi.org',
          address: 'Sonargaon Industrial Park, Narayanganj',
          dueBalance: 24500,
          createdAt: '2026-09-01'
        },
        {
          id: 'CUST-2026-04',
          name: 'Abdur Rahim',
          company: 'Rahim Textile Mills Ltd.',
          phone: '+880 1722-445566',
          email: 'arahim@rahimtextile.com',
          address: 'Shreepur, Gazipur',
          dueBalance: 0,
          createdAt: '2026-09-10'
        }
      ],
      quotations: [
        {
          id: 'QT-2026-4011',
          customerId: 'CUST-2026-03',
          customerName: 'Nusrat Jahan',
          customerPhone: '+880 1912-998877',
          customerAddress: 'Sonargaon Industrial Park, Narayanganj',
          date: '2026-09-18',
          items: [
            {
              productId: 'PRD-2026-1003',
              productName: 'Cat6 UTP Industrial Network Cable (305m)',
              qty: 4,
              unitPrice: 12500,
              total: 50000
            },
            {
              productId: 'PRD-2026-1006',
              productName: 'High Bay LED Flood Light 150W IP66',
              qty: 10,
              unitPrice: 3400,
              total: 34000
            }
          ],
          subtotal: 84000,
          tax: 0,
          discount: 2000,
          grandTotal: 82000,
          status: 'Accepted',
          notes: 'Quotation approved by factory GM. Ready for invoice conversion.'
        },
        {
          id: 'QT-2026-4012',
          customerId: 'CUST-2026-01',
          customerName: 'Tanvir Hossain',
          customerPhone: '+880 1819-876543',
          customerAddress: 'Kashimpur, Gazipur Industrial Zone',
          date: '2026-09-20',
          items: [
            {
              productId: 'PRD-2026-1005',
              productName: 'Three Phase Induction Motor 5HP',
              qty: 2,
              unitPrice: 39500,
              total: 79000
            }
          ],
          subtotal: 79000,
          tax: 0,
          discount: 0,
          grandTotal: 79000,
          status: 'Sent',
          notes: 'Includes 1 year free servicing guarantee.'
        }
      ],
      invoices: [
        {
          id: 'INV-2026-9021',
          quotationId: 'QT-2026-4008',
          customerId: 'CUST-2026-01',
          customerName: 'Tanvir Hossain',
          customerPhone: '+880 1819-876543',
          customerAddress: 'Kashimpur, Gazipur Industrial Zone',
          date: '2026-09-12',
          dueDate: '2026-09-26',
          items: [
            {
              productId: 'PRD-2026-1004',
              productName: 'Pure Sine Wave Online UPS 3KVA',
              qty: 2,
              costPrice: 42000,
              unitPrice: 58000,
              total: 116000
            }
          ],
          subtotal: 116000,
          tax: 0,
          discount: 0,
          grandTotal: 116000,
          paidAmount: 74000,
          dueAmount: 42000,
          paymentStatus: 'Partial',
          deliveryStatus: 'Delivered',
          stockDeducted: true,
          challanId: 'DC-2026-1011',
          notes: 'Partial payment received. Remaining ৳42,000 due on 26 Sep.'
        },
        {
          id: 'INV-2026-9022',
          quotationId: 'QT-2026-4009',
          customerId: 'CUST-2026-02',
          customerName: 'Engr. Mahmudul Hasan',
          customerPhone: '+880 1713-112233',
          customerAddress: 'Salgaria, Pabna & Kaliakoir Plant',
          date: '2026-09-15',
          dueDate: '2026-09-29',
          items: [
            {
              productId: 'PRD-2026-1002',
              productName: 'Digital Pressure Sensor 0-10 Bar',
              qty: 4,
              costPrice: 3500,
              unitPrice: 5200,
              total: 20800
            },
            {
              productId: 'PRD-2026-1001',
              productName: 'Heavy Duty Industrial Relay 24V',
              qty: 6,
              costPrice: 1200,
              unitPrice: 1850,
              total: 11100
            }
          ],
          subtotal: 31900,
          tax: 0,
          discount: 900,
          grandTotal: 31000,
          paidAmount: 31000,
          dueAmount: 0,
          paymentStatus: 'Paid',
          deliveryStatus: 'Delivered',
          stockDeducted: true,
          challanId: 'DC-2026-1012',
          notes: 'Full payment cleared via Bank Transfer.'
        },
        {
          id: 'INV-2026-9023',
          quotationId: '',
          customerId: 'CUST-2026-03',
          customerName: 'Nusrat Jahan',
          customerPhone: '+880 1912-998877',
          customerAddress: 'Sonargaon Industrial Park, Narayanganj',
          date: '2026-09-19',
          dueDate: '2026-10-03',
          items: [
            {
              productId: 'PRD-2026-1006',
              productName: 'High Bay LED Flood Light 150W IP66',
              qty: 7,
              costPrice: 2200,
              unitPrice: 3500,
              total: 24500
            }
          ],
          subtotal: 24500,
          tax: 0,
          discount: 0,
          grandTotal: 24500,
          paidAmount: 0,
          dueAmount: 24500,
          paymentStatus: 'Unpaid',
          deliveryStatus: 'Dispatched',
          stockDeducted: false, // Stock not yet deducted, waiting for payment!
          notes: 'Delivery challan generated. Due amount ৳24,500.'
        }
      ],
      payments: [
        {
          id: 'PAY-2026-301',
          invoiceId: 'INV-2026-9021',
          customerId: 'CUST-2026-01',
          customerName: 'Tanvir Hossain',
          amount: 74000,
          method: 'Bank Transfer',
          date: '2026-09-13',
          reference: 'BRAC-TRX-998124',
          notes: 'Advance 65% payment received'
        },
        {
          id: 'PAY-2026-302',
          invoiceId: 'INV-2026-9022',
          customerId: 'CUST-2026-02',
          customerName: 'Engr. Mahmudul Hasan',
          amount: 31000,
          method: 'bKash',
          date: '2026-09-16',
          reference: 'BKASH-9KA7X21',
          notes: 'Corporate bKash payment'
        }
      ],
      challans: [
        {
          id: 'DC-2026-1011',
          invoiceId: 'INV-2026-9021',
          customerId: 'CUST-2026-01',
          customerName: 'Tanvir Hossain',
          customerPhone: '+880 1819-876543',
          deliveryAddress: 'Kashimpur, Gazipur Industrial Zone',
          date: '2026-09-13',
          vehicleNo: 'Dhaka Metro-Ta 11-4567',
          driverPhone: '+880 1755-123456',
          courierName: 'Direct Truck Delivery',
          trackingNo: 'CH-9021-01',
          items: [
            {
              productName: 'Pure Sine Wave Online UPS 3KVA',
              qty: 2,
              unit: 'unit'
            }
          ],
          status: 'Delivered',
          notes: 'Delivered and signed by site store manager.'
        },
        {
          id: 'DC-2026-1012',
          invoiceId: 'INV-2026-9022',
          customerId: 'CUST-2026-02',
          customerName: 'Engr. Mahmudul Hasan',
          customerPhone: '+880 1713-112233',
          deliveryAddress: 'Salgaria, Pabna & Kaliakoir Plant',
          date: '2026-09-16',
          vehicleNo: 'SA Paribahan Courier',
          driverPhone: '+880 1811-001122',
          courierName: 'SA Paribahan',
          trackingNo: 'SAP-883910',
          items: [
            {
              productName: 'Digital Pressure Sensor 0-10 Bar',
              qty: 4,
              unit: 'pcs'
            },
            {
              productName: 'Heavy Duty Industrial Relay 24V',
              qty: 6,
              unit: 'pcs'
            }
          ],
          status: 'Delivered',
          notes: 'Received in good packaging condition.'
        }
      ],
      leads: [
        {
          id: 'LEAD-2026-501',
          title: 'Akij Power Plant 50kW Solar Inverter & Grid Sync',
          contactPerson: 'Kazi Farhan',
          company: 'Akij Resources Ltd.',
          phone: '+880 1733-889900',
          email: 'farhan.kazi@akij.net',
          estimatedValue: 480000,
          stage: 'proposal',
          date: '2026-09-14',
          notes: 'Technical proposal submitted to engineering director.'
        },
        {
          id: 'LEAD-2026-502',
          title: 'Factory Automation Sensors & Relays Annual Tender',
          contactPerson: 'Sabbir Ahmed',
          company: 'Aman Knittings PLC',
          phone: '+880 1822-667788',
          email: 'sabbir@amanknit.com',
          estimatedValue: 215000,
          stage: 'contacted',
          date: '2026-09-17',
          notes: 'Initial meeting done over Zoom. Sending catalog tomorrow.'
        },
        {
          id: 'LEAD-2026-503',
          title: 'Warehouse High Bay Lighting Modernization Project',
          contactPerson: 'Jashim Uddin',
          company: 'Pran-RFL Group (Habiganj Depot)',
          phone: '+880 1915-443322',
          email: 'jashim.store@pranrflgroup.com',
          estimatedValue: 160000,
          stage: 'won',
          date: '2026-09-10',
          notes: 'Customer accepted quotation. Ready for 1-click conversion!'
        },
        {
          id: 'LEAD-2026-504',
          title: 'Chittagong Port Crane Drive Spares Inquiry',
          contactPerson: 'Capt. M. Tariq',
          company: 'Seaborne Logistics Ltd.',
          phone: '+880 1718-990011',
          email: 'tariq@seabornebd.com',
          estimatedValue: 95000,
          stage: 'new',
          date: '2026-09-22',
          notes: 'Lead received from website contact form.'
        },
        {
          id: 'LEAD-2026-505',
          title: 'Small Generator Spare Parts Supply',
          contactPerson: 'Mr. Zahir',
          company: 'Zahir Workshop',
          phone: '+880 1611-332211',
          email: 'zahir@workshop.com',
          estimatedValue: 25000,
          stage: 'lost',
          date: '2026-09-05',
          notes: 'Went with a lower local aftermarket copy.'
        }
      ],
      employees: [
        {
          id: 'EMP-2026-01',
          name: 'Shakil Mahmud',
          designation: 'Senior Sales Manager',
          department: 'Sales & BD',
          baseSalary: 45000,
          phone: '+880 1714-556677',
          email: 'shakil@apexsolutions.bd',
          joinDate: '2024-03-01',
          status: 'Active'
        },
        {
          id: 'EMP-2026-02',
          name: 'Nayeem Ashraf',
          designation: 'Inventory & Logistics Lead',
          department: 'Supply Chain',
          baseSalary: 32000,
          phone: '+880 1812-334455',
          email: 'nayeem@apexsolutions.bd',
          joinDate: '2024-07-15',
          status: 'Active'
        },
        {
          id: 'EMP-2026-03',
          name: 'Sadia Sultana',
          designation: 'Accounts & Billing Executive',
          department: 'Finance',
          baseSalary: 28000,
          phone: '+880 1916-778899',
          email: 'sadia@apexsolutions.bd',
          joinDate: '2025-01-10',
          status: 'Active'
        },
        {
          id: 'EMP-2026-04',
          name: 'Moinul Islam',
          designation: 'Technical Support Engineer',
          department: 'Engineering',
          baseSalary: 30000,
          phone: '+880 1729-113355',
          email: 'moinul@apexsolutions.bd',
          joinDate: '2025-04-01',
          status: 'Active'
        }
      ],
      payrolls: [
        {
          id: 'PRL-2026-0801',
          monthYear: '2026-08',
          employeeId: 'EMP-2026-01',
          employeeName: 'Shakil Mahmud',
          designation: 'Senior Sales Manager',
          department: 'Sales & BD',
          baseSalary: 45000,
          bonus: 5000,
          deduction: 0,
          netSalary: 50000,
          status: 'Paid',
          paidDate: '2026-08-31',
          paymentMethod: 'Bank Transfer',
          linkedExpenseId: 'EXP-2026-0801',
          notes: 'August 2026 salary + sales target bonus'
        },
        {
          id: 'PRL-2026-0802',
          monthYear: '2026-08',
          employeeId: 'EMP-2026-02',
          employeeName: 'Nayeem Ashraf',
          designation: 'Inventory & Logistics Lead',
          department: 'Supply Chain',
          baseSalary: 32000,
          bonus: 0,
          deduction: 1000,
          netSalary: 31000,
          status: 'Paid',
          paidDate: '2026-08-31',
          paymentMethod: 'Bank Transfer',
          linkedExpenseId: 'EXP-2026-0802',
          notes: 'August 2026 salary'
        },
        {
          id: 'PRL-2026-0803',
          monthYear: '2026-08',
          employeeId: 'EMP-2026-03',
          employeeName: 'Sadia Sultana',
          designation: 'Accounts & Billing Executive',
          department: 'Finance',
          baseSalary: 28000,
          bonus: 0,
          deduction: 0,
          netSalary: 28000,
          status: 'Paid',
          paidDate: '2026-08-31',
          paymentMethod: 'Bank Transfer',
          linkedExpenseId: 'EXP-2026-0803',
          notes: 'August 2026 salary'
        }
      ],
      expenses: [
        {
          id: 'EXP-2026-0801',
          date: '2026-08-31',
          category: 'Salaries & Wages',
          amount: 50000,
          paymentMethod: 'Bank Transfer',
          reference: 'Payroll #PRL-2026-0801',
          notes: 'Salary payout for Shakil Mahmud (2026-08)'
        },
        {
          id: 'EXP-2026-0802',
          date: '2026-08-31',
          category: 'Salaries & Wages',
          amount: 31000,
          paymentMethod: 'Bank Transfer',
          reference: 'Payroll #PRL-2026-0802',
          notes: 'Salary payout for Nayeem Ashraf (2026-08)'
        },
        {
          id: 'EXP-2026-0803',
          date: '2026-08-31',
          category: 'Salaries & Wages',
          amount: 28000,
          paymentMethod: 'Bank Transfer',
          reference: 'Payroll #PRL-2026-0803',
          notes: 'Salary payout for Sadia Sultana (2026-08)'
        },
        {
          id: 'EXP-2026-0901',
          date: '2026-09-02',
          category: 'Office Rent',
          amount: 45000,
          paymentMethod: 'Bank Transfer',
          reference: 'CHQ-77881',
          notes: 'Monthly Commercial Office Rent for Banani premises'
        },
        {
          id: 'EXP-2026-0902',
          date: '2026-09-05',
          category: 'Utilities',
          amount: 8600,
          paymentMethod: 'bKash',
          reference: 'DESCO-99881',
          notes: 'Electricity bill DESCO + High speed fiber internet'
        },
        {
          id: 'EXP-2026-0903',
          date: '2026-09-08',
          category: 'Marketing & Ads',
          amount: 14000,
          paymentMethod: 'Card',
          reference: 'FB-ADS-SEPT',
          notes: 'B2B LinkedIn & Facebook targeted industrial ad campaigns'
        },
        {
          id: 'EXP-2026-0904',
          date: '2026-09-12',
          category: 'Transport & Delivery',
          amount: 6500,
          paymentMethod: 'Cash',
          reference: 'VOUCHER-441',
          notes: 'Truck fuel and interstate toll fares for Gazipur shipment'
        },
        {
          id: 'EXP-2026-0905',
          date: '2026-09-18',
          category: 'Office Supplies',
          amount: 3200,
          paymentMethod: 'Cash',
          reference: 'STAT-09',
          notes: 'A4 printer paper, toner refill, file folders'
        }
      ],
      activities: [
        {
          id: 'ACT-001',
          type: 'sales',
          title: 'Invoice #INV-2026-9023 generated for Nusrat Jahan (৳ 24,500)',
          timestamp: '2026-09-19T14:30:00Z'
        },
        {
          id: 'ACT-002',
          type: 'payment',
          title: 'Received ৳ 31,000 full payment from Engr. Mahmudul Hasan',
          timestamp: '2026-09-16T11:15:00Z'
        },
        {
          id: 'ACT-003',
          type: 'inventory',
          title: 'Stock Alert: Heavy Duty Industrial Relay 24V reached low stock level (4 pcs)',
          timestamp: '2026-09-16T11:16:00Z'
        }
      ]
    };
  }
}

export const store = new Store();
