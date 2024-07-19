import Logo, { InfoUniversity } from "./Logo";
import { FaFacebook, FaGoogle, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    const sizeIcon = 30;
    return (
        <div className="flex flex-col  bg-gray-400 pt-4 border-t-2 border-black">
            <div className="flex md:flex-row flex-col gap-5 py-2 px-36">
                <div className=" w-full h-1/2 pl-2 ">
                    <div className="flex flex-col justify-center items-start h-full gap-3">
                        <div className="flex flex-row items-center gap-5">
                            <Logo />
                            <InfoUniversity isFooter={true} />
                        </div>
                        <p className="text-white text-base font-semibold mt-5">Số lượt truy cập:</p>
                        <p className="text-white text-base font-semibold">Hiện số lượt truy cập</p>
                        <div className="flex flex-row gap-2">
                            <button className=" opacity-50 hover:opacity-100  rounded-full shadow">
                                <a href='https://www.facebook.com/congthong.nguyen.790'><FaFacebook size={sizeIcon} className="rounded-full" />
                                </a>
                            </button>

                            <button className=" opacity-50 hover:opacity-100  rounded-full shadow">
                                <FaInstagramSquare size={sizeIcon} className="rounded-full" />
                            </button>
                            <button className=" opacity-50 hover:opacity-100  rounded-full shadow">
                                <FaGoogle size={sizeIcon} className="rounded-full" />

                            </button>

                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 w-full h-1/2">
                    <div className="flex flex-col justify-center items-center h-full">
                        <p className="text-gray-600 text-2xl">Map</p>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-dashed border-gray-600 py-2 text-white text-xs text-center">
                © Copyright © 2024 SDC-TNT.
            </div>

        </div>

    )
}

export default Footer;
