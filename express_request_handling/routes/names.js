const router = require('express').Router();
const Names = require('../model/names.schema');

// get
router.get('/', (req, res) => res.status(200).send('Hello, my name is Jakob!'));

// getAll
router.get('/all', async (req, res, next) => {
  try {
    const allNames = await Names.find();
    return res.status(200).json(allNames);
  } catch (err) {
    return next(err);
  }
});

// getById
router.get('/get/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    if (id === null || id === undefined) {
      return next({ statusCode: 400, message: 'Incorrect id' });
    }

    const name = await Names.findById(id);
    return res.status(200).json(name);
  } catch (err) {
    return next(err);
  }
});

// post new name
router.post('/post', async (req, res, next) => {
  try {
    const { name } = req.body;

    if (name === null || name === undefined) {
      return next({ statusCode: 400, message: 'Invalid name' });
    }

    const created = await Names.create(req.body);
    return res.status(201).json(created);
  } catch (err) {
    return next(err);
  }
});

// patch a name
router.patch('/updateName/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { query } = req;
    const updated = await Names.findByIdAndUpdate(id, query);

    return res.status(200).json(updated);
  } catch (err) {
    return next(err);
  }
});

// deleteById
router.delete('/delete/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Names.findByIdAndDelete(id);
    return res.status(204).json(deleted);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
