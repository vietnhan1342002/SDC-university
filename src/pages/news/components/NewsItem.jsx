import { formatDateTime } from '@/utils/formatDate';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NewsItem({ id, title, body, created_at, newsDetailLink, onClick }) {
  const formattedDateTime = formatDateTime(created_at);

  return (
    <div key={id} onClick={onClick} className="flex flex-col gap-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={newsDetailLink}>
        <img src='/images/banner.jpg' title={title} className='object-cover w-full rounded-md border border-gray-300' />
        <p className="text-lg font-bold text-blue-600 hover:underline">
          {title}
        </p>
      </Link>
      <p className="text-sm text-gray-500 ">{formattedDateTime}</p>
      <p className="text-base text-gray-700">{body}</p>
    </div>

  )
}

export default NewsItem

NewsItem.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  created_at: PropTypes.string,
  newsDetailLink: PropTypes.string,
}