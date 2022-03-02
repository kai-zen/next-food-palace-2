import { configureStore } from '@reduxjs/toolkit';
import foodsReducer from './../features/foodsSlice'
import usersReducer from './../features/usersSlice'

export const store = configureStore({
    reducer: {
        foods: foodsReducer,
        users: usersReducer,
    },
})