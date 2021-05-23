"use strict";

const { connect, disconnect } = require("../utilities/database");

/**
 * Fetch notification
 * @param {number} set The set number to be fetched
 * @returns The array of notifications
 */
const fetchNotification = async (set) => {
  try {
    let notifications;
    if (set) {
      notifications = await (await connect())
        .collection("notifications")
        .find({})
        .sort({ _id: -1 })
        .limit(10)
        .skip(set)
        .toArray();
    } else {
      notifications = await (await connect())
        .collection("notifications")
        .find({})
        .sort({ _id: -1 })
        .limit(10)
        .toArray();
    }
    await disconnect();
    return notifications;
  } catch (error) {
    await disconnect();
    throw error;
  }
};

/**
 * Helper method to add a new notification to the collection
 * @param {string} message The message of the new notification
 * @param {string} profilePic The profile of the iser responsible for the notification
 */
const addNotification = async (message, profilePic) => {
  try {
    await (await connect())
      .collection("notifications")
      .insertOne({ message, profilePic });
    await disconnect();
  } catch (error) {
    await disconnect();
    throw error;
  }
};

module.exports = { fetchNotification, addNotification };
