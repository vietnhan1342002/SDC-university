import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';

function NotifiItem({ title, content, isVisible, onClick, }) {

    // Làm sạch và phân tích HTML
    const sanitizeAndParseHtml = (html) => {
        if (!html) return '';
        const cleanedHtml = DOMPurify.sanitize(html);
        return parse(cleanedHtml);
    };

    return (
        <div onClick={onClick} className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ">
            <div className={`text-lg font-bold text-gray-700 max-w-4xl flex flex-col gap-5 ${isVisible ? 'max-h-[68px] pr-10 overflow-hidden' : ''}`}>
                <p className="text-lg font-bold text-blue-600 hover:underline max-w-4xl max-h-16 pr-10 line-clamp-3 overflow-hidden">
                    {title}
                </p>
                <div className="text-base font-normal">{sanitizeAndParseHtml(content)}</div>
            </div>
        </div>
    );
}

NotifiItem.propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    newsDetailLink: PropTypes.string.isRequired,
    isVisible: PropTypes.bool
};

export default NotifiItem;
