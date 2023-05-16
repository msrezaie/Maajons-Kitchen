const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const multer = require("multer");

const app = express();

const mainRoutes = require("./routes/main");

const adminRoutes = require("./routes/admin");

const mongoConnect = require("./util/database").mongoConnect;

const { get404 } = require("./controllers/error");

const fileStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use("/images", express.static(path.join(__dirname, "images")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(multer({ storage: fileStorage }).single("image"));

app.use(mainRoutes);
app.use(adminRoutes);

app.use(get404);

const PORT = 7000;

mongoConnect(() => {
  app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
});
