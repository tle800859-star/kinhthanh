import React from 'react';
import { BIBLE_PLAN_DATA, THEOLOGICAL_STRUCTURE_ANALYSIS } from '../data/biblePlanData';
import { MonthPlan } from '../types';
import { Sparkles, ScrollText, BookOpen, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface OverviewAnalysisProps {
  onSelectMonth: (plan: MonthPlan) => void;
}

export const OverviewAnalysis: React.FC<OverviewAnalysisProps> = ({ onSelectMonth }) => {
  return (
    <div className="space-y-8 animate-fadeIn max-w-6xl mx-auto">
      
      {/* Hero Banner Analysis */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-sky-900 to-indigo-900 text-white p-6 sm:p-8 rounded-3xl border border-sky-800/60 shadow-lg">
        {/* Decorative Background Mesh Spheres & Grid */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-orange-500/25 blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -top-10 w-64 h-64 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`,
            backgroundSize: '18px 18px'
          }}
        />
        <div className="absolute right-12 -bottom-4 text-white/10 pointer-events-none hidden lg:block">
          <ScrollText className="w-48 h-48" />
        </div>

        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-black bg-orange-500/20 text-orange-300 border border-orange-400/30">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-orange-300" />
            Phân Tích Chi Tiết Tài Liệu
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-serif tracking-tight">
            {THEOLOGICAL_STRUCTURE_ANALYSIS.title}
          </h2>
          <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed max-w-4xl font-serif">
            {THEOLOGICAL_STRUCTURE_ANALYSIS.introduction}
          </p>
        </div>
      </div>

      {/* Reconstructed Document Table */}
      <div className="bg-white border border-sky-200/80 rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black text-blue-950 font-serif flex items-center">
            <ScrollText className="w-5 h-5 mr-2 text-orange-600" />
            Bảng Danh Mục 12 Tháng Đọc Kinh Thánh Theo Chủ Đề Thần Học (Tài Liệu Gốc)
          </h3>
          <span className="text-xs text-slate-500 font-medium">Click vào hàng bất kỳ để xem chi tiết</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-slate-800 border-collapse">
            <thead>
              <tr className="bg-sky-100/70 text-blue-950 font-serif border-b border-sky-200 font-black">
                <th className="p-3.5 w-24">Tháng</th>
                <th className="p-3.5">Tiêu Đề Chủ Đề Thần Học</th>
                <th className="p-3.5">Các Sách Kinh Thánh Trong Tâm</th>
                <th className="p-3.5 text-right w-28">Hành Động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {BIBLE_PLAN_DATA.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => onSelectMonth(row)}
                  className="hover:bg-sky-50/60 transition-colors cursor-pointer group"
                >
                  <td className="p-3.5 font-black text-blue-900 whitespace-nowrap">
                    {row.monthTitle}
                  </td>
                  <td className="p-3.5 font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {row.themeTitle}
                  </td>
                  <td className="p-3.5 text-slate-700 font-serif">
                    {row.booksText}
                  </td>
                  <td className="p-3.5 text-right">
                    <span className="inline-flex items-center text-xs font-bold text-orange-600 group-hover:underline">
                      Khám phá <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4 Theological Quarters / Pillars */}
      <div>
        <h3 className="text-xl font-black text-slate-900 font-serif mb-4 flex items-center">
          <Layers className="w-5 h-5 mr-2 text-orange-600" />
           Tiến Trình 4 Quý Trong Lịch Sử Cứu Rỗi:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {THEOLOGICAL_STRUCTURE_ANALYSIS.pillars.map((p, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-sky-200/80 shadow-sm space-y-2">
              <span className="text-xs font-black text-blue-900 bg-sky-100 px-2.5 py-1 rounded-lg border border-sky-300 inline-block">
                {p.quarter}
              </span>
              <h4 className="text-sm font-black text-slate-900 font-serif">
                Trọng tâm: {p.focus}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {p.details}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Benefits */}
      <div className="bg-white border border-sky-200/80 rounded-3xl p-6 shadow-sm space-y-4">
        <h3 className="text-lg font-black text-blue-950 font-serif flex items-center">
          <BookOpen className="w-5 h-5 mr-2 text-orange-600" />
          Ưu Điểm Của Phương Pháp Đọc Kinh Thánh Theo Chủ Đề Thần Học này
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {THEOLOGICAL_STRUCTURE_ANALYSIS.advantages.map((adv, idx) => (
            <div key={idx} className="flex items-start space-x-3 bg-sky-50/50 p-3.5 rounded-2xl border border-sky-200/60">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {adv}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
