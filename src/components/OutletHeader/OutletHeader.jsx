import React from "react";
import "./outletHeader.scss";

export default function OutletHeader({ title }) {
  return (
    <div className="oh__main-container">
      <h1>{title}.</h1>
    </div>
  );
}
