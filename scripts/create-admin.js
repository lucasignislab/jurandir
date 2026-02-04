const { PrismaClient } = require("@prisma/client");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const prisma = new PrismaClient();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function main() {
    const email = "lucascoelho.cps@gmail.com";
    const password = "L1601u6980!@#$";
    const name = "Lucas Coelho (Admin)";

    console.log(`Tentando criar credenciais para ${email}...`);

    // 1. Tentar Sign Up via Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name: name,
                type: "ADMIN"
            }
        }
    });

    if (authError) {
        if (authError.message.includes("User already registered")) {
            console.log("Usuário já registrado no Auth. Prosseguindo para atualização de cargo...");
        } else {
            console.error("Erro no Auth:", authError.message);
        }
    } else {
        console.log("Usuário criado no Auth com sucesso.");
    }

    // 2. Localizar o ID do usuário no Auth
    const authUser = await prisma.auth_users.findFirst({
        where: { email: email }
    });

    if (!authUser) {
        console.error("Não foi possível encontrar o usuário na tabela auth.users.");
        return;
    }

    const userId = authUser.id;
    console.log(`ID do Usuário: ${userId}`);

    // 3. Garantir confirmação de e-mail (para pular verificação)
    await prisma.auth_users.update({
        where: { id: userId },
        data: {
            email_confirmed_at: new Date()
        }
    });
    console.log("E-mail marcado como confirmado no Auth.");

    // 4. Upsert no public_users para garantir o cargo ADMIN
    const publicUser = await prisma.public_users.upsert({
        where: { email: email },
        update: {
            type: "ADMIN",
            name: name
        },
        create: {
            id: userId,
            email: email,
            name: name,
            type: "ADMIN",
            phone: "00000000000"
        }
    });

    console.log("Usuário atualizado como ADMIN no banco público.");
    console.log("Sucesso! Tente fazer login agora.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
