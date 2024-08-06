import PropTypes from 'prop-types';
import TextContent from "./TextContent"

function ItemContent({ listNews }) {
    return (
        <div className='flex flex-col gap-2 h-full'>
            {listNews && listNews.length > 0 ? (
                listNews.slice(0, 4).map((item) => (
                    <div key={item.id} className="flex gap-2">
                        <TextContent thumbnailNews={item.thumbnailNews} title={item.title} time={item.created_at} />
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">Không có tin tức nào để hiển thị.</p>
            )}
        </div>
    )
}

export default ItemContent


ItemContent.propTypes = {
    listNews: PropTypes.array,
}