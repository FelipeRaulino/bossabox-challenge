import { Router } from "express";

import { CreateToolController } from "../services/CreateToolService/CreateToolController";
import { ListAllToolsController } from "../services/ListAllToolsService/ListAllToolsController";
import { RemoveToolController } from "../services/RemoveToolService/RemoveToolController";
import { SearchToolByTagNameController } from "../services/SearchToolByTagNameService/SearchToolByTagNameController";

const toolsRoutes = Router();

const createToolController = new CreateToolController();
const listAllToolsController = new ListAllToolsController();
const removeToolController = new RemoveToolController();
const searchToolByTagNameController = new SearchToolByTagNameController();

toolsRoutes.get("/", listAllToolsController.handle);
toolsRoutes.get("/search", searchToolByTagNameController.handle);
toolsRoutes.post("/", createToolController.handle);
toolsRoutes.delete("/:id", removeToolController.handle);

export { toolsRoutes };
