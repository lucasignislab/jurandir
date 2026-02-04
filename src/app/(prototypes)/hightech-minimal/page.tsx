"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Hammer, Wrench, Zap, Shield, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function LandingHighTechMinimal() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
                <div className="container mx-auto px-8 lg:px-16">
                    <div className="flex items-center justify-between h-20">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#007FFF] rounded-lg flex items-center justify-center">
                                <Hammer className="w-5 h-5 text-white" strokeWidth={1.5} />
                            </div>
                            <span className="font-semibold text-lg text-[#0A1929]">
                                Portal Jurandir
                            </span>
                        </Link>
                        <div className="flex items-center gap-4">
                            <Link href="/login">
                                <Button variant="ghost" className="font-medium text-[#66788A]">
                                    Entrar
                                </Button>
                            </Link>
                            <Button className="bg-[#007FFF] hover:bg-[#0072EC] text-white font-medium shadow-sm">
                                Cadastrar
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-24 px-8 lg:px-16">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#007FFF]/5 px-4 py-2 rounded-full mb-8 border border-[#007FFF]/10">
                            <Zap className="w-4 h-4 text-[#007FFF]" strokeWidth={2} />
                            <span className="text-sm font-medium text-[#0A1929]">
                                Serviços Profissionais em Campinas & SP
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl lg:text-6xl font-semibold mb-6 leading-tight text-[#0A1929] tracking-tight">
                            Conecte-se com os
                            <br />
                            <span className="text-[#007FFF]">melhores profissionais</span>
                        </h1>
                        <p className="text-xl text-[#66788A] mb-12 leading-relaxed">
                            Plataforma premium para contratação de serviços residenciais com garantia de qualidade.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                            <Button size="lg" className="bg-[#007FFF] hover:bg-[#0072EC] text-white font-medium shadow-md hover:shadow-lg transition-all">
                                Buscar Profissionais
                                <ArrowRight className="ml-2 w-5 h-5" strokeWidth={2} />
                            </Button>
                            <Button variant="outline" size="lg" className="border-[#66788A]/20 hover:border-[#007FFF]/30 hover:bg-[#007FFF]/5 font-medium">
                                Oferecer Serviços
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-100">
                            <div>
                                <div className="text-3xl font-semibold text-[#0A1929]">500+</div>
                                <div className="text-sm text-[#66788A] mt-1">Profissionais Verificados</div>
                            </div>
                            <div>
                                <div className="text-3xl font-semibold text-[#0A1929]">2000+</div>
                                <div className="text-sm text-[#66788A] mt-1">Serviços Realizados</div>
                            </div>
                            <div>
                                <div className="text-3xl font-semibold text-[#0A1929]">4.8/5</div>
                                <div className="text-sm text-[#66788A] mt-1">Avaliação Média</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-8 lg:px-16 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold mb-4 text-[#0A1929]">Serviços Disponíveis</h2>
                        <p className="text-[#66788A] text-lg">Profissionais qualificados para todas as necessidades</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Wrench, title: "Hidráulica", desc: "Instalação e reparos", color: "#007FFF" },
                            { icon: Hammer, title: "Marcenaria", desc: "Móveis e estruturas", color: "#0A1929" },
                            { icon: Zap, title: "Elétrica", desc: "Instalações seguras", color: "#007FFF" },
                        ].map((service, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#007FFF]/20 hover:shadow-lg transition-all group"
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm"
                                    style={{ backgroundColor: service.color }}
                                >
                                    <service.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#0A1929]">{service.title}</h3>
                                <p className="text-[#66788A]">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24">
                <div className="container mx-auto px-8 lg:px-16 max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { icon: Shield, title: "Seguro & Verificado", desc: "Todos os profissionais passam por verificação completa de antecedentes" },
                            { icon: TrendingUp, title: "Crescimento Garantido", desc: "Plataforma em constante evolução com novos recursos" },
                            { icon: CheckCircle, title: "Qualidade Assegurada", desc: "Sistema de avaliações rigoroso mantém alto padrão" },
                        ].map((feature, i) => (
                            <div key={i} className="text-center">
                                <div className="w-12 h-12 bg-[#007FFF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-6 h-6 text-[#007FFF]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-[#0A1929]">{feature.title}</h3>
                                <p className="text-[#66788A] text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#0A1929] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#007FFF]/10 to-transparent" />

                <div className="container mx-auto px-8 lg:px-16 max-w-4xl relative z-10">
                    <div className="text-center text-white">
                        <h2 className="text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
                            Pronto para começar?
                        </h2>
                        <p className="text-xl text-white/70 mb-10 leading-relaxed">
                            Junte-se a milhares de usuários satisfeitos em nossa plataforma
                        </p>
                        <Button size="lg" className="bg-[#007FFF] hover:bg-[#0072EC] text-white font-medium shadow-xl">
                            Criar Conta Gratuita
                            <ArrowRight className="ml-2 w-5 h-5" strokeWidth={2} />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 py-12">
                <div className="container mx-auto px-8 lg:px-16 text-center">
                    <p className="text-[#66788A] font-medium">
                        © 2026 Portal Jurandir - Marido de Aluguel. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    )
}
