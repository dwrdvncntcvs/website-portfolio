import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProjectsContext } from "../../hooks/dataHooks";
import { HiX } from "react-icons/hi";
import "./projectDetails.scss";
import {
  MainImage,
  ProjectDescription,
  ProjectHeader,
  ProjectImages,
  ProjectTechnologies,
} from "../../components";

export default function ProjectDetails() {
  const { state, getProjectDetailsData, setProjectDetails } =
    useProjectsContext();

  const navigate = useNavigate();
  const { id } = useParams();

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
      <div className="pd__main-container">
        <button id="pd__back-btn" onClick={goBack}>
          <HiX />
        </button>
        {data?.mainImage && <MainImage data={data} />}
        {data?.details && <ProjectHeader data={data} />}
        {data?.description && <ProjectDescription data={data} />}
        {data?.technologies && <ProjectTechnologies data={data} />}
        {data?.images.length > 0 && <ProjectImages data={data} />}
      </div>
      {data?.appLink?.length > 0 && (
        <a className="pd__link-container" href={`${data?.appLink}`}>
          {data?.appLink}
        </a>
      )}
    </main>
  );
}
