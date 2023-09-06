require("dotenv").config();

const path = require("path");
const express = require("express");
const multer = require("multer");
const app = express();

const mainRoutes = require("./routes/main");
const adminRoutes = require("./routes/admin");
const mongoose = require("mongoose");
const notFound = require("./middleware/404");

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

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/images", express.static(path.join(__dirname, "images")));

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
app.use(notFound);

const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await mongoose.connect(process.env.URI);
    app.listen(PORT, console.log(`server running in port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
