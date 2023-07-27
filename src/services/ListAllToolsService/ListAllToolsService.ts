import { Tool } from "../../models/Tool";
import { IToolRepository } from "../../repository/IToolRepository";

class ListAllToolsService {
  constructor(private listAllToolsService: IToolRepository) {}

  async execute(): Promise<Tool[]> {
    const tools = await this.listAllToolsService.listAll();

    return tools;
  }
}

export { ListAllToolsService };
