import React, { useState, useEffect } from 'react';

const WORDS = [
  'NEXT.',
  'SCALE.',
  'PURITY.',
  'FUTURE.',
  'IMPACT.'
];

export default function HeroTypewriter({ words = WORDS }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('NEXT.');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    // 1. Hold for 2 seconds with blinking white cursor when word is complete
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000); // 2 seconds hold
      return () => clearTimeout(pauseTimer);
    }

    // 2. Typing Forward
    if (!isDeleting) {
      if (text.length < currentWord.length) {
        const typeTimer = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, 110); // Natural typing rhythm ~110ms per char
        return () => clearTimeout(typeTimer);
      } else {
        setIsPaused(true);
      }
    } 
    // 3. Deleting Backward (Backspace)
    else {
      if (text.length > 0) {
        const deleteTimer = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, 50); // Crisp backspace ~50ms per char
        return () => clearTimeout(deleteTimer);
      } else {
        const nextWordTimer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 250); // Short breath before typing next word
        return () => clearTimeout(nextWordTimer);
      }
    }
  }, [text, isDeleting, isPaused, wordIndex, words]);

  return (
    <span className="inline-flex items-center whitespace-nowrap align-baseline">
      <span className="text-gradient-blue">{text || '\u200B'}</span>
      <span 
        className="inline-block w-[3px] sm:w-[4px] md:w-[6px] lg:w-[7px] h-[0.75em] ml-2 sm:ml-3 md:ml-4 bg-white shadow-[0_0_15px_#ffffff] animate-pulse self-center shrink-0" 
        aria-hidden="true"
      />
    </span>
  );
}
