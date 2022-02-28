import { allComments } from "../../../allCommentsInfo";

export default function handler(req, res) {
    const { foodId } = req.query;
    let comments = allComments.filter(c => {
        return c.foodId === parseInt(foodId)
    });
    comments = comments.filter((comment) => {
        return !comment.isDeleted;
    });
    const thisFoodComments = [...comments].reverse();
    res.status(200).json(thisFoodComments)
}