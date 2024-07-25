require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.get("/", (_, response) => {
    response.status(200).send("<h1>HTML sent</h1>")
});

app.listen(PORT , ()=>{
    console.log(`Server is listening on port ${PORT}`)
})