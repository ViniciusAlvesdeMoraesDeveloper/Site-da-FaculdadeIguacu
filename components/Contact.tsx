import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: MapPin, title: "Endereço", info: "Rua dos Estudantes, 123\nCentro - São Paulo/SP\nCEP: 01234-567" },
    { icon: Phone, title: "Telefone", info: "(11) 3456-7890\n(11) 98765-4321" },
    { icon: Mail, title: "E-mail", info: "contato@faculdademarinho.edu.br\nvestibular@faculdademarinho.edu.br" },
    { icon: Clock, title: "Horário de Atendimento", info: "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h" }
  ];

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

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-elegant border-none">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Envie sua Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Seu nome" />
                <Input placeholder="Seu e-mail" type="email" />
              </div>
              <Input placeholder="Telefone" />
              <Input placeholder="Curso de interesse" />
              <Textarea placeholder="Sua mensagem..." className="min-h-[120px]" />
              <Button size="lg" className="w-full bg-primary hover:bg-orange-dark text-primary-foreground shadow-orange">
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="group hover:shadow-md transition-shadow border-none">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">{item.info}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="overflow-hidden shadow-md border-none">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-orange-light/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-foreground font-semibold">Localização da Faculdade Marinho</p>
                  <p className="text-muted-foreground text-sm">Mapa interativo disponível em breve</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center bg-gradient-hero rounded-2xl p-12 text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">Pronto para começar sua jornada?</h3>
          <p className="text-xl mb-8 opacity-90">Faça sua inscrição hoje mesmo e transforme seu futuro profissional.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-muted">
              Inscreva-se Agora
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-foreground hover:bg-muted">
              Agendar Visita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
