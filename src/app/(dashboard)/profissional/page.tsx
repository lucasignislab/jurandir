import { getCurrentUser } from "@/lib/auth-server"
import { redirect } from "next/navigation"
import { StatsCard } from "@/components/ui/stats-card"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Briefcase,
    Star,
    TrendingUp,
    Clock,
    ArrowRight,
    Hammer,
    AlertTriangle
} from "lucide-react"

export default async function ProfissionalDashboard() {
    const user = await getCurrentUser()

    if (!user || user.type !== "PROFESSIONAL") {
        redirect("/login")
    }

    const prof = user.professional

    return (
        <div className="space-y-8">
            {/* Header com Saudação */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black uppercase text-[#1A1A1A]">
                        Olá, <span className="text-[#FF6B00]">{user.name.split(' ')[0]}</span>!
                    </h2>
                    <p className="text-gray-500 font-bold uppercase text-sm tracking-tight">
                        Seja bem-vindo ao seu painel de ferramentas.
                    </p>
                </div>

                {!prof?.isActive && (
                    <div className="bg-[#FFD700] border-[3px] border-[#1A1A1A] px-4 py-2 flex items-center gap-2 shadow-[4px_4px_0_#1A1A1A] animate-pulse">
                        <AlertTriangle className="w-5 h-5 text-[#1A1A1A]" />
                        <span className="font-black uppercase text-xs">Assinatura Pendente</span>
                    </div>
                )}
            </div>

            {/* Grid de Estatísticas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    label="Jobs Pendentes"
                    value="0"
                    icon={Clock}
                    description="Aguardando resposta"
                    variant="secondary"
                />
                <StatsCard
                    label="Jobs Ativos"
                    value="0"
                    icon={Briefcase}
                    description="Em andamento"
                    variant="default"
                />
                <StatsCard
                    label="Avaliação"
                    value={prof?.rating?.toFixed(1) || "0.0"}
                    icon={Star}
                    description={`${prof?.reviewCount || 0} avaliações`}
                    variant="default"
                />
                <StatsCard
                    label="Ganhos Estimados"
                    value="R$ 0,00"
                    icon={TrendingUp}
                    description="Este mês"
                    variant="accent"
                />
            </div>

            {/* Fita de Construção (Aesthetic) */}
            <div className="w-full h-8 bg-[#FFD700] overflow-hidden border-y-[3px] border-[#1A1A1A] relative flex items-center">
                <div className="absolute whitespace-nowrap animate-marquee flex items-center gap-12">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center gap-2 font-black uppercase text-xs italic tracking-tighter">
                            <Hammer className="w-4 h-4" />
                            Portal Jurandir • Área do Profissional • Trabalho em Progresso
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Próximos Serviços */}
                <Card className="lg:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0">
                        <CardTitle>Solicitações Recentes</CardTitle>
                        <Button variant="ghost" size="sm" className="font-black underline">
                            Ver Todos
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {/* Empty State */}
                            <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-gray-300 bg-gray-50/50">
                                <Briefcase className="w-12 h-12 text-gray-300 mb-4" />
                                <p className="font-bold text-gray-500 uppercase text-sm">Nenhuma solicitação no momento</p>
                                <p className="text-xs text-gray-400 mt-1">Fique atento às notificações!</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Perfil & Status */}
                <div className="space-y-8">
                    <Card variant="secondary">
                        <CardHeader>
                            <CardTitle className="text-xl">Sua Assinatura</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-2 border-b-2 border-[#1A1A1A]/10">
                                    <span className="font-bold text-gray-500 uppercase text-xs">Status:</span>
                                    <span className="font-black text-red-600 uppercase text-xs">Inativa</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b-2 border-[#1A1A1A]/10">
                                    <span className="font-bold text-gray-500 uppercase text-xs">Plano:</span>
                                    <span className="font-black text-[#1A1A1A] uppercase text-xs">Mensal (3% fixo)</span>
                                </div>

                                <Button className="w-full mt-4" variant="secondary">
                                    Regularizar Agora
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl">Dica Profissional</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm font-medium text-gray-600 mb-4">
                                Mantenha seu portfólio sempre atualizado com fotos reais dos seus serviços. Isso aumenta em até <span className="font-black text-[#FF6B00]">3x</span> as chances de ser contratado.
                            </p>
                            <Button variant="outline" className="w-full border-dashed">
                                Adicionar Fotos
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
