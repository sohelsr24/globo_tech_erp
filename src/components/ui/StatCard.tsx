import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  subtextColor?: string;
  icon?: React.ReactNode;
  accentColor?: 'primary' | 'success' | 'warning' | 'danger' | 'cyan' | 'purple';
}

export function StatCard({
  label,
  value,
  subtext,
  subtextColor = 'text-slate-400',
  icon,
  accentColor = 'primary',
}: StatCardProps) {
  const accentBorder = {
    primary: 'border-l-4 border-l-blue-500',
    success: 'border-l-4 border-l-emerald-500',
    warning: 'border-l-4 border-l-amber-500',
    danger: 'border-l-4 border-l-rose-500',
    cyan: 'border-l-4 border-l-cyan-500',
    purple: 'border-l-4 border-l-purple-500',
  }[accentColor];

  const iconBg = {
    primary: 'bg-blue-500/10 text-blue-400',
    success: 'bg-emerald-500/10 text-emerald-400',
    warning: 'bg-amber-500/10 text-amber-400',
    danger: 'bg-rose-500/10 text-rose-400',
    cyan: 'bg-cyan-500/10 text-cyan-400',
    purple: 'bg-purple-500/10 text-purple-400',
  }[accentColor];

  return (
    <div
      className={`bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-slate-700 transition flex items-start justify-between ${accentBorder}`}
    >
      <div className="space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {label}
        </span>
        <div className="text-2xl font-bold text-slate-100 tracking-tight">
          {value}
        </div>
        {subtext && (
          <p className={`text-xs ${subtextColor} flex items-center gap-1`}>
            {subtext}
          </p>
        )}
      </div>

      {icon && (
        <div className={`p-3 rounded-lg flex items-center justify-center ${iconBg}`}>
          {icon}
        </div>
      )}
    </div>
  );
}
