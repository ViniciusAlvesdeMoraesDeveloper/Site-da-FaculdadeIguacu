"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { contatosPorEstado } from "../dataparceiros/parceiros"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ArrowLeft, Phone, MapPin, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import { ArrowRight } from "lucide-react"
import Modal from "../../components/Modal"


const formatPhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) return ""
  const cleaned = ("" + phoneNumber).replace(/\D/g, "")
  const match = cleaned.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/)
  if (match) {
    return `(${match[2]}) ${match[3]}-${match[4]}`
  }
  return phoneNumber
}

export default function ParceirosPage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Header />
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors font-medium"
            aria-label="Voltar para a página principal"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para página principal
          </Link>
        </div>
      </div>

      <section
        className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white min-h-screen"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <div className="container mx-auto max-w-7xl">
          <header className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Rede de Parceiros
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Nossos Parceiros</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-pretty">
              Conheça nossa rede estratégica de parceiros que colaboram conosco para oferecer soluções inovadoras e o
              melhor serviço educacional do mercado.
            </p>
          </header>

          <div className="space-y-16">
            {contatosPorEstado.map((estado, estadoIndex) => (
              <div
                key={estado.nome}
                className="relative"
                itemScope
                itemType="https://schema.org/Organization" // Schema para cada organização (estado)
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg shadow-sm">
                    <MapPin className="w-5 h-5" />
                    <h2 itemProp="location" className="text-2xl font-bold">{estado.nome}</h2>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-orange-200 to-transparent"></div>
                </div>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-12" role="list">
                  {estado.empresas.map((empresa) => (
                    <li
                      key={empresa.nome}
                      role="listitem"
                      itemScope
                      itemProp="makesOffer"
                      itemType="https://schema.org/EducationalOrganization"
                    >
                      <Card
                        className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                      >
                        <CardHeader className="pb-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                          <CardTitle
                            itemProp="name"
                            className="text-xl font-semibold text-gray-900 flex items-center gap-2"
                          >
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            {empresa.nome}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {empresa.contatos.map((contato) => (
                              <li
                                key={contato.nome}
                                className="group p-4 rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50/50 transition-all duration-200"
                                itemScope
                                itemProp="contactPoint"
                                itemType="https://schema.org/ContactPoint"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                                    <Phone className="w-4 h-4 text-orange-600" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p itemProp="name" className="font-medium text-gray-900 text-sm mb-1 truncate">{contato.nome}</p>
                                    <p itemProp="telephone" className="text-gray-600 text-sm font-mono">
                                      {formatPhoneNumber(contato.telefone)}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Card className="inline-block bg-gradient-to-r from-orange-50 to-orange-100/50 border-orange-200 shadow-lg max-w-2xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Interessado em se tornar nosso parceiro?</h3>
                <p className="text-gray-600 mb-6 text-pretty">
                  Junte-se à nossa rede de parceiros e faça parte de uma comunidade comprometida com a excelência
                  educacional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Button
                    size="lg"
                    className="px-8 py-4 text-lg rounded-md hover:bg-orange-600"
                    onClick={() => setShowModal(true)}
                  >
                    Solicitar Proposta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />

      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          
        />
      )}
    </>
  )
}