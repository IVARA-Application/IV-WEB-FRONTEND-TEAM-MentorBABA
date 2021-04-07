const mongoose = require("mongoose");
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/blog";

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Database connected!");
});

module.exports = {
  db: db,
};
