import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../features/comments.slice';

export default configureStore({
    reducer : {
        comments : commentsReducer,
    },
});