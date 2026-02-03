"use server"

import { prisma } from "@/lib/db"
import { getCurrentUser } from "@/lib/auth-server"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const profileSchema = z.object({
    name: z.string().min(2, "Nome muito curto"),
    phone: z.string().min(10, "Telefone inválido"),
    bio: z.string().max(500, "Bio pode ter no máximo 500 caracteres").optional(),
    experienceYears: z.number().min(0).max(50),
    skills: z.array(z.string()),
    address: z.string().min(5, "Endereço incompleto"),
    city: z.string().min(2, "Cidade inválida"),
    state: z.string().min(2, "Estado inválido"),
    zipCode: z.string().min(8, "CEP inválido"),
    document: z.string().min(11, "CPF/CNPJ inválido"),
})

export async function updateProfessionalProfile(data: z.infer<typeof profileSchema>) {
    try {
        const user = await getCurrentUser()

        if (!user || user.type !== "PROFESSIONAL") {
            throw new Error("Não autorizado")
        }

        const validated = profileSchema.parse(data)

        // Atualiza User e Professional em uma transação
        await prisma.$transaction([
            prisma.user.update({
                where: { id: user.id },
                data: {
                    name: validated.name,
                    phone: validated.phone,
                },
            }),
            prisma.professional.update({
                where: { userId: user.id },
                data: {
                    bio: validated.bio,
                    experienceYears: validated.experienceYears,
                    skills: validated.skills,
                    address: validated.address,
                    city: validated.city,
                    state: validated.state,
                    zipCode: validated.zipCode,
                    document: validated.document,
                    // Por enquanto, não atualizamos lat/lng aqui, 
                    // mas em uma versão futura poderíamos integrar com API de mapa
                },
            }),
        ])

        revalidatePath("/dashboard/profissional")
        revalidatePath("/dashboard/profissional/perfil")

        return { success: true }
    } catch (error) {
        console.error("Erro ao atualizar perfil:", error)
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message }
        }
        return { success: false, error: "Falha ao atualizar perfil. Tente novamente." }
    }
}
