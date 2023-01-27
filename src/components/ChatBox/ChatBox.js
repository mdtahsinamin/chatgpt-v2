import React from "react";
import { getAuth } from "firebase/auth";
import app from "./../../firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Avatar } from "@mui/material";
import "./ChatBox.css";
import chatBot from "../../asset/chatgpt.png";
const auth = getAuth(app);
const ChatBox = ({ message, id }) => {
  const [user, loading, error] = useAuthState(auth);
  let messageId = "";
  let photoURL = "";

  id % 2 == 0 ? (messageId = "sent") : (messageId = "received");
  id % 2 == 0 ? (photoURL = user.photoURL) : (photoURL = chatBot);

  return (
    <>
      <div className={`message ${messageId}`}>
        <Avatar alt="Remy Sharp" src={photoURL} className="chat-img" />
        <p className="chat-p">{message}</p>
      </div>
    </>
  );
};

export default ChatBox;
