/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router, Request, Response } from "express";

import { upload } from "../../config/upload";
import { validate } from "../../middlewares/validateRequest";
import { CreateBookController } from "../../modules/books/useCases/createBook/CreateBookController";
import { GetBookController } from "../../modules/books/useCases/getBook/GetBookController";
import { ListBooksController } from "../../modules/books/useCases/listBooks/ListBooksController";
import {
  createBookSchema,
  getBookSchema,
} from "../../validations/schemas/bookValidationSchema";

export const booksRouter = Router();

booksRouter.get("/", (req: Request, res: Response) => {
  const listBooksController = new ListBooksController();
  return listBooksController.handle(req, res);
});

booksRouter.get(
  "/:id",
  validate(getBookSchema),
  (req: Request, res: Response) => {
    const getBookController = new GetBookController();
    return getBookController.handle(req, res);
  }
);

booksRouter.post(
  "/",
  upload?.single("image"),
  validate(createBookSchema),
  async (req: Request, res: Response) => {
    req.setTimeout(0);
    const createBookController = new CreateBookController();
    return createBookController.handle(req, res);
  }
);
