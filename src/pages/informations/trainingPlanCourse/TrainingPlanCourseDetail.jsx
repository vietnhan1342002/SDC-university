import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { fetchAllTrainingSlices, fetchTrainingDetail } from '@/redux/Training/trainingSlice';
import TrainingCourseItem from '../components/TraningCourseItem';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import BackPage from '@/components/BackPage';

function TrainingPlanCourseDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    // Lấy toàn bộ trạng thái cần thiết chỉ bằng một useSelector
    const { listTraining, trainingDetail, isLoading, isError } = useSelector(state => state.training);

    useEffect(() => {
        if (id) {
            dispatch(fetchTrainingDetail(id));
        }
        dispatch(fetchAllTrainingSlices());
    }, [id, dispatch]);

    if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
    if (isError) return <p className="text-center text-red-500">Error loading news details.</p>;

    return (
        <div className='flex flex-col items-center w-[80%] p-5 mx-auto gap-2'>

            <div className='w-full'>
                {trainingDetail ? (
                    <TrainingCourseItem
                        thumbnailTrainingFields={trainingDetail.thumbnailTrainingFields}
                        title={trainingDetail.title}
                        body={trainingDetail.body}
                        isNotDetail={false}

                    />
                ) : (
                    <p className="text-center text-gray-500">Không có tin tức nào để hiển thị</p>
                )}
            </div>

            <div className='w-full bg-white p-6 rounded-lg shadow-md flex flex-col items-start justify-center'>
                {
                    listTraining.map((item) => (
                        <div key={item.id} className="flex items-center justify-center font-semibold text-lg">
                            <MdOutlineKeyboardDoubleArrowRight />
                            <Link to={`/trainingPlanCourse/${item.id}`}>{item.title}</Link>
                        </div>
                    )
                    )


                }
            </div>


            <BackPage page='TrainingPlanCourse' />
        </div>
    );
}

TrainingPlanCourseDetail.propTypes = {
    id: PropTypes.string, // Đảm bảo id là bắt buộc
};

export default TrainingPlanCourseDetail;
