
import React, { useState, useEffect } from 'react';
import { NAMES } from '../constants';

const Notification: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentName, setCurrentName] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const showNotification = () => {
      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      const time = Math.floor(Math.random() * 5) + 1;
      setCurrentName(name);
      setCurrentTime(`${time} minutos`);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    const interval = setInterval(() => {
      showNotification();
    }, 15000);

    // Show initial one
    setTimeout(showNotification, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-bounce transition-all duration-500">
      <div className="glass-card px-4 py-3 rounded-2xl flex items-center space-x-3 shadow-2xl border border-white/20">
        <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse" />
        <div className="text-sm">
          <p className="font-bold text-white">🔥 {currentName} acabou de comprar</p>
          <p className="text-white/60 text-xs">há {currentTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
