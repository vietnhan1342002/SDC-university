// import { CiSearch } from "react-icons/ci"
// import { useDispatch, useSelector } from "react-redux";

// import { Link, useNavigate } from "react-router-dom";
// import { performSearch, setSearchQuery, setSelectedResult } from "../../redux/Search";

// const Search = () => {

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { query, results, isLoading, isError, listItems, error } = useSelector((state) => state.search);

//     const handleInputChange = (event) => {
//         dispatch(setSearchQuery(event.target.value));
//     };

//     const handleSearchClick = () => {
//         dispatch(performSearch());
//     };

//     const handleResultClick = (result) => {
//         dispatch(setSelectedResult(result));
//         navigate(`/search/news/${result.title.replace('Result for "', '').replace('"', '')}`);
//       };

//     return (
//         <div>

//             <div className="py-2 flex flex-1 flex-col justify-center items-start md:items-end">
//                 <div className='relative'>

//                     <input
//                         className="focus:outline-none active:outline-none border border-gray-400 py-2 px-3 rounded-sm w-[22rem] pl-10"
//                         type="text"
//                         placeholder="Tìm kiếm..."

//                         value={query}
//                         onChange={handleInputChange}
//                     />

//                     <button disabled={isLoading}>
//                         {isLoading ? 'Searching...' : 'Search'}

//                         <Link to={`/search/news/${query}`} onClick={handleSearchClick}>
//                             <CiSearch className='absolute text-gray-400 right-4 hover:text-black top-3 size-5' />
//                         </Link>
//                     </button>
//                     {isError && <p>Error: {error}</p>}

//                     <div>
//                         <h2>Results:</h2>
//                         <ul>
//                             {listItems.map((item, index) => (
//                                 <li key={index} onClick={() => handleResultClick(item)}>
//                                     {item.title}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Search

// src/components/Search.js

import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch, setSearchQuery } from '../../redux/searchSlice';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { useRef } from 'react';

const Search = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { query, isLoading } = useSelector((state) => state.search);
    const type = 'news';
    const inputRef = useRef();

    const handleInputChange = (event) => {
        dispatch(setSearchQuery(event.target.value));
    };

    const handleSearchClick = () => {
        dispatch(fetchSearch({ type, keyword: query }));
        navigate(`/search-detail/${query}`);
        setSearchQuery('')
    };

    return (
        <div className='relative className="py-2 flex flex-1 flex-col justify-center items-start md:items-end '>
            <input
                ref={inputRef}
                className="focus:outline-none active:outline-none border border-gray-400 py-2 px-3 rounded-sm w-[22rem]"
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
            />
            <button onClick={handleSearchClick} disabled={isLoading} >
                <CiSearch className='absolute text-gray-400 right-4 hover:text-black top-2 size-6' />
            </button>
        </div>
    );
};

export default Search;
