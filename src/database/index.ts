/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";

const db_URL = process.env.MONGODB_URL;
// default port
mongoose.connect(
  `${db_URL}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  } as any,
  (err) => {
    if (err) {
      console.log("Mongoose connection Error");
    }
    return console.log("☘️ Mongoose Connected! 🔌");
  }
);
