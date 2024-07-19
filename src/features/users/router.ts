import { Router } from "express";
import { Service } from "./types";

export const createRouter = (service: Service) => {
  const router = Router();

  router.get("/", async (req, res) => {
    const result = await service.getUsers(1, 100);

    res.json(result);
  });

  router.get("/:id", async (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      throw new Error("Invalid ID from URL.");
    }

    const result = await service.getUserById(id);

    res.json(result);
  });

  return router;
};
