export default function compareTypes(user, pokemon) {
  switch (user.type) {
    case "Normal":
      if (pokemon.type === "Rock" || pokemon.type === "Normal") {
        alert("It's a match!");
        return true;
      } else {
        return false;
      }
    case "Grass":
      if (
        pokemon.type === "Dragon" ||
        pokemon.type === "Electric" ||
        pokemon.type === "Grass"
      ) {
        alert("It's a match!");
        return true;
      } else {
        return false;
      }
    case "Fire":
      if (pokemon.type === "Dragon" || pokemon.type === "Fire") {
        alert("It's a match!");
        return true;
      } else {
        return false;
      }
    case "Water":
      if (
        pokemon.type === "Dragon" ||
        pokemon.type === "Ice" ||
        pokemon.type === "Water"
      ) {
        alert("It's a match!");
        return true;
      } else {
        return false;
      }
    case "Electric":
      if (
        pokemon.type === "Dragon" ||
        pokemon.type === "Grass" ||
        pokemon.type === "Electric"
      ) {
        alert("It's a match!");
        return true;
      } else {
        return false;
      }

    case "Ground":
      if (
        pokemon.type === "Bug" ||
        pokemon.type === "Poison" ||
        pokemon.type === "Ground"
      ) {
        alert("It's a match!");
        return true;
      } else {
        return false;
      }
    case "Rock":
      if (
        pokemon.type === "Normal" ||
        pokemon.type === "Poison" ||
        pokemon.type === "Rock"
      ) {
        alert("It's a match!");
        return true;
      } else {
        return false;
      }
    case "Fighting":
      if (
        pokemon.type === "Poison" ||
        pokemon.type === "Bug" ||
        pokemon.type === "Fighting"
      ) {
        alert("It's a match!");
        return true;
      } else {
        return false;
      }
    case "Psychic":
      if (pokemon.type === "Psychic") {
        alert("It's a match!");
        return true;
      } else {
        return false;
      }
    case "Ghost":
      if (pokemon.type === "Bug" || pokemon.type === "Poison") {
        alert("It's a match!");
        return true;
      } else {
        return false;
      }
    case "Bug":
      if (
        pokemon.type === "Fighting" ||
        pokemon.type === "Ghost" ||
        pokemon.type === "Ground" ||
        pokemon.type === "Bug"
      ) {
        alert("It's a match!");
        return true;
      } else {
        return false;
      }
    case "Poison":
      if (
        pokemon.type === "Rock" ||
        pokemon.type === "Ghost" ||
        pokemon.type === "Fighting" ||
        pokemon.type === "Poison"
      ) {
        alert("It's a match!");
        return true;
      } else {
        return false;
      }

    case "Flying":
      if (pokemon.type === "Flying") {
        alert("It's a match!");
        return true;
      } else {
        return false;
      }
    case "Ice":
      if (pokemon.type === "Water" || pokemon.type === "Ice") {
        alert("It's a match!");
        return true;
      } else {
        return false;
      }
    case "Dragon":
      if (
        pokemon.type === "Electric" ||
        pokemon.type === "Fire" ||
        pokemon.type === "Grass" ||
        pokemon.type === "Water" ||
        pokemon.type === "Dragon"
      ) {
        alert("It's a match!");
        return true;
      } else {
        return false;
      }
    default:
      return alert("Make sure you choose a Pokémon before browsing.");
  }
}
