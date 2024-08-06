
// src/components/Search.js

import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch, setSearchQuery } from '../../redux/searchSlice';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { useRef, useState } from 'react';

const Search = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading } = useSelector((state) => state.search);
    const [localQuery, setLocalQuery] = useState('');
    const inputRef = useRef();

    const handleInputChange = (event) => {
        dispatch(setSearchQuery(setLocalQuery(event.target.value)));

    };

    const handleSearchClick = () => {
        dispatch(fetchSearch({ type: 'news', keyword: localQuery }));
        navigate(`/search-detail/${localQuery}`);
        setLocalQuery('');
    };

    return (
        <div className='relative className="py-2 flex flex-1 flex-col justify-center items-start md:items-end '>
            <input
                ref={inputRef}
                className="focus:outline-none active:outline-none border border-gray-400 py-2 px-3 rounded-sm w-[22rem]"
                type="text"
                value={localQuery}
                onChange={handleInputChange}
                placeholder="Tìm kiếm"
            />
            <button onClick={handleSearchClick} disabled={isLoading || !localQuery.trim()} >
                <CiSearch className={`absolute text-gray-400 right-4 top-2 size-6  ${localQuery.trim() ? 'hover:text-black cursor-pointer' : ''}`} />
            </button>
        </div>
    );
};

export default Search;
