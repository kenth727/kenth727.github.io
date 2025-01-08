import React, { useState } from 'react'
import "./sidebar.css"
// import Logo from "../../assets/favicon.svg"

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
    <aside className={toggle ? "aside show-menu" : "aside"}>
      <a href="home" className="nav__logo">
        {/* <img src={Logo} alt="" /> */}
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            
            <li className="nav__item tooltip">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
              <span className="tooltip-text">Home</span>
            </li>

            <li className="nav__item tooltip">
              <a href="#about" className="nav__link">
                <i className="icon-user-following"></i>
              </a>
              <span className="tooltip-text">About</span>

            </li>

            {/* <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="icon-briefcase"></i>
              </a>
            </li> */}

            <li className="nav__item tooltip">
              <a href="#resume" className="nav__link">
                <i className="icon-briefcase"></i>
              </a>
              <span className="tooltip-text">Experience</span>

            </li>

            {/* <li className="nav__item">
              <a href="#work" className="nav__link">
                <i className="icon-layers"></i>
              </a>
            </li> */}

            {/* <li className="nav__item">
              <a href="#blog" className="nav__link">
                <i className="icon-note"></i>
              </a>
            </li> */}

            <li className="nav__item tooltip">
              <a href="#contact" className="nav__link">
                <i className="icon-bubble"></i>
              </a>
              <span className="tooltip-text">Message</span>
            </li>

          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2024 - 2024.</span>
      </div>
    </aside>

    <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
      <i className="icon-menu"></i>
    </div>
    </>
  );
};

export default Sidebar