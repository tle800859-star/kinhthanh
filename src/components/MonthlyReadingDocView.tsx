import React, { useState } from 'react';
import {
  FileDown,
  Copy,
  Check,
  Printer,
  BookOpen,
  Search,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Bookmark,
  ExternalLink,
} from 'lucide-react';
import {
  MONTHLY_READING_RAW_TEXT,
  MONTHLY_READING_SECTIONS,
  downloadMonthlyReadingWordDoc,
} from '../data/monthlyReadingDocData';

interface MonthlyReadingDocViewProps {
  onGoToPlan?: (monthId: number) => void;
}

export const MonthlyReadingDocView: React.FC<MonthlyReadingDocViewProps> = ({
  onGoToPlan,
}) => {
  const [copied, setCopied] = useState(false);
  const [filterMonth, setFilterMonth] = useState<number>(0); // 0 = all
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedMonths, setExpandedMonths] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
  });

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(MONTHLY_READING_RAW_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const toggleMonth = (mId: number) => {
    setExpandedMonths((prev) => ({
      ...prev,
      [mId]: !prev[mId],
    }));
  };

  const expandAll = () => {
    const all: Record<number, boolean> = {};
    for (let i = 1; i <= 12; i++) all[i] = true;
    setExpandedMonths(all);
  };

  const collapseAll = () => {
    const all: Record<number, boolean> = {};
    for (let i = 1; i <= 12; i++) all[i] = false;
    setExpandedMonths(all);
  };

  const filteredSections = MONTHLY_READING_SECTIONS.filter((sec) => {
    if (filterMonth > 0 && sec.month !== filterMonth) return false;
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      sec.title.toLowerCase().includes(term) ||
      sec.chapters.toLowerCase().includes(term) ||
      sec.overview.toLowerCase().includes(term) ||
      sec.coreTruths.some((t) => t.toLowerCase().includes(term)) ||
      sec.keyVerses.some((kv) => kv.ref.toLowerCase().includes(term) || kv.text.toLowerCase().includes(term))
    );
  });

  return (
    <div className="space-y-6">
      {/* Top Banner / Hero Card */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-sky-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-sky-700/40">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-500/20 border border-sky-400/30 rounded-full text-xs font-bold text-sky-200">
              <BookOpen className="w-3.5 h-3.5 text-amber-300" />
              <span>Tài Liệu Toàn Văn • Bản Dịch Phan Khôi 1925</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-white tracking-tight">
              NỘI DUNG KINH THÁNH ĐỌC HÀNG THÁNG
            </h2>
            <p className="text-xs sm:text-sm text-sky-100 max-w-2xl font-medium leading-relaxed">
              Toàn bộ lộ trình 12 tháng phân tích chi tiết các chương cần đọc, phần tổng quan, bản chất cốt lõi thần học WATV.ORG, câu gốc nền tảng và lịch đọc chi tiết từng ngày.
            </p>
          </div>

          {/* Action Download Buttons */}
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <button
              onClick={downloadMonthlyReadingWordDoc}
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-xs sm:text-sm rounded-2xl shadow-lg shadow-emerald-900/30 border border-emerald-300/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              title="Tải về file Microsoft Word (.doc) đầy đủ nội dung"
            >
              <FileDown className="w-4 h-4 mr-2 text-emerald-100" />
              <span>Tải File Word (.doc)</span>
            </button>

            <button
              onClick={handleCopyText}
              className={`flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-3 font-bold text-xs sm:text-sm rounded-2xl border transition-all ${
                copied
                  ? 'bg-emerald-500/30 border-emerald-400 text-emerald-200'
                  : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
              }`}
              title="Sao chép toàn văn nội dung vào bộ nhớ tạm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2 text-emerald-300" />
                  <span>Đã Sao Chép!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2 text-sky-300" />
                  <span>Sao Chép Tất Cả</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center px-3.5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold rounded-2xl transition-colors"
              title="In trang văn bản này"
            >
              <Printer className="w-4 h-4 text-sky-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 space-y-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm kiếm trong nội dung 12 tháng..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 text-sm font-medium text-slate-800 placeholder-slate-400 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-sky-100 transition-all"
            />
          </div>

          {/* Quick Expand / Collapse controls */}
          <div className="flex items-center space-x-2 w-full sm:w-auto justify-end text-xs font-bold text-slate-600">
            <button
              onClick={expandAll}
              className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Mở rộng tất cả
            </button>
            <button
              onClick={collapseAll}
              className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Thu gọn tất cả
            </button>
          </div>
        </div>

        {/* Month Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar">
          <button
            onClick={() => setFilterMonth(0)}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
              filterMonth === 0
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Tất cả 12 Tháng
          </button>
          {MONTHLY_READING_SECTIONS.map((sec) => (
            <button
              key={sec.month}
              onClick={() => setFilterMonth(sec.month)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                filterMonth === sec.month
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Tháng {sec.month}
            </button>
          ))}
        </div>
      </div>

      {/* Monthly Content Cards */}
      <div className="space-y-6">
        {filteredSections.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 text-slate-500">
            <Search className="w-8 h-8 mx-auto mb-2 text-slate-400" />
            <p className="font-bold text-slate-700">Không tìm thấy nội dung phù hợp</p>
            <p className="text-xs mt-1">Vui lòng thử tìm với từ khóa khác hoặc bấm xem Tất cả 12 Tháng.</p>
          </div>
        ) : (
          filteredSections.map((sec) => {
            const isExpanded = expandedMonths[sec.month] ?? true;
            return (
              <div
                key={sec.month}
                id={`monthly-doc-m${sec.month}`}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:shadow-md"
              >
                {/* Header of the Month */}
                <div
                  onClick={() => toggleMonth(sec.month)}
                  className="cursor-pointer bg-gradient-to-r from-slate-50 via-sky-50/50 to-blue-50/30 p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between gap-4 select-none"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <span className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white font-black text-base sm:text-lg rounded-2xl flex items-center justify-center shadow-md shadow-blue-600/20">
                      T{sec.month}
                    </span>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-black tracking-wider uppercase text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md">
                          Tháng {sec.month}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-xl font-black font-serif text-blue-950 mt-0.5">
                        {sec.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {onGoToPlan && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onGoToPlan(sec.month);
                        }}
                        className="hidden sm:inline-flex items-center px-3 py-1.5 bg-sky-100 hover:bg-sky-200 text-sky-900 text-xs font-bold rounded-xl transition-colors"
                        title="Xem lịch học và trắc nghiệm tháng này"
                      >
                        <span>Học Tháng {sec.month}</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-1" />
                      </button>
                    )}
                    <button className="p-2 text-slate-500 hover:text-slate-800 bg-white rounded-xl border border-slate-200 shadow-2xs">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Collapsible Content */}
                {isExpanded && (
                  <div className="p-5 sm:p-7 space-y-5">
                    {/* Các chương cần đọc */}
                    <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-4">
                      <div className="flex items-center space-x-2 text-blue-900 font-black text-xs uppercase tracking-wider mb-1">
                        <Bookmark className="w-4 h-4 text-blue-600" />
                        <span>Các chương cần đọc:</span>
                      </div>
                      <p className="text-sm font-bold text-blue-950 font-serif">
                        {sec.chapters}
                      </p>
                    </div>

                    {/* Phần tổng quan */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
                        • Phần tổng quan:
                      </h4>
                      <p className="text-sm text-slate-800 font-medium leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                        {sec.overview}
                      </p>
                    </div>

                    {/* Bản chất cốt lõi (WATV.ORG) */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-black uppercase tracking-wider text-blue-800 flex items-center space-x-1.5">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span>• Bản chất cốt lõi (WATV.ORG):</span>
                      </h4>
                      <div className="space-y-2">
                        {sec.coreTruths.map((truth, idx) => (
                          <div
                            key={idx}
                            className="text-xs sm:text-sm text-slate-700 bg-blue-50/40 p-3 rounded-xl border-l-4 border-blue-600 font-medium leading-relaxed"
                          >
                            {truth}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Câu gốc nền tảng */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-black uppercase tracking-wider text-amber-800">
                        • Câu gốc nền tảng:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {sec.keyVerses.map((kv, idx) => (
                          <div
                            key={idx}
                            className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-4 space-y-1.5"
                          >
                            <span className="text-xs font-black text-amber-950 bg-amber-200/70 px-2 py-0.5 rounded-md inline-block">
                              {kv.ref}
                            </span>
                            <p className="text-xs sm:text-sm text-amber-950 italic font-serif leading-relaxed">
                              "{kv.text}"
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Lịch đọc chi tiết */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-black uppercase tracking-wider text-emerald-800">
                        • Lịch đọc chi tiết ({sec.schedule.length} ngày):
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {sec.schedule.map((dayItem, idx) => (
                          <div
                            key={idx}
                            className="flex items-center px-3 py-2 bg-slate-50 hover:bg-emerald-50/60 border border-slate-200 hover:border-emerald-200 rounded-xl text-xs font-medium text-slate-700 transition-colors"
                          >
                            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 flex-shrink-0" />
                            <span className="truncate">{dayItem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Bottom Sticky Floating Word Download Bar */}
      <div className="sticky bottom-4 z-30 bg-white/95 backdrop-blur-md border border-blue-200 shadow-2xl rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-3 text-left">
          <div className="p-2 bg-blue-100 text-blue-700 rounded-xl">
            <FileDown className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-black text-blue-950">
              Lưu &amp; Tải file Word nội dung 12 Tháng
            </p>
            <p className="text-[11px] text-slate-500 font-medium">
              Định dạng chuẩn Microsoft Word, Google Docs (.doc / Word)
            </p>
          </div>
        </div>

        <button
          onClick={downloadMonthlyReadingWordDoc}
          className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md shadow-blue-600/30 transition-all"
        >
          <FileDown className="w-4 h-4 mr-2" />
          Tải Về File Word (.doc)
        </button>
      </div>
    </div>
  );
};
