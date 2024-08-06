import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

// Đặt Access Token của bạn tại đây
mapboxgl.accessToken = 'pk.eyJ1IjoidmlldG5oYW4xMzQiLCJhIjoiY2x6aHV3MnVwMDVmMzJqcHZyZGhoZjhtcyJ9.RLoc88uCILguWBTFn1UXrQ';

const MapComponent = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Khởi tạo bản đồ
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [108.4707, 15.5744], // Tọa độ cho 431 Hùng Vương, TP. Tam Kỳ, Quảng Nam
      zoom: 15,
    });

    // Thêm các điều khiển điều hướng
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');


    // Cập nhật kích thước bản đồ khi kích thước cửa sổ thay đổi
    const handleResize = () => map.resize();
    window.addEventListener('resize', handleResize);

    // Cleanup map khi component bị gỡ bỏ
    return () => {
      map.remove();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={mapContainerRef} 
      className="w-full h-72"  // Sử dụng các lớp của Tailwind để xác định kích thước
    />
  );
};

export default MapComponent;
