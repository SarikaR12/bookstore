let express = require("express");
const { authorController } = require("../controller");
let route = express.Router();

route.get("/get", authorController.get_author)
route.post("/register",authorController.add_author)
route.delete("/delete/:id",authorController.delete_author)
route.put("/update/:id",authorController.update_author)

module.exports = route;