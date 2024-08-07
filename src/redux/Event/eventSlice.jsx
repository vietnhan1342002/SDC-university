import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getDataApi } from "../../utils/fetchDataApi";


export const fetchAllEvents = createAsyncThunk('event/fetchAllEvents', async () => {
    const res = await getDataApi('event');
    return res.data
})



export const eventSlice = createSlice({
    name: 'event',
    initialState: {
        listEvents: [],
        isLoading: false,
        isError: false
    },
    reducers: {
        getEventData: (state, action) => {
            state.id = action.payload.id;
            state.content = action.payload.title;
            state.src = action.payload.body;
        },
    },

    extraReducers(builder) {
        builder
            .addCase(fetchAllEvents.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchAllEvents.fulfilled, (state, action) => {
                state.listEvents = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchAllEvents.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message
            })
    }


})

export const { getEventData } = eventSlice.actions;
export default eventSlice.reducer