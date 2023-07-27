import { Tool } from "../../models/Tool";

import {
  ICreateToolDTO,
  IToolRepository,
} from "../../repository/IToolRepository";

class CreateToolService {
  constructor(private toolRepository: IToolRepository) {}

  async handle({
    title,
    link,
    description,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const toolAlreadyExists = await this.toolRepository.findByTitle(title);

    if (toolAlreadyExists) {
      throw new Error("Tool already exits");
    }

    const tool = await this.toolRepository.save({
      title,
      link,
      description,
      tags,
    });

    return tool;
  }
}

export { CreateToolService };
