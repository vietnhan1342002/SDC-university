import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import HeaderAboutUs from "../aboutUs/components/HeaderAboutUs";
import { fetchAllTrainingSlices } from "@/redux/Training/trainingSlice";
import TrainingCourseItem from "./components/TraningCourseItem";


const TrainingPlanCourse = () => {

    const dispatch = useDispatch();
    const listTraining = useSelector(state => state.training.listTraining);

    useEffect(() => {
        dispatch(fetchAllTrainingSlices())
    }, [dispatch])

    return (
        <div className="flex flex-col m-5 px-52">
            <HeaderAboutUs title='KẾ HOẠCH ĐÀO TẠO NGHÀNH NGHỀ' />
            <div className="px-16 flex flex-col">
                <h1 className="text-xl font-medium">NGÀNH HỌC</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {listTraining.map((item) => (
                        <TrainingCourseItem key={item.id} title={item.title} body={item.body} trainingDetailLink={`/training-fileds/${item.id}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

TrainingPlanCourse.propTypes = {
    jobs: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    )
}

export default TrainingPlanCourse;
