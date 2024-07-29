import { configDotenv } from "dotenv";
import express from "express";

configDotenv();
const PORT = process.env.PORT;

const server = express();
server.listen(PORT, (request, response) => {
  console.log(`Server is listening on port: ${PORT}`);
});

export default server;