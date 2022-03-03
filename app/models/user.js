import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    isDeleted: { type: Boolean, required: true, default: false },
}, {
    timestamps: true,
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;