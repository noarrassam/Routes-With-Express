const express = require("express");
const router = require("express").Router();

var data = [
  {
    name: "Mark",
    role: "Software Developer",
    age: 25,
    forcePoints: 2000,
  },

  {
    name: "DarthMaul",
    role: "Marketing",
    age: 30,
    forcePoints: 1200,
  },

  {
    name: "John",
    role: "Customer Service",
    age: 33,
    forcePoints: 1500,
  },
];

router.get("/:name", function (req, res) {
  let name = req.params.name;
  var user = data.filter((u) => u.name == name);
  return res.json({ message: "Users Show", data: user });
});

router.post("/api/newUser", function (req, res) {
  console.log(req);
  const user = req.body;
  data.push(user);
  res.status(201).send("Created User");
});

module.exports = router;
