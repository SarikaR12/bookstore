const { authorServices } = require("../services")

let get_author = async (req, res) => {
    try {
        let author = await authorServices.fetchAuthor()
        res.status(200).json({
            message: "author get success",
            author,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let add_author = async (req, res) => {
    try {
        let body = req.body;
        console.log(req.file);

        let author = await authorServices.addAuthor(body);

        res.status(201).json({
            message: "author add success",
            author,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let delete_author = async (req, res) => {
    try {

        let { id } = req.params;

        let author = await authorServices.deleteauthor(id)

        res.status(200).json({
            message: "author delete success",
            author,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let update_author = async (req, res) => {
    try {

        let { id } = req.params;
        let body = req.body;

        let newbody = {
            id,
            ...body,
        }

        let author = await authorServices.updateauthor(id, body)

        res.status(201).json({
            message: "author update success",
            newbody,
        })


    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = { get_author, add_author, delete_author, update_author }