const notFound = (req, res) => {
  res.status(404).render("404", { path: "" });
};

module.exports = notFound;
