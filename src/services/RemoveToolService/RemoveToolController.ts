import { Request, Response } from "express";

import { ToolRepository } from "../../repository/ToolRepository";
import { RemoveToolService } from "./RemoveToolService";

class RemoveToolController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const toolRepository = new ToolRepository();

    const removeToolService = new RemoveToolService(toolRepository);

    const tool = await removeToolService.execute(id);

    return response.status(200).json({});
  }
}

export { RemoveToolController };
