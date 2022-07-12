import React, { useEffect } from "react";
import { useSkillsContext } from "../../hooks/dataHooks";
import { getIcon } from "../../utils/helper";
import { SKILL_TYPE_VAR } from "../../utils/variables";
import "./skills.scss";
import { Cog } from "../../assets/svgs";
import { FloatingImage, PageContainer, PageHeader } from "../../components";

export default function Skills() {
  const { state, getSkillsData } = useSkillsContext();

  useEffect(() => {
    getSkillsData();
  }, []);

  const data = state?.skillsData?.data;

  return (
    <PageContainer>
      <FloatingImage src={Cog} alt="floating-cog" />
      {data?.description && (
        <PageHeader title={"skills"} description={data?.description} />
      )}
      <section className="s__content-container">
        {data?.soft && (
          <section id="s__soft-skill-container">
            <h2>soft.</h2>
            {data?.soft.map(({ title, description, icon }, i) => {
              const { Icon } = getIcon(icon, SKILL_TYPE_VAR.SOFT);
              return (
                <div key={i}>
                  <Icon id="s__soft-icon" />
                  <p>
                    <span>{title.toUpperCase()}. </span>
                    {description}
                  </p>
                </div>
              );
            })}
          </section>
        )}
        {data?.technical && (
          <section id="s__technical-skill-container">
            <h2>technical.</h2>
            <div className="s__grid-container">
              {data?.technical.map(({ icon, iconColor, title }, i) => {
                const { Icon, color } = getIcon(icon, SKILL_TYPE_VAR.TECHNICAL);

                return (
                  <div key={i}>
                    <Icon id="technical-icon" color={color} />
                    <p>{title}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </section>
    </PageContainer>
  );
}
