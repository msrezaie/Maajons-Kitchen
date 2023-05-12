exports.getHome = (req, res, next) => {
  res.render("index", { path: "/" });
};

exports.getAboutUs = (req, res, next) => {
  res.render("about-us", { path: "about-us" });
};

exports.getAboutDish = (req, res, next) => {
  res.render("about-dish", { path: "about-dish" });
};
