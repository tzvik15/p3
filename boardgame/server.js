const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const PORT = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

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
