import express from "express";
import mongoose from "mongoose";
import { washing } from "./models/washingmachine.js";
import cors from'cors'

 import router from "./routes/washingmachine.js";

const app = express();
app.use(express.json());
const mongodburl = "mongodb://127.0.0.1:27017/fullmearn"; 
app.use(cors())
app.post("/washingmac",router);
app.get("/home",router);
app.get("/home/:id",router);
app.put("/home/:id",router);
app.delete("/home/:id",router);


mongoose
  .connect(mongodburl)
  .then(() => {
    console.log("App is connected to the database");
    app.listen(8000, () => {
      console.log("App is listening on port 8000");
    });
  })
  .catch((error) => {
    console.log("Database connection failed:", error);
  });
