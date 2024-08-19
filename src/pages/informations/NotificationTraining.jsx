import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import FeaturedNews from "../news/featuredNews/FeaturedNews";
import { useEffect } from "react";
import { fetchNotifi } from "@/redux/Notifi/notifiSlice";

const NotificationTraining = () => {
    const listNews = useSelector(state => state.news.listNews);
    const dispatch = useDispatch();
    const listNotifiTraining = useSelector(state => state.notifi.training || []);

    useEffect(() => {
        dispatch(fetchNotifi({ department: 'daotao' }));
    }, [dispatch])
    console.log(listNotifiTraining);
    return (
        <div className="flex justify-center my-2 w-5/6 mx-auto">
            <div className="flex flex-[3] flex-col m-5 ">
                <div className="flex flex-col gap-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className='text-red-500 font-bold text-xl bg-gray-100 p-2 border-l-4 border-yellow-400 '>THÔNG BÁO</div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center text-lg font-semibold gap-2">
                            <MdKeyboardDoubleArrowRight />
                            {listNotifiTraining && listNotifiTraining.length > 0 ? (
                                listNotifiTraining.map((item, index) => (
                                    <div key={index}>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                                            {item.title}
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <div>Không có thông báo</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col flex-1 gap-3 m-5 hidden md:flex border max-w-full">
                <FeaturedNews listNews={listNews} />
            </div>
        </div>
    );

}

export default NotificationTraining;