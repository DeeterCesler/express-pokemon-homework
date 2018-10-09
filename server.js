const express = require("express");
const app = express();
const Pokemon = require("./models/pokemon.js");

app.get("/pokemon", (req, res) => {
    res.send(Pokemon);
    // res.render("index.ejs", {
    //     pokemonList: [1,2,3]
    // })
})


app.listen(3000, () => {
    console.log("server is running via port 3000")
});