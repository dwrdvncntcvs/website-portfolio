import React, { useEffect, useState } from "react";
import "./projects.scss";
import { FloatingImage, PageContainer, PageHeader } from "../../components";
import { useProjectsContext } from "../../hooks/dataHooks";
import { Link, Outlet } from "react-router-dom";
import { Folders } from "../../assets/svgs";

export default function Projects() {
  const { state, getProjectData } = useProjectsContext();
  const [show, setShow] = useState(false);

  useEffect(() => {
    getProjectData();
  }, []);

  const data = state?.projectData?.data;

  return (
    <PageContainer>
      <div className="p__main-container">
        <FloatingImage src={Folders} alt="floating-folders" />
        {data?.description && (
          <PageHeader title={"portfolio"} description={data?.description} />
        )}
        <section className="p__content-container">
          {data?.projects.map(({ imageUrl, id }, i) => (
            <Link
              className="p__image-container"
              key={i}
              to={`${id}`}
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <img src={imageUrl} alt="" />
              {show}
            </Link>
          ))}
        </section>
        <Outlet />
      </div>
    </PageContainer>
  );
}
