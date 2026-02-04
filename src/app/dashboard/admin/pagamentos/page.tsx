import { getCurrentUser } from "@/lib/auth-server"
import { redirect } from "next/navigation"
import { PaymentApprover } from "@/components/admin/payment-approver"

export default async function AdminPaymentsPage() {
    const user = await getCurrentUser()

    if (!user || user.type !== "ADMIN") {
        redirect("/login")
    }

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A]">
                    Aprovação de <span className="text-[#FF6B00]">Pagamentos</span>
                </h2>
                <p className="text-gray-500 font-bold uppercase text-sm tracking-tight">
                    Valide comprovantes PIX para liberar acessos e serviços.
                </p>
            </div>

            <PaymentApprover />
        </div>
    )
}
