// import { allUsersInfo } from "../../../allUsersInfo";

export default function handler(req, res) {
    let loggedInUser = [];
    if (req.method === 'GET') {
        res.status(200).json(loggedInUser);
    }
    // else if (req.method === 'POST') {
    //     const user = allUsersInfo.find(theUser => {
    //         return theUser.email === req.body.email
    //     })
    //     if (!user) {
    //         // state.signInSnacks.push({
    //         //     id: state.signInSnacks.length,
    //         //     severity: 'error',
    //         //     message: 'email is not in the system',
    //         //     open: 'true',
    //         // })
    //         return
    //     } else {
    //         if (user.isDeleted) {
    //             // state.signInSnacks.push({
    //             //     id: state.signInSnacks.length,
    //             //     severity: 'error',
    //             //     message: 'You\'re banned',
    //             //     open: 'true',
    //             // })
    //             return
    //         }
    //         const isPasswordTrue = user.password === req.body.password;
    //         if (!isPasswordTrue) {
    //             // state.signInSnacks.push({
    //             //     id: state.signInSnacks.length,
    //             //     severity: 'error',
    //             //     message: 'password is not true',
    //             //     open: 'true',
    //             // })
    //             return
    //         } else {
    //             loggedInUser[0] = user;
    //             res.status(201).json();
    //         }
    //     }
    // }
}