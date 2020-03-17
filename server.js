const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4001;
const app = express();
const apiRoute = require("./routes/apiRoute");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//
// (gameState.userNum ===1 && user2Data.done === false) {
//     setGameState({...gameState, userNum: 2})
//   } else if (gameState.userNum ===1 && user2Data.done === true && user3Data.done === false ) {
//     setGameState({...gameState, userNum: 3})
//   } else if (gameState.userNum ===1 && user2Data.done === true && user3Data.done === true && user4Data.done === false) {
//     setGameState({...gameState, userNum: 4})
//   }

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/cards",
//   { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
//   console.log("Db connected!")
// );

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://user:tzvik200@ds147900.mlab.com:47900/heroku_bh00mj12",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  console.log("Db connected!")
);

app.use('/api', apiRoute);

const server = http.createServer(app);
//const server = express();

//const io = socketIo(server);

const io = require('socket.io').listen(server)

io.origins(["https://radiant-retreat-86258.herokuapp.com/"]);

io.sockets.on("connection", socket => {
  console.log("New client connected");
  socket.on("chat message", function(msg) {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
  socket.on("game state", function(state) {
    console.log(state)
    io.emit("game state", state)
  })
  socket.on("p1state", function(state) {
    console.log(state)
    io.emit("p1state", state)
  })
  socket.on("p2state", function(state) {
    console.log(state)
    io.emit("p2state", state)
  })
  socket.on("p3state", function(state) {
    console.log(state)
    io.emit("p3state", state)
  })
  socket.on("p4state", function(state) {
    console.log(state)
    io.emit("p4state", state)
  })
  socket.on("game start", function(state) {
    console.log(state)
    io.emit("game start", state)
  })

  socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
