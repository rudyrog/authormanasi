"use client";

import { gsap } from "gsap";
import React, { useEffect, useState } from "react";

const translations: string[] = [
  "नमस्ते", // Hindi
  "வணக்கம்", // Tamil
  "హలో", // Telugu
  "ഹലോ", // Malayalam
  "ಹಲೋ", // Kannada
  "नमस्कार", // Marathi
  "হ্যালো", // Bengali
  "નમસ્તે", // Gujarati
  "ਹੈਲੋ", // Punjabi
  "ନମସ୍କାର", // Odia
  "নমস্কাৰ", // Assamese
  "ہیلو", // Urdu
  "नमः", // Sanskrit
  "نمستے", // Urdu (alternative script)
  "سلام", // Persian (used in some Indian regions)
  "हाय", // Marathi (informal)
  "නමස්කාරය", // Sinhala
  "ᱥᱟᱹᱨᱮᱞ", // Santali
];

interface Position {
  left: number;
  top: number;
}

const Background: React.FC = () => {
  const [currentWords, setCurrentWords] = useState<string[]>([]);

  //@ts-ignore
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    const updateWords = () => {
      const randomWords: string[] = [];
      const usedIndices = new Set<number>();
      while (randomWords.length < 10) {
        const randomIndex = Math.floor(Math.random() * translations.length);
        if (!usedIndices.has(randomIndex)) {
          usedIndices.add(randomIndex);
          randomWords.push(translations[randomIndex]);
        }
      }
      setCurrentWords(randomWords);
    };

    updateWords();

    const animateWords = () => {
      tl.to(".greeting-word", { opacity: 1, duration: 0.5, stagger: 0.3 })
        .to(".greeting-word", { opacity: 0, duration: 0.5, stagger: 0.3 })
        .call(() => {
          updateWords();
          animateWords();
        });
    };

    animateWords();

    return () => tl.kill();
  }, []);

  const getRandomPosition = (existingPositions: Position[]): Position => {
    const safeZoneWidth = window.innerWidth * 0.8;
    const safeZoneHeight = window.innerHeight * 0.2;
    let left: number;
    let top: number;
    let attempts = 0;

    while (attempts < 100) {
      attempts++;

      if (Math.random() < 0.5) {
        left = Math.random() * (window.innerWidth - safeZoneWidth);
      } else {
        left =
          Math.random() * (window.innerWidth - safeZoneWidth) + safeZoneWidth;
      }

      if (Math.random() < 0.5) {
        top = Math.random() * (window.innerHeight - safeZoneHeight);
      } else {
        top =
          Math.random() * (window.innerHeight - safeZoneHeight) +
          safeZoneHeight;
      }

      const newPosition: Position = { left, top };

      if (!existingPositions.some((pos) => isOverlapping(pos, newPosition))) {
        return newPosition;
      }
    }

    return {
      left: Math.random() * window.innerWidth,
      top: Math.random() * window.innerHeight,
    };
  };

  const isOverlapping = (pos1: Position, pos2: Position): boolean => {
    const size = { width: 100, height: 50 };

    return !(
      pos1.left > pos2.left + size.width ||
      pos1.left + size.width < pos2.left ||
      pos1.top > pos2.top + size.height ||
      pos1.top + size.height < pos2.top
    );
  };

  return (
    <div className="absolute flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 flex items-center justify-center">
        {currentWords.map((word, index) => {
          const existingPositions: Position[] = currentWords
            .slice(0, index)
            .map((_, i) => ({
              left: parseFloat(
                //@ts-ignore
                document.querySelectorAll(".greeting-word")[i]?.style.left ||
                  "0",
              ),
              top: parseFloat(
                //@ts-ignore
                document.querySelectorAll(".greeting-word")[i]?.style.top ||
                  "0",
              ),
            }));

          const { left, top } = getRandomPosition(existingPositions);

          return (
            <div
              key={index}
              className="greeting-word absolute z-50 text-2xl font-semibold text-white/50 opacity-0"
              style={{
                left: `${left}px`,
                top: `${top}px`,
              }}
            >
              {word}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Background;
