"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { GraduationCap, CheckCircle, AlertCircle, Send } from "lucide-react"

const enrollmentSchema = z.object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    phone: z.string().min(14, "Telefone deve ter pelo menos 10 dígitos"),
    course: z.string().min(1, "Selecione um curso"),
    shift: z.string().optional(),
    message: z.string().optional(),
})

export type EnrollmentFormData = z.infer<typeof enrollmentSchema>

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: (data: EnrollmentFormData) => void
    courses: string[]
}

export default function Modal({ isOpen, onClose, onSubmit, courses }: ModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm<EnrollmentFormData>({
        resolver: zodResolver(enrollmentSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            course: "",
        },
    })

    const formatPhone = (value: string) => {
        let raw = value.replace(/\D/g, "")
        if (raw.length > 11) raw = raw.slice(0, 11)

        if (raw.length <= 10) {
            return raw.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3")
        } else {
            return raw.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3")
        }
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatPhone(e.target.value)
        setValue("phone", formattedValue)
    }

    const handleSubmitForm = async (data: EnrollmentFormData) => {
        setIsSubmitting(true)

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000))

            onSubmit(data)
            setIsSuccess(true)
            reset() // limpa os campos após envio
            toast({
                title: "Inscrição realizada com sucesso!",
                description: "Entraremos em contato em breve.",
            })

            setTimeout(() => {
                setIsSuccess(false)
                onClose()
            }, 3000)
        } catch (error) {
            toast({
                title: "Erro ao enviar inscrição",
                description: "Tente novamente mais tarde.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleClose = () => {
        if (!isSubmitting) {
            onClose()
            setIsSuccess(false)
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50">
            <div className="bg-background text-foreground rounded-xl shadow-elegant w-full max-w-md max-h-screen overflow-y-auto relative border border-border">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-hero"></div>

                <div className="bg-gradient-subtle p-6 text-center border-b border-border">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-orange">
                        <GraduationCap className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Inscreva-se Agora</h2>
                    <p className="text-muted-foreground">Transforme seu futuro com nossos cursos</p>
                </div>

                {!isSuccess ? (
                    <div className="p-6">
                        <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Nome Completo</label>
                                <Input
                                    {...register("name")}
                                    className="w-full px-4 py-3 border border-input rounded-lg focus:border-primary focus:ring-2 focus:ring-ring transition-all duration-200 outline-none bg-background text-foreground"
                                    placeholder="Digite seu nome completo"
                                />
                                {errors.name && (
                                    <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">E-mail</label>
                                <Input
                                    {...register("email")}
                                    type="email"
                                    className="w-full px-4 py-3 border border-input rounded-lg focus:border-primary focus:ring-2 focus:ring-ring transition-all duration-200 outline-none bg-background text-foreground"
                                    placeholder="seu@email.com"
                                />
                                {errors.email && (
                                    <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Telefone</label>
                                <Input
                                    {...register("phone")}
                                    type="tel"
                                    className="w-full px-4 py-3 border border-input rounded-lg focus:border-primary focus:ring-2 focus:ring-ring transition-all duration-200 outline-none bg-background text-foreground"
                                    placeholder="(11) 99999-9999"
                                    onChange={handlePhoneChange}
                                />
                                {errors.phone && (
                                    <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.phone.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Curso de Interesse</label>
                                <Select onValueChange={(value) => setValue("course", value)}>
                                    <SelectTrigger className="w-full px-4 py-3 border border-input rounded-lg focus:border-primary focus:ring-2 focus:ring-ring transition-all duration-200 outline-none bg-background text-foreground">
                                        <SelectValue placeholder="Selecione um curso" />
                                    </SelectTrigger>
                                    <SelectContent
                                        position="popper"
                                        sideOffset={4}
                                        className="z-[70] bg-background border border-border rounded-lg shadow-elegant"
                                    >
                                        {courses.map((curso) => (
                                            <SelectItem key={curso} value={curso} className="hover:bg-muted">
                                                {curso}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.course && (
                                    <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.course.message}
                                    </p>
                                )}
                            </div>

                            <div className="flex gap-3 mt-6">
                                <Button
                                    type="button"
                                    onClick={handleClose}
                                    variant="outline"
                                    className="flex-1 px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-all duration-200 font-semibold bg-transparent"
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-orange-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-semibold shadow-orange flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Inscrever-se
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="p-6 text-center">
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-orange">
                            <CheckCircle className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Inscrição Realizada!</h3>
                        <p className="text-muted-foreground text-center mb-6">
                            Obrigado pelo seu interesse! Em breve entraremos em contato.
                        </p>
                        <Button
                            onClick={handleClose}
                            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-orange-dark transition-all duration-200 font-semibold shadow-orange"
                        >
                            Fechar
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}