import nc from 'next-connect';
import db from "../../../app/db";
import Food from "../../../app/models/food";

const handler = nc();

handler.get(async(req, res) => {
    const { foodId } = req.query;
    await db.connect();
    const food = await Food.findOne({ id: foodId })
    await db.disconnect();
    res.send(food);
});

export default handler;