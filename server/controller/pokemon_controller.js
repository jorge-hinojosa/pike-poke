module.exports = {
  getPokemon: async (req, res) => {
    const db = req.app.get("db");
    const pokemon = await db.get_all_pokemon().catch(err => console.log(err));
    for (let i = 0; i < pokemon.length; i++) {
      pokemon[i].like = false;
    }
    // console.log(pokemon);
    res.status(200).json(pokemon);
  }
};
