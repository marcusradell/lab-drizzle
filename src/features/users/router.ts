import { Router } from "express";
import { Service } from "./types";

export const createRouter = (service: Service) => {
  const router = Router();

  router.get("/", async (req, res, next) => {
    try {
      const result = await service.getUsers(1, 100);

      res.json(result);
    } catch (error) {
      next(error);
    }
  });

  router.get("/:id", async (req, res, next) => {
    try {
      const id = Number(req.params.id);

      if (isNaN(id)) {
        throw new Error("Invalid ID from URL.");
      }

      const result = await service.getUserById(id);

      res.json(result);
    } catch (error) {
      next(error);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const { name, age, email } = req.body;

      await service.addUser({ name, age, email });

      res.sendStatus(201);
    } catch (error) {
      next(error);
    }
  });

  return router;
};
