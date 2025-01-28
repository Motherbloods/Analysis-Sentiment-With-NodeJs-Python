const express = require("express");
const router = express.Router();
const {} = require("../controllers/index.controller");

router.get("/", (req, res) => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  res.render("pages/home/index", {
    title: "Home",
    user: user,
    message: "Selamat datang di halaman utama!",
  });
});

module.exports = router;
