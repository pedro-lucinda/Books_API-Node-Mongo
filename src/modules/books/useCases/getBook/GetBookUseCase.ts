import { BookServices } from "../../ services/BookServices";
import { IBook } from "../../ services/IBookServices";
import { AppError } from "../../../../errors/AppError";

class GetBookUseCase {
  async execute(id: string): Promise<IBook> {
    const bookServices = new BookServices();
    const book = await bookServices.findById(id);
    if (!book) throw new AppError("Not found");
    return book;
  }
}

export { GetBookUseCase };
