"use strict";

const { connect, disconnect } = require("../utilities/database");
const { nanoid } = require("nanoid");

/**
 * Fetch feed
 * @param {number} set The set number to be fetched
 * @returns The array of feeds
 */
const fetchFeed = async (username, set) => {
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
    for (let i = 0; i < feeds.length; i++) {
      const element = feeds[i];
      element.liked =
        element.usersLiked.findIndex((user) => user.username === username) !==
        -1;
    }
    return feeds;
  } catch (error) {
    await disconnect();
    throw error;
  }
};

/**
 * Add a new feed
 * @param {string} content The content to be added
 * @param {string} username The username of the user adding the content
 */
const addFeed = async (content, username) => {
  try {
    const user = await (await connect())
      .collection("users")
      .findOne({ username });
    if (user === null)
      // Throw error if username was not found
      throw {
        custom: true,
        code: 404,
        message: `User ${username} was not found in the database.`,
      };
    const newFeed = {
      content,
      feedId: nanoid(10),
      author: user.name.split(" ")[0],
      profilePic: user.profilePic,
      likes: 0,
      usersLiked: [],
      comments: 0,
      usersCommented: [],
    };
    await (await connect()).collection("feeds").insertOne({ ...newFeed });
    await disconnect();
  } catch (error) {
    await disconnect();
    throw error;
  }
};

/**
 * Like a feed
 * @param {string} feedId The ID of the feed to be liked
 * @param {string} username The username of the user logged in
 */
const likeFeed = async (feedId, username) => {
  try {
    const feed = await (await connect())
      .collection("feeds")
      .findOne({ feedId });
    if (!feed)
      throw {
        custom: true,
        code: 404,
        message: `Feed with ID ${feedId} was not found in the database.`,
      };
    const user = await (await connect())
      .collection("users")
      .findOne({ username });
    if (!user)
      throw {
        custom: true,
        code: 404,
        message: `User with username ${username} was not found in the database.`,
      };
    const usersLikedSet = new Set(feed.usersLiked);
    usersLikedSet.add({
      name: user.name.split(" ")[0],
      username,
      profilePic: user.profilePic,
    });
    await (await connect())
      .collection("feeds")
      .updateOne(
        { feedId },
        { $set: { usersLiked: [...usersLikedSet], likes: usersLikedSet.size } }
      );
  } catch (error) {
    await disconnect();
    throw error;
  }
};

/**
 * Unlike a feed
 * @param {string} feedId The ID of the feed to be unliked
 * @param {string} username The username of the user logged in
 */
const unlikeFeed = async (feedId, username) => {
  try {
    const feed = await (await connect())
      .collection("feeds")
      .findOne({ feedId });
    if (!feed)
      throw {
        custom: true,
        code: 404,
        message: `Feed with ID ${feedId} was not found in the database.`,
      };
    const userAtIndex = feed.usersLiked.findIndex(
      (element) => element.username === username
    );
    if (userAtIndex <= -1)
      throw {
        custom: true,
        code: 400,
        message: `Feed with ID ${feedId} was not liked by User ${username}.`,
      };
    feed.usersLiked.splice(userAtIndex, 1);
    await (await connect())
      .collection("feeds")
      .updateOne(
        { feedId },
        { $set: { usersLiked: feed.usersLiked, likes: feed.usersLiked.length } }
      );
  } catch (error) {
    await disconnect();
    throw error;
  }
};

module.exports = { fetchFeed, addFeed, likeFeed, unlikeFeed };
