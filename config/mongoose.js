//require the library
const mongoose = require("mongoose");
require("dotenv").config();

const mongodbUrl = process.env.MONGODB_URL || "mongodb+srv://prakashghorpade2001:prakash123@mern.bs7mqgs.mongodb.net/IssueTracker_CN?retryWrites=true&w=majority&appName=IssueTracker_CN"

//connect to the database
mongoose.connect(mongodbUrl);

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on("error", function (err) {
  console.log(err.message);
});

//up and running then print the message
db.once("open", function () {
  console.log("Successfully connected to the database");
});

module.exports = db;
