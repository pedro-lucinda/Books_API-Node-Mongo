import { BookServices } from "../../ services/BookServices";
import { IBook, IListBooksDTO } from "../../ services/IBookServices";
import { AppError } from "../../../../errors/AppError";

class ListBooksUseCase {
  async execute({ perPage, page }: IListBooksDTO): Promise<IBook[]> {
    const booksServices = new BookServices();
    const books = await booksServices.list({ perPage, page });
    if (!books) throw new AppError("Error on listing books");
    return books;
  }
}

export { ListBooksUseCase };
