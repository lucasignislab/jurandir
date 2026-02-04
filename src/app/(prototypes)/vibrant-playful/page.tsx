"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Hammer, Sparkles, Zap, Heart, Trophy, Star, Gift } from "lucide-react"
import Link from "next/link"

export default function LandingVibrantPlayful() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navbar */}
            <nav className="bg-white border-b-4 border-[#FF6B35] shadow-sm">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-20">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#F72585] rounded-2xl flex items-center justify-center shadow-lg shadow-[#FF6B35]/30 rotate-3">
                                <Hammer className="w-6 h-6 text-white -rotate-3" strokeWidth={2.5} />
                            </div>
                            <span className="font-black text-2xl bg-gradient-to-r from-[#7209B7] to-[#F72585] bg-clip-text text-transparent">
                                Portal Jurandir
                            </span>
                        </Link>
                        <div className="flex items-center gap-4">
                            <Link href="/login">
                                <Button variant="ghost" className="rounded-2xl font-bold text-[#7209B7]">
                                    Entrar
                                </Button>
                            </Link>
                            <Button className="rounded-2xl bg-gradient-to-r from-[#FF6B35] to-[#F72585] hover:from-[#F72585] hover:to-[#7209B7] text-white font-bold shadow-lg shadow-[#FF6B35]/40">
                                Cadastrar
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#FF6B35]/5 via-[#F72585]/5 to-[#7209B7]/5">
                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-[#FFB800] rounded-full opacity-20 blur-2xl" />
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#7209B7] rounded-full opacity-20 blur-3xl" />

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFB800] to-[#FF6B35] text-white px-6 py-3 rounded-full mb-8 shadow-lg shadow-[#FFB800]/30 transform hover:scale-105 transition-transform">
                            <Sparkles className="w-5 h-5" strokeWidth={2.5} />
                            <span className="font-black text-sm uppercase tracking-wide">
                                🎉 Novidade em Campinas & SP!
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
                            Transforme sua{" "}
                            <span className="bg-gradient-to-r from-[#FF6B35] via-[#F72585] to-[#7209B7] bg-clip-text text-transparent">
                                casa dos sonhos
                            </span>
                            <br />
                            em realidade!
                        </h1>
                        <p className="text-2xl font-bold text-gray-700 mb-12 max-w-2xl mx-auto">
                            Profissionais incríveis prontos para deixar seu lar PERFEITO! ✨
                        </p>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Button size="lg" className="rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F72585] hover:from-[#F72585] hover:to-[#7209B7] text-white font-black shadow-xl shadow-[#FF6B35]/40 text-lg px-10 transform hover:scale-105 transition-all">
                                COMEÇAR AGORA
                                <ArrowRight className="ml-2 w-6 h-6" strokeWidth={3} />
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full border-4 border-[#7209B7] hover:bg-[#7209B7]/10 text-[#7209B7] font-black text-lg px-10 transform hover:scale-105 transition-all">
                                VIRAR PRO
                            </Button>
                        </div>

                        {/* Gamified Stats */}
                        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                            {[
                                { icon: Trophy, num: "500+", label: "Super Profissionais", color: "from-[#FFB800] to-[#FF6B35]" },
                                { icon: Star, num: "2000+", label: "Missões Completas", color: "from-[#F72585] to-[#7209B7]" },
                                { icon: Heart, num: "4.8", label: "Estrelas de Amor", color: "from-[#FF6B35] to-[#F72585]" },
                            ].map((stat, i) => (
                                <div key={i} className="bg-white rounded-3xl p-6 border-4 border-gray-100 shadow-xl transform hover:scale-105 hover:rotate-3 transition-all">
                                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                                        <stat.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                                    </div>
                                    <div className="text-3xl font-black bg-gradient-to-r from-[#7209B7] to-[#F72585] bg-clip-text text-transparent">{stat.num}</div>
                                    <div className="text-xs font-bold text-gray-600 mt-1 uppercase">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - Gamified */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-[#7209B7] to-[#F72585] bg-clip-text text-transparent">
                            Escolha sua Quest! 🎮
                        </h2>
                        <p className="text-xl font-bold text-gray-600">Cada serviço é uma aventura épica!</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Zap, title: "Missão Elétrica", desc: "Ilumine seu mundo!", color: "from-[#FFB800] to-[#FF6B35]", border: "#FFB800" },
                            { icon: Hammer, title: "Quest Martelada", desc: "Construa seu império!", color: "from-[#FF6B35] to-[#F72585]", border: "#FF6B35" },
                            { icon: Sparkles, title: "Power Limpeza", desc: "Brilho máximo!", color: "from-[#F72585] to-[#7209B7]", border: "#F72585" },
                            { icon: Gift, title: "Bonus Jardinagem", desc: "Natureza viva!", color: "from-[#7209B7] to-[#FFB800]", border: "#7209B7" },
                        ].map((service, i) => (
                            <div
                                key={i}
                                className={`group bg-white rounded-3xl p-8 border-4 hover:border-8 shadow-2xl transform hover:scale-105 hover:-rotate-2 transition-all`}
                                style={{ borderColor: service.border, boxShadow: `0 20px 40px ${service.border}30` }}
                            >
                                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:rotate-12 transition-transform`}>
                                    <service.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                                </div>
                                <h3 className="text-xl font-black mb-2 text-center">{service.title}</h3>
                                <p className="text-gray-600 font-bold text-sm text-center">{service.desc}</p>
                                <div className="mt-4 text-center">
                                    <span className="inline-flex items-center gap-1 text-xs font-black text-white bg-gradient-to-r from-[#FF6B35] to-[#F72585] px-3 py-1 rounded-full">
                                        <Star className="w-3 h-3" /> +50 XP
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7209B7] via-[#F72585] to-[#FF6B35]" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFB800] rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <Trophy className="w-20 h-20 mx-auto mb-6 animate-bounce" strokeWidth={2.5} />
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
                            Level UP sua vida! 🚀
                        </h2>
                        <p className="text-2xl font-bold mb-10">
                            Junte-se aos campeões que estão transformando suas casas!
                        </p>
                        <Button size="lg" className="rounded-full bg-white text-[#7209B7] hover:bg-gray-100 font-black shadow-2xl text-xl px-12 py-8 transform hover:scale-110 transition-all">
                            COMEÇAR GRÁTIS AGORA! 🎁
                            <ArrowRight className="ml-2 w-6 h-6" strokeWidth={3} />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-[#7209B7] to-[#F72585] text-white py-12 border-t-8 border-[#FFB800]">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <p className="font-black text-lg">© 2026 Portal Jurandir - Marido de Aluguel ⚡ Feito com muito amor! ❤️</p>
                </div>
            </footer>
        </div>
    )
}
