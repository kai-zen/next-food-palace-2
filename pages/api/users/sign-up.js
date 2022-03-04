import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import db from '../../../app/db';
import { signToken } from '../../../app/auth';
import User from '../../../app/models/user';

const handler = nc();

handler.post(async(req, res) => {
    await db.connect();
    const emailError = await User.findOne({ email: req.body.email });
    if (emailError) {
        res.status(401).send({ message: 'This email is already signed up' });
    } else {
        const newUser = new User({
            id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            isAdmin: false,
            isDeleted: false,
        });
        const user = await newUser.save();
        const token = signToken(user);
        res.send({
            token,
            id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    }
    await db.disconnect();
});

export default handler;