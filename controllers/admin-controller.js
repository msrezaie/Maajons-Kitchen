const Dish = require("../models/dish");

exports.getAddDish = (req, res, next) => {
  res.render("add-dish", { path: "add-dish" });
};

exports.postAddDish = (req, res, next) => {
  const name = req.body.name;
  const image = req.body.imageUrl;
  const price = req.body.price;
  const shortDesc = req.body.shortDesc;
  const dish = new Dish(name, image, price, shortDesc);
  dish
    .save()
    .then(() => {
      console.log("Dish Added!");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/");
};
