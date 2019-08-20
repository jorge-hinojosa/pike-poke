import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { SG } from "../styles/style-guide";
import { menuStyles } from "../styles/menu-styles";
import { containers } from "../styles/containers";
import { homeCard } from "../styles/card-styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { checkForMatch } from "../redux/pokemonReducer";

function Browse(props) {
  let filteredPokemon = props.pokemon.filter(
    pokemon => pokemon.id !== props.chosenPokemon.id
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

  const sliderStyles = {
    width: "350px",
    margin: 0
  };
  console.log(props);
  return (
    // <div>this is browse</div>
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
        <span css={browseStyles.header}>
          <h1>Welcome, {props.chosenPokemon.name}! Let's find you a match.</h1>
          <img src={props.chosenPokemon.img} alt={props.chosenPokemon.name} />
        </span>
        <Slider css={sliderStyles} {...sliderSettings}>
          {randomOrder.map(pokemon => (
            <div css={homeCard} key={pokemon.id}>
              <img src={pokemon.img} alt={pokemon.name} />
              <section>
                <h1>
                  {pokemon.name}
                  <i className="material-icons">cancel</i>
                  <i
                    className="material-icons"
                    onClick={() =>
                      props.checkForMatch(props.chosenPokemon, pokemon)
                    }
                  >
                    check_circle
                  </i>
                </h1>
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
      </div>
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
    chosenPokemon: reduxState.userReducer.chosenPokemon,
    pokemon: reduxState.pokemonReducer.pokemon,
    matches: reduxState.pokemonReducer.matches
  };
};
export default connect(
  mapStateToProps,
  { checkForMatch }
)(Browse);

const browseStyles = {
  header: {
    marginTop: "15px",
    display: "flex",
    flexDirection: "row",

    h1: {
      width: "600px"
    },
    img: {
      width: "100px"
    }
  }
};
