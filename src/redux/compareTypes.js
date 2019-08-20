export default function compareTypes(user, pokemon) {
  switch (user.type) {
    case "Grass":
      if (pokemon.type === "Electric" || pokemon.type === "Grass") {
        alert("It's a match!");
        return true;
      } else return false;
    // break;
    case "Fire":
      return console.log("Fire case");
    case "Water":
      return console.log("Water case");
    case "Electric":
      return console.log("Electric case");
    case "Normal":
      return console.log("Normal case");
    case "Ground":
      return console.log("Ground case");
    case "Rock":
      return console.log("Rock case");
    case "Fighting":
      return console.log("Fighting case");
    case "Psychic":
      return console.log("Psychic case");
    case "Ghost":
      return console.log("Ghost case");
    case "Bug":
      return console.log("Bug case");
    case "Poison":
      return console.log("Poison case");
    case "Dragon":
      return console.log("Dragon case");
    case "Flying":
      return console.log("Dragon case");
    case "Ice":
      return console.log("Dragon case");
    default:
      return console.log("Default case");
  }
}
