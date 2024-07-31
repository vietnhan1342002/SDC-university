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
    <div>
      <div className="text-center text-2xl font-bold py-3">
        Tin tức nổi bật
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