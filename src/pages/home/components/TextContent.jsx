// import React from 'react'
import PropTypes from 'prop-types';

export default function TextContent({ thumbnail, title, time }) {
    return (
        <div className="flex gap-2">
            {
                thumbnail ?
                    (<img src={thumbnail} alt="Thumbnail" className="w-1/3 h-full object-cover" />) :
                    <div className='w-1/6' />
            }
            <div className="flex flex-col justify-center gap-1">
                <p className="text-lg text-black font-semibold">{title}</p>
                <p className="text-sm text-gray-400 font-base ">{time}</p>
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
