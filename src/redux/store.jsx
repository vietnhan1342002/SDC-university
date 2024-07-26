import { configureStore } from '@reduxjs/toolkit';


import overviewSlice from './AboutUs/OverviewSlice';
import newsSlice from './News/newsSlice';
import searchSlice from './Search';

const store = configureStore({
    reducer: {
        overview: overviewSlice,
        news: newsSlice,
        search: searchSlice,
    },
});

export default store;
