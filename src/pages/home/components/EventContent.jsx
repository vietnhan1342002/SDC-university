// import React from 'react'
import PropTypes from 'prop-types';

export default function EventContent({ content }) {
    return (
        <div className="flex gap-2 pb-5">
            <div>
                <div className='w-24 h-7 bg-red-500 text-center text-white font-base'>
                    Tháng
                </div>
                <div className='w-24 h-16 bg-white flex justify-center items-center text-black font-base '>
                    Ngày
                </div>
            </div>
            <p className="text-sm text-white max-w-xs max-h-16 pr-10 line-clamp-3 overflow-hidden">
                {content}
            </p>

        </div>
    )
}

EventContent.propTypes = {
    content: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};
