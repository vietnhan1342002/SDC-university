import { fetchNewsDetail } from '@/redux/News/newsSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import NewsItem from './components/NewsItem';
import { useNavigate } from 'react-router-dom';

function NewsDetails({ id }) {
  const dispatch = useDispatch();

  const { newsDetail, isLoading, isError } = useSelector(state => state.news);
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      dispatch(fetchNewsDetail(id));
    }
  }, [id, dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading news details.</p>;

  return (
    <div className='flex flex-col items-center'>

      {newsDetail ? (
        <>
          <NewsItem title={newsDetail.title} body={newsDetail.body} created_at={newsDetail.created_at} />
        </>
      ) : (
        <p>No news details available.</p>
      )}
      <button className='px-4 py-2 bg-blue-300 w-[24rem]' onClick={() => navigate('/news')}>Trở lại</button>
    </div>
  );
}

export default NewsDetails;


NewsDetails.propTypes = {
  id: PropTypes.string,

}