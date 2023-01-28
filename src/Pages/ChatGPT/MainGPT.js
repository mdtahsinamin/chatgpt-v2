import React from "react";
import Sidebar from "../../components/SideBar";
import ChatGPT from "./ChatGPT";
import "./MainGPT.css";
const MainGPT = () => {
  return (
    <div className="App1 w-full h-screen bg-gray-600 object-cover flex">
      <Sidebar />
      <section className="chatBox">
        <ChatGPT />
      </section>
    </div>
  );
};

export default MainGPT;
/*
<div className="w-full h-screen bg-gray-600 object-cover flex">
        <div className="flex items-center">
          <Sidebar />
        </div>
        <div className="container">
          <ChatGPT />
        </div>
      </div>

*/
