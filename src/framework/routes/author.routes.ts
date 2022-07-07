import { Application } from "express";
import { AuthorController } from "../controllers/author.controller";

const authorRouter = (app: Application) => {
  app.post("/authors", AuthorController.singUp);
};

export default authorRouter;
