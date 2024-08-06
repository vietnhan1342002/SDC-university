import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function BackPage({ page = '' }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (page) {
            window.scrollTo(0, 0);
            navigate(`/${page}`);
        }
    };

    return (
        <button
            className='mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
            onClick={handleClick}
            aria-label="Trở lại trang trước"
        >
            Trở lại
        </button>
    );
}
BackPage.propTypes = {
    page: PropTypes.string,
};

export default BackPage;
