import PropTypes from 'prop-types';
import { formatDateTime } from '@/utils/formatDate';
import { Link } from 'react-router-dom';

function LatestContent({ listNews }) {

    // Tìm tin tức mới nhất
    const latestNews = listNews.reduce((latest, item) => {
        const currentNewsDate = new Date(item.created_at);
        const latestNewsDate = latest ? new Date(latest.created_at) : new Date(0);
        return currentNewsDate > latestNewsDate ? item : latest;
    }, null);

    // Kiểm tra nếu có tin tức mới nhất và định dạng ngày giờ
    const formattedDateTime = latestNews ? formatDateTime(latestNews.created_at) : 'Không có tin tức';


    return (
        <div>
            {latestNews ? (
                <div className="flex flex-col gap-2">
                    <Link to={`/news/${latestNews.id}`}>
                        <img src={latestNews.thumbnailNews} alt="Banner" className="w-full h-full object-contain" />
                    </Link>
                    <div className="flex items-center gap-4">
                        <p className="text-lg text-yellow-600 font-semibold">TIN TỨC</p>
                        <p className="text-sm text-gray-400 font-base border-l-2 pl-4">{formattedDateTime}</p>
                    </div>
                    <div className="flex flex-col ">
                        <Link to={`/news/${latestNews.id}`}>
                            <h1 className="text-2xl font-bold text-gray-700 py-3">{latestNews.title}</h1>
                        </Link>

                        <p className="text-base text-gray-500 font-base">
                            {latestNews.description}
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