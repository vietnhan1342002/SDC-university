import { configureStore } from '@reduxjs/toolkit';


import overViewReducer from './AboutUs/OverviewSlice';

const store = configureStore({
    reducer: {
        overView: overViewReducer,
    },
});

export default store;
