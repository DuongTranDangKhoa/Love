# Ứng dụng Valentine React

Đây là phiên bản React của website lời mời Valentine.

## Bắt đầu

1. Cài đặt các dependency:
```bash
npm install
```

2. Chạy development server:
```bash
npm run dev
```

3. Build cho production:
```bash
npm run build
```

4. Xem trước production build:
```bash
npm run preview
```

## Cấu trúc dự án

```
├── src/
│   ├── App.jsx          # Component React chính
│   ├── main.jsx         # Điểm vào React
│   └── index.css        # Styles (giống như bản gốc)
├── resources/           # Assets tĩnh (gif, video, etc.)
├── index.html           # HTML template
├── vite.config.js       # Cấu hình Vite
└── package.json         # Dependencies

```

## Tính năng chính

- Sử dụng React hooks (useState, useRef, useEffect) để quản lý state
- UI và UX giống hệt phiên bản vanilla JS gốc
- Nút Có/Không tương tác với các phản ứng thay đổi
- Chuyển đổi GIF dựa trên tương tác người dùng
- Thiết kế responsive cho thiết bị di động

## Tùy chỉnh

Để tùy chỉnh lời mời:
- Sửa text trong `src/App.jsx` dòng 14: Đổi "(tên)" thành tên người bạn muốn
- Cập nhật link mạng xã hội trong `src/App.jsx` dòng 111: Đổi link Instagram thành link profile của bạn

## Công nghệ sử dụng

- React 18
- Vite (build tool)
- CSS (không dùng framework)
- Assets gốc (gif, video)

## Hướng dẫn chạy

Dự án đang chạy tại: **http://localhost:5173**

Lưu ý: Mở trình duyệt và truy cập địa chỉ trên để xem ứng dụng.
