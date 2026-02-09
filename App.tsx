import React, { useState } from 'react';
import { SERVICES, SPECIALTIES, TESTIMONIALS, FAQS, WHATSAPP_LINK, INSTAGRAM_LINK } from './constants';

const App: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Reusable WhatsApp Icon component for consistency
  const WhatsAppIcon = ({ size = 20, className = "" }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3z"></path>
    </svg>
  );

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">✨</span>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent font-serif">
              Laura Astróloga
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a 
              href={INSTAGRAM_LINK} 
              target="_blank" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-white hover:scale-110 transition-transform shadow-md"
              title="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-green-200"
            >
              <WhatsAppIcon />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-full opacity-10 blur-3xl bg-purple-600 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-full opacity-5 blur-3xl bg-amber-500 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-6 border border-amber-100">
                <span>⭐</span> Bem-vindo ao meu espaço espiritual
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-slate-900 mb-6 leading-[1.1]">
                Antes Era Impossível... <br /><span className="text-purple-600">Agora Não</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Com mais de 20 anos de experiência em Astrologia e Tarô, sou sua guia para compreender as mensagens cósmicas e encontrar clareza nas decisões mais importantes da sua vida.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-purple-100 text-purple-600 rounded-lg">🌙</div>
                  <p className="text-slate-700"><strong>Astrologia Pessoal:</strong> Análise profunda do seu mapa astral</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-amber-100 text-amber-600 rounded-lg">✨</div>
                  <p className="text-slate-700"><strong>Leitura de Tarô:</strong> Orientação clara para seus questionamentos</p>
                </div>
              </div>

              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-amber-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-purple-200 hover:scale-105 transition-transform"
              >
                <WhatsAppIcon size={24} />
                Agende sua Consulta
              </a>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="https://i.postimg.cc/NG9K0WsW/Whats_App_Image_2026_02_05_at_16_26_06_(1).jpg" 
                    alt="Laura Astróloga" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center text-4xl animate-float">🔮</div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50">
                  <p className="text-2xl font-bold text-purple-600 font-serif">20+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Anos de Experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-slate-900 mb-4">Como Funciona</h2>
            <p className="text-slate-600 text-lg">Assista ao vídeo abaixo para entender melhor meus serviços e como posso ajudá-lo em sua jornada.</p>
          </div>

          <div className="max-w-4xl mx-auto mb-20 rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50 aspect-video">
            <iframe 
              className="w-full h-full"
              src="https://player.vimeo.com/video/1163390209" 
              title="Apresentação Laura Astróloga"
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-purple-200 transition-all hover:shadow-xl hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img src="https://i.postimg.cc/Y2GvSJrZ/Whats_App_Image_2026_02_05_at_16_26_06.jpg" alt="Sobre Laura" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center border border-purple-50">
                <p className="text-4xl font-bold text-amber-500 font-serif">2000+</p>
                <p className="text-xs text-slate-500 font-semibold uppercase">Vidas Transformadas</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-slate-900 mb-8">Sobre Mim</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>Sou Laura, uma astróloga e taróloga dedicada a ajudar pessoas a encontrarem clareza, paz e direção em suas vidas. Ao longo de mais de duas décadas, acompanhei milhares de clientes em suas jornadas de autoconhecimento.</p>
                <p>Minha abordagem combina conhecimento profundo das artes divinatórias com empatia genuína. Acredito que cada pessoa merece um espaço seguro para explorar suas dúvidas e descobrir seu verdadeiro caminho.</p>
              </div>
              <div className="mt-8 p-6 bg-white rounded-2xl border-l-4 border-purple-600 shadow-sm italic text-slate-800 text-lg">
                "Meu objetivo é trazer luz onde há escuridão, clareza onde há confusão, e esperança onde há desespero."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-slate-900 mb-6">Minhas Especialidades</h2>
            <p className="text-lg text-slate-600">💏 Sou especialista em trabalhos para o Amor e União de casais. Rituais de Encantamento feitos com dedicação e fé.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {SPECIALTIES.map((spec) => (
              <div key={spec.id} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-lg transition-all hover:border-purple-300">
                <div className="text-5xl mb-4">{spec.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{spec.title}</h3>
                <p className="text-slate-600">{spec.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-purple-900 text-white p-8 rounded-3xl inline-flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-4xl shadow-2xl">
             <div className="text-left">
               <h4 className="text-2xl font-bold mb-2">🌍 Atendimento Online Global</h4>
               <p className="opacity-80">Consultas para todo Brasil e Exterior via WhatsApp ou Vídeo.</p>
             </div>
             <a href={WHATSAPP_LINK} className="bg-amber-500 hover:bg-amber-400 text-purple-900 font-bold px-8 py-4 rounded-full transition-colors whitespace-nowrap flex items-center gap-2">
               <WhatsAppIcon />
               Consultar Agora
             </a>
          </div>
        </div>
      </section>

      {/* Transformation Story / Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-slate-900 mb-16 text-center">Histórias de Transformação</h2>
          
          <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 md:p-12 shadow-xl mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
               <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm">
                 <img src="https://i.postimg.cc/KcpsPpMf/Captura_de_tela_2026_02_07_013320.png" alt="Antes" className="w-full h-full object-cover" />
               </div>
               <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-slate-100">
                 <img src="https://i.postimg.cc/Jh4B1xzs/Captura_de_tela_2026_02_07_021418.png" alt="Caminho" className="w-full h-full object-cover" />
               </div>
               <div className="aspect-[3/4] rounded-2xl overflow-hidden border-4 border-amber-500 shadow-xl">
                 <img src="https://i.postimg.cc/4dRk6LH3/Captura-de-tela_2026_02_07_021737.png" alt="Depois" className="w-full h-full object-cover" />
               </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ela chegou até mim destruída... 💔</h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed italic">
                "Sem forças, sem esperanças, acreditando que nunca mais seria feliz no amor. Me contou que estava afundando em uma depressão, e que o relacionamento parecia não ter mais solução. Mas o universo sempre surpreende quem está pronta para se abrir."
              </p>
              <p className="text-slate-900 font-bold text-xl mb-4">✨ Em poucas semanas, tudo mudou.</p>
              <p className="text-slate-600 text-lg">
                O noivo voltou a notar, a valorizar... E em um domingo inesquecível, ele fez o pedido de casamento. 💍❤️ Essa é a prova de que quando você busca clareza no mapa e nas cartas, a vida abre caminhos que pareciam impossíveis.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex text-amber-400 mb-4 text-sm">
                  {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed italic">"{t.text}"</p>
                <p className="font-bold text-slate-900">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-slate-900 mb-12 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.id} className="border border-slate-100 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-slate-900 flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs">{faq.id}</span>
                      {faq.question}
                    </span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 text-purple-600 transition-transform ${activeFaq === faq.id ? 'rotate-180' : ''}`} 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeFaq === faq.id && (
                    <div className="px-20 pb-6 text-slate-600 leading-relaxed animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center p-8 bg-gradient-to-r from-purple-50 to-amber-50 rounded-3xl border border-purple-100">
               <p className="text-slate-700 mb-6 font-medium">Ainda tem dúvidas? Fale comigo diretamente!</p>
               <a href={WHATSAPP_LINK} target="_blank" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all flex items-center justify-center gap-2 mx-auto max-w-xs">
                 <WhatsAppIcon />
                 Enviar Sua Pergunta
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-serif font-extrabold mb-8 leading-tight">Pronto para Descobrir <br />Seu Caminho?</h2>
              <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">Agende sua consulta agora e receba orientação clara para as decisões mais importantes da sua vida.</p>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank"
                className="inline-flex items-center gap-3 bg-white text-purple-700 hover:bg-slate-100 px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl hover:scale-105"
              >
                <WhatsAppIcon className="text-green-500" />
                Fale Comigo no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl">✨</span>
              <span className="text-2xl font-bold font-serif bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">Laura Astróloga</span>
            </div>
            <div className="flex gap-4">
              <a href={INSTAGRAM_LINK} target="_blank" className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors">
                <WhatsAppIcon />
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-12 text-center text-slate-500 text-sm">
            <p className="mb-2">© 2026 Laura Astróloga. Todos os direitos reservados.</p>
            <p className="mb-2">Consultas de Astrologia, Tarô e Orientação Espiritual</p>
            <p className="text-xs mt-6 opacity-30">Siga-me no Instagram para dicas diárias de astrologia e tarô.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        className="fixed bottom-6 right-6 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all animate-float flex items-center justify-center group"
        title="Fale comigo no WhatsApp"
      >
        <WhatsAppIcon size={32} className="drop-shadow-sm" />
      </a>
    </div>
  );
};

export default App;