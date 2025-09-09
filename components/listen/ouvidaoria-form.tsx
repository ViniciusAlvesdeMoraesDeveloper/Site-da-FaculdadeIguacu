'use client'
import type React from "react"
import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { useToast } from "@/hooks/use-toast"

export function OuvidoriaForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Obrigado por entrar em contato. Responderemos em breve.",
      duration: 5000,
    })
    e.currentTarget.reset()
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="nome">Nome *</Label>
        <Input id="nome" name="nome" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="sobrenome">Sobrenome</Label>
        <Input id="sobrenome" name="sobrenome" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="telefone">Telefone *</Label>
        <Input id="telefone" name="telefone" type="tel" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" name="email" type="email" required />
      </div>

      <div className="space-y-3">
        <Label>Você é *</Label>
        <RadioGroup name="tipo-usuario" required>
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
      </div>

      <div className="space-y-3">
        <Label>Você já tentou contato de outra forma? *</Label>
        <RadioGroup name="servidor" required>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sim" id="servidor-sim" />
            <Label htmlFor="servidor-sim">Sim</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="nao" id="servidor-nao" />
            <Label htmlFor="servidor-nao">Não</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="setor">Setor da pessoa reclamada</Label>
        <Input id="setor" name="setor" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensagem">Texto da sugestão, crítica ou reclamação</Label>
        <Textarea
          id="mensagem"
          name="mensagem"
          placeholder="Texto da sugestão, crítica ou reclamação"
          className="min-h-24"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="arquivo">Upload de arquivo</Label>
        <Input id="arquivo" name="arquivo" type="file" />
      </div>

      <Button
        type="submit"
        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-3"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  )
}
