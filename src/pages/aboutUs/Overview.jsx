import HeaderAboutUs from "./components/HeaderAboutUs";

const Overview = () => {

    return (
        <div className="flex flex-col m-5 px-52 gap-10">
            <HeaderAboutUs title={'TỔNG QUAN VỀ TRƯỜNG'} />
            <div className='flex flex-col gap-5 text-lg text-justify'>
                Trường Cao đẳng Quảng Nam chính thức đi vào hoạt động từ ngày 1/6/2021, được sáp nhập nguyên trạng từ các trường: Trường Cao đẳng Công nghệ Quảng Nam, Trường Trung cấp nghề Bắc Quảng Nam, Trường Trung cấp nghề Nam Quảng Nam, Trường Trung cấp nghề Thanh niên Dân tộc Miền núi Quảng Nam và Trường Trung cấp Văn hóa, Nghệ thuật và Du lịch Quảng Nam và Trường Cao đẳng KT-KT Quảng Nam.
                Trường có trụ sở chính đặt tại số 431 Hùng Vương- thành phố Tam Kỳ, tỉnh Quảng Nam.

                <img src='images/overview.jpg' alt='overview' className="w-full h-auto" />

                Để nâng cao chất lượng đào tạo, các ngành học tại trường đều có phòng thực hành với đầy đủ các thiết bị hiện đại giúp sinh viên vừa học lý thuyết vừa tiếp cận thực hành, nhằm đảm bảo rèn luyện kỹ năng, tay nghề. Bên cạnh đó, các em còn được tiếp cận công nghệ mới tại các đơn vị đối tác - các khu công nghiệp; nâng cao khả năng thực hành, tiếp cận và làm chủ công nghệ mới; khả năng ứng dụng công nghệ thông tin và hình thành các kỹ năng cần thiết giúp sinh viên dễ dàng tiếp cận các vị trí tuyển dụng sau khi tốt nghiệp.
                Hiện nay, với số lượng gần 1000 sinh viên đang theo học tại trường và hàng ngàn sinh viên tốt nghiệp có kiến thức và kỹ năng thực hành ở trình độ trung cấp, cao đẳng hiện đang công tác tại nhiều vị trí khác nhau trong các lĩnh vực Giáo dục, Kinh tế, Tài chính, Kỹ thuật, Công nghệ.

                <img src="images/overview2.jpg" alt="overview2" className="w-full h-auto" />
            </div>




        </div>
    )
}

export default Overview;

