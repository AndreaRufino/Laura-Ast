
import { Service, Specialty, Testimonial, FaqItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'astrology',
    title: 'Astrologia Pessoal',
    description: 'Análise completa do seu mapa astral para compreender sua personalidade e destino.',
    icon: '🌙',
    color: 'from-purple-600 to-indigo-600'
  },
  {
    id: 'tarot',
    title: 'Leitura de Tarô',
    description: 'Orientação clara e precisa para suas dúvidas e questionamentos do momento.',
    icon: '✨',
    color: 'from-amber-600 to-orange-500'
  },
  {
    id: 'spiritual',
    title: 'Consultoria Espiritual',
    description: 'Orientação holística para seu desenvolvimento pessoal e espiritual.',
    icon: '⭐',
    color: 'from-purple-600 to-pink-500'
  }
];

export const SPECIALTIES: Specialty[] = [
  { id: '1', title: 'Amarração Amorosa', description: 'Reconecte energias e abra caminhos para o amor verdadeiro.', icon: '💫' },
  { id: '2', title: 'Casamento Espiritual', description: 'Fortaleça laços e crie uma união duradoura e feliz.', icon: '💑' },
  { id: '3', title: 'Cartas, Búzios e Tarô', description: 'Leituras precisas para orientação e clareza.', icon: '🔮' },
  { id: '4', title: 'Limpeza Espiritual', description: 'Purifique sua energia e se liberte de negatividades.', icon: '✨' },
  { id: '5', title: 'Abertura de Caminhos', description: 'Desbloqueie oportunidades e abra portas para o sucesso.', icon: '🚪' },
  { id: '6', title: 'Trabalhos Personalizados', description: 'Rituais personalizados para suas necessidades específicas.', icon: '🕯️' }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', author: 'Marina Silva', text: 'Laura me ajudou a entender minha situação amorosa de forma clara e precisa. Suas leituras são incríveis!', rating: 5 },
  { id: '2', author: 'Juliana Costa', text: 'Consultei Laura sobre minha carreira e as orientações foram transformadoras. Muito grata!', rating: 5 },
  { id: '3', author: 'Ana Paula', text: 'A empatia e conhecimento da Laura são únicos. Sinto-me acolhida e compreendida.', rating: 5 }
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: 'Quanto tempo leva para ver resultados?',
    answer: 'Os resultados variam de pessoa para pessoa. Muitos clientes relatam mudanças significativas em poucas semanas, especialmente quando seguem as orientações e estão abertos para a transformação.'
  },
  {
    id: 2,
    question: 'Como funciona o atendimento online?',
    answer: 'Ofereço consultas 100% online via WhatsApp, videochamada ou áudio. A consulta é personalizada e focada em suas dúvidas específicas sobre amor, carreira ou espiritualidade.'
  },
  {
    id: 3,
    question: 'Qual é o valor das consultas?',
    answer: 'Os valores variam conforme o tipo de serviço. Ofereço pacotes com desconto para múltiplas consultas. Entre em contato via WhatsApp para detalhes.'
  },
  {
    id: 4,
    question: 'Minha consulta será confidencial?',
    answer: 'Absolutamente! Toda informação compartilhada durante a consulta é 100% confidencial. Respeito a privacidade de todos os meus clientes.'
  }
];

export const WHATSAPP_LINK = "https://wa.me/5519981082642?text=Olá%20Laura!%20Gostaria%20de%20agendar%20uma%20consulta.";
export const INSTAGRAM_LINK = "https://instagram.com/laura.astrologa";
