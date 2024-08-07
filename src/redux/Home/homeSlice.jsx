import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postDataApi, getDataApi } from "../../utils/fetchDataApi";

// Thunks
export const fetchHomeViews = createAsyncThunk('home/fetchHomeViews', async () => {
    const res = await getDataApi('page-view/view'); // Gọi API để lấy số lượt xem
    return { views: res.data.views }; // Cập nhật cấu trúc dữ liệu trả về
});

export const incrementHomeViews = createAsyncThunk('home/incrementHomeViews', async () => {
    await postDataApi('page-view/increment'); // Gọi API để tăng số lượt xem
    // Gọi lại API để lấy số lượt xem mới
    const res = await getDataApi('page-view/view');
    console.log('Page view incremented.');
    return { views: res.data.views }; // Cập nhật cấu trúc dữ liệu trả về
});

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        views: 0,
        isLoading: false,
        isError: false,
        error: null,
    },
    reducers: {
        getHomeViews: (state, action) => {
            state.views = action.payload;
        }
    },
    extraReducers(builder) {

        const handlePending = (state) => {
            state.isLoading = true;
            state.isError = false;
        };

        const handleFulfilled = (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.views = action.payload.views;
        };

        const handleRejected = (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        };

        builder
            .addCase(fetchHomeViews.pending, handlePending)
            .addCase(fetchHomeViews.fulfilled, handleFulfilled)
            .addCase(fetchHomeViews.rejected, handleRejected)
            .addCase(incrementHomeViews.pending, handlePending)
            .addCase(incrementHomeViews.fulfilled, handleFulfilled)
            .addCase(incrementHomeViews.rejected, handleRejected);
    }
});

export const { getHomeViews } = homeSlice.actions;
export default homeSlice.reducer;
