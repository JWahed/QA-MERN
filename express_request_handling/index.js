const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const tracing = require("./routes/tracing");
const names = require("./routes/names");

app.use(bodyParser.json(), tracing, names);

app.listen(8000);
console.log("this is running");