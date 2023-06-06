const path = require("path");

require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");

const multer = require("multer");

const app = express();

const mainRoutes = require("./routes/main");

const adminRoutes = require("./routes/admin");

const mongoose = require("mongoose");

const { get404 } = require("./controllers/error");

const fileStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    callback(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use("/images", express.static(path.join(__dirname, "images")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  multer({ storage: fileStorage }).fields([
    { name: "mainImage", maxCount: 1 },
    { name: "pic1", maxCount: 1 },
    { name: "pic2", maxCount: 1 },
    { name: "pic3", maxCount: 1 },
    { name: "pic4", maxCount: 1 },
    { name: "pic5", maxCount: 1 },
  ])
);

app.use(mainRoutes);

app.use(adminRoutes);

app.use(get404);

const PORT = process.env.PORT || 4000;

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jqipsao.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
