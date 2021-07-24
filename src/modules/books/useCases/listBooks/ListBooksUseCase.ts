import { BookServices } from "../../ services/BookServices";
import { IBook } from "../../ services/IBookServices";
import { AppError } from "../../../../errors/AppError";

class ListBooksUseCase {
  async execute(): Promise<IBook[]> {
    const booksServices = new BookServices();
    const books = await booksServices.list();
    if (!books) throw new AppError("Error on listing books");
    return books;
  }
}

export { ListBooksUseCase };
