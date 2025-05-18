import React from "react";
import "./ChatWithMe.css";
import { BiColor } from "react-icons/bi";

const ChatWithMe = () => {
  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header" style={{ color: "#a4ac86" }}>
        Virtual Assistant
        <br />
        AI
      </div>

      {/* Message Area */}
      <div className="chat-messages">
        <div className="message-bot">
          Hello! I am Patrick's virtual assistant, How can I assist you today?
        </div>
      </div>

      {/* Input Area */}
      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Ask Me Anything..."
          className="chat-input"
        />
        <button className="chat-button">Send</button>
      </div>
    </div>
  );
};

export default ChatWithMe;
