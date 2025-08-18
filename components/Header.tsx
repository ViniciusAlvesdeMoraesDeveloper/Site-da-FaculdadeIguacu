'use client'

import {ButtonLink} from "@/components/ui/button-link";
import { Button } from "./ui/button";
import {Menu, X} from "lucide-react";
import {useState} from "react";
import {usePathname} from "next/navigation";
import {navigationItems} from "@/utils/navigation";
import Link from "next/link";
import Modal from "@/components/Modal"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const isCoursePage = pathname === '/cursos';

    const [showModal, setShowModal] = useState(false);


    function handleModalSubmit(data: { name: string; email: string; course: string; }): void {
        setShowModal(false);
    }

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-border">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                                <a href="/" className="text-white font-bold text-xl">FM</a>
                            </div>
                            <a href="/" className="text-xl font-bold text-foreground">Faculdade Marinho</a>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-foreground hover:text-primary transition-color ${item.href === "/" && isHomePage ? "text-primary" : "text-foreground"} ${item.href === "/cursos" && isCoursePage ? "text-primary" : "text-foregound"}`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Button
                                variant="secondary"
                                className="bg-primary hover:bg-orange-600"
                                onClick={() => { setIsMenuOpen(false); setShowModal(true); }}
                            >
                                Inscreva-se
                            </Button>
                            <Modal
                                isOpen={showModal}
                                onClose={() => setShowModal(false)}
                                onSubmit={(data) => console.log("Form enviado:", data)}
                                courses={[
                                    "Administração",
                                    "Direito",
                                    "Engenharia Civil",
                                    "Psicologia"
                                ]}
                            />
                        </nav>

                        {/* Mobile Menu Button */}
                        <ButtonLink
                            href=""
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X/> : <Menu/>}
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
                                        className="text-foreground hover:text-primary transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <ButtonLink href="Dialog" variant="default"
                                            className="bg-primary hover:bg-orange-dark w-full">
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