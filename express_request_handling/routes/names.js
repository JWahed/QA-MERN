const router = require('express').Router();

// get
router.get('/', (req, res) => res.status(200).send('Hello, my name is Jakob!'));

// getAll
const names = ['Sky', 'Abdullah', 'Fred', 'Tom', 'Rayhan', 'Jakob'];

router.get('/all', (req, res) => res.status(200).send(names));

// getById
router.get('/get/:id', (req, res) => res.status(200).send(names[req.params.id]));

// post new name
// router.use(express.json());

router.post('/post', (req, res) => {
  const { name } = req.body;
  names.push(name);
  res.status(201).send(`Added: ${name}`);
});

// patch a name
router.patch('/replaceName/:id', (req, res) => {
  const { name } = req.query;
  const { id } = req.params;
  const old = names[id];
  names[id] = name;
  res.status(200).send(`${old} has been replaced with ${name}`);
});

// deleteById
router.delete('/delete/:id', (req, res) => {
  const deletedName = names.splice(req.params.id, 1);
  res.status(200).send(`${deletedName} has been removed from names`);
});

module.exports = router;
