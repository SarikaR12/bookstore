let express = require("express")
let userRoute = require("./user.route");
let authorRoute = require("./author.route")
let bookRoute = require("./book.route");
let orderRoute = require("./order.route");
let routes = express.Router();

routes.use("/user", userRoute);
routes.use("/author", authorRoute);
routes.use("/book", bookRoute);
routes.use("/order", orderRoute);

module.exports = routes;