import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getDataApi } from "../../utils/fetchDataApi";


export const fetchAllNewsSlices = createAsyncThunk('news/fetchAllNewsSlices', async () => {
    const res = await getDataApi('news');
    return res.data
})

export const fetchNewsDetail = createAsyncThunk('news/fetchNewsDetail', async (id) => {
    const res = await getDataApi(`news/${id}`);
    return res.data
})



export const newsSlice = createSlice({
    name: 'news',
    initialState: {
        listNews: [],
        newsDetail: null,
        isLoading: false,
        isError: false
    },
    reducers: {
        setNewsSliceData: (state, action) => {
            state.id = action.payload.id;
            state.title = action.payload.title;
            state.body = action.payload.body;
        },
        setNewsDetail: (state, action) => {
            state.newsDetail = action.payload;
        }
    },

    extraReducers(builder) {
        builder
            //allNews
            .addCase(fetchAllNewsSlices.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchAllNewsSlices.fulfilled, (state, action) => {
                state.listNews = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchAllNewsSlices.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message
            })
            //newsDetail
            .addCase(fetchNewsDetail.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchNewsDetail.fulfilled, (state, action) => {
                state.newsDetail = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchNewsDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message
            });
    }


})

export const { setNewsSliceData, setNewsDetail } = newsSlice.actions;
export default newsSlice.reducer