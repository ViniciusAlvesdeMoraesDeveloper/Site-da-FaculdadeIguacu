"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import Modal from "@/components/Modal";

const Contact = () => {
    const contactInfo = [
        {
            icon: MapPin,
            title: "Onde Estamos",
            info: "Luiz Rodrigues dos Santos, 44\nTodos os Santos - Coronel Fabriciano/MG\nCEP: 35170-061"
        },
        { icon: Phone, title: "Fale Conosco", info: "(46) 99903-6975 \n(46) 3552-1464 \n(31) 98360-5495" },
        { icon: Mail, title: "Dúvidas e Informações", info: "faculdadeiguacuead@gmail.com" },
        { icon: Clock, title: "Horário de Atendimento", info: "Segunda a Sexta: 8h às 12h, das 13h30 ás 22h40" }
    ];
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <section
            id="contato"
            className="py-20 bg-background"
            itemScope // Inicia o Schema Markup
            itemType="https://schema.org/ContactPage" // Indica que a página é de contato
        >
            <div className="container mx-auto px-4">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Vamos <span className="text-red-700">Conversar?</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Pronto para transformar seu futuro? Fale conosco para tirar suas dúvidas, agendar uma visita e iniciar sua matrícula.
                    </p>
                </header>

                <div className="gap-12 w-full place-items-center">
                    <ul className="grid lg:grid-cols-2 gap-12 w-full" role="list">
                        {contactInfo.map((item, index) => (
                            <li
                                key={index}
                                className="w-full"
                                itemScope
                                itemProp="contactPoint" // Indica um ponto de contato dentro da página
                                itemType="https://schema.org/ContactPoint"
                            >
                                <Card className="flex group hover:shadow-red-500 transition-shadow border-none">
                                    <CardContent className="p-6 w-full">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-red-700/10 p-3 rounded-lg transition-colors">
                                                <item.icon className="h-6 w-6 text-red-700" />
                                            </div>
                                            <div>
                                                <h2 itemProp="contactType" className="font-semibold text-lg mb-2 text-foreground">
                                                    {item.title}
                                                </h2>
                                                <p itemProp="description" className="text-muted-foreground whitespace-pre-line">
                                                    {item.info}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Chamada para Ação (CTA) com degradê vermelho */}
                <div className="mt-16 text-center bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-primary-foreground">
                    <h2 className="text-3xl font-bold mb-4">Pronto para começar sua Graduação ou Pós?</h2>
                    <p className="text-xl mb-8 opacity-90">Clique abaixo e preencha nosso formulário de inscrição. É rápido, fácil e o primeiro passo para o seu sucesso profissional!</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            size="lg" 
                            variant="secondary" 
                            // Cores do botão invertidas para contraste: fundo branco e texto vermelho
                            className="bg-white text-red-700 hover:bg-red-50"
                            onClick={() => {
                                setIsMenuOpen(false);
                                setShowModal(true);
                            }}
                        >
                            Quero me inscrever!
                        </Button>
                        <Modal
                            isOpen={showModal}
                            onClose={() => setShowModal(false)}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;