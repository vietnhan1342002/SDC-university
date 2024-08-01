import { fetchAllNewsSlices, fetchNewsDetail } from '@/redux/News/newsSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import NewsItem from './components/NewsItem';
import { useNavigate, useParams } from 'react-router-dom';
import FeaturedNews from './featuredNews/FeaturedNews';

function NewsDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      
       className='flex flex-col items-center w-[80%] p-5 mx-auto'>
      <div className="flex gap-6">
        <div className=' flex flex-[3]'>
          {newsDetail ? (
            <NewsItem
              title={newsDetail.title}
              body={newsDetail.body}
              created_at={newsDetail.created_at}
            />
          ) : (
            <p className="text-center text-gray-500">Không có tin tức nào để hiển thị</p>
          )}
        </div>
        <div className="flex flex-1">
          <FeaturedNews listNews={listNews} />
        </div>
      </div>
      <button
        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300'
        onClick={() => navigate('/news')}
      >
        Trở lại
      </button>
    </div>
  );
}

NewsDetails.propTypes = {
  id: PropTypes.string, // Đảm bảo id là bắt buộc
};

export default NewsDetails;
