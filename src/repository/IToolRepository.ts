import { Tool } from "../models/Tool";

export interface ICreateToolDTO {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

interface IToolRepository {
  save(data: ICreateToolDTO): Promise<Tool>;
  listAll(): Promise<Tool[]>;
  removeByID(id: string);
  searchByTagName(tagName: string): Promise<Tool[]>;
  findByTitle(title: string): Promise<Tool>;
  findById(id: string): Promise<Tool>;
}

export { IToolRepository };
