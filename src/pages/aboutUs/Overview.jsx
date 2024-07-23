// import { useDispatch } from "react-redux";
import HeaderAboutUs from "./components/HeaderAboutUs";
import { useEffect, useState } from "react";
import { getDataApi } from "../../utils/fetchDataApi";




const Overview = () => {
    // const dispatch = useDispatch();
    const [listContent, setListContent] = useState([]);


    useEffect(() => {
        getOverviewContent();
    }, [])

    const getOverviewContent = async () => {
        let res = await getDataApi('information');
        setListContent(res.data ? res.data : []);
        console.log(res.data);
    }

    return (
        <div className="flex flex-col m-5 px-52 gap-10">
            <HeaderAboutUs title={'TỔNG QUAN VỀ TRƯỜNG'} />

            {
            
            listContent&& listContent.length>0 && listContent.map(item => (
                <div key={item.id} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-5">
                        {/* <img src={item.src} alt="" /> */}
                        <p className="text-2xl font-bold">{item.title}</p>
                        <p className="text-2xl font-bold">{item.body}</p>

                    </div>
                </div>
            ))}


        </div>
    )
}

export default Overview;

