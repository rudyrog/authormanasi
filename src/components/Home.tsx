"use client";
import { gsap } from "gsap";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".content-container", {
      scale: 1,
      opacity: 1,
      duration: 1.8,
      borderRadius: "0",
      width: "100vw",
      height: "100vh",
      padding: "0",
    }).to(".transition-container", {
      opacity: 0,
      duration: 1,
      visibility: "hidden",
    });
  });

  setTimeout(() => {
    gsap.fromTo(
      "#mansi",
      { x: "0" },
      { x: "-25%", display: "block", duration: 1, delay: 1 },
    );
    gsap.fromTo(
      "#mehta",
      { x: "0%" },
      { x: "10%", display: "block", duration: 1, delay: 1 },
    );
  }, 1000);

  if (!isMounted) {
    return <div className="fixed inset-0 bg-black" style={{ zIndex: 99999 }} />;
  }

  return (
    <>
      <div
        className="transition-container fixed inset-0 flex items-center justify-center bg-black"
        style={{ zIndex: 99999 }}
      >
        <button className="content-container brownbulgary relative flex cursor-pointer items-center justify-center rounded-full border border-transparent bg-orange-200/10 px-20 py-16 text-orange-300/90 backdrop-blur-md md:text-9xl">
          Namaste
        </button>
      </div>

      <section className="flex h-[80vh] items-center justify-center">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-8">
          <div className="relative z-10 mt-10 flex flex-col text-center md:text-left">
            <h1
              id="mansi"
              className="fname title -translate-x-16 text-3xl font-bold tracking-wide sm:text-5xl md:text-6xl lg:text-9xl"
            >
              MANASI
            </h1>
            <h1
              id="mehta"
              className="lname title translate-x-16 text-3xl font-bold tracking-wide sm:text-5xl md:text-6xl lg:text-9xl"
            >
              MEHTA
            </h1>
          </div>
          <div className="image absolute right-0 top-36 h-36 w-36 -translate-x-14 md:left-[55%] md:top-72 md:h-56 md:w-60" />
        </div>
      </section>
    </>
  );
}
