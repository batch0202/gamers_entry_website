const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

let gamers = [];

// API to add gamer
app.post("/add-gamer", (req, res) => {
    const { name, phone, email, duration } = req.body;
    gamers.push({ name, phone, email, duration });
    res.json(gamers);
});

// API to get all gamers
app.get("/gamers", (req, res) => {
    res.json(gamers);
});

app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});
