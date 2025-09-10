import { Card,CardContent,CardHeader, CardTitle } from "@/components/ui/card";
import ParceirosCard from "./parceiro-card";
import { parceiros } from "../dataparceiros/parceiros";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function ParceirosPage() {
   
return (
    <>
    <Header />
        <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Card className="inline-block bg-card border-border/50 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl font-bold text-foreground text-balance">Nossos Parceiros</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
                Conheça nossos parceiros estratégicos que colaboram conosco para oferecer soluções inovadoras e o melhor
                serviço do mercado.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {parceiros.map((parceiro) => (
            <ParceirosCard key={parceiro.id} parceiro={parceiro} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="inline-block bg-muted/30 border-border/50">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">Interessado em se tornar nosso parceiro?</p>
              <a
                href="#contato"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Entre em Contato
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}
    