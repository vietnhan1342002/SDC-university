import Banner from "./Banner";
import Content from "./Content";
import Event from "./Event";

const Home = () => {
    return (
        <div className="min-h-full flex flex-col mx-28">
            <Banner />
            <Content />
            <Event />

        </div>
    );
};

export default Home;
