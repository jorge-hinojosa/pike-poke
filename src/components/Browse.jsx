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
          Welcome, {props.userPokemon.name}! Let's find you a match.
          <img src={props.userPokemon.img} alt={props.userPokemon.name} />
        </h1>
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
            <div className="empty-message">
              <img
                src="https://comicsandmemes.com/wp-content/uploads/surprise-pikachu-meme-000-original-blank.png"
                alt="Surprised Pikachu"
              />
              <p>
                Woops! Looks like there are no more potential matches in the
                Kanto Region. Maybe try Johto?
              </p>
            </div>
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
