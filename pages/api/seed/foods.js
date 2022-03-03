import nc from 'next-connect';
import { allFoodsInfo } from '../../../allFoodsInfo';
import db from '../../../app/db';
import Food from '../../../app/models/food';

const handler = nc();

handler.get(async(req, res) => {
    await db.connect();
    await Food.deleteMany();
    await Food.insertMany(allFoodsInfo);
    await db.disconnect();
    res.send({ message: 'seeded successfully' });
});

export default handler;