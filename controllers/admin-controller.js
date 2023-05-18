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
  const fName = req.body.fName;
  const mainImage = req.files["mainImage"]?.[0].path ?? null;
  const price = req.body.price;
  const shortDesc = req.body.shortDesc;
  const pic1Image = req.files["pic1"]?.[0].path ?? null;
  const pic2Image = req.files["pic2"]?.[0].path ?? null;
  const pic3Image = req.files["pic3"]?.[0].path ?? null;
  const pic4Image = req.files["pic4"]?.[0].path ?? null;
  const pic5Image = req.files["pic5"]?.[0].path ?? null;
  const howMade = req.body.howMade;
  const howServe = req.body.howServe;
  const dish = new Dish(
    name,
    fName,
    mainImage,
    price,
    shortDesc,
    pic1Image,
    pic2Image,
    pic3Image,
    pic4Image,
    pic5Image,
    howMade,
    howServe
  );
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
