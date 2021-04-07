const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();
const mongoose = require("mongoose");
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/blog";

router.get("/", async (req, res) => {
  try {
    mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    const db = mongoose.connection;
    const { category } = req.query;
    if (category) {
      const blogs = await Blog.find({ category });
      if (blogs.length) return res.json(blogs);
    }
    const blogs = await Blog.find();
    return res.json(blogs);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
});

//will redirect to /blogs?category=${searchString}

router.post("/search", async (req, res) => {
  try {
    const { category } = req.body;
    res.redirect(`/blogs?category=${category}`);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
});

router.get("/mostviewed", async (req, res) => {
  try {
    mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    const db = mongoose.connection;
    let blogs;
    if (req.query.full === "true")
      blogs = await Blog.find().sort({ views: -1 });
    blogs = await Blog.find().sort({ views: -1 }).limit(10);
    db.close();

    res.json(blogs);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
});

//displays indivual blog and tracks views

router.get("/:id", async (req, res) => {
  try {
    mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    const db = mongoose.connection;
    const { id } = req.params;
    const blog = await Blog.findById(id);
    let views = blog.views + 1;
    const updatedBlog = await Blog.findByIdAndUpdate(id, { views });
    updatedBlog.save();
    db.close();
    res.json(updatedBlog);
  } catch (e) {
    console.log(e);
    res.redirect("/blogs");
  }
});

//updates likes but adds but will add unnecessary views

router.post("/:id/like", async (req, res) => {
  try {
    mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    const db = mongoose.connection;
    const { id } = req.params;
    const blog = await Blog.findById(id);
    let likes = blog.likes + 1;
    const updatedBlog = await Blog.findByIdAndUpdate(id, { likes });
    updatedBlog.save();
    db.close();
    res.redirect(`/blogs/${id}`);
  } catch (e) {
    console.log(e);
    res.redirect("/blogs");
  }
});

module.exports = router;
