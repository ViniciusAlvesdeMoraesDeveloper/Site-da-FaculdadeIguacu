"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Slide {
    id: number
    title: string
    description: string
    
    image: string
}

const slides: Slide[] = [
    {
        "id": 1,
        "title": "Oportunidades que Transformam Seu Futuro",
        "description": "Descubra como nossas conexões exclusivas com o mercado de trabalho impulsionam seu crescimento acadêmico e profissional. Seu futuro começa aqui!",
        "image": "https://images.pexels.com/photos/7944180/pexels-photo-7944180.jpeg?_gl=1*2vv8ot*_ga*MTcxNzA2Mzc4OC4xNzU1NjI1MjMx*_ga_8JE65Q40S6*czE3NjAxMDE4MzkkbzExJGcxJHQxNzYwMTAxODc2JGoyMyRsMCRoMA.."
    },
    {
        "id": 2,
        "title": "Sua Jornada de Excelência",
        "description": "Garanta um ensino superior de alta qualidade! Conte com infraestrutura moderna e um corpo docente especializado para levar sua carreira ao próximo nível.",
        "image": "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?_gl=1*1m4vldj*_ga*MTcxNzA2Mzc4OC4xNzU1NjI1MjMx*_ga_8JE65Q40S6*czE3NjAwOTc2NDUkbzEwJGcxJHQxNzYwMDk3ODc0JGoyJGwwJGgw"
    },
    {
        "id": 3,
        "title": "Apoio Total em Cada Passo",
        "description": "Você não está sozinho! Nossa equipe está sempre disponível para oferecer o suporte completo que você precisa, garantindo que sua experiência de aprendizado seja a melhor possível.",
        "image": "https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?_gl=1*1yybqt4*_ga*MTcxNzA2Mzc4OC4xNzU1NjI1MjMx*_ga_8JE65Q40S6*czE3NjAwOTc2NDUkbzEwJGcxJHQxNzYwMDk3ODIyJGo1NCRsMCRoMA.."
    }
]

export function BannerCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    return (
        
       <div className=" border border-red-400 rounded-lg p-10 m-2 shadow-md bg-white hover:shadow-lg transition-shadow duration-900">
       <div className="relative w-full h-[600px] overflow-hidden bg-card mt-20">
            {/* Slides Container */}
            <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="min-w-full h-full relative flex items-center justify-center"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40" />

                        {/* Content */}
                        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">{slide.title}</h1>
                            <p className="text-lg md:text-xl mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
                                {slide.description}
                            </p>
                            
                        </div>
                    </div>
                ))}
            </div>

            <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 border-white/30 hover:bg-white/30 text-white"
                onClick={goToPrevious}
            >
                <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 border-white/30 hover:bg-white/30 text-white"
                onClick={goToNext}
            >
                <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Dots Indicator */}
            {/* Dots mantidos em branco/cinza para contraste com a imagem escura. */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        title={`Ir para slide ${index + 1}`}
                        className={cn(
                            "w-3 h-3 rounded-full transition-all duration-300",
                            currentSlide === index ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70",
                        )}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
        </div>
    )
}