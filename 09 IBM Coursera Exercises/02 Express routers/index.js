require("dotenv").config();
require("./src/routes/home")

const express = require("express");
const homeRouter = require("./src/routes/home");
const usersRouter = require("./src/routes/users");
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`)
})

app.use("/",homeRouter);
app.use("/users",usersRouter);