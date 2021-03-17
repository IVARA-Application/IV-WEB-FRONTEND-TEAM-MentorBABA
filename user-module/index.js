require("dotenv").config();

const express = require("express");
const { registerNewCustomUser, customUserLogin } = require("./controller");
const validator = require("./middlewares/validator");
const { NewCustomUserSchema, UserLoginSchema } = require("./schemas");

const app = express();

// Middlewares to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Defining routes to be used
app.get("/healthcheck", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.post(
  "/register",
  validator("body", NewCustomUserSchema),
  async (req, res) => {
    try {
      const { name, email, password, occupation, phone } = req.body;
      await registerNewCustomUser(name, email, password, occupation, phone);
      res.json({
        success: true,
        message: "User has been registered successfully.",
      });
    } catch (error) {
      res.status(error.code).json({ success: false, message: error.message });
    }
  }
);

app.post("/login", validator("body", UserLoginSchema), async (req, res) => {
  try {
    const { email, password } = req.body;
    res.json({
      success: true,
      token: await customUserLogin(email, password),
    });
  } catch (error) {
    res.status(error.code).json({ success: false, message: error.message });
  }
});

// App export for Claudia
module.exports = app;

// Listening on Port for development
app.listen(4000, () => {
  console.log("Started on Port 4000");
});
