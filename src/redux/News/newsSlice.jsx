import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getDataApi } from "../../utils/fetchDataApi";


export const fetchAllNewsSlices = createAsyncThunk('news/fetchAllNewsSlices', async () => {
    const res = await getDataApi('news');
    return res.data
})



export const newsSlice = createSlice({
    name: 'news',
    initialState: {
        listNews: [],
        isLoading: false,
        isError: false
    },
    reducers: {
        getNewsSliceData: (state, action) => {
            state.id = action.payload.id;
            state.title = action.payload.title;
            state.body = action.payload.body;
        },
    },

    extraReducers(builder) {
        builder
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
    }


})

export const { getNewsSliceData } = newsSlice.actions;
export default newsSlice.reducer