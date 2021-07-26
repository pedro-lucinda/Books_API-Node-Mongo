import { Request, Response } from "express";
import { ObjectId } from "mongodb";

import { GetBookUseCase } from "./GetBookUseCase";

class GetBookController {
  async handle(req: Request, res: Response): Promise<Response> {
    const getBookUseCase = new GetBookUseCase();

    const isValid = ObjectId.isValid(req.params.id);
    if (!isValid) {
      return res.status(400).json({ message: "Invalid id" });
    }

    try {
      const book = await getBookUseCase.execute(req.params.id);
      return res.status(200).json(book);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }
}

export { GetBookController };
