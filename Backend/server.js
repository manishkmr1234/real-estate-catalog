<<<<<<< HEAD
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
=======
// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const PORT = process.env.PORT || 5000;

//require('./Config/db');
// const apiRoutes = require('./Routes/test');

// app.use('/test', apiRoutes);
>>>>>>> edbd810b005a99de071c1a4be98d60084d3d6707

app.listen(3016 || process.env.PORT, () => {
  console.log("Listening on port 3016");
});