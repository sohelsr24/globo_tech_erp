'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Smartphone,
  Laptop,
  ArrowRight,
  Copy,
  Check,
  Download,
  Upload,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  Database,
  Share2,
  Zap,
  Info,
  X,
  FileJson
} from 'lucide-react';
import {
  generateQuickSyncCode,
  restoreFromQuickSyncCode,
  downloadERPBackupFile,
  restoreERPBackupData,
  clearAppCacheAndReload,
  getERPStorageStatus
} from '@/lib/erpBackup';

interface DeviceSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeviceSyncModal({ isOpen, onClose }: DeviceSyncModalProps) {
  const [activeTab, setActiveTab] = useState<'CODE' | 'FILE' | 'REFRESH'>('CODE');
  const [syncCode, setSyncCode] = useState('');
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [pasteInput, setPasteInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string; counts?: any } | null>(null);
  const [status, setStatus] = useState<ReturnType<typeof getERPStorageStatus> | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load storage summary
  useEffect(() => {
    if (isOpen) {
      try {
        setStatus(getERPStorageStatus());
      } catch (e) {}
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleGenerateCode = () => {
    try {
      const res = generateQuickSyncCode();
      setSyncCode(res.code);
      navigator.clipboard.writeText(res.code);
      setCopiedSuccess(true);
      setFeedback({
        type: 'success',
        message: `✅ সিঙ্ক কোড কপি হয়েছে! (${res.totalRecords} টি রেকর্ড অন্তর্ভুক্ত)`,
        counts: res.counts
      });
      setTimeout(() => setCopiedSuccess(false), 4000);
    } catch (err: any) {
      setFeedback({
        type: 'error',
        message: `সিঙ্ক কোড তৈরিতে সমস্যা: ${err?.message || 'Error'}`
      });
    }
  };

  const handleRestoreFromCode = () => {
    if (!pasteInput.trim()) {
      setFeedback({
        type: 'error',
        message: 'অনুগ্রহ করে নিচে সিঙ্ক কোড পেস্ট করুন।'
      });
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      try {
        const res = restoreFromQuickSyncCode(pasteInput);
        if (res.success) {
          setFeedback({
            type: 'success',
            message: '🎉 অভিনন্দন! পিসির সব ডাটা মোবাইলে সফলভাবে সিঙ্ক ও আপডেট হয়েছে!',
            counts: res.counts
          });
          setPasteInput('');
          // Refresh status
          setStatus(getERPStorageStatus());
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } else {
          setFeedback({
            type: 'error',
            message: res.message
          });
        }
      } catch (e: any) {
        setFeedback({
          type: 'error',
          message: `সিঙ্ক ব্যর্থ হয়েছে: ${e?.message || 'Error'}`
        });
      } finally {
        setIsProcessing(false);
      }
    }, 200);
  };

  const handleDownloadFile = () => {
    try {
      const res = downloadERPBackupFile();
      setStatus(getERPStorageStatus());
      setFeedback({
        type: 'success',
        message: `📥 ব্যাকআপ ফাইল ডাউনলোড সম্পন্ন! (${res.totalRecords} টি রেকর্ড সেভ হয়েছে: ${res.filename})`
      });
    } catch (e: any) {
      setFeedback({
        type: 'error',
        message: `ডাউনলোড ব্যর্থ: ${e?.message || 'Error'}`
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const res = restoreERPBackupData(content);
        setIsProcessing(false);
        if (res.success) {
          setFeedback({
            type: 'success',
            message: '🎉 ব্যাকআপ ফাইল সফলভাবে রিস্টোর হয়েছে! সব ডাটা এখন লাইভ।'
          });
          setStatus(getERPStorageStatus());
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } else {
          setFeedback({
            type: 'error',
            message: res.message
          });
        }
      }
    };
    reader.onerror = () => {
      setIsProcessing(false);
      setFeedback({
        type: 'error',
        message: 'ফাইলটি পড়তে ত্রুটি হয়েছে। অনুগ্রহ করে সঠিক JSON ব্যাকআপ ফাইল সিলেক্ট করুন।'
      });
    };
    reader.readAsText(file);
  };

  const handlePasteFromClipboard = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText();
        if (text) {
          setPasteInput(text);
          setFeedback({
            type: 'success',
            message: 'ক্লিপবোর্ড থেকে কোড পেস্ট করা হয়েছে!'
          });
        }
      }
    } catch (e) {
      // Fallback: user can manually paste
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[92dvh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-blue-950/50 overflow-hidden text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-800 bg-slate-900/90 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                পিসি ⇄ মোবাইল ডেটা সিঙ্ক
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30">
                  Instant Sync
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                পিসির সকল কোটেশন, বিল, স্টক ও প্রোডাক্ট এক ক্লিকে মোবাইলে আপডেট করুন
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Storage Summary Bar */}
        {status && (
          <div className="px-4 sm:px-6 py-2.5 bg-slate-950/60 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Database className="w-4 h-4 text-emerald-400" />
              <span>এই ডিভাইসে মোট ডাটা: <strong className="text-emerald-400 font-mono">{status.totalRecords}</strong> টি রেকর্ড</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
              <span>কোটেশন: {status.recordCounts.quotations}</span>
              <span>বিল: {status.recordCounts.bills}</span>
              <span>প্রোডাক্ট: {status.recordCounts.products}</span>
              <span>স্টক: {status.recordCounts.warehouseStock}</span>
            </div>
          </div>
        )}

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-800 bg-slate-950/30 p-1.5 gap-1 text-xs font-semibold">
          <button
            onClick={() => { setActiveTab('CODE'); setFeedback(null); }}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl transition ${
              activeTab === 'CODE'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>১. কুইক কোড সিঙ্ক (WhatsApp)</span>
          </button>
          <button
            onClick={() => { setActiveTab('FILE'); setFeedback(null); }}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl transition ${
              activeTab === 'FILE'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <FileJson className="w-3.5 h-3.5" />
            <span>২. ব্যাকআপ ফাইল</span>
          </button>
          <button
            onClick={() => { setActiveTab('REFRESH'); setFeedback(null); }}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl transition ${
              activeTab === 'REFRESH'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>৩. ক্যাশ ক্লিয়ার</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-sm flex-1">
          
          {/* Notification / Feedback Banner */}
          {feedback && (
            <div
              className={`p-3.5 rounded-xl text-xs flex items-start gap-2.5 border animate-in slide-in-from-top-1 ${
                feedback.type === 'success'
                  ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-200'
                  : 'bg-rose-950/50 border-rose-500/40 text-rose-200'
              }`}
            >
              {feedback.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              )}
              <div className="flex-1 space-y-1">
                <p className="font-semibold">{feedback.message}</p>
                {feedback.counts && (
                  <p className="text-[11px] text-emerald-300/80 font-mono">
                    রেকর্ডসমূহ: কোটেশন ({feedback.counts.quotations}), বিল ({feedback.counts.bills}), প্রোডাক্ট ({feedback.counts.products}), কাস্টমার ({feedback.counts.customers}), স্টক ({feedback.counts.warehouseStock})
                  </p>
                )}
              </div>
            </div>
          )}

          {/* TAB 1: QUICK CODE SYNC (RECOMMENDED) */}
          {activeTab === 'CODE' && (
            <div className="space-y-4">
              
              {/* How it works info card */}
              <div className="p-3 bg-blue-950/30 border border-blue-800/40 rounded-xl text-xs text-blue-200 space-y-1.5">
                <div className="font-bold flex items-center gap-1.5 text-blue-300">
                  <Info className="w-3.5 h-3.5" />
                  <span>সিঙ্ক করার ৩ ধাপের সহজ নিয়ম:</span>
                </div>
                <ol className="list-decimal list-inside space-y-1 text-slate-300 text-[11px] leading-relaxed">
                  <li><strong>পিসিতে:</strong> নিচের <strong>&ldquo;পিসি থেকে কোড কপি করুন&rdquo;</strong> বাটনে চাপ দিন।</li>
                  <li><strong>মেসেজ পাঠান:</strong> কোডটি আপনার মোবাইলের <strong>WhatsApp / Notes</strong>-এ পাঠিয়ে দিন।</li>
                  <li><strong>মোবাইলে:</strong> মোবাইলের এই বক্সে পেস্ট করে <strong>&ldquo;সিঙ্ক ও আপডেট করুন&rdquo;</strong> চাপুন। সব ডাটা সাথে সাথে লাইভ হয়ে যাবে!</li>
                </ol>
              </div>

              {/* Action 1: Export from PC */}
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Laptop className="w-4 h-4 text-sky-400" />
                    <span className="font-bold text-white text-xs sm:text-sm">ধাপ ১: পিসির ডাটা পাঠাতে (Export)</span>
                  </div>
                  {copiedSuccess && (
                    <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="w-3 h-3" /> কপি হয়েছে
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  পিসিতে এই বাটনে ক্লিক করলে আপনার সকল বর্তমান ডাটা সহ একটি সিঙ্ক কোড ক্লিপবোর্ডে কপি হবে।
                </p>
                <button
                  onClick={handleGenerateCode}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white shadow-lg shadow-sky-600/30 active:scale-[0.98] transition cursor-pointer"
                >
                  <Copy className="w-4 h-4" />
                  <span>সিঙ্ক কোড তৈরি ও কপি করুন (Copy Sync Code)</span>
                </button>
              </div>

              {/* Action 2: Import into Mobile */}
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold text-white text-xs sm:text-sm">ধাপ ২: মোবাইলে ডাটা রিসিভ করতে (Import)</span>
                  </div>
                  <button
                    type="button"
                    onClick={handlePasteFromClipboard}
                    className="text-[11px] text-sky-400 hover:text-sky-300 font-semibold underline flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" /> ক্লিপবোর্ড থেকে পেস্ট
                  </button>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  WhatsApp বা মেসেঞ্জার থেকে কপি করা কোডটি নিচের বক্সে পেস্ট করে সিঙ্ক বাটনে চাপ দিন:
                </p>
                <div className="space-y-2">
                  <textarea
                    rows={3}
                    placeholder="এখানে WhatsApp থেকে পাওয়া সিঙ্ক কোড পেস্ট করুন..."
                    value={pasteInput}
                    onChange={(e) => setPasteInput(e.target.value)}
                    className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    style={{ fontSize: '16px' }}
                  />
                  <button
                    onClick={handleRestoreFromCode}
                    disabled={isProcessing || !pasteInput.trim()}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer ${
                      isProcessing || !pasteInput.trim()
                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 active:scale-[0.98]'
                    }`}
                  >
                    {isProcessing ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>ডাটা সিঙ্ক হচ্ছে...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4" />
                        <span>⚡ এখনই সিঙ্ক ও আপডেট করুন (Sync Now)</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: BACKUP FILE TRANSFER */}
          {activeTab === 'FILE' && (
            <div className="space-y-4">
              <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-300 space-y-1">
                <p className="font-semibold text-white">ফাইল দিয়ে সিঙ্ক করার পদ্ধতি:</p>
                <p className="text-slate-400 text-[11px]">
                  পিসি থেকে পুরো ডাটাবেজ একটি <code className="text-sky-300">.json</code> ফাইল আকারে ডাউনলোড করে WhatsApp Document হিসেবে মোবাইলে পাঠান। মোবাইলে এসে ফাইলটি আপলোড করলেই সাথে সাথে সব আপডেট হয়ে যাবে।
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Download */}
                <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-xs sm:text-sm flex items-center gap-2">
                      <Download className="w-4 h-4 text-sky-400" />
                      <span>পিসিতে ব্যাকআপ ফাইল নিন</span>
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      সকল মডিউল সহ সম্পূর্ণ এনক্রিপ্টেড ব্যাকআপ ফাইল ডাউনলোড হবে।
                    </p>
                  </div>
                  <button
                    onClick={handleDownloadFile}
                    className="w-full py-2.5 px-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>ব্যাকআপ (.json) ডাউনলোড</span>
                  </button>
                </div>

                {/* Upload */}
                <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-xs sm:text-sm flex items-center gap-2">
                      <Upload className="w-4 h-4 text-emerald-400" />
                      <span>মোবাইলে ফাইল রিস্টোর করুন</span>
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      WhatsApp বা ডাউনলোড ফোল্ডার থেকে .json ফাইল সিলেক্ট করুন।
                    </p>
                  </div>
                  <div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept=".json,application/json"
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isProcessing}
                      className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95 disabled:opacity-50"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>ফাইল সিলেক্ট ও রিস্টোর</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CACHE REFRESH */}
          {activeTab === 'REFRESH' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3">
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-white text-xs sm:text-sm">মোবাইল ব্রাউজার ক্যাশ ক্লিয়ার</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  মোবাইল ব্রাউজার (Chrome / Safari) মাঝে মাঝে পুরনো ক্যাশ মেমোরি ধরে রাখে, যার কারণে পিসিতে নতুন আপডেট করার পরেও মোবাইলে পুরনো স্ক্রিন বা পুরনো ডাটা দেখাতে পারে।
                </p>
                <div className="p-3 bg-amber-950/30 border border-amber-800/40 rounded-xl text-xs text-amber-200">
                  ⚠️ <strong>টিপস:</strong> এই বাটনে চাপ দিলে আপনার কোনো ডাটা মুছে যাবে না। শুধু ব্রাউজারের পুরনো ফাইল মুছে ফেলে লাইভ হোস্ট করা সর্বশেষ নতুন ভার্সন লোড হবে।
                </div>
                <button
                  onClick={clearAppCacheAndReload}
                  className="w-full py-3 px-4 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-600/30 active:scale-95 transition"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>ক্যাশ ক্লিয়ার ও ফ্রেশ রিলোড করুন</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-3 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>জিরো ডেটা লস গ্যারান্টি (Dual-Layer Redundancy)</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition"
          >
            বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  );
}
