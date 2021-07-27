import { DocumentDefinition } from "mongoose";

import { AppError } from "../../../errors/AppError";
import { BookModel } from "../models/book.model";
import { IBook, IBookServices, IListBooksDTO } from "./IBookServices";

class BookServices implements IBookServices {
  async list({ perPage, page, q }: IListBooksDTO): Promise<IBook[]> {
    const pageToList = page - 1 || 0;
    const perPageToList = perPage || 10;

    const books = await BookModel.find(
      // if there is query param than filter by it
      // the options are to remove case sensitivity
      q && {
        name: { $regex: q, $options: "i" },
      }
    )
      .limit(perPageToList)
      .skip(pageToList * perPageToList)
      .sort({
        createdAt: "asc",
      });

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

  async findByName(name: string): Promise<IBook> {
    const book = await BookModel.findOne({ name });
    return book;
  }
}
export { BookServices };
