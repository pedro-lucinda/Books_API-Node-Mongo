import { Router } from "express";
import "../database";

import { booksRouter } from "./books.routes";

export const router = Router();

router.use("/books", booksRouter);
