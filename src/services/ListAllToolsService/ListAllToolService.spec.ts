import { IToolRepository } from "../../repository/IToolRepository";
import { ToolRepositoryInMemory } from "../../repository/in-memory/ToolRepositoryInMemory";
import { CreateToolService } from "../CreateToolService/CreateToolService";
import { ListAllToolsService } from "./ListAllToolsService";

let toolRepository: IToolRepository;
let listAllToolsService: ListAllToolsService;
let createToolService: CreateToolService;

describe("List All Tools Service Test", () => {
  beforeAll(async () => {
    toolRepository = new ToolRepositoryInMemory();
    listAllToolsService = new ListAllToolsService(toolRepository);
    createToolService = new CreateToolService(toolRepository);

    await createToolService.handle({
      title: "hotel",
      link: "https://github.com/typicode/hotel",
      description:
        "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
      tags: [
        "node",
        "organizing",
        "webapps",
        "domain",
        "developer",
        "https",
        "proxy",
      ],
    });

    await createToolService.handle({
      title: "fastify",
      link: "https://www.fastify.io/",
      description:
        "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
      tags: ["web", "framework", "node", "http2", "https", "localhost"],
    });
  });

  test("it should be able to list all tools", async () => {
    const tools = await listAllToolsService.execute();

    expect(tools.length).toBe(2);
  });
});
