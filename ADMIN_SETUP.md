# 🔐 Hướng Dẫn Thiết Lập Admin Mode

## Để không đếm lượt truy cập của bạn (Admin):

### Cách thiết lập (Tự động lấy IP của bạn):

**Bước 1**: Truy cập website với URL:
```
https://your-domain.vercel.app?admin=true
```
hoặc trên local:
```
http://localhost:5173?admin=true
```

**Bước 2**: Hệ thống sẽ tự động:
- Lấy IP address của máy bạn
- Lưu IP đó vào localStorage
- Đánh dấu bạn là admin
- Tất cả lượt truy cập từ IP này sẽ KHÔNG được đếm

**Bước 3**: Refresh lại trang (URL sẽ tự động xóa `?admin=true`)

---

### Kiểm tra IP của bạn đã được lưu chưa:

Mở Console (F12) và gõ:
```javascript
console.log('Admin IP:', localStorage.getItem('adminIP'))
console.log('Current IP:', 'Đang lấy...')
fetch('https://api.ipify.org?format=json')
  .then(r => r.json())
  .then(data => console.log('Current IP:', data.ip))
```

---

### Để reset/đổi IP Admin:

**Cách 1**: Xóa và thiết lập lại
```javascript
localStorage.removeItem('adminIP')
// Sau đó truy cập lại với ?admin=true
```

**Cách 2**: Đặt IP thủ công
```javascript
localStorage.setItem('adminIP', 'your-ip-address-here')
```

---

## 📊 Visitor Counter

- **Vị trí**: Góc dưới bên phải màn hình
- **Chức năng**: Đếm số lượt truy cập thực tế (không tính IP của admin)
- **API**: 
  - IP Lookup: `ipify.org` (free)
  - Counter: CountAPI (free service)
- **Fallback**: Nếu API lỗi, sẽ dùng localStorage counter

---

## ⚙️ Cách hoạt động:

1. **Lấy IP**: Mỗi visitor được lấy IP từ `api.ipify.org`
2. **So sánh**: So sánh IP hiện tại với IP admin đã lưu
3. **Đếm**: Chỉ đếm nếu IP khác với IP admin
4. **Tracking**: Mỗi IP chỉ được đếm 1 lần mỗi ngày

---

**Lưu ý**: 
- IP của bạn sẽ được lưu tự động khi truy cập với `?admin=true`
- Tất cả lượt truy cập từ IP của bạn sẽ KHÔNG được đếm
- Nếu IP của bạn thay đổi (ví dụ: đổi mạng WiFi), cần thiết lập lại

