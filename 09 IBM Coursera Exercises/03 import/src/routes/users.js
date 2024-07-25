import express from "express";

const usersRouter = express.Router();

usersRouter.get("/", (request, response) => {
  response.send("<h1>Users Router enabled</h1>");
});

export default usersRouter;
