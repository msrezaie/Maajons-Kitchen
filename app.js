const path = require("path");

const express = require("express");

const app = express();

const mainRoutes = require("./routes/main");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoutes);

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(5001);
