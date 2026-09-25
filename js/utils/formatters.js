/**
 * Formatting and Utility Helpers
 */

export const Formatters = {
  // Format currency with BDT ৳ symbol or custom currency
  currency(amount, currency = '৳') {
    const num = Number(amount) || 0;
    return `${currency} ${num.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  },

  // Compact currency (e.g. ৳ 12.5k)
  compactCurrency(amount, currency = '৳') {
    const num = Number(amount) || 0;
    if (Math.abs(num) >= 10000000) {
      return `${currency} ${(num / 10000000).toFixed(2)} Cr`;
    }
    if (Math.abs(num) >= 100000) {
      return `${currency} ${(num / 100000).toFixed(2)} Lk`;
    }
    if (Math.abs(num) >= 1000) {
      return `${currency} ${(num / 1000).toFixed(1)}k`;
    }
    return `${currency} ${num.toLocaleString('en-IN')}`;
  },

  // Format date to readable string: e.g. 23 Sep, 2026
  date(dateStr) {
    if (!dateStr) return 'N/A';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  },

  // Format date for <input type="date"> (YYYY-MM-DD)
  dateForInput(date = new Date()) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  // Current Month-Year string: e.g. "2026-09"
  currentMonthYear() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
  },

  // Unique ID generator with prefix: e.g. INV-2026-8491
  generateId(prefix = 'DOC') {
    const year = new Date().getFullYear();
    const random = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}-${year}-${random}`;
  },

  // Escape HTML to prevent XSS
  escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
};
