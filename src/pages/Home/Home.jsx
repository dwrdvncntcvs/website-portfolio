import React, { useEffect } from "react";
import { PageContainer } from "../../components";
import { useHomeContext } from "../../hooks/dataHooks";
import "./home.scss";

export default function Home() {
  const { state, getHomeData } = useHomeContext();
  useEffect(() => {
    getHomeData();
  }, []);

  console.log(window.innerWidth + "" + window.innerHeight)

  return (
    <PageContainer>
      <div className="h__main-container">
        <section className="h__left-container">
          <h3>{state?.data?.greetings}</h3>
          <h1>{state?.data?.name}</h1>
          <p>{state?.data?.description}</p>
          <button onClick={() => window.open(state?.data?.resume)}>
            Resume
          </button>
        </section>
        <section className="h__right-container">
          <img src={state?.data?.image} alt="main" />
        </section>
      </div>
    </PageContainer>
  );
}
