import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useProjectsContext } from "../../hooks/dataHooks";
import { getIcon, navigateLink } from "../../utils/helper";
import { SKILL_TYPE_VAR } from "../../utils/variables";
import { HiX } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import "./projectDetails.scss";
import { PreviewImages } from "../../components";
import { Link } from "react-router-dom";

export default function ProjectDetails() {
  const { state, getProjectDetailsData, setProjectDetails } =
    useProjectsContext();

  const [preview, setPreview] = useState(false);
  const [image, setImage] = useState("");
  const [imageId, setImageId] = useState("");

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
        <button id="pd__back-btn" onClick={goBack}>
          <HiX />
        </button>
        {data?.mainImage && (
          <section className="pd__main-image-container">
            <img src={data?.mainImage} alt="" />
            {data?.repository.length > 0 && (
              <button
                id="pd__repo-btn"
                onClick={() => navigateLink(data?.repository)}
              >
                <SiGithub />
              </button>
            )}
          </section>
        )}
        {data?.description && (
          <section className="pd__description-container">
            <h1>description.</h1>
            <p>{data?.description}</p>
          </section>
        )}
        {data?.technologies && (
          <section className="pd__technologies-container">
            <h1>technologies.</h1>
            <div className="pd__technologies-grid">
              {data?.technologies?.map(({ icon, title }, i) => {
                const { Icon, color } = getIcon(icon, SKILL_TYPE_VAR.TECHNICAL);
                return (
                  <div id="pd__technology" key={i}>
                    {Icon !== null ? (
                      <Icon id="pd__icon" color={color} />
                    ) : null}
                    <p>{title}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}
        <section className="pd__images-container">
          {data?.images?.map(
            (image, i) =>
              image.length > 0 && (
                <div
                  key={i}
                  onClick={() => {
                    setPreview(true);
                    setImage(image);
                    setImageId(i);
                  }}
                >
                  <img src={image} alt={`${id}-${i}`} />
                </div>
              )
          )}
        </section>
        {preview && (
          <PreviewImages
            images={data?.images}
            previewState={[preview, setPreview]}
            imageId={imageId}
            mainImage={image}
          />
        )}
      </div>
      {data?.appLink?.length > 0 && (
        <a className="pd__link-container" href={`${data?.appLink}`}>
          {data?.appLink}
        </a>
      )}
    </main>
  );
}
