import PropTypes from 'prop-types';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import {Link} from 'react-router-dom' 

export default function Dropdown({ title, solutions = [] }) {
    return (
        <Popover className="relative">
            <PopoverButton className="items-center gap-x-1 text-xl font-bold leading-6 text-gray-900 hover:bg-gray-200 px-2 py-2 rounded-md">
                {title}
            </PopoverButton>

            <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-5 w-screen max-w-max -translate-x-1/2 px-4 transition-transform ease-out duration-200"
            >
                <div className="w-screen max-w-72 flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                        {solutions.map((item) => (
                            <div key={item.id} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                <div key={item.id} className="flex justify-start md:flex">
                                    <Link to={item.url} className="text-gray-900">
                                        {item.name}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </PopoverPanel>
        </Popover>
    );
}

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    solutions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
};
