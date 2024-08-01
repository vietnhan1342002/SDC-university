import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchAllTrainingSlices, fetchTrainingDetail } from '@/redux/Training/trainingSlice';
import TrainingCourseItem from '../components/TraningCourseItem';

function TrainingPlanCourseDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Lấy toàn bộ trạng thái cần thiết chỉ bằng một useSelector
    const { trainingDetail, isLoading, isError } = useSelector(state => state.training);

    useEffect(() => {
        if (id) {
            dispatch(fetchTrainingDetail(id));
        }
        dispatch(fetchAllTrainingSlices());
    }, [id, dispatch]);

    if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
    if (isError) return <p className="text-center text-red-500">Error loading news details.</p>;

    return (
        <div className='flex flex-col items-center w-[80%] p-5 mx-auto'>
            <div className="flex gap-6">
                <div className=' flex flex-[3]'>
                    {trainingDetail ? (
                        <TrainingCourseItem
                            title={trainingDetail.title}
                            body={trainingDetail.body}
                        />
                    ) : (
                        <p className="text-center text-gray-500">Không có tin tức nào để hiển thị</p>
                    )}
                </div>
                
            </div>
            <button
                className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300'
                onClick={() => navigate('/trainingPlanCourse')}
            >
                Trở lại
            </button>
        </div>
    );
}

TrainingPlanCourseDetail.propTypes = {
    id: PropTypes.string, // Đảm bảo id là bắt buộc
  };
  
  export default TrainingPlanCourseDetail;
  