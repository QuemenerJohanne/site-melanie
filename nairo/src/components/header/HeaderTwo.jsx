import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiBriefcase,
  FiFileText,
  FiPhoneOutgoing,
} from "react-icons/fi";
import { FaHome, FaBlog } from "react-icons/fa";
import { GiBarracksTent, GiBeamsAura, GiCarillon, GiMagicPalm, GiWhiteBook, GiThink} from "react-icons/gi";

import lotus from './lotus.png';
import flower from './flower.png';
import emotion from './emotion.png';




const HeaderTwo = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      {/* Header */}
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      {/* nav bar */}
      <header
        className={
          click
            ? "header-left header-menu-style-two menu-open"
            : "header-left header-menu-style-two"
        }
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <Link to="/">
                  <img src={emotion} alt="Logo" />
              </Link>
            </div>
          </div>
          {/* End htl-top */}

          <Scrollspy
            className="nav nav-menu"
            items={["home", "about", "resume", "work", "blog", "contactus"]}
            currentClassName="active"
            offset={-30}
          >
            <li>
              <a className="nav-link " href="#home" onClick={handleClick}>
                <GiBarracksTent />
                <span className="item">Acceuil</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#about" onClick={handleClick}>
                <GiBeamsAura />
                <span className="item">A propos</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#resume" onClick={handleClick}>
                <GiWhiteBook />
                <span className="item">Formation</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#work" onClick={handleClick}>
                <GiMagicPalm />
                <span className="item">Activités</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#blog" onClick={handleClick}>
                <GiThink />
                <span className="item">S'informer</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contactus" onClick={handleClick}>
                <GiCarillon />
                <span className="item">Contact</span>
              </a>
            </li>
          </Scrollspy>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

export default HeaderTwo;
