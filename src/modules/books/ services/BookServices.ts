import { DocumentDefinition } from "mongoose";

import { AppError } from "../../../errors/AppError";
import { BookModel } from "../models/book.model";
import { IBook, IBookServices } from "./IBookServices";

class BookServices implements IBookServices {
  async list(): Promise<IBook[]> {
    const books = await BookModel.find();
    return books;
  }

  async findById(id: string): Promise<IBook> {
    try {
      const book = await BookModel.findById({ _id: id });
      return book;
    } catch (err) {
      throw new AppError("Book not found");
    }
  }

  async create(body: DocumentDefinition<IBook>): Promise<IBook> {
    const book = new BookModel({ ...body });
    await book.save();
    return book;
  }
}
export { BookServices };
