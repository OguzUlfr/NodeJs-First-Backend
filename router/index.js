const express = require("express");
const pageRouter = express.Router();
const userRoute = require("../models/Users.js");
const brandRoute = require("../models/Brands.js");
const categoryRoute = require("../models/Category.js");
const ordersRoute = require("../models/Orders.js");
const productRoute = require("../models/Product.js");
const paymentRoute = require("../models/Payment.js");


pageRouter.use("/users", userRoute);
pageRouter.use("/brand", brandRoute);
pageRouter.use("/category", categoryRoute);
pageRouter.use("/order", ordersRoute);
pageRouter.use("/payment", paymentRoute);
pageRouter.use("/product", productRoute);

module.exports = pageRouter;