// src/components/SearchDetail.js

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchQuery } from '../../redux/Search';

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

const SearchDetail = () => {
  const navigate = useNavigate();
  const listItems = useSelector((state) => state.search.listItems);
  const query = useSelector((state) => state.search.query);

  const dispatch = useDispatch();

  const handleResultClick = (item) => {
    // Xử lý khi nhấp vào một kết quả, nếu cần
    console.log(item);
  };

  const handleInputChange = (e) => {
    // Xử lý khi nhập vào ô search
    dispatch(setSearchQuery(e.target.value));
  };


  return (
    <div className='flex flex-col items-center mx-20 my-2 boder border-gray-300 rounded-lg bg-sky-200'>
      <div className='w-11/12 mx-20 my-2 bg-red-300 flex flex-col'>
        <input
          className="focus:outline-none active:outline-none border border-gray-400 py-2 px-3 rounded-sm w-full "
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Tìm kiếm..."
        />

        {/* <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div> */}
      </div>

      <ul>
        {listItems.length > 0 ? (
          listItems.map((item, index) => (
            <li key={index} onClick={() => handleResultClick(item)}>
              {item.title}
            </li>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </ul>
      <button onClick={() => navigate('/')}>Back to Search</button>
    </div>
  );
};

export default SearchDetail;


