import express, { Router } from "express";
import { createPostsFeature, createUsersFeature } from "./features";
import { createDbClient } from "./db-client";

export const createApp = () => {
  const app = express();

  app.use(express.json());

  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });

  const apiRouter = Router();

  const dbClient = createDbClient();

  const usersFeature = createUsersFeature(dbClient);
  const postsFeature = createPostsFeature(
    dbClient,
    usersFeature.service.getUsers
  );

  apiRouter.use("/users", usersFeature.router);
  apiRouter.use("/posts", postsFeature.router);

  app.use("/api/v1", apiRouter);

  return app;
};
