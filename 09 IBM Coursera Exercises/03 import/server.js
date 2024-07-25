import app from "./app.js";
import { configDotenv } from "dotenv";

configDotenv();
const PORT = process.env.PORT;

app.listen(PORT, (request, response) => {
  console.log(`Server is listening on port:${PORT}`);
});
