// src/slices/searchSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDataApi } from '../utils/fetchDataApi';

export const fetchSearch = createAsyncThunk(
  'search/fetchSearch',
  async ({ type, keyword }, { rejectWithValue }) => {
    try {
      const res = await getDataApi(`search/${type}?keyword=${keyword}`);
      console.log(`search/${type}?keyword=${keyword}`);
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
    items: {
      news: [],
      trainingFields: [],
      events: [],
    },
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
    clearItems: (state) => {
      state.items = {
        news: [],
        trainingFields: [],
        events: [],
      };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        switch (state.type) {
          case 'news':
            state.items.news = action.payload;
            break;
          case 'training-fields':
            state.items.trainingFields = action.payload;
            break;
          case 'event':
            state.items.events = action.payload;
            break;
          default:
            break;
        }
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

export const { setSearchQuery, setSearchType, setSelectedResult, clearItems } = searchSlice.actions;
export default searchSlice.reducer;
