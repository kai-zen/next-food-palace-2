import nc from 'next-connect';
import db from "../../../app/db";
import User from '../../../app/models/user';

const handler = nc();

handler.get(async(req, res) => {
    await db.connect();
    const users = await User.find({});
    await db.disconnect();
    res.send(users);
});

export default handler;