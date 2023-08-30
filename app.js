import express from 'express'
import { getDogCards } from './dogcard.js'


const app = express()
const port = 3000

app.set("view engine", "ejs")
app.use(express.static("js"))

app.get("/home", (req,res) =>{
// res.json(getDogCards())
res.render("index", {cards: getDogCards()})
})

var server = app.listen(port, () => {
console.log(getDogCards())

process.stdin.once('data',  (input) => {
  process.exit();
  
});


})

