import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatDateTime } from '@/utils/formatDate';

function NewsItem({ id, title, body = '', thumbnailNews, created_at, newsDetailLink, isVisible, onClick, description }) {
  const formattedDateTime = formatDateTime(created_at);

  // Giải mã HTML mã hóa và làm sạch
  const decodeHtml = (html) => {
    if (!html) return '';
    // Giải mã các ký tự HTML mã hóa
    return html
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
  };

  const sanitizeAndParseHtml = (html) => {
    const decodedHtml = decodeHtml(html);
    // Làm sạch HTML với DOMPurify
    const cleanedHtml = DOMPurify.sanitize(decodedHtml);
    // Phân tích HTML đã làm sạch
    return parse(cleanedHtml);
  };

  return (
    <div key={id} onClick={onClick} className="flex flex-col gap-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={newsDetailLink}>
        <img src={thumbnailNews} alt={title} className='object-cover max-w-full rounded-md border border-gray-300' />
        <p className={`text-lg font-bold text-blue-600 hover:underline max-w-4xl max-h-16 pr-10 line-clamp-3 overflow-hidden`}>
          {title}
        </p>
      </Link>

      <p className="text-sm text-gray-500">{formattedDateTime}</p>

      <div className={`text-lg font-bold text-gray-700 max-w-4xl flex flex-col gap-5 ${isVisible ? "max-h-[68px] pr-10 overflow-hidden" : ""}`}>
        <div className='text-base'>{description}</div>
        <div className='text-base font-normal'>{sanitizeAndParseHtml(body)}</div>
      </div>
    </div>
  );
}

NewsItem.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  thumbnailNews: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  description:PropTypes.string,
  created_at: PropTypes.string,
  newsDetailLink: PropTypes.string,
  isVisible: PropTypes.bool
};

export default NewsItem;
