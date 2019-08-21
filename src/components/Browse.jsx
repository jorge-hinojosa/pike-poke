import React from "react";
import "../styles/app.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { checkForMatch, removePokemon } from "../redux/pokemonReducer";

function Browse(props) {
  let filteredPokemon = props.pokemon.filter(
    pokemon => pokemon.id !== props.userPokemon.id
  );
  const shufflePokemon = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }
    return arr;
  };
  const randomOrder = shufflePokemon(filteredPokemon);

  let sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // const sliderStyles = {
  //   width: "250px",
  //   margin: 0
  // };
  return (
    <div className="main-container">
      <div className="menu-styles">
        <nav>
          <h1>PP</h1>
          {/* <ul>
            <Link to="/">
              <li>
                <i className="material-icons">home</i>
                Start Over!
              </li>
            </Link>
            <li>
              <i className="material-icons">search</i>
              Browse
            </li>
            <Link to="/browse" />
            <Link to="/matches">
              <li>
                <i className="material-icons">favorite</i>
                Matches
              </li>
            </Link>
          </ul> */}
          <div>
            <Link to="/">
              <i className="material-icons">home</i>
            </Link>
            <Link to="/browse">
              <i className="material-icons">search</i>
            </Link>
            <Link to="/matches">
              <i className="material-icons">favorite</i>
            </Link>
          </div>
        </nav>
      </div>
      <div className="content-container">
        <span className="welcome-header">
          <h1>Welcome, {props.userPokemon.name}! Let's find you a match.</h1>
          <img src={props.userPokemon.img} alt={props.userPokemon.name} />
        </span>
        <Slider className="slider-styles" {...sliderSettings}>
          {randomOrder.length > 0 ? (
            randomOrder.map(pokemon => (
              <div className="pokemon-card" key={pokemon.id}>
                <img src={pokemon.img} alt={pokemon.name} />
                <section>
                  <h1 className="name-with-buttons">
                    {pokemon.name}
                    <div>
                      <i
                        className="material-icons"
                        onClick={() => props.removePokemon(pokemon)}
                      >
                        cancel
                      </i>
                      <i
                        className="material-icons"
                        onClick={() =>
                          props.checkForMatch(props.userPokemon, pokemon)
                        }
                      >
                        check_circle
                      </i>
                    </div>
                  </h1>
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
            ))
          ) : (
            <h2>
              Woops! Looks like there are no more potential matches in the Kanto
              Region.
            </h2>
          )}
        </Slider>
      </div>
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
    pokemon: reduxState.pokemonReducer.pokemon,
    userPokemon: reduxState.pokemonReducer.userPokemon,
    matches: reduxState.pokemonReducer.matches
  };
};
export default connect(
  mapStateToProps,
  { checkForMatch, removePokemon }
)(Browse);
