
import React, { useState, useEffect } from 'react';
import Notification from './components/Notification';
import RevenueChart from './components/RevenueChart';
import Timer from './components/Timer';
import { PACK_FEATURES, RPM_ESTIMATES, POSTING_TIPS, TESTIMONIALS } from './constants';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'} fill-current`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePurchase = () => {
    // Redirecionamento funcional para checkout especificado
    window.location.href = "https://www.ggcheckout.com/checkout/v3/eSKziUwx9NVwQDG3ERFl";
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center selection:bg-indigo-500/30">
      
      {/* FLOATING URGENCY POPUP (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-[100] pointer-events-none group">
        <div className="glass-card px-5 py-4 rounded-[2rem] flex flex-col items-center border-rose-500/40 shadow-[0_20px_50px_rgba(225,29,72,0.3)] pointer-events-auto backdrop-blur-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up">
          <div className="flex items-center space-x-2 mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-rose-300">Oferta Expirando</span>
          </div>
          <Timer />
          <button 
            onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-2 text-[9px] font-bold text-white/50 underline hover:text-white transition-colors"
          >
            Garantir Vaga Agora
          </button>
        </div>
      </div>

      {/* Dynamic Background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full -z-10" />

      <Notification />

      <main className="max-w-4xl w-full px-6 py-20 flex flex-col items-center gap-20 md:py-32">
        
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full glass-card border-indigo-500/30 text-indigo-300 text-xs font-bold tracking-widest uppercase mb-4 animate-fade-in">
             <span className="mr-2">🔥</span> 97 Pessoas vendo isso agora
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
            PARE DE TENTAR, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-sm">
              COMECE A LUCRAR
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
            Ative sua máquina de ganhos automáticos no TikTok com 60.000 vídeos prontos para viralizar e colocar dinheiro no seu bolso sem precisar aparecer.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={handlePurchase}
              className="px-12 py-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl transition-all font-black text-xl shadow-[0_0_40px_rgba(79,70,229,0.3)] hover:shadow-[0_0_60px_rgba(79,70,229,0.5)] active:scale-95"
            >
              QUERO ACESSO IMEDIATO
            </button>
          </div>
        </section>

        {/* RPM Demonstration Section */}
        <section className="w-full glass-card rounded-[3rem] p-10 md:p-14 border-white/10 relative overflow-hidden">
          <h2 className="text-3xl font-black mb-10 text-center tracking-tight">Potencial de Lucro Mensal 💰</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {RPM_ESTIMATES.map((item, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 text-center hover:bg-white/10 transition-all cursor-default">
                <p className="text-white/40 text-xs uppercase font-black tracking-[0.2em] mb-4">{item.views} Views</p>
                <p className="text-4xl font-black text-white mb-2">{item.total}</p>
                <div className="inline-block px-3 py-1 bg-indigo-500/20 rounded-full">
                  <p className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest">RPM: {item.rpm}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Storytelling Section */}
        <section className="w-full grid md:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">Pare de perder tempo editando do zero.</h2>
              <p className="text-lg text-white/50 leading-relaxed">
                Nós já fizemos o trabalho duro. Selecionamos os 60.000 melhores momentos de podcasts, filmes e séries que o algoritmo ama.
              </p>
              <div className="space-y-4">
                {["Viralização Garantida", "Edição de Alta Retenção", "Suporte VIP no WhatsApp"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="bg-green-500/20 p-1 rounded-full"><svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg></div>
                    <span className="font-bold text-white/80">{item}</span>
                  </div>
                ))}
              </div>
           </div>
           <div className="glass-card p-6 rounded-[3rem] border-white/5 bg-gradient-to-br from-indigo-500/5 to-transparent">
              <h3 className="text-center text-xs font-black uppercase tracking-widest text-white/30 mb-6">Escalabilidade do Método</h3>
              <RevenueChart />
           </div>
        </section>

        {/* Pricing & CTA Section */}
        <section id="checkout" className="w-full max-w-xl text-center space-y-12 py-16 scroll-mt-32">
          <div className="glass-card p-12 rounded-[3.5rem] border-white/20 shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-600 px-8 py-2 rounded-full font-black text-xs tracking-[0.2em] uppercase shadow-xl animate-pulse">
              Promoção por Tempo Limitado
            </div>

            <div className="space-y-6 pt-6">
              <p className="text-white/30 text-2xl line-through font-bold">R$ 97,00</p>
              <div className="flex flex-col items-center">
                <span className="text-xs text-indigo-400 font-black uppercase tracking-[0.3em] mb-2">Acesso Vitalício por</span>
                <div className="flex items-start">
                  <span className="text-2xl font-black mt-2 mr-1 text-white/50">R$</span>
                  <p className="text-8xl md:text-9xl font-black text-white tracking-tighter">12</p>
                  <span className="text-2xl font-black mt-2 ml-1 text-white/50">,00</span>
                </div>
              </div>
              <p className="text-white/40 text-sm font-medium">Ou em até 3x no cartão de crédito</p>
            </div>

            <div className="mt-12 space-y-8">
              <button 
                onClick={handlePurchase}
                className="w-full py-7 rounded-[2rem] bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-black text-2xl shadow-[0_20px_50px_rgba(79,70,229,0.4)] hover:shadow-[0_25px_60px_rgba(79,70,229,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                OBTER MEU ACESSO AGORA
              </button>
              
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-3 text-white/40 bg-black/20 px-6 py-3 rounded-2xl border border-white/5">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.9L10 1.55l7.834 3.35a1 1 0 01.666.92v6.57a8 8 0 01-2.924 6.223L10 21l-5.576-2.387A8 8 0 011.5 12.39V5.82a1 1 0 01.666-.92zM10 3.125L4.5 5.5v5.89c0 3.354 1.777 6.47 4.75 8.084 2.973-1.614 4.75-4.73 4.75-8.084V5.5L10 3.125zM10 7a1 1 0 011 1v2.586l1.707 1.707a1 1 0 01-1.414 1.414l-2-2A1 1 0 019 11V8a1 1 0 011-1z" clipRule="evenodd"/></svg>
                  <span className="text-[10px] uppercase tracking-widest font-black">Pagamento Seguro & Acesso Imediato</span>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Oferta encerra em:</p>
                  <Timer />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Posting Tips Section (Below Price) */}
        <section className="w-full space-y-12 py-10 border-t border-white/5">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Estratégia de Viralização 🚀</h2>
            <p className="text-white/40 text-lg">O que fazer após baixar os vídeos do pack:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {POSTING_TIPS.map((tip, idx) => (
              <div key={idx} className="glass-card p-8 rounded-[2rem] border-white/5 hover:border-white/20 transition-all flex items-start space-x-6 group">
                <div className="bg-indigo-500/20 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 font-black text-indigo-300 text-xl group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-black text-xl mb-2 text-white/90">{tip.title}</h3>
                  <p className="text-base text-white/50 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success & Reviews (Below Tips) */}
        <section className="w-full space-y-16 py-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black tracking-tight">O que dizem os alunos 🏆</h2>
            <div className="flex flex-col items-center gap-2">
              <StarRating rating={5} />
              <span className="text-white/50 font-black text-sm uppercase tracking-widest">Baseado em +1,240 avaliações</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="glass-card p-10 rounded-[2.5rem] border-indigo-500/10 flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-500 group">
                <div>
                  <div className="flex items-center space-x-5 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-black text-white text-xl shadow-lg group-hover:rotate-6 transition-transform">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-black text-xl text-white">{t.name}</p>
                      <p className="text-xs text-white/30 font-bold tracking-widest">{t.handle}</p>
                    </div>
                    <div className="ml-auto scale-90 md:scale-100">
                      <StarRating rating={t.rating} />
                    </div>
                  </div>
                  <p className="text-white/70 italic text-lg leading-relaxed mb-8">"{t.text}"</p>
                </div>
                <div className="bg-green-500/10 px-6 py-4 rounded-2xl border border-green-500/20 self-start">
                   <p className="text-[10px] text-green-500/60 font-black uppercase tracking-[0.2em] mb-1">Ganhos de 30 dias</p>
                   <p className="text-green-400 font-black text-2xl">{t.earnings}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-10">
            <button 
              onClick={handlePurchase}
              className="px-12 py-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-[2rem] font-black text-xl transition-all shadow-2xl active:scale-95"
            >
              EU QUERO ESSES RESULTADOS
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full text-center text-white/20 text-[10px] py-20 space-y-6 border-t border-white/5 uppercase tracking-[0.2em] font-bold">
          <div className="flex justify-center space-x-10 opacity-60">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Ajuda</a>
          </div>
          <div className="space-y-2 opacity-40">
            <p>© 2024 ViralPack Pro. Todos os direitos reservados.</p>
            <p className="max-w-xl mx-auto normal-case tracking-normal font-medium leading-relaxed">
              Os resultados podem variar de pessoa para pessoa. Este produto não garante lucros. O sucesso depende da aplicação constante do método e das diretrizes das redes sociais.
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;
