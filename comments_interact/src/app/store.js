import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user.slice';
import commentsReducer from '../features/comments.slice';

export default configureStore({
    reducer : {
        comments : commentsReducer,
        currentUser : userReducer,
    },
});