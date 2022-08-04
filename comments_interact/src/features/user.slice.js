import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "currentUser",
    initialState: {},
    reducers: {
        setUsers: (state, { payload }) => {
            state.currentUser = payload;
        }
    }
})


export const { setUsers } = userSlice.actions;
export default userSlice.reducer;