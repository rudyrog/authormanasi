"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Keyboard from "../components/Keyboard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  // GSAP effect (running animation)
  useEffect(() => {
    setTimeout(() => {
      gsap.to(".kbm", {
        y: "-100%",
        display: "none",
        duration: 1,
      });
      gsap.fromTo(
        "#mansi",
        {
          x: "0",
          duration: 1,
        },
        {
          x: "-25%",
          display: "block",
          duration: 1,
          delay: 1,
        },
      );
      gsap.fromTo(
        "#mehta",
        {
          x: "0%",
          duration: 1,
        },
        {
          x: "10%",
          display: "block",
          duration: 1,
          delay: 1,
        },
      );
    }, 5000);
  }, [window]);

  return (
    <>
      <div
        style={{ zIndex: 99999 }}
        className="kbm absolute flex h-screen w-screen items-center justify-center bg-orange-200"
      >
        <Keyboard />
      </div>
      <section className="flex h-[80vh] items-center justify-center overflow-y-hidden md:h-screen">
        <div className="flex flex-row items-center space-x-8">
          <div className="relative z-10 flex flex-col">
            <h1 id="mansi" className="fname title -translate-x-16">
              MANASI
            </h1>
            <h1 id="mehta" className="lname title translate-x-16">
              MEHTA
            </h1>
          </div>
          <div className="image absolute left-[55%] top-52 z-0 h-56 w-52"></div>
        </div>
      </section>
    </>
  );
}
