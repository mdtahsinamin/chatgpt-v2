import React from "react";
import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import SidebarData from "../components/SidebarData";
import UserProfile from "../components/UserProfile";
import "./SideBar.css";
const Sidebar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <aside className={`${toggle ? "sidemenu" : "mr-2 mt-2 "}`}>
      <div className={`${toggle ? "w-[5.8rem]" : ""} sidebar-container`}>
        <UserProfile toggle={toggle} />
        {!toggle && (
          <div className="side-menu-button mt-5">
            <span>+</span>
            New Chat
          </div>
        )}
        <SidebarData toggle={toggle} />
        <div
          className="absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-glass rounded-full cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <BiChevronLeft
            className={`${
              toggle ? "rotate-180" : ""
            } text-3xl transition-all duration-300`}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
