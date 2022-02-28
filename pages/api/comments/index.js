import { allComments } from "../../../allCommentsInfo";

export default function handler(req, res) {
    res.status(200).json(allComments)
}