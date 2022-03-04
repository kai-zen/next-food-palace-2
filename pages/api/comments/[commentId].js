import db from "../../../app/db";
import Comment from "../../../app/models/comment";

export default async function handler(req, res) {
    const { commentId } = req.query;
    await db.connect();
    const comment = await Comment.findOne({ id: commentId })
    comment.overwrite({ isDeleted: !comment.isDeleted });
    await db.disconnect();
    res.status(200).json(comment)
}