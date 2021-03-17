const argon2 = require("argon2");
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
      .insertOne({ name, email, password, occupation, phone });
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
    console.log(lambdaResponseObject);
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
};
