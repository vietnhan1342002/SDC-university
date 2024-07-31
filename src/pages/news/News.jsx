import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllNewsSlices, fetchNewsDetail, fetchViewsCounter } from "@/redux/News/newsSlice";
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
        dispatch(fetchViewsCounter(item.id))
    };

    return (
        <div className="flex justify-center my-2 w-5/6 mx-auto">
            <div className="flex flex-[3] flex-col m-5 gap-5 ">
                {
                    listNews && listNews.length > 0 && listNews.map(item => (
                        
                            <NewsItem onClick={handleResultClick(item)} key={item.id} title={item.title} body={item.body} created_at={item.created_at} newsDetailLink={`/news/${item.id}`} />
                    ))
                }
            </div>
            <div className="flex-col flex-1 gap-3 m-5 hidden md:flex border" >
                <FeaturedNews listNews={listNews} />
            </div>

        </div>
    )
}

export default News;