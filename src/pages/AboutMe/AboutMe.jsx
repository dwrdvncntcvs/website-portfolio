import React from "react";
import { Outlet } from "react-router-dom";
import { PageContainer, PageHeader } from "../../components";
import "./aboutMe.scss";
import { ANavBar } from "./components";

export default function AboutMe() {
  return (
    <PageContainer>
      <PageHeader
        title={"about me"}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          cum exercitationem dolores nam repellendus, nobis alias deserunt eum
          cumque repellat rerum rem, quam laboriosam at!"
      />
      <div className="am__main-container">
        <section className="am__left-container">
          <div></div>
        </section>
        <section className="am__right-container">
          <div className="am__outlet-container">
            <Outlet />
          </div>
          <ANavBar />
        </section>
      </div>
    </PageContainer>
  );
}
