export default function handler(req, res) {
    res.status(200).json({
        allUsers: [{
            id: 0,
            firstName: "Ali",
            lastName: "Razipur",
            email: "razipurali@gmail.com",
            password: "12345678",
            isAdmin: true,
            isDeleted: false
        }]
    })
}