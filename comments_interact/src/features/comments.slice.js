import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
    name: "comments",
    initialState: {},
    reducers: {
        setComments: (state, { payload }) => {
            state.comments = payload;
        }
    }
})


export const { setComments } = commentsSlice.actions;
export default commentsSlice.reducer;