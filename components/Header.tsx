'use client'

import { ButtonLink } from "@/components/ui/button-link";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/utils/navigation";
import { portalitems } from "@/utils/navigation";
import Link from "next/link";
import Modal from "@/components/Modal"
import coursesData from "@/json/cursos.json"
import About from "@/app/about/page";
import Image from "next/image";
import { link } from "fs";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isPortalDropDownOpen, setIsPortalDropDownOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const isCoursePage = pathname === '/about';

    const [showModal, setShowModal] = useState(false);


    function handleModalSubmit(data: { name: string; email: string; course: string; }): void {
        setShowModal(false);
    }

    return (
        <>
            <header className="relative w-full">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 flex items-center justify-center">
                                
                            </div>
                            {/* text-#100D5D substituído por text-red-800 */}
                            <a href="/" className="text-xl font-bold text-red-800">Faculdade Iguaçu</a>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-foreground hover:text-red-700 transition-color ${item.href === "/" && isHomePage ? "text-red-700" : "text-foreground"} ${item.href === "/about" && isCoursePage ? "text-red-700" : "text-foregound"}`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="relative">
                                <Button
                                    variant="ghost"
                                    onClick={() => setIsPortalDropDownOpen(!isPortalDropDownOpen)}
                                    // Adiciona um padding e ajusta a aparência
                                    className={`flex items-center space-x-1 ${isPortalDropDownOpen ? 'text-red-500' : 'text-foreground '}`}
                                >
                                    <span>Portais</span> 
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isPortalDropDownOpen ? 'rotate-180' : 'rotate-0'}`} />
                                </Button>

                                
                                {isPortalDropDownOpen && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                                        {portalitems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                // Fecha o dropdown ao clicar
                                                onClick={() => setIsPortalDropDownOpen(false)}
                                                className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100 hover:text-red-700 w-full transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                                </div>

                            <Link href="https://ead.eduno.com.br/iguacu">
                                <Button
                                    variant="secondary"
                                    
                                    className="bg-red-700 hover:bg-red-600"
                                >
                                    Àrea do Parceiro
                                </Button>
                            </Link>
                        </nav>


                        {/* Mobile Menu Button */}
                        <ButtonLink
                            href=""
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => {setIsMenuOpen(!isMenuOpen);
                            setIsPortalDropDownOpen(false);}}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </ButtonLink>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="md:hidden mt-4 pb-4 border-t pt-4">
                            <div className="flex flex-col space-y-4">
                                {navigationItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-foreground hover:text-red-700 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <div className="relative border-t pt-4">
                                    <Button
                                        variant="ghost"
                                        // Usa o state dedicado para o mobile
                                        onClick={() => setIsPortalDropDownOpen(!isPortalDropDownOpen)}
                                        // Ajustei a classe para ocupar 100% no mobile e alinhar o texto
                                        className={`flex justify-between items-center w-full px-0 ${isPortalDropDownOpen ? 'text-red-500' : 'text-foreground '}`} 
                                    >
                                        <span>Portais</span> 
                                        <ChevronDown className={`w-4 h-4 transition-transform ${isPortalDropDownOpen ? 'rotate-180' : 'rotate-0'}`} />
                                    </Button>
                                    
                                    {isPortalDropDownOpen && (
                                        <div className="flex flex-col pl-4 mt-2 space-y-2"> {/* Estilo de sub-menu simples */}
                                            {portalitems.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100 hover:text-red-700 w-full transition-colors "
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <ButtonLink href="Dialog" variant="default"
                                    className="bg-red-700 hover:bg-red-800 w-full">
                                    Inscreva-se
                                </ButtonLink>
                            </div>
                            
                        </nav>
                    )}
                </div>
            </header>


        </>
    );
};

export default Header;