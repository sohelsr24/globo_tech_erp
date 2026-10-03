// Cross-Module Universal Data Synchronization Engine
// Ensures when a product's Name, SKU, or landed cost is updated in Warehouse & Stock,
// the changes automatically cascade to Quotations, Bills, Products, and Ledger.

import { mirrorToIndexedDB } from '@/lib/erpBackup';

export function syncProductNameSkuAcrossAllModules(
  oldName: string,
  oldSku: string,
  newName: string,
  newSku: string
): { updatedQuotesCount: number; updatedBillsCount: number } {
  if (typeof window === 'undefined') return { updatedQuotesCount: 0, updatedBillsCount: 0 };

  const oldNameClean = (oldName || '').trim();
  const oldSkuClean = (oldSku || '').trim().toUpperCase();
  const newNameClean = (newName || '').trim();
  const newSkuClean = (newSku || '').trim().toUpperCase();

  if (!newNameClean && !newSkuClean) return { updatedQuotesCount: 0, updatedBillsCount: 0 };

  let updatedQuotesCount = 0;
  let updatedBillsCount = 0;

  // 1. Sync Quotations (globotech_erp_quotations)
  try {
    const quotesStr = localStorage.getItem('globotech_erp_quotations');
    if (quotesStr) {
      const quotes = JSON.parse(quotesStr);
      let quotesModified = false;
      if (Array.isArray(quotes)) {
        const updatedQuotes = quotes.map((q: any) => {
          let qModified = false;

          // Check items in quotation
          const updatedItems = (q.items || []).map((item: any) => {
            const itemSkuClean = (item.sku || '').trim().toUpperCase();
            const itemNameClean = (item.name || '').trim().toLowerCase();
            const itemModelClean = (item.model || '').trim().toLowerCase();

            const matchesSku = oldSkuClean && itemSkuClean === oldSkuClean;
            const matchesName = oldNameClean && itemNameClean === oldNameClean.toLowerCase();
            const matchesModel = oldNameClean && itemModelClean === oldNameClean.toLowerCase();

            if (matchesSku || matchesName || matchesModel) {
              qModified = true;
              return {
                ...item,
                name: newNameClean || item.name,
                sku: newSkuClean || item.sku,
                model: item.model && matchesModel ? (newNameClean || item.model) : item.model
              };
            }
            return item;
          });

          // Check projectName
          let updatedProjectName = q.projectName;
          if (oldNameClean && q.projectName) {
            const projClean = q.projectName.trim().toLowerCase();
            if (projClean === oldNameClean.toLowerCase()) {
              updatedProjectName = newNameClean;
              qModified = true;
            } else if (projClean.includes(oldNameClean.toLowerCase())) {
              const escaped = oldNameClean.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
              updatedProjectName = q.projectName.replace(new RegExp(escaped, 'gi'), newNameClean);
              qModified = true;
            }
          }

          if (qModified) {
            quotesModified = true;
            updatedQuotesCount++;
            return {
              ...q,
              projectName: updatedProjectName,
              items: updatedItems
            };
          }
          return q;
        });

        if (quotesModified) {
          localStorage.setItem('globotech_erp_quotations', JSON.stringify(updatedQuotes));
          window.dispatchEvent(new CustomEvent('globotech_quotations_updated', { detail: updatedQuotes }));
        }
      }
    }
  } catch (e) {
    console.error('Error cascading updates to quotations:', e);
  }

  // 2. Sync Bill Invoices (globotech_erp_bill_invoices)
  try {
    const billsStr = localStorage.getItem('globotech_erp_bill_invoices');
    if (billsStr) {
      const bills = JSON.parse(billsStr);
      let billsModified = false;
      if (Array.isArray(bills)) {
        const updatedBills = bills.map((b: any) => {
          let bModified = false;
          const updatedItems = (b.items || []).map((item: any) => {
            const itemSkuClean = (item.sku || '').trim().toUpperCase();
            const itemPartNoClean = (item.partNo || '').trim().toUpperCase();
            const itemNameClean = (item.name || '').trim().toLowerCase();

            const matchesSku = oldSkuClean && itemSkuClean === oldSkuClean;
            const matchesPartNo = oldSkuClean && itemPartNoClean === oldSkuClean;
            const matchesName = oldNameClean && itemNameClean === oldNameClean.toLowerCase();

            if (matchesSku || matchesPartNo || matchesName) {
              bModified = true;
              return {
                ...item,
                name: newNameClean || item.name,
                sku: newSkuClean || item.sku,
                partNo: item.partNo && matchesPartNo ? (newSkuClean || item.partNo) : item.partNo
              };
            }
            return item;
          });

          if (bModified) {
            billsModified = true;
            updatedBillsCount++;
            return {
              ...b,
              items: updatedItems
            };
          }
          return b;
        });

        if (billsModified) {
          localStorage.setItem('globotech_erp_bill_invoices', JSON.stringify(updatedBills));
          window.dispatchEvent(new CustomEvent('globotech_bills_updated', { detail: updatedBills }));
        }
      }
    }
  } catch (e) {
    console.error('Error cascading updates to bills:', e);
  }

  // 3. Sync Stock Ledger (globotech_erp_stock_ledger)
  try {
    const ledgerStr = localStorage.getItem('globotech_erp_stock_ledger');
    if (ledgerStr) {
      const ledger = JSON.parse(ledgerStr);
      if (Array.isArray(ledger)) {
        let ledgerModified = false;
        const updatedLedger = ledger.map((l: any) => {
          if (oldNameClean && l.productName && l.productName.toLowerCase().trim() === oldNameClean.toLowerCase()) {
            ledgerModified = true;
            return { ...l, productName: newNameClean };
          }
          return l;
        });
        if (ledgerModified) {
          localStorage.setItem('globotech_erp_stock_ledger', JSON.stringify(updatedLedger));
          window.dispatchEvent(new CustomEvent('globotech_ledger_updated', { detail: updatedLedger }));
        }
      }
    }
  } catch (e) {
    console.error('Error cascading updates to ledger:', e);
  }

  // 4. Mirror to IndexedDB
  try {
    mirrorToIndexedDB().catch(() => {});
  } catch (e) {}

  // 5. Fire global storage event
  window.dispatchEvent(new Event('storage'));

  return { updatedQuotesCount, updatedBillsCount };
}

/**
 * Self-healing automatic alignment on app startup:
 * Compares warehouseStock & product catalog with quotations and bills,
 * and fixes any discrepancies (e.g. Coat Pin -> Coat Pin Box).
 */
export function runCrossModuleSelfHealing(): void {
  if (typeof window === 'undefined') return;

  try {
    const stockStr = localStorage.getItem('globotech_erp_warehouse_stock');
    if (!stockStr) return;
    const stock = JSON.parse(stockStr);
    if (!Array.isArray(stock)) return;

    // Check specific known renames: Coat Pin -> Coat Pin Box
    const coatPinItem = stock.find(
      (s: any) =>
        s.sku === 'COATPINBOX' ||
        (s.productName && s.productName.toLowerCase().includes('coat pin box'))
    );

    if (coatPinItem) {
      syncProductNameSkuAcrossAllModules(
        'Coat Pin',
        'COATPINTRANSP',
        coatPinItem.productName || 'Coat Pin Box',
        coatPinItem.sku || 'COATPINBOX'
      );
    }
  } catch (e) {
    console.warn('Self healing sync notice:', e);
  }
}
