import { Tool } from "../../models/Tool";
import { ICreateToolDTO, IToolRepository } from "../IToolRepository";

class ToolRepositoryInMemory implements IToolRepository {
  private tools: Tool[];

  constructor() {
    this.tools = [];
  }

  async save({
    title,
    link,
    description,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = new Tool();

    Object.assign(tool, {
      title,
      link,
      description,
      tags,
    });

    this.tools.push(tool);

    return tool;
  }

  async listAll(): Promise<Tool[]> {
    return this.tools;
  }

  removeByID(id: string) {
    const toolIndex = this.tools.findIndex((tool) => tool.id === id);

    this.tools.splice(toolIndex, 1);
  }

  async searchByTagName(tagName: string): Promise<Tool[]> {
    const tools = this.tools.filter((tool) => {
      return tool.tags.find((tag) => tag === tagName);
    });

    return tools;
  }

  async findByTitle(title: string): Promise<Tool> {
    const tool = this.tools.find((tool) => tool.title === title);

    return tool;
  }

  async findById(id: string): Promise<Tool> {
    const tool = this.tools.find((tool) => tool.id === id);

    return tool;
  }
}

export { ToolRepositoryInMemory };
