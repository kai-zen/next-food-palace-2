import { allFoodsInfo } from "../../../allFoodsInfo";

export default function handler(req, res) {
    const { foodId } = req.query;
    const food = allFoodsInfo.find(f => {
        return f.id === parseInt(foodId)
    })
    res.status(200).json(food)
}