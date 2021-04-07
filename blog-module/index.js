require("dotenv").config();

const express = require("express");
const app = express();
const blogRoutes = require("./routes/blog");
const startupRoutes = require("./routes/startup");
const entrepreneurRoutes = require("./routes/entrepreneur");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/blogs", blogRoutes);
app.use("/startups", startupRoutes);
app.use("/entrepreneurs", entrepreneurRoutes);

//store user preferences in UserDB and then use them to fetch queries

// app.get('/feed', authenticateToken, async (req, res) => {
//     const user = await User.findById(req.user.id)
//     const { preferences } = user.preferences
//     or
//     const { preferences } = req.user

//     const blogs = await Blog.find({ category: { $in: preferences } })
//     res.json(blogs)
// })

//Works for manual and category search
//blogs?category=edtech

app.get("/", (req, res) => {
  res.send("Running");
});

module.exports = app;

app.listen(4000, () => {
  console.log("server running");
});

//user based feed
