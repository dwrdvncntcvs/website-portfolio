import React, { useState } from "react";
import "./navBar.scss";
import { Link, useLocation } from "react-router-dom";
import { HiHome, HiCode, HiFolder, HiPhone, HiUser } from "react-icons/hi";
import { SiFacebook, SiTwitter, SiLinkedin } from "react-icons/si";
import { SOC_MED } from "../../utils/variables";
import { app_logo } from "../../assets/images";
import Tooltip from "../Tooltip/Tooltip";
import { isLinkActive } from "../../utils/helper";
import { useEffect } from "react";
import useWindowDimensions from "../../hooks/screenHooks";

export default function NavBar() {
  const { width } = useWindowDimensions();

  const location = useLocation();

  const navLinks = [
    { Icon: HiHome, to: "/", title: "Home" },
    { Icon: HiCode, to: "/skills", title: "Skills" },
    { Icon: HiUser, to: "/about-me", title: "About Me" },
    { Icon: HiFolder, to: "/projects", title: "Portfolio" },
    { Icon: HiPhone, to: "/contact-me", title: "Contact Me" },
  ];

  const footerLinks = [
    { Icon: SiFacebook, to: SOC_MED.FB },
    { Icon: SiTwitter, to: SOC_MED.TW },
    { Icon: SiLinkedin, to: SOC_MED.LI },
  ];

  return (
    <div className="nb__main-container">
      <section id="nb__head-container">
        <div id="nb__logo">
          <img src={app_logo} alt="" />
        </div>
      </section>
      <section id="nb__link-container">
        {navLinks.map(({ Icon, to, title }, i) => (
          <Tooltip
            key={i}
            title={title}
            position={width > 768 ? "right" : ""}
          >
            <Link
              className={
                isLinkActive(location, to, "/") ? "nb__link-active" : "nb__link"
              }
              to={to}
            >
              <Icon />
            </Link>
          </Tooltip>
        ))}
      </section>
      <section id="nb__footer-container">
        <div>
          <p>Developed By:</p>
          <p>dwrdvncntcvs</p>
        </div>
        <div className="nb__soc-group">
          {footerLinks.map(({ Icon, to }, i) => (
            <Icon
              key={i}
              className="nb__soc-link"
              onClick={() => window.open(to)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
