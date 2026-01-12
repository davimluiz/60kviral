
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
    console.log("Redirecionando para checkout...");
    window.location.href = "https://checkout.exemplo.com.br/viral-pack-cortes";
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center">
      {/* Sticky Urgency Header */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-md pointer-events-none">
        <div className="glass-card px-6 py-3 rounded-2xl flex items-center justify-between border-rose-500/30 shadow-[0_0_20px_rgba(225,29,72,0.2)] pointer-events-auto">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-rose-500 rounded-full animate-ping" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-tighter text-rose-200">Oferta Expira em:</span>
          </div>
          <Timer />
        </div>
      </div>

      {/* Dynamic Background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full -z-10" />

      <Notification />

      <main className="max-w-4xl w-full px-6 py-24 flex flex-col items-center gap-16 md:py-32">
        
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full glass-card border-indigo-500/30 text-indigo-300 text-sm font-semibold tracking-wide uppercase mb-4">
             Monetização Acelerada
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Domine o TikTok com <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              60.000 Vídeos de Cortes
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            O pack definitivo de vídeos prontos para você aproveitar o RPM do TikTok e faturar alto sem aparecer.
          </p>
          <button 
            onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all font-bold"
          >
            Aproveitar Promoção ↓
          </button>
        </section>

        {/* RPM Demonstration Section */}
        <section className="w-full glass-card rounded-3xl p-8 md:p-10 border-indigo-500/20">
          <h2 className="text-2xl font-bold mb-8 text-center text-indigo-100">O Poder do RPM no TikTok 💸</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RPM_ESTIMATES.map((item, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center hover:scale-105 transition-transform">
                <p className="text-white/50 text-sm uppercase font-bold tracking-widest">{item.views} Visualizações</p>
                <p className="text-3xl font-black mt-2 text-indigo-400">{item.total}</p>
                <p className="text-xs text-white/30 mt-1">Baseado em RPM de {item.rpm}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Storytelling & Growth Section */}
        <section className="w-full glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-white/30 transition-all">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Escalando de Zero a Milhões</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Fazer cortes manualmente leva horas. Nosso pack entrega <strong>60.000 vídeos validados</strong> para você focar apenas em postar e coletar os dólares do RPM. <br/><br/>
                Crie múltiplos canais em nichos diferentes e multiplique seus ganhos com apenas 15 minutos por dia.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-green-500/20 px-4 py-2 rounded-xl border border-green-500/50">
                  <span className="text-green-400 font-bold">Lucro Passivo</span>
                </div>
                <div className="bg-indigo-500/20 px-4 py-2 rounded-xl border border-indigo-500/50">
                  <span className="text-indigo-400 font-bold">Sem Aparecer</span>
                </div>
              </div>
            </div>
            <div className="bg-black/20 rounded-2xl p-4 border border-white/5">
              <h3 className="text-sm font-semibold text-white/50 uppercase text-center mb-2 font-mono">Crescimento Acumulado (Simulado)</h3>
              <RevenueChart />
            </div>
          </div>
        </section>

        {/* Pricing & CTA Section */}
        <section id="checkout" className="w-full max-w-xl text-center space-y-10 py-12 scroll-mt-24">
          <div className="glass-card p-10 rounded-[2.5rem] border-white/30 shadow-2xl relative bg-white/5">
            
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-rose-600 px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase shadow-lg border border-rose-400/50 animate-pulse">
              ⚠️ Oferta de Lançamento
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-white/50 text-xl line-through">De R$ 97,00</p>
              <div className="flex flex-col items-center">
                <span className="text-sm text-indigo-300 font-bold uppercase">Acesso Imediato por</span>
                <p className="text-6xl md:text-8xl font-black text-white">R$ 12,00</p>
              </div>
              <p className="text-indigo-200/70 font-medium italic mt-4 px-4">
                "O investimento mais barato para o seu primeiro canal monetizado"
              </p>
            </div>

            <div className="mt-10">
              <button 
                onClick={handlePurchase}
                className="w-full py-6 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-black text-2xl shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:shadow-[0_0_50px_rgba(79,70,229,0.8)] transition-all transform hover:scale-105 active:scale-95 animate-pulse-slow"
              >
                QUERO MEUS 60K VÍDEOS
              </button>
              
              <div className="mt-8 flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2 text-white/40">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                  <span className="text-xs uppercase tracking-widest font-bold">Entrega Imediata no E-mail</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Posting Tips Section (Below Price) */}
        <section className="w-full space-y-8 py-8 border-t border-white/5">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Dicas para Bombar seus Cortes 📈</h2>
            <p className="text-white/50">Siga este guia simples após baixar os vídeos do pack.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {POSTING_TIPS.map((tip, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border-white/10 hover:border-white/30 transition-all flex items-start space-x-4">
                <div className="bg-indigo-500/30 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-bold text-indigo-300">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{tip.title}</h3>
                  <p className="text-sm text-white/60">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success & Reviews (Below Tips with Star Ratings) */}
        <section className="w-full space-y-8 py-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Avaliações de Clientes 🏆</h2>
            <div className="flex justify-center items-center space-x-2">
              <StarRating rating={5} />
              <span className="text-white/60 font-bold">4.9/5 (1,240 avaliações)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="glass-card p-8 rounded-3xl border-indigo-500/10 flex flex-col justify-between hover:border-indigo-500/30 transition-all">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-bold text-white">{t.name}</p>
                      <p className="text-xs text-white/40">{t.handle}</p>
                    </div>
                    <div className="ml-auto">
                      <StarRating rating={t.rating} />
                    </div>
                  </div>
                  <p className="text-white/80 italic leading-relaxed mb-6">"{t.text}"</p>
                </div>
                <div className="bg-green-500/10 px-4 py-2 rounded-xl border border-green-500/30 self-start">
                   <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Ganhos declarados</p>
                   <p className="text-green-400 font-black text-xl">{t.earnings}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-8">
            <button 
              onClick={handlePurchase}
              className="px-10 py-5 bg-indigo-500 hover:bg-indigo-600 rounded-2xl font-black text-xl transition-all shadow-xl transform hover:scale-105"
            >
              QUERO MEUS 60K VÍDEOS TAMBÉM
            </button>
          </div>
        </section>

        {/* Footer info */}
        <footer className="w-full text-center text-white/30 text-xs py-8 space-y-4 border-t border-white/5">
          <div className="flex justify-center space-x-6 opacity-50 font-bold uppercase tracking-widest">
            <span>Privacidade</span>
            <span>Termos</span>
            <span>Suporte</span>
          </div>
          <p>© 2024 ViralPack Clips. O maior acervo de cortes do Brasil.</p>
          <p className="max-w-md mx-auto">Este site não tem vínculo com o TikTok Inc. Resultados de monetização dependem exclusivamente da performance do seu canal e cumprimento das diretrizes da plataforma.</p>
        </footer>

      </main>
    </div>
  );
};

export default App;
