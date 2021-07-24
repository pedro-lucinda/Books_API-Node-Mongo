import { Request, Response } from "express";

import { ListBooksUseCase } from "./ListBooksUseCase";

class ListBooksController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listBooksUseCase = new ListBooksUseCase();
    const books = await listBooksUseCase.execute();
    return res.status(200).json(books);
  }
}
export { ListBooksController };
