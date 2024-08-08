
const AdmissionInfo = () => {
    return (
        <div className="p-6  text-gray-800">

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">1. Làm hồ sơ</h2>
                <div className="mb-4">
                    <h3 className="font-semibold">Đối với thí sinh đã tốt nghiệp THCS</h3>
                    <ul className="list-disc list-inside ml-4">
                        <li>Bằng THCS hoặc giấy chứng nhận TN tạm thời</li>
                        <li>Học bạ THCS (photo công chứng, 4 bản)</li>
                        <li>Bản sao Giấy khai sinh</li>
                        <li>CCCD (2 bản photo công chứng)</li>
                        <li>Giấy chứng nhận ưu tiên (nếu có)</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold">Đối với thí sinh đã tốt nghiệp THPT</h3>
                    <ul className="list-disc list-inside ml-4">
                        <li>Bằng THPT hoặc giấy chứng nhận TN tạm thời</li>
                        <li>Học bạ THPT (photo công chứng, 2 bản)</li>
                        <li>Bản sao Giấy khai sinh</li>
                        <li>CCCD (2 bản photo công chứng)</li>
                        <li>Giấy chứng nhận ưu tiên (nếu có)</li>
                    </ul>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">2. Nộp hồ sơ</h2>
                <div className="mb-4">
                    <h3 className="font-semibold">Cách 1: Nộp trực tiếp tại trường</h3>
                    <p>Các địa điểm sau:</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>431 Hùng Vương – TP Tam Kỳ – Quảng Nam</li>
                        <li>224 - Huỳnh Thúc Kháng, TP Tam Kỳ, Quảng Nam</li>
                        <li>Các trường tại các địa chỉ:...</li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold">Cách 2: Thông qua đường bưu điện</h3>
                    <p>Địa chỉ:...</p>
                </div>
                <div>
                    <h3 className="font-semibold">Cách 3: NHẬP HỌC TRỰC TUYẾN</h3>
                    <p>Scan hồ sơ hoặc chụp ảnh tài liệu và gửi email:...</p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">3. Nộp học phí, lệ phí</h2>
                <p>Mức thu học phí:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Cao đẳng: 563.220 đồng</li>
                    <li>Bảo hiểm y tế: 120.000 đồng</li>
                    <li>Trang phục học đường: 100.000 đồng</li>
                    <li>Lệ phí khám sức khoẻ: 50.000 đồng</li>
                    <li>Tổng cộng: 948.220 đồng</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">4. Phổ biến kế hoạch học tập</h2>
                <p>Sau khi nộp các khoản học phí/lệ phí và hồ sơ, trường sẽ sắp xếp và thông báo đến quý phụ huynh và học sinh biết về kế hoạch học tập.</p>
            </section>
        </div>
    );
}

export default AdmissionInfo;
