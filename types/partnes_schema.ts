// Definição de uma única Organização Parceira
export interface PartnerOrganization {
  name: string;
  url: string;
  // Opcional: A URL da logo do parceiro (recomendado para SEO)
  logoUrl?: string; 
}

// Definição das propriedades para o componente Schema principal
export interface PartnersListSchemaProps {
  pageUrl: string; // URL canônica da página de parceiros (Ex: https://seusite.com.br/parceiros)
  partners: PartnerOrganization[];
}
