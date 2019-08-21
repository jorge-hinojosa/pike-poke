import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import { pokemonReducer } from "./pokemonReducer";

const rootReducer = combineReducers({
  pokemonReducer
});

export default createStore(rootReducer, applyMiddleware(promise));
