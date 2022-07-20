import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { FloatingImage, PageContainer, PageHeader } from "../../components";
import { useAboutMeContext } from "../../hooks/dataHooks";
import "./aboutMe.scss";
import { ANavBar } from "./components";
import { app_logo } from "../../assets/images";


export default function AboutMe() {
  const { state, getAboutMeData } = useAboutMeContext();

  useEffect(() => {
    getAboutMeData();
  }, []);

  const data = state?.aboutMeData?.data;

  return (
    <PageContainer>
      <PageHeader title={"about me"} description={data?.description} />
      <FloatingImage src={app_logo}/>
      <div className="am__main-container">
        <section className="am__left-container">
          <img src={data?.imageUrl} alt="" />
          <ANavBar />
        </section>
        <section className="am__right-container">
          <div className="am__outlet-container">
            <Outlet />
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
