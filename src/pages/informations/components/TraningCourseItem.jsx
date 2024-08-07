
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const TrainingCourseItem = ({ id, thumbnailTrainingFields, title, body, trainingDetailLink, onClick, isNotDetail }) => {
    return (
        <div key={id} onClick={onClick} className=" bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center gap-5">

            <Link to={trainingDetailLink}>
                {thumbnailTrainingFields ? <img
                    src={thumbnailTrainingFields}
                    alt={title}
                    className={`${isNotDetail ? 'h-32' : 'h-[80svh] w-full'} rounded-lg object-fill mb-4`}
                /> : <div></div>}
                <p className={`text-xl  font-semibold text-gray-800 text-center`}>{title}</p>
            </Link>
            <div className={`text-gray-600 
            ${isNotDetail ? "text-center max-w-xs max-h-18 pr-10 line-clamp-3 overflow-hidden" : ""}`}> {parse(body)}</div>

        </div >

    );
};

export default TrainingCourseItem;

TrainingCourseItem.propTypes = {
    onClick: PropTypes.func,
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    thumbnailTrainingFields: PropTypes.string,
    trainingDetailLink: PropTypes.string,
    isNotDetail: PropTypes.bool
}
