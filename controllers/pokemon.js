// dependencies

const express = require("express")
const Pokemon = require("../models/pokedex")

// create router object

const router = express.Router()


// // routes


// index

router.get("/", (req, res) => {
    res.render("pokemon/index.ejs", {Pokemon})
})


// show

router.get("/:id", (req, res) => {

    const id = req.params.id

    res.render("pokemon/shows.ejs", {Pokemon, id}) // THE SHOW.EJS IS RIGHT THERE, WHY WON'T YOU SSSSSSSSSHHHHHOOOOOOOOOOOOWWWWWWWWWWWW
})
// export

module.exports = router