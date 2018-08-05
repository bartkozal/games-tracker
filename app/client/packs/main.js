import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Hello = props => <div>Hello {props.name}!</div>;

Hello.propTypes = {
  name: PropTypes.string
};

ReactDOM.render(<Hello name="World" />, document.getElementById("root"));
