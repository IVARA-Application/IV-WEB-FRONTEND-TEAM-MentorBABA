const argon2 = require("argon2");
const axios = require("axios");
const logger = require("./services/loggerService");
const database = require("./services/databaseService");
const { signUserJwt } = require("./services/jwtService");

/**
 * Register a new custom user
 * @param {*} name The full name of the user
 * @param {*} email The email address of the user
 * @param {*} password The password of the user
 * @param {*} occupation The occupation of the user
 * @param {*} phone The mobile number of the user
 */
const registerNewCustomUser = async (
  name,
  email,
  password,
  occupation,
  phone
) => {
  try {
    password = await argon2.hash(password);
    const db = await database();
    await db
      .collection("users")
      .insertOne({ name, email, password, occupation, phone, type: "custom" });
  } catch (error) {
    logger.warn(error);
    if (!error.isCustom)
      throw {
        code: 500,
        message:
          "There was some issue at the server end. We are working to fix it as soon as possible.",
      };
    throw { code: error.code, message: error.message };
  }
};

/**
 * Generate JWT for custom user login
 * @param {*} email The email address to login with
 * @param {*} password The password to login with
 * @returns JWT on successful login
 */
const customUserLogin = async (email, password) => {
  try {
    const userData = await (await database())
      .collection("users")
      .findOne({ email });
    if (userData === null)
      throw {
        isCustom: true,
        code: 403,
        message: "Invalid login credentials.",
      };
    if (!(await argon2.verify(userData.password, password))) {
      throw {
        isCustom: true,
        code: 403,
        message: "Invalid login credentials.",
      };
    }
    const lambdaResponse = await signUserJwt(email);
    const lambdaResponseObject = JSON.parse(lambdaResponse.Payload);
    if (lambdaResponseObject.errorMessage)
      throw lambdaResponseObject.errorMessage;
    return lambdaResponseObject;
  } catch (error) {
    logger.warn(error);
    if (!error.isCustom)
      throw {
        code: 500,
        message:
          "There was some issue at the server end. We are working to fix it as soon as possible.",
      };
    throw { code: error.code, message: error.message };
  }
};

/**
 * Exchange LinkedIn login code for an access token
 * @param {*} code LinkedIn Login Code
 * @returns LinkedIn access token
 */
const fetchLinkedinAccessToken = async (code) => {
  try {
    const response = await axios.post(
      `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${code}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fthirdparty&client_id=${process.env.LINKEDIN_CLIENT_ID}&client_secret=${process.env.LINKEDIN_CLIENT_SECRET}`,
      {},
      {
        validateStatus: function (status) {
          return status >= 200 && status < 500;
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    logger.warn(error);
    if (!error.isCustom)
      throw {
        code: 500,
        message:
          "There was some issue at the server end. We are working to fix it as soon as possible.",
      };
    throw { code: error.code, message: error.message };
  }
};

/**
 * Exchage LinkedIn Access Token for a JWT
 * @param {*} code
 * @returns JWT to be used for user identification
 */
const fetchLinkedinProfileJwt = async (code) => {
  try {
    const response = await axios.get(`https://api.linkedin.com/v2/me`, {
      validateStatus: function (status) {
        return status >= 200 && status < 500;
      },
      headers: {
        Authorization: `Bearer ${code}`,
      },
    });
    const db = await database();
    await db.collection("users").updateOne(
      { id: response.data.id },
      {
        $set: {
          id: response.data.id,
          name: `${response.data.localizedFirstName} ${response.data.localizedLastName}`,
          type: "linkedin",
        },
      },
      {
        upsert: true,
      }
    );
    const lambdaResponse = await signUserJwt(response.data.id);
    const lambdaResponseObject = JSON.parse(lambdaResponse.Payload);
    if (lambdaResponseObject.errorMessage)
      throw lambdaResponseObject.errorMessage;
    return lambdaResponseObject;
  } catch (error) {
    logger.warn(error);
    if (!error.isCustom)
      throw {
        code: 500,
        message:
          "There was some issue at the server end. We are working to fix it as soon as possible.",
      };
    throw { code: error.code, message: error.message };
  }
};

module.exports = {
  registerNewCustomUser: registerNewCustomUser,
  customUserLogin: customUserLogin,
  fetchLinkedinAccessToken: fetchLinkedinAccessToken,
  fetchLinkedinProfileJwt: fetchLinkedinProfileJwt,
};
