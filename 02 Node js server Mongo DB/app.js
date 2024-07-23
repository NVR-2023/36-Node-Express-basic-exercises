const express = require("express");
const app = express("./app");
const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");
dbConnect();

const newUser = new User({
  email: "john.newman@mail.com",
  password: "Lalalalah123",
});

/* newUser
  .save()
  .then(() => {
    console.log("New user inserted");
  })
  .catch((error) => {
    console.error("Error inserting new user", error);
  }); */

/* User.find({ email: "john.newman@mail.com" }).then( (users) => {
    console.log(users)
}).catch((error)=>{
    console.error("Error retrieving user", error)
}); */

/* User.updateOne({ email: "lordero@mail.com" }, { password: "AAAA" })
  .then(() => {
    console.log("Record successfully updated");
  })
  .catch((error) => {
    console.error("Error updating record", error);
  }); */

/* User.updateMany({ email: "maria.schneider@mail.com" }, { $set: { password: "New password reset" } })
  .then((results) => {
    console.log("Records updated successfully", results);
  })
  .catch((error) => {
    console.error("Error updating records", error);
  }); */

/* User.deleteOne({ email: "delete2@mail.com" })
  .then((record) => {
    console.log("Record deleted successfully", record);
  })
  .catch((error) => {
    console.error("Error deleting record", error);
  }); */

/* User.deleteMany({ email: "delete1@mail.com" })
  .then((results) => {
    console.log("Records successfully deleted", results);
  })
  .catch((error) => {
    console.error("Error deleting records", error);
  }); */

User.collection.createIndex({ email: 3 });

User.find({ email: "maria.schneider@mail.com" })
  .select({ email: 3, _id: 0 })
  .then((results) => {
    console.log("Records successfully index", results);
  })
  .catch((error) => {
    console.error("Error indexing records", error);
  });

module.exports = app;
