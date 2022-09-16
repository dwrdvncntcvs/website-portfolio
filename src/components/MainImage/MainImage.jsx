import React from "react";
import { navigateLink } from "../../utils/helper";
import "./mainImage.scss";
import { SiGithub } from "react-icons/si";

export default function MainImage({ data }) {
  return (
    <section className="mi__main-container">
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
  );
}
