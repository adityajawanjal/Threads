const express = require("express");
require("dotenv").config();
const router = require("./routes");
const connectDB = require("./db");
const cors = require("cors");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", router);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`app is listening on port : ${port}`);
});
