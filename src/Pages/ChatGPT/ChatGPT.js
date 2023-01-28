import React, { useEffect, useRef, useState } from "react";
import "./ChatGPT.css";
import axios from "axios";
import ChatBox from "./../../components/ChatBox/ChatBox";

const ChatGPT = () => {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const dummy = useRef();

  function clearChat() {
    setChatLog([]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let chatLogNew = [...chatLog, { user: "me", message: `${input}` }];
    setInput("");
    await setChatLog(chatLogNew);

    const messages = chatLogNew.map((message) => message.message).join("\n");

    // fetch
    const { data } = await axios.post(
      "https://chatgpt-backend-beryl.vercel.app/message",
      {
        message: messages,
      }
    );

    // sent messages server
    await setChatLog([
      ...chatLogNew,
      { user: "gpt", message: `${data.message}` },
    ]);
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="chat-log">
        {chatLog &&
          chatLog.map((message, index) => <ChatBox message={message} />)}
        <span ref={dummy}></span>
      </div>
      <div className="chat-input-holder">
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows="1"
            className="chat-input-textarea"
          ></input>
        </form>
      </div>
    </>
  );
};

export default ChatGPT;
/*

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

*/
