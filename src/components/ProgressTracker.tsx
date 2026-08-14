import React from 'react';
import { BIBLE_PLAN_DATA } from '../data/biblePlanData';
import { MonthPlan, UserNote } from '../types';
import { BarChart3, CheckCircle2, Calendar, MessageSquare, Trash2, RotateCcw, Trophy, Sparkles, BookOpen, ExternalLink } from 'lucide-react';

interface ProgressTrackerProps {
  completedDays: Record<string, boolean>;
  userNotes: UserNote[];
  onSelectMonth: (plan: MonthPlan) => void;
  onDeleteNote: (noteId: string) => void;
  onResetProgress: () => void;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  completedDays,
  userNotes,
  onSelectMonth,
  onDeleteNote,
  onResetProgress,
}) => {
  // Compute overall statistics
  const totalPlanDays = BIBLE_PLAN_DATA.reduce((acc, m) => acc + m.suggestedSchedule.length, 0);
  const totalCompletedCount = Object.values(completedDays).filter(Boolean).length;
  const overallPercentage = totalPlanDays > 0 ? Math.round((totalCompletedCount / totalPlanDays) * 100) : 0;

  // Completed months count
  const completedMonthsCount = BIBLE_PLAN_DATA.filter((m) => {
    const monthTotal = m.suggestedSchedule.length;
    const monthDone = m.suggestedSchedule.filter((item) => completedDays[`m${m.id}-d${item.day}`]).length;
    return monthTotal > 0 && monthDone === monthTotal;
  }).length;

  return (
    <div className="space-y-8 animate-fadeIn max-w-6xl mx-auto">
      
      {/* Top Banner Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Total Completion */}
        <div className="bg-white border border-amber-200/80 p-5 rounded-2xl shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-amber-100 text-amber-800 rounded-2xl border border-amber-300">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Tổng Tiến Độ</p>
            <p className="text-2xl font-black text-amber-950 font-serif">{overallPercentage}%</p>
            <p className="text-[11px] text-slate-600 font-semibold">{totalCompletedCount}/{totalPlanDays} ngày đọc</p>
          </div>
        </div>

        {/* Completed Months */}
        <div className="bg-white border border-amber-200/80 p-5 rounded-2xl shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-emerald-100 text-emerald-800 rounded-2xl border border-emerald-300">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Tháng Hoàn Thành</p>
            <p className="text-2xl font-black text-slate-900 font-serif">{completedMonthsCount}/12</p>
            <p className="text-[11px] text-slate-600 font-semibold">Chủ đề hoàn tất</p>
          </div>
        </div>

        {/* Total Notes */}
        <div className="bg-white border border-amber-200/80 p-5 rounded-2xl shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-blue-100 text-blue-800 rounded-2xl border border-blue-300">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Nhật Ký Suy Ngẫm</p>
            <p className="text-2xl font-black text-slate-900 font-serif">{userNotes.length}</p>
            <p className="text-[11px] text-slate-600 font-semibold">Bài học &amp; Cầu nguyện</p>
          </div>
        </div>

        {/* Online Bible HTTLVN Quick Access */}
        <a
          href="https://kinhthanh.httlvn.org/?v=VI1934"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-blue-900 via-sky-800 to-indigo-900 text-white p-5 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all border border-sky-700/80 group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-orange-300 uppercase tracking-wider flex items-center">
              <BookOpen className="w-4 h-4 mr-1 text-orange-400" />
              Kinh Thánh Online
            </span>
            <ExternalLink className="w-4 h-4 text-orange-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <div>
            <p className="text-base font-black text-white font-serif mt-1">
              Bản Truyền Thống 1925 ↗
            </p>
            <p className="text-[11px] text-sky-100 font-medium mt-0.5">
              Đọc trực tuyến tại kinhthanh.httlvn.org
            </p>
          </div>
        </a>

        {/* Action / Reset */}
        <div className="bg-white border border-amber-200/80 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-xs text-slate-500 font-medium">Quản Lý Dữ Liệu</p>
            <p className="text-xs text-slate-600 mt-1 font-medium">Dữ liệu được lưu tự động trên trình duyệt</p>
          </div>
          <button
            onClick={onResetProgress}
            className="inline-flex items-center text-xs text-rose-600 hover:text-rose-800 pt-2 font-bold"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-1" />
            Xóa tiến độ &amp; làm lại
          </button>
        </div>

      </div>

      {/* Progress Breakdown Per Month */}
      <div className="bg-white border border-amber-200/80 rounded-3xl p-6 shadow-sm space-y-4">
        <h3 className="text-lg font-black text-slate-900 font-serif flex items-center">
          <BarChart3 className="w-5 h-5 mr-2 text-amber-700" />
          Tiến Độ Đọc Từng Tháng (12 Tháng)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {BIBLE_PLAN_DATA.map((m) => {
            const mTotal = m.suggestedSchedule.length;
            const mDone = m.suggestedSchedule.filter((item) => completedDays[`m${m.id}-d${item.day}`]).length;
            const mPct = mTotal > 0 ? Math.round((mDone / mTotal) * 100) : 0;

            return (
              <div
                key={m.id}
                onClick={() => onSelectMonth(m)}
                className="bg-slate-50 hover:bg-amber-50/80 p-4 rounded-2xl border border-slate-200 cursor-pointer transition-all hover:border-amber-400"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-extrabold text-xs text-amber-900">{m.monthTitle}</span>
                  <span className="text-xs text-slate-600 font-semibold">{mDone}/{mTotal} ({mPct}%)</span>
                </div>
                <h4 className="text-xs font-bold text-slate-800 line-clamp-1 mb-2">
                  {m.themeTitle}
                </h4>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${mPct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* All User Notes Section */}
      <div className="bg-white border border-amber-200/80 rounded-3xl p-6 shadow-sm space-y-4">
        <h3 className="text-lg font-black text-slate-900 font-serif flex items-center">
          <MessageSquare className="w-5 h-5 mr-2 text-amber-700" />
          Tất Cả Ghi Chú &amp; Nhật Ký Suy Ngẫm ({userNotes.length})
        </h3>

        {userNotes.length === 0 ? (
          <p className="text-xs text-slate-500 italic py-6 text-center">
            Bạn chưa lưu ghi chú nào. Mở một tháng bất kỳ và vào mục "Nhật Ký &amp; Ghi Chú" để viết bài học cá nhân!
          </p>
        ) : (
          <div className="space-y-3">
            {userNotes.map((n) => {
              const targetMonth = BIBLE_PLAN_DATA.find((m) => m.id === n.monthId);

              return (
                <div key={n.id} className="bg-amber-50/50 p-4 rounded-2xl border border-amber-200/80 flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs font-extrabold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-lg border border-amber-300">
                        {targetMonth?.monthTitle || `Tháng ${n.monthId}`}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        📅 {n.date}
                      </span>
                    </div>
                    <p className="text-xs text-slate-800 whitespace-pre-wrap leading-relaxed mt-2 font-medium">
                      {n.content}
                    </p>
                  </div>
                  <button
                    onClick={() => onDeleteNote(n.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-slate-100 rounded-lg transition-colors"
                    title="Xóa ghi chú"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
};
