import { Request, Response } from "express";

import { ListBooksUseCase } from "./ListBooksUseCase";

class ListBooksController {
  async handle(req: Request, res: Response): Promise<Response> {
    const page = Number(req.query?.page as string);
    const perPage = Number(req?.query?.perPage as string);
    const q = req?.query?.q as string;

    const listBooksUseCase = new ListBooksUseCase();
    const books = await listBooksUseCase.execute({ page, perPage, q });
    return res.status(200).json(books);
  }
}
export { ListBooksController };
