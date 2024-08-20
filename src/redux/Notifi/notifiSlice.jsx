import { getDataApi } from '@/utils/fetchDataApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchNotifi = createAsyncThunk(
    'notifi/fetchNotifi',  // Đổi tên action type
    async ({ department }, { rejectWithValue }) => {
        try {
            const res = await getDataApi(`notifi/${department}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchAllNotifi = createAsyncThunk(
    'notifi/fetchAllNotifi',  // Đổi tên action type
    async () => {
        const res = await getDataApi('notifi');
        return res.data;
    }
);

export const fetchNotifiDetail = createAsyncThunk(
    'notifi/fetchNotifiDetail',  // Đổi tên action type
    async (id) => {
        const res = await getDataApi(`notifi/${id}`);
        return res.data;
    }
);

export const notifiSlice = createSlice({
    name: 'notifi',
    initialState: {
        training: [],
        student: [],
        finance: [],

        listtNotifi: [],
        notifiDetail: null,
        
        isLoading: false,
        isError: false,
        error: null,
        department: 'daotao',
        selectedResult: null,
    },
    reducers: {
        setNotifiType(state, action) {
            state.department = action.payload;
        },
        setSelectedResult(state, action) {
            state.selectedResult = action.payload;
        },
        setNotifiSliceData: (state, action) => {
            state.id = action.payload.id;
            state.title = action.payload.title;
            state.content = action.payload.content;
        },
        setNotifiDetail: (state, action) => {
            state.notifiDetail = action.payload;
        },
    },
    extraReducers: (builder) => {
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
            .addCase(fetchNotifi.pending, handlePending)
            .addCase(fetchNotifi.fulfilled, (state, action) => {
                handleFulfilled(state, action);
                switch (state.department) {
                    case 'daotao':
                        state.training = action.payload;
                        break;
                    case 'CTSV':
                        state.student = action.payload;
                        break;
                    case 'taichinh':
                        state.finance = action.payload;
                        break;
                    default:
                        break;
                }
            })
            .addCase(fetchNotifi.rejected, handleRejected)
            .addCase(fetchAllNotifi.pending, handlePending)
            .addCase(fetchAllNotifi.fulfilled, (state, action) => {
                handleFulfilled(state, action);
                state.listtNotifi = action.payload;
            })
            .addCase(fetchAllNotifi.rejected, handleRejected)
            .addCase(fetchNotifiDetail.pending, handlePending)
            .addCase(fetchNotifiDetail.fulfilled, (state, action) => {
                handleFulfilled(state);
                state.notifiDetail = action.payload;
            })
            .addCase(fetchNotifiDetail.rejected, handleRejected);
    },
});

export const { setNotifiType, setSelectedResult, setNotifiSliceData, setNotifiDetail } = notifiSlice.actions;
export default notifiSlice.reducer;
