import { getCurrentUser } from "@/lib/auth-server"
import { redirect } from "next/navigation"
import { ProfileForm } from "@/components/forms/profile-form"

export const metadata = {
    title: "Meu Perfil | Portal Jurandir",
    description: "Gerencie suas informações profissionais",
}

export default async function PerfilPage() {
    const user = await getCurrentUser()

    if (!user || user.type !== "PROFESSIONAL") {
        redirect("/login")
    }

    // Sanitização simples para garantir que o initialData seja serializável e seguro
    const initialData = {
        name: user.name,
        phone: user.phone,
        professional: user.professional ? {
            bio: user.professional.bio,
            experienceYears: user.professional.experienceYears,
            skills: user.professional.skills,
            address: user.professional.address,
            city: user.professional.city,
            state: user.professional.state,
            zipCode: user.professional.zipCode,
            document: user.professional.document,
        } : null
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-12">
            <div className="border-b-[3px] border-[#1A1A1A] pb-6">
                <h2 className="text-4xl font-black uppercase text-[#1A1A1A]">
                    Editar <span className="text-[#FF6B00]">Perfil</span>
                </h2>
                <p className="text-gray-500 font-bold uppercase text-sm mt-2">
                    Mantenha seus dados atualizados para atrair mais clientes.
                </p>
            </div>

            <ProfileForm initialData={initialData} />
        </div>
    )
}
