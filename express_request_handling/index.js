const express = require("express");
const app = express();

// get
app.get("/", (req, res) => {
    res.status(200).send("Hello, my name is Jakob!");
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
    res.status(200).send(names);
});

// getById
app.get("/get/:id", (req, res) => {
    res.status(200).send(names[req.params.id]);
});

// post new name
app.use(express.json());

app.post("/create", (req, res) => {
    const name = req.body.name;
    names.push(name);
    res.status(201).send(`Added: ${name}`);
});

// patch a name
app.patch("/replaceName/:index", (req, res) => {
    const name = req.query.name;
    const index = req.params.index;
    const old = names[index];
    names[index] = name;
    res.status(200).send(`${old} has been replaced with ${name}`);
});

// deleteById
app.delete("/delete/:id", (req, res) => {
    let deletedName = names.splice(req.params.id, 1)
    res.status(200).send(`${deletedName} has been removed from names`);
}); 


app.listen(8000);
console.log("this is running");