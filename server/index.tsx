const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "teste",
  password: "password",
  database: "quiz_database",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
  const subject = req.body.subject;
  const title = req.body.title;
  const options = req.body.options;
  const correct_option = req.body.correct_option;

  const sqlInsert =
    "INSERT INTO algebra_linear (subject, title, options, correct_option) VALUES (?,?,?,?)";
  db.query(
    sqlInsert,
    [subject, title, options, correct_option],
    (err, result) => {}
  );
});

app.listen(3001, () => {
  console.log("oi");
});
