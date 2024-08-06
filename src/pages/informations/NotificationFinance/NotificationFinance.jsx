import { useSelector } from "react-redux";
import FeaturedNews from "../../news/featuredNews/FeaturedNews";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import MapComponent from "@/map";

const NotificationFinance = () => {
    const listNews = useSelector(state => state.news.listNews);


    return (
        <div className="flex justify-center my-2 w-5/6 mx-auto">
            <div className="flex flex-[3] flex-col m-5 ">
                <div className="flex flex-col gap-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className='text-red-500 font-bold text-xl bg-gray-100 p-2 border-l-4 border-yellow-400 '>THÔNG BÁO</div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center text-lg font-semibold gap-2">
                            <MdKeyboardDoubleArrowRight />
                            Thông báo về việc điều chỉnh lịch học tập của các lớp học phần năm học 2023-2024
                        </div>
                    </div>
                </div>
            {/* <MapComponent/> */}
            </div>
            <div className="flex-col flex-1 gap-3 m-5 hidden md:flex border max-w-full">
                <FeaturedNews listNews={listNews} />
            </div>
        </div>
    )
}

export default NotificationFinance;