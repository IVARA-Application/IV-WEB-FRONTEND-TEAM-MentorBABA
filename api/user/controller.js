"use strict";

const { Router } = require("express");
const logger = require("../utilities/logger");
const { verifyUserLogin, addNewUser, updateUserData } = require("./service");

const userLoginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Pass control to service layer
    res.json({
      success: true,
      message: `User ${username} has been logged in.`,
      ...(await verifyUserLogin(username, password)),
    });
  } catch (error) {
    logger.error(error);
    if (error.custom) {
      return res
        .status(error.code)
        .json({ success: false, message: error.message });
    }
    res
      .status(500)
      .json({ success: false, message: "Something went wrong at the server." });
  }
};

const userRegistrationController = async (req, res) => {
  try {
    const { name, email, password, occupation, phone } = req.body;
    // Pass control to service layer
    await addNewUser(name, email, password, email, occupation, phone);
    res.json({
      success: true,
      message: `User ${email} has been registered successfully.`,
    });
  } catch (error) {
    logger.error(error);
    if (error.custom) {
      return res
        .status(error.code)
        .json({ success: false, message: error.message });
    }
    res
      .status(500)
      .json({ success: false, message: "Something went wrong at the server." });
  }
};

const updateUserProfileController = async (req, res) => {
  try {
    const { name, email, occupation, profilePic } = req.body;
    // Pass control to service layer
    await updateUserData(name, email, occupation, profilePic);
    res.json({
      success: true,
      message: `User ${email} has been updated successfully.`,
    });
  } catch (error) {
    logger.error(error);
    if (error.custom) {
      return res
        .status(error.code)
        .json({ success: false, message: error.message });
    }
    res
      .status(500)
      .json({ success: false, message: "Something went wrong at the server." });
  }
};

const app = Router();

module.exports = () => {
  app.post("/login", userLoginController);
  app.post("/register", userRegistrationController);
  app.patch("/update", updateUserProfileController);

  return app;
};
