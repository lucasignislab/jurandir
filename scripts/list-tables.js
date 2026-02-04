const { Client } = require('pg');

async function main() {
    const client = new Client({
        connectionString: "postgresql://postgres:L1601u6980%21%40%23%24%25@db.wipusjzumclpjrukpfzo.supabase.co:5432/postgres"
    });
    await client.connect();
    const res = await client.query("SELECT table_schema, table_name FROM information_schema.tables WHERE table_schema = 'public'");
    console.log("Tabelas no schema public:", JSON.stringify(res.rows, null, 2));
    await client.end();
}

main().catch(console.error);
