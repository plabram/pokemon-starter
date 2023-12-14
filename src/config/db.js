const mongoose = require("mongoose");

mongoose.set("strict", true); // Database entries can only contain fields included in the schema
mongoose.set("strictQuery", false); // Only queries defined in the schema can be used
mongoose.set("strictPopulate", true); // Mongoose will only populate fields that are defined in the schema

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting:", err);
  });
