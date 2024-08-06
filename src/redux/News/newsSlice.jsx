import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getDataApi, postDataApi } from "../../utils/fetchDataApi";


// Thunks
export const fetchAllNewsSlices = createAsyncThunk('news/fetchAllNewsSlices', async () => {
    const res = await getDataApi('news');
    return res.data;
});

export const fetchNewsDetail = createAsyncThunk('news/fetchNewsDetail', async (id) => {
    const res = await getDataApi(`news/${id}`);
    return res.data;
});

export const fetchViewsCounter = createAsyncThunk('news/fetchViewsCounter', async (id) => {
    const res = await postDataApi(`news/increment-view-count/${id}`);
    return res.data //{ id, views: res.data.views }; // Cập nhật cấu trúc dữ liệu trả về
});


export const newsSlice = createSlice({
    name: 'news',
    initialState: {
        listNews: [],
        newsDetail: null,
        isLoading: false,
        isError: false,
    },
    reducers: {
        setNewsSliceData: (state, action) => {
            state.id = action.payload.id;
            state.thumbnailNews = action.payload.thumbnailNews;
            state.title = action.payload.title;
            state.body = action.payload.body;
            state.descrription = action.payload.descrription;
        },
        setNewsDetail: (state, action) => {
            state.newsDetail = action.payload;
        },
    },

    extraReducers(builder) {

        const handlePending = (state) => {
            state.isLoading = true;
            state.isError = false;
        };

        const handleFulfilled = (state) => {
            state.isLoading = false;
            state.isError = false;
        };

        const handleRejected = (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        };
        builder
            // Xử lý fetchAllNewsSlices
            .addCase(fetchAllNewsSlices.pending, handlePending)
            .addCase(fetchAllNewsSlices.fulfilled, (state, action) => {
                handleFulfilled(state, action);
                state.listNews = action.payload;
            })
            .addCase(fetchAllNewsSlices.rejected, handleRejected)

            // Xử lý fetchNewsDetail
            .addCase(fetchNewsDetail.pending, handlePending)
            .addCase(fetchNewsDetail.fulfilled, (state, action) => {
                handleFulfilled(state);
                state.newsDetail = action.payload;
            })
            .addCase(fetchNewsDetail.rejected, handleRejected)

            // Xử lý fetchViewsCounter
            .addCase(fetchViewsCounter.pending, handlePending)
            .addCase(fetchViewsCounter.fulfilled, (state, action) => {
                handleFulfilled(state);
                const { id, views } = action.payload;
                const newsItem = state.listNews.find((news) => news.id === id);
                if (newsItem) {
                    newsItem.views = views;
                }
            })
            .addCase(fetchViewsCounter.rejected, handleRejected);
    }


})

export const { setNewsSliceData, setNewsDetail } = newsSlice.actions;
export default newsSlice.reducer