const express = require("express");
const Router = require("./router/index.js");
require('dotenv').config();

const app = express();

const port = 3000;

app.use(express.json());


app.use('/', Router);

app.listen(port, () => {
    console.log(`Server Starting port ${port}`);
});
