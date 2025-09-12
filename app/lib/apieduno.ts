// src/lib/apieduno.ts

// 1. Definição das tipagens para os dados da API
//    Isso é crucial para o TypeScript garantir a segurança dos dados.
interface CourseDetails {
    rc: string;
    empresa: string;
    repositorio: string;
    area: string;
    titulo: string;
    descricao: string;
    publicoalvo: string;
    imagem: string;
    temimagem: string;
    duracao: string | null;
    tcc: string;
    lista: { titulo: string }[];
}

// 2. Variável de ambiente para o token da API
//    Note o "!" no final, ele informa ao TypeScript que essa variável
//    definitivamente estará disponível no runtime do servidor.
const API_TOKEN = process.env.API_TOKEN!;
console.log("API_TOKEN:", API_TOKEN); // Verifique se o token está sendo carregado corretamente

// 3. Função para buscar os detalhes de um curso específico
//    Esta função será usada na sua página de detalhes ([id].tsx).
export async function getCourseDetails(cursoId: number): Promise<CourseDetails | null> {
    const API_URL = `https://ead.eduno.com.br/api/infocurso/${cursoId}`;

    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_TOKEN}`,
            },
        });

        if (!response.ok) {
            console.error(`API Error: ${response.status} ${response.statusText}`);
            return null;
        }

        const data: CourseDetails = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch course details:', error);
        return null;
    }
}

// 4. Se a API tiver um endpoint para listar todos os cursos,
//    você pode criar uma função separada para isso.
//    Isso seria usado na sua página de lista de cursos (cursos.tsx).
//    Exemplo hipotético (substitua pela URL real):
interface CourseSummary {
    id: number;
    titulo: string;
    imagem: string;
    temimagem: string;
    area_id: string; // Adicionei area_id
    area: string; // A categoria do curso
    // Remova os campos que não existem na lista, como 'descricao', 'duracao' e 'publicoalvo'.
    // Esses campos só existem no endpoint de detalhes do curso.
}



export async function getAllCourses(): Promise<CourseSummary[] | null> {
    const API_URL = `https://ead.eduno.com.br/api/cursos`;

    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-token': API_TOKEN, // <--- CORRIGIDO: Use 'x-token'
                
            },
            
        });

        if (!response.ok) {
            console.error(`API Error: ${response.status} ${response.statusText}`);
            return null;
        }

        const data = await response.json();
        console.log("Resposta da API:", data); // Para garantir que está recebendo os dados corretos

        // CORRIGIDO: Agora verifique a propriedade 'lista'
        if (data && Array.isArray(data.lista)) {
            return data.lista;
        } else {
            console.error('API did not return an array of courses:', data);
            return null;
        }

    } catch (error) {
        console.error('Failed to fetch all courses:', error);
        return null;
    }
}