import { allFoodsInfo } from "../../../allFoodsInfo";

export default function handler(req, res) {
    let favLength = 0
    for (let i = 0; i < allFoodsInfo.length; i++) {
        if (allFoodsInfo[i].isItInFav) {
            favLength++
        }
    }
    res.status(200).json(favLength)
}