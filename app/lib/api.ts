// Tipagem dos dados do formulário
export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  courseOfInterest?: string;
  message: string;
}

export interface OuvidoriaFormData {
  nome: string;
  sobrenome?: string;
  telefone: string;
  email: string;
  tipoUsuario?: string;
  tentouContato?: string;
  setor?: string;
  mensagem?: string;
  arquivo?: File | null;
}


const API_BASE_URL = ''; 
const AUTH_ENDPOINT = `${API_BASE_URL}/auth/token`; // Endpoint para obter/renovar o token
const REGISTER_ENDPOINT = `${API_BASE_URL}/register`; // Endpoint para registrar o usuário

// Interface para o objeto do token
interface AuthToken {
  token: string;
  expiresAt: number; // Data de expiração em milissegundos
}

/**
 * Classe para gerenciar a autenticação e requisições à API.
 * Encapsula a lógica de obtenção e renovação do token.
 */
class ApiService {
  private authToken: AuthToken | null = null;

  /**
   * Obtém o token, renovando-o se necessário.
   * @returns O token de autenticação válido.
   */
  private async getToken(): Promise<string> {
    const now = Date.now();

    // 1. Verifica se já temos um token e se ele não está expirado
    if (this.authToken && this.authToken.expiresAt > now) {
      console.log('Token existente ainda é válido.');
      return this.authToken.token;
    }

    // 2. Se não houver token ou se ele estiver expirado, busca um novo
    console.log('Token expirado ou não existe. Solicitando um novo token...');
    try {
      // Simulação de requisição POST para o endpoint de autenticação
      // Na prática, você enviaria credenciais (usuário/senha) aqui, se necessário.
      const response = await fetch(AUTH_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ /* credenciais de autenticação */ }),
      });

      if (!response.ok) {
        throw new Error('Falha ao obter o novo token.');
      }

      const data = await response.json();
      // Calcula a data de expiração: 30 dias a partir de agora
      const expiresInMs = 30 * 24 * 60 * 60 * 1000;
      this.authToken = {
        token: data.token,
        expiresAt: now + expiresInMs,
      };

      // Opcional: Persistir o token no localStorage para evitar login a cada recarga
      // localStorage.setItem('authToken', JSON.stringify(this.authToken));

      return this.authToken.token;
    } catch (error) {
      console.error('Erro ao buscar o token:', error);
      throw new Error('Não foi possível obter um token de autenticação válido.');
    }
  }
  public async sendOuvidoriaForm(formData: OuvidoriaFormData) {
    try {
      // 3. Obtém um token válido (se necessário, um novo será buscado)
      const token = await this.getToken();
      // 4. Faz a requisição POST com o token no cabeçalho
      const response = await fetch(REGISTER_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha ao enviar os dados.');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro na requisição da API:', error);
      throw new Error('Erro de conexão. Verifique sua rede.');
    }
  }


  /**
   * Envia os dados de registro do usuário para a API, usando um token válido.
   * @param formData Os dados do formulário a serem enviados.
   * @returns A resposta da API em formato JSON.
   */
  public async registerUser(formData: RegistrationFormData) {
    try {
      // 3. Obtém um token válido (se necessário, um novo será buscado)
      const token = await this.getToken(); 

      // 4. Faz a requisição POST com o token no cabeçalho 'Authorization'
      const response = await fetch(REGISTER_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha ao enviar os dados.');
      }

      return await response.json();
    } catch (error) {
      console.error('Erro na requisição da API:', error);
      throw new Error('Erro de conexão. Verifique sua rede.');
    }
  }
}

// Instancie a classe para usar o serviço
export const apiService = new ApiService();