const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();

app.set("view engine", "ejs");

// Atur folder views
app.set("views", path.join(__dirname, "../views"));
app.set("layout", "layouts/main");

app.use(express.static(path.join(__dirname, "../public")));
app.use(expressLayouts);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = app;
