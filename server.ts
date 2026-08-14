import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

  // Initialize Gemini AI Client
  const getAi = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return null;
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  };

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", geminiConfigured: !!process.env.GEMINI_API_KEY });
  });

  // API endpoint to generate custom Bible quiz questions using VI1925
  app.post("/api/quiz/generate", async (req, res) => {
    try {
      const {
        lessonTitle,
        readingContent,
        questionCount = 10,
        difficulty = "Tổng hợp 3 mức độ",
        studentName = "Thánh đồ",
      } = req.body;

      const ai = getAi();
      if (!ai) {
        return res.status(503).json({
          error: "GEMINI_API_KEY_MISSING",
          message: "Chưa cấu hình Gemini API Key. Vui lòng sử dụng bộ câu hỏi offline.",
        });
      }

      const prompt = `Bạn là chuyên gia thần học và giáo viên Kinh Thánh theo Bản dịch Truyền Thống 1925 (VI1925).
Hãy tạo bộ câu hỏi trắc nghiệm Kinh Thánh cho Thánh đồ / Học sinh tên: "${studentName}".
Chủ đề / Bài đọc: "${lessonTitle}" (Nội dung đọc: ${readingContent || "Kinh Thánh Cựu Ước & Tân Ước"}).
Số lượng câu hỏi cần tạo: ${Math.min(Math.max(Number(questionCount) || 10, 1), 30)} câu.
Mức độ yêu cầu: "${difficulty}".

Yêu cầu chi tiết về Mức độ:
- "Nhận biết" (Remembering): Hỏi về nhân vật, địa danh, sự kiện, câu từ trực tiếp trong Kinh Thánh Bản dịch 1925.
- "Thông hiểu" (Understanding): Hỏi về ý nghĩa thần học, bối cảnh, bài học sâu sắc, sự kết nối giữa Cựu Ước & Tân Ước.
- "Vận dụng" (Application): Hỏi về cách áp dụng bài học Kinh Thánh vào đời sống thực tế hàng ngày của người tín hữu.
- "Tổng hợp 3 mức độ": Phân bổ khoảng 40% Nhận biết, 40% Thông hiểu, 20% Vận dụng.

LƯU Ý QUAN TRỌNG:
1. Nội dung câu hỏi và câu đáp án PHẢI BÁM SÁT BẢN DỊCH TRUYỀN THỐNG 1925 (Ví dụ: Đức Giê-hô-va, Chúa Giê-xu Đấng Mê-si, Sáng-thế-ký, Xuất Ê-đíp-tô Ký, Ma-thi-ơ, Giăng, v.v.).
2. Mỗi câu hỏi phải có đúng 4 phương án (A, B, C, D) và chỉ có 1 phương án đúng.
3. Giải thích ngắn gọn và nêu rõ địa chỉ Kinh Thánh tham chiếu (ví dụ: Sáng-thế-ký 1:1).

Trả về JSON đúng cấu trúc schema yêu cầu.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            description: "Danh sách câu hỏi trắc nghiệm Kinh Thánh",
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                question: { type: Type.STRING, description: "Nội dung câu hỏi" },
                options: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "4 phương án A, B, C, D",
                },
                correctIndex: {
                  type: Type.INTEGER,
                  description: "Chỉ số đáp án đúng (0 cho A, 1 cho B, 2 cho C, 3 cho D)",
                },
                difficultyLevel: {
                  type: Type.STRING,
                  description: "Nhận biết | Thông hiểu | Vận dụng",
                },
                explanation: {
                  type: Type.STRING,
                  description: "Giải thích ngắn gọn kèm câu Kinh Thánh VI1925 tham chiếu",
                },
              },
              required: ["id", "question", "options", "correctIndex", "difficultyLevel", "explanation"],
            },
          },
        },
      });

      const text = response.text || "[]";
      const questions = JSON.parse(text);

      return res.json({
        success: true,
        studentName,
        lessonTitle,
        questionCount: questions.length,
        questions,
      });
    } catch (error: any) {
      console.error("Error generating quiz:", error);
      return res.status(500).json({
        error: "GENERATION_FAILED",
        message: error.message || "Không thể tạo câu hỏi qua AI. Đang chuyển sang bộ câu hỏi có sẵn.",
      });
    }
  });

  // Vite middleware for dev or static serving for prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
