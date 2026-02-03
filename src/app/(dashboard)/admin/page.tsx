import { getCurrentUser } from "@/lib/auth-server"
import { redirect } from "next/navigation"
import { StatsCard } from "@/components/ui/stats-card"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Users,
    Briefcase,
    CreditCard,
    TrendingUp,
    Settings,
    AlertCircle
} from "lucide-react"

export default async function AdminDashboard() {
    const user = await getCurrentUser()

    if (!user || user.type !== "ADMIN") {
        redirect("/login")
    }

    return (
        <div className="space-y-8">
            {/* Header com Saudação */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black uppercase text-[#1A1A1A]">
                        Painel do <span className="text-[#FF6B00]">Administrador</span>
                    </h2>
                    <p className="text-gray-500 font-bold uppercase text-sm tracking-tight">
                        Controle total do sistema Portal Jurandir.
                    </p>
                </div>

                <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4 mr-2" />
                        Configurações
                    </Button>
                </div>
            </div>

            {/* Grid de Estatísticas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    label="Total Usuários"
                    value="0"
                    icon={Users}
                    variant="secondary"
                />
                <StatsCard
                    label="Jobs Totais"
                    value="0"
                    icon={Briefcase}
                    variant="default"
                />
                <StatsCard
                    label="Faturamento"
                    value="R$ 0,00"
                    icon={TrendingUp}
                    variant="accent"
                />
                <StatsCard
                    label="Pagamentos Pendentes"
                    value="0"
                    icon={CreditCard}
                    variant="default"
                    description="Aprovação PIX"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Alertas de Sistema */}
                <Card>
                    <CardHeader>
                        <CardTitle>Alertas & Pendências</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-red-50 border-2 border-red-600 shadow-[4px_4px_0_#DC2626]">
                                <AlertCircle className="w-8 h-8 text-red-600 shrink-0" />
                                <div>
                                    <p className="font-black uppercase text-xs text-red-600">Nível Crítico</p>
                                    <p className="text-sm font-bold text-[#1A1A1A]">Nenhum alerta crítico detectado no sistema.</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 border-2 border-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A]">
                                <CreditCard className="w-8 h-8 text-[#FF6B00] shrink-0" />
                                <div>
                                    <p className="font-black uppercase text-xs text-[#1A1A1A]">Pagamentos</p>
                                    <p className="text-sm font-bold text-[#1A1A1A]">0 comprovantes aguardando análise manual.</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Logs de Atividade */}
                <Card>
                    <CardHeader>
                        <CardTitle>Atividade Recente</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4 text-center py-8">
                            <p className="font-bold text-gray-400 uppercase text-xs">Sem atividades registradas hoje.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
