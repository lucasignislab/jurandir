"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    CheckCircle2,
    XCircle,
    Clock,
    ExternalLink,
    Calendar,
    Image as ImageIcon
} from "lucide-react"

interface PaymentRequest {
    id: string
    professionalName: string
    planName: string
    amount: string
    date: string
    proofUrl: string
}

const MOCK_PAYMENTS: PaymentRequest[] = [
    {
        id: "pay-1",
        professionalName: "Carlos Elétrica",
        planName: "Plano Premium Mensal",
        amount: "R$ 49,90",
        date: "03/02/2026",
        proofUrl: "https://via.placeholder.com/600x800?text=Comprovante+PIX+1"
    },
    {
        id: "pay-2",
        professionalName: "Ana Pinturas",
        planName: "Plano Basic Anual",
        amount: "R$ 299,00",
        date: "02/02/2026",
        proofUrl: "https://via.placeholder.com/600x800?text=Comprovante+PIX+2"
    }
]

export function PaymentApprover() {
    const [payments] = useState(MOCK_PAYMENTS)

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {payments.map((pay) => (
                <Card key={pay.id} className="border-[3px] border-[#1A1A1A] shadow-[8px_8px_0_#1A1A1A] overflow-hidden">
                    <div className="bg-[#FFD700] px-4 py-2 border-b-[3px] border-[#1A1A1A] flex justify-between items-center">
                        <span className="font-black text-xs uppercase tracking-widest text-[#1A1A1A]">PAGAMENTO #{pay.id}</span>
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-white border-2 border-[#1A1A1A] text-[10px] font-black uppercase shadow-[2px_2px_0_#000]">
                            <Clock className="w-3 h-3" />
                            Aguardando
                        </div>
                    </div>

                    <CardContent className="p-0 flex flex-col md:flex-row h-full lg:h-[400px]">
                        {/* Payment Details */}
                        <div className="p-6 flex-1 space-y-6 flex flex-col justify-between border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#1A1A1A]">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-black text-xl uppercase leading-tight text-[#1A1A1A]">{pay.professionalName}</h3>
                                    <p className="text-[#FF6B00] font-black uppercase text-sm">{pay.planName}</p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A]">
                                        <Calendar className="w-4 h-4 text-gray-400" />
                                        <span>DATA: {pay.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A]">
                                        <span className="text-2xl font-black">{pay.amount}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 pt-4">
                                <Button className="bg-[#22C55E] hover:bg-green-600 text-white font-black uppercase text-xs border-2 border-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A] active:shadow-none active:translate-y-1 transition-all">
                                    <CheckCircle2 className="w-4 h-4 mr-2" />
                                    Aprovar
                                </Button>
                                <Button className="bg-[#EF4444] hover:bg-red-600 text-white font-black uppercase text-xs border-2 border-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A] active:shadow-none active:translate-y-1 transition-all">
                                    <XCircle className="w-4 h-4 mr-2" />
                                    Reprovar
                                </Button>
                            </div>
                        </div>

                        {/* Proof Preview */}
                        <div className="bg-[#F5F0E8] w-full md:w-[250px] relative group cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center p-4">
                            <div className="absolute inset-4 border-2 border-[#1A1A1A] border-dashed flex flex-col items-center justify-center text-gray-400 gap-2 overflow-hidden">
                                <img
                                    src={pay.proofUrl}
                                    alt="Comprovante"
                                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all scale-110 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink className="w-8 h-8 text-white" />
                                    <span className="text-white font-black text-[10px] uppercase mt-2">Ver Comprovante</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}

            {payments.length === 0 && (
                <div className="col-span-full bg-white border-[3px] border-[#1A1A1A] border-dashed p-20 text-center shadow-[8px_8px_0_#1A1A1A]">
                    <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-300" strokeWidth={1} />
                    <h3 className="text-xl font-black uppercase text-gray-400">Nenhum pagamento pendente</h3>
                    <p className="text-gray-400 font-bold uppercase text-xs mt-2">Bom trabalho! A fila está vazia.</p>
                </div>
            )}
        </div>
    )
}
