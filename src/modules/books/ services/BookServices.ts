import { DocumentDefinition } from "mongoose";

import { BookModel } from "../models/book.model";
import { IBook, IBookServices } from "./IBookServices";

class BookServices implements IBookServices {
  async list(): Promise<IBook[]> {
    const books = await BookModel.find();
    return books;
  }

  async findById(id: string): Promise<IBook> {
    const book = BookModel.findOne(id);
    return book;
  }

  async create(body: DocumentDefinition<IBook>): Promise<IBook> {
    const book = new BookModel({ ...body });
    await book.save();
    return book;
  }
}
export { BookServices };
