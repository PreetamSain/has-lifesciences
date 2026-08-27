import React, { useState, useEffect, useRef } from 'react';

export default function TypewriterText({ text, isActive, speed = 8 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (!isActive) {
      setDisplayedText('');
      setIsTyping(false);
      return;
    }

    setDisplayedText('');
    setIsTyping(true);
    let index = 0;

    timerRef.current = setInterval(() => {
      index += 1;
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
      } else {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setIsTyping(false);
      }
    }, speed);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, text, speed]);

  if (!isActive) return null;

  return (
    <div className="mt-4 font-telegraf text-slate-300 text-base sm:text-lg leading-relaxed pt-4 border-t border-white/10">
      <span>{displayedText}</span>
      {isTyping && (
        <span className="inline-block w-2 h-4 ml-1.5 bg-[#00D2FF] shadow-[0_0_10px_#00D2FF] animate-pulse align-middle" />
      )}
    </div>
  );
}
