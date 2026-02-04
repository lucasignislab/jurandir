"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Hammer, Menu, X, User } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/buscar", label: "Buscar" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#servicos", label: "Serviços" },
    { href: "#depoimentos", label: "Depoimentos" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5E6D3]/80 backdrop-blur-md border-b-2 border-[#4A3728]/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-[#E07856] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Hammer className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif font-bold text-xl text-[#4A3728] block leading-none">
                Portal Jurandir
                <span className="block text-xs font-medium text-[#4A3728]/70 mt-1 tracking-wide">Marido de Aluguel</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold text-[#4A3728] hover:text-[#E07856] text-sm transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E07856] group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-sm">
                <User className="w-4 h-4 mr-2" />
                Entrar
              </Button>
            </Link>
            <Button size="sm" className="text-sm">
              Cadastrar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 bg-[#1A1A1A] text-white flex items-center justify-center border-2 border-[#1A1A1A] shadow-[4px_4px_0_#FFD700] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F5F0E8] border-t-[3px] border-[#1A1A1A] shadow-[0_8px_0_#1A1A1A]">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-bold text-[#1A1A1A] hover:text-[#FF6B00] uppercase text-lg py-2 border-b-2 border-[#1A1A1A]/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" size="lg" className="w-full justify-center">
                    Entrar
                  </Button>
                </Link>
                <Button size="lg" className="w-full justify-center">
                  Cadastrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
