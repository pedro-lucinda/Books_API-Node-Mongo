import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import "./database";

const app = express();
app.use(cors());
dotenv.config();

app.get("/", (req: Request, res: Response) => {
  res.send("TS App is Running");
});

app.listen(process.env.PORT || 3333, () => console.log(" 🚀 Server started!"));
