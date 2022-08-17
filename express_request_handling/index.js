const express = require("express");
const app = express();

// middleware
app.use((req, res, next) => {
    const logEntry = `host: ${req.hostname}
    ip: ${req.ip}
    method: ${req.method}
    path: ${req.path}
    time: ${new Date()}`;
    console.log(logEntry);
    return next();
});

// get
app.get("/", (req, res) => {
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

app.get("/all", (req, res) => {
    return res.status(200).send(names);
});

// getById
app.get("/get/:id", (req, res) => {
    return res.status(200).send(names[req.params.id]);
});

// post new name
app.use(express.json());

app.post("/create", (req, res) => {
    const name = req.body.name;
    names.push(name);
    return res.status(201).send(`Added: ${name}`);
});

// patch a name
app.patch("/replaceName/:index", (req, res) => {
    const name = req.query.name;
    const index = req.params.index;
    const old = names[index];
    names[index] = name;
    return res.status(200).send(`${old} has been replaced with ${name}`);
});

// deleteById
app.delete("/delete/:id", (req, res) => {
    let deletedName = names.splice(req.params.id, 1)
    return res.status(200).send(`${deletedName} has been removed from names`);
});


app.listen(8000);
console.log("this is running");