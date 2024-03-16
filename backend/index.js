import express, { request } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors'

const app = express();

//Middleware for parsing json
app.use(express.json());

//Middleware for handling cors policy
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome");
});

app.use("/books", booksRoute);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });
