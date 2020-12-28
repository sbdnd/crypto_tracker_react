import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import "./Sidebar.css";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* IconContext permet de fixer la couleur de toutes icons */}
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar-container">
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaGripLines onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <FaIcons.FaArrowLeft />
                </Link>
              </li>
              {SidebarData.map((data, index) => {
                return (
                  <li
                    key={
                      Date.now().toString(36) +
                      Math.random().toString(36).substr(2)
                    }
                    className={data.cName}
                  >
                    <Link to={data.path}>
                      {data.icon}
                      <span>{data.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
