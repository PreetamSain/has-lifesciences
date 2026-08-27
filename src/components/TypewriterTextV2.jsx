import React, { useState, useEffect } from 'react';

export default function TypewriterTextV2({ text, speed = 12, className = '' }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsDone(false);
    
    if (!text) return;

    let index = 0;
    const interval = setInterval(() => {
      index++;
      setDisplayedText(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={`inline ${className}`}>
      {displayedText}
      {!isDone && (
        <span className="inline-block w-2 h-4 ml-1 bg-[#1566F3] animate-pulse align-middle" />
      )}
    </span>
  );
}
