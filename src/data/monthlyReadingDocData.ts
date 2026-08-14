export interface MonthlySectionDoc {
  month: number;
  title: string;
  chapters: string;
  overview: string;
  coreTruths: string[];
  keyVerses: { ref: string; text: string }[];
  schedule: string[];
}

export const MONTHLY_READING_RAW_TEXT = `NỘI DUNG KINH THÁNH ĐỌC HÀNG THÁNG - LỘ TRÌNH 12 THÁNG
Dưới đây là toàn bộ nội dung chi tiết của 12 Tháng trong lộ trình đọc Kinh thánh 1 năm (sử dụng Kinh Thánh Bản dịch Phan Khôi 1925), được trình bày đầy đủ, mạch lạc và rõ ràng để bạn dễ dàng theo dõi:
________________________________________

THÁNG 1: Đức Chúa Trời Elohim, Ngày Sa-bát & Lễ Vượt Qua Giao Ước Mới
• Các chương cần đọc: Sáng-thế-ký, Ma-thi-ơ, Giăng, 1-2-3 Giăng (Tổng cộng: 106 chương).
• Phần tổng quan: Khởi đầu lịch sử sáng tạo với Đức Chúa Trời Elohim ("Chúng ta"), ngày Sa-bát thánh thứ Bảy, bí mật Cây Sự Sống trong vườn Ê-đen và Đức Chúa Giê-xu ban sự sống đời đời qua Lễ Vượt Qua Giao Ước Mới.
• Bản chất cốt lõi (WATV.ORG):
  - Sáng-thế-ký 1:26-27: Đức Chúa Trời phán "Chúng ta hãy làm nên loài người như hình ta và theo tượng ta", loài người được dựng nên theo hình ảnh của Đức Chúa Trời -> Khẳng định sự hiện hữu của Đức Chúa Trời Cha và Đức Chúa Trời Mẹ (Elohim).
  - Sáng-thế-ký 2:1-3: Biệt riêng ngày thứ bảy làm Ngày Sa-bát là ngày thánh để tưởng nhớ Đấng Sáng Tạo.
  - Giăng 6:53-54 & Ma-thi-ơ 26:17-28: Kẻ phạm tội bị chặn đường đến Cây Sự Sống (Sáng 3:22). Đức Chúa Giê-xu đến ban Thịt và Huyết Ngài qua Bánh và Rượu Nho Lễ Vượt Qua Giao Ước Mới làm thực thể chính Cây Sự Sống để tái sinh sự sống đời đời.
• Câu gốc nền tảng:
  - Sáng-thế-ký 1:26-27: Đức Chúa Trời phán rằng: Chúng ta hãy làm nên loài người như hình ta và theo tượng ta... Đức Chúa Trời dựng nên loài người như hình Ngài: Ngài dựng nên loài người nam cùng loài người nữ.
  - Sáng-thế-ký 2:1-3: Đức Chúa Trời ban phước cho ngày thứ bảy, đặt là ngày thánh; vì trong ngày đó, Ngài nghỉ các công việc đã dựng nên và làm xong rồi.
  - Ma-thi-ơ 26:26-28: Đức Chúa Giê-xu lấy bánh, chúc phước, bẻ ra đưa cho môn đồ mà phán rằng: Hãy lấy ăn đi, nầy là thân thể ta. Ngài lại lấy chén, tạ ơn, đưa cho môn đồ mà phán rằng: Hết thảy hãy uống đi; vì nầy là huyết ta, huyết của sự giao ước đã đổ ra cho nhiều người được tha tội.
  - Giăng 6:53-54: Đức Chúa Giê-xu phán rằng: Quả thật, quả thật, ta nói cùng các ngươi, nếu các ngươi không ăn thịt của Con người, cùng không uống huyết Ngài, thì chẳng có sự sống trong các ngươi đâu. Ai ăn thịt và uống huyết ta thì được sự sống đời đời...
• Lịch đọc chi tiết 30 ngày:
  - Ngày 1: Sáng-thế-ký 1–3 & Ma-thi-ơ 1
  - Ngày 2: Sáng-thế-ký 4–7 & Ma-thi-ơ 2
  - Ngày 3: Sáng-thế-ký 8–11 & Ma-thi-ơ 3
  - Ngày 4: Sáng-thế-ký 12–15 & Ma-thi-ơ 4
  - Ngày 5: Sáng-thế-ký 16–18 & Ma-thi-ơ 5
  - Ngày 6: Sáng-thế-ký 19–21 & Ma-thi-ơ 6
  - Ngày 7: Sáng-thế-ký 22–24 & Ma-thi-ơ 7
  - Ngày 8: Sáng-thế-ký 25–27 & Ma-thi-ơ 8
  - Ngày 9: Sáng-thế-ký 28–30 & Ma-thi-ơ 9
  - Ngày 10: Sáng-thế-ký 31–33 & Ma-thi-ơ 10
  - Ngày 11: Sáng-thế-ký 34–36 & Ma-thi-ơ 11
  - Ngày 12: Sáng-thế-ký 37–39 & Ma-thi-ơ 12
  - Ngày 13: Sáng-thế-ký 40–42 & Ma-thi-ơ 13
  - Ngày 14: Sáng-thế-ký 43–45 & Ma-thi-ơ 14
  - Ngày 15: Sáng-thế-ký 46–48 & Ma-thi-ơ 15
  - Ngày 16: Sáng-thế-ký 49–50 & Ma-thi-ơ 16
  - Ngày 17: Ma-thi-ơ 17–20
  - Ngày 18: Ma-thi-ơ 21–24
  - Ngày 19: Ma-thi-ơ 25–28
  - Ngày 20: Giăng 1–3
  - Ngày 21: Giăng 4–6
  - Ngày 22: Giăng 7–9
  - Ngày 23: Giăng 10–12
  - Ngày 24: Giăng 13–15
  - Ngày 25: Giăng 16–18
  - Ngày 26: Giăng 19–21
  - Ngày 27: 1 Giăng 1–2
  - Ngày 28: 1 Giăng 3–4
  - Ngày 29: 1 Giăng 5
  - Ngày 30: 2 Giăng 1 & 3 Giăng 1
________________________________________

THÁNG 2: Lễ Vượt Qua Giải Thoát, 3 Kỳ 7 Lễ Trọng Thể & Thầy Tế Lễ Mên-chi-xê-đéc
• Các chương cần đọc: Xuất Ê-đíp-tô Ký, Lê-vi Ký, Mác, Hê-bơ-rơ (Tổng cộng: 96 chương).
• Phần tổng quan: Giải phóng khỏi tai ương, tai vạ nhờ Huyết Chiên Con Lễ Vượt Qua, luật cấm tuyệt đối thờ hình tượng (như thập tự giá), quy chế 3 kỳ 7 Lễ Trọng Thể và Đức Chúa Jesus Christ đã lập nên ban Mên-chi-xê-đéc.
• Bản chất cốt lõi (WATV.ORG):
  - Xuất Ê-đíp-tô Ký 12: Lễ Vượt Qua là dấu hiệu duy nhất để tai nạn diệt trừ vượt qua khỏi dân sự.
  - Xuất Ê-đíp-tô Ký 20:4-5: Điều răn thứ hai cấm tuyệt đối làm và tôn thờ hình tượng (thập tự giá vốn là công cụ xử tử của La Mã cổ đại, việc dựng và thờ thập tự giá là thờ ngẫu tượng).
  - Lê-vi Ký 23: Quy định 3 Kỳ 7 Lễ Trọng Thể đời đời của Đức Chúa Trời.
  - Hê-bơ-rơ 5, 7, 8: Đức Chúa Giê-xu là Thầy Tế Lễ Thượng Phẩm theo ban Mên-chi-xê-đéc dùng Bánh và Rượu Nho Lễ Vượt Qua ban sự sống đời đời và lập Giao Ước Mới.
• Câu gốc nền tảng:
  - Xuất Ê-đíp-tô Ký 12:13-14: Huyết đó sẽ dùng làm dấu hiệu nơi các nhà các ngươi ở. Khi Ta thấy huyết đó, thì sẽ vượt qua khỏi các ngươi... Các ngươi hãy kỷ niệm ngày đó... như một lễ đời đời.
  - Xuất Ê-đíp-tô Ký 20:4-5: Ngươi chớ làm tượng chạm cho mình, cũng chớ làm tượng nào giống những vật trên trời cao kia, hoặc nơi đất thấp nầy... Ngươi chớ quì lạy trước các hình tượng đó, và cũng chớ hầu việc chúng nó.
  - Lê-vi Ký 23:2, 4: Hãy truyền cho dân Y-sơ-ra-ên rằng: Nầy là những ngày lễ của Đức Giê-hô-va các ngươi hãy rao truyền ra là các hội thánh... Nầy là những lễ của Đức Giê-hô-va, tức những sự nhóm hiệp thánh, các ngươi phải rao truyền ra khi đến kỳ nhứt định.
  - Hê-bơ-rơ 7:17, 8:8: Ngươi là thầy tế lễ đời đời theo ban Mên-chi-xê-đéc... Nầy, những ngày đến, Ta sẽ lập một giao ước mới với nhà Y-sơ-ra-ên và với nhà Giu-đa.
• Lịch đọc chi tiết 30 ngày:
  - Ngày 1: Xuất Ê-đíp-tô Ký 1–4
  - Ngày 2: Xuất Ê-đíp-tô Ký 5–8
  - Ngày 3: Xuất Ê-đíp-tô Ký 9–11
  - Ngày 4: Xuất Ê-đíp-tô Ký 12–14
  - Ngày 5: Xuất Ê-đíp-tô Ký 15–17
  - Ngày 6: Xuất Ê-đíp-tô Ký 18–20
  - Ngày 7: Xuất Ê-đíp-tô Ký 21–24
  - Ngày 8: Xuất Ê-đíp-tô Ký 25–27
  - Ngày 9: Xuất Ê-đíp-tô Ký 28–30
  - Ngày 10: Xuất Ê-đíp-tô Ký 31–34
  - Ngày 11: Xuất Ê-đíp-tô Ký 35–37
  - Ngày 12: Xuất Ê-đíp-tô Ký 38–40
  - Ngày 13: Lê-vi Ký 1–4
  - Ngày 14: Lê-vi Ký 5–7
  - Ngày 15: Lê-vi Ký 8–10
  - Ngày 16: Lê-vi Ký 11–13
  - Ngày 17: Lê-vi Ký 14–16
  - Ngày 18: Lê-vi Ký 17–20
  - Ngày 19: Lê-vi Ký 21–23
  - Ngày 20: Lê-vi Ký 24–27
  - Ngày 21: Mác 1–3
  - Ngày 22: Mác 4–6
  - Ngày 23: Mác 7–9
  - Ngày 24: Mác 10–12
  - Ngày 25: Mác 13–16
  - Ngày 26: Hê-bơ-rơ 1–3
  - Ngày 27: Hê-bơ-rơ 4–6
  - Ngày 28: Hê-bơ-rơ 7–9
  - Ngày 29: Hê-bơ-rơ 10–11
  - Ngày 30: Hê-bơ-rơ 12–13
________________________________________

THÁNG 3: Hành Trình Luyện Rèn Đức Tin & Thói Quen Giữ Ngày Sa-bát
• Các chương cần đọc: Dân-số-ký, Phục-truyền Luật-lệ Ký, Lu-ca (Tổng cộng: 94 chương).
• Phần tổng quan: Sự thử thách đức tin 40 năm trong đồng vắng, quy định Lễ Vượt Qua tháng thứ hai, lời dặn dò vâng giữ điều răn và thói quen giữ ngày Sa-bát của Đức Chúa Giê-xu.
• Bản chất cốt lõi (WATV.ORG):
  - Dân-số-ký 9: Tình yêu thương của Đức Chúa Trời ban cơ hội giữ Lễ Vượt Qua tháng thứ hai (ngày 14 tháng 2 thánh lịch) cho người lỡ kỳ.
  - Dân-số-ký 21 & 2 Các Vua 18:4: Việc nhìn con rắn đồng được cứu là nhờ Lời phán của Đức Chúa Trời chứ không phải quyền phép của con rắn; sau này dân chúng đem con rắn đồng ra thờ lạy nên vua Ê-xê-chia đã đập nát (bài học cảnh tỉnh việc sùng kính thập tự giá).
  - Lu-ca 4:16: Đức Chúa Giê-xu vào nhà hội giữ ngày Sa-bát thứ Bảy theo thói quen Ngài thường làm.
  - Lu-ca 22:15-20: Đức Chúa Giê-xu phán "Ta rất muốn ăn Lễ Vượt Qua này" để lập Giao Ước Mới trong Huyết Ngài.
• Câu gốc nền tảng:
  - Phục-truyền 6:4-5: Hỡi Y-sơ-ra-ên! Hãy nghe: Giê-hô-va Đức Chúa Trời chúng ta là Giê-hô-va có một không hai. Ngươi phải hết lòng, hết linh hồn, hết sức mà kính mến Giê-hô-va Đức Chúa Trời ngươi.
  - Lu-ca 4:16: Đức Chúa Giê-xu đến thành Na-xa-rét... theo thói quen thường làm, Ngài vào nhà hội trong ngày Sa-bát, đứng dậy để đọc.
  - Lu-ca 22:15, 20: Ngài phán rằng: Ta rất muốn ăn lễ Vượt Qua nầy với các ngươi trước khi ta chịu đau đớn... Chén nầy là giao ước mới trong huyết ta vì các ngươi mà đổ ra.
• Lịch đọc chi tiết 27 ngày:
  - Ngày 1: Dân-số-ký 1–4
  - Ngày 2: Dân-số-ký 5–8
  - Ngày 3: Dân-số-ký 9–12
  - Ngày 4: Dân-số-ký 13–16
  - Ngày 5: Dân-số-ký 17–20
  - Ngày 6: Dân-số-ký 21–24
  - Ngày 7: Dân-số-ký 25–28
  - Ngày 8: Dân-số-ký 29–32
  - Ngày 9: Dân-số-ký 33–36
  - Ngày 10: Phục-truyền 1–4
  - Ngày 11: Phục-truyền 5–8
  - Ngày 12: Phục-truyền 9–12
  - Ngày 13: Phục-truyền 13–16
  - Ngày 14: Phục-truyền 17–20
  - Ngày 15: Phục-truyền 21–25
  - Ngày 16: Phục-truyền 26–28
  - Ngày 17: Phục-truyền 29–31
  - Ngày 18: Phục-truyền 32–34
  - Ngày 19: Lu-ca 1–2
  - Ngày 20: Lu-ca 3–5
  - Ngày 21: Lu-ca 6–8
  - Ngày 22: Lu-ca 9–11
  - Ngày 23: Lu-ca 12–14
  - Ngày 24: Lu-ca 15–17
  - Ngày 25: Lu-ca 18–20
  - Ngày 26: Lu-ca 21–22
  - Ngày 27: Lu-ca 23–24
________________________________________

THÁNG 4: Lễ Vượt Qua Chiếm Đất Hứa, Lễ Ngũ Tuần & Sự Sống Lại
• Các chương cần đọc: Giô-suê, Các Quan-xét, Ru-tơ, Công-vụ các Sứ-đồ, Rô-ma (Tổng cộng: 93 chương).
• Phần tổng quan: Giữ Lễ Vượt Qua trước khi công phá thành Giê-ri-cô, Đức Thánh Linh giáng xuống trong Lễ Ngũ Tuần, Sứ đồ Phao-lô giữ ngày Sa-bát theo thói quen và A-đam Ê-va là hình bóng của Đức Chúa Trời Cha & Đức Chúa Trời Mẹ.
• Bản chất cốt lõi (WATV.ORG):
  - Giô-suê 5:10: Dân sự giữ Lễ Vượt Qua tại đồng bằng Giê-ri-cô trước khi bức tường thành sụp đổ.
  - Công-vụ 2:1-38: Đức Thánh Linh mưa đầu mùa giáng lâm vào Lễ Ngũ Tuần (ngày thứ 50 sau Lễ Phục Sinh).
  - Công-vụ 17:2 & 18:4: Sứ đồ Phao-lô luôn giữ ngày Sa-bát theo thói quen của mình trong suốt hành trình truyền giáo.
  - Rô-ma 5:14: A-đam là hình bóng của Đấng phải đến (Đức Chúa Trời Cha), ngụ ý vợ A-đam là Ê-va chính là hình bóng của Đức Chúa Trời Mẹ.
• Câu gốc nền tảng:
  - Giô-suê 5:10: Dân Y-sơ-ra-ên đóng trại tại Ghinh-ganh, và giữ lễ Vượt-qua ngày mười bốn tháng nầy, vào lối chiều tối, tại trong đồng bằng Giê-ri-cô.
  - Công-vụ 2:1, 38: Đến ngày lễ Ngũ-tuần, môn-đồ nhóm họp tại một chỗ... Phi-e-rơ trả lời rằng: Hãy hối cải, ai nấy khá chịu phép báp-tem nhân danh Đức Chúa Giê-xu Đấng Christ, đặng được tha tội mình; rồi sẽ nhận lãnh sự ban cho Đức Thánh Linh.
  - Công-vụ 17:2: Phao-lô tới nơi họ, theo thói quen mình, và trong ba ngày Sa-bát biện luận với họ bằng Kinh Thánh.
  - Rô-ma 5:14: A-đam là hình bóng của Đấng phải đến.
• Lịch đọc chi tiết 26 ngày:
  - Ngày 1: Giô-suê 1–4
  - Ngày 2: Giô-suê 5–8
  - Ngày 3: Giô-suê 9–12
  - Ngày 4: Giô-suê 13–17
  - Ngày 5: Giô-suê 18–21
  - Ngày 6: Giô-suê 22–24
  - Ngày 7: Các Quan-xét 1–5
  - Ngày 8: Các Quan-xét 6–9
  - Ngày 9: Các Quan-xét 10–14
  - Ngày 10: Các Quan-xét 15–18
  - Ngày 11: Các Quan-xét 19–21
  - Ngày 12: Ru-tơ 1–4
  - Ngày 13: Công-vụ 1–3
  - Ngày 14: Công-vụ 4–6
  - Ngày 15: Công-vụ 7–9
  - Ngày 16: Công-vụ 10–12
  - Ngày 17: Công-vụ 13–15
  - Ngày 18: Công-vụ 16–18
  - Ngày 19: Công-vụ 19–21
  - Ngày 20: Công-vụ 22–25
  - Ngày 21: Công-vụ 26–28
  - Ngày 22: Rô-ma 1–3
  - Ngày 23: Rô-ma 4–6
  - Ngày 24: Rô-ma 7–9
  - Ngày 25: Rô-ma 10–12
  - Ngày 26: Rô-ma 13–16
________________________________________

THÁNG 5: Đức Chúa Trời Mẹ Giê-ru-sa-lem, Luật Khăn Trùm Đầu & Lễ Vượt Qua
• Các chương cần đọc: 1-2 Sa-mu-ên, 1 Các Vua, 1-2 Cô-rinh-tô, Ga-la-ti (Tổng cộng: 112 chương).
• Phần tổng quan: Sự thiết lập vương triều Đa-vít tại Si-ôn, Lễ Vượt Qua Giao Ước Mới trong 1 Cô-rinh-tô 11, Luật Khăn Trùm Đầu cho nữ tín đồ và lẽ thật tối thượng về Đức Chúa Trời Mẹ Giê-ru-sa-lem trên trời trong Ga-la-ti 4:26.
• Bản chất cốt lõi (WATV.ORG):
  - 1 Cô-rinh-tô 11:1-16: Quy định Luật Đội Khăn Trùm Đầu theo trật tự sáng tạo của Đức Chúa Trời: Nữ tín đồ đội khăn khi cầu nguyện và thờ phượng; nam giới không đội khăn.
  - 1 Cô-rinh-tô 5:7-8 & 11:23-26: Mạng lệnh giữ Lễ Vượt Qua Giao Ước Mới bằng Bánh và Rượu Nho để rao truyền sự chết của Chúa cho tới khi Ngài đến.
  - Ga-la-ti 4:26, 28: Tuyên bố lẽ thật: "Thành Giê-ru-sa-lem ở trên cao là tự do, và ấy là Mẹ chúng ta". Chúng ta là con cái của lời hứa như Y-sác được sinh ra bởi Mẹ Tự Do.
• Câu gốc nền tảng:
  - 1 Cô-rinh-tô 11:5, 7: Người đàn bà nào cầu nguyện hoặc nói tiên tri mà không trùm đầu lại, thì làm nhục đầu mình... Người đàn ông không nên trùm đầu, vì là hình ảnh và sự vinh hiển của Đức Chúa Trời; nhưng người đàn bà là sự vinh hiển của người đàn ông.
  - 1 Cô-rinh-tô 5:7-8: Vì Đấng Christ là con sinh lễ Vượt-qua của chúng ta, đã bị hi sinh rồi. Vậy thì, chúng ta hãy giữ lễ...
  - Ga-la-ti 4:26, 28: Nhưng thành Giê-ru-sa-lem ở trên cao là tự do, và ấy là Mẹ chúng ta... Hỡi anh em, về phần chúng ta, chúng ta cũng như Y-sác, là con của lời hứa.
  - 2 Cô-rinh-tô 3:6: Ngài đã ban cho chúng tôi đủ tài năng đặng làm chức việc của Giao Ước Mới...
• Lịch đọc chi tiết 27 ngày:
  - Ngày 1: 1 Sa-mu-ên 1–4
  - Ngày 2: 1 Sa-mu-ên 5–8
  - Ngày 3: 1 Sa-mu-ên 9–12
  - Ngày 4: 1 Sa-mu-ên 13–16
  - Ngày 5: 1 Sa-mu-ên 17–20
  - Ngày 6: 1 Sa-mu-ên 21–25
  - Ngày 7: 1 Sa-mu-ên 26–31
  - Ngày 8: 2 Sa-mu-ên 1–5
  - Ngày 9: 2 Sa-mu-ên 6–9
  - Ngày 10: 2 Sa-mu-ên 10–14
  - Ngày 11: 2 Sa-mu-ên 15–18
  - Ngày 12: 2 Sa-mu-ên 19–24
  - Ngày 13: 1 Các Vua 1–4
  - Ngày 14: 1 Các Vua 5–8
  - Ngày 15: 1 Các Vua 9–12
  - Ngày 16: 1 Các Vua 13–16
  - Ngày 17: 1 Các Vua 17–19
  - Ngày 18: 1 Các Vua 20–22
  - Ngày 19: 1 Cô-rinh-tô 1–4
  - Ngày 20: 1 Cô-rinh-tô 5–8
  - Ngày 21: 1 Cô-rinh-tô 9–12
  - Ngày 22: 1 Cô-rinh-tô 13–16
  - Ngày 23: 2 Cô-rinh-tô 1–4
  - Ngày 24: 2 Cô-rinh-tô 5–8
  - Ngày 25: 2 Cô-rinh-tô 9–13
  - Ngày 26: Ga-la-ti 1–3
  - Ngày 27: Ga-la-ti 4–6
________________________________________

THÁNG 6: Lễ Vượt Qua Phá Thần Tượng (Ê-xê-chia & Giô-si-a) & Thư Tín Ngục Tù
• Các chương cần đọc: 2 Các Vua, 1-2 Sử-ký, Ê-phê-sô, Phi-líp, Cô-lô-se (Tổng cộng: 104 chương).
• Phần tổng quan: Vua Ê-xê-chia đập nát con rắn đồng Nê-hu-sơ-tan và cùng vua Giô-si-a phục hưng dân sự nhờ Lễ Vượt Qua; các thư tín ngục tù về sự tha tội nhờ Huyết Lễ Vượt Qua trong Đấng Christ.
• Bản chất cốt lõi (WATV.ORG):
  - 2 Các Vua 18:4: Vua Ê-xê-chia đập nát con rắn đồng vì dân chúng xông hương thờ lạy nó (gọi là Nê-hu-sơ-tan) -> Minh chứng sùng bái thập tự giá ngày nay cũng là thờ hình tượng phạm tội lớn trước Đức Chúa Trời.
  - 2 Sử-ký 30 & 2 Các Vua 23: Khi dân sự trở lại giữ Lễ Vượt Qua, mọi thần tượng bị triệt hạ và Đức Chúa Trời ban sự che chở kỳ diệu.
  - Ê-phê-sô 1:7: Sự tha tội và cứu chuộc nhận được nhờ Huyết Lễ Vượt Qua của Đấng Christ.
• Câu gốc nền tảng:
  - 2 Các Vua 18:4: Người phá hủy các nơi cao, bẻ gãy các trụ thờ, đốn các hình tượng A-sê-ra, và đập nát con rắn đồng mà Môi-se đã làm; vì cho đến ngày đó, dân Y-sơ-ra-ên xông hương cho nó; người ta gọi nó là Nê-hu-sơ-tan.
  - 2 Sử-ký 30:1, 5: Ê-xê-chia sai sứ truyền cho cả Y-sơ-ra-ên và Giu-đa... hãy đến đền của Đức Giê-hô-va tại Giê-ru-sa-lem đặng dự lễ Vượt-qua cho Giê-hô-va Đức Chúa Trời của Y-sơ-ra-ên.
  - Ê-phê-sô 1:7: Ấy là trong Đấng Christ, chúng ta được sự cứu chuộc bởi huyết Ngài, được tha tội, theo sự dư dật của ân điển Ngài.
  - Cô-lô-se 2:16-17: Vì vậy, chớ có ai đoán xét anh em về của ăn uống, hoặc ngày lễ, hoặc ngày mồng một, hoặc ngày Sa-bát: ấy đều là bóng của những việc sẽ tới, mà thân thể thì thuộc về Đấng Christ.
• Lịch đọc chi tiết 24 ngày:
  - Ngày 1: 2 Các Vua 1–4
  - Ngày 2: 2 Các Vua 5–8
  - Ngày 3: 2 Các Vua 9–12
  - Ngày 4: 2 Các Vua 13–17
  - Ngày 5: 2 Các Vua 18–21
  - Ngày 6: 2 Các Vua 22–25
  - Ngày 7: 1 Sử-ký 1–4
  - Ngày 8: 1 Sử-ký 5–9
  - Ngày 9: 1 Sử-ký 10–14
  - Ngày 10: 1 Sử-ký 15–18
  - Ngày 11: 1 Sử-ký 19–23
  - Ngày 12: 1 Sử-ký 24–29
  - Ngày 13: 2 Sử-ký 1–5
  - Ngày 14: 2 Sử-ký 6–9
  - Ngày 15: 2 Sử-ký 10–15
  - Ngày 16: 2 Sử-ký 16–20
  - Ngày 17: 2 Sử-ký 21–25
  - Ngày 18: 2 Sử-ký 26–30
  - Ngày 19: 2 Sử-ký 31–36
  - Ngày 20: Ê-phê-sô 1–3
  - Ngày 21: Ê-phê-sô 4–6
  - Ngày 22: Phi-líp 1–2
  - Ngày 23: Phi-líp 3–4
  - Ngày 24: Cô-lô-se 1–4
________________________________________

THÁNG 7: Tái Thiết Si-ôn, Lễ Lều Tạm & Cảnh Báo Kẻ Gian Ác Đổi Luật Pháp
• Các chương cần đọc: Ê-xơ-ra, Nê-hê-mi, Ê-xơ-thê, Gióp, 1-2 Tê-sa-lô-ni-ca, 1-2 Ti-mô-thê, Tít, Phi-lê-môn (Tổng cộng: 97 chương).
• Phần tổng quan: Dân sự trở về tái thiết Đền Thờ, giữ Lễ Vượt Qua và Lễ Lều Tạm, đức tin kiên định của Gióp và lời cảnh báo về Kẻ gian ác bội đạo bỏ luật pháp trong 2 Tê-sa-lô-ni-ca.
• Bản chất cốt lõi (WATV.ORG):
  - Ê-xơ-ra 6:19-22: Dân sự trở về từ Ba-by-lôn liền giữ Lễ Vượt Qua và Lễ Bánh Không Men trong sự vui vẻ lớn.
  - Nê-hê-mi 8 & 13: Phục hồi Lễ Lều Tạm và lập lại giao ước giữ ngày Sa-bát thánh.
  - 2 Tê-sa-lô-ni-ca 2:3-4: Cảnh báo về "người gian ác, con của sự hư mất" ngồi trong đền thờ tự tôn xưng là Đức Chúa Trời -> Tiên tri về việc quyền lực La Mã bãi bỏ Lễ Vượt Qua và đổi ngày Sa-bát sang ngày Mặt Trời (Chủ Nhật).
• Câu gốc nền tảng:
  - Ê-xơ-ra 6:19, 22: Những người bị lưu-đày đã trở về, bèn giữ lễ Vượt-qua trong ngày mười bốn tháng giêng... lại giữ lễ Bánh-không-men trong bảy ngày cách vui-vẻ.
  - 2 Tê-sa-lô-ni-ca 2:3-4: Mặc dầu cách nào, chớ để ai lừa dối mình; vì phải có sự bội đạo đến trước, và có người gian ác, con của sự hư mất hiện ra, tức là kẻ đối địch, tôn mình lên trên mọi sự người ta xưng là Đức Chúa Trời.
  - 2 Ti-mô-thê 3:16-17: Cả Kinh Thánh đều là bởi Đức Chúa Trời soi dẫn, có ích cho sự dạy dỗ, bẻ trách, sửa trị, dạy người trong sự công bình.
• Lịch đọc chi tiết 19 ngày:
  - Ngày 1: Ê-xơ-ra 1–5
  - Ngày 2: Ê-xơ-ra 6–10
  - Ngày 3: Nê-hê-mi 1–4
  - Ngày 4: Nê-hê-mi 5–8
  - Ngày 5: Nê-hê-mi 9–13
  - Ngày 6: Ê-xơ-thê 1–5
  - Ngày 7: Ê-xơ-thê 6–10
  - Ngày 8: Gióp 1–5
  - Ngày 9: Gióp 6–12
  - Ngày 10: Gióp 13–19
  - Ngày 11: Gióp 20–27
  - Ngày 12: Gióp 28–34
  - Ngày 13: Gióp 35–42
  - Ngày 14: 1 Tê-sa-lô-ni-ca 1–5
  - Ngày 15: 2 Tê-sa-lô-ni-ca 1–3
  - Ngày 16: 1 Ti-mô-thê 1–3
  - Ngày 17: 1 Ti-mô-thê 4–6
  - Ngày 18: 2 Ti-mô-thê 1–4
  - Ngày 19: Tít 1–3 & Phi-lê-môn 1
________________________________________

THÁNG 8: Si-ôn Nơi Ban Sự Sống Đời Đời & Thầy Tế Lễ Mên-chi-xê-đéc
• Các chương cần đọc: Thi-thiên (Bài 1 đến Bài 100), Gia-cơ, 1-2 Phi-e-rơ (Tổng cộng: 113 chương).
• Phần tổng quan: Si-ôn là nơi Đức Chúa Trời chọn ngự và ban phước sự sống đời đời (Thi-thiên 133), Đấng Mê-si theo ban Mên-chi-xê-đéc và đức tin sống động có việc làm vâng giữ điều răn luật pháp Đức Chúa Trời.
• Bản chất cốt lõi (WATV.ORG):
  - Thi-thiên 132 & 133:3: Si-ôn là nơi Đức Chúa Trời ban phước sự sống chẳng hề cùng cho đến đời đời.
  - Thi-thiên 110:4: Đấng Mê-si được lập làm Thầy Tế Lễ đời đời theo ban Mên-chi-xê-đéc (dâng Bánh và Rượu Nho Lễ Vượt Qua).
  - Gia-cơ 2:26: Xác chẳng có hồn thì chết, đức tin không có việc làm vâng giữ điều răn cũng chết như vậy.
  - 1 Phi-e-rơ 1:18-19: Được chuộc bởi Huyết báu Chiên Con Lễ Vượt Qua của Đức Chúa Jesus Christ.
• Câu gốc nền tảng:
  - Thi-thiên 133:3: Tại đó Đức Giê-hô-va đã ban phước, tức là sự sống cho đến đời đời.
  - Thi-thiên 110:4: Đức Giê-hô-va đã thề, và không hề đổi ý, rằng: Ngươi là thầy tế lễ đời đời theo ban Mên-chi-xê-đéc.
  - Gia-cơ 2:26: Vả, xác chẳng có hồn thì chết, đức tin không có việc làm cũng chết như vậy.
  - 1 Phi-e-rơ 1:18-19: Nhờ huyết báu Đấng Christ, dường như huyết chiên con không lỗi không vít, mà anh em đã được chuộc.
• Lịch đọc chi tiết 15 ngày:
  - Ngày 1: Thi-thiên 1–10
  - Ngày 2: Thi-thiên 11–20
  - Ngày 3: Thi-thiên 21–30
  - Ngày 4: Thi-thiên 31–40
  - Ngày 5: Thi-thiên 41–50
  - Ngày 6: Thi-thiên 51–60
  - Ngày 7: Thi-thiên 61–70
  - Ngày 8: Thi-thiên 71–80
  - Ngày 9: Thi-thiên 81–90
  - Ngày 10: Thi-thiên 91–100
  - Ngày 11: Gia-cơ 1–2
  - Ngày 12: Gia-cơ 3–5
  - Ngày 13: 1 Phi-e-rơ 1–3
  - Ngày 14: 1 Phi-e-rơ 4–5 & 2 Phi-e-rơ 1
  - Ngày 15: 2 Phi-e-rơ 2–3
________________________________________

THÁNG 9: Sự Khôn Ngoan Thiên Thượng, Tiệc Rượu Nho & Tình Yêu Nhã-ca
• Các chương cần đọc: Thi-thiên (Bài 101 đến Bài 150), Châm-ngôn, Truyền-đạo, Nhã-ca, Giu-đơ (Tổng cộng: 102 chương).
• Phần tổng quan: Ngợi khen Luật pháp và Giao Ước Mới (Thi-thiên 119), Sự Khôn Ngoan lên tiệc bánh và rượu nho (Châm-ngôn 9) và bài ca tình yêu thánh khiết giữa Đấng Chăn Chiên cùng Nàng Su-la-mít.
• Bản chất cốt lõi (WATV.ORG):
  - Châm-ngôn 9:1-5: Sự Khôn Ngoan (hình bóng Đức Chúa Trời Mẹ) xây nhà mình trên vầng đá, dự phần vào tiệc thánh Lễ Vượt Qua bởi bánh và rượu nho, mời những ai khao khát đến ăn bánh uống rượu để được sống.
  - Thi-thiên 119: 176 câu ca ngợi luật pháp, chứng cớ và điều răn thánh khiết của Đức Chúa Trời.
  - Truyền-đạo 12:13: Bổn phận trọn vẹn của con người là kính sợ Đức Chúa Trời và vâng giữ các điều răn Ngài.
  - Nhã-ca: Tình yêu thương đời đời giữa Đức Chúa Trời Cha, Đức Chúa Trời Mẹ và các con cái linh hồn.
• Câu gốc nền tảng:
  - Châm-ngôn 9:1-2, 5: Sự khôn ngoan đã xây cất nhà mình... đã dọn tiệc mình, pha rượu, và bày bàn mình... Hãy đến ăn bánh ta, và uống rượu ta đã pha.
  - Thi-thiên 119:105: Lời Chúa là ngọn đèn cho chân tôi, là ánh sáng cho đường lối tôi.
  - Truyền-đạo 12:13: Chúng ta hãy nghe lời kết của muôn sự: Khá kính sợ Đức Chúa Trời và giữ các điều răn Ngài; ấy là trọn phận sự của ngươi.
• Lịch đọc chi tiết 15 ngày:
  - Ngày 1: Thi-thiên 101–110
  - Ngày 2: Thi-thiên 111–118
  - Ngày 3: Thi-thiên 119:1–88
  - Ngày 4: Thi-thiên 119:89–176
  - Ngày 5: Thi-thiên 120–135
  - Ngày 6: Thi-thiên 136–150
  - Ngày 7: Châm-ngôn 1–5
  - Ngày 8: Châm-ngôn 6–10
  - Ngày 9: Châm-ngôn 11–15
  - Ngày 10: Châm-ngôn 16–20
  - Ngày 11: Châm-ngôn 21–25
  - Ngày 12: Châm-ngôn 26–31
  - Ngày 13: Truyền-đạo 1–6
  - Ngày 14: Truyền-đạo 7–12
  - Ngày 15: Nhã-ca 1–8 & Giu-đơ 1
________________________________________

THÁNG 10: Tiên Tri Tiệc Rượu Nho Lâu Năm, Si-ôn Lễ Trọng & Giao Ước Mới
• Các chương cần đọc: Ê-sai, Giê-rê-mi (Chương 1 đến Chương 35) (Tổng cộng: 101 chương).
• Phần tổng quan: Tiên tri về Tiệc Rượu Nho Lâu Năm nuốt sự chết đời đời (Ê-sai 25:6-9), Si-ôn là thành của các kỳ lễ trọng thể (Ê-sai 33:20), Đức Chúa Trời Mẹ an ủi tại Giê-ru-sa-lem (Ê-sai 66) và lời hứa Giao Ước Mới (Giê-rê-mi 31).
• Bản chất cốt lõi (WATV.ORG):
  - Ê-sai 25:6-9: Lời tiên tri Đấng Cứu Chúa sẽ đãi muôn dân một bữa tiệc rượu nho lâu năm (Rượu Nho Lễ Vượt Qua Giao Ước Mới bị bãi bỏ 1600 năm được phục hồi) để thoát khỏi sự chết đến đời đời -> Đấng phục hồi Lễ Vượt Qua chính là Đức Chúa Trời chúng ta ngóng trông.
  - Ê-sai 33:20: Si-ôn được định nghĩa chuẩn xác là nơi cử hành các kỳ lễ trọng thể của Đức Chúa Trời.
  - Ê-sai 66:10-13: Lẽ thật về Đức Chúa Trời Mẹ an ủi con cái Ngài tại Giê-ru-sa-lem như mẹ an ủi con.
  - Giê-rê-mi 31:31-34: Lời hứa Đức Chúa Trời lập Giao Ước Mới, khắc ghi luật pháp vào lòng để tha thứ tội lỗi.
• Câu gốc nền tảng:
  - Ê-sai 25:6, 8-9: Đức Giê-hô-va vạn-quân sẽ đãi muôn dân... một tiệc rượu nho lâu năm... Ngài đã nuốt sự chết đến đời đời... Kìa, ấy là Đức Chúa Trời chúng ta; chúng ta đã ngóng trông Ngài, và Ngài sẽ cứu chúng ta.
  - Ê-sai 33:20: Hãy nhìn xem Si-ôn, là thành của các kỳ lễ trọng-thể chúng ta! Mắt ngươi sẽ thấy Giê-ru-sa-lem là nơi ở yên lặng.
  - Giê-rê-mi 31:31, 33: Đức Giê-hô-va phán: Nầy, những ngày đến, bấy giờ Ta sẽ lập một giao-ước mới... Ta sẽ đặt luật-pháp Ta trong bụng chúng nó và chép vào lòng.
• Lịch đọc chi tiết 17 ngày:
  - Ngày 1: Ê-sai 1–6
  - Ngày 2: Ê-sai 7–12
  - Ngày 3: Ê-sai 13–20
  - Ngày 4: Ê-sai 21–27
  - Ngày 5: Ê-sai 28–35
  - Ngày 6: Ê-sai 36–39
  - Ngày 7: Ê-sai 40–44
  - Ngày 8: Ê-sai 45–48
  - Ngày 9: Ê-sai 49–53
  - Ngày 10: Ê-sai 54–59
  - Ngày 11: Ê-sai 60–66
  - Ngày 12: Giê-rê-mi 1–5
  - Ngày 13: Giê-rê-mi 6–10
  - Ngày 14: Giê-rê-mi 11–16
  - Ngày 15: Giê-rê-mi 17–22
  - Ngày 16: Giê-rê-mi 23–28
  - Ngày 17: Giê-rê-mi 29–35
________________________________________

THÁNG 11: Đổi Thời Kỳ Luật Pháp, Dấu Ấn Đức Chúa Trời & Nước Sự Sống
• Các chương cần đọc: Giê-rê-mi (Chương 36 đến 52), Ca-thương, Ê-zê-chi-ên, Đa-ni-ên (Tổng cộng: 82 chương).
• Phần tổng quan: Đa-ni-ên tiên tri kẻ thù toan định đổi thời kỳ và luật pháp (Đa-ni-ên 7:25), Dấu ấn thoát khỏi tai nạn hủy diệt (Ê-zê-chi-ên 9) và dòng sông Nước Sự Sống phát xuất từ Đền Thờ Giê-ru-sa-lem Mẹ.
• Bản chất cốt lõi (WATV.ORG):
  - Đa-ni-ên 7:25: Tiên tri vạch trần kẻ thù của Đức Chúa Trời sẽ đổi thời kỳ và luật pháp (đổi ngày Sa-bát thứ Bảy sang ngày Chủ Nhật, bãi bỏ Lễ Vượt Qua và các kỳ lễ trọng thể).
  - Ê-zê-chi-ên 9:4: Dấu ấn ghi trên trán những người được bảo vệ thoát khỏi tai nạn diệt vong (hình bóng về Lễ Vượt Qua).
  - Ê-zê-chi-ên 47:1-9: Dòng sông Nước Sự Sống tuôn chảy từ Đền Thờ Giê-ru-sa-lem làm cho biển mặn hóa ngọt và muôn vật sinh sống.
• Câu gốc nền tảng:
  - Đa-ni-ên 7:25: Vua đó sẽ nói những lời phạm đến Đấng Rất Cao, làm hao mòn các thánh đồ của Đấng Rất Cao, và toan định đổi những thời kỳ và luật pháp.
  - Ê-zê-chi-ên 9:4: Hãy đi qua giữa thành... ghi một cái dấu trên trán những người than thở và khóc lóc vì mọi sự gớm ghiếc đã phạm giữa thành nầy.
  - Ê-zê-chi-ên 47:9: Hễ sông nầy chảy đến đâu, thì mọi sinh vật sinh sản ở đó đều sẽ được sống... vì nước nầy chảy đến đó thì nước biển trở nên ngọt, và muôn vật sẽ sống ở nơi nào sông ấy chảy đến.
• Lịch đọc chi tiết 17 ngày:
  - Ngày 1: Giê-rê-mi 36–40
  - Ngày 2: Giê-rê-mi 41–47
  - Ngày 3: Giê-rê-mi 48–52
  - Ngày 4: Ca-thương 1–5
  - Ngày 5: Ê-zê-chi-ên 1–5
  - Ngày 6: Ê-zê-chi-ên 6–10
  - Ngày 7: Ê-zê-chi-ên 11–16
  - Ngày 8: Ê-zê-chi-ên 17–22
  - Ngày 9: Ê-zê-chi-ên 23–28
  - Ngày 10: Ê-zê-chi-ên 29–34
  - Ngày 11: Ê-zê-chi-ên 35–39
  - Ngày 12: Ê-zê-chi-ên 40–44
  - Ngày 13: Ê-zê-chi-ên 45–48
  - Ngày 14: Đa-ni-ên 1–3
  - Ngày 15: Đa-ni-ên 4–6
  - Ngày 16: Đa-ni-ên 7–9
  - Ngày 17: Đa-ni-ên 10–12
________________________________________

THÁNG 12: 12 Tiên Tri Nhỏ, Lễ Lều Tạm & Thánh Linh Cùng Vợ Mới Ban Nước Sự Sống
• Các chương cần đọc: 12 Tiên Tri Nhỏ (Ô-sê đến Ma-la-chi), Khải-huyền (Tổng cộng: 89 chương).
• Phần tổng quan: Muôn dân đổ về Si-ôn học luật pháp (Mi-chê 4), giữ Lễ Lều Tạm nhận nước sự sống (Sa-cha-ri 14), Ấn Đức Chúa Trời (Khải-huyền 7), 144,000 người trên núi Si-ôn được cất lên khi còn sống (Khải-huyền 14) và Thánh Linh cùng Vợ Mới (Đức Chúa Trời Mẹ) ban Nước Sự Sống ở Khải-huyền 22:17.
• Bản chất cốt lõi (WATV.ORG):
  - Mi-chê 4:1-2: Tiên tri ngày sau rốt muôn dân đổ về Si-ôn để học luật pháp Giao Ước Mới của Đức Chúa Trời.
  - Sa-cha-ri 14:16-19: Lệnh truyền giữ Lễ Lều Tạm hằng năm để đón nhận nước sự sống và mưa Thánh Linh.
  - Khải-huyền 7:2-3: Ấn của Đức Chúa Trời Hằng Sống (Lễ Vượt Qua Giao Ước Mới) bảo vệ các tôi tớ khỏi 4 cơn gió - tức tai nạn hủy diệt.
  - Khải-huyền 21:9-10 & 22:17: Vợ Mới của Chiên Con chính là Thành Thánh Giê-ru-sa-lem từ trên trời xuống (Đức Chúa Trời Mẹ - Ga-la-ti 4:26). Thánh Linh và Vợ Mới cùng kêu gọi nhân loại nhận lấy Nước Sự Sống cách nhưng không để bước vào sự sống đời đời.
• Câu gốc nền tảng:
  - Mi-chê 4:1-2: Xảy ra trong những ngày sau-rốt... muôn dân sẽ chảy về đó... Hãy đến, chúng ta hãy lên núi Đức Giê-hô-va... Ngài sẽ dạy chúng ta về đường-lối Ngài, và chúng ta sẽ đi trong các nẻo Ngài. Vì luật-pháp sẽ ra từ Si-ôn.
  - Sa-cha-ri 14:16-17: Hết thảy những kẻ còn sót lại... sẽ lên đó hằng năm đặng thờ lạy Vua, tức là Đức Giê-hô-va vạn-quân, và giữ lễ Lều-tạm. Hễ ai... không lên Giê-ru-sa-lem đặng thờ lạy Vua... thì trên họ sẽ không có mưa.
  - Khải-huyền 22:17: Thánh Linh và Vợ Mới cùng nói: Hãy đến! Kẻ nào nghe cũng hãy nói: Hãy đến! Kẻ nào khát, khá đến. Kẻ nào muốn, khá nhận lấy nước sự sống cách nhưng không.
• Lịch đọc chi tiết 17 ngày:
  - Ngày 1: Ô-sê 1–7
  - Ngày 2: Ô-sê 8–14
  - Ngày 3: Giô-ên 1–3
  - Ngày 4: A-mốt 1–5
  - Ngày 5: A-mốt 6–9 & Ô-ba-đi-a 1
  - Ngày 6: Giô-na 1–4
  - Ngày 7: Mi-chê 1–7
  - Ngày 8: Na-hum 1–3 & Ha-ba-cúc 1–3
  - Ngày 9: Sô-phô-ni 1–3 & Ha-gai 1–2
  - Ngày 10: Sa-cha-ri 1–7
  - Ngày 11: Sa-cha-ri 8–14
  - Ngày 12: Ma-la-chi 1–4
  - Ngày 13: Khải-huyền 1–3
  - Ngày 14: Khải-huyền 4–7
  - Ngày 15: Khải-huyền 8–12
  - Ngày 16: Khải-huyền 13–17
  - Ngày 17: Khải-huyền 18–22
`;

export const MONTHLY_READING_SECTIONS: MonthlySectionDoc[] = [
  {
    month: 1,
    title: 'Đức Chúa Trời Elohim, Ngày Sa-bát & Lễ Vượt Qua Giao Ước Mới',
    chapters: 'Sáng-thế-ký, Ma-thi-ơ, Giăng, 1-2-3 Giăng (Tổng cộng: 106 chương)',
    overview: 'Khởi đầu lịch sử sáng tạo với Đức Chúa Trời Elohim ("Chúng ta"), ngày Sa-bát thánh thứ Bảy, bí mật Cây Sự Sống trong vườn Ê-đen và Đức Chúa Giê-xu ban sự sống đời đời qua Lễ Vượt Qua Giao Ước Mới.',
    coreTruths: [
      'Sáng-thế-ký 1:26-27: Đức Chúa Trời phán "Chúng ta hãy làm nên loài người như hình ta và theo tượng ta", loài người được dựng nên theo hình ảnh của Đức Chúa Trời -> Khẳng định sự hiện hữu của Đức Chúa Trời Cha và Đức Chúa Trời Mẹ (Elohim).',
      'Sáng-thế-ký 2:1-3: Biệt riêng ngày thứ bảy làm Ngày Sa-bát là ngày thánh để tưởng nhớ Đấng Sáng Tạo.',
      'Giăng 6:53-54 & Ma-thi-ơ 26:17-28: Kẻ phạm tội bị chặn đường đến Cây Sự Sống (Sáng 3:22). Đức Chúa Giê-xu đến ban Thịt và Huyết Ngài qua Bánh và Rượu Nho Lễ Vượt Qua Giao Ước Mới làm thực thể chính Cây Sự Sống để tái sinh sự sống đời đời.',
    ],
    keyVerses: [
      {
        ref: 'Sáng-thế-ký 1:26-27',
        text: 'Đức Chúa Trời phán rằng: Chúng ta hãy làm nên loài người như hình ta và theo tượng ta... Đức Chúa Trời dựng nên loài người như hình Ngài: Ngài dựng nên loài người nam cùng loài người nữ.',
      },
      {
        ref: 'Sáng-thế-ký 2:1-3',
        text: 'Đức Chúa Trời ban phước cho ngày thứ bảy, đặt là ngày thánh; vì trong ngày đó, Ngài nghỉ các công việc đã dựng nên và làm xong rồi.',
      },
      {
        ref: 'Ma-thi-ơ 26:26-28',
        text: 'Đức Chúa Giê-xu lấy bánh, chúc phước, bẻ ra đưa cho môn đồ mà phán rằng: Hãy lấy ăn đi, nầy là thân thể ta. Ngài lại lấy chén, tạ ơn, đưa cho môn đồ mà phán rằng: Hết thảy hãy uống đi; vì nầy là huyết ta, huyết của sự giao ước đã đổ ra cho nhiều người được tha tội.',
      },
      {
        ref: 'Giăng 6:53-54',
        text: 'Đức Chúa Giê-xu phán rằng: Quả thật, quả thật, ta nói cùng các ngươi, nếu các ngươi không ăn thịt của Con người, cùng không uống huyết Ngài, thì chẳng có sự sống trong các ngươi đâu. Ai ăn thịt và uống huyết ta thì được sự sống đời đời...',
      },
    ],
    schedule: [
      'Ngày 1: Sáng-thế-ký 1–3 & Ma-thi-ơ 1',
      'Ngày 2: Sáng-thế-ký 4–7 & Ma-thi-ơ 2',
      'Ngày 3: Sáng-thế-ký 8–11 & Ma-thi-ơ 3',
      'Ngày 4: Sáng-thế-ký 12–15 & Ma-thi-ơ 4',
      'Ngày 5: Sáng-thế-ký 16–18 & Ma-thi-ơ 5',
      'Ngày 6: Sáng-thế-ký 19–21 & Ma-thi-ơ 6',
      'Ngày 7: Sáng-thế-ký 22–24 & Ma-thi-ơ 7',
      'Ngày 8: Sáng-thế-ký 25–27 & Ma-thi-ơ 8',
      'Ngày 9: Sáng-thế-ký 28–30 & Ma-thi-ơ 9',
      'Ngày 10: Sáng-thế-ký 31–33 & Ma-thi-ơ 10',
      'Ngày 11: Sáng-thế-ký 34–36 & Ma-thi-ơ 11',
      'Ngày 12: Sáng-thế-ký 37–39 & Ma-thi-ơ 12',
      'Ngày 13: Sáng-thế-ký 40–42 & Ma-thi-ơ 13',
      'Ngày 14: Sáng-thế-ký 43–45 & Ma-thi-ơ 14',
      'Ngày 15: Sáng-thế-ký 46–48 & Ma-thi-ơ 15',
      'Ngày 16: Sáng-thế-ký 49–50 & Ma-thi-ơ 16',
      'Ngày 17: Ma-thi-ơ 17–20',
      'Ngày 18: Ma-thi-ơ 21–24',
      'Ngày 19: Ma-thi-ơ 25–28',
      'Ngày 20: Giăng 1–3',
      'Ngày 21: Giăng 4–6',
      'Ngày 22: Giăng 7–9',
      'Ngày 23: Giăng 10–12',
      'Ngày 24: Giăng 13–15',
      'Ngày 25: Giăng 16–18',
      'Ngày 26: Giăng 19–21',
      'Ngày 27: 1 Giăng 1–2',
      'Ngày 28: 1 Giăng 3–4',
      'Ngày 29: 1 Giăng 5',
      'Ngày 30: 2 Giăng 1 & 3 Giăng 1',
    ],
  },
  {
    month: 2,
    title: 'Lễ Vượt Qua Giải Thoát, 3 Kỳ 7 Lễ Trọng Thể & Thầy Tế Lễ Mên-chi-xê-đéc',
    chapters: 'Xuất Ê-đíp-tô Ký, Lê-vi Ký, Mác, Hê-bơ-rơ (Tổng cộng: 96 chương)',
    overview: 'Giải phóng khỏi tai ương, tai vạ nhờ Huyết Chiên Con Lễ Vượt Qua, luật cấm tuyệt đối thờ hình tượng (như thập tự giá), quy chế 3 kỳ 7 Lễ Trọng Thể và Đức Chúa Jesus Christ đã lập nên ban Mên-chi-xê-đéc.',
    coreTruths: [
      'Xuất Ê-đíp-tô Ký 12: Lễ Vượt Qua là dấu hiệu duy nhất để tai nạn diệt trừ vượt qua khỏi dân sự.',
      'Xuất Ê-đíp-tô Ký 20:4-5: Điều răn thứ hai cấm tuyệt đối làm và tôn thờ hình tượng (thập tự giá vốn là công cụ xử tử của La Mã cổ đại, việc dựng và thờ thập tự giá là thờ ngẫu tượng).',
      'Lê-vi Ký 23: Quy định 3 Kỳ 7 Lễ Trọng Thể đời đời của Đức Chúa Trời.',
      'Hê-bơ-rơ 5, 7, 8: Đức Chúa Giê-xu là Thầy Tế Lễ Thượng Phẩm theo ban Mên-chi-xê-đéc dùng Bánh và Rượu Nho Lễ Vượt Qua ban sự sống đời đời và lập Giao Ước Mới.',
    ],
    keyVerses: [
      {
        ref: 'Xuất Ê-đíp-tô Ký 12:13-14',
        text: 'Huyết đó sẽ dùng làm dấu hiệu nơi các nhà các ngươi ở. Khi Ta thấy huyết đó, thì sẽ vượt qua khỏi các ngươi... Các ngươi hãy kỷ niệm ngày đó... như một lễ đời đời.',
      },
      {
        ref: 'Xuất Ê-đíp-tô Ký 20:4-5',
        text: 'Ngươi chớ làm tượng chạm cho mình, cũng chớ làm tượng nào giống những vật trên trời cao kia, hoặc nơi đất thấp nầy... Ngươi chớ quì lạy trước các hình tượng đó, và cũng chớ hầu việc chúng nó.',
      },
      {
        ref: 'Lê-vi Ký 23:2, 4',
        text: 'Hãy truyền cho dân Y-sơ-ra-ên rằng: Nầy là những ngày lễ của Đức Giê-hô-va các ngươi hãy rao truyền ra là các hội thánh... Nầy là những lễ của Đức Giê-hô-va, tức những sự nhóm hiệp thánh, các ngươi phải rao truyền ra khi đến kỳ nhứt định.',
      },
      {
        ref: 'Hê-bơ-rơ 7:17, 8:8',
        text: 'Ngươi là thầy tế lễ đời đời theo ban Mên-chi-xê-đéc... Nầy, những ngày đến, Ta sẽ lập một giao ước mới với nhà Y-sơ-ra-ên và với nhà Giu-đa.',
      },
    ],
    schedule: [
      'Ngày 1: Xuất Ê-đíp-tô Ký 1–4',
      'Ngày 2: Xuất Ê-đíp-tô Ký 5–8',
      'Ngày 3: Xuất Ê-đíp-tô Ký 9–11',
      'Ngày 4: Xuất Ê-đíp-tô Ký 12–14',
      'Ngày 5: Xuất Ê-đíp-tô Ký 15–17',
      'Ngày 6: Xuất Ê-đíp-tô Ký 18–20',
      'Ngày 7: Xuất Ê-đíp-tô Ký 21–24',
      'Ngày 8: Xuất Ê-đíp-tô Ký 25–27',
      'Ngày 9: Xuất Ê-đíp-tô Ký 28–30',
      'Ngày 10: Xuất Ê-đíp-tô Ký 31–34',
      'Ngày 11: Xuất Ê-đíp-tô Ký 35–37',
      'Ngày 12: Xuất Ê-đíp-tô Ký 38–40',
      'Ngày 13: Lê-vi Ký 1–4',
      'Ngày 14: Lê-vi Ký 5–7',
      'Ngày 15: Lê-vi Ký 8–10',
      'Ngày 16: Lê-vi Ký 11–13',
      'Ngày 17: Lê-vi Ký 14–16',
      'Ngày 18: Lê-vi Ký 17–20',
      'Ngày 19: Lê-vi Ký 21–23',
      'Ngày 20: Lê-vi Ký 24–27',
      'Ngày 21: Mác 1–3',
      'Ngày 22: Mác 4–6',
      'Ngày 23: Mác 7–9',
      'Ngày 24: Mác 10–12',
      'Ngày 25: Mác 13–16',
      'Ngày 26: Hê-bơ-rơ 1–3',
      'Ngày 27: Hê-bơ-rơ 4–6',
      'Ngày 28: Hê-bơ-rơ 7–9',
      'Ngày 29: Hê-bơ-rơ 10–11',
      'Ngày 30: Hê-bơ-rơ 12–13',
    ],
  },
  {
    month: 3,
    title: 'Hành Trình Luyện Rèn Đức Tin & Thói Quen Giữ Ngày Sa-bát',
    chapters: 'Dân-số-ký, Phục-truyền Luật-lệ Ký, Lu-ca (Tổng cộng: 94 chương)',
    overview: 'Sự thử thách đức tin 40 năm trong đồng vắng, quy định Lễ Vượt Qua tháng thứ hai, lời dặn dò vâng giữ điều răn và thói quen giữ ngày Sa-bát của Đức Chúa Giê-xu.',
    coreTruths: [
      'Dân-số-ký 9: Tình yêu thương của Đức Chúa Trời ban cơ hội giữ Lễ Vượt Qua tháng thứ hai (ngày 14 tháng 2 thánh lịch) cho người lỡ kỳ.',
      'Dân-số-ký 21 & 2 Các Vua 18:4: Việc nhìn con rắn đồng được cứu là nhờ Lời phán của Đức Chúa Trời chứ không phải quyền phép của con rắn; sau này dân chúng đem con rắn đồng ra thờ lạy nên vua Ê-xê-chia đã đập nát (bài học cảnh tỉnh việc sùng kính thập tự giá).',
      'Lu-ca 4:16: Đức Chúa Giê-xu vào nhà hội giữ ngày Sa-bát thứ Bảy theo thói quen Ngài thường làm.',
      'Lu-ca 22:15-20: Đức Chúa Giê-xu phán "Ta rất muốn ăn Lễ Vượt Qua này" để lập Giao Ước Mới trong Huyết Ngài.',
    ],
    keyVerses: [
      {
        ref: 'Phục-truyền 6:4-5',
        text: 'Hỡi Y-sơ-ra-ên! Hãy nghe: Giê-hô-va Đức Chúa Trời chúng ta là Giê-hô-va có một không hai. Ngươi phải hết lòng, hết linh hồn, hết sức mà kính mến Giê-hô-va Đức Chúa Trời ngươi.',
      },
      {
        ref: 'Lu-ca 4:16',
        text: 'Đức Chúa Giê-xu đến thành Na-xa-rét... theo thói quen thường làm, Ngài vào nhà hội trong ngày Sa-bát, đứng dậy để đọc.',
      },
      {
        ref: 'Lu-ca 22:15, 20',
        text: 'Ngài phán rằng: Ta rất muốn ăn lễ Vượt Qua nầy với các ngươi trước khi ta chịu đau đớn... Chén nầy là giao ước mới trong huyết ta vì các ngươi mà đổ ra.',
      },
    ],
    schedule: [
      'Ngày 1: Dân-số-ký 1–4',
      'Ngày 2: Dân-số-ký 5–8',
      'Ngày 3: Dân-số-ký 9–12',
      'Ngày 4: Dân-số-ký 13–16',
      'Ngày 5: Dân-số-ký 17–20',
      'Ngày 6: Dân-số-ký 21–24',
      'Ngày 7: Dân-số-ký 25–28',
      'Ngày 8: Dân-số-ký 29–32',
      'Ngày 9: Dân-số-ký 33–36',
      'Ngày 10: Phục-truyền 1–4',
      'Ngày 11: Phục-truyền 5–8',
      'Ngày 12: Phục-truyền 9–12',
      'Ngày 13: Phục-truyền 13–16',
      'Ngày 14: Phục-truyền 17–20',
      'Ngày 15: Phục-truyền 21–25',
      'Ngày 16: Phục-truyền 26–28',
      'Ngày 17: Phục-truyền 29–31',
      'Ngày 18: Phục-truyền 32–34',
      'Ngày 19: Lu-ca 1–2',
      'Ngày 20: Lu-ca 3–5',
      'Ngày 21: Lu-ca 6–8',
      'Ngày 22: Lu-ca 9–11',
      'Ngày 23: Lu-ca 12–14',
      'Ngày 24: Lu-ca 15–17',
      'Ngày 25: Lu-ca 18–20',
      'Ngày 26: Lu-ca 21–22',
      'Ngày 27: Lu-ca 23–24',
    ],
  },
  {
    month: 4,
    title: 'Lễ Vượt Qua Chiếm Đất Hứa, Lễ Ngũ Tuần & Sự Sống Lại',
    chapters: 'Giô-suê, Các Quan-xét, Ru-tơ, Công-vụ các Sứ-đồ, Rô-ma (Tổng cộng: 93 chương)',
    overview: 'Giữ Lễ Vượt Qua trước khi công phá thành Giê-ri-cô, Đức Thánh Linh giáng xuống trong Lễ Ngũ Tuần, Sứ đồ Phao-lô giữ ngày Sa-bát theo thói quen và A-đam Ê-va là hình bóng của Đức Chúa Trời Cha & Đức Chúa Trời Mẹ.',
    coreTruths: [
      'Giô-suê 5:10: Dân sự giữ Lễ Vượt Qua tại đồng bằng Giê-ri-cô trước khi bức tường thành sụp đổ.',
      'Công-vụ 2:1-38: Đức Thánh Linh mưa đầu mùa giáng lâm vào Lễ Ngũ Tuần (ngày thứ 50 sau Lễ Phục Sinh).',
      'Công-vụ 17:2 & 18:4: Sứ đồ Phao-lô luôn giữ ngày Sa-bát theo thói quen của mình trong suốt hành trình truyền giáo.',
      'Rô-ma 5:14: A-đam là hình bóng của Đấng phải đến (Đức Chúa Trời Cha), ngụ ý vợ A-đam là Ê-va chính là hình bóng của Đức Chúa Trời Mẹ.',
    ],
    keyVerses: [
      {
        ref: 'Giô-suê 5:10',
        text: 'Dân Y-sơ-ra-ên đóng trại tại Ghinh-ganh, và giữ lễ Vượt-qua ngày mười bốn tháng nầy, vào lối chiều tối, tại trong đồng bằng Giê-ri-cô.',
      },
      {
        ref: 'Công-vụ 2:1, 38',
        text: 'Đến ngày lễ Ngũ-tuần, môn-đồ nhóm họp tại một chỗ... Phi-e-rơ trả lời rằng: Hãy hối cải, ai nấy khá chịu phép báp-tem nhân danh Đức Chúa Giê-xu Đấng Christ, đặng được tha tội mình; rồi sẽ nhận lãnh sự ban cho Đức Thánh Linh.',
      },
      {
        ref: 'Công-vụ 17:2',
        text: 'Phao-lô tới nơi họ, theo thói quen mình, và trong ba ngày Sa-bát biện luận với họ bằng Kinh Thánh.',
      },
      {
        ref: 'Rô-ma 5:14',
        text: 'A-đam là hình bóng của Đấng phải đến.',
      },
    ],
    schedule: [
      'Ngày 1: Giô-suê 1–4',
      'Ngày 2: Giô-suê 5–8',
      'Ngày 3: Giô-suê 9–12',
      'Ngày 4: Giô-suê 13–17',
      'Ngày 5: Giô-suê 18–21',
      'Ngày 6: Giô-suê 22–24',
      'Ngày 7: Các Quan-xét 1–5',
      'Ngày 8: Các Quan-xét 6–9',
      'Ngày 9: Các Quan-xét 10–14',
      'Ngày 10: Các Quan-xét 15–18',
      'Ngày 11: Các Quan-xét 19–21',
      'Ngày 12: Ru-tơ 1–4',
      'Ngày 13: Công-vụ 1–3',
      'Ngày 14: Công-vụ 4–6',
      'Ngày 15: Công-vụ 7–9',
      'Ngày 16: Công-vụ 10–12',
      'Ngày 17: Công-vụ 13–15',
      'Ngày 18: Công-vụ 16–18',
      'Ngày 19: Công-vụ 19–21',
      'Ngày 20: Công-vụ 22–25',
      'Ngày 21: Công-vụ 26–28',
      'Ngày 22: Rô-ma 1–3',
      'Ngày 23: Rô-ma 4–6',
      'Ngày 24: Rô-ma 7–9',
      'Ngày 25: Rô-ma 10–12',
      'Ngày 26: Rô-ma 13–16',
    ],
  },
  {
    month: 5,
    title: 'Đức Chúa Trời Mẹ Giê-ru-sa-lem, Luật Khăn Trùm Đầu & Lễ Vượt Qua',
    chapters: '1-2 Sa-mu-ên, 1 Các Vua, 1-2 Cô-rinh-tô, Ga-la-ti (Tổng cộng: 112 chương)',
    overview: 'Sự thiết lập vương triều Đa-vít tại Si-ôn, Lễ Vượt Qua Giao Ước Mới trong 1 Cô-rinh-tô 11, Luật Khăn Trùm Đầu cho nữ tín đồ và lẽ thật tối thượng về Đức Chúa Trời Mẹ Giê-ru-sa-lem trên trời trong Ga-la-ti 4:26.',
    coreTruths: [
      '1 Cô-rinh-tô 11:1-16: Quy định Luật Đội Khăn Trùm Đầu theo trật tự sáng tạo của Đức Chúa Trời: Nữ tín đồ đội khăn khi cầu nguyện và thờ phượng; nam giới không đội khăn.',
      '1 Cô-rinh-tô 5:7-8 & 11:23-26: Mạng lệnh giữ Lễ Vượt Qua Giao Ước Mới bằng Bánh và Rượu Nho để rao truyền sự chết của Chúa cho tới khi Ngài đến.',
      'Ga-la-ti 4:26, 28: Tuyên bố lẽ thật: "Thành Giê-ru-sa-lem ở trên cao là tự do, và ấy là Mẹ chúng ta". Chúng ta là con cái của lời hứa như Y-sác được sinh ra bởi Mẹ Tự Do.',
    ],
    keyVerses: [
      {
        ref: '1 Cô-rinh-tô 11:5, 7',
        text: 'Người đàn bà nào cầu nguyện hoặc nói tiên tri mà không trùm đầu lại, thì làm nhục đầu mình... Người đàn ông không nên trùm đầu, vì là hình ảnh và sự vinh hiển của Đức Chúa Trời; nhưng người đàn bà là sự vinh hiển của người đàn ông.',
      },
      {
        ref: '1 Cô-rinh-tô 5:7-8',
        text: 'Vì Đấng Christ là con sinh lễ Vượt-qua của chúng ta, đã bị hi sinh rồi. Vậy thì, chúng ta hãy giữ lễ...',
      },
      {
        ref: 'Ga-la-ti 4:26, 28',
        text: 'Nhưng thành Giê-ru-sa-lem ở trên cao là tự do, và ấy là Mẹ chúng ta... Hỡi anh em, về phần chúng ta, chúng ta cũng như Y-sác, là con của lời hứa.',
      },
      {
        ref: '2 Cô-rinh-tô 3:6',
        text: 'Ngài đã ban cho chúng tôi đủ tài năng đặng làm chức việc của Giao Ước Mới...',
      },
    ],
    schedule: [
      'Ngày 1: 1 Sa-mu-ên 1–4',
      'Ngày 2: 1 Sa-mu-ên 5–8',
      'Ngày 3: 1 Sa-mu-ên 9–12',
      'Ngày 4: 1 Sa-mu-ên 13–16',
      'Ngày 5: 1 Sa-mu-ên 17–20',
      'Ngày 6: 1 Sa-mu-ên 21–25',
      'Ngày 7: 1 Sa-mu-ên 26–31',
      'Ngày 8: 2 Sa-mu-ên 1–5',
      'Ngày 9: 2 Sa-mu-ên 6–9',
      'Ngày 10: 2 Sa-mu-ên 10–14',
      'Ngày 11: 2 Sa-mu-ên 15–18',
      'Ngày 12: 2 Sa-mu-ên 19–24',
      'Ngày 13: 1 Các Vua 1–4',
      'Ngày 14: 1 Các Vua 5–8',
      'Ngày 15: 1 Các Vua 9–12',
      'Ngày 16: 1 Các Vua 13–16',
      'Ngày 17: 1 Các Vua 17–19',
      'Ngày 18: 1 Các Vua 20–22',
      'Ngày 19: 1 Cô-rinh-tô 1–4',
      'Ngày 20: 1 Cô-rinh-tô 5–8',
      'Ngày 21: 1 Cô-rinh-tô 9–12',
      'Ngày 22: 1 Cô-rinh-tô 13–16',
      'Ngày 23: 2 Cô-rinh-tô 1–4',
      'Ngày 24: 2 Cô-rinh-tô 5–8',
      'Ngày 25: 2 Cô-rinh-tô 9–13',
      'Ngày 26: Ga-la-ti 1–3',
      'Ngày 27: Ga-la-ti 4–6',
    ],
  },
  {
    month: 6,
    title: 'Lễ Vượt Qua Phá Thần Tượng (Ê-xê-chia & Giô-si-a) & Thư Tín Ngục Tù',
    chapters: '2 Các Vua, 1-2 Sử-ký, Ê-phê-sô, Phi-líp, Cô-lô-se (Tổng cộng: 104 chương)',
    overview: 'Vua Ê-xê-chia đập nát con rắn đồng Nê-hu-sơ-tan và cùng vua Giô-si-a phục hưng dân sự nhờ Lễ Vượt Qua; các thư tín ngục tù về sự tha tội nhờ Huyết Lễ Vượt Qua trong Đấng Christ.',
    coreTruths: [
      '2 Các Vua 18:4: Vua Ê-xê-chia đập nát con rắn đồng vì dân chúng xông hương thờ lạy nó (gọi là Nê-hu-sơ-tan) -> Minh chứng sùng bái thập tự giá ngày nay cũng là thờ hình tượng phạm tội lớn trước Đức Chúa Trời.',
      '2 Sử-ký 30 & 2 Các Vua 23: Khi dân sự trở lại giữ Lễ Vượt Qua, mọi thần tượng bị triệt hạ và Đức Chúa Trời ban sự che chở kỳ diệu.',
      'Ê-phê-sô 1:7: Sự tha tội và cứu chuộc nhận được nhờ Huyết Lễ Vượt Qua của Đấng Christ.',
    ],
    keyVerses: [
      {
        ref: '2 Các Vua 18:4',
        text: 'Người phá hủy các nơi cao, bẻ gãy các trụ thờ, đốn các hình tượng A-sê-ra, và đập nát con rắn đồng mà Môi-se đã làm; vì cho đến ngày đó, dân Y-sơ-ra-ên xông hương cho nó; người ta gọi nó là Nê-hu-sơ-tan.',
      },
      {
        ref: '2 Sử-ký 30:1, 5',
        text: 'Ê-xê-chia sai sứ truyền cho cả Y-sơ-ra-ên và Giu-đa... hãy đến đền của Đức Giê-hô-va tại Giê-ru-sa-lem đặng dự lễ Vượt-qua cho Giê-hô-va Đức Chúa Trời của Y-sơ-ra-ên.',
      },
      {
        ref: 'Ê-phê-sô 1:7',
        text: 'Ấy là trong Đấng Christ, chúng ta được sự cứu chuộc bởi huyết Ngài, được tha tội, theo sự dư dật của ân điển Ngài.',
      },
      {
        ref: 'Cô-lô-se 2:16-17',
        text: 'Vì vậy, chớ có ai đoán xét anh em về của ăn uống, hoặc ngày lễ, hoặc ngày mồng một, hoặc ngày Sa-bát: ấy đều là bóng của những việc sẽ tới, mà thân thể thì thuộc về Đấng Christ.',
      },
    ],
    schedule: [
      'Ngày 1: 2 Các Vua 1–4',
      'Ngày 2: 2 Các Vua 5–8',
      'Ngày 3: 2 Các Vua 9–12',
      'Ngày 4: 2 Các Vua 13–17',
      'Ngày 5: 2 Các Vua 18–21',
      'Ngày 6: 2 Các Vua 22–25',
      'Ngày 7: 1 Sử-ký 1–4',
      'Ngày 8: 1 Sử-ký 5–9',
      'Ngày 9: 1 Sử-ký 10–14',
      'Ngày 10: 1 Sử-ký 15–18',
      'Ngày 11: 1 Sử-ký 19–23',
      'Ngày 12: 1 Sử-ký 24–29',
      'Ngày 13: 2 Sử-ký 1–5',
      'Ngày 14: 2 Sử-ký 6–9',
      'Ngày 15: 2 Sử-ký 10–15',
      'Ngày 16: 2 Sử-ký 16–20',
      'Ngày 17: 2 Sử-ký 21–25',
      'Ngày 18: 2 Sử-ký 26–30',
      'Ngày 19: 2 Sử-ký 31–36',
      'Ngày 20: Ê-phê-sô 1–3',
      'Ngày 21: Ê-phê-sô 4–6',
      'Ngày 22: Phi-líp 1–2',
      'Ngày 23: Phi-líp 3–4',
      'Ngày 24: Cô-lô-se 1–4',
    ],
  },
  {
    month: 7,
    title: 'Tái Thiết Si-ôn, Lễ Lều Tạm & Cảnh Báo Kẻ Gian Ác Đổi Luật Pháp',
    chapters: 'Ê-xơ-ra, Nê-hê-mi, Ê-xơ-thê, Gióp, 1-2 Tê-sa-lô-ni-ca, 1-2 Ti-mô-thê, Tít, Phi-lê-môn (Tổng cộng: 97 chương)',
    overview: 'Dân sự trở về tái thiết Đền Thờ, giữ Lễ Vượt Qua và Lễ Lều Tạm, đức tin kiên định của Gióp và lời cảnh báo về Kẻ gian ác bội đạo bỏ luật pháp trong 2 Tê-sa-lô-ni-ca.',
    coreTruths: [
      'Ê-xơ-ra 6:19-22: Dân sự trở về từ Ba-by-lôn liền giữ Lễ Vượt Qua và Lễ Bánh Không Men trong sự vui vẻ lớn.',
      'Nê-hê-mi 8 & 13: Phục hồi Lễ Lều Tạm và lập lại giao ước giữ ngày Sa-bát thánh.',
      '2 Tê-sa-lô-ni-ca 2:3-4: Cảnh báo về "người gian ác, con của sự hư mất" ngồi trong đền thờ tự tôn xưng là Đức Chúa Trời -> Tiên tri về việc quyền lực La Mã bãi bỏ Lễ Vượt Qua và đổi ngày Sa-bát sang ngày Mặt Trời (Chủ Nhật).',
    ],
    keyVerses: [
      {
        ref: 'Ê-xơ-ra 6:19, 22',
        text: 'Những người bị lưu-đày đã trở về, bèn giữ lễ Vượt-qua trong ngày mười bốn tháng giêng... lại giữ lễ Bánh-không-men trong bảy ngày cách vui-vẻ.',
      },
      {
        ref: '2 Tê-sa-lô-ni-ca 2:3-4',
        text: 'Mặc dầu cách nào, chớ để ai lừa dối mình; vì phải có sự bội đạo đến trước, và có người gian ác, con của sự hư mất hiện ra, tức là kẻ đối địch, tôn mình lên trên mọi sự người ta xưng là Đức Chúa Trời.',
      },
      {
        ref: '2 Ti-mô-thê 3:16-17',
        text: 'Cả Kinh Thánh đều là bởi Đức Chúa Trời soi dẫn, có ích cho sự dạy dỗ, bẻ trách, sửa trị, dạy người trong sự công bình.',
      },
    ],
    schedule: [
      'Ngày 1: Ê-xơ-ra 1–5',
      'Ngày 2: Ê-xơ-ra 6–10',
      'Ngày 3: Nê-hê-mi 1–4',
      'Ngày 4: Nê-hê-mi 5–8',
      'Ngày 5: Nê-hê-mi 9–13',
      'Ngày 6: Ê-xơ-thê 1–5',
      'Ngày 7: Ê-xơ-thê 6–10',
      'Ngày 8: Gióp 1–5',
      'Ngày 9: Gióp 6–12',
      'Ngày 10: Gióp 13–19',
      'Ngày 11: Gióp 20–27',
      'Ngày 12: Gióp 28–34',
      'Ngày 13: Gióp 35–42',
      'Ngày 14: 1 Tê-sa-lô-ni-ca 1–5',
      'Ngày 15: 2 Tê-sa-lô-ni-ca 1–3',
      'Ngày 16: 1 Ti-mô-thê 1–3',
      'Ngày 17: 1 Ti-mô-thê 4–6',
      'Ngày 18: 2 Ti-mô-thê 1–4',
      'Ngày 19: Tít 1–3 & Phi-lê-môn 1',
    ],
  },
  {
    month: 8,
    title: 'Si-ôn Nơi Ban Sự Sống Đời Đời & Thầy Tế Lễ Mên-chi-xê-đéc',
    chapters: 'Thi-thiên (Bài 1 đến Bài 100), Gia-cơ, 1-2 Phi-e-rơ (Tổng cộng: 113 chương)',
    overview: 'Si-ôn là nơi Đức Chúa Trời chọn ngự và ban phước sự sống đời đời (Thi-thiên 133), Đấng Mê-si theo ban Mên-chi-xê-đéc và đức tin sống động có việc làm vâng giữ điều răn luật pháp Đức Chúa Trời.',
    coreTruths: [
      'Thi-thiên 132 & 133:3: Si-ôn là nơi Đức Chúa Trời ban phước sự sống chẳng hề cùng cho đến đời đời.',
      'Thi-thiên 110:4: Đấng Mê-si được lập làm Thầy Tế Lễ đời đời theo ban Mên-chi-xê-đéc (dâng Bánh và Rượu Nho Lễ Vượt Qua).',
      'Gia-cơ 2:26: Xác chẳng có hồn thì chết, đức tin không có việc làm vâng giữ điều răn cũng chết như vậy.',
      '1 Phi-e-rơ 1:18-19: Được chuộc bởi Huyết báu Chiên Con Lễ Vượt Qua của Đức Chúa Jesus Christ.',
    ],
    keyVerses: [
      {
        ref: 'Thi-thiên 133:3',
        text: 'Tại đó Đức Giê-hô-va đã ban phước, tức là sự sống cho đến đời đời.',
      },
      {
        ref: 'Thi-thiên 110:4',
        text: 'Đức Giê-hô-va đã thề, và không hề đổi ý, rằng: Ngươi là thầy tế lễ đời đời theo ban Mên-chi-xê-đéc.',
      },
      {
        ref: 'Gia-cơ 2:26',
        text: 'Vả, xác chẳng có hồn thì chết, đức tin không có việc làm cũng chết như vậy.',
      },
      {
        ref: '1 Phi-e-rơ 1:18-19',
        text: 'Nhờ huyết báu Đấng Christ, dường như huyết chiên con không lỗi không vít, mà anh em đã được chuộc.',
      },
    ],
    schedule: [
      'Ngày 1: Thi-thiên 1–10',
      'Ngày 2: Thi-thiên 11–20',
      'Ngày 3: Thi-thiên 21–30',
      'Ngày 4: Thi-thiên 31–40',
      'Ngày 5: Thi-thiên 41–50',
      'Ngày 6: Thi-thiên 51–60',
      'Ngày 7: Thi-thiên 61–70',
      'Ngày 8: Thi-thiên 71–80',
      'Ngày 9: Thi-thiên 81–90',
      'Ngày 10: Thi-thiên 91–100',
      'Ngày 11: Gia-cơ 1–2',
      'Ngày 12: Gia-cơ 3–5',
      'Ngày 13: 1 Phi-e-rơ 1–3',
      'Ngày 14: 1 Phi-e-rơ 4–5 & 2 Phi-e-rơ 1',
      'Ngày 15: 2 Phi-e-rơ 2–3',
    ],
  },
  {
    month: 9,
    title: 'Sự Khôn Ngoan Thiên Thượng, Tiệc Rượu Nho & Tình Yêu Nhã-ca',
    chapters: 'Thi-thiên (Bài 101 đến Bài 150), Châm-ngôn, Truyền-đạo, Nhã-ca, Giu-đơ (Tổng cộng: 102 chương)',
    overview: 'Ngợi khen Luật pháp và Giao Ước Mới (Thi-thiên 119), Sự Khôn Ngoan lên tiệc bánh và rượu nho (Châm-ngôn 9) và bài ca tình yêu thánh khiết giữa Đấng Chăn Chiên cùng Nàng Su-la-mít.',
    coreTruths: [
      'Châm-ngôn 9:1-5: Sự Khôn Ngoan (hình bóng Đức Chúa Trời Mẹ) xây nhà mình trên vầng đá, dự phần vào tiệc thánh Lễ Vượt Qua bởi bánh và rượu nho, mời những ai khao khát đến ăn bánh uống rượu để được sống.',
      'Thi-thiên 119: 176 câu ca ngợi luật pháp, chứng cớ và điều răn thánh khiết của Đức Chúa Trời.',
      'Truyền-đạo 12:13: Bổn phận trọn vẹn của con người là kính sợ Đức Chúa Trời và vâng giữ các điều răn Ngài.',
      'Nhã-ca: Tình yêu thương đời đời giữa Đức Chúa Trời Cha, Đức Chúa Trời Mẹ và các con cái linh hồn.',
    ],
    keyVerses: [
      {
        ref: 'Châm-ngôn 9:1-2, 5',
        text: 'Sự khôn ngoan đã xây cất nhà mình... đã dọn tiệc mình, pha rượu, và bày bàn mình... Hãy đến ăn bánh ta, và uống rượu ta đã pha.',
      },
      {
        ref: 'Thi-thiên 119:105',
        text: 'Lời Chúa là ngọn đèn cho chân tôi, là ánh sáng cho đường lối tôi.',
      },
      {
        ref: 'Truyền-đạo 12:13',
        text: 'Chúng ta hãy nghe lời kết của muôn sự: Khá kính sợ Đức Chúa Trời và giữ các điều răn Ngài; ấy là trọn phận sự của ngươi.',
      },
    ],
    schedule: [
      'Ngày 1: Thi-thiên 101–110',
      'Ngày 2: Thi-thiên 111–118',
      'Ngày 3: Thi-thiên 119:1–88',
      'Ngày 4: Thi-thiên 119:89–176',
      'Ngày 5: Thi-thiên 120–135',
      'Ngày 6: Thi-thiên 136–150',
      'Ngày 7: Châm-ngôn 1–5',
      'Ngày 8: Châm-ngôn 6–10',
      'Ngày 9: Châm-ngôn 11–15',
      'Ngày 10: Châm-ngôn 16–20',
      'Ngày 11: Châm-ngôn 21–25',
      'Ngày 12: Châm-ngôn 26–31',
      'Ngày 13: Truyền-đạo 1–6',
      'Ngày 14: Truyền-đạo 7–12',
      'Ngày 15: Nhã-ca 1–8 & Giu-đơ 1',
    ],
  },
  {
    month: 10,
    title: 'Tiên Tri Tiệc Rượu Nho Lâu Năm, Si-ôn Lễ Trọng & Giao Ước Mới',
    chapters: 'Ê-sai, Giê-rê-mi (Chương 1 đến Chương 35) (Tổng cộng: 101 chương)',
    overview: 'Tiên tri về Tiệc Rượu Nho Lâu Năm nuốt sự chết đời đời (Ê-sai 25:6-9), Si-ôn là thành của các kỳ lễ trọng thể (Ê-sai 33:20), Đức Chúa Trời Mẹ an ủi tại Giê-ru-sa-lem (Ê-sai 66) và lời hứa Giao Ước Mới (Giê-rê-mi 31).',
    coreTruths: [
      'Ê-sai 25:6-9: Lời tiên tri Đấng Cứu Chúa sẽ đãi muôn dân một bữa tiệc rượu nho lâu năm (Rượu Nho Lễ Vượt Qua Giao Ước Mới bị bãi bỏ 1600 năm được phục hồi) để thoát khỏi sự chết đến đời đời -> Đấng phục hồi Lễ Vượt Qua chính là Đức Chúa Trời chúng ta ngóng trông.',
      'Ê-sai 33:20: Si-ôn được định nghĩa chuẩn xác là nơi cử hành các kỳ lễ trọng thể của Đức Chúa Trời.',
      'Ê-sai 66:10-13: Lẽ thật về Đức Chúa Trời Mẹ an ủi con cái Ngài tại Giê-ru-sa-lem như mẹ an ủi con.',
      'Giê-rê-mi 31:31-34: Lời hứa Đức Chúa Trời lập Giao Ước Mới, khắc ghi luật pháp vào lòng để tha thứ tội lỗi.',
    ],
    keyVerses: [
      {
        ref: 'Ê-sai 25:6, 8-9',
        text: 'Đức Giê-hô-va vạn-quân sẽ đãi muôn dân... một tiệc rượu nho lâu năm... Ngài đã nuốt sự chết đến đời đời... Kìa, ấy là Đức Chúa Trời chúng ta; chúng ta đã ngóng trông Ngài, và Ngài sẽ cứu chúng ta.',
      },
      {
        ref: 'Ê-sai 33:20',
        text: 'Hãy nhìn xem Si-ôn, là thành của các kỳ lễ trọng-thể chúng ta! Mắt ngươi sẽ thấy Giê-ru-sa-lem là nơi ở yên lặng.',
      },
      {
        ref: 'Giê-rê-mi 31:31, 33',
        text: 'Đức Giê-hô-va phán: Nầy, những ngày đến, bấy giờ Ta sẽ lập một giao-ước mới... Ta sẽ đặt luật-pháp Ta trong bụng chúng nó và chép vào lòng.',
      },
    ],
    schedule: [
      'Ngày 1: Ê-sai 1–6',
      'Ngày 2: Ê-sai 7–12',
      'Ngày 3: Ê-sai 13–20',
      'Ngày 4: Ê-sai 21–27',
      'Ngày 5: Ê-sai 28–35',
      'Ngày 6: Ê-sai 36–39',
      'Ngày 7: Ê-sai 40–44',
      'Ngày 8: Ê-sai 45–48',
      'Ngày 9: Ê-sai 49–53',
      'Ngày 10: Ê-sai 54–59',
      'Ngày 11: Ê-sai 60–66',
      'Ngày 12: Giê-rê-mi 1–5',
      'Ngày 13: Giê-rê-mi 6–10',
      'Ngày 14: Giê-rê-mi 11–16',
      'Ngày 15: Giê-rê-mi 17–22',
      'Ngày 16: Giê-rê-mi 23–28',
      'Ngày 17: Giê-rê-mi 29–35',
    ],
  },
  {
    month: 11,
    title: 'Đổi Thời Kỳ Luật Pháp, Dấu Ấn Đức Chúa Trời & Nước Sự Sống',
    chapters: 'Giê-rê-mi (Chương 36 đến 52), Ca-thương, Ê-zê-chi-ên, Đa-ni-ên (Tổng cộng: 82 chương)',
    overview: 'Đa-ni-ên tiên tri kẻ thù toan định đổi thời kỳ và luật pháp (Đa-ni-ên 7:25), Dấu ấn thoát khỏi tai nạn hủy diệt (Ê-zê-chi-ên 9) và dòng sông Nước Sự Sống phát xuất từ Đền Thờ Giê-ru-sa-lem Mẹ.',
    coreTruths: [
      'Đa-ni-ên 7:25: Tiên tri vạch trần kẻ thù của Đức Chúa Trời sẽ đổi thời kỳ và luật pháp (đổi ngày Sa-bát thứ Bảy sang ngày Chủ Nhật, bãi bỏ Lễ Vượt Qua và các kỳ lễ trọng thể).',
      'Ê-zê-chi-ên 9:4: Dấu ấn ghi trên trán những người được bảo vệ thoát khỏi tai nạn diệt vong (hình bóng về Lễ Vượt Qua).',
      'Ê-zê-chi-ên 47:1-9: Dòng sông Nước Sự Sống tuôn chảy từ Đền Thờ Giê-ru-sa-lem làm cho biển mặn hóa ngọt và muôn vật sinh sống.',
    ],
    keyVerses: [
      {
        ref: 'Đa-ni-ên 7:25',
        text: 'Vua đó sẽ nói những lời phạm đến Đấng Rất Cao, làm hao mòn các thánh đồ của Đấng Rất Cao, và toan định đổi những thời kỳ và luật pháp.',
      },
      {
        ref: 'Ê-zê-chi-ên 9:4',
        text: 'Hãy đi qua giữa thành... ghi một cái dấu trên trán những người than thở và khóc lóc vì mọi sự gớm ghiếc đã phạm giữa thành nầy.',
      },
      {
        ref: 'Ê-zê-chi-ên 47:9',
        text: 'Hễ sông nầy chảy đến đâu, thì mọi sinh vật sinh sản ở đó đều sẽ được sống... vì nước nầy chảy đến đó thì nước biển trở nên ngọt, và muôn vật sẽ sống ở nơi nào sông ấy chảy đến.',
      },
    ],
    schedule: [
      'Ngày 1: Giê-rê-mi 36–40',
      'Ngày 2: Giê-rê-mi 41–47',
      'Ngày 3: Giê-rê-mi 48–52',
      'Ngày 4: Ca-thương 1–5',
      'Ngày 5: Ê-zê-chi-ên 1–5',
      'Ngày 6: Ê-zê-chi-ên 6–10',
      'Ngày 7: Ê-zê-chi-ên 11–16',
      'Ngày 8: Ê-zê-chi-ên 17–22',
      'Ngày 9: Ê-zê-chi-ên 23–28',
      'Ngày 10: Ê-zê-chi-ên 29–34',
      'Ngày 11: Ê-zê-chi-ên 35–39',
      'Ngày 12: Ê-zê-chi-ên 40–44',
      'Ngày 13: Ê-zê-chi-ên 45–48',
      'Ngày 14: Đa-ni-ên 1–3',
      'Ngày 15: Đa-ni-ên 4–6',
      'Ngày 16: Đa-ni-ên 7–9',
      'Ngày 17: Đa-ni-ên 10–12',
    ],
  },
  {
    month: 12,
    title: '12 Tiên Tri Nhỏ, Lễ Lều Tạm & Thánh Linh Cùng Vợ Mới Ban Nước Sự Sống',
    chapters: '12 Tiên Tri Nhỏ (Ô-sê đến Ma-la-chi), Khải-huyền (Tổng cộng: 89 chương)',
    overview: 'Muôn dân đổ về Si-ôn học luật pháp (Mi-chê 4), giữ Lễ Lều Tạm nhận nước sự sống (Sa-cha-ri 14), Ấn Đức Chúa Trời (Khải-huyền 7), 144,000 người trên núi Si-ôn được cất lên khi còn sống (Khải-huyền 14) và Thánh Linh cùng Vợ Mới (Đức Chúa Trời Mẹ) ban Nước Sự Sống ở Khải-huyền 22:17.',
    coreTruths: [
      'Mi-chê 4:1-2: Tiên tri ngày sau rốt muôn dân đổ về Si-ôn để học luật pháp Giao Ước Mới của Đức Chúa Trời.',
      'Sa-cha-ri 14:16-19: Lệnh truyền giữ Lễ Lều Tạm hằng năm để đón nhận nước sự sống và mưa Thánh Linh.',
      'Khải-huyền 7:2-3: Ấn của Đức Chúa Trời Hằng Sống (Lễ Vượt Qua Giao Ước Mới) bảo vệ các tôi tớ khỏi 4 cơn gió - tức tai nạn hủy diệt.',
      'Khải-huyền 21:9-10 & 22:17: Vợ Mới của Chiên Con chính là Thành Thánh Giê-ru-sa-lem từ trên trời xuống (Đức Chúa Trời Mẹ - Ga-la-ti 4:26). Thánh Linh và Vợ Mới cùng kêu gọi nhân loại nhận lấy Nước Sự Sống cách nhưng không để bước vào sự sống đời đời.',
    ],
    keyVerses: [
      {
        ref: 'Mi-chê 4:1-2',
        text: 'Xảy ra trong những ngày sau-rốt... muôn dân sẽ chảy về đó... Hãy đến, chúng ta hãy lên núi Đức Giê-hô-va... Ngài sẽ dạy chúng ta về đường-lối Ngài, và chúng ta sẽ đi trong các nẻo Ngài. Vì luật-pháp sẽ ra từ Si-ôn.',
      },
      {
        ref: 'Sa-cha-ri 14:16-17',
        text: 'Hết thảy những kẻ còn sót lại... sẽ lên đó hằng năm đặng thờ lạy Vua, tức là Đức Giê-hô-va vạn-quân, và giữ lễ Lều-tạm. Hễ ai... không lên Giê-ru-sa-lem đặng thờ lạy Vua... thì trên họ sẽ không có mưa.',
      },
      {
        ref: 'Khải-huyền 22:17',
        text: 'Thánh Linh và Vợ Mới cùng nói: Hãy đến! Kẻ nào nghe cũng hãy nói: Hãy đến! Kẻ nào khát, khá đến. Kẻ nào muốn, khá nhận lấy nước sự sống cách nhưng không.',
      },
    ],
    schedule: [
      'Ngày 1: Ô-sê 1–7',
      'Ngày 2: Ô-sê 8–14',
      'Ngày 3: Giô-ên 1–3',
      'Ngày 4: A-mốt 1–5',
      'Ngày 5: A-mốt 6–9 & Ô-ba-đi-a 1',
      'Ngày 6: Giô-na 1–4',
      'Ngày 7: Mi-chê 1–7',
      'Ngày 8: Na-hum 1–3 & Ha-ba-cúc 1–3',
      'Ngày 9: Sô-phô-ni 1–3 & Ha-gai 1–2',
      'Ngày 10: Sa-cha-ri 1–7',
      'Ngày 11: Sa-cha-ri 8–14',
      'Ngày 12: Ma-la-chi 1–4',
      'Ngày 13: Khải-huyền 1–3',
      'Ngày 14: Khải-huyền 4–7',
      'Ngày 15: Khải-huyền 8–12',
      'Ngày 16: Khải-huyền 13–17',
      'Ngày 17: Khải-huyền 18–22',
    ],
  },
];

/**
 * Downloads a beautifully formatted Microsoft Word (.doc) file
 * containing the complete 12-month Bible reading plan.
 */
export function downloadMonthlyReadingWordDoc() {
  const sectionsHtml = MONTHLY_READING_SECTIONS.map((sec) => `
    <div style="margin-top: 25pt; margin-bottom: 25pt; page-break-inside: avoid;">
      <h2 style="color: #1e3a8a; font-size: 14pt; border-bottom: 2px solid #2563eb; padding-bottom: 4pt; margin-bottom: 8pt; text-transform: uppercase;">
        THÁNG ${sec.month}: ${sec.title}
      </h2>
      
      <p style="margin: 4pt 0; font-size: 11pt;">
        <strong>• Các chương cần đọc:</strong> ${sec.chapters}
      </p>
      
      <p style="margin: 4pt 0; font-size: 11pt;">
        <strong>• Phần tổng quan:</strong> ${sec.overview}
      </p>
      
      <div style="margin: 6pt 0;">
        <p style="margin: 3pt 0; font-weight: bold; color: #1e40af; font-size: 11pt;">• Bản chất cốt lõi (WATV.ORG):</p>
        <ul style="margin-top: 2pt; margin-bottom: 6pt; padding-left: 20pt;">
          ${sec.coreTruths.map((t) => `<li style="margin-bottom: 3pt; font-size: 10.5pt; line-height: 1.4;">${t}</li>`).join('')}
        </ul>
      </div>

      <div style="margin: 6pt 0;">
        <p style="margin: 3pt 0; font-weight: bold; color: #9a3412; font-size: 11pt;">• Câu gốc nền tảng:</p>
        <div style="margin-top: 2pt; margin-bottom: 6pt; padding-left: 10pt; border-left: 3px solid #ea580c; background-color: #fff7ed; padding: 6pt 10pt;">
          ${sec.keyVerses.map((kv) => `
            <p style="margin: 4pt 0; font-size: 10.5pt; font-style: italic; color: #7c2d12;">
              <strong>${kv.ref}:</strong> "${kv.text}"
            </p>
          `).join('')}
        </div>
      </div>

      <div style="margin: 6pt 0;">
        <p style="margin: 3pt 0; font-weight: bold; color: #065f46; font-size: 11pt;">• Lịch đọc chi tiết (${sec.schedule.length} ngày):</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 4pt; font-size: 10pt;">
          <tbody>
            ${sec.schedule.map((item, idx) => `
              <tr style="background-color: ${idx % 2 === 0 ? '#f8fafc' : '#ffffff'};">
                <td style="padding: 3pt 8pt; border: 1px solid #e2e8f0; font-family: 'Segoe UI', Arial, sans-serif;">
                  ${item}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <hr style="border: 0; border-top: 1px dashed #cbd5e1; margin-top: 15pt; margin-bottom: 15pt;" />
    </div>
  `).join('');

  const wordDocumentHtml = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>Nội Dung Kinh Thánh Đọc Hàng Tháng - Lộ Trình 12 Tháng</title>
        <style>
          @page {
            size: A4;
            margin: 20mm 18mm 20mm 18mm;
          }
          body {
            font-family: 'Times New Roman', 'Segoe UI', Arial, sans-serif;
            font-size: 11pt;
            line-height: 1.5;
            color: #1e293b;
          }
          h1 {
            color: #0f172a;
            font-size: 18pt;
            text-align: center;
            margin-bottom: 4pt;
            font-family: 'Times New Roman', Georgia, serif;
          }
          .subtitle {
            text-align: center;
            font-size: 11pt;
            color: #475569;
            margin-bottom: 15pt;
            font-style: italic;
          }
          .intro-box {
            background-color: #eff6ff;
            border: 1px solid #bfdbfe;
            border-radius: 4px;
            padding: 8pt 12pt;
            margin-bottom: 18pt;
            font-size: 10.5pt;
            color: #1e3a8a;
          }
        </style>
      </head>
      <body>
        <h1>NỘI DUNG KINH THÁNH ĐỌC HÀNG THÁNG</h1>
        <div class="subtitle">LỘ TRÌNH 12 THÁNG • KINH THÁNH BẢN DỊCH PHAN KHÔI 1925 (WATV.ORG)</div>
        
        <div class="intro-box">
          Dưới đây là toàn bộ nội dung chi tiết của 12 Tháng trong lộ trình đọc Kinh Thánh 1 năm (sử dụng Kinh Thánh Bản dịch Phan Khôi 1925), được trình bày đầy đủ, mạch lạc và rõ ràng để bạn dễ dàng theo dõi và học tập.
        </div>

        ${sectionsHtml}

        <div style="margin-top: 30pt; text-align: center; font-size: 9.5pt; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 10pt;">
          Hiệp Hội Truyền Giáo Tin Lành Thế Giới (WATV.ORG) • Đọc Kinh Thánh Bản Dịch Truyền Thống 1925
        </div>
      </body>
    </html>
  `;

  const blob = new Blob(['\ufeff' + wordDocumentHtml], {
    type: 'application/msword;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const downloadAnchor = document.createElement('a');
  downloadAnchor.href = url;
  downloadAnchor.download = 'Noi_Dung_Kinh_Thanh_Doc_Hang_Thang_12_Thang.doc';
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  document.body.removeChild(downloadAnchor);
  URL.revokeObjectURL(url);
}
