"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isPhone = window.innerWidth <= 768;
      gsap.to(".socials", {
        left: isPhone ? "-500%" : "-120%",
        ease: "power1.out",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: isPhone ? "+=250%" : "+=400%",
          scrub: 1.5,
        },
      });

      gsap.to(".socials-content", {
        left: isPhone ? "-200%" : "-130%",
        ease: "power1.out",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: isPhone ? "+=250%" : "+=250%",
          scrub: 1.5,
        },
      });
    }
  }, [window]);

  return (
    <div className="flex min-h-[300vh] items-center md:min-h-[300vh]">
      <h1
        className="socials fodo fixed left-5 top-1/2 -translate-y-1/2 transform font-bold text-orange-200"
        style={{
          fontSize: "36rem",
          letterSpacing: "1.2rem",
          whiteSpace: "nowrap",
        }}
      >
        SOCIALS
      </h1>

      <div className="socials-content fixed left-0 top-0 z-40 h-screen w-[300vw]">
        <div className="translate-x-0 translate-y-[100%] scale-75 text-white md:translate-x-[10%] md:scale-100">
          <div className="card flex w-fit items-center justify-center">
            <Link
              href="https://www.facebook.com/share/12FXr8mxH1A/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-7xl"
            >
              Facebook
            </Link>
          </div>
        </div>

        <div className="translate-x-20 translate-y-[160%] scale-75 text-3xl text-white md:translate-x-[20%] md:scale-100">
          <div className="card flex w-fit items-center justify-center">
            <Link
              href="https://www.instagram.com/manasi_n_mehta"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-7xl"
            >
              Instagram
            </Link>
          </div>
        </div>

        <div className="translate-x-60 translate-y-[200%] scale-75 text-3xl text-white md:translate-x-[35%] md:translate-y-[-100%] md:scale-100">
          <div className="card flex w-fit items-center justify-center">
            <Link
              href="https://mail.google.com/mail/?view=cm&to=mansi28november@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-7xl"
            >
              Email
            </Link>
          </div>
        </div>

        <div className="translate-x-80 translate-y-[250%] scale-75 text-3xl text-white md:translate-x-[45%] md:translate-y-[-90%] md:scale-100">
          <div className="card flex w-fit items-center justify-center">
            <Link
              href="https://www.linkedin.com/in/manasi-mehta-41abb9189"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-7xl"
            >
              Linkedin
            </Link>
          </div>
        </div>
        <div className="translate-x-[35rem] translate-y-[-100%] scale-75 text-3xl text-white md:translate-x-[55%] md:scale-100">
          <div className="card flex w-fit items-center justify-center">
            <Link href="/devs" className="mx-3 text-7xl">
              Developers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
