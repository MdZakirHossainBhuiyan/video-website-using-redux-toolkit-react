import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tags: [],
    search: "",
    selectedAuthor: "",
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload);
        },
        tagRemove: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload);

            if(indexToRemove !== -1){
                state.tags.splice(indexToRemove, 1);
            }
        },
        searched: (state, action) => {
            state.search = action.payload;
        },
        reset: (state, action) => {
            state.tags = [];
            state.search = "";
            state.selectedAuthor = "";
        },
        authorSelected: (state, action) => {
            state.selectedAuthor = action.payload;
        }
    }
    
})

export default filterSlice.reducer;
export const {tagSelected, tagRemove, searched, reset, authorSelected} = filterSlice.actions;