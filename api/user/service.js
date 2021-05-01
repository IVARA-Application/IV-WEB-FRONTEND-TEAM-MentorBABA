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
      token: signJwt({ email: user.email }),
    };
  } catch (error) {
    await disconnect();
    throw error;
  }
};

/**
 * Fetch a user profile
 * @param {string} email The email of the user
 * @returns
 */
const fetchUserProfile = async (email) => {
  try {
    const student = await (await connect())
      .collection("users")
      .findOne({ email }, { projection: { hash: 0, username: 0, _id: 0 } });
    if (student === null)
      throw {
        custom: true,
        code: 404,
        message: `User with email ${email} was not found in the database.`,
      };
    await disconnect();
    return student;
  } catch (error) {
    await disconnect();
    throw error;
  }
};

const addNewUser = async (email, password, username, occupation, phone) => {
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
      email,
      hash,
      username,
      occupation,
      phone,
    });
  } catch (error) {
    await disconnect();
    throw error;
  }
};

module.exports = { verifyUserLogin, addNewUser, fetchUserProfile };
