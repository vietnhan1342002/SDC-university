export default function Content() {
    return (
        <div className="flex flex-col xl:flex-row w-full p-10">
            {/* Phần 3 */}
            <div className="flex-[4] flex-col gap-5 border-b-2 border-gray-400 ">
                <h1 className="text-3xl font-bold text-red-700 pb-5">TIN TỨC</h1>
                <div className="flex gap-4 ">
                    <div className="flex-flex-1 ">
                        <div className="flex flex-col gap-4">
                            <img src="images/banner.jpg" alt="Banner" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="text-lg text-yellow-600 font-semibold">TIN TỨC</p>
                            <p className="text-sm text-gray-400 font-base border-l-2 pl-4">thời gian</p>
                        </div>
                        <div className="flex flex-col ">
                            <h1 className="text-2xl font-bold text-gray-700 py-3">Tiêu đề tin tức</h1>
                            <p className="text-base text-gray-500 font-base">
                                Hiệu Suất Tinh Tế: Trong những trường hợp cần tối ưu hóa hiệu suất cho trang web hoặc ứng dụng có yêu cầu cao, Flexbox có thể không phải là lựa chọn tối ưu. Ví dụ: khi cần thực hiện bố cục rất phức tạp với nhiều phần tử động.
                            </p>
                        </div>
                    </div>
                    <div className="flex-flex-1">
                        <div className="flex flex-row gap-4">
                            <img src="images/banner.jpg" alt="Banner" className="w-1/3 h-full object-cover" />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg text-yellow-600 font-semibold">TIN TỨC</p>
                                <p className="text-sm text-gray-400 font-base ">thời gian</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Phần 2 */}
            <div className="flex-[2] bg-red-500">
                <h1 className="text-3xl font-bold text-red-700 pb-5">THÔNG BÁO</h1>
                <div className="flex flex-col gap-5">
                    <p className="text-lg text-yellow-600 font-semibold">TIN TỨC</p>
                    <p className="text-sm text-gray-400 font-base ">thời gian</p>
                </div>
            </div>
        </div>
    )
}
