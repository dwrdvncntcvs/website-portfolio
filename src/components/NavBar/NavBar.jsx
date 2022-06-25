import React from "react";
import "./navBar.scss";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import { HiHome, HiLogout } from "react-icons/hi";
import { SiFacebook, SiTwitter, SiLinkedin } from "react-icons/si";
import { SOC_MED } from "../../utils/variables";
import { useAuth } from "../../hooks/dataHooks";
import { accessLink } from "../../utils/helper";

export default function NavBar() {
  const { state, signOutRequest } = useAuth();

  const location = useLocation();

  const isActive = (path, link) => {
    return link.filter((element) => element === path).length > 0 ? true : false;
  };

  const link = (path) => {
    return accessLink(path, state.user);
  };

  const navLinks = [
    { Icon: HiHome, to: link("/"), active: [link("/"), link("")] },
  ];

  const footerLinks = [
    { Icon: SiFacebook, to: SOC_MED.FB },
    { Icon: SiTwitter, to: SOC_MED.TW },
    { Icon: SiLinkedin, to: SOC_MED.LI },
  ];

  if (location.pathname === "/sign-in") return null;
  else
    return (
      <div className="nb__main-container">
        <section id="nb__head-container">
          <div id="nb__logo"></div>
        </section>
        <section id="nb__link-container">
          {navLinks.map(({ Icon, to, active }, i) => (
            <Link
              key={i}
              className={isActive(to, active) ? "nb__link-active" : "nb__link"}
              to={to}
            >
              <Icon />
            </Link>
          ))}
          {state.user ? (
            <button onClick={signOutRequest}>
              <HiLogout />
            </button>
          ) : null}
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
