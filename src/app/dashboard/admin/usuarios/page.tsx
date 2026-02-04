import { getCurrentUser } from "@/lib/auth-server"
import { redirect } from "next/navigation"
import { getAdminUsers } from "@/app/actions/admin"
import { UserTable } from "@/components/admin/user-table"

export default async function AdminUsersPage() {
    const user = await getCurrentUser()

    if (!user || user.type !== "ADMIN") {
        redirect("/login")
    }

    const users = await getAdminUsers()

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A]">
                    Gestão de <span className="text-[#FF6B00]">Usuários</span>
                </h2>
                <p className="text-gray-500 font-bold uppercase text-sm tracking-tight">
                    Monitore, ative ou bloqueie acessos ao sistema.
                </p>
            </div>

            <UserTable initialUsers={users} />
        </div>
    )
}
