const Dish = require("../models/dish");

const getAdmin = (req, res, next) => {
  Dish.fetchAll()
    .then((dishes) => {
      res.render("admin", {
        path: "/admin",
        dishes: dishes,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const postAdmin = (req, res, next) => {
  const name = req.body.name;
  const image = req.file;
  const price = req.body.price;
  const shortDesc = req.body.shortDesc;
  const dish = new Dish(name, image.path, price, shortDesc);
  dish
    .save()
    .then(() => {
      console.log("Dish Added!");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/admin");
};

module.exports = { getAdmin, postAdmin };
