import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllNewsSlices, fetchNewsDetail } from "@/redux/News/newsSlice";
import NewsItem from "./components/NewsItem";
import FeaturedNews from "./featuredNews/FeaturedNews";

const News = () => {
    const dispatch = useDispatch();
    const listNews = useSelector(state => state.news.listNews);

    useEffect(() => {
        dispatch(fetchAllNewsSlices())
    }, [dispatch])

    const handleResultClick = (item) => {
        // Xử lý khi nhấp vào một kết quả, nếu cần
        dispatch(fetchNewsDetail(item.id))
    };

    return (
        <div className="flex justify-center my-2 w-5/6 mx-auto">
            <div className="flex flex-[3] flex-col m-5 gap-5 ">
                {
                    listNews && listNews.length > 0 && listNews.map(item => (
                        <div
                            key={item.id}
                            className="flex gap-5 border p-2"
                            onClick={() => handleResultClick(item)}
                        >
                            <NewsItem title={item.title} body={item.body} created_at={item.created_at} newsDetailLink={`/news/${item.id}`} />
                        </div>
                    ))
                }
            </div>
            <div className="flex-col flex-1 gap-3 m-5 hidden md:flex border" >
                <div className="text-center text-2xl font-bold py-3">
                    Tin tức mới nhất
                </div>
                {
                    listNews && listNews.length > 0 && listNews.map(item => (
                        <div key={item.id} className="flex gap-5 ">
                            <FeaturedNews title={item.title} created_at={item.created_at} />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default News;