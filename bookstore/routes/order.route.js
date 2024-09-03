let express = require("express");
const { getOrder } = require("../controller/order.controller");
const { orderController } = require("../controller");

let route = express.Router()

route.get("/get", orderController.get_order);
route.post("/register", orderController.post_order);
route.delete("/delete/:id", orderController.delete_order);
route.put("/update/:id", orderController.update_order)

module.exports = route;