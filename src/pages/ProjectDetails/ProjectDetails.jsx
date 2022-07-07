import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useProjectsContext } from "../../hooks/dataHooks";
import { getIcon } from "../../utils/helper";
import { SKILL_TYPE_VAR } from "../../utils/variables";
import { HiX } from "react-icons/hi";
import "./projectDetails.scss";

export default function ProjectDetails() {
  const { state, getProjectDetailsData, setProjectDetails } =
    useProjectsContext();

  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/").reverse()[0];

  useEffect(() => {
    getProjectDetailsData(id);

    return () => {
      setProjectDetails();
    };
  }, []);

  const goBack = () => {
    navigate("/projects");
  };

  const data = state?.projectDetailsData?.data;

  return (
    <main>
      <div className="pd__grid-container">
        <button onClick={goBack}>
          <HiX />
        </button>
        <section className="pd__main-image-container">
          <img src={data?.mainImage} alt="" />
        </section>
        <section className="pd__description-container">
          <h1>description.</h1>
          <p>{data?.description}</p>
        </section>
        <section className="pd__technologies-container">
          <h1>technologies.</h1>
          <div className="pd__technologies-grid">
            {data?.technologies?.map(({ icon, title, iconColor }, i) => {
              const Icon = getIcon(icon, SKILL_TYPE_VAR.TECHNICAL);
              return (
                <div id="pd__technology" key={i}>
                  {Icon !== null ? <Icon id="pd__icon" color={`#${iconColor}`} /> : null}
                  <p>{title}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="pd__images-container">
          {data?.images?.map((image, i) => (
            image.length > 0 && <div key={i}>
            <img src={image} alt="" />
          </div>
          ))}
        </section>
      </div>
    </main>
  );
}
