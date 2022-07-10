import React from "react";
import "./pageHeader.scss";

export default function PageHeader({ title, description, className = "" }) {
  return (
    <header className={`ph__header-container ${className}`}>
      <h1>{title}.</h1>
      <p>{description}</p>
    </header>
  );
}
