import React, { useEffect } from "react";
import { useSkillsContext } from "../../hooks/dataHooks";
import { getIcon } from "../../utils/helper";
import { SKILL_TYPE_VAR } from "../../utils/variables";
import "./skills.scss";
import { Cog } from "../../assets/svgs";
import { PageHeader } from "../../components";

export default function Skills() {
  const { state, getSkillsData } = useSkillsContext();

  useEffect(() => {
    getSkillsData();
  }, []);

  return (
    <div className="s__main-container">
      <img src={Cog} alt="" />
      <PageHeader
        title={"skills"}
        description={state?.skillsData?.data?.description}
      />
      <section className="s__content-container">
        <section id="s__soft-skill-container">
          <h2>soft.</h2>
          {state?.skillsData?.data?.soft.map(
            ({ title, description, icon }, i) => {
              const Icon = getIcon(icon, SKILL_TYPE_VAR.SOFT);
              return (
                <div key={i}>
                  <Icon id="s__soft-icon" />
                  <p>
                    <span>{title.toUpperCase()}. </span>
                    {description}
                  </p>
                </div>
              );
            }
          )}
        </section>
        <section id="s__technical-skill-container">
          <h2>technical.</h2>
          <div className="s__grid-container">
            {state?.skillsData?.data?.technical.map(
              ({ icon, iconColor, title }, i) => {
                const Icon = getIcon(icon, SKILL_TYPE_VAR.TECHNICAL);

                return (
                  <div key={i}>
                    <Icon id="technical-icon" color={`#${iconColor}`} />
                    <p>{title}</p>
                  </div>
                );
              }
            )}
          </div>
        </section>
      </section>
    </div>
  );
}
