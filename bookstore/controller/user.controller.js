const { userSchema } = require("../models")
const { userServices } = require("../services")




let getData = async (req, res) => {
    try {
        let user = await userServices.getUser()

        res.status(200).json({
            message: "user get success",
            user,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let addData = async (req, res) => {
    try {

        let body = req.body;
        console.log(req.file);

        let user = await userServices.addUser(body)

        res.status(201).json({
            message: "user register success",
            user,
        })


    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}

let deleteData = async (req, res) => {
    try {

        let { id } = req.params;

        let user = await userServices.deleteUser(id)

        res.status(200).json({
            message: "user delte success",
            user,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let userupdate = async (req, res) => {
    try {

        let { id } = req.params;
        let body = req.body;

        let newbody = {
            id,
            ...body,
        }

        let user = await userServices.updateUser(id, body)

        res.status(201).json({
            message: "user update success",
            newbody,
        })


    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}



module.exports = { getData, addData, deleteData, userupdate }