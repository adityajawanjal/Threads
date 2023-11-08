const express = require("express");
require("dotenv").config();
const router = require("./routes");
const connectDB = require("./db");

const app = express();
connectDB();

app.use(express.json());
app.use("/api", router);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`app is listening on port : ${port}`);
});
