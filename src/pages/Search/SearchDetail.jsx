import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSearchNews } from "../../redux/Search";
import { useDispatch, useSelector } from "react-redux";

const SearchDetail = () => {
    const { keyword } = useParams(); // Lấy giá trị keyword từ URL
    const dispatch = useDispatch();

    const listItems = useSelector(state => state.search.listItems);
    const isLoading = useSelector(state => state.search.isLoading);
    const isError = useSelector(state => state.search.isError);

    useEffect(() => {
        if (keyword) {
            dispatch(fetchSearchNews(keyword))
                .unwrap()
                .then(listItems => {
                    console.log('Search results:', listItems);
                })
                .catch(error => {
                    console.error('Error fetching search results:', error);
                });
        }
    }, [keyword, dispatch]);


    if (isError === true && isLoading === false) {
        return <div>
            Something went wrong
        </div>
    }

    if (isError === false && isLoading === true) {
        return <div>
            Loading...
        </div>
    }

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {isError && !isLoading && <div>Something went wrong</div>}
            {!isLoading && !isError && listItems.length === 0 && (
                <div>No results found</div>
            )}
            {listItems && listItems.length > 0 && listItems.map(item => (
                <div key={item.id} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-5">
                        <p className="text-2xl font-bold">{item.title}</p>
                        <img src='/images/banner.jpg' alt="" />
                    </div>
                </div>
            ))}
        </div>
    );



};

export default SearchDetail;
