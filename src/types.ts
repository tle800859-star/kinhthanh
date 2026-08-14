export interface BibleBook {
  name: string;
  testament: 'Cựu Ước' | 'Tân Ước';
  chaptersCount?: number;
  description: string;
}

export interface KeyVerse {
  reference: string;
  text: string;
  context: string;
}

export interface DailyReadingItem {
  day: number;
  reading: string;
  focus: string;
}

export interface MonthPlan {
  id: number;
  monthNumber: number;
  monthTitle: string; // e.g. "Tháng 1"
  themeTitle: string; // e.g. "Khởi Nguyên & Sáng Tạo"
  booksText: string; // e.g. "Sáng-thế-ký, Giăng, Ma-thi-ơ"
  summary: string;
  theologicalConcept: string; // Phân tích thần học
  otNtConnection: string; // Sự kết nối giữa Cựu Ước & Tân Ước
  books: BibleBook[];
  keyVerses: KeyVerse[];
  reflectionQuestions: string[];
  suggestedSchedule: DailyReadingItem[];
}

export interface UserNote {
  id: string;
  monthId: number;
  date: string;
  content: string;
}

export type QuizDifficulty = 'Nhận biết' | 'Thông hiểu' | 'Vận dụng' | 'Tổng hợp 3 mức độ';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  difficultyLevel: 'Nhận biết' | 'Thông hiểu' | 'Vận dụng';
  explanation: string; // Refers to VI1925 passage
  lessonRef?: string;
}

export interface QuizConfig {
  studentName: string;
  monthId: number; // 0 for all months
  dayNumber: number; // 0 for all days in month
  questionCount: number; // 1 to 30
  difficulty: QuizDifficulty;
}

export interface QuizAttemptResult {
  id: string;
  date: string;
  studentName: string;
  lessonTitle: string;
  totalQuestions: number;
  correctAnswersCount: number;
  scorePercentage: number;
  difficulty: QuizDifficulty;
  userAnswers: Record<number, number>; // questionIndex -> selectedOptionIndex
  questions: QuizQuestion[];
}

export interface StudentProfile {
  name: string;
  churchRole?: string; // e.g., "Học sinh Chúa Nhật", "Thánh đồ", "Thanh Niên"
  targetYear?: number;
}

export interface ProgressState {
  completedDays: Record<string, boolean>; // e.g., "m1-d1": true
  notes: UserNote[];
  studentName?: string;
  quizHistory?: QuizAttemptResult[];
}
