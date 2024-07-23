import PropTypes from 'prop-types';
import { IoMailOutline } from "react-icons/io5";

export default function HeaderAboutUs({title}) {
    return (
        <div className="flex p-8 justify-between items-center bg-blue-500 my-7  rounded-md ">
            <h1 className="text-4xl font-bold text-white">
                {title}
            </h1>
            <div className="flex gap-2 bg-orange-500 items-center px-10 py-5 rounded-xl">
                <IoMailOutline size={30} />
                <div className="flex flex-col items-center">
                    <div className="text-xl">
                        Tư vấn tuyển sinh
                    </div>
                    <div className="text-sm">
                        tuyensinh@gmail.com
                    </div>
                </div>
            </div>

        </div>
    )
}

HeaderAboutUs.propTypes = {
    title: PropTypes.string.isRequired,
};

