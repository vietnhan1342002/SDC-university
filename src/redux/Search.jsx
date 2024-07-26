import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getDataApi } from "../utils/fetchDataApi";



export const fetchSearchNews = createAsyncThunk('search/fetchSearchNews', async (keyword, { rejectWithValue }) => {
    try {
        const res = await getDataApi(`search/news?keyword=${keyword}`);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});




export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        listItems: [],
        isLoading: false,
        isError: false
    },
    reducers: {
        getSearchSliceData: (state, action) => {
            const { id, title, body } = action.payload;
            state.id = id;
            state.title = title;
            state.body = body;
        },
    },

    extraReducers(builder) {
        builder
            .addCase(fetchSearchNews.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchSearchNews.fulfilled, (state, action) => {
                state.listItems = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchSearchNews.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message
            })
    }


})

export const { getSearchSliceData } = searchSlice.actions;
export default searchSlice.reducer