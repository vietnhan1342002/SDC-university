import { useDispatch } from "react-redux";
import Banner from "./Banner";
import Content from "./Content";
import Event from "./Event";
import { useEffect } from "react";
import { fetchAllNewsSlices } from "@/redux/News/newsSlice";
import { fetchAllEvents } from "@/redux/Event/eventSlice";
import { incrementHomeViews } from "@/redux/Home/homeSlice";
import { fetchAllNotifi } from "@/redux/Notifi/notifiSlice";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllNewsSlices())
        dispatch(fetchAllEvents())
        dispatch(incrementHomeViews());
        dispatch(fetchAllNotifi())
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
