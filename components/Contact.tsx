import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Clock, Mail, MapPin, Phone} from "lucide-react";
import {useState} from "react";
import Modal from "@/components/Modal";
import coursesData from "@/json/cursos.json";

const Contact = () => {
    const contactInfo = [
        {
            icon: MapPin,
            title: "Endereço",
            info: "Luiz Rodrigues dos Santos, 44\nTodos os Santos - Coronel Fabriciano/MG\nCEP: 35170-061"
        },
        {icon: Phone, title: "Telefone", info: "(31) 98288-3280 \n(31) 99806-3604"},
        {icon: Mail, title: "E-mail", info: "faculdademarinho@gmail.com"},
        {icon: Clock, title: "Horário de Atendimento", info: "Segunda a Sexta: 8h às 18h"}
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
                                            <item.icon className="h-6 w-6 text-primary"/>
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

               <div className="mt-16 text-center bg-gradient-to-r from-orange-400 to-[#0B093F] rounded-2xl p-12 text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">Pronto para expandir seu portfólio?</h3>
          <p className="text-xl mb-8 opacity-90">Faça parte da nossa rede de parceiros e ofereça cursos
            de pós-graduação de alta qualidade sem investimento inicial.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-muted"
                onClick={() => {
                  setIsMenuOpen(false);
                  setShowModal(true);
                }}
            >
              Seja um parceiro!
            </Button>
                        <Modal
                            isOpen={showModal}
                            onClose={() => setShowModal(false)}
                            onSubmit={(data) => console.log("Form enviado:", data)}
                            
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
