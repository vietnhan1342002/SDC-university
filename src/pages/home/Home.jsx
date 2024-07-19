import Banner from "./Banner";
import Content from "./Content";

const Home = () => {
    return (
        <div className="min-h-full flex flex-col mx-28">
            <Banner />
            <div className="flex h-screen">
                <Content />
            </div >
            <div className="flex p-10 bg-orange-400 h-[38rem]">
                <div className="flex flex-1 bg-red-50">
                    sự kiện
                </div>
                <div className="flex flex-1 bg-red-500">
                    Ảnh và vide
                </div>
            </div>
            
        </div>
    );
};

export default Home;
