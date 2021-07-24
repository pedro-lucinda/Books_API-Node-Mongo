import { Router, Request, Response } from "express";

import { validate } from "../../middlewares/validateRequest";
import { CreateBookController } from "../../modules/books/useCases/createBook/CreateBookController";
import { GetBookController } from "../../modules/books/useCases/getBook/GetBookController";
import { ListBooksController } from "../../modules/books/useCases/listBooks/ListBooksController";
import {
  createBookSchema,
  getBookSchema,
} from "../../validations/schemas/bookValidationSchema";

export const booksRouter = Router();

booksRouter.get("/list", (req: Request, res: Response) => {
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
  validate(createBookSchema),
  (req: Request, res: Response) => {
    const createBookController = new CreateBookController();
    return createBookController.handle(req, res);
  }
);
