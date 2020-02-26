import React, { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import TileCard from "./components/TileCard/TileCard";
import Chat from "./components/Chat/Chat";
import Choice from "./components/Choice/Choice";
import Header from "./components/Header/Header";

import socketIOClient from "socket.io-client";

function App() {
  const [textValue, setTextValue] = useState("");
  const socket = socketIOClient("http://127.0.0.1:4001");

  function handleChatSend(chatMsg) {
    setTextValue(chatMsg);
    socket.emit("chat message", chatMsg);
  }

  useEffect(() => {
    socket.on("chat message", msg => {
      setTextValue(msg);

      console.log("receiving:" + msg);
    });
  }, [textValue]);

  return (
    <>
      <Header />

      <div className="content-container">
        <Board />

        <div className="cards-container col">
          <Chat handleChatSend={handleChatSend} textValue={textValue} />
          <TileCard />
          <Choice />
        </div>
      </div>
    </>
  );
}

export default App;
