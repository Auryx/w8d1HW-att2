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

// new

router.get("/new", (req, res) => {
    res.render("pokemon/new.ejs", {Pokemon})
})


// create

router.post("/", (req, res) => {
    const newPoke = {
        id: req.body.id,
        name: req.body.name,
        type: [
            req.body.type,
            req.body.type2
        ],
        stats : {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spdefense: req.body.spdefense,
            speed: req.body.speed
    }}
    // console.log(newPoke)
    Pokemon.push(newPoke)
    res.redirect("/poke")
    // res.json(newPoke)
})


// show

router.get("/:id", (req, res) => {

    const id = req.params.id

    res.render("pokemon/shows.ejs", {Pokemon, id}) // THE SHOW.EJS IS RIGHT THERE, WHY WON'T YOU SSSSSSSSSHHHHHOOOOOOOOOOOOWWWWWWWWWWWW
})
// export

module.exports = router