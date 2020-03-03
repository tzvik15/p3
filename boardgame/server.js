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

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cards",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  console.log("Db connected!")
);

app.use('/api', apiRoute);

const server = http.createServer(app);

const io = socketIo(server);

io.on("connection", socket => {
  console.log("New client connected");
  socket.on("chat message", function(msg) {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
  socket.on("test state", function(state) {
    io.emit("test state", state)
  })

  socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
