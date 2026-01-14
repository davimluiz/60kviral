
import { ChartData } from './types';

export const NAMES = ['João', 'Maria', 'Pedro', 'Ana', 'Lucas', 'Carla', 'Mateus', 'Julia', 'Roberto', 'Beatriz', 'Felipe', 'Giovanna'];

export const REVENUE_DATA: ChartData[] = [
  { month: 'Dia 1', revenue: 0 },
  { month: 'Dia 7', revenue: 450 },
  { month: 'Dia 14', revenue: 1200 },
  { month: 'Dia 21', revenue: 3800 },
  { month: 'Dia 30', revenue: 7400 },
];

export const PAINS = [
  { title: "Zero Visualizações", desc: "Você posta, mas o TikTok não entrega para ninguém.", icon: "📉" },
  { title: "Falta de Ideias", desc: "Passa horas tentando criar algo e nada sai.", icon: "🧠" },
  { title: "Medo de Aparecer", desc: "Quer monetizar, mas não quer mostrar o rosto.", icon: "🙈" },
  { title: "Sem Constância", desc: "A correria impede você de postar todos os dias.", icon: "⏳" }
];

export const SOLUTIONS = [
  { title: "Vídeos Validados", desc: "Conteúdo que já provou que o algoritmo entrega." },
  { title: "Pronto para Postar", desc: "Basta baixar e subir. Sem perda de tempo." },
  { title: "Qualquer Nicho", desc: "Cortes de podcasts, filmes, motivação e mais." },
  { title: "Monetização Rápida", desc: "Focado em acumular minutos assistidos (RPM)." }
];

export const PACK_DETAILS = [
  "+60.000 Vídeos em Alta Definição",
  "Cortes de Podcasts e Séries Virais",
  "Vídeos Motivacionais e Estéticos",
  "Acesso Imediato Vitalício",
  "Suporte para Monetização (RPM)",
  "Manual de Viralização 48h"
];

export const TESTIMONIALS = [
  {
    name: "Marcos Silva",
    handle: "@marcos_clips",
    earnings: "R$ 3.450,00",
    text: "O conteúdo aprovado por quem vive de redes sociais realmente funciona. No meu 3º dia já peguei 100k views.",
    initials: "MS",
    rating: 5
  },
  {
    name: "Ana Oliveira",
    handle: "@ana_reels",
    earnings: "R$ 1.900,00",
    text: "Centenas de pessoas já estão usando e eu não podia ficar de fora. O pack é completíssimo!",
    initials: "AO",
    rating: 5
  }
];
