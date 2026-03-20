import { defineConfig } from "prisma/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://postgres:quartzoartPASSw0rd@192.168.1.1:5432/quartzoart";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: connectionString,
  },
  migrate: {
    async adapter() {
      const pool = new Pool({ connectionString });
      return new PrismaPg(pool);
    },
  },
  migrations: {
    seed: "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts",
  },
});
