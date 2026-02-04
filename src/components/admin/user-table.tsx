"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Search,
    Eye,
    Slash,
    CheckCircle2
} from "lucide-react"

export type UserType = "PROFESSIONAL" | "CLIENT"
export type UserStatus = "ACTIVE" | "INACTIVE" | "PENDING"

interface User {
    id: string
    name: string
    email: string
    type: UserType
    status: UserStatus
    document?: string
    createdAt: string
}

interface UserTableProps {
    initialUsers: User[]
}

export function UserTable({ initialUsers }: UserTableProps) {
    const [users, setUsers] = useState(initialUsers)
    const [filter, setFilter] = useState<UserType | "ALL">("ALL")
    const [search, setSearch] = useState("")

    const filteredUsers = users.filter(user => {
        const matchesFilter = filter === "ALL" || user.type === filter
        const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
        return matchesFilter && matchesSearch
    })

    return (
        <div className="space-y-6">
            {/* Search and Filter Bar */}
            <div className="bg-white border-[3px] border-[#1A1A1A] p-4 shadow-[6px_6px_0_#FF6B00] flex flex-wrap gap-4 items-center">
                <div className="relative flex-1 min-w-[240px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="BUSCAR NOME OU EMAIL..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border-2 border-[#1A1A1A] font-bold text-xs uppercase focus:outline-none focus:border-[#FF6B00] transition-colors"
                    />
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => setFilter("ALL")}
                        className={`px-4 py-1.5 font-black uppercase text-[10px] tracking-widest border-2 transition-all ${filter === "ALL" ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" : "bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-gray-100"
                            }`}
                    >
                        Todos
                    </button>
                    <button
                        onClick={() => setFilter("PROFESSIONAL")}
                        className={`px-4 py-1.5 font-black uppercase text-[10px] tracking-widest border-2 transition-all ${filter === "PROFESSIONAL" ? "bg-[#FF6B00] text-white border-[#1A1A1A] shadow-[2px_2px_0_#000]" : "bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-gray-100"
                            }`}
                    >
                        Profissionais
                    </button>
                    <button
                        onClick={() => setFilter("CLIENT")}
                        className={`px-4 py-1.5 font-black uppercase text-[10px] tracking-widest border-2 transition-all ${filter === "CLIENT" ? "bg-[#0056D2] text-white border-[#1A1A1A] shadow-[2px_2px_0_#000]" : "bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-gray-100"
                            }`}
                    >
                        Clientes
                    </button>
                </div>
            </div>

            {/* Industrial Table */}
            <div className="bg-white border-[3px] border-[#1A1A1A] shadow-[8px_8px_0_#1A1A1A] overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-[#1A1A1A] text-white uppercase text-[10px] font-black tracking-widest text-left">
                            <th className="p-4 border-r border-white/20">Usuário</th>
                            <th className="p-4 border-r border-white/20">Tipo</th>
                            <th className="p-4 border-r border-white/20">Documento</th>
                            <th className="p-4 border-r border-white/20">Status</th>
                            <th className="p-4">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-[#1A1A1A]/10">
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 border-r-2 border-[#1A1A1A]/5">
                                    <div className="flex flex-col">
                                        <span className="font-black text-sm uppercase text-[#1A1A1A]">{user.name}</span>
                                        <span className="text-[10px] font-bold text-gray-400">{user.email}</span>
                                    </div>
                                </td>
                                <td className="p-4 border-r-2 border-[#1A1A1A]/5">
                                    <span className={`px-2 py-0.5 text-[10px] font-black uppercase border-2 ${user.type === 'PROFESSIONAL' ? 'bg-[#FF6B00] text-white border-[#1A1A1A]' : 'bg-[#0056D2] text-white border-[#1A1A1A]'
                                        }`}>
                                        {user.type === 'PROFESSIONAL' ? 'Profissional' : 'Cliente'}
                                    </span>
                                </td>
                                <td className="p-4 border-r-2 border-[#1A1A1A]/5">
                                    <span className="font-mono text-xs font-bold text-gray-500">{user.document || '---'}</span>
                                </td>
                                <td className="p-4 border-r-2 border-[#1A1A1A]/5">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full shadow-[1px_1px_0_#000] ${user.status === 'ACTIVE' ? 'bg-green-500' : user.status === 'PENDING' ? 'bg-yellow-500' : 'bg-red-500'
                                            }`} />
                                        <span className="font-black uppercase text-[10px]">{user.status}</span>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex gap-2">
                                        <Button size="sm" variant="outline" className="h-8 px-2 border-2 border-[#1A1A1A] shadow-[2px_2px_0_#1A1A1A] active:translate-y-0.5 active:shadow-none transition-all">
                                            <Eye className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            onClick={() => {
                                                const newStatus = user.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
                                                setUsers(prev => prev.map(u => u.id === user.id ? { ...u, status: newStatus } : u));
                                            }}
                                            className={`h-8 px-2 border-2 border-[#1A1A1A] shadow-[2px_2px_0_#1A1A1A] active:translate-y-0.5 active:shadow-none transition-all ${user.status === 'ACTIVE' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                                                }`}
                                        >
                                            {user.status === 'ACTIVE' ? <Slash className="w-4 h-4 text-white" /> : <CheckCircle2 className="w-4 h-4 text-white" />}
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filteredUsers.length === 0 && (
                    <div className="p-12 text-center">
                        <p className="font-black uppercase text-gray-400 text-sm">Nenhum usuário encontrado com estes critérios.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
