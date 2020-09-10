const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const db = require("./db");

app.use(express.json());
app.use(express.static(path.join(__dirname, "../dist")));

// get all items in DB

app.get("/", (req, res) => {});

// add item to DB

app.post("/", (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
