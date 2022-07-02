import React, { useEffect } from "react";
import { useHomeContext } from "../../hooks/dataHooks";
import { HoverElement } from "./components";
import "./home.scss";

export default function Home() {
  const { state, getHomeData } = useHomeContext();
  useEffect(() => {
    getHomeData();
  }, []);

  console.log(state)

  return (
    <div>
      <HoverElement title={"Add Greetings"} value="greetings">
        <h3>{state?.data?.greetings}</h3>
      </HoverElement>
      <HoverElement title={"Add Name"} value="name">
        <h1>{state?.data?.name}</h1>
      </HoverElement>
      <HoverElement title={"Add Description"} value="description">
        <p>{state?.data?.description}</p>
      </HoverElement>
    </div>
  );
}
