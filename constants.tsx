
import { SocialProof, ChartData } from './types';

export const NAMES = ['João', 'Maria', 'Pedro', 'Ana', 'Lucas', 'Carla', 'Mateus', 'Julia', 'Roberto', 'Beatriz'];

export const REVENUE_DATA: ChartData[] = [
  { month: 'Semana 1', revenue: 120 },
  { month: 'Semana 2', revenue: 850 },
  { month: 'Semana 3', revenue: 2400 },
  { month: 'Semana 4', revenue: 4100 },
  { month: 'Semana 5', revenue: 6800 },
];

export const PACK_FEATURES = [
  "🚀 +60.000 Vídeos de Cortes Estratégicos",
  "💸 Focado em Alta Monetização (RPM TikTok)",
  "🎭 Cortes de Podcasts, Filmes e Documentários",
  "📱 Legendas Dinâmicas e Edição de Retenção",
  "📈 Manual Secreto: Como Viralizar em 48 Horas",
  "🆕 Atualizações Mensais Gratuitas"
];

export const RPM_ESTIMATES = [
  { views: '100k', rpm: 'R$ 0,70', total: 'R$ 70,00' },
  { views: '500k', rpm: 'R$ 0,85', total: 'R$ 425,00' },
  { views: '1M', rpm: 'R$ 1,10', total: 'R$ 1.100,00' },
];

export const POSTING_TIPS = [
  {
    title: "Edição de Capa",
    desc: "Use frames de impacto como capa para aumentar o clique (CTR)."
  },
  {
    title: "Legendas Estratégicas",
    desc: "Nossos vídeos já vêm com legendas, mas adicione stickers para reter o público."
  },
  {
    title: "Horários de Pico",
    desc: "Poste entre 11h-13h ou 18h-21h para pegar a maior onda de tráfego."
  },
  {
    title: "Engajamento Inicial",
    desc: "Responda os primeiros 10 comentários para sinalizar relevância ao algoritmo."
  }
];

export const TESTIMONIALS = [
  {
    name: "Ricardo Alves",
    handle: "@cortesdorico",
    earnings: "R$ 4.250,00",
    text: "Recuperei o investimento em 2 dias! O RPM do TikTok é real e esse pack de 60k vídeos facilitou tudo. Já estou no meu terceiro canal monetizado.",
    initials: "RA",
    rating: 5
  },
  {
    name: "Beatriz Souza",
    handle: "@bia_clips",
    earnings: "R$ 2.800,00",
    text: "O manual de 48h é a virada de chave. Peguei 1 milhão de views no meu segundo vídeo usando os cortes de podcast. Sensacional!",
    initials: "BS",
    rating: 5
  },
  {
    name: "Marcos Oliveira",
    handle: "@dark_master",
    earnings: "R$ 7.100,00",
    text: "Trabalho 15 min por dia só postando. O drive é super organizado por nichos, economizo horas de edição. Melhor pack do mercado.",
    initials: "MO",
    rating: 5
  },
  {
    name: "Fernanda Lima",
    handle: "@nandacuts",
    earnings: "R$ 1.950,00",
    text: "Eu não sabia nada de edição e agora tenho um canal que me paga em dólar todo mês. Os vídeos são de altíssima qualidade!",
    initials: "FL",
    rating: 5
  }
];
