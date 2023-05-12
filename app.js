const path = require("path");

const express = require("express");

const app = express();

const mainRoutes = require("./routes/main");

const errorController = require("./controllers/error");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoutes);

app.use(errorController.get404);

const PORT = 5001;

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
