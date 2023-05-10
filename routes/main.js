const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/about-us", (req, res, next) => {
  res.render("about-us");
});

module.exports = router;
