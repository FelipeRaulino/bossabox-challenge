import { Router } from "express";
import { toolsRoutes } from "./tools.routes";

const routes = Router();

routes.use("/tools", toolsRoutes);

export { routes };
