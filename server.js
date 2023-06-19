// DEPENDENCIES
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const PokeRouter = require("./controllers/pokemon") // Connecting the controllers to the server

// GLOBAL VARIABLES

const PORT = process.env.PORT || 3000


// APPLICATION OBJECT

const app = express()


// MIDDLEWARE

app.use(morgan("tiny"))
app.use("/static", express.static("public")) // Connecting the CSS to the ejs files
app.use(express.urlencoded({extended: true})) // parse html form data -> req.body
app.use("/Poke", PokeRouter) // Connecting the controllers to the server (THIS GOES LAST)

// ROUTE

app.get("/", (req, res) => {
    res.send("server is working")
})


// SERVER LISTENER

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})