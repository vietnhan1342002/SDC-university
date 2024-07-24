import { useDispatch, useSelector } from "react-redux";
import HeaderAboutUs from "./components/HeaderAboutUs";
import { useEffect } from "react";
import { fetchAllOverviews } from "../../redux/AboutUs/OverviewSlice";




const Overview = () => {
    const dispatch = useDispatch();
    const listContents = useSelector(state => state.overview.listContents);
    const isLoading = useSelector(state => state.overview.isLoading);
    const isError = useSelector(state => state.overview.isError);


    useEffect(() => {
        dispatch(fetchAllOverviews())
    }, [dispatch])

    if(isError === true && isLoading === false){
        return <div>
            Something went wrong
        </div>
    }

    if(isError === false && isLoading === true){
        return <div>
            Loading...
        </div>
    }

    return (
        <div className="flex flex-col m-5 px-52 gap-10">
            <HeaderAboutUs title={'TỔNG QUAN VỀ TRƯỜNG'} />

            {

                listContents && listContents.length > 0 && listContents.map(item => (
                    <div key={item.id} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-5">
                            <p className="text-2xl font-bold">{item.title}</p>
                            <p className="text-2xl font-bold">{item.body}</p>
                            <img src='images/banner.jpg' alt="" />

                        </div>
                    </div>
                ))}


        </div>
    )
}

export default Overview;

