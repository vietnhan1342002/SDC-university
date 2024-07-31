
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TrainingCourseItem = ({id, title, body, trainingDetailLink }) => {
    return (
        <div key={id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            
                <Link to={trainingDetailLink}>
                    <img
                        src='images/job.jpg'
                        alt={title}
                        className="w-32 h-32 rounded-lg object-cover mb-4"
                    />
                    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                </Link>
                <p className="text-gray-600 text-center">{body}</p>
            
        </div >

    );
};

export default TrainingCourseItem;

TrainingCourseItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    trainingDetailLink: PropTypes.string,
}
