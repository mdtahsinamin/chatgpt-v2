import React from "react";
import Sidebar from "../../components/SideBar";
import ChatGPT from "./ChatGPT";

const MainGPT = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-600 object-cover flex">
        <div className="flex items-center">
          <Sidebar />
        </div>
        <div className="container">
          <ChatGPT />
        </div>
      </div>
    </>
  );
};

export default MainGPT;
