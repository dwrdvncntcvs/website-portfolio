import React, { useState } from "react";
import { useEffect } from "react";
import { OutletHeader } from "../../components";
import { useExperiencesContext } from "../../hooks/dataHooks";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import "./experiences.scss";

export default function Experiences() {
  const { state, getExpData } = useExperiencesContext();
  const [workId, setWorkId] = useState(0);

  useEffect(() => {
    getExpData();
  }, []);

  const expData = state?.expData;

  const viewWork = (direction) => {
    if (direction === "right") {
      if (workId === expData.length - 1) return;

      return setWorkId((prev) => prev + 1);
    }

    if (direction === "left") {
      if (workId === expData.length - expData.length) return;

      return setWorkId((prev) => prev - 1);
    }
  };

  return (
    <div className="exp__main-container">
      <OutletHeader title={"experiences"} />
      <section className="exp__content-container">
        <div className="exp__card-container">
          <button onClick={() => viewWork("left")}>
            <HiChevronLeft />
          </button>
          <section className="exp__company-container">
            <img src={expData[workId]?.data.companyLogo} alt="" />
          </section>
          <section className="exp__work-container">
            <div className="exp__company-details">
              <h3>
              {expData[workId]?.data?.dateStarted} -{" "}
              {expData[workId]?.data?.dateEnded}
            </h3>
              <div>
                <h1>{expData[workId]?.data?.role}</h1>
                <h2>{expData[workId]?.data?.companyName}</h2>
              </div>
            </div>
            {expData[workId]?.data?.works.map(({ title, descriptions }, i) => (
              <div key={i} className="exp__work-content-container">
                
                <h1>{title}</h1>
                <ul>
                  {descriptions.map((value, i) => (
                    <li key={i}>
                      <span id="exp__line"></span> <p>{value}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <button onClick={() => viewWork("right")}>
            <HiChevronRight />
          </button>
        </div>
      </section>
      <section className="exp__footer-container">
        {expData.length > 0 &&
          expData?.map((_value, i) => (
            <div key={i} id={workId === i ? "exp__active" : ""}></div>
          ))}
      </section>
    </div>
  );
}
