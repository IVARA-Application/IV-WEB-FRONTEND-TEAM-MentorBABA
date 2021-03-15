require("dotenv").config();

const express = require("express");
const validator = require("./middlewares/validator");

const app = express();

// Middlewares to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Defining routes to be used
app.get("/healthcheck", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.post("/register", validator, (req, res) => {});

// App export for Claudia
module.exports = app;

// Listening on Port for development
app.listen(4000, () => {
  console.log("Started on Port 4000");
});
