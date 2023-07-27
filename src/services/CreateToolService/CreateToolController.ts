import { Request, Response } from "express";
import { CreateToolService } from "./CreateToolService";
import { ToolRepository } from "../../repository/ToolRepository";

class CreateToolController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, link, description, tags } = request.body;

    const toolRepository = new ToolRepository();

    const createToolService = new CreateToolService(toolRepository);

    const tool = await createToolService.handle({
      title,
      link,
      description,
      tags,
    });

    return response.status(201).json(tool);
  }
}

export { CreateToolController };
