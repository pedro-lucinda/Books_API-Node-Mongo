/* eslint-disable @typescript-eslint/no-explicit-any */
import { BookServices } from "../../ services/BookServices";
import { IBook } from "../../ services/IBookServices";
import { AppError } from "../../../../errors/AppError";

/* eslint-disable consistent-return */
class CreateBookUseCase {
  async execute(body: IBook): Promise<IBook> {
    const bookServices = new BookServices();
    const book = await bookServices.create(body as any);
    if (!book) throw new AppError("Error on creating a new book");
    return book;
  }
}
export { CreateBookUseCase };
