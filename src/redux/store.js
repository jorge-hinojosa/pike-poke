import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import { pokemonReducer } from "./pokemonReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  pokemonReducer,
  userReducer
});

export default createStore(rootReducer, applyMiddleware(promise));
