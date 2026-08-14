import React from 'react';
import { MonthPlan } from '../types';
import {
  BookOpen,
  ArrowRight,
  CheckCircle,
  Sparkles,
  ScrollText,
  Compass,
  Flame,
  ShieldCheck,
  MapPin,
  Award,
  Crown,
  Feather,
  Sun,
  RefreshCw,
  Zap,
  Star,
  ExternalLink
} from 'lucide-react';

interface MonthCardProps {
  plan: MonthPlan;
  completedDaysCount: number;
  onSelect: (plan: MonthPlan) => void;
}

export interface MonthThemeData {
  gradient: string;
  badgeBg: string;
  badgeTextClass: string;
  accentIcon: React.ElementType;
  bgGlow: string;
}

export const MONTH_THEMES: Record<number, MonthThemeData> = {
  1: {
    gradient: 'from-blue-700 via-indigo-600 to-sky-500',
    badgeBg: 'bg-orange-500 text-white',
    badgeTextClass: 'text-sky-100',
    accentIcon: Compass,
    bgGlow: 'bg-sky-400/20',
  },
  2: {
    gradient: 'from-orange-600 via-amber-500 to-rose-500',
    badgeBg: 'bg-blue-950 text-white',
    badgeTextClass: 'text-amber-100',
    accentIcon: Flame,
    bgGlow: 'bg-amber-300/20',
  },
  3: {
    gradient: 'from-purple-700 via-indigo-700 to-fuchsia-600',
    badgeBg: 'bg-orange-500 text-white',
    badgeTextClass: 'text-purple-100',
    accentIcon: ShieldCheck,
    bgGlow: 'bg-fuchsia-400/20',
  },
  4: {
    gradient: 'from-teal-700 via-emerald-600 to-cyan-600',
    badgeBg: 'bg-orange-500 text-white',
    badgeTextClass: 'text-teal-100',
    accentIcon: MapPin,
    bgGlow: 'bg-emerald-300/20',
  },
  5: {
    gradient: 'from-amber-600 via-orange-500 to-yellow-500',
    badgeBg: 'bg-blue-950 text-white',
    badgeTextClass: 'text-amber-100',
    accentIcon: Award,
    bgGlow: 'bg-yellow-300/20',
  },
  6: {
    gradient: 'from-blue-950 via-blue-800 to-indigo-700',
    badgeBg: 'bg-orange-500 text-white',
    badgeTextClass: 'text-sky-100',
    accentIcon: Crown,
    bgGlow: 'bg-blue-400/20',
  },
  7: {
    gradient: 'from-rose-600 via-pink-600 to-orange-500',
    badgeBg: 'bg-blue-950 text-white',
    badgeTextClass: 'text-rose-100',
    accentIcon: Feather,
    bgGlow: 'bg-pink-300/20',
  },
  8: {
    gradient: 'from-sky-600 via-blue-600 to-indigo-700',
    badgeBg: 'bg-orange-500 text-white',
    badgeTextClass: 'text-sky-100',
    accentIcon: Sun,
    bgGlow: 'bg-sky-300/25',
  },
  9: {
    gradient: 'from-amber-700 via-orange-600 to-red-600',
    badgeBg: 'bg-blue-950 text-white',
    badgeTextClass: 'text-orange-100',
    accentIcon: RefreshCw,
    bgGlow: 'bg-orange-300/20',
  },
  10: {
    gradient: 'from-emerald-600 via-teal-600 to-green-500',
    badgeBg: 'bg-orange-500 text-white',
    badgeTextClass: 'text-emerald-100',
    accentIcon: Zap,
    bgGlow: 'bg-green-300/20',
  },
  11: {
    gradient: 'from-orange-700 via-amber-600 to-yellow-600',
    badgeBg: 'bg-blue-950 text-white',
    badgeTextClass: 'text-amber-100',
    accentIcon: ScrollText,
    bgGlow: 'bg-yellow-300/20',
  },
  12: {
    gradient: 'from-indigo-700 via-purple-600 to-pink-600',
    badgeBg: 'bg-orange-500 text-white',
    badgeTextClass: 'text-indigo-100',
    accentIcon: Star,
    bgGlow: 'bg-pink-300/20',
  },
};

export const MonthCard: React.FC<MonthCardProps> = ({
  plan,
  completedDaysCount,
  onSelect,
}) => {
  const totalDays = plan.suggestedSchedule.length;
  const percentage = totalDays > 0 ? Math.round((completedDaysCount / totalDays) * 100) : 0;
  const isCompleted = totalDays > 0 && completedDaysCount === totalDays;
  const theme = MONTH_THEMES[plan.monthNumber] || MONTH_THEMES[1];
  const IconComponent = theme.accentIcon;

  return (
    <div
      onClick={() => onSelect(plan)}
      className="group relative bg-white border border-sky-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
    >
      {/* Top Eye-Catching Color Gradient Panel */}
      <div className={`relative h-36 w-full overflow-hidden bg-gradient-to-br ${theme.gradient} p-4 flex flex-col justify-between`}>
        {/* Background Radial Glow & Soft Ambient Spheres */}
        <div className={`absolute -right-6 -top-6 w-32 h-32 rounded-full ${theme.bgGlow} blur-xl pointer-events-none`} />
        <div className="absolute left-1/4 -bottom-6 w-24 h-24 rounded-full bg-white/10 blur-lg pointer-events-none" />

        {/* Geometric Dotted Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)`,
            backgroundSize: '14px 14px'
          }}
        />

        {/* Large Decorative Icon Watermark */}
        <div className="absolute -right-2 -bottom-2 text-white/20 pointer-events-none transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
          <IconComponent className="w-28 h-28" />
        </div>

        {/* Top Badges Row */}
        <div className="relative z-10 flex items-center justify-between">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-black shadow-md ${theme.badgeBg}`}>
            <ScrollText className="w-3.5 h-3.5 mr-1" />
            {plan.monthTitle}
          </span>

          {isCompleted && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white shadow-md">
              <CheckCircle className="w-3.5 h-3.5 mr-1" />
              Hoàn thành
            </span>
          )}
        </div>

        {/* Title over Gradient Panel */}
        <div className="relative z-10">
          <h3 className="text-base sm:text-lg font-black text-white font-serif line-clamp-1 drop-shadow-sm tracking-wide">
            {plan.themeTitle}
          </h3>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Books Text Badge & Online Reading Link */}
          <div className="mb-2 flex items-center justify-between gap-1 flex-wrap">
            <span className="text-[11px] font-bold text-blue-950 bg-sky-50 px-2.5 py-1 rounded-xl border border-sky-200 inline-block">
              📖 {plan.booksText}
            </span>
            <a
              href="https://kinhthanh.httlvn.org/?v=VI1934"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[10px] font-black text-blue-700 hover:text-orange-600 bg-orange-50 hover:bg-orange-100 px-2 py-0.5 rounded-lg border border-orange-200 inline-flex items-center space-x-1 transition-colors shadow-2xs"
              title="Mở Kinh Thánh 1925 Online trên HTTLVN"
            >
              <ExternalLink className="w-3 h-3 text-orange-600" />
              <span>Đọc Online ↗</span>
            </a>
          </div>

          {/* Summary */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-medium">
            {plan.summary}
          </p>
        </div>

        {/* Footer Section */}
        <div className="pt-3 border-t border-slate-100">
          {/* Progress Bar */}
          <div className="mb-3">
            <div className="flex justify-between items-center text-xs text-slate-600 mb-1">
              <span className="font-semibold">Tiến độ đọc</span>
              <span className="font-extrabold text-blue-900">{completedDaysCount}/{totalDays} ngày ({percentage}%)</span>
            </div>
            <div className="w-full h-2 bg-sky-100 rounded-full overflow-hidden border border-sky-200">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* View Detail Action */}
          <div className="flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-orange-600 pt-1">
            <span className="flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-orange-500" />
              Xem Phân Tích &amp; Lịch Đọc
            </span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
