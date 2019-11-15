const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost/netninja", { useNewUrlParser: true });

mongoose.connection
  .once("open", () => {
    console.log("Successfully connected to MongoDB!");
  })
  .on("error", error => {
    console.log("Connection error:", error);
  });
