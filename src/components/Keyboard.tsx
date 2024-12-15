"use client";
import { gsap } from "gsap";
import { useEffect } from "react";
import TypewriterComponent from "typewriter-effect";
const Keyboard = () => {
  const keys = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ];

  const targetKeys = "NAMASTE".split("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const keyElements = document.querySelectorAll(".key");

      targetKeys.forEach((char, index) => {
        const targetKey = Array.from(keyElements).find(
          (key) => key.textContent === char,
        );

        if (targetKey) {
          gsap.to(targetKey, {
            backgroundColor: "rgb(254 ,215, 170)",
            duration: 0.2,
            delay: index * 0.5 + 1,
            repeat: 1,
            yoyo: true,
          });
        }
      });
    }
  }, []);

  return (
    <div>
      <div className="kbm-title flex flex-col items-center justify-center">
        <TypewriterComponent
          options={{
            strings: ["NAMASTE"],
            autoStart: true,
            loop: false,
            delay: 450,
            deleteSpeed: 0,
            cursor: "|",
          }}
        />
      </div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="mb-3 grid grid-cols-10 gap-3">
          {keys.slice(0, 10).map((key, index) => (
            <div
              key={index}
              className="key cursor-pointer rounded-lg border border-gray-300 bg-white p-3 text-center font-bold"
            >
              {key}
            </div>
          ))}
        </div>
        <div className="mb-2 grid grid-cols-10 gap-3">
          {keys.slice(10, 20).map((key, index) => (
            <div
              key={index}
              className="key cursor-pointer rounded-lg border border-gray-300 bg-white p-3 text-center font-bold"
            >
              {key}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-6 gap-3">
          {keys.slice(20).map((key, index) => (
            <div
              key={index}
              className="key cursor-pointer rounded-lg border border-gray-300 bg-white p-3 text-center font-bold"
            >
              {key}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
