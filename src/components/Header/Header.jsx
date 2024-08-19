import { aboutUs, admmission, home, news, notification, recruitment } from '../../lib/consts/navigation';
import Logo, { InfoUniversity } from '../Logo';
import Search from './Search';
import DropdownMenu from '../Dropdown/DropdownMenu';

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
            <DropdownMenu title="Trang Chủ" solutions={home} />
                <DropdownMenu title="Giới thiệu" solutions={aboutUs} />
                <DropdownMenu title="Thông Báo" solutions={notification} />
                <DropdownMenu title="Tuyển Sinh" solutions={admmission} />
                <DropdownMenu title="Tin Tức" solutions={news} />
                <DropdownMenu title="Tuyển dụng" solutions={recruitment} />
            </div>
        </header>
    );
};


export default Header;

