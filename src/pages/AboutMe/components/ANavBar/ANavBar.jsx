import React from "react";
import "./aNavBar.scss";
import { HiAcademicCap, HiStar, HiBriefcase, HiUser } from "react-icons/hi";

export default function ANavBar() {
  const links = [
    { Icon: HiUser },
    { Icon: HiStar },
    { Icon: HiBriefcase },
    { Icon: HiAcademicCap },
  ];

  return (
    <div className="anb__main-container">
      {links.map(({ Icon }, i) => (
        <button key={i}>
          <Icon />
        </button>
      ))}
    </div>
  );
}
