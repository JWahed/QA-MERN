const router = require('express').Router();

// all unspecified endpoints
router.use('*', (req, res, next) => {
  const err = {
    status: 404,
    message: 'Wrong path in url',
  };
  const result = res.status(err.status).send(err.message);
  return next(result);
});

module.exports = router;
