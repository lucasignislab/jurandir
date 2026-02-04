const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

const prisma = new PrismaClient();

async function main() {
    const email = "lucascoelho.cps@gmail.com";

    // Buscar usuário no auth
    const authUser = await prisma.auth_users.findFirst({
        where: { email: email }
    });

    if (authUser) {
        console.log("=== Usuário Auth ===");
        console.log("ID:", authUser.id);
        console.log("Email:", authUser.email);
        console.log("Email confirmado em:", authUser.email_confirmed_at);
        console.log("Última autenticação:", authUser.last_sign_in_at);
        console.log("Banned até:", authUser.banned_until);
        console.log("Deleted at:", authUser.deleted_at);
    } else {
        console.log("Usuário não encontrado no auth.users");
    }

    // Buscar usuário público
    const publicUser = await prisma.public_users.findFirst({
        where: { email: email }
    });

    if (publicUser) {
        console.log("\n=== Usuário Público ===");
        console.log("ID:", publicUser.id);
        console.log("Email:", publicUser.email);
        console.log("Nome:", publicUser.name);
        console.log("Tipo:", publicUser.type);
    } else {
        console.log("Usuário não encontrado no public.users");
    }
}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });
