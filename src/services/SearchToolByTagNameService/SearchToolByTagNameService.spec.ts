import { IToolRepository } from "../../repository/IToolRepository";
import { ToolRepositoryInMemory } from "../../repository/in-memory/ToolRepositoryInMemory";
import { CreateToolService } from "../CreateToolService/CreateToolService";
import { SearchToolByTagNameService } from "./SearchToolByTagNameService";

let toolRepository: IToolRepository;
let searchToolByTagNameService: SearchToolByTagNameService;
let createToolService: CreateToolService;

describe("Search Tool By Tag Name Service Test", () => {
  beforeAll(async () => {
    toolRepository = new ToolRepositoryInMemory();
    searchToolByTagNameService = new SearchToolByTagNameService(toolRepository);
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

  test("it should return a list of tools considering the tag searched", async () => {
    let tools = await searchToolByTagNameService.execute("localhost");

    expect(tools.length).toBe(1);

    tools = await searchToolByTagNameService.execute("node");

    expect(tools.length).toBe(2);
  });
});
