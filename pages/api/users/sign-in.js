import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../app/models/user';
import db from '../../../app/db';
import { signToken } from '../../../app/auth';

const handler = nc();

handler.post(async(req, res) => {
    await db.connect();
    const user = await User.findOne({ email: req.body.email });
    await db.disconnect();
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = signToken(user);
            res.send({
                token,
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                isAdmin: user.isAdmin,
            });
        } else {
            res.status(401).send({ message: 'Wrong password' });
        }
    } else {
        res.status(401).send({ message: 'This Email has no account in our app!' });
    }
});

export default handler;