import PropTypes from 'prop-types';

import NewsItem from '../components/NewsItem'
import { useDispatch } from 'react-redux';
import { fetchNewsDetail, fetchViewsCounter } from '@/redux/News/newsSlice';

function FeaturedNews({ listNews }) {
  const dispatch = useDispatch();


  const handleResultClick = (item) => {
    dispatch(fetchViewsCounter(item.id))
    dispatch(fetchNewsDetail(item.id))
  }

  return (
    <div className="flex flex-col gap-2">

      <div className="relative text-center text-3xl font-bold py-4 bg-red-600 border-2 border-gray-400 text-white rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-500 opacity-50 blur-md"></div>
        <span className="relative z-10 custom-pulse">Tin tức nổi bật</span>
      </div>


      {listNews && listNews.length > 0 ? (
        [...listNews]
          .sort((a, b) => b.views - a.views).map((item) => (
            <div key={item.id}
              className="flex gap-5"
              onClick={() => handleResultClick(item)}>
              <NewsItem title={item.title} created_at={item.created_at} newsDetailLink={`/news/${item.id}`} />
            </div>
          ))
      ) : (
        <p className="text-center text-gray-500">Không có tin tức nào để hiển thị.</p>
      )}
    </div>
  )
}

export default FeaturedNews;


FeaturedNews.propTypes = {
  listNews: PropTypes.array,
}