import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    lowerLimit: 0,
    higherLimit: 4
}

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setPage: (state, action) => {
            console.log('pagination action', action.payload);
            state.lowerLimit = 4*(action.payload-1);
            state.higherLimit = 4*(action.payload);
        },
    }
    
})

export default paginationSlice.reducer;
export const {setPage} = paginationSlice.actions;