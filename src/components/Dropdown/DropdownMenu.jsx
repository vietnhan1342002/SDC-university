import PropTypes from 'prop-types';

import DropdownItem from "./DropDownItem";


function DropdownMenu({ title, solutions = [] }) {
    return (
        <div className="relative inline-block group">
            {/* Nút chính */}
            <button className="flex items-center gap-x-2 text-xl font-semibold text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md transition-transform duration-300 transform hover:scale-105">
                {title}
            </button>
            {/* Menu chính */}
            <div className="absolute left-1/2 z-10 w-56 max-w-xs -translate-x-1/2 px-2 bg-white shadow-lg ring-1 ring-gray-900/10 rounded-lg hidden group-hover:block transition-transform duration-300 transform scale-95 group-hover:scale-100">
                <div className="py-2">
                    {solutions.map((item) => (
                        <DropdownItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
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
