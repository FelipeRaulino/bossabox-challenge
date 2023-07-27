import { Request, Response } from "express";
import { ToolRepository } from "../../repository/ToolRepository";
import { SearchToolByTagNameService } from "./SearchToolByTagNameService";

class SearchToolByTagNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tagName } = request.query;

    const toolRepository = new ToolRepository();

    const searchToolByTagNameService = new SearchToolByTagNameService(
      toolRepository,
    );

    const tool = await searchToolByTagNameService.execute(tagName as string);

    return response.status(200).json(tool);
  }
}

export { SearchToolByTagNameController };
