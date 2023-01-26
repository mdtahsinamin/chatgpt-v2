import React from "react";
import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import SidebarData from "../components/SidebarData";
import UserProfile from "../components/UserProfile";
const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`${toggle ? "w-[5.8rem]" : ""} sidebar-container`}>
      <UserProfile toggle={toggle} />
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
  );
};

export default Sidebar;
