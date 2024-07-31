// src/utils/formatDate.js

export const formatDateTime = (dateString) => {
  // Tạo đối tượng Date từ chuỗi ngày
  const date = new Date(dateString);

  // Kiểm tra xem đối tượng Date có hợp lệ không
  if (isNaN(date.getTime())) {
    return 'Ngày không hợp lệ';
  }

  // Cấu hình định dạng ngày và giờ
  const dateOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // Sử dụng định dạng 24 giờ
  };

  // Format ngày
  const formattedDate = date.toLocaleDateString('vi-VN', dateOptions);

  // Format giờ
  const formattedTime = date.toLocaleTimeString('vi-VN', timeOptions);

  // Kết hợp ngày và giờ
  return `${formattedDate} ${formattedTime}`;
};
