// src/components/SearchDetail.js

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearItems, fetchSearch, setSearchQuery, setSearchType } from '../../redux/searchSlice';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const SearchDetail = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.search.items);
  const query = useSelector((state) => state.search.query);
  const type = useSelector((state) => state.search.type);

  const dispatch = useDispatch();

  const handleResultClick = (item) => {
    // Xử lý khi nhấp vào một kết quả, nếu cần
    console.log(item);
  };

  const handleInputChange = (e) => {

    // Xử lý khi nhập vào ô search
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSelect = (type) => {
    dispatch(setSearchType(type));
    dispatch(clearItems())
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchSearch({ type, keyword: query }));
    dispatch(setSearchQuery(""));
  }

  const renderItems = () => {
    let currentItems = [];
    switch (type) {
      case 'news':
        currentItems = items.news;
        break;
      case 'training-fields':
        currentItems = items.trainingFields;
        break;
      case 'event':
        currentItems = items.events;
        break;
      default:
        break;
    }
    return currentItems.length > 0 ? (
      currentItems.map((item, index) => (
        <li key={index} onClick={() => handleResultClick(item)}>
          {item.title}
        </li>
      ))
    ) : (
      <div>
        <p>No results found.</p>
      </div>
    );
  };


  return (
    <div className='flex flex-col justify-center items-center mx-20 my-2 border-2 border-gray-300 rounded-sm'>
      <form className='w-11/12 mx-20 my-2 flex flex-col gap-2' onSubmit={handleSubmit}>
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
              <SelectValue placeholder="Tìm kiếm theo..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="news">
                  Tin tức
                </SelectItem>
                <SelectItem value="training-fields">Đào tạo</SelectItem>
                <SelectItem value="event">Sự kiện</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className='flex justify-center'>
          <button type="submit" className='p-2 bg-blue-300 w-20 rounded-sm'>Gửi</button>
        </div>

      </form>

      <ul>
        {renderItems()}

      </ul>
      <button onClick={() => navigate('/')}>Back to Search</button>
    </div>
  );
};

export default SearchDetail;


