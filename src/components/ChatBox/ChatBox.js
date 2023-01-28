import React from "react";
import { getAuth } from "firebase/auth";
import app from "./../../firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Avatar } from "@mui/material";
import "./ChatBox.css";
import chatBot from "../../asset/chatgpt-2.png";
const auth = getAuth(app);
const ChatBox = ({ message }) => {
  const [user, loading, error] = useAuthState(auth);
  let url = "";
  message.user === "gpt" ? (url = chatBot) : (url = user.photoURL);

  return (
    <>
      <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
        <div className="chat-message-center">
          <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
            <Avatar alt="Remy Sharp" src={url} className="chat-img" />
          </div>
          <div className={`message ${message.user === "gpt" && "typewriter"}`}>
            {message.message}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;

/*
typewriter
<div className={`message ${messageId}`}>
        <Avatar alt="Remy Sharp" src={photoURL} className="chat-img" />
        <p className="chat-p">{message}</p>
      </div>


       <div
            className={`${
              message.user === "gpt" && "typewriter anim-typewriter"
            }`}
          >
            
          </div>
*/
