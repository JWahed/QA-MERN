const express = require('express');

const app = express();

app.use((err, req, res, next) => {
    console.log(err.stack);
    return next(err);
});

app.use((err, req, res, next) => {
    return res.status(500).send(err.message);
});

app.get("/throwError", (req, res, next) => {
    return next(Error("Message"));
});

app.listen(4000);