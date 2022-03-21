import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken'

const initialState = {
    loggedInUser: Cookies.get('authToken') ?
        jwt.decode(JSON.parse(Cookies.get('authToken'))) : null,
};
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        signIn: (state, payload) => {
            state.loggedInUser = payload.payload;
        },
        logout: (state) => {
            Cookies.remove('loggedInUser');
            state.loggedInUser = null;
        },
    },
});

export default usersSlice.reducer;
export const { signIn, logout } = usersSlice.actions;