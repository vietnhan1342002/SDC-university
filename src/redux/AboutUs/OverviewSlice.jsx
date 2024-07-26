import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getDataApi } from "../../utils/fetchDataApi";


export const fetchAllOverviews = createAsyncThunk('overview/fetchAllOverviews', async () => {
    const res = await getDataApi('about-us');
    return res.data
})



export const overviewSlice = createSlice({
    name: 'overview',
    initialState: {
        listContents: [],
        isLoading: false,
        isError: false
    },
    reducers: {
        getOverviewData: (state, action) => {
            state.id = action.payload.id;
            state.content = action.payload.content;
            state.src = action.payload.src;
        },
    },

    extraReducers(builder) {
        builder
            .addCase(fetchAllOverviews.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchAllOverviews.fulfilled, (state, action) => {
                state.listContents = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchAllOverviews.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message
            })
    }


})

export const { getOverviewData } = overviewSlice.actions;
export default overviewSlice.reducer