import classNames from "classnames";
import ItemContent from "./components/ItemContent";
import { useSelector } from "react-redux";
import LatestContent from "./components/LatestContent";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Content() {

    const listNews = useSelector(state => state.news.listNews);

    const titleClass = classNames(
        'text-3xl',
        'font-bold',
        'text-red-700',
        'pb-5'
    );
    return (
        <div className="flex flex-col xl:flex-row w-full p-10 gap-5">
            {/* Phần 3 */}
            <div className="flex-[4] flex-col gap-5 border-b-2 border-gray-400 pb-2">
                <h1 className={titleClass}>TIN TỨC</h1>
                <div className="flex gap-4 ">

                    <div className="flex flex-[3]">
                        <LatestContent listNews={listNews} />
                    </div>

                    <div className="flex flex-[2] h-full">
                        <ItemContent listNews={listNews} />
                    </div>
                </div>
            </div>


            {/* hr */}
            <div className="mt-12 w-1 h-96 bg-gray-400 rounded"></div>

            {/* Phần 2 */}
            <div className="flex-[2] flex flex-col">
                <h1 className={titleClass}>THÔNG BÁO</h1>
                <div className="flex-grow flex gap-5 flex-col">
                    <div className="flex items-center text-lg font-semibold gap-2">
                        <MdKeyboardDoubleArrowRight />
                        Thông báo về việc nộp học phí của các lớp học phần năm học 2023-2024
                    </div>
                    <div className="flex items-center text-lg font-semibold gap-2">
                        <MdKeyboardDoubleArrowRight />
                        Thông báo về việc nộp học phí của các lớp học phần năm học 2023-2024
                    </div>
                    <div className="flex items-center text-lg font-semibold gap-2">
                        <MdKeyboardDoubleArrowRight />
                        Thông báo về việc nộp học phí của các lớp học phần năm học 2023-2024
                    </div>
                </div>
                <img src='images/banner.jpg' alt="Banner" className='w-full h-auto object-contain pb-5' />
            </div>

        </div>
    )
}
