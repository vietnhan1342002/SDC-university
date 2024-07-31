import { configureStore } from '@reduxjs/toolkit';


import overviewSlice from './AboutUs/OverviewSlice';
import newsSlice from './News/newsSlice';
import searchSlice from './searchSlice';
import trainingSlice  from './Training/trainingSlice';

const store = configureStore({
    reducer: {
        overview: overviewSlice,
        news: newsSlice,
        search: searchSlice,
        training: trainingSlice,
    },
});

export default store;
