
import React, { useState, useCallback } from 'react';
import Notification from './components/Notification';
import RevenueChart from './components/RevenueChart';
import Timer from './components/Timer';
import { PAINS, SOLUTIONS, PACK_DETAILS, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  // Iniciando com mais de 10k vendas conforme solicitado
  const [salesCount, setSalesCount] = useState(12487);

  const handlePurchase = () => {
    window.location.href = "https://www.ggcheckout.com/checkout/v3/eSKziUwx9NVwQDG3ERFl";
  };

  const incrementSales = useCallback(() => {
    setSalesCount(prev => prev + 1);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center selection:bg-pink-500/30">
      <Notification onPurchase={incrementSales} />

      {/* HEADER / HERO SECTION */}
      <header className="w-full max-w-4xl px-6 pt-16 pb-10 text-center space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 border border-cyan/30 rounded-full bg-cyan/5">
             <span className="relative flex h-2 w-2 mr-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
             </span>
             <span className="text-[10px] font-black tracking-[0.2em] uppercase text-cyan">Sistema de Entrega Automática Ativo</span>
          </div>

          {/* CONTADOR DE VENDAS DINÂMICO */}
          <div className="glass-card px-6 py-2 rounded-2xl border-white/10 flex items-center space-x-3">
            <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Vendas hoje:</span>
            <span className="text-xl font-black italic text-white tabular-nums">
              {salesCount.toLocaleString('pt-BR')}
            </span>
            <span className="text-green-500 text-[10px] font-black animate-pulse">+1</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
          CONTEÚDO PRONTO PARA <br />
          <span className="text-glow-pink italic" style={{color: '#FE2C55'}}>POSTAR E CRESCER</span> <br />
          NO TIKTOK
        </h1>

        <p className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed font-medium">
          Pare de perder tempo criando do zero. Tenha acesso a 60.000+ vídeos virais e monetize sua conta sem precisar aparecer.
        </p>

        <div className="pt-4">
          <button 
            onClick={handlePurchase}
            className="tiktok-button px-14 py-7 text-white font-black text-2xl rounded-full uppercase tracking-tighter shadow-[0_0_50px_rgba(254,44,85,0.4)]"
          >
            Obter meu acesso agora
          </button>
          <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mt-6">
            🔓 Acesso imediato enviado para o seu e-mail
          </p>
        </div>
      </header>

      {/* PAIN SECTION */}
      <section className="w-full max-w-4xl px-6 py-20 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">O que te impede de lucrar?</h2>
          <p className="text-white/40 max-w-md mx-auto">Milhares de pessoas desistem porque cometem esses erros:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PAINS.map((pain, i) => (
            <div key={i} className="glass-card p-10 rounded-[2.5rem] border-l-8 border-pink-500 group hover:translate-x-2 transition-all duration-300">
              <span className="text-5xl block mb-6 filter grayscale group-hover:grayscale-0 transition-all">{pain.icon}</span>
              <h3 className="text-2xl font-black mb-3 uppercase italic tracking-tighter">{pain.title}</h3>
              <p className="text-white/50 text-base leading-relaxed font-medium">{pain.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION / PRODUCT SECTION */}
      <section className="w-full bg-gradient-to-b from-white/5 to-transparent py-32 flex flex-col items-center border-y border-white/5">
        <div className="max-w-4xl w-full px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
              A Solução de <span className="text-cyan italic">Crescimento Rápido</span>
            </h2>
            <div className="space-y-6">
              {SOLUTIONS.map((sol, i) => (
                <div key={i} className="flex items-start space-x-5">
                  <div className="mt-1 w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-cyan text-xs font-black">✓</div>
                  <div>
                    <h4 className="font-black text-xl uppercase italic tracking-tighter">{sol.title}</h4>
                    <p className="text-white/40 text-sm font-medium">{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-8 rounded-[3rem] relative animate-float border-cyan/20 shadow-[0_0_80px_rgba(37,244,238,0.1)]">
             <div className="absolute -top-4 -right-4 bg-cyan text-black font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-widest shadow-xl">Algoritmo Validado</div>
             <RevenueChart />
             <div className="mt-8 flex items-center justify-between">
                <p className="text-[10px] uppercase font-black tracking-[0.2em] text-white/30 italic">Escala de Ganhos</p>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" style={{animationDelay: `${i*0.2}s`}} />)}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU RECEIVE */}
      <section className="w-full max-w-4xl px-6 py-28 text-center space-y-16">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter italic">O Pack Completo</h2>
          <p className="text-white/40">Tudo o que você precisa em um só lugar:</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {PACK_DETAILS.map((detail, i) => (
            <div key={i} className="flex items-center space-x-5 bg-[#121212] p-6 rounded-3xl border border-white/5 hover:border-pink-500/30 transition-colors group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 flex items-center justify-center text-pink-500 font-black group-hover:scale-110 transition-transform">#</div>
              <span className="font-black uppercase italic tracking-tighter text-lg">{detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING & GUARANTEE */}
      <section id="checkout" className="w-full max-w-2xl px-6 py-24 text-center space-y-12">
        <div className="glass-card p-12 rounded-[4rem] border-pink-500/40 relative shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-pink-500 px-10 py-3 rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-2xl animate-bounce">Aproveite Agora</div>
          
          <div className="space-y-2 mb-10">
            <p className="text-white/20 line-through text-3xl font-black italic uppercase">R$ 197,00</p>
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-black uppercase text-cyan tracking-[0.5em] mb-4">Apenas 12 parcelas de</span>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-7xl md:text-9xl font-black text-white italic tracking-tighter leading-none">R$ 12</span>
                <span className="text-2xl font-black text-white/50 italic">,00</span>
              </div>
            </div>
          </div>

          <button 
            onClick={handlePurchase}
            className="tiktok-button w-full py-8 rounded-[2.5rem] text-white font-black text-3xl uppercase italic tracking-tighter shadow-2xl active:scale-95"
          >
            Garantir meu acesso
          </button>

          <div className="flex flex-col items-center mt-10 space-y-6">
             <div className="flex items-center space-x-3 text-white/40 uppercase font-black text-[10px] tracking-widest">
               <span>🔥 {salesCount.toLocaleString('pt-BR')} pessoas já compraram</span>
             </div>
             <div className="flex flex-col items-center space-y-2">
               <span className="text-[10px] uppercase font-black text-pink-500 tracking-[0.3em]">Link expira em:</span>
               <Timer />
             </div>
          </div>
        </div>

        {/* GUARANTEE */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white/5 p-10 rounded-[3rem] border border-white/5">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-4xl shadow-lg">🛡️</div>
          <div className="text-left space-y-2">
             <h4 className="font-black text-2xl uppercase italic tracking-tighter">7 Dias de Garantia Total</h4>
             <p className="text-white/40 text-base font-medium leading-relaxed">Você testa o pack. Se não viralizar ou se não gostar, devolvemos cada centavo sem perguntas.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-20 border-t border-white/5 text-center text-white/20 text-[10px] uppercase font-black tracking-[0.4em] space-y-8">
        <div className="flex justify-center space-x-8">
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
        <div className="space-y-4">
          <p>© 2024 Viral Pack Pro - Conteúdo Estratégico</p>
          <p className="normal-case tracking-normal opacity-40 px-6 max-w-xl mx-auto font-medium">
            Resultados dependem da aplicação constante. Não temos vínculo oficial com TikTok ou Meta Inc.
          </p>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 md:hidden z-[90] bg-gradient-to-t from-black to-transparent">
         <button 
            onClick={handlePurchase}
            className="tiktok-button w-full py-5 rounded-2xl text-white font-black text-xl uppercase italic tracking-tighter shadow-2xl"
         >
           Quero baixar agora
         </button>
      </div>
    </div>
  );
};

export default App;
