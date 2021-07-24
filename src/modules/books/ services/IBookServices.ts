import { DocumentDefinition } from "mongoose";

import { IBookDocument } from "../models/book.model";

export interface IBook {
  name: string;
  description: string;
  author: string;
}

interface IBookServices {
  list(): Promise<IBook[]>;
  create(body: DocumentDefinition<IBookDocument>): Promise<IBook>;
  findById(id: string): Promise<IBook>;
}

export { IBookServices };
