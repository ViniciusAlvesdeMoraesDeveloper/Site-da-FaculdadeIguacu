'use client'

import {ButtonLink} from "@/components/ui/button-link";
import { Button } from "./ui/button";
import {Menu, X} from "lucide-react";
import {useState} from "react";
import {usePathname} from "next/navigation";
import {navigationItems} from "@/utils/navigation";
import Link from "next/link";
import Modal from "@/components/Modal"
import Courses from "./Courses";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const isCoursePage = pathname === '/cursos';

    const [showModal, setShowModal] = useState(false);


    function handleModalSubmit(data: { name: string; email: string; course: string; }): void {
        // Aqui você pode implementar o envio dos dados do formulário
        // Exemplo: enviar para uma API, mostrar mensagem de sucesso, etc.
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
                                variant="default"
                                className="bg-primary hover:bg-orange-600"
                                onClick={() => { setIsMenuOpen(false); setShowModal(true); }}
                            >
                                Inscreva-se
                            </Button>
                            <Modal isOpen={showModal} onClose={() => setShowModal(false)} onSubmit={handleModalSubmit} courses={["Curso 1", "Curso 2", "Curso 3"]}>
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300">
                                    <div className="relative bg-background rounded-2xl shadow-2xl border border-border p-8 w-full max-w-md mx-auto animate-fade-in">
                                        <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="absolute top-4 right-4 text-muted-foreground hover:text-primary focus:outline-none"
                                            aria-label="Fechar modal"
                                        >
                                            <X className="w-6 h-6" />
                                        </button>
                                        <h2 className="text-3xl font-bold mb-6 text-center text-primary">Inscreva-se em um curso</h2>
                                        <form
                                            onSubmit={e => {
                                                e.preventDefault();
                                                const formData = new FormData(e.currentTarget);
                                                handleModalSubmit({
                                                    name: formData.get('name') as string,
                                                    email: formData.get('email') as string,
                                                    course: formData.get('course') as string,
                                                });
                                            }}
                                            className="space-y-5"
                                        >
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">Nome</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    required
                                                    className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    required
                                                    className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="course" className="block text-sm font-medium mb-1 text-foreground">Curso</label>
                                                <select
                                                    name="course"
                                                    id="course"
                                                    required
                                                    className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                                                >
                                                    <option value="">Selecione um curso</option>
                                                    {["Curso 1", "Curso 2", "Curso 3"].map(course => (
                                                        <option key={course} value={course}>{course}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex justify-end space-x-2 pt-2">
                                                <Button type="button" variant="ghost" onClick={() => setShowModal(false)}>
                                                    Cancelar
                                                </Button>
                                                <Button type="submit" variant="default">
                                                    Enviar
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Modal>
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