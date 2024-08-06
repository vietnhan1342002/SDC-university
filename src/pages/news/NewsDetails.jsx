import { fetchAllNewsSlices, fetchNewsDetail } from '@/redux/News/newsSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewsItem from './components/NewsItem';
import { useParams } from 'react-router-dom';
import FeaturedNews from './featuredNews/FeaturedNews';
import BackPage from '@/components/BackPage';

function NewsDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  // Lấy toàn bộ trạng thái cần thiết chỉ bằng một useSelector
  const { newsDetail, listNews, isLoading, isError } = useSelector(state => state.news);

  useEffect(() => {
    if (id) {
      dispatch(fetchNewsDetail(id));
    }
    dispatch(fetchAllNewsSlices());
  }, [id, dispatch]);

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Error loading news details.</p>;

  return (
    <div

      className='flex flex-col items-center w-4/5 p-5 mx-auto max-h-fit'>
      <div className="flex gap-6">
        <div className=' flex flex-[3]'>
          {newsDetail ? (
            <NewsItem
              thumbnailNews={newsDetail.thumbnailNews}
              title={newsDetail.title}
              description={newsDetail.description}
              body={newsDetail.body}
              created_at={newsDetail.created_at}
              desc={newsDetail.description}
              isVisible={false}
            />
          ) : (
            <p className="text-center text-gray-500">Không có tin tức nào để hiển thị</p>
          )}
        </div>
        <div className="flex flex-1">
          <FeaturedNews listNews={listNews} />
        </div>
      </div>
      <BackPage page='news' />
    </div>
  );
}


export default NewsDetails;
