"use client"

import Link from "next/link"
import { Hammer, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white border-t-[6px] border-[#FF6B00]">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FF6B00] border-[3px] border-white flex items-center justify-center shadow-[4px_4px_0_rgba(255,255,255,0.2)]">
                <Hammer className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-black text-xl uppercase tracking-tight block text-white">
                  Portal Jurandir
                </span>
                <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest block -mt-1">
                  Marido de Aluguel
                </span>
              </div>
            </div>
            <p className="text-gray-400 font-medium max-w-md mb-6">
              Conectando profissionais qualificados com quem precisa de serviços domésticos
              em Campinas e São Paulo. Serviço rápido, seguro e com garantia.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 border-2 border-white/30 flex items-center justify-center hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 border-2 border-white/30 flex items-center justify-center hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-black text-lg uppercase mb-6 text-[#FFD700]">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/buscar" className="text-gray-400 hover:text-white font-medium transition-colors">
                  Buscar Profissionais
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-400 hover:text-white font-medium transition-colors">
                  Cadastrar como Profissional
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-400 hover:text-white font-medium transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white font-medium transition-colors">
                  Como Funciona
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-lg uppercase mb-6 text-[#FFD700]">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#FF6B00] mt-0.5" />
                <span className="text-gray-400 font-medium">
                  contato@portaljurandir.com.br
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FF6B00] mt-0.5" />
                <span className="text-gray-400 font-medium">
                  (19) 99999-9999
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF6B00] mt-0.5" />
                <span className="text-gray-400 font-medium">
                  Campinas, SP - Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-medium text-sm">
            © 2026 Portal Jurandir. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 hover:text-white font-medium text-sm transition-colors">
              Termos de Uso
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white font-medium text-sm transition-colors">
              Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
