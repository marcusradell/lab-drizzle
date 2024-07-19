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

  router.get("/last-24h", async (req, res, next) => {
    try {
      const result = await service.getPostsForLast24Hours();

      res.json(result);
    } catch (error) {
      next(error);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const { userId, title, content } = req.body;

      await service.addPost({ userId, title, content });

      res.sendStatus(201);
    } catch (error) {
      next(error);
    }
  });

  return router;
};
