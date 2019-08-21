import axios from "axios";
import compareTypes from "./compareTypes";

let prevState = {
  pokemon: [],
  userPokemon: [],
  matches: [],
  loading: false
};

//Action Types
const GET_ALL_POKEMON = "GET_ALL_POKEMON";
const CHOOSE_USER_POKEMON = "CHOOSE_USER_POKEMON";
const ADD_TO_MATCHES = "ADD_TO_MATCHES";
const REMOVE_POKEMON = "REMOVE_POKEMON";
const REMOVE_MATCH = "REMOVE_MATCH";

//Action Creators
export function getAllPokemon() {
  return {
    type: GET_ALL_POKEMON,
    payload: axios.get("/api/pokemon")
  };
}
export function chooseUserPokemon(pokemon) {
  return {
    type: CHOOSE_USER_POKEMON,
    payload: pokemon
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
export function removePokemon(pokemon) {
  return {
    type: REMOVE_POKEMON,
    payload: pokemon
  };
}
export function removeMatch(pokemon) {
  return {
    type: REMOVE_MATCH,
    payload: pokemon
  };
}

//Pokemon Reducer
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
        pokemon: payload.data,
        userPokemon: [],
        matches: [],
        loading: false
      };
    case CHOOSE_USER_POKEMON:
      return {
        ...state,
        userPokemon: payload
      };
    case ADD_TO_MATCHES:
      let indexA = state.pokemon.findIndex(e => payload.id === e.id);
      let pokemonCopyA = state.pokemon.slice();
      pokemonCopyA.splice(indexA, 1);
      return {
        ...state,
        matches: [payload, ...state.matches],
        pokemon: pokemonCopyA
      };
    case REMOVE_POKEMON:
      let indexB = state.pokemon.findIndex(e => payload.id === e.id);
      let pokemonCopyB = state.pokemon.slice();
      pokemonCopyB.splice(indexB, 1);
      return {
        ...state,
        pokemon: pokemonCopyB
      };
    case REMOVE_MATCH:
      let matchIndex = state.matches.findIndex(e => payload.id === e.id);
      let matchesCopy = state.matches.slice();
      matchesCopy.splice(matchIndex, 1);
      return {
        ...state,
        matches: matchesCopy
      };
    default:
      return state;
  }
}
