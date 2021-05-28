const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const db = require("./db");

app.use(express.json());
app.use(express.static(path.join(__dirname, "../dist")));

// get all items in DB

app.get("/groceries", (req, res) => {
  var mysql = 'select * from items';
  db.query(mysql, (err, results) => {
    if(err) {
      res.status(400).send()
    } else {
      res.status(200).send(results)
    }
  })
});

// add item to DB

app.post("/groceries", (req, res) => {
  var mysql = 'insert into items (item) values (?)';
  db.query(mysql, [req.body.item], (err, results) => {
    if(err) {
      console.log('error : ', err)
      res.status(400).send()
    } else {
      res.status(200).send(results)
    }
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
