import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const validate =
  (schema: AnySchema) =>
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (e) {
      return res.status(400).send(e.errors);
    }
  };

export { validate };
