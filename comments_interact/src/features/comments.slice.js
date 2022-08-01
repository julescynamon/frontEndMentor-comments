import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
    name: "comments",
    initialState: null,
    reducers: {
        setComments: (state, actions) => {
            state.comments = actions.payload;
        }
    }
})


export const { setComments } = commentsSlice.actions;
export default commentsSlice.reducer;