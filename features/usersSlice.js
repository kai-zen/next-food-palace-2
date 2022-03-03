import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    loggedInUser: Cookies.get('loggedInUser') ?
        JSON.parse(Cookies.get('loggedInUser')) : null,
    signInSnacks: [],
    signUpSnacks: [],
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
        emptySignInSnack: (state) => {
            state.signInSnacks.length = 0;
        },
        emptySignUpSnack: (state) => {
            state.signUpSnacks.length = 0;
        },
    },
});

export default usersSlice.reducer;
export const { signIn, logout, emptySignInSnack, emptySignUpSnack } =
usersSlice.actions;