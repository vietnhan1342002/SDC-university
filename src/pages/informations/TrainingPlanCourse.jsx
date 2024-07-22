// import HeaderAboutUs from "../../components/HeaderAboutUs";
// import PropTypes from 'prop-types';
// import { jobs as defaultJobs } from "../../lib/consts/job"

// const TrainingPlanCourse = ({ jobs }) => {
//     const displayedJobs = jobs.length > 0 ? jobs : defaultJobs
//     return (
//         <div className="flex flex-col m-5">
//             <HeaderAboutUs title='KẾ HOẠCH ĐÀO TẠO NGHÀNH NGHỀ' />
//             <div className="px-16 flex flex-col">
//                 <h1 className="text-xl font-medium">NGÀNH HỌC</h1>
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

//                     {displayedJobs.map((item, index) => (
//                         <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
//                             <img src={item.img} alt={item.name} className="w-32 h-32 rounded-lg object-cover mb-4" />
//                             <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
//                             <p className="text-gray-600 text-center">{item.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// TrainingPlanCourse.propTypes = {
//     jobs: PropTypes.arrayOf(
//         PropTypes.shape({
//             img: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             description: PropTypes.string.isRequired
//         })
//     )
// }

// export default TrainingPlanCourse;

import PropTypes from 'prop-types';
import HeaderAboutUs from "../../components/HeaderAboutUs";
import { jobs as defaultJobs } from "../../lib/consts/job"; // Importing jobs and renaming it to defaultJobs

const TrainingPlanCourse = () => {
    // Use defaultJobs if jobs prop is undefined or null
    // const displayedJobs = jobs && jobs.length > 0 ? jobs : defaultJobs;

    return (
        <div className="flex flex-col m-5 px-52">
            <HeaderAboutUs title='KẾ HOẠCH ĐÀO TẠO NGHÀNH NGHỀ' />
            <div className="px-16 flex flex-col">
                <h1 className="text-xl font-medium">NGÀNH HỌC</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {defaultJobs.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                            <img src={item.img} alt={item.name} className="w-32 h-32 rounded-lg object-cover mb-4" />
                            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                            <p className="text-gray-600 text-center">{item.description}</p>
                        </div>
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
