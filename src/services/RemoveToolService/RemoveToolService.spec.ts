import { IToolRepository } from "../../repository/IToolRepository";
import { ToolRepositoryInMemory } from "../../repository/in-memory/ToolRepositoryInMemory";
import { CreateToolService } from "../CreateToolService/CreateToolService";
import { RemoveToolService } from "./RemoveToolService";

let toolRepository: IToolRepository;
let removeToolService: RemoveToolService;
let createToolService: CreateToolService;
let toolIDToBeRemove: string;

describe("Remove Tool Service", () => {
  beforeAll(async () => {
    toolRepository = new ToolRepositoryInMemory();
    removeToolService = new RemoveToolService(toolRepository);
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

    const toolToBeRemoved = await createToolService.handle({
      title: "fastify",
      link: "https://www.fastify.io/",
      description:
        "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
      tags: ["web", "framework", "node", "http2", "https", "localhost"],
    });

    toolIDToBeRemove = toolToBeRemoved.id;
  });

  test("it should be able to remove a tool", async () => {
    await removeToolService.execute(toolIDToBeRemove);

    expect((await toolRepository.listAll()).length).toBe(1);
  });

  test("it shouldn't be able to remove a tool if that tool doesn't exist", () => {
    expect(
      async () => await await removeToolService.execute(toolIDToBeRemove)
    ).rejects.toThrow(new Error("Tool doesn't exists."));
  });
});
