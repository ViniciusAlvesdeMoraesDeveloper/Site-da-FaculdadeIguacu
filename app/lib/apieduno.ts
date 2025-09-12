
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


const API_TOKEN = process.env.API_TOKEN!;


export async function getCourseDetails(cursoId: number): Promise<CourseDetails | null> {
    const API_URL = `https://ava07.eduno.com.br/api/infocurso/${cursoId}`;

    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-token': API_TOKEN,
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


interface CourseSummary {
    id: number;
    titulo: string;
    imagem: string;
    temimagem: string;
    area_id: string; 
    area: string; 
    
}

export async function getAllCourses(): Promise<CourseSummary[] | null> {
    const API_URL = `https://ava07.eduno.com.br/api/cursos`;

    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-token': API_TOKEN, 
                
            },
        });

        if (!response.ok) {
            console.error(`API Error: ${response.status} ${response.statusText}`);
            return null;
        }

        const data = await response.json();
        console.log("Resposta da API:", data); 

       
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