const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Bangladesh Import & Inventory ERP database...');

  // 1. System Settings
  await prisma.setting.upsert({
    where: { id: 'SYSTEM_CONFIG' },
    update: {},
    create: {
      id: 'SYSTEM_CONFIG',
      companyName: 'Apex Industrial & Tech Solutions Ltd.',
      tagline: 'Leading Wholesale, Distribution & Corporate Projects in IT, CCTV & Networking',
      address: 'Level 6, House 42, Road 11, Banani C/A, Dhaka-1213, Bangladesh',
      phone: '+880 1711-234567',
      email: 'info@apexsolutions.bd',
      website: 'https://apexsolutions.bd',
      binVat: 'BIN-002349182-0101',
      tin: 'TIN-889912003',
      primaryCurrency: 'BDT',
      cnyToBdtRate: 16.0,
      usdToBdtRate: 122.0,
      costingMethod: 'WEIGHTED_AVERAGE',
      blockNegativeStock: true
    }
  });

  // 2. Roles
  const roles = [
    { name: 'SUPER_ADMIN', displayName: 'Super Administrator', description: 'Full system ownership & permission configuration' },
    { name: 'ADMIN', displayName: 'System Administrator', description: 'Complete administrative access' },
    { name: 'PROCUREMENT_OFFICER', displayName: 'Procurement Officer', description: 'Manages China suppliers, POs, and Import Landed Cost' },
    { name: 'SALES_OFFICER', displayName: 'Sales Officer', description: 'Handles Quotations, Sales Orders, and Invoices' },
    { name: 'STOREKEEPER', displayName: 'Storekeeper / Warehouse', description: 'Receives shipments (GRN), issues stock, and manages transfers' },
    { name: 'ACCOUNTS_OFFICER', displayName: 'Accounts & Finance', description: 'Payment receipts, supplier disbursements, expenses, and P&L' },
    { name: 'TECHNICIAN', displayName: 'Installation Technician', description: 'Logs project materials consumption and labor hours' },
    { name: 'MANAGEMENT_VIEWER', displayName: 'Management / Executive Viewer', description: 'Read-only access to dashboards and executive reports' }
  ];

  const roleMap = {};
  for (const r of roles) {
    const role = await prisma.role.upsert({
      where: { name: r.name },
      update: { displayName: r.displayName, description: r.description },
      create: r
    });
    roleMap[r.name] = role.id;
  }

  // 3. Admin User
  await prisma.user.upsert({
    where: { email: 'admin@apexsolutions.bd' },
    update: {},
    create: {
      name: 'Engr. Sohel Rana',
      email: 'admin@apexsolutions.bd',
      passwordHash: 'admin123', // Demo hash
      roleId: roleMap['SUPER_ADMIN'],
      phone: '+880 1711-234567',
      status: 'ACTIVE'
    }
  });

  // 4. Units
  const units = [
    { name: 'pcs', symbol: 'pcs' },
    { name: 'meter', symbol: 'm' },
    { name: 'roll', symbol: 'roll' },
    { name: 'set', symbol: 'set' },
    { name: 'unit', symbol: 'unit' },
    { name: 'box', symbol: 'box' }
  ];
  const unitMap = {};
  for (const u of units) {
    const unit = await prisma.unit.upsert({
      where: { name: u.name },
      update: {},
      create: u
    });
    unitMap[u.name] = unit.id;
  }

  // 5. Brands
  const brands = ['Hikvision', 'Cisco', 'TP-Link', 'Seagate', 'Motorola', 'APC by Schneider', 'D-Link'];
  const brandMap = {};
  for (const b of brands) {
    const brand = await prisma.brand.upsert({
      where: { name: b },
      update: {},
      create: { name: b, origin: 'Global' }
    });
    brandMap[b] = brand.id;
  }

  // 6. Categories & Subcategories
  const categoriesData = [
    {
      name: 'CCTV & Surveillance',
      code: 'CCTV',
      subs: ['IP Cameras', 'NVR & DVR', 'Surveillance Storage']
    },
    {
      name: 'Networking',
      code: 'NET',
      subs: ['Managed Switches', 'Enterprise Routers', 'Cabling & Fiber']
    },
    {
      name: 'Data Center & Power',
      code: 'DC-PWR',
      subs: ['Online UPS', 'Server Racks', 'Precision Cooling']
    },
    {
      name: 'Security & Wireless',
      code: 'SEC-WIR',
      subs: ['Walkie Talkies', 'Access Control Systems']
    }
  ];

  const catMap = {};
  const subMap = {};
  for (const c of categoriesData) {
    const cat = await prisma.category.upsert({
      where: { code: c.code },
      update: { name: c.name },
      create: { name: c.name, code: c.code }
    });
    catMap[c.code] = cat.id;

    for (const s of c.subs) {
      const code = s.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const sub = await prisma.subcategory.upsert({
        where: { categoryId_code: { categoryId: cat.id, code } },
        update: { name: s },
        create: { name: s, code, categoryId: cat.id }
      });
      subMap[s] = sub.id;
    }
  }

  // 7. Warehouses
  const warehousesData = [
    { name: 'Main Warehouse (Tejgaon)', code: 'WH-MAIN', isDefault: true, address: 'Plot 18, Tejgaon I/A, Dhaka' },
    { name: 'Office Store (Banani)', code: 'WH-OFFICE', isDefault: false, address: 'Level 6, House 42, Road 11, Banani' },
    { name: 'Project Store (Site Depot)', code: 'WH-PROJECT', isDefault: false, address: 'Dedicated Project Site Depot' },
    { name: 'Service Store (RMA & Repairs)', code: 'WH-SERVICE', isDefault: false, address: 'Tejgaon Service Center' },
    { name: 'Showroom (Gulshan)', code: 'WH-SHOWROOM', isDefault: false, address: 'Gulshan Avenue, Dhaka' }
  ];

  const whMap = {};
  for (const w of warehousesData) {
    const wh = await prisma.warehouse.upsert({
      where: { code: w.code },
      update: { name: w.name, address: w.address, isDefault: w.isDefault },
      create: w
    });
    whMap[w.code] = wh.id;
  }

  // 8. Suppliers
  const chinaSupplier = await prisma.supplier.upsert({
    where: { id: 'SUPP-CHINA-001' },
    update: {},
    create: {
      id: 'SUPP-CHINA-001',
      name: 'Shenzhen Hikvision Security Tech Co.',
      company: 'China Supplier A',
      country: 'China',
      address: 'Bantian High-Tech Industrial Park, Longgang, Shenzhen, China',
      contactPerson: 'Mr. Zhang Wei',
      phone: '+86 755 8899 0011',
      email: 'zhang.wei@hik-china-supply.com',
      weChat: 'hik_zhang_wei88',
      whatsApp: '+86 138 0011 2233',
      currency: 'CNY',
      paymentTerms: '30% TT advance, 70% before BL release',
      rating: 5
    }
  });

  // 9. Customers
  const custBank = await prisma.customer.upsert({
    where: { customerNumber: 'CUST-2026-001' },
    update: {},
    create: {
      customerNumber: 'CUST-2026-001',
      name: 'ABC Bank PLC',
      organization: 'Head Office & Countrywide Branches',
      customerType: 'CORPORATE',
      phone: '+880 1713-998877',
      email: 'procurement@abcbank.com.bd',
      billingAddress: 'Motijheel C/A, Dhaka-1000',
      deliveryAddress: 'Motijheel C/A, Dhaka-1000',
      creditLimit: 2000000,
      paymentTerms: 'Net 30 Days'
    }
  });

  const custWholesale = await prisma.customer.upsert({
    where: { customerNumber: 'CUST-2026-002' },
    update: {},
    create: {
      customerNumber: 'CUST-2026-002',
      name: 'Beximco Industrial Fabrics',
      organization: 'Beximco Group',
      customerType: 'WHOLESALE',
      phone: '+880 1819-876543',
      email: 'tanvir@beximco.com',
      billingAddress: 'Kashimpur, Gazipur Industrial Area',
      deliveryAddress: 'Kashimpur, Gazipur Industrial Area',
      creditLimit: 500000,
      paymentTerms: 'Net 14 Days'
    }
  });

  // 10. Products
  const cctvProduct = await prisma.product.upsert({
    where: { sku: 'SKU-CCTV-4MP-DOME' },
    update: {},
    create: {
      sku: 'SKU-CCTV-4MP-DOME',
      barcode: '880192837401',
      name: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
      model: 'DS-2CD2143G2-I',
      description: '4 Megapixel Powered-by-DarkFighter Fixed Dome Network Camera with AcuSense and Smart Hybrid Light',
      categoryId: catMap['CCTV'],
      subcategoryId: subMap['IP Cameras'],
      brandId: brandMap['Hikvision'],
      unitId: unitMap['pcs'],
      originCountry: 'China',
      warrantyMonths: 24,
      isSerialTracked: true,
      minStockLevel: 10,
      reorderLevel: 25,
      maxStockLevel: 200,
      purchasePrice: 500,        // 500 CNY
      purchaseCurrency: 'CNY',
      currentLandedCost: 10000,  // 10,000 BDT
      status: 'ACTIVE',
      priceTier: {
        create: {
          retailPrice: 15000,
          wholesalePrice: 13500,
          projectPrice: 12500,
          dealerPrice: 12000,
          vatRate: 5.0
        }
      }
    }
  });

  const switchProduct = await prisma.product.upsert({
    where: { sku: 'SKU-NET-SW24G' },
    update: {},
    create: {
      sku: 'SKU-NET-SW24G',
      barcode: '880192837402',
      name: 'TP-Link 24-Port Gigabit Managed PoE+ Switch',
      model: 'TL-SG3428MP',
      description: 'JetStream 28-Port Gigabit L2+ Managed Switch with 24-Port PoE+ (384W power budget)',
      categoryId: catMap['NET'],
      subcategoryId: subMap['Managed Switches'],
      brandId: brandMap['TP-Link'],
      unitId: unitMap['pcs'],
      originCountry: 'China',
      warrantyMonths: 36,
      isSerialTracked: true,
      minStockLevel: 5,
      reorderLevel: 12,
      maxStockLevel: 50,
      purchasePrice: 1250,       // 1,250 CNY
      purchaseCurrency: 'CNY',
      currentLandedCost: 24000,  // 24,000 BDT
      status: 'ACTIVE',
      priceTier: {
        create: {
          retailPrice: 34000,
          wholesalePrice: 31000,
          projectPrice: 29500,
          dealerPrice: 28500,
          vatRate: 7.5
        }
      }
    }
  });

  // 11. Initial Stock & Opening Stock Ledger
  await prisma.stock.upsert({
    where: {
      warehouseId_productId: {
        warehouseId: whMap['WH-MAIN'],
        productId: cctvProduct.id
      }
    },
    update: {},
    create: {
      warehouseId: whMap['WH-MAIN'],
      productId: cctvProduct.id,
      quantityAvailable: 40,
      quantityReserved: 0,
      quantityDamaged: 0,
      quantityInTransit: 0
    }
  });

  await prisma.stockMovementLedger.create({
    data: {
      productId: cctvProduct.id,
      warehouseId: whMap['WH-MAIN'],
      movementType: 'OPENING_STOCK',
      quantityDelta: 40,
      balanceAfter: 40,
      unitLandedCost: 10000,
      totalCostValue: 400000,
      referenceType: 'OPENING_STOCK',
      referenceId: 'INIT-2026',
      reasonNotes: 'Opening initial audited balance'
    }
  });

  // 12. Installation Project: "ABC Bank CCTV Installation Project"
  await prisma.project.upsert({
    where: { projectCode: 'PRJ-2026-001' },
    update: {},
    create: {
      projectCode: 'PRJ-2026-001',
      customerId: custBank.id,
      projectName: 'ABC Bank Head Office CCTV & Security Modernization',
      location: 'Motijheel Commercial Area, Dhaka',
      startDate: new Date('2026-09-01'),
      contractValue: 450000,
      materialLandedCost: 100000, // 10 CCTV Cameras @ 10,000 BDT
      laborCost: 28000,
      transportCost: 12000,
      otherCost: 5000,
      totalProjectCost: 145000,
      projectGrossProfit: 305000,
      status: 'INSTALLATION_IN_PROGRESS'
    }
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
