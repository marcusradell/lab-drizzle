import express, { Router } from "express";
import { createPostsFeature, createUsersFeature } from "../features";
import { createDbClient } from "./db-client";
import { errorHandler } from "./error-handler";

export const createApp = () => {
  const expressApp = express();

  expressApp.use(express.json());

  expressApp.get("/status", (req, res) => {
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

  expressApp.use("/api/v1", apiRouter);

  expressApp.use(errorHandler);

  return { expressApp, dbClient };
};
