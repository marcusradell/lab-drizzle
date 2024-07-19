import { Router } from "express";
import { Service } from "./service";

export const createRouter = (service: Service) => {
  const router = Router();

  router.get("/counts", async (req, res, next) => {
    try {
      const result = await service.getPostsCounts();

      res.json(result);
    } catch (error) {
      next(error);
    }
  });

  return router;
};
