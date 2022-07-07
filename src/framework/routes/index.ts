import { Application } from "express";
import authorRouter from "./author.routes";

const mountRoute = (app: Application) => {
  authorRouter(app);
};

export default mountRoute;
