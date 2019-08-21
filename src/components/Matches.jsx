import React from "react";
import "../styles/app.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { removeMatch } from "../redux/pokemonReducer";
import { connect } from "react-redux";

function Matches(props) {
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
        <span>
          <h1>
            These are your matches so far, {props.userPokemon.name}
            <i className="material-icons">favorite</i>
          </h1>
        </span>
        <Slider className="slider-styles" {...sliderSettings}>
          {props.matches.length > 0 ? (
            props.matches.map(pokemon => (
              <div className="pokemon-card" key={pokemon.id}>
                <img src={pokemon.img} alt={pokemon.name} />
                <section>
                  <h1 className="name-with-buttons">
                    {pokemon.name}
                    <i
                      className="material-icons"
                      onClick={() => props.removeMatch(pokemon)}
                    >
                      cancel
                    </i>
                    {/* <i
                      className="material-icons"
                      onClick={() =>
                        props.checkForMatch(props.userPokemon, pokemon)
                      }
                    >
                      check_circle
                    </i> */}
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
            <div>Oh no, you have no matches!</div>
          )}
        </Slider>
      </div>
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
    userPokemon: reduxState.pokemonReducer.userPokemon,
    matches: reduxState.pokemonReducer.matches
  };
};
export default connect(
  mapStateToProps,
  { removeMatch }
)(Matches);
