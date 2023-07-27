import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateToolsTable1690289520070 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tools",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "title",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "link",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "tags",
            type: "varchar",
            isArray: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
