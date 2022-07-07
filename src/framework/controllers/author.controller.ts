import { Request, Response } from "express";

export class AuthorController {
  static singUp(request: Request, response: Response) {
    const requestBody = request.body;

    return response
      .status(201)
      .json({ message: "criado com sucesso", requestBody });
  }
}
