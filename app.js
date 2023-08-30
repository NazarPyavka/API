import express from 'express'
import { getDogCards } from './dogcard.js'
// import { DogCard } from './dogcard.js'

const app = express()
const port = 3000

app.set("view engine", "ejs")
app.use(express.static("js"))

app.get("/", (req,res) =>{
// res.json(getDogCards())
res.render("index", {cards: getDogCards()})
})
app.get("/form", (req,res) =>{
  // res.json(getDogCards())
  res.render("form")
  })

app.post("/newcard", (req,res) =>{
  new DogCard()
  res.json("zbs")

})


var server = app.listen(port, () => {
console.log(getDogCards())

process.stdin.once('data',  (input) => {
  process.exit();
  
});


})

