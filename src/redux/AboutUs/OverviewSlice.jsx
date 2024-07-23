import { createSlice } from "@reduxjs/toolkit"

export const overviewSlice = createSlice({
    name: 'overview',
    initialState: {
        id: '',
        content: '',
        src: '',
    },
    reducers: {
        setOverviewData: (state, action) => {
            state.id = action.payload.id;
            state.content = action.payload.content;
            state.src = action.payload.src;
        },
    },
})

export const { setOverviewData } = overviewSlice.actions;
export default overviewSlice.reducer