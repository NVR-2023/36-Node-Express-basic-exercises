const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Atlas successfully connected");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas");
      console.error("Unable to connect to MongoDB Atlas");
    });
};

module.exports = dbConnect;