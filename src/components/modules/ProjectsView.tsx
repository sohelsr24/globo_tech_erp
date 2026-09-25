'use client';

import React, { useState } from 'react';
import { Wrench, Plus, CheckCircle2, UserCheck, HardHat, TrendingUp, PackageMinus } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Formatters } from '@/lib/formatters';

interface ProjectRecord {
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
  status: string;
  materialIssues: {
    id: string;
    productName: string;
    quantity: number;
    unitLandedCost: number;
    totalCost: number;
  }[];
  laborLogs: {
    id: string;
    technicianName: string;
    workDays: number;
    dailyRate: number;
    overtimeHours: number;
    totalLabor: number;
  }[];
}

const INITIAL_PROJECTS: ProjectRecord[] = [
  {
    id: 'prj-01',
    projectCode: 'PRJ-2026-001',
    customerName: 'ABC Bank PLC',
    projectName: 'ABC Bank Head Office CCTV & Security Modernization',
    location: 'Motijheel Commercial Area, Dhaka',
    contractValue: 450000,
    materialLandedCost: 100000, // 10 pcs CCTV Cameras @ 10,000 BDT landed cost
    laborCost: 28000,
    transportCost: 12000,
    otherCost: 5000,
    totalProjectCost: 145000,
    projectGrossProfit: 305000,
    status: 'INSTALLATION_IN_PROGRESS',
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
    ]
  }
];

export function ProjectsView() {
  const [projects, setProjects] = useState<ProjectRecord[]>(INITIAL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<ProjectRecord | null>(projects[0]);
  const [isIssueMaterialOpen, setIsIssueMaterialOpen] = useState(false);
  const [isLogLaborOpen, setIsLogLaborOpen] = useState(false);

  // Material Issue Form
  const [issueQty, setIssueQty] = useState(5);
  const [issueProduct, setIssueProduct] = useState('CCTV Camera (4MP Outdoor IR Dome IP Camera)');

  // Labor Form
  const [techName, setTechName] = useState('Md. Al-Amin');
  const [workDays, setWorkDays] = useState(3);
  const [dailyRate, setDailyRate] = useState(1500);

  const handleIssueMaterial = () => {
    if (!selectedProject || issueQty <= 0) return;
    const unitLandedCost = 10000;
    const addedCost = issueQty * unitLandedCost;

    const newIssue = {
      id: `iss-${Date.now()}`,
      productName: issueProduct,
      quantity: issueQty,
      unitLandedCost,
      totalCost: addedCost
    };

    const updatedMaterials = [...selectedProject.materialIssues, newIssue];
    const newMaterialCost = selectedProject.materialLandedCost + addedCost;
    const newTotalCost =
      newMaterialCost + selectedProject.laborCost + selectedProject.transportCost + selectedProject.otherCost;
    const newProfit = selectedProject.contractValue - newTotalCost;

    const updatedPrj = {
      ...selectedProject,
      materialIssues: updatedMaterials,
      materialLandedCost: newMaterialCost,
      totalProjectCost: newTotalCost,
      projectGrossProfit: newProfit
    };

    setSelectedProject(updatedPrj);
    setProjects(projects.map((p) => (p.id === updatedPrj.id ? updatedPrj : p)));
    setIsIssueMaterialOpen(false);
  };

  const handleLogLabor = () => {
    if (!selectedProject || workDays <= 0) return;
    const addedLabor = workDays * dailyRate;

    const newLabor = {
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

    const updatedPrj = {
      ...selectedProject,
      laborLogs: updatedLaborList,
      laborCost: newLaborCost,
      totalProjectCost: newTotalCost,
      projectGrossProfit: newProfit
    };

    setSelectedProject(updatedPrj);
    setProjects(projects.map((p) => (p.id === updatedPrj.id ? updatedPrj : p)));
    setIsLogLaborOpen(false);
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 border border-slate-800 rounded-xl p-3.5">
        <div>
          <h2 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <Wrench className="w-4 h-4 text-purple-400" />
            <span>Corporate Installation & Service Projects</span>
          </h2>
          <p className="text-xs text-slate-400">
            Track material draw from warehouse, technician labor costs, and real-time project gross profit.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="purple">Active Projects: {projects.length}</Badge>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project Card List */}
        <div className="space-y-4">
          {projects.map((prj) => (
            <div
              key={prj.id}
              onClick={() => setSelectedProject(prj)}
              className={`p-4 rounded-xl border cursor-pointer transition space-y-3 ${
                selectedProject?.id === prj.id
                  ? 'bg-slate-900 border-blue-500 shadow-md shadow-blue-500/10'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-blue-400">{prj.projectCode}</span>
                  <h4 className="text-xs font-bold text-slate-100 mt-0.5 leading-snug">{prj.projectName}</h4>
                  <p className="text-[11px] text-slate-400 mt-1">{prj.customerName} &bull; {prj.location}</p>
                </div>
                <Badge variant="info">{prj.status}</Badge>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 block">Contract</span>
                  <strong className="text-slate-200">{Formatters.currency(prj.contractValue)}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Cost</span>
                  <strong className="text-rose-400">{Formatters.currency(prj.totalProjectCost)}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Profit</span>
                  <strong className="text-emerald-400">{Formatters.currency(prj.projectGrossProfit)}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Project Detailed Breakdown */}
        {selectedProject && (
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-blue-400">{selectedProject.projectCode}</span>
                <h3 className="text-base font-bold text-slate-100">{selectedProject.projectName}</h3>
                <p className="text-xs text-slate-400">Client: {selectedProject.customerName} &bull; {selectedProject.location}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsIssueMaterialOpen(true)}
                  className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                >
                  <PackageMinus className="w-3.5 h-3.5" />
                  <span>Issue Material</span>
                </button>
                <button
                  onClick={() => setIsLogLaborOpen(true)}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                >
                  <HardHat className="w-3.5 h-3.5" />
                  <span>Log Technician Labor</span>
                </button>
              </div>
            </div>

            {/* Profitability Meter */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Contract Value</span>
                <span className="text-base font-bold text-slate-100">{Formatters.currency(selectedProject.contractValue)}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Materials (Landed Cost)</span>
                <span className="text-base font-bold text-purple-400">{Formatters.currency(selectedProject.materialLandedCost)}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Labor & Travel</span>
                <span className="text-base font-bold text-amber-400">
                  {Formatters.currency(selectedProject.laborCost + selectedProject.transportCost + selectedProject.otherCost)}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Project Gross Profit</span>
                <span className="text-base font-bold text-emerald-400">{Formatters.currency(selectedProject.projectGrossProfit)}</span>
              </div>
            </div>

            {/* Consumed Warehouse Materials Table */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Consumed Warehouse Materials (Auto-Deducted at Landed Cost)
              </h4>
              <div className="border border-slate-800 rounded-lg overflow-x-auto touch-scroll">
                <table className="w-full text-left text-xs min-w-[440px]">
                  <thead className="bg-slate-800/80 text-slate-400 text-[10px] uppercase">
                    <tr>
                      <th className="py-2.5 px-3">Product Name</th>
                      <th className="py-2.5 px-3 text-center">Quantity</th>
                      <th className="py-2.5 px-3 text-right">Unit Landed Cost</th>
                      <th className="py-2.5 px-3 text-right">Charged to Project</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-200">
                    {selectedProject.materialIssues.map((m) => (
                      <tr key={m.id}>
                        <td className="py-2 px-3 font-semibold">{m.productName}</td>
                        <td className="py-2 px-3 text-center font-bold text-purple-400">{m.quantity} pcs</td>
                        <td className="py-2 px-3 text-right text-slate-400">{Formatters.currency(m.unitLandedCost)}</td>
                        <td className="py-2 px-3 text-right font-bold text-slate-100">{Formatters.currency(m.totalCost)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Technician Labor Logs */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Technician Labor & Service Work Days
              </h4>
              <div className="border border-slate-800 rounded-lg overflow-x-auto touch-scroll">
                <table className="w-full text-left text-xs min-w-[440px]">
                  <thead className="bg-slate-800/80 text-slate-400 text-[10px] uppercase">
                    <tr>
                      <th className="py-2.5 px-3">Technician</th>
                      <th className="py-2.5 px-3 text-center">Work Days</th>
                      <th className="py-2.5 px-3 text-right">Daily Rate</th>
                      <th className="py-2.5 px-3 text-right">Total Labor Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-200">
                    {selectedProject.laborLogs.map((l) => (
                      <tr key={l.id}>
                        <td className="py-2 px-3 font-semibold flex items-center gap-1.5">
                          <HardHat className="w-3.5 h-3.5 text-blue-400" />
                          <span>{l.technicianName}</span>
                        </td>
                        <td className="py-2 px-3 text-center font-bold">{l.workDays} days</td>
                        <td className="py-2 px-3 text-right text-slate-400">{Formatters.currency(l.dailyRate)}</td>
                        <td className="py-2 px-3 text-right font-bold text-amber-400">{Formatters.currency(l.totalLabor)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Issue Material Modal */}
      <Modal
        isOpen={isIssueMaterialOpen}
        onClose={() => setIsIssueMaterialOpen(false)}
        title="Issue Warehouse Materials to Project"
        footer={
          <>
            <button
              onClick={() => setIsIssueMaterialOpen(false)}
              className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleIssueMaterial}
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold"
            >
              Confirm Material Issue
            </button>
          </>
        }
      >
        <div className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-400 font-semibold mb-1">Select Product to Issue</label>
            <select
              value={issueProduct}
              onChange={(e) => setIssueProduct(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200"
            >
              <option value="CCTV Camera (4MP Outdoor IR Dome IP Camera)">CCTV Camera (4MP Outdoor IR Dome IP Camera)</option>
              <option value="Cat6 UTP Pure Copper Industrial Cable (305m)">Cat6 UTP Pure Copper Industrial Cable (305m)</option>
              <option value="Hikvision 16-Channel 4K NVR with 2-SATA">Hikvision 16-Channel 4K NVR with 2-SATA</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 font-semibold mb-1">Quantity to Issue (pcs) *</label>
              <input
                type="number"
                value={issueQty}
                onChange={(e) => setIssueQty(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100 font-bold"
              />
            </div>
            <div>
              <label className="block text-slate-400 font-semibold mb-1">From Warehouse</label>
              <select className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200">
                <option value="Main Warehouse (Tejgaon)">Main Warehouse (Tejgaon)</option>
              </select>
            </div>
          </div>

          <div className="p-3 bg-purple-950/40 border border-purple-800/60 rounded-lg text-slate-300 text-[11px]">
            ⚡ <strong>Automatic Accounting Rule:</strong> Main Warehouse stock will immediately reduce by {issueQty} pcs. The project material cost will automatically increase by {Formatters.currency(issueQty * 10000)} based on actual unit landed cost.
          </div>
        </div>
      </Modal>

      {/* Log Labor Modal */}
      <Modal
        isOpen={isLogLaborOpen}
        onClose={() => setIsLogLaborOpen(false)}
        title="Log Technician Labor & Work Days"
        footer={
          <>
            <button
              onClick={() => setIsLogLaborOpen(false)}
              className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleLogLabor}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
            >
              Record Labor Cost
            </button>
          </>
        }
      >
        <div className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-400 font-semibold mb-1">Technician Name</label>
            <input
              type="text"
              value={techName}
              onChange={(e) => setTechName(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 font-semibold mb-1">Work Days</label>
              <input
                type="number"
                value={workDays}
                onChange={(e) => setWorkDays(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200"
              />
            </div>
            <div>
              <label className="block text-slate-400 font-semibold mb-1">Daily Rate (BDT)</label>
              <input
                type="number"
                value={dailyRate}
                onChange={(e) => setDailyRate(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200"
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
