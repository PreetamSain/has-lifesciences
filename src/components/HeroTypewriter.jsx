import React, { useState, useEffect } from 'react';

const DEFAULT_WORDS = [
  'NEXT.',
  'INNOVATION.',
  'PURITY.',
  'SCALE.',
  'DISCOVERY.'
];

export default function HeroTypewriter({ words = DEFAULT_WORDS }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('NEXT.');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    // 1. Hold for ~2 seconds when word is fully typed
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000); // 2 seconds reading time with blinking cursor
      return () => clearTimeout(pauseTimer);
    }

    // 2. Typing Forward
    if (!isDeleting) {
      if (text.length < currentWord.length) {
        const typeTimer = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, 110); // Natural realistic typing cadence (~110ms per char)
        return () => clearTimeout(typeTimer);
      } else {
        // Finished typing word -> pause
        setIsPaused(true);
      }
    } 
    // 3. Deleting / Backspacing Backward
    else {
      if (text.length > 0) {
        const deleteTimer = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, 50); // Crisp backspace (~50ms per char)
        return () => clearTimeout(deleteTimer);
      } else {
        // Completely cleared -> move to next variation
        const nextWordTimer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 350); // Pause before next word starts typing
        return () => clearTimeout(nextWordTimer);
      }
    }
  }, [text, isDeleting, isPaused, wordIndex, words]);

  return (
    <span className="inline-flex items-baseline relative min-h-[0.9em]">
      <span className="text-gradient-blue">{text}</span>
      <span 
        className="inline-block w-[3px] sm:w-[5px] md:w-[6px] lg:w-[8px] h-[0.75em] ml-2.5 sm:ml-3.5 bg-[#00D2FF] shadow-[0_0_15px_#00D2FF] animate-pulse self-center shrink-0" 
        aria-hidden="true"
      />
    </span>
  );
}
