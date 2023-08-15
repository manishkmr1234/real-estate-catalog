const express = require("express");
const connection = require("./Config/db");
const userRoutes = require("./Routes/property");
const cors = require("cors");
const getroutes = require("./Routes/getRoutes");
connection();

const app = express();

app.use(cors());
app.use(userRoutes);
app.use("/get", getroutes);

app.get("*", (req, res) => {
  res.status(404).send("API IS NOT FOUND");
});

app.listen(3016 || process.env.PORT, () => {
  console.log("Listening on port 3016");
});