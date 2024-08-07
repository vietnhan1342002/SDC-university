import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import HeaderAboutUs from "../../aboutUs/components/HeaderAboutUs";
import { fetchAllTrainingSlices, fetchTrainingDetail } from "@/redux/Training/trainingSlice";
import TrainingCourseItem from "../components/TraningCourseItem";

const TrainingPlanCourse = () => {
    const dispatch = useDispatch();
    const listTraining = useSelector(state => state.training.listTraining);

    useEffect(() => {
        dispatch(fetchAllTrainingSlices());
    }, [dispatch]);

    const handleResultClick = (item) => {
        // Xử lý khi nhấp vào một kết quả, nếu cần
        dispatch(fetchTrainingDetail(item.id));
    };

    return (
        <div className="flex flex-col m-5 mx-auto w-[70%]">
            <HeaderAboutUs title='KẾ HOẠCH ĐÀO TẠO NGHÀNH NGHỀ' />
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-medium">NGÀNH HỌC</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {listTraining.map((item) => (
                        <TrainingCourseItem 
                            onclick={() => handleResultClick(item)} // Chỉnh sửa ở đây
                            key={item.id} 
                            title={item.title} 
                            body={item.body} 
                            thumbnailTrainingFields={item.thumbnailTrainingFields}                                                                                  
                            trainingDetailLink={`/trainingPlanCourse/${item.id}`}
                            isNotDetail={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

TrainingPlanCourse.propTypes = {
    jobs: PropTypes.arrayOf(
        PropTypes.shape({
            thumbnailTrainingFields: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    )
};

export default TrainingPlanCourse;
