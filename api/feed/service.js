"use strict";

const { connect, disconnect } = require("../utilities/database");

const fetchFeed = async (set) => {
  try {
    let feeds;
    if (set) {
      feeds = await (await connect())
        .collection("feeds")
        .find({})
        .sort({ _id: -1 })
        .limit(10)
        .skip(set)
        .toArray();
    } else {
      feeds = await (await connect())
        .collection("feeds")
        .find({})
        .sort({ _id: -1 })
        .limit(10)
        .toArray();
    }
    await disconnect();
    return feeds;
  } catch (error) {
    await disconnect();
    throw error;
  }
};

module.exports = { fetchFeed };
