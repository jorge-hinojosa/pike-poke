import axios from "axios";
import compareTypes from "./compareTypes";

let prevState = {
  pokemon: [],
  matches: [],
  loading: false
};

const GET_ALL_POKEMON = "GET_ALL_POKEMON";
const ADD_TO_MATCHES = "ADD_TO_MATCHES";
const REMOVE_POKEMON = "REMOVE_POKEMON";

export function getAllPokemon() {
  return {
    type: GET_ALL_POKEMON,
    payload: axios.get("/api/pokemon")
  };
}

export function checkForMatch(user, pokemon) {
  const result = compareTypes(user, pokemon);
  if (result === true) {
    return {
      type: ADD_TO_MATCHES,
      payload: pokemon
    };
  }

  return {
    type: REMOVE_POKEMON,
    payload: pokemon
  };
}

export function pokemonReducer(state = prevState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${GET_ALL_POKEMON}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_ALL_POKEMON}_FULFILLED`:
      return {
        ...state,
        pokemon: payload.data,
        loading: false
      };
    case ADD_TO_MATCHES:
      let index = state.pokemon.findIndex(e => payload.id === e.id);
      let pokemonCopy = state.pokemon.slice();
      pokemonCopy.splice(index, 1);
      return {
        ...state,
        matches: [payload, ...state.matches],
        pokemon: pokemonCopy
      };
    case REMOVE_POKEMON:
      index = state.pokemon.findIndex(e => payload.id === e.id);
      pokemonCopy = state.pokemon.slice();
      pokemonCopy.splice(index, 1);
      return {
        ...state,
        pokemon: pokemonCopy
      };
    default:
      return state;
  }
}
