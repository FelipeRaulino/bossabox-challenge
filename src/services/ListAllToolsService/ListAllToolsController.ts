import { Request, Response } from "express";
import { ListAllToolsService } from "./ListAllToolsService";
import { ToolRepository } from "../../repository/ToolRepository";

class ListAllToolsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const toolRepository = new ToolRepository();

    const listAllToolsService = new ListAllToolsService(toolRepository);

    const listOfTools = await listAllToolsService.execute();

    return response.status(200).json(listOfTools);
  }
}

export { ListAllToolsController };
