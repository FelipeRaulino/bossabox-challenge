import { DataSource } from "typeorm";

import { Tool } from "../models/Tool";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "bossabox-db",
  port: 5432,
  username: "bossabox-admin",
  password: "oePZ1oGaz0A!md%MD^AweswYVg2bk%%9",
  database: "bossabox-db",
  migrations: ["./src/db/migrations/*.ts"],
  entities: [Tool],
});

export { AppDataSource };
