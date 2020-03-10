import React, { useState, useEffect } from "react";
import "./App.css";
import API from "./utils/API";
import Board from "./components/Board/Board";
import TileCard from "./components/TileCard/TileCard";
import Chat from "./components/Chat/Chat";
import Choice from "./components/Choice/Choice";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import socketIOClient from "socket.io-client";
import CardContext from "./utils/CardContext";

function App() {
  const [textValue, setTextValue] = useState("");
  const socket = socketIOClient("http://127.0.0.1:4001");

  //a global game state to track global variables
  const [gameState, setGameState] = useState({
    userNum: 1,
    totalPlayers: 4,
    gameOn: false
  });

  let tech = "testTech";
  //need to grab tech name here by doing an API call to the db (find1) on user location

  //starter state for each potential user
  const [user1Data, setUser1Data] = useState({
    userExists: false,
    userId: 1,
    userName: "",
    userPosition: 0,
    userTime: 1500,
    userTech: [],
    done: false,
    score: 0
  });

  const [user2Data, setUser2Data] = useState({
    userExists: false,
    userId: 2,
    userName: "",
    userPosition: 0,
    userTime: 1500,
    userTech: [],
    done: false,
    score: 0
  });

  const [user3Data, setUser3Data] = useState({
    userExists: false,
    userId: 3,
    userName: "",
    userPosition: 0,
    userTime: 1500,
    userTech: [],
    done: true,
    score: 0
  });

  const [user4Data, setUser4Data] = useState({
    userExists: false,
    userId: 4,
    userName: "",
    userPosition: 0,
    userTime: 1500,
    userTech: [],
    done: false,
    score: 0
  });

  //a function that consoles out the current state of the 4 users, and the game state
  const testFunPrint = () => {
    console.log(user1Data, user2Data, user3Data, user4Data, gameState);
  };

  //listeners to state being passed between seperate game users that updates the local user/game state to match what was transmitted
  useEffect(() => {
    socket.on("p1state", state => {
      setUser1Data(state);
    });
  }, [user1Data]);

  useEffect(() => {
    socket.on("p2state", state => {
      setUser2Data(state);
    });
  }, [user2Data]);

  useEffect(() => {
    socket.on("p3state", state => {
      setUser3Data(state);
    });
  }, [user3Data]);

  useEffect(() => {
    socket.on("p4state", state => {
      setUser4Data(state);
    });
  }, [user4Data]);

  useEffect(() => {
    setUser1Data(user1Data => {
      return {
        ...user1Data,
        done: true,
        score: user1Data.userTime * (user1Data.userTech.length * 100)
      };
    });
  }, [user1Data.userPosition > 24]);

  useEffect(() => {
    setUser2Data(user2Data => {
      return {
        ...user2Data,
        done: true,
        score: user2Data.userTime * (user2Data.userTech.length * 100)
      };
    });
  }, [user2Data.userPosition > 24]);

  useEffect(() => {
    setUser3Data(user3Data => {
      return {
        ...user3Data,
        done: true,
        score: user3Data.userTime * (user3Data.userTech.length * 100)
      };
    });
  }, [user3Data.userPosition > 24]);

  useEffect(() => {
    setUser4Data(user4Data => {
      return {
        ...user4Data,
        done: true,
        score: user4Data.userTime * (user4Data.userTech.length * 100)
      };
    });
  }, [user4Data.userPosition > 24]);

  useEffect(() => {
    socket.on("game state", state => {
      setGameState({
        ...gameState,
        userNum:
          state.userNum < state.totalPlayers
            ? state.userNum + 1
            : (state.userNum = 1)
      });
    });
  }, [gameState.userNum]);

  useEffect(() => {
    socket.on("game start", state => {
      setGameState({ ...gameState, gameOn: true });
      setUser1Data({ ...user1Data, userActive: true });
    });
  }, [gameState.gameOn]);

  //a hook listening to the number of players that updates the state of an existing player to true
  useEffect(() => {
    if (gameState.totalPlayers === 1) {
      setUser1Data({ ...user1Data, userExists: true });
    }
    if (gameState.totalPlayers === 2) {
      setUser1Data({ ...user1Data, userExists: true });
      setUser2Data({ ...user2Data, userExists: true });
    }
    if (gameState.totalPlayers === 3) {
      setUser1Data({ ...user1Data, userExists: true });
      setUser2Data({ ...user2Data, userExists: true });
      setUser3Data({ ...user3Data, userExists: true });
    }
    if (gameState.totalPlayers === 4) {
      setUser1Data({ ...user1Data, userExists: true });
      setUser2Data({ ...user2Data, userExists: true });
      setUser3Data({ ...user3Data, userExists: true });
      setUser4Data({ ...user4Data, userExists: true });
    }
  }, [gameState.totalPlayers]);

  //functions handling updating of user location state based on their action choice, passed as props to the Choice componant
  const p1m1 = () => {
    setUser1Data({ ...user1Data, userPosition: user1Data.userPosition + 1 });
  };
  const p1m2 = () => {
    setUser1Data({ ...user1Data, userPosition: user1Data.userPosition + 2 });
  };
  const p1m3 = () => {
    setUser1Data({ ...user1Data, userPosition: user1Data.userPosition + 3 });
  };
  const p2m1 = () => {
    setUser2Data({ ...user2Data, userPosition: user2Data.userPosition + 1 });
  };
  const p2m2 = () => {
    setUser2Data({ ...user2Data, userPosition: user2Data.userPosition + 2 });
  };
  const p2m3 = () => {
    setUser2Data({ ...user2Data, userPosition: user2Data.userPosition + 3 });
  };
  const p3m1 = () => {
    setUser3Data({ ...user3Data, userPosition: user3Data.userPosition + 1 });
  };
  const p3m2 = () => {
    setUser3Data({ ...user3Data, userPosition: user3Data.userPosition + 2 });
  };
  const p3m3 = () => {
    setUser3Data({ ...user3Data, userPosition: user3Data.userPosition + 3 });
  };
  const p4m1 = () => {
    setUser4Data({ ...user4Data, userPosition: user4Data.userPosition + 1 });
  };
  const p4m2 = () => {
    setUser4Data({ ...user4Data, userPosition: user4Data.userPosition + 2 });
  };
  const p4m3 = () => {
    setUser4Data({ ...user4Data, userPosition: user4Data.userPosition + 3 });
  };

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

  const [cardState, setCardState] = useState({
    title: "",
    description: ""
  });

  const loadCards = () => {
    API.getCards().then(function(data) {
      console.log(data);
    });
  };
  //a function handling the passage of turns between players, allows for players to have finished the game
  function nextTurn() {
    if (
      gameState.userNum < gameState.totalPlayers &&
      gameState.userNum === 1 &&
      user2Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 2 });
    } else if (
      gameState.userNum < gameState.totalPlayers &&
      gameState.userNum === 1 &&
      user2Data.done === true &&
      user3Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 3 });
    } else if (
      gameState.userNum < gameState.totalPlayers &&
      gameState.userNum === 1 &&
      user2Data.done === true &&
      user3Data.done === true &&
      user4Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 4 });
    } else if (
      gameState.userNum < gameState.totalPlayers &&
      gameState.userNum === 2 &&
      user3Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 3 });
    } else if (
      gameState.userNum < gameState.totalPlayers &&
      gameState.userNum === 2 &&
      user3Data.done === true &&
      user4Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 4 });
    } else if (
      gameState.userNum < gameState.totalPlayers &&
      gameState.userNum === 2 &&
      user3Data.done === true &&
      user4Data.done === true &&
      user1Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 1 });
    } else if (
      gameState.userNum < gameState.totalPlayers &&
      gameState.userNum === 3 &&
      user4Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 4 });
    } else if (
      gameState.userNum < gameState.totalPlayers &&
      gameState.userNum === 3 &&
      user4Data.done === true &&
      user1Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 1 });
    } else if (
      gameState.userNum < gameState.totalPlayers &&
      gameState.userNum === 3 &&
      user4Data.done === true &&
      user1Data.done === true &&
      user2Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 2 });
    } else if (
      gameState.userNum <= gameState.totalPlayers &&
      gameState.userNum === 4 &&
      user1Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 1 });
    } else if (
      gameState.userNum <= gameState.totalPlayers &&
      gameState.userNum === 4 &&
      user1Data.done === true &&
      user2Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 2 });
    } else if (
      gameState.userNum <= gameState.totalPlayers &&
      gameState.userNum === 4 &&
      user1Data.done === true &&
      user2Data.done === true &&
      user3Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 3 });
    } else if (
      gameState.userNum < gameState.totalPlayers &&
      gameState.userNum === 1 &&
      user2Data.done === true &&
      user3Data.done === true &&
      user4Data.done === true
    ) {
      setGameState({ ...gameState, userNum: 1 });
    } else if (
      gameState.userNum < gameState.totalPlayers &&
      gameState.userNum === 2 &&
      user3Data.done === true &&
      user4Data.done === true &&
      user1Data.done === true
    ) {
      setGameState({ ...gameState, userNum: 2 });
    } else if (
      gameState.userNum < gameState.totalPlayers &&
      gameState.userNum === 3 &&
      user4Data.done === true &&
      user1Data.done === true &&
      user2Data.done === true
    ) {
      setGameState({ ...gameState, userNum: 3 });
    } else if (
      gameState.userNum <= gameState.totalPlayers &&
      gameState.userNum === 4 &&
      user1Data.done === true &&
      user2Data.done === true &&
      user3Data.done === true
    ) {
      setGameState({ ...gameState, userNum: 4 });
    }
  }

  function pass() {
    socket.emit("p1state", user1Data);
    socket.emit("p2state", user2Data);
    socket.emit("p3state", user3Data);
    socket.emit("p4state", user4Data);
    socket.emit("game state", gameState);
  }
  //a function handling player learning choice
  function learn() {
    switch (gameState.userNum) {
      case 1:
        setUser1Data({ ...user1Data, userTech: [...user1Data.userTech, tech] });
        nextTurn();
        break;
      case 2:
        setUser2Data({ ...user2Data, userTech: [...user2Data.userTech, tech] });
        nextTurn();
        break;
      case 3:
        setUser3Data({ ...user3Data, userTech: [...user3Data.userTech, tech] });
        nextTurn();
        break;
      case 4:
        setUser4Data({ ...user4Data, userTech: [...user4Data.userTech, tech] });
        nextTurn();
        break;

      default:
        break;
    }
  }

  return (
    <>
      <Header />

      <div className="content-container">
        <CardContext.Provider value={cardState}>
          <Board
            p1pos={user1Data.userPosition}
            p2pos={user2Data.userPosition}
            p3pos={user3Data.userPosition}
            p4pos={user4Data.userPosition}
          />
          {/* dummy button to test passing state */}
          {/* <button onClick={loadCards}>testAPI</button> */}
          <button onClick={testFunPrint}>console test</button>
          {/* <button onClick={pass}>Pass turn</button> */}
          <div className="cards-container col">
            <Chat handleChatSend={handleChatSend} textValue={textValue} />
            <TileCard learn={learn} noLearn={nextTurn} />
            <Choice
              moveOne={
                gameState.userNum === 1
                  ? p1m1
                  : gameState.userNum === 2
                  ? p2m1
                  : gameState.userNum === 3
                  ? p3m1
                  : p4m1
              }
              moveTwo={
                gameState.userNum === 1
                  ? p1m2
                  : gameState.userNum === 2
                  ? p2m2
                  : gameState.userNum === 3
                  ? p3m2
                  : p4m2
              }
              moveThree={
                gameState.userNum === 1
                  ? p1m3
                  : gameState.userNum === 2
                  ? p2m3
                  : gameState.userNum === 3
                  ? p3m3
                  : p4m3
              }
              pass={pass}
            />
          </div>
        </CardContext.Provider>
      </div>
    </>
  );
}

export default App;
