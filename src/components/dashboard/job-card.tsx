"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Phone, MessageSquare, MoreHorizontal, Clock, MapPin } from "lucide-react"

export type JobStatus = "PENDING" | "ACCEPTED" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED"

interface JobCardProps {
    job: {
        id: string
        title: string
        clientName: string
        clientPhone: string
        status: JobStatus
        price: number
        date: string
        address: string
    }
}

const statusColors: Record<JobStatus, { bg: string; text: string; border: string }> = {
    PENDING: { bg: "#FFD700", text: "#1A1A1A", border: "#1A1A1A" },
    ACCEPTED: { bg: "#FF6B00", text: "#FFFFFF", border: "#1A1A1A" },
    IN_PROGRESS: { bg: "#0056D2", text: "#FFFFFF", border: "#1A1A1A" },
    COMPLETED: { bg: "#22C55E", text: "#FFFFFF", border: "#1A1A1A" },
    CANCELLED: { bg: "#EF4444", text: "#FFFFFF", border: "#1A1A1A" },
}

const statusLabels: Record<JobStatus, string> = {
    PENDING: "Pendente",
    ACCEPTED: "Aceito",
    IN_PROGRESS: "Em Andamento",
    COMPLETED: "Concluído",
    CANCELLED: "Cancelado",
}

export function JobCard({ job }: JobCardProps) {
    const currentStatus = statusColors[job.status]

    return (
        <div className="bg-white border-[3px] border-[#1A1A1A] shadow-[8px_8px_0_#1A1A1A] overflow-hidden flex flex-col group hover:-translate-x-1 hover:-translate-y-1 transition-all">
            {/* Header - OS ID */}
            <div className="bg-[#1A1A1A] px-4 py-2 flex justify-between items-center">
                <span className="text-white font-black text-xs uppercase tracking-widest">OS #{job.id.slice(0, 8)}</span>
                <div
                    className="px-2 py-0.5 text-[10px] font-black uppercase border-2 shadow-[2px_2px_0_#000]"
                    style={{ backgroundColor: currentStatus.bg, color: currentStatus.text, borderColor: currentStatus.border }}
                >
                    {statusLabels[job.status]}
                </div>
            </div>

            <div className="p-5 space-y-4 flex-1">
                {/* Title & Price */}
                <div className="flex justify-between items-start">
                    <h3 className="font-black text-xl uppercase leading-tight max-w-[70%]">{job.title}</h3>
                    <div className="text-right">
                        <span className="block text-2xl font-black text-[#FF6B00]">R$ {job.price}</span>
                        <span className="text-[10px] font-bold text-gray-500 uppercase">Preço Final</span>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 gap-3 pt-2">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A]">
                        <User className="w-4 h-4 text-[#FF6B00]" />
                        <span className="uppercase">{job.clientName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A]">
                        <Calendar className="w-4 h-4 text-[#FF6B00]" />
                        <span>{job.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="truncate">{job.address}</span>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-3 border-t-[3px] border-[#1A1A1A]">
                <button className="flex items-center justify-center py-3 bg-[#25D366] text-white border-r-[3px] border-[#1A1A1A] hover:opacity-90 active:translate-y-0.5 transition-all">
                    <MessageSquare className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center py-3 bg-white text-[#1A1A1A] border-r-[3px] border-[#1A1A1A] hover:bg-gray-100 active:translate-y-0.5 transition-all">
                    <Phone className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center py-3 bg-[#1A1A1A] text-white hover:bg-[#333] active:translate-y-0.5 transition-all uppercase font-black text-xs tracking-tighter">
                    Ver Detalhes
                </button>
            </div>
        </div>
    )
}
