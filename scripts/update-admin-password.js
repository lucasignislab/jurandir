const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function main() {
    // Precisamos da SERVICE_ROLE_KEY para atualizar senha
    if (!supabaseServiceKey) {
        console.error("ERRO: SUPABASE_SERVICE_ROLE_KEY não configurada.");
        console.log("\nPara atualizar a senha do admin, você precisa:");
        console.log("1. Ir ao Supabase Dashboard: https://supabase.com/dashboard");
        console.log("2. Selecione seu projeto");
        console.log("3. Vá em Authentication > Users");
        console.log("4. Encontre o usuário lucascoelho.cps@gmail.com");
        console.log("5. Clique nos 3 pontos e selecione 'Reset Password'");
        console.log("   OU delete o usuário e crie novamente com a senha desejada");
        console.log("\nAlternativamente, adicione SUPABASE_SERVICE_ROLE_KEY ao .env");
        return;
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    });

    const { error } = await supabase.auth.admin.updateUserById(
        "0fafb210-45b6-49e3-9628-0eda50ddbbb5",
        { password: "L1601u6980!@#$" }
    );

    if (error) {
        console.error("Erro ao atualizar senha:", error.message);
    } else {
        console.log("Senha atualizada com sucesso!");
    }
}

main().catch(console.error);
