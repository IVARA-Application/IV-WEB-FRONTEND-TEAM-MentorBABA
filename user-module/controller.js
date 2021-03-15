const argon2 = require("argon2");
const logger = require("./services/loggerService");
const database = require("./services/databaseService");

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

module.exports = {
  registerNewCustomUser: registerNewCustomUser,
};
