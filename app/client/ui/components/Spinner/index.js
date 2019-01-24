// @flow
import * as React from "react";
import Spinkit from "react-spinkit";
import "./spinner.scss";

const Spinner = () => {
  return (
    <div className="has-spinner">
      <Spinkit
        name="pacman"
        fadeIn="none"
        color="#394263"
        overrideSpinnerClassName="spinner"
      />
    </div>
  );
};

export default Spinner;
