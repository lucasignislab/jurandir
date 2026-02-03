"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import {
  Hammer,
  LayoutDashboard,
  Briefcase,
  User,
  ImageIcon,
  CreditCard,
  Calendar,
  Search,
  Heart,
  Users,
  Settings,
  Menu,
  X,
  LogOut,
  ChevronRight
} from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
  userType: "professional" | "client" | "admin"
}

const professionalNav = [
  { href: "/dashboard/profissional", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/profissional/jobs", label: "Meus Jobs", icon: Briefcase },
  { href: "/dashboard/profissional/perfil", label: "Perfil", icon: User },
  { href: "/dashboard/profissional/portfolio", label: "Portfólio", icon: ImageIcon },
  { href: "/dashboard/profissional/assinatura", label: "Assinatura", icon: CreditCard },
  { href: "/dashboard/profissional/agenda", label: "Agenda", icon: Calendar },
]

const clientNav = [
  { href: "/dashboard/cliente", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/cliente/buscar", label: "Buscar", icon: Search },
  { href: "/dashboard/cliente/servicos", label: "Meus Serviços", icon: Briefcase },
  { href: "/dashboard/cliente/favoritos", label: "Favoritos", icon: Heart },
]

const adminNav = [
  { href: "/dashboard/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/admin/usuarios", label: "Usuários", icon: Users },
  { href: "/dashboard/admin/pagamentos", label: "Pagamentos", icon: CreditCard },
  { href: "/dashboard/admin/servicos", label: "Serviços", icon: Settings },
]

export function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navigation = userType === "professional"
    ? professionalNav
    : userType === "client"
      ? clientNav
      : adminNav

  const userName = userType === "professional"
    ? "João Silva"
    : userType === "client"
      ? "Maria Oliveira"
      : "Admin"

  const userRole = userType === "professional"
    ? "Profissional"
    : userType === "client"
      ? "Cliente"
      : "Administrador"

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-50 h-full w-72 bg-[#1A1A1A] border-r-[3px] border-[#FF6B00] transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        {/* Logo */}
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF6B00] border-[3px] border-white flex items-center justify-center shadow-[3px_3px_0_rgba(255,255,255,0.2)]">
              <Hammer className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <span className="font-black text-white text-sm uppercase tracking-tight block leading-none">
                Portal Jurandir
                <span className="block text-xs font-bold text-[#FF6B00] mt-0.5 tracking-widest uppercase">Marido de Aluguel</span>
                {userRole}
              </span>
            </div>
          </Link>

          {/* Close button (mobile) */}
          <button
            className="lg:hidden ml-auto w-8 h-8 bg-white/10 flex items-center justify-center"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* User Info */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Avatar fallback={userName.charAt(0)} size="md" />
            <div>
              <p className="font-black text-white">{userName}</p>
              <p className="text-xs font-bold text-[#FF6B00] uppercase">{userRole}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase transition-all ${isActive
                  ? "bg-[#FF6B00] text-white border-2 border-white shadow-[3px_3px_0_rgba(255,255,255,0.2)]"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
                {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
              </Link>
            )
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <Link href="/">
            <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5">
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-72">
        {/* Top Bar */}
        <header className="h-20 bg-white border-b-[3px] border-[#1A1A1A] flex items-center justify-between px-6 lg:px-8 sticky top-0 z-30">
          <button
            className="lg:hidden w-10 h-10 bg-[#1A1A1A] text-white flex items-center justify-center border-2 border-[#1A1A1A] shadow-[3px_3px_0_#FFD700]"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>

          <h1 className="hidden sm:block text-xl font-black uppercase text-[#1A1A1A]">
            {navigation.find(item => item.href === pathname)?.label || "Dashboard"}
          </h1>

          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                Voltar ao Site
              </Button>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
