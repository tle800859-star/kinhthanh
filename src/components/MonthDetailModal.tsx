import React, { useState } from 'react';
import { MonthPlan, UserNote } from '../types';
import { MONTH_THEMES } from './MonthCard';
import {
  X,
  BookOpen,
  Calendar,
  Sparkles,
  CheckCircle2,
  Circle,
  Copy,
  Check,
  Plus,
  Trash2,
  HelpCircle,
  MessageSquare,
  Link,
  BookMarked,
  ExternalLink
} from 'lucide-react';

interface MonthDetailModalProps {
  plan: MonthPlan;
  onClose: () => void;
  completedDays: Record<string, boolean>;
  onToggleDay: (dayKey: string) => void;
  userNotes: UserNote[];
  onAddNote: (monthId: number, content: string) => void;
  onDeleteNote: (noteId: string) => void;
}

export const MonthDetailModal: React.FC<MonthDetailModalProps> = ({
  plan,
  onClose,
  completedDays,
  onToggleDay,
  userNotes,
  onAddNote,
  onDeleteNote,
}) => {
  const [activeTab, setActiveTab] = useState<'theology' | 'schedule' | 'notes' | 'questions'>('theology');
  const [copiedVerse, setCopiedVerse] = useState<string | null>(null);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [filterScheduleQuery, setFilterScheduleQuery] = useState('');

  const monthNotes = userNotes.filter((n) => n.monthId === plan.id);

  const handleCopyVerse = (text: string, ref: string) => {
    navigator.clipboard.writeText(`"${text}" - ${ref}`);
    setCopiedVerse(ref);
    setTimeout(() => setCopiedVerse(null), 2000);
  };

  const handleAddNoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteContent.trim()) return;
    onAddNote(plan.id, newNoteContent.trim());
    setNewNoteContent('');
  };

  const filteredSchedule = plan.suggestedSchedule.filter(
    (item) =>
      item.reading.toLowerCase().includes(filterScheduleQuery.toLowerCase()) ||
      item.focus.toLowerCase().includes(filterScheduleQuery.toLowerCase()) ||
      `ngày ${item.day}`.includes(filterScheduleQuery.toLowerCase())
  );

  const completedCount = plan.suggestedSchedule.filter(
    (item) => completedDays[`m${plan.id}-d${item.day}`]
  ).length;
  const totalDays = plan.suggestedSchedule.length;
  const percentage = totalDays > 0 ? Math.round((completedCount / totalDays) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white border border-amber-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Banner Header */}
        {(() => {
          const theme = MONTH_THEMES[plan.monthNumber] || MONTH_THEMES[1];
          const IconComponent = theme.accentIcon;
          return (
            <div className={`relative overflow-hidden bg-gradient-to-br ${theme.gradient} text-white border-b border-blue-800/50 p-5 sm:p-6 flex items-start justify-between`}>
              {/* Background Radial Glow & Soft Ambient Spheres */}
              <div className={`absolute -right-6 -top-6 w-48 h-48 rounded-full ${theme.bgGlow} blur-2xl pointer-events-none`} />
              <div className="absolute left-1/3 -bottom-10 w-36 h-36 rounded-full bg-white/10 blur-xl pointer-events-none" />

              {/* Geometric Dotted Grid Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)`,
                  backgroundSize: '16px 16px'
                }}
              />

              {/* Watermark Icon */}
              <div className="absolute right-12 bottom-1 text-white/15 pointer-events-none hidden sm:block">
                <IconComponent className="w-36 h-36" />
              </div>

              <div className="pr-8 relative z-10">
                <div className="flex items-center space-x-2 text-xs font-black text-orange-300 mb-1">
                  <span className="bg-orange-500 text-white px-2.5 py-0.5 rounded-full shadow-sm">
                    {plan.monthTitle}
                  </span>
                  <span>•</span>
                  <span className="text-sky-100">Trọng Tâm: {plan.booksText}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white font-serif tracking-tight drop-shadow-sm">
                  {plan.themeTitle}
                </h2>
                <p className="text-xs text-sky-100 mt-1 font-medium flex flex-wrap items-center gap-2">
                  <span>Tiến độ tháng: <strong className="text-orange-300 font-bold">{completedCount}/{totalDays} ngày ({percentage}%)</strong></span>
                  <a
                    href="https://kinhthanh.httlvn.org/?v=VI1934"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-orange-500 hover:bg-orange-600 text-white text-[11px] font-bold rounded-full shadow transition-colors"
                  >
                    <BookOpen className="w-3 h-3" />
                    <span>Đọc Kinh Thánh Online (VI1925) ↗</span>
                  </a>
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 text-white bg-white/10 hover:bg-white/20 rounded-xl transition-colors relative z-10 backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          );
        })()}

        {/* Modal Navigation Tabs */}
        <div className="flex items-center space-x-2 px-5 py-2.5 bg-sky-50/60 border-b border-sky-200/80 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('theology')}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
              activeTab === 'theology'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-sky-100/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Phân Tích Thần Học</span>
          </button>

          <button
            onClick={() => setActiveTab('schedule')}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
              activeTab === 'schedule'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-sky-100/50'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Lịch Đọc Hàng Ngày ({completedCount}/{totalDays})</span>
          </button>

          <button
            onClick={() => setActiveTab('notes')}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
              activeTab === 'notes'
                ? 'bg-orange-500 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-orange-100/50'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Nhật Ký &amp; Ghi Chú ({monthNotes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('questions')}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
              activeTab === 'questions'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-sky-100/50'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Câu Hỏi Suy Ngẫm</span>
          </button>
        </div>

        {/* Modal Tab Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-slate-700 text-sm">
          
          {/* TAB 1: THEOLOGY */}
          {activeTab === 'theology' && (
            <div className="space-y-6">
              
              {/* Concept Section */}
              <div className="bg-amber-50/60 rounded-2xl p-4 border border-amber-200/80">
                <h3 className="text-sm font-black text-amber-950 font-serif mb-2 flex items-center">
                  <BookMarked className="w-4 h-4 mr-2 text-amber-700" />
                  Chủ Đề &amp; Ý Nghĩa Thần Học Cốt Lõi
                </h3>
                <p className="text-slate-700 leading-relaxed text-xs sm:text-sm font-medium">
                  {plan.theologicalConcept}
                </p>
              </div>

              {/* OT & NT Connection */}
              <div className="bg-gradient-to-r from-amber-100/70 to-orange-50 rounded-2xl p-4 border border-amber-300/80">
                <h3 className="text-sm font-black text-amber-950 font-serif mb-2 flex items-center">
                  <Link className="w-4 h-4 mr-2 text-amber-700" />
                  Mối Liên Kết Cựu Ước &amp; Tân Ước (Redemptive Typology)
                </h3>
                <p className="text-slate-800 leading-relaxed text-xs sm:text-sm font-medium">
                  {plan.otNtConnection}
                </p>
              </div>

              {/* Books in this Month */}
              <div>
                <h3 className="text-sm font-black text-slate-900 font-serif mb-3">
                  Các Sách Kinh Thánh Trong Tháng này:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {plan.books.map((b, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-extrabold text-amber-950 text-sm">{b.name}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                            b.testament === 'Cựu Ước' ? 'bg-blue-100 text-blue-900 border border-blue-200' : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                          }`}>
                            {b.testament} {b.chaptersCount ? `(${b.chaptersCount} ch)` : ''}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium mb-2">
                          {b.description}
                        </p>
                      </div>
                      <a
                        href="https://kinhthanh.httlvn.org/?v=VI1934"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-orange-600 transition-colors pt-2 border-t border-slate-200/60"
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-1" />
                        <span>Đọc sách {b.name} Online ↗</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Verses */}
              <div>
                <h3 className="text-sm font-black text-slate-900 font-serif mb-3">
                  Câu Kinh Thánh Trọng Tâm:
                </h3>
                <div className="space-y-3">
                  {plan.keyVerses.map((v, idx) => (
                    <div key={idx} className="bg-amber-50/50 p-4 rounded-2xl border border-amber-200/80 relative group">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-amber-950 font-bold text-xs sm:text-sm font-serif italic mb-1">
                            "{v.text}"
                          </p>
                          <p className="text-xs font-black text-amber-800">
                            — {v.reference}
                          </p>
                          <p className="text-[11px] text-slate-600 mt-1 font-medium">
                            Bối cảnh: {v.context}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1 shrink-0">
                          <a
                            href="https://kinhthanh.httlvn.org/?v=VI1934"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg text-blue-800 text-xs font-bold transition-colors shadow-sm flex items-center space-x-1"
                            title="Đọc đoạn Kinh Thánh này online trên HTTLVN"
                          >
                            <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                            <span className="text-[11px] hidden sm:inline">Đọc Online</span>
                          </a>
                          <button
                            onClick={() => handleCopyVerse(v.text, v.reference)}
                            className="p-1.5 bg-white hover:bg-amber-100 border border-amber-200 rounded-lg text-slate-700 text-xs transition-colors shadow-sm"
                            title="Sao chép câu Kinh Thánh"
                          >
                            {copiedVerse === v.reference ? (
                              <Check className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <Copy className="w-4 h-4 text-slate-600" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: SCHEDULE */}
          {activeTab === 'schedule' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-sky-50/80 p-3 rounded-2xl border border-sky-200">
                <div className="flex items-center space-x-2 text-xs font-bold text-blue-950">
                  <BookOpen className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Kinh Thánh Truyền Thống 1925 Online (VI1925 / VI1934):</span>
                </div>
                <a
                  href="https://kinhthanh.httlvn.org/?v=VI1934"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black rounded-xl shadow-sm transition-colors shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-orange-300" />
                  <span>Mở Trang Đọc kinhthanh.httlvn.org ↗</span>
                </a>
              </div>

              <div className="flex items-center justify-between gap-3">
                <input
                  type="text"
                  placeholder="Lọc ngày đọc, đoạn sách..."
                  value={filterScheduleQuery}
                  onChange={(e) => setFilterScheduleQuery(e.target.value)}
                  className="w-full px-3.5 py-2 bg-amber-50/50 text-xs font-bold text-slate-800 placeholder-slate-400 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                />
                <span className="text-xs text-slate-600 font-semibold whitespace-nowrap">
                  Hoàn thành: <strong className="text-amber-800 font-black">{completedCount}/{totalDays}</strong>
                </span>
              </div>

              <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden bg-white">
                {filteredSchedule.map((item) => {
                  const dayKey = `m${plan.id}-d${item.day}`;
                  const isDone = !!completedDays[dayKey];

                  return (
                    <div
                      key={item.day}
                      onClick={() => onToggleDay(dayKey)}
                      className={`p-3 sm:p-4 flex items-center justify-between gap-3 cursor-pointer hover:bg-amber-50/50 transition-colors ${
                        isDone ? 'bg-emerald-50/30' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <button
                          className="mt-0.5 text-slate-400 focus:outline-none"
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleDay(dayKey);
                          }}
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <Circle className="w-5 h-5 text-slate-300 hover:text-amber-600" />
                          )}
                        </button>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-extrabold text-xs text-amber-900">
                              Ngày {item.day}
                            </span>
                            <span className={`text-sm font-bold ${isDone ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                              {item.reading}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5 font-medium">
                            Trọng tâm: {item.focus}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 shrink-0">
                        {/* Direct Online Reading Link Button */}
                        <a
                          href="https://kinhthanh.httlvn.org/?v=VI1934"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center space-x-1 px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                          title={`Mở trang đọc ${item.reading} trên Kinh Thánh 1925 Online`}
                        >
                          <BookOpen className="w-3.5 h-3.5 text-orange-300" />
                          <span className="hidden sm:inline">Đọc Online</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>

                        <span className={`text-xs px-2.5 py-1 rounded-lg font-bold ${
                          isDone ? 'bg-emerald-100 text-emerald-900 border border-emerald-200' : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}>
                          {isDone ? 'Đã đọc' : 'Chưa đọc'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: NOTES */}
          {activeTab === 'notes' && (
            <div className="space-y-5">
              
              {/* Form to add note */}
              <form onSubmit={handleAddNoteSubmit} className="space-y-3 bg-amber-50/60 p-4 rounded-2xl border border-amber-200">
                <label className="block text-xs font-black text-amber-950">
                  Viết ghi chú / Cảm nhận / Lời cầu nguyện cho {plan.monthTitle}:
                </label>
                <textarea
                  rows={3}
                  value={newNoteContent}
                  onChange={(e) => setNewNoteContent(e.target.value)}
                  placeholder="Ghi lại bài học nhận được từ bài đọc Kinh Thánh hôm nay..."
                  className="w-full p-3 bg-white text-xs font-medium text-slate-800 placeholder-slate-400 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                  type="submit"
                  disabled={!newNoteContent.trim()}
                  className="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-black text-xs rounded-xl transition-colors disabled:opacity-50 shadow-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Lưu Ghi Chú
                </button>
              </form>

              {/* Notes List */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  Danh sách ghi chú cá nhân ({monthNotes.length}):
                </h4>

                {monthNotes.length === 0 ? (
                  <p className="text-xs text-slate-500 italic text-center py-6">
                    Chưa có ghi chú nào cho tháng này. Hãy viết bài học đầu tiên của bạn ở trên!
                  </p>
                ) : (
                  monthNotes.map((n) => (
                    <div key={n.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] text-amber-900 font-extrabold block mb-1">
                          📅 {n.date}
                        </span>
                        <p className="text-xs text-slate-800 whitespace-pre-wrap leading-relaxed font-medium">
                          {n.content}
                        </p>
                      </div>
                      <button
                        onClick={() => onDeleteNote(n.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Xóa ghi chú này"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB 4: QUESTIONS */}
          {activeTab === 'questions' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600 italic font-medium">
                Hãy dùng những câu hỏi suy ngẫm thực hành này để thảo luận trong nhóm tế bào, gia đình hoặc áp dụng cá nhân:
              </p>

              <div className="space-y-3">
                {plan.reflectionQuestions.map((q, idx) => (
                  <div key={idx} className="bg-amber-50/50 p-4 rounded-2xl border border-amber-200/80 flex items-start space-x-3">
                    <span className="p-2 bg-amber-100 text-amber-900 rounded-xl font-black text-xs shrink-0 border border-amber-300">
                      Q{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed pt-1">
                      {q}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-amber-50/50 border-t border-amber-200/80 p-4 flex items-center justify-between text-xs text-slate-600 font-medium">
          <span>Kế Hoạch Đọc Kinh Thánh 12 Tháng • VI1925</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition-colors"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
};
