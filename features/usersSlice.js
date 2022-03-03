import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loggedInUser: {},
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
            state.loggedInUser = {};
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