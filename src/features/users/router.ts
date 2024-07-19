import { Router } from "express";
import { Service } from "./types";

export const createRouter = (service: Service) => {
  const router = Router();

  router.get("/", async (req, res) => {
    const result = service.getUsers(1, 100);

    res.json(result);
  });

  return router;
};
