import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatDateTime } from '@/utils/formatDate';

export default function TextContent({ id, thumbnailNews, title, time }) {
    const formattedDateTime = formatDateTime(time);

    return (
        <div className="flex gap-2 items-center">
            {thumbnailNews ? (
                <img src={thumbnailNews} alt="Thumbnail" className="w-24 h-28 object-cover" />
            ) : (
                <div className="w-24 h-28 bg-gray-200" />
            )}
            <div className="flex flex-col justify-center gap-1">
                <Link to={`/news/${id}`} className="text-base text-black font-semibold max-h-24 pr-10 line-clamp-3 overflow-hidden">
                    {title}
                </Link>
                <p className="text-sm text-gray-400">{formattedDateTime}</p>
            </div>
        </div>
    );
}

TextContent.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    thumbnailNews: PropTypes.string,
    time: PropTypes.string.isRequired,
};
