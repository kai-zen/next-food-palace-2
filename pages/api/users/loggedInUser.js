import bcrypt from 'bcryptjs';
import { allUsersInfo } from "../../../allUsersInfo";
import { signToken } from '../../../app/auth';

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json('hi')
    } else if (req.method === "POST") {
        const user = allUsersInfo.filter(u => u.email === req.body.email)
        if (user[0] && bcrypt.compareSync(req.body.password, user[0].password)) {
            const token = signToken(user);
            res.status(201).json({
                token,
                id: user[0].id,
                name: user[0].name,
                email: user[0].email,
                isAdmin: user[0].isAdmin,
            });
        } else {
            res.status(401).json({ message: 'Invalid user or password' });
        }
    }
}