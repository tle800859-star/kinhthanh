import React from 'react';
import { BIBLE_PLAN_DATA } from '../data/biblePlanData';
import { UserNote } from '../types';
import { X, Printer, Download, BookOpen, FileDown, FileText } from 'lucide-react';
import { downloadMonthlyReadingWordDoc } from '../data/monthlyReadingDocData';

interface ExportModalProps {
  onClose: () => void;
  completedDays: Record<string, boolean>;
  userNotes: UserNote[];
}

export const ExportModal: React.FC<ExportModalProps> = ({
  onClose,
  completedDays,
  userNotes,
}) => {

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    let text = `====================================================\n`;
    text += `BÁO CÁO TIẾN ĐỘ ĐỌC KINH THÁNH 12 THÁNG THEO CHỦ ĐỀ THẦN HỌC\n`;
    text += `====================================================\n\n`;

    BIBLE_PLAN_DATA.forEach((m) => {
      const mTotal = m.suggestedSchedule.length;
      const mDone = m.suggestedSchedule.filter((item) => completedDays[`m${m.id}-d${item.day}`]).length;
      text += `[${m.monthTitle}] ${m.themeTitle}\n`;
      text += `Sách trọng tâm: ${m.booksText}\n`;
      text += `Tiến độ: ${mDone}/${mTotal} ngày\n`;
      text += `Ý nghĩa thần học: ${m.theologicalConcept}\n\n`;
    });

    if (userNotes.length > 0) {
      text += `\n----------------------------------------------------\n`;
      text += `NHẬT KÝ & GHI CHÚ CÁ NHÂN (${userNotes.length}):\n`;
      text += `----------------------------------------------------\n`;
      userNotes.forEach((n) => {
        text += `[${n.date} - Tháng ${n.monthId}] ${n.content}\n\n`;
      });
    }

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Ke_Hoach_Doc_Kinh_Thanh_12_Thang.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 text-slate-200">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600/30 border border-blue-500/40 rounded-xl">
              <BookOpen className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <h3 className="text-lg font-black font-serif text-slate-100">
                Xuất File &amp; Lưu Trữ Tài Liệu
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                Tải về nội dung đọc 12 tháng dạng Microsoft Word (.doc) hoặc văn bản (.txt)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-100 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Featured Word download card */}
        <div className="bg-gradient-to-r from-blue-900/60 to-sky-950/80 border border-sky-600/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-black rounded-md uppercase">
                Khuyên dùng
              </span>
              <h4 className="text-sm font-bold text-white">
                Nội Dung Kinh Thánh Đọc Hàng Tháng (.doc / Word)
              </h4>
            </div>
            <p className="text-xs text-sky-200/80 leading-relaxed">
              File Word chứa trọn vẹn 12 tháng: danh mục sách, tổng quan, bản chất cốt lõi WATV.ORG, câu gốc nền tảng và lịch đọc 30 ngày.
            </p>
          </div>

          <button
            onClick={downloadMonthlyReadingWordDoc}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all whitespace-nowrap"
          >
            <FileDown className="w-4 h-4 mr-2" />
            Tải File Word (.doc)
          </button>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          Ngoài ra, bạn có thể tải file báo cáo tiến độ tóm tắt (.txt) kèm nhật ký ghi chú cá nhân, hoặc in trực tiếp:
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleDownloadTxt}
            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow-md"
          >
            <Download className="w-4 h-4 mr-2" />
            Tải File Tiến Độ (.txt)
          </button>

          <button
            onClick={handlePrint}
            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-xs rounded-xl border border-slate-700 transition-colors"
          >
            <Printer className="w-4 h-4 mr-2 text-amber-400" />
            In Trang Này (Print)
          </button>
        </div>

      </div>
    </div>
  );
};
