import bcrypt from "bcryptjs/dist/bcrypt";

export const allUsersInfo = [{
    id: 0,
    firstName: "Ali",
    lastName: "Razipur",
    email: "razipurali@gmail.com",
    password: bcrypt.hashSync('12345678'),
    isAdmin: true,
    isDeleted: false
}, {
    id: 1,
    firstName: "Mah",
    lastName: "Tayebi",
    email: "mah@mah.com",
    password: bcrypt.hashSync('12345678'),
    isAdmin: true,
    isDeleted: false
}]