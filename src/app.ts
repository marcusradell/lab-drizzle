import express from "express";

export const createApp = () => {
  const app = express();

  app.get("/status", (req, res) => {
    res.json({ status: "ready" });
  });

  return app;
};
