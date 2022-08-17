const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const logging = require("./routes/logging");
const names = require("./routes/names");

app.use(bodyParser.json(), logging, names);

app.listen(8000);
console.log("this is running");