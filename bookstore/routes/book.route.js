let express = require("express")
const { bookController } = require("../controller")
const upload = require("../middleware/upload")

let route = express.Router()

route.get("/get", bookController.get_book)
route.post("/register", upload.single("profile"), bookController.add_book)
route.delete("/delete/:id",bookController.delete_book)
route.put("/update/:id",bookController.update_book)


module.exports = route;