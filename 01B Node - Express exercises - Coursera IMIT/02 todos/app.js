require("dotenv").config();

const todos = require("./todos");
const PORT = process.env.PORT;
const gtRequestData = require("./utils.js");

const http = require("http");
const server = http.createServer(async (request, response) => {
  if (request.url === "/api/v1/todos" && request.method === "GET") {
    response.writeHead(200, {
      "Content-Type": "application/json",
    });
    response.end(JSON.stringify(todos));
  } else if (request.url === "/api/v1/todos" && request.method === "POST") {
    let requestBody = await gtRequestData(request);
    todos.push(JSON.parse(requestBody));
    response.writeHead(201, {
      "Content-Type": "application/json",
    });
    response.end(JSON.stringify(JSON.parse(requestBody)));
  } else if (request.url.match(/\/api\/v1\/todos\/([0-9]+)/) && request.method === "DELETE") {
    const id = request.url.split("/")[4];
    const todo = todos.find((todo) => todo.id === parseInt(id));

    if (!todo) {
      response.writeHead(404, {
        "Content-Type": "application/json",
      });
      response.end("No todo with specified id");
    } else {
      const index = todos.indexOf(todo);
      todos.splice(index, 1);
      response.writeHead(200, {
        "Content-Type": "application/json",
      });
      response.end(JSON.stringify({ message: "Deleted todo" }));
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

server.on("error", (error) => {
  console.error(`Port already in use: %{error}`);
});
