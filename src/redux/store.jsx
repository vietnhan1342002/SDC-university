import { configureStore } from '@reduxjs/toolkit';


import overviewSlice from './AboutUs/OverviewSlice';
import newsSlice from './News/newsSlice';
import searchSlice from './searchSlice';
import trainingSlice from './Training/trainingSlice';
import eventSlice from './Event/eventSlice';
import homeSlice from './Home/homeSlice';
import notifiSlice from './Notifi/notifiSlice'

const store = configureStore({
    reducer: {
        overview: overviewSlice,
        news: newsSlice,
        search: searchSlice,
        training: trainingSlice,
        event: eventSlice,
        home: homeSlice,
        notifi: notifiSlice,
    },
});

export default store;
