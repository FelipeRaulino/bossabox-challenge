import { IToolRepository } from "../../repository/IToolRepository";

class RemoveToolService {
  constructor(private toolRepository: IToolRepository) {}

  async execute(id: string) {
    const toolAlreadyExists = await this.toolRepository.findById(id);

    if (!toolAlreadyExists) {
      throw new Error("Tool doesn't exists.");
    }

    const tool = await this.toolRepository.removeByID(id);

    return tool;
  }
}

export { RemoveToolService };
