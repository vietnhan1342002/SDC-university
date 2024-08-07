import classNames from "classnames";
import EventContent from "./components/EventContent";
import { useSelector } from "react-redux";
import { list } from "postcss";

export default function Event() {

    const item = [1, 2, 3, 4];
    const listEvent = useSelector(state => state.event.listEvents);

    const titleClass = classNames(
        'text-3xl',
        'font-bold',
        'text-white',
        'pb-5'
    );

    return (
        <div className="flex p-10 bg-orange-400 h-[38rem]">
            <div className="flex flex-1 flex-col">
                <h1 className={titleClass}>SỰ KIỆN</h1>
                {/* Thông báo */}
                <div className="flex-grow ">
                    {
                        listEvent && listEvent.map((item) => (
                            <EventContent
                                key={item.id}
                                content={item.title}
                                created_at={item.created_at}
                            />
                        ))
                    }
                </div>
            </div>


            {/* hr */}
            <div className="flex flex-1 flex-col  gap-2 w-1/2 mx-auto"> {/* Giảm chiều rộng của phần tử cha */}
                <h1 className="text-2xl font-bold">ẢNH VÀ VIDEO</h1>
                <img src="/images/banner.jpg" alt="" className="w-full h-72 object-fill" />

                {/* Phần cuộn ngang */}
                <div className="flex flex-row overflow-x-auto py-2 space-x- scrollbar-hidden hover:scrollbar-visible gap-2">
                    {
                        item.map((item, index) => (
                            <div key={index} className="flex flex-col items-start justify-center w-36 h-full">
                                <img src="/images/banner.jpg" alt="" className="object-cover w-full h-full" />
                                <h1>Tascvasdlasfdajs</h1>
                            </div>
                        ))
                    }

                    {/* Thêm nhiều phần tử con nếu cần */}
                </div>
            </div>
        </div>
    )
}
