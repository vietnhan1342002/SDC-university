import { formatDateTime } from '@/utils/formatDate';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NewsItem({ title, body, created_at, newsDetailLink }) {
  const formattedDateTime = formatDateTime(created_at);

  return (
    <div className="flex flex-col gap-2 px-3 ">
      <Link to={newsDetailLink}>
        <img src='/images/banner.jpg' title={title} className='object-cover border border-gray-500' />
      </Link>
      <Link to={newsDetailLink} className="text-lg font-bold hover:underline">
        {title}
      </Link>
      <p className="text-sm text-gray-400 ">{formattedDateTime}</p>
      <p className="text-base ">{body}</p>
    </div>

  )
}

export default NewsItem

NewsItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  created_at: PropTypes.string,
  newsDetailLink: PropTypes.string,
}