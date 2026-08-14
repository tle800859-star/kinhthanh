import React, { useState, useEffect } from 'react';
import { BIBLE_PLAN_DATA } from './data/biblePlanData';
import { MonthPlan, UserNote, QuizAttemptResult } from './types';
import { Header } from './components/Header';
import { MonthCard } from './components/MonthCard';
import { MonthDetailModal } from './components/MonthDetailModal';
import { OverviewAnalysis } from './components/OverviewAnalysis';
import { ProgressTracker } from './components/ProgressTracker';
import { ExportModal } from './components/ExportModal';
import { BibleQuizSection } from './components/BibleQuizSection';
import { MonthlyReadingDocView } from './components/MonthlyReadingDocView';
import { BookOpen, Sparkles, User, BookmarkCheck, Bookmark, FileDown, FileText } from 'lucide-react';
import { downloadMonthlyReadingWordDoc } from './data/monthlyReadingDocData';

export default function App() {
  const [activeTab, setActiveTab] = useState<'plan' | 'overview' | 'progress' | 'quiz' | 'doc'>('plan');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<MonthPlan | null>(null);
  const [isExportOpen, setIsExportOpen] = useState(false);

  // Student Name State
  const [studentName, setStudentName] = useState<string>(() => {
    try {
      return localStorage.getItem('bible_app_student_name') || 'Nguyễn Văn A';
    } catch (e) {
      return 'Nguyễn Văn A';
    }
  });

  // LocalStorage state for completed days
  const [completedDays, setCompletedDays] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('bible_plan_completed_days');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  // LocalStorage state for notes
  const [userNotes, setUserNotes] = useState<UserNote[]>(() => {
    try {
      const saved = localStorage.getItem('bible_plan_user_notes');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // LocalStorage state for Quiz History
  const [quizHistory, setQuizHistory] = useState<QuizAttemptResult[]>(() => {
    try {
      const saved = localStorage.getItem('bible_app_quiz_history');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('bible_app_student_name', studentName);
    } catch (e) {
      console.error('Failed to save student name', e);
    }
  }, [studentName]);

  useEffect(() => {
    try {
      localStorage.setItem('bible_plan_completed_days', JSON.stringify(completedDays));
    } catch (e) {
      console.error('Failed to save completed days', e);
    }
  }, [completedDays]);

  useEffect(() => {
    try {
      localStorage.setItem('bible_plan_user_notes', JSON.stringify(userNotes));
    } catch (e) {
      console.error('Failed to save notes', e);
    }
  }, [userNotes]);

  useEffect(() => {
    try {
      localStorage.setItem('bible_app_quiz_history', JSON.stringify(quizHistory));
    } catch (e) {
      console.error('Failed to save quiz history', e);
    }
  }, [quizHistory]);

  // Toggle single day
  const handleToggleDay = (dayKey: string) => {
    setCompletedDays((prev) => ({
      ...prev,
      [dayKey]: !prev[dayKey],
    }));
  };

  // Add user note
  const handleAddNote = (monthId: number, content: string) => {
    const newNote: UserNote = {
      id: Date.now().toString(),
      monthId,
      date: new Date().toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
      content,
    };
    setUserNotes((prev) => [newNote, ...prev]);
  };

  // Delete user note
  const handleDeleteNote = (noteId: string) => {
    setUserNotes((prev) => prev.filter((n) => n.id !== noteId));
  };

  // Save Quiz Result
  const handleSaveQuizResult = (result: QuizAttemptResult) => {
    setQuizHistory((prev) => [result, ...prev]);
  };

  // Reset progress
  const handleResetProgress = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa toàn bộ tiến độ đã lưu không?')) {
      setCompletedDays({});
      setUserNotes([]);
      setQuizHistory([]);
    }
  };

  // Search filtering
  const filteredPlans = BIBLE_PLAN_DATA.filter((plan) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      plan.monthTitle.toLowerCase().includes(q) ||
      plan.themeTitle.toLowerCase().includes(q) ||
      plan.booksText.toLowerCase().includes(q) ||
      plan.summary.toLowerCase().includes(q) ||
      plan.theologicalConcept.toLowerCase().includes(q) ||
      plan.keyVerses.some((v) => v.text.toLowerCase().includes(q) || v.reference.toLowerCase().includes(q))
    );
  });

  // Calculate total stats
  const totalDaysCount = BIBLE_PLAN_DATA.reduce((acc, m) => acc + m.suggestedSchedule.length, 0);
  const totalCompletedDaysCount = Object.values(completedDays).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased flex flex-col selection:bg-orange-500 selection:text-white">
      
      {/* App Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalCompletedDays={totalCompletedDaysCount}
        totalDays={totalDaysCount}
        studentName={studentName}
        onOpenExport={() => setIsExportOpen(true)}
      />

      {/* Main Body Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* STUDENT GREETING & INPUT BANNER */}
        <div className="bg-white border border-sky-200/80 p-4 sm:p-5 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <div className="p-3 bg-orange-500/10 text-orange-600 rounded-2xl shrink-0 border border-orange-200">
              <User className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] text-blue-900 font-black uppercase tracking-wider block">
                Chào mừng Anh Chị Em
              </span>
              <div className="flex items-center space-x-2 mt-0.5">
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Nhập tên Anh Chị Em..."
                  className="bg-sky-50/60 border border-sky-300 text-blue-950 font-black text-sm sm:text-base px-3.5 py-1.5 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-sky-200 focus:outline-none w-full sm:w-64 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 w-full sm:w-auto justify-end">
            <button
              onClick={() => setActiveTab('doc')}
              className={`px-3.5 py-2.5 font-black rounded-2xl transition-all shadow-sm flex items-center space-x-1.5 ${
                activeTab === 'doc'
                  ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                  : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200'
              }`}
              title="Xem và tải file Word toàn văn 12 tháng"
            >
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>Nội Dung 12 Tháng (Word)</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className="px-4 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-orange-700 text-white font-black rounded-2xl transition-all shadow-md shadow-orange-500/20 flex items-center space-x-2"
            >
              <BookmarkCheck className="w-4 h-4" />
              <span>Kiểm Tra Bài Đọc VI1925</span>
            </button>
          </div>
        </div>

        {/* TAB 1: MONTHLY PLAN GRID */}
        {activeTab === 'plan' && (
          <div className="space-y-6">
            
            {/* Introductory Banner with Vibrant Gradient & Vector Overlay */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-sky-900 to-blue-900 text-white border border-sky-800/60 p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              {/* Decorative Mesh Spheres & Geometric Grid */}
              <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-orange-500/25 blur-3xl pointer-events-none" />
              <div className="absolute -left-12 -top-12 w-64 h-64 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`,
                  backgroundSize: '18px 18px'
                }}
              />
              <div className="absolute right-16 -bottom-6 text-white/10 pointer-events-none hidden lg:block">
                <BookOpen className="w-48 h-48" />
              </div>

              <div className="relative z-10 space-y-2 max-w-3xl">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 bg-orange-500 text-white rounded-xl shadow-sm">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black font-serif text-white">
                    Lộ Trình Đọc Kinh Thánh 1 Năm (Bản Dịch Truyền Thống 1925)
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-sky-100 leading-relaxed font-serif">
                  Chọn từng tháng để xem phân tích thần học, mối liên kết Cựu Ước &amp; Tân Ước, và thực hiện bài trắc nghiệm kiểm tra kiến thức dành cho Anh Chị Em.
                </p>
              </div>

              <button
                onClick={() => setActiveTab('overview')}
                className="relative z-10 inline-flex items-center px-4 py-2.5 bg-white hover:bg-orange-50 text-blue-950 text-xs font-black rounded-2xl border border-sky-200 shadow-sm transition-colors shrink-0"
              >
                <BookOpen className="w-4 h-4 mr-2 text-orange-600" />
                Xem Phân Tích Tổng Quan
              </button>
            </div>

            {/* Search feedback */}
            {searchQuery.trim() && (
              <div className="flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-sky-200 text-xs shadow-sm">
                <span className="text-slate-700 font-medium">
                  Kết quả tìm kiếm cho <strong className="text-blue-900 font-bold">"{searchQuery}"</strong> ({filteredPlans.length} tháng)
                </span>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-orange-600 hover:underline font-bold"
                >
                  Xóa bộ lọc
                </button>
              </div>
            )}

            {/* Month Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPlans.map((plan) => {
                const completedCount = plan.suggestedSchedule.filter(
                  (item) => completedDays[`m${plan.id}-d${item.day}`]
                ).length;

                return (
                  <MonthCard
                    key={plan.id}
                    plan={plan}
                    completedDaysCount={completedCount}
                    onSelect={(p) => setSelectedPlan(p)}
                  />
                );
              })}
            </div>

            {filteredPlans.length === 0 && (
              <div className="text-center py-16 bg-white rounded-3xl border border-amber-200 space-y-3 shadow-sm">
                <p className="text-slate-600 text-sm font-medium">
                  Không tìm thấy tháng nào phù hợp với từ khóa "{searchQuery}".
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 bg-amber-600 text-white font-bold text-xs rounded-xl hover:bg-amber-700 transition-colors"
                >
                  Xem tất cả 12 tháng
                </button>
              </div>
            )}

          </div>
        )}

        {/* TAB 2: BIBLE QUIZ SECTION */}
        {activeTab === 'quiz' && (
          <BibleQuizSection
            studentName={studentName}
            onUpdateStudentName={setStudentName}
            onSaveQuizResult={handleSaveQuizResult}
          />
        )}

        {/* TAB 3: OVERVIEW THEOLOGICAL ANALYSIS */}
        {activeTab === 'overview' && (
          <OverviewAnalysis onSelectMonth={(plan) => setSelectedPlan(plan)} />
        )}

        {/* TAB 4: PROGRESS TRACKER */}
        {activeTab === 'progress' && (
          <ProgressTracker
            completedDays={completedDays}
            userNotes={userNotes}
            onSelectMonth={(plan) => setSelectedPlan(plan)}
            onDeleteNote={handleDeleteNote}
            onResetProgress={handleResetProgress}
          />
        )}

        {/* TAB 5: MONTHLY READING FULL DOCUMENT & WORD EXPORT */}
        {activeTab === 'doc' && (
          <MonthlyReadingDocView
            onGoToPlan={(monthId) => {
              const target = BIBLE_PLAN_DATA.find((p) => p.id === monthId);
              if (target) {
                setSelectedPlan(target);
              }
              setActiveTab('plan');
            }}
          />
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-amber-200 text-slate-600 py-6 text-xs mt-12 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <Bookmark className="w-4 h-4 text-amber-600" />
            <span className="font-bold text-amber-950">Đọc Kinh Thánh Mỗi Ngày • Bản dịch Truyền Thống 1925</span>
          </div>
          <p className="text-slate-500 text-center sm:text-right font-medium">
            Lộ Trình Đọc Kinh Thánh Trong 12 Tháng
          </p>
        </div>
      </footer>

      {/* Selected Month Detail Modal */}
      {selectedPlan && (
        <MonthDetailModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
          completedDays={completedDays}
          onToggleDay={handleToggleDay}
          userNotes={userNotes}
          onAddNote={handleAddNote}
          onDeleteNote={handleDeleteNote}
        />
      )}

      {/* Export Modal */}
      {isExportOpen && (
        <ExportModal
          onClose={() => setIsExportOpen(false)}
          completedDays={completedDays}
          userNotes={userNotes}
        />
      )}

    </div>
  );
}
