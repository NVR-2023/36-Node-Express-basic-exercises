import express from "express";

const homepageRouter = express.Router();

homepageRouter.get("/", (request, response) => {
  response.send("<h1>Homepage Router enabled</h1>");
});

export default homepageRouter;
