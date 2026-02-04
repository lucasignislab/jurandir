"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Hammer, Wrench, Paintbrush, Leaf, Users, Award } from "lucide-react"
import Link from "next/link"

export default function LandingIndustrialBrutalist() {
    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            {/* Navbar */}
            <nav className="border-b-[3px] border-[#1A1A1A] bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-20">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#FF6B00] border-[3px] border-[#1A1A1A] flex items-center justify-center shadow-[4px_4px_0_#1A1A1A]">
                                <Hammer className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </div>
                            <span className="font-black text-xl uppercase tracking-tight text-[#1A1A1A]">
                                Portal Jurandir
                            </span>
                        </Link>
                        <div className="flex items-center gap-4">
                            <Link href="/login">
                                <Button variant="ghost" className="border-2 border-[#1A1A1A] font-bold">
                                    Entrar
                                </Button>
                            </Link>
                            <Button className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white font-bold border-[3px] border-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A] hover:shadow-[6px_6px_0_#1A1A1A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                                Cadastrar
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-[#FF6B00] text-white px-4 py-2 border-[3px] border-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A] mb-8">
                                <Hammer className="w-4 h-4" strokeWidth={2.5} />
                                <span className="font-bold text-sm uppercase">
                                    Serviços em Campinas & SP
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-5xl lg:text-6xl font-black uppercase mb-6 leading-tight tracking-tight">
                                Encontre os{" "}
                                <span className="text-[#FF6B00]">melhores</span>
                                <br />
                                profissionais
                            </h1>
                            <p className="text-xl font-bold text-[#4A4A4A] mb-8 max-w-lg">
                                Para sua casa. Reparos, pintura, jardinagem e muito mais.
                            </p>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Button size="lg" className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white font-bold border-[3px] border-[#1A1A1A] shadow-[6px_6px_0_#1A1A1A] hover:shadow-[8px_8px_0_#1A1A1A] hover:-translate-x-1 hover:-translate-y-1 transition-all">
                                    Buscar Profissionais
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button variant="outline" size="lg" className="bg-white hover:bg-gray-50 font-bold border-[3px] border-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A] hover:shadow-[6px_6px_0_#1A1A1A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                                    Ser um Profissional
                                </Button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-white border-[3px] border-[#1A1A1A] p-4 shadow-[4px_4px_0_#1A1A1A]">
                                    <div className="text-3xl font-black text-[#FF6B00]">500+</div>
                                    <div className="text-xs font-bold text-[#1A1A1A] uppercase mt-1">Profissionais</div>
                                </div>
                                <div className="bg-white border-[3px] border-[#1A1A1A] p-4 shadow-[4px_4px_0_#1A1A1A]">
                                    <div className="text-3xl font-black text-[#FF6B00]">2000+</div>
                                    <div className="text-xs font-bold text-[#1A1A1A] uppercase mt-1">Serviços</div>
                                </div>
                                <div className="bg-white border-[3px] border-[#1A1A1A] p-4 shadow-[4px_4px_0_#1A1A1A]">
                                    <div className="text-3xl font-black text-[#FF6B00]">4.8</div>
                                    <div className="text-xs font-bold text-[#1A1A1A] uppercase mt-1">Avaliação</div>
                                </div>
                            </div>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#FFD700] border-[3px] border-[#1A1A1A] p-6 shadow-[6px_6px_0_#1A1A1A] hover:shadow-[8px_8px_0_#1A1A1A] hover:-translate-x-1 hover:-translate-y-1 transition-all">
                                <Wrench className="w-12 h-12 text-[#1A1A1A] mb-3" strokeWidth={2.5} />
                                <div className="font-black text-[#1A1A1A] uppercase text-sm">Hidráulica</div>
                            </div>
                            <div className="bg-[#FF6B00] border-[3px] border-[#1A1A1A] p-6 shadow-[6px_6px_0_#1A1A1A] hover:shadow-[8px_8px_0_#1A1A1A] hover:-translate-x-1 hover:-translate-y-1 transition-all">
                                <Hammer className="w-12 h-12 text-white mb-3" strokeWidth={2.5} />
                                <div className="font-black text-white uppercase text-sm">Marcenaria</div>
                            </div>
                            <div className="bg-[#1A1A1A] border-[3px] border-[#1A1A1A] p-6 shadow-[6px_6px_0_#FF6B00] hover:shadow-[8px_8px_0_#FF6B00] hover:-translate-x-1 hover:-translate-y-1 transition-all">
                                <Paintbrush className="w-12 h-12 text-[#FFD700] mb-3" strokeWidth={2.5} />
                                <div className="font-black text-[#FFD700] uppercase text-sm">Pintura</div>
                            </div>
                            <div className="bg-white border-[3px] border-[#1A1A1A] p-6 shadow-[6px_6px_0_#1A1A1A] hover:shadow-[8px_8px_0_#1A1A1A] hover:-translate-x-1 hover:-translate-y-1 transition-all">
                                <Leaf className="w-12 h-12 text-[#1A1A1A] mb-3" strokeWidth={2.5} />
                                <div className="font-black text-[#1A1A1A] uppercase text-sm">Jardinagem</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-20 bg-[#FAFAFA]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black uppercase mb-4 text-[#1A1A1A]">Por que escolher?</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Users, title: "Profissionais Verificados", desc: "Todos passam por verificação rigorosa" },
                            { icon: Award, title: "Garantia de Qualidade", desc: "Satisfação garantida ou seu dinheiro de volta" },
                            { icon: Hammer, title: "Rapidez", desc: "Encontre profissionais em minutos" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white border-[3px] border-[#1A1A1A] p-8 shadow-[4px_4px_0_#1A1A1A]">
                                <div className="w-16 h-16 bg-[#FF6B00] border-[3px] border-[#1A1A1A] flex items-center justify-center mb-4">
                                    <item.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                                </div>
                                <h3 className="text-xl font-black uppercase mb-2 text-[#1A1A1A]">{item.title}</h3>
                                <p className="font-semibold text-[#4A4A4A]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#FF6B00] border-y-[4px] border-[#1A1A1A]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl lg:text-5xl font-black uppercase mb-6 text-white">
                            Pronto para começar?
                        </h2>
                        <p className="text-xl font-bold text-white/90 mb-8">
                            Conecte-se com os melhores profissionais agora
                        </p>
                        <Button size="lg" className="bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 text-white font-black border-[3px] border-white shadow-[6px_6px_0_white] hover:shadow-[8px_8px_0_white] hover:-translate-x-1 hover:-translate-y-1 transition-all uppercase">
                            Criar Conta Grátis
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#1A1A1A] text-white py-12 border-t-[4px] border-[#FF6B00]">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <p className="font-bold uppercase">© 2026 Portal Jurandir - Marido de Aluguel</p>
                </div>
            </footer>
        </div>
    )
}
