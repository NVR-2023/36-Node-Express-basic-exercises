import express from "express";
import homepageRouter from "./src/routes/homepage.js";
import usersRouter from "./src/routes/users.js";

const app = express();

app.use("/", homepageRouter);
app.use("/users", usersRouter);


export default app;