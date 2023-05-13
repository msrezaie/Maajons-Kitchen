const express = require("express");

const router = express.Router();

const mainController = require("../controllers/main-controller");

router.get("/", mainController.getHome);

router.get("/about-us", mainController.getAboutUs);

router.get("/about-dish", mainController.getAboutDish);

module.exports = router;
