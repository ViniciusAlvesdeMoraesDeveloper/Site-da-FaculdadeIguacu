"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { GraduationCap, CheckCircle, AlertCircle, Send } from "lucide-react"


// Esquema de validação do formulário com Zod
const enrollmentSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(14, "Telefone inválido"),
  message: z.string().optional(),
})

export type EnrollmentFormData = z.infer<typeof enrollmentSchema>

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  
  
}

export default function Modal({ isOpen, onClose}: ModalProps) {
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
      message: "",
    },
  })

  // Função para formatar o telefone
  const formatPhone = (value: string) => {
    let raw = value.replace(/\D/g, "")
    if (raw.length > 11) raw = raw.slice(0, 11)

    if (raw.length <= 10) {
      return raw.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3")
    } else {
      return raw.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3")
    }
  }

  // Lidar com a mudança no campo de telefone para formatá-lo
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhone(e.target.value)
    setValue("phone", formattedValue)
  }

  // Função para enviar o formulário e lidar com a resposta da API
  const handleSubmitForm = async (data: EnrollmentFormData) => {
    setIsSubmitting(true)
//Colocar a URL da Integrately
  const INTEGRATELY_WEBHOOK_URL ='https://webhooks.integrately.com/a/webhooks/5bd023710825410384f1c0f5a999fa65';  

    try {
      const apiData = {
        fullName: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message || "",
      };
      const response = await fetch (INTEGRATELY_WEBHOOK_URL,{
        method:'POST',
        headers:{'Content-Type':'application/json',  
        },
        body: JSON.stringify(apiData),
      });

      if(!response.ok){
        throw new Error('Falaha ao enviar os dados para o Integrately');
       }
      setIsSuccess(true)
      reset()
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      })

      setTimeout(() => {
        setIsSuccess(false)
        onClose()
      }, 3000)
    } catch (error) {
      console.error("Erro ao enviar a solicitação:", error)
      const errorMessage = error instanceof Error
        ? error.message
        : "Ocorreu um erro. Tente novamente mais tarde."

      toast({
        title: "Erro ao enviar a solicitação",
        description: errorMessage,
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
          <h2 className="text-2xl font-bold text-foreground mb-2">Solicite uma Proposta</h2>
          <p className="text-muted-foreground">Preencha o formulário e descubra como podemos expandir seu negócio</p>
        </div>

        {!isSuccess ? (
          <div className="p-6">
            <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Nome da Instituição</label>
                <Input
                  {...register("name")}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:border-primary focus:ring-2 focus:ring-ring transition-all duration-200 outline-none bg-background text-foreground"
                  placeholder="Digite o nome da sua empresa/instituição"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">E-mail para Contato</label>
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
                <label className="block text-sm font-semibold text-foreground mb-2">Telefone para Contato</label>
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
                      Enviar Solicitação
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
            <h3 className="text-2xl font-bold text-foreground mb-2">Solicitação Enviada!</h3>
            <p className="text-muted-foreground text-center mb-6">
              Agradecemos o seu interesse. Em breve, um de nossos consultores entrará em contato.
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
