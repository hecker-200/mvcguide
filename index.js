import express from "express";
import fs from "fs";
import mongoose from "mongoose";
import connectDB from "./views/connection.views.js";
import router from "./routes/user.routes.js";
import logreqres from "./middlewares/index.js";

const app = express();
const port = 8000;

//connect database

connectDB("mongodb://127.0.0.1:27017/vidtubeapp1")
.then(() => console.log('mongo db connected'))



//MIDDLEWARE
app.use(express.urlencoded({ extended: false }));

app.use(logreqres("log.txt"));

// ROUTES

app.use("/api/users", router);

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
