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
      gsap.fromTo(
        ".alert",
        {
          y: "100%",
          duration: 1,
        },
        { y: "0", duration: 1, delay: 2 },
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
      <section className="flex h-[80vh] items-center justify-center">
        <div className="flex flex-row items-center space-x-8">
          <div className="relative z-10 flex flex-col">
            <h1 id="mansi" className="fname title -translate-x-16">
              MANASI
            </h1>
            <h1 id="mehta" className="lname title translate-x-16">
              MEHTA
            </h1>
          </div>
          <div className="image absolute right-0 top-36 h-36 w-36 -translate-x-14 md:left-[55%] md:top-52 md:h-56 md:w-60"></div>
        </div>
      </section>
    </>
  );
}
