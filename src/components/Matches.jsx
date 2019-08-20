import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { SG } from "../styles/style-guide";
import { menuStyles } from "../styles/menu-styles";
import { containers } from "../styles/containers";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

function Matches(props) {
  console.log(props.matches);
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
      <div css={containers.inner}>Let's view your matches</div>
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
    matches: reduxState.pokemonReducer.matches
  };
};
export default connect(
  mapStateToProps,
  {}
)(Matches);
