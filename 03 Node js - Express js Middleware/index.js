require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;

const loggerMiddleware = ( request, response , next) => {
    const  currentTimeStamp = new Date().toISOString();
    console.log(`${currentTimeStamp} ${request.method} ${request.url} `);
    next();
}

app.use(loggerMiddleware);
app.get("/", (request, response) => {
  response.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
