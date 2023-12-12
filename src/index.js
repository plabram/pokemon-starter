require("dotenv").config();
const express = require("express");
require("./config/db");
const mainRouter = require("./routes");
const { setError } = require("./config/error");
const app = express();

console.log("check0");

app.use("/api", mainRouter);

console.log("check1");

app.use("*", (req, res, next) => {
  return next(setError(404, "Not found"));
});

console.log("check2");
app.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Internal server error 🧯");
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`App running in: http://localhost:${PORT}`);
});

module.exports = app;
