import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getDataApi } from "../../utils/fetchDataApi";


// Thunks
export const fetchAllTrainingSlices = createAsyncThunk('training/fetchAllTrainingSlices', async () => {
    const res = await getDataApi('training-fields');
    return res.data;
});

export const fetchTrainingDetail = createAsyncThunk('training/fetchTrainingDetail', async (id) => {
    const res = await getDataApi(`training-fields/${id}`);
    return res.data;
});



export const trainingSlice = createSlice({
    name: 'training',
    initialState: {
        listTraining: [],
        trainingDetail: null,
        isLoading: false,
        isError: false,
    },
    reducers: {
        setTrainingSliceData: (state, action) => {
            state.id = action.payload.id;
            state.title = action.payload.title;
            state.body = action.payload.body;
        },
        setTrainingDetail: (state, action) => {
            state.trainingDetail = action.payload;
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
            // Xử lý fetchAlltrainingSlices
            .addCase(fetchAllTrainingSlices.pending, handlePending)
            .addCase(fetchAllTrainingSlices.fulfilled, (state, action) => {
                handleFulfilled(state, action);
                state.listTraining = action.payload;
            })
            .addCase(fetchAllTrainingSlices.rejected, handleRejected)

            // Xử lý fetchtrainingDetail
            .addCase(fetchTrainingDetail.pending, handlePending)
            .addCase(fetchTrainingDetail.fulfilled, (state, action) => {
                handleFulfilled(state);
                state.trainingDetail = action.payload;
            })
            .addCase(fetchTrainingDetail.rejected, handleRejected)
    }


})

export const { setTrainingSliceData, setTrainingDetail } = trainingSlice.actions;
export default trainingSlice.reducer