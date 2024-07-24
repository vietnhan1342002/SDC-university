import { configureStore } from '@reduxjs/toolkit';


import overviewSlice from './AboutUs/OverviewSlice';

const store = configureStore({
    reducer: {
        overview: overviewSlice,
    },
});

export default store;
