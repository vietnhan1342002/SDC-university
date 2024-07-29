// src/components/SearchDetail.js

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchQuery } from '../../redux/Search';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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

  const handleSelect = (value) => {
    if (value === 'news') {
      navigate('/news');
    }
    // Thực hiện các hành động khác dựa trên giá trị chọn
  };


  return (
    <div className='flex flex-col justify-center items-center mx-20 my-2 border-2 border-gray-300 rounded-sm'>
      <form className='w-11/12 mx-20 my-2 flex flex-col gap-2'>
        <input
          className="focus:outline-none active:outline-none border border-gray-300 py-2 px-3 rounded-lg w-full "
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Tìm kiếm..."
        />

        <div>
          <Select onValueChange={handleSelect}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="news">
                  Tin tức
                </SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className='flex justify-center'>
          <button type="submit" className='p-2 bg-blue-300 w-20 rounded-sm'>Gửi</button>
          </div>

      </form>

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


