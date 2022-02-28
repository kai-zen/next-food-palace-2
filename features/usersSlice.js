import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [{
        id: 0,
        firstName: "Ali",
        lastName: "Razipur",
        email: "razipurali@gmail.com",
        password: "12345678",
        isAdmin: true,
        isDeleted: false
    }],
    loggedInUser: [],
    signInSnacks: [],
    signUpSnacks: [],
}
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        signUp: (state, payload) => {
            const isEmailInSystem = state.users.filter(theUser => {
                return theUser.email === payload.payload.email
            })
            if (isEmailInSystem[0]) {
                state.signUpSnacks.push({
                    id: state.signUpSnacks.length,
                    severity: 'error',
                    message: 'email is already in the system',
                    open: 'true',
                })
            } else {
                state.users.push(payload.payload);
                state.signUpSnacks.push({
                    id: state.signUpSnacks.length,
                    severity: 'success',
                    message: 'You signed up, now you can sign in',
                    open: 'true',
                })

            }
        },
        signIn: (state, payload) => {
            const user = state.users.filter(theUser => {
                return theUser.email === payload.payload.email
            })
            if (!user[0]) {
                state.signInSnacks.push({
                    id: state.signInSnacks.length,
                    severity: 'error',
                    message: 'email is not in the system',
                    open: 'true',
                })
                return
            } else {
                if (user[0].isDeleted) {
                    state.signInSnacks.push({
                        id: state.signInSnacks.length,
                        severity: 'error',
                        message: 'You\'re banned',
                        open: 'true',
                    })
                    return
                }
                const isPasswordTrue = user[0].password === payload.payload.password;
                if (!isPasswordTrue) {
                    state.signInSnacks.push({
                        id: state.signInSnacks.length,
                        severity: 'error',
                        message: 'password is not true',
                        open: 'true',
                    })
                } else {
                    state.loggedInUser[0] = user[0];

                }
            }
        },
        logout: (state) => {
            state.loggedInUser.length = 0;

        },
        emptySignInSnack: (state) => {
            state.signInSnacks.length = 0;
        },
        emptySignUpSnack: (state) => {
            state.signUpSnacks.length = 0;
        },
        toggleDeleteUser: (state, payload) => {
            const index = state.users.findIndex(user => {
                return user.id === payload.payload.id
            });
            state.users[index].isDeleted = !state.users[index].isDeleted

        },
        toggleAdminUser: (state, payload) => {
            const index = state.users.findIndex(user => {
                return user.id === payload.payload.id
            });
            state.users[index].isAdmin = !state.users[index].isAdmin

        },
    }
})

export default usersSlice.reducer;
export const { signUp, signIn, logout, emptySignInSnack, emptySignUpSnack, toggleDeleteUser, toggleAdminUser } = usersSlice.actions;