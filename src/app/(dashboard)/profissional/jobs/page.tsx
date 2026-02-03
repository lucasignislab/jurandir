"use client"

import { useState } from "react"
import { JobCard, JobStatus } from "@/components/dashboard/job-card"
import { Button } from "@/components/ui/button"
import { Briefcase, Filter, Search } from "lucide-react"

const MOCK_JOBS = [
    {
        id: "uuid-1234-5678",
        title: "Reparo de Vazamento em Cozinha",
        clientName: "Carlos Alberto",
        clientPhone: "(19) 98765-4321",
        status: "IN_PROGRESS" as JobStatus,
        price: 150.00,
        date: "03/02/2026 - 14:00",
        address: "Rua das Flores, 123 - Cambuí, Campinas"
    },
    {
        id: "uuid-2234-5678",
        title: "Instalação de Chuveiro",
        clientName: "Ana Maria",
        clientPhone: "(19) 97777-6666",
        status: "PENDING" as JobStatus,
        price: 80.00,
        date: "04/02/2026 - 09:00",
        address: "Av. Brasil, 450 - Taquaral, Campinas"
    },
    {
        id: "uuid-3234-5678",
        title: "Pintura de Parede (Sala)",
        clientName: "Roberto Santos",
        clientPhone: "(19) 95555-4444",
        status: "COMPLETED" as JobStatus,
        price: 450.00,
        date: "01/02/2026 - 08:30",
        address: "Rua Itu, 88 - Mansões Santo Antônio, Campinas"
    },
    {
        id: "uuid-4234-5678",
        title: "Manutenção de Jardim",
        clientName: "Juliana Lima",
        clientPhone: "(19) 94444-3333",
        status: "ACCEPTED" as JobStatus,
        price: 200.00,
        date: "05/02/2026 - 16:00",
        address: "Condomínio Swiss Park, Campinas"
    }
]

export default function ProfessionalJobsPage() {
    const [filter, setFilter] = useState<JobStatus | "ALL">("ALL")

    const filteredJobs = filter === "ALL"
        ? MOCK_JOBS
        : MOCK_JOBS.filter(job => job.status === filter)

    return (
        <div className="space-y-8">
            {/* Header Info */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A]">
                        Meus <span className="text-[#FF6B00]">Jobs</span>
                    </h2>
                    <p className="text-gray-500 font-bold uppercase text-sm tracking-tight">
                        Gerencie suas ordens de serviço e atendimentos.
                    </p>
                </div>
                <Button size="lg" className="shadow-[4px_4px_0_#000]">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Novo Orçamento
                </Button>
            </div>

            {/* Filters Bar */}
            <div className="bg-white border-[3px] border-[#1A1A1A] p-4 shadow-[6px_6px_0_#FF6B00] flex flex-wrap gap-3 items-center">
                <div className="flex items-center gap-2 mr-4">
                    <Filter className="w-5 h-5 text-[#1A1A1A]" />
                    <span className="font-black uppercase text-xs">Filtrar:</span>
                </div>

                <button
                    onClick={() => setFilter("ALL")}
                    className={`px-4 py-1.5 font-black uppercase text-[10px] tracking-widest border-2 transition-all ${filter === "ALL" ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" : "bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-gray-100"
                        }`}
                >
                    Todos
                </button>
                <button
                    onClick={() => setFilter("PENDING")}
                    className={`px-4 py-1.5 font-black uppercase text-[10px] tracking-widest border-2 transition-all ${filter === "PENDING" ? "bg-[#FFD700] text-[#1A1A1A] border-[#1A1A1A] shadow-[2px_2px_0_#000]" : "bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-gray-100"
                        }`}
                >
                    Pendentes
                </button>
                <button
                    onClick={() => setFilter("IN_PROGRESS")}
                    className={`px-4 py-1.5 font-black uppercase text-[10px] tracking-widest border-2 transition-all ${filter === "IN_PROGRESS" ? "bg-[#0056D2] text-white border-[#1A1A1A] shadow-[2px_2px_0_#000]" : "bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-gray-100"
                        }`}
                >
                    Em Andamento
                </button>
                <button
                    onClick={() => setFilter("COMPLETED")}
                    className={`px-4 py-1.5 font-black uppercase text-[10px] tracking-widest border-2 transition-all ${filter === "COMPLETED" ? "bg-[#22C55E] text-white border-[#1A1A1A] shadow-[2px_2px_0_#000]" : "bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-gray-100"
                        }`}
                >
                    Concluídos
                </button>

                <div className="ml-auto relative flex-1 min-w-[200px] md:max-w-xs">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="BUSCAR OS OU CLIENTE..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border-2 border-[#1A1A1A] font-bold text-xs uppercase focus:outline-none focus:ring-0 focus:border-[#FF6B00] transition-colors"
                    />
                </div>
            </div>

            {/* Jobs Grid */}
            {filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredJobs.map(job => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            ) : (
                <div className="bg-white border-[3px] border-[#1A1A1A] border-dashed p-20 text-center shadow-[8px_8px_0_#1A1A1A]">
                    <Briefcase className="w-16 h-16 mx-auto mb-4 text-gray-300" strokeWidth={1} />
                    <h3 className="text-xl font-black uppercase text-gray-400">Nenhum serviço encontrado</h3>
                    <p className="text-gray-400 font-bold uppercase text-xs mt-2">Tente ajustar seus filtros de busca.</p>
                </div>
            )}
        </div>
    )
}
