import nc from 'next-connect';
import { allUsersInfo } from '../../../allUsersInfo';
import db from '../../../app/db';
import User from '../../../app/models/user';

const handler = nc();

handler.get(async(req, res) => {
    await db.connect();
    await User.deleteMany();
    await User.insertMany(allUsersInfo);
    await db.disconnect();
    res.send({ message: 'seeded successfully' });
});

export default handler;