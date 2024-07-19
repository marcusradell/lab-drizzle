import { config } from "dotenv";
import { createApp } from "./app";

const main = () => {
  config({ path: ".env.local" });

  const port = Number(process.env.PORT);

  if (isNaN(port)) {
    throw Error("Missing PORT.");
  }

  const { expressApp, dbClient } = createApp();

  const server = expressApp.listen(port, () => {
    console.log(`App started on port ${port}.`);
  });

  const handleGracefulShutdown = () => {
    console.log("Gracefully shutting down server...");

    server.close(async () => {
      await dbClient.end();
      console.log("Graceful shutdown completed.");
    });
  };

  process.on("SIGINT", handleGracefulShutdown);
  process.on("SIGTERM", handleGracefulShutdown);
};

main();
