import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth-server"
import { DashboardLayout } from "@/components/layout/dashboard-layout"

export default async function LayoutAutenticado({
    children,
}: {
    children: React.ReactNode
}) {
    const user = await getCurrentUser()

    if (!user) {
        redirect("/login")
    }

    // Mapeia o enum do Prisma para as strings esperadas pelo DashboardLayout
    const userType = user.type.toLowerCase() as "professional" | "client" | "admin"

    return (
        <DashboardLayout userType={userType}>
            {children}
        </DashboardLayout>
    )
}
