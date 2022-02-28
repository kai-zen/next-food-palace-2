import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './../features/themeSlice'
import foodsReducer from './../features/foodsSlice'
import usersReducer from './../features/usersSlice'
import commentsReducer from './../features/commentsSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        foods: foodsReducer,
        users: usersReducer,
        comments: commentsReducer,
    },
})