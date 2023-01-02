const express = require("express");
const pageRouter = express.Router();
const userRoute = require("../models/Users");
const brandRoute = require("../models/Brands");


pageRouter.use('/users',userRoute);
pageRouter.use('/brands',brandRoute);

pageRouter.use('/product', (req, res) => {
    console.log('product istek geldi');
    res.end();
});

pageRouter.use('/owner', (req, res) => {
    console.log('owner istek geldi');
    res.end();
});


module.exports = pageRouter;