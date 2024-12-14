"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Keyboard from "../components/Keyboard";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      gsap.to(".kbm", {
        opacity: 0,
        display: "none",
        duration: 1,
      });
    }, 10000);
  }, [window.onload]);

  return (
    <>
      <div className="kbm absolute z-50 flex h-screen w-screen items-center justify-center bg-orange-200">
        <Keyboard />
      </div>
      <section className="flex h-screen items-center justify-center">
        <div className="flex flex-row items-center space-x-8">
          <div className="relative z-10 flex flex-col">
            <h1 className="fname title -translate-x-16">MANASI</h1>
            <h1 className="lname title translate-x-16">MEHTA</h1>
          </div>
          <div className="image absolute left-[55%] h-96 w-52"></div>
        </div>
      </section>
    </>
  );
}
