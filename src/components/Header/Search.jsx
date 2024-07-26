import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci"

import { Link } from "react-router-dom";

const Search = () => {
    const [searchValue, setSearchValue] = useState('');

    const inputRef = useRef();


    const handleSearch = () => {
        const currentValue = inputRef.current.value;
        setSearchValue(currentValue);// Call fetch function immediately on click
        inputRef.current.focus();
    }



    return (
        <div>

            <div className="py-2 flex flex-1 flex-col justify-center items-start md:items-end">
                <div className='relative'>

                    <input
                        ref={inputRef}
                        className="focus:outline-none active:outline-none border border-gray-400 py-2 px-3 rounded-sm w-[22rem] pl-10"
                        type="text"
                        placeholder="Tìm kiếm..."
                    />

                    <Link to={`/search/news/${searchValue}`} onClick={handleSearch}>
                        <CiSearch className='absolute text-gray-400 right-4 hover:text-black top-3 size-5' />
                    </Link>



                </div>
            </div>

        </div>
    )
}

export default Search