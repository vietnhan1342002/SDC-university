// src/slices/notifiSlice.js

import { getDataApi } from '@/utils/fetchDataApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchNotifi = createAsyncThunk(
    'notifi/fetchNotifi',
    async ({ department }, { rejectWithValue }) => {
        try {
            const res = await getDataApi(`notifi/${department}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const notifiSlice = createSlice({
    name: 'notifi',
    initialState: {
        training: [],  // Di chuyển các thuộc tính này lên cấp gốc
        student: [],
        finance: [],

        isLoading: false,
        isError: false,
        error: null,
        department: 'daotao', // Khởi tạo giá trị mặc định cho department
        selectedResult: null,
    },
    reducers: {
        setNotifiType(state, action) {
            state.department = action.payload;
        },
        setSelectedResult(state, action) {
            state.selectedResult = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotifi.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(fetchNotifi.fulfilled, (state, action) => {
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
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchNotifi.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload || action.error.message;
            });
    },
});


export const { setNotifiType, setSelectedResult } = notifiSlice.actions;
export default notifiSlice.reducer;
