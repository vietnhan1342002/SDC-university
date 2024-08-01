import { Link } from 'react-router-dom';

import { aboutUs, infomation, admmission, news, recruitment } from '../../lib/consts/navigation';
import Logo, { InfoUniversity } from '../Logo';
import Search from './Search';
import DropDownWithSubmenu from '../DropDownTest';

const Header = () => {

    return (
        <header className="bg-white h-auto flex flex-col w-full items-center just">
            <div className="relative w-full xl:flex xl:flex-row justify-between items-center py-2 px-5 xl:px-56">
                <div className="py-2 flex items-center gap-2">
                    <Logo />
                    <InfoUniversity />
                </div>


                {/* Search */}
                <Search />
            </div>

            {/* Nav */}
            <div className="bg-blue-400 gap-2 md:gap-20 md:py-3 w-full flex flex-col md:flex-row justify-center  rounded-md ">
                <Link to="/" className="text-xl font-bold leading-6 text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md">
                    Trang Chủ
                </Link>
                <DropDownWithSubmenu title="Giới thiệu" solutions={aboutUs} />
                <DropDownWithSubmenu title="Đào tạo" solutions={infomation} />
                <DropDownWithSubmenu title="Tuyển Sinh" solutions={admmission} />
                <DropDownWithSubmenu title="Tin Tức" solutions={news} />
                <DropDownWithSubmenu title="Tuyển dụng" solutions={recruitment} />
            </div>
        </header>
    );
};


export default Header;

