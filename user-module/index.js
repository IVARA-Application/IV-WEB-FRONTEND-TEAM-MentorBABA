require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { registerNewCustomUser, customUserLogin } = require("./controller");
const validator = require("./middlewares/validator");
const { NewCustomUserSchema, UserLoginSchema } = require("./schemas");

const app = express();

// Middlewares to parse request body
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Defining routes to be used
app.get("/healthcheck", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});
app.get("/login/linkedin", (req, res) => {
  res.redirect(
    `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.LINKEDIN_CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fredirect%2Flinkedin&state=987654321&scope=r_liteprofile%20r_emailaddress`
  );
});
app.get("/redirect/linkedin", (req, res) => {
  const { code } = req.query;
  if (code === undefined) {
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "*",
    });
    return res.status(403).json({
      status: false,
      message: "We could not log you in with LinkedIn.",
    });
  }
  console.log(code);
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Headers": "*",
  });
  res.end();
});

app.post(
  "/register",
  validator("body", NewCustomUserSchema),
  async (req, res) => {
    try {
      const { name, email, password, occupation, phone } = req.body;
      await registerNewCustomUser(name, email, password, occupation, phone);
      res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "*",
      });
      res.json({
        success: true,
        message: "User has been registered successfully.",
      });
    } catch (error) {
      res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "*",
      });
      res.status(error.code).json({ success: false, message: error.message });
    }
  }
);

app.post("/login", validator("body", UserLoginSchema), async (req, res) => {
  try {
    const { email, password } = req.body;
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "*",
    });
    res.json({
      success: true,
      token: await customUserLogin(email, password),
    });
  } catch (error) {
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "*",
    });
    res.status(error.code).json({ success: false, message: error.message });
  }
});

// App export for Claudia
module.exports = app;

// Listening on Port for development
app.listen(4000, () => {
  console.log("Started on Port 4000");
});
