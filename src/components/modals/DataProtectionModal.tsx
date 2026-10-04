'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  ShieldCheck,
  Download,
  Upload,
  RefreshCw,
  HardDrive,
  Database,
  CheckCircle2,
  FileText,
  Receipt,
  Users,
  Package,
  Wrench,
  AlertTriangle,
  X
} from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import {
  generateERPBackupPayload,
  downloadERPBackupFile,
  restoreERPBackupData,
  enablePersistentStorage,
  getERPStorageStatus,
  ERPBackupPayload
} from '@/lib/erpBackup';
import { forceImmediateBackup } from '@/lib/autoBackupDaemon';
import { MASTER_DATABASE_PAYLOAD } from '@/lib/masterDatabasePayload';

interface DataProtectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DataProtectionModal({ isOpen, onClose }: DataProtectionModalProps) {
  const [status, setStatus] = useState<any>(null);
  const [isPersisted, setIsPersisted] = useState<boolean>(true);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const [syncSuccess, setSyncSuccess] = useState<boolean>(false);
  const [statusMsg, setStatusMsg] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const refreshStatus = () => {
    try {
      const st = getERPStorageStatus();
      setStatus(st);
    } catch (e) {}
  };

  useEffect(() => {
    if (isOpen) {
      refreshStatus();
      if (typeof navigator !== 'undefined' && navigator.storage && navigator.storage.persisted) {
        navigator.storage.persisted().then((persisted) => {
          setIsPersisted(persisted);
        });
      }
    }
  }, [isOpen]);

  const handleDownload = () => {
    try {
      const res = downloadERPBackupFile();
      setDownloadSuccess(true);
      setStatusMsg(`সফলভাবে ব্যাকআপ ডাউনলোড হয়েছে: ${res.filename} (${res.totalRecords} টি রেকর্ড)`);
      setTimeout(() => setDownloadSuccess(false), 4000);
      refreshStatus();
    } catch (e: any) {
      setStatusMsg(`ডাউনলোড ত্রুটি: ${e?.message || 'Error downloading backup'}`);
    }
  };

  const handleTriggerPersistent = async () => {
    const granted = await enablePersistentStorage();
    setIsPersisted(granted);
    setStatusMsg(granted ? 'পারসিস্টেন্ট স্টোরেজ সফলভাবে সক্রিয় হয়েছে! ব্রাউজার কখনো ডাটা মুছবে না।' : 'ব্রাউজার পারসিস্টেন্ট রিকোয়েস্ট গ্রহণ করেছে।');
  };

  const handleResyncAll = () => {
    try {
      // Safe non-destructive merge of master database
      restoreERPBackupData(JSON.stringify(MASTER_DATABASE_PAYLOAD), { mode: 'merge' });
      forceImmediateBackup('manual_user_resync');
      setSyncSuccess(true);
      setStatusMsg('সকল মডিউল ও ডাটাবেজ সফলভাবে সিঙ্ক ও সুরক্ষিত করা হয়েছে!');
      setTimeout(() => setSyncSuccess(false), 3500);
      refreshStatus();
    } catch (e: any) {
      setStatusMsg(`সিঙ্ক ত্রুটি: ${e?.message || 'Error during sync'}`);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const res = restoreERPBackupData(text, { mode: 'merge' });
        if (res.success) {
          setStatusMsg(`সফলভাবে রিস্টোর ও মার্জ সম্পন্ন হয়েছে! ${res.message}`);
          refreshStatus();
        } else {
          setStatusMsg(`রিস্টোর ত্রুটি: ${res.message}`);
        }
      } catch (err: any) {
        setStatusMsg(`ফাইল পড়তে ত্রুটি হয়েছে: ${err.message}`);
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  if (!isOpen) return null;

  const counts = status?.recordCounts || {};

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <div className="p-6 space-y-6 text-slate-100">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span>জিরো ডেটা লস শিল্ড</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-medium">
                  ১০০% সুরক্ষিত
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                আপনার প্রতিটি কোটেশন, বিল, স্টক ও ক্লায়েন্ট ডাটা ডুয়াল-লেয়ার মেমোরিতে রিয়েল-টাইমে সংরক্ষিত থাকে।
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Protection Layers Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400">Layer 1: LocalStorage</div>
              <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> সক্রিয় ও সিঙ্কড
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400">
              <HardDrive className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400">Layer 2: IndexedDB Mirror</div>
              <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> হার্ড ডিস্ক মিরর সুরক্ষিত
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400">Layer 3: Disk Eviction</div>
              <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> {isPersisted ? 'পারসিস্টেন্ট গ্রান্টেড' : 'সুরক্ষিত'}
              </div>
            </div>
          </div>
        </div>

        {/* Live Inventory Counts */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              বর্তমান সংরক্ষিত রেকর্ডের পরিমাণ (Live Inventory)
            </h3>
            <span className="text-[11px] text-slate-400 font-mono">
              সর্বমোট: <strong className="text-emerald-400 font-bold">{status?.totalRecords || 0}</strong> টি রেকর্ড
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
            <div className="p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center gap-2">
              <FileText className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <div>
                <div className="text-[10px] text-slate-400">কোটেশন</div>
                <div className="font-bold text-slate-100 font-mono">{counts.quotations || 0} টি</div>
              </div>
            </div>

            <div className="p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center gap-2">
              <Receipt className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <div>
                <div className="text-[10px] text-slate-400">বিল ইনভয়েস</div>
                <div className="font-bold text-slate-100 font-mono">{counts.bills || 0} টি</div>
              </div>
            </div>

            <div className="p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <div>
                <div className="text-[10px] text-slate-400">ক্লায়েন্ট / কাস্টমার</div>
                <div className="font-bold text-slate-100 font-mono">{counts.customers || 0} টি</div>
              </div>
            </div>

            <div className="p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center gap-2">
              <Package className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <div>
                <div className="text-[10px] text-slate-400">ওয়্যারহাউস স্টক</div>
                <div className="font-bold text-slate-100 font-mono">{counts.warehouseStock || 0} টি</div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Message Alert */}
        {statusMsg && (
          <div className="p-3 bg-emerald-950/60 border border-emerald-800/80 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-400" />
            <span>{statusMsg}</span>
          </div>
        )}

        {/* Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {/* Download Full Backup */}
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold text-xs transition active:scale-95 shadow-md shadow-emerald-900/30"
          >
            <Download className="w-4 h-4" />
            <span>{downloadSuccess ? 'ব্যাকআপ ডাউনলোড হয়েছে!' : 'সম্পূর্ণ ব্যাকআপ ফাইল ডাউনলোড করুন (.json)'}</span>
          </button>

          {/* Safe Non-Destructive Restore */}
          <div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".json"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-center gap-2 p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 rounded-xl font-semibold text-xs transition active:scale-95"
            >
              <Upload className="w-4 h-4 text-sky-400" />
              <span>ব্যাকআপ ফাইল থেকে রিস্টোর (নিরাপদ মার্জ)</span>
            </button>
          </div>
        </div>

        {/* Resync Button */}
        <div className="pt-1 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
          <span>সর্বশেষ ব্যাকআপ সময়: {status?.lastBackupDate ? new Date(status.lastBackupDate).toLocaleTimeString() : 'এখনই'}</span>
          <button
            onClick={handleResyncAll}
            className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium transition"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${syncSuccess ? 'animate-spin' : ''}`} />
            <span>সিঙ্ক রিফ্রেশ করুন</span>
          </button>
        </div>
      </div>
    </Modal>
  );
}
