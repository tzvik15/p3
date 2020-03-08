import React from "react";
import "./chat.css";

function Chat({ handleChatSend, textValue }) {
  return (
    <div className="chatbox">
      <ul id="messages">{textValue !== "" ? <li>{textValue}</li> : null}</ul>
      <form
        onSubmit={event => {
          event.preventDefault();
          let chatMsg = event.target.elements[0].value;
          handleChatSend(chatMsg);
          event.target.elements[0].value = ""
        }}
      >
        <input type="text" id="m" autoComplete="off" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
