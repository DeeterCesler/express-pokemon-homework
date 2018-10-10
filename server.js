const express = require("express");
const app = express();
const Pokemon = require("./models/pokemon.js");

app.use(express.static(__dirname + '/views'));

app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {
        pokemonList: Pokemon
    })
})

app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", {
        pokemon: Pokemon[req.params.id]
    })
})

app.listen(3000, () => {
    console.log("server is running via port 3000")
});