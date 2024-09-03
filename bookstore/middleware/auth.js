let jwt = require("jsonwebtoken")

let createToken = (data) => {
    let token = jwt.sign(data, process.env.SECRET)
    return token;
}

let isLoing = (req, res, next) => {
    try {

        let token = req.cookies["token"]
        if (!token) {
            throw new Error("you are not login")
        }
        let user = jwt.verify(token, process.env.SECRET)

        req.user = user;
        next()

    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}
module.exports = { createToken, isLoing }