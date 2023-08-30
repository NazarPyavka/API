import express from 'express';
import { getDogCards, LoadData, NewCardId, DogCard } from './dogcard.js';

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("js"));

// Use express.urlencoded middleware before your route handlers
app.use(express.urlencoded({ extended: true }));

LoadData();

app.get("/", (req, res) => {
  res.render("index", { cards: getDogCards() });
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.post("/newcard", (req, res) => {
  let card = new DogCard(NewCardId(), req.body.text, req.body.color);
  console.log(req.body);
  res.json("ss");
});

var server = app.listen(port, () => {
  console.log(getDogCards());

  process.stdin.once('data', (input) => {
    process.exit();
  });
});
