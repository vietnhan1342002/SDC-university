import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import DropdownItem from '../Dropdown/DropDownItem'; // Đảm bảo bạn đã import component DropdownItem

function DropdownMenu({ title, solutions = [] }) {
    const navigate = useNavigate();

    // Hàm xử lý click để điều hướng
    const handleClick = () => {
        if (solutions.length === 1) {
            // Nếu chỉ có 1 phần tử, điều hướng đến URL
            navigate(solutions[0].url);
        }
    };

    return (
        <div className="relative inline-block group">
            {/* Nút chính */}
            <button
                onClick={handleClick}
                className="flex items-center gap-x-2 text-2xl font-semibold text-white hover:text-black px-3 py-2 rounded-md transition-transform duration-300 transform hover:scale-105"
            >
                {title}
            </button>
            {/* Menu chính */}
            {solutions.length > 1 && (
                <div className="absolute left-1/2 z-10 w-56 max-w-xs -translate-x-1/2 px-2 bg-white shadow-lg ring-1 ring-gray-900/10 rounded-lg hidden group-hover:block transition-transform duration-300 transform scale-95 group-hover:scale-100">
                    <div className="py-2">
                        {solutions.map((item) => (
                            <DropdownItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}



DropdownMenu.propTypes = {
    title: PropTypes.string.isRequired,
    solutions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            subMenuItems: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    url: PropTypes.string.isRequired,
                })
            ),
        })
    ).isRequired,
};

export default DropdownMenu;
