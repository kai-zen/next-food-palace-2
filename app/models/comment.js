import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    foodId: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    body: { type: String, required: true },
    chip: { type: String, required: true },
    rate: { type: Number, required: true, default: 0 },
    isDeleted: { type: Boolean, required: true, default: false }
}, {
    timestamps: true,
});

const Comment = mongoose.models.Comment || mongoose.model('Comment', commentSchema);
export default Comment;