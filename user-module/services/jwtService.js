const { Lambda, Credentials } = require("aws-sdk");

const lambda = new Lambda({
  apiVersion: "2015-03-31",
  region: "ap-south-1",
  credentials: new Credentials({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  }),
});

const signJwt = (username) => {
  return lambda
    .invoke({
      FunctionName: "jwt-function",
      Payload: JSON.stringify({
        operation: "sign",
        username: username,
      }),
    })
    .promise();
};

const verifyJwt = (token) => {
  return lambda
    .invoke({
      FunctionName: "jwt-function",
      Payload: JSON.stringify({
        operation: "verify",
        token: token,
      }),
    })
    .promise();
};
