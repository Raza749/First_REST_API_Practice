const express = require("express");
const userRouter = require("./routes/user.js");
const { connectMongoDb } = require("./connection.js");
const { logReqRes } = require("./middleware/index.js");

const app = express();

// Connections
connectMongoDb("mongodb://127.0.0.1:27017/nodejs-project-1")
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.log("MongoDB ERROR ", err);
  });

// MIDLEWARE
app.use(logReqRes("log.txt"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/users", userRouter);

// Start the server
const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log(`Server Started at the port ${PORT}`);
});
