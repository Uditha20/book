import express from "express";

import { PORT, db } from "./config.js";

import mongoose from "mongoose";

import bookRoute from './Routes/bookRoute.js'
import cors from 'cors';
// import route from './Routes/bookRoute.js'

const app = express();


app.use(express.json());
app.use(cors())

// app.get("/", (req, res) => {
//   console.log(req);
//   return res.status(234).send("welcome");
// });




app.use('/book',bookRoute)



mongoose
  .connect(db)
  .then(() => {
    console.log("app connect to");
    app.listen(PORT, () => {
      console.log(`server is running ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
