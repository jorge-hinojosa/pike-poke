import React from "react";
import "./styles/app.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { connect } from "react-redux";
import { getAllPokemon, chooseUserPokemon } from "./redux/pokemonReducer";
import { Link, Redirect } from "react-router-dom";

function App(props) {
  React.useEffect(() => {
    props.getAllPokemon();
  }, []);

  const [toBrowse, setToBrowse] = React.useState(false);
  const [toMatches, setToMatches] = React.useState(false);
  if (toBrowse) {
    return <Redirect to="/browse" />;
  }
  if (toMatches) {
    return <Redirect to="/matches" />;
  }

  let sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="main-container">
      <div className="menu-styles">
        <nav>
          <h1 className="small-logo">PP</h1>
          <div className="small-menu">
            <Link to="/">
              <i className="material-icons">home</i>
            </Link>

            <i
              className="material-icons redirect-btn"
              onClick={() => {
                props.userPokemon.length > 0
                  ? setToBrowse(true)
                  : alert("Please select a Pokémon before browsing.");
              }}
            >
              search
            </i>
            <i
              className="material-icons redirect-btn"
              onClick={() => {
                props.userPokemon.length > 0
                  ? setToMatches(true)
                  : alert("Please select a Pokémon before viewing matches.");
              }}
            >
              favorite
            </i>
          </div>
          <h1 className="large-logo">PikiPoké</h1>
          <div className="large-menu">
            <Link to="/">
              <div className="menu-links">
                <i className="material-icons">home</i>
                <p>Start</p>
              </div>
            </Link>
            <div
              className="menu-links"
              onClick={() => {
                props.userPokemon.length > 0
                  ? setToBrowse(true)
                  : alert("Please select a Pokémon before browsing.");
              }}
            >
              <i className="material-icons redirect-btn">search</i>
              <p>Browse</p>
            </div>
            <div
              className="menu-links"
              onClick={() => {
                props.userPokemon.length > 0
                  ? setToMatches(true)
                  : alert("Please select a Pokémon before viewing matches.");
              }}
            >
              <i className="material-icons redirect-btn">favorite</i>
              <p>Matches</p>
            </div>
          </div>
        </nav>
      </div>
      <div className="content-container">
        <h1>Choose the Pokémon that best fits your personality!</h1>
        {props.loading ? (
          <h2 id="loading">Loading...</h2>
        ) : (
          <Slider className="slider-styles" {...sliderSettings}>
            {props.pokemon.map(pokemon => (
              <div
                className="pokemon-card"
                key={pokemon.id}
                onClick={() => {
                  props.chooseUserPokemon(pokemon);
                  setToBrowse(true);
                }}
              >
                <img src={pokemon.img} alt={pokemon.name} />
                <section>
                  <h1>{pokemon.name}</h1>
                  <div className="pokemon-details">
                    <span>
                      <i className="material-icons">location_city</i>
                      {pokemon.location}
                    </span>
                    <span>
                      <i className="material-icons">terrain</i>
                      {pokemon.type}
                    </span>
                    <span>
                      <i className="material-icons">person</i>
                      Bio:
                    </span>
                    <div className="pokemon-bio">
                      {pokemon.traits.includes(";") ? (
                        pokemon.traits
                          .split(";")
                          .map((trait, i) => <p key={i}>{trait}</p>)
                      ) : (
                        <p>{pokemon.traits}</p>
                      )}
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
    pokemon: reduxState.pokemonReducer.pokemon,
    loading: reduxState.pokemonReducer.loading,
    userPokemon: reduxState.pokemonReducer.userPokemon
  };
};

export default connect(
  mapStateToProps,
  { getAllPokemon, chooseUserPokemon }
)(App);
