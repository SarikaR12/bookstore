let express = require("express")
const { userController } = require("../controller");
const upload = require("../middleware/upload");

let route = express.Router()

route.get("/get", userController.getData);
route.post("/register", upload.single("profile"), userController.addData);
route.delete("/delete/:id", userController.deleteData);
route.put("/update/:id", userController.userupdate)

module.exports = route;