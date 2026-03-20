import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import * as argon2 from "argon2";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const permissions = [
  "clientes:read",
  "clientes:write",
  "clientes:delete",
  "usuarios:read",
  "usuarios:write",
  "usuarios:delete",
];

async function main() {
  // Criar permissions
  const createdPermissions = await Promise.all(
    permissions.map((name) =>
      prisma.permission.upsert({
        where: { name },
        update: {},
        create: { name },
      })
    )
  );

  // Criar role admin (todas as permissions)
  const adminRole = await prisma.role.upsert({
    where: { name: "admin" },
    update: {},
    create: {
      name: "admin",
      permissions: {
        create: createdPermissions.map((p) => ({
          permissionId: p.id,
        })),
      },
    },
  });

  // Criar role user (somente leitura de clientes)
  const readPermissions = createdPermissions.filter((p) =>
    p.name.endsWith(":read")
  );
  await prisma.role.upsert({
    where: { name: "user" },
    update: {},
    create: {
      name: "user",
      permissions: {
        create: readPermissions.map((p) => ({
          permissionId: p.id,
        })),
      },
    },
  });

  // Criar usuário admin
  const hashedPassword = await argon2.hash("admin123", {
    type: argon2.argon2id,
  });

  await prisma.user.upsert({
    where: { email: "admin@quartzoart.com" },
    update: {},
    create: {
      name: "Administrador",
      email: "admin@quartzoart.com",
      password: hashedPassword,
      roleId: adminRole.id,
    },
  });

  console.log("Seed concluído com sucesso!");
  console.log("  Roles: admin, user");
  console.log("  Permissions:", permissions.join(", "));
  console.log("  Usuário: admin@quartzoart.com / admin123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
