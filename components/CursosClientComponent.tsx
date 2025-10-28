"use client";
import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



interface CourseSummary {
  id: number;
  area: string;
  titulo: string;
}

interface Category {
  id: number;
  name: string;
}

interface CursosClientComponentProps {
  courses: CourseSummary[];
  categories: Category[];
}

export default function CursosClientComponent({
  courses,
  categories,
}: CursosClientComponentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  const filteredCourses = courses.filter((course) => {
    if (selectedCategory === "all") {
      return true;
    }
    return course.area === selectedCategory;
  });

  const totalPages = Math.ceil(filteredCourses.length / limit);
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedCourses = filteredCourses.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLimitChange = (value: string) => {
    setLimit(Number(value));
    setCurrentPage(1);
  };

  return (
   
    <section className="py-12 bg-gray-100 overflow-x-hidden">
      <div className="w-full lg-full"> 
        
      
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 mb-8">
          
          {/* Botões de Categoria */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory("all");
                setCurrentPage(1);
              }}
              className="rounded-full"
            >
              Todos
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(category.name);
                  setCurrentPage(1);
                }}
                
                className="rounded-full whitespace-nowrap" 
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          {/* Seletor de Limite */}
          <div className="flex items-center gap-4 w-full justify-center md:w-auto">
            <span className="text-gray-600 hidden sm:block">Cursos por página:</span>
            <Select onValueChange={handleLimitChange} defaultValue={limit.toString()}>
              <SelectTrigger className="w-[100px] bg-white">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="30">30</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* 2. Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedCourses.map((course) => (
            <Card key={course.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mb-2">
                  <Badge variant="secondary">{course.area}</Badge>
                </div>
                <CardTitle className="text-xl font-bold">{course.titulo}</CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link href={`/cursos/${course.id}`}>
                  <Button variant="outline" className="text-red-600 border-red-700 bg-red-50">
                    Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* 3. Paginação */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              variant="outline"
            >
              Anterior
            </Button>
            <span className="text-lg text-gray-700">
              Página {currentPage} de {totalPages}
            </span>
            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              variant="outline"
            >
              Próxima
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

