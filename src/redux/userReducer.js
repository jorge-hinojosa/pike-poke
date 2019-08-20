// import axios from "axios";

let prevState = {
  chosenPokemon: []
};

const CHOOSE_USER_POKEMON = "CHOOSE_USER_POKEMON";

export function chooseUserPokemon(pokemon) {
  return {
    type: CHOOSE_USER_POKEMON,
    payload: pokemon
  };
}

export function userReducer(state = prevState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHOOSE_USER_POKEMON:
      return {
        chosenPokemon: payload
      };
    default:
      return state;
  }
}
