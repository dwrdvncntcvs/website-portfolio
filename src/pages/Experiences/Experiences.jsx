import React from "react";
import { OutletHeader } from "../../components";
import "./experiences.scss";

export default function Experiences() {
  return (
    <div className="exp__main-container">
      <OutletHeader title={"experiences"} />
      <section className="exp__content-container">
        <div className="exp__card-container">
          <section className="exp__company-container">
            <p>Company logo img</p>
            <h1>Role</h1>
            <h2>Company Name</h2>
            <h3>Job Duration</h3>
          </section>
          <section>
            <h1>Work</h1>
            <h2>title</h2>
            <p>Description</p>
          </section>
        </div>
      </section>
    </div>
  );
}
