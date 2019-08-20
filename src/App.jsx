import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { SG } from "./styles/style-guide";
import { menuStyles } from "./styles/menu-styles";
import { homeCard } from "./styles/card-styles";
import { containers } from "./styles/containers";
import { connect } from "react-redux";
import { getAllPokemon } from "./redux/pokemonReducer";
import { chooseUserPokemon } from "./redux/userReducer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, Redirect } from "react-router-dom";

function App(props) {
  React.useEffect(() => {
    props.getAllPokemon();
  }, []);

  const [toBrowse, setToBrowse] = React.useState(false);

  if (toBrowse) {
    return <Redirect to="/browse" />;
  }

  let sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2
  };

  const sliderStyles = {
    width: "750px",
    margin: 0
  };
  // console.log(props.pokemon);
  return (
    <div css={containers.outer}>
      <div css={menuStyles.headerContainer}>
        <nav css={menuStyles.navContainer}>
          <Link to="/">
            <h1>PikiPoké</h1>
          </Link>
          <ul css={menuStyles.navLinks}>
            <li>
              <i className="material-icons">home</i>
              Browse
            </li>
            <Link to="/matches">
              <li>
                <i className="material-icons">favorite</i>
                Matches
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <div css={containers.inner}>
        <h1>Choose the Pokémon that best resembles your personality!</h1>
        {props.loading ? (
          <h2 css={{ fontFamily: SG.headerFont }}>Loading...</h2>
        ) : (
          <Slider css={sliderStyles} {...sliderSettings}>
            {props.pokemon.map(pokemon => (
              <div
                css={homeCard}
                key={pokemon.id}
                onClick={() => {
                  props.chooseUserPokemon(pokemon);
                  setToBrowse(true);
                }}
              >
                <img src={pokemon.img} alt={pokemon.name} />
                <section>
                  <h1>{pokemon.name}</h1>
                  <p>
                    <i className="material-icons">location_city</i>
                    {pokemon.location}
                  </p>
                  <p>
                    <i className="material-icons">terrain</i>
                    {pokemon.type}
                  </p>
                  <i className="material-icons" css={{ marginLeft: "20px" }}>
                    person
                  </i>
                  {pokemon.traits.includes(";") ? (
                    pokemon.traits
                      .split(";")
                      .map((trait, i) => <p key={i}>{trait}</p>)
                  ) : (
                    <p>{pokemon.traits}</p>
                  )}
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
    chosenPokemon: reduxState.userReducer.chosenPokemon
  };
};

export default connect(
  mapStateToProps,
  { getAllPokemon, chooseUserPokemon }
)(App);
