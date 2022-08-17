const router = require('express').Router();

// all unspecified endpoints
router.use('*', (req, res, next) => {
  const e = {
    status: 404,
    message: 'Wrong path in url',
  };
  const result = res.status(e.status).send(e.message);
  return next(result);
});

module.exports = router;
