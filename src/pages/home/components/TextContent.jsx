// import React from 'react'
import { formatDateTime } from '@/utils/formatDate';
import PropTypes from 'prop-types';

export default function TextContent({ thumbnail, title, time }) {
  const formattedDateTime = formatDateTime(time);

    return (
        <div className="flex gap-2 items-center">
            {
                thumbnail ?
                    (<img src={thumbnail} alt="Thumbnail" className="w-20 h-24 object-fill" />) :
                    <div className='w-1/6' />
            }
            <div className="flex flex-col justify-center gap-1">
                <p className="text-lg text-black font-semibold">{title}</p>
                <p className="text-sm text-gray-400 font-base ">{formattedDateTime}</p>
            </div>
        </div>
    )
}

TextContent.propTypes = {
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    banner: PropTypes.string,
};
