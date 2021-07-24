/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import "dotenv/config";

const db_URL = process.env.MONGODB_URL;

mongoose.connect(
  `${db_URL}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  } as any,
  (err) => {
    if (err) {
      return console.log("Mongoose connection Error");
    }
    return console.log("☘️ Mongoose Connected! 🔌");
  }
);
