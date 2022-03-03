import nc from 'next-connect';
import db from "../../../app/db";
import Comment from '../../../app/models/comment';

const handler = nc();

handler.get(async(req, res) => {
    await db.connect();
    const comments = await Comment.find({});
    await db.disconnect();
    res.send(comments);
});

export default handler;