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
          <h1 className="small-logo">PP</h1>
          <div className="small-menu">
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
          <h1 className="large-logo">PikiPoké</h1>
          <div className="large-menu">
            <Link to="/">
              <div className="menu-links">
                <i className="material-icons">home</i>
                <p>Start</p>
              </div>
            </Link>
            <Link to="/browse">
              <div className="menu-links">
                <i className="material-icons">search</i>
                <p>Browse</p>
              </div>
            </Link>
            <Link to="/matches">
              <div className="menu-links">
                <i className="material-icons">favorite</i>
                <p>Matches</p>
              </div>
            </Link>
          </div>
        </nav>
      </div>
      <div className="content-container">
        <h1 className="welcome-header">
          These are your matches so far, {props.userPokemon.name}!
          <img src={props.userPokemon.img} alt={props.userPokemon.name} />
        </h1>
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
            <div className="empty-message">
              <img
                src="https://comicsandmemes.com/wp-content/uploads/surprise-pikachu-meme-000-original-blank.png"
                alt="Surprised Pikachu"
              />
              <p>Oh no! You have no matches. Go browse and find some love...</p>
            </div>
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
