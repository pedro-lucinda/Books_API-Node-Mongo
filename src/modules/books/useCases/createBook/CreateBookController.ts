import { Request, Response } from "express";

import { IBook } from "../../ services/IBookServices";
import { CreateBookUseCase } from "./CreateBookUseCase";

class CreateBookController {
  async handle(req: Request, res: Response): Promise<IBook | Response> {
    const createBookUseCase = new CreateBookUseCase();
    const { body } = req;

    try {
      const book = await createBookUseCase.execute(body);
      return res.status(201).json(book);
    } catch (err) {
      return res.status(400).json("Error");
    }
  }
}

export { CreateBookController };
