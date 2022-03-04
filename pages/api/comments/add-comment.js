import { signToken } from "../../../app/auth";
import db from "../../../app/db";
import Comment from "../../../app/models/comment";

export default async function handler(req, res) {
    await db.connect();
    const newComment = new Comment({
        id: req.body.id,
        author: req.body.author,
        body: req.body.body,
        chip: req.body.chip,
        foodId: req.body.foodId,
        rate: req.body.rate,
        isDeleted: false,
    });
    const comment = await newComment.save();
    const token = signToken(comment);
    res.send({
        token,
        id: comment.id,
        body: comment.body,
        foodId: comment.foodId,
        isAdmin: comment.isDeleted,
    });
    await db.disconnect();
    res.status(200).json(newComment)
}