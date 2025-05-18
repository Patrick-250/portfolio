import React from "react";
import "./ChatWithMe.css";

const ChatWithMe = () => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Patrick's Virtual Assistant</h2>
        <p>Ask me anything!</p>
      </div>

      <div className="chat-messages">
        <div className="message-bot">
          👋 Hello! I’m Patrick’s virtual assistant. How can I help you today?
        </div>

        <div className="card-buttons-container">
          <div className="card-button">Tell me about yourself</div>
          <div className="card-button">Where did you go to school?</div>
          <div className="card-button">
            How do you stay updated with ongoing tech discoveries?
          </div>
        </div>
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Type here to start a chat..."
          className="chat-input"
        />
        <button className="chat-button">Send</button>
      </div>
    </div>
  );
};

export default ChatWithMe;
