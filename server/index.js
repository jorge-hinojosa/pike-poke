require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const app = express();

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

//Controllers
const PC = require("./controller/pokemon_controller");

//DB Connection
massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("DB connected");
  })
  .catch(err => console.log(err));

//Session setup
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

//ENDPOINTS
//--Pokemon Endpoints
app.get("/api/pokemon", PC.getPokemon);
app.post("/api/match");

app.use(express.json());

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
