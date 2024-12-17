"use client";

import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const translations: string[] = [
  "नमस्ते",
  "வணக்கம்",
  "హలో",
  "ഹലോ",
  "ಹಲೋ",
  "নমস্কাৰ",
  "નમસ્તે",
  "ਹੈਲੋ",
  "ନମସ୍କାର",
  "ہیلو",
  "नमः",
  "سلام",
  "হ্যালো",
  "नमस्कार",
  "හෙලෝ",
  "ᱥᱟᱹᱨᱮᱸᱞ",
];

const getRandomColor = () => {
  const colors = [
    "#F87171",
    "#FACC15",
    "#34D399",
    "#60A5FA",
    "#F472B6",
    "#FBBF24",
    "#A78BFA",
    "#FB7185",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Background: React.FC = () => {
  const marqueeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    marqueeRefs.current.forEach((el, index) => {
      if (el) {
        el.innerHTML += el.innerHTML;

        const itemWidth = el.scrollWidth / 2;

        const speeds = [16, 24, 12];
        const directions = [-1, 1, -1];

        gsap.fromTo(
          el,
          { x: directions[index] === 1 ? -itemWidth : 0 },
          {
            x: directions[index] === 1 ? 0 : -itemWidth,
            duration: speeds[index],
            repeat: -1,
            ease: "linear",
            yoyo: false,
          },
        );
      }
    });
  }, []);

  return (
    <div className="absolute flex h-screen w-screen flex-col overflow-hidden bg-black text-white">
      {Array(3)
        .fill(0)
        .map((_, idx) => (
          <div
            key={idx}
            className="relative flex w-1/2 overflow-hidden whitespace-nowrap text-9xl font-extrabold opacity-10"
            style={{
              top: `${15 + idx * 2}%`,
              justifyContent: idx % 2 === 0 ? "flex-start" : "flex-start",
            }}
          >
            <div
              //@ts-ignore
              ref={(el) => (marqueeRefs.current[idx] = el)}
              className="flex"
              style={{
                flexDirection: idx % 2 === 0 ? "row" : "row",
              }}
            >
              {translations.map((word, i) => (
                <span
                  key={i}
                  style={{
                    color: getRandomColor(),
                    marginRight: Math.random() * 10 + "px",
                    marginLeft: Math.random() * 10 + "px",
                    animationDelay: Math.random() * 10 + "s",
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Background;
