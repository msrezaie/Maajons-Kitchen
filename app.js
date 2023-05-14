const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const mainRoutes = require("./routes/main");

const adminRoutes = require("./routes/admin");

const mongoConnect = require("./util/database").mongoConnect;

const errorController = require("./controllers/error");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(mainRoutes);
app.use("/admin", adminRoutes);

app.use(errorController.get404);

const PORT = 7000;

mongoConnect(() => {
  app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
});
