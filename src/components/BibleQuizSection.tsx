import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import { BIBLE_PLAN_DATA } from '../data/biblePlanData';
import { generateLocalQuizQuestions } from '../data/quizBank';
import { playCorrectSound, playIncorrectSound } from '../utils/soundEffects';
import { QuizQuestion, QuizDifficulty, QuizAttemptResult } from '../types';
import {
  HelpCircle,
  Sparkles,
  Award,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  BookOpen,
  Printer,
  Sliders,
  User,
  ShieldCheck,
  Check,
  BrainCircuit,
  Flame,
  Crown,
  Star,
  ExternalLink,
  Download,
  Image,
  Loader2,
  FileSpreadsheet,
  FileText
} from 'lucide-react';

interface BibleQuizSectionProps {
  studentName: string;
  onUpdateStudentName: (name: string) => void;
  onSaveQuizResult?: (result: QuizAttemptResult) => void;
}

export function BibleQuizSection({
  studentName,
  onUpdateStudentName,
  onSaveQuizResult,
}: BibleQuizSectionProps) {
  // Config state
  const [selectedMonthId, setSelectedMonthId] = useState<number>(1);
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(0); // 0 = all month
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [difficulty, setDifficulty] = useState<QuizDifficulty>('Tổng hợp 3 mức độ');
  const [useAi, setUseAi] = useState<boolean>(true);

  // Active Quiz State
  const [quizState, setQuizState] = useState<'config' | 'loading' | 'active' | 'result'>('config');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [lastResult, setLastResult] = useState<QuizAttemptResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Certificate Download Ref & State
  const certRef = useRef<HTMLDivElement>(null);
  const [isDownloadingCert, setIsDownloadingCert] = useState<boolean>(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState<boolean>(false);

  // Helper function to capture high-definition certificate canvas
  const captureCertCanvas = async () => {
    if (!certRef.current) return null;
    await document.fonts.ready;
    return await html2canvas(certRef.current, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#030712',
      logging: false,
      scrollX: 0,
      scrollY: 0,
      onclone: (clonedDoc) => {
        const el = clonedDoc.getElementById('certificate-print-area');
        if (el) {
          // Normalize dimensions on cloned doc for pristine HD rendering across mobile & desktop
          el.style.width = '1200px';
          el.style.height = '675px';
          el.style.maxWidth = 'none';
          el.style.maxHeight = 'none';
          el.style.borderRadius = '24px';
        }
      }
    });
  };

  const handleDownloadCertImage = async () => {
    if (!certRef.current) return;
    try {
      setIsDownloadingCert(true);
      const canvas = await captureCertCanvas();
      if (!canvas) return;

      const imageUri = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      const safeStudentName = (lastResult?.studentName || 'Thanh_Do')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z0-9]/g, '_');
      link.download = `Giay_Chung_Nhan_Kinh_Thanh_${safeStudentName}.png`;
      link.href = imageUri;
      link.click();
    } catch (err) {
      console.error('Lỗi khi xuất hình ảnh:', err);
      alert('Không thể tự động xuất ảnh, bạn vui lòng nhấn nút "In / Lưu PDF" để chọn lưu làm tệp PDF.');
    } finally {
      setIsDownloadingCert(false);
    }
  };

  const handleDownloadCertPdf = async () => {
    if (!certRef.current) return;
    try {
      setIsDownloadingPdf(true);
      const canvas = await captureCertCanvas();
      if (!canvas) return;

      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');

      const safeStudentName = (lastResult?.studentName || 'Thanh_Do')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z0-9]/g, '_');

      pdf.save(`Giay_Chung_Nhan_Kinh_Thanh_${safeStudentName}.pdf`);
    } catch (err) {
      console.error('Lỗi khi tạo tệp PDF:', err);
      window.print();
    } finally {
      setIsDownloadingPdf(false);
    }
  };

  // Download Student Result Excel Report (.xlsx)
  const handleDownloadExcelReport = () => {
    if (!lastResult) return;

    const studentNameClean = (lastResult.studentName || 'Anh Chị Em').normalize('NFC');
    const lessonTitleText = (lastResult.lessonTitle || 'Lớp Đọc Kinh Thánh').normalize('NFC');
    const score = lastResult.scorePercentage;

    let rankLabel = 'HOÀN THÀNH';
    if (score >= 90) rankLabel = 'XUẤT SẮC';
    else if (score >= 80) rankLabel = 'GIỎI';
    else if (score >= 50) rankLabel = 'HOÀN THÀNH TỐT';

    // Sheet 1: Bảng tổng quan
    const summaryRows = [
      { "HẠNG MỤC THÔNG TIN": "Họ và Tên Anh Chị Em", "THÔNG TIN BÀI LÀM": studentNameClean },
      { "HẠNG MỤC THÔNG TIN": "Ngày Thực Hiện", "THÔNG TIN BÀI LÀM": lastResult.date },
      { "HẠNG MỤC THÔNG TIN": "Bài Học / Chủ Đề Kinh Thánh", "THÔNG TIN BÀI LÀM": lessonTitleText },
      { "HẠNG MỤC THÔNG TIN": "Cấp Độ Bài Trắc Nghiệm", "THÔNG TIN BÀI LÀM": lastResult.difficulty },
      { "HẠNG MỤC THÔNG TIN": "Tổng Số Câu Hỏi", "THÔNG TIN BÀI LÀM": lastResult.totalQuestions },
      { "HẠNG MỤC THÔNG TIN": "Số Câu Trả Lời Đúng", "THÔNG TIN BÀI LÀM": lastResult.correctAnswersCount },
      { "HẠNG MỤC THÔNG TIN": "Tỉ Lệ Đạt Được (%)", "THÔNG TIN BÀI LÀM": `${lastResult.scorePercentage}%` },
      { "HẠNG MỤC THÔNG TIN": "Xếp Loại Đạt Được", "THÔNG TIN BÀI LÀM": rankLabel },
      { "HẠNG MỤC THÔNG TIN": "Quy Chuẩn Kinh Thánh", "THÔNG TIN BÀI LÀM": "Bản Dịch Truyền Thống 1925 (VI1925)" }
    ];

    // Sheet 2: Chi tiết từng câu hỏi & câu trả lời của học sinh
    const detailRows = lastResult.questions.map((q, idx) => {
      const userChoiceIdx = lastResult.userAnswers[idx];
      const userChoiceText = userChoiceIdx !== undefined ? q.options[userChoiceIdx] : 'Chưa trả lời';
      const correctText = q.options[q.correctIndex];
      const isCorrect = userChoiceIdx === q.correctIndex;

      return {
        "STT": idx + 1,
        "Mức Độ": q.difficultyLevel,
        "Câu Hỏi Kinh Thánh": q.question,
        "Đáp Án Anh Chị Em Chọn": userChoiceText,
        "Đáp Án Đúng Standard (VI1925)": correctText,
        "Kết Quả": isCorrect ? "ĐÚNG ✅" : "SAI ❌",
        "Dẫn Chứng & Giải Thích Kinh Thánh": q.explanation || ''
      };
    });

    const workbook = XLSX.utils.book_new();

    const wsSummary = XLSX.utils.json_to_sheet(summaryRows);
    wsSummary['!cols'] = [{ wch: 32 }, { wch: 65 }];
    XLSX.utils.book_append_sheet(workbook, wsSummary, 'Tong_Quan_Ket_Qua');

    const wsDetail = XLSX.utils.json_to_sheet(detailRows);
    wsDetail['!cols'] = [
      { wch: 6 },
      { wch: 14 },
      { wch: 55 },
      { wch: 32 },
      { wch: 32 },
      { wch: 12 },
      { wch: 60 }
    ];
    XLSX.utils.book_append_sheet(workbook, wsDetail, 'Chi_Tiet_Bai_Lam');

    const safeName = studentNameClean
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9]/g, '_');

    XLSX.writeFile(workbook, `Bai_Lam_Kinh_Thanh_${safeName}.xlsx`);
  };

  // Handle Name Change
  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateStudentName(e.target.value);
  };

  // Start Quiz
  const handleStartQuiz = async () => {
    if (!studentName.trim()) {
      alert('Vui lòng nhập tên Anh Chị Em trước khi bắt đầu bài kiểm tra.');
      return;
    }

    setQuizState('loading');
    setErrorMessage(null);

    const monthObj = BIBLE_PLAN_DATA.find((m) => m.id === selectedMonthId) || BIBLE_PLAN_DATA[0];
    let lessonTitle = `${monthObj.monthTitle}: ${monthObj.themeTitle}`;
    let readingContent = monthObj.booksText;

    if (selectedDayNumber > 0) {
      const daySchedule = monthObj.suggestedSchedule.find((s) => s.day === selectedDayNumber);
      if (daySchedule) {
        lessonTitle = `${monthObj.monthTitle} - Ngày ${daySchedule.day}: ${daySchedule.reading}`;
        readingContent = `${daySchedule.reading} (${daySchedule.focus})`;
      }
    }

    if (useAi) {
      try {
        const response = await fetch('/api/quiz/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            lessonTitle,
            readingContent,
            questionCount,
            difficulty,
            studentName,
          }),
        });

        const data = await response.json();

        if (response.ok && data.questions && data.questions.length > 0) {
          let finalQs: QuizQuestion[] = [...data.questions];

          // Guarantee exact requested count (whether 5, 10, 15, 20, 25, 30)
          if (finalQs.length < questionCount) {
            const extraLocal = generateLocalQuizQuestions(
              selectedMonthId,
              selectedDayNumber,
              questionCount,
              difficulty,
              studentName
            );
            for (const lq of extraLocal) {
              if (finalQs.length >= questionCount) break;
              if (!finalQs.some((q) => q.question === lq.question)) {
                finalQs.push({
                  ...lq,
                  id: `bf-${finalQs.length + 1}`
                });
              }
            }
          } else if (finalQs.length > questionCount) {
            finalQs = finalQs.slice(0, questionCount);
          }

          setQuestions(finalQs);
          setCurrentIndex(0);
          setUserAnswers({});
          setShowExplanation(false);
          setQuizState('active');
          return;
        } else {
          console.warn('AI Quiz endpoint error, switching to local offline questions:', data.message);
          setErrorMessage('Đang sử dụng bộ câu hỏi offline Bản dịch 1925.');
        }
      } catch (err) {
        console.warn('Fetch failed, falling back to local quiz bank:', err);
        setErrorMessage('Không kết nối được AI server. Hệ thống tự động chuyển sang bộ câu hỏi chuẩn VI1925 offline.');
      }
    }

    // Local Fallback (ALWAYS produces exact questionCount)
    const localQs = generateLocalQuizQuestions(
      selectedMonthId,
      selectedDayNumber,
      questionCount,
      difficulty,
      studentName
    );
    setQuestions(localQs.slice(0, questionCount));
    setCurrentIndex(0);
    setUserAnswers({});
    setShowExplanation(false);
    setQuizState('active');
  };

  // Select option for current question with Sound & Confetti feedback!
  const handleSelectOption = (optionIdx: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIdx,
    }));

    const currentQ = questions[currentIndex];
    if (currentQ) {
      if (optionIdx === currentQ.correctIndex) {
        // Correct Answer -> Powerful Victory Fanfare + Tung Bông Tung Hoa Confetti!
        playCorrectSound();
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#0284c7', '#f97316', '#3b82f6', '#fb923c', '#10b981', '#f59e0b']
        });
      } else {
        // Incorrect Answer -> Gentle Encouraging Sound
        playIncorrectSound();
      }
    }
  };

  // Submit Quiz & Calculate score
  const handleSubmitQuiz = () => {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    const percentage = Math.round((correctCount / questions.length) * 100);
    const monthObj = BIBLE_PLAN_DATA.find((m) => m.id === selectedMonthId);
    const lessonTitle = monthObj ? `${monthObj.monthTitle} (${monthObj.themeTitle})` : 'Toàn bộ Lộ Trình';

    const resultObj: QuizAttemptResult = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
      studentName: studentName || 'Thánh đồ',
      lessonTitle,
      totalQuestions: questions.length,
      correctAnswersCount: correctCount,
      scorePercentage: percentage,
      difficulty,
      userAnswers,
      questions,
    };

    setLastResult(resultObj);
    if (onSaveQuizResult) {
      onSaveQuizResult(resultObj);
    }

    if (percentage >= 70) {
      playCorrectSound();
      confetti({
        particleCount: 180,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#0284c7', '#f97316', '#3b82f6', '#10b981', '#fb923c']
      });
    }

    setQuizState('result');
  };

  // Reset Quiz to Config
  const handleResetToConfig = () => {
    setQuizState('config');
    setQuestions([]);
    setUserAnswers({});
    setCurrentIndex(0);
    setLastResult(null);
  };

  const currentQ = questions[currentIndex];
  const activeMonth = BIBLE_PLAN_DATA.find((m) => m.id === selectedMonthId) || BIBLE_PLAN_DATA[0];

  return (
    <div className="space-y-8">
      {/* SECTION HEADER WITH BLUE & ORANGE VIVID BANNER */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-sky-900 to-indigo-900 text-white border border-sky-800/60 p-6 sm:p-8 rounded-3xl shadow-lg">
        {/* Background Mesh Spheres & Grid Overlay */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-orange-500/25 blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -top-10 w-64 h-64 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`,
            backgroundSize: '18px 18px'
          }}
        />
        <div className="absolute right-20 -bottom-6 text-white/10 pointer-events-none hidden lg:block">
          <BrainCircuit className="w-48 h-48" />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 bg-orange-500 text-white rounded-xl shadow-sm">
                <BrainCircuit className="w-5 h-5" />
              </span>
              <span className="text-xs font-black text-orange-300 uppercase">
                Hệ Thống Trắc Nghiệm Kinh Thánh • VI1925
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-serif">
              Kiểm Tra &amp; Ôn Tập Bài Học Mỗi Ngày
            </h2>
            <p className="text-xs sm:text-sm text-sky-100 max-w-2xl leading-relaxed font-serif">
              Tùy chọn số lượng câu hỏi (tối đa 30 câu), mức độ nhận biết - thông hiểu - vận dụng, bài học theo lộ trình 1 năm Bản dịch Truyền Thống 1925.
            </p>
            <div className="pt-1">
              <a
                href="https://kinhthanh.httlvn.org/?v=VI1934"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-black rounded-xl shadow transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-orange-200" />
                <span>Tra Cứu Kinh Thánh 1925 Online ↗</span>
              </a>
            </div>
          </div>

          {/* Student Name Card */}
          <div className="bg-white/10 backdrop-blur-md border border-orange-300/40 p-4 rounded-2xl flex items-center space-x-3 shrink-0 shadow-lg min-w-[260px]">
            <div className="p-2.5 bg-orange-500 text-white rounded-xl font-bold">
              <User className="w-5 h-5" />
            </div>
            <div className="space-y-0.5 flex-1">
              <label className="text-[10px] font-extrabold text-orange-200 uppercase tracking-wider block">
                TÊN ANH CHỊ EM
              </label>
              <input
                type="text"
                value={studentName}
                onChange={handleNameInput}
                placeholder="Nhập tên Anh Chị Em..."
                className="w-full bg-transparent text-sm font-black text-white focus:outline-none placeholder-orange-200/60 border-b border-orange-300/50 focus:border-white pb-0.5 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* STATE 1: CONFIGURATION FORM */}
      {quizState === 'config' && (
        <div className="bg-white border border-sky-200/80 rounded-3xl p-6 sm:p-8 space-y-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* LEFT COLUMN: LESSON & DIFFICULTY SELECTION */}
            <div className="space-y-6">
              
              {/* 1. CHỌN BÀI (LESSON SELECT) */}
              <div className="space-y-3">
                <label className="flex items-center text-sm font-black text-blue-950">
                  <BookOpen className="w-4 h-4 text-orange-500 mr-2" />
                  1. Chọn Bài / Tháng Đọc
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <span className="text-[11px] text-slate-500 font-bold">Tháng Lộ Trình (1-12)</span>
                    <select
                      value={selectedMonthId}
                      onChange={(e) => {
                        setSelectedMonthId(Number(e.target.value));
                        setSelectedDayNumber(0);
                      }}
                      className="w-full bg-sky-50/60 border border-sky-200 text-slate-800 text-xs font-bold rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none"
                    >
                      {BIBLE_PLAN_DATA.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.monthTitle}: {m.themeTitle}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] text-slate-500 font-bold">Bài Đọc Theo Ngày (Tùy chọn)</span>
                    <select
                      value={selectedDayNumber}
                      onChange={(e) => setSelectedDayNumber(Number(e.target.value))}
                      className="w-full bg-sky-50/60 border border-sky-200 text-slate-800 text-xs font-bold rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none"
                    >
                      <option value={0}>Tất cả bài trong {activeMonth.monthTitle}</option>
                      {activeMonth.suggestedSchedule.map((s) => (
                        <option key={s.day} value={s.day}>
                          Ngày {s.day}: {s.reading}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="bg-sky-50 p-3.5 rounded-2xl border border-sky-200 text-xs text-slate-700 flex items-start space-x-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-blue-950 font-bold">Nội dung bài chọn: </span>
                    <span className="text-slate-700 font-medium">{activeMonth.booksText}</span>
                  </div>
                </div>
              </div>

              {/* 2. CHỌN MỨC ĐỘ (DIFFICULTY LEVEL) */}
              <div className="space-y-3">
                <label className="flex items-center text-sm font-black text-blue-950">
                  <Sliders className="w-4 h-4 text-orange-500 mr-2" />
                  2. Chọn Mức Độ Câu Hỏi
                </label>
                
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      id: 'Nhận biết',
                      label: 'Nhận Biết',
                      desc: 'Trí nhớ, sự kiện, từ ngữ VI1925',
                      color: 'border-blue-400 text-blue-900 bg-blue-50',
                    },
                    {
                      id: 'Thông hiểu',
                      label: 'Thông Hiểu',
                      desc: 'Ý nghĩa thần học & bối cảnh',
                      color: 'border-emerald-400 text-emerald-900 bg-emerald-50',
                    },
                    {
                      id: 'Vận dụng',
                      label: 'Vận Dụng',
                      desc: 'Áp dụng Lời Chúa vào thực tế',
                      color: 'border-purple-400 text-purple-900 bg-purple-50',
                    },
                    {
                      id: 'Tổng hợp 3 mức độ',
                      label: 'Tổng Hợp 3 Mức Độ',
                      desc: 'Cân bằng cả 3 mức độ',
                      color: 'border-orange-400 text-orange-950 bg-orange-50',
                    },
                  ].map((lvl) => {
                    const isSelected = difficulty === lvl.id;
                    return (
                      <button
                        key={lvl.id}
                        type="button"
                        onClick={() => setDifficulty(lvl.id as QuizDifficulty)}
                        className={`p-3.5 rounded-2xl border text-left transition-all relative ${
                          isSelected
                            ? `${lvl.color} ring-2 ring-orange-500/80 shadow-md scale-[1.02]`
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold">{lvl.label}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-orange-600" />}
                        </div>
                        <p className="text-[10px] text-slate-500 mt-1 leading-snug font-medium">{lvl.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: QUESTION COUNT & AI ENGINE TOGGLE */}
            <div className="space-y-6">
              
              {/* 3. CHỌN SỐ LƯỢNG CÂU HỎI (TỐI ĐA 30 CÂU) */}
              <div className="space-y-3 bg-sky-50/50 p-5 rounded-2xl border border-sky-200">
                <div className="flex items-center justify-between">
                  <label className="flex items-center text-sm font-black text-blue-950">
                    <HelpCircle className="w-4 h-4 text-orange-500 mr-2" />
                    3. Số Lượng Câu Hỏi
                  </label>
                  <span className="px-3 py-1 bg-orange-100 text-orange-900 text-xs font-black rounded-xl border border-orange-300">
                    {questionCount} câu (Tối đa 30)
                  </span>
                </div>

                {/* Range Slider */}
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  className="w-full accent-orange-500 bg-sky-200 h-2 rounded-lg cursor-pointer"
                />

                {/* Preset Quick Buttons */}
                <div className="flex items-center justify-between gap-1.5 pt-2">
                  {[5, 10, 15, 20, 25, 30].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setQuestionCount(num)}
                      className={`flex-1 py-2 text-xs font-black rounded-xl border transition-all ${
                        questionCount === num
                          ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/20'
                          : 'bg-white text-slate-700 border-sky-200 hover:bg-orange-50'
                      }`}
                    >
                      {num === 30 ? '30 câu (max)' : `${num} câu`}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. CHỌN BỘ TẠO CÂU HỎI (AI VS OFFLINE) */}
              <div className="space-y-3 bg-sky-50/50 p-5 rounded-2xl border border-sky-200">
                <label className="flex items-center text-sm font-black text-blue-950">
                  <Sparkles className="w-4 h-4 text-orange-500 mr-2" />
                  4. Chế Độ Tạo Bộ Trắc Nghiệm
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setUseAi(true)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      useAi
                        ? 'bg-blue-600 border-blue-600 text-white ring-2 ring-blue-400 shadow-md'
                        : 'bg-white border-sky-200 text-slate-600 hover:bg-sky-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold flex items-center">
                        <Sparkles className="w-3.5 h-3.5 mr-1 text-orange-300" />
                        Trí Tuệ AI Gemini 3.6
                      </span>
                      {useAi && <Check className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <p className={`text-[10px] mt-1 font-medium ${useAi ? 'text-blue-100' : 'text-slate-500'}`}>
                      Tự động soạn câu hỏi thông minh bám sát 100% Bản dịch 1925
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setUseAi(false)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      !useAi
                        ? 'bg-blue-600 border-blue-600 text-white ring-2 ring-blue-400 shadow-md'
                        : 'bg-white border-sky-200 text-slate-600 hover:bg-sky-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold flex items-center">
                        <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-300" />
                        Bộ Ngân Hàng Offline
                      </span>
                      {!useAi && <Check className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <p className={`text-[10px] mt-1 font-medium ${!useAi ? 'text-blue-100' : 'text-slate-500'}`}>
                      Load tức thì offline không cần kết nối mạng
                    </p>
                  </button>
                </div>
              </div>

              {/* ACTION BUTTON */}
              <div className="pt-2">
                <button
                  onClick={handleStartQuiz}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-lg shadow-orange-500/25 transform active:scale-95 transition-all flex items-center justify-center space-x-2"
                >
                  <Flame className="w-5 h-5 text-white" />
                  <span>Bắt Đầu Kiểm Tra ({questionCount} Câu)</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* STATE 2: LOADING SCREEN */}
      {quizState === 'loading' && (
        <div className="bg-white border border-sky-200/80 rounded-3xl p-12 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <div className="space-y-1">
            <h3 className="text-lg font-black text-blue-950 font-serif">
              Đang Soạn Bộ Câu Hỏi Dành Cho Anh Chị Em: <span className="text-orange-600">{studentName}</span>
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Hệ thống đang chuẩn bị {questionCount} câu hỏi mức độ "{difficulty}" theo Bản dịch Truyền Thống 1925...
            </p>
          </div>
        </div>
      )}

      {/* STATE 3: ACTIVE QUIZ TAKING */}
      {quizState === 'active' && currentQ && (
        <div className="bg-white border border-sky-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          
          {/* TOP BAR: STUDENT NAME & PROGRESS */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-sky-100">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 bg-orange-100 text-orange-900 text-xs font-black rounded-xl border border-orange-200">
                Anh Chị Em: {studentName}
              </span>
              <span className="text-xs text-slate-600 font-bold">
                {activeMonth.monthTitle} • {questions.length} câu
              </span>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <div className="text-xs font-black text-blue-900 whitespace-nowrap">
                Câu {currentIndex + 1} / {questions.length}
              </div>
              <div className="w-32 bg-sky-100 border border-sky-200 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-orange-500 h-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* QUESTION BOX */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span
                className={`px-3 py-0.5 rounded-full text-[10px] font-extrabold border ${
                  currentQ.difficultyLevel === 'Nhận biết'
                    ? 'bg-blue-50 border-blue-300 text-blue-900'
                    : currentQ.difficultyLevel === 'Thông hiểu'
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    : 'bg-purple-50 border-purple-300 text-purple-900'
                }`}
              >
                Mức độ: {currentQ.difficultyLevel}
              </span>
              {currentQ.lessonRef && (
                <span className="text-[11px] text-slate-500 italic font-medium">
                  Tham chiếu: {currentQ.lessonRef}
                </span>
              )}
            </div>

            <h3 className="text-base sm:text-lg font-black text-blue-950 leading-relaxed font-serif">
              {currentIndex + 1}. {currentQ.question}
            </h3>
          </div>

          {/* OPTIONS LIST */}
          <div className="grid grid-cols-1 gap-3 pt-2">
            {currentQ.options.map((opt, optionIdx) => {
              const letter = String.fromCharCode(65 + optionIdx); // A, B, C, D
              const isSelected = userAnswers[currentIndex] === optionIdx;

              return (
                <button
                  key={optionIdx}
                  onClick={() => handleSelectOption(optionIdx)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start space-x-3 ${
                    isSelected
                      ? 'bg-orange-50 border-orange-500 text-orange-950 ring-2 ring-orange-500 shadow-md'
                      : 'bg-sky-50/40 border-sky-200/80 text-slate-800 hover:bg-orange-50/50 hover:border-orange-300'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-orange-500 text-white'
                        : 'bg-sky-200 text-blue-950'
                    }`}
                  >
                    {letter}
                  </span>
                  <span className="text-xs sm:text-sm font-bold leading-snug pt-0.5">
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>

          {/* EXPLANATION TOGGLE */}
          <div className="pt-2">
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="text-xs text-blue-700 hover:underline font-bold flex items-center space-x-1"
            >
              <HelpCircle className="w-3.5 h-3.5 text-orange-500" />
              <span>{showExplanation ? 'Ẩn giải thích Kinh Thánh VI1925' : 'Xem giải thích Kinh Thánh VI1925'}</span>
            </button>

            {showExplanation && (
              <div className="mt-3 p-4 bg-sky-50 rounded-2xl border border-sky-200 text-xs text-slate-800 space-y-1">
                <span className="font-black text-blue-950 block">Giải thích VI1925:</span>
                <p className="leading-relaxed font-medium">{currentQ.explanation}</p>
              </div>
            )}
          </div>

          {/* NAVIGATION FOOTER */}
          <div className="flex items-center justify-between pt-6 border-t border-sky-100">
            <button
              disabled={currentIndex === 0}
              onClick={() => {
                setCurrentIndex((prev) => Math.max(prev - 1, 0));
                setShowExplanation(false);
              }}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:pointer-events-none text-slate-700 text-xs font-bold rounded-xl transition-colors flex items-center space-x-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Câu Trước</span>
            </button>

            {currentIndex < questions.length - 1 ? (
              <button
                onClick={() => {
                  setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1));
                  setShowExplanation(false);
                }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black rounded-xl transition-all shadow-sm flex items-center space-x-1.5"
              >
                <span>Câu Tiếp Theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmitQuiz}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center space-x-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Nộp Bài Kiểm Tra</span>
              </button>
            )}
          </div>

        </div>
      )}

      {/* STATE 4: QUIZ RESULT & CERTIFICATE */}
      {quizState === 'result' && lastResult && (() => {
        const score = lastResult.scorePercentage;
        
        // Exact grade classification according to user requirements
        const gradeInfo = (() => {
          if (score >= 90) {
            return {
              rankLabel: 'XUẤT SẮC'.normalize('NFC'),
              rankSub: 'ĐẠT DANH HIỆU XUẤT SẮC - THÔNG THUỘC SÂU SẮC LỜI CHÚA'.normalize('NFC'),
              badgeBg: 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white shadow-lg shadow-amber-500/30 border-amber-300',
              sealGradient: 'from-amber-400 via-amber-500 to-orange-600',
              badgePill: 'bg-amber-500 text-white border-amber-300',
              textColor: 'text-amber-300',
              borderColor: 'border-amber-400',
              stars: 5,
              motivationText: '🌟 Kết Quả Xuất Sắc! Sự siêng năng suy gẫm Lời Kinh Thánh của bạn là tấm gương tuyệt vời!'.normalize('NFC'),
              quote: '“Lời Chúa là ngọn đèn cho chân tôi, ánh sáng cho đường lối tôi.” — Thi-thiên 119:105'.normalize('NFC')
            };
          } else if (score >= 80) {
            return {
              rankLabel: 'GIỎI'.normalize('NFC'),
              rankSub: 'ĐẠT DANH HIỆU GIỎI - NẮM VỮNG KINH VĂN & THẦN HỌC'.normalize('NFC'),
              badgeBg: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 text-white shadow-lg shadow-blue-500/30 border-sky-300',
              sealGradient: 'from-sky-400 via-blue-500 to-indigo-600',
              badgePill: 'bg-blue-600 text-white border-sky-300',
              textColor: 'text-sky-300',
              borderColor: 'border-sky-400',
              stars: 4,
              motivationText: '👑 Kết Quả Giỏi! Sự học hỏi kiên trì Lời Chúa của bạn mang lại thành quả rất đáng tự hào!'.normalize('NFC'),
              quote: '“Hãy suy gẫm Lời Chúa ngày và đêm, hầu cho cẩn thận làm theo mọi điều đã chép ở trong.” — Giô-suê 1:8'.normalize('NFC')
            };
          } else if (score >= 50) {
            return {
              rankLabel: 'HOÀN THÀNH TỐT'.normalize('NFC'),
              rankSub: 'ĐẠT DANH HIỆU HOÀN THÀNH TỐT - TÍCH CỰC TRA XÉT LỜI CHÚA'.normalize('NFC'),
              badgeBg: 'bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 text-white shadow-lg shadow-emerald-500/30 border-emerald-300',
              sealGradient: 'from-emerald-400 via-teal-500 to-green-600',
              badgePill: 'bg-emerald-600 text-white border-emerald-300',
              textColor: 'text-emerald-300',
              borderColor: 'border-emerald-400',
              stars: 3,
              motivationText: '🌱 Hoàn Thành Tốt! Chúc mừng bạn đã hoàn thành tốt bài ôn tập. Hãy tiếp tục đào sâu hằng ngày!'.normalize('NFC'),
              quote: '“Chớ để lòng yêu thương và trung thật xa rời con; hãy đeo nó vào cổ, ghi nó nơi bia lòng con.” — Châm-ngôn 3:3'.normalize('NFC')
            };
          } else {
            return {
              rankLabel: 'HOÀN THÀNH'.normalize('NFC'),
              rankSub: 'HOÀN THÀNH BÀI ÔN TẬP - NỖ LỰC ĐÁNG GHI NHẬN & TIẾP TỤC CỐ GẮNG'.normalize('NFC'),
              badgeBg: 'bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-white shadow-lg shadow-slate-500/30 border-slate-400',
              sealGradient: 'from-slate-400 via-slate-500 to-slate-700',
              badgePill: 'bg-slate-700 text-white border-slate-400',
              textColor: 'text-slate-300',
              borderColor: 'border-slate-400',
              stars: 2,
              motivationText: '📖 Đã Hoàn Thành! Lời Chúa cần thời gian đơm hoa kết quả. Hãy tiếp tục đọc và ôn tập thêm nhé!'.normalize('NFC'),
              quote: '“Cỏ khô, hoa rụng; nhưng Lời của Đức Chúa Trời chúng ta còn lại đời đời.” — Ê-sai 40:8'.normalize('NFC')
            };
          }
        })();

        const studentDisplayName = (lastResult.studentName || 'Anh Chị Em').normalize('NFC');
        const lessonTitleText = (lastResult.lessonTitle || '').normalize('NFC');

        return (
          <div className="space-y-8">
            
            {/* RESULT SUMMARY CARD */}
            <div className="bg-white border border-sky-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm text-center relative overflow-hidden">
              <div className="space-y-2">
                <span className="p-3 bg-orange-100 text-orange-800 rounded-2xl inline-block border border-orange-200">
                  <Award className="w-8 h-8 text-orange-600" />
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-blue-950 font-serif">
                  Kết Quả Bài Kiểm Tra Kinh Thánh
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  Anh Chị Em: <strong className="text-blue-950 font-bold">{studentDisplayName}</strong> • {lessonTitleText}
                </p>
              </div>

              {/* SCORE DISPLAY */}
              <div className="inline-flex flex-col items-center justify-center p-6 bg-sky-50 border border-sky-300 rounded-3xl shadow-inner min-w-[240px]">
                <span className="text-4xl sm:text-5xl font-black text-blue-900 font-serif">
                  {lastResult.scorePercentage}%
                </span>
                <span className="text-xs text-slate-700 font-bold mt-1">
                  Đúng {lastResult.correctAnswersCount} / {lastResult.totalQuestions} câu
                </span>
                <span className={`text-xs px-4 py-1.5 rounded-full font-black mt-3 shadow-sm border ${gradeInfo.badgePill}`}>
                  XẾP LOẠI: {gradeInfo.rankLabel}
                </span>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <button
                  onClick={handleResetToConfig}
                  className="px-5 py-2.5 bg-sky-100 hover:bg-sky-200 text-blue-900 text-xs font-bold rounded-xl transition-colors flex items-center space-x-1.5"
                >
                  <RotateCcw className="w-4 h-4 text-orange-600" />
                  <span>Làm Bài Trắc Nghiệm Khác</span>
                </button>

                <button
                  onClick={handleDownloadCertImage}
                  disabled={isDownloadingCert}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white text-xs font-bold rounded-xl transition-colors flex items-center space-x-1.5 shadow"
                >
                  {isDownloadingCert ? (
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                  ) : (
                    <Download className="w-4 h-4 text-emerald-200" />
                  )}
                  <span>{isDownloadingCert ? 'Đang Tạo Ảnh PNG...' : 'Tải Ảnh PNG Chứng Nhận (HD)'}</span>
                </button>

                <button
                  onClick={handleDownloadCertPdf}
                  disabled={isDownloadingPdf}
                  className="px-5 py-2.5 bg-rose-700 hover:bg-rose-800 disabled:bg-rose-400 text-white text-xs font-bold rounded-xl transition-colors flex items-center space-x-1.5 shadow"
                >
                  {isDownloadingPdf ? (
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                  ) : (
                    <FileText className="w-4 h-4 text-rose-200" />
                  )}
                  <span>{isDownloadingPdf ? 'Đang Tạo File PDF...' : 'Tải File PDF Chứng Nhận (.pdf)'}</span>
                </button>

                <button
                  onClick={handleDownloadExcelReport}
                  className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-xl transition-colors flex items-center space-x-1.5 shadow"
                  title="Xuất file Excel đầy đủ bảng điểm, xếp loại và chi tiết đáp án của học sinh"
                >
                  <FileSpreadsheet className="w-4 h-4 text-emerald-300" />
                  <span>Tải File Excel Bài Làm (.xlsx)</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-xl transition-colors flex items-center space-x-1.5 shadow"
                >
                  <Printer className="w-4 h-4" />
                  <span>In / Preview Bằng (16:9)</span>
                </button>
              </div>
            </div>

            {/* 16:9 MOTIVATIONAL CERTIFICATE CONTAINER */}
            <div className="space-y-3">
              <div className="flex items-center justify-between px-2">
                <h4 className="text-base sm:text-lg font-black text-blue-950 font-serif flex items-center">
                  <Award className="w-5 h-5 mr-2 text-orange-600" />
                  Bằng Chứng Nhận Tỉ Lệ 16:9 Tôn Vinh &amp; Động Lực
                </h4>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleDownloadCertImage}
                    disabled={isDownloadingCert}
                    className="text-xs text-emerald-700 hover:text-emerald-900 font-bold bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-200 inline-flex items-center space-x-1 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Lưu PNG</span>
                  </button>
                  <button
                    onClick={handleDownloadCertPdf}
                    disabled={isDownloadingPdf}
                    className="text-xs text-rose-800 hover:text-rose-950 font-bold bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-lg border border-rose-200 inline-flex items-center space-x-1 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-rose-600" />
                    <span>Tải PDF</span>
                  </button>
                  <button
                    onClick={handleDownloadExcelReport}
                    className="text-xs text-blue-800 hover:text-blue-950 font-bold bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg border border-blue-200 inline-flex items-center space-x-1 transition-colors"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5 text-blue-600" />
                    <span>Xuất Excel</span>
                  </button>
                </div>
              </div>

              {/* CERTIFICATE FRAME (ASPECT 16:9) */}
              <div
                id="certificate-print-area"
                ref={certRef}
                className="w-full aspect-[16/9] relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 border-4 sm:border-8 border-amber-500/90 p-2 sm:p-5 lg:p-7 flex flex-col justify-between text-white font-serif select-none"
              >
                
                {/* Inner Gold Filigree Frame */}
                <div className="relative h-full w-full border border-amber-400/70 sm:border-2 rounded-2xl p-2.5 sm:p-4 lg:p-6 flex flex-col justify-between bg-gradient-to-b from-blue-900/50 via-blue-950/75 to-slate-950/90 backdrop-blur-sm">
                  
                  {/* Decorative Corner Stars */}
                  <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 text-amber-400/80 pointer-events-none">
                    <Sparkles className="w-3.5 h-3.5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-amber-400/80 pointer-events-none">
                    <Sparkles className="w-3.5 h-3.5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 text-amber-400/80 pointer-events-none">
                    <Sparkles className="w-3.5 h-3.5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 text-amber-400/80 pointer-events-none">
                    <Sparkles className="w-3.5 h-3.5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Watermark Logo Center */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <BookOpen className="w-36 h-36 sm:w-64 sm:h-64 text-amber-300" />
                  </div>

                  {/* HEADER ROW */}
                  <div className="text-center space-y-0.5 sm:space-y-1 relative z-10">
                    <div className="inline-flex items-center space-x-1 sm:space-x-2 text-[8px] sm:text-xs font-black uppercase text-amber-300">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
                      <span>LỚP ĐỌC KINH THÁNH 1 NĂM (VI1925) • LỜI CHÚA LÀ SỨC SỐNG</span>
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
                    </div>
                    <h2 className="text-xs sm:text-xl md:text-2xl lg:text-3xl font-black uppercase text-white drop-shadow-md">
                      BẰNG CHỨNG NHẬN HOÀN THÀNH
                    </h2>
                    <div className="w-16 sm:w-28 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
                  </div>

                  {/* MAIN BODY CONTENT */}
                  <div className="text-center space-y-1 sm:space-y-2.5 relative z-10 my-auto">
                    <p className="text-[8px] sm:text-xs text-sky-200 italic font-medium uppercase">
                      Chứng nhận danh dự trao tặng cho Anh Chị Em:
                    </p>

                    {/* Student Name */}
                    <div className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-black text-amber-300 uppercase drop-shadow-lg underline decoration-amber-400/80 underline-offset-2 sm:underline-offset-6">
                      {studentDisplayName}
                    </div>

                    {/* Description */}
                    <p className="text-[7.5px] sm:text-xs md:text-sm text-sky-100 max-w-xl mx-auto leading-tight font-serif">
                      Đã hoàn thành xuất sắc bài kiểm tra trắc nghiệm Lộ Trình Đọc Kinh Thánh 1 Năm với thành tích:
                    </p>

                    {/* Score & Rank Badges Row */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 my-0.5 sm:my-1">
                      {/* Score Badge */}
                      <div className="px-2 py-0.5 sm:px-3 sm:py-1 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl border border-white/20 flex items-center space-x-1 shadow-sm">
                        <span className="text-xs sm:text-base font-black text-amber-300">
                          {lastResult.scorePercentage}%
                        </span>
                        <span className="text-[8px] sm:text-xs text-sky-200 font-bold">
                          ({lastResult.correctAnswersCount}/{lastResult.totalQuestions} câu)
                        </span>
                      </div>

                      {/* Grade Badge */}
                      <div className={`px-2.5 py-0.5 sm:px-4 sm:py-1 rounded-lg sm:rounded-xl border text-[8px] sm:text-xs font-black uppercase flex items-center space-x-1 ${gradeInfo.badgeBg}`}>
                        <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>XẾP LOẠI: {gradeInfo.rankLabel}</span>
                      </div>
                    </div>

                    {/* Motivation Message Box */}
                    <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-1.5 sm:p-2.5 rounded-xl space-y-0.5">
                      <p className="text-[8px] sm:text-xs text-amber-200 font-bold italic line-clamp-2">
                        {gradeInfo.motivationText}
                      </p>
                      <p className="text-[7px] sm:text-[10px] text-sky-200 font-serif italic opacity-90 hidden sm:block">
                        {gradeInfo.quote}
                      </p>
                    </div>
                  </div>

                  {/* FOOTER ROW */}
                  <div className="flex items-end justify-between text-[7px] sm:text-[10px] md:text-xs text-sky-200 relative z-10 border-t border-amber-400/30 pt-1 sm:pt-2">
                    {/* Left: Date & Topic */}
                    <div className="space-y-0.5 text-left">
                      <div><strong className="text-white">Ngày cấp:</strong> {lastResult.date}</div>
                      <div className="line-clamp-1 max-w-[140px] sm:max-w-xs"><strong className="text-white">Chủ đề:</strong> {lessonTitleText}</div>
                    </div>

                    {/* Center: Official Seal */}
                    <div className="flex flex-col items-center">
                      <div className={`w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${gradeInfo.sealGradient} border border-amber-300 shadow-lg flex items-center justify-center text-white mb-0.5`}>
                        <Award className="w-3.5 h-3.5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[6px] sm:text-[8px] font-black uppercase text-amber-300">
                        {gradeInfo.rankLabel}
                      </span>
                    </div>

                    {/* Right: Signature */}
                    <div className="text-right space-y-0.5">
                      <div className="font-bold text-white uppercase">BAN GIÁO DỤC</div>
                      <div className="italic text-amber-300 font-serif">Lớp Đọc Kinh Thánh VI1925</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* DETAILED QUESTION BREAKDOWN SECTION */}
            <div className="bg-white border border-sky-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <h4 className="text-lg font-black text-blue-950 font-serif flex items-center">
                    <BrainCircuit className="w-5 h-5 mr-2 text-orange-600" />
                    Chi Tiết Đáp Án &amp; Bài Làm Của Anh Chị Em
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Xem lại câu trả lời và dẫn chứng Kinh Thánh VI1925 cho từng câu
                  </p>
                </div>
                <button
                  onClick={handleDownloadExcelReport}
                  className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-xl shadow-sm transition-colors shrink-0"
                >
                  <FileSpreadsheet className="w-4 h-4 text-emerald-300" />
                  <span>Xuất Tệp Excel Bài Làm (.xlsx)</span>
                </button>
              </div>

              <div className="space-y-4">
                {lastResult.questions.map((q, qIdx) => {
                  const userChoiceIdx = lastResult.userAnswers[qIdx];
                  const isCorrect = userChoiceIdx === q.correctIndex;

                  return (
                    <div
                      key={q.id || qIdx}
                      className={`p-4 rounded-2xl border transition-all ${
                        isCorrect ? 'bg-emerald-50/40 border-emerald-200' : 'bg-rose-50/40 border-rose-200'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center space-x-2">
                          <span className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center text-white ${
                            isCorrect ? 'bg-emerald-600' : 'bg-rose-600'
                          }`}>
                            {qIdx + 1}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                            {q.difficultyLevel}
                          </span>
                        </div>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border inline-flex items-center space-x-1 ${
                          isCorrect ? 'bg-emerald-100 text-emerald-900 border-emerald-300' : 'bg-rose-100 text-rose-900 border-rose-300'
                        }`}>
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                              <span>Chính xác</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-3.5 h-3.5 text-rose-600 mr-1" />
                              <span>Chưa chính xác</span>
                            </>
                          )}
                        </span>
                      </div>

                      <h5 className="text-sm font-bold text-slate-900 mb-3">
                        {q.question}
                      </h5>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                        {q.options.map((opt, optIdx) => {
                          const isUserPicked = userChoiceIdx === optIdx;
                          const isRightAnswer = q.correctIndex === optIdx;

                          let optionStyle = 'bg-white border-slate-200 text-slate-700';
                          if (isRightAnswer) {
                            optionStyle = 'bg-emerald-100/90 border-emerald-400 font-bold text-emerald-950 ring-1 ring-emerald-400';
                          } else if (isUserPicked && !isRightAnswer) {
                            optionStyle = 'bg-rose-100/90 border-rose-400 font-bold text-rose-950 line-through';
                          }

                          return (
                            <div
                              key={optIdx}
                              className={`p-2.5 text-xs rounded-xl border flex items-center justify-between ${optionStyle}`}
                            >
                              <span>{String.fromCharCode(65 + optIdx)}. {opt}</span>
                              {isRightAnswer && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-1" />}
                              {isUserPicked && !isRightAnswer && <XCircle className="w-4 h-4 text-rose-600 shrink-0 ml-1" />}
                            </div>
                          );
                        })}
                      </div>

                      {q.explanation && (
                        <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-200 text-xs text-blue-950 space-y-1">
                          <strong className="text-blue-900 font-bold flex items-center">
                            <BookOpen className="w-3.5 h-3.5 mr-1 text-orange-600" />
                            Dẫn chứng Kinh Thánh VI1925:
                          </strong>
                          <p className="italic font-serif leading-relaxed text-slate-800">
                            {q.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        );
      })()}
    </div>
  );
}
