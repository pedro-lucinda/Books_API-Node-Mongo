/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-extra-boolean-cast */
import { Request, Response } from "express";

import { IBook } from "../../ services/IBookServices";
import { CreateBookUseCase } from "./CreateBookUseCase";

class CreateBookController {
  async handle(req: Request, res: Response): Promise<IBook | Response> {
    const createBookUseCase = new CreateBookUseCase();
    const { body } = req;
    const file = req?.file as any;

    const bookData = body;

    if (!!file) {
      Object.assign(bookData, {
        image: `https://pedro-books-api.s3.sa-east-1.amazonaws.com/${file.key}`,
      });
    }
    try {
      const book = await createBookUseCase.execute(bookData);
      return res.status(201).json(book);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}

export { CreateBookController };
