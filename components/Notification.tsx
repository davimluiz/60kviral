
import React, { useState, useEffect } from 'react';
import { NAMES } from '../constants';

interface NotificationProps {
  onPurchase: () => void;
}

const Notification: React.FC<NotificationProps> = ({ onPurchase }) => {
  const [visible, setVisible] = useState(false);
  const [currentName, setCurrentName] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const showNotification = () => {
      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      const time = Math.floor(Math.random() * 5) + 1;
      setCurrentName(name);
      setCurrentTime(`${time} minutos`);
      
      // Incrementa o contador global no momento exato da aparição
      onPurchase();
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    const interval = setInterval(() => {
      showNotification();
    }, 12000); // Intervalo levemente menor para mais dinamismo

    // Primeira notificação
    const initialTimeout = setTimeout(showNotification, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, [onPurchase]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 md:bottom-10 left-4 z-[100] animate-fade-in-up">
      <div className="glass-card px-5 py-4 rounded-2xl flex items-center space-x-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/20 bg-[#121212]/90 backdrop-blur-xl">
        <div className="relative">
          <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse" />
          <div className="absolute inset-0 bg-green-500 w-3 h-3 rounded-full animate-ping opacity-75" />
        </div>
        <div className="text-sm">
          <p className="font-black text-white">🚀 {currentName} acabou de adquirir!</p>
          <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Acesso liberado há {currentTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
