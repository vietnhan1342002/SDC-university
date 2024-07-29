// src/slices/searchSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDataApi } from '../utils/fetchDataApi';

export const fetchSearch = createAsyncThunk(
  'search/fetchSearchNews',
  async ({type, keyword}, { rejectWithValue }) => {
    try {
      const res = await getDataApi(`search/${type}?keyword=${keyword}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    results: [],
    type: '',
    selectedResult: null,
    isLoading: false,
    isError: false,
    error: null,
    listItems: [],
  },
  reducers: {
    setSearchQuery(state, action) {
      state.query = action.payload;
    },
    setSearchType(state, action) {
      state.type = action.payload;
    },
    setSelectedResult(state, action) {
      state.selectedResult = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.listItems = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { setSearchQuery, setSearchType, setSelectedResult } = searchSlice.actions;
export default searchSlice.reducer;
