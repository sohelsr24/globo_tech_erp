/**
 * Centralized Currency, Number, and Date Formatters
 * Primary currency: BDT (৳)
 * Supported currencies: CNY (¥), USD ($)
 * Standard Date format: DD-MMM-YYYY
 */

export const Formatters = {
  // Format currency with proper symbols and commas
  currency(amount: number | string | null | undefined, currency: 'BDT' | 'CNY' | 'USD' = 'BDT'): string {
    const num = Number(amount) || 0;
    const symbols: Record<string, string> = {
      BDT: '৳',
      CNY: '¥',
      USD: '$'
    };
    const symbol = symbols[currency] || '৳';

    return `${symbol} ${num.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  },

  // Compact currency representation (e.g., ৳ 12.5k, ৳ 1.50 Lk, ৳ 2.20 Cr)
  compactCurrency(amount: number | string | null | undefined, currency: 'BDT' | 'CNY' | 'USD' = 'BDT'): string {
    const num = Number(amount) || 0;
    const symbol = currency === 'CNY' ? '¥' : currency === 'USD' ? '$' : '৳';

    if (Math.abs(num) >= 10000000) {
      return `${symbol} ${(num / 10000000).toFixed(2)} Cr`;
    }
    if (Math.abs(num) >= 100000) {
      return `${symbol} ${(num / 100000).toFixed(2)} Lk`;
    }
    if (Math.abs(num) >= 1000) {
      return `${symbol} ${(num / 1000).toFixed(1)}k`;
    }
    return `${symbol} ${num.toLocaleString('en-IN')}`;
  },

  // Standard Date format: DD-MMM-YYYY (e.g. 25-Sep-2026)
  date(dateVal: Date | string | null | undefined): string {
    if (!dateVal) return 'N/A';
    const d = new Date(dateVal);
    if (isNaN(d.getTime())) return String(dateVal);

    const day = String(d.getDate()).padStart(2, '0');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day}-${month}-${year}`;
  },

  // Date and Time format: DD-MMM-YYYY hh:mm A
  dateTime(dateVal: Date | string | null | undefined): string {
    if (!dateVal) return 'N/A';
    const d = new Date(dateVal);
    if (isNaN(d.getTime())) return String(dateVal);

    const dateStr = this.date(d);
    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    return `${dateStr} ${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
  },

  // Format date for HTML <input type="date"> (YYYY-MM-DD)
  dateForInput(dateVal: Date | string = new Date()): string {
    const d = new Date(dateVal);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  // Unique ID generator with prefix and current year
  generateId(prefix: string): string {
    const year = new Date().getFullYear();
    const random = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}-${year}-${random}`;
  },

  // Percentage formatter
  percent(val: number | string | null | undefined): string {
    const num = Number(val) || 0;
    return `${num.toFixed(1)}%`;
  }
};

// Convenience named exports
export const formatBDT = (amount: number | string | null | undefined) => Formatters.currency(amount, 'BDT');
export const formatCNY = (amount: number | string | null | undefined) => Formatters.currency(amount, 'CNY');
export const formatUSD = (amount: number | string | null | undefined) => Formatters.currency(amount, 'USD');
export const formatCompactBDT = (amount: number | string | null | undefined) => Formatters.compactCurrency(amount, 'BDT');
export const formatDate = (dateVal: Date | string | null | undefined) => Formatters.date(dateVal);
export const formatDateTime = (dateVal: Date | string | null | undefined) => Formatters.dateTime(dateVal);

// Convert number to words in Bangladeshi/Indian counting standard (Crore, Lakh, Thousand)
export function numberToWordsBDT(amount: number | string | null | undefined, currency: string = 'BDT'): string {
  const num = Math.round((Number(amount) || 0) * 100) / 100;
  if (num === 0) return `${currency} Zero Only`;

  const ones = [
    '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
    'Seventeen', 'Eighteen', 'Nineteen'
  ];

  const tens = [
    '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
  ];

  const convertLessThanOneThousand = (n: number): string => {
    let str = '';
    if (n >= 100) {
      str += ones[Math.floor(n / 100)] + ' Hundred ';
      n %= 100;
    }
    if (n >= 20) {
      str += tens[Math.floor(n / 10)] + ' ';
      n %= 10;
    }
    if (n > 0) {
      str += ones[n] + ' ';
    }
    return str.trim();
  };

  const integerPart = Math.floor(Math.abs(num));
  const decimalPart = Math.round((Math.abs(num) - integerPart) * 100);

  let crore = Math.floor(integerPart / 10000000);
  let remainder = integerPart % 10000000;

  let lakh = Math.floor(remainder / 100000);
  remainder %= 100000;

  let thousand = Math.floor(remainder / 1000);
  remainder %= 1000;

  let result = '';

  if (crore > 0) {
    result += convertLessThanOneThousand(crore) + ' Crore ';
  }
  if (lakh > 0) {
    result += convertLessThanOneThousand(lakh) + ' Lakh ';
  }
  if (thousand > 0) {
    result += convertLessThanOneThousand(thousand) + ' Thousand ';
  }
  if (remainder > 0) {
    result += convertLessThanOneThousand(remainder) + ' ';
  }

  result = result.trim();
  if (!result) result = 'Zero';

  let finalStr = `${currency} ${result}`;
  if (decimalPart > 0) {
    const paisaStr = convertLessThanOneThousand(decimalPart);
    const subUnit = currency === 'USD' ? 'Cents' : 'Paisa';
    finalStr += ` and ${paisaStr} ${subUnit}`;
  }
  finalStr += ' Only';

  return finalStr;
}
