import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HiddenLink from "../HiddenLink";
import svg1 from "./images/icon-star.svg";
import "./sass/main.scss";
// This challenge is "Interactive rating component"

export default function Cha1One() {
  function resetAllActivateOne(activateThis) {}

  return (
    <>
      <HiddenLink />
      <div className="bg">
        <div className="container">
          <span className="star-container">
            <img src={svg1} alt="a cute little star" />
          </span>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did whit your support request. All
            feedback is appreciated to help us improve our offering
          </p>
          <div className="rating">
            {/* Change all these spans for inputs type checkbox */}
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <NavLink to={"/c1-2"} className="btn">
            Submit
          </NavLink>
        </div>
      </div>
    </>
  );
}
