const path = require("path");
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const PC = require("./controller/pokemon_controller");

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("DB connected");
  })
  .catch(err => console.log(err));

app.use(express.json());

app.get("/api/pokemon", PC.getPokemon);

app.use(express.static(`${__dirname}/../build`));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
