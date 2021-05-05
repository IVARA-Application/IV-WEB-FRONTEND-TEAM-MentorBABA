const { verifyJwt } = require("../utilities/jwt");
const logger = require("../utilities/logger");

const authenticateUser = (req, res, next) => {
  const token = req.header("Authorization");
  if (token) {
    const jwt = token.split(" ")[1];
    try {
      res.locals.user = verifyJwt(jwt);
      return next();
    } catch (error) {
      logger.error(error);
      return res.status(403).json({
        success: false,
        message: error.message,
      });
    }
  }
  logger.error("Authentication Token was not present in the headers.");
  res
    .status(403)
    .json({ success: false, message: "Token was not present in the headers." });
};

module.exports = { authenticateUser };
