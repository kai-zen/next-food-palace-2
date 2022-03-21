import jwt from 'jsonwebtoken';

export const signToken = (user) => {
    return jwt.sign({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET
    );
};