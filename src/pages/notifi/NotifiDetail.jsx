import { fetchNotifiDetail } from "@/redux/Notifi/notifiSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NotifiItem from "./component/NotifiItem";

function NotifiDetail() {

    const { id } = useParams();
    const dispatch = useDispatch();

    const { notifiDetail, isLoading, isError } = useSelector(state => state.notifi);

    useEffect(() => {
        if (id) {
            dispatch(fetchNotifiDetail(id));
        }
    }, [id, dispatch]);

    if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
    if (isError) return <p className="text-center text-red-500">Error loading news details.</p>;

    return (
        <div className='flex flex-col items-center w-[80%] p-5 mx-auto gap-2'>

            <div className='w-full'>
                {notifiDetail ? (
                    <NotifiItem
                        title={notifiDetail.title}
                        content={notifiDetail.content}
                        isNotDetail={false}

                    />
                ) : (
                    <p className="text-center text-gray-500">Không có tin tức nào để hiển thị</p>
                )}
            </div>

        </div>
    )
}

export default NotifiDetail
