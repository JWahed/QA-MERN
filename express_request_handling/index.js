const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();

const end = require('./routes/end');
const logging = require('./routes/logging');
const names = require('./routes/names');

app.use(express.json());

const port = process.env.PORT || 10000;
const uri = process.env.DB_URI;

const { connection } = mongoose;

mongoose.connect(uri, { useNewUrlParser: true });
connection.once('open', () => {
  console.log('Successfully connected to DB');
});

app.use(express.json(), logging, names, end);

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;
