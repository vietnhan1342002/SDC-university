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
} from "@/components/ui/select";
import ListComponent from './SearchList';

const SearchDetail = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.search.items);
  const query = useSelector((state) => state.search.query) || ''; // Đảm bảo query luôn là chuỗi
  const type = useSelector((state) => state.search.type) || ''; // Đảm bảo type luôn có giá trị mặc định

  const dispatch = useDispatch();

  const handleResultClick = (item) => {
    // Xử lý khi nhấp vào một kết quả, nếu cần
    console.log(item);
    navigate(`/${type}/${item.id}`);
  };

  const handleInputChange = (e) => {
    // Xử lý khi nhập vào ô search
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSelect = (value) => {
    dispatch(setSearchType(value));
    dispatch(clearItems());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) { // Kiểm tra query không rỗng
      dispatch(fetchSearch({ type, keyword: query }));
      dispatch(setSearchQuery(""));
    }
  };

  return (
    <div className='flex flex-col justify-center items-center mx-20 my-2 border-2 border-gray-300 rounded-sm p-2'>
      <form className='w-11/12 mx-auto my-2 flex flex-col gap-2' onSubmit={handleSubmit}>
        <input
          className="focus:outline-none border border-gray-300 py-2 px-3 rounded-lg w-full"
          type="text"
          value={query} // Đảm bảo giá trị là chuỗi
          onChange={handleInputChange}
          placeholder="Tìm kiếm..."
        />

        <div className='w-full'>
          <Select onValueChange={handleSelect}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Tìm kiếm theo..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="news">Tin tức</SelectItem>
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

      <div className='w-11/12 mx-auto'>
        <ListComponent type={type} items={items} handleResultClick={handleResultClick} />
      </div>
    </div>
  );
};

export default SearchDetail;
