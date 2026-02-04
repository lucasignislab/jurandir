"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Hammer, Heart, Zap, Palette } from "lucide-react"

export default function PrototypesIndex() {
    const prototypes = [
        {
            id: "modern-gradient",
            title: "Modern Gradient",
            description: "Gradientes suaves, glassmorphism e micro-interações",
            icon: Sparkles,
            color: "from-orange-500 to-orange-600",
            preview: "Vibrante e tecnológico",
        },
        {
            id: "industrial-brutalist",
            title: "Industrial Neo-Brutalist",
            description: "Bordas grossas, sombras offset e grid espaçado",
            icon: Hammer,
            color: "from-orange-600 to-yellow-500",
            preview: "Bold e profissional",
        },
        {
            id: "organic-warm",
            title: "Organic Warm",
            description: "Cores terrosas, formas orgânicas e texturas sutis",
            icon: Heart,
            color: "from-orange-400 to-green-600",
            preview: "Acolhedor e humano",
        },
        {
            id: "hightech-minimal",
            title: "High-Tech Minimal",
            description: "Minimalismo tecnológico, muito whitespace",
            icon: Zap,
            color: "from-blue-600 to-blue-800",
            preview: "Premium e profissional",
        },
        {
            id: "vibrant-playful",
            title: "Vibrant Playful",
            description: "Cores vibrantes, sombras coloridas e animações",
            icon: Palette,
            color: "from-purple-600 via-pink-500 to-orange-500",
            preview: "Energético e divertido",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-6 lg:px-12 py-8">
                    <Link href="/" className="inline-flex items-center gap-3 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                            <Hammer className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="font-black text-2xl bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                                Portal Jurandir
                            </h1>
                            <p className="text-sm text-gray-500 font-medium">Design System Prototypes</p>
                        </div>
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
                            Escolha seu{" "}
                            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                                Design System
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            5 opções completas de design para o Portal Jurandir. Clique em cada uma para visualizar a landing page completa.
                        </p>
                    </div>

                    {/* Prototypes Grid */}
                    <div className="grid gap-6">
                        {prototypes.map((prototype, i) => (
                            <Link key={i} href={`/${prototype.id}`}>
                                <div className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                    <div className="flex items-center gap-6">
                                        {/* Icon */}
                                        <div className={`w-20 h-20 bg-gradient-to-br ${prototype.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                                            <prototype.icon className="w-10 h-10 text-white" strokeWidth={2} />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-2xl font-bold">{prototype.title}</h3>
                                                <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                                    {prototype.preview}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 font-medium">{prototype.description}</p>
                                        </div>

                                        {/* Arrow */}
                                        <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-2 transition-all" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Back Button */}
                    <div className="mt-12 text-center">
                        <Link href="/">
                            <Button variant="outline" size="lg" className="rounded-full">
                                Voltar para Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 mt-20">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <p className="text-gray-400">© 2026 Portal Jurandir - Marido de Aluguel. Design Prototypes.</p>
                </div>
            </footer>
        </div>
    )
}
