const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");


const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes)

//Connect to MongoDB
mongoose.connect(process.env.MONGOD_URI || "mongodb://mongodb://user1:password1@ds059215.mlab.com:59215/heroku_pskcb7m3");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});