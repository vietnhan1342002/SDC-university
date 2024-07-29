import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllNewsSlices } from "@/redux/News/newsSlice";

const News = () => {
    const dispatch = useDispatch();
    const listNews = useSelector(state => state.news.listNews);

    useEffect(() => {
        dispatch(fetchAllNewsSlices())
    }, [dispatch])
    return (
        <div className="flex flex-col m-5 px-52 gap-10">

            {
                listNews && listNews.length > 0 && listNews.map(item => (
                    <div key={item.id} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-5">
                            <p className="text-2xl font-bold">{item.title}</p>
                            <p className="text-2xl font-bold">{item.body}</p>
                            <img src='/images/banner.jpg' alt="" />

                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default News;