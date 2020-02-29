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

  //a couple of variables to track users
  const userNum = 1;
  let totalPlayers=0;

  //starter state for each potential user
  const [user1Data, setUser1Data] = useState({
    userExists: false,
    userId: 1,
    userActive: false,
    userName: "",
    userPosition: 0,
    userTime: 1500,
    userTech:[]
  })

  const [user2Data, setUser2Data] = useState({
    userExists: false,
    userId: 2,
    userActive: false,
    userName: "",
    userPosition: 0,
    userTime: 1500,
    userTech:[]
  })

  const [user3Data, setUser3Data] = useState({
    userExists: false,
    userId: 3,
    userActive: false,
    userName: "",
    userPosition: 0,
    userTime: 1500,
    userTech:[]
  })

  const [user4Data, setUser4Data] = useState({
    userExists: false,
    userId: 4,
    userActive: false,
    userName: "",
    userPosition: 0,
    userTime: 1500,
    userTech:[]
  })

  //a set of dummy code and test functions to experiment with updating and passing state between users

  //dummy state object to pass
  const [testState, setTestState] = useState({
    number:1,
    bool: true,
    msg: "this is a test"
  });

  //a function that consoles out the current state of the dummy object
  const testFunPrint = ()=>{
    console.log(testState)
  }

  //a function that updates the state of the dummy function
  const testFunUpdate = ()=>{
    setTestState({...testState, number: testState.number +1})
  }

  //a function that passes the dummy object to the socket server
  const  testFunPass = () => {
    socket.emit("test state", testState);
  }

  //an event listener that listens for receiving an updated dummy object from the server and triggers the setState function when that happens
  useEffect(() => {
    socket.on("test state", state => {
      setTestState(state);
    });
  }, [testState]);

  //a hook listening to the number of players that updates the state of an existing player to true
  useEffect(() =>{
    if (totalPlayers === 1) {
      setUser1Data({...user1Data, userExists:true})
    }
    if (totalPlayers === 2) {
      setUser2Data({...user2Data, userExists:true})
    }
    if (totalPlayers === 3) {
      setUser3Data({...user3Data, userExists:true})
    }
    if (totalPlayers === 4) {
      setUser4Data({...user4Data, userExists:true})
    }
  },[totalPlayers])

  //functions handling updating of user location state based on their action choice, passed as props to the Choice componant
  const moveOne =()=>{
    `setUser${userNum}Data`({...`user${userNum}Data`, userPosition: `user${userNum}Data`.userPosition +1})
  }

  const moveTwo =()=>{
    `setUser${userNum}Data`({...`user${userNum}Data`, userPosition: `user${userNum}Data`.userPosition +2})
  }

  const moveThree =()=>{
    `setUser${userNum}Data`({...`user${userNum}Data`, userPosition: `user${userNum}Data`.userPosition +3})
  }

//a function that updates the state of a chat message and sends it to the io server to be delivered to all connected users
  function handleChatSend(chatMsg) {
    setTextValue(chatMsg);
    socket.emit("chat message", chatMsg);
  }

  //a hook listening to changes in the text value that triggers a rerender, and thus a display of the new message
  useEffect(() => {
    socket.on("chat message", msg => {
      setTextValue(msg);
    });
  }, [textValue]);

  return (
    <>
      <Header />

      <div className="content-container">
        <Board />
        {/* dummy buttons to test passing state */}
        <button onClick={testFunPrint}>console test</button>
        <button onClick={testFunUpdate}>update state</button>
        <button onClick={testFunPass}>bounce state</button>
        
        <div className="cards-container col">
          <Chat handleChatSend={handleChatSend} textValue={textValue} />
          <TileCard />
          <Choice 
          moveOne = {moveOne}
          moveTwo = {moveTwo}
          moveThree = {moveThree}
          />
        </div>
      </div>
    </>
  );
}

export default App;
