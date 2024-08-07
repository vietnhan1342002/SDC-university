// src/utils/formatDate.js

// Hàm định dạng ngày giờ
export const formatDateTime = (dateString) => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return 'Ngày không hợp lệ';
  }

  const dateOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };

  const formattedDate = date.toLocaleDateString('vi-VN', dateOptions);
  const formattedTime = date.toLocaleTimeString('vi-VN', timeOptions);

  return `${formattedDate} ${formattedTime}`;
};

// Hàm lấy ngày
export const getDay = (dateString) => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return 'Ngày không hợp lệ';
  }

  return date.getDate().toString().padStart(2, '0'); // Trả về ngày (2 chữ số)
};

// Hàm lấy tháng
export const getMonth = (dateString) => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return 'Ngày không hợp lệ';
  }

  return (date.getMonth() + 1).toString().padStart(2, '0'); // Trả về tháng (2 chữ số)
};

// Hàm lấy năm
export const getYear = (dateString) => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return 'Ngày không hợp lệ';
  }

  return date.getFullYear(); // Trả về năm
};
