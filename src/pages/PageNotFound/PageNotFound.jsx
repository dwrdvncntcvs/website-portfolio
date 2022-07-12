import React from "react";
import "./pageNotFound.scss";
import { PNF } from "../../assets/svgs";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="pnf__main-container">
      <img id="pnf__icon" src={PNF} alt="pnf" />
      <div className="pnf__info-container">
        <p>Oops! What are you doing here?</p>
        <p>There's nothing to see in here! Click </p>
        <Link className="pnf__link" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}
