import { getCurrentUser } from "@/lib/auth-server"
import { redirect } from "next/navigation"
import { StatsCard } from "@/components/ui/stats-card"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    Briefcase,
    Search,
    Heart,
    Clock,
    ArrowRight,
    Plus
} from "lucide-react"

export default async function ClienteDashboard() {
    const user = await getCurrentUser()

    if (!user || user.type !== "CLIENT") {
        redirect("/login")
    }

    return (
        <div className="space-y-8">
            {/* Header com Saudação */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black uppercase text-[#1A1A1A]">
                        Olá, <span className="text-[#FF6B00]">{user.name.split(' ')[0]}</span>!
                    </h2>
                    <p className="text-gray-500 font-bold uppercase text-sm tracking-tight">
                        Encontre o profissional certo para sua necessidade.
                    </p>
                </div>

                <Link href="/dashboard/cliente/buscar">
                    <Button variant="secondary" className="shadow-[8px_8px_0_#1A1A1A]">
                        <Plus className="w-5 h-5 mr-2" strokeWidth={3} />
                        Nova Solicitação
                    </Button>
                </Link>
            </div>

            {/* Grid de Estatísticas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatsCard
                    label="Serviços Ativos"
                    value="0"
                    icon={Clock}
                    description="Em andamento"
                    variant="secondary"
                />
                <StatsCard
                    label="Total de Serviços"
                    value="0"
                    icon={Briefcase}
                    description="Já realizados"
                    variant="default"
                />
                <StatsCard
                    label="Profissionais Favoritos"
                    value="0"
                    icon={Heart}
                    description="Salvos por você"
                    variant="default"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Meus Serviços */}
                <Card className="lg:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0">
                        <CardTitle>Meus Serviços Recentes</CardTitle>
                        <Link href="/dashboard/cliente/servicos">
                            <Button variant="ghost" size="sm" className="font-black underline">
                                Ver Todos
                            </Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {/* Empty State */}
                            <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-gray-300 bg-gray-50/50">
                                <Search className="w-12 h-12 text-gray-300 mb-4" />
                                <p className="font-bold text-gray-500 uppercase text-sm">Nenhum serviço solicitado</p>
                                <p className="text-xs text-gray-400 mt-1">Precisa de ajuda com algum reparo?</p>
                                <Link href="/dashboard/cliente/buscar" className="mt-4">
                                    <Button variant="outline" size="sm">
                                        Buscar Profissionais agora
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Busca Rápida */}
                <div className="space-y-8">
                    <Card variant="accent">
                        <CardHeader>
                            <CardTitle className="text-xl text-white">Busca Rápida</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm font-bold text-white/80 mb-6 uppercase tracking-tight">
                                Categorias mais procuradas:
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {['Elétrica', 'Hidráulica', 'Pintura', 'Limpeza'].map((cat) => (
                                    <Button
                                        key={cat}
                                        variant="outline"
                                        size="sm"
                                        className="bg-white hover:bg-[#FFD700] text-[#1A1A1A] border-none shadow-[4px_4px_0_rgba(0,0,0,0.2)]"
                                    >
                                        {cat}
                                    </Button>
                                ))}
                            </div>
                            <Link href="/dashboard/cliente/buscar" className="block mt-6">
                                <Button className="w-full bg-white text-[#1A1A1A] hover:bg-[#F5F0E8]">
                                    Ver Todas Categorias
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl">Dica de Segurança</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm font-medium text-gray-600 mb-4">
                                Sempre verifique as <span className="font-black text-[#FF6B00]">avaliações</span> e o <span className="font-black text-[#FF6B00]">portfólio</span> do profissional antes de fechar um serviço.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
