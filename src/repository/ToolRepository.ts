import { In, Repository } from "typeorm";
import { Tool } from "../models/Tool";
import { ICreateToolDTO, IToolRepository } from "./IToolRepository";
import { AppDataSource } from "../db/AppDataSource";

class ToolRepository implements IToolRepository {
  private toolRepository: Repository<Tool>;

  constructor() {
    this.toolRepository = AppDataSource.getRepository(Tool);
  }

  async save({
    title,
    link,
    description,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const newTool = this.toolRepository.create({
      title,
      link,
      description,
      tags,
    });

    const tool = await this.toolRepository.save(newTool);

    return tool;
  }

  async listAll(): Promise<Tool[]> {
    const tools = await this.toolRepository.find();

    return tools;
  }

  async removeByID(id: string) {
    const tool = await this.toolRepository.delete(id);

    return tool;
  }

  async searchByTagName(tagName: string): Promise<Tool[]> {
    const tool = await this.toolRepository
      .createQueryBuilder("tools")
      .where(":tags = ANY (tags)", { tags: tagName })
      .getMany();

    return tool;
  }
}

export { ToolRepository };
