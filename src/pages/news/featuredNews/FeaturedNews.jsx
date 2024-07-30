import PropTypes from 'prop-types';

import NewsItem from '../components/NewsItem'

function FeaturedNews({ listNews }) {
  return (
    <div>
      <div className="text-center text-2xl font-bold py-3">
        Tin tức mới nhất
      </div>
      {listNews && listNews.length > 0 ? (
        listNews.map((item) => (
          <div key={item.id} className="flex gap-5">
            <NewsItem title={item.title} created_at={item.created_at} />
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