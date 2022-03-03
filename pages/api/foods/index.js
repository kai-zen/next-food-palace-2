import nc from 'next-connect';
import db from "../../../app/db";
import Food from "../../../app/models/food";

const handler = nc();

handler.get(async(req, res) => {
    await db.connect();
    const foods = await Food.find({});
    await db.disconnect();
    res.send(foods);
});

export default handler;