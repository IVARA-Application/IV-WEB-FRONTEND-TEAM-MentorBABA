const express = require("express");
const Startup = require("../models/startup");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    if (category) {
      const startups = await Startup.find({ category });
      if (startups.length) return res.json(startups);
    }
    const startups = await Startup.find();
    db.close();
    return res.json(startups);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
});

//will redirect to /blogs?category=${searchString}

router.post("/search", async (req, res) => {
  try {
    const { category } = req.body;
    if (!category) return res.redirect("/startups");
    db.close();
    res.redirect(`/startups?category=${category}`);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
});

router.get("/mostviewed", async (req, res) => {
  const startups = await Startup.find().sort({ views: -1 });
  res.json(startups);
});

//displays indivual blog and tracks views

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const startup = await Startup.findById(id);
    let views = startup.views + 1;
    const updatedStartup = await Startup.findByIdAndUpdate(id, { views });
    await updatedStartup.save();
    db.close();
    res.json(updatedStartup);
  } catch (e) {
    console.log(e);
    res.redirect("/startups");
  }
});

//updates likes but adds but will add unnecessary views

router.post("/:id/like", async (req, res) => {
  try {
    const { id } = req.params;
    const startup = await Startup.findById(id);
    let likes = startup.likes + 1;
    const updatedStartup = await Startup.findByIdAndUpdate(id, { likes });
    await updatedStartup.save();
    db.close();
    res.redirect(`/startups/${id}`);
  } catch (e) {
    console.log(e);
    res.redirect("/startups");
  }
});

module.exports = router;
