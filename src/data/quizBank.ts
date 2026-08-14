import { QuizQuestion, QuizDifficulty } from '../types';
import { BIBLE_PLAN_DATA } from './biblePlanData';

export const PRESET_QUIZ_QUESTIONS: Record<number, QuizQuestion[]> = {
  1: [
    {
      id: 'm1-q1',
      question: 'Trong Sáng-thế-ký 1:26-27 (Bản dịch 1925), Đức Chúa Trời đã phán như thế nào khi sáng tạo loài người?',
      options: [
        'Chúng ta hãy làm nên loài người như hình ta và theo tượng ta',
        'Ta hãy làm nên loài người một mình ta',
        'Các thiên sứ hãy làm nên loài người theo hình các ngươi',
        'Loài người hãy tự tiến hóa theo hình tượng riêng'
      ],
      correctIndex: 0,
      difficultyLevel: 'Nhận biết',
      explanation: 'Sáng-thế-ký 1:26-27 chép Đức Chúa Trời phán "Chúng ta hãy làm nên loài người..." và Ngài dựng nên loài người nam cùng loài người nữ mang hình ảnh của Đức Chúa Trời Elohim (Đức Chúa Trời Cha và Đức Chúa Trời Mẹ).',
      lessonRef: 'Tháng 1 - Sáng-thế-ký 1:26-27'
    },
    {
      id: 'm1-q2',
      question: 'Sau khi hoàn thành công cuộc sáng tạo trong 6 ngày, Đức Chúa Trời đã làm gì vào ngày thứ bảy (Sáng-thế-ký 2:1-3)?',
      options: [
        'Ban phước cho ngày thứ bảy, đặt là ngày thánh và nghỉ các công việc',
        'Đổi ngày nghỉ sang ngày thứ nhất trong tuần',
        'Tiếp tục tạo dựng muôn vật không ngừng nghỉ',
        'Không ban phước cho ngày nào cả'
      ],
      correctIndex: 0,
      difficultyLevel: 'Nhận biết',
      explanation: 'Sáng-thế-ký 2:1-3 chép Đức Chúa Trời ban phước cho ngày thứ bảy, đặt là ngày thánh để làm ngày Sa-bát kỷ niệm Đấng Tạo Hóa.',
      lessonRef: 'Tháng 1 - Sáng-thế-ký 2:1-3'
    },
    {
      id: 'm1-q3',
      question: 'Để ban lại sự sống đời đời đã bị mất từ Cây Sự Sống trong vườn Ê-đen (Sáng 3:22), Đức Chúa Giê-xu đã phán dạy điều gì trong Giăng 6:53-54?',
      options: [
        'Ai ăn thịt và uống huyết Ta thì được sự sống đời đời; nơi ngày sau rốt Ta sẽ khiến người đó sống lại',
        'Chỉ cần có tấm lòng hướng thiện là đủ sự sống đời đời',
        'Chỉ cần giữ các nghi lễ truyền thống của loài người',
        'Sự sống đời đời tự nhiên có mà không cần giao ước nào'
      ],
      correctIndex: 0,
      difficultyLevel: 'Thông hiểu',
      explanation: 'Giăng 6:53-54 khẳng định ăn thịt và uống huyết Đức Chúa Giê-xu qua Lễ Vượt Qua Giao Ước Mới (Ma-thi-ơ 26:26-28) là con đường duy nhất nhận sự sống đời đời của Cây Sự Sống.',
      lessonRef: 'Tháng 1 - Giăng 6:53-54 & Sáng 3:22'
    },
    {
      id: 'm1-q4',
      question: 'Đức Chúa Giê-xu đã dùng điều gì để lập Giao Ước Mới tha tội cho nhân loại trong đêm Lễ Vượt Qua (Ma-thi-ơ 26:26-28, Lu-ca 22:20)?',
      options: [
        'Bánh và Rượu Nho Lễ Vượt Qua tượng trưng cho Thân thể và Huyết Ngài',
        'Thịt chiên quay và rau đắng theo nghi lễ thời Cựu Ước',
        'Nước lã và bánh mì thường ngày',
        'Không dùng bất cứ vật liệu nào'
      ],
      correctIndex: 0,
      difficultyLevel: 'Thông hiểu',
      explanation: 'Trong đêm Lễ Vượt Qua, Đức Chúa Giê-xu lấy Bánh phán là Thân thể Ngài, lấy Chén Rượu Nho phán là Huyết của Giao Ước Mới đổ ra cho nhiều người được tha tội.',
      lessonRef: 'Tháng 1 - Ma-thi-ơ 26:26-28'
    },
    {
      id: 'm1-q5',
      question: 'Theo Lời dạy của Kinh Thánh (Sáng 1:26-27, Ga-la-ti 4:26), tại sao danh xưng của Đức Chúa Trời trong nguyên bản tiếng Hê-bơ-rơ là "Elohim"?',
      options: [
        'Vì Elohim là danh từ số nhiều chỉ về Đức Chúa Trời Cha và Đức Chúa Trời Mẹ',
        'Vì chỉ có một ngôi duy nhất mà thôi',
        'Vì chỉ thiên sứ mới được gọi là Elohim',
        'Vì đó là danh xưng chỉ con người'
      ],
      correctIndex: 0,
      difficultyLevel: 'Vận dụng',
      explanation: 'Danh từ "Elohim" xuất hiện hơn 2,500 lần trong Cựu Ước ở dạng số nhiều (các Đức Chúa Trời), tương ứng với hình ảnh loài người nam và nữ, làm chứng về Đức Chúa Trời Cha và Đức Chúa Trời Mẹ.',
      lessonRef: 'Tháng 1 - Sáng-thế-ký 1 & Ga-la-ti 4:26'
    }
  ],
  2: [
    {
      id: 'm2-q1',
      question: 'Lễ Vượt Qua trong Xuất Ê-đíp-tô Ký 12 được cử hành vào thời điểm nào và có ý nghĩa quyền năng gì?',
      options: [
        'Chiều tối ngày 14 tháng giêng thánh lịch; huyết chiên con làm dấu để tai nạn hủy diệt vượt qua',
        'Ngày 25 tháng 12 hằng năm để đón năm mới',
        'Bất cứ ngày nào trong tuần tùy ý dân chúng',
        'Chỉ là lễ hội mùa gặt bình thường không có dấu ấn'
      ],
      correctIndex: 0,
      difficultyLevel: 'Nhận biết',
      explanation: 'Xuất Ê-đíp-tô Ký 12:11-14 chép ngày 14 tháng giêng thánh lịch là Lễ Vượt Qua của Đức Giê-hô-va, huyết chiên con làm dấu hiệu để tai nạn tiêu diệt vượt qua khỏi.',
      lessonRef: 'Tháng 2 - Xuất Ê-đíp-tô Ký 12'
    },
    {
      id: 'm2-q2',
      question: 'Điều răn thứ hai trong Mười Điều Răn (Xuất Ê-đíp-tô Ký 20:4-5) nghiêm cấm điều gì?',
      options: [
        'Làm và quỳ lạy thờ lạy bất cứ hình tượng chạm nào',
        'Làm việc trong 6 ngày lao động',
        'Giữ các kỳ lễ trọng thể của Đức Chúa Trời',
        'Đọc Kinh Thánh tại đền thờ'
      ],
      correctIndex: 0,
      difficultyLevel: 'Nhận biết',
      explanation: 'Xuất Ê-đíp-tô Ký 20:4-5 nghiêm cấm: "Ngươi chớ làm tượng chạm cho mình... chớ quỳ lạy trước các hình tượng đó". Vì vậy, việc dựng và thờ thập tự giá là vi phạm điều răn của Đức Chúa Trời.',
      lessonRef: 'Tháng 2 - Xuất Ê-đíp-tô Ký 20:4-5'
    },
    {
      id: 'm2-q3',
      question: 'Theo thư Hê-bơ-rơ 5:6-10 và 7:1-17, Đức Chúa Giê-xu là Thầy Tế Lễ Thượng Phẩm theo ban thứ nào?',
      options: [
        'Theo ban Mên-chi-xê-đéc (dùng Bánh và Rượu ban phước sự sống)',
        'Theo ban A-rôn dùng thú vật huyết bò chiên',
        'Theo luật pháp thế gian loài người',
        'Theo các triết gia Hy Lạp'
      ],
      correctIndex: 0,
      difficultyLevel: 'Thông hiểu',
      explanation: 'Mên-chi-xê-đéc trong Sáng-thế-ký 14 dùng Bánh và Rượu chúc phước cho Áp-ra-ham, là hình bóng về Đức Chúa Giê-xu dùng Bánh và Rượu Lễ Vượt Qua ban phước sự sống đời đời.',
      lessonRef: 'Tháng 2 - Hê-bơ-rơ 7:1-17 & Sáng 14'
    },
    {
      id: 'm2-q4',
      question: 'Theo Lê-vi Ký 23, Đức Chúa Trời đã ban cho dân sự bao nhiêu lễ trọng thể phân bổ qua mấy kỳ?',
      options: [
        '3 kỳ với 7 lễ trọng thể đời đời',
        'Chỉ có 1 lễ duy nhất trong năm',
        '12 lễ theo 12 tháng dương lịch',
        'Các ngày lễ do giáo hội tự đặt ra'
      ],
      correctIndex: 0,
      difficultyLevel: 'Thông hiểu',
      explanation: 'Lê-vi Ký 23 quy định 3 kỳ 7 lễ trọng thể gồm: Kỳ 1 (Lễ Vượt Qua, Bánh Không Men), Kỳ 2 (Lễ Phục Sinh/Trái Đầu Mùa, Lễ Ngũ Tuần/Bảy Tuần), Kỳ 3 (Lễ Kèn Thổi, Đại Chuộc Tội, Lễ Lều Tạm).',
      lessonRef: 'Tháng 2 - Lê-vi Ký 23'
    },
    {
      id: 'm2-q5',
      question: 'Tại sao Lễ Vượt Qua Giao Ước Mới lại là cốt lõi của sự cứu rỗi trong Tân Ước (Hê-bơ-rơ 9:11-15, 1 Cô-rinh-tô 5:7)?',
      options: [
        'Vì qua huyết Đấng Christ trong Lễ Vượt Qua, chúng ta được sự cứu chuộc đời đời và tha thứ tội lỗi',
        'Vì đó chỉ là bữa ăn tưởng niệm lịch sử Ai Cập',
        'Vì để phục vụ các bữa tiệc xã giao thông thường',
        'Vì không cần đức tin cũng có thể nhận phước'
      ],
      correctIndex: 0,
      difficultyLevel: 'Vận dụng',
      explanation: '1 Cô-rinh-tô 5:7 khẳng định: "Đấng Christ là con sinh lễ Vượt-qua của chúng ta đã bị hi sinh rồi, vậy thì chúng ta hãy giữ lễ...".',
      lessonRef: 'Tháng 2 - Hê-bơ-rơ 9 & 1 Cô-rinh-tô 5:7'
    }
  ],
  3: [
    {
      id: 'm3-q1',
      question: 'Phúc âm Lu-ca 4:16 ghi nhận Đức Chúa Giê-xu đã làm gì trong ngày Sa-bát?',
      options: [
        'Theo thói quen thường làm, Ngài vào nhà hội trong ngày Sa-bát để đọc Kinh Thánh',
        'Ngài bãi bỏ ngày Sa-bát và đi làm việc bình thường',
        'Ngài đổi ngày Sa-bát sang ngày Chủ Nhật',
        'Ngài không bao giờ vào nhà hội'
      ],
      correctIndex: 0,
      difficultyLevel: 'Nhận biết',
      explanation: 'Lu-ca 4:16 ghi rõ: "Theo thói quen thường làm, Ngài vào nhà hội trong ngày Sa-bát, đứng dậy để đọc Kinh Thánh" làm gương mẫu cho muôn đời.',
      lessonRef: 'Tháng 3 - Lu-ca 4:16'
    },
    {
      id: 'm3-q2',
      question: 'Trong Lu-ca 22:15, trước khi chịu đau đớn trên thập tự giá, Đức Chúa Giê-xu đã bày tỏ tấm lòng thế nào với các môn đồ?',
      options: [
        'Ta rất muốn ăn lễ Vượt-qua nầy với các ngươi trước khi ta chịu đau đớn',
        'Ta không muốn giữ lễ này nữa',
        'Hãy giữ lễ này theo phong tục ngoại bang',
        'Sau này các ngươi hãy hủy bỏ lễ này'
      ],
      correctIndex: 0,
      difficultyLevel: 'Nhận biết',
      explanation: 'Lu-ca 22:15 chép: "Ngài phán rằng: Ta rất muốn ăn lễ Vượt-qua nầy với các ngươi trước khi ta chịu đau đớn" vì Ngài tha thiết muốn ban sự sống đời đời cho nhân loại.',
      lessonRef: 'Tháng 3 - Lu-ca 22:15'
    },
    {
      id: 'm3-q3',
      question: 'Con rắn đồng trong Dân-số-ký 21 sau này bị dân sự xông hương thờ lạy, vua Ê-xê-chia đã làm gì (2 Các Vua 18:4)?',
      options: [
        'Đập nát con rắn đồng và gọi nó là Nê-hu-sơ-tan (miếng đồng vô tri)',
        'Xây thêm đền thờ nguy nga để tôn kính con rắn đồng',
        'Làm thêm nhiều con rắn đồng khác cho các chi phái',
        'Đặt con rắn đồng lên nóc nhà hội để thờ lạy'
      ],
      correctIndex: 0,
      difficultyLevel: 'Thông hiểu',
      explanation: '2 Các Vua 18:4 ghi việc vua Ê-xê-chia đập nát con rắn đồng vì dân chúng biến nó thành ngẫu tượng thờ lạy. Điều này dạy rằng việc tôn sùng thập tự giá ngày nay cũng là thờ ngẫu tượng phạm tội.',
      lessonRef: 'Tháng 3 - Dân-số-ký 21 & 2 Các Vua 18:4'
    },
    {
      id: 'm3-q4',
      question: 'Theo Dân-số-ký 9, trường hợp nào dân sự được phép giữ Lễ Vượt Qua vào tháng thứ hai (ngày 14 tháng 2 thánh lịch)?',
      options: [
        'Người bị ô uế vì xác chết hoặc đang đi đường xa không kịp giữ vào tháng thứ nhất',
        'Bất cứ ai cảm thấy lười biếng vào tháng giêng',
        'Chỉ dành riêng cho người ngoại quốc không thuộc Y-sơ-ra-ên',
        'Không có quy định nào cho phép giữ tháng thứ hai'
      ],
      correctIndex: 0,
      difficultyLevel: 'Thông hiểu',
      explanation: 'Dân-số-ký 9:10-11 mở ra ân điển giữ Lễ Vượt Qua tháng thứ hai cho người bị ô uế bất khả kháng hoặc đi đường xa.',
      lessonRef: 'Tháng 3 - Dân-số-ký 9'
    },
    {
      id: 'm3-q5',
      question: 'Điều răn Shema trong Phục-truyền 6:4-5 dạy dỗ thái độ yêu mến Đức Chúa Trời như thế nào?',
      options: [
        'Phải hết lòng, hết linh hồn, hết sức mà kính mến Giê-hô-va Đức Chúa Trời ngươi',
        'Chỉ cần giữ hình thức bề ngoài khi người khác nhìn thấy',
        'Chỉ cần dâng tiền của mà không cần vâng phục điều răn',
        'Chỉ kính mến Chúa khi gặp hoạn nạn cầu xin'
      ],
      correctIndex: 0,
      difficultyLevel: 'Vận dụng',
      explanation: 'Phục-truyền 6:4-5 là điều răn trọng tâm khẳng định tình yêu thương và sự vâng phục trọn vẹn dành cho Đức Chúa Trời duy nhất chân thật.',
      lessonRef: 'Tháng 3 - Phục-truyền 6:4-5'
    }
  ],
  4: [
    {
      id: 'm4-q1',
      question: 'Trong Công-vụ các Sứ-đồ 17:2 và 18:4, Sứ đồ Phao-lô đã có thói quen gì trong công tác rao giảng Tin Lành?',
      options: [
        'Theo thói quen mình, cứ mỗi ngày Sa-bát biện luận bằng Kinh Thánh',
        'Chỉ rao giảng vào các ngày lễ hội của người Hy Lạp',
        'Đổi việc nhóm lại sang ngày Chủ Nhật',
        'Không bao giờ dùng Kinh Thánh để chứng minh lẽ thật'
      ],
      correctIndex: 0,
      difficultyLevel: 'Nhận biết',
      explanation: 'Công-vụ 17:2 chép: "Phao-lô tới nơi họ, theo thói quen mình, và trong ba ngày Sa-bát biện luận với họ bằng Kinh Thánh".',
      lessonRef: 'Tháng 4 - Công-vụ 17:2'
    },
    {
      id: 'm4-q2',
      question: 'Đức Thánh Linh mưa đầu mùa đã giáng lâm vào kỳ lễ trọng thể nào của Đức Chúa Trời trong Công-vụ chương 2?',
      options: [
        'Lễ Ngũ Tuần (ngày thứ 50 sau Lễ Phục Sinh)',
        'Lễ Lều Tạm vào mùa thu',
        'Lễ Nô-en',
        'Lễ Tạ Ơn ngoại bang'
      ],
      correctIndex: 0,
      difficultyLevel: 'Nhận biết',
      explanation: 'Công-vụ 2:1 ghi: "Đến ngày lễ Ngũ-tuần, môn-đồ nhóm họp tại một chỗ..." và Đức Thánh Linh đã tuôn đổ dồi dào ứng nghiệm Lễ Bảy Tuần Lễ (Lê-vi Ký 23).',
      lessonRef: 'Tháng 4 - Công-vụ 2:1-4'
    },
    {
      id: 'm4-q3',
      question: 'Trước khi tiến đánh và phá sập vách thành Giê-ri-cô kiên cố, dân Y-sơ-ra-ên dưới sự lãnh đạo của Giô-suê đã làm gì (Giô-suê 5:10)?',
      options: [
        'Đóng trại tại Ghinh-ganh và giữ Lễ Vượt Qua vào chiều tối ngày 14 tháng giêng',
        'Lập tức xông vào phá thành mà không cầu vấn Đức Chúa Trời',
        'Ký hiệp ước hòa hoãn với vua thành Giê-ri-cô',
        'Bỏ chạy vào nơi đồng vắng'
      ],
      correctIndex: 0,
      difficultyLevel: 'Thông hiểu',
      explanation: 'Giô-suê 5:10 chép dân sự giữ Lễ Vượt Qua tại Ghinh-ganh, nhận quyền năng bảo hộ và chiến thắng từ Đức Chúa Trời trước khi hạ thành Giê-ri-cô.',
      lessonRef: 'Tháng 4 - Giô-suê 5:10'
    },
    {
      id: 'm4-q4',
      question: 'Rô-ma 5:14 chép: "A-đam là hình bóng của Đấng phải đến". Theo lẽ thật Kinh Thánh, Ê-va vợ của A-đam là hình bóng của Đấng nào?',
      options: [
        'Đức Chúa Trời Mẹ (Thành Giê-ru-sa-lem trên trời - Ga-la-ti 4:26)',
        'Chỉ là một biểu tượng văn học bình thường',
        'Thiên sứ trưởng Mi-chen',
        'Không có ý nghĩa tâm linh nào'
      ],
      correctIndex: 0,
      difficultyLevel: 'Thông hiểu',
      explanation: 'Nếu A-đam là hình bóng về Đức Chúa Trời Cha (Đấng phải đến), thì Ê-va (mẹ của mọi loài sống - Sáng 3:20) là hình bóng hoàn hảo về Đức Chúa Trời Mẹ ban sự sống đời đời (Ga-la-ti 4:26).',
      lessonRef: 'Tháng 4 - Rô-ma 5:14 & Ga-la-ti 4:26'
    },
    {
      id: 'm4-q5',
      question: 'Sứ đồ Phi-e-rơ đã tuyên bố phương thức nhận sự tha tội và Đức Thánh Linh trong Công-vụ 2:38 như thế nào?',
      options: [
        'Hãy hối cải, ai nấy khá chịu phép báp-tem nhân danh Đức Chúa Giê-xu Đấng Christ đặng được tha tội',
        'Chỉ cần điểm nước lên trán tượng trưng',
        'Chỉ cần đọc thuộc lòng các bài kinh truyền khẩu',
        'Tự xưng công bình mà không cần phép báp-tem'
      ],
      correctIndex: 0,
      difficultyLevel: 'Vận dụng',
      explanation: 'Công-vụ 2:38 chỉ dẫn rõ ràng con đường tha tội: Ăn năn hối cải và chịu phép báp-tem trong lẽ thật để nhận ơn tha tội và sự ban cho Đức Thánh Linh.',
      lessonRef: 'Tháng 4 - Công-vụ 2:38'
    }
  ],
  5: [
    {
      id: 'm5-q1',
      question: 'Trong 1 Cô-rinh-tô 11:1-16, Luật Khăn Trùm Đầu của Đức Chúa Trời quy định điều gì khi cầu nguyện hoặc thờ phượng?',
      options: [
        'Nữ tín đồ phải đội khăn trùm đầu; nam tín đồ không được trùm đầu',
        'Cả nam và nữ đều phải đội mũ che kín đầu',
        'Tất cả mọi người đều không được đội khăn trùm đầu',
        'Ai thích đội thế nào thì tùy ý cá nhân'
      ],
      correctIndex: 0,
      difficultyLevel: 'Nhận biết',
      explanation: '1 Cô-rinh-tô 11:4-7 dạy rằng người nam không trùm đầu vì là hình ảnh và vinh hiển của Chúa; người nữ trùm đầu khi cầu nguyện để giữ trật tự thánh của Đức Chúa Trời.',
      lessonRef: 'Tháng 5 - 1 Cô-rinh-tô 11:1-16'
    },
    {
      id: 'm5-q2',
      question: 'Sứ đồ Phao-lô tuyên bố lẽ thật cốt lõi nào về Mẹ của linh hồn chúng ta trong Ga-la-ti 4:26?',
      options: [
        'Thành Giê-ru-sa-lem ở trên cao là tự do, và ấy là Mẹ chúng ta',
        'Thành Giê-ru-sa-lem dưới đất xứ Pa-lét-tin là mẹ chúng ta',
        'Chúng ta không có Đức Chúa Trời Mẹ trên trời',
        'Chỉ có thiên sứ mới là mẹ thuộc linh'
      ],
      correctIndex: 0,
      difficultyLevel: 'Nhận biết',
      explanation: 'Ga-la-ti 4:26 chép: "Nhưng thành Giê-ru-sa-lem ở trên cao là tự do, và ấy là Mẹ chúng ta" - làm chứng về Đức Chúa Trời Mẹ trên trời.',
      lessonRef: 'Tháng 5 - Ga-la-ti 4:26'
    },
    {
      id: 'm5-q3',
      question: 'Theo 1 Cô-rinh-tô 5:7-8, Sứ đồ Phao-lô đã khuyên giục Hội thánh Tân Ước điều gì liên quan đến Lễ Vượt Qua?',
      options: [
        'Đấng Christ là con sinh lễ Vượt-qua đã bị hi sinh rồi, vậy thì chúng ta hãy giữ lễ',
        'Lễ Vượt Qua đã bị bãi bỏ hoàn toàn và không được phép giữ nữa',
        'Hãy thay thế Lễ Vượt Qua bằng ngày lễ của thần mặt trời',
        'Chỉ giữ lễ nếu có lệnh từ hoàng đế La Mã'
      ],
      correctIndex: 0,
      difficultyLevel: 'Thông hiểu',
      explanation: '1 Cô-rinh-tô 5:7-8 chỉ dạy Hội thánh tiếp tục giữ Lễ Vượt Qua bằng bánh không men của sự thật thà và lẽ thật.',
      lessonRef: 'Tháng 5 - 1 Cô-rinh-tô 5:7-8'
    },
    {
      id: 'm5-q4',
      question: 'Trong 2 Cô-rinh-tô 3:6, Sứ đồ Phao-lô khẳng định chức vụ cao quý mà Đức Chúa Trời đã ban tài năng để thi hành là chức vụ gì?',
      options: [
        'Chức việc của Giao Ước Mới theo Thánh Linh',
        'Chức vụ duy trì điều răn truyền khẩu loài người',
        'Chức vụ thế tục tìm kiếm danh vọng thế gian',
        'Chức vụ theo chữ làm cho chết'
      ],
      correctIndex: 0,
      difficultyLevel: 'Thông hiểu',
      explanation: '2 Cô-rinh-tô 3:6 khẳng định: "Ngài đã ban cho chúng tôi đủ tài năng đặng làm chức việc của Giao Ước Mới, chẳng phải theo chữ, bèn là theo Thánh Linh".',
      lessonRef: 'Tháng 5 - 2 Cô-rinh-tô 3:6'
    },
    {
      id: 'm5-q5',
      question: 'Tại sao Ga-la-ti 4:28 chép "chúng ta cũng như Y-sác, là con của lời hứa"?',
      options: [
        'Vì chúng ta tin nhận Đức Chúa Trời Mẹ (Sa-ra) và nhận sự sống đời đời theo lời hứa',
        'Vì chúng ta thuộc huyết thống thể xác người Do Thái',
        'Vì chúng ta được tự xưng con không cần giao ước',
        'Vì chúng ta là con của người tớ gái A-ga'
      ],
      correctIndex: 0,
      difficultyLevel: 'Vận dụng',
      explanation: 'Y-sác thừa kế gia nghiệp nhờ mẹ là Sa-ra (người nữ tự do). Cũng vậy, các thánh đồ nhận sự sống đời đời và quyền thừa kế Nước Trời nhờ tin nhận Đức Chúa Trời Mẹ Giê-ru-sa-lem.',
      lessonRef: 'Tháng 5 - Ga-la-ti 4:26-31'
    }
  ]
};

// General pool generator to generate questions up to 30 for ANY selected lesson, book or difficulty level!
export function generateLocalQuizQuestions(
  monthId: number,
  dayNumber: number,
  requestedCount: number,
  difficulty: QuizDifficulty,
  studentName: string
): QuizQuestion[] {
  const finalCount = Math.min(Math.max(Number(requestedCount) || 10, 1), 30);
  const questionsList: QuizQuestion[] = [];

  // Filter or collect from preset questions
  let sourceQuestions: QuizQuestion[] = [];
  if (monthId > 0 && PRESET_QUIZ_QUESTIONS[monthId]) {
    sourceQuestions = [...PRESET_QUIZ_QUESTIONS[monthId]];
  } else {
    Object.values(PRESET_QUIZ_QUESTIONS).forEach((list) => {
      sourceQuestions.push(...list);
    });
  }

  // Filter by difficulty if specific
  if (difficulty !== 'Tổng hợp 3 mức độ') {
    const filtered = sourceQuestions.filter((q) => q.difficultyLevel === difficulty);
    if (filtered.length > 0) {
      sourceQuestions = filtered;
    }
  }

  // Get current month info
  const targetMonthId = monthId > 0 ? monthId : 1;
  const monthData = BIBLE_PLAN_DATA.find((m) => m.id === targetMonthId) || BIBLE_PLAN_DATA[0];

  let idCounter = 1;

  // Add available preset questions first
  sourceQuestions.forEach((q) => {
    if (questionsList.length < finalCount) {
      questionsList.push({ ...q, id: `preset-${targetMonthId}-${idCounter++}` });
    }
  });

  // Dynamic template generator to guarantee ALWAYS meeting finalCount (5, 10, 15, 20, 25, 30)
  const verses = monthData.keyVerses || [];
  const books = monthData.books || [];
  const schedule = monthData.suggestedSchedule || [];
  const reflections = monthData.reflectionQuestions || [];

  let idx = 0;
  while (questionsList.length < finalCount) {
    const qNum = questionsList.length + 1;
    const mode = idx % 4;

    if (mode === 0) {
      // Verse Question (Phan Khoi 1925)
      const v = verses[idx % Math.max(verses.length, 1)] || {
        reference: `${monthData.monthTitle} - VI1925`,
        text: 'Lời Chúa là ngọn đèn cho chân tôi, Là ánh sáng cho đường lối tôi.',
        context: 'Lẽ thật Giao Ước Mới'
      };
      const correctText = `"${v.text}"`;
      const options = [
        correctText,
        `"Đức Chúa Trời là lòng yêu thương trọn vẹn theo truyền thống loài người."`,
        `"Hãy tuân giữ các điều răn do con người chế định và thêm bớt."`,
        `"Mọi giáo lý đều như nhau không cần phân biệt ngày Sa-bát hay Lễ Vượt Qua."`
      ];
      questionsList.push({
        id: `gen-${qNum}`,
        question: `[VI1925 - Câu ${qNum}] Lời Kinh Thánh trong ${v.reference} chép như thế nào?`,
        options,
        correctIndex: 0,
        difficultyLevel: difficulty === 'Tổng hợp 3 mức độ' ? 'Nhận biết' : difficulty,
        explanation: `${v.reference} (Bản dịch Phan Khôi 1925): "${v.text}" - ${v.context}`,
        lessonRef: v.reference
      });
    } else if (mode === 1) {
      // Book / Theological Concept Question
      const b = books[idx % Math.max(books.length, 1)] || {
        name: monthData.booksText,
        description: monthData.theologicalConcept
      };
      const options = [
        `${b.description}`,
        `Cung cấp các quy tắc sinh hoạt thế tục không liên quan đến sự cứu rỗi linh hồn.`,
        `Chỉ ghi chép lịch sử dân sự mà không có lời tiên tri về Đấng Cứu Thế và Giao Ước Mới.`,
        `Cho phép bãi bỏ các kỳ lễ trọng thể của Đức Chúa Trời theo ý loài người.`
      ];
      questionsList.push({
        id: `gen-${qNum}`,
        question: `[Lẽ thật Kinh Thánh - Câu ${qNum}] Trọng tâm thần học và lẽ thật trong sách ${b.name} (${monthData.monthTitle}) là gì?`,
        options,
        correctIndex: 0,
        difficultyLevel: difficulty === 'Tổng hợp 3 mức độ' ? 'Thông hiểu' : difficulty,
        explanation: `Sách ${b.name} (${monthData.monthTitle}): ${b.description}`,
        lessonRef: b.name
      });
    } else if (mode === 2) {
      // Daily schedule reading question
      const s = schedule[idx % Math.max(schedule.length, 1)] || {
        day: (idx % 30) + 1,
        reading: 'Đoạn Kinh Thánh',
        focus: 'Lời Đức Chúa Trời nuôi dưỡng linh hồn'
      };
      const options = [
        `Trọng tâm: ${s.focus}`,
        `Tìm kiếm triết lý nhân sinh theo ý tưởng loài người.`,
        `Đổi các ngày lễ của Đức Chúa Trời sang các ngày lễ ngoại bang.`,
        `Chỉ đọc lướt qua mà không cần suy ngẫm vâng giữ.`
      ];
      questionsList.push({
        id: `gen-${qNum}`,
        question: `[Lộ trình Ngày ${s.day} - Câu ${qNum}] Trọng tâm học tập trong phần đọc "${s.reading}" (${monthData.monthTitle}) là gì?`,
        options,
        correctIndex: 0,
        difficultyLevel: difficulty === 'Tổng hợp 3 mức độ' ? 'Thông hiểu' : difficulty,
        explanation: `Bài đọc Ngày ${s.day} (${s.reading}): ${s.focus}`,
        lessonRef: `Ngày ${s.day}: ${s.reading}`
      });
    } else {
      // Practical Application Question
      const ref = reflections[idx % Math.max(reflections.length, 1)] ||
        'Làm thế nào để thánh đồ gìn giữ đức tin thuần khiết trong Lời Đức Chúa Trời?';
      const options = [
        `Trung tín đọc Kinh Thánh Phan Khôi 1925 hằng ngày, vâng giữ ngày Sa-bát, Lễ Vượt Qua và bước đi trong lẽ thật của Đức Chúa Trời Cha và Mẹ.`,
        `Chạy theo các trào lưu và điều răn do con người chế đặt.`,
        `Thờ lạy hình tượng thập tự giá theo thói quen thế gian.`,
        `Chỉ đọc Kinh Thánh khi gặp hoạn nạn khó khăn.`
      ];
      questionsList.push({
        id: `gen-${qNum}`,
        question: `[Áp dụng Lẽ Thật - Thánh đồ ${studentName || 'Học viên'} - Câu ${qNum}] ${ref}`,
        options,
        correctIndex: 0,
        difficultyLevel: difficulty === 'Tổng hợp 3 mức độ' ? 'Vận dụng' : difficulty,
        explanation: `Học tập Lời Đức Chúa Trời giúp Thánh đồ giữ vững đức tin, phân biệt lẽ thật Giao Ước Mới và nhận lãnh sự sống đời đời (Thi-thiên 119:105, Khải 22:17).`,
        lessonRef: monthData.monthTitle
      });
    }

    idx++;
  }

  // Ensure options are shuffled nicely for generated questions so correct option is not always first
  return questionsList.map((q, qIndex) => {
    if (q.id.startsWith('preset-')) return q;

    const originalCorrect = q.options[q.correctIndex || 0];
    const optionCopy = [...q.options];

    // Seeded shuffle based on qIndex and question text length
    const shift = (qIndex * 3 + q.question.length) % 4;
    const [picked] = optionCopy.splice(0, 1);
    optionCopy.splice(shift, 0, picked);

    const newCorrectIndex = optionCopy.indexOf(originalCorrect);

    return {
      ...q,
      options: optionCopy,
      correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0
    };
  });
}
