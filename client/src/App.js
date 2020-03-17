import React, { useState, useEffect } from "react";
import "./App.css";
import API from "./utils/API";
import Board from "./components/Board/Board";
import TileCard from "./components/TileCard/TileCard";
import Chat from "./components/Chat/Chat";
import Choice from "./components/Choice/Choice";
import Header from "./components/Header/Header";
import socketIOClient from "socket.io-client";
import CardContext from "./utils/CardContext";
import Footer from "./components/footer/Footer";

import io from "socket.io-client";

function App() {
  window.pNum = 0;
  // const getParameterByName = (username, url) => {
  //   if (!url) url = window.location.href;
  //   username = username.replace(/[[\]]/g, "\\$&");
  //   var regex = new RegExp("[?&]" + username + "(=([^&#]*)|&|#|$)"),
  //     results = regex.exec(url),
  //     res;
  //   if (!results) return null;
  //   if (!results[2]) return "";
  //   try {
  //     res = decodeURIComponent(results[2].replace(/\+/g, " "));
  //   } catch (error) {
  //     res = "";
  //   }
  //   console.log(res);
  //   return res;
  // }

  // window.onload = function() {
  //   getParameterByName();

  // }

  const [textValue, setTextValue] = useState("");
  //const socket = socketIOClient("https://radiant-retreat-86258.herokuapp.com/");
  const socket = io();

  //a global game state to track global variables
  const [gameState, setGameState] = useState({
    userNum: 1,
    totalPlayers: 4,
    gameOn: false
  });

  //starter state for each potential user
  const [user1Data, setUser1Data] = useState({
    userExists: false,
    userId: 1,
    userName: "",
    userPosition: 1,
    userTime: 1500,
    userTech: [],
    done: false,
    score: 0
  });

  const [user2Data, setUser2Data] = useState({
    userExists: false,
    userId: 2,
    userName: "",
    userPosition: 1,
    userTime: 1500,
    userTech: [],
    done: false,
    score: 0
  });

  const [user3Data, setUser3Data] = useState({
    userExists: false,
    userId: 3,
    userName: "",
    userPosition: 1,
    userTime: 1500,
    userTech: [],
    done: false,
    score: 0
  });

  const [user4Data, setUser4Data] = useState({
    userExists: false,
    userId: 4,
    userName: "",
    userPosition: 1,
    userTime: 1500,
    userTech: [],
    done: false,
    score: 0
  });

  //a function that consoles out the current state of the 4 users, and the game state
  const testFunPrint = () => {
    console.log(gameState, user1Data, user2Data, user3Data, user4Data, );
  };

  const testFunPass = () => {
    pass();
    // if (gameState.userNum === 1) {
    // } else if (gameState.userNum===2) {
      
    // } else if (gameState.userNum===3) {
      
    // } else if (gameState.userNum ===4) {
      
    // }
    socket.emit("p1state", user1Data);
  socket.emit("p2state", user2Data);
  socket.emit("p3state", user3Data);
  socket.emit("p4state", user4Data);
    // pass()
  };

  //listeners to state being passed between seperate game users that updates the local user/game state to match what was transmitted
  // useEffect(() => {
  //   socket.on("p1state", state => {
  //     // console.log("1", user1Data)
  //     // setUser1Data({...user1Data, state});
  //     testSet1(state)
  //   });
  //   // return console.log("clean")
  // }, [user1Data]);
  // useEffect(
  //   () => {
  //      console.log("Test, useEffect() fired on var state change");
  //      testFunPass();
  //   },
  //   [user1Data.userTech]
  // );

  useEffect(() => {
    // console.log("1", user1Data);
    socket.on("p1state", state => {
      testSet1(state);
    });
  }, []);

  const testSet1 = state => {
    setUser1Data(state);
    // pass()
  };

  useEffect(() => {
    socket.on("p2state", state => {
      testSet2(state);
      // pass()
    });
  }, []);

  const testSet2 = state => {
    setUser2Data(state);
  };

  useEffect(() => {
    socket.on("p3state", state => {
      testSet3(state);
    });
  }, []);

  const testSet3 = state => {
    setUser3Data(state);
  };

  useEffect(() => {
    socket.on("p4state", state => {
      testSet4(state);
    });
  }, []);

  const testSet4 = state => {
    setUser4Data(state);
  };

  useEffect(() => {
    console.log("5");
    socket.on("game state", state => {
      testSetGame(state)
    });
  }, []);
  
  const testSetGame = state => {
    console.log("here")
    setGameState(state)
    //nextTurn();
  }

  useEffect(() => {
    console.log("6");
    setUser1Data(user1Data => {
      return {
        ...user1Data,
        done: true,
        score: user1Data.userTime * (user1Data.userTech.length * 100)
      };
    });
  }, [user1Data.userPosition > 24]);

  useEffect(() => {
    console.log("7");
    setUser2Data(user2Data => {
      return {
        ...user2Data,
        done: true,
        score: user2Data.userTime * (user2Data.userTech.length * 100)
      };
    });
  }, [user2Data.userPosition > 24]);

  useEffect(() => {
    console.log("8");
    setUser3Data(user3Data => {
      return {
        ...user3Data,
        done: true,
        score: user3Data.userTime * (user3Data.userTech.length * 100)
      };
    });
  }, [user3Data.userPosition > 24]);

  useEffect(() => {
    console.log("9");
    setUser4Data(user4Data => {
      return {
        ...user4Data,
        done: true,
        score: user4Data.userTime * (user4Data.userTech.length * 100)
      };
    });
  }, [user4Data.userPosition > 24]);

  //a hook listening to the number of players that updates the state of an existing player to true
  useEffect(() => {
    console.log("10");
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

  const carder = () => {
    loadCards()
  }

  //functions handling updating of user location state based on their action choice, passed as props to the Choice componant
  const p1m1 = () => {
    setUser1Data({ ...user1Data, userPosition: user1Data.userPosition + 1 });
    // loadCards();
  };

  const p1m2 = () => {
    setUser1Data({ ...user1Data, userPosition: user1Data.userPosition + 2 });
    // loadCards();
  };
  const p1m3 = () => {
    setUser1Data({ ...user1Data, userPosition: user1Data.userPosition + 3 });
    // loadCards();
  };
  const p2m1 = () => {
    setUser2Data({ ...user2Data, userPosition: user2Data.userPosition + 1 });
    // loadCards();
  };
  const p2m2 = () => {
    setUser2Data({ ...user2Data, userPosition: user2Data.userPosition + 2 });
    // loadCards();
  };
  const p2m3 = () => {
    setUser2Data({ ...user2Data, userPosition: user2Data.userPosition + 3 });
    // loadCards();
  };
  const p3m1 = () => {
    setUser3Data({ ...user3Data, userPosition: user3Data.userPosition + 1 });
    // loadCards();
  };
  const p3m2 = () => {
    setUser3Data({ ...user3Data, userPosition: user3Data.userPosition + 2 });
    // loadCards();
  };
  const p3m3 = () => {
    setUser3Data({ ...user3Data, userPosition: user3Data.userPosition + 3 });
    // loadCards();
  };
  const p4m1 = () => {
    setUser4Data({ ...user4Data, userPosition: user4Data.userPosition + 1 });
    // loadCards();
  };
  const p4m2 = () => {
    setUser4Data({ ...user4Data, userPosition: user4Data.userPosition + 2 });
    // loadCards();
  };
  const p4m3 = () => {
    setUser4Data({ ...user4Data, userPosition: user4Data.userPosition + 3 });
    // loadCards();
  };

  const newGame = () => {
    let pNum = prompt("How many players are there?");
    switch (parseInt(pNum)) {
      case 1:
        setGameState({...gameState, totalPlayers:1})
        setUser1Data({...user1Data, done:false})
        setUser2Data({...user2Data, done:true})
        setUser3Data({...user3Data, done:true})
        setUser4Data({...user4Data, done:true})
        break;
      case 2:
        setGameState({...gameState, totalPlayers:2})
        setUser1Data({...user1Data, done:false})
        setUser2Data({...user2Data, done:false})
        setUser3Data({...user3Data, done:true})
        setUser4Data({...user4Data, done:true})
        break;
      case 3:
        setGameState({...gameState, totalPlayers:3})
        setUser1Data({...user1Data, done:false})
        setUser2Data({...user2Data, done:false})
        setUser3Data({...user3Data, done:false})
        setUser4Data({...user4Data, done:true})
        break;
      case 4:
        setGameState({...gameState, totalPlayers:4})
        setUser1Data({...user1Data, done:false})
        setUser2Data({...user2Data, done:false})
        setUser3Data({...user3Data, done:false})
        setUser4Data({...user4Data, done:false})
        break;

      default:
        break;
    }
  };

  //a function that updates the state of a chat message and sends it to the io server to be delivered to all connected users
  function handleChatSend(chatMsg) {
    setTextValue(chatMsg);
    socket.emit("chat message", chatMsg);
  }

  //a hook listening to changes in the text value that triggers a rerender, and thus a display of the new message
  useEffect(() => {
    console.log("11");
    socket.on("chat message", msg => {
      setTextValue(msg);
    });
  }, [textValue]);

  // Card code
  const [cardState, setCardState] = useState({
    cardData: []
  });

  const [currentCard, setCurrentCard] = useState({
    title: "",
    description: "",
    cost: 0
  });

  window.onload = function() {
    API.getCards().then(function(d) {
      console.log(d);
      setCardState({ cardData: d });
    });
  };

  const loadCards = () => {
    console.log(cardState);
    switch (gameState.userNum) {
      case 1:
        renderCard(user1Data.userPosition);
        break;
      case 2:
        renderCard(user2Data.userPosition);
        break;
      case 3:
        renderCard(user3Data.userPosition);
        break;
      case 4:
        renderCard(user4Data.userPosition);
        break;
      default:
        break;
    }
  };

  const renderCard = userPosition => {
    let card = cardState.cardData.data;
    switch (userPosition-1) {
      case 1:
        setCurrentCard({
          title: card[0].title,
          description: card[0].description,
          cost: card[0].cost
        });
        break;
      case 2:
        setCurrentCard({
          title: card[1].title,
          description: card[1].description,
          cost: card[1].cost
        });
        break;
      case 3:
        setCurrentCard({
          title: card[2].title,
          description: card[2].description,
          cost: card[2].cost
        });
        break;
      case 4:
        setCurrentCard({
          title: card[3].title,
          description: card[3].description,
          cost: card[3].cost
        });
        break;
      case 5:
        setCurrentCard({
          title: card[4].title,
          description: card[4].description,
          cost: card[4].cost
        });
        break;
      case 6:
        setCurrentCard({
          title: card[5].title,
          description: card[5].description,
          cost: card[5].cost
        });
        break;
      case 7:
        setCurrentCard({
          title: card[6].title,
          description: card[6].description,
          cost: card[6].cost
        });
        break;
      case 8:
        setCurrentCard({
          title: card[7].title,
          description: card[7].description,
          cost: card[7].cost
        });
        break;
      case 9:
        setCurrentCard({
          title: card[8].title,
          description: card[8].description,
          cost: card[8].cost
        });
        break;
      case 10:
        setCurrentCard({
          title: card[9].title,
          description: card[9].description,
          cost: card[9].cost
        });
        break;
      case 11:
        setCurrentCard({
          title: card[10].title,
          description: card[10].description,
          cost: card[10].cost
        });
        break;
      case 12:
        setCurrentCard({
          title: card[11].title,
          description: card[11].description,
          cost: card[11].cost
        });
        break;
      case 13:
        setCurrentCard({
          title: card[12].title,
          description: card[12].description,
          cost: card[12].cost
        });
        break;
      case 14:
        setCurrentCard({
          title: card[13].title,
          description: card[13].description,
          cost: card[13].cost
        });
        break;
      case 15:
        setCurrentCard({
          title: card[14].title,
          description: card[14].description,
          cost: card[14].cost
        });
        break;
      case 16:
        setCurrentCard({
          title: card[15].title,
          description: card[15].description,
          cost: card[15].cost
        });
        break;
      case 17:
        setCurrentCard({
          title: card[16].title,
          description: card[16].description,
          cost: card[16].cost
        });
        break;
      case 18:
        setCurrentCard({
          title: card[17].title,
          description: card[17].description,
          cost: card[17].cost
        });
        break;
      case 19:
        setCurrentCard({
          title: card[18].title,
          description: card[18].description,
          cost: card[18].cost
        });
        break;
      case 20:
        setCurrentCard({
          title: card[19].title,
          description: card[19].description,
          cost: card[19].cost
        });
        break;
      case 21:
        setCurrentCard({
          title: card[20].title,
          description: card[20].description,
          cost: card[20].cost
        });
        break;
      case 22:
        setCurrentCard({
          title: card[21].title,
          description: card[21].description,
          cost: card[21].cost
        });
        break;
      case 23:
        setCurrentCard({
          title: card[22].title,
          description: card[22].description,
          cost: card[22].cost
        });
        break;
      case 24:
        setCurrentCard({
          title: card[23].title,
          description: card[23].description,
          cost: card[23].cost
        });
        break;

      default:
        break;
    }
    console.log(currentCard);
  };

  //a function handling the passage of turns between players, allows for players to have finished the game

  function nextTurn() {
    if (
      gameState.userNum <= gameState.totalPlayers &&
      gameState.userNum === 1 &&
      user2Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 2 });
    } else if (
      gameState.userNum <= gameState.totalPlayers &&
      gameState.userNum === 1 &&
      user2Data.done === true &&
      user3Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 3 });
    } else if (
      gameState.userNum <= gameState.totalPlayers &&
      gameState.userNum === 1 &&
      user2Data.done === true &&
      user3Data.done === true &&
      user4Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 4 });
    } else if (
      gameState.userNum <= gameState.totalPlayers &&
      gameState.userNum === 2 &&
      user3Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 3 });
    } else if (
      gameState.userNum <= gameState.totalPlayers &&
      gameState.userNum === 2 &&
      user3Data.done === true &&
      user4Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 4 });
    } else if (
      gameState.userNum <= gameState.totalPlayers &&
      gameState.userNum === 2 &&
      user3Data.done === true &&
      user4Data.done === true &&
      user1Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 1 });
    } else if (
      gameState.userNum <= gameState.totalPlayers &&
      gameState.userNum === 3 &&
      user4Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 4 });
    } else if (
      gameState.userNum <= gameState.totalPlayers &&
      gameState.userNum === 3 &&
      user4Data.done === true &&
      user1Data.done === false
    ) {
      setGameState({ ...gameState, userNum: 1 });
    } else if (
      gameState.userNum <= gameState.totalPlayers &&
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
      gameState.userNum <= gameState.totalPlayers &&
      gameState.userNum === 1 &&
      user2Data.done === true &&
      user3Data.done === true &&
      user4Data.done === true
    ) {
      setGameState({ ...gameState, userNum: 1 });
    } else if (
      gameState.userNum <=gameState.totalPlayers &&
      gameState.userNum === 2 &&
      user3Data.done === true &&
      user4Data.done === true &&
      user1Data.done === true
    ) {
      setGameState({ ...gameState, userNum: 2 });
    } else if (
      gameState.userNum <= gameState.totalPlayers &&
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
    else alert("here")
  }

  function pass() {
    socket.emit("game state", gameState);
  }
  //a function handling player learning choice
  function learn() {
    switch (gameState.userNum) {
      case 1:
        setUser1Data({
          ...user1Data,
          userTech: [...user1Data.userTech, currentCard.title]
        });
        nextTurn()
        // pass();
        break;
      case 2:
        setUser2Data({
          ...user2Data,
          userTech: [...user2Data.userTech, currentCard.title]
        });
        // pass();
        nextTurn()
        break;
      case 3:
        setUser2Data({
          ...user3Data,
          userTech: [...user3Data.userTech, currentCard.title]
        });
        // pass();
        nextTurn()
        break;
      case 4:
        setUser4Data({
          ...user4Data,
          userTech: [...user4Data.userTech, currentCard.title]
        });
        nextTurn()
        // pass();
        break;

      default:
        break;
    }
  }

  function NoLearn() {
    switch (gameState.userNum) {
      case 1:
        // socket.emit("p1state", user1Data);
        nextTurn()

        break;
      case 2:
        // socket.emit("p2state", user2Data);
        nextTurn()

        break;
      case 3:
        // socket.emit("p3state", user3Data);
        nextTurn()

        break;
      case 4:
        // socket.emit("p4state", user4Data);
        nextTurn()

        break;

      default:
        break;
    }
  }

  return (
    <>
      <Header />

      <div className="content-container">
        <CardContext.Provider value={currentCard}>
          <Board
            p1pos={user1Data.userPosition}
            p2pos={user2Data.userPosition}
            p3pos={user3Data.userPosition}
            p4pos={user4Data.userPosition}
          />
          {/* dummy button to test passing state */}
          {/* <button onClick={loadCards}>testAPI</button> */}
          {/* <button onClick={testFunPrint}>print</button> */}
          {/* <button onClick={carder}>cards</button> */}
          {/* <button onClick={nextTurn}>pass </button> */}
          <div className="cards-container col">
            <Chat handleChatSend={handleChatSend} textValue={textValue} />
            <TileCard learn={learn} noLearn={NoLearn} pass={testFunPass} card={carder}/>
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
            />
            <Footer game={newGame} />
          </div>
        </CardContext.Provider>
      </div>
    </>
  );
}

export default App;
