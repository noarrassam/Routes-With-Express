const express = require("express");
const router = require("express").Router();
let path = require("path");

router.get("/index", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = router;
