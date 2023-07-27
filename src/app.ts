import express from "express";
import "dotenv/config";
import swaggerUI from "swagger-ui-express";

import { routes } from "./routes";

import { AppDataSource } from "./db/AppDataSource";

import YAML from "yamljs";

const swaggerFile = YAML.load("./src/swagger.yaml");

const app = express();

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use("/api", routes);

export { app };
