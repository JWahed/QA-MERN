const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const end = require('./routes/end');
const logging = require('./routes/logging');
const names = require('./routes/names');

// const mongoose = require('mongoose');

// mongoose.connect

app.use(bodyParser.json(), logging, names, end);
app.listen(8000);

console.log('this is running');
