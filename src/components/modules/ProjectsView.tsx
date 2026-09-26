'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Wrench,
  Plus,
  CheckCircle2,
  HardHat,
  TrendingUp,
  TrendingDown,
  PackageMinus,
  FileSpreadsheet,
  Printer,
  DollarSign,
  Search,
  Building,
  MapPin,
  Calendar,
  AlertCircle,
  Receipt,
  Eye,
  Filter,
  ArrowRight,
  ShieldCheck,
  Truck
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { formatBDT, formatDate } from '@/lib/formatters';

export interface ProjectExpense {
  id: string;
  category: 'TRANSPORT' | 'TOOLS_EQUIPMENT' | 'MEALS_CONVEYANCE' | 'SUBCONTRACTOR' | 'MISCELLANEOUS';
  description: string;
  amount: number;
  date: string;
}

export interface MaterialIssue {
  id: string;
  productName: string;
  quantity: number;
  unitLandedCost: number;
  totalCost: number;
}

export interface LaborLog {
  id: string;
  technicianName: string;
  workDays: number;
  dailyRate: number;
  overtimeHours: number;
  totalLabor: number;
}

export interface ProjectRecord {
  id: string;
  projectCode: string;
  customerName: string;
  projectName: string;
  location: string;
  contractValue: number;
  materialLandedCost: number;
  laborCost: number;
  transportCost: number;
  otherCost: number;
  totalProjectCost: number;
  projectGrossProfit: number;
  profitMarginPercent: number;
  status: 'PLANNING' | 'INSTALLATION_IN_PROGRESS' | 'COMPLETED' | 'ON_HOLD';
  startDate?: string;
  completionDate?: string;
  notes?: string;
  materialIssues: MaterialIssue[];
  laborLogs: LaborLog[];
  expenses: ProjectExpense[];
}

export const INITIAL_PROJECTS: ProjectRecord[] = [
  {
    id: 'prj-01',
    projectCode: 'PRJ-2026-001',
    customerName: 'ABC Bank PLC',
    projectName: 'ABC Bank Head Office CCTV & Security Modernization',
    location: 'Motijheel Commercial Area, Dhaka',
    contractValue: 450000,
    materialLandedCost: 100000,
    laborCost: 28000,
    transportCost: 12000,
    otherCost: 5000,
    totalProjectCost: 145000,
    projectGrossProfit: 305000,
    profitMarginPercent: 67.78,
    status: 'INSTALLATION_IN_PROGRESS',
    startDate: '2026-09-01',
    materialIssues: [
      {
        id: 'iss-01',
        productName: 'CCTV Camera (4MP Outdoor IR Dome IP Camera)',
        quantity: 10,
        unitLandedCost: 10000,
        totalCost: 100000,
      }
    ],
    laborLogs: [
      {
        id: 'lab-01',
        technicianName: 'Md. Al-Amin (Lead Technician)',
        workDays: 14,
        dailyRate: 1500,
        overtimeHours: 10,
        totalLabor: 23000,
      },
      {
        id: 'lab-02',
        technicianName: 'Sabbir Hossain (Assistant)',
        workDays: 5,
        dailyRate: 1000,
        overtimeHours: 0,
        totalLabor: 5000,
      }
    ],
    expenses: [
      {
        id: 'exp-01',
        category: 'TRANSPORT',
        description: 'Pickup van transport for cable reels & camera mounts',
        amount: 8000,
        date: '2026-09-02'
      },
      {
        id: 'exp-02',
        category: 'MEALS_CONVEYANCE',
        description: 'Site technician daily conveyance & lunch',
        amount: 4000,
        date: '2026-09-10'
      },
      {
        id: 'exp-03',
        category: 'TOOLS_EQUIPMENT',
        description: 'Heavy duty drill bits & cable pullers',
        amount: 5000,
        date: '2026-09-03'
      }
    ]
  },
  {
    id: 'prj-02',
    projectCode: 'PRJ-2026-002',
    customerName: 'Daraz Bangladesh Limited',
    projectName: 'Narshingdi HUB Relocation & CCTV Surveillance Setup',
    location: 'Delivery Location: Narshingdi HUB',
    contractValue: 185000,
    materialLandedCost: 65000,
    laborCost: 18000,
    transportCost: 7500,
    otherCost: 4500,
    totalProjectCost: 95000,
    projectGrossProfit: 90000,
    profitMarginPercent: 48.65,
    status: 'INSTALLATION_IN_PROGRESS',
    startDate: '2026-09-15',
    materialIssues: [
      {
        id: 'iss-02',
        productName: 'Rosenberger Cat-6 UTP Pure Copper Cable (305m)',
        quantity: 2,
        unitLandedCost: 14500,
        totalCost: 29000,
      },
      {
        id: 'iss-03',
        productName: 'Hikvision 4MP IP Cameras with Mounting Junctions',
        quantity: 4,
        unitLandedCost: 9000,
        totalCost: 36000,
      }
    ],
    laborLogs: [
      {
        id: 'lab-03',
        technicianName: 'Engr. Sohel Rana',
        workDays: 4,
        dailyRate: 2500,
        overtimeHours: 0,
        totalLabor: 10000,
      },
      {
        id: 'lab-04',
        technicianName: 'Rony (CCTV Installer)',
        workDays: 8,
        dailyRate: 1000,
        overtimeHours: 0,
        totalLabor: 8000,
      }
    ],
    expenses: [
      {
        id: 'exp-04',
        category: 'TRANSPORT',
        description: 'Dhaka to Narshingdi materials transit & return',
        amount: 7500,
        date: '2026-09-16'
      },
      {
        id: 'exp-05',
        category: 'MISCELLANEOUS',
        description: 'PVC pipes, royal plugs & junction hardware',
        amount: 4500,
        date: '2026-09-17'
      }
    ]
  },
  {
    id: 'prj-03',
    projectCode: 'PRJ-2026-003',
    customerName: 'Square Pharmaceuticals Ltd',
    projectName: 'Data Center Rack Cabling & Network Switch Migration',
    location: 'Square Centre, Mohakhali, Dhaka',
    contractValue: 320000,
    materialLandedCost: 160000,
    laborCost: 35000,
    transportCost: 10000,
    otherCost: 10000,
    totalProjectCost: 215000,
    projectGrossProfit: 105000,
    profitMarginPercent: 32.81,
    status: 'COMPLETED',
    startDate: '2026-08-10',
    completionDate: '2026-09-05',
    materialIssues: [
      {
        id: 'iss-04',
        productName: 'Cisco 24-Port Gigabit Managed PoE+ Switch',
        quantity: 1,
        unitLandedCost: 110000,
        totalCost: 110000,
      },
      {
        id: 'iss-05',
        productName: 'Cat6 Patch Panels & Wire Managers',
        quantity: 5,
        unitLandedCost: 10000,
        totalCost: 50000,
      }
    ],
    laborLogs: [
      {
        id: 'lab-05',
        technicianName: 'Md. Al-Amin',
        workDays: 14,
        dailyRate: 1500,
        overtimeHours: 0,
        totalLabor: 21000,
      },
      {
        id: 'lab-06',
        technicianName: 'Sabbir Hossain',
        workDays: 14,
        dailyRate: 1000,
        overtimeHours: 0,
        totalLabor: 14000,
      }
    ],
    expenses: [
      {
        id: 'exp-06',
        category: 'TRANSPORT',
        description: 'Server rack transit to Mohakhali',
        amount: 10000,
        date: '2026-08-12'
      },
      {
        id: 'exp-07',
        category: 'MISCELLANEOUS',
        description: 'Testing, labeling & cable management ties',
        amount: 10000,
        date: '2026-08-25'
      }
    ]
  }
];

export function ProjectsView() {
  const [projects, setProjects] = useState<ProjectRecord[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('globotech_erp_projects');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Error loading projects:', e);
        }
      }
    }
    return INITIAL_PROJECTS;
  });

  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0]?.id || 'prj-01');
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'DASHBOARD' | 'MASTER_SHEET'>('DASHBOARD');

  // Modals
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [isIssueMaterialOpen, setIsIssueMaterialOpen] = useState(false);
  const [isLogLaborOpen, setIsLogLaborOpen] = useState(false);
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);
  const [isPnLSheetModalOpen, setIsPnLSheetModalOpen] = useState(false);

  // New Project Form
  const [newProject, setNewProject] = useState({
    projectName: '',
    customerName: '',
    location: '',
    contractValue: 150000,
    status: 'INSTALLATION_IN_PROGRESS' as ProjectRecord['status'],
    notes: ''
  });

  // Material Issue Form
  const [issueQty, setIssueQty] = useState(2);
  const [issueProduct, setIssueProduct] = useState('CCTV Camera (4MP Outdoor IR Dome IP Camera)');
  const [issueUnitCost, setIssueUnitCost] = useState(10000);

  // Labor Form
  const [techName, setTechName] = useState('Md. Al-Amin');
  const [workDays, setWorkDays] = useState(3);
  const [dailyRate, setDailyRate] = useState(1500);

  // Direct Expense Form
  const [expenseCategory, setExpenseCategory] = useState<ProjectExpense['category']>('TRANSPORT');
  const [expenseDesc, setExpenseDesc] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(5000);

  // Save to localStorage whenever projects change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('globotech_erp_projects', JSON.stringify(projects));
    }
  }, [projects]);

  const selectedProject = useMemo(() => {
    return projects.find((p) => p.id === selectedProjectId) || projects[0] || null;
  }, [projects, selectedProjectId]);

  // Overall Financial Aggregates
  const financialSummary = useMemo(() => {
    const totalContract = projects.reduce((acc, p) => acc + p.contractValue, 0);
    const totalMaterial = projects.reduce((acc, p) => acc + p.materialLandedCost, 0);
    const totalLabor = projects.reduce((acc, p) => acc + p.laborCost, 0);
    const totalTransport = projects.reduce((acc, p) => acc + p.transportCost, 0);
    const totalOther = projects.reduce((acc, p) => acc + p.otherCost, 0);
    const totalCost = totalMaterial + totalLabor + totalTransport + totalOther;
    const totalProfit = totalContract - totalCost;
    const avgMargin = totalContract > 0 ? (totalProfit / totalContract) * 100 : 0;

    return {
      totalContract,
      totalMaterial,
      totalLabor,
      totalTransport,
      totalOther,
      totalCost,
      totalProfit,
      avgMargin
    };
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        p.projectName.toLowerCase().includes(search.toLowerCase()) ||
        p.projectCode.toLowerCase().includes(search.toLowerCase()) ||
        p.customerName.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = filterStatus === 'ALL' || p.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [projects, search, filterStatus]);

  // Handle Add New Project
  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.projectName.trim() || !newProject.customerName.trim()) return;

    const nextNumber = projects.length + 1;
    const projectCode = `PRJ-2026-${String(nextNumber).padStart(3, '0')}`;
    const contractVal = Number(newProject.contractValue) || 0;

    const createdPrj: ProjectRecord = {
      id: `prj-${Date.now()}`,
      projectCode,
      customerName: newProject.customerName.trim(),
      projectName: newProject.projectName.trim(),
      location: newProject.location.trim() || 'Dhaka, Bangladesh',
      contractValue: contractVal,
      materialLandedCost: 0,
      laborCost: 0,
      transportCost: 0,
      otherCost: 0,
      totalProjectCost: 0,
      projectGrossProfit: contractVal,
      profitMarginPercent: 100,
      status: newProject.status,
      startDate: new Date().toISOString().split('T')[0],
      notes: newProject.notes,
      materialIssues: [],
      laborLogs: [],
      expenses: []
    };

    const updated = [createdPrj, ...projects];
    setProjects(updated);
    setSelectedProjectId(createdPrj.id);
    setIsNewProjectModalOpen(false);
    setNewProject({
      projectName: '',
      customerName: '',
      location: '',
      contractValue: 150000,
      status: 'INSTALLATION_IN_PROGRESS',
      notes: ''
    });
  };

  // Handle Issue Material
  const handleIssueMaterial = () => {
    if (!selectedProject || issueQty <= 0) return;
    const unitCost = Number(issueUnitCost) || 0;
    const addedCost = issueQty * unitCost;

    const newIssue: MaterialIssue = {
      id: `iss-${Date.now()}`,
      productName: issueProduct,
      quantity: issueQty,
      unitLandedCost: unitCost,
      totalCost: addedCost
    };

    const updatedMaterials = [...selectedProject.materialIssues, newIssue];
    const newMaterialCost = selectedProject.materialLandedCost + addedCost;
    const newTotalCost =
      newMaterialCost + selectedProject.laborCost + selectedProject.transportCost + selectedProject.otherCost;
    const newProfit = selectedProject.contractValue - newTotalCost;
    const newMargin = selectedProject.contractValue > 0 ? (newProfit / selectedProject.contractValue) * 100 : 0;

    const updatedPrj: ProjectRecord = {
      ...selectedProject,
      materialIssues: updatedMaterials,
      materialLandedCost: newMaterialCost,
      totalProjectCost: newTotalCost,
      projectGrossProfit: newProfit,
      profitMarginPercent: newMargin
    };

    setProjects(projects.map((p) => (p.id === updatedPrj.id ? updatedPrj : p)));
    setIsIssueMaterialOpen(false);
  };

  // Handle Log Labor
  const handleLogLabor = () => {
    if (!selectedProject || workDays <= 0) return;
    const addedLabor = workDays * dailyRate;

    const newLabor: LaborLog = {
      id: `lab-${Date.now()}`,
      technicianName: techName,
      workDays,
      dailyRate,
      overtimeHours: 0,
      totalLabor: addedLabor
    };

    const updatedLaborList = [...selectedProject.laborLogs, newLabor];
    const newLaborCost = selectedProject.laborCost + addedLabor;
    const newTotalCost =
      selectedProject.materialLandedCost + newLaborCost + selectedProject.transportCost + selectedProject.otherCost;
    const newProfit = selectedProject.contractValue - newTotalCost;
    const newMargin = selectedProject.contractValue > 0 ? (newProfit / selectedProject.contractValue) * 100 : 0;

    const updatedPrj: ProjectRecord = {
      ...selectedProject,
      laborLogs: updatedLaborList,
      laborCost: newLaborCost,
      totalProjectCost: newTotalCost,
      projectGrossProfit: newProfit,
      profitMarginPercent: newMargin
    };

    setProjects(projects.map((p) => (p.id === updatedPrj.id ? updatedPrj : p)));
    setIsLogLaborOpen(false);
  };

  // Handle Add Direct Expense
  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProject || expenseAmount <= 0) return;

    const newExp: ProjectExpense = {
      id: `exp-${Date.now()}`,
      category: expenseCategory,
      description: expenseDesc.trim() || `${expenseCategory} expense`,
      amount: expenseAmount,
      date: new Date().toISOString().split('T')[0]
    };

    const isTransport = expenseCategory === 'TRANSPORT';
    const newTransportCost = selectedProject.transportCost + (isTransport ? expenseAmount : 0);
    const newOtherCost = selectedProject.otherCost + (!isTransport ? expenseAmount : 0);

    const newTotalCost =
      selectedProject.materialLandedCost + selectedProject.laborCost + newTransportCost + newOtherCost;
    const newProfit = selectedProject.contractValue - newTotalCost;
    const newMargin = selectedProject.contractValue > 0 ? (newProfit / selectedProject.contractValue) * 100 : 0;

    const updatedPrj: ProjectRecord = {
      ...selectedProject,
      expenses: [...(selectedProject.expenses || []), newExp],
      transportCost: newTransportCost,
      otherCost: newOtherCost,
      totalProjectCost: newTotalCost,
      projectGrossProfit: newProfit,
      profitMarginPercent: newMargin
    };

    setProjects(projects.map((p) => (p.id === updatedPrj.id ? updatedPrj : p)));
    setIsAddExpenseOpen(false);
    setExpenseDesc('');
    setExpenseAmount(5000);
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl no-print">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <TrendingUp className="w-4 h-4" />
            </div>
            <h1 className="text-lg font-bold text-slate-100">
              Project Profit & Loss (P&L) Statement
            </h1>
          </div>
          <p className="text-xs text-slate-400">
            Real-time project cost tracking: Contract Value vs Materials (at landed cost), Technician Labor, and Site Expenses
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* View Toggle */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setViewMode('DASHBOARD')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                viewMode === 'DASHBOARD'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Dashboard View
            </button>
            <button
              onClick={() => setViewMode('MASTER_SHEET')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition flex items-center gap-1.5 ${
                viewMode === 'MASTER_SHEET'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Full P&L Sheet</span>
            </button>
          </div>

          {selectedProject && (
            <button
              onClick={() => setIsPnLSheetModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 font-semibold text-xs border border-slate-700 transition shadow-sm"
              title="View & Print Official Project P&L Sheet"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Project Sheet</span>
            </button>
          )}

          <button
            onClick={() => setIsNewProjectModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-lg shadow-blue-600/20 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>+ New Project</span>
          </button>
        </div>
      </div>

      {/* Financial KPI Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 no-print">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-md">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
            Total Projects Contract
          </span>
          <p className="text-xl font-black text-slate-100 font-mono mt-1">
            {formatBDT(financialSummary.totalContract)}
          </p>
          <span className="text-[11px] text-slate-500 mt-0.5 block">
            {projects.length} Registered Project Contracts
          </span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-md">
          <span className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider block">
            Materials Cost (Landed)
          </span>
          <p className="text-xl font-black text-purple-400 font-mono mt-1">
            {formatBDT(financialSummary.totalMaterial)}
          </p>
          <span className="text-[11px] text-slate-500 mt-0.5 block">
            Deducted at actual unit import landed cost
          </span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-md">
          <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">
            Labor, Transport & Site
          </span>
          <p className="text-xl font-black text-amber-400 font-mono mt-1">
            {formatBDT(financialSummary.totalLabor + financialSummary.totalTransport + financialSummary.totalOther)}
          </p>
          <span className="text-[11px] text-slate-500 mt-0.5 block">
            Technician days, transit, tools & site misc
          </span>
        </div>

        <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
              Total Net Profit (লাভ)
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
              {financialSummary.avgMargin.toFixed(1)}% Margin
            </span>
          </div>
          <p className="text-2xl font-black text-emerald-400 font-mono mt-1">
            {formatBDT(financialSummary.totalProfit)}
          </p>
          <span className="text-[11px] text-emerald-300/70 mt-0.5 block">
            Revenue minus all project expenses
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-slate-900 border border-slate-800 rounded-xl no-print">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Project Code, Name, Client, Location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
          {['ALL', 'INSTALLATION_IN_PROGRESS', 'COMPLETED', 'PLANNING'].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                filterStatus === st
                  ? 'bg-blue-600 text-white shadow'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {st === 'INSTALLATION_IN_PROGRESS' ? 'IN PROGRESS' : st}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================
          MODE 1: MASTER P&L SHEET TABLE (Clear Comparison Sheet)
          ======================================================== */}
      {viewMode === 'MASTER_SHEET' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl space-y-4 p-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                <span>All Projects Master Profit & Loss Comparison Sheet</span>
              </h3>
              <p className="text-[11px] text-slate-400">
                Detailed financial audit of revenue, cost breakdown (materials, labor, transport), and net profit per project.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300 min-w-[900px] border-collapse">
              <thead>
                <tr className="bg-slate-950 text-slate-400 uppercase text-[10px] font-bold tracking-wider border-b border-slate-800">
                  <th className="py-3 px-3">Project / Client</th>
                  <th className="py-3 px-3 text-right">Contract Value</th>
                  <th className="py-3 px-3 text-right text-purple-400">Material Cost</th>
                  <th className="py-3 px-3 text-right text-blue-400">Labor Cost</th>
                  <th className="py-3 px-3 text-right text-amber-400">Transport & Misc</th>
                  <th className="py-3 px-3 text-right text-rose-400">Total Cost</th>
                  <th className="py-3 px-3 text-right text-emerald-400">Net Profit (লাভ)</th>
                  <th className="py-3 px-3 text-center">Margin %</th>
                  <th className="py-3 px-3 text-center">Status</th>
                  <th className="py-3 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {filteredProjects.map((prj) => {
                  const isProfitable = prj.projectGrossProfit >= 0;
                  return (
                    <tr
                      key={prj.id}
                      onClick={() => setSelectedProjectId(prj.id)}
                      className={`hover:bg-slate-800/50 transition cursor-pointer ${
                        selectedProjectId === prj.id ? 'bg-slate-800/30' : ''
                      }`}
                    >
                      <td className="py-3 px-3">
                        <span className="font-mono text-[10px] font-bold text-blue-400 block">{prj.projectCode}</span>
                        <span className="font-bold text-slate-100 text-xs block leading-tight">{prj.projectName}</span>
                        <span className="text-[11px] text-slate-400">{prj.customerName}</span>
                      </td>
                      <td className="py-3 px-3 text-right font-mono font-bold text-slate-100 text-xs">
                        {formatBDT(prj.contractValue)}
                      </td>
                      <td className="py-3 px-3 text-right font-mono text-purple-300 text-xs">
                        {formatBDT(prj.materialLandedCost)}
                      </td>
                      <td className="py-3 px-3 text-right font-mono text-blue-300 text-xs">
                        {formatBDT(prj.laborCost)}
                      </td>
                      <td className="py-3 px-3 text-right font-mono text-amber-300 text-xs">
                        {formatBDT(prj.transportCost + prj.otherCost)}
                      </td>
                      <td className="py-3 px-3 text-right font-mono font-bold text-rose-300 text-xs">
                        {formatBDT(prj.totalProjectCost)}
                      </td>
                      <td className="py-3 px-3 text-right font-mono font-black text-sm text-emerald-400">
                        {isProfitable ? `+${formatBDT(prj.projectGrossProfit)}` : `-${formatBDT(Math.abs(prj.projectGrossProfit))}`}
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded font-mono font-bold text-[11px] ${
                          prj.profitMarginPercent >= 40
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : prj.profitMarginPercent >= 20
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-rose-500/20 text-rose-300'
                        }`}>
                          {prj.profitMarginPercent.toFixed(1)}%
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center">
                        <Badge
                          variant={
                            prj.status === 'COMPLETED'
                              ? 'success'
                              : prj.status === 'INSTALLATION_IN_PROGRESS'
                              ? 'info'
                              : 'warning'
                          }
                        >
                          {prj.status === 'INSTALLATION_IN_PROGRESS' ? 'IN PROGRESS' : prj.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProjectId(prj.id);
                            setIsPnLSheetModalOpen(true);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1 ml-auto"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>P&L Sheet</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="bg-slate-950/90 font-bold border-t-2 border-slate-700 text-slate-100">
                  <td className="py-3.5 px-3 uppercase text-xs">Total Aggregate All Projects:</td>
                  <td className="py-3.5 px-3 text-right font-mono text-sm">{formatBDT(financialSummary.totalContract)}</td>
                  <td className="py-3.5 px-3 text-right font-mono text-purple-400">{formatBDT(financialSummary.totalMaterial)}</td>
                  <td className="py-3.5 px-3 text-right font-mono text-blue-400">{formatBDT(financialSummary.totalLabor)}</td>
                  <td className="py-3.5 px-3 text-right font-mono text-amber-400">{formatBDT(financialSummary.totalTransport + financialSummary.totalOther)}</td>
                  <td className="py-3.5 px-3 text-right font-mono text-rose-400">{formatBDT(financialSummary.totalCost)}</td>
                  <td className="py-3.5 px-3 text-right font-mono text-emerald-400 text-base font-black">+{formatBDT(financialSummary.totalProfit)}</td>
                  <td className="py-3.5 px-3 text-center font-mono text-emerald-400">{financialSummary.avgMargin.toFixed(1)}%</td>
                  <td colSpan={2}></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================
          MODE 2: DASHBOARD VIEW (Cards + Detailed Selected Project)
          ======================================================== */}
      {viewMode === 'DASHBOARD' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 no-print">
          {/* Left Column: Project Cards List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span>Select Project to Audit ({filteredProjects.length})</span>
            </div>

            {filteredProjects.map((prj) => {
              const isSelected = selectedProject?.id === prj.id;
              const isProfitable = prj.projectGrossProfit >= 0;

              return (
                <div
                  key={prj.id}
                  onClick={() => setSelectedProjectId(prj.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition space-y-3 ${
                    isSelected
                      ? 'bg-slate-900 border-blue-500 shadow-lg shadow-blue-500/10'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-mono text-[10px] font-bold text-blue-400 block">{prj.projectCode}</span>
                      <h4 className="text-xs font-bold text-slate-100 mt-0.5 leading-snug">{prj.projectName}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">{prj.customerName}</p>
                    </div>
                    <Badge
                      variant={
                        prj.status === 'COMPLETED'
                          ? 'success'
                          : prj.status === 'INSTALLATION_IN_PROGRESS'
                          ? 'info'
                          : 'warning'
                      }
                    >
                      {prj.status === 'INSTALLATION_IN_PROGRESS' ? 'IN PROGRESS' : prj.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-500 block">Contract</span>
                      <strong className="text-slate-200 font-mono text-[11px]">{formatBDT(prj.contractValue)}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">Total Cost</span>
                      <strong className="text-rose-400 font-mono text-[11px]">{formatBDT(prj.totalProjectCost)}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-emerald-400 font-bold block">Profit (লাভ)</span>
                      <strong className="text-emerald-400 font-mono text-[11px]">
                        {isProfitable ? `+${formatBDT(prj.projectGrossProfit)}` : `-${formatBDT(Math.abs(prj.projectGrossProfit))}`}
                      </strong>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Selected Project Comprehensive Breakdown */}
          {selectedProject ? (
            <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-6">
              {/* Project Title Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                      {selectedProject.projectCode}
                    </span>
                    <Badge
                      variant={
                        selectedProject.status === 'COMPLETED'
                          ? 'success'
                          : selectedProject.status === 'INSTALLATION_IN_PROGRESS'
                          ? 'info'
                          : 'warning'
                      }
                    >
                      {selectedProject.status}
                    </Badge>
                  </div>
                  <h3 className="text-base font-bold text-slate-100 mt-1">{selectedProject.projectName}</h3>
                  <p className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                    <span>Client: <strong className="text-slate-200">{selectedProject.customerName}</strong></span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-slate-500" /> {selectedProject.location}</span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setIsIssueMaterialOpen(true)}
                    className="px-3 py-1.5 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 text-xs font-semibold flex items-center gap-1.5 transition"
                  >
                    <PackageMinus className="w-3.5 h-3.5" />
                    <span>Issue Material</span>
                  </button>
                  <button
                    onClick={() => setIsLogLaborOpen(true)}
                    className="px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-semibold flex items-center gap-1.5 transition"
                  >
                    <HardHat className="w-3.5 h-3.5" />
                    <span>Log Labor</span>
                  </button>
                  <button
                    onClick={() => setIsAddExpenseOpen(true)}
                    className="px-3 py-1.5 rounded-lg bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center gap-1.5 transition"
                  >
                    <Truck className="w-3.5 h-3.5" />
                    <span>+ Add Expense</span>
                  </button>
                  <button
                    onClick={() => setIsPnLSheetModalOpen(true)}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>P&L Sheet</span>
                  </button>
                </div>
              </div>

              {/* Profitability Meter Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Contract Value</span>
                  <span className="text-base font-bold text-slate-100 font-mono">
                    {formatBDT(selectedProject.contractValue)}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-purple-400 uppercase font-semibold block">Materials (Landed)</span>
                  <span className="text-base font-bold text-purple-400 font-mono">
                    {formatBDT(selectedProject.materialLandedCost)}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-amber-400 uppercase font-semibold block">Labor & Transit</span>
                  <span className="text-base font-bold text-amber-400 font-mono">
                    {formatBDT(selectedProject.laborCost + selectedProject.transportCost + selectedProject.otherCost)}
                  </span>
                </div>
                <div className="bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-500/20">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-emerald-400 uppercase font-bold block">Net Profit</span>
                    <span className="text-[10px] font-bold text-emerald-300">
                      {selectedProject.profitMarginPercent.toFixed(1)}%
                    </span>
                  </div>
                  <span className="text-lg font-black text-emerald-400 font-mono">
                    +{formatBDT(selectedProject.projectGrossProfit)}
                  </span>
                </div>
              </div>

              {/* SECTION 1: Materials Consumed */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
                    <PackageMinus className="w-3.5 h-3.5 text-purple-400" />
                    <span>1. Consumed Materials (Warehouse Stock Drawn at Landed Cost)</span>
                  </h4>
                  <span className="text-xs font-mono font-bold text-purple-400">
                    Total: {formatBDT(selectedProject.materialLandedCost)}
                  </span>
                </div>
                <div className="border border-slate-800 rounded-xl overflow-x-auto bg-slate-950">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900 text-slate-400 text-[10px] uppercase font-bold">
                      <tr>
                        <th className="py-2.5 px-3">Product Name</th>
                        <th className="py-2.5 px-3 text-center">Qty</th>
                        <th className="py-2.5 px-3 text-right">Unit Landed Cost</th>
                        <th className="py-2.5 px-3 text-right">Total Charged</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 text-slate-200">
                      {selectedProject.materialIssues.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="py-3 px-3 text-center text-slate-500 italic">
                            No materials issued yet. Click &ldquo;Issue Material&rdquo; above.
                          </td>
                        </tr>
                      ) : (
                        selectedProject.materialIssues.map((m) => (
                          <tr key={m.id} className="hover:bg-slate-900/40">
                            <td className="py-2 px-3 font-semibold">{m.productName}</td>
                            <td className="py-2 px-3 text-center font-bold text-purple-400">{m.quantity} pcs</td>
                            <td className="py-2 px-3 text-right text-slate-400 font-mono">{formatBDT(m.unitLandedCost)}</td>
                            <td className="py-2 px-3 text-right font-bold text-slate-100 font-mono">{formatBDT(m.totalCost)}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SECTION 2: Technician Labor */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
                    <HardHat className="w-3.5 h-3.5 text-blue-400" />
                    <span>2. Technician Labor & Work Days</span>
                  </h4>
                  <span className="text-xs font-mono font-bold text-blue-400">
                    Total: {formatBDT(selectedProject.laborCost)}
                  </span>
                </div>
                <div className="border border-slate-800 rounded-xl overflow-x-auto bg-slate-950">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900 text-slate-400 text-[10px] uppercase font-bold">
                      <tr>
                        <th className="py-2.5 px-3">Technician</th>
                        <th className="py-2.5 px-3 text-center">Work Days</th>
                        <th className="py-2.5 px-3 text-right">Daily Rate</th>
                        <th className="py-2.5 px-3 text-right">Total Labor</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 text-slate-200">
                      {selectedProject.laborLogs.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="py-3 px-3 text-center text-slate-500 italic">
                            No technician work days logged yet. Click &ldquo;Log Labor&rdquo; above.
                          </td>
                        </tr>
                      ) : (
                        selectedProject.laborLogs.map((l) => (
                          <tr key={l.id} className="hover:bg-slate-900/40">
                            <td className="py-2 px-3 font-semibold">{l.technicianName}</td>
                            <td className="py-2 px-3 text-center font-bold text-blue-400">{l.workDays} days</td>
                            <td className="py-2 px-3 text-right text-slate-400 font-mono">{formatBDT(l.dailyRate)}</td>
                            <td className="py-2 px-3 text-right font-bold text-slate-100 font-mono">{formatBDT(l.totalLabor)}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SECTION 3: Transport & Site Expenses */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-amber-400" />
                    <span>3. Transport, Tools & Site Expenses</span>
                  </h4>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    Total: {formatBDT(selectedProject.transportCost + selectedProject.otherCost)}
                  </span>
                </div>
                <div className="border border-slate-800 rounded-xl overflow-x-auto bg-slate-950">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900 text-slate-400 text-[10px] uppercase font-bold">
                      <tr>
                        <th className="py-2.5 px-3">Category</th>
                        <th className="py-2.5 px-3">Description</th>
                        <th className="py-2.5 px-3">Date</th>
                        <th className="py-2.5 px-3 text-right">Amount (৳)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 text-slate-200">
                      {(!selectedProject.expenses || selectedProject.expenses.length === 0) ? (
                        <tr>
                          <td colSpan={4} className="py-3 px-3 text-center text-slate-500 italic">
                            No site expenses recorded yet. Click &ldquo;+ Add Expense&rdquo; above.
                          </td>
                        </tr>
                      ) : (
                        selectedProject.expenses.map((exp) => (
                          <tr key={exp.id} className="hover:bg-slate-900/40">
                            <td className="py-2 px-3 font-semibold text-amber-400 text-[11px]">{exp.category}</td>
                            <td className="py-2 px-3 text-slate-300">{exp.description}</td>
                            <td className="py-2 px-3 text-slate-500 text-[11px]">{exp.date}</td>
                            <td className="py-2 px-3 text-right font-bold text-slate-100 font-mono">{formatBDT(exp.amount)}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="lg:col-span-2 p-12 text-center text-slate-500 border border-slate-800 rounded-2xl">
              Select a project from the left or create a new project.
            </div>
          )}
        </div>
      )}

      {/* ========================================================
          MODAL: CREATE NEW PROJECT
          ======================================================== */}
      {isNewProjectModalOpen && (
        <Modal
          isOpen={isNewProjectModalOpen}
          onClose={() => setIsNewProjectModalOpen(false)}
          title="Create New Installation / Supply Project"
          size="lg"
        >
          <form onSubmit={handleCreateProject} className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Project Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Narshingdi HUB Relocation & CCTV Setup"
                  value={newProject.projectName}
                  onChange={(e) => setNewProject({ ...newProject, projectName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Customer / Client Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Daraz Bangladesh Limited"
                  value={newProject.customerName}
                  onChange={(e) => setNewProject({ ...newProject, customerName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Project / Delivery Location</label>
                <input
                  type="text"
                  placeholder="e.g. Narshingdi HUB / Motijheel, Dhaka"
                  value={newProject.location}
                  onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Contract / Invoiced Value (৳) *</label>
                <input
                  type="number"
                  required
                  min="0"
                  step="any"
                  value={newProject.contractValue}
                  onChange={(e) => setNewProject({ ...newProject, contractValue: Number(e.target.value) })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono font-bold focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Initial Status</label>
                <select
                  value={newProject.status}
                  onChange={(e) => setNewProject({ ...newProject, status: e.target.value as any })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                >
                  <option value="INSTALLATION_IN_PROGRESS">Installation In Progress</option>
                  <option value="PLANNING">Planning / Tender Approved</option>
                  <option value="COMPLETED">Completed</option>
                  <option value="ON_HOLD">On Hold</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Scope / Notes</label>
                <input
                  type="text"
                  placeholder="e.g. 10 CCTV camera installation with rack shifting"
                  value={newProject.notes}
                  onChange={(e) => setNewProject({ ...newProject, notes: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsNewProjectModalOpen(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg shadow-blue-600/30 transition"
              >
                Create Project
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================
          MODAL: ADD DIRECT EXPENSE (Transport, Tools, Misc)
          ======================================================== */}
      {isAddExpenseOpen && selectedProject && (
        <Modal
          isOpen={isAddExpenseOpen}
          onClose={() => setIsAddExpenseOpen(false)}
          title={`Add Direct Expense: ${selectedProject.projectName}`}
        >
          <form onSubmit={handleAddExpense} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Expense Category</label>
              <select
                value={expenseCategory}
                onChange={(e) => setExpenseCategory(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100"
              >
                <option value="TRANSPORT">Transport & Vehicle Transit (Dhaka & Inter-district)</option>
                <option value="TOOLS_EQUIPMENT">Tools, Equipment & Fastener Hardware</option>
                <option value="MEALS_CONVEYANCE">Site Staff Conveyance & Lunch</option>
                <option value="SUBCONTRACTOR">Third-party Subcontractor / Electrician</option>
                <option value="MISCELLANEOUS">Miscellaneous Site Expense</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Description / Paid To *</label>
              <input
                type="text"
                required
                placeholder="e.g. Pickup van transport from Tejgaon to Narshingdi"
                value={expenseDesc}
                onChange={(e) => setExpenseDesc(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Expense Amount (৳) *</label>
              <input
                type="number"
                required
                min="0"
                step="any"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono font-bold focus:border-blue-500 focus:outline-none text-sm"
              />
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAddExpenseOpen(false)}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg shadow transition"
              >
                Record Expense
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ========================================================
          MODAL: ISSUE MATERIAL
          ======================================================== */}
      {isIssueMaterialOpen && selectedProject && (
        <Modal
          isOpen={isIssueMaterialOpen}
          onClose={() => setIsIssueMaterialOpen(false)}
          title={`Issue Materials to Project: ${selectedProject.projectName}`}
        >
          <div className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Select Product / Cable / Hardware</label>
              <select
                value={issueProduct}
                onChange={(e) => {
                  setIssueProduct(e.target.value);
                  if (e.target.value.includes('Cable')) setIssueUnitCost(14500);
                  else if (e.target.value.includes('Camera')) setIssueUnitCost(9000);
                  else if (e.target.value.includes('NVR')) setIssueUnitCost(35000);
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100"
              >
                <option value="CCTV Camera (4MP Outdoor IR Dome IP Camera)">CCTV Camera (4MP Outdoor IR Dome IP Camera)</option>
                <option value="Cat6 UTP Pure Copper Industrial Cable (305m)">Cat6 UTP Pure Copper Industrial Cable (305m)</option>
                <option value="Hikvision 16-Channel 4K NVR with 2-SATA">Hikvision 16-Channel 4K NVR with 2-SATA</option>
                <option value="Cisco 24-Port Gigabit Managed PoE+ Switch">Cisco 24-Port Gigabit Managed PoE+ Switch</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Quantity (pcs/boxes) *</label>
                <input
                  type="number"
                  min="1"
                  value={issueQty}
                  onChange={(e) => setIssueQty(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-100 font-bold"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Unit Landed Cost (৳) *</label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={issueUnitCost}
                  onChange={(e) => setIssueUnitCost(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-100 font-mono"
                />
              </div>
            </div>

            <div className="p-3 bg-purple-950/40 border border-purple-800/60 rounded-xl text-slate-300 text-[11px] leading-relaxed">
              ⚡ <strong>Automatic Landed Cost Accounting:</strong> Total of <strong>{formatBDT(issueQty * issueUnitCost)}</strong> will be charged against project revenue to compute net profit.
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsIssueMaterialOpen(false)}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleIssueMaterial}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg shadow transition"
              >
                Confirm Material Issue
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* ========================================================
          MODAL: LOG LABOR
          ======================================================== */}
      {isLogLaborOpen && selectedProject && (
        <Modal
          isOpen={isLogLaborOpen}
          onClose={() => setIsLogLaborOpen(false)}
          title={`Log Technician Work Days: ${selectedProject.projectName}`}
        >
          <div className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Technician / Lead Engineer</label>
              <input
                type="text"
                value={techName}
                onChange={(e) => setTechName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Work Days</label>
                <input
                  type="number"
                  min="1"
                  value={workDays}
                  onChange={(e) => setWorkDays(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-bold"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Daily Rate (৳)</label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={dailyRate}
                  onChange={(e) => setDailyRate(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono"
                />
              </div>
            </div>

            <div className="p-3 bg-blue-950/40 border border-blue-800/60 rounded-xl text-slate-300 text-[11px]">
              Total labor cost of <strong>{formatBDT(workDays * dailyRate)}</strong> will be charged to project expenses.
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsLogLaborOpen(false)}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleLogLabor}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow transition"
              >
                Record Labor
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* ========================================================
          MODAL: FORMAL PRINTABLE PROJECT P&L STATEMENT SHEET
          ======================================================== */}
      {isPnLSheetModalOpen && selectedProject && (
        <Modal
          isOpen={isPnLSheetModalOpen}
          onClose={() => setIsPnLSheetModalOpen(false)}
          title={`Project P&L Statement Sheet - ${selectedProject.projectCode}`}
          size="xl"
        >
          <div className="space-y-4">
            {/* Sheet Print Controls */}
            <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-3 rounded-xl no-print">
              <span className="text-xs text-slate-300">
                Print or export formal Project Profit & Loss Audit Statement for accounting & management review.
              </span>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold shadow transition"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Statement Sheet (A4)</span>
              </button>
            </div>

            {/* A4 Printable White Sheet */}
            <div className="overflow-x-auto flex justify-center pb-4">
              <div
                id="printable-project-sheet"
                style={{
                  width: '210mm',
                  minHeight: '270mm',
                  boxSizing: 'border-box',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  padding: '16mm 18mm',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif'
                }}
                className="shadow-2xl rounded-sm printable-area print:shadow-none print:w-full print:p-0 print:m-0"
              >
                {/* 1. Brand Header */}
                <table style={{ width: '100%', borderCollapse: 'collapse', borderBottom: '2px solid #0f172a', paddingBottom: '8px', marginBottom: '12px' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '60%', verticalAlign: 'middle' }}>
                        <h1 style={{ fontSize: '24px', fontWeight: 900, color: '#008fd5', margin: 0, lineHeight: 1 }}>
                          Globo Tech
                        </h1>
                        <p style={{ fontSize: '11px', color: '#334155', fontWeight: 600, margin: '2px 0 0 0' }}>
                          Enterprise IT, CCTV & Networking Solutions
                        </p>
                        <p style={{ fontSize: '9.5px', color: '#64748b', margin: '2px 0 0 0' }}>
                          Rahman Chamber (2nd Floor), 12/13 Motijheel C/A, Dhaka-1000 &bull; Phone: +88 01622-152133
                        </p>
                      </td>
                      <td style={{ width: '40%', textAlign: 'right', verticalAlign: 'middle' }}>
                        <div style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '6px', textAlign: 'right' }}>
                          <span style={{ fontSize: '12px', fontWeight: 900, color: '#0f172a', display: 'block', textTransform: 'uppercase' }}>
                            PROJECT P&L STATEMENT
                          </span>
                          <span style={{ fontSize: '10px', color: '#475569', fontFamily: 'monospace' }}>
                            Ref: {selectedProject.projectCode}
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* 2. Project Metadata */}
                <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', marginBottom: '14px', fontSize: '11px' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '50%', padding: '8px 12px', borderRight: '1px solid #e2e8f0', verticalAlign: 'top' }}>
                        <div style={{ fontSize: '9px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Project Name & Location:</div>
                        <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>{selectedProject.projectName}</div>
                        <div style={{ color: '#475569', marginTop: '2px' }}>{selectedProject.location}</div>
                      </td>
                      <td style={{ width: '50%', padding: '8px 12px', verticalAlign: 'top' }}>
                        <div style={{ fontSize: '9px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Client & Contract Details:</div>
                        <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>{selectedProject.customerName}</div>
                        <div style={{ color: '#0f172a', marginTop: '2px' }}>
                          Contract Value: <strong style={{ fontFamily: 'monospace', fontSize: '13px' }}>{formatBDT(selectedProject.contractValue)}</strong>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* 3. Materials Landed Cost Table */}
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', marginBottom: '4px' }}>
                    1. Warehouse Materials Consumed (Landed Import Cost)
                  </div>
                  <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #000', fontSize: '10px' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f1f5f9' }}>
                        <th style={{ border: '1px solid #000', padding: '4px', textAlign: 'center', width: '30px' }}>Sl</th>
                        <th style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'left' }}>Product Name</th>
                        <th style={{ border: '1px solid #000', padding: '4px', textAlign: 'center', width: '60px' }}>Qty</th>
                        <th style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'right', width: '100px' }}>Unit Landed Cost</th>
                        <th style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'right', width: '110px' }}>Total Cost (৳)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedProject.materialIssues.map((m, idx) => (
                        <tr key={m.id}>
                          <td style={{ border: '1px solid #000', padding: '4px', textAlign: 'center' }}>{idx + 1}</td>
                          <td style={{ border: '1px solid #000', padding: '4px 6px', fontWeight: 600 }}>{m.productName}</td>
                          <td style={{ border: '1px solid #000', padding: '4px', textAlign: 'center', fontWeight: 'bold' }}>{m.quantity}</td>
                          <td style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'right', fontFamily: 'monospace' }}>{formatBDT(m.unitLandedCost)}</td>
                          <td style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'right', fontFamily: 'monospace', fontWeight: 'bold' }}>{formatBDT(m.totalCost)}</td>
                        </tr>
                      ))}
                      <tr style={{ backgroundColor: '#f8fafc', fontWeight: 'bold' }}>
                        <td colSpan={4} style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'right' }}>Subtotal Materials Cost:</td>
                        <td style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'right', fontFamily: 'monospace' }}>{formatBDT(selectedProject.materialLandedCost)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 4. Labor Breakdown Table */}
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', marginBottom: '4px' }}>
                    2. Technician & Engineering Labor Costs
                  </div>
                  <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #000', fontSize: '10px' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f1f5f9' }}>
                        <th style={{ border: '1px solid #000', padding: '4px', textAlign: 'center', width: '30px' }}>Sl</th>
                        <th style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'left' }}>Technician / Engineer</th>
                        <th style={{ border: '1px solid #000', padding: '4px', textAlign: 'center', width: '60px' }}>Work Days</th>
                        <th style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'right', width: '100px' }}>Daily Rate (৳)</th>
                        <th style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'right', width: '110px' }}>Total Labor (৳)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedProject.laborLogs.map((l, idx) => (
                        <tr key={l.id}>
                          <td style={{ border: '1px solid #000', padding: '4px', textAlign: 'center' }}>{idx + 1}</td>
                          <td style={{ border: '1px solid #000', padding: '4px 6px', fontWeight: 600 }}>{l.technicianName}</td>
                          <td style={{ border: '1px solid #000', padding: '4px', textAlign: 'center', fontWeight: 'bold' }}>{l.workDays}</td>
                          <td style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'right', fontFamily: 'monospace' }}>{formatBDT(l.dailyRate)}</td>
                          <td style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'right', fontFamily: 'monospace', fontWeight: 'bold' }}>{formatBDT(l.totalLabor)}</td>
                        </tr>
                      ))}
                      <tr style={{ backgroundColor: '#f8fafc', fontWeight: 'bold' }}>
                        <td colSpan={4} style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'right' }}>Subtotal Labor Cost:</td>
                        <td style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'right', fontFamily: 'monospace' }}>{formatBDT(selectedProject.laborCost)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 5. Transport & Site Expenses Table */}
                <div style={{ marginBottom: '14px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', marginBottom: '4px' }}>
                    3. Transport, Tools & Site Expenses
                  </div>
                  <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #000', fontSize: '10px' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f1f5f9' }}>
                        <th style={{ border: '1px solid #000', padding: '4px', textAlign: 'center', width: '30px' }}>Sl</th>
                        <th style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'left', width: '110px' }}>Category</th>
                        <th style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'left' }}>Description</th>
                        <th style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'right', width: '110px' }}>Amount (৳)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(selectedProject.expenses || []).map((exp, idx) => (
                        <tr key={exp.id}>
                          <td style={{ border: '1px solid #000', padding: '4px', textAlign: 'center' }}>{idx + 1}</td>
                          <td style={{ border: '1px solid #000', padding: '4px 6px', fontWeight: 600 }}>{exp.category}</td>
                          <td style={{ border: '1px solid #000', padding: '4px 6px' }}>{exp.description}</td>
                          <td style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'right', fontFamily: 'monospace', fontWeight: 'bold' }}>{formatBDT(exp.amount)}</td>
                        </tr>
                      ))}
                      <tr style={{ backgroundColor: '#f8fafc', fontWeight: 'bold' }}>
                        <td colSpan={3} style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'right' }}>Subtotal Transport & Misc:</td>
                        <td style={{ border: '1px solid #000', padding: '4px 6px', textAlign: 'right', fontFamily: 'monospace' }}>{formatBDT(selectedProject.transportCost + selectedProject.otherCost)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 6. Comprehensive Financial Summary Box */}
                <table style={{ width: '100%', borderCollapse: 'collapse', border: '2px solid #0f172a', marginBottom: '24px' }}>
                  <tbody>
                    <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #cbd5e1' }}>
                      <td style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 700 }}>Gross Contract Revenue:</td>
                      <td style={{ padding: '6px 12px', textAlign: 'right', fontSize: '13px', fontWeight: 800, fontFamily: 'monospace' }}>{formatBDT(selectedProject.contractValue)}</td>
                    </tr>
                    <tr style={{ fontSize: '11px', color: '#475569' }}>
                      <td style={{ padding: '4px 12px' }}>Less: Material Costs (At Landed Cost)</td>
                      <td style={{ padding: '4px 12px', textAlign: 'right', fontFamily: 'monospace' }}>- {formatBDT(selectedProject.materialLandedCost)}</td>
                    </tr>
                    <tr style={{ fontSize: '11px', color: '#475569' }}>
                      <td style={{ padding: '4px 12px' }}>Less: Direct Technician Labor</td>
                      <td style={{ padding: '4px 12px', textAlign: 'right', fontFamily: 'monospace' }}>- {formatBDT(selectedProject.laborCost)}</td>
                    </tr>
                    <tr style={{ fontSize: '11px', color: '#475569', borderBottom: '1px solid #cbd5e1' }}>
                      <td style={{ padding: '4px 12px' }}>Less: Transport, Site Tools & Misc Expenses</td>
                      <td style={{ padding: '4px 12px', textAlign: 'right', fontFamily: 'monospace' }}>- {formatBDT(selectedProject.transportCost + selectedProject.otherCost)}</td>
                    </tr>
                    <tr style={{ backgroundColor: '#f1f5f9', borderBottom: '2px solid #0f172a', fontSize: '11.5px', fontWeight: 700 }}>
                      <td style={{ padding: '5px 12px' }}>Total Direct Project Costs:</td>
                      <td style={{ padding: '5px 12px', textAlign: 'right', fontFamily: 'monospace', color: '#b91c1c' }}>{formatBDT(selectedProject.totalProjectCost)}</td>
                    </tr>
                    <tr style={{ backgroundColor: '#ecfdf5', fontSize: '14px', fontWeight: 900 }}>
                      <td style={{ padding: '8px 12px', color: '#065f46' }}>
                        NET PROJECT PROFIT (প্রজেক্ট লাভ):
                        <span style={{ fontSize: '11px', fontWeight: 700, marginLeft: '8px', color: '#047857' }}>
                          ({selectedProject.profitMarginPercent.toFixed(1)}% Profit Margin)
                        </span>
                      </td>
                      <td style={{ padding: '8px 12px', textAlign: 'right', color: '#065f46', fontFamily: 'monospace', fontSize: '16px' }}>
                        +{formatBDT(selectedProject.projectGrossProfit)}
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* 7. Sign-off Lines */}
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '30px' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '50%', textAlign: 'center', verticalAlign: 'bottom' }}>
                        <div style={{ width: '180px', borderBottom: '1.5px solid #000', margin: '0 auto 4px auto' }}></div>
                        <div style={{ fontSize: '11px', fontWeight: 700 }}>Project Engineer / Lead</div>
                        <div style={{ fontSize: '9.5px', color: '#64748b' }}>Globo Tech</div>
                      </td>
                      <td style={{ width: '50%', textAlign: 'center', verticalAlign: 'bottom' }}>
                        <div style={{ width: '180px', borderBottom: '1.5px solid #000', margin: '0 auto 4px auto' }}></div>
                        <div style={{ fontSize: '11px', fontWeight: 700 }}>Managing Director / Finance Approval</div>
                        <div style={{ fontSize: '9.5px', color: '#64748b' }}>Globo Tech</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
