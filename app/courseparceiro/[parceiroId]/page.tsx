import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import cursos from "../cursos.json";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { OrganizationSchema } from '@/components/PartnerListSchema'; // Novo Schema

// Definição do tipo para simplificar a extração dos dados
type Curso = typeof cursos[0];

type ParceiroProps = {
    params: { parceiroId: string };
};

// Função para gerar um slug seguro, removendo acentos e espaços
const generateSlug = (text: string): string => {
    return text
        .toLowerCase()
        .normalize("NFD") // Normaliza para remover diacríticos (acentos)
        .replace(/[\u0300-\u036f]/g, "") // Remove os diacríticos
        .replace(/\s/g, "-"); // Substitui espaços por hífens
};

// --- IMPLEMENTAÇÃO DO METADATA DINÂMICO ---
export async function generateMetadata({ params }: ParceiroProps): Promise<Metadata> {
    const decodedParceiroId = decodeURIComponent(params.parceiroId);
    const parceiroSlug = generateSlug(decodedParceiroId);

    const cursoDoParceiro = cursos.filter(curso => generateSlug(curso.partner) === parceiroSlug);

    if (cursoDoParceiro.length === 0) {
        return {};
    }

    const nomeParceiro = cursoDoParceiro[0].partner;
    

    const description = `Conheça todos os cursos em parceria com ${nomeParceiro}. Encontre as melhores formações especializadas, contatos e informações para alavancar sua carreira.`;

    return {
        title: `Cursos em Parceria com ${nomeParceiro} | Sua Faculdade`,
        description: description,
        alternates: {
            // URL Canônico: Essencial para rotas dinâmicas
            canonical: `https://faculdademarinho.com.br/parceiros/${params.parceiroId}`, // SUBSTITUA PELO SEU DOMÍNIO
        },
    };
}


// --- COMPONENTE PRINCIPAL (COM INJEÇÃO DE SCHEMA) ---
export default async function CursoPorParceiroPage({ params }: ParceiroProps) {

    const decodedParceiroId = decodeURIComponent(params.parceiroId);
    const parceiroSlug = generateSlug(decodedParceiroId);

    // Filtra os cursos
    const cursoDoParceiro: Curso[] = cursos.filter(curso => {
        return generateSlug(curso.partner) === parceiroSlug;
    });

    if (cursoDoParceiro.length === 0) {
        notFound();
    }

    const nomeParceiro = cursoDoParceiro[0].partner;

    // Extrai o primeiro contato para o Schema (assumindo que o primeiro é o principal)
    const principalContact = cursoDoParceiro[0].contacts[0];
    const descriptionSchema = `Empresa parceira da faculdade, ${nomeParceiro} oferece cursos especializados em diversas áreas de atuação.`;

    return (
        <div className='flex flex-col min-h-screen'>
            {/* INJEÇÃO DO SCHEMA DE ORGANIZAÇÃO AQUI */}
            <OrganizationSchema
                organizationName={nomeParceiro}
                description={descriptionSchema}
                phone={principalContact?.phone}
                addressState={principalContact?.state}
                type="EducationalOrganization" // Ou use "Organization" ou "LocalBusiness"
            />

            <Header />

            {/* Banner Section */}
            <section className="bg-gradient-to-r from-red-500 to-red-600 text-white py-20 mt-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
                        Cursos de <span className="text-red-200">{nomeParceiro}</span>
                    </h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Explore as oportunidades de aprendizado que nosso parceiro tem a oferecer.
                    </p>
                </div>
            </section>

            <main className="flex-grow bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cursoDoParceiro.map((curso, index) => (
                            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardHeader className="bg-red-100 p-6 rounded-t-lg">
                                    <CardTitle className="text-2xl font-bold text-gray-800">
                                        {curso.course}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <p className="text-gray-600 mb-2 border-b pb-2">
                                        <strong className="font-semibold text-gray-900">Tipo:</strong> {curso.type}
                                    </p>
                                    <p className="text-gray-600 mb-4 border-b pb-2">
                                        <strong className="font-semibold text-gray-900">Parceiro:</strong> {curso.partner}
                                    </p>

                                    <h3 className="text-lg font-bold text-red-600 mb-4">Contatos:</h3>
                                    <ul className="space-y-3">
                                        {curso.contacts.map((contact, contactIndex) => (
                                            <li key={contactIndex} className="flex items-center gap-4 p-3 rounded-lg bg-red-50">
                                                <div className="flex-shrink-0">
                                                    <Phone className="h-5 w-5 text-red-600" />
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="text-sm font-medium text-gray-800">Telefone: {contact.phone}</p>
                                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                                        <MapPin className="h-4 w-4" /> Estado: {contact.state}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            href="/courseparceiro"
                            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <ArrowRight className="h-5 w-5 mr-3 transform rotate-180" />
                            Voltar para a página de Parceiros
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
