'use client'
import type React from "react"
import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { AlertCircle } from "lucide-react"

// Esquema de validação do formulário com Zod
const ouvidoriaSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório."),
  sobrenome: z.string().optional(),
  telefone: z.string().min(14, "Telefone inválido."),
  email: z.string().email("Email inválido."),
  tipoUsuario: z.enum(["aluno", "licenciado", "outros"], {
    message: "Selecione uma opção.",
  }),
  tentouContato: z.enum(["sim", "nao"], {
    message: "Selecione uma opção.",
  }),
  setor: z.string().optional(),
  mensagem: z.string().optional(),

})

export type OuvidoriaFormData = z.infer<typeof ouvidoriaSchema>

export function OuvidoriaForm() {

  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue,
    control,
    reset,
  } = useForm<OuvidoriaFormData>({
    resolver: zodResolver(ouvidoriaSchema),
    defaultValues: {
      nome: "",
      sobrenome: "",
      telefone: "",
      email: "",
      tipoUsuario: undefined,
      tentouContato: undefined,
      setor: "",
      mensagem: "",

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
    setValue("telefone", formattedValue)
  }

  // Lidar com o envio do formulário
  const handleFormSubmit = async (data: OuvidoriaFormData) => {
    //Adicione a URL da Integrately aqui.
    const INTEGRATELY_WEBHOOK_URL = 'https://webhooks.integrately.com/a/webhooks/218b90572fd4421d939c4c9ed8b0cbd1';
    try {
      const apiData = {
        fullName: `${data.nome} ${data.sobrenome}`,
        email: data.email,
        phone: data.telefone,
        userType: data.tipoUsuario,
        triedContactBefore: data.tentouContato,
        sector: data.setor || "",
        message: data.mensagem || "",
      };

      const response = await fetch(INTEGRATELY_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar os dados para o Integrately.');
      }

      reset()
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Obrigado por entrar em contato. Responderemos em breve.",
        duration: 5000,
      })
    } catch (error) {
      console.error("Erro ao enviar a solicitação:", error)
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Ocorreu um erro. Tente novamente mais tarde."
      toast({
        title: "Erro ao enviar a solicitação",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
      })
    }
  }

  return (
  <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
    <div className="space-y-2">
      <Label htmlFor="nome">Nome *</Label>
      <Input id="nome" {...register("nome")} />
      {errors.nome && (
        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {errors.nome.message}
        </p>
      )}
    </div>

    <div className="space-y-2">
      <Label htmlFor="sobrenome">Sobrenome</Label>
      <Input id="sobrenome" {...register("sobrenome")} />
    </div>

    <div className="space-y-2">
      <Label htmlFor="telefone">Telefone *</Label>
      <Input
        id="telefone"
        {...register("telefone")}
        type="tel"
        onChange={handlePhoneChange}
      />
      {errors.telefone && (
        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {errors.telefone.message}
        </p>
      )}
    </div>

    <div className="space-y-2">
      <Label htmlFor="email">Email *</Label>
      <Input id="email" {...register("email")} type="email" />
      {errors.email && (
        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {errors.email.message}
        </p>
      )}
    </div>

    <div className="space-y-3">
      <Label>Você é *</Label>
      <Controller
        name="tipoUsuario"
        control={control}
        render={({ field }) => (
          <RadioGroup
            onValueChange={field.onChange}
            value={field.value}
            name={field.name}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="aluno" id="aluno" />
              <Label htmlFor="aluno">Aluno</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="licenciado" id="licenciado" />
              <Label htmlFor="licenciado">Licenciado</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="outros" id="outros" />
              <Label htmlFor="outros">Outros</Label>
            </div>
          </RadioGroup>
        )}
      />
      {errors.tipoUsuario && (
        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {errors.tipoUsuario.message}
        </p>
      )}
    </div>

    <div className="space-y-3">
      <Label>Você já tentou contato de outra forma? *</Label>
      <Controller
        name="tentouContato"
        control={control}
        render={({ field }) => (
          <RadioGroup
            onValueChange={field.onChange}
            value={field.value}
            name={field.name}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="servidor-sim" />
              <Label htmlFor="servidor-sim">Sim</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nao" id="servidor-nao" />
              <Label htmlFor="servidor-nao">Não</Label>
            </div>
          </RadioGroup>
        )}
      />
      {errors.tentouContato && (
        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {errors.tentouContato.message}
        </p>
      )}
    </div>

    <div className="space-y-2">
      <Label htmlFor="setor">Setor da pessoa reclamada</Label>
      <Input id="setor" {...register("setor")} />
    </div>

    <div className="space-y-2">
      <Label htmlFor="mensagem">Texto da sugestão, crítica ou reclamação</Label>
      <Textarea
        id="mensagem"
        {...register("mensagem")}
        placeholder="Texto da sugestão, crítica ou reclamação"
        className="min-h-24"
      />
    </div>



    <Button
      type="submit"
      className="w-full bg-red-700 text-white font-medium py-3"
      disabled={isSubmitting}
    >
      {isSubmitting ? "Enviando..." : "Enviar"}
    </Button>
  </form>
  )
}

