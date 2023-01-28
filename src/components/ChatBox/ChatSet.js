import React from "react";
import { Avatar } from "@mui/material";
import "./ChatBox.css";
import chatBot from "../../asset/chatgpt.png";

const ChatSet = ({ message }) => {
  return (
    <>
      <div className="message received">
        <Avatar alt="Remy Sharp" src={chatBot} className="chat-img" />
        <p className="chat-p">{message}</p>
      </div>
    </>
  );
};

export default ChatSet;
