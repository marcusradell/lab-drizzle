import { config } from "dotenv";
import { createApp } from "./app";

const main = () => {
  config({ path: ".env.local" });

  const port = Number(process.env.PORT);

  if (isNaN(port)) {
    throw Error("Missing PORT.");
  }

  const app = createApp();

  app.listen(port, () => {
    console.log(`App started on port ${port}.`);
  });
};

main();
