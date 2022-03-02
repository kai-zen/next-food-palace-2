import bcrypt from "bcryptjs/dist/bcrypt";

export const allUsersInfo = [{
    id: 0,
    firstName: "Ali",
    lastName: "Razipur",
    email: "razipurali@gmail.com",
    password: bcrypt.hashSync('12345678'),
    isAdmin: true,
    isDeleted: false
}]