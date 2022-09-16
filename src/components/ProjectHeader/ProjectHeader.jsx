import React from "react";
import { generateDate } from "../../utils/helper";
import "./projectHeader.scss";

export default function ProjectHeader({ data }) {
  return (
    <div className="projH__main-container">
      <h1>{data.details.title} </h1>

      {data.details.role !== "" && <p>Role: {data.details.role}</p>}
      {data.details.createdAt !== "" && (
        <span>
          {generateDate(data.details.createdAt)} -{" "}
          {data.details.endedAt === ""
            ? "Present"
            : generateDate(data.details.endedAt)}
        </span>
      )}
    </div>
  );
}
