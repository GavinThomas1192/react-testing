import React from "react";
import PropTypes from "prop-types";

const Welcome = props => {
  return <h2>Welcome {props.name}!</h2>;
};

Welcome.propTypes = {
  name: PropTypes.string
};

Welcome.defaultProps = {
  name: "Whoops"
};

export default Welcome;
