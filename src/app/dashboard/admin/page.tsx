import { getCurrentUser } from "@/lib/auth-server"
import { redirect } from "next/navigation"
import { StatsCard } from "@/components/ui/stats-card"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getAdminStats, getRecentActivity } from "@/app/actions/admin"
import {
    Users,
    Briefcase,
    CreditCard,
    TrendingUp,
    Settings,
    AlertCircle,
    UserPlus,
    CheckCircle2
} from "lucide-react"

export default async function AdminDashboard() {
    const user = await getCurrentUser()

    if (!user || user.type !== "ADMIN") {
        redirect("/login")
    }

    const stats = await getAdminStats()
    const activities = await getRecentActivity()

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
                    <Button variant="outline" className="border-2 border-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
                        <Settings className="w-4 h-4 mr-2" />
                        Configurações
                    </Button>
                </div>
            </div>

            {/* Grid de Estatísticas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    label="Total Usuários"
                    value={stats.totalUsers.toString()}
                    icon={Users}
                    variant="secondary"
                />
                <StatsCard
                    label="Jobs Totais"
                    value={stats.totalJobs.toString()}
                    icon={Briefcase}
                    variant="default"
                />
                <StatsCard
                    label="Faturamento"
                    value={stats.revenue}
                    icon={TrendingUp}
                    variant="accent"
                />
                <StatsCard
                    label="Pagamentos Pendentes"
                    value={stats.pendingPayments.toString()}
                    icon={CreditCard}
                    variant="default"
                    description="Aprovação PIX"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Alertas de Sistema */}
                <Card className="border-[3px] border-[#1A1A1A] shadow-[8px_8px_0_#1A1A1A]">
                    <CardHeader className="border-b-[3px] border-[#1A1A1A] bg-[#F5F0E8]">
                        <CardTitle className="font-black uppercase text-lg">Alertas & Pendências</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-red-50 border-2 border-red-600 shadow-[4px_4px_0_#EF4444]">
                                <AlertCircle className="w-8 h-8 text-red-600 shrink-0" />
                                <div>
                                    <p className="font-black uppercase text-xs text-red-600 tracking-tighter">Nível Crítico</p>
                                    <p className="text-sm font-bold text-[#1A1A1A]">Verificar 2 denúncias de usuários pendentes.</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0_#FFD700]">
                                <CreditCard className="w-8 h-8 text-[#FF6B00] shrink-0" />
                                <div>
                                    <p className="font-black uppercase text-xs text-[#1A1A1A] tracking-tighter">Pagamentos</p>
                                    <p className="text-sm font-bold text-[#1A1A1A]">{stats.pendingPayments} comprovantes aguardando análise manual.</p>
                                </div>
                                <Button size="sm" className="ml-auto bg-[#1A1A1A] text-white font-black text-[10px] uppercase h-8 px-3">Analisar</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Logs de Atividade */}
                <Card className="border-[3px] border-[#1A1A1A] shadow-[8px_8px_0_#1A1A1A]">
                    <CardHeader className="border-b-[3px] border-[#1A1A1A] bg-[#F5F0E8]">
                        <CardTitle className="font-black uppercase text-lg">Atividade Recente</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y-2 divide-[#1A1A1A]/10">
                            {activities.map((activity) => (
                                <div key={activity.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 border-2 border-[#1A1A1A] flex items-center justify-center shadow-[2px_2px_0_#1A1A1A] ${activity.type === 'REGISTER' ? 'bg-[#FF6B00]' : activity.type === 'PAYMENT' ? 'bg-[#FFD700]' : 'bg-[#22C55E]'
                                            }`}>
                                            {activity.type === 'REGISTER' && <UserPlus className="w-5 h-5 text-white" />}
                                            {activity.type === 'PAYMENT' && <CreditCard className="w-5 h-5 text-[#1A1A1A]" />}
                                            {activity.type === 'JOB_DONE' && <CheckCircle2 className="w-5 h-5 text-white" />}
                                        </div>
                                        <div>
                                            <p className="font-black text-xs uppercase text-[#1A1A1A]">{activity.user}</p>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                                                {activity.type === 'REGISTER' ? 'Novo cadastro' : activity.type === 'PAYMENT' ? 'Enviou comprovante' : 'Finalizou um Job'}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-black uppercase text-gray-500">{activity.time}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
