// import React from 'react'
import { getDay, getMonth, getYear } from '@/utils/formatDate';
import PropTypes from 'prop-types';

export default function EventContent({ content, created_at }) {

    const day = getDay(created_at);
    const month = getMonth(created_at);
    const year = getYear(created_at);


    return (
        <div className="flex gap-2 pb-5 items-center">
            <div className="flex flex-col items-center p-2 rounded-lg">
                <div className="w-24 h-10 bg-red-500 flex justify-center items-center text-white font-semibold rounded-t-lg">
                    {day}/{month}
                </div>
                <div className="w-24 h-16 bg-white flex justify-center items-center text-black font-semibold rounded-b-lg border-t border-gray-300">
                    {year}
                </div>
            </div>

            <p className="text-sm text-white max-w-xs max-h-16 pr-10 line-clamp-3 overflow-hidden">
                {content}
            </p>

        </div>
    )
}

EventContent.propTypes = {
    content: PropTypes.string,
    created_at: PropTypes.string.isRequired,

};
