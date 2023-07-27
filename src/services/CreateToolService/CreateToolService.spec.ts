import { describe, expect, test } from "@jest/globals";

import { IToolRepository } from "../../repository/IToolRepository";
import { ToolRepositoryInMemory } from "../../repository/in-memory/ToolRepositoryInMemory";
import { CreateToolService } from "./CreateToolService";

let toolRepository: IToolRepository;
let createToolService: CreateToolService;

describe("Create Tool Service Tests", () => {
  beforeAll(() => {
    toolRepository = new ToolRepositoryInMemory();
    createToolService = new CreateToolService(toolRepository);
  });

  test("it should be to create a new tool", async () => {
    const newTool = await createToolService.handle({
      title: "Notion",
      link: "https://notion.so",
      description:
        "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.",
      tags: [
        "organization",
        "planning",
        "collaboration",
        "writing",
        "calendar",
      ],
    });

    expect(newTool).toHaveProperty("id");
  });

  test("it shouldn't be able to create a new tool when a tool with the same name already exists", () => {
    expect(
      async () =>
        await createToolService.handle({
          title: "Notion",
          link: "https://github.com/typicode/json-server",
          description:
            "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
          tags: ["api", "json", "schema", "node", "github", "rest"],
        })
    ).rejects.toThrow(new Error("Tool already exits"));
  });
});
