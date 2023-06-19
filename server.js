// DEPENDENCIES
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const PokeRouter = require("./controllers/pokemon")

// GLOBAL VARIABLES

const PORT = process.env.PORT || 3000


// APPLICATION OBJECT

const app = express()


// MIDDLEWARE

app.use(morgan("tiny"))
app.use("/Poke", PokeRouter)
app.use("/static", express.static("public"))

// ROUTE

app.get("/", (req, res) => {
    res.send("server is working")
})


// SERVER LISTENER

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})