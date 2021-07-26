import { DocumentDefinition } from "mongoose";

import { IBookDocument } from "../models/book.model";

export interface IBook {
  name: string;
  description: string;
  author: string;
  image?: any;
}

export interface IListBooksDTO {
  perPage?: number;
  page?: number;
}

interface IBookServices {
  list({ perPage, page }: IListBooksDTO): Promise<IBook[]>;
  create(body: DocumentDefinition<IBookDocument>): Promise<IBook>;
  findById(id: string): Promise<IBook>;
  findByName(name: string): Promise<IBook>;
}

export { IBookServices };
