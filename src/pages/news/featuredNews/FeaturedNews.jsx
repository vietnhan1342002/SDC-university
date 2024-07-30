import PropTypes from 'prop-types';

import NewsItem from '../components/NewsItem'

function FeaturedNews({ title, created_at }) {
  return (
    <div>
      <NewsItem title={title} created_at={created_at} />
    </div>
  )
}

export default FeaturedNews;


FeaturedNews.propTypes = {
  title: PropTypes.string,
  created_at: PropTypes.string,
}