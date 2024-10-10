import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    // app.on((err) => {
    //   console.log("Error in connecting express:", err);
    // });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB Error:", err);
  });

// Another Approach //
/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express()

(async()=>{    // IIFE used (Immediately Invoked Function Expression)  is a function that is defined and executed immediately.
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  // we use async await as it takes time to responed from DB.
        app.on("error", (error)=>{
            console.log("Error :",error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error :",error)
        throw err 
    }
})
*/
