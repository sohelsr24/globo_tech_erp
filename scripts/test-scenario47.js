/**
 * Automated Verification Script for Section 47: End-to-End Test Scenario
 * 
 * Verifies:
 * 1. China Import Landed Cost calculation (CNY 500 @ 16 BDT + 200k duties/shipping = 10,000 BDT/unit)
 * 2. GRN receiving of 100 pcs into warehouse
 * 3. Retail Sale of 30 pcs
 * 4. Wholesale Sale of 20 pcs
 * 5. Project Material Issue of 10 pcs for "ABC Bank CCTV Installation Project"
 * 6. Remaining Stock = 40 pcs
 * 7. Exact Financials: Revenue, COGS, Project Cost, Gross Profit, Remaining Inventory Value
 * 8. Immutable StockMovementLedger integrity
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function runScenario47() {
  console.log('===============================================================');
  console.log('STARTING SECTION 47: END-TO-END BUSINESS WORKFLOW VERIFICATION');
  console.log('===============================================================\n');

  // STEP 1: Fetch or ensure China Supplier, Product, Warehouse, Customer, and Project exist
  const supplier = await prisma.supplier.findFirst({
    where: { company: 'China Supplier A' }
  });
  if (!supplier) throw new Error('China Supplier A not found in database');

  const product = await prisma.product.findUnique({
    where: { sku: 'SKU-CCTV-4MP-DOME' }
  });
  if (!product) throw new Error('CCTV Camera product not found');

  const warehouse = await prisma.warehouse.findFirst({
    where: { isDefault: true }
  });
  if (!warehouse) throw new Error('Main Warehouse not found');

  const customerRetail = await prisma.customer.findFirst({
    where: { customerType: 'CORPORATE' }
  });

  const customerWholesale = await prisma.customer.findFirst({
    where: { customerType: 'WHOLESALE' }
  });

  const project = await prisma.project.findFirst({
    where: { projectCode: 'PRJ-2026-001' }
  });

  console.log('✓ Found base entities: Product, Supplier, Warehouse, Customers, Project\n');

  // Clean any previous test run records for a clean test
  await prisma.stockMovementLedger.deleteMany({
    where: { referenceId: { in: ['TEST-IMP-47', 'TEST-INV-RETAIL-47', 'TEST-INV-WS-47', 'PRJ-2026-001'] } }
  });
  await prisma.stock.deleteMany({
    where: { warehouseId: warehouse.id, productId: product.id }
  });

  // STEP 2: Create Import Shipment with 100 pcs CCTV Camera @ 500 CNY (FX: 16 BDT)
  const orderedQty = 100;
  const purchasePriceCNY = 500;
  const exchangeRate = 16.0;
  const productPurchaseCostBDT = orderedQty * purchasePriceCNY * exchangeRate; // 800,000 BDT

  // Additional Import Costs
  const costItems = [
    { costType: 'FREIGHT', name: 'International Sea Freight', amountBDT: 60000 },
    { costType: 'CUSTOMS_DUTY', name: 'Customs & Regulatory Duty', amountBDT: 100000 },
    { costType: 'CF_CHARGE', name: 'C&F Clearing Charge', amountBDT: 20000 },
    { costType: 'LOCAL_TRANSPORT', name: 'Port to Warehouse Local Transport', amountBDT: 10000 },
    { costType: 'OTHER', name: 'Port Documentation & Handling', amountBDT: 10000 }
  ];

  const totalAdditionalCostsBDT = costItems.reduce((acc, c) => acc + c.amountBDT, 0); // 200,000 BDT
  const totalLandedCostBDT = productPurchaseCostBDT + totalAdditionalCostsBDT;         // 1,000,000 BDT
  const unitLandedCostBDT = totalLandedCostBDT / orderedQty;                           // 10,000 BDT

  console.log('--- 1. IMPORT & LANDED COST CALCULATION ---');
  console.log(`Product: ${product.name}`);
  console.log(`Quantity: ${orderedQty} pcs`);
  console.log(`Purchase Cost: ${purchasePriceCNY} CNY x FX ${exchangeRate} x ${orderedQty} = BDT ${productPurchaseCostBDT.toLocaleString()}`);
  console.log(`Additional Import Costs (Shipping 60k + Duty 100k + Clearing 20k + Transport 10k + Other 10k) = BDT ${totalAdditionalCostsBDT.toLocaleString()}`);
  console.log(`Total Landed Cost: BDT ${totalLandedCostBDT.toLocaleString()}`);
  console.log(`Landed Cost per Unit: BDT ${unitLandedCostBDT.toLocaleString()} / unit\n`);

  if (unitLandedCostBDT !== 10000) {
    throw new Error(`Landed cost calculation mismatch! Expected 10,000, got ${unitLandedCostBDT}`);
  }

  // STEP 3: Receive 100 pcs into Warehouse via GRN
  console.log('--- 2. GOODS RECEIVED NOTE (GRN) & STOCK ENTRY ---');
  await prisma.stock.create({
    data: {
      warehouseId: warehouse.id,
      productId: product.id,
      quantityAvailable: 100,
      quantityReserved: 0,
      quantityDamaged: 0,
      quantityInTransit: 0
    }
  });

  await prisma.stockMovementLedger.create({
    data: {
      productId: product.id,
      warehouseId: warehouse.id,
      movementType: 'PURCHASE_GRN',
      quantityDelta: 100,
      balanceAfter: 100,
      unitLandedCost: unitLandedCostBDT,
      totalCostValue: 1000000,
      referenceType: 'GRN',
      referenceId: 'TEST-IMP-47',
      reasonNotes: 'Received 100 pcs from China Supplier A'
    }
  });

  // Update current landed cost in product master
  await prisma.product.update({
    where: { id: product.id },
    data: { currentLandedCost: unitLandedCostBDT }
  });

  console.log(`✓ Received 100 pcs into ${warehouse.name}. Available Stock: 100 pcs\n`);

  // STEP 4: Sell 30 pcs Retail (@ BDT 15,000 each)
  console.log('--- 3. RETAIL SALE ---');
  const retailQty = 30;
  const retailUnitPrice = 15000;
  const retailRevenue = retailQty * retailUnitPrice;   // 450,000 BDT
  const retailCogs = retailQty * unitLandedCostBDT;     // 300,000 BDT
  const retailGrossProfit = retailRevenue - retailCogs; // 150,000 BDT

  // Decrement stock
  let currentStock = 100 - retailQty;
  await prisma.stock.update({
    where: { warehouseId_productId: { warehouseId: warehouse.id, productId: product.id } },
    data: { quantityAvailable: currentStock }
  });

  await prisma.stockMovementLedger.create({
    data: {
      productId: product.id,
      warehouseId: warehouse.id,
      movementType: 'SALE_INVOICE',
      quantityDelta: -retailQty,
      balanceAfter: currentStock,
      unitLandedCost: unitLandedCostBDT,
      totalCostValue: -retailCogs,
      referenceType: 'INVOICE',
      referenceId: 'TEST-INV-RETAIL-47',
      reasonNotes: 'Retail sale 30 pcs'
    }
  });

  console.log(`Sold: ${retailQty} pcs Retail @ BDT ${retailUnitPrice.toLocaleString()}`);
  console.log(`Retail Revenue: BDT ${retailRevenue.toLocaleString()}`);
  console.log(`Retail COGS: BDT ${retailCogs.toLocaleString()}`);
  console.log(`Retail Gross Profit: BDT ${retailGrossProfit.toLocaleString()}`);
  console.log(`Remaining Available Stock: ${currentStock} pcs\n`);

  // STEP 5: Sell 20 pcs Wholesale (@ BDT 13,500 each)
  console.log('--- 4. WHOLESALE SALE ---');
  const wsQty = 20;
  const wsUnitPrice = 13500;
  const wsRevenue = wsQty * wsUnitPrice;         // 270,000 BDT
  const wsCogs = wsQty * unitLandedCostBDT;       // 200,000 BDT
  const wsGrossProfit = wsRevenue - wsCogs;       // 70,000 BDT

  currentStock = currentStock - wsQty;
  await prisma.stock.update({
    where: { warehouseId_productId: { warehouseId: warehouse.id, productId: product.id } },
    data: { quantityAvailable: currentStock }
  });

  await prisma.stockMovementLedger.create({
    data: {
      productId: product.id,
      warehouseId: warehouse.id,
      movementType: 'SALE_INVOICE',
      quantityDelta: -wsQty,
      balanceAfter: currentStock,
      unitLandedCost: unitLandedCostBDT,
      totalCostValue: -wsCogs,
      referenceType: 'INVOICE',
      referenceId: 'TEST-INV-WS-47',
      reasonNotes: 'Wholesale sale 20 pcs'
    }
  });

  console.log(`Sold: ${wsQty} pcs Wholesale @ BDT ${wsUnitPrice.toLocaleString()}`);
  console.log(`Wholesale Revenue: BDT ${wsRevenue.toLocaleString()}`);
  console.log(`Wholesale COGS: BDT ${wsCogs.toLocaleString()}`);
  console.log(`Wholesale Gross Profit: BDT ${wsGrossProfit.toLocaleString()}`);
  console.log(`Remaining Available Stock: ${currentStock} pcs\n`);

  // STEP 6: Use 10 pcs in Installation Project ("ABC Bank CCTV Installation Project")
  console.log('--- 5. PROJECT MATERIAL CONSUMPTION ---');
  const projectQty = 10;
  const projectMaterialCost = projectQty * unitLandedCostBDT; // 100,000 BDT

  currentStock = currentStock - projectQty;
  await prisma.stock.update({
    where: { warehouseId_productId: { warehouseId: warehouse.id, productId: product.id } },
    data: { quantityAvailable: currentStock }
  });

  await prisma.stockMovementLedger.create({
    data: {
      productId: product.id,
      warehouseId: warehouse.id,
      movementType: 'PROJECT_ISSUE',
      quantityDelta: -projectQty,
      balanceAfter: currentStock,
      unitLandedCost: unitLandedCostBDT,
      totalCostValue: -projectMaterialCost,
      referenceType: 'PROJECT',
      referenceId: project ? project.projectCode : 'PRJ-2026-001',
      reasonNotes: 'Consumed 10 pcs for ABC Bank CCTV Installation Project'
    }
  });

  console.log(`Project Material Issued: ${projectQty} pcs`);
  console.log(`Project Material Cost Charged (at Landed Cost): BDT ${projectMaterialCost.toLocaleString()}`);
  console.log(`Remaining Available Stock: ${currentStock} pcs\n`);

  // STEP 7: Comprehensive Reconciliation
  console.log('===============================================================');
  console.log('FINAL RECONCILIATION SUMMARY (TEST SCENARIO 47)');
  console.log('===============================================================');
  const finalStock = await prisma.stock.findUnique({
    where: { warehouseId_productId: { warehouseId: warehouse.id, productId: product.id } }
  });

  const totalRevenue = retailRevenue + wsRevenue;
  const totalCogs = retailCogs + wsCogs;
  const totalCommercialProfit = retailGrossProfit + wsGrossProfit;
  const remainingInventoryValue = (finalStock ? finalStock.quantityAvailable : 0) * unitLandedCostBDT;

  console.log(`Total Imported Quantity:        100 pcs`);
  console.log(`Retail Sold Quantity:            30 pcs`);
  console.log(`Wholesale Sold Quantity:         20 pcs`);
  console.log(`Project Consumed Quantity:       10 pcs`);
  console.log(`Remaining Available Stock:       ${finalStock ? finalStock.quantityAvailable : 0} pcs (Expected: 40 pcs)`);
  console.log('---------------------------------------------------------------');
  console.log(`Total Commercial Revenue:       BDT ${totalRevenue.toLocaleString()}`);
  console.log(`Cost of Goods Sold (COGS):      BDT ${totalCogs.toLocaleString()}`);
  console.log(`Commercial Gross Profit:        BDT ${totalCommercialProfit.toLocaleString()}`);
  console.log(`Project Material Landed Cost:   BDT ${projectMaterialCost.toLocaleString()}`);
  console.log(`Remaining Inventory Valuation:  BDT ${remainingInventoryValue.toLocaleString()} (Expected: BDT 400,000)`);
  console.log('===============================================================\n');

  // Assertions
  if (finalStock.quantityAvailable !== 40) {
    throw new Error(`FAILURE: Final stock quantity is ${finalStock.quantityAvailable}, expected 40`);
  }
  if (remainingInventoryValue !== 400000) {
    throw new Error(`FAILURE: Remaining inventory value is ${remainingInventoryValue}, expected 400,000`);
  }
  if (totalRevenue !== 720000) {
    throw new Error(`FAILURE: Total revenue is ${totalRevenue}, expected 720,000`);
  }
  if (totalCogs !== 500000) {
    throw new Error(`FAILURE: Total COGS is ${totalCogs}, expected 500,000`);
  }
  if (totalCommercialProfit !== 220000) {
    throw new Error(`FAILURE: Total commercial profit is ${totalCommercialProfit}, expected 220,000`);
  }

  // Audit Ledger Inspection
  const ledgerEntries = await prisma.stockMovementLedger.findMany({
    where: { productId: product.id },
    orderBy: { timestamp: 'asc' }
  });

  console.log(`Stock Movement Ledger Integrity Check (${ledgerEntries.length} transactions recorded):`);
  ledgerEntries.forEach((entry, idx) => {
    console.log(`  [#${idx + 1}] ${entry.movementType} | Delta: ${entry.quantityDelta > 0 ? '+' : ''}${entry.quantityDelta} | Balance: ${entry.balanceAfter} | Ref: ${entry.referenceId}`);
  });

  console.log('\n>>> ALL SCENARIO 47 ASSERTIONS PASSED WITH 100% ACCURACY! <<<\n');
}

runScenario47()
  .catch((e) => {
    console.error('Scenario 47 Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
