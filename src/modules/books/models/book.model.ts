import Document, { model, Schema } from "mongoose";

export interface IBookDocument extends Document {
  name: string;
  author: string;
  description: string;
}

export const BookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
export const BookModel = model<IBookDocument>("Books", BookSchema);
