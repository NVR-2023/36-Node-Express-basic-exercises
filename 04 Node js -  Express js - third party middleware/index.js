require("dotenv").config();

const express = require("express");
const app = express();
const helmet = require("helmet")
const PORT = process.env.PORT;

app.use(helmet());

app.get("/", (request, response)=>{
    response.send("Hello world")
})

app.get("/users", (request, response)=>{
    response.send("Users route")
})

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`)
})