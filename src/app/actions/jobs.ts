"use server"

import { JobStatus } from "@/components/dashboard/job-card"

// Helpers para formatação de moeda
export async function formatCurrency(value: number) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value)
}

// Futura integração com Prisma
export async function getProfessionalJobs(professionalId: string, status?: JobStatus | "ALL") {
    // TODO: Implementar busca real no banco de dados
    console.log(`Buscando jobs para profissional ${professionalId} com status ${status}`)
    return []
}

export async function updateJobStatus(jobId: string, newStatus: JobStatus) {
    // TODO: Implementar atualização no Prisma
    console.log(`Atualizando job ${jobId} para status ${newStatus}`)
    return { success: true }
}
