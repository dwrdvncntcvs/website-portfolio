import React from "react";
import "./aNavBar.scss";
import { HiAcademicCap, HiDocumentText, HiBriefcase, HiUser } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { isLinkActive } from "../../../../utils/helper";
import Tooltip from "../../../../components/Tooltip/Tooltip";

export default function ANavBar() {
  const location = useLocation();

  const links = [
    { Icon: HiUser, to: "/about-me", title: "Personal" },
    {
      Icon: HiDocumentText,
      to: "/about-me/certifications",
      title: "Certificates",
    },
    {
      Icon: HiBriefcase,
      to: "/about-me/experiences",
      title: "Experiences",
    },
    { Icon: HiAcademicCap, to: "/about-me/academic", title: "Academic" },
  ];

  return (
    <div className="anb__main-container">
      {links.map(({ Icon, to, title }, i) => {
        return (
          <Tooltip key={i} id={"anv__tooltip"} title={title} position="top">
            <Link
              className={"anv__link"}
              id={isLinkActive(location, to) ? "anv__active" : ""}
              to={to}
            >
              <Icon />
            </Link>
          </Tooltip>
        );
      })}
    </div>
  );
}
