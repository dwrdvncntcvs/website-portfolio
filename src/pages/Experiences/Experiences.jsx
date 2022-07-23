import React from "react";
import { useEffect } from "react";
import { OutletHeader } from "../../components";
import { useExperiencesContext } from "../../hooks/dataHooks";
import "./experiences.scss";

export default function Experiences() {
  const { state, getExpData } = useExperiencesContext();

  useEffect(() => {
    getExpData();
  }, []);

  const data = state?.expData?.data;

  return (
    <div className="exp__main-container">
      <OutletHeader title={"experiences"} />
      <section className="exp__content-container">
        <div className="exp__card-container">
          <section className="exp__company-container">
            <img src={data?.companyLogo} alt="" />
            <h1>{data?.role}</h1>
            <h2>{data?.companyName}</h2>
            <h3>
              {data?.dateStarted} - {data?.dateEnded}
            </h3>
          </section>
          <section>
            {data?.works.map(({ title, descriptions }, i) => (
              <div key={i}>
                <h1>{title}</h1>
                <ul>
                  {descriptions.map((value, i) => (
                    <li key={i}>{value}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </section>
    </div>
  );
}
