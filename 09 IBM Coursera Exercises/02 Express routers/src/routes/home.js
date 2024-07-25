const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
  response.status(200).send("<h1>Home</h1>");
});

module.exports = router;
