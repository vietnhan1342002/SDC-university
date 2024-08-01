import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Dropdown({ title, solutions = [] }) {
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

function DropdownItem({ item }) {
    const [isSubmenuOpen, setSubmenuOpen] = useState(false);

    return (
        <div
            className="relative group"
            onMouseEnter={() => setSubmenuOpen(true)}
            onMouseLeave={() => setSubmenuOpen(false)}
        >
            <Link
                to={item.url}
                className="flex justify-between items-center gap-x-2 px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors duration-300 transform hover:scale-105"
            >
                {item.name}
                {/* Biểu tượng chỉ báo có submenu */}
                {item.subMenuItems && item.subMenuItems.length > 0 && (
                    <FaArrowRight />
                )}
            </Link>
            {/* Hiển thị Submenu chỉ khi có items và submenuOpen */}
            {item.subMenuItems && item.subMenuItems.length > 0 && (
                <div
                    className={`absolute bg-white shadow-lg rounded-md w-48 mt-1 left-full top-0 transition-opacity duration-300 transform scale-95 ${isSubmenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                    style={{ boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }}
                >
                    <div className="p-2">
                        {item.subMenuItems.map((subItem) => (
                            <a
                                key={subItem.id}
                                href={subItem.url}
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md transition-colors duration-300"
                            >
                                {subItem.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

Dropdown.propTypes = {
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

DropdownItem.propTypes = {
    item: PropTypes.shape({
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
    }).isRequired,
};

export default Dropdown;
