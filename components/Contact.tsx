import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {useState} from "react";
import Modal from "@/components/Modal";
import coursesData from "@/json/courses.json";

const Contact = () => {
  const contactInfo = [
    { icon: MapPin, title: "Endereço", info: "Luiz Rodrigues dos Santos, 44\nTodos os Santos - Coronel Fabriciano/MG\nCEP: 35170-061" },
    { icon: Phone, title: "Telefone", info: "(31) 99999-9999\n(31) 99999-9999" },
    { icon: Mail, title: "E-mail", info: "email@faculdademarinho.edu.br\nemail2@faculdademarinho.edu.br" },
    { icon: Clock, title: "Horário de Atendimento", info: "Segunda a Sexta: 8h às 18h" }
  ];
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar seu futuro? Entre em contato conosco...
          </p>
        </div>

        <div className="gap-12 w-full place-items-center ">
            <div className="grid lg:grid-cols-2 gap-12 w-full">
                {contactInfo.map((item, index) => (
                    <Card
                        key={index}
                        className="w-full flex group hover:shadow-orange transition-shadow border-none"
                    >
                        <CardContent className="p-6 w-full">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg transition-colors">
                                    <item.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground whitespace-pre-line">
                                        {item.info}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

        <div className="mt-16 text-center bg-gradient-hero rounded-2xl p-12 text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">Pronto para começar sua jornada?</h3>
          <p className="text-xl mb-8 opacity-90">Faça sua inscrição hoje mesmo e transforme seu futuro profissional.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-muted"
            onClick={() => { setIsMenuOpen(false); setShowModal(true); }}
            >
              Inscreva-se Agora
            </Button>
              <Modal
                  isOpen={showModal}
                  onClose={() => setShowModal(false)}
                  onSubmit={(data) => console.log("Form enviado:", data)}
                  courses={coursesData.courses.map((c) => c.title)}
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
