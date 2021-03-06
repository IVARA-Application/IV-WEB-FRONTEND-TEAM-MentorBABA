import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import * as AiIcons from "react-icons/ai";
import "./Navbar.css";
import { SidebarData } from "../HomeRoute/Sidebar";

function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="Navbar">
      <div className="flex justify-between items-center md:w-4/5 md:m-auto xl:w-full xl:m-auto">
        <div className="nav text-lg md:text-xl md:flex items-center">
          <Link to="/">
            <h1 className="text-2xl lg:text-4xl xl:px-16 px-4 py-2 xl:pb-6 xl:py-4 xl:ml-6">
              Mentor<span className="logo">Baba</span>
            </h1>
          </Link>
          <ul className="flex px-4 space-x-4">
            <li>Investors</li>
            <li>Founders</li>
            <li>Mentors</li>
          </ul>
        </div>
        <div>
          <Link
            to="#"
            className="flex items-center justify-center mx-4 xl:mx-8 xl:mr-6 text-3xl xl:text5xl"
          >
            <HiOutlineMenuAlt4 onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineArrowRight />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span className="ml-4 navbar-li">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
