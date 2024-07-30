import PropTypes from 'prop-types';
import { formatDateTime } from '@/utils/formatDate';

function LatestContent({ listNews }) {



    const latestNews = listNews.reduce((latest, item) => {
        const currentNewsDate = new Date(item.created_at);
        const latestNewsDate = latest ? new Date(latest.created_at) : new Date(0);
        return currentNewsDate > latestNewsDate ? item : latest;
    }, null);

    const formattedDateTime = formatDateTime(latestNews.created_at);

    return (
        <div>
            <div className="text-center text-2xl font-bold py-3">
                Tin tức mới nhất
            </div>
            {latestNews ? (
                <div className="flex flex-col gap-2">
                    <img src="images/banner.jpg" alt="Banner" className="w-full h-full object-contain" />
                    <div className="flex items-center gap-4">
                        <p className="text-lg text-yellow-600 font-semibold">TIN TỨC</p>
                        <p className="text-sm text-gray-400 font-base border-l-2 pl-4">{formattedDateTime}</p>
                    </div>
                    <div className="flex flex-col ">
                        <h1 className="text-2xl font-bold text-gray-700 py-3">{latestNews.title}</h1>
                        <p className="text-base text-gray-500 font-base">
                            {latestNews.body}
                        </p>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-500">Không có tin tức nào để hiển thị.</p>
            )}
        </div>
    )
}

export default LatestContent


LatestContent.propTypes = {
    listNews: PropTypes.array,
}