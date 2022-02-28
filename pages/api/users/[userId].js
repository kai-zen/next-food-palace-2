import { allUsersInfo } from "../../../allFoodsInfo";

export default function handler(req, res) {
    const { userId } = req.query;
    const user = allUsersInfo.find(u => {
        return u.id === parseInt(userId)
    })
    res.status(200).json(user)
}