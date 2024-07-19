import { Router } from "express";
import { Service } from "./types";

export const createRouter = (service: Service) => {
  const router = Router();

  return router;
};
