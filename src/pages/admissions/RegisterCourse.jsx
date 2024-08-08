import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HeaderAboutUs from "../aboutUs/components/HeaderAboutUs";
import InputInfoRegister from "./components/InputInfoRegister";
import { fetchAllTrainingSlices } from "@/redux/Training/trainingSlice";
import AdmissionInfo from "./components/AdmissionInfo";

const RegisterCourse = () => {
    const [activeTab, setActiveTab] = useState('cao-dang');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [selectedMajor, setSelectedMajor] = useState('');

    const dispatch = useDispatch();
    const listTraining = useSelector(state => state.training.listTraining);

    useEffect(() => {
        dispatch(fetchAllTrainingSlices());
    }, [dispatch]);

    useEffect(() => {
        if (listTraining.length > 0) {
            setSelectedMajor(listTraining[0].title);
        }
    }, [listTraining]);

    const renderTabContent = () => {
        if (activeTab === 'cao-dang') {
            return (
                <form className="p-5 rounded flex flex-col items-center justify-center">
                    <InputInfoRegister label="Họ và tên" title="Nhập họ và tên" inputValue={name} setInputValue={setName} />
                    <InputInfoRegister label="Số điện thoại" title="Nhập số điện thoại" inputValue={phone} setInputValue={setPhone} />
                    <InputInfoRegister label="Địa chỉ" title="Nhập địa chỉ" inputValue={address} setInputValue={setAddress} />

                    {listTraining.length > 0 && (
                        <div className="flex flex-col w-full mt-2">
                            <label htmlFor="major" className="mb-2 text-lg font-bold">
                                Chọn ngành học:
                            </label>
                            <select
                                id="major"
                                value={selectedMajor}
                                onChange={(e) => setSelectedMajor(e.target.value)}
                                className="border border-gray-300 rounded p-3 w-full"
                            >
                                {listTraining.map((major) => (
                                    <option key={major.id} value={major.title}>
                                        {major.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    <button className="bg-blue-500 text-white p-3 rounded mt-4 w-full md:w-56">Đăng ký</button>
                </form>
            );
        }

        return (
            <div className="px-20 py-5 bg-red-400 rounded text-center">
                Đăng ký xét tuyển trung cấp
            </div>
        );
    };

    return (
        <div className="px-4 md:px-48 py-5 flex flex-col gap-5">
            <div className="px-4 md:px-44">
                <HeaderAboutUs title={'ĐĂNG KÝ XÉT TUYỂN TRỰC TUYẾN'} />
            </div>

            <div className="flex justify-between gap-10 mx-auto">
                <button
                    className={`px-4 md:px-20 py-5 ${activeTab === 'cao-dang' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    onClick={() => setActiveTab('cao-dang')}
                >
                    Đăng ký xét tuyển cao đẳng
                </button>
                <button
                    className={`px-4 md:px-20 py-5 ${activeTab === 'trung-cap' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    onClick={() => setActiveTab('trung-cap')}
                >
                    Đăng ký xét tuyển trung cấp
                </button>
            </div>

            <div className="mt-4">
                {renderTabContent()}
            </div>

            <div className="flex items-center my-4">
                <hr className="flex-grow border-t-2 border-gray-300" />
                <span className="px-10 py-2 text-lg  font-bold text-red-500 border border-gray-300">LƯU Ý</span>
                <hr className="flex-grow border-t-2 border-gray-300" />
            </div>
            <AdmissionInfo />
        </div>
    );
};

export default RegisterCourse;
