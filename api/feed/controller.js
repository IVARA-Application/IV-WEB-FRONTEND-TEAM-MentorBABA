"use strict";

const { Router } = require("express");
const { authenticateUser } = require("../middlewares/authenticationMiddleware");

const logger = require("../utilities/logger");
const { fetchFeed, addFeed } = require("./service");

const addFeedController = async (req, res) => {
  try {
    const { content } = req.body;
    // Pass control to service layer
    await addFeed(content, res.locals.user.username);
    res.json({
      success: true,
      message: "New feed has been added.",
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

const fetchFeedController = async (req, res) => {
  try {
    const { set } = req.query;
    // Pass control to service layer
    res.json({
      success: true,
      data: await fetchFeed(parseInt(set)),
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
  app.get("/", authenticateUser, fetchFeedController);
  app.post("/add", authenticateUser, addFeedController);

  return app;
};
