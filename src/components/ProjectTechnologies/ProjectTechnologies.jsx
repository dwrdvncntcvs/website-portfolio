import React from "react";
import "./projectTechnologies.scss";
import { getIcon } from "../../utils/helper";
import { SKILL_TYPE_VAR } from "../../utils/variables";

export default function ProjectTechnologies({ data }) {
  return (
    <section className="pt__technologies-container">
      <h1>technologies.</h1>
      <div className="pt__technologies">
        {data?.technologies?.map(({ icon, title }, i) => {
          const { Icon, color } = getIcon(icon, SKILL_TYPE_VAR.TECHNICAL);
          return (
            <div id="pt__technology" key={i}>
              {Icon !== null ? <Icon id="pt__icon" color={color} /> : null}
              <p>{title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
