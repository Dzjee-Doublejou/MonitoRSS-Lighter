import { defineConfig } from "@mikro-orm/core";
import { config } from "./config";

const configVals = config();
const dbType = configVals.USER_FEEDS_DB_TYPE || "postgresql";

const MikroOrmConfig = defineConfig({
  entities: ["dist/**/*.entity.js"],
  entitiesTs: ["src/**/*.entity.ts"],
  clientUrl: configVals.USER_FEEDS_POSTGRES_URI,
  dbName: configVals.USER_FEEDS_POSTGRES_DATABASE,
  type: dbType,
  forceUtcTimezone: true,
  timezone: "UTC",
});

export default MikroOrmConfig;
