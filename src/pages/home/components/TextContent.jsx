// import React from 'react'
import { formatDateTime } from '@/utils/formatDate';
import PropTypes from 'prop-types';

export default function TextContent({ thumbnailNews, title, time }) {
  const formattedDateTime = formatDateTime(time);

    return (
        <div className="flex gap-2 items-center">
            {
                thumbnailNews ?
                    (<img src={thumbnailNews} alt="Thumbnail" className="w-24 h-28 object-fill" />) :
                    <div className='w-1/6' />
            }
            <div className="flex flex-col justify-center gap-1">
                <p className="text-base text-black font-semibold max-h-24 pr-10 line-clamp-3 overflow-hidden">{title}</p>
                <p className="text-sm text-gray-400 font-base ">{formattedDateTime}</p>
            </div>
        </div>
    )
}

TextContent.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnailNews: PropTypes.string,
    time: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    banner: PropTypes.string,
};
