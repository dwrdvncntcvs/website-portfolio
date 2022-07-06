import React from "react";
import "./pageHeader.scss";

export default function PageHeader({ title, description }) {
  return (
    <header className="ph__header-container">
      <h1>{title}.</h1>
      <p>{description}</p>
    </header>
  );
}
