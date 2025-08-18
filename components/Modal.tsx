"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { GraduationCap, Sparkles, CheckCircle } from "lucide-react";

const enrollmentSchema = z.object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    phone: z.string().min(14, "Telefone deve ter pelo menos 10 dígitos"), // (99) 99999-9999
    course: z.string().min(1, "Selecione um curso"),
    shift: z.string().optional(),
    message: z.string().optional(),
});

export type EnrollmentFormData = z.infer<typeof enrollmentSchema>;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: EnrollmentFormData) => void;
    courses: string[];
}

export default function Modal({
                                  isOpen,
                                  onClose,
                                  onSubmit,
                                  courses,
                              }: ModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm<EnrollmentFormData>({
        resolver: zodResolver(enrollmentSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            course: "",
        },
    });

    const handleSubmit = async (data: EnrollmentFormData) => {
        setIsSubmitting(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));

            onSubmit(data);
            setIsSuccess(true);
            toast({
                title: "Inscrição realizada com sucesso!",
                description: "Entraremos em contato em breve.",
            });

            setTimeout(() => {
                setIsSuccess(false);
                onClose();
                form.reset();
            }, 3000);
        } catch (error) {
            toast({
                title: "Erro ao enviar inscrição",
                description: "Tente novamente mais tarde.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        if (!isSubmitting) {
            onClose();
            form.reset();
            setIsSuccess(false);
        }
    };

    // Função para aplicar máscara sem libs externas
    const formatPhone = (value: string) => {
        let raw = value.replace(/\D/g, "");
        if (raw.length > 11) raw = raw.slice(0, 11);

        if (raw.length <= 10) {
            return raw.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else {
            return raw.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="max-w-lg mx-auto p-0 bg-gradient-to-br from-background via-background/95 to-primary/5 border border-primary/10 shadow-2xl overflow-hidden backdrop-blur-sm animate-scale-in">
                {/* Header */}
                <div className="relative bg-gradient-to-br from-primary via-primary to-primary/90 p-8 text-white overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-white/15 backdrop-blur-sm rounded-2xl shadow-lg">
                                <GraduationCap className="h-7 w-7 text-white" />
                            </div>
                            <div>
                                <DialogTitle className="text-2xl font-bold text-white leading-tight">
                                    Transforme seu Futuro
                                </DialogTitle>
                                <p className="text-white/85 text-base font-medium mt-1">
                                    Comece sua jornada acadêmica hoje
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -top-8 -right-8 text-white/8 rotate-12">
                        <Sparkles className="h-32 w-32" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 text-white/5">
                        <div className="h-24 w-24 rounded-full bg-white/10 blur-xl"></div>
                    </div>
                </div>

                {/* Sucesso */}
                {isSuccess && (
                    <div className="p-10 text-center animate-fade-in">
                        <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mb-6 shadow-lg animate-scale-in">
                            <CheckCircle className="h-10 w-10 text-green-600 animate-pulse" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                            Sucesso! Inscrição Enviada
                        </h3>
                        <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                            Recebemos sua inscrição com sucesso. Nossa equipe entrará em
                            contato em até 24 horas.
                        </p>
                    </div>
                )}

                {/* Formulário */}
                {!isSuccess && (
                    <div className="p-8">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(handleSubmit)}
                                className="space-y-6"
                            >
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel>Nome Completo</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Seu nome completo" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="seu@email.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel>Telefone</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        type="tel"
                                                        placeholder="(11) 98765-4321"
                                                        value={field.value}
                                                        onChange={(e) =>
                                                            field.onChange(formatPhone(e.target.value))
                                                        }
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="course"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel>Curso</FormLabel>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Selecione" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {courses.map((c) => (
                                                            <SelectItem key={c} value={c}>
                                                                {c}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <Button type="submit" disabled={isSubmitting} className="w-full">
                                    {isSubmitting ? "Enviando..." : "Enviar Inscrição"}
                                </Button>
                            </form>
                        </Form>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
