'use client';

import Link from 'next/link';
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-12 text-center">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-lg w-full">
        <h1 className="text-8xl md:text-9xl font-extrabold text-orange-600">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mt-4 mb-2">
          Página não encontrada
        </h2>
        <p className="text-gray-600 mb-6 max-w-sm mx-auto">
          O parceiro que você está procurando não existe ou a URL está incorreta.
        </p>
        <Link 
          href="/courseparceiro" 
          className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300 transform hover:-translate-y-1"
        >
          <ArrowRight className="h-5 w-5 mr-3 transform rotate-180" />
          Voltar para a página de Parceiros
        </Link>
      </div>
    </div>
  );
}
