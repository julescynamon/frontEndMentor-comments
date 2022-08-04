import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
    name: "comments",
    initialState: {},
    reducers: {
        setComments: (state, { payload }) => {
            state.comments = payload;
        },
        updateScore: (state, { payload }) => {
            state.comments = state.comments.map((comment) => {
                if (comment.id === payload.id) {
                    return {
                        ...comment,
                        score: payload.score,
                    }
                } else {
                    return comment;
                }
            })
        }
    }
})


export const { setComments, updateScore } = commentsSlice.actions;
export default commentsSlice.reducer;