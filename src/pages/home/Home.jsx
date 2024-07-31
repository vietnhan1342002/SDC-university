import { useDispatch } from "react-redux";
import Banner from "./Banner";
import Content from "./Content";
import Event from "./Event";
import { useEffect } from "react";
import { fetchAllNewsSlices } from "@/redux/News/newsSlice";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllNewsSlices())
    }, [dispatch])

    return (
        <div className="min-h-full flex flex-col mx-28">
            <Banner />
            <Content />
            <Event />

        </div>
    );
};

export default Home;
