import React, { useEffect } from "react";
import "./projects.scss";
import { PageContainer, PageHeader } from "../../components";
import { useProjectsContext } from "../../hooks/dataHooks";

export default function Projects() {
  const { state, getProjectData } = useProjectsContext();

  useEffect(() => {
    getProjectData();
  }, []);

  return (
    <PageContainer>
      <PageHeader
        title={"portfolio"}
        description={state?.projectData?.data?.description}
      />
    </PageContainer>
  );
}
