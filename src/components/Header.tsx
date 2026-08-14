import React from 'react';
import { BookOpen, BarChart3, Search, Sparkles, CheckCircle2, BookmarkCheck, FileText } from 'lucide-react';

interface HeaderProps {
  activeTab: 'plan' | 'overview' | 'progress' | 'quiz' | 'doc';
  setActiveTab: (tab: 'plan' | 'overview' | 'progress' | 'quiz' | 'doc') => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  totalCompletedDays: number;
  totalDays: number;
  studentName?: string;
  onOpenExport: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  totalCompletedDays,
  totalDays,
  studentName,
  onOpenExport,
}) => {
  const percentage = Math.round((totalCompletedDays / totalDays) * 100) || 0;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-blue-100 text-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-gradient-to-tr from-blue-600 via-sky-500 to-blue-700 rounded-2xl shadow-md text-white font-bold flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-blue-950 font-serif">
                  ĐỌC KINH THÁNH MỖI NGÀY
                </h1>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-orange-100 text-orange-800 border border-orange-300">
                  <Sparkles className="w-3 h-3 mr-1 text-orange-600" />
                  Bản 1925
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                Lộ trình 1 năm • Lẽ Thật Kinh Thánh Bản Phan Khôi 1925 (WATV.ORG)
              </p>
            </div>
          </div>

          {/* Search bar & Quick Stats */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-sky-500" />
              <input
                type="text"
                placeholder="Tìm chủ đề, sách, câu Kinh Thánh..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 bg-sky-50/50 text-sm font-medium text-slate-800 placeholder-slate-400 rounded-xl border border-sky-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-sky-200 transition-colors"
              />
            </div>

            {/* Progress Badge */}
            <div className="flex items-center space-x-2 bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <div className="text-xs">
                <span className="text-slate-600 font-medium">Tiến độ: </span>
                <span className="font-extrabold text-blue-900">{totalCompletedDays}/{totalDays}</span>
                <span className="text-slate-500 ml-1">({percentage}%)</span>
              </div>
            </div>

            {/* WATV.org Bible Study Resource Link */}
            <a
              id="header-watv-link"
              href="https://watv.org/vi/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors"
              title="Hiệp Hội Truyền Giáo Tin Lành Thế Giới (WATV.ORG)"
            >
              <BookOpen className="w-3.5 h-3.5 mr-1.5 text-orange-300" />
              <span>Lẽ Thật WATV.ORG ↗</span>
            </a>

            {/* Export button */}
            <button
              onClick={onOpenExport}
              className="inline-flex items-center px-3 py-1.5 bg-orange-50 hover:bg-orange-100 text-orange-700 text-xs font-bold rounded-xl border border-orange-200 shadow-sm transition-colors"
              title="Xuất kế hoạch &amp; báo cáo"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5 text-orange-600" />
              Xuất File
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-1.5 mt-3 pt-2.5 border-t border-slate-100 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('plan')}
            className={`flex items-center space-x-2 px-4 py-2 text-xs sm:text-sm font-black rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'plan'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'text-slate-600 hover:text-blue-900 hover:bg-sky-50/80'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Danh Mục 12 Tháng</span>
          </button>

          <button
            onClick={() => setActiveTab('doc')}
            className={`flex items-center space-x-2 px-4 py-2 text-xs sm:text-sm font-black rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'doc'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                : 'text-slate-600 hover:text-emerald-900 hover:bg-emerald-50/80'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Nội Dung Đọc Hàng Tháng (Word)</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center space-x-2 px-4 py-2 text-xs sm:text-sm font-black rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'quiz'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
                : 'text-slate-600 hover:text-orange-900 hover:bg-orange-50/80'
            }`}
          >
            <BookmarkCheck className="w-4 h-4" />
            <span>Trắc Nghiệm &amp; Kiểm Tra</span>
          </button>

          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center space-x-2 px-4 py-2 text-xs sm:text-sm font-black rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'text-slate-600 hover:text-blue-900 hover:bg-sky-50/80'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Phân Tích Thần Học</span>
          </button>

          <button
            onClick={() => setActiveTab('progress')}
            className={`flex items-center space-x-2 px-4 py-2 text-xs sm:text-sm font-black rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'progress'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'text-slate-600 hover:text-blue-900 hover:bg-sky-50/80'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Tiến Độ &amp; Ghi Chú</span>
          </button>
        </div>
      </div>
    </header>
  );
};
