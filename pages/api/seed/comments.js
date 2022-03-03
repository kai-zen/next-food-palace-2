import nc from 'next-connect';
import { allCommentsInfo } from '../../../allCommentsInfo';
import db from '../../../app/db';
import Comment from '../../../app/models/comment';

const handler = nc();

handler.get(async(req, res) => {
    await db.connect();
    await Comment.deleteMany();
    await Comment.insertMany(allCommentsInfo);
    await db.disconnect();
    res.send({ message: 'seeded successfully' });
});

export default handler;