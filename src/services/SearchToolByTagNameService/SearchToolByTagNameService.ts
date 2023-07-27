import { Tool } from "../../models/Tool";
import { IToolRepository } from "../../repository/IToolRepository";

class SearchToolByTagNameService {
  constructor(private toolRepository: IToolRepository) {}

  async execute(tagName: string): Promise<Tool[]> {
    const tool = await this.toolRepository.searchByTagName(tagName);

    return tool;
  }
}

export { SearchToolByTagNameService };
