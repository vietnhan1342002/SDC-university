import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

export default DropdownItem;