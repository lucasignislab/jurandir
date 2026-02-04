"use server"

import { revalidatePath } from "next/cache"

export type UserStatus = "ACTIVE" | "INACTIVE" | "PENDING"

interface AdminUserData {
    id: string
    name: string
    email: string
    type: "PROFESSIONAL" | "CLIENT"
    status: UserStatus
    document?: string
    createdAt: string
}

// Mock Data para desenvolvimento
const MOCK_ADMIN_USERS: AdminUserData[] = [
    {
        id: "1",
        name: "João da Silva",
        email: "joao@exemplo.com",
        type: "PROFESSIONAL",
        status: "ACTIVE",
        document: "123.456.789-00",
        createdAt: "2026-01-20"
    },
    {
        id: "2",
        name: "Maria Oliveira",
        email: "maria@exemplo.com",
        type: "CLIENT",
        status: "ACTIVE",
        createdAt: "2026-01-25"
    },
    {
        id: "3",
        name: "Pedro Técnico",
        email: "pedro@exemplo.com",
        type: "PROFESSIONAL",
        status: "PENDING",
        document: "987.654.321-11",
        createdAt: "2026-02-01"
    }
]

export async function getAdminUsers() {
    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 500))
    return MOCK_ADMIN_USERS
}

export async function toggleUserStatus(userId: string, currentStatus: UserStatus) {
    const newStatus = currentStatus === "ACTIVE" ? "INACTIVE" : "ACTIVE"
    console.log(`Alterando status do usuário ${userId} para ${newStatus}`)

    revalidatePath("/admin/usuarios")
    return { success: true, newStatus }
}

export async function getAdminStats() {
    return {
        totalUsers: 154,
        totalJobs: 842,
        revenue: "R$ 12.450,00",
        pendingPayments: 5
    }
}

export async function getRecentActivity() {
    return [
        { id: 1, type: "REGISTER", user: "André Lima", time: "Há 10 minutos" },
        { id: 2, type: "PAYMENT", user: "Carlos Reparos", time: "Há 25 minutos" },
        { id: 3, type: "JOB_DONE", user: "Ana Pinturas", time: "Há 1 hora" },
        { id: 4, type: "REGISTER", user: "Marcos Engenharia", time: "Há 2 horas" }
    ]
}
