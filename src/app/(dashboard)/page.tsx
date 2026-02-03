import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth-server"

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  if (user.type === "PROFESSIONAL") {
    redirect("/dashboard/profissional")
  }

  if (user.type === "CLIENT") {
    redirect("/dashboard/cliente")
  }

  if (user.type === "ADMIN") {
    redirect("/dashboard/admin")
  }

  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center p-8 border-[3px] border-[#1A1A1A] bg-white shadow-[8px_8px_0_#1A1A1A]">
        <h2 className="text-2xl font-black uppercase mb-2">Redirecionando...</h2>
        <p className="font-bold text-gray-500">Estamos preparando seu painel.</p>
      </div>
    </div>
  )
}
