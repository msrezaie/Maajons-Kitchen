const Dish = require("../models/dish");

const getHome = (req, res, next) => {
  Dish.fetchAll()
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
  const dishName = req.params.dishName;
  Dish.fetchByName(dishName)
    .then((dish) => {
      if (dish) {
        res.render("about-dish", {
          path: "about-dish/" + dishName,
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
