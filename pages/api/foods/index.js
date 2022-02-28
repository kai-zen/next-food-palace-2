import { allFoodsInfo } from "../../../allFoodsInfo";

export default function handler(req, res) {
    res.status(200).json({ allFoods: allFoodsInfo })
}