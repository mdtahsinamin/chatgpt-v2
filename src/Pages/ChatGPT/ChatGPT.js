import React, { useEffect, useRef, useState } from "react";
import ChatBox from "../../components/ChatBox/ChatBox";
import "./ChatGPT.css";
import axios from "axios";
import ChatSet from "./../../components/ChatBox/ChatSet";
const ChatGPT = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [bot, setBot] = useState([]);
  const dummy = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      "https://chatgpt-backend-beryl.vercel.app/message",
      {
        message: message,
      }
    );
    setMessages([...messages, message, data.message]);

    setMessage("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="main-section">
        {messages &&
          messages.map((msg, index) => (
            <ChatBox key={index} message={msg} id={index} />
          ))}
        <span ref={dummy}></span>
      </main>
      <form onSubmit={sendMessage} className="chat-form">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="say something nice"
          className="chat-input"
        />

        <button type="submit" disabled={!message} className="chat-btn">
          🕊️ Send
        </button>
      </form>
    </>
  );
};

export default ChatGPT;
