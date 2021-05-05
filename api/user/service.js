"use strict";

const { connect, disconnect } = require("../utilities/database");
const argon2 = require("argon2");
const { signJwt } = require("../utilities/jwt");

/**
 * Verify username and password and generate a JWT
 * @param {string} username
 * @param {string} password
 */
const verifyUserLogin = async (username, password) => {
  try {
    // Search database by username
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
    if (!(await argon2.verify(user.hash, password)))
      throw {
        custom: true,
        code: 403,
        message: `Incorrect user credentials.`,
      };
    await disconnect();
    return {
      token: signJwt({ username: user.username }),
    };
  } catch (error) {
    await disconnect();
    throw error;
  }
};

/**
 * Fetch a user profile
 * @param {string} username The username of the user
 * @returns User profile data
 */
const fetchUserProfile = async (username) => {
  try {
    const user = await (await connect())
      .collection("users")
      .findOne({ username }, { projection: { hash: 0, username: 0, _id: 0 } });
    if (user === null)
      throw {
        custom: true,
        code: 404,
        message: `User with username ${username} was not found in the database.`,
      };
    await disconnect();
    return user;
  } catch (error) {
    await disconnect();
    throw error;
  }
};

/**
 * Add a new user
 * @param {string} name The name of the user
 * @param {string} email The email address of the user
 * @param {string} password The password of the user account
 * @param {string} username The username of the user account
 * @param {string} occupation The occupation of the user
 * @param {string} phone The phone number of the user
 * @returns JWT Token with username
 */
const addNewUser = async (
  name,
  email,
  password,
  username,
  occupation,
  phone
) => {
  try {
    const exisitngUser = await (await connect())
      .collection("users")
      .findOne({ username });
    if (exisitngUser != null)
      throw {
        custom: true,
        code: 409,
        message: `User ${username} already exists in the database.`,
      };
    const hash = await argon2.hash(password);
    await (await connect()).collection("users").insertOne({
      name,
      email,
      hash,
      username,
      occupation,
      phone,
      profilePic:
        "https://mentorbaba.s3.ap-south-1.amazonaws.com/sampleUser.jpg",
    });
    return signJwt({ username });
  } catch (error) {
    await disconnect();
    throw error;
  }
};

/**
 * Update the user account details
 * @param {string} name The name of the user
 * @param {string} username The username of the user account
 * @param {string} name The email of the user
 * @param {string} occupation The occupation of the user
 * @param {string} profilePic The profilePic URL of the user account
 */
const updateUserData = async (
  name,
  username,
  email,
  occupation,
  profilePic
) => {
  try {
    const exisitngUser = await (await connect())
      .collection("users")
      .findOne({ username });
    if (exisitngUser == null)
      throw {
        custom: true,
        code: 404,
        message: `User ${username} does not exist in the database.`,
      };
    await (await connect())
      .collection("users")
      .updateOne(
        { username },
        { $set: { name, email, occupation, profilePic } }
      );
    await await disconnect();
  } catch (error) {
    await disconnect();
    throw error;
  }
};

module.exports = {
  verifyUserLogin,
  addNewUser,
  updateUserData,
  fetchUserProfile,
};
