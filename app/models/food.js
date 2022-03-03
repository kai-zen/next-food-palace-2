import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    rate: { type: Number, required: true, default: 0 },
    orderQuantity: { type: Number, required: true, default: 0 },
    isDeleted: { type: Boolean, required: true, default: false }
}, {
    timestamps: true,
});

const Food = mongoose.models.Food || mongoose.model('Food', foodSchema);
export default Food;