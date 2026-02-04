"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Home, Sprout, Wrench, Heart, Users, Shield } from "lucide-react"
import Link from "next/link"

export default function LandingOrganicWarm() {
    return (
        <div className="min-h-screen bg-[#F5E6D3]">
            {/* Navbar */}
            <nav className="bg-[#F5E6D3] border-b-2 border-[#4A3728]/20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-20">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#E07856] rounded-full flex items-center justify-center shadow-md">
                                <Home className="w-6 h-6 text-white" strokeWidth={2} />
                            </div>
                            <span className="font-serif font-bold text-2xl text-[#4A3728]">
                                Portal Jurandir
                            </span>
                        </Link>
                        <div className="flex items-center gap-4">
                            <Link href="/login">
                                <Button variant="ghost" className="rounded-full font-semibold text-[#4A3728]">
                                    Entrar
                                </Button>
                            </Link>
                            <Button className="rounded-full bg-[#E07856] hover:bg-[#E07856]/90 text-white font-semibold shadow-md">
                                Cadastrar
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-20 relative overflow-hidden">
                {/* Organic Shape Background */}
                <div className="absolute top-10 right-0 w-96 h-96 bg-[#E07856]/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl" />
                <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#6B8E23]/20 rounded-[40%_60%_70%_30%/40%_70%_30%_60%] blur-3xl" />

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-[#6B8E23] text-white px-5 py-2 rounded-full mb-8 shadow-md">
                                <Sprout className="w-4 h-4" />
                                <span className="font-semibold text-sm">
                                    Cuidando da sua casa com carinho
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#4A3728]">
                                Trazendo{" "}
                                <span className="text-[#E07856]">calor e cuidado</span>
                                <br />
                                para o seu lar
                            </h1>
                            <p className="text-lg text-[#4A3728]/80 mb-8 max-w-lg leading-relaxed">
                                Conectamos você com profissionais dedicados que tratam sua casa com o mesmo cuidado que a própria.
                            </p>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Button size="lg" className="rounded-full bg-[#E07856] hover:bg-[#E07856]/90 text-white font-semibold shadow-lg text-base">
                                    Encontrar um Ajudante
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full border-2 border-[#4A3728]/30 bg-white/50 hover:bg-white font-semibold text-base">
                                    Oferecer Serviços
                                </Button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { num: "500+", label: "Ajudantes" },
                                    { num: "2000+", label: "Lares Felizes" },
                                    { num: "4.8", label: "Estrelas" },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white/60 backdrop-blur-sm rounded-3xl p-5 border-2 border-[#4A3728]/10 shadow-sm">
                                        <div className="text-3xl font-bold text-[#E07856]">{stat.num}</div>
                                        <div className="text-sm font-medium text-[#4A3728]/70 mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Illustration Area */}
                        <div className="relative">
                            <div className="bg-white/60 backdrop-blur-sm rounded-[40px] p-12 border-2 border-[#4A3728]/10 shadow-xl">
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { icon: Home, title: "Limpeza", color: "#E07856" },
                                        { icon: Sprout, title: "Jardinagem", color: "#6B8E23" },
                                        { icon: Wrench, title: "Reparos", color: "#4A3728" },
                                        { icon: Heart, title: "Cuidados", color: "#E07856" },
                                    ].map((service, i) => (
                                        <div
                                            key={i}
                                            className="bg-white rounded-3xl p-6 border-2 border-[#4A3728]/10 shadow-sm hover:shadow-lg transition-shadow"
                                        >
                                            <div
                                                className="w-14 h-14 rounded-full flex items-center justify-center mb-3 shadow-md"
                                                style={{ backgroundColor: service.color }}
                                            >
                                                <service.icon className="w-7 h-7 text-white" strokeWidth={2} />
                                            </div>
                                            <div className="font-semibold text-[#4A3728]">{service.title}</div>
                                            <div className="text-xs text-[#4A3728]/60 mt-1">Com dedicação</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white/40">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-4xl font-bold mb-4 text-[#4A3728]">Nossos Valores</h2>
                        <p className="text-[#4A3728]/70 text-lg">O que nos torna especiais</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Heart, title: "Cuidado Genuíno", desc: "Cada profissional é escolhido pelo seu comprometimento" },
                            { icon: Users, title: "Comunidade", desc: "Conectando pessoas para construir lares melhores" },
                            { icon: Shield, title: "Confiança", desc: "Profissionais verificados e avaliados pela comunidade" },
                        ].map((value, i) => (
                            <div key={i} className="bg-white rounded-3xl p-8 border-2 border-[#4A3728]/10 shadow-sm text-center">
                                <div className="w-16 h-16 bg-[#E07856] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                    <value.icon className="w-8 h-8 text-white" strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-bold text-[#4A3728] mb-2">{value.title}</h3>
                                <p className="text-[#4A3728]/70">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#6B8E23] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <Heart className="w-16 h-16 mx-auto mb-6" />
                        <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
                            Comece sua jornada conosco
                        </h2>
                        <p className="text-xl mb-8 text-white/90">
                            Junte-se a milhares de famílias que encontraram ajuda de confiança
                        </p>
                        <Button size="lg" className="rounded-full bg-white text-[#6B8E23] hover:bg-gray-100 font-semibold shadow-xl text-base">
                            Criar Conta Gratuita
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#4A3728] text-white/90 py-12">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <p className="font-serif">© 2026 Portal Jurandir - Marido de Aluguel. Feito com carinho.</p>
                </div>
            </footer>
        </div>
    )
}
