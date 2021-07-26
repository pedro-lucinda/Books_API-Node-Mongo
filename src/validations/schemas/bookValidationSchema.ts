import { object, string } from "yup";

const payload = {
  body: object({
    name: string().required("Name is required"),
    description: string()
      .required("Description is required")
      .min(120, "Description is too short - should be 120 chars minimum."),
    author: string().required("Author is required"),
  }),
};

const params = {
  params: object({
    id: string().required("Book Id is required"),
  }),
};

export const createBookSchema = object({
  ...payload,
});

export const getBookSchema = object({
  ...params,
});
