import jwt from 'jsonwebtoken';

export const signToken = (user) => {
    return jwt.sign({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: "12345678",
            isAdmin: user.isAdmin,
            isDeleted: false
        },
        process.env.JWT_SECRET, {
            expiresIn: '7d'
        }
    )
}