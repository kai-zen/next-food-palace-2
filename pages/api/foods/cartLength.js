import { allFoodsInfo } from "../../../allFoodsInfo";

export default function handler(req, res) {
    let cartLength = 0
    for (let i = 0; i < allFoodsInfo.length; i++) {
        if (allFoodsInfo[i].isItInCart) {
            cartLength++
        }
    }
    res.status(200).json(cartLength)
}