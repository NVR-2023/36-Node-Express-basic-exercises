require("dotenv").config();

const http = require("http");
const PORT = process.env.PORT;

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    "content-type": "text/plain",
  });
  response.end("Hello");
});

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

server.on("error", (error) => {
  console.error(`Server already in use: ${error}`);
});
