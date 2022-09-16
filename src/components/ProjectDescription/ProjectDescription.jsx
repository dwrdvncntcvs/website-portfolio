import React from "react";
import "./projectDescription.scss";

export default function ProjectDescription({ data }) {
  return (
    <section className="pdesc__description-container">
      <h1>description.</h1>
      <p>{data?.description}</p>
    </section>
  );
}
