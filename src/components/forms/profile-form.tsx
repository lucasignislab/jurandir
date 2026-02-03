"use client"

import { useState } from "react"
import { useForm, Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { updateProfessionalProfile } from "@/actions/profissional"
import { Loader2, Save, CheckCircle2, AlertCircle } from "lucide-react"

const profileSchema = z.object({
    name: z.string().min(2, "Nome muito curto"),
    phone: z.string().min(10, "Telefone inválido"),
    bio: z.string().max(500, "Bio pode ter no máximo 500 caracteres").optional(),
    experienceYears: z.number().min(0).max(50),
    skills: z.array(z.string()).min(1, "Selecione ao menos uma habilidade"),
    address: z.string().min(5, "Endereço incompleto"),
    city: z.string().min(2, "Cidade inválida"),
    state: z.string().min(2, "Estado inválido"),
    zipCode: z.string().min(8, "CEP inválido"),
    document: z.string().min(11, "CPF/CNPJ inválido"),
})

type ProfileFormValues = z.infer<typeof profileSchema>

const AVAILABLE_SKILLS = [
    "Elétrica",
    "Hidráulica",
    "Pintura",
    "Jardinagem",
    "Marcenaria",
    "Limpeza",
    "Alvenaria",
    "Telhados",
    "Ar Condicionado",
    "Gesso",
    "Pisos e Azulejos",
    "Vidraçaria"
]

interface ProfileFormProps {
    initialData: {
        name: string
        phone: string
        professional: {
            bio: string | null
            experienceYears: number
            skills: string[]
            address: string
            city: string
            state: string
            zipCode: string
            document: string
        } | null
    }
}

export function ProfileForm({ initialData }: ProfileFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(profileSchema) as Resolver<ProfileFormValues>,
        defaultValues: {
            name: initialData.name,
            phone: initialData.phone,
            bio: initialData.professional?.bio || "",
            experienceYears: initialData.professional?.experienceYears || 0,
            skills: initialData.professional?.skills || [],
            address: initialData.professional?.address || "",
            city: initialData.professional?.city || "",
            state: initialData.professional?.state || "",
            zipCode: initialData.professional?.zipCode || "",
            document: initialData.professional?.document || "",
        },
    })

    const selectedSkills = watch("skills")

    const toggleSkill = (skill: string) => {
        const current = [...selectedSkills]
        const index = current.indexOf(skill)
        if (index > -1) {
            current.splice(index, 1)
        } else {
            current.push(skill)
        }
        setValue("skills", current, { shouldValidate: true })
    }

    const onSubmit = async (data: ProfileFormValues) => {
        setIsSubmitting(true)
        setMessage(null)

        try {
            const result = await updateProfessionalProfile(data)
            if (result.success) {
                setMessage({ type: "success", text: "Perfil atualizado com sucesso!" })
            } else {
                setMessage({ type: "error", text: result.error || "Erro ao salvar." })
            }
        } catch {
            setMessage({ type: "error", text: "Erro inesperado." })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            {message && (
                <div className={`p-4 border-[3px] shadow-[4px_4px_0_#1A1A1A] flex items-center gap-3 animate-slide-up ${message.type === "success" ? "bg-green-100 border-green-600 text-green-800" : "bg-red-100 border-red-600 text-red-800"
                    }`}>
                    {message.type === "success" ? <CheckCircle2 className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
                    <p className="font-black uppercase text-sm">{message.text}</p>
                </div>
            )}

            {/* Seção 1: Dados Pessoais */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#1A1A1A] text-white flex items-center justify-center font-black">1</div>
                    <h3 className="text-xl font-black uppercase text-[#1A1A1A]">Dados Pessoais</h3>
                </div>

                <Card>
                    <CardContent className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label className="font-black uppercase" htmlFor="name">Nome Completo</Label>
                            <Input id="name" {...register("name")} placeholder="Seu nome" />
                            {errors.name && <p className="text-xs font-black text-red-600 uppercase">{errors.name.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label className="font-black uppercase" htmlFor="phone">Telefone / WhatsApp</Label>
                            <Input id="phone" {...register("phone")} placeholder="(00) 00000-0000" />
                            {errors.phone && <p className="text-xs font-black text-red-600 uppercase">{errors.phone.message}</p>}
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <Label className="font-black uppercase" htmlFor="bio">Bio / Descrição Profissional</Label>
                            <Textarea
                                id="bio"
                                {...register("bio")}
                                placeholder="Conte um pouco sobre sua experiência e especialidades..."
                                className="h-32"
                            />
                            {errors.bio && <p className="text-xs font-black text-red-600 uppercase">{errors.bio.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label className="font-black uppercase" htmlFor="experienceYears">Anos de Experiência</Label>
                            <Input id="experienceYears" type="number" {...register("experienceYears", { valueAsNumber: true })} />
                            {errors.experienceYears && <p className="text-xs font-black text-red-600 uppercase">{errors.experienceYears.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label className="font-black uppercase" htmlFor="document">CPF ou CNPJ</Label>
                            <Input id="document" {...register("document")} placeholder="000.000.000-00" />
                            {errors.document && <p className="text-xs font-black text-red-600 uppercase">{errors.document.message}</p>}
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Seção 2: Localização */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#1A1A1A] text-white flex items-center justify-center font-black">2</div>
                    <h3 className="text-xl font-black uppercase text-[#1A1A1A]">Endereço & Atendimento</h3>
                </div>

                <Card>
                    <CardContent className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-2 md:col-span-2">
                            <Label className="font-black uppercase" htmlFor="address">Logradouro (Rua, Nº, Bairro)</Label>
                            <Input id="address" {...register("address")} placeholder="Rua das Ferramentas, 123 - Centro" />
                            {errors.address && <p className="text-xs font-black text-red-600 uppercase">{errors.address.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label className="font-black uppercase" htmlFor="city">Cidade</Label>
                            <Input id="city" {...register("city")} placeholder="Ex: Campinas" />
                            {errors.city && <p className="text-xs font-black text-red-600 uppercase">{errors.city.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label className="font-black uppercase" htmlFor="state">Estado (UF)</Label>
                            <Input id="state" {...register("state")} placeholder="Ex: SP" maxLength={2} />
                            {errors.state && <p className="text-xs font-black text-red-600 uppercase">{errors.state.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label className="font-black uppercase" htmlFor="zipCode">CEP</Label>
                            <Input id="zipCode" {...register("zipCode")} placeholder="00000-000" />
                            {errors.zipCode && <p className="text-xs font-black text-red-600 uppercase">{errors.zipCode.message}</p>}
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Seção 3: Habilidades */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#1A1A1A] text-white flex items-center justify-center font-black">3</div>
                    <h3 className="text-xl font-black uppercase text-[#1A1A1A]">Especialidades</h3>
                </div>

                <Card variant="secondary">
                    <CardContent className="p-6 md:p-8">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {AVAILABLE_SKILLS.map((skill) => {
                                const isChecked = selectedSkills.includes(skill)
                                return (
                                    <div
                                        key={skill}
                                        onClick={() => toggleSkill(skill)}
                                        className={`
                      cursor-pointer flex items-center gap-3 p-4 border-[3px] border-[#1A1A1A] transition-all
                      ${isChecked ? "bg-[#FF6B00] text-white shadow-none translate-x-1 translate-y-1" : "bg-white text-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A] hover:-translate-x-0.5 hover:-translate-y-0.5"}
                    `}
                                    >
                                        <Checkbox checked={isChecked} onCheckedChange={() => toggleSkill(skill)} />
                                        <span className="text-xs font-black uppercase tracking-tight">{skill}</span>
                                    </div>
                                )
                            })}
                        </div>
                        {errors.skills && <p className="mt-4 text-xs font-black text-red-600 uppercase text-center">{errors.skills.message}</p>}
                    </CardContent>
                </Card>
            </section>

            {/* Botão Salvar */}
            <div className="flex justify-end pt-6">
                <Button
                    type="submit"
                    size="lg"
                    variant="secondary"
                    disabled={isSubmitting}
                    className="min-w-[200px]"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Salvando...
                        </>
                    ) : (
                        <>
                            <Save className="w-5 h-5 mr-2" />
                            Salvar Alterações
                        </>
                    )}
                </Button>
            </div>
        </form>
    )
}
