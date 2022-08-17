const router = require("express").Router();

// get
router.get("/", (req, res) => {
    return res.status(200).send("Hello, my name is Jakob!");
});

// getAll
let names = [
    "Sky",
    "Abdullah",
    "Fred",
    "Tom",
    "Rayhan",
    "Jakob"
];

router.get("/all", (req, res) => {
    return res.status(200).send(names);
});

// getById
router.get("/get/:id", (req, res) => {
    return res.status(200).send(names[req.params.id]);
});

// post new name
// router.use(express.json());

router.post("/post", (req, res) => {
    const name = req.body.name;
    names.push(name);
    return res.status(201).send(`Added: ${name}`);
});

// patch a name
router.patch("/replaceName/:index", (req, res) => {
    const name = req.query.name;
    const index = req.params.index;
    const old = names[index];
    names[index] = name;
    return res.status(200).send(`${old} has been replaced with ${name}`);
});

// deleteById
router.delete("/delete/:id", (req, res) => {
    const deletedName = names.splice(req.params.id, 1)
    return res.status(200).send(`${deletedName} has been removed from names`);
});

module.exports = router;