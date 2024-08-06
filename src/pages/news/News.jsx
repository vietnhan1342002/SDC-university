import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { fetchAllNewsSlices, fetchNewsDetail, fetchViewsCounter } from "@/redux/News/newsSlice";
import NewsItem from "./components/NewsItem";
import FeaturedNews from "./featuredNews/FeaturedNews";

const News = () => {
    const dispatch = useDispatch();
    const listNews = useSelector(state => state.news.listNews);

    useEffect(() => {
        dispatch(fetchAllNewsSlices());
    }, [dispatch]);

    const handleResultClick = useCallback((item) => {
        if (item) {
            dispatch(fetchNewsDetail(item.id));
            dispatch(fetchViewsCounter(item.id));
        }
    }, [dispatch]);

    return (
        <div className="flex justify-center my-2 w-5/6 mx-auto">
            <div className="flex flex-[3] flex-col m-5 ">
                {
                    listNews && listNews.length > 0 ? (
                        listNews.map(item => (
                            <NewsItem
                                onClick={() => handleResultClick(item)} // Sửa để không gọi hàm trực tiếp trong render
                                key={item.id}
                                thumbnailNews={item.thumbnailNews}
                                title={item.title}
                                description={item.description}
                                created_at={item.created_at}
                                newsDetailLink={`/news/${item.id}`}
                                isVisible={true}
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No news available</p> // Thông báo khi không có tin tức
                    )
                }
            </div>
            <div className="flex-col flex-1 gap-3 m-5 hidden md:flex border max-w-full">
                <FeaturedNews listNews={listNews} />
            </div>
        </div>
    );
};

export default News;
