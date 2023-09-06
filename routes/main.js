const express = require("express");
const router = express.Router();

const {
  getHome,
  getAboutUs,
  getAboutDish,
} = require("../controllers/main-controller");

router.get("/", getHome);
router.get("/about-us", getAboutUs);
router.get("/about-dish/:dishId", getAboutDish);

module.exports = router;
