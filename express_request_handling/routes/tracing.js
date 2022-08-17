const router = require("express").Router();

// middleware
router.use((req, res, next) => {
    const logEntry = `host: ${req.hostname}
    ip: ${req.ip}
    method: ${req.method}
    path: ${req.path}
    time: ${new Date()}`;
    console.log(logEntry);
    return next();
});

module.exports = router;