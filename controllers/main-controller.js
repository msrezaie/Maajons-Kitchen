const Dish = require("../models/dish");

const getHome = (req, res, next) => {
  Dish.find()
    .then((dishes) => {
      res.render("index", {
        path: "/",
        dishes: dishes,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAboutUs = (req, res, next) => {
  res.render("about-us", { path: "about-us" });
};

const getAboutDish = (req, res, next) => {
  const dishId = req.params.dishId;
  Dish.findById(dishId)
    .then((dish) => {
      if (dish) {
        res.render("about-dish", {
          path: "about-dish/" + dishId,
          dish: dish,
        });
      } else {
        next();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { getHome, getAboutUs, getAboutDish };
