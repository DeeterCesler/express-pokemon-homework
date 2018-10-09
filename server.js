const express = require("express");
const app = express();
const Pokemon = require("./models/pokemon.js");

app.use(express.static(__dirname + '/views'));

app.get("/pokemon", (req, res) => {
    // res.send(Pokemon);
    res.render("index.ejs", {
        pokemonList: Pokemon
    })
})


app.listen(3000, () => {
    console.log("server is running via port 3000")
});