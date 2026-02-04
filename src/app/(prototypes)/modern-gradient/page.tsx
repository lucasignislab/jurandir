"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Hammer, Wrench, Paintbrush, Sparkles, Star } from "lucide-react"
import Link from "next/link"

export default function LandingModernGradient() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-gray-100">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200/50">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-20">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                                <Hammer className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-xl bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                                Portal Jurandir
                            </span>
                        </Link>
                        <div className="flex items-center gap-4">
                            <Link href="/login">
                                <Button variant="ghost" className="rounded-full">Entrar</Button>
                            </Link>
                            <Button className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all">
                                Cadastrar
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-transparent to-orange-50/40" />

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200/50 mb-8">
                            <Sparkles className="w-4 h-4 text-orange-500" />
                            <span className="text-sm font-semibold text-orange-700">
                                Serviços em Campinas & SP
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
                            Encontre os{" "}
                            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                                melhores
                            </span>
                            <br />
                            profissionais
                        </h1>
                        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                            Para sua casa. Reparos, pintura, jardinagem e muito mais.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Button size="lg" className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-xl hover:shadow-2xl transition-all text-base px-8">
                                Buscar Profissionais
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full border-2 border-gray-300 hover:border-orange-300 hover:bg-orange-50 text-base px-8">
                                Ser um Profissional
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                            <div className="backdrop-blur-md bg-white/60 rounded-2xl p-6 border border-white/50 shadow-lg">
                                <div className="text-3xl font-black bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">500+</div>
                                <div className="text-sm font-semibold text-gray-600 mt-1">Profissionais</div>
                            </div>
                            <div className="backdrop-blur-md bg-white/60 rounded-2xl p-6 border border-white/50 shadow-lg">
                                <div className="text-3xl font-black bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">2000+</div>
                                <div className="text-sm font-semibold text-gray-600 mt-1">Serviços</div>
                            </div>
                            <div className="backdrop-blur-md bg-white/60 rounded-2xl p-6 border border-white/50 shadow-lg">
                                <div className="text-3xl font-black bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">4.8</div>
                                <div className="text-sm font-semibold text-gray-600 mt-1">Avaliação</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
                        <p className="text-gray-600 text-lg">Encontre o profissional perfeito para sua necessidade</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Wrench, title: "Hidráulica", color: "from-blue-400 to-blue-600" },
                            { icon: Hammer, title: "Marcenaria", color: "from-orange-400 to-orange-600" },
                            { icon: Paintbrush, title: "Pintura", color: "from-purple-400 to-purple-600" },
                            { icon: Sparkles, title: "Limpeza", color: "from-green-400 to-green-600" },
                        ].map((service, i) => (
                            <div
                                key={i}
                                className="group backdrop-blur-md bg-white/60 rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-600 text-sm">Profissionais qualificados e verificados</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600" />
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <Star className="w-16 h-16 mx-auto mb-6" />
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Pronto para começar?</h2>
                        <p className="text-xl mb-8 text-orange-100">
                            Conecte-se com os melhores profissionais da sua região agora mesmo
                        </p>
                        <Button size="lg" className="rounded-full bg-white text-orange-600 hover:bg-gray-100 shadow-xl text-base px-8">
                            Criar Conta Grátis
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <p className="text-gray-400">© 2026 Portal Jurandir - Marido de Aluguel. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    )
}
